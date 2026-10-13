"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Feature {
  step?: string;
  service?: string;
  title?: string;
  content: string;
  image: string;
  tag?: string;
  linkText?: string;
  linkHref?: string;
}

export interface FeatureStepsProps {
  features: Feature[];
  className?: string;
  kicker?: string;
  title?: string;
  subtitle?: string;
  autoPlayInterval?: number;
  imageHeight?: string;
}

export function FeatureSteps({
  features,
  className,
  kicker = "Notre Savoir-Faire & Services",
  title = "L'Excellence de Nos Services",
  subtitle = "De la conception artistique sur-mesure à la livraison d'œuvres d'art visuelles et cinématographiques de prestige.",
  autoPlayInterval = 4500,
  imageHeight = "h-[360px] sm:h-[420px] lg:h-[480px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const stepMs = 50;
    const progressIncrement = (stepMs / autoPlayInterval) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentFeature((current) => (current + 1) % features.length);
          return 0;
        }
        return prev + progressIncrement;
      });
    }, stepMs);

    return () => clearInterval(timer);
  }, [isPaused, features.length, autoPlayInterval]);

  const handleSelectFeature = (index: number) => {
    setCurrentFeature(index);
    setProgress(0);
  };

  return (
    <div
      className={cn("w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-4">
          {kicker && (
            <div className="flex justify-center">
              <span className="badge-premium-dark">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EFA31D] shrink-0" />
                {kicker}
              </span>
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.025em] leading-[1.1] text-gradient-metallic-dark font-montserrat">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg font-normal leading-[1.6]">
              {subtitle}
            </p>
          )}
        </div>

        {/* 2-Column Interactive Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column : Services with Animated Progress */}
          <div className="w-full lg:col-span-6 space-y-4 sm:space-y-5 order-2 lg:order-1">
            {features.map((feature, index) => {
              const isActive = index === currentFeature;
              return (
                <div
                  key={index}
                  onClick={() => handleSelectFeature(index)}
                  className={cn(
                    "group relative p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-left overflow-hidden",
                    isActive
                      ? "bg-[#12141A] border-[#EFA31D]/40 shadow-xl shadow-[#EFA31D]/5"
                      : "bg-[#0B0D12]/60 border-[#1E2028] hover:bg-[#12141A]/70 hover:border-[#2C303B]"
                  )}
                >
                  {/* Subtle Progress Bar on Active Item */}
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#1E2028] overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#D88F14] to-[#EFA31D]"
                        style={{ width: `${progress}%` }}
                        transition={{ ease: "linear" }}
                      />
                    </div>
                  )}

                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Service Icon Badge */}
                    <div
                      className={cn(
                        "w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-montserrat font-extrabold text-sm sm:text-base shrink-0 border transition-all duration-300",
                        isActive
                          ? "bg-white border-white text-black shadow-lg scale-105"
                          : index < currentFeature
                          ? "bg-white/[0.08] border-white/15 text-slate-200"
                          : "bg-[#0F1117] border-[#1E2028] text-gray-500"
                      )}
                    >
                      {index < currentFeature ? (
                        <Check className="w-5 h-5 stroke-[2.5]" />
                      ) : (
                        <span>0{index + 1}</span>
                      )}
                    </div>

                    {/* Service Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3
                          className={cn(
                            "text-base sm:text-lg lg:text-xl font-bold transition-colors duration-200",
                            isActive ? "text-white" : "text-gray-300 group-hover:text-white"
                          )}
                        >
                          {feature.title || feature.service || feature.step}
                        </h3>
                        {feature.tag && (
                          <span
                            className={cn(
                              "text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-md border tracking-wider",
                              isActive
                                ? "bg-white/10 border-white/20 text-white"
                                : "bg-white/[0.03] border-white/10 text-gray-400"
                            )}
                          >
                            {feature.tag}
                          </span>
                        )}
                      </div>

                      <p
                        className={cn(
                          "text-xs sm:text-sm font-light leading-relaxed transition-colors duration-200",
                          isActive ? "text-gray-300" : "text-gray-400 line-clamp-2 sm:line-clamp-none"
                        )}
                      >
                        {feature.content}
                      </p>

                      {isActive && feature.linkText && (
                        <div className="pt-3">
                          <a
                            href={feature.linkHref || "#contact"}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-white hover:underline underline-offset-4 transition-all"
                          >
                            <span>{feature.linkText}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column : Animated Visual Card Showcase */}
          <div
            className={cn(
              "w-full lg:col-span-6 relative overflow-hidden rounded-2xl border border-[#23252B] bg-[#0A0C10] shadow-2xl order-1 lg:order-2",
              imageHeight
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 w-full h-full"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.title || feature.service || feature.step}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                        decoding="async"
                      />

                      {/* Liquid Dark Gradient Vignette for Depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/30 to-transparent opacity-90" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#08090C]/60 via-transparent to-transparent" />

                      {/* Floating Info Overlay on Image */}
                      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-xl bg-[#08090C]/85 backdrop-blur-md border border-[#23252B]/80 text-left">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-300">
                              Service 0{index + 1} · {feature.service || feature.step || feature.title}
                            </span>
                            <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
                              {feature.title}
                            </h4>
                          </div>
                          <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSteps;
