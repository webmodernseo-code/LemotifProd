"use client";

import { useEffect, useState, useMemo } from "react";
import { Header } from "@/components/ui/header-01";
import { Footer } from "@/components/ui/footer";
import { CoverflowCarousel, type CoverflowSlide } from "@/components/ui/coverflow-carousel";
import { InteractiveImageBentoGallery, type ImageItem } from "@/components/ui/bento-gallery";
import { CtaCard } from "@/components/ui/cta-card";
import { Camera, Film, Palette, Sparkles, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

// 🌟 Données pour la Galerie Bento Interactive
const ALL_GALLERY_ITEMS: ImageItem[] = [
  // 1. Photographie
  {
    id: "p1",
    type: "photo",
    category: "photo",
    badge: "Studio Pro",
    title: "Portrait Baroque & Lumière Rembrandt",
    desc: "Séance studio lumière sculptée haute précision sur capteur plein format 45MP.",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=650&auto=format&fit=crop&q=75",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "p2",
    type: "photo",
    category: "photo",
    badge: "Mariage d'Art",
    title: "Célébration Nuptiale & Émotion Pure",
    desc: "Reportage complet capturant les moments d'authenticité et d'amour.",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=650&auto=format&fit=crop&q=75",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "v1",
    type: "video",
    category: "video",
    badge: "Cinéma 4K RAW",
    title: "Spot Publicitaire Haute Couture",
    desc: "Tournage cinéma multicaméra avec étalonnage colorimétrique 10-bit.",
    url: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=650&auto=format&fit=crop&q=75",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-photographer-taking-photos-in-a-studio-41444-large.mp4",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: "a1",
    type: "poster",
    category: "poster",
    badge: "Affiche Fine Art",
    title: "Affiche Officielle Gala des Arts",
    desc: "Création graphique sur-mesure, typographie fine art et dorure numérique.",
    url: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=650&auto=format&fit=crop&q=75",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    id: "p3",
    type: "photo",
    category: "photo",
    badge: "Éditorial Mode",
    title: "Haute Joaillerie & Reflets Nacrés",
    desc: "Mise en valeur des textures d'orfèvrerie et éclat des gemmes précieuses.",
    url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=650&auto=format&fit=crop&q=75",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "v2",
    type: "video",
    category: "video",
    badge: "Clip Réalisation",
    title: "Court-Métrage & Sound Design 3D",
    desc: "Mise en scène immersive, prises de vues nocturnes et narration cinématographique.",
    url: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=650&auto=format&fit=crop&q=75",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-photographer-taking-photos-in-a-studio-41444-large.mp4",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "a2",
    type: "poster",
    category: "poster",
    badge: "Poster Cinéma",
    title: "Affiche Teaser Festival International",
    desc: "Composition visuelle sombre & textures argentiques 35mm.",
    url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=650&auto=format&fit=crop&q=75",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "p4",
    type: "photo",
    category: "photo",
    badge: "Corporate VIP",
    title: "Portraits Dirigeants & Institutionnel",
    desc: "Identité de marque forte et posture d'autorité pour conseils d'administration.",
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=650&auto=format&fit=crop&q=75",
    span: "md:col-span-2 md:row-span-1",
  },
];

// 🌟 Données pour le Carrousel 3D Coverflow
const CAROUSEL_FEATURED_SLIDES: CoverflowSlide[] = [
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80",
    title: "Portrait d'Art Studio",
    subtitle: "Lumière Rembrandt & Nacre",
    alt: "Portrait d'art en studio de luxe",
  },
  {
    src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900&auto=format&fit=crop&q=80",
    title: "Tournage Cinéma 4K",
    subtitle: "Optiques Plein Format RAW",
    alt: "Réalisation cinéma 4K studio",
  },
  {
    src: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=900&auto=format&fit=crop&q=80",
    title: "Affiche & Graphisme Fine Art",
    subtitle: "Édition Limitée & Typographie",
    alt: "Affiche artistique grand format",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&auto=format&fit=crop&q=80",
    title: "Mariages & Cérémonies",
    subtitle: "Reportage Émotionnel",
    alt: "Mariage haut de gamme",
  },
  {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&auto=format&fit=crop&q=80",
    title: "Haute Joaillerie & Mode",
    subtitle: "Campagnes Éditoriales",
    alt: "Photographie éditoriale de mode",
  },
];

// 🌟 Ruban de défilement infini 1 (Photos & Vidéos)
const INFINITE_RIBBON_1 = [
  {
    title: "Portraits Studio",
    badge: "Photo",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Cinéma 4K RAW",
    badge: "Vidéo",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Mariage d'Exception",
    badge: "Photo",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Éditorial Mode",
    badge: "Photo",
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Tournage Clip",
    badge: "Vidéo",
    img: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Corporate Prestige",
    badge: "Photo",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
  },
];

