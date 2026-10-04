import React, { useState } from 'react';
import { ArrowRight, Sparkles, X } from 'lucide-react';
import { menuItems } from '../../data/menu';

interface RestaurantSectionProps {
  onOpenBooking: () => void;
  onSelectPhoto: (photoSrc: string) => void;
}

export const RestaurantSection: React.FC<RestaurantSectionProps> = ({
  onOpenBooking,
  onSelectPhoto,
}) => {
  const [showFullMenu, setShowFullMenu] = useState(false);

  return (
    <section id="restaurant" className="py-28 md:py-40 bg-[#FAF9F6] text-[#151515] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#1B4332] font-sans font-semibold block mb-4">
            RESTAURANT & SAVEURS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#12372A] font-normal leading-[1.08] tracking-tight text-balance">
            La braise, la pêche & les épices
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#151515]/80 font-sans font-light leading-[1.7] max-w-xl text-balance">
            Une cuisine sincère et vivante. Poissons frais capturés à l'aube par les pêcheurs de Togbin, braisés minute au feu de bois et servis face à l'eau.
          </p>
        </div>

        {/* LUXURY EDITORIAL COMPOSITION:
            60% Large Featured Photo (Carpe Braisée 9 000 FCFA) +
            40% Right Column with 3 other dishes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* 60% Left: Featured Dish (Carpe Braisée) */}
          <div className="lg:col-span-7">
            <div
              className="aspect-[4/3] bg-stone-200 shadow-xl overflow-hidden cursor-pointer group relative"
              onClick={() => onSelectPhoto('/images/gallery/plat-poisson-riz.jpg')}
            >
              <img
                src="/images/gallery/plat-poisson-riz.jpg"
                alt="Carpe entière braisée de la lagune de Togbin servie avec riz et alloco"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-black/65 backdrop-blur-xs text-white text-[10px] tracking-widest uppercase font-mono px-3 py-1">
                Pêche du jour · Braisé minute
              </div>
            </div>

            {/* Featured Dish Caption */}
            <div className="mt-5 flex items-baseline justify-between gap-4">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#12372A] font-medium">
                  Carpe Fraîche de la Lagune Braisée
                </h3>
                <p className="text-xs sm:text-sm text-[#151515]/75 font-sans font-light mt-1">
                  Pêche locale du jour marinée aux aromates de Togbin, braisée au bois d'acacia. Servie avec riz et alloco.
                </p>
              </div>
              <span className="font-sans text-lg font-medium text-[#12372A] tabular-nums whitespace-nowrap">
                9 000 FCFA
              </span>
            </div>
          </div>

          {/* 40% Right: Column of 3 Curated Dishes */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:pl-4">
            {/* Dish 1 */}
            <div className="pb-6 border-b border-[#E8DCC8]">
              <div className="flex items-baseline justify-between gap-4">
                <h4 className="font-serif text-xl sm:text-2xl text-[#12372A] font-medium">
                  Pavé de Capitaine au Feu de Bois
                </h4>
                <span className="font-sans text-sm font-medium text-[#12372A] tabular-nums whitespace-nowrap">
                  11 500 FCFA
                </span>
              </div>
              <p className="mt-1 text-xs text-[#151515]/70 font-sans font-light leading-relaxed">
                Filet sauvage croustillant côté peau, chair nacrée, émulsion citronnelle et légumes sautés.
              </p>
            </div>

            {/* Dish 2 */}
            <div className="pb-6 border-b border-[#E8DCC8]">
              <div className="flex items-baseline justify-between gap-4">
                <h4 className="font-serif text-xl sm:text-2xl text-[#12372A] font-medium">
                  Burger Signature « Wini Wini »
                </h4>
                <span className="font-sans text-sm font-medium text-[#12372A] tabular-nums whitespace-nowrap">
                  8 000 FCFA
                </span>
              </div>
              <p className="mt-1 text-xs text-[#151515]/70 font-sans font-light leading-relaxed">
                Pain brioché maison, steak de bœuf local façonné main, cheddar affiné et frites dorées.
              </p>
            </div>

            {/* Dish 3 */}
            <div className="pb-6 border-b border-[#E8DCC8]">
              <div className="flex items-baseline justify-between gap-4">
                <h4 className="font-serif text-xl sm:text-2xl text-[#12372A] font-medium">
                  Togbin Breeze (Cocktail Signature)
                </h4>
                <span className="font-sans text-sm font-medium text-[#12372A] tabular-nums whitespace-nowrap">
                  5 000 FCFA
                </span>
              </div>
              <p className="mt-1 text-xs text-[#151515]/70 font-sans font-light leading-relaxed">
                Rhum ambré vieilli, pur jus d'ananas pain de sucre d'Allada pressé minute et gingembre frais.
              </p>
            </div>

            {/* 1 seul lien "Voir la carte complète →" underline */}
            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => setShowFullMenu(true)}
                className="text-xs uppercase tracking-widest font-semibold text-[#12372A] border-b border-[#12372A] pb-0.5 hover:text-[#1B4332] hover:border-[#C7A76C] transition-colors inline-flex items-center gap-2 cursor-pointer group"
              >
                <span>Voir la carte complète</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C7A76C] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenBooking}
                className="text-xs uppercase tracking-widest font-medium text-[#151515]/70 hover:text-[#12372A] transition-colors cursor-pointer"
              >
                Réserver →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Full Menu Carte Drawer/Modal */}
      {showFullMenu && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-[#FAF9F6] border border-[#E8DCC8] shadow-2xl p-6 sm:p-10 max-h-[85vh] overflow-y-auto text-[#151515]">
            <div className="flex items-center justify-between pb-6 border-b border-[#E8DCC8]">
              <div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#1B4332] font-semibold block">
                  CARTE DU RESTAURANT
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#12372A] font-medium">
                  Les Délices de WINI WINI ISLAND
                </h3>
              </div>
              <button
                onClick={() => setShowFullMenu(false)}
                className="p-1.5 text-[#12372A] hover:text-[#1B4332] cursor-pointer"
                aria-label="Fermer la carte"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-8 space-y-6">
              {menuItems.map((item) => (
                <div key={item.id} className="pb-4 border-b border-[#E8DCC8]/50 flex items-baseline justify-between gap-4">
                  <div>
                    <h5 className="font-serif text-lg text-[#12372A] font-medium">{item.name}</h5>
                    <p className="text-xs text-[#151515]/70 font-light mt-0.5">{item.description}</p>
                    {item.accompaniments && (
                      <p className="text-[11px] font-serif italic text-[#1B4332] mt-0.5">
                        Accompagnements : {item.accompaniments}
                      </p>
                    )}
                  </div>
                  <span className="font-sans text-sm font-medium text-[#12372A] tabular-nums whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#E8DCC8] flex items-center justify-between">
              <span className="text-xs text-[#151515]/60 font-light">Plats de 6 500 à 16 000 FCFA</span>
              <button
                onClick={() => {
                  setShowFullMenu(false);
                  onOpenBooking();
                }}
                className="px-6 py-2.5 text-xs uppercase tracking-widest font-semibold text-[#FAF9F6] bg-[#12372A] hover:bg-[#1B4332] transition-colors cursor-pointer"
              >
                Réserver ma table
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RestaurantSection;
