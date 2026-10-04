export interface GalleryItem {
  id: string;
  src: string;
  originalFileName: string;
  alt: string;
  title: string;
  category: 'experience' | 'restaurant' | 'piscine' | 'ambiance' | 'pirogue';
  description: string;
  aspectRatio?: '16/9' | '4/3' | '3/4' | '1/1';
  featured?: boolean;
  tagline?: string;
  timeOfDay?: 'journée' | 'coucher du soleil' | 'nuit';
}

export const officialTariffSign = {
  id: "panneau-officiel",
  src: "/images/gallery/panneau-officiel.jpg",
  originalFileName: "IMG-20261004-WA0010.jpg",
  alt: "Panneau officiel des tarifs affiché à WINI WINI ISLAND",
  title: "Tarifs Officiels & Contacts",
  description: "Tarifs affichés sur place : Pirogue 2 000 FCFA A/R, Piscine 10 000 FCFA, Tél : 01 99 11 67 67."
};

export const gallery: GalleryItem[] = [
  {
    id: "restaurant-sunset",
    src: "/images/gallery/restaurant-sunset.jpg",
    originalFileName: "IMG-20261004-WA0012.jpg",
    alt: "Restaurant WINI WINI ISLAND sur pilotis au coucher du soleil à Togbin",
    title: "Restaurant sur Pilotis au Crépuscule",
    category: "experience",
    description: "La grande bâtisse traditionnelle en bois sous son toit de chaume majestueux, illuminée de lampions chauds se reflétant dans les eaux calmes au crépuscule.",
    aspectRatio: "16/9",
    featured: true,
    tagline: "Architecture Émouvante",
    timeOfDay: "coucher du soleil"
  },
  {
    id: "passerelle-illuminee",
    src: "/images/gallery/passerelle-illuminee.jpg",
    originalFileName: "IMG-20261004-WA0011.jpg",
    alt: "Passerelle en bois illuminée traversant la mangrove de nuit à WINI WINI ISLAND",
    title: "La Passerelle Lumineuse",
    category: "ambiance",
    description: "Une longue coursive en bois à rambardes croisées bordée de projecteurs au sol, reliant les pontons à travers la végétation tropicale sous le ciel nocturne.",
    aspectRatio: "4/3",
    featured: true,
    tagline: "Élégance Nocturne",
    timeOfDay: "nuit"
  },
  {
    id: "arrivee-pirogue",
    src: "/images/gallery/arrivee-pirogue.jpg",
    originalFileName: "IMG-20261004-WA0006.jpg",
    alt: "Vue depuis la pirogue bleue arrivant à l'embarcadère en bois Wini Wini",
    title: "L'Accostage en Pirogue",
    category: "pirogue",
    description: "Vue poétique depuis la proue de la pirogue bleue voguant sur la lagune vers l'embarcadère officiel en bois brut marqué 'Wini Wini' au cœur de la mangrove.",
    aspectRatio: "16/9",
    featured: true,
    tagline: "Le Rituel de Traversée",
    timeOfDay: "journée"
  },
  {
    id: "plat-poisson-riz",
    src: "/images/gallery/plat-poisson-riz.jpg",
    originalFileName: "IMG-20261004-WA0009.jpg",
    alt: "Plat de poisson frais de la lagune braisé aux tomates et oignons, servi avec riz et alloco",
    title: "Poisson Braisé & Saveurs du Terroir",
    category: "restaurant",
    description: "Poisson entier crousti-moelleux garni de concassé de tomates et oignons doux, dôme de riz blanc, piment vert maison et bananes plantains alloco.",
    aspectRatio: "4/3",
    featured: true,
    tagline: "Pêche Fraîche de Togbin",
    timeOfDay: "journée"
  },
  {
    id: "piscine-detente",
    src: "/images/gallery/piscine-detente.jpg",
    originalFileName: "IMG-20261004-WA0005.jpg",
    alt: "Grande piscine turquoise avec parasols blancs et transats solarium sous les palmiers",
    title: "L'Oasis Piscine & Solarium",
    category: "piscine",
    description: "Bassin lagunaire aux courbes douces, eau cristalline turquoise, transats confortables et parasols blancs pour les baignades ensoleillées à Togbin.",
    aspectRatio: "16/9",
    featured: true,
    tagline: "Détente & Fraîcheur",
    timeOfDay: "journée"
  },
  {
    id: "bar-restaurant-nuit",
    src: "/images/gallery/bar-restaurant-nuit.jpg",
    originalFileName: "IMG-20261004-WA0004.jpg",
    alt: "Bar pavillon extérieur illuminé avec clients attablés sous le ciel nocturne",
    title: "Le Bar Pavillon sous les Étoiles",
    category: "ambiance",
    description: "Architecture moderne ouverte avec bar en pierre naturelle, suspensions tamisées et convives savourant un cocktail sur la pelouse et le sable à la nuit tombée.",
    aspectRatio: "16/9",
    featured: true,
    tagline: "Ambiance Lounge",
    timeOfDay: "nuit"
  },
  {
    id: "burger-cocktail-nuit",
    src: "/images/gallery/burger-cocktail-nuit.jpg",
    originalFileName: "IMG-20261004-WA0008.jpg",
    alt: "Burger gourmet artisanal, frites dorées et cocktail glacé sur la terrasse illuminée",
    title: "Burger Gourmet & Cocktail Nocturne",
    category: "restaurant",
    description: "Gourmandise contemporaine : burger généreux en papier kraft, frites dorées croustillantes et cocktail rafraîchissant aux agrumes face aux pilotis illuminés.",
    aspectRatio: "4/3",
    featured: false,
    tagline: "Mixologie & Snacking Chic",
    timeOfDay: "nuit"
  },
  {
    id: "terrasse-exterieure",
    src: "/images/gallery/terrasse-exterieure.jpg",
    originalFileName: "IMG-20261004-WA0003.jpg",
    alt: "Terrasse contemporaine avec fauteuils tressés et tables hautes face à la piscine",
    title: "Terrasse Lounge & Vue Bassin",
    category: "experience",
    description: "Espace détente raffiné aux assises tressées en rotin noir, tables de bar et vue dégagée sur les pelouses verdoyantes et le miroir d'eau de la piscine.",
    aspectRatio: "4/3",
    featured: false,
    tagline: "Vue Panoramique",
    timeOfDay: "journée"
  },
  {
    id: "restaurant-pilotis",
    src: "/images/gallery/restaurant-pilotis.jpg",
    originalFileName: "IMG-20261004-WA0002.jpg",
    alt: "Bâtisse sur pilotis de WINI WINI ISLAND avec reflets dans les bassins d'eau",
    title: "Le Sanctuaire Flottant",
    category: "experience",
    description: "Hommage à l'architecture lacustre béninoise : bois noble, toiture végétale et chaleureuse hospitalité dans le calme de Hio Houta.",
    aspectRatio: "3/4",
    featured: true,
    tagline: "Évasion Naturelle",
    timeOfDay: "coucher du soleil"
  }
];

export const galleryCategories = [
  { id: 'all', label: 'Toutes les photos' },
  { id: 'experience', label: "L'Architecture & Pilotis" },
  { id: 'restaurant', label: 'Restaurant & Carte' },
  { id: 'pirogue', label: 'La Pirogue' },
  { id: 'piscine', label: 'Piscine & Solarium' },
  { id: 'ambiance', label: 'Ambiance & Nuit' },
] as const;

export default gallery;
