'use client';

import React from 'react';
import { Sparkles, ArrowRight, Eye, Star, ShieldCheck, Award } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExplorePortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExplorePortfolio }) => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#08090d]">
      {/* Background Ambient Imagery & Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 scale-105 transform transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1800&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090d]/80 via-[#08090d]/90 to-[#08090d]" />
        
        {/* Subtle Radial Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-indigo-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs font-medium tracking-wider uppercase mb-8 shadow-sm">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>Studio Photographique & Production Visuelle d’Exception</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white font-serif leading-[1.1] mb-6">
          Capturer l’élégance,{' '}
          <span className="text-gradient-gold block sm:inline">
            révéler l’émotion.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed font-light mb-10">
          De la haute couture au portrait de caractère, en passant par le reportage de marque et la vidéo 4K. 
          Une vision esthétique affûtée pour sublimer chaque instant décisif.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>Réserver une séance</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExplorePortfolio}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium text-sm tracking-wide transition-all duration-200 backdrop-blur-sm hover:border-white/30"
          >
            <Eye className="w-4 h-4 text-zinc-400" />
            <span>Explorer le Portfolio</span>
          </button>
        </div>

        {/* Trust & Proof Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-zinc-200">4.9/5</span>
            <span className="text-zinc-500">(+120 avis vérifiés)</span>
          </div>

          <div className="hidden sm:block w-1 h-1 rounded-full bg-zinc-700" />

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Livraison galerie privée sécurisée sous 48h/72h</span>
          </div>

          <div className="hidden sm:block w-1 h-1 rounded-full bg-zinc-700" />

          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-zinc-300">Créneaux ouverts pour la saison 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
};
