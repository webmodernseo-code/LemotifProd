"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export const defaultFaqs = [
  {
    question: "Quels sont les délais de livraison pour les photos et vidéos ?",
    answer:
      "Vos séries photographiques retouchées sont livrées sous 5 à 7 jours ouvrés. Pour les réalisations vidéo 4K (montage, sound design et étalonnage), comptez 10 à 14 jours ouvrés via notre galerie privée sécurisée en ligne.",
  },
  {
    question: "Vous déplacez-vous au Burkina Faso et à l'international ?",
    answer:
      "Oui, absolument. Notre studio principal est basé à Ouagadougou au Burkina Faso, et nous intervenons sur l'ensemble du territoire national ainsi qu'à l'international pour vos reportages, mariages et événements d'exception.",
  },
  {
    question: "Comment se déroule la réservation d'une séance ?",
    answer:
      "Tout commence par un premier échange pour cerner vos attentes. Nous vous transmettons un devis précis. La date est bloquée dès la signature de la convention et le versement d'un acompte.",
  },
  {
    question: "Fournissez-vous les fichiers bruts (RAW) ou uniquement retouchés ?",
    answer:
      "Nous livrons exclusivement des œuvres finalisées, triées et sublimées avec notre signature colorimétrique d'art. Le travail de retouche et d'étalonnage fait partie intégrante de notre identité visuelle.",
  },
  {
    question: "Proposez-vous un accompagnement artistique avant le shooting ?",
    answer:
      "Absolument. Avant chaque séance ou tournage, nous co-construisons un moodboard d'inspiration, définissons l'ambiance lumineuse, le choix des tenues et les décors propices pour un résultat sur-mesure.",
  },
  {
    question: "Quel matériel photo et vidéo utilisez-vous sur les tournages ?",
    answer:
      "Nous travaillons avec du matériel professionnel de pointe : boîtiers plein format 45MP+, optiques cinématographiques lumineuses, stabilisateurs gyroscopiques et captation audio broadcast.",
  },
];

interface FAQSectionProps {
  faqs?: typeof defaultFaqs;
  className?: string;
  theme?: "light" | "dark";
}

export function FAQSection({
  faqs = defaultFaqs,
  className,
  theme = "light",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();
  const isLight = theme === "light";

  return (
    <section
      id="faq"
      className={cn(
        "w-full px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden transition-colors duration-300",
        isLight
          ? "bg-[#FBFBFD] text-gray-900 border-b border-gray-200/80"
          : "bg-[#08090C] text-[#F3F4F6] border-b border-[#1E2028]",
        className
      )}
    >
      {/* 🌐 GRILLE MULTI-COUCHE ET ORBES D'AMBIANCE */}
      {!isLight && (
        <>
          <div className="pixy-template-grid-bg" aria-hidden="true">
            <div className="pixy-bg-grid-line" />
            <div className="pixy-template-grid-vignette" />
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden z-0">
            <div style={{ position: 'absolute', top: '15%', right: '12%', width: '460px', height: '460px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(30,58,95,0.28) 0%, transparent 68%)', filter: 'blur(80px)' }} />
            <div style={{ position: 'absolute', bottom: '10%', left: '8%', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,206,122,0.12) 0%, transparent 68%)', filter: 'blur(72px)' }} />
          </div>
        </>
      )}

      <div className="mx-auto max-w-4xl relative z-10">
        <div className="mb-10 text-center">
          <div className="flex justify-center mb-4">
            <span className={isLight ? "badge-premium-light" : "badge-premium-dark"}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5CE7A] shrink-0" />
              Questions Fréquentes & Réponses
            </span>
          </div>
          <h2
            className={cn(
              "mb-3 text-3xl font-extrabold sm:text-4xl md:text-5xl tracking-[-0.025em] font-montserrat",
              isLight ? "text-gradient-metallic-light" : "text-gradient-metallic-dark"
            )}
          >
            Foire Aux <span className="text-gradient-gold">Questions</span>
          </h2>
          <p
            className={cn(
              "text-sm sm:text-base max-w-xl mx-auto font-normal leading-relaxed",
              isLight ? "text-gray-600" : "text-gray-300"
            )}
          >
            Tout ce que vous devez savoir sur nos prestations photographiques, réalisations vidéo et notre méthodologie de travail d'exception.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const questionId = `${baseId}-question-${index}`;
            const answerId = `${baseId}-answer-${index}`;
            const isOpen = openIndex === index;

            return (
              <div key={index}>
                <Card
                  className={cn(
                    "overflow-hidden transition-all duration-300 rounded-2xl",
                    isLight
                      ? isOpen
                        ? "bg-white border-[#F5CE7A]/40 shadow-md ring-1 ring-[#F5CE7A]/20 text-gray-900"
                        : "bg-white/80 border-gray-200 hover:border-gray-300 text-gray-900"
                      : isOpen
                      ? "bg-[#11131A] border-[#F5CE7A]/50 shadow-xl shadow-black/40 ring-1 ring-[#F5CE7A]/20 text-white"
                      : "bg-[#0E1015] border-[#232630] hover:border-[#2C303E] text-white"
                  )}
                >
                  <CardHeader className="p-5 sm:p-6">
                    <motion.button
                      type="button"
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="flex w-full items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F5CE7A] cursor-pointer group"
                      whileHover={{ x: 2 }}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      id={questionId}
                    >
                      <div className="flex items-center gap-3.5 pr-4 min-w-0">
                        <span
                          className={cn(
                            "text-xs sm:text-sm font-montserrat font-extrabold shrink-0",
                            isOpen
                              ? "text-slate-200"
                              : isLight
                              ? "text-gray-400"
                              : "text-gray-500"
                          )}
                        >
                          0{index + 1}
                        </span>
                        <span
                          className={cn(
                            "text-sm sm:text-base font-semibold tracking-tight transition-colors",
                            isOpen
                              ? isLight ? "text-gray-900 font-bold" : "text-white font-bold"
                              : isLight
                              ? "text-gray-900 group-hover:text-black"
                              : "text-gray-200 group-hover:text-white"
                          )}
                        >
                          {faq.question}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="shrink-0 pl-2"
                        aria-hidden="true"
                      >
                        <ChevronDown className={cn(
                          "h-5 w-5 transition-all",
                          isLight ? "icon-liquid-glass-light" : "icon-liquid-glass-dark"
                        )} />
                      </motion.div>
                    </motion.button>
                  </CardHeader>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        role="region"
                        id={answerId}
                        aria-labelledby={questionId}
                      >
                        <CardContent className="pt-0 px-5 sm:px-6 pb-6">
                          <p
                            className={cn(
                              "text-xs sm:text-sm font-light leading-relaxed pl-7 sm:pl-8 border-t pt-3",
                              isLight
                                ? "text-gray-600 border-gray-100"
                                : "text-gray-300 border-[#1C1E26]"
                            )}
                          >
                            {faq.answer}
                          </p>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
