"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ExpertiseRotatorProps {
  items?: string[];
  duration?: number;
  className?: string;
}

const DEFAULT_SPECIALTIES = [
  "Photographie d'art & studio",
  "Réalisation & cinéma 4K",
  "Direction artistique & labo",
  "Événements & séries de prestige",
];

export function ExpertiseRotator({
  items = DEFAULT_SPECIALTIES,
  duration = 3200,
  className,
}: ExpertiseRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!items || items.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, duration);
    return () => clearInterval(timer);
  }, [items, duration]);

  return (
    <div className={cn("relative overflow-hidden h-5 flex items-center justify-center min-w-[170px] sm:min-w-[210px]", className)}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 8, filter: "blur(3px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -8, filter: "blur(3px)" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-[10px] sm:text-[11px] font-medium text-gray-200 tracking-wide font-montserrat whitespace-nowrap block"
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export interface TextMarqueeProps {
  children: React.ReactNode[];
  speed?: number;
  className?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  height?: number;
  itemHeight?: number;
}

export function TextMarquee({
  children,
  speed = 1.2,
  className,
  prefix,
  suffix,
  height = 84,
  itemHeight = 84,
}: TextMarqueeProps) {
  const count = React.Children.count(children);

  return (
    <>
      <style>
        {`
          @keyframes slide-vertical {
            to {
              translate: 0 var(--destination);
            }
          }
        `}
      </style>
      <div className={cn("inline-flex relative items-center justify-center gap-x-2 sm:gap-x-3.5 flex-wrap sm:flex-nowrap", className)}>
        {prefix && (
          <div className="whitespace-nowrap size-auto relative shrink-0">
            {prefix}
          </div>
        )}
        <div
          className="opacity-100 relative w-auto overflow-hidden shrink-0 mask-[linear-gradient(rgba(0,0,0,0)_0%,rgb(0,0,0)_25%,rgb(0,0,0)_75%,rgba(0,0,0,0)_100%)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_25%,black_75%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_25%,black_75%,transparent_100%)]"
          style={{ height: `${height}px` }}
        >
          <div
            className="relative h-full"
            style={{
              "--count": count,
              "--speed": speed,
            } as React.CSSProperties}
          >
            {React.Children.map(children, (child, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-1"
                style={{
                  height: `${itemHeight}px`,
                  "--index": index,
                  "--origin": `calc((var(--count) - var(--index)) * 100%)`,
                  "--destination": `calc((var(--index) + 1) * -100%)`,
                  "--duration": `calc(var(--speed) * ${count}s)`,
                  "--delay":
                    `calc((var(--duration) / var(--count)) * var(--index) - var(--duration))`,
                  translate: `0 var(--origin)`,
                  animation:
                    `slide-vertical var(--duration) var(--delay) infinite linear`,
                } as React.CSSProperties}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
        {suffix && (
          <div className="whitespace-nowrap size-auto relative shrink-0">
            {suffix}
          </div>
        )}
      </div>
    </>
  );
}

export default ExpertiseRotator;
