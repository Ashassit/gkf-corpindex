import React, { useState } from "react";

interface ImageWithFallbackProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src?: string | null; // override with null allowed
}

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

export function ImageWithFallback({
  src,
  alt,
  className,
  style,
  ...rest
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);

  const safeSrc = src && src.trim() !== "" ? src : null;

  if (!safeSrc || didError) {
    return (
      <img
        src={ERROR_IMG_SRC}
        alt={alt ?? "Error loading image"}
        className={className}
        style={style}
        {...rest}
      />
    );
  }

  return (
    <img
      src={safeSrc}
      alt={alt}
      onError={() => setDidError(true)}
      className={className}
      style={style}
      {...rest}
    />
  );
}
