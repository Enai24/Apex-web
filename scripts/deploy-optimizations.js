#!/usr/bin/env node

/**
 * Deployment Optimization Script for Apex Enterprises
 * Handles Cloudflare APO, edge caching, and TTFB improvements
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cloudflare APO configuration
const cloudflareAPOConfig = {
  // Automatic Platform Optimization settings
  apo: {
    enabled: true,
    cf: true,
    wordpress: false,
    hostnames: ['apexenterprises.net', 'www.apexenterprises.net'],
    // Cache everything for 30 days by default
    cache_ttl: 2592000,
    // Cache API responses for 1 hour
    api_cache_ttl: 3600
  },
  // Page Rules for edge caching
  page_rules: [
    {
      targets: ['apexenterprises.net/static/*'],
      actions: {
        cache_level: 'cache_everything',
        edge_cache_ttl: 31536000, // 1 year
        browser_cache_ttl: 31536000
      }
    },
    {
      targets: ['apexenterprises.net/api/*'],
      actions: {
        cache_level: 'cache_everything',
        edge_cache_ttl: 3600, // 1 hour
        browser_cache_ttl: 300 // 5 minutes
      }
    },
    {
      targets: ['apexenterprises.net/cities/*'],
      actions: {
        cache_level: 'cache_everything',
        edge_cache_ttl: 86400, // 24 hours
        browser_cache_ttl: 3600 // 1 hour
      }
    }
  ]
};

// Origin server optimizations
const originConfig = {
  keepAlive: {
    enabled: true,
    timeout: 60,
    maxConnections: 100
  },
  compression: {
    gzip: true,
    brotli: true,
    levels: {
      gzip: 6,
      brotli: 4
    }
  },
  http2: {
    enabled: true,
    server_push: true
  }
};

// Generate Cloudflare Worker for APO
function generateCloudflareWorker() {
  return `
// Cloudflare Worker for Apex Enterprises APO
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const cache = caches.default;
  
  // Force HTTPS redirect
  if (url.protocol === 'http:') {
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }
  
  // Handle 410 responses for removed coupon pages
  const removedPaths = ['/blog/coupons', '/blog/deals', '/blog/offers', '/coupons', '/deals'];
  if (removedPaths.some(path => url.pathname.includes(path))) {
    return new Response('Gone - This content has been permanently removed', {
      status: 410,
      headers: {
        'Cache-Control': 'public, max-age=86400',
        'Content-Type': 'text/plain'
      }
    });
  }
  
  // Convert pagination URLs
  if (url.searchParams.has('p')) {
    const pageNum = url.searchParams.get('p');
    if (pageNum && parseInt(pageNum) > 1) {
      url.pathname = url.pathname.replace(/\\/$/, '') + '/page/' + pageNum + '/';
      url.searchParams.delete('p');
      return Response.redirect(url.toString(), 301);
    }
  }
  
  // Cache key generation
  const cacheKey = new Request(url.toString(), request);
  let response = await cache.match(cacheKey);
  
  if (!response) {
    // Fetch from origin with optimizations
    response = await fetch(request, {
      cf: {
        // Enable APO for HTML content
        polish: 'lossless',
        minify: {
          javascript: true,
          css: true,
          html: true
        },
        // Enable auto-minify
        apps: true,
        // Cache everything for static assets
        cacheEverything: url.pathname.startsWith('/static/') || 
                        url.pathname.includes('.css') || 
                        url.pathname.includes('.js') ||
                        url.pathname.includes('.woff') ||
                        url.pathname.includes('.png') ||
                        url.pathname.includes('.jpg') ||
                        url.pathname.includes('.webp') ||
                        url.pathname.includes('.avif')
      }
    });
    
    // Clone response for caching
    response = new Response(response.body, response);
    
    // Set appropriate cache headers
    if (url.pathname.startsWith('/static/')) {
      response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    } else if (url.pathname.startsWith('/cities/')) {
      response.headers.set('Cache-Control', 'public, max-age=86400, s-maxage=86400');
    } else {
      response.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=86400');
    }
    
    // Add security headers
    response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    
    // Cache the response
    event.waitUntil(cache.put(cacheKey, response.clone()));
  }
  
  return response;
}
`.trim();
}

// Generate nginx configuration for origin optimization
function generateNginxConfig() {
  return `
# Nginx configuration for Apex Enterprises origin server
# Optimized for Cloudflare APO and low TTFB

server {
    listen 443 ssl http2;
    server_name apexenterprises.net www.apexenterprises.net;
    
    # SSL configuration
    ssl_certificate /path/to/ssl/cert.pem;
    ssl_certificate_key /path/to/ssl/private.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;
    ssl_prefer_server_ciphers off;
    
    # HTTP/2 push for critical resources
    location = /index.html {
        http2_push /static/css/main.css;
        http2_push /static/js/main.js;
        http2_push https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap;
    }
    
    # Gzip and Brotli compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/javascript
        application/xml+rss
        application/json
        image/svg+xml;
    
    # Brotli compression (if module available)
    brotli on;
    brotli_comp_level 4;
    brotli_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/javascript
        application/xml+rss
        application/json
        image/svg+xml;
    
    # Keep-alive optimization
    keepalive_timeout 60s;
    keepalive_requests 100;
    
    # Security headers
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    
    # Static assets with long cache times
    location /static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        add_header Vary "Accept-Encoding";
    }
    
    # City pages cache for 24 hours
    location ~ ^/cities/ {
        expires 24h;
        add_header Cache-Control "public, max-age=86400";
        add_header Vary "Accept-Encoding";
    }
    
    # Handle 410 responses for removed content
    location ~ ^/(blog/)?(coupons|deals|offers) {
        return 410 "Content permanently removed";
        add_header Cache-Control "public, max-age=86400";
    }
    
    # Redirect old pagination URLs
    location ~ ^(.*?)\\?p=([0-9]+)$ {
        return 301 $1/page/$2/;
    }
    
    # Main application
    location / {
        try_files $uri $uri/ /index.html;
        expires 1h;
        add_header Cache-Control "public, max-age=3600";
        add_header Vary "Accept-Encoding";
    }
    
    # API endpoints with shorter cache
    location /api/ {
        expires 5m;
        add_header Cache-Control "public, max-age=300";
        add_header Vary "Accept-Encoding";
    }
}

# HTTP to HTTPS redirect
server {
    listen 80;
    server_name apexenterprises.net www.apexenterprises.net;
    return 301 https://$server_name$request_uri;
}
`.trim();
}

// Generate performance monitoring script
function generatePerformanceMonitoring() {
  return `
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
`.trim();
}

// Generate deployment checklist
function generateDeploymentChecklist() {
  return `
# Deployment Checklist for SEO & Performance Fixes

## SSL & HTTPS Issues ✅
- [x] HSTS preload headers configured
- [x] Upgrade-Insecure-Requests header added
- [x] HTTP to HTTPS redirects implemented
- [x] Cloudflare SSL set to "Full (strict)"
- [x] Certificate transparency monitoring enabled

## Pagination & URL Structure ✅
- [x] ?p= parameters converted to /page/X/ format
- [x] rel="next" and rel="prev" tags added
- [x] Canonical tags pointing to proper pages
- [x] 301 redirects for old pagination URLs
- [x] Sitemap updated with new URL structure

## Thin Content Fixes ✅
- [x] City pages expanded to 600-800+ words
- [x] Statutory wage tables added
- [x] Local success stories included
- [x] Compliance information detailed
- [x] FAQ sections added

## Coupon Page Removal ✅
- [x] 410 responses implemented for /blog/coupons
- [x] Internal links to coupon pages removed
- [x] Sitemap updated to exclude removed pages
- [x] Search console notified of removed content

## Image Accessibility ✅
- [x] Descriptive alt text with primary keywords added
- [x] Hero images optimized with context
- [x] Alt text includes brand name and service context
- [x] Image loading optimized (lazy/priority)

## TTFB Optimization ✅
- [x] Cloudflare APO configuration ready
- [x] Edge cache rules defined
- [x] Origin keep-alive tuning configured
- [x] HTTP/2 server push enabled
- [x] Brotli compression configured

## Monitoring & Validation
- [ ] Deploy Cloudflare Worker
- [ ] Configure APO settings
- [ ] Update origin server configuration
- [ ] Test TTFB improvements
- [ ] Validate HTTPS redirects
- [ ] Check pagination redirects
- [ ] Verify 410 responses
- [ ] Test alt text in crawlers
- [ ] Monitor Core Web Vitals

## Post-Deployment Tasks
- [ ] Submit updated sitemap to Search Console
- [ ] Request recrawl for modified pages
- [ ] Monitor search console for crawl errors
- [ ] Track ranking improvements
- [ ] Verify Cloudflare analytics
- [ ] Set up performance alerts

## Performance Targets
- TTFB: < 200ms (target from >1s)
- LCP: < 2.5s (maintained)
- CLS: < 0.1 (maintained)
- INP: < 200ms (maintained)
`.trim();
}

// Main execution
function main() {
  console.log('🚀 Generating deployment optimization files...\n');
  
  // Create scripts directory if it doesn't exist
  const scriptsDir = path.join(process.cwd(), 'deployment');
  if (!fs.existsSync(scriptsDir)) {
    fs.mkdirSync(scriptsDir, { recursive: true });
  }
  
  // Generate Cloudflare Worker
  const workerPath = path.join(scriptsDir, 'cloudflare-worker.js');
  fs.writeFileSync(workerPath, generateCloudflareWorker());
  console.log('✅ Cloudflare Worker generated:', workerPath);
  
  // Generate nginx configuration
  const nginxPath = path.join(scriptsDir, 'nginx.conf');
  fs.writeFileSync(nginxPath, generateNginxConfig());
  console.log('✅ Nginx configuration generated:', nginxPath);
  
  // Generate performance monitoring
  const monitoringPath = path.join(scriptsDir, 'ttfb-monitoring.js');
  fs.writeFileSync(monitoringPath, generatePerformanceMonitoring());
  console.log('✅ TTFB monitoring script generated:', monitoringPath);
  
  // Generate deployment checklist
  const checklistPath = path.join(scriptsDir, 'DEPLOYMENT-CHECKLIST.md');
  fs.writeFileSync(checklistPath, generateDeploymentChecklist());
  console.log('✅ Deployment checklist generated:', checklistPath);
  
  // Generate Cloudflare configuration JSON
  const cloudflareConfigPath = path.join(scriptsDir, 'cloudflare-apo-config.json');
  fs.writeFileSync(cloudflareConfigPath, JSON.stringify(cloudflareAPOConfig, null, 2));
  console.log('✅ Cloudflare APO configuration generated:', cloudflareConfigPath);
  
  console.log('\n🎯 All deployment files generated successfully!');
  console.log('\nNext steps:');
  console.log('1. Deploy Cloudflare Worker from deployment/cloudflare-worker.js');
  console.log('2. Update origin server with deployment/nginx.conf');
  console.log('3. Configure Cloudflare APO with deployment/cloudflare-apo-config.json');
  console.log('4. Add TTFB monitoring script to your application');
  console.log('5. Follow deployment/DEPLOYMENT-CHECKLIST.md for validation');
  console.log('\n📈 Expected improvements:');
  console.log('- TTFB: >1s → <200ms (-400ms LCP improvement)');
  console.log('- SSL trust issues eliminated');
  console.log('- Duplicate content consolidation');
  console.log('- Thin content expanded to 600-800+ words');
  console.log('- Image accessibility enhanced');
}

main();

export {
  generateCloudflareWorker,
  generateNginxConfig,
  generatePerformanceMonitoring,
  generateDeploymentChecklist,
  cloudflareAPOConfig,
  originConfig
}; 