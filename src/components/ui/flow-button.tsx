"use client";

import React from "react";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  href?: string;
  variant?: "primary" | "secondary" | "glass" | "dark" | "outline";
  icon?: LucideIcon;
  className?: string;
}

export function FlowButton({
  text = "Découvrir",
  href,
  variant = "primary",
  icon: Icon = ArrowRight,
  className,
  ...props
}: FlowButtonProps) {
  const isPrimary = variant === "primary";

  const buttonClasses = cn(
    "group relative inline-flex items-center justify-center gap-1 overflow-hidden rounded-[100px] px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-bold tracking-wide font-montserrat cursor-pointer transition-all duration-500 ease-out active:scale-[0.96] select-none",
    isPrimary
      ? "border border-white/80 bg-white text-[#090A0F] hover:border-white hover:text-[#090A0F] hover:rounded-[14px] shadow-[0_0_24px_rgba(255,255,255,0.3),0_4px_16px_rgba(0,0,0,0.5)]"
      : variant === "dark"
      ? "border border-gray-900 bg-gray-900 text-white hover:border-gray-800 hover:bg-gray-800 hover:rounded-[14px] shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
      : variant === "outline"
      ? "border border-gray-300 bg-white text-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white hover:rounded-[14px] shadow-xs"
      : "border-[1.2px] border-white/20 bg-white/[0.07] text-white hover:border-white/45 hover:bg-white/[0.14] hover:text-white hover:rounded-[14px] backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)]",
    className
  );

  const innerContent = (
    <>
      {/* Flèche gauche entrante (arr-2) */}
      <Icon
        className={cn(
          "absolute w-4 h-4 left-[-30%] fill-none z-[9] transition-all duration-700 ease-out",
          isPrimary
            ? "stroke-[#090A0F] group-hover:left-4 group-hover:stroke-[#090A0F]"
            : variant === "dark"
            ? "stroke-white group-hover:left-4 group-hover:stroke-white"
            : variant === "outline"
            ? "stroke-gray-900 group-hover:left-4 group-hover:stroke-white"
            : "stroke-white group-hover:left-4 group-hover:stroke-white"
        )}
      />

      {/* Texte avec glissement fluide */}
      <span className="relative z-[1] -translate-x-2.5 group-hover:translate-x-2.5 transition-all duration-500 ease-out">
        {text}
      </span>

      {/* Cercle liquide d'expansion (Flow Circle) */}
      <span
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full opacity-0 group-hover:w-[300px] group-hover:h-[300px] group-hover:opacity-100 transition-all duration-700 ease-out pointer-events-none",
          isPrimary
            ? "bg-gradient-to-r from-[#F0F4FF] via-white to-[#E8EDF8]"
            : variant === "dark"
            ? "bg-white/15"
            : variant === "outline"
            ? "bg-gray-900"
            : "bg-white/20"
        )}
      />

      {/* Flèche droite sortante (arr-1) */}
      <Icon
        className={cn(
          "absolute w-4 h-4 right-4 fill-none z-[9] transition-all duration-700 ease-out",
          isPrimary
            ? "stroke-[#090A0F] group-hover:right-[-30%] group-hover:stroke-[#090A0F]"
            : variant === "dark"
            ? "stroke-white group-hover:right-[-30%] group-hover:stroke-white"
            : variant === "outline"
            ? "stroke-gray-900 group-hover:right-[-30%] group-hover:stroke-white"
            : "stroke-white group-hover:right-[-30%] group-hover:stroke-white"
        )}
      />
    </>
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {innerContent}
      </a>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {innerContent}
    </button>
  );
}

export default FlowButton;
