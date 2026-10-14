import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lemotifprod.com"),
  title: {
    default: "Lemotif Prod | Photographe & vidéaste en France, Côte d’Ivoire et Burkina Faso",
    template: "%s | Lemotif Prod",
  },
  description: "Lemotif Prod, photographe et vidéaste professionnel pour mariages, événements, portraits, entreprises et productions audiovisuelles en France, Côte d’Ivoire et Burkina Faso.",
  keywords: [
    "Lemotif", "Lemotif Prod", "LemotifProd", "photographe professionnel",
    "vidéaste professionnel", "photographe France", "photographe Côte d’Ivoire",
    "photographe Burkina Faso", "photographe Ouagadougou", "photographe mariage",
    "photographe événementiel", "production audiovisuelle", "vidéaste mariage",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.lemotifprod.com",
    siteName: "Lemotif Prod",
    title: "Lemotif Prod | Photographe & vidéaste professionnel",
    description: "Photographie, vidéo, mariages, événements et production audiovisuelle en France, Côte d’Ivoire et Burkina Faso.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lemotif Prod | Photographe & vidéaste professionnel",
    description: "Photographie et production audiovisuelle en France, Côte d’Ivoire et Burkina Faso.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Lemotif Prod",
  alternateName: ["LEMOTIF PROD", "LemotifProd"],
  url: "https://www.lemotifprod.com",
  email: "contact@lemotifprod.com",
  description: "Studio de photographie, vidéographie et production audiovisuelle pour particuliers, événements et entreprises.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ouagadougou",
    addressCountry: "BF",
  },
  areaServed: [
    { "@type": "Country", name: "Burkina Faso" },
    { "@type": "Country", name: "Côte d’Ivoire" },
    { "@type": "Country", name: "France" },
  ],
  serviceType: [
    "Photographie professionnelle", "Photographie de mariage",
    "Photographie événementielle", "Portrait professionnel",
    "Vidéographie", "Production audiovisuelle",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr" className="dark scroll-smooth" suppressHydrationWarning>
      <body className="bg-[#08090C] text-[#F3F4F6] font-sans antialiased selection:bg-[#EFA31D] selection:text-black">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
