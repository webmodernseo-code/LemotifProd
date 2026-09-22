export interface PortfolioItem {
  id: string;
  title: string;
  category: 'portrait' | 'fashion' | 'corporate' | 'events' | 'video';
  categoryLabel: string;
  image: string;
  aspect: 'portrait' | 'landscape' | 'square';
  client?: string;
  year: string;
  specs: {
    camera: string;
    lens: string;
    aperture: string;
    shutter: string;
    iso: string;
  };
  description: string;
}

export interface ServicePackage {
  id: string;
  title: string;
  tagline: string;
  description: string;
  startingPrice: number;
  duration: string;
  deliverables: string[];
  popular?: boolean;
  idealFor: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar: string;
  rating: number;
  content: string;
  projectType: string;
  date: string;
}

export interface GearItem {
  category: string;
  name: string;
  spec: string;
  iconType: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Lueur d’Ombre & Clair-Obscur',
    category: 'portrait',
    categoryLabel: 'Portrait Artistique',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
    aspect: 'portrait',
    client: 'Agence Elite Model',
    year: '2025',
    specs: {
      camera: 'Sony Alpha 1',
      lens: 'FE 85mm f/1.4 GM',
      aperture: 'f/1.6',
      shutter: '1/250s',
      iso: '100',
    },
    description: 'Étude de lumière en studio sur fond texturé, jeu de contrastes profonds et grain subtil argentique.',
  },
  {
    id: 'port-2',
    title: 'Collection Automne - Maison Marais',
    category: 'fashion',
    categoryLabel: 'Mode & Éditorial',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
    aspect: 'portrait',
    client: 'Maison Marais Paris',
    year: '2025',
    specs: {
      camera: 'Sony A7R V',
      lens: 'FE 50mm f/1.2 GM',
      aperture: 'f/1.4',
      shutter: '1/800s',
      iso: '64',
    },
    description: 'Série éditoriale en lumière naturelle dans les ruelles historiques du Marais, colorimétrie chaude et tons veloutés.',
  },
  {
    id: 'port-3',
    title: 'Leadership & Vision Tech',
    category: 'corporate',
    categoryLabel: 'Corporate & Marque',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop',
    aspect: 'portrait',
    client: 'Venture Capital Paris',
    year: '2025',
    specs: {
      camera: 'Sony Alpha 1',
      lens: 'FE 135mm f/1.8 GM',
      aperture: 'f/2.0',
      shutter: '1/320s',
      iso: '125',
    },
    description: 'Portraits exécutifs modernes, posture confiante, arrière-plan urbain flouté au bokeh soyeux.',
  },
  {
    id: 'port-4',
    title: 'Union au Domaine de Chantilly',
    category: 'events',
    categoryLabel: 'Mariage d’Exception',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    aspect: 'landscape',
    client: 'Camille & Alexandre',
    year: '2024',
    specs: {
      camera: 'Sony A7R V',
      lens: 'FE 35mm f/1.4 GM',
      aperture: 'f/1.8',
      shutter: '1/1000s',
      iso: '100',
    },
    description: 'Capture d’émotions spontanées lors d’une réception privée, lumière dorée de fin de journée.',
  },
  {
    id: 'port-5',
    title: 'Architecture & Atmosphère Nocturne',
    category: 'video',
    categoryLabel: 'Vidéo & Cinéma',
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1200&auto=format&fit=crop',
    aspect: 'landscape',
    client: 'Studio Design & Co',
    year: '2025',
    specs: {
      camera: 'Sony FX3 Cinema Line',
      lens: 'FE 24-70mm f/2.8 GM II',
      aperture: 'f/2.8',
      shutter: '1/50s',
      iso: '800',
    },
    description: 'Prises de vue cinématographiques 4K 10-bit S-Log3, ambiance néon et composition géométrique.',
  },
  {
    id: 'port-6',
    title: 'Regard Intense & Texture Studio',
    category: 'portrait',
    categoryLabel: 'Portrait Studio',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200&auto=format&fit=crop',
    aspect: 'portrait',
    client: 'Book Comédienne',
    year: '2025',
    specs: {
      camera: 'Sony A7R V',
      lens: 'FE 85mm f/1.4 GM',
      aperture: 'f/2.0',
      shutter: '1/200s',
      iso: '100',
    },
    description: 'Éclairage Profoto mono-source en boîte à lumière octogonale avec réflecteur argenté pour un regard captivant.',
  },
  {
    id: 'port-7',
    title: 'Haute Horlogerie & Matières',
    category: 'corporate',
    categoryLabel: 'Packshot & Luxe',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
    aspect: 'square',
    client: 'Manufacture Horlogère',
    year: '2024',
    specs: {
      camera: 'Sony A7R V',
      lens: 'FE 90mm f/2.8 Macro G OSS',
      aperture: 'f/8.0',
      shutter: '1/160s',
      iso: '100',
    },
    description: 'Macro-photographie de précision avec focus stacking pour une netteté absolue sur chaque biseau.',
  },
  {
    id: 'port-8',
    title: 'Gala & Soirée Prestige',
    category: 'events',
    categoryLabel: 'Événementiel',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    aspect: 'landscape',
    client: 'Fondation d’Entreprise',
    year: '2025',
    specs: {
      camera: 'Sony Alpha 1',
      lens: 'FE 24-70mm f/2.8 GM II',
      aperture: 'f/2.8',
      shutter: '1/400s',
      iso: '1600',
    },
    description: 'Reportage immersif sans flash invasif, capturant l’authenticité des échanges et le prestige du lieu.',
  },
];

