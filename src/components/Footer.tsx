import React from 'react';
import { Camera, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050608] border-t border-white/10 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Camera className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-wider uppercase text-white font-serif">
                  Le Motif <span className="text-amber-400">Prod</span>
                </span>
                <span className="text-[10px] tracking-widest text-zinc-500 uppercase font-sans">
                  Studio Photographique & Audiovisuel
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm font-light">
              Direction artistique sur-mesure, portraits de caractère, couvertures éditoriales et reportages de prestige. Créateur d’images intemporelles à forte signature visuelle.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {/* Instagram Pure SVG */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-400 border border-white/10 flex items-center justify-center text-zinc-300 transition-colors"
                aria-label="Instagram Le Motif Prod"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* LinkedIn Pure SVG */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-amber-400/10 hover:text-amber-400 border border-white/10 flex items-center justify-center text-zinc-300 transition-colors"
                aria-label="LinkedIn Le Motif Prod"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-white block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5 font-light">
              <li>
                <a href="#portfolio" className="hover:text-amber-400 transition-colors">
                  Portfolio & Séries
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Formules & Tarifs
                </a>
              </li>
              <li>
                <a href="#calculateur" className="hover:text-amber-400 transition-colors">
                  Simulateur de Devis
                </a>
              </li>
              <li>
                <a href="#studio" className="hover:text-amber-400 transition-colors">
                  Le Studio & Matériel
                </a>
              </li>
              <li>
                <a href="#temoignages" className="hover:text-amber-400 transition-colors">
                  Avis Clients
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Prestations */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-white block mb-4">
              Prestations
            </span>
            <ul className="space-y-2.5 font-light">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Portraits & Book d’Artiste
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Shooting Mode & Éditorial
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Portraits Corporate & Marque
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Reportages Mariages d’Exception
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Vidéos Cinéma & Drone 4K
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Informations */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-white block mb-4">
              Contact & Ateliers
            </span>
            <ul className="space-y-2.5 font-light">
              <li className="text-zinc-300">Studio : Paris 11e</li>
              <li>Tél : +33 (0)1 89 47 20 10</li>
              <li>Email : contact@lemotifprod.fr</li>
              <li className="text-amber-400/90 pt-1">Ouvert du lundi au samedi sur rendez-vous</li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & micro-reassurance line */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Le Motif Prod. Tous droits réservés.
          </div>

          {/* Micro-réassurance discrète 100% SVG */}
          <div className="flex items-center gap-2 text-zinc-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Sélection & galeries chiffrées SSL 256-bit • Données protégées RGPD</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Mentions Légales
            </a>
            <span>•</span>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Politique de Confidentialité
            </a>
            <span>•</span>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
