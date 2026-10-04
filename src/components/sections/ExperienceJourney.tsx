import React, { useState } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { experienceSteps } from '../../data/experienceSteps';

interface ExperienceJourneyProps {
  onOpenBooking: () => void;
  onSelectPhoto: (photoSrc: string) => void;
}

export const ExperienceJourney: React.FC<ExperienceJourneyProps> = ({
  onOpenBooking,
  onSelectPhoto,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = experienceSteps[activeStepIndex];

  return (
    <section id="experience" className="py-28 md:py-40 bg-[#FAF9F6] text-[#151515] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Intro: "BIEN PLUS QU'UN RESTAURANT." with Asymmetric Overlapping Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-32 md:mb-44">
          <div className="lg:col-span-6">
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#1B4332] font-sans font-semibold block mb-4">
              L'EXPÉRIENCE WINI WINI
            </span>
            
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#12372A] font-normal leading-[1.08] tracking-tight text-balance">
              Bien plus qu'un restaurant.
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#151515]/80 font-sans font-light leading-[1.7] max-w-xl text-balance">
              Une parenthèse suspendue sur les eaux paisibles de Togbin. L'alliance rare d'une table gourmande au feu de bois, de la fraîcheur d'un bassin miroitant et du rituel enchanteur d'une traversée en pirogue.
            </p>

            <div className="mt-8 flex items-center gap-8">
              {/* Text link underline instead of green button fatigue */}
              <button
                onClick={onOpenBooking}
                className="text-xs uppercase tracking-widest font-semibold text-[#12372A] hover:text-[#1B4332] inline-flex items-center gap-2 group cursor-pointer"
              >
                <span className="border-b border-[#12372A] pb-0.5 group-hover:border-[#C7A76C] transition-colors">
                  Réserver votre table
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C7A76C] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#traversee"
                className="text-xs uppercase tracking-widest font-medium text-[#151515]/70 hover:text-[#12372A] transition-colors"
              >
                La traversée
              </a>
            </div>
          </div>

          {/* Overlapping Visual Composition (Editorial Cereal / Aman style) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            {/* Primary Tall Vertical Photo */}
            <div
              className="relative w-4/5 sm:w-3/4 aspect-[3/4] overflow-hidden shadow-xl cursor-pointer group"
              onClick={() => onSelectPhoto('/images/gallery/restaurant-pilotis.jpg')}
            >
              <img
                src="/images/gallery/restaurant-pilotis.jpg"
                alt="Architecture sur pilotis de WINI WINI ISLAND au crépuscule"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
            </div>

            {/* Secondary Overlapping Photo */}
            <div
              className="absolute -bottom-6 -left-2 sm:bottom-8 sm:-left-6 w-1/2 aspect-[4/3] overflow-hidden shadow-2xl border-4 border-[#FAF9F6] cursor-pointer group"
              onClick={() => onSelectPhoto('/images/gallery/terrasse-exterieure.jpg')}
            >
              <img
                src="/images/gallery/terrasse-exterieure.jpg"
                alt="Terrasse extérieure et salon face au bassin"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* 4-Step Visual Storytelling (Clean, Photo-centric, No Clunky Widgets) */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#E8DCC8]">
            <div>
              <span className="text-[11px] tracking-[0.35em] uppercase text-[#1B4332] font-sans font-semibold block mb-2">
                LE VOYAGE
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#12372A] font-normal leading-[1.1]">
                Votre journée en 4 temps
              </h3>
            </div>
            
            {/* Clean Segmented Step Switcher */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {experienceSteps.map((step, idx) => (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-sans font-medium transition-all cursor-pointer whitespace-nowrap ${
                    idx === activeStepIndex
                      ? 'bg-[#12372A] text-[#FAF9F6]'
                      : 'bg-[#F6F1E8] text-[#151515]/70 hover:text-[#12372A]'
                  }`}
                >
                  <span className="font-mono mr-1.5 opacity-60">{step.step}</span>
                  {step.verb}
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Feature: Large Photo + Short Story */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F6F1E8] p-6 sm:p-10 border border-[#E8DCC8]/80">
            {/* Big Photo Container */}
            <div
              className="lg:col-span-7 aspect-[16/9] overflow-hidden shadow-sm cursor-pointer group relative"
              onClick={() => onSelectPhoto(activeStep.photoSrc)}
            >
              <img
                src={activeStep.photoSrc}
                alt={activeStep.photoAlt}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-xs text-white text-[10px] tracking-widest uppercase font-mono px-3 py-1">
                {activeStep.step} / 04 · {activeStep.verb}
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-5 flex flex-col justify-between py-2">
              <div>
                <span className="text-[11px] font-mono text-[#1B4332] uppercase tracking-wider block mb-1">
                  Étape {activeStep.step}
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl text-[#12372A] font-medium leading-[1.15]">
                  {activeStep.title}
                </h4>
                <p className="font-serif italic text-sm text-[#1B4332] mt-1">
                  « {activeStep.subtitle} »
                </p>
                <p className="mt-4 text-sm sm:text-base text-[#151515]/80 font-sans font-light leading-[1.7]">
                  {activeStep.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E8DCC8] flex items-center justify-between">
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev + 1) % experienceSteps.length)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#12372A] hover:text-[#1B4332] cursor-pointer"
                >
                  <span>Étape suivante</span>
                  <ChevronRight className="w-4 h-4 text-[#C7A76C]" />
                </button>

                {/* Text link instead of button */}
                <button
                  onClick={onOpenBooking}
                  className="text-xs uppercase tracking-widest font-semibold text-[#12372A] border-b border-[#12372A] pb-0.5 hover:text-[#1B4332] hover:border-[#C7A76C] transition-colors cursor-pointer"
                >
                  Réserver →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceJourney;
