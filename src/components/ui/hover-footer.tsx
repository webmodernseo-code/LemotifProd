"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  ArrowUpRight,
} from "lucide-react";
import { LemotifLogo } from "@/components/ui/header-01";

export const TextHoverEffect = ({
  text,
  duration,
  className,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 90"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn("select-none uppercase cursor-pointer", className)}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#F5CE7A" />
              <stop offset="35%" stopColor="#FFF4D4" />
              <stop offset="70%" stopColor="#F5CE7A" />
              <stop offset="100%" stopColor="#E5A848" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="25%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      
      {/* Background wireframe stroke */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.35"
        className="fill-transparent stroke-neutral-800 font-sans text-6xl md:text-7xl font-extrabold tracking-widest"
        style={{ opacity: hovered ? 0.7 : 0.25 }}
      >
        {text}
      </text>

      {/* Champagne initial outline stroke animation */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.35"
        className="fill-transparent stroke-[#F5CE7A] font-sans text-6xl md:text-7xl font-extrabold tracking-widest opacity-80"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 3.5,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>

      {/* Cursor spotlight reveal */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.4"
        mask="url(#textMask)"
        className="fill-transparent font-sans text-6xl md:text-7xl font-extrabold tracking-widest"
      >
        {text}
      </text>
    </svg>
  );
};

export function HoverFooter() {
  const navLinks = [
    { label: "Accueil", href: "#hero" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Savoir-faire", href: "#services" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "À Propos", href: "#apropos" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#08090C] border-t border-[#1C1E26] relative overflow-hidden pt-16 pb-10 text-[#F3F4F6]">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#F5CE7A]/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-12">
        {/* Main Épuré Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-[#1C1E26]">
          {/* Logo & Slogan */}
          <div className="space-y-2">
            <LemotifLogo />
            <p className="text-sm text-gray-400 font-light max-w-sm">
              Photographie d'art & réalisation vidéo cinématographique.
            </p>
          </div>

          {/* Direct Actions */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="mailto:contact@lemotifprod.fr"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-[#F5CE7A]" />
              <span>contact@lemotifprod.fr</span>
            </a>

            <a
              href="tel:+33600000000"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-[#F5CE7A]" />
              <span>06 00 00 00 00</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F5CE7A] hover:bg-[#E5A848] text-black text-sm font-bold transition-all shadow-sm"
            >
              <span>Réserver</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Clean Navigation Links Row with comfortable font size */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-sm sm:text-base">
          <nav className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-8">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-[#F5CE7A] font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com/lemotifprod"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook Lemotif Prod"
              className="p-2.5 rounded-xl bg-[#12141A] border border-[#232630] text-gray-300 hover:text-[#F5CE7A] hover:border-[#F5CE7A]/40 transition-all"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com/lemotifprod"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Lemotif Prod"
              className="p-2.5 rounded-xl bg-[#12141A] border border-[#232630] text-gray-300 hover:text-[#F5CE7A] hover:border-[#F5CE7A]/40 transition-all"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Big Signature Interactive Hover Animation */}
        <div className="pt-4 pb-2">
          <div className="h-44 sm:h-56 md:h-64 w-full flex items-center justify-center">
            <TextHoverEffect text="LEMOTIF" />
          </div>
        </div>

        {/* Copyright & Subtitle */}
        <div className="pt-6 border-t border-[#1C1E26] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-400">
          <p>© {new Date().getFullYear()} LEMOTIF PROD. Tous droits réservés.</p>
          <p className="text-gray-400 font-light">
            Conçu pour l'excellence visuelle · France & International
          </p>
        </div>
      </div>
    </footer>
  );
}

export default HoverFooter;
