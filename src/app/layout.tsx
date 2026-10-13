import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/index.css";

export const metadata: Metadata = {
  title: "LEMOTIF PROD | Photographie & Vidéographie Professionnelle",
  description: "Production visuelle d'exception : photographie, vidéo, événements, portraits et direction artistique.",
  metadataBase: new URL("https://lemotifprod.com"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "LEMOTIF PROD | Photographie & Vidéographie Professionnelle",
    description: "Production photographique d'art et réalisation vidéo cinématographique à Ouagadougou.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr" className="dark scroll-smooth" suppressHydrationWarning>
      <body className="bg-[#08090C] text-[#F3F4F6] font-sans antialiased selection:bg-[#EFA31D] selection:text-black">
        {children}
      </body>
    </html>
  );
}
