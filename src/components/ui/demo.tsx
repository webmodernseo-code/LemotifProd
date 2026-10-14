"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Header } from "@/components/ui/header-01";
import { Footer } from "@/components/ui/footer";
import { FAQSection } from "@/components/ui/faq-section-shadcnui";
import { ArrowRight, Lock, Play, Sparkles, Image as ImageIcon, Maximize2 } from "lucide-react";
import { CtaCard } from "@/components/ui/cta-card";
import { CoverflowCarousel } from "@/components/ui/coverflow-carousel";
import { ParallaxScrollFeatureSection } from "@/components/ui/parallax-scroll-feature-section";
import { ExpertiseRotator } from "@/components/ui/text-marquee";
import { FlowButton } from "@/components/ui/flow-button";
import { ImageModal, type ImageItem } from "@/components/ui/bento-gallery";
import { AnimatePresence } from "framer-motion";

const HERO_SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=75",
    alt: "Portrait d'art en studio et lumière naturelle",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=75",
    alt: "Célébration et émotion de mariage d'exception",
  },
  {
    src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&auto=format&fit=crop&q=75",
    alt: "Production et réalisation cinématographique 4K",
  },
  {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop&q=75",
    alt: "Mode, Haute Joaillerie et Éditorial",
  },
  {
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&auto=format&fit=crop&q=75",
    alt: "Galas prestigieux et soirées privées",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=75",
    alt: "Portraits de dirigeants et identité d'entreprise",
  },
];

const HERO_AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&auto=format&fit=crop&q=75",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&auto=format&fit=crop&q=75",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&auto=format&fit=crop&q=75",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&auto=format&fit=crop&q=75",
];

// 🌟 PORTFOLIO SLIDER — Rangée 1 : Photos d'Art (Gauche ➔ Droite)
const PORTFOLIO_LANE_1: ImageItem[] = [
  {
    id: "l1-1",
    type: "photo",
    title: "Portrait d'Art Studio",
    badge: "Studio 45MP",
    desc: "Éclairage Rembrandt & textures de peau haute précision.",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=420&auto=format&fit=crop&q=75",
  },
  {
    id: "l1-2",
    type: "photo",
    title: "Mariage d'Exception",
    badge: "Cérémonie",
    desc: "Émotions brutes et instantanés poétiques.",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=420&auto=format&fit=crop&q=75",
  },
  {
    id: "l1-3",
    type: "photo",
    title: "Haute Joaillerie & Mode",
    badge: "Éditorial",
    desc: "Mise en lumière soyeuse des créations d'orfèvrerie.",
    url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=420&auto=format&fit=crop&q=75",
  },
  {
    id: "l1-4",
    type: "photo",
    title: "Dirigeants & Corporate",
    badge: "Prestige",
    desc: "Portraits institutionnels de haute autorité.",
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=420&auto=format&fit=crop&q=75",
  },
  {
    id: "l1-5",
    type: "photo",
    title: "Gala & Célébration",
    badge: "Événement",
    desc: "Ambiance nocturne festive et lumière tamisée.",
    url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=420&auto=format&fit=crop&q=75",
  },
];

// 🌟 PORTFOLIO SLIDER — Rangée 2 : Vidéos & Cinéma 4K (Droite ➔ Gauche)
const PORTFOLIO_LANE_2: ImageItem[] = [
  {
    id: "l2-1",
    type: "video",
    title: "Tournage Cinéma 4K RAW",
    badge: "Cinéma 4K",
    desc: "Prises de vues 10-bit multicaméra avec optiques cinéma.",
    url: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=420&auto=format&fit=crop&q=75",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-photographer-taking-photos-in-a-studio-41444-large.mp4",
  },
  {
    id: "l2-2",
    type: "video",
    title: "Court-Métrage & Narration",
    badge: "Fiction",
    desc: "Direction d'acteurs et sound design immersif 3D.",
    url: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=420&auto=format&fit=crop&q=75",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-photographer-taking-photos-in-a-studio-41444-large.mp4",
  },
  {
    id: "l2-3",
    type: "video",
    title: "Spot Publicitaire Marque",
    badge: "Commercial",
    desc: "Rythme dynamique et color grading cinématographique.",
    url: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=420&auto=format&fit=crop&q=75",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-photographer-taking-photos-in-a-studio-41444-large.mp4",
  },
  {
    id: "l2-4",
    type: "video",
    title: "Clip Musical d'Exception",
    badge: "Clip Vidéo",
    desc: "Mise en scène stylisée, fumigènes et jeux de néons.",
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=420&auto=format&fit=crop&q=75",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-photographer-taking-photos-in-a-studio-41444-large.mp4",
  },
];

