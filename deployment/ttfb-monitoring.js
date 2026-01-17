// Performance monitoring for TTFB optimization
class TTFBMonitor {
  constructor() {
    this.thresholds = {
      excellent: 200,
      good: 600,
      poor: 1000
    };
    this.init();
  }
  
  init() {
    // Monitor TTFB on page load
    if ('performance' in window && 'timing' in performance) {
      window.addEventListener('load', () => {
        this.measureTTFB();
      });
    }
    
    // Monitor navigation timing
    if ('PerformanceObserver' in window) {
      this.observeNavigation();
    }
  }
  
  measureTTFB() {
    const timing = performance.timing;
    const ttfb = timing.responseStart - timing.requestStart;
    
    console.log('TTFB:', ttfb + 'ms');
    
    // Send to analytics
    this.reportMetric('ttfb', ttfb);
    
    // Alert if TTFB is poor
    if (ttfb > this.thresholds.poor) {
      console.warn('Poor TTFB detected:', ttfb + 'ms');
      this.reportAlert('poor_ttfb', { value: ttfb });
    }
  }
  
  observeNavigation() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const ttfb = entry.responseStart - entry.requestStart;
          this.reportMetric('navigation_ttfb', ttfb);
        }
      });
    });
    
    observer.observe({ entryTypes: ['navigation'] });
  }
  
  reportMetric(name, value) {
    // Send to your analytics service
    if (window.gtag) {
      gtag('event', 'timing_complete', {
        name: name,
        value: Math.round(value)
      });
    }
    
    // Send to custom analytics
    fetch('/api/metrics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        metric: name,
        value: value,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href
      })
    }).catch(err => console.log('Metrics failed:', err));
  }
  
  reportAlert(type, data) {
    fetch('/api/alerts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        type: type,
        data: data,
        timestamp: Date.now(),
        url: window.location.href
      })
    }).catch(err => console.log('Alert failed:', err));
  }
}

// Initialize TTFB monitoring
new TTFBMonitor();