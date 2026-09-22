'use client';

import React from 'react';
import { SERVICES_DATA, ServicePackage } from '@/data/content';
import { Check, Sparkles, Clock, Compass, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-[#0c0e14] relative border-t border-white/10">
      {/* Background ambient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Prestations & Formules</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight mb-4">
            Une offre taillée pour vos exigences
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Chaque projet est unique. Nous combinons direction artistique rigoureuse, matériel cinéma et accompagnement personnalisé pour sublimer vos images.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                service.popular
                  ? 'bg-gradient-to-b from-[#161822] to-[#0f1118] border-2 border-amber-400/40 shadow-xl shadow-amber-500/5'
                  : 'bg-white/[0.02] border border-white/10 hover:border-white/20'
              }`}
            >
              {/* Badge */}
              {service.badge && (
                <div className="absolute top-6 right-6">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase ${
                      service.popular
                        ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/30'
                        : 'bg-white/10 text-zinc-300 border border-white/15'
                    }`}
                  >
                    {service.badge}
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold font-serif text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-amber-300/90 text-xs sm:text-sm font-medium mb-4">
                  {service.tagline}
                </p>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                {/* Duration & Price highlight */}
                <div className="flex items-center gap-4 py-3 px-4 rounded-xl bg-black/40 border border-white/10 mb-6">
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="w-px h-4 bg-white/20" />
                  <div className="text-xs text-zinc-300">
                    À partir de <span className="text-base font-bold font-serif text-amber-400">{service.startingPrice} €</span>
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                    Inclus dans la formule :
                  </span>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] text-zinc-400 italic">
                  Idéal pour : {service.idealFor}
                </span>
                <button
                  onClick={() => onSelectService(service.id)}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                    service.popular
                      ? 'bg-amber-500 hover:bg-amber-400 text-zinc-950 shadow-md shadow-amber-500/25'
                      : 'bg-white/10 hover:bg-white/15 text-white border border-white/15'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Sélectionner cette formule</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