export const SERVICES_DATA: ServicePackage[] = [
  {
    id: 'portrait-art',
    title: 'Portrait & Book d’Artiste',
    tagline: 'Révélez votre authenticité et votre charisme',
    description: 'Séance sur-mesure pour comédiens, mannequins, artistes ou profils recherchant un portrait à forte signature visuelle.',
    startingPrice: 380,
    duration: '1h30 à 2h',
    deliverables: [
      'Consultation préalable & moodboard personnalisé',
      'Séance en studio professionnel ou lieu dédié',
      'Direction de pose attentive et bienveillante',
      '15 photos haute définition retouchées minutieusement',
      'Galerie privée en ligne sécurisée sous 72h',
      'Cession des droits d’image pour book & réseaux',
    ],
    idealFor: 'Comédiens, artistes, mannequins, particuliers exigeants',
    badge: 'Essentiel',
  },
  {
    id: 'brand-corporate',
    title: 'Campagne de Marque & Corporate',
    tagline: 'Sublimez l’image de marque de votre entreprise',
    description: 'Shooting d’équipe, portraits exécutifs, packshots produits haut de gamme et reportages d’ambiance en entreprise.',
    startingPrice: 790,
    duration: 'Demi-journée ou Journée',
    deliverables: [
      'Cadrage stratégique avec votre équipe de communication',
      'Portraits dirigeants & collaborateurs cohérents avec la charte',
      'Reportage en immersion (locaux, savoir-faire, interactions)',
      'Packshots produits haute résolution pour e-commerce & print',
      'Pack complet de 40 à 100+ visuels calibrés',
      'Cession intégrale des droits commerciaux (Web, Print, Presse)',
    ],
    popular: true,
    idealFor: 'Entreprises, marques de mode, startups, agences de com',
    badge: 'Le plus demandé',
  },
  {
    id: 'mariage-evenement',
    title: 'Reportage Événementiel & Mariage',
    tagline: 'Des souvenirs intemporels empreints d’émotion',
    description: 'Couverture discrète et élégante des moments décisifs, des rires complices et des décors minutieusement orchestrés.',
    startingPrice: 1490,
    duration: '6h à 14h de présence',
    deliverables: [
      'Rendez-vous préparatoire & repérage des lieux',
      'Présence des préparatifs jusqu’à la soirée dansante',
      'Photos de couple et moments volés sur le vif',
      '300 à 600+ photos retouchées avec notre colorimétrie signature',
      'Coffret prestige en bois précieux avec tirages Fine Art',
      'Accès galerie partagée pour tous vos invités en téléchargement libre',
    ],
    idealFor: 'Mariages haut de gamme, galas, anniversaires privés, lancements',
    badge: 'Prestige',
  },
  {
    id: 'video-drone',
    title: 'Production Vidéo & Drone 4K',
    tagline: 'Le mouvement et le souffle cinématographique',
    description: 'Films promotionnels, aftermovies d’événements, clips artistiques et prises de vue aériennes haute précision.',
    startingPrice: 950,
    duration: 'Sur devis personnalisé',
    deliverables: [
      'Scénarisation, découpage technique et tournage 4K 10-bit',
      'Prises de vue par drone télépiloté certifié DGAC',
      'Montage dynamique avec transitions fluides',
      'Étalonnage colorimétrique cinéma & mixage audio pro',
      'Déclinaisons aux formats 16:9 (Web/TV) et 9:16 (Reels/TikTok)',
      'Livraison des fichiers master prêts à diffuser',
    ],
    idealFor: 'Marques, organisateurs d’événements, hôtellerie & immobilier d’exception',
    badge: 'Cinéma',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sophie Valmont',
    role: 'Directrice Artistique',
    company: 'Maison Marais Paris',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    content: 'Une sensibilité artistique rare. Le Motif Prod a su capturer l’essence exacte de notre nouvelle collection avec une direction de lumière chirurgicale. Les retombées presse ont été exceptionnelles.',
    projectType: 'Campagne de Mode Éditoriale',
    date: 'Janvier 2025',
  },
  {
    id: 'test-2',
    name: 'Alexandre & Céline',
    role: 'Mariés',
    company: 'Château de Ferrières',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    content: 'Revoir notre album nous met les larmes aux yeux à chaque page. Une présence d’une discrétion absolue pendant la cérémonie et un talent fou pour saisir les regards complices. Merci infiniment !',
    projectType: 'Mariage d’Exception',
    date: 'Octobre 2024',
  },
  {
    id: 'test-3',
    name: 'Marc De Broglie',
    role: 'Co-fondateur & CEO',
    company: 'NovaCore Technologies',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    content: 'Nos portraits d’équipe ont transformé l’image de notre site et nos relations avec les investisseurs. Le professionnalisme, le timing tenu à la minute et la convivialité ont mis tout le monde à l’aise.',
    projectType: 'Portraits Corporate & Marque',
    date: 'Novembre 2024',
  },
];