// 🌟 PORTFOLIO SLIDER — Rangée 3 : Affiches & Direction Artistique (Gauche ➔ Droite)
const PORTFOLIO_LANE_3: ImageItem[] = [
  {
    id: "l3-1",
    type: "poster",
    title: "Affiche Officielle Festival",
    badge: "Affiche",
    desc: "Composition graphique sombre & typographie fine art.",
    url: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=420&auto=format&fit=crop&q=75",
  },
  {
    id: "l3-2",
    type: "poster",
    title: "Poster de Gala Prestige",
    badge: "Fine Art",
    desc: "Dorures numériques, contrastes profonds et finitions Canson.",
    url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=420&auto=format&fit=crop&q=75",
  },
  {
    id: "l3-3",
    type: "poster",
    title: "Création Visuelle Vernissage",
    badge: "Design",
    desc: "Mise en page éditoriale et charte graphique sur-mesure.",
    url: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=420&auto=format&fit=crop&q=75",
  },
  {
    id: "l3-4",
    type: "poster",
    title: "Affiche Cinéma Indépendant",
    badge: "Poster 4K",
    desc: "Grain argentique 35mm et esthétique rétro-moderne.",
    url: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=420&auto=format&fit=crop&q=75",
  },
];

export default function DemoOne() {
  const [lightboxItem, setLightboxItem] = useState<ImageItem | null>(null);
  const [contactSent, setContactSent] = useState(false);

  useEffect(() => {
    document.title = "LEMOTIF PROD | Photographie & Vidéographie Professionnelle";

  }, []);

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Demande de devis — ${String(data.get("service"))}`);
    const body = encodeURIComponent(
      `Nom : ${String(data.get("name"))}\nEmail : ${String(data.get("email"))}\nPrestation : ${String(data.get("service"))}\n\nMessage :\n${String(data.get("message"))}`
    );
    setContactSent(true);
    window.location.href = `mailto:contact@lemotifprod.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden font-montserrat antialiased bg-[#08090C]">
      <Header />
      <main className="flex-1">

        {/* ==========================================================================
            1. SECTION HERO — FOND SOMBRE CINÉMATOGRAPHIQUE & GRILLE VECTORIELLE
            ========================================================================== */}
        <section
          id="hero"
          className="min-h-screen flex flex-col items-center justify-center bg-[#08090C] text-[#F3F4F6] border-b border-[#1E2028] relative px-4 text-center pt-28 pb-16 overflow-hidden"
        >
          {/* 🌐 GRILLE VECTORIELLE DE FOND MULTI-COUCHE */}
          <div className="pixy-template-grid-bg" aria-hidden="true">
            <div className="pixy-bg-grid-line" />
            <div className="pixy-template-grid-vignette" />
          </div>

          {/* 🎬 ORBES D'AMBIANCE CINÉMA MULTI-TEINTES (ACCÉLÉRÉS GPU) */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden z-0">
            <div style={{ position: 'absolute', bottom: '-8%', left: '4%', width: '520px', height: '520px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,206,122,0.16) 0%, transparent 68%)', filter: 'blur(76px)', transform: 'translate3d(0,0,0)', willChange: 'transform' }} />
            <div style={{ position: 'absolute', bottom: '2%', left: '42%', width: '440px', height: '440px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(30,58,95,0.36) 0%, transparent 68%)', filter: 'blur(80px)', transform: 'translate3d(0,0,0)', willChange: 'transform' }} />
            <div style={{ position: 'absolute', bottom: '8%', right: '3%', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(210,215,235,0.18) 0%, transparent 68%)', filter: 'blur(64px)', transform: 'translate3d(0,0,0)', willChange: 'transform' }} />
          </div>

          {/* 🎬 VIDÉO DE FOND CINÉMATOGRAPHIQUE OPTIMISÉE (PRELOAD METADATA + POSTER) */}
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
            <img
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&auto=format&fit=crop&q=82"
              alt=""
              aria-hidden="true"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center scale-[1.01] opacity-75"
            />

            {/* 🌟 OVERLAY SOMBRE ÉPURÉ POUR UN CONTRASTE LUXE OPTIMAL */}
            <div className="absolute inset-0 bg-[#08090C]/35" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#08090C]/80 via-transparent to-[#08090C]/95" />
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto space-y-4 sm:space-y-5 w-full">
            {/* 🏷️ BADGE STATUS & ROTATION DES PÔLES D'EXPERTISE (DESIGN DISCRET & ÉPURÉ) */}
            <div className="flex justify-center mb-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12141C]/80 border border-white/10 text-white shadow-xs backdrop-blur-md select-none cursor-default">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0 shadow-[0_0_6px_#10B981]" />
                <ExpertiseRotator
                  items={[
                    "Photographie d'art & studio",
                    "Réalisation & cinéma 4K",
                    "Direction artistique & labo",
                    "Événements & séries de prestige",
                  ]}
                  duration={3200}
                />
              </div>
            </div>

            {/* 🔤 TITRE H1 MAJESTUEUX — GRAND IMPACT SUR MOBILE */}
            <div>
              <h1 className="text-[2.85rem] xs:text-5xl sm:text-6xl lg:text-7xl font-black tracking-[-0.03em] leading-[1.05] font-montserrat flex items-center justify-center gap-2.5 sm:gap-5 flex-wrap drop-shadow-md select-none">
                <span className="text-gradient-metallic-dark">
                  LEMOTIF
                </span>
                <span className="text-gradient-champagne relative inline-flex items-center">
                  PROD
                  <span className="absolute -inset-x-3 -inset-y-1 bg-white/10 blur-2xl rounded-full pointer-events-none" />
                </span>
              </h1>
            </div>
            
            {/* 🌟 ACCROCHE ÉPURÉE */}
            <div className="max-w-2xl mx-auto space-y-1.5 pt-0.5">
              <p className="text-[#FFF0C4] text-xs sm:text-sm font-semibold tracking-wide">
                L'art de l'image et du mouvement, sculpté pour immortaliser l'inestimable.
              </p>
              <p className="text-gray-300 text-xs sm:text-sm font-normal leading-[1.6] drop-shadow-sm">
                Lemotif Prod, photographe et vidéaste professionnel : mariages, portraits, événements et productions audiovisuelles en France, Côte d’Ivoire et Burkina Faso.
              </p>
            </div>

            {/* Boutons CTA FlowButton Interactifs Ultra-Luxe */}
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 pt-1 flex-wrap">
              <FlowButton
                text="Nos prestations"
                href="#services"
                variant="primary"
              />
              <FlowButton
                text="Nous contacter"
                href="#contact"
                variant="secondary"
              />
            </div>

            {/* 🌟 BADGE DE RÉASSURANCE & AVIS CLIENTS */}
            <div className="pt-1 flex justify-center">
              <div className="inline-flex flex-row items-center gap-2.5 sm:gap-3 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#12141C]/85 border border-white/10 shadow-[0_6px_20px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md">
                <div className="flex -space-x-2 items-center shrink-0">
                  {HERO_AVATARS.map((avatar, idx) => (
                    <img
                      key={idx}
                      src={avatar}
                      alt={`Client Lemotif Prod ${idx + 1}`}
                      className="w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full border border-[#08090C] object-cover ring-1 ring-white/20 shadow-xs"
                    />
                  ))}
                </div>

                <span className="h-4 w-[1px] bg-white/15 shrink-0" aria-hidden="true" />

                <div className="flex flex-col text-left justify-center">
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-0.5">
                      <svg className="w-0 h-0 absolute pointer-events-none" aria-hidden="true">
                        <defs>
                          <linearGradient id="star-partial-4-7" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="70%" stopColor="#10B981" />
                            <stop offset="70%" stopColor="rgba(255, 255, 255, 0.2)" />
                          </linearGradient>
                        </defs>
                      </svg>
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 text-[#10B981] fill-[#10B981] shrink-0 drop-shadow-[0_0_4px_rgba(16,185,129,0.4)]" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                      <svg className="w-3 h-3 text-[#10B981] shrink-0 drop-shadow-[0_0_4px_rgba(16,185,129,0.3)]" viewBox="0 0 24 24">
                        <path
                          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                          fill="url(#star-partial-4-7)"
                        />
                      </svg>
                    </div>
                    <span className="text-[10.5px] sm:text-[11px] font-extrabold text-white tracking-tight ml-0.5">4.7 / 5</span>
                  </div>
                  <span className="text-[9.5px] sm:text-[10px] text-gray-300 font-normal leading-tight mt-0.5">
                    +150 clients & événements immortalisés
                  </span>
                </div>
              </div>
            </div>

            {/* 📸 SLIDER COVERFLOW 3D HERO */}
            <div className="pt-2 w-full max-w-4xl mx-auto">
              <CoverflowCarousel
                slides={HERO_SLIDES}
                cardWidth="clamp(160px, 20vw, 240px)"
                rotate={32}
                depth={0.48}
                autoPlay={true}
                autoPlayInterval={3000}
                pauseOnHover={true}
                showCaption={false}
                showPagination={true}
                showNavigation={true}
              />
            </div>
          </div>
        </section>

        {/* ==========================================================================
            2. SECTION PORTFOLIO — TRIPLE DÉFILEMENT INFINI ALTERNÉ & BENTO GALLERY
               (LANE 1: GAUCHE ➔ DROITE | LANE 2: DROITE ➔ GAUCHE | LANE 3: GAUCHE ➔ DROITE)
               STYLE LIGHT MODE ÉPURÉ ULTRA-PREMIUM
            ========================================================================== */}
        <section
          id="portfolio"
          className="deferred-section py-20 sm:py-28 bg-[#F8F9FC] text-gray-900 border-b border-t border-gray-200/80 relative overflow-hidden"
        >
          {/* Grille géométrique subtile Light Mode */}
          <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" aria-hidden="true" />
          
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden z-0">
            <div style={{ position: 'absolute', top: '-10%', right: '5%', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(220,230,250,0.45) 0%, transparent 70%)', filter: 'blur(70px)' }} />
            <div style={{ position: 'absolute', bottom: '-5%', left: '5%', width: '440px', height: '440px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,235,210,0.35) 0%, transparent 70%)', filter: 'blur(70px)' }} />
          </div>

          <div className="max-w-7xl mx-auto w-full space-y-12 relative z-10 px-4 sm:px-6 lg:px-8">
            {/* En-tête de section Portfolio */}
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <span className="badge-premium-light text-[11px] shadow-2xs">
                  <Sparkles className="w-3 h-3 text-gray-900 mr-1.5" />
                  Portfolio & Séries Visuelles
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-0.03em] leading-[1.08] text-gray-900 font-montserrat">
                Portraits, Cinéma & Affiches
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto font-normal leading-relaxed">
                Explorez nos créations à travers un défilement dynamique à triple voie : photographies d'art, tournages cinéma 4K et affiches graphiques.
              </p>
            </div>

            {/* 💫 TRIPLE DÉFILEMENT INFINI ALTERNÉ (3 LANES) AVEC FONDU PROGRESSIF AUX EXTRÉMITÉS */}
            <div className="relative w-full overflow-hidden py-2">
              {/* Masques de dégradé fondu aux extrémités gauche & droite */}
              <div
                className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 md:w-48 lg:w-60 bg-gradient-to-r from-[#F8F9FC] via-[#F8F9FC]/90 to-transparent z-20"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 md:w-48 lg:w-60 bg-gradient-to-l from-[#F8F9FC] via-[#F8F9FC]/90 to-transparent z-20"
                aria-hidden="true"
              />

              <div className="space-y-4 sm:space-y-5">
                {/* 1. RANGÉE 1 : GAUCHE ➔ DROITE (Photographies d'Art) */}
                <div className="relative w-full overflow-hidden py-1">
                  <div className="flex w-max gap-4 sm:gap-6 animate-marquee-reverse hover:[animation-play-state:paused]">
                    {[...PORTFOLIO_LANE_1, ...PORTFOLIO_LANE_1].map((item, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => setLightboxItem(item)}
                        className="group relative w-64 sm:w-80 h-44 sm:h-52 rounded-2xl overflow-hidden shrink-0 border border-gray-200/90 bg-white shadow-[0_4px_18px_rgba(0,0,0,0.06)] cursor-pointer transition-all duration-300 hover:border-gray-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
                      >
                        <img
                          src={item.url}
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
                          width={320}
                          height={208}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-65 group-hover:opacity-85 transition-opacity" />
                        
                        <div className="absolute top-3 left-3 flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md border border-white/60 text-gray-900 shadow-xs flex items-center gap-1">
                            <ImageIcon className="w-2.5 h-2.5 text-gray-900" />
                            {item.badge}
                          </span>
                        </div>

                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="w-6 h-6 rounded-full bg-white/90 text-gray-900 border border-gray-200 backdrop-blur-md flex items-center justify-center shadow-sm">
                            <Maximize2 className="w-3 h-3" />
                          </span>
                        </div>

                        <div className="absolute bottom-3 inset-x-3 text-left">
                          <h4 className="text-xs sm:text-sm font-bold text-white font-montserrat tracking-tight leading-tight drop-shadow-sm">
                            {item.title}
                          </h4>
                          <p className="text-[10px] text-gray-200 font-normal line-clamp-1 mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. RANGÉE 2 : DROITE ➔ GAUCHE (Cinéma & Vidéos 4K) */}
                <div className="relative w-full overflow-hidden py-1">
                  <div className="flex w-max gap-4 sm:gap-6 animate-marquee hover:[animation-play-state:paused]">
                    {[...PORTFOLIO_LANE_2, ...PORTFOLIO_LANE_2].map((item, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => setLightboxItem(item)}
                        className="group relative w-64 sm:w-80 h-44 sm:h-52 rounded-2xl overflow-hidden shrink-0 border border-gray-200/90 bg-white shadow-[0_4px_18px_rgba(0,0,0,0.06)] cursor-pointer transition-all duration-300 hover:border-gray-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
                      >
                        <img
                          src={item.url}
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
                          width={320}
                          height={208}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-65 group-hover:opacity-85 transition-opacity" />
                        
                        <div className="absolute top-3 left-3 flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md border border-white/60 text-gray-900 shadow-xs flex items-center gap-1">
                            <Play className="w-2.5 h-2.5 fill-gray-900 text-gray-900" />
                            {item.badge}
                          </span>
                        </div>

                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="w-6 h-6 rounded-full bg-white/90 text-gray-900 border border-gray-200 backdrop-blur-md flex items-center justify-center shadow-sm">
                            <Maximize2 className="w-3 h-3" />
                          </span>
                        </div>

                        <div className="absolute bottom-3 inset-x-3 text-left">
                          <h4 className="text-xs sm:text-sm font-bold text-white font-montserrat tracking-tight leading-tight drop-shadow-sm">
                            {item.title}
                          </h4>
                          <p className="text-[10px] text-gray-200 font-normal line-clamp-1 mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. RANGÉE 3 : GAUCHE ➔ DROITE (Affiches & Graphisme Fine Art) */}
                <div className="relative w-full overflow-hidden py-1">
                  <div className="flex w-max gap-4 sm:gap-6 animate-marquee-reverse hover:[animation-play-state:paused]">
                    {[...PORTFOLIO_LANE_3, ...PORTFOLIO_LANE_3].map((item, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => setLightboxItem(item)}
                        className="group relative w-64 sm:w-80 h-44 sm:h-52 rounded-2xl overflow-hidden shrink-0 border border-gray-200/90 bg-white shadow-[0_4px_18px_rgba(0,0,0,0.06)] cursor-pointer transition-all duration-300 hover:border-gray-300 hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
                      >
                        <img
                          src={item.url}
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
                          width={320}
                          height={208}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-65 group-hover:opacity-85 transition-opacity" />
                        
                        <div className="absolute top-3 left-3 flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md border border-white/60 text-gray-900 shadow-xs flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5 text-gray-900" />
                            {item.badge}
                          </span>
                        </div>

                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="w-6 h-6 rounded-full bg-white/90 text-gray-900 border border-gray-200 backdrop-blur-md flex items-center justify-center shadow-sm">
                            <Maximize2 className="w-3 h-3" />
                          </span>
                        </div>

                        <div className="absolute bottom-3 inset-x-3 text-left">
                          <h4 className="text-xs sm:text-sm font-bold text-white font-montserrat tracking-tight leading-tight drop-shadow-sm">
                            {item.title}
                          </h4>
                          <p className="text-[10px] text-gray-200 font-normal line-clamp-1 mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bouton CTA d'accès à la page Galerie complète */}
            <div className="flex justify-center pt-6">
              <FlowButton
                text="Découvrir toute la Galerie d'Art"
                href="/galerie"
                variant="dark"
              />
            </div>
          </div>
        </section>

        {/* Modal Lightbox partagée */}
        <AnimatePresence>
          {lightboxItem && (
            <ImageModal item={lightboxItem} onClose={() => setLightboxItem(null)} />
          )}
        </AnimatePresence>

        {/* ==========================================================================
            3. SECTION SAVOIR-FAIRE & SERVICES — PARALLAX SCROLL FEATURE SECTION
            ========================================================================== */}
        <section
          id="services"
          className="deferred-section bg-[#08090C] text-[#F3F4F6] relative overflow-visible"
        >
          <div className="w-full relative z-10">
            <ParallaxScrollFeatureSection />
          </div>
        </section>

        {/* ==========================================================================
            4. SECTION À PROPOS — RESPIRATION CLAIRE & SIGNATURE ARTISTIQUE
            ========================================================================== */}
        <section
          id="apropos"
          className="deferred-section min-h-screen flex flex-col justify-center bg-[#FFFFFF] text-gray-900 border-b border-gray-200/80 px-4 sm:px-6 lg:px-8 py-24 relative overflow-hidden"
        >
          {/* Grille claire subtile */}
          <div className="pixy-grid-bg" aria-hidden="true">
            <div className="pixy-grid-pattern-light" />
          </div>

          <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <span className="badge-premium-light">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5CE7A] shrink-0" />
                Vision Artistique & Signature
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.02em] text-gradient-metallic-light font-montserrat">
                L'œil & la vision <span className="text-[#F5CE7A]">LEMOTIF</span>
              </h2>
              <p className="text-gray-600 text-sm leading-[1.65] font-normal">
                Plus qu'une simple prise de vue, chaque projet est une quête de vérité, de relief et d'émotion brute. Nous privilégions la maîtrise lumineuse et la capture spontanée pour des œuvres authentiques et intemporelles.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <a href="#contact" className="btn-primary-lemotif">
                  <span>Échanger sur votre projet</span>
                  <ArrowRight className="w-4 h-4 stroke-[2]" />
                </a>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-gray-50 border border-gray-200 shadow-md">
              <div className="aspect-[4/3] rounded-xl bg-gray-100 overflow-hidden flex items-center justify-center relative group">
                <img
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&auto=format&fit=crop&q=80"
                  alt="Photographe Lemotif Prod"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs font-semibold text-white bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 uppercase tracking-wider font-montserrat">
                  Signature LEMOTIF PROD · Burkina Faso
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            5. SECTION FAQ — SOMBRE INSTITUTIONNEL & ACCORDÉONS ÉPURÉS
            ========================================================================== */}
        <FAQSection theme="dark" />

        {/* ==========================================================================
            6. SECTION CONTACT — SOMBRE CHIC AVEC FORMULAIRE STRICT ET RÉASSURANCE
            ========================================================================== */}
        <section
          id="contact"
          className="deferred-section min-h-screen flex flex-col justify-center bg-[#08090C] text-[#F3F4F6] border-b border-[#1E2028] px-4 sm:px-6 lg:px-8 py-24 relative overflow-hidden"
        >
          {/* 🌐 GRILLE MULTI-COUCHE & ORBES D'AMBIANCE */}
          <div className="pixy-template-grid-bg" aria-hidden="true">
            <div className="pixy-bg-grid-line" />
            <div className="pixy-template-grid-vignette" />
          </div>

          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden z-0">
            <div style={{ position: 'absolute', top: '15%', left: '10%', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(30,58,95,0.3) 0%, transparent 68%)', filter: 'blur(80px)' }} />
            <div style={{ position: 'absolute', bottom: '12%', right: '8%', width: '440px', height: '440px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,206,122,0.13) 0%, transparent 68%)', filter: 'blur(74px)' }} />
          </div>

          <div className="max-w-4xl mx-auto w-full space-y-10 text-center relative z-10">
            <div className="space-y-3">
              <div className="flex justify-center">
                <span className="badge-premium-dark">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5CE7A] shrink-0" />
                  Réservation & Devis Sur-Mesure
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.02em] text-gradient-metallic-dark font-montserrat">
                Prise de Contact & Réservation
              </h2>
              <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto font-normal leading-relaxed">
                Une réponse rapide sous 24h et un accompagnement sur-mesure pour votre projet photo ou vidéo.
              </p>
            </div>

            {/* Formulaire épuré Dark Chic style fintech */}
            <form onSubmit={handleContactSubmit} className="p-8 rounded-2xl bg-[#0E1015] border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.5)] max-w-xl mx-auto space-y-4 text-left">
              <div>
                <label htmlFor="contact-name" className="text-xs font-semibold text-gray-300 block mb-1.5 tracking-wide">Nom complet</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Votre nom ou nom de société"
                  className="w-full h-11 px-3.5 text-xs rounded-xl border border-white/10 bg-[#14161F] text-white focus:outline-none focus:border-[#F5CE7A] focus:ring-1 focus:ring-[#F5CE7A]/30 transition-all placeholder:text-gray-500 font-montserrat"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-xs font-semibold text-gray-300 block mb-1.5 tracking-wide">Email professionnel ou personnel</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="contact@exemple.com"
                  className="w-full h-11 px-3.5 text-xs rounded-xl border border-white/10 bg-[#14161F] text-white focus:outline-none focus:border-[#F5CE7A] focus:ring-1 focus:ring-[#F5CE7A]/30 transition-all placeholder:text-gray-500 font-montserrat"
                />
              </div>
              <div>
                <label htmlFor="contact-service" className="text-xs font-semibold text-gray-300 block mb-1.5 tracking-wide">Type de prestation</label>
                <select id="contact-service" name="service" required className="w-full h-11 px-3.5 text-xs rounded-xl border border-white/10 bg-[#14161F] text-white focus:outline-none focus:border-[#F5CE7A] focus:ring-1 focus:ring-[#F5CE7A]/30 transition-all font-montserrat">
                  <option className="bg-[#0E1015]">Séance Portrait (Studio / Extérieur)</option>
                  <option className="bg-[#0E1015]">Reportage Mariage d'Exception</option>
                  <option className="bg-[#0E1015]">Shooting Corporate & Marque</option>
                  <option className="bg-[#0E1015]">Événement, Gala & Célébration</option>
                  <option className="bg-[#0E1015]">Réalisation & Montage Vidéo 4K Cinéma</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="text-xs font-semibold text-gray-300 block mb-1.5 tracking-wide">Votre projet</label>
                <textarea id="contact-message" name="message" required rows={4} placeholder="Date, lieu, attentes et budget indicatif…" className="w-full px-3.5 py-3 text-xs rounded-xl border border-white/10 bg-[#14161F] text-white focus:outline-none focus:border-[#F5CE7A] focus:ring-1 focus:ring-[#F5CE7A]/30 transition-all placeholder:text-gray-500 font-montserrat resize-y" />
              </div>
              <button type="submit" className="w-full btn-primary-lemotif h-11 text-xs tracking-wider mt-2">
                Envoyer ma demande
              </button>
              {contactSent && <p role="status" className="text-xs text-[#F5CE7A] text-center">Votre application de messagerie va s’ouvrir avec la demande préremplie.</p>}
              
              {/* Micro-réassurance discrète avec cadenas vectoriel Liquid Glass */}
              <div className="flex items-center justify-center gap-2 text-xs text-gray-400 pt-1 font-montserrat">
                <Lock className="w-4 h-4 icon-liquid-glass-dark shrink-0" />
                <span>Vos informations restent strictement confidentielles · Certifié SSL 256-bit</span>
              </div>
            </form>
          </div>
        </section>

        {/* ==========================================================================
            7. SECTION CTA BANNIÈRE — RUPTURE CLAIRE AVANT LE FOOTER
            ========================================================================== */}
        <section className="bg-[#FBFBFD] py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200/80 relative">
          <div className="max-w-5xl mx-auto">
            <CtaCard
              title="Studio Lemotif Prod"
              subtitle="Prêt à immortaliser vos plus beaux moments ?"
              description="Confiez vos projets photographiques et cinématographiques à un studio passionné par le détail, la lumière et l'émotion authentique."
              buttonText="Nous contacter"
              buttonHref="#contact"
              imageSrc="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200&auto=format&fit=crop"
              imageAlt="Studio Lemotif Prod"
            />
          </div>
        </section>

      </main>

      {/* Footer Officiel LEMOTIF PROD avec Newsletter et Liens */}
      <Footer />
    </div>
  );
}
