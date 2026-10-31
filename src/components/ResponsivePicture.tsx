import React, { useState } from 'react';

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

interface ResponsivePictureProps {
  mobileSrc?: string;
  tabletSrc?: string;
  desktopSrc: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
  fetchpriority?: 'high' | 'low' | 'auto';
}

export function ResponsivePicture({
  mobileSrc,
  tabletSrc,
  desktopSrc,
  alt,
  className,
  style,
  loading = 'lazy',
  fetchpriority = 'auto'
}: ResponsivePictureProps) {
  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };

  if (didError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img src={ERROR_IMG_SRC} alt="Error loading image" data-original-url={desktopSrc} />
        </div>
      </div>
    );
  }

  return (
    <picture>
      {/* Mobile: < 640px */}
      {mobileSrc && (
        <source
          media="(max-width: 639px)"
          srcSet={mobileSrc}
          type="image/webp"
        />
      )}
      
      {/* Tablet: 640px - 1023px */}
      {tabletSrc && (
        <source
          media="(min-width: 640px) and (max-width: 1023px)"
          srcSet={tabletSrc}
          type="image/webp"
        />
      )}
      
      {/* Desktop: >= 1024px */}
      <source
        media="(min-width: 1024px)"
        srcSet={desktopSrc}
        type="image/webp"
      />
      
      {/* Fallback img */}
      <img
        src={desktopSrc}
        alt={alt}
        className={className}
        style={style}
        loading={loading}
        fetchPriority={fetchpriority}
        onError={handleError}
      />
    </picture>
  );
}
