import { useState } from "react"
import { Menu, Phone, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export interface NavigationSection {
  title: string
  href: string
  isActive?: boolean
}

export interface HeaderProps {
  navigationData?: NavigationSection[]
}

export const defaultNavigationData: NavigationSection[] = [
  { title: "Accueil", href: "#hero", isActive: true },
  { title: "Portfolio", href: "#portfolio" },
  { title: "Savoir-faire", href: "#services" },
  { title: "Tarifs & Formules", href: "#tarifs" },
  { title: "À Propos", href: "#apropos" },
  { title: "Contact", href: "#contact" },
]

export function LemotifLogo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <a href="#hero" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EFA31D] rounded-lg">
      <svg
        viewBox="0 0 160 160"
        className={`${className} text-white transition-transform duration-300 group-hover:scale-105`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="160" height="160" rx="16" fill="#08090C" />
        <g transform="translate(80, 80)">
          {/* Symbol Arch */}
          <path
            d="M 0 -50 C -28 -50 -50 -28 -50 0 C -50 20 -39 37 -22 45 L -12 28 C -23 23 -30 12 -30 0 C -30 -16.5 -16.5 -30 0 -30 C 16.5 -30 30 -16.5 30 0 C 30 8 27 15 21 21 L 35 35 C 44 26 50 14 50 0 C 50 -28 28 -50 0 -50 Z"
            fill="#FFFFFF"
          />
          {/* Square Dot in Lemotif Yellow */}
          <rect x="22" y="22" width="22" height="22" fill="#EFA31D" rx="2" />
        </g>
      </svg>
      <div className="flex flex-col text-left">
        <span className="text-base font-bold tracking-tight text-white group-hover:text-[#EFA31D] transition-colors leading-tight">
          LEMOTIF <span className="text-[#EFA31D]">PROD</span>
        </span>
        <span className="text-[9px] font-extralight uppercase tracking-[0.28em] text-gray-400">
          photo · vidéo
        </span>
      </div>
    </a>
  )
}

export default function Header({ navigationData = defaultNavigationData }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#08090C]/85 backdrop-blur-md border-b border-[#23252B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <LemotifLogo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navigationData.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                item.isActive
                  ? "text-white bg-[#1A1C23] border border-[#2B2E38]"
                  : "text-gray-300 hover:text-white hover:bg-[#15161C]"
              }`}
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+33600000000"
            className="flex items-center gap-2 text-xs font-medium text-gray-300 hover:text-white px-3 py-2 rounded-lg border border-[#23252B] bg-[#0E0F14] hover:border-[#383B45] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 icon-liquid-glass-dark" />
            <span>06 00 00 00 00</span>
          </a>
          <a href="#contact">
            <Button
              size="sm"
              className="bg-[#EFA31D] hover:bg-[#D88F14] text-black font-semibold shadow-sm transition-all duration-200 hover:shadow-[#EFA31D]/20 hover:shadow-lg rounded-lg gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Réserver une séance</span>
            </Button>
          </a>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="bg-[#121318] border-[#23252B] text-gray-200 hover:text-white hover:bg-[#1A1C23]"
                aria-label="Ouvrir le menu"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#08090C] border-l border-[#23252B] text-white w-80 p-6 flex flex-col justify-between"
            >
              <div>
                <SheetHeader className="pb-6 border-b border-[#23252B] text-left">
                  <SheetTitle className="text-white">
                    <LemotifLogo />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-2 mt-6">
                  {navigationData.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${
                        item.isActive
                          ? "bg-[#1A1C23] text-white font-semibold border border-[#2B2E38]"
                          : "text-gray-300 hover:text-white hover:bg-[#121318]"
                      }`}
                    >
                      <span>{item.title}</span>
                      <ArrowRight className="w-4 h-4 icon-liquid-glass-dark" />
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-[#23252B] space-y-3">
                <a
                  href="tel:+33600000000"
                  className="flex items-center justify-center gap-2 text-sm text-gray-300 py-2.5 rounded-lg border border-[#23252B] bg-[#121318]"
                >
                  <Phone className="w-4 h-4 icon-liquid-glass-dark" />
                  <span>06 00 00 00 00</span>
                </a>
                <a href="#contact" onClick={() => setIsOpen(false)} className="block">
                  <Button className="w-full bg-[#EFA31D] hover:bg-[#D88F14] text-black font-semibold rounded-lg">
                    Réserver une séance
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
