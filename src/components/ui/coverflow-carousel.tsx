"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export interface CoverflowSlide {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  meta?: { label: string; value: string }[];
}

export interface CoverflowCarouselProps {
  slides: CoverflowSlide[];
  /** Degrees the first neighbour tilts. */
  rotate?: number;
  /** How far the first neighbour recedes, as a fraction of card width. */
  depth?: number;
  /** Viewer distance as a multiple of card width — smaller is a wider lens. */
  perspective?: number;
  /** Exponent on distance. Below 1 the rake eases off as cards travel out. */
  falloff?: number;
  /** Opacity lost per step from the centre. */
  fade?: number;
  /** Any CSS length. Everything else is derived from it, so the rake scales. */
  cardWidth?: string;
  /** Space between cards, as a fraction of card width. */
  gap?: number;
  loop?: boolean;
  /** Autoplay automatically advances slides */
  autoPlay?: boolean;
  /** Delay between slide transitions in milliseconds */
  autoPlayInterval?: number;
  /** Pause autoplay when mouse is hovered */
  pauseOnHover?: boolean;
  showCaption?: boolean;
  showPagination?: boolean;
  showNavigation?: boolean;
  /** Names the carousel for assistive tech. */
  label?: string;
  className?: string;
  cardClassName?: string;
}

