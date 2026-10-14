import type { Metadata } from "next";
import { GaleriePage } from "@/views/Galerie";
import { Providers } from "@/app/providers";

export const metadata: Metadata = {
  title: "Portfolio photo et vidéo",
  description: "Découvrez le portfolio Lemotif Prod : photographie de mariage, portraits, événements, films et productions audiovisuelles.",
  alternates: { canonical: "/galerie" },
};

export default function Page() { return <Providers><GaleriePage /></Providers>; }
