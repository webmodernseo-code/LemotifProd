import React from 'react';
import { STATS_DATA } from '@/data/content';

export const StatsBar: React.FC = () => {
  return (
    <section className="relative z-20 py-10 bg-[#0c0e14] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-400/20 transition-all duration-300"
            >
              <span className="text-3xl sm:text-4xl font-bold font-serif text-gradient-gold mb-1">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-zinc-400 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
