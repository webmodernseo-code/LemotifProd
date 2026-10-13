import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

export interface ServiceItem {
  id: number;
  serviceNumber: string;
  serviceLabel: string;
  titleLine1: string;
  titleLine2: string;
  bullets: string[];
  cards: {
    title: string;
    badge: string;
    subtitle: string;
    metric?: string;
    image: string;
  }[];
  reverse?: boolean;
}

// Alias de rétrocompatibilité si nécessaire
export type ServiceStepItem = ServiceItem;

const LEMOTIF_SERVICES: ServiceItem[] = [
  {
    id: 1,
    serviceNumber: "01",
    serviceLabel: "Service 01 · Photographie",
    titleLine1: "Photographie d'Art",
    titleLine2: "Portraits, Mode & Séries d'Exception",
    bullets: [
      "Prise de vue haute définition studio et extérieur avec direction personnalisée.",
      "Maîtrise de la lumière et capture spontanée des émotions authentiques.",
      "Restitution en haute résolution sur galeries privées chiffrées.",
    ],
    cards: [
      {
        title: "Portraits d'Art Studio",
        badge: "Studio Pro",
        subtitle: "Lumière Sculptée & Émotion",
        metric: "Capteur 45MP+",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=480&auto=format&fit=crop&q=75",
      },
      {
        title: "Célébrations & Mariages",
        badge: "Reportage",
        subtitle: "Instants Précieux",
        metric: "Lumière Naturelle",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=480&auto=format&fit=crop&q=75",
      },
      {
        title: "Corporate & Éditorial",
        badge: "Prestige",
        subtitle: "Dirigeants & Haute Couture",
        metric: "Signature Pure",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=480&auto=format&fit=crop&q=75",
      },
    ],
    reverse: false,
  },
  {
    id: 2,
    serviceNumber: "02",
    serviceLabel: "Service 02 · Vidéo & Cinéma",
    titleLine1: "Production Vidéo",
    titleLine2: "Captation & Réalisation Cinéma 4K",
    bullets: [
      "Tournages multicaméras 4K plein format avec optiques cinéma d'exception.",
      "Sound design immersif et étalonnage cinématographique haute précision.",
      "Montages dynamiques adaptés au grand écran, télévisions et formats digitaux.",
    ],
    cards: [
      {
        title: "Master Cinéma 4K RAW",
        badge: "Optique Cinéma",
        subtitle: "Plein Format 10-bit",
        metric: "4K DCI Broadcast",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=480&auto=format&fit=crop&q=75",
      },
      {
        title: "Lumière & Mise en Scène",
        badge: "Plateau",
        subtitle: "Sculpture des Ombres",
        metric: "Teintes Pures",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=480&auto=format&fit=crop&q=75",
      },
      {
        title: "Sound Design & Mix",
        badge: "Audio Pro",
        subtitle: "Micros HF & Immersion",
        metric: "24-bit 96kHz",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=480&auto=format&fit=crop&q=75",
      },
    ],
    reverse: true,
  },
  {
    id: 3,
    serviceNumber: "03",
    serviceLabel: "Service 03 · Direction Artistique",
    titleLine1: "Infographie & Direction",
    titleLine2: "Identité Visuelle & Labo Fine Art",
    bullets: [
      "Direction artistique globale et conception d'identités visuelles mémorables.",
      "Retouche d'art haute couture, labo colorimétrique et textures argentiques.",
      "Tirages d'art certifiés sur papier de prestige et archivage sécurisé 12 mois.",
    ],
    cards: [
      {
        title: "Moodboard & Identité",
        badge: "Branding",
        subtitle: "Charte & Univers Graphique",
        metric: "Sur-Mesure",
        image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=480&auto=format&fit=crop&q=75",
      },
      {
        title: "Labo Étalonnage & Grain",
        badge: "Post-Prod",
        subtitle: "Rendu Film & Texture 35mm",
        metric: "Précision 100%",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=480&auto=format&fit=crop&q=75",
      },
      {
        title: "Tirages Canson & Galeries",
        badge: "Fine Art",
        subtitle: "Encres Pigmentaires SSL",
        metric: "Garantie 50 ans",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=480&auto=format&fit=crop&q=75",
      },
    ],
    reverse: false,
  },
];

