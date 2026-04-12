@echo off
REM Batch script to re-encode video with FFmpeg
REM Make sure FFmpeg is installed before running this script

echo Starting video re-encoding...

REM Check if FFmpeg is available
where ffmpeg >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: FFmpeg is not installed or not in PATH
    echo Please install FFmpeg from https://ffmpeg.org/download.html
    echo Or use Chocolatey: choco install ffmpeg
    pause
    exit /b 1
)

REM Check if source video exists
if not exist "Pluto_Landing-video.mp4" (
    echo ERROR: Source video not found: Pluto_Landing-video.mp4
    echo Looking for video in current directory...
    pause
    exit /b 1
)

REM Create backup of original
if not exist "Pluto_Landing-video-backup.mp4" (
    echo Creating backup of original video...
    copy "Pluto_Landing-video.mp4" "Pluto_Landing-video-backup.mp4"
)

REM Re-encode video
echo Re-encoding video with H.264 codec...
echo This may take several minutes depending on video size...

ffmpeg -i "Pluto_Landing-video.mp4" -c:v libx264 -profile:v baseline -level 3.0 -c:a aac -b:a 128k -movflags +faststart -y "public\Pluto_Landing-video.mp4"

if %ERRORLEVEL% EQU 0 (
    echo.
    echo SUCCESS: Video re-encoded successfully!
    echo Output file: public\Pluto_Landing-video.mp4
) else (
    echo.
    echo ERROR: Video re-encoding failed!
    echo Exit code: %ERRORLEVEL%
    pause
    exit /b 1
)

pause






