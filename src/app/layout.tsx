import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Le Motif Prod | Studio Photographique & Production Visuelle de Prestige',
  description:
    'Studio de photographie & production audiovisuelle haut de gamme à Paris. Portraits de caractère, mode, campagnes de marque corporate, reportages mariages et vidéos drone 4K.',
  keywords: [
    'photographe paris',
    'studio photo professionnel',
    'portrait corporate',
    'shooting mode éditorial',
    'reportage mariage haut de gamme',
    'production vidéo 4K drone',
    'le motif prod',
  ],
  authors: [{ name: 'Le Motif Prod' }],
  openGraph: {
    title: 'Le Motif Prod | Studio Photographique & Production Visuelle',
    description:
      'Capturer l’élégance, révéler l’émotion. Découvrez notre portfolio et réservez votre séance photo sur-mesure.',
    url: 'https://lemotifprod.fr',
    siteName: 'Le Motif Prod',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Le Motif Prod | Photographe Professionnel & Studio',
    description:
      'Portraits d’exception, éditoriaux de mode et campagnes de marque. Studio photo & vidéo haut de gamme.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Le Motif Prod',
    description: 'Studio Photographique et Production Visuelle d’Exception',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    telephone: '+33189472010',
    email: 'contact@lemotifprod.fr',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Paris',
      addressLocality: 'Paris',
      addressRegion: 'Île-de-France',
      postalCode: '75011',
      addressCountry: 'FR',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    priceRange: '€€€',
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#08090d] text-zinc-100 min-h-screen antialiased selection:bg-amber-400 selection:text-zinc-950">
        {children}
      </body>
    </html>
  );
}