// 🌟 Ruban de défilement infini 2 (Affiches & Direction Graphique)
const INFINITE_RIBBON_2 = [
  {
    title: "Affiche Festival 2026",
    badge: "Affiche",
    img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Poster Gala VIP",
    badge: "Fine Art",
    img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Couverture Édition Limitée",
    badge: "Design",
    img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Poster Cinéma Indé",
    badge: "Affiche",
    img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Affiche Vernissage Art",
    badge: "Fine Art",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&auto=format&fit=crop&q=80",
  },
];

export function GaleriePage() {
  useEffect(() => {
    document.title = "Galerie | LEMOTIF PROD";
  }, []);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return ALL_GALLERY_ITEMS;
    return ALL_GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#08090C] text-white flex flex-col selection:bg-white selection:text-[#08090C] font-montserrat antialiased">
      {/* 🧭 Navigation Header Fixe */}
      <Header />

      <main className="flex-1 pt-24">
        {/* ==========================================================================
            1. HERO DE LA GALERIE — SOMBRE CINÉMATIQUE (DARK)
            ========================================================================== */}
        <section className="relative px-4 sm:px-6 lg:px-8 pt-12 pb-12 text-center overflow-hidden border-b border-[#1E2028] bg-[#08090C]">
          {/* Grille d'arrière-plan avec orbes givrés */}
          <div className="pixy-template-grid-bg" aria-hidden="true">
            <div className="pixy-bg-grid-line" />
            <div className="pixy-template-grid-vignette" />
          </div>

          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden z-0">
            <div style={{ position: 'absolute', top: '10%', left: '20%', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(165,185,232,0.12) 0%, transparent 70%)', filter: 'blur(70px)' }} />
            <div style={{ position: 'absolute', top: '25%', right: '15%', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,206,122,0.12) 0%, transparent 70%)', filter: 'blur(80px)' }} />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto space-y-4">
            {/* Badge supérieur */}
            <div className="flex justify-center mb-1">
              <span className="badge-premium-dark text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                Portfolio & Séries d'Art
              </span>
            </div>

            {/* Titre Principal sobre en casse standard */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-0.03em] leading-[1.08] text-gradient-metallic-dark font-montserrat">
              Galerie d'Art & Réalisations
            </h1>

            <p className="text-gray-300 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto font-normal leading-relaxed">
              Photographies d'exception, captations cinématographiques 4K et créations graphiques sur-mesure signées LEMOTIF PROD.
            </p>

            {/* Barre de filtres réactive et tactile */}
            <div className="pt-4 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              {[
                { id: "all", label: "Toutes les œuvres", icon: Layers },
                { id: "photo", label: "Photographie", icon: Camera },
                { id: "video", label: "Cinéma & Vidéos", icon: Film },
                { id: "poster", label: "Affiches & Fine Art", icon: Palette },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    className={cn(
                      "px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer select-none",
                      isActive
                        ? "bg-white text-[#08090C] shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105"
                        : "bg-white/[0.06] text-gray-300 hover:text-white hover:bg-white/[0.12] border border-white/10 backdrop-blur-md"
                    )}
                  >
                    <Icon className={cn("w-3.5 h-3.5", isActive ? "stroke-[#08090C]" : "stroke-gray-400")} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==========================================================================
            2. SECTION CARROUSEL 3D COVERFLOW — CLAIR ÉPURÉ (LIGHT)
            ========================================================================== */}
        <section className="py-16 sm:py-20 bg-[#F8F9FC] text-gray-900 border-b border-gray-200/80 relative overflow-hidden">
          {/* Grille géométrique subtile Light Mode */}
          <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" aria-hidden="true" />
          
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden z-0">
            <div style={{ position: 'absolute', top: '-10%', right: '8%', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(220,230,250,0.5) 0%, transparent 70%)', filter: 'blur(70px)' }} />
            <div style={{ position: 'absolute', bottom: '-8%', left: '6%', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,235,210,0.4) 0%, transparent 70%)', filter: 'blur(70px)' }} />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-3 mb-8 relative z-10">
            <div className="flex justify-center">
              <span className="badge-premium-light text-[11px] shadow-2xs">
                <Sparkles className="w-3 h-3 text-gray-900 mr-1.5" />
                Sélection Maître · Pièces d'Exception
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 font-montserrat">
              Chef-d'œuvres à l'Affiche
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm lg:text-base max-w-xl mx-auto font-normal leading-relaxed">
              Faites glisser les œuvres pour contempler notre savoir-faire en studio et en extérieur.
            </p>
          </div>

          <div className="w-full max-w-5xl mx-auto px-2 relative z-10">
            <CoverflowCarousel
              slides={CAROUSEL_FEATURED_SLIDES}
              cardWidth="clamp(200px, 24vw, 300px)"
              rotate={28}
              depth={0.45}
              autoPlay={true}
              autoPlayInterval={3200}
              pauseOnHover={true}
              showCaption={true}
              showPagination={true}
              showNavigation={true}
            />
          </div>
        </section>

        {/* ==========================================================================
            3. SECTION BENTO GALLERY INTERACTIVE — SOMBRE HAUT DE GAMME (DARK)
            ========================================================================== */}
        <section className="bg-[#08090C] text-white border-b border-[#1E2028] relative">
          <InteractiveImageBentoGallery
            imageItems={filteredItems}
            title="Collection Bento Exploratoire"
            subtitle="Interaction Tactile & Plein Écran"
            description="Faites glisser latéralement pour parcourir les productions. Cliquez sur n'importe quel cadre pour ouvrir la vue haute définition."
            theme="dark"
          />
        </section>

        {/* ==========================================================================
            4. SECTION DÉFILEMENT INFINI DOUBLE RUBAN — CLAIR ÉPURÉ (LIGHT)
            ========================================================================== */}
        <section className="py-16 sm:py-24 bg-[#F8F9FC] text-gray-900 overflow-hidden relative border-b border-gray-200/80">
          {/* Grille géométrique subtile Light Mode */}
          <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" aria-hidden="true" />
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-3 mb-12 relative z-10">
            <div className="flex justify-center">
              <span className="badge-premium-light text-[11px] shadow-2xs">
                <Sparkles className="w-3 h-3 text-gray-900 mr-1.5" />
                Défilement Continu Sans Fin
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 font-montserrat">
              Flux Visuel Ininterrompu
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm lg:text-base max-w-xl mx-auto font-normal leading-relaxed">
              Affiches de gala, captures cinématographiques et séries photographiques en rotation perpétuelle.
            </p>
          </div>

          {/* Conteneur des rubans avec masques de fondu aux extrémités clairs */}
          <div className="relative w-full overflow-hidden py-3 z-10">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 md:w-48 lg:w-60 bg-gradient-to-r from-[#F8F9FC] via-[#F8F9FC]/90 to-transparent z-20"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 md:w-48 lg:w-60 bg-gradient-to-l from-[#F8F9FC] via-[#F8F9FC]/90 to-transparent z-20"
              aria-hidden="true"
            />

            {/* Ruban 1 : Défilement vers la gauche */}
            <div className="relative w-full overflow-hidden py-2">
              <div className="flex w-max gap-4 sm:gap-6 animate-marquee hover:[animation-play-state:paused]">
                {[...INFINITE_RIBBON_1, ...INFINITE_RIBBON_1, ...INFINITE_RIBBON_1].map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative w-64 sm:w-80 h-44 sm:h-52 rounded-2xl overflow-hidden shrink-0 border border-gray-200/90 bg-white shadow-[0_4px_18px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-gray-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] hover:scale-105 cursor-pointer"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-65 group-hover:opacity-85 transition-opacity" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md border border-white/15 text-white">
                        {item.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 inset-x-3 text-left">
                      <h4 className="text-xs sm:text-sm font-bold text-white font-montserrat tracking-tight leading-snug drop-shadow-sm">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ruban 2 : Défilement vers la droite (Inversé) */}
            <div className="relative w-full overflow-hidden py-2 mt-3">
              <div className="flex w-max gap-4 sm:gap-6 animate-marquee-reverse hover:[animation-play-state:paused]">
                {[...INFINITE_RIBBON_2, ...INFINITE_RIBBON_2, ...INFINITE_RIBBON_2].map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative w-64 sm:w-80 h-44 sm:h-52 rounded-2xl overflow-hidden shrink-0 border border-gray-200/90 bg-white shadow-[0_4px_18px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-gray-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] hover:scale-105 cursor-pointer"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-65 group-hover:opacity-85 transition-opacity" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md border border-white/15 text-[#F5CE7A]">
                        {item.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 inset-x-3 text-left">
                      <h4 className="text-xs sm:text-sm font-bold text-white font-montserrat tracking-tight leading-snug drop-shadow-sm">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            5. SECTION CTA DE RÉSERVATION & RETOUR STUDIO — SOMBRE LUXE (DARK)
            ========================================================================== */}
        <section className="bg-[#08090C] text-white py-20 px-4 sm:px-6 lg:px-8 relative border-b border-[#1E2028]">
          <div className="max-w-5xl mx-auto">
            <CtaCard
              title="Studio Lemotif Prod"
              subtitle="Votre projet mérite un regard d'exception."
              description="Séance portrait personnalisée, captation cinéma 4K d'événements ou création d'affiches grand format : concrétisez vos ambitions visuelles avec notre équipe."
              buttonText="Réserver une prestation"
              buttonHref="/#contact"
              imageSrc="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200&auto=format&fit=crop"
              imageAlt="Studio Lemotif Prod"
            />
          </div>
        </section>
      </main>

      {/* Footer Officiel LEMOTIF PROD */}
      <Footer />
    </div>
  );
}

export default GaleriePage;
