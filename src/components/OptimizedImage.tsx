import { useState, useEffect, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  displayWidth?: number;
  displayHeight?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

/**
 * Optimized image component that:
 * - Lazy loads images by default
 * - Uses Intersection Observer for better performance
 * - Prevents layout shift with explicit dimensions
 * - Reduces reflows
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  displayWidth,
  displayHeight,
  className = '',
  loading = 'lazy',
  priority = false,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority || loading === 'eager') {
      setShouldLoad(true);
      return;
    }

    // Use Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, loading]);

  // Calculate aspect ratio for placeholder
  const aspectRatio = width && height ? (height / width) * 100 : undefined;

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        width: displayWidth || width || '100%',
        height: displayHeight || height || 'auto',
        paddingBottom: aspectRatio ? `${aspectRatio}%` : undefined,
      }}
    >
      {shouldLoad ? (
        <ImageWithFallback
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          loading={loading}
        />
      ) : (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
}
