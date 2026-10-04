import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import ExperienceJourney from './components/sections/ExperienceJourney';
import PirogueFeature from './components/sections/PirogueFeature';
import RestaurantSection from './components/sections/RestaurantSection';
import PoolLoungeSection from './components/sections/PoolLoungeSection';
import SunsetSignatureSection from './components/sections/SunsetSignatureSection';
import EventsSection from './components/sections/EventsSection';
import GallerySection from './components/sections/GallerySection';
import PracticalInfoSection from './components/sections/PracticalInfoSection';
import Footer from './components/layout/Footer';
import BookingModal from './components/modals/BookingModal';
import LightboxModal from './components/modals/LightboxModal';
import PhotoManagerModal from './components/modals/PhotoManagerModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [lightboxPhotoSrc, setLightboxPhotoSrc] = useState<string | null>(null);
  const [isPhotoManagerOpen, setIsPhotoManagerOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleSelectPhoto = (photoSrc: string) => {
    setLightboxPhotoSrc(photoSrc);
  };

  const handleCloseLightbox = () => {
    setLightboxPhotoSrc(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#151515] flex flex-col font-sans selection:bg-[#12372A] selection:text-[#FAF9F6]">
      {/* Top Navigation: 64px mobile / 80px desktop */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Flow: Storytelling Arriver -> Traverser -> Découvrir -> Manger -> Piscine -> Sunset -> Nuit */}
      <main className="flex-1">
        {/* 1. Hero Cinématographique 100svh */}
        <HeroSection onOpenBooking={handleOpenBooking} />

        {/* 2. Intro "Bien plus qu'un restaurant" + 4 Étapes Visuelles */}
        <ExperienceJourney
          onOpenBooking={handleOpenBooking}
          onSelectPhoto={handleSelectPhoto}
        />

        {/* 3. La Traversée en Pirogue "Une île à part" */}
        <PirogueFeature
          onOpenBooking={handleOpenBooking}
          onSelectPhoto={handleSelectPhoto}
        />

        {/* 4. Restaurant & Saveurs (60/40 Editorial Layout Carpe Braisée + 3 plats) */}
        <RestaurantSection
          onOpenBooking={handleOpenBooking}
          onSelectPhoto={handleSelectPhoto}
        />

        {/* 5. Piscine Resort (90vw Photo + single sentence text) */}
        <PoolLoungeSection
          onOpenBooking={handleOpenBooking}
          onSelectPhoto={handleSelectPhoto}
        />

        {/* 6. Sunset Signature (Visual silence: "LE TEMPS SUSPENDU.") */}
        <SunsetSignatureSection onSelectPhoto={handleSelectPhoto} />

        {/* 7. Nuit & Wini Vibes (Background #151515, 1 grande photo nocturne bar) */}
        <EventsSection
          onOpenBooking={handleOpenBooking}
          onSelectPhoto={handleSelectPhoto}
        />

        {/* 8. Galerie Brute Asymétrique (9 photos officielles, aucun overlay) */}
        <GallerySection
          onSelectPhoto={handleSelectPhoto}
          onOpenPhotoManager={() => setIsPhotoManagerOpen(true)}
        />

        {/* 9. Infos Pratiques & Accès (Cartes blanches, Panneau officiel tarifs en FAQ) */}
        <PracticalInfoSection
          onOpenBooking={handleOpenBooking}
          onSelectPhoto={handleSelectPhoto}
        />
      </main>

      {/* 10. Footer Premium #12372A "À BIENTÔT SUR L'ÎLE." */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onOpenPhotoManager={() => setIsPhotoManagerOpen(true)}
      />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
      />

      <LightboxModal
        currentPhotoSrc={lightboxPhotoSrc}
        onClose={handleCloseLightbox}
        onNavigate={(newSrc) => setLightboxPhotoSrc(newSrc)}
      />

      <PhotoManagerModal
        isOpen={isPhotoManagerOpen}
        onClose={() => setIsPhotoManagerOpen(false)}
      />
    </div>
  );
}
