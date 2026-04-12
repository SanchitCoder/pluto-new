import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { existsSync } from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Ensure popup video exists in public so production (Vercel) can serve it
    {
      name: 'check-crisis-video',
      buildStart() {
        const videoPath = path.resolve(process.cwd(), 'public', 'Crisis-Video.mp4');
        if (!existsSync(videoPath)) {
          console.warn(
            '[build] public/Crisis-Video.mp4 not found – popup video will 404 in production. Add the file and commit it.'
          );
        }
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'motion-vendor': ['framer-motion'],
        },
      },
    },
  },
});
