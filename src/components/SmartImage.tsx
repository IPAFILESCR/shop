import { useState } from "react";

interface SmartImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  eager?: boolean;
  sizes?: string;
}

export function SmartImage({
  src,
  alt,
  width,
  height,
  className,
  eager = false,
  sizes,
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
      decoding={eager ? "sync" : "async"}
      {...({ fetchpriority: eager ? "high" : "low" } as Record<string, string>)}
      className={[eager ? "eager" : "lazy", className].filter(Boolean).join(" ")}
      onError={() => setFailed(true)}
      draggable={false}
    />
  );
}
