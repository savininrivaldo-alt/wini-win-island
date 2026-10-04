export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'poissons' | 'grillades' | 'burgers' | 'cocktails' | 'desserts';
  highlight?: string;
  isChefSpecial?: boolean;
  accompaniments?: string;
}

export const menuCategories = [
  { id: 'poissons', label: 'Poissons & Fruits de Mer' },
  { id: 'grillades', label: 'Grillades & Plats Béninois' },
  { id: 'burgers', label: 'Burgers Gourmets & Snack Chic' },
  { id: 'cocktails', label: 'Cocktails Signatures & Bar' },
  { id: 'desserts', label: 'Douceurs & Desserts' },
] as const;

export const menuItems: MenuItem[] = [
  // Poissons & Fruits de Mer
  {
    id: 'carpe-braisee',
    name: 'Carpe Fraîche de la Lagune Braisée',
    description: 'Carpe entière pêchée du matin dans la lagune de Togbin, marinée aux herbes indigènes et piment doux, braisée à la braise de bois d\'acacia.',
    price: '9 000 FCFA',
    category: 'poissons',
    highlight: 'Pêche locale du jour',
    isChefSpecial: true,
    accompaniments: 'Servi avec attiéké frais, alloco fondant ou frites de patate douce'
  },
  {
    id: 'capitaine-grille',
    name: 'Pavé de Capitaine au Feu de Bois',
    description: 'Filet de capitaine sauvage croustillant côté peau, chair nacrée et tendre, émulsion citronnelle et poivre de Penja.',
    price: '11 500 FCFA',
    category: 'poissons',
    isChefSpecial: true,
    accompaniments: 'Riz parfumé au curcuma et légumes sautés'
  },
  {
    id: 'gambas-marinees',
    name: 'Gambas Géantes Flambées au Bar',
    description: 'Gambas royales saisies à la plancha, déglacées à la réduction d\'agrumes béninois, ail confit et coriandre fraîche.',
    price: '14 000 FCFA',
    category: 'poissons',
    highlight: 'Signature marine',
    accompaniments: 'Frites croustillantes et sauce créole maison'
  },
  {
    id: 'marmite-lagunaire',
    name: 'Marmite de Crustacés & Poissons Wini Wini',
    description: 'Poêlon traditionnel mijoté de poissons nobles, crevettes de lagune, tomates fraîches, gingembre et piment végétarien.',
    price: '16 000 FCFA',
    category: 'poissons',
    highlight: 'À partager',
    accompaniments: 'Riz brisé blanc & banane plantain vapeur'
  },

  // Grillades & Plats Béninois
  {
    id: 'poulet-bicyclette',
    name: 'Poulet Bicyclette Braisé Façon Hio Houta',
    description: 'Poulet local fermier mariné 24h dans notre marinade secrète de moutarde, gingembre et ail des collines, doré lentement au feu doux.',
    price: '8 500 FCFA',
    category: 'grillades',
    highlight: 'Incontournable Béninois',
    isChefSpecial: true,
    accompaniments: 'Alloco crousti-moelleux & sauce piment doux'
  },
  {
    id: 'cotes-agneau',
    name: 'Côtes d\'Agneau Caramélisées au Miel Sauvage',
    description: 'Carré d\'agneau braisé minute aux épices d\'Afrique de l\'Ouest, glacé au miel sauvage de Savè et romarin.',
    price: '13 000 FCFA',
    category: 'grillades',
    accompaniments: 'Écrasé de patate douce au beurre clarifié'
  },
  {
    id: 'brochettes-filet',
    name: 'Brochettes de Filet de Bœuf (Suya Style)',
    description: 'Dés de filet tendre saupoudrés de kankan maison (épices tchadiennes/béninoises torréfiées), oignons doux et tomates cerises.',
    price: '7 500 FCFA',
    category: 'grillades',
    accompaniments: 'Frites maison ou alloco'
  },
  {
    id: 'chawarma-gourmet',
    name: 'Pita d\'Agneau Effiloché & Épices Douces',
    description: 'Pain pita artisanal chaud garni d\'agneau rôti lentement, sauce tahini au citron vert, grenade et menthe.',
    price: '6 500 FCFA',
    category: 'grillades',
    accompaniments: 'Salade croquante de concombre à la menthe'
  },

  // Burgers & Snack Chic
  {
    id: 'burger-wini-wini',
    name: 'Burger Signature « Wini Wini »',
    description: 'Pain brioché maison, steak de bœuf local façonné à la main, cheddar affiné, compotée d\'oignons caramélisés au jus de canne, bacon croustillant et sauce secrète.',
    price: '8 000 FCFA',
    category: 'burgers',
    highlight: 'Best-Seller',
    isChefSpecial: true,
    accompaniments: 'Frites dorées au couteau & mayonnaise au piment fumé'
  },
  {
    id: 'burger-lagoon-fish',
    name: 'Crispy Lagoon Fish Burger',
    description: 'Filet de poisson blanc en chapelure panko croustillante, sauce tartare aux câpres et citron vert de Togbin, roquette fraîche.',
    price: '7 500 FCFA',
    category: 'burgers',
    accompaniments: 'Chips de banane plantain salées'
  },
  {
    id: 'club-sandwich-insulaire',
    name: 'Club Sandwich du Piroguier',
    description: 'Pain de campagne toasté, suprême de volaille fumé, œuf bio mollet, avocat frais de saison et tomates mûres.',
    price: '6 500 FCFA',
    category: 'burgers',
    accompaniments: 'Frites maison ou salade verte'
  },

  // Cocktails Signatures & Bar
  {
    id: 'togbin-breeze',
    name: 'Togbin Breeze (Signature)',
    description: 'Rhum ambré vieilli, jus d\'ananas pain de sucre d\'Allada fraîchement pressé, purée de fruit de la passion, zeste de citron vert et sirop de gingembre artisanal.',
    price: '5 000 FCFA',
    category: 'cocktails',
    highlight: 'Cocktail Emblématique',
    isChefSpecial: true,
  },
  {
    id: 'sunset-pilot',
    name: 'Sunset sur Pilotis',
    description: 'Gin infusé à l\'hibiscus (Bissap grand cru), tonic premium, touche de fleur de sureau et baie de genièvre torréfiée.',
    price: '5 500 FCFA',
    category: 'cocktails',
  },
  {
    id: 'lagoon-spritz',
    name: 'Lagoon Spritz Tropical',
    description: 'Prosecco DOC, liqueur d\'amaretto, cordial de mangue sauvage, eau pétillante et tranche d\'orange séchée.',
    price: '6 000 FCFA',
    category: 'cocktails',
  },
  {
    id: 'virgin-coco-paradise',
    name: 'Virgin Coco Paradise (Sans Alcool)',
    description: 'Eau de coco fraîche extraite à la minute, nectar de corossol, jus de lime et feuille de menthe froissée.',
    price: '4 000 FCFA',
    category: 'cocktails',
    highlight: 'Rafraîchissement Pur',
  },

  // Douceurs & Desserts
  {
    id: 'ananas-pain-sucre',
    name: 'Carpaccio d\'Ananas d\'Allada Rôti au Four',
    description: 'Fines lamelles d\'ananas béninois caramélisées à la vanille de Madagascar, sorbet mangue maison et crumble de manioc doré.',
    price: '4 500 FCFA',
    category: 'desserts',
    isChefSpecial: true,
  },
  {
    id: 'fondant-chocolat-baobab',
    name: 'Fondant Cacao Intense & Cœur Praliné',
    description: 'Chocolat noir 70% équitable, cœur fondant à la pâte de noisette, servi tiède avec glace vanille bourbon.',
    price: '5 000 FCFA',
    category: 'desserts',
  },
  {
    id: 'coupe-glacee-tropicale',
    name: 'Coupe Glacée des Îles',
    description: 'Trois boules de glaces artisanales (Corossol, Coco grillée, Passion), coulis de fruits rouges et éclats de meringue.',
    price: '4 000 FCFA',
    category: 'desserts',
  }
];
