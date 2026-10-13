import React, { useEffect, useState } from "react";
import { Link } from "@/lib/router";
import { Header } from "@/components/ui/header-01";
import { Footer } from "@/components/ui/footer";
import {
  ArrowLeft,
  Printer,
  Check,
  ChevronRight,
  FileText,
  ShieldCheck,
  Scale,
  Lock,
  Mail,
  Share2,
  Shield
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface PolicyPageLayoutProps {
  title: string;
  subtitle: string;
  badge: string;
  readingTime: string;
  lastUpdated?: string;
  currentPath: string;
  children: React.ReactNode;
}

export const PolicyPageLayout: React.FC<PolicyPageLayoutProps> = ({
  title,
  subtitle,
  badge,
  readingTime,
  lastUpdated = "Septembre 2026",
  currentPath,
  children,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.title = `${title} — LEMOTIF PROD Studio`;
    window.scrollTo(0, 0);
  }, [title]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copiez ce lien :", window.location.href);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const allPolicies = [
    { label: "Mentions Légales", path: "/mentions-legales", icon: FileText, num: "01" },
    { label: "Politique de Confidentialité", path: "/politique-de-confidentialite", icon: ShieldCheck, num: "02" },
    { label: "Conditions Générales (CGV)", path: "/conditions-generales-vente", icon: Scale, num: "03" },
    { label: "Protection des Données", path: "/protection-des-donnees", icon: Lock, num: "04" },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#08090C] text-gray-900 font-montserrat antialiased selection:bg-[#F5CE7A] selection:text-black">
      {/* 1. Header Liquid Glass */}
      <Header />

      {/* 2. HERO SECTION POLITIQUE — DARK MODE ÉPURÉ & ÉLÉGANT */}
      <section className="relative overflow-hidden bg-[#08090C] text-[#F3F4F6] pt-28 sm:pt-32 pb-12 sm:pb-14 border-b border-[#1E2028]">
        {/* Grille multi-couche & Vignettage radial */}
        <div className="pixy-template-grid-bg" aria-hidden="true">
          <div className="pixy-bg-grid-line" />
          <div className="pixy-template-grid-vignette" />
        </div>

        {/* Orbes d'ambiance discrets */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden z-0">
          <div style={{ position: 'absolute', top: '-10%', left: '8%', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,206,122,0.12) 0%, transparent 68%)', filter: 'blur(76px)' }} />
          <div style={{ position: 'absolute', top: '10%', right: '10%', width: '440px', height: '440px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(30,58,95,0.30) 0%, transparent 68%)', filter: 'blur(80px)' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Fil d'Ariane épuré */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-5 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors flex items-center gap-1 font-medium">
              <ArrowLeft className="w-3.5 h-3.5 text-gray-400" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <span className="text-gray-400">Cadre Juridique</span>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <span className="text-[#FFF0C4] font-semibold">{title}</span>
          </nav>

          {/* En-tête : Badge + Titre chromé + Métadonnées + Boutons */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div>
                <span className="badge-premium-dark">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5CE7A] shrink-0" />
                  {badge}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.025em] leading-[1.08] text-gradient-metallic-dark font-montserrat">
                {title}
              </h1>

              <p className="text-gray-300 text-sm sm:text-base font-normal leading-relaxed">
                {subtitle}
              </p>

              <div className="flex items-center gap-3 text-xs text-gray-300 pt-1 font-montserrat flex-wrap">
                <span>Dernière mise à jour : <strong className="text-white font-semibold">{lastUpdated}</strong></span>
                <span>·</span>
                <span>Lecture : <strong className="text-white font-semibold">~{readingTime}</strong></span>
                <span>·</span>
                <span className="text-gray-400">Ouagadougou, Burkina Faso</span>
              </div>
            </div>

            {/* Boutons d'Action (Partager / Imprimer) style Liquid Glass */}
            <div className="flex items-center gap-2.5 shrink-0 self-start md:self-end">
              <button
                onClick={handleCopy}
                className="px-4 py-2 rounded-xl btn-liquid-glass-dark text-xs flex items-center gap-2 cursor-pointer font-montserrat font-semibold"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Share2 className="w-4 h-4 icon-liquid-glass-dark" />}
                <span className="tracking-wide">{copied ? "Lien copié" : "Partager"}</span>
              </button>

              <button
                onClick={handlePrint}
                className="p-2.5 rounded-xl btn-liquid-glass-dark transition-all cursor-pointer"
                title="Imprimer cette politique"
                aria-label="Imprimer"
              >
                <Printer className="w-4.5 h-4.5 icon-liquid-glass-dark" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORPS DE PAGE EN RUPTURE CLAIRE ÉPURÉE (AVEC ONGLETS LIQUID GLASS LUXE) */}
      <main className="flex-1 bg-[#FBFBFD] text-gray-900 py-10 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200/80 relative overflow-hidden">
        {/* Grille claire subtile */}
        <div className="pixy-grid-bg" aria-hidden="true">
          <div className="pixy-grid-pattern-light" />
        </div>

        <div className="max-w-4xl mx-auto w-full space-y-8 relative z-10">
          
          {/* 🧊 Rail d'Onglets Liquid Glass Haute Précision */}
          <div className="flex overflow-x-auto no-scrollbar gap-2.5 pb-1 sm:grid sm:grid-cols-2 lg:grid-cols-4 p-1.5 rounded-2xl bg-[#090C14]/5 backdrop-blur-xl border border-[rgba(198,214,244,0.35)] shadow-[0_4px_20px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,0.8)]">
            {allPolicies.map((p) => {
              const Icon = p.icon;
              const isCurrent = currentPath === p.path;
              return (
                <Link
                  key={p.path}
                  to={p.path}
                  className={cn(
                    "flex-shrink-0 min-w-[215px] sm:min-w-0 p-3.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-between font-montserrat relative overflow-hidden group",
                    isCurrent
                      ? "tab-liquid-glass-active"
                      : "tab-liquid-glass-inactive"
                  )}
                >
                  <div className="flex items-center gap-2.5 min-w-0 relative z-10">
                    <Icon className={cn("w-5 h-5 shrink-0 transition-transform group-hover:scale-110", isCurrent ? "icon-liquid-glass-dark" : "icon-liquid-glass-light")} />
                    <span className="truncate tracking-tight">{p.label}</span>
                  </div>
                  <span
                    className={cn(
                      "text-xs font-montserrat font-extrabold px-2.5 py-0.5 rounded-md shrink-0 relative z-10 transition-colors",
                      isCurrent
                        ? "bg-[#C6D6F4]/20 border border-[#C6D6F4]/40 text-[#FFFFFF] shadow-[0_0_10px_rgba(150,185,255,0.3)]"
                        : "bg-black/5 border border-black/10 text-gray-700"
                    )}
                  >
                    {p.num}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Contenu Juridique Structuré & Aéré (fond blanc épuré, bordure 1px délicate) */}
          <div className="bg-white/90 backdrop-blur-xl border border-[rgba(198,214,244,0.35)] rounded-2xl p-6 sm:p-10 lg:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.95)] text-gray-700 space-y-10">
            {children}
          </div>

          {/* Micro-Réassurance & Assistance Juridique Liquid Glass */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-[rgba(198,214,244,0.4)] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_6px_24px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)]">
            <div className="space-y-0.5 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2.5">
                <Shield className="w-5 h-5 icon-liquid-glass-light shrink-0" />
                <h4 className="text-sm font-bold text-gray-900 font-montserrat">
                  Une question sur nos dispositions légales ?
                </h4>
              </div>
              <p className="text-xs text-gray-600 font-normal">
                Notre service juridique et notre direction artistique vous répondent sous 24 à 48 heures.
              </p>
            </div>
            <a
              href="mailto:contact@lemotifprod.com"
              className="btn-primary-lemotif shrink-0 text-xs h-10 px-5 font-montserrat font-bold"
            >
              <Mail className="w-4 h-4" />
              <span>Contacter la direction</span>
            </a>
          </div>

        </div>
      </main>

      {/* 4. Footer Officiel */}
      <Footer />
    </div>
  );
};

export default PolicyPageLayout;
