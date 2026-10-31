interface ResponsivePictureProps {
  desktopSrc: string;
  mobileSrc?: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchpriority?: 'high' | 'low' | 'auto';
}

export function ResponsivePicture({
  desktopSrc,
  alt,
  className = '',
  loading = 'lazy',
  fetchpriority = 'auto'
}: ResponsivePictureProps) {
  return (
    <img
      src={desktopSrc}
      alt={alt}
      className={className}
      loading={loading}
      fetchPriority={fetchpriority}
    />
  );
}
