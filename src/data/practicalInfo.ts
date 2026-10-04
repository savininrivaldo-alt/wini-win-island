export interface FaqItem {
  question: string;
  answer: string;
  category: 'acces' | 'reservation' | 'piscine' | 'evenements';
}

export const practicalInfo = {
  address: {
    code: "86XX+78",
    village: "Hio Houta",
    district: "Togbin",
    commune: "Abomey-Calavi",
    country: "Bénin",
    full: "86XX+78 Hio Houta, Togbin, Abomey-Calavi, Bénin",
    landmark: "Embarcadère officiel à Hio Houta (Togbin), accessible via la Route des Pêches ou l'axe Cotonou-Calavi",
    coordinates: {
      lat: 6.3479694,
      lng: 2.2483739,
    },
    placeId: "ChIJ14g5HABZIxARyd0gnWjPdOI",
  },
  openingHours: [
    { day: "Vendredi", hours: "10h00 – 23h00", isOpen: true, note: "Sunset & Night Session" },
    { day: "Samedi", hours: "10h00 – 23h00", isOpen: true, note: "Journée & Ambiance Festive" },
    { day: "Dimanche", hours: "10h00 – 23h00", isOpen: true, note: "Journée Détente & Famille" },
    { day: "Lundi – Jeudi", hours: "Fermé", isOpen: false, note: "Sauf jours fériés ou groupes sur réservation" },
  ],
  pricingNotes: [
    {
      title: "Traversée en Pirogue",
      detail: "2 000 FCFA aller-retour par personne (gilets de sauvetage certifiés fournis)",
      badge: "2 000 FCFA A/R"
    },
    {
      title: "Accès Piscine & Transat",
      detail: "10 000 FCFA par personne (bassin rafraîchissant, transats et solarium)",
      badge: "10 000 FCFA"
    },
    {
      title: "Restauration à la Carte",
      detail: "Plats de 6 500 FCFA à 16 000 FCFA (poissons frais braisés, grillades, burgers)",
      badge: "6 500 – 16 000 FCFA"
    },
    {
      title: "Moyens de Paiement",
      detail: "MTN Mobile Money, Moov Money, Espèces (FCFA) et Cartes Bancaires (Visa / Mastercard)",
      badge: "Mobile Money & Cartes"
    }
  ],
  contacts: {
    phone: "01 99 11 67 67",
    phoneInternational: "+229 01 99 11 67 67",
    phoneDisplay: "01 99 11 67 67",
    whatsapp: "2290199116767",
    whatsappDisplay: "+229 01 99 11 67 67",
    email: "winiwinisland@gmail.com",
    instagram: "@winiwiniisland",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=6.3479694,2.2483739&query_place_id=ChIJ14g5HABZIxARyd0gnWjPdOI",
    googleReviewRating: "4.7",
    googleReviewCount: "30",
  },
  faqs: [
    {
      question: "Quels sont les jours et horaires d'ouverture ?",
      answer: "WINI WINI ISLAND est ouvert du vendredi au dimanche de 10h00 à 23h00 sans interruption. Du lundi au jeudi, l'établissement est fermé au public (ouvert uniquement lors des jours fériés ou pour les privatisations et groupes sur réservation préalable).",
      category: "acces"
    },
    {
      question: "Quels sont les tarifs officiels (pirogue et piscine) ?",
      answer: "Conformément aux tarifs officiels affichés : la traversée aller-retour en pirogue est fixée à 2 000 FCFA par personne (gilets de sauvetage inclus). L'accès à la piscine et à l'espace transat est fixé à 10 000 FCFA par personne. Les plats au restaurant oscillent entre 6 500 FCFA et 16 000 FCFA.",
      category: "reservation"
    },
    {
      question: "Comment se déroule la traversée en pirogue ?",
      answer: "Rendez-vous à l'embarcadère officiel à Hio Houta (Togbin). La pirogue traditionnelle motorisée ou guidée vous prend en charge pour 5 minutes de glisse paisible sur la lagune. Des gilets de sauvetage adaptés aux enfants et adultes sont obligatoires et mis à disposition.",
      category: "acces"
    },
    {
      question: "Y a-t-il un parking surveillé à l'embarcadère ?",
      answer: "Oui, un espace de stationnement gardé et sécurisé est aménagé directement à l'embarcadère de Hio Houta pour votre véhicule pendant votre séjour sur l'île.",
      category: "acces"
    },
    {
      question: "Faut-il obligatoirement réserver avant de venir ?",
      answer: "La réservation est très vivement recommandée, en particulier pour les vendredis soirs, samedis et dimanches afin de garantir votre table sur pilotis, vos transats au bord du bassin ou votre embarquement prioritaire.",
      category: "reservation"
    },
    {
      question: "Peut-on privatiser l'établissement ou organiser un événement ?",
      answer: "Oui, nous accueillons anniversaires, mariages intimes, déjeuners d'entreprise et réceptions privées. Contactez-nous au 01 99 11 67 67 ou sur WhatsApp (+229 01 99 11 67 67) pour un devis personnalisé.",
      category: "evenements"
    }
  ] as FaqItem[]
};
