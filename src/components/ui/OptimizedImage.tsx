import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  title?: string;
  category?: string;
  className?: string;
  aspectRatio?: '16/9' | '4/3' | '3/4' | '1/1' | 'auto';
  priority?: boolean;
  onClick?: () => void;
  showCaption?: boolean;
  interactive?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  title,
  category,
  className = '',
  aspectRatio = '4/3',
  priority = false,
  onClick,
  showCaption = false,
  interactive = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectClasses = {
    '16/9': 'aspect-[16/9]',
    '4/3': 'aspect-[4/3]',
    '3/4': 'aspect-[3/4]',
    '1/1': 'aspect-square',
    'auto': '',
  }[aspectRatio];

  return (
    <div
      className={`relative overflow-hidden bg-stone-200/50 ${aspectClasses} ${
        interactive ? 'cursor-pointer group' : ''
      } ${className}`}
      onClick={onClick}
    >
      {/* Actual image - crisp, 100% visible, no green overlay */}
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            interactive ? 'group-hover:scale-102 transition-transform duration-700' : ''
          } ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      ) : null}

      {/* Fallback only if image file cannot be read */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col justify-between p-6 text-[#151515] bg-[#F6F1E8] border border-[#E8DCC8]">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-[#1B4332] font-semibold">
            <span>{category || 'Wini Wini Island'}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332]" />
          </div>
          <div className="text-center py-4">
            <h4 className="font-serif text-lg text-[#12372A] font-medium">{title || alt}</h4>
            <p className="text-xs text-[#151515]/60 mt-1 font-light">Photo officielle · Togbin</p>
          </div>
          <div className="text-[10px] text-[#151515]/50 border-t border-[#E8DCC8] pt-2">
            Hio Houta, Togbin
          </div>
        </div>
      )}

      {/* Subtle bottom caption gradient only if requested */}
      {showCaption && isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4 sm:p-5 text-white pointer-events-none">
          {category && (
            <span className="text-[10px] uppercase tracking-widest text-[#E8DCC8] font-medium mb-0.5">
              {category}
            </span>
          )}
          <h4 className="font-serif text-base sm:text-lg text-white font-medium drop-shadow-sm">
            {title || alt}
          </h4>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
