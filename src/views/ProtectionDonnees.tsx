import React from "react";
import { PolicyPageLayout } from "@/components/layout/PolicyPageLayout";
import {
  Mail,
  UserCheck,
  FolderLock,
  EyeOff,
  Download,
  HardDrive,
  ShieldCheck
} from "lucide-react";

export const ProtectionDonneesPage: React.FC = () => {
  return (
    <PolicyPageLayout
      title="Protection des Données & Droit à l'Image"
      subtitle="Galeries chiffrées, archivage sécurisé et respect strict du droit à l'image."
      badge="Sécurité & Droit à l'Image"
      readingTime="3 min"
      currentPath="/protection-des-donnees"
    >
      {/* Article 1 : Droit à l'image */}
      <section className="space-y-4 border-b border-gray-100 pb-8 sm:pb-10">
        <div className="flex items-center gap-3.5">
          <span className="badge-number-montserrat">
            01
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight font-montserrat">
            Respect Fondamental du Droit à l'Image
          </h2>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed font-normal">
          Chaque individu dispose d’un droit exclusif sur son image. <strong>LEMOTIF PROD s'engage à ne diffuser aucune photographie ou captation vidéo comportant une personne identifiable sans son accord préalable écrit.</strong>
        </p>
        <div className="p-4 rounded-xl bg-white/75 backdrop-blur-md border border-[rgba(198,214,244,0.35)] shadow-[0_4px_14px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,0.9)] space-y-1 text-xs text-gray-600 leading-relaxed font-normal transition-all hover:border-[rgba(198,214,244,0.6)]">
          <div className="flex items-center gap-2.5 text-gray-900 font-bold font-montserrat">
            <UserCheck className="w-5 h-5 icon-liquid-glass-light shrink-0" />
            <span>Convention d'Autorisation d'Exploitation</span>
          </div>
          <p className="text-gray-500 pl-7">
            Une convention d'autorisation écrite est systématiquement formalisée lors des séances avec modèles, artistes et pour toute campagne commerciale.
          </p>
        </div>
      </section>

      {/* Article 2 : Galeries privées */}
      <section className="space-y-4 border-b border-gray-100 pb-8 sm:pb-10">
        <div className="flex items-center gap-3.5">
          <span className="badge-number-montserrat">
            02
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight font-montserrat">
            Galeries Numériques Privées & Téléchargement Sécurisé
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
          <div className="p-4 rounded-xl bg-white/75 backdrop-blur-md border border-[rgba(198,214,244,0.35)] shadow-[0_4px_14px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,0.9)] space-y-2 transition-all hover:border-[rgba(198,214,244,0.6)]">
            <div className="flex items-center gap-2">
              <FolderLock className="w-5 h-5 icon-liquid-glass-light shrink-0" />
              <span className="text-xs font-bold text-gray-900 font-montserrat">Code d'Accès</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">Accès individuel et exclusif par mot de passe chiffré.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/75 backdrop-blur-md border border-[rgba(198,214,244,0.35)] shadow-[0_4px_14px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,0.9)] space-y-2 transition-all hover:border-[rgba(198,214,244,0.6)]">
            <div className="flex items-center gap-2">
              <EyeOff className="w-5 h-5 icon-liquid-glass-light shrink-0" />
              <span className="text-xs font-bold text-gray-900 font-montserrat">Non Indexé</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">Exclusion systématique des moteurs Google/Bing.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/75 backdrop-blur-md border border-[rgba(198,214,244,0.35)] shadow-[0_4px_14px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,0.9)] space-y-2 transition-all hover:border-[rgba(198,214,244,0.6)]">
            <div className="flex items-center gap-2">
              <Download className="w-5 h-5 icon-liquid-glass-light shrink-0" />
              <span className="text-xs font-bold text-gray-900 font-montserrat">Flux SSL</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">Téléchargement direct haute résolution sécurisé.</p>
          </div>
        </div>
      </section>

      {/* Article 3 : Sauvegarde & Archivage */}
      <section className="space-y-4 border-b border-gray-100 pb-8 sm:pb-10">
        <div className="flex items-center gap-3.5">
          <span className="badge-number-montserrat">
            03
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight font-montserrat">
            Sauvegarde Pérenne & Sécurité Redondante
          </h2>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed font-normal">
          Pour prévenir toute perte de vos visuels, <strong>LEMOTIF PROD garantit un archivage redondant sécurisé de vos séries livrées pendant une période minimale de 12 mois</strong>.
        </p>
        <div className="p-4 rounded-xl bg-white/75 backdrop-blur-md border border-[rgba(198,214,244,0.35)] shadow-[0_4px_14px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,0.9)] flex items-start gap-3 text-xs text-gray-600 leading-relaxed font-normal">
          <HardDrive className="w-5.5 h-5.5 icon-liquid-glass-light shrink-0 mt-0.5" />
          <p>
            Stockage sur baies NAS redondantes RAID et sauvegardes chiffrées hors-site pour une intégrité absolue de vos fichiers maîtres.
          </p>
        </div>
      </section>

      {/* Article 4 : Contact Référent Données */}
      <section className="space-y-4">
        <div className="flex items-center gap-3.5">
          <span className="badge-number-montserrat">
            04
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight font-montserrat">
            Contact Référent Droit à l'Image & Retrait
          </h2>
        </div>
        <div className="p-4 rounded-xl bg-white/75 backdrop-blur-md border border-[rgba(198,214,244,0.35)] shadow-[0_4px_14px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,0.9)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5.5 h-5.5 icon-liquid-glass-light shrink-0" />
            <div className="space-y-0.5">
              <span className="text-gray-900 text-sm font-bold font-montserrat block">Service Droit à l'Image · LEMOTIF PROD</span>
              <p className="text-xs text-gray-500">Ouagadougou, Burkina Faso</p>
            </div>
          </div>
          <a
            href="mailto:contact@lemotifprod.com"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-900 hover:text-[#F5CE7A] transition-colors font-montserrat px-3.5 py-2 rounded-xl bg-black/5 border border-black/10 shrink-0"
          >
            <Mail className="w-4 h-4 icon-liquid-glass-light shrink-0" />
            <span>contact@lemotifprod.com</span>
          </a>
        </div>
      </section>
    </PolicyPageLayout>
  );
};

export default ProtectionDonneesPage;
