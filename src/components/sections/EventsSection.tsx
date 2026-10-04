import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { practicalInfo } from '../../data/practicalInfo';

interface EventsSectionProps {
  onOpenBooking: () => void;
  onSelectPhoto: (photoSrc: string) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({
  onOpenBooking,
  onSelectPhoto,
}) => {
  const whatsappUrl = `https://wa.me/${practicalInfo.contacts.whatsapp}?text=Bonjour%20WINI%20WINI%20ISLAND,%20je%20souhaite%20r%C3%A9server%20pour%20une%20soir%C3%A9e%20ou%20un%20%C3%A9v%C3%A9nement%20priv%C3%A9.`;

  return (
    <section className="py-28 md:py-40 bg-[#151515] text-[#FAF9F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Content on Left */}
          <div className="lg:col-span-5">
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#C7A76C] font-sans font-semibold block mb-4">
              WINI VIBES · SOIRÉES
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.08] tracking-tight text-balance">
              La nuit sur la lagune
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#E8DCC8]/80 font-sans font-light leading-[1.7] text-balance">
              Le bar pavillon s'éclaire sous la brise nocturne. Lumières douces, verres partagés, accords acoustiques et atmosphère feutrée chaque vendredi, samedi et dimanche soir.
            </p>

            {/* Google Rating Note */}
            <div className="mt-8 flex items-center gap-2 text-xs text-[#E8DCC8]/80 font-sans font-light">
              <div className="flex items-center text-[#C7A76C]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C7A76C]" />
                ))}
              </div>
              <span className="font-medium text-white">4.7 / 5</span>
              <span className="text-[#E8DCC8]/50">·</span>
              <span>Avis vérifiés Google (30 avis)</span>
            </div>

            {/* Clean link underline */}
            <div className="mt-10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest font-semibold text-[#E8DCC8] border-b border-[#C7A76C]/60 pb-0.5 hover:text-white hover:border-white transition-colors inline-flex items-center gap-2 group"
              >
                <span>Réserver une soirée par WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C7A76C] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* 1 Large Nighttime Bar Photo (bar-restaurant-nuit.jpg) - No 3 cards clutter */}
          <div className="lg:col-span-7">
            <div
              className="aspect-[16/10] bg-black overflow-hidden shadow-2xl cursor-pointer group relative border border-white/10"
              onClick={() => onSelectPhoto('/images/gallery/bar-restaurant-nuit.jpg')}
            >
              <img
                src="/images/gallery/bar-restaurant-nuit.jpg"
                alt="Le bar pavillon moderne illuminé sous les étoiles à WINI WINI ISLAND"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-xs text-white text-[11px] tracking-widest uppercase font-mono px-3 py-1">
                Le bar pavillon de nuit · Togbin
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
