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
      url.pathname = url.pathname.replace(/\/$/, '') + '/page/' + pageNum + '/';
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