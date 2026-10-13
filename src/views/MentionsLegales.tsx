import React from "react";
import { PolicyPageLayout } from "@/components/layout/PolicyPageLayout";
import {
  Building2,
  MapPin,
  Mail,
  Phone,
  ArrowUpRight
} from "lucide-react";

export const MentionsLegalesPage: React.FC = () => {
  return (
    <PolicyPageLayout
      title="Mentions Légales"
      subtitle="Identification officielle et cadre réglementaire du studio de création LEMOTIF PROD."
      badge="Identification Juridique"
      readingTime="3 min"
      currentPath="/mentions-legales"
    >
      {/* Article 1 : Éditeur */}
      <section className="space-y-4 border-b border-gray-100 pb-8 sm:pb-10">
        <div className="flex items-center gap-3.5">
          <span className="badge-number-montserrat">
            01
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight font-montserrat">
            Éditeur de la Plateforme & Studio de Création
          </h2>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed font-normal">
          Le présent site internet accessible à l’adresse officielle de <strong>LEMOTIF PROD</strong> est édité, géré et exploité sous la responsabilité de la direction du studio :
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
          <div className="p-4 rounded-xl bg-white/75 backdrop-blur-md border border-[rgba(198,214,244,0.35)] shadow-[0_4px_14px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,0.9)] space-y-2 transition-all hover:border-[rgba(198,214,244,0.6)]">
            <div className="flex items-center gap-2.5">
              <Building2 className="w-5.5 h-5.5 icon-liquid-glass-light shrink-0" />
              <span className="text-[11px] font-montserrat uppercase tracking-wider text-gray-500 font-semibold">
                Dénomination & Activité
              </span>
            </div>
            <p className="text-sm font-bold text-gray-900 font-montserrat">LEMOTIF PROD</p>
            <p className="text-xs text-gray-500 leading-relaxed font-normal">
              Production photographique d'art, captation cinématographique 4K & direction artistique.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/75 backdrop-blur-md border border-[rgba(198,214,244,0.35)] shadow-[0_4px_14px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,0.9)] space-y-2 transition-all hover:border-[rgba(198,214,244,0.6)]">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-5.5 h-5.5 icon-liquid-glass-light shrink-0" />
              <span className="text-[11px] font-montserrat uppercase tracking-wider text-gray-500 font-semibold">
                Siège d'Exploitation
              </span>
            </div>
            <p className="text-sm font-bold text-gray-900 font-montserrat">Ouagadougou, Burkina Faso</p>
            <p className="text-xs text-gray-500 leading-relaxed font-normal">
              Territoire national & interventions internationales sur-mesure.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/75 backdrop-blur-md border border-[rgba(198,214,244,0.35)] shadow-[0_4px_14px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,0.9)] space-y-2 transition-all hover:border-[rgba(198,214,244,0.6)]">
            <div className="flex items-center gap-2.5">
              <Mail className="w-5.5 h-5.5 icon-liquid-glass-light shrink-0" />
              <span className="text-[11px] font-montserrat uppercase tracking-wider text-gray-500 font-semibold">
                Contact Électronique
              </span>
            </div>
            <a
              href="mailto:contact@lemotifprod.com"
              className="text-sm font-semibold text-gray-900 hover:text-[#F5CE7A] transition-colors block font-montserrat"
            >
              contact@lemotifprod.com
            </a>
            <p className="text-xs text-gray-500 leading-relaxed font-normal">
              Réponse assurée sous 24 à 48 heures ouvrées.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/75 backdrop-blur-md border border-[rgba(198,214,244,0.35)] shadow-[0_4px_14px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,0.9)] space-y-2 transition-all hover:border-[rgba(198,214,244,0.6)]">
            <div className="flex items-center gap-2.5">
              <Phone className="w-5.5 h-5.5 icon-liquid-glass-light shrink-0" />
              <span className="text-[11px] font-montserrat uppercase tracking-wider text-gray-500 font-semibold">
                Ligne Directe
              </span>
            </div>
            <p className="text-sm font-bold text-gray-900 font-montserrat">+226 00 00 00 00</p>
            <p className="text-xs text-gray-500 leading-relaxed font-normal">
              Accueil téléphonique du lundi au samedi.
            </p>
          </div>
        </div>
      </section>

      {/* Article 2 : Direction de la publication */}
      <section className="space-y-4 border-b border-gray-100 pb-8 sm:pb-10">
        <div className="flex items-center gap-3.5">
          <span className="badge-number-montserrat">
            02
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight font-montserrat">
            Direction de la Publication & Direction Artistique
          </h2>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed font-normal">
          La direction de la publication et le commissariat des séries photographiques exposées sont assurés par l'équipe dirigeante de <strong>LEMOTIF PROD</strong>.
        </p>
      </section>

      {/* Article 3 : Conception Web */}
      <section className="space-y-4 border-b border-gray-100 pb-8 sm:pb-10">
        <div className="flex items-center gap-3.5">
          <span className="badge-number-montserrat">
            03
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight font-montserrat">
            Conception & Ingénierie Web
          </h2>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed font-normal">
          L’architecture logicielle, le design visuel et l’optimisation technique de la plateforme ont été conçus et déployés par l'agence :
        </p>
        <div className="p-4 rounded-xl bg-white/75 backdrop-blur-md border border-[rgba(198,214,244,0.35)] shadow-[0_4px_14px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,0.9)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <span className="font-bold text-gray-900 text-sm font-montserrat">Web Modern SEO</span>
            <p className="text-xs text-gray-500">Ingénierie web, création digitale & référencement naturel haute performance.</p>
          </div>
          <a
            href="https://webmodernseo.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-900 hover:text-[#F5CE7A] transition-colors font-montserrat px-3 py-1.5 rounded-lg bg-black/5 border border-black/10 shrink-0"
          >
            <span>webmodernseo.co</span>
            <ArrowUpRight className="w-4 h-4 icon-liquid-glass-light" />
          </a>
        </div>
      </section>

      {/* Article 4 : Hébergement */}
      <section className="space-y-4 border-b border-gray-100 pb-8 sm:pb-10">
        <div className="flex items-center gap-3.5">
          <span className="badge-number-montserrat">
            04
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight font-montserrat">
            Hébergement Cloud & Sécurité Réseau
          </h2>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed font-normal">
          Le site web est hébergé sur une infrastructure cloud internationale à haute résilience, garantissant une protection anti-DDoS certifiée et un protocole de chiffrement SSL 256-bit de bout en bout.
        </p>
      </section>

      {/* Article 5 : Propriété Intellectuelle */}
      <section className="space-y-4">
        <div className="flex items-center gap-3.5">
          <span className="badge-number-montserrat">
            05
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight font-montserrat">
            Propriété Intellectuelle & Droits d'Auteur
          </h2>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed font-normal">
          L'intégralité des contenus présents sur cette plateforme (photographies d'art, captations vidéo 4K, compositions sonores, graphismes et textes) sont protégés par la <strong>Loi n° 032-99/AN portant protection de la propriété littéraire et artistique au Burkina Faso</strong>, ainsi que par les traités internationaux de l'OAPI et la Convention de Berne.
        </p>
        <div className="p-4 rounded-xl bg-gray-50 border-l-2 border-gray-400 text-xs text-gray-600 leading-relaxed">
          Toute reproduction ou réutilisation non autorisée par écrit préalable de LEMOTIF PROD est constitutive de contrefaçon.
        </div>
      </section>
    </PolicyPageLayout>
  );
};

export default MentionsLegalesPage;
