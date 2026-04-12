import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Mic, MicOff, Loader2, Bot, User, Play, Pause, Volume2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'luna';
  timestamp: Date;
  audioUrl?: string;
  audioBlob?: Blob;
}

interface LunaAIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AudioPlayerProps {
  audioUrl: string;
  autoPlay?: boolean;
  className?: string;
  onAudioRef?: (audio: HTMLAudioElement | null) => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl, autoPlay = false, className = '', onAudioRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Check if this is a TTS audio URL
  const isTTS = audioUrl.startsWith('tts://');

  useEffect(() => {
    // Register audio element with parent for cleanup
    if (onAudioRef && audioRef.current) {
      onAudioRef(audioRef.current);
    }

    if (isTTS) {
      // For TTS, we don't need audio element handling
      if (autoPlay) {
        setIsPlaying(true);
        // TTS is already playing via speechSynthesis
        setTimeout(() => setIsPlaying(false), 3000); // Approximate duration
      }
      return;
    }

    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    if (autoPlay) {
      audio.play().then(() => setIsPlaying(true)).catch(console.error);
    }

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
      // Unregister audio element
      if (onAudioRef) {
        onAudioRef(null);
      }
    };
  }, [audioUrl, autoPlay, isTTS, onAudioRef]);

  const togglePlayPause = async () => {
    if (isTTS) {
      // For TTS, toggle speech synthesis
      if (isPlaying) {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
      } else {
        const text = audioUrl.replace('tts://', '');
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.onend = () => setIsPlaying(false);
        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);
      }
      return;
    }

    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 ${className}`}>
      {!isTTS && (
        <audio 
          ref={audioRef} 
          src={audioUrl} 
          preload="metadata"
          onError={(e) => {
            console.error('Audio loading error:', e);
            console.error('Audio URL:', audioUrl);
          }}
          onLoadStart={() => console.log('Audio loading started')}
          onLoadedData={() => console.log('Audio data loaded')}
          onCanPlay={() => console.log('Audio can play')}
        />
      )}
      
      <button
        onClick={togglePlayPause}
        className="w-10 h-10 bg-gradient-to-br from-primary-teal to-primary-navy text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all"
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
      </button>

      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <Volume2 size={14} className="text-primary-teal" />
          <span className="text-xs text-gray-600">
            {isTTS ? 'Text-to-Speech' : 'Voice Response'}
          </span>
          {audioUrl && !isTTS && (
            <span className="text-xs text-gray-400">
              ({audioUrl.substring(0, 20)}...)
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-gray-200 rounded-full h-1.5 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary-teal to-primary-navy transition-all duration-300"
              style={{ width: isTTS ? (isPlaying ? '100%' : '0%') : (duration ? `${(currentTime / duration) * 100}%` : '0%') }}
            />
          </div>
          <span className="text-xs text-gray-500 min-w-[35px]">
            {isTTS ? (isPlaying ? 'Speaking...' : 'Ready') : `${formatTime(currentTime)} / ${formatTime(duration)}`}
          </span>
        </div>
      </div>
    </div>
  );
};

const LunaAIChat: React.FC<LunaAIChatProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m Pluto AI, your AI travel assistant. How can I help you plan your perfect journey today?',
      sender: 'luna',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [textWebhookUrl] = useState(import.meta.env.VITE_N8N_TEXT_WEBHOOK_URL || 'https://n8n.srv981435.hstgr.cloud/webhook/luna');
  const [voiceWebhookUrl] = useState(import.meta.env.VITE_N8N_VOICE_WEBHOOK_URL || 'https://n8n.srv981435.hstgr.cloud/webhook/luna');

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const abortControllerRef = useRef<AbortController | null>(null);
  const activeAudioRefs = useRef<Set<HTMLAudioElement>>(new Set());

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Cleanup function to stop all ongoing processes
  const cleanupAllProcesses = () => {
    console.log('Cleaning up all processes...');
    
    // Stop any ongoing webhook requests
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    
    // Stop speech synthesis
    window.speechSynthesis.cancel();
    
    // Stop all active audio elements
    activeAudioRefs.current.forEach(audio => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    });
    activeAudioRefs.current.clear();
    
    // Stop recording if active
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
    
    // Stop loading state
    setIsLoading(false);
  };

  // Enhanced close handler with cleanup
  const handleClose = () => {
    cleanupAllProcesses();
    onClose();
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Cleanup when chat is closed
  useEffect(() => {
    if (!isOpen) {
      cleanupAllProcesses();
    }
  }, [isOpen]);

  // Cleanup audio URLs when component unmounts
  useEffect(() => {
    return () => {
      messages.forEach(message => {
        if (message.audioUrl && message.audioUrl.startsWith('blob:')) {
          URL.revokeObjectURL(message.audioUrl);
        }
      });
    };
  }, []);

  const convertTextToSpeech = async (text: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      try {
        // Use Web Speech API for text-to-speech
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Configure speech settings
        utterance.rate = 0.9;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;
        utterance.lang = 'en-US';
        
        // Try to find a good voice
        const voices = window.speechSynthesis.getVoices();
        const voice = voices.find(v => v.lang.startsWith('en') && v.name.includes('Female')) || 
                     voices.find(v => v.lang.startsWith('en')) || 
                     voices[0];
        
        if (voice) {
          utterance.voice = voice;
        }
        
        utterance.onend = () => {
          console.log('Text-to-speech completed');
          // For now, we'll use the browser's built-in TTS and return a placeholder
          // The actual audio will be played by the browser's speech synthesis
          resolve('tts://' + text); // Special marker for TTS
        };
        
        utterance.onerror = (error) => {
          console.error('Text-to-speech error:', error);
          reject(error);
        };
        
        // Start speaking
        window.speechSynthesis.speak(utterance);
        
      } catch (error) {
        console.error('Text-to-speech setup failed:', error);
        reject(error);
      }
    });
  };

  const sendToWebhook = async (text: string, audioBlob?: Blob) => {
    setIsLoading(true);

    // Create new AbortController for this request
    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    try {
      // Choose webhook URL based on input type
      const webhookUrl = audioBlob ? voiceWebhookUrl : textWebhookUrl;
      
      console.log('Input type:', audioBlob ? 'VOICE' : 'TEXT');
      console.log('Using webhook URL:', webhookUrl);
      console.log('Text webhook URL:', textWebhookUrl);
      console.log('Voice webhook URL:', voiceWebhookUrl);
      
      if (!webhookUrl) {
        throw new Error(`Webhook URL not configured for ${audioBlob ? 'voice' : 'text'} input`);
      }

      const formData = new FormData();
      formData.append('text', text);
      formData.append('userId', 'user_' + Date.now());

      if (audioBlob) {
        formData.append('audio', audioBlob, 'voice.webm');
        console.log('Sending audio blob:', audioBlob.size, 'bytes, type:', audioBlob.type);
      } else {
        console.log('Sending text only:', text);
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        body: formData,
        signal: abortController.signal,
      });

      if (!response.ok) {
        throw new Error('Webhook request failed');
      }

      // Check if response is audio or JSON
      const contentType = response.headers.get('content-type') || '';
      const contentLength = response.headers.get('content-length');
      let lunaResponse = 'I apologize, but I encountered an issue processing your request. Please try again.';
      let audioUrl: string | undefined;

      console.log('Response Content-Type:', contentType);
      console.log('Response Content-Length:', contentLength);

      // Check if response is audio (multiple ways to detect)
      const isAudioResponse = contentType.includes('audio/') || 
                             contentType.includes('audio/mpeg') ||
                             contentType.includes('application/octet-stream') ||
                             contentType.includes('video/') ||
                             (contentLength && parseInt(contentLength) > 1000 && !contentType.includes('application/json'));

      if (isAudioResponse) {
        // Handle audio response
        console.log('Processing audio response...');
        const audioBlob = await response.blob();
        console.log('Audio blob size:', audioBlob.size, 'bytes');
        console.log('Audio blob type:', audioBlob.type);
        
        if (audioBlob.size > 0) {
          audioUrl = URL.createObjectURL(audioBlob);
          lunaResponse = '🎤 Voice response received';
          console.log('Audio URL created:', audioUrl);
        } else {
          lunaResponse = '❌ Empty audio file received';
        }
      } else {
        // Handle JSON response - read the response body only once
        const responseText = await response.text();
        console.log('Response text:', responseText);
        
        try {
          const data = JSON.parse(responseText);
          console.log('JSON response:', data);
          
          // Handle n8n output format: [{"output": "response text"}]
          if (Array.isArray(data) && data.length > 0 && data[0].output) {
            lunaResponse = data[0].output;
          } else if (data.response) {
            lunaResponse = data.response;
          } else if (data.message) {
            lunaResponse = data.message;
          } else if (data.output) {
            lunaResponse = data.output;
          }

          // Check if response includes audio URL
          if (data.audioUrl || data.audio_url) {
            audioUrl = data.audioUrl || data.audio_url;
            console.log('Audio URL from JSON:', audioUrl);
          }
        } catch (jsonError) {
          console.error('Failed to parse JSON response:', jsonError);
          console.log('Response was not valid JSON, treating as text response');
          
          // Check if responseText is a valid, non-empty string
          if (responseText && responseText.trim().length > 0) {
            const trimmedText = responseText.trim();
            
            // Check if it looks like an error message, HTML, or technical error
            const isError = trimmedText.toLowerCase().includes('error') || 
                           trimmedText.toLowerCase().includes('exception') ||
                           trimmedText.toLowerCase().includes('failed') ||
                           trimmedText.toLowerCase().includes('non-json') ||
                           trimmedText.startsWith('<') ||
                           trimmedText.startsWith('<!DOCTYPE') ||
                           trimmedText.startsWith('<?xml');
            
            if (isError) {
              // It's likely HTML or an error message, show a friendly message
              lunaResponse = 'I apologize, but I encountered an issue processing your request. Please try again or contact our support team for assistance.';
            } else {
              // It's a valid text response, use it directly
              lunaResponse = trimmedText;
            }
          } else {
            // Empty or invalid response
            lunaResponse = 'I apologize, but I encountered an issue processing your request. Please try again or contact our support team for assistance.';
          }
        }
      }

      // If user sent voice input and we got text response, convert to speech
      if (audioBlob && !audioUrl && lunaResponse) {
        console.log('Converting text response to speech for voice input...');
        try {
          const speechAudioUrl = await convertTextToSpeech(lunaResponse);
          audioUrl = speechAudioUrl;
          console.log('Text-to-speech conversion successful:', audioUrl);
        } catch (ttsError) {
          console.error('Text-to-speech conversion failed:', ttsError);
          // Continue without audio if TTS fails
        }
      }

      const newMessage: Message = {
        id: Date.now().toString() + '_luna',
        text: lunaResponse,
        sender: 'luna',
        timestamp: new Date(),
        audioUrl: audioUrl,
      };

      console.log('Creating new message:', newMessage);
      console.log('Audio URL in message:', newMessage.audioUrl);
      
      setMessages((prev) => [...prev, newMessage]);
    } catch (error) {
      // Don't show error if request was aborted (chat closed)
      if (error instanceof Error && error.name === 'AbortError') {
        console.log('Webhook request was aborted (chat closed)');
        return;
      }
      
      console.error('Error sending to webhook:', error);

      const errorMessage: Message = {
        id: Date.now().toString() + '_error',
        text: 'I\'m having trouble connecting right now. Please ensure the webhook URL is configured correctly or try again later.',
        sender: 'luna',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const messageText = inputText;
    setInputText('');

    await sendToWebhook(messageText);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });

        const userMessage: Message = {
          id: Date.now().toString(),
          text: '🎤 Voice message sent',
          sender: 'user',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, userMessage]);

        await sendToWebhook('Voice message', audioBlob);

        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Unable to access microphone. Please check your browser permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed top-20 left-4 right-4 sm:top-auto sm:bottom-6 sm:left-auto sm:right-6 z-50 w-auto sm:w-[450px] md:w-[500px] h-[550px] sm:h-[600px] md:h-[700px] max-h-[75vh] sm:max-h-[80vh] md:max-h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border-2 border-gray-100"
        >
          <div className="bg-gradient-to-r from-primary-teal via-primary-navy to-luxury-darkBlue p-6 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/40">
                  <Bot size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Pluto AI</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse"></div>
                    <span className="text-xs text-white/80">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-luxury-pearl/30 to-white space-y-4">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-br from-primary-coral to-primary-orange'
                        : 'bg-gradient-to-br from-primary-teal to-primary-navy'
                    }`}
                  >
                    {message.sender === 'user' ? (
                      <User size={16} className="text-white" />
                    ) : (
                      <Bot size={16} className="text-white" />
                    )}
                  </div>
                  <div>
                    <div
                      className={`p-3 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-br from-primary-coral to-primary-orange text-white rounded-tr-sm'
                          : 'bg-white border border-gray-200 text-gray-800 rounded-tl-sm shadow-md'
                      }`}
                    >
                      {message.sender === 'luna' ? (
                        <div className="text-sm leading-relaxed markdown-content">
                          <ReactMarkdown
                            components={{
                              p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                              strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
                              ul: ({ children }) => <ul className="list-disc pl-5 my-2 space-y-1">{children}</ul>,
                              ol: ({ children }) => <ol className="list-decimal pl-5 my-2 space-y-1">{children}</ol>,
                              li: ({ children }) => <li className="ml-1">{children}</li>,
                              h1: ({ children }) => <h1 className="text-lg font-semibold mt-3 mb-2 text-gray-800">{children}</h1>,
                              h2: ({ children }) => <h2 className="text-base font-semibold mt-3 mb-2 text-gray-800">{children}</h2>,
                              h3: ({ children }) => <h3 className="text-sm font-semibold mt-2 mb-1 text-gray-800">{children}</h3>,
                              a: ({ href, children }) => <a href={href} className="text-primary-teal underline hover:text-primary-navy transition-colors" target="_blank" rel="noopener noreferrer">{children}</a>,
                              em: ({ children }) => <em className="italic">{children}</em>,
                              code: ({ children }) => <code className="bg-gray-100 px-1 py-0.5 rounded text-xs font-mono">{children}</code>,
                              blockquote: ({ children }) => <blockquote className="border-l-4 border-primary-teal pl-3 my-2 italic text-gray-700">{children}</blockquote>,
                            }}
                          >
                            {message.text}
                          </ReactMarkdown>
                        </div>
                      ) : (
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      )}
                    </div>
                    
                    {/* Audio Player for Pluto AI's voice responses */}
                    {message.sender === 'luna' && message.audioUrl && (
                      <div className="mt-3 p-2 bg-gradient-to-r from-primary-teal/10 to-primary-navy/10 rounded-lg border border-primary-teal/20">
                        <div className="text-xs text-primary-teal font-medium mb-2 flex items-center gap-2">
                          <Volume2 size={14} />
                          🎤 Voice Response
                        </div>
                        <AudioPlayer 
                          audioUrl={message.audioUrl} 
                          autoPlay={true}
                          className="max-w-full"
                          onAudioRef={(audio) => {
                            if (audio) {
                              activeAudioRefs.current.add(audio);
                            } else {
                              // This will be handled by the AudioPlayer's cleanup
                            }
                          }}
                        />
                      </div>
                    )}
                    
                    {/* Debug info for audio */}
                    {message.sender === 'luna' && message.audioUrl && (
                      <div className="mt-1 text-xs text-gray-400">
                        Audio URL: {message.audioUrl.substring(0, 30)}...
                      </div>
                    )}
                    
                    <p className={`text-xs text-gray-400 mt-1 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-teal to-primary-navy rounded-full flex items-center justify-center">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary-teal rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary-teal rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-primary-teal rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 sm:p-4 bg-white border-t-2 border-gray-200 shadow-lg">
            <div className="flex items-end gap-2 sm:gap-3">
              <div className="flex-1 relative">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="w-full p-3 sm:p-4 pr-12 bg-gray-50 text-gray-900 placeholder:text-gray-500 border-2 border-gray-300 rounded-xl sm:rounded-2xl focus:border-primary-teal focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-teal/20 resize-none transition-all text-sm sm:text-base shadow-sm"
                  rows={1}
                  disabled={isLoading || isRecording}
                  style={{ minHeight: '48px' }}
                />
              </div>

              <button
                onClick={isRecording ? stopRecording : startRecording}
                disabled={isLoading}
                className={`p-3 sm:p-3.5 rounded-xl sm:rounded-2xl transition-all flex-shrink-0 shadow-md hover:shadow-lg active:scale-95 ${
                  isRecording
                    ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse shadow-red-500/50'
                    : 'bg-gradient-to-br from-primary-teal to-primary-navy hover:from-primary-teal/90 hover:to-primary-navy/90 text-white'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
                aria-label={isRecording ? 'Stop recording' : 'Start voice recording'}
              >
                {isRecording ? <MicOff size={20} className="sm:w-5 sm:h-5" /> : <Mic size={20} className="sm:w-5 sm:h-5" />}
              </button>

              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isLoading || isRecording}
                className="p-3 sm:p-3.5 bg-gradient-to-br from-primary-coral to-primary-orange hover:from-primary-coral/90 hover:to-primary-orange/90 text-white rounded-xl sm:rounded-2xl hover:shadow-lg active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 shadow-md"
                aria-label="Send message"
              >
                {isLoading ? <Loader2 size={20} className="animate-spin sm:w-5 sm:h-5" /> : <Send size={20} className="sm:w-5 sm:h-5" />}
              </button>
            </div>
            {(!textWebhookUrl || !voiceWebhookUrl) && (
              <p className="text-xs text-red-500 mt-2 px-1">
                ⚠️ Webhook URLs not configured. Add VITE_N8N_TEXT_WEBHOOK_URL and VITE_N8N_VOICE_WEBHOOK_URL to .env
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LunaAIChat;
