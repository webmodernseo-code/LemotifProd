"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  year: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Photographie",
    subtitle: "Studio & Prise de vue plein format",
    description: "Portraits studio, reportages événementiels, cérémonies et univers corporate.",
    year: "Studio & Art",
    link: "#portfolio",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Infographie",
    subtitle: "Identité de marque & Supports print",
    description: "Identité visuelle, logotypes vectoriels, affiches éditoriales et chartes graphiques.",
    year: "Design & Print",
    link: "#contact",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Montage Vidéo",
    subtitle: "Cinématographie 4K & Motion design",
    description: "Storytelling dynamique 4K, découpage rythmé, sound design et motion graphics.",
    year: "4K & Motion",
    link: "#contact",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Direction Artistique",
    subtitle: "Colorimétrie & Retouche studio de pointe",
    description: "Univers visuels sur-mesure, étalonnage cinématographique et retouche de pointe.",
    year: "Color & FX",
    link: "#contact",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop",
  },
];

export function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationRef = useRef<number | null>(null);

  // Animation d'inertie fluide au curseur (Desktop)
  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  // Détection du scroll sur mobile : fait apparaître la carte d'aperçu au scroll
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const indexStr = entry.target.getAttribute("data-index");
            if (indexStr !== null) {
              setMobileActiveIndex(Number(indexStr));
            }
          }
        });
      },
      {
        rootMargin: "-25% 0px -25% 0px",
        threshold: 0.5,
      }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsVisible(false);
  };

  // Indice actif (Desktop ou Mobile)
  const activeIndex = hoveredIndex !== null ? hoveredIndex : mobileActiveIndex;

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 py-6"
    >
      {/* 💻 CARTE FLOTTANTE AU CURSEUR SUR DESKTOP (Invisible au départ, apparaît au hover) */}
      <div
        className="pointer-events-none absolute z-50 hidden md:block overflow-hidden rounded-2xl shadow-2xl"
        style={{
          left: 0,
          top: 0,
          transform: `translate3d(${smoothPosition.x + 20}px, ${smoothPosition.y - 100}px, 0)`,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8,
          transition:
            "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="relative w-[300px] h-[190px] bg-[#12141A] rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
          {projects.map((project, index) => (
            <img
              key={project.title}
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                scale: hoveredIndex === index ? 1 : 1.1,
                filter: hoveredIndex === index ? "none" : "blur(10px)",
              }}
            />
          ))}
          {/* Subtle gradient overlay & signature badge */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <span className="text-[11px] font-medium text-white tracking-wide">
              {hoveredIndex !== null ? projects[hoveredIndex]?.subtitle : ""}
            </span>
            <span className="text-[10px] font-mono text-[#EFA31D] bg-black/70 px-2 py-0.5 rounded-md border border-[#EFA31D]/40">
              LEMOTIF PROD
            </span>
          </div>
        </div>
      </div>

      {/* 📱 CARTE FLOTTANTE DYNAMIQUE SUR MOBILE (Invisible au départ, apparaît au scroll / touch avec l'effet de flou et de zoom) */}
      <div className="md:hidden sticky top-20 z-40 mb-6 flex justify-center pointer-events-none">
        <AnimatePresence>
          {mobileActiveIndex !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[280px] h-[160px] bg-[#12141A] rounded-2xl overflow-hidden border border-[#EFA31D]/40 shadow-2xl shadow-black/80 ring-1 ring-[#EFA31D]/20"
            >
              {projects.map((project, index) => (
                <img
                  key={project.title}
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out"
                  style={{
                    opacity: mobileActiveIndex === index ? 1 : 0,
                    scale: mobileActiveIndex === index ? 1 : 1.12,
                    filter: mobileActiveIndex === index ? "none" : "blur(10px)",
                  }}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-white tracking-wide">
                  {projects[mobileActiveIndex]?.title}
                </span>
                <span className="text-[10px] font-mono text-[#EFA31D] bg-black/70 px-2 py-0.5 rounded-md border border-[#EFA31D]/40">
                  {projects[mobileActiveIndex]?.year}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 📐 Disposition en 2x2 Grid (100% épurée au départ, aucune image statique encombante) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 sm:gap-y-8">
        {projects.map((project, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={project.title}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              data-index={index}
              className="flex flex-col"
            >
              <a
                href={project.link}
                className="group block"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => setMobileActiveIndex(index)}
              >
                <div
                  className={cn(
                    "relative py-5 border-t border-b transition-all duration-300 ease-out",
                    isActive ? "border-[#EFA31D]/50" : "border-[#232630]"
                  )}
                >
                  {/* Background highlight on hover / active */}
                  <div
                    className={cn(
                      "absolute inset-0 -mx-3 sm:-mx-4 px-3 sm:px-4 rounded-xl transition-all duration-300 ease-out",
                      "bg-[#14161E]/80 border border-[#2B2F3D]/50",
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    )}
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      {/* Title with animated gold underline */}
                      <div className="inline-flex items-center gap-2">
                        <span className="text-xs font-mono text-[#EFA31D]">
                          0{index + 1}
                        </span>
                        <h3
                          className={cn(
                            "font-semibold text-lg sm:text-xl tracking-tight transition-colors duration-300",
                            isActive ? "text-[#EFA31D]" : "text-white"
                          )}
                        >
                          <span className="relative">
                            {project.title}
                            {/* Animated underline */}
                            <span
                              className={cn(
                                "absolute left-0 -bottom-0.5 h-[2px] bg-[#EFA31D] transition-all duration-300 ease-out",
                                isActive ? "w-full" : "w-0"
                              )}
                            />
                          </span>
                        </h3>

                        {/* Arrow that slides in */}
                        <ArrowUpRight
                          className={cn(
                            "w-4 h-4 transition-all duration-300 ease-out",
                            isActive
                              ? "opacity-100 translate-x-0 translate-y-0 text-[#EFA31D]"
                              : "opacity-0 -translate-x-2 translate-y-2 text-gray-500"
                          )}
                        />
                      </div>

                      {/* Description with fade effect */}
                      <p
                        className={cn(
                          "text-gray-400 text-xs sm:text-sm mt-1.5 leading-relaxed transition-colors duration-300",
                          isActive ? "text-gray-200" : "text-gray-400"
                        )}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Year / Specialty badge */}
                    <span
                      className={cn(
                        "text-xs font-mono text-gray-400 tabular-nums whitespace-nowrap px-2.5 py-1 rounded-lg border border-[#232630] bg-[#0E1015] transition-all duration-300",
                        isActive && "text-[#EFA31D] border-[#EFA31D]/40 bg-[#EFA31D]/10"
                      )}
                    >
                      {project.year}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectShowcase;
