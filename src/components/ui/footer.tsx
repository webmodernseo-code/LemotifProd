import React, { useState, type FC } from "react";
import { Link } from "@/lib/router";
import { cn } from "@/lib/utils";
import { ChevronDown, Mail, ArrowUpRight, Compass, ShieldCheck, Aperture } from "lucide-react";
import { LemotifLogo } from "@/components/ui/header-01";
import { motion, AnimatePresence } from "framer-motion";

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  companyName?: string;
  description?: string;
}

export const Footer: FC<FooterProps> = ({
  companyName = "LEMOTIF PROD",
  description = "Production photographique d'art & réalisation vidéo cinématographique d'exception.",
  className,
  ...props
}) => {
  // Gestion accordéon vertical pour Mobile uniquement
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const navLinks = [
    { label: "Accueil", href: "/#hero" },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "Savoir-faire", href: "/#services" },
    { label: "À Propos", href: "/#apropos" },
    { label: "Nous contacter", href: "/#contact" },
  ];

  // Liens vers les Vraies Pages Dédiées
  const policyLinks = [
    { label: "Mentions Légales", href: "/mentions-legales" },
    { label: "Politique de Confidentialité", href: "/politique-de-confidentialite" },
    { label: "Conditions Générales (CGV)", href: "/conditions-generales-vente" },
    { label: "Protection des Données", href: "/protection-des-donnees" },
  ];

  return (
    <footer
      className={cn(
        "relative overflow-hidden pt-12 pb-8 px-3 sm:px-6 lg:px-8 text-[#F3F4F6]",
        className
      )}
      {...props}
    >
      {/* 🌊 AMBIANCE FLUIDE & ORBES LUMINEUSES LIQUIDES D'ARRIÈRE-PLAN */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Halo doré chaud central */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#F5CE7A]/10 rounded-full blur-[120px]" />
        {/* Halo blanc lunaire doux gauche */}
        <div className="absolute -bottom-10 left-10 w-[300px] h-[200px] bg-white/[0.03] rounded-full blur-[90px]" />
        {/* Halo doré doux droite */}
        <div className="absolute top-0 right-10 w-[350px] h-[200px] bg-[#F5CE7A]/8 rounded-full blur-[100px]" />
      </div>

      {/* 💎 CONTENEUR MAÎTRE LIQUID GLASS FLOTTANT */}
      <div
        className={cn(
          "max-w-7xl mx-auto relative z-10 p-6 sm:p-10 lg:p-12 rounded-3xl",
          // Propriétés Liquid Glass Morphism
          "bg-[#07080B]/60 backdrop-blur-3xl backdrop-saturate-[200%]",
          "border border-white/15",
          "shadow-[0_24px_60px_-12px_rgba(0,0,0,0.7),inset_0_1px_1px_0_rgba(255,255,255,0.25),inset_0_-1px_1px_0_rgba(0,0,0,0.5)]"
        )}
      >
        {/* Lueur Spéculaire Supérieure (Top Glass Rim Light) */}
        <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/45 to-transparent pointer-events-none rounded-t-3xl" />
        
        {/* Reflet Liquide Doré Inférieur (Golden Caustic Highlight) */}
        <div className="absolute inset-x-16 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#F5CE7A]/30 to-transparent pointer-events-none rounded-b-3xl" />

        {/* 💻 AFFICHAGE DESKTOP (PC) — 4 COLONNES LIQUID GLASS ALIGNÉES DE FAÇON OPTIMALE */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 lg:gap-12 pb-10 border-b border-white/10 items-stretch">
          
          {/* Colonne 1 : Identité & Contact Direct (Email & Téléphone) */}
          <div className="flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <LemotifLogo />
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                {description}
              </p>
            </div>
            
            {/* Contact vérifié */}
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl space-y-2.5 text-xs sm:text-sm text-gray-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
              <a
                href="mailto:contact@lemotifprod.com"
                className="flex items-center gap-2.5 text-gray-300 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 icon-liquid-glass-dark shrink-0" />
                <span className="truncate">contact@lemotifprod.com</span>
              </a>
            </div>
          </div>

          {/* Colonne 2 : Navigation Directe */}
          <div className="flex flex-col justify-between space-y-4">
            <div>
              <div className="mb-4">
                <h4 className="text-xs font-bold tracking-widest uppercase text-gray-200">
                  Navigation
                </h4>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-all inline-flex items-center gap-1.5 group py-0.5"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">{item.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all icon-liquid-glass-dark" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Colonne 3 : Vraies Pages Politiques & Légal */}
          <div className="flex flex-col justify-between space-y-4">
            <div>
              <div className="mb-4">
                <h4 className="text-xs font-bold tracking-widest uppercase text-gray-200">
                  Politiques
                </h4>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {policyLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="text-gray-400 hover:text-white transition-all inline-flex items-center gap-1.5 group py-0.5"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">{item.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all icon-liquid-glass-dark" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Colonne 4 : Offres Exclusives & Réseaux Sociaux (Alignement Bas Parfait) */}
          <div className="flex flex-col justify-between space-y-4">
            <div>
              <div className="mb-3">
                <h4 className="text-xs font-bold tracking-widest uppercase text-gray-200">
                  Offres Exclusives
                </h4>
              </div>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Réservations prioritaires, accès sécurisé aux galeries privées et invitations exclusives pour vos événements.
              </p>
            </div>

            {/* Logo des Réseaux Sociaux (Pillules Liquid Glass) */}
            <div className="pt-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 block mb-2.5">
                Suivez notre univers
              </span>
              <p className="text-xs text-gray-400">Liens officiels bientôt disponibles.</p>
            </div>
          </div>
        </div>

        {/* 📱 AFFICHAGE MOBILE (< md) — AVEC ACCORDÉONS VERTICAUX LIQUID GLASS */}
        <div className="md:hidden space-y-4 pb-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <LemotifLogo />
          </div>
          
          {/* Contact vérifié */}
          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex flex-col gap-2.5 text-xs text-gray-300">
            <a
              href="mailto:contact@lemotifprod.com"
              className="flex items-center gap-2.5 text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 icon-liquid-glass-dark shrink-0" />
              <span className="truncate">contact@lemotifprod.com</span>
            </a>
          </div>

          {/* 📂 Pile d'accordéons VERTICAUX (Un au-dessus de l'autre) */}
          <div className="space-y-2.5 pt-1">
            
            {/* 1. Accordéon Vertical : Navigation */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden backdrop-blur-xl transition-all">
              <button
                onClick={() => toggleSection("nav")}
                className={cn(
                  "w-full flex items-center justify-between p-3.5 text-xs font-semibold transition-all cursor-pointer",
                  openSection === "nav"
                    ? "text-white bg-white/[0.05]"
                    : "text-gray-200 hover:text-white"
                )}
              >
                <div className="flex items-center gap-2.5">
                  <Compass className="w-4 h-4 icon-liquid-glass-dark" />
                  <span className="font-medium text-sm">Navigation</span>
                </div>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200 icon-liquid-glass-dark",
                    openSection === "nav" && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence>
                {openSection === "nav" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden border-t border-white/5"
                  >
                    <div className="p-3.5 space-y-1.5 text-xs">
                      {navLinks.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="flex items-center justify-between text-gray-300 hover:text-white py-2 px-2.5 rounded-xl hover:bg-white/5 transition-colors"
                        >
                          <span>{item.label}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 icon-liquid-glass-dark" />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 2. Accordéon Vertical : Politiques */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden backdrop-blur-xl transition-all">
              <button
                onClick={() => toggleSection("politiques")}
                className={cn(
                  "w-full flex items-center justify-between p-3.5 text-xs font-semibold transition-all cursor-pointer",
                  openSection === "politiques"
                    ? "text-white bg-white/[0.05]"
                    : "text-gray-200 hover:text-white"
                )}
              >
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 icon-liquid-glass-dark" />
                  <span className="font-medium text-sm">Politiques & Légal</span>
                </div>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200 icon-liquid-glass-dark",
                    openSection === "politiques" && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence>
                {openSection === "politiques" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden border-t border-white/5"
                  >
                    <div className="p-3.5 space-y-1.5 text-xs">
                      {policyLinks.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="flex items-center justify-between text-gray-300 hover:text-white py-2 px-2.5 rounded-xl hover:bg-white/5 transition-colors"
                        >
                          <span>{item.label}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 icon-liquid-glass-dark" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. Accordéon Vertical : Offres Exclusives & Réseaux */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden backdrop-blur-xl transition-all">
              <button
                onClick={() => toggleSection("offres")}
                className={cn(
                  "w-full flex items-center justify-between p-3.5 text-xs font-semibold transition-all cursor-pointer",
                  openSection === "offres"
                    ? "text-white bg-white/[0.05]"
                    : "text-gray-200 hover:text-white"
                )}
              >
                <div className="flex items-center gap-2.5">
                  <Aperture className="w-4 h-4 icon-liquid-glass-dark" />
                  <span className="font-medium text-sm">Offres Exclusives & Réseaux</span>
                </div>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200 icon-liquid-glass-dark",
                    openSection === "offres" && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence>
                {openSection === "offres" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden border-t border-white/5"
                  >
                    <div className="p-3.5 space-y-3.5 text-xs">
                      <p className="text-gray-400 font-light leading-relaxed">
                        Réservations prioritaires, accès aux galeries privées sécurisées et invitations exclusives pour vos événements.
                      </p>

                      <div className="pt-2 border-t border-white/10">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 block mb-2.5">
                          Suivez notre univers
                        </span>
                        <p className="text-xs text-gray-400">Liens officiels bientôt disponibles.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* 🌟 LIGNE BASSE : COPYRIGHT & CRÉDIT WEBERMODERNSEO.CO (BURKINA FASO) */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-3 font-light">
          <p>© {new Date().getFullYear()} {companyName} · Ouagadougou, Burkina Faso. Tous droits réservés.</p>
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs text-gray-300 backdrop-blur-md">
            <span>Site réalisé par</span>
            <a
              href="https://webmodernseo.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium hover:text-[#F5CE7A] underline underline-offset-4 decoration-[#F5CE7A]/50 transition-colors"
            >
              webmodernseo.co
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
