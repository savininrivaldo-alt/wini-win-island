import React from 'react';
import { MapPin, Phone, MessageSquare, Mail, ArrowUp, Settings } from 'lucide-react';
import { practicalInfo } from '../../data/practicalInfo';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenPhotoManager: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenPhotoManager }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#12372A] text-[#FAF9F6] pt-24 pb-12 overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grande phrase éditoriale avant : "À BIENTÔT SUR L'ÎLE." 56px Playfair */}
        <div className="pb-16 md:pb-20 border-b border-white/15 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-[11px] tracking-[0.4em] uppercase text-[#C7A76C] font-sans font-medium block mb-3">
              L'INVITATION
            </span>
            <h2 className="font-serif text-[42px] sm:text-[52px] md:text-[56px] lg:text-[64px] font-normal tracking-tight text-white leading-none">
              À BIENTÔT SUR L'ÎLE.
            </h2>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[#12372A] bg-[#FAF9F6] hover:bg-white active:scale-98 transition-all shadow-md cursor-pointer whitespace-nowrap self-start md:self-auto"
          >
            Réserver ma table
          </button>
        </div>

        {/* 1 seule ligne horaires : Vend-Dim 10h-23h | Lun-Jeu sur privatisation */}
        <div className="py-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-sans text-[#E8DCC8]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C7A76C]" />
            <span className="font-medium tracking-wide">
              Horaires : Vend-Dim 10h-23h | Lun-Jeu sur privatisation
            </span>
          </div>

          <div className="text-white/60 font-light">
            Embarcadère privé sécurisé à Hio Houta (Togbin, Abomey-Calavi)
          </div>
        </div>

        {/* Footer Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12 border-b border-white/10 text-xs">
          {/* Col 1: Wordmark */}
          <div className="md:col-span-4 space-y-3">
            <a href="#" className="inline-block group">
              <span className="font-serif text-2xl font-normal tracking-wider text-white block">
                WINI WINI ISLAND
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#C7A76C] font-light">
                RESTAURANT · POOL · PIROGUE · BÉNIN
              </span>
            </a>
            <p className="text-white/70 font-light leading-relaxed max-w-sm">
              L'évasion insulaire au cœur de la lagune de Togbin. Architecture sur pilotis, cuisine au feu de bois et quiétude naturelle.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-[#C7A76C] font-semibold block mb-3">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-white/80 font-light">
              <a href="#experience" className="hover:text-white transition-colors">L'Expérience</a>
              <a href="#restaurant" className="hover:text-white transition-colors">Restaurant</a>
              <a href="#piscine" className="hover:text-white transition-colors">Piscine</a>
              <a href="#traversee" className="hover:text-white transition-colors">La Pirogue</a>
              <a href="#galerie" className="hover:text-white transition-colors">Galerie</a>
              <a href="#infos" className="hover:text-white transition-colors">Infos Pratiques</a>
            </div>
          </div>

          {/* Col 3: Direct Contacts */}
          <div className="md:col-span-4 space-y-3 text-white/80 font-light">
            <span className="text-[10px] uppercase tracking-widest text-[#C7A76C] font-semibold block mb-3">
              Contact & Conciergerie
            </span>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C7A76C] shrink-0" />
                <span>{practicalInfo.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C7A76C] shrink-0" />
                <a href={`tel:${practicalInfo.contacts.phone.replace(/\s+/g, '')}`} className="font-mono hover:text-white">
                  {practicalInfo.contacts.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#C7A76C] shrink-0" />
                <a
                  href={`https://wa.me/${practicalInfo.contacts.whatsapp}?text=Bonjour%20WINI%20WINI%20ISLAND`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono hover:text-white"
                >
                  WhatsApp (+229 01 99 11 67 67)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C7A76C] shrink-0" />
                <a href={`mailto:${practicalInfo.contacts.email}`} className="font-mono hover:text-white">
                  {practicalInfo.contacts.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-light">
          <div className="flex items-center gap-4 flex-wrap">
            <span>© {new Date().getFullYear()} WINI WINI ISLAND.</span>
            <span>·</span>
            <span>{practicalInfo.address.code} Hio Houta, Togbin, Abomey-Calavi</span>
            <span>·</span>
            <button
              onClick={onOpenPhotoManager}
              className="text-[#C7A76C] hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              <Settings className="w-3 h-3" />
              <span>Gestion des photos</span>
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label="Retour en haut de page"
          >
            <span className="text-[10px] uppercase tracking-wider">Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
