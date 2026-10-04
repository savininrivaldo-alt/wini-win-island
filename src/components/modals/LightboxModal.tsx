import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Compass } from 'lucide-react';
import { gallery } from '../../data/gallery';

interface LightboxModalProps {
  currentPhotoSrc: string | null;
  onClose: () => void;
  onNavigate: (newSrc: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  currentPhotoSrc,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (!currentPhotoSrc) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPhotoSrc]);

  if (!currentPhotoSrc) return null;

  const currentIndex = gallery.findIndex((item) => item.src === currentPhotoSrc);
  const activeItem = currentIndex !== -1 ? gallery[currentIndex] : {
    src: currentPhotoSrc,
    alt: "Photographie officielle WINI WINI ISLAND",
    title: "Photographie Officielle",
    category: "Expérience",
    description: "Instant capturé au sanctuaire insulaire de Togbin, Abomey-Calavi, Bénin.",
    tagline: "Wini Wini Island"
  };

  const handleNext = () => {
    if (gallery.length === 0) return;
    const nextIdx = (currentIndex + 1) % gallery.length;
    onNavigate(gallery[nextIdx].src);
  };

  const handlePrev = () => {
    if (gallery.length === 0) return;
    const prevIdx = (currentIndex - 1 + gallery.length) % gallery.length;
    onNavigate(gallery[prevIdx].src);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#151515]/95 backdrop-blur-md text-[#FAF9F6] select-none">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2.5 rounded-none text-white hover:text-[#C7A76C] bg-white/10 hover:bg-white/20 transition-colors z-20 cursor-pointer"
        aria-label="Fermer la vue agrandie"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev / Next buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-white hover:text-[#C7A76C] bg-white/10 hover:bg-white/20 transition-all z-20 cursor-pointer"
        aria-label="Photo précédente"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-white hover:text-[#C7A76C] bg-white/10 hover:bg-white/20 transition-all z-20 cursor-pointer"
        aria-label="Photo suivante"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center z-10">
        <div className="relative w-full overflow-hidden bg-black shadow-2xl flex items-center justify-center border border-white/10">
          <img
            src={activeItem.src}
            alt={activeItem.alt}
            referrerPolicy="no-referrer"
            className="max-h-[72vh] w-auto max-w-full object-contain mx-auto"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = 'none';
              const fallback = document.getElementById('lightbox-fallback');
              if (fallback) fallback.style.display = 'flex';
            }}
          />

          {/* Lightbox fallback view if image file is not on disk yet */}
          <div
            id="lightbox-fallback"
            style={{ display: 'none' }}
            className="w-full min-h-[380px] p-8 flex-col items-center justify-center text-center bg-[#151515]"
          >
            <Compass className="w-12 h-12 text-[#C7A76C] mb-4" />
            <h3 className="font-serif text-2xl text-[#FAF9F6] font-medium">{activeItem.title}</h3>
            <p className="text-xs text-[#E8DCC8]/70 mt-2 max-w-md">{activeItem.alt}</p>
          </div>
        </div>

        {/* Caption & Metadata Bar */}
        <div className="w-full mt-4 p-4 bg-[#151515] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-widest text-[#C7A76C] font-semibold">
                {activeItem.category}
              </span>
              <span className="text-white/40">·</span>
              <span className="text-sm font-serif font-medium text-[#FAF9F6]">
                {activeItem.title}
              </span>
            </div>
            <p className="text-xs text-white/70 font-light mt-0.5 max-w-xl">
              {activeItem.description}
            </p>
          </div>

          <div className="shrink-0 text-[11px] font-mono text-[#C7A76C] bg-white/5 px-3 py-1 border border-white/10">
            {currentIndex !== -1 ? `${currentIndex + 1} / ${gallery.length}` : 'WINI WINI ISLAND'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightboxModal;
