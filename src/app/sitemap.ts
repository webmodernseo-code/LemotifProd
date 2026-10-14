import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.lemotifprod.com";
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/galerie`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/mentions-legales`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/politique-de-confidentialite`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/conditions-generales-vente`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/protection-des-donnees`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}