interface StackingServiceCardProps {
  service: ServiceItem;
  index: number;
  total: number;
}

function StackingServiceCard({ service, index, total }: StackingServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });

  // Calcul du scale progressif lors de l'empilement
  const targetScale = 1 - (total - 1 - index) * 0.035;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky w-full mb-12 sm:mb-16 lg:mb-20"
      style={{
        // Décalage en cascade pour laisser apparaître l'en-tête de chaque carte empilée
        top: `calc(5.5rem + ${index * 1.5}rem)`,
      }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: "top center",
        }}
        className={cn(
          "relative w-full rounded-[24px] sm:rounded-[32px] overflow-hidden",
          "bg-[#0D1017] border border-[rgba(245,206,122,0.2)]",
          "shadow-[0_25px_70px_rgba(0,0,0,0.85),inset_0_1px_1.5px_rgba(255,255,255,0.25)]",
          "p-6 sm:p-8 lg:p-10",
          "transition-all duration-500 hover:border-[rgba(245,206,122,0.45)]"
        )}
      >
        {/* 🌟 Lueur spéculaire d'arête supérieure Liquid Glass */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

        {/* 🔮 Halos d'ambiance d'arrière-plan de la carte */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(245,206,122,0.14)_0%,transparent_70%)] pointer-events-none blur-2xl"
        />

        {/* 🏷️ En-tête de la carte avec Badge et Compteur */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6 sm:mb-8 relative z-10">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase font-montserrat bg-[#F5CE7A]/10 text-[#F5CE7A] border border-[#F5CE7A]/25">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5CE7A] shadow-[0_0_8px_rgba(245,206,122,0.8)] animate-pulse" />
              {service.serviceLabel}
            </span>
          </div>

          <span className="text-[11px] font-mono font-bold tracking-widest text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
            0{index + 1} / 0{total}
          </span>
        </div>

        {/* 📐 Grille 2 Colonnes (Texte & Bullets + Vitrine Visuelle 3D) */}
        <div
          className={cn(
            "flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-14 relative z-10",
            service.reverse ? "md:flex-row-reverse" : "md:flex-row"
          )}
        >
          {/* 1. COLONNE VISUELLE (Cartes superposées Liquid Glass avec perspective) */}
          <div className="w-full md:w-1/2 flex items-center justify-center py-2 order-2 md:order-1">
            <div className="relative w-full max-w-md flex items-center justify-center">
              <div className="flex -space-x-12 sm:-space-x-16 hover:space-x-2 transition-all duration-500 ease-out items-center justify-center overflow-x-visible">
                {service.cards.map((card, cardIdx) => (
                  <div
                    key={cardIdx}
                    className={cn(
                      "relative w-44 sm:w-48 h-56 sm:h-64 rounded-2xl overflow-hidden shrink-0 transition-all duration-300 transform",
                      "border border-[rgba(245,206,122,0.22)] shadow-[0_12px_32px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.25)]",
                      "bg-[#0D1017] hover:scale-105 hover:-translate-y-2 hover:z-30 hover:border-[rgba(245,206,122,0.65)]",
                      cardIdx === 0 ? "rotate-[-4deg] z-10" : "",
                      cardIdx === 1 ? "rotate-[0deg] z-20" : "",
                      cardIdx === 2 ? "rotate-[4deg] z-10" : ""
                    )}
                  >
                    {/* Image de fond avec filtre sombre */}
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      decoding="async"
                      width={192}
                      height={256}
                      className="absolute inset-0 w-full h-full object-cover object-center opacity-45 transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/60 to-transparent" />

                    {/* Lueur spéculaire haute */}
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

                    {/* En-tête de la carte */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                      <span className="text-[9px] font-montserrat font-bold uppercase tracking-wider text-white px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-md border border-white/15">
                        {card.badge}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#F5CE7A] shadow-[0_0_6px_rgba(245,206,122,0.8)]" />
                    </div>

                    {/* Contenu bas de la carte */}
                    <div className="absolute bottom-3 inset-x-3 space-y-1 text-left">
                      <span className="text-[10px] font-montserrat font-bold uppercase tracking-wider text-[#F5CE7A] block">
                        {card.metric}
                      </span>
                      <h4 className="text-xs sm:text-sm font-extrabold text-white font-montserrat leading-snug line-clamp-1">
                        {card.title}
                      </h4>
                      <p className="text-[10px] text-gray-400 font-normal line-clamp-1">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. COLONNE TEXTE (Titre + Bullets + Bouton d'action) */}
          <div className="w-full md:w-1/2 space-y-4 text-left flex flex-col justify-center order-1 md:order-2">
            {/* Double ligne de titre sobre : Blanc + Titane métallique épuré */}
            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-montserrat tracking-tight leading-tight">
                {service.titleLine1}
              </h3>
              <p className="text-base sm:text-xl lg:text-2xl font-bold text-gradient-metallic-dark font-montserrat tracking-tight leading-tight">
                {service.titleLine2}
              </p>
            </div>

            {/* Liste à puces percutante avec puces douces dorées */}
            <ul className="space-y-3 pt-1 text-xs sm:text-sm lg:text-base text-gray-300 font-normal leading-relaxed">
              {service.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#F5CE7A]/10 border border-[#F5CE7A]/25 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5] text-[#F5CE7A]" />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Bouton CTA Liquid Glass Gold pour réserver ou échanger sur ce service */}
            <div className="pt-3">
              <a href="#contact" className="inline-block group">
                <LiquidButton
                  variant="gold"
                  size="default"
                  className="rounded-xl px-6 sm:px-7 py-3 text-xs sm:text-sm font-extrabold tracking-wide text-[#120E04]"
                >
                  <span>Découvrir cette prestation</span>
                  <ArrowRight className="w-4 h-4 text-[#120E04] group-hover:translate-x-1.5 transition-transform stroke-[2.5]" />
                </LiquidButton>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export interface ParallaxScrollFeatureSectionProps {
  services?: ServiceItem[];
  // Alias pour rétrocompatibilité
  steps?: ServiceItem[];
  kicker?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const ParallaxScrollFeatureSection: React.FC<ParallaxScrollFeatureSectionProps> = ({
  services,
  steps,
  kicker = "Savoir-Faire & Pôles de Création",
  title = "Nos Services d'Excellence",
  subtitle = "Une chaîne de production d'exception pensée au millimètre : Photographie d'art, Production vidéo 4K et Direction artistique.",
  className,
}) => {
  const items = services || steps || LEMOTIF_SERVICES;
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax scrolling fluide et marqué pour l'image de fond cinématographique
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-16%", "16%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.18]);

  return (
    <div ref={sectionRef} className={cn("w-full relative py-16 sm:py-24 overflow-visible", className)}>
      {/* 🎬 Image de fond cinématographique studio avec effet de Parallax Scrolling haute définition */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <motion.div
          style={{
            y: backgroundY,
            scale: backgroundScale,
          }}
          className="absolute -top-[20%] -bottom-[20%] inset-x-0 w-full h-[140%] will-change-transform transform-gpu"
        >
          {/* Photographie d'ambiance d'exception : Optique Studio & Caméra Cinéma 4K */}
          <img
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=2000&auto=format&fit=crop&q=85"
            alt="Atmosphère Studio & Production Cinéma Lemotif"
            className="w-full h-full object-cover object-center select-none"
            loading="lazy"
          />

          {/* Overlay sombre ultra-premium pur (fond officiel #08090C) sans halo jaune ni bandes noires */}
          <div className="absolute inset-0 bg-[#08090C]/60" />
        </motion.div>
      </div>

      {/* 1. En-tête de section sobre & affirmé */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-3 relative z-10 mb-12 sm:mb-16">
        {kicker && (
          <div className="flex justify-center">
            <span className="badge-premium-dark text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5CE7A] shrink-0 animate-pulse" />
              {kicker}
            </span>
          </div>
        )}

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.025em] leading-[1.08] text-gradient-metallic-dark font-montserrat">
          {title}
        </h2>

        {subtitle && (
          <p className="text-gray-300 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* 2. CONTENEUR DES CARTES EMPILÉES AU SCROLL (STACKING CARDS) */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {items.map((service, index) => (
          <StackingServiceCard
            key={service.id}
            service={service}
            index={index}
            total={items.length}
          />
        ))}
      </div>
    </div>
  );
};

export default ParallaxScrollFeatureSection;
