import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

// Define the props interface for the component
export interface CtaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  subtitle?: React.ReactNode;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  onButtonClick?: () => void;
}

// Reusable CtaCard component with a clean, modern layout
const CtaCard = React.forwardRef<HTMLDivElement, CtaCardProps>(
  (
    {
      className,
      imageSrc = "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200&auto=format&fit=crop",
      imageAlt = "Studio Lemotif Prod Photographie",
      title = "LEMOTIF PROD STUDIO",
      subtitle = "Prêt à donner vie à votre projet visuel d'exception ?",
      description = "Que ce soit pour une séance portrait intimiste, la couverture complète d'un mariage, ou un film cinématographique d'entreprise, nous mettons notre savoir-faire au service de vos émotions.",
      buttonText = "Nous contacter",
      buttonHref = "#contact",
      onButtonClick,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden rounded-3xl border border-[#232630] bg-[#0E1015] text-white shadow-2xl relative",
          "flex flex-col md:flex-row items-stretch",
          className
        )}
        {...props}
      >
        {/* Subtle ambient light glow */}
        <div className="absolute top-0 right-1/4 w-96 h-56 bg-[#F5CE7A]/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Image Section */}
        <div className="md:w-5/12 w-full relative overflow-hidden min-h-[260px] md:min-h-[340px]">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
          
          {/* Label sur l'image */}
          <div className="absolute top-4 left-4 z-10">
            <span className="text-[11px] font-mono uppercase tracking-wider text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
              Studio & Reportage
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-7/12 w-full p-6 sm:p-8 md:p-10 flex flex-col justify-center relative z-10">
          <div>
            <div className="mb-2">
              <span className="badge-premium-dark">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5CE7A] shrink-0" />
                {title}
              </span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-[-0.02em] leading-tight text-gradient-metallic-dark font-montserrat">
              {subtitle}
            </h2>
            <p className="mt-3.5 text-sm text-gray-300 font-normal leading-[1.6] max-w-xl">
              {description}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              {buttonHref ? (
                <a href={buttonHref} className="btn-primary-lemotif">
                  <span>{buttonText}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2]" />
                </a>
              ) : (
                <button onClick={onButtonClick} className="btn-primary-lemotif">
                  <span>{buttonText}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2]" />
                </button>
              )}

              <span className="text-xs text-gray-400 font-normal tracking-wide flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5CE7A]" />
                Devis personnalisé sous 24h
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
CtaCard.displayName = "CtaCard";

export { CtaCard };
export default CtaCard;
