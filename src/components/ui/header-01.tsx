import * as React from "react";
import { Equal, X, Camera, Heart, Building2, PartyPopper, Sparkles, Film, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import ShinyButton from "@/components/ui/shiny-button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// Liens de navigation pour les ancres et le menu mobile
const menuItems = [
  { name: "Accueil", href: "/#hero" },
  { name: "Galerie & Portfolio", href: "/galerie" },
  { name: "Savoir-faire", href: "/#services" },
  { name: "À Propos", href: "/#apropos" },
];

export function LemotifLogo() {
  return (
    <a href="/#hero" aria-label="LEMOTIF PROD" className="flex gap-2.5 items-center group shrink-0">
      <svg
        viewBox="0 0 160 160"
        className="h-9 w-9 text-white transition-transform duration-300 group-hover:scale-105 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="160" height="160" rx="16" fill="#08090C" />
        <g transform="translate(80, 80)">
          {/* Symbole Arche */}
          <path
            d="M 0 -50 C -28 -50 -50 -28 -50 0 C -50 20 -39 37 -22 45 L -12 28 C -23 23 -30 12 -30 0 C -30 -16.5 -16.5 -30 0 -30 C 16.5 -30 30 -16.5 30 0 C 30 8 27 15 21 21 L 35 35 C 44 26 50 14 50 0 C 50 -28 28 -50 0 -50 Z"
            fill="#FFFFFF"
          />
          {/* Point Carré Champagne Signature Lemotif */}
          <rect x="22" y="22" width="22" height="22" fill="#E5A848" rx="2" />
        </g>
      </svg>
      <div className="flex flex-col text-left">
        <span className="text-[14.5px] sm:text-base font-bold tracking-tight text-white group-hover:text-[#F5CE7A] transition-colors leading-tight font-montserrat">
          LEMOTIF <span className="text-[#F5CE7A]">PROD</span>
        </span>
        <span className="text-[9.5px] font-medium uppercase tracking-[0.22em] text-gray-400 font-montserrat">
          photographie · vidéographie
        </span>
      </div>
    </a>
  );
}

const Header = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuState(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300">
      <nav
        data-state={menuState ? "active" : undefined}
        className={cn(
          "w-full px-3 sm:px-6 md:px-8 transition-all duration-300 pointer-events-auto",
          isScrolled ? "pt-2.5 sm:pt-3" : "pt-4 sm:pt-5",
        )}
      >
        <div
          className={cn(
            "mx-auto transition-all duration-300 relative px-4 sm:px-6 py-2.5 rounded-2xl",
            // 🌟 ULTRA-PREMIUM LIQUID GLASS MORPHISM EFFECT
            "backdrop-blur-2xl backdrop-saturate-[190%]",
            "border border-white/20",
            "shadow-[0_12px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.25),inset_0_-1px_1px_0_rgba(0,0,0,0.4)]",
            isScrolled
              ? "max-w-5xl bg-[#08090C]/75 border-white/20 shadow-2xl"
              : "max-w-6xl bg-[#08090C]/55 border-white/15",
          )}
        >
          {/* Lueur spéculaire liquide supérieure (Top Specular Highlight) */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none rounded-t-2xl" />
          
          {/* Reflet liquide champagne subtil inférieur */}
          <div className="absolute inset-x-8 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#F5CE7A]/25 to-transparent pointer-events-none" />

          {/* Ligne principale STRICTEMENT non-enroulable (flex-nowrap) */}
          <div className="flex flex-nowrap items-center justify-between gap-4 h-10">
            {/* 1. Logo Studio Lemotif Prod */}
            <div className="flex items-center shrink-0 pl-0.5 sm:pl-1">
              <LemotifLogo />
            </div>

            {/* 2. Menu Central Desktop */}
            <div className="hidden lg:flex items-center justify-center flex-1 min-w-0">
              <Menus />
            </div>

            {/* 3. Bouton ShinyButton de contact */}
            <div className="hidden lg:flex items-center justify-end shrink-0 pr-0.5 sm:pr-1">
              <a href="/#contact">
                <ShinyButton
                  label="Nous contacter"
                  accentColor="#F5CE7A"
                  accentSoftColor="#FFF5DE"
                  fillColor="#08090C"
                  labelColor="#FFFFFF"
                />
              </a>
            </div>

            {/* Bouton Menu Mobile (Hamburger) */}
            <div className="flex lg:hidden items-center shrink-0">
              <button
                type="button"
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={menuState}
                aria-controls="mobile-navigation"
                className="relative z-20 cursor-pointer p-2 rounded-xl bg-white/5 border border-white/15 text-white hover:bg-white/10 transition-colors"
              >
                {menuState ? (
                  <X className="size-5 text-white" />
                ) : (
                  <Equal className="size-5" />
                )}
              </button>
            </div>
          </div>

          {/* Tiroir déroulant Mobile avec effet Liquid Glass intégré */}
          {menuState && (
            <div id="mobile-navigation" className="lg:hidden mt-3 pt-3 border-t border-white/10 space-y-3 pb-1 animate-in fade-in duration-200">
              <div className="space-y-1">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={() => setMenuState(false)}
                    className="flex items-center justify-between px-3.5 py-2.5 text-base font-medium text-gray-200 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </div>

              <div className="pt-2 flex justify-center">
                <a href="/#contact" onClick={() => setMenuState(false)} className="inline-flex">
                  <ShinyButton
                    label="Nous contacter"
                    accentColor="#F5CE7A"
                    accentSoftColor="#FFF5DE"
                    fillColor="#08090C"
                    labelColor="#FFFFFF"
                  />
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

// 5 Catégories officielles du Portfolio + Service Vidéo avec icônes vectorielles
const portfolioCategories: {
  title: string;
  href: string;
  description: string;
  icon: React.ElementType;
}[] = [
  {
    title: "Portraits",
    href: "/#portfolio",
    description: "Studio, lumière naturelle, comédiens et particuliers.",
    icon: Camera,
  },
  {
    title: "Mariages",
    href: "/#portfolio",
    description: "Cérémonies, moments volés et émotion intemporelle.",
    icon: Heart,
  },
  {
    title: "Corporate",
    href: "/#portfolio",
    description: "Dirigeants, équipes et valorisation de marque employeur.",
    icon: Building2,
  },
  {
    title: "Événements",
    href: "/#portfolio",
    description: "Galas, soirées privées, culture et photographie culinaire.",
    icon: PartyPopper,
  },
  {
    title: "Retouches",
    href: "/#portfolio",
    description: "Post-production fine et colorimétrie haute précision.",
    icon: Sparkles,
  },
  {
    title: "Vidéographie 4K",
    href: "/#services",
    description: "Teasers cinématographiques, captations et étalonnage.",
    icon: Film,
  },
];

export function Menus() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-1">
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent text-[13.5px] sm:text-sm font-medium text-gray-200 hover:text-white hover:bg-white/5",
            )}
          >
            <a href="/#hero">Accueil</a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Dropdown Portfolio large, ultra lisible et spacieux */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-[13.5px] sm:text-sm text-gray-200 hover:text-white hover:bg-white/5 font-medium">
            Portfolio
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-4 bg-[#08090C]/85 border border-white/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_1px_0_rgba(255,255,255,0.2)] backdrop-blur-2xl backdrop-saturate-[190%]">
            <div className="w-[480px] sm:w-[500px]">
              <div className="px-2 pb-3 mb-2 border-b border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Galeries & Réalisations
                </span>
                <span className="text-xs text-[#F5CE7A] font-medium">
                  5 Catégories d'Art
                </span>
              </div>
              <ul className="grid grid-cols-2 gap-2">
                {portfolioCategories.map((component) => {
                  const Icon = component.icon;
                  return (
                    <li key={component.title}>
                      <NavigationMenuLink asChild>
                        <a
                          className="p-2.5 flex items-start gap-3 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-white/10 transition-all group"
                          href={component.href}
                        >
                          {/* Icône Liquid Glass pure sans bulle */}
                          <Icon className="w-5 h-5 icon-liquid-glass-dark shrink-0 mt-0.5" />
                          <div className="space-y-0.5">
                            <div className="text-sm font-bold text-white group-hover:text-[#FFF0C4] transition-colors leading-tight">
                              {component.title}
                            </div>
                            <p className="text-gray-400 text-xs leading-snug line-clamp-2 font-light">
                              {component.description}
                            </p>
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  );
                })}
              </ul>
              <div className="pt-2.5 mt-2.5 border-t border-white/10 flex items-center justify-between px-2">
                <a
                  href="/galerie"
                  className="text-xs font-bold text-[#F5CE7A] hover:text-white transition-colors flex items-center gap-1.5 font-montserrat"
                >
                  Ouvrir la grande Galerie (Photos, Vidéos & Affiches)
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent text-[13.5px] sm:text-sm font-medium text-gray-200 hover:text-white hover:bg-white/5",
            )}
          >
            <a href="/#services">Savoir-faire</a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent text-[13.5px] sm:text-sm font-medium text-gray-200 hover:text-white hover:bg-white/5",
            )}
          >
            <a href="/#apropos">À Propos</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export { Header };
export default Header;

