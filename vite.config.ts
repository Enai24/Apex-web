import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'configure-response-headers',
      configureServer: (server) => {
        server.middlewares.use((_req, res, next) => {
          // Security headers
          res.setHeader(
            'Content-Security-Policy',
            "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://elevenlabs.io; style-src 'self' 'unsafe-inline'; connect-src 'self' https://elevenlabs.io https://*.elevenlabs.io wss://*.elevenlabs.io; img-src 'self' data: https://*.unsplash.com https://*.elevenlabs.io; font-src 'self' data:;"
          );
          
          // Performance headers
          res.setHeader('X-Content-Type-Options', 'nosniff');
          res.setHeader('X-Frame-Options', 'DENY');
          res.setHeader('X-XSS-Protection', '1; mode=block');
          res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
          
          // HTTPS and HSTS headers for SSL security
          res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
          res.setHeader('Upgrade-Insecure-Requests', '1');
          
          // Enable HTTP/2 Server Push hints for critical resources
          res.setHeader('Link', [
            '</src/index.css>; rel=preload; as=style',
            '</src/main.tsx>; rel=preload; as=script',
            '<https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap>; rel=preload; as=style',
          ].join(', '));
          
          next();
        });
      },
    },
  ],
  build: {
    // Enable brotli compression
    rollupOptions: {
      output: {
        manualChunks: {
          // Critical vendor chunks for better caching
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['react-router-dom'],
          'vendor-icons': ['lucide-react'],
          'vendor-forms': ['react-hook-form', '@hookform/resolvers', 'zod'],
          'vendor-utils': ['clsx', 'tailwind-merge', 'date-fns'],
        },
      },
    },
    // Enable minification and compression
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
        pure_funcs: ['console.log'], // Remove specific function calls
      },
    },
    // Optimize chunk size for better Core Web Vitals
    chunkSizeWarningLimit: 500,
    // Enable source maps for better debugging while maintaining performance
    sourcemap: false, // Disable in production for better LCP
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-helmet-async',
      'react-hook-form',
      '@hookform/resolvers',
      'zod',
      'clsx',
      'tailwind-merge',
    ],
  },
  // Enable aggressive chunking for better caching
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  // Performance optimizations
  server: {
    // Enable HTTP/2 in development (set https to true with certificates for full HTTP/2 testing)
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
  // Image optimization settings
  assetsInclude: ['**/*.avif', '**/*.webp'],
});
