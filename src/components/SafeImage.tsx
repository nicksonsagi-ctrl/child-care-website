import React, { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackColor?: string;
  aspectClass?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackColor = '#D8F1FF',
  aspectClass = '',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center p-6 text-center select-none ${aspectClass} ${className}`}
        style={{ backgroundColor: fallbackColor }}
      >
        <div className="w-12 h-12 rounded-2xl bg-white/80 flex items-center justify-center mb-3 shadow-xs">
          <Heart className="w-6 h-6 text-[#27364B]" />
        </div>
        <span className="text-sm font-medium text-[#27364B]/80 max-w-[220px] line-clamp-2">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={`${aspectClass} ${className}`}
      loading="lazy"
    />
  );
};

export const FloatingClouds: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 220 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none ${className}`}
    aria-hidden="true"
  >
    <path
      d="M52 74H172C189.673 74 204 59.6731 204 42C204 25.4959 191.506 11.9125 175.458 10.1869C168.426 3.84904 159.11 0 148.889 0C129.988 0 114.374 13.1924 110.312 30.8693C105.054 27.7755 98.9267 26 92.381 26C73.9562 26 58.8594 39.961 57.0378 57.8825C55.4024 57.3106 53.7201 57 52 57C38.7452 57 28 64.6112 28 74H52Z"
      fill="currentColor"
    />
  </svg>
);

export const DecorativeSun: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none ${className}`}
    aria-hidden="true"
  >
    <circle cx="60" cy="60" r="32" fill="#FFF0B3" />
    <circle cx="60" cy="60" r="46" stroke="#FFF0B3" strokeWidth="3" strokeDasharray="8 8" />
  </svg>
);
