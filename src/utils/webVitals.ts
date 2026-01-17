// Core Web Vitals monitoring utility
// Targets: LCP < 2.5s, CLS < 0.1, INP < 200ms

export interface WebVitalsMetrics {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
}

// Core Web Vitals thresholds (March 2024 standards)
const THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 }, // Largest Contentful Paint (ms)
  CLS: { good: 0.1, poor: 0.25 },  // Cumulative Layout Shift
  INP: { good: 200, poor: 500 },   // Interaction to Next Paint (ms)
  FCP: { good: 1800, poor: 3000 }, // First Contentful Paint (ms)
  TTFB: { good: 800, poor: 1800 }  // Time to First Byte (ms)
};

// Rate performance metrics
function rateMetric(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = THRESHOLDS[name as keyof typeof THRESHOLDS];
  if (!threshold) return 'good';
  
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

// Simple metric reporter
function reportMetric(metric: WebVitalsMetrics) {
  console.log(`[Core Web Vitals] ${metric.name}: ${metric.value}${metric.name === 'CLS' ? '' : 'ms'} (${metric.rating})`);
  
  // Alert for poor metrics
  if (metric.rating === 'poor') {
    console.warn(`⚠️ Poor ${metric.name} performance detected!`);
  }
  
  // Send to analytics in production
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      custom_map: { rating: metric.rating }
    });
  }
}

// Monitor Largest Contentful Paint (LCP)
function observeLCP() {
  if (!('PerformanceObserver' in window)) return;

  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    
    if (lastEntry) {
      const metric: WebVitalsMetrics = {
        name: 'LCP',
        value: lastEntry.startTime,
        rating: rateMetric('LCP', lastEntry.startTime),
        timestamp: Date.now()
      };
      
      reportMetric(metric);
    }
  });

  try {
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  } catch (e) {
    console.warn('LCP monitoring not supported');
  }
}

// Monitor Cumulative Layout Shift (CLS)
function observeCLS() {
  if (!('PerformanceObserver' in window)) return;

  let clsValue = 0;
  let sessionValue = 0;
  let sessionEntries: PerformanceEntry[] = [];

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
             if (!(entry as any).hadRecentInput) {
        const firstSessionEntry = sessionEntries[0];
        const lastSessionEntry = sessionEntries[sessionEntries.length - 1];

        if (sessionValue && 
            entry.startTime - lastSessionEntry.startTime < 1000 &&
            entry.startTime - firstSessionEntry.startTime < 5000) {
          sessionValue += (entry as any).value;
          sessionEntries.push(entry);
        } else {
          sessionValue = (entry as any).value;
          sessionEntries = [entry];
        }

        if (sessionValue > clsValue) {
          clsValue = sessionValue;
          
          const metric: WebVitalsMetrics = {
            name: 'CLS',
            value: clsValue,
            rating: rateMetric('CLS', clsValue),
            timestamp: Date.now()
          };
          
          reportMetric(metric);
        }
      }
    }
  });

  try {
    observer.observe({ entryTypes: ['layout-shift'] });
  } catch (e) {
    console.warn('CLS monitoring not supported');
  }
}

// Monitor Interaction to Next Paint (INP)
function observeINP() {
  if (!('PerformanceObserver' in window)) return;

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'event') {
        const duration = (entry as any).processingEnd - entry.startTime;
        
        if (duration > 16) { // Above 60fps threshold
          const metric: WebVitalsMetrics = {
            name: 'INP',
            value: duration,
            rating: rateMetric('INP', duration),
            timestamp: Date.now()
          };
          
          reportMetric(metric);
        }
      }
    }
  });

  try {
    observer.observe({ entryTypes: ['event'] });
  } catch (e) {
    console.warn('INP monitoring not supported');
  }
}

// Monitor Time to First Byte (TTFB)
function measureTTFB() {
  if (!window.performance || !window.performance.timing) return;

  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (navigation) {
      const ttfb = navigation.responseStart - navigation.requestStart;
      
      const metric: WebVitalsMetrics = {
        name: 'TTFB',
        value: ttfb,
        rating: rateMetric('TTFB', ttfb),
        timestamp: Date.now()
      };
      
      reportMetric(metric);
    }
  });
}

// Preload critical resources for better LCP
export function preloadCriticalResources() {
  if (typeof window === 'undefined') return;

  const criticalImages = [
    'https://images.unsplash.com/photo-1639322537138-5e513100b36e?fm=webp&w=540&h=540&q=85&auto=format,compress&fit=crop',
  ];

  const fonts = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
  ];

  // Preload hero images
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.type = 'image/webp';
    document.head.appendChild(link);
  });

  // Preload fonts
  fonts.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    document.head.appendChild(link);
  });
}

// Initialize Core Web Vitals monitoring
export function initWebVitals() {
  if (typeof window === 'undefined') return;

  // Set up monitoring
  observeLCP();
  observeCLS();
  observeINP();
  measureTTFB();

  // Preload critical resources
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadCriticalResources);
  } else {
    preloadCriticalResources();
  }

  console.log('Core Web Vitals monitoring initialized');
}

// Global gtag declaration
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
} 