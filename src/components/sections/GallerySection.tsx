import React, { useState } from 'react';
import { Settings2 } from 'lucide-react';
import { gallery, galleryCategories } from '../../data/gallery';

interface GallerySectionProps {
  onSelectPhoto: (photoSrc: string) => void;
  onOpenPhotoManager: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onSelectPhoto,
  onOpenPhotoManager,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredItems = selectedCategory === 'all'
    ? gallery
    : gallery.filter((item) => item.category === selectedCategory);

  return (
    <section id="galerie" className="py-28 md:py-40 bg-[#FAF9F6] text-[#151515] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#1B4332] font-sans font-semibold block mb-4">
            GALERIE PHOTOGRAPHIQUE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#12372A] font-normal leading-[1.08] tracking-tight text-balance">
            Instants bruts à WINI WINI ISLAND
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#151515]/80 font-sans font-light leading-[1.7] max-w-xl text-balance">
            La beauté authentique de notre sanctuaire sur l'eau, capturée sans filtres au fil des heures du jour et de la nuit.
          </p>
        </div>

        {/* Clean Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-[#E8DCC8] scrollbar-none">
          {galleryCategories.map((cat) => {
            const isActive = cat.id === selectedCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-sans font-medium transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#12372A] text-[#FAF9F6]'
                    : 'bg-[#F6F1E8] text-[#151515]/70 hover:text-[#12372A]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Editorial Magazine Composition (2 col mobile / 3 desktop, gap-4)
            hover scale 1.02 (600ms lent), AUCUN overlay vert, AUCUN texte sur vignette */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredItems.map((item, index) => {
            // Asymmetric aspect ratio rhythm: portrait, landscape, square
            const aspectStyle =
              index === 0
                ? 'col-span-2 md:col-span-2 aspect-[16/9]'
                : index === 1
                ? 'aspect-[3/4]'
                : index === 3
                ? 'aspect-[4/3]'
                : index === 4
                ? 'aspect-square'
                : 'aspect-[4/3]';

            return (
              <div
                key={item.id}
                className={`group cursor-pointer overflow-hidden bg-stone-200 relative ${aspectStyle}`}
                onClick={() => onSelectPhoto(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-600 ease-out"
                />
              </div>
            );
          })}
        </div>

        {/* Quiet footer note */}
        <div className="mt-12 flex items-center justify-between text-xs text-[#151515]/60 pt-6 border-t border-[#E8DCC8]">
          <span>9 photographies d'art de l'établissement</span>
          <button
            onClick={onOpenPhotoManager}
            className="text-[#12372A] hover:underline inline-flex items-center gap-1.5 cursor-pointer font-medium"
          >
            <Settings2 className="w-3.5 h-3.5" />
            <span>Architecture des photos</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