export function CoverflowCarousel({
  slides,
  rotate = 38,
  depth = 0.55,
  perspective = 3,
  falloff = 0.56,
  fade = 0.12,
  cardWidth = "clamp(200px, 28vw, 320px)",
  gap = 0.06,
  loop = true,
  autoPlay = true,
  autoPlayInterval = 3200,
  pauseOnHover = true,
  showCaption = false,
  showPagination = true,
  showNavigation = true,
  label = "Cover carousel",
  className,
  cardClassName,
}: CoverflowCarouselProps) {
  const count = slides.length;

  const frameRef = React.useRef<HTMLDivElement>(null);
  const cardRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  /** Fractional card index at the centre. The single source of truth. */
  const posRef = React.useRef(0);
  /** Where the current settle is headed. Stepping off `pos` instead would
      swallow a keypress that lands mid-flight, before the round-off moves. */
  const targetRef = React.useRef(0);
  const widthRef = React.useRef(0);
  const rafRef = React.useRef<number | null>(null);
  const dragRef = React.useRef<{
    id: number;
    x: number;
    pos: number;
    v: number;
    t: number;
  } | null>(null);

  const isInteractingRef = React.useRef(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  const [isReady, setIsReady] = React.useState(false);

  /** Nearest whole card, folded back into 0..count-1. */
  const indexAt = React.useCallback(
    (pos: number) => ((Math.round(pos) % count) + count) % count,
    [count],
  );

  // Paint straight to the DOM. Sixty state updates a second would re-render
  // every card for numbers React never needs to see.
  const paint = React.useCallback(() => {
    const width = widthRef.current;
    if (!width) return;
    const pitch = width * (1 + gap);
    const pos = posRef.current;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      // Fold the distance into the shorter way round the ring. This is the
      // whole looping mechanism — no cloned nodes, no shuffling the DOM.
      let offset = index - pos;
      if (loop) {
        offset = ((offset % count) + count) % count;
        if (offset > count / 2) offset -= count;
      }

      const distance = Math.abs(offset);
      // Both the tilt and the recession ease off as cards travel out —
      // doubling the distance adds only about half again as much of each.
      // A linear ramp folds the second card shut; this keeps it readable.
      const ramp = Math.pow(distance, falloff);
      // Capped short of edge-on so a far card never turns its back.
      const tilt = Math.min(rotate * ramp, 82) * Math.sign(offset);

      card.style.transform =
        `translateX(calc(-50% + ${offset * pitch}px)) ` +
        `translateZ(${-depth * width * ramp}px) rotateY(${-tilt}deg)`;

      // A card is teleported across the ring at exactly half a turn out, so it
      // has to be gone by then or the jump is visible.
      const edge = loop ? Math.min(1, Math.max(0, count / 2 - distance)) : 1;
      card.style.opacity = String(Math.max(0, 1 - fade * distance) * edge);
      card.style.zIndex = String(100 - Math.round(distance));
    });
  }, [count, depth, fade, falloff, gap, loop, rotate]);

  const settle = React.useCallback(
    (target: number) => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      targetRef.current = target;
      setSelected(indexAt(target));

      const step = () => {
        const remaining = target - posRef.current;
        if (Math.abs(remaining) < 0.0004) {
          posRef.current = target;
          paint();
          rafRef.current = null;
          return;
        }
        // Smooth exponential ease-out
        posRef.current += remaining * 0.12;
        paint();
        rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    },
    [indexAt, paint],
  );

  const clamp = React.useCallback(
    (pos: number) => (loop ? pos : Math.max(0, Math.min(count - 1, pos))),
    [count, loop],
  );

  const goTo = React.useCallback(
    (index: number) => {
      // Take the shorter way round rather than unwinding the whole ring.
      const target = loop
        ? index + Math.round((targetRef.current - index) / count) * count
        : index;
      settle(clamp(target));
    },
    [clamp, count, loop, settle],
  );

  const nudge = React.useCallback(
    (by: number) => settle(clamp(Math.round(targetRef.current) + by)),
    [clamp, settle],
  );

  // 🔄 Autoplay autonome : Défilement automatique fluide
  React.useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      if (!isHovered && !isInteractingRef.current) {
        nudge(1);
      }
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlay, autoPlayInterval, isHovered, nudge]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    isInteractingRef.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    targetRef.current = posRef.current;
    dragRef.current = {
      id: event.pointerId,
      x: event.clientX,
      pos: posRef.current,
      v: 0,
      t: performance.now(),
    };
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;

    const pitch = widthRef.current * (1 + gap);
    if (!pitch) return;

    const now = performance.now();
    const previous = posRef.current;
    posRef.current = clamp(drag.pos - (event.clientX - drag.x) / pitch);
    // Cards per second, for the throw.
    drag.v = ((posRef.current - previous) / Math.max(now - drag.t, 1)) * 1000;
    drag.t = now;

    const index = indexAt(posRef.current);
    if (index !== selected) setSelected(index);
    paint();
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;
    dragRef.current = null;
    // Let a flick carry, but never more than two cards.
    const carried = Math.max(-2, Math.min(2, drag.v * 0.18));
    settle(clamp(Math.round(posRef.current + carried)));
    setTimeout(() => {
      isInteractingRef.current = false;
    }, 600);
  };

  // Card width drives pitch, depth and perspective, so it is the only thing
  // worth measuring — and only when the box actually changes.
  useIsoLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const measure = () => {
      const card = cardRefs.current[0];
      if (!card) return;
      widthRef.current = card.offsetWidth;
      paint();
      setIsReady(true);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [paint]);

  React.useEffect(
    () => () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    },
    [],
  );

  const active = slides[selected];

  // Calcul du style initial pré-rendu pour éviter tout flash de contenu non positionné (FOUC)
  const getInitialCardStyle = (index: number): React.CSSProperties => {
    let offset = index;
    if (loop) {
      offset = ((offset % count) + count) % count;
      if (offset > count / 2) offset -= count;
    }
    const distance = Math.abs(offset);
    const ramp = Math.pow(distance, falloff);
    const tilt = Math.min(rotate * ramp, 82) * Math.sign(offset);
    const edge = loop ? Math.min(1, Math.max(0, count / 2 - distance)) : 1;
    const opacity = Math.max(0, 1 - fade * distance) * edge;
    const zIndex = 100 - Math.round(distance);

    return {
      width: "var(--cf-card)",
      transform: `translateX(calc(-50% + calc(${offset} * (var(--cf-card) * ${1 + gap})))) translateZ(calc(-1 * ${depth * ramp} * var(--cf-card))) rotateY(${-tilt}deg)`,
      opacity,
      zIndex,
    };
  };

  return (
    <div
      className={cn(
        "w-full select-none transition-opacity duration-500",
        isReady ? "opacity-100" : "opacity-90",
        className
      )}
      style={{ ["--cf-card" as string]: cardWidth }}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      <div className="relative">
        <div
          ref={frameRef}
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              nudge(-1);
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              nudge(1);
            }
          }}
          // Vertical padding keeps the drop shadows clear of the overflow clip.
          className="cursor-grab overflow-hidden py-8 outline-none ring-0 active:cursor-grabbing"
          style={{
            perspective: `calc(var(--cf-card) * ${perspective})`,
            // Horizontal drag is ours; the page keeps vertical scrolling.
            touchAction: "pan-y",
          }}
        >
          <div
            className="relative select-none"
            style={{
              height: "var(--cf-card)",
              transformStyle: "preserve-3d",
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${count}`}
                onClick={() => {
                  if (index !== selected) goTo(index);
                }}
                className={cn(
                  "absolute left-1/2 top-0 aspect-square overflow-hidden rounded-2xl bg-[#12141A] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)] will-change-transform cursor-pointer transition-shadow hover:shadow-[0_25px_60px_rgba(245,206,122,0.15)]",
                  cardClassName,
                )}
                style={getInitialCardStyle(index)}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  draggable={false}
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                  width={320}
                  height={320}
                  className="h-full w-full select-none object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Micro-halo d'arête liquide */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* 🎮 Commandes de navigation manuelle (Liquid Glass Buttons) */}
        {showNavigation && (
          <>
            <button
              type="button"
              aria-label="Diapositive précédente"
              onClick={() => nudge(-1)}
              className="absolute left-2 sm:left-4 top-1/2 z-[200] -translate-y-1/2 rounded-full bg-[#08090C]/70 p-3 text-white border border-white/20 backdrop-blur-2xl shadow-xl transition-all hover:bg-[#F5CE7A] hover:text-black hover:scale-110 hover:border-[#F5CE7A] cursor-pointer"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Diapositive suivante"
              onClick={() => nudge(1)}
              className="absolute right-2 sm:right-4 top-1/2 z-[200] -translate-y-1/2 rounded-full bg-[#08090C]/70 p-3 text-white border border-white/20 backdrop-blur-2xl shadow-xl transition-all hover:bg-[#F5CE7A] hover:text-black hover:scale-110 hover:border-[#F5CE7A] cursor-pointer"
            >
              <ChevronRight className="size-5" />
            </button>
          </>
        )}
      </div>

      {/* Légende optionnelle désactivée par défaut */}
      {showCaption && active?.title && (
        <div
          key={selected}
          className="mt-2 flex flex-col items-center px-6 duration-300 animate-in fade-in text-center"
        >
          <p className="text-[15px] font-semibold tracking-tight text-white">
            {active.title}
          </p>
          {active.subtitle && (
            <p className="mt-1 text-[13px] text-gray-400">
              {active.subtitle}
            </p>
          )}
        </div>
      )}

      {/* 🧊 Indicateurs de pagination Liquid Glass Gris Clair Léger Premium */}
      {showPagination && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Aller à la diapositive ${index + 1}`}
              aria-current={index === selected}
              onClick={() => goTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300 cursor-pointer backdrop-blur-md",
                index === selected
                  ? "w-8 bg-gradient-to-r from-white/95 via-[#E2ECFF] to-white/95 border border-white/70 shadow-[0_0_12px_rgba(255,255,255,0.7),inset_0_1px_1.5px_rgba(255,255,255,1)]"
                  : "w-2 bg-white/20 border border-white/10 hover:bg-white/40 hover:border-white/30",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CoverflowCarousel;
