# Video Re-encoding Instructions

The video file `Pluto_Landing-video.mp4` needs to be re-encoded with H.264 codec for browser compatibility.

## Quick Solution

### Option 1: Install FFmpeg and Run Script

1. **Install FFmpeg:**
   - Download from: https://ffmpeg.org/download.html
   - Or use Chocolatey: `choco install ffmpeg`
   - Or use winget: `winget install ffmpeg`

2. **Run the re-encoding script:**
   - Windows: Double-click `re-encode-video.bat`
   - Or in PowerShell: `.\re-encode-video.ps1`

### Option 2: Manual FFmpeg Command

If FFmpeg is already installed, run this command in the project root:

```bash
ffmpeg -i Pluto_Landing-video.mp4 -c:v libx264 -profile:v baseline -level 3.0 -c:a aac -b:a 128k -movflags +faststart public/Pluto_Landing-video.mp4
```

### Option 3: Use HandBrake (GUI Tool)

1. Download HandBrake from: https://handbrake.fr/
2. Open the video file
3. Select "Web Optimized" preset
4. Ensure H.264 codec is selected
5. Set output to: `public/Pluto_Landing-video.mp4`
6. Start encoding

### Option 4: Online Converter

1. Use an online video converter (e.g., CloudConvert, FreeConvert)
2. Upload `Pluto_Landing-video.mp4`
3. Select output format: MP4
4. Choose codec: H.264
5. Download and replace the file in `public/Pluto_Landing-video.mp4`

## FFmpeg Command Breakdown

- `-i Pluto_Landing-video.mp4` - Input file
- `-c:v libx264` - Video codec: H.264
- `-profile:v baseline` - H.264 profile (maximum compatibility)
- `-level 3.0` - H.264 level
- `-c:a aac` - Audio codec: AAC
- `-b:a 128k` - Audio bitrate: 128kbps
- `-movflags +faststart` - Optimize for web streaming
- `public/Pluto_Landing-video.mp4` - Output file location

## Verification

After re-encoding, the video should:
- Play in all modern browsers
- Load without DEMUXER_ERROR
- Work on both business-landing and luxury-travel pages

## Notes

- The original file will be backed up as `Pluto_Landing-video-backup.mp4`
- Re-encoding may take several minutes depending on video size
- The output file will replace the existing file in the public folder






