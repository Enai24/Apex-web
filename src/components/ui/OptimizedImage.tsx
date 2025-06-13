import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean; // For above-the-fold images
  sizes?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '100vw',
  loading = 'lazy',
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate optimized image URLs for different formats
  const generateOptimizedSrc = (originalSrc: string, format: 'avif' | 'webp' | 'original') => {
    // For Unsplash images, add format and quality parameters
    if (originalSrc.includes('unsplash.com')) {
      const url = new URL(originalSrc);
      
      switch (format) {
        case 'avif':
          url.searchParams.set('fm', 'avif');
          url.searchParams.set('q', '85');
          break;
        case 'webp':
          url.searchParams.set('fm', 'webp');
          url.searchParams.set('q', '85');
          break;
        default:
          url.searchParams.set('q', '85');
      }
      
      // Add responsive sizing
      if (width) url.searchParams.set('w', width.toString());
      if (height) url.searchParams.set('h', height.toString());
      
      // Enable auto optimization
      url.searchParams.set('auto', 'format,compress');
      url.searchParams.set('fit', 'crop');
      
      return url.toString();
    }
    
    return originalSrc;
  };

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Add preload hint for priority images
  useEffect(() => {
    if (priority && !hasError) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = generateOptimizedSrc(src, 'webp');
      link.type = 'image/webp';
      if (sizes) link.setAttribute('imagesizes', sizes);
      document.head.appendChild(link);

      return () => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      };
    }
  }, [src, priority, sizes, hasError]);

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={`Failed to load image: ${alt}`}
      >
        <span className="text-gray-500 text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <picture className={`block ${className}`}>
      {/* AVIF format for modern browsers */}
      <source 
        srcSet={generateOptimizedSrc(src, 'avif')}
        type="image/avif"
        sizes={sizes}
      />
      
      {/* WebP format for wider browser support */}
      <source 
        srcSet={generateOptimizedSrc(src, 'webp')}
        type="image/webp"
        sizes={sizes}
      />
      
      {/* Fallback to original format */}
      <img
        ref={imgRef}
        src={generateOptimizedSrc(src, 'original')}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        decoding="async"
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          // Prevent layout shift
          aspectRatio: width && height ? `${width}/${height}` : undefined,
        }}
      />
      
      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <div 
          className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`}
          style={{ width, height }}
          aria-hidden="true"
        />
      )}
    </picture>
  );
};

export default OptimizedImage; 