"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const defaultFAQs: FAQItem[] = [
  {
    id: "delais",
    category: "Livraison & Formats",
    question: "Quels sont les délais de livraison pour les photos et les vidéos ?",
    answer:
      "Vos séries photographiques retouchées sont livrées sous 5 à 7 jours ouvrés. Pour les réalisations vidéo 4K (montage, sound design et étalonnage), comptez 10 à 14 jours ouvrés. L'ensemble est mis à disposition sur une galerie privée en ligne sécurisée, accessible en haute résolution.",
  },
  {
    id: "deplacement",
    category: "Mobilité",
    question: "Vous déplacez-vous en France et à l'international ?",
    answer:
      "Oui, absolument. Bien que notre studio soit basé en Île-de-France, nous intervenons régulièrement sur toute la France métropolitaine ainsi qu'à l'international pour des mariages d'exception, des reportages corporate et des productions publicitaires.",
  },
  {
    id: "reservation",
    category: "Organisation",
    question: "Comment se déroule la réservation d'une prestation ?",
    answer:
      "Tout débute par un premier échange (téléphone, visio ou rencontre) afin de cerner vos besoins. Nous vous transmettons ensuite une proposition sur-mesure. La date est définitivement réservée dès la validation de la convention et le règlement de l'acompte de réservation.",
  },
  {
    id: "raw-retouche",
    category: "Qualité & Post-Production",
    question: "Fournissez-vous les fichiers bruts (RAW) ou uniquement les photos retouchées ?",
    answer:
      "Nous livrons exclusivement des photographies et vidéos minutieusement sélectionnées, corrigées et sublimées selon la signature artistique de LEMOTIF PROD. Le travail de post-production et d'étalonnage fait partie intégrante de notre identité visuelle.",
  },
  {
    id: "direction-artistique",
    category: "Accompagnement Créatif",
    question: "Proposez-vous un accompagnement artistique avant le shooting ?",
    answer:
      "Tout à fait. Avant chaque séance ou tournage, nous co-construisons un moodboard d'inspiration, définissons l'ambiance lumineuse, le choix des tenues et les décors propices afin de garantir un résultat aligné avec vos attentes.",
  },
  {
    id: "materiel",
    category: "Équipement Technique",
    question: "Quel matériel photo et vidéo utilisez-vous sur les tournages ?",
    answer:
      "Nous exploitons du matériel professionnel de pointe : boîtiers plein format 45MP+, optiques cinématographiques haute précision, enregistrement 4K 10-bit, éclairages studio de précision, stabilisateurs gyroscopiques et captation audio broadcast.",
  },
];

interface FAQSectionProps {
  items?: FAQItem[];
  className?: string;
  theme?: "light" | "dark";
}

export function FAQSection({
  items = defaultFAQs,
  className,
  theme = "light",
}: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const isLight = theme === "light";

  return (
    <section
      id="faq"
      className={cn(
        "py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300",
        isLight ? "bg-[#FBFBFD] text-gray-900 border-b border-gray-200/80" : "bg-[#08090C] text-[#F3F4F6] border-b border-[#1E2028]",
        className
      )}
    >
      {/* Glow d'ambiance discret */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#EFA31D]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        {/* En-tête de la section FAQ */}
        <div className="text-center space-y-3">
          <p
            className={cn(
              "text-xs sm:text-sm font-semibold tracking-widest uppercase",
              isLight ? "text-amber-800" : "text-[#EFA31D]"
            )}
          >
            Questions Fréquentes
          </p>

          <h2
            className={cn(
              "text-3xl sm:text-5xl font-extrabold tracking-tight",
              isLight ? "text-gray-900" : "text-white"
            )}
          >
            Foire Aux <span className="text-[#EFA31D]">Questions</span>
          </h2>

          <p
            className={cn(
              "text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed",
              isLight ? "text-gray-600" : "text-gray-400"
            )}
          >
            Tout ce que vous devez savoir sur nos prestations photographiques, réalisations vidéo et notre méthodologie de travail.
          </p>
        </div>

        {/* Liste des Accordéons FAQ */}
        <div className="space-y-3.5">
          {items.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={cn(
                  "rounded-2xl border transition-all duration-300 overflow-hidden",
                  isLight
                    ? isOpen
                      ? "bg-white border-[#EFA31D]/40 shadow-md shadow-amber-500/5 ring-1 ring-[#EFA31D]/20"
                      : "bg-white/70 border-gray-200/80 hover:border-gray-300 hover:bg-white"
                    : isOpen
                    ? "bg-[#11131A] border-[#EFA31D]/50 shadow-xl shadow-black/40 ring-1 ring-[#EFA31D]/20"
                    : "bg-[#0D0E13] border-[#20232D] hover:border-[#2C303E]"
                )}
              >
                {/* Déclencheur Accordéon */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left transition-colors cursor-pointer select-none"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span
                      className={cn(
                        "text-xs font-mono font-bold shrink-0 transition-colors",
                        isOpen
                          ? "text-[#EFA31D]"
                          : isLight
                          ? "text-gray-400"
                          : "text-gray-500"
                      )}
                    >
                      0{index + 1}
                    </span>
                    <h3
                      className={cn(
                        "text-sm sm:text-base font-semibold tracking-tight transition-colors",
                        isOpen
                          ? isLight
                            ? "text-gray-950"
                            : "text-white"
                          : isLight
                          ? "text-gray-800"
                          : "text-gray-300"
                      )}
                    >
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={cn(
                      "p-1.5 rounded-xl border transition-all duration-300 shrink-0",
                      isOpen
                        ? "bg-[#EFA31D] text-black border-[#EFA31D] rotate-180"
                        : isLight
                        ? "bg-gray-100 border-gray-200 text-gray-500"
                        : "bg-[#161822] border-[#282B37] text-gray-400"
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Contenu Déroulant animé avec motion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div
                        className={cn(
                          "px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm font-light leading-relaxed border-t",
                          isLight
                            ? "text-gray-600 border-gray-100"
                            : "text-gray-300 border-[#1B1D25]"
                        )}
                      >
                        <p className="pl-7 sm:pl-8">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bloc d'aide & Réassurance en bas de FAQ */}
        <div
          className={cn(
            "p-6 sm:p-7 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left",
            isLight
              ? "bg-white border-gray-200 shadow-xs"
              : "bg-[#0D0E13] border-[#20232D]"
          )}
        >
          <div className="space-y-1">
            <h4
              className={cn(
                "text-sm font-bold tracking-tight",
                isLight ? "text-gray-900" : "text-white"
              )}
            >
              Vous avez une question spécifique sur votre projet ?
            </h4>
            <p
              className={cn(
                "text-xs font-light",
                isLight ? "text-gray-500" : "text-gray-400"
              )}
            >
              Échangeons directement sur vos impératifs, dates et envies créatives.
            </p>
          </div>

          <a href="#contact" className="shrink-0">
            <Button
              className="bg-[#EFA31D] hover:bg-[#D88F14] text-black font-bold text-xs h-10 px-5 rounded-xl gap-2 shadow-sm"
            >
              <span>Poser une question</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
