#!/usr/bin/env node

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 Running performance optimizations...');

// Create performance monitoring script
const performanceScript = `
// Performance monitoring and optimization
(function() {
  // Web Vitals monitoring
  function observeWebVitals() {
    // Largest Contentful Paint (LCP)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
      
      // Send to analytics if needed
      if (window.gtag) {
        gtag('event', 'web_vitals', {
          event_category: 'LCP',
          value: Math.round(lastEntry.startTime),
        });
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        console.log('FID:', entry.processingStart - entry.startTime);
        
        if (window.gtag) {
          gtag('event', 'web_vitals', {
            event_category: 'FID',
            value: Math.round(entry.processingStart - entry.startTime),
          });
        }
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      console.log('CLS:', clsValue);
      
      if (window.gtag) {
        gtag('event', 'web_vitals', {
          event_category: 'CLS',
          value: Math.round(clsValue * 1000),
        });
      }
    }).observe({ entryTypes: ['layout-shift'] });
  }

  // Image lazy loading optimization
  function optimizeImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback for older browsers
      images.forEach(img => {
        img.src = img.dataset.src;
        img.classList.remove('lazy');
      });
    }
  }

  // Preload critical resources
  function preloadCriticalResources() {
    const criticalResources = [
      { href: '/fonts/OpenAI-Sans-Regular.woff2', as: 'font', type: 'font/woff2' },
      { href: '/fonts/OpenAI-Sans-Medium.woff2', as: 'font', type: 'font/woff2' },
      { href: '/fonts/OpenAI-Sans-SemiBold.woff2', as: 'font', type: 'font/woff2' },
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }

  // Optimize third-party scripts
  function optimizeThirdPartyScripts() {
    // Defer non-critical scripts
    const scripts = document.querySelectorAll('script[data-defer]');
    scripts.forEach(script => {
      const newScript = document.createElement('script');
      newScript.src = script.dataset.src;
      newScript.async = true;
      newScript.defer = true;
      document.head.appendChild(newScript);
    });
  }

  // Service Worker registration for caching
  function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered: ', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }

  // Initialize optimizations
  function init() {
    // Run after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        optimizeImages();
        preloadCriticalResources();
        optimizeThirdPartyScripts();
        observeWebVitals();
        registerServiceWorker();
      });
    } else {
      optimizeImages();
      preloadCriticalResources();
      optimizeThirdPartyScripts();
      observeWebVitals();
      registerServiceWorker();
    }
  }

  init();
})();
`;

// Create service worker for caching
const serviceWorkerScript = `
const CACHE_NAME = 'apex-enterprises-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/fonts/OpenAI-Sans-Regular.woff2',
  '/fonts/OpenAI-Sans-Medium.woff2',
  '/fonts/OpenAI-Sans-SemiBold.woff2',
  '/logo.png',
  '/logo.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});
`;

// Write performance script
const publicDir = join(__dirname, '..', 'public');
if (!existsSync(publicDir)) {
  mkdirSync(publicDir, { recursive: true });
}

writeFileSync(join(publicDir, 'performance.js'), performanceScript);
writeFileSync(join(publicDir, 'sw.js'), serviceWorkerScript);

console.log('✅ Performance optimization files created!');
console.log('📊 Performance monitoring enabled');
console.log('🎯 Service worker configured for caching');
console.log('🖼️ Image lazy loading optimized');
console.log('⚡ Critical resources preloading enabled'); 