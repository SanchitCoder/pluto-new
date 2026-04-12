# Luna AI Chatbot Setup Guide

## Overview
Luna AI is an intelligent chatbot integrated into the Pluto Travels website. It provides customer support through both text and voice inputs, processing queries via an n8n workflow webhook.

## Features

### 1. **Text Input**
- Type messages directly into the chat interface
- Press Enter to send or click the send button
- Real-time message display with typing indicators

### 2. **Voice Input**
- Click the microphone button to start recording
- Speak your query
- Click again to stop recording and send
- Audio is sent to the webhook for processing

### 3. **Voice Output**
- Automatic playback of voice responses from n8n
- Custom audio player with play/pause controls
- Progress bar showing audio duration and current position
- Visual indicators for voice messages
- Support for multiple audio formats (MP3, WAV, OGG, WebM)

### 4. **Modern UI**
- Glassmorphism design matching Pluto Travels brand colors
- Gradient backgrounds (Teal → Navy → Dark Blue)
- Smooth animations and transitions
- Responsive chat bubbles
- Online status indicator
- Floating action button with pulse effect

## Configuration

### Environment Variable
Add your n8n webhook URL to the `.env` file:

```env
VITE_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/luna-ai
```

## n8n Webhook Setup

### Expected Webhook Input
The chatbot sends data as `FormData` with the following fields:

```javascript
{
  text: string,        // User's message text
  userId: string,      // Unique user identifier (format: "user_TIMESTAMP")
  audio?: Blob         // Audio file (only for voice messages, format: webm)
}
```

### Expected Webhook Response
Your n8n workflow can return responses in multiple formats:

**Text Response (JSON):**
```json
{
  "response": "Luna's reply to the user"
}
```

**Text Response (Alternative JSON):**
```json
{
  "message": "Luna's reply to the user"
}
```

**Voice Response (Audio File):**
- Return audio file directly with `Content-Type: audio/*` header
- Supported formats: MP3, WAV, OGG, WebM
- Audio will be automatically played when received

**Voice Response (JSON with Audio URL):**
```json
{
  "response": "Luna's reply to the user",
  "audioUrl": "https://example.com/audio-file.mp3"
}
```

### Sample n8n Workflow Structure

1. **Webhook Trigger**
   - Method: POST
   - Response Mode: Wait for response
   - Accept: multipart/form-data

2. **Process Input**
   - Extract text and audio from form data
   - If audio exists, transcribe it using a service like:
     - OpenAI Whisper API
     - Google Speech-to-Text
     - AssemblyAI

3. **Query Processing**
   - Send the text query to your AI model (OpenAI, Claude, etc.)
   - Include context about Pluto Travels services
   - Process travel-related queries

4. **Response**
   - Format the AI response as JSON
   - Return with status 200

### Example n8n Workflow (Simplified)

```
Webhook → Extract Data → Transcribe Audio (if exists) →
Query AI Model → Format Response → Return JSON
```

## Voice Message Processing

### Audio Format
- **Type**: audio/webm
- **Encoding**: Opus codec
- **File Name**: voice.webm

### Recommended Transcription Services
1. **OpenAI Whisper API** (Recommended)
   - High accuracy
   - Supports multiple languages
   - Easy integration

2. **Google Cloud Speech-to-Text**
   - Excellent accuracy
   - Real-time processing

3. **AssemblyAI**
   - Simple API
   - Good accuracy

## Usage

### For Users
1. Click the Luna AI button in the bottom-right corner
2. Type a message or click the microphone to speak
3. Receive instant responses from Luna
4. Continue the conversation naturally

### Example Queries
- "What are the best travel packages to Dubai?"
- "Tell me about your visa services"
- "I need help planning a honeymoon trip"
- "What's included in the Maldives package?"
- "Do you offer travel insurance?"

## Customization

### Branding
The chatbot colors match Pluto Travels brand:
- **Primary Gradient**: Teal → Navy → Dark Blue
- **User Messages**: Coral → Orange gradient
- **Accent Colors**: Emerald green for online status

### Personality
Luna is designed to be:
- Professional yet friendly
- Knowledgeable about travel
- Quick to respond
- Helpful and informative

## Technical Details

### Component Structure
```
LunaAIChatButton.tsx    // Floating button with tooltip
  └── LunaAIChat.tsx    // Main chat interface
      └── AudioPlayer   // Custom audio player component
```

### Audio Player Features
- **Auto-play**: Voice responses automatically start playing
- **Play/Pause Controls**: Manual control over audio playback
- **Progress Bar**: Visual indication of audio progress
- **Time Display**: Shows current time and total duration
- **Responsive Design**: Adapts to chat interface layout
- **Memory Management**: Automatic cleanup of audio URLs

### State Management
- Messages stored in local state
- No persistence (resets on page reload)
- Can be extended to use localStorage or database

### Browser Compatibility
- **Voice Recording**: Requires browser with MediaRecorder API
- **Modern Browsers**: Chrome, Edge, Firefox, Safari (latest versions)
- **Permissions**: Microphone access required for voice input

## Troubleshooting

### Webhook URL Not Configured
**Symptom**: Warning message appears in chat footer
**Solution**: Add `VITE_N8N_WEBHOOK_URL` to `.env` file

### Voice Recording Not Working
**Symptom**: Error accessing microphone
**Solution**:
- Check browser permissions
- Ensure HTTPS (required for microphone access)
- Allow microphone access when prompted

### No Response from Luna
**Symptom**: Message sent but no reply
**Solution**:
- Verify webhook URL is correct
- Check n8n workflow is active
- Ensure workflow returns proper JSON format
- Check browser console for errors

### CORS Issues
**Symptom**: Request blocked by CORS policy
**Solution**: Configure n8n webhook to allow CORS:
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

## Future Enhancements

### Potential Features
- [ ] Chat history persistence with Supabase
- [ ] User authentication integration
- [ ] Multi-language support
- [ ] File attachments (images, documents)
- [ ] Suggested quick replies
- [ ] Typing indicators from Luna
- [ ] Chat ratings and feedback
- [ ] Export chat transcript
- [ ] Voice output (Text-to-Speech)
- [ ] Rich media responses (cards, images)

## Support

For issues or questions about Luna AI:
1. Check the troubleshooting section
2. Verify n8n webhook configuration
3. Test webhook independently using Postman/cURL
4. Check browser console for error messages

## License
Part of Pluto Travels website - All rights reserved
