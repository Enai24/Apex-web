import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'configure-response-headers',
      configureServer: (server) => {
        server.middlewares.use((_req, res, next) => {
          // Add Content-Security-Policy header to allow ElevenLabs scripts and inline styles
          res.setHeader(
            'Content-Security-Policy',
            "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://elevenlabs.io; style-src 'self' 'unsafe-inline'; connect-src 'self' https://elevenlabs.io https://*.elevenlabs.io wss://*.elevenlabs.io; img-src 'self' data: https://*.unsplash.com https://*.elevenlabs.io; font-src 'self' data:;"
          );
          next();
        });
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
