import React from "react";
import { PolicyPageLayout } from "@/components/layout/PolicyPageLayout";
import {
  Film,
  Camera,
  CalendarCheck,
  FileX,
  CreditCard,
  Scale
} from "lucide-react";

export const ConditionsGeneralesPage: React.FC = () => {
  return (
    <PolicyPageLayout
      title="Conditions Générales (CGV)"
      subtitle="Réservations, délais de retouche et cadre juridique de nos prestations d'art."
      badge="Contrat & Conditions"
      readingTime="5 min"
      currentPath="/conditions-generales-vente"
    >
      {/* Article 1 : Champ d'application */}
      <section className="space-y-4 border-b border-gray-100 pb-8 sm:pb-10">
        <div className="flex items-center gap-3.5">
          <span className="badge-number-montserrat">
            01
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight font-montserrat">
            Champ d'Application & Nature des Prestations
          </h2>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed font-normal">
          Les présentes Conditions Générales de Vente (CGV) régissent l’ensemble des relations contractuelles entre le studio <strong>LEMOTIF PROD</strong> et ses clients dans le cadre de :
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
          <div className="p-4 rounded-xl bg-white/75 backdrop-blur-md border border-[rgba(198,214,244,0.35)] shadow-[0_4px_14px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,0.9)] space-y-1.5 transition-all hover:border-[rgba(198,214,244,0.6)]">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-900 font-montserrat flex items-center gap-2.5">
              <Camera className="w-5 h-5 icon-liquid-glass-light shrink-0" />
              Prestations Photographiques d'Art
            </span>
            <p className="text-xs text-gray-500 leading-relaxed font-normal">Portraits studio, lumière naturelle, cérémonies de mariages, reportages corporate.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/75 backdrop-blur-md border border-[rgba(198,214,244,0.35)] shadow-[0_4px_14px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,0.9)] space-y-1.5 transition-all hover:border-[rgba(198,214,244,0.6)]">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-900 font-montserrat flex items-center gap-2.5">
              <Film className="w-5 h-5 icon-liquid-glass-light shrink-0" />
              Réalisations Vidéo & Cinéma 4K
            </span>
            <p className="text-xs text-gray-500 leading-relaxed font-normal">Captations 4K RAW, teasers cinématographiques, sound design et étalonnage d'art.</p>
          </div>
        </div>
      </section>

      {/* Article 2 : Devis & Réservation */}
      <section className="space-y-4 border-b border-gray-100 pb-8 sm:pb-10">
        <div className="flex items-center gap-3.5">
          <span className="badge-number-montserrat">
            02
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight font-montserrat">
            Devis, Réservation de Créneau & Acompte
          </h2>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed font-normal">
          Toute prestation fait l’objet d’un devis détaillé émis par LEMOTIF PROD, valable pour une durée de 30 jours à compter de son émission.
        </p>
        <div className="p-4 rounded-xl bg-white/75 backdrop-blur-md border border-[rgba(198,214,244,0.35)] shadow-[0_4px_14px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,0.9)] space-y-2 text-xs text-gray-600 leading-relaxed font-normal">
          <div className="flex items-center gap-2.5 text-gray-900 font-bold font-montserrat">
            <CalendarCheck className="w-5 h-5 icon-liquid-glass-light shrink-0" />
            <span>Confirmation de la date de séance</span>
          </div>
          <p>
            La réservation d'une date de shooting n'est définitive qu'après réception du contrat signé et du versement d'un <strong>acompte de réservation de 30% à 50%</strong>.
          </p>
        </div>
      </section>

      {/* Article 3 : Tarifs & Modalités de Paiement */}
      <section className="space-y-4 border-b border-gray-100 pb-8 sm:pb-10">
        <div className="flex items-center gap-3.5">
          <span className="badge-number-montserrat">
            03
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight font-montserrat">
            Tarification & Modalités de Règlement
          </h2>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed font-normal">
          Les tarifs applicables sont ceux fixés sur le devis. Le solde de la prestation est exigible à l’issue de la séance de prise de vue ou avant la transmission des galeries finales haute résolution.
        </p>
        <div className="p-4 rounded-xl bg-white/75 backdrop-blur-md border border-[rgba(198,214,244,0.35)] shadow-[0_4px_14px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,0.9)] flex items-start gap-3 text-xs text-gray-600 leading-relaxed font-normal">
          <CreditCard className="w-5.5 h-5.5 icon-liquid-glass-light shrink-0 mt-0.5" />
          <p>
            Moyens de paiement acceptés : Virement bancaire, chèque certifié, espèces ou paiement mobile sécurisé selon les modalités convenues.
          </p>
        </div>
      </section>

      {/* Article 4 : Délais de Livraison & Charte RAW */}
      <section className="space-y-4 border-b border-gray-100 pb-8 sm:pb-10">
        <div className="flex items-center gap-3.5">
          <span className="badge-number-montserrat">
            04
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight font-montserrat">
            Post-Production, Délais de Livraison & Fichiers
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
          <div className="p-4 rounded-xl bg-white/75 backdrop-blur-md border border-[rgba(198,214,244,0.35)] shadow-[0_4px_14px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,0.9)] space-y-1.5 transition-all hover:border-[rgba(198,214,244,0.6)]">
            <span className="text-xs font-bold text-gray-900 uppercase tracking-wider font-montserrat block">Séries Photographiques</span>
            <p className="text-xs text-gray-600 leading-relaxed font-normal">Livraison sous <strong>5 à 7 jours ouvrés</strong> via galerie privée en ligne.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/75 backdrop-blur-md border border-[rgba(198,214,244,0.35)] shadow-[0_4px_14px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,0.9)] space-y-1.5 transition-all hover:border-[rgba(198,214,244,0.6)]">
            <span className="text-xs font-bold text-gray-900 uppercase tracking-wider font-montserrat block">Productions Vidéo 4K</span>
            <p className="text-xs text-gray-600 leading-relaxed font-normal">Livraison du master étalonné sous <strong>10 à 14 jours ouvrés</strong>.</p>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-gray-50 border-l-2 border-gray-400 text-xs text-gray-600 leading-relaxed flex items-start gap-3">
          <FileX className="w-5 h-5 icon-liquid-glass-light shrink-0 mt-0.5" />
          <span>Afin de garantir l'intégrité de la charte artistique du studio, aucun fichier brut non développé (RAW) n'est transmis.</span>
        </div>
      </section>

      {/* Article 5 : Droit applicable */}
      <section className="space-y-4">
        <div className="flex items-center gap-3.5">
          <span className="badge-number-montserrat">
            05
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight font-montserrat">
            Droit Applicable & Règlement des Litiges
          </h2>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed font-normal">
          Les présentes CGV sont soumises au droit applicable au Burkina Faso et aux traités de l'OHADA. Tout différend sera soumis aux tribunaux compétents du ressort de <strong>Ouagadougou</strong>.
        </p>
        <div className="p-4 rounded-xl bg-white/75 backdrop-blur-md border border-[rgba(198,214,244,0.35)] shadow-[0_4px_14px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,0.9)] flex items-start gap-3 text-xs text-gray-600 leading-relaxed font-normal">
          <Scale className="w-5.5 h-5.5 icon-liquid-glass-light shrink-0 mt-0.5" />
          <p>
            En cas de contestation, une solution amiable sera privilégiée avant toute action judiciaire.
          </p>
        </div>
      </section>
    </PolicyPageLayout>
  );
};

export default ConditionsGeneralesPage;
