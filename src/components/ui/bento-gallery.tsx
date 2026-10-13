"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  type Variants,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { X, Play, Image as ImageIcon, Sparkles, ExternalLink, Maximize2 } from "lucide-react";

export type MediaType = "photo" | "video" | "poster";

export type ImageItem = {
  id: number | string;
  title: string;
  desc: string;
  url: string;
  type?: MediaType;
  videoUrl?: string;
  badge?: string;
  category?: string;
  span?: string; // e.g., "md:col-span-2 md:row-span-2"
};

export interface InteractiveImageBentoGalleryProps {
  imageItems: ImageItem[];
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
  theme?: "light" | "dark";
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

export const ImageModal: React.FC<{
  item: ImageItem;
  onClose: () => void;
}> = ({ item, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#08090C]/90 backdrop-blur-2xl p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`media-title-${item.id}`}
    >
      <motion.div
        initial={{ scale: 0.94, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.94, y: 20, opacity: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
        className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-[#0D1017] border border-white/15 shadow-[0_24px_80px_rgba(0,0,0,0.8)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* En-tête modal avec badges */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#12151E]">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/15">
              {item.badge || item.type?.toUpperCase() || "OEUVRE"}
            </span>
            <h3 id={`media-title-${item.id}`} className="text-base sm:text-lg font-bold text-white font-montserrat tracking-tight">
              {item.title}
            </h3>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-200"
            aria-label="Fermer la vue"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Corps média de la modal */}
        <div className="relative max-h-[75vh] flex items-center justify-center bg-black/40 p-2 sm:p-4 overflow-hidden">
          {item.type === "video" && item.videoUrl ? (
            <video
              src={item.videoUrl}
              poster={item.url}
              controls
              autoPlay
              className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            />
          ) : (
            <img
              src={item.url}
              alt={item.title}
              className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            />
          )}
        </div>

        {/* Pied de la modal avec description */}
        <div className="px-6 py-4 bg-[#0E1119] border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
          <p className="text-xs sm:text-sm text-gray-300 font-normal">
            {item.desc}
          </p>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold font-montserrat rounded-lg bg-white text-[#08090C] hover:bg-white/90 transition-all flex items-center gap-1.5"
            >
              Commander ce style
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const InteractiveImageBentoGallery: React.FC<
  InteractiveImageBentoGalleryProps
> = ({
  imageItems,
  title = "Galerie Studio & Créations",
  subtitle = "Bento Interactif",
  description = "Explorez nos œuvres photographiques d'art, tournages cinéma 4K et affiches graphiques. Glissez pour parcourir, cliquez pour agrandir.",
  className,
  theme = "dark",
}) => {
  const isLight = theme === "light";
  const [selectedItem, setSelectedItem] = useState<ImageItem | null>(null);
  const [dragConstraint, setDragConstraint] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateConstraints = () => {
      if (gridRef.current && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const gridWidth = gridRef.current.scrollWidth;
        const newConstraint = Math.min(0, containerWidth - gridWidth - 32);
        setDragConstraint(newConstraint);
      }
    };

    calculateConstraints();
    window.addEventListener("resize", calculateConstraints);
    return () => window.removeEventListener("resize", calculateConstraints);
  }, [imageItems]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.15], [24, 0]);

  return (
    <section
      ref={targetRef}
      className={cn(
        "relative w-full overflow-hidden py-10 sm:py-16 select-none",
        isLight ? "bg-transparent text-gray-900" : "bg-[#08090C] text-white",
        className
      )}
    >
      {/* En-tête de section Bento */}
      <motion.div
        style={{ opacity, y }}
        className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-3 relative z-10"
      >
        {subtitle && (
          <div className="flex justify-center">
            <span className={cn("text-[11px]", isLight ? "badge-premium-light shadow-2xs" : "badge-premium-dark")}>
              <Sparkles className={cn("w-3 h-3 mr-1.5", isLight ? "text-gray-900" : "text-[#A5B9E8]")} />
              {subtitle}
            </span>
          </div>
        )}
        <h2 className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.03em] leading-[1.1] font-montserrat",
          isLight ? "text-gray-900" : "text-gradient-metallic-dark"
        )}>
          {title}
        </h2>
        {description && (
          <p className={cn(
            "mx-auto max-w-2xl text-xs sm:text-sm font-normal leading-relaxed",
            isLight ? "text-gray-600" : "text-gray-300"
          )}>
            {description}
          </p>
        )}
      </motion.div>

      {/* Conteneur Bento Draggable */}
      <div
        ref={containerRef}
        className="relative mt-8 w-full cursor-grab active:cursor-grabbing overflow-hidden"
      >
        <motion.div
          className="w-max"
          drag="x"
          dragConstraints={{ left: dragConstraint, right: 0 }}
          dragElastic={0.06}
        >
          <motion.div
            ref={gridRef}
            className="grid auto-cols-[minmax(16rem,22rem)] grid-flow-col gap-4 px-4 md:px-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {imageItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={cn(
                  "group relative flex h-full min-h-[16rem] sm:min-h-[19rem] w-full min-w-[16rem] cursor-pointer items-end overflow-hidden rounded-2xl p-5 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2",
                  isLight
                    ? "border border-gray-200/90 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] hover:border-gray-300 focus-visible:ring-gray-900/40"
                    : "border border-white/15 bg-[#0D1017] shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.8)] hover:border-white/40 focus-visible:ring-white/50",
                  item.span || ""
                )}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => setSelectedItem(item)}
                onKeyDown={(e) => e.key === "Enter" && setSelectedItem(item)}
                tabIndex={0}
                aria-label={`Voir ${item.title}`}
              >
                {/* Image de fond */}
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Filtre dégradé liquide de fond */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/50 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

                {/* Badge média en haut à gauche */}
                <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5">
                  <span className={cn(
                    "px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider font-montserrat uppercase flex items-center gap-1 backdrop-blur-md",
                    isLight
                      ? "bg-white/90 text-gray-900 border border-white/50 shadow-xs"
                      : "bg-black/60 text-white border border-white/15"
                  )}>
                    {item.type === "video" ? (
                      <Play className={cn("w-2.5 h-2.5 fill-current", isLight ? "text-gray-900" : "text-white")} />
                    ) : item.type === "poster" ? (
                      <Sparkles className={cn("w-2.5 h-2.5", isLight ? "text-gray-900" : "text-[#A5B9E8]")} />
                    ) : (
                      <ImageIcon className={cn("w-2.5 h-2.5", isLight ? "text-gray-900" : "text-white")} />
                    )}
                    {item.badge || item.type || "PRO"}
                  </span>
                </div>

                {/* Bouton d'agrandissement en haut à droite */}
                <div className="absolute top-3.5 right-3.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className={cn(
                    "w-7 h-7 rounded-full backdrop-blur-md flex items-center justify-center shadow-md",
                    isLight
                      ? "bg-white/90 text-gray-900 border border-gray-200"
                      : "bg-white/20 text-white border border-white/20"
                  )}>
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Contenu et titre en bas avec transition fluide */}
                <div className="relative z-10 translate-y-2 opacity-90 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 space-y-1 text-left">
                  <h3 className="text-base sm:text-lg font-bold text-white font-montserrat tracking-tight leading-snug drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-200 font-normal leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Modal Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <ImageModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default InteractiveImageBentoGallery;
