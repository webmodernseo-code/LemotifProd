'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PORTFOLIO_DATA, PortfolioItem } from '@/data/content';
import { Sparkles, X, Camera, Sliders, ExternalLink, Calendar, User } from 'lucide-react';

interface PortfolioGalleryProps {
  onOpenBooking: (prefillService?: string) => void;
}

type FilterCategory = 'all' | 'portrait' | 'fashion' | 'corporate' | 'events' | 'video';

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filters: { label: string; value: FilterCategory }[] = [
    { label: 'Tous les projets', value: 'all' },
    { label: 'Portraits & Art', value: 'portrait' },
    { label: 'Mode & Éditorial', value: 'fashion' },
    { label: 'Corporate & Marques', value: 'corporate' },
    { label: 'Événements & Mariages', value: 'events' },
    { label: 'Vidéo & Drone', value: 'video' },
  ];

  const filteredItems = activeFilter === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-[#08090d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Galerie & Réalisations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight mb-4">
            L’art de la lumière & du détail
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Parcourez une sélection de nos productions récentes. Chaque cliché raconte une histoire façonnée avec exigence technique et regard d’auteur.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeFilter === filter.value
                  ? 'bg-amber-500 text-zinc-950 font-semibold shadow-lg shadow-amber-500/20'
                  : 'bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 hover:border-white/20'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Masonry / Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 hover:border-amber-400/40 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-black/60 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              </div>

              {/* Badges & Content */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-medium text-amber-300 tracking-wide">
                  {item.categoryLabel}
                </span>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 rounded-full bg-amber-500 text-zinc-950 flex items-center justify-center shadow-md">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 text-left transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-bold font-serif text-white group-hover:text-amber-300 transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-300 line-clamp-2 font-light">
                  {item.description}
                </p>

                {/* Micro EXIF info on hover */}
                <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-zinc-400">
                  <span>{item.specs.camera}</span>
                  <span className="text-amber-400/90 font-mono">{item.specs.aperture} • {item.specs.lens}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-4xl w-full max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0e1017] border border-white/15 shadow-2xl flex flex-col md:flex-row overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-zinc-300 hover:text-white border border-white/15 hover:bg-black/80 transition-colors"
              aria-label="Fermer la vue"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Image Container */}
            <div className="relative w-full md:w-3/5 h-80 md:h-auto min-h-[350px] md:min-h-[480px] bg-black">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover object-center"
              />
            </div>

            {/* Right: Technical Details & Story */}
            <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold mb-3">
                  {selectedItem.categoryLabel}
                </span>

                <h3 className="text-2xl font-bold font-serif text-white mb-3">
                  {selectedItem.title}
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed font-light mb-6">
                  {selectedItem.description}
                </p>

                {/* Metadata */}
                <div className="space-y-3 mb-6">
                  {selectedItem.client && (
                    <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                      <User className="w-4 h-4 text-amber-400" />
                      <span>Client : <strong className="text-white">{selectedItem.client}</strong></span>
                    </div>
                  )}
                  <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span>Année : <strong className="text-white">{selectedItem.year}</strong></span>
                  </div>
                </div>

                {/* EXIF Data Box */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200">
                    <Sliders className="w-3.5 h-3.5 text-amber-400" />
                    <span>Données Techniques & Prise de Vue</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-400 font-mono">
                    <div>Boîtier : <span className="text-zinc-200">{selectedItem.specs.camera}</span></div>
                    <div>Optique : <span className="text-zinc-200">{selectedItem.specs.lens}</span></div>
                    <div>Ouverture : <span className="text-amber-300">{selectedItem.specs.aperture}</span></div>
                    <div>Vitesse : <span className="text-zinc-200">{selectedItem.specs.shutter}</span></div>
                    <div>Sensibilité : <span className="text-zinc-200">ISO {selectedItem.specs.iso}</span></div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  const prefill = selectedItem.category;
                  setSelectedItem(null);
                  onOpenBooking(prefill);
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>Demander un rendu similaire</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
