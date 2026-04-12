# PowerShell script to re-encode video with FFmpeg
# Make sure FFmpeg is installed before running this script

Write-Host "Starting video re-encoding..." -ForegroundColor Green

# Check if FFmpeg is available
$ffmpegPath = Get-Command ffmpeg -ErrorAction SilentlyContinue
if (-not $ffmpegPath) {
    Write-Host "ERROR: FFmpeg is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install FFmpeg from https://ffmpeg.org/download.html" -ForegroundColor Yellow
    Write-Host "Or use Chocolatey: choco install ffmpeg" -ForegroundColor Yellow
    exit 1
}

# Check if source video exists
$sourceVideo = "Pluto_Landing-video.mp4"
if (-not (Test-Path $sourceVideo)) {
    Write-Host "ERROR: Source video not found: $sourceVideo" -ForegroundColor Red
    Write-Host "Looking for video in current directory..." -ForegroundColor Yellow
    exit 1
}

# Create backup of original
$backupPath = "Pluto_Landing-video-backup.mp4"
if (-not (Test-Path $backupPath)) {
    Write-Host "Creating backup of original video..." -ForegroundColor Yellow
    Copy-Item $sourceVideo $backupPath
}

# Re-encode video
Write-Host "Re-encoding video with H.264 codec..." -ForegroundColor Green
Write-Host "This may take several minutes depending on video size..." -ForegroundColor Yellow

$outputPath = "public\Pluto_Landing-video.mp4"

# Run FFmpeg command
$ffmpegCommand = "ffmpeg -i `"$sourceVideo`" -c:v libx264 -profile:v baseline -level 3.0 -c:a aac -b:a 128k -movflags +faststart -y `"$outputPath`""

Write-Host "Running: $ffmpegCommand" -ForegroundColor Cyan
Invoke-Expression $ffmpegCommand

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nSUCCESS: Video re-encoded successfully!" -ForegroundColor Green
    Write-Host "Output file: $outputPath" -ForegroundColor Green
    
    # Show file sizes
    $originalSize = (Get-Item $sourceVideo).Length / 1MB
    $newSize = (Get-Item $outputPath).Length / 1MB
    Write-Host "`nOriginal size: $([math]::Round($originalSize, 2)) MB" -ForegroundColor Cyan
    Write-Host "New size: $([math]::Round($newSize, 2)) MB" -ForegroundColor Cyan
} else {
    Write-Host "`nERROR: Video re-encoding failed!" -ForegroundColor Red
    Write-Host "Exit code: $LASTEXITCODE" -ForegroundColor Red
    exit 1
}






