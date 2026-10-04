export interface ExperienceStep {
  step: string;
  order: number;
  verb: string;
  title: string;
  subtitle: string;
  description: string;
  photoSrc: string;
  photoAlt: string;
}

export const experienceSteps: ExperienceStep[] = [
  {
    step: "01",
    order: 1,
    verb: "ARRIVER",
    title: "Hio Houta, Togbin",
    subtitle: "Quitter le bruit de la ville et saluer la rive de Togbin",
    description: "À quelques minutes de Cotonou et Calavi, l'embarcadère privé de Hio Houta vous accueille avec son parking sécurisé et la brise douce de la lagune.",
    photoSrc: "/images/gallery/IMG-20261004-WA0006.jpg",
    photoAlt: "Arrivée et embarcadère officiel à Hio Houta"
  },
  {
    step: "02",
    order: 2,
    verb: "TRAVERSER",
    title: "5 min en Pirogue",
    subtitle: "Une glisse paisible sur l'eau pour déconnecter",
    description: "Montez à bord de la pirogue traditionnelle. En 5 minutes au fil des reflets de Togbin, le temps s'arrête. Gilets homologués fournis pour tous.",
    photoSrc: "/images/gallery/arrivee-pirogue.jpg",
    photoAlt: "La traversée en pirogue traditionnelle sur la lagune"
  },
  {
    step: "03",
    order: 3,
    verb: "SAVOURER",
    title: "Table & Piscine",
    subtitle: "Poissons braisés au feu de bois et baignade turquoise",
    description: "Dégustez la pêche du matin aux aromates béninois, savourez un cocktail frais et plongez dans notre piscine bordée de transats confortables.",
    photoSrc: "/images/gallery/plat-poisson-riz.jpg",
    photoAlt: "Plat de poisson braisé et moment piscine"
  },
  {
    step: "04",
    order: 4,
    verb: "PROFITER",
    title: "Sunset & Vibe",
    subtitle: "Lumières tamisées sur les pilotis et mélodies douces",
    description: "Quand le crépuscule dore la lagune, les passerelles en bois s'illuminent. Le bar s'anime avec des cocktails créatifs et une ambiance feutrée.",
    photoSrc: "/images/gallery/passerelle-illuminee.jpg",
    photoAlt: "Coucher de soleil et passerelle illuminée de nuit"
  }
];
