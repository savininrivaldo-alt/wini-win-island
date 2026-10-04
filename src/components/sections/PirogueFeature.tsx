import React from 'react';
import { Anchor, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import { practicalInfo } from '../../data/practicalInfo';

interface PirogueFeatureProps {
  onOpenBooking: () => void;
  onSelectPhoto: (photoSrc: string) => void;
}

export const PirogueFeature: React.FC<PirogueFeatureProps> = ({
  onOpenBooking,
  onSelectPhoto,
}) => {
  return (
    <section id="traversee" className="py-24 md:py-32 bg-[#F6F1E8] text-[#151515] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Large Image on Left */}
          <div
            className="lg:col-span-7 aspect-[16/9] sm:aspect-[4/3] lg:aspect-[16/10] overflow-hidden shadow-lg cursor-pointer group relative"
            onClick={() => onSelectPhoto('/images/gallery/arrivee-pirogue.jpg')}
          >
            <img
              src="/images/gallery/arrivee-pirogue.jpg"
              alt="Arrivée en pirogue traditionnelle à l'embarcadère Wini Wini dans la mangrove"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-xs text-white text-[11px] tracking-widest uppercase font-mono px-3 py-1">
              Arrivée par l'eau · Togbin
            </div>
          </div>

          {/* Editorial Content on Right */}
          <div className="lg:col-span-5">
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#1B4332] font-semibold block mb-4">
              UNE ÎLE À PART
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#12372A] font-normal leading-[1.08] tracking-tight text-balance">
              Le rituel de la pirogue
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#151515]/80 font-light leading-[1.7] text-balance">
              Pour rejoindre WINI WINI ISLAND, on traverse l'eau. Cinq minutes de glisse paisible sur la lagune de Togbin qui suffisent à tout oublier et à ouvrir les sens.
            </p>

            {/* Quiet feature bullets - unboxed */}
            <div className="mt-8 space-y-4 text-sm text-[#151515]/80">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#1B4332] shrink-0 mt-1" />
                <div>
                  <strong className="font-medium text-[#12372A]">5 minutes de traversée :</strong>
                  <span className="font-light text-[#151515]/75 ml-1">
                    Rotations continues depuis l'embarcadère de Hio Houta.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#1B4332] shrink-0 mt-1" />
                <div>
                  <strong className="font-medium text-[#12372A]">Sécurité certifiée :</strong>
                  <span className="font-light text-[#151515]/75 ml-1">
                    Gilets de sauvetage adaptés obligatoires et fournis (enfants & adultes).
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Anchor className="w-4 h-4 text-[#1B4332] shrink-0 mt-1" />
                <div>
                  <strong className="font-medium text-[#12372A]">Tarif officiel :</strong>
                  <span className="font-light text-[#151515]/75 ml-1">
                    2 000 FCFA aller-retour par personne.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#FAF9F6] bg-[#12372A] hover:bg-[#1B4332] transition-colors cursor-pointer"
              >
                Planifier ma traversée
              </button>

              <a
                href={practicalInfo.contacts.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest font-medium text-[#12372A] hover:text-[#1B4332] inline-flex items-center gap-1.5 underline underline-offset-4"
              >
                <span>GPS Embarcadère</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PirogueFeature;
