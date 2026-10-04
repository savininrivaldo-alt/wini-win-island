import React from 'react';
import { ArrowDown, MessageSquare, Compass, Star } from 'lucide-react';
import { practicalInfo } from '../../data/practicalInfo';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const whatsappUrl = `https://wa.me/${practicalInfo.contacts.whatsapp}?text=Bonjour%20WINI%20WINI%20ISLAND,%20je%20souhaite%20r%C3%A9server%20une%20table%20ou%20un%20transat.`;

  return (
    <section className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black text-[#FAF9F6]">
      {/* 100% visible official sunset photograph - NO GREEN WASH */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/gallery/restaurant-sunset.jpg"
          alt="Restaurant WINI WINI ISLAND sur pilotis au coucher du soleil à Hio Houta"
          loading="eager"
          decoding="async"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-95 contrast-105"
        />
        {/* Cinematic dark scrim: ultra subtil bg-black/20 + gradient-to-t from-black/40 to-transparent */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center pt-24 pb-12">
        {/* Label 11px Manrope tracking 0.4em */}
        <div className="text-[11px] tracking-[0.4em] uppercase text-[#E8DCC8] font-sans font-medium mb-4 select-none">
          RESTAURANT • ESCAPADE • ÉVASION
        </div>

        {/* Brand & Editorial Title in Playfair Display (40px mobile / 72px desktop) */}
        <h1 className="font-serif text-[40px] sm:text-[60px] md:text-[72px] lg:text-[80px] font-normal tracking-tight text-[#FAF9F6] leading-[1.05] text-balance">
          WINI WINI ISLAND
        </h1>

        <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#E8DCC8] font-light mt-3 tracking-wide text-balance">
          L'art de vivre insulaire au fil de l'eau
        </p>

        {/* Subtitle max 20 words */}
        <p className="mt-4 text-base sm:text-lg text-white/90 max-w-md font-sans font-light leading-relaxed text-balance">
          Restaurant sur pilotis, pirogue et piscine à Togbin.
        </p>

        {/* CTA Group: [RÉSERVER] vert #12372A + [DÉCOUVRIR] bordure */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[#FAF9F6] bg-[#12372A] hover:bg-[#1B4332] active:scale-98 transition-all shadow-md flex items-center justify-center gap-2.5 border border-white/20 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#C7A76C]" />
            <span>Réserver sur WhatsApp</span>
          </a>

          <a
            href="#experience"
            className="w-full sm:w-auto px-7 py-4 text-xs font-medium uppercase tracking-widest text-white bg-black/25 hover:bg-white/15 border border-white/40 transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-xs"
          >
            <Compass className="w-3.5 h-3.5 text-white/80" />
            <span>Découvrir</span>
          </a>
        </div>

        {/* Badge 4.7★ (30 avis Google) unboxed */}
        <div className="mt-5 flex items-center gap-2 text-xs text-white/85 font-sans font-light">
          <div className="flex items-center text-[#C7A76C]">
            <Star className="w-3.5 h-3.5 fill-[#C7A76C]" />
          </div>
          <span className="font-semibold text-white">4.7</span>
          <span className="text-white/70">(30 avis Google)</span>
          <span className="text-white/40">·</span>
          <span>Hio Houta, Togbin</span>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center gap-1.5 text-white/60">
          <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-light">SCROLL TO EXPLORE</span>
          <a
            href="#experience"
            className="p-1 text-white/70 hover:text-white transition-colors"
            aria-label="Descendre vers l'expérience"
          >
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
