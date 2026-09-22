import React from 'react';
import { PROCESS_STEPS } from '@/data/content';
import { Sparkles, Layers } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0c0e14] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Méthodologie & Accompagnement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight mb-4">
            Comment se déroule votre projet
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            De la première intention créative jusqu’à la livraison de vos tirages de collection, une expérience sereine, précise et soignée.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <span className="font-mono text-3xl font-bold text-amber-400/40 group-hover:text-amber-400 transition-colors block mb-4">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold font-serif text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-zinc-400 font-medium">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Excellence garantie</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