export const GEAR_DATA: GearItem[] = [
  {
    category: 'Boîtiers Haute Définition',
    name: 'Sony Alpha 1 & A7R V (61 MP)',
    spec: 'Capteurs plein format haute résolution, dynamique de 15 stops et autofocus IA ultra-rapide.',
    iconType: 'camera',
  },
  {
    category: 'Optiques Cinéma & Prime',
    name: 'G Master f/1.2 & f/1.4 (24mm, 35mm, 50mm, 85mm, 135mm)',
    spec: 'Piqué d’une clarté absolue, rendu de flou d’arrière-plan (bokeh) soyeux et organique.',
    iconType: 'aperture',
  },
  {
    category: 'Lumière & Studio Mobile',
    name: 'Générateurs & Flashs Profoto B10X Plus',
    spec: 'Modelage de lumière haute précision en tout lieu avec modeleurs Profoto OCF & Clic.',
    iconType: 'sun',
  },
  {
    category: 'Aérien & Drone Certifié',
    name: 'DJI Mavic 3 Pro Cine (Capteur Hasselblad)',
    spec: 'Vidéos 5.1K Apple ProRes et photos aériennes haute fidélité avec pilote déclaré DGAC.',
    iconType: 'drone',
  },
  {
    category: 'Post-Production Calibrée',
    name: 'Écrans EIZO ColorEdge & Retouche Fine Art',
    spec: 'Étalonnage colorimétrique DCI-P3 / Adobe RGB certifié pour un rendu fidèle à l’impression.',
    iconType: 'monitor',
  },
  {
    category: 'Sécurité des Données',
    name: 'Double Enregistrement & Sauvegarde RAID',
    spec: 'Cartes mémoires CFexpress jumelées et archivage triple flux immédiat sur disques sécurisés.',
    iconType: 'shield',
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Sous quel délai recevrai-je mes photos après la séance ?',
    answer: 'Pour les séances portrait et corporate, votre galerie privée sécurisée est livrée sous 48h à 72h ouvrées. Pour les reportages de mariage et grands événements, le travail complet de tri et d’étalonnage méticuleux est finalisé sous 2 à 3 semaines.',
    category: 'Livraison',
  },
  {
    question: 'Comment se passe la sélection des photos à retoucher ?',
    answer: 'Après la séance, nous vous transmettons une planche-contact numérique avec l’ensemble des prises de vue brutes sélectionnées. Vous cochez directement vos clichés favoris que nous sublimons ensuite dans notre laboratoire numérique.',
    category: 'Processus',
  },
  {
    question: 'Vous déplacez-vous en dehors de Paris et de l’Île-de-France ?',
    answer: 'Absolument. Nous intervenons régulièrement sur toute la France ainsi qu’à l’international (Côte d’Azur, Provence, Suisse, Italie, destinations mariages). Les frais de déplacement et d’hébergement sont calculés au coût réel et en toute transparence.',
    category: 'Déplacements',
  },
  {
    question: 'Je n’ai jamais posé devant un objectif, est-ce un problème ?',
    answer: 'Pas du tout ! 80% de nos clients particuliers ou dirigeants ne sont pas des modèles professionnels. Notre rôle premier est de créer une atmosphère détendue et bienveillante, avec une direction de pose naturelle et guidée pas-à-pas.',
    category: 'Séance',
  },
  {
    question: 'Les droits d’utilisation commerciale sont-ils inclus ?',
    answer: 'Pour les prestations professionnelles (Corporate, Packshot, Marque), les droits de diffusion (site web, réseaux sociaux, dossiers de presse, rapports annuels) sont systématiquement inclus dans nos devis. Une licence étendue peut être établie sur demande pour l’affichage urbain ou TV.',
    category: 'Tarifs & Droits',
  },
  {
    question: 'Que se passe-t-il en cas de météo défavorable pour un shooting extérieur ?',
    answer: 'Nous surveillons la météo 48h à l’avance. En cas de pluie battante, nous convenons ensemble soit d’un repli en studio / lieu intérieur d’exception, soit d’un report de date sans aucun frais supplémentaire.',
    category: 'Organisation',
  },
];

export const STATS_DATA = [
  { value: '+8 ans', label: 'D’expérience photographique' },
  { value: '+450', label: 'Projets & shootings réalisés' },
  { value: '99.4%', label: 'Clients satisfaits 5 étoiles' },
  { value: '48h', label: 'Délai moyen de livraison express' },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Écoute & Moodboard',
    description: 'Nous échangeons sur vos attentes, votre univers, vos inspirations et définissons la direction artistique (tenues, lumière, lieux).',
  },
  {
    step: '02',
    title: 'Le Shooting & Direction',
    description: 'Une séance conviviale et structurée où vous êtes guidé avec précision dans une ambiance lumineuse sur-mesure.',
  },
  {
    step: '03',
    title: 'Retouche Haute Définition',
    description: 'Post-traitement manuel soigné (colorimétrie signature, nettoyage doux de peau sans effet plastique, gestion du micro-contraste).',
  },
  {
    step: '04',
    title: 'Galerie & Tirages Fine Art',
    description: 'Livraison de votre galerie privée haute définition et impression éventuelle sur papiers d’art Hahnemühle certifiés.',
  },
];
