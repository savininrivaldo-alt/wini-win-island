import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PoolLoungeSectionProps {
  onOpenBooking: () => void;
  onSelectPhoto: (photoSrc: string) => void;
}

export const PoolLoungeSection: React.FC<PoolLoungeSectionProps> = ({
  onOpenBooking,
  onSelectPhoto,
}) => {
  return (
    <section id="piscine" className="py-28 md:py-40 bg-[#F6F1E8] text-[#151515] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Scène Resort: Full width photo 90vw with radius 12px */}
        <div
          className="w-full aspect-[16/9] sm:aspect-[21/9] rounded-[12px] overflow-hidden shadow-xl cursor-pointer group relative bg-stone-300"
          onClick={() => onSelectPhoto('/images/gallery/piscine-detente.jpg')}
        >
          <img
            src="/images/gallery/piscine-detente.jpg"
            alt="Le bassin turquoise sous les palmiers de WINI WINI ISLAND"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-xs text-white text-[10px] tracking-widest uppercase font-mono px-3 py-1">
            Bassin & Solarium
          </div>
        </div>

        {/* Resort Editorial Title & Single Sentence Text */}
        <div className="mt-10 sm:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#1B4332] font-sans font-semibold block mb-3">
              DÉTENTE LAGUNAIRE
            </span>

            {/* Titre 32px mobile / 48px desktop */}
            <h2 className="font-serif text-[32px] sm:text-[44px] md:text-[48px] text-[#12372A] font-normal leading-[1.1] tracking-tight">
              Le bassin turquoise sous les palmiers
            </h2>

            {/* Texte 1 phrase seulement */}
            <p className="mt-4 text-base sm:text-lg text-[#151515]/80 font-sans font-light leading-[1.6]">
              Bassin 10 000F/pers, transat et serviette inclus. Cocktails servis au transat. 10h-18h.
            </p>
          </div>

          {/* Clean text link underline instead of repetitive green button */}
          <div className="shrink-0 pb-1">
            <button
              onClick={onOpenBooking}
              className="text-xs uppercase tracking-widest font-semibold text-[#12372A] border-b border-[#12372A] pb-0.5 hover:text-[#1B4332] hover:border-[#C7A76C] transition-colors inline-flex items-center gap-2 cursor-pointer group"
            >
              <span>Réserver un transat</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C7A76C] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoolLoungeSection;
