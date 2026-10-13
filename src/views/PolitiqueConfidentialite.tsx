import React from "react";
import { PolicyPageLayout } from "@/components/layout/PolicyPageLayout";
import {
  Mail,
  ShieldCheck,
  FileSpreadsheet,
  Lock,
  UserCheck,
  CheckCircle2
} from "lucide-react";

export const PolitiqueConfidentialitePage: React.FC = () => {
  return (
    <PolicyPageLayout
      title="Politique de Confidentialité"
      subtitle="Protection et gouvernance de vos données personnelles conforme à la réglementation en vigueur."
      badge="Vie Privée & Sécurité"
      readingTime="4 min"
      currentPath="/politique-de-confidentialite"
    >
      {/* Article 1 : Engagement & Cadre légal */}
      <section className="space-y-4 border-b border-gray-100 pb-8 sm:pb-10">
        <div className="flex items-center gap-3.5">
          <span className="badge-number-montserrat">
            01
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight font-montserrat">
            Engagement Déontologique & Cadre Légal Burkinabé
          </h2>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed font-normal">
          Le studio <strong>LEMOTIF PROD</strong> applique des protocoles rigoureux de gestion des données personnelles, en parfaite adéquation avec la <strong>Loi n° 010-2004/AN portant protection des données à caractère personnel au Burkina Faso</strong>.
        </p>
        <div className="p-4 rounded-xl bg-white/75 backdrop-blur-md border border-[rgba(198,214,244,0.35)] shadow-[0_4px_14px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,0.9)] flex items-start gap-3">
          <ShieldCheck className="w-5.5 h-5.5 icon-liquid-glass-light shrink-0 mt-0.5" />
          <p className="text-xs text-gray-600 leading-relaxed font-normal">
            Toute collecte d'information répond à un principe de proportionnalité, de transparence absolue et de consentement libre et éclairé.
          </p>
        </div>
      </section>

      {/* Article 2 : Données collectées */}
      <section className="space-y-4 border-b border-gray-100 pb-8 sm:pb-10">
        <div className="flex items-center gap-3.5">
          <span className="badge-number-montserrat">
            02
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight font-montserrat">
            Données Collectées & Finalités Légitimes
          </h2>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed font-normal">
          Nous limitons la collecte aux informations strictement indispensables à l'exécution de vos commandes et au suivi de la relation client :
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
          <div className="p-4 rounded-xl bg-white/75 backdrop-blur-md border border-[rgba(198,214,244,0.35)] shadow-[0_4px_14px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,0.9)] space-y-2.5 transition-all hover:border-[rgba(198,214,244,0.6)]">
            <div className="flex items-center gap-2.5">
              <FileSpreadsheet className="w-5 h-5 icon-liquid-glass-light shrink-0" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 font-montserrat">
                Formulaires de Contact & Devis
              </h3>
            </div>
            <ul className="text-xs text-gray-600 space-y-2 leading-relaxed font-normal">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" />
                <span>Nom complet ou raison sociale</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" />
                <span>Adresse email et numéro de téléphone direct</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" />
                <span>Type de prestation (Portrait, Mariage, Vidéo 4K)</span>
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-white/75 backdrop-blur-md border border-[rgba(198,214,244,0.35)] shadow-[0_4px_14px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,0.9)] space-y-2.5 transition-all hover:border-[rgba(198,214,244,0.6)]">
            <div className="flex items-center gap-2.5">
              <UserCheck className="w-5 h-5 icon-liquid-glass-light shrink-0" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 font-montserrat">
                Finalités du Traitement
              </h3>
            </div>
            <ul className="text-xs text-gray-600 space-y-2 leading-relaxed font-normal">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" />
                <span>Élaboration des propositions tarifaires sur-mesure</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" />
                <span>Planification logistique des tournages et séances</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" />
                <span>Création et accès aux galeries privées en ligne</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Article 3 : Confidentialité & Zéro Revente */}
      <section className="space-y-4 border-b border-gray-100 pb-8 sm:pb-10">
        <div className="flex items-center gap-3.5">
          <span className="badge-number-montserrat">
            03
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight font-montserrat">
            Non-Cession & Confidentialité Absolue
          </h2>
        </div>
        <p className="text-sm text-gray-900 font-semibold leading-relaxed">
          LEMOTIF PROD ne procède à aucune vente, location ou cession de vos données personnelles à des fins commerciales ou publicitaires tierces.
        </p>
        <div className="p-4 rounded-xl bg-gray-50 border-l-2 border-gray-400 text-xs text-gray-600 leading-relaxed font-normal">
          Vos informations de contact et données contractuelles sont strictement réservées à l'équipe interne du studio pour la bonne exécution de votre commande.
        </div>
      </section>

      {/* Article 4 : Sécurité des Galeries */}
      <section className="space-y-4 border-b border-gray-100 pb-8 sm:pb-10">
        <div className="flex items-center gap-3.5">
          <span className="badge-number-montserrat">
            04
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight font-montserrat">
            Sécurité des Galeries Privées & Chiffrement SSL
          </h2>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed font-normal">
          Toutes les communications sur ce site s'effectuent sous protocole de chiffrement <strong>SSL 256-bit</strong>. Vos galeries de restitution photographique et vidéo privées sont protégées par des codes d'accès individualisés.
        </p>
        <div className="p-4 rounded-xl bg-white/75 backdrop-blur-md border border-[rgba(198,214,244,0.35)] shadow-[0_4px_14px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,0.9)] flex items-start gap-3">
          <Lock className="w-5.5 h-5.5 icon-liquid-glass-light shrink-0 mt-0.5" />
          <p className="text-xs text-gray-600 leading-relaxed font-normal">
            Les transferts de fichiers haute résolution vers vos espaces de téléchargement s'effectuent via des tunnels sécurisés à double authentification.
          </p>
        </div>
      </section>

      {/* Article 5 : Vos Droits & DPO */}
      <section className="space-y-4">
        <div className="flex items-center gap-3.5">
          <span className="badge-number-montserrat">
            05
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight font-montserrat">
            Conservation des Données & Exercice de Vos Droits
          </h2>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed font-normal">
          Vous disposez d'un droit permanent d'accès, de rectification et d'effacement de vos données personnelles. Pour exercer ce droit, écrivez à notre référent :
        </p>
        <div className="p-4 rounded-xl bg-white/75 backdrop-blur-md border border-[rgba(198,214,244,0.35)] shadow-[0_4px_14px_rgba(0,0,0,0.02),inset_0_1px_1px_rgba(255,255,255,0.9)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 icon-liquid-glass-light shrink-0" />
            <div>
              <a href="mailto:contact@lemotifprod.com" className="text-sm font-bold text-gray-900 hover:text-[#F5CE7A] transition-colors font-montserrat">
                contact@lemotifprod.com
              </a>
              <p className="text-xs text-gray-500 font-normal">Référent Protection des Données · LEMOTIF PROD</p>
            </div>
          </div>
          <span className="text-xs font-semibold text-gray-600 font-montserrat bg-gray-100 px-3 py-1 rounded-lg shrink-0">
            Délai de réponse : 24-48h
          </span>
        </div>
      </section>
    </PolicyPageLayout>
  );
};

export default PolitiqueConfidentialitePage;
