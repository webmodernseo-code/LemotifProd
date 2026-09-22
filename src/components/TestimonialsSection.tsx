import React from 'react';
import Image from 'next/image';
import { TESTIMONIALS_DATA } from '@/data/content';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="temoignages" className="py-24 bg-[#0c0e14] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Témoignages & Retours d’Expérience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            La confiance de nos clients est notre plus belle fierté. Découvrez leurs impressions après leurs shootings et reportages.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between hover:border-amber-400/30 transition-all duration-300"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content Quote */}
                <p className="text-sm text-zinc-300 leading-relaxed font-light italic mb-6">
                  « {testimonial.content} »
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3.5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-amber-400/30 shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-white font-serif">
                      {testimonial.name}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <p className="text-xs text-zinc-400">
                    {testimonial.role}{testimonial.company ? ` • ${testimonial.company}` : ''}
                  </p>
                  <span className="text-[10px] text-amber-400/80 font-mono block mt-0.5">
                    {testimonial.projectType}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
