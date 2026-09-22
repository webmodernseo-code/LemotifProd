'use client';

import React, { useState } from 'react';
import { Calculator, Check, Sparkles, Send, ShieldCheck } from 'lucide-react';

interface PricingCalculatorProps {
  onOpenBookingWithDetails: (details: {
    serviceName: string;
    totalPrice: number;
    options: string[];
  }) => void;
}

interface BaseOption {
  id: string;
  name: string;
  basePrice: number;
  description: string;
}

interface AddOnOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ onOpenBookingWithDetails }) => {
  const baseFormulas: BaseOption[] = [
    {
      id: 'portrait',
      name: 'Portrait & Book Pro',
      basePrice: 380,
      description: 'Séance 1h30, 15 retouches HD, studio ou extérieur',
    },
    {
      id: 'corporate',
      name: 'Corporate & Marque',
      basePrice: 790,
      description: 'Demi-journée, portraits équipe & locaux, droits commerciaux',
    },
    {
      id: 'wedding',
      name: 'Mariage & Grand Événement',
      basePrice: 1490,
      description: 'Journée complète, 400+ clichés retouchés, galerie partagée',
    },
    {
      id: 'video',
      name: 'Production Vidéo & Clip',
      basePrice: 950,
      description: 'Tournage 4K, montage dynamique, étalonnage cinéma',
    },
  ];

  const availableAddons: AddOnOption[] = [
    {
      id: 'drone',
      name: 'Prises de vue Aériennes par Drone 5K',
      price: 250,
      description: 'Plans aériens cinématiques par pilote certifié DGAC',
    },
    {
      id: 'mua',
      name: 'Maquilleuse & Coiffeuse Pro Studio',
      price: 160,
      description: 'Mise en beauté professionnelle avant le shooting',
    },
    {
      id: 'express',
      name: 'Livraison Express 48h Chrono',
      price: 120,
      description: 'Traitement prioritaire de votre galerie en moins de 48 heures',
    },
    {
      id: 'fineart',
      name: 'Coffret Bois & 10 Tirages Fine Art',
      price: 190,
      description: 'Impression d’art sur papier coton Hahnemühle 308g',
    },
    {
      id: 'assistant',
      name: 'Second Photographe / Cadreur',
      price: 350,
      description: 'Double couverture pour ne manquer aucun angle de vue',
    },
  ];

  const [selectedBase, setSelectedBase] = useState<string>('portrait');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentBase = baseFormulas.find((f) => f.id === selectedBase) || baseFormulas[0];
  const addonsTotal = selectedAddons.reduce((acc, id) => {
    const found = availableAddons.find((a) => a.id === id);
    return acc + (found ? found.price : 0);
  }, 0);

  const totalPrice = currentBase.basePrice + addonsTotal;

  const handleSendEstimate = () => {
    const addonNames = selectedAddons.map(
      (id) => availableAddons.find((a) => a.id === id)?.name || id
    );
    onOpenBookingWithDetails({
      serviceName: currentBase.name,
      totalPrice,
      options: addonNames,
    });
  };

  return (
    <section id="calculateur" className="py-24 bg-[#08090d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulateur en Temps Réel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight mb-4">
            Estimez votre projet sur-mesure
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Configurez votre formule en quelques clics selon vos besoins spécifiques et obtenez une estimation transparente instantanée.
          </p>
        </div>

        {/* Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Config Area */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Base Formula */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e1017] border border-white/10">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block mb-4">
                1. Choisissez votre formule principale
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {baseFormulas.map((formula) => {
                  const isSelected = selectedBase === formula.id;
                  return (
                    <div
                      key={formula.id}
                      onClick={() => setSelectedBase(formula.id)}
                      className={`p-4 rounded-xl cursor-pointer border transition-all duration-200 ${
                        isSelected
                          ? 'bg-amber-500/10 border-amber-400/60 shadow-md shadow-amber-500/10'
                          : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-serif font-bold text-white text-base">
                          {formula.name}
                        </span>
                        <span className="text-amber-400 font-semibold text-sm font-mono">
                          {formula.basePrice} €
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed font-light">
                        {formula.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Add-on Options */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e1017] border border-white/10">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block mb-4">
                2. Personnalisez avec des options exclusives
              </span>
              <div className="space-y-3">
                {availableAddons.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-4 rounded-xl cursor-pointer border flex items-center justify-between gap-4 transition-all duration-200 ${
                        isChecked
                          ? 'bg-amber-500/10 border-amber-400/50'
                          : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                            isChecked
                              ? 'bg-amber-500 border-amber-500 text-zinc-950'
                              : 'border-white/30 bg-black/40'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            {addon.name}
                          </div>
                          <div className="text-xs text-zinc-400 font-light">
                            {addon.description}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm font-mono font-semibold text-amber-400 whitespace-nowrap">
                        +{addon.price} €
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right / Live Estimate Summary */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#141620] to-[#0c0d14] border border-amber-400/30 shadow-2xl shadow-black/80">
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                    Récapitulatif de l’estimation
                  </span>
                  <h3 className="text-xl font-bold font-serif text-white mt-1">
                    {currentBase.name}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Calculator className="w-5 h-5" />
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-xs text-zinc-300">
                  <span>Formule de base :</span>
                  <span className="font-mono text-white">{currentBase.basePrice} €</span>
                </div>

                {selectedAddons.length > 0 ? (
                  selectedAddons.map((id) => {
                    const add = availableAddons.find((a) => a.id === id);
                    if (!add) return null;
                    return (
                      <div key={id} className="flex justify-between text-xs text-zinc-400">
                        <span className="truncate pr-2">• {add.name}</span>
                        <span className="font-mono text-amber-300">+{add.price} €</span>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-xs text-zinc-400 italic">
                    Aucune option supplémentaire sélectionnée
                  </div>
                )}
              </div>

              {/* Total Box */}
              <div className="p-4 rounded-xl bg-black/50 border border-white/10 mb-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs uppercase tracking-wider text-zinc-300 font-semibold">
                    Total Estimatif :
                  </span>
                  <div className="text-right">
                    <span className="text-3xl font-bold font-serif text-gradient-gold">
                      {totalPrice} €
                    </span>
                    <span className="text-[10px] text-zinc-400 block">TTC indicatif</span>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                onClick={handleSendEstimate}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25 transition-all duration-200"
              >
                <Send className="w-4 h-4" />
                <span>Bloquer cette estimation & réserver</span>
              </button>

              {/* Micro-reassurance */}
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-[11px] text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Sans engagement • Réponse garantie sous 24h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
