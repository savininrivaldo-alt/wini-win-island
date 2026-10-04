import React, { useState } from 'react';
import { MapPin, Clock, Phone, MessageSquare, Mail, Navigation, ChevronDown, Check, ShieldCheck } from 'lucide-react';
import { practicalInfo } from '../../data/practicalInfo';
import { officialTariffSign } from '../../data/gallery';

interface PracticalInfoSectionProps {
  onOpenBooking: () => void;
  onSelectPhoto?: (photoSrc: string) => void;
}

export const PracticalInfoSection: React.FC<PracticalInfoSectionProps> = ({
  onOpenBooking,
  onSelectPhoto,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="infos" className="py-24 md:py-32 bg-[#FAF9F6] text-[#151515] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#1B4332] font-semibold block mb-4">
            INFOS PRATIQUES & ACCÈS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#12372A] font-normal leading-[1.08] tracking-tight text-balance">
            Organiser votre visite à Togbin
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#151515]/80 font-light leading-[1.7] max-w-xl text-balance">
            Toutes les informations officielles pour nous rejoindre à l'embarcadère de Hio Houta.
          </p>
        </div>

        {/* 3 Clean White Cards (NO GREEN BACKGROUND) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Adresse & GPS */}
          <div className="bg-white p-8 border border-[#E8DCC8] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-[#FAF9F6] border border-[#E8DCC8] flex items-center justify-center text-[#12372A] mb-6">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#12372A] font-medium mb-3">
                Localisation
              </h3>
              <p className="font-mono text-xs text-[#1B4332] bg-[#F6F1E8] px-2.5 py-1 inline-block mb-3 border border-[#E8DCC8]">
                {practicalInfo.address.code}
              </p>
              <p className="text-sm font-medium text-[#12372A]">
                {practicalInfo.address.full}
              </p>
              <p className="text-xs text-[#151515]/70 mt-2 font-light leading-relaxed">
                {practicalInfo.address.landmark}
              </p>
              <div className="mt-4 pt-3 border-t border-[#E8DCC8] text-xs font-mono text-[#151515]/60">
                Coordonnées : {practicalInfo.address.coordinates.lat}, {practicalInfo.address.coordinates.lng}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E8DCC8]">
              <a
                href={practicalInfo.contacts.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#12372A] hover:text-[#1B4332] transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#1B4332]" />
                <span>Itinéraire Google Maps</span>
              </a>
            </div>
          </div>

          {/* Card 2: Horaires d'Ouverture (Exact Validated Source) */}
          <div className="bg-white p-8 border border-[#E8DCC8] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-[#FAF9F6] border border-[#E8DCC8] flex items-center justify-center text-[#12372A] mb-6">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#12372A] font-medium mb-3">
                Horaires Officiels
              </h3>

              <div className="space-y-3 text-xs">
                {practicalInfo.openingHours.map((schedule) => (
                  <div key={schedule.day} className="flex items-center justify-between pb-2 border-b border-[#E8DCC8]/60">
                    <div>
                      <span className="font-medium text-[#12372A] block">{schedule.day}</span>
                      <span className="text-[10px] text-[#151515]/60 font-light">{schedule.note}</span>
                    </div>
                    <span className={`font-mono text-xs font-semibold ${schedule.isOpen ? 'text-[#12372A]' : 'text-stone-400'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E8DCC8]">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF9F6] bg-[#12372A] hover:bg-[#1B4332] transition-colors text-center cursor-pointer"
              >
                Réserver ma venue
              </button>
            </div>
          </div>

          {/* Card 3: Contacts */}
          <div className="bg-white p-8 border border-[#E8DCC8] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-[#FAF9F6] border border-[#E8DCC8] flex items-center justify-center text-[#12372A] mb-6">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#12372A] font-medium mb-3">
                Contacts
              </h3>
              <p className="text-xs text-[#151515]/70 font-light leading-relaxed mb-4">
                Service client et conciergerie à votre écoute pour vos réservations et privatisations.
              </p>

              <div className="space-y-3.5 text-xs">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#1B4332] font-semibold block">
                    Téléphone Direct
                  </span>
                  <a
                    href={`tel:${practicalInfo.contacts.phone.replace(/\s+/g, '')}`}
                    className="font-mono text-sm font-semibold text-[#12372A] hover:underline"
                  >
                    {practicalInfo.contacts.phone}
                  </a>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#1B4332] font-semibold block">
                    WhatsApp Officiel
                  </span>
                  <a
                    href={`https://wa.me/${practicalInfo.contacts.whatsapp}?text=Bonjour%20WINI%20WINI%20ISLAND,%20je%20souhaite%20des%20renseignements.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm font-semibold text-[#12372A] hover:underline flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>+229 01 99 11 67 67</span>
                  </a>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#1B4332] font-semibold block">
                    Email
                  </span>
                  <a
                    href={`mailto:${practicalInfo.contacts.email}`}
                    className="text-xs font-mono text-[#12372A] hover:underline"
                  >
                    {practicalInfo.contacts.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E8DCC8]">
              <a
                href={`https://wa.me/${practicalInfo.contacts.whatsapp}?text=Bonjour%20WINI%20WINI%20ISLAND,%20je%20souhaite%20r%C3%A9server.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#FAF9F6] bg-[#12372A] hover:bg-[#1B4332] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Message WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Tarifs & Panneau Officiel (Placed cleanly in FAQ / Tarifs context) */}
        <div className="bg-[#F6F1E8] p-8 md:p-12 border border-[#E8DCC8] mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* The Official Tariff Signboard Photo as Evidence */}
            <div className="lg:col-span-4">
              <div
                className="aspect-square bg-stone-300 overflow-hidden shadow-md border-2 border-white cursor-pointer group relative"
                onClick={() => onSelectPhoto && onSelectPhoto(officialTariffSign.src)}
              >
                <img
                  src={officialTariffSign.src}
                  alt={officialTariffSign.alt}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-xs text-white text-[10px] uppercase font-mono px-2 py-0.5">
                  Affichage officiel sur place
                </div>
              </div>
            </div>

            {/* Tariffs List */}
            <div className="lg:col-span-8">
              <span className="text-[11px] tracking-[0.35em] uppercase text-[#1B4332] font-semibold block mb-2">
                TRANSPARENCE TARIFAIRE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#12372A] font-medium mb-6">
                Tarifs officiels affichés à l'embarcadère
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {practicalInfo.pricingNotes.map((pricing) => (
                  <div key={pricing.title} className="bg-white p-4 border border-[#E8DCC8]">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-serif text-base font-semibold text-[#12372A]">
                        {pricing.title}
                      </span>
                      <span className="font-mono text-xs font-bold text-[#12372A] bg-[#F6F1E8] px-2 py-0.5 border border-[#E8DCC8]">
                        {pricing.badge}
                      </span>
                    </div>
                    <p className="text-xs text-[#151515]/75 font-light leading-relaxed">
                      {pricing.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#1B4332] font-semibold block mb-2">
              QUESTIONS FRÉQUENTES
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#12372A] font-medium">
              Tout ce que vous devez savoir
            </h3>
          </div>

          <div className="space-y-3">
            {practicalInfo.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={faq.question} className="bg-white border border-[#E8DCC8] overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-base sm:text-lg text-[#12372A] font-medium">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#12372A] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#151515]/75 font-light leading-relaxed border-t border-[#E8DCC8]/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticalInfoSection;
