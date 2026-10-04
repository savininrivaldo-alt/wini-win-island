import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { practicalInfo } from '../../data/practicalInfo';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "L'Expérience", href: "#experience" },
    { label: "Restaurant", href: "#restaurant" },
    { label: "Piscine", href: "#piscine" },
    { label: "La Pirogue", href: "#traversee" },
    { label: "Galerie", href: "#galerie" },
    { label: "Infos", href: "#infos" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 h-16 md:h-20 flex items-center ${
          isScrolled
            ? 'bg-[#FAF9F6]/85 backdrop-blur-xl border-b border-[#E8DCC8]/70 shadow-xs text-[#12372A]'
            : 'bg-gradient-to-b from-black/50 via-black/15 to-transparent text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          {/* Logo: WINI WINI 18px serif + ISLAND 10px sans tracking 0.3em */}
          <a href="#" className="flex flex-col text-left group select-none">
            <span
              className={`font-serif text-[18px] sm:text-[20px] font-normal tracking-wide leading-none transition-colors ${
                isScrolled ? 'text-[#12372A]' : 'text-white'
              }`}
            >
              WINI WINI
            </span>
            <span
              className={`text-[10px] tracking-[0.3em] uppercase font-sans font-light mt-0.5 ${
                isScrolled ? 'text-[#1B4332]' : 'text-[#E8DCC8]'
              }`}
            >
              ISLAND
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-sans font-medium uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors py-1 ${
                  isScrolled
                    ? 'text-[#151515]/75 hover:text-[#12372A]'
                    : 'text-white/85 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Area */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${practicalInfo.contacts.phone.replace(/\s+/g, '')}`}
              className={`hidden sm:inline-flex items-center gap-1.5 text-xs font-mono transition-colors ${
                isScrolled ? 'text-[#12372A]' : 'text-white/90'
              }`}
              title="Téléphone officiel"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{practicalInfo.contacts.phone}</span>
            </a>

            {/* CTA principal vert #12372A text #FAF9F6 */}
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF9F6] bg-[#12372A] hover:bg-[#1B4332] active:scale-98 transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              Réserver
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-1.5 ${isScrolled ? 'text-[#12372A]' : 'text-white'}`}
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer - Fullscreen Luxury Typography 32px Playfair */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-[#FAF9F6] border-l border-[#E8DCC8] shadow-2xl p-8 flex flex-col justify-between overflow-y-auto text-[#151515]">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E8DCC8]">
                <div>
                  <span className="font-serif text-2xl text-[#12372A] block leading-none">
                    WINI WINI
                  </span>
                  <span className="text-[10px] tracking-[0.3em] text-[#1B4332] uppercase">
                    ISLAND
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-[#12372A]"
                  aria-label="Fermer le menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="mt-10 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-3xl text-[#12372A] hover:text-[#1B4332] transition-colors py-2 border-b border-[#E8DCC8]/40"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#E8DCC8] space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-4 text-center font-semibold text-xs uppercase tracking-widest text-[#FAF9F6] bg-[#12372A] hover:bg-[#1B4332] transition-colors shadow-sm"
              >
                Réserver une table ou un transat
              </button>

              <div className="text-xs text-[#151515]/70 space-y-1 text-center font-light">
                <p>86XX+78 Hio Houta, Togbin</p>
                <p className="font-mono font-semibold text-[#12372A]">{practicalInfo.contacts.phone}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
