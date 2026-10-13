import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/portfolio", destination: "/galerie", permanent: true },
      { source: "/mentions", destination: "/mentions-legales", permanent: true },
      { source: "/confidentialite", destination: "/politique-de-confidentialite", permanent: true },
      { source: "/cgv", destination: "/conditions-generales-vente", permanent: true },
      { source: "/donnees", destination: "/protection-des-donnees", permanent: true },
    ];
  },
};

export default nextConfig;
