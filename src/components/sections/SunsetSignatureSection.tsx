import React from 'react';

interface SunsetSignatureSectionProps {
  onSelectPhoto: (photoSrc: string) => void;
}

export const SunsetSignatureSection: React.FC<SunsetSignatureSectionProps> = ({ onSelectPhoto }) => {
  return (
    <section className="relative h-[70vh] sm:h-[85vh] w-full overflow-hidden bg-black text-[#FAF9F6] flex items-center justify-center select-none">
      {/* 100% visible sunset photo full bleed */}
      <img
        src="/images/gallery/restaurant-sunset.jpg"
        alt="Le coucher de soleil sur les pilotis de WINI WINI ISLAND"
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover object-center brightness-90 cursor-pointer hover:scale-101 transition-transform duration-1000"
        onClick={() => onSelectPhoto('/images/gallery/restaurant-sunset.jpg')}
      />

      {/* Very light contrast scrim for pure visual silence */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

      {/* Editorial Silence: LE TEMPS SUSPENDU */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <span className="text-[11px] tracking-[0.4em] uppercase text-[#E8DCC8] font-sans font-medium block mb-4">
          CRÉPUSCULE SUR L'EAU
        </span>
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-wide text-white drop-shadow-sm leading-tight">
          LE TEMPS SUSPENDU.
        </h2>
        <p className="mt-4 font-serif italic text-base sm:text-xl text-[#E8DCC8]/90 font-light">
          Quand la lagune s'apaise et que les lanternes s'allument.
        </p>
      </div>
    </section>
  );
};

export default SunsetSignatureSection;
