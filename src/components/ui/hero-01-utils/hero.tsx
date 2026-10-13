import { Star, ArrowRight, Camera, Film, Aperture, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface AvatarList {
  image: string
}

export interface HeroSectionProps {
  avatarList?: AvatarList[]
}

export const defaultAvatars: AvatarList[] = [
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
  },
]

export default function HeroSection({ avatarList = defaultAvatars }: HeroSectionProps) {
  return (
    <section id="hero-split" className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-[#08090C] border-b border-[#1E2028]">
      {/* 🎬 VIDÉO DE FOND CINÉMATOGRAPHIQUE (SANS ÉCRITURE NI FILIGRANE) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.01] opacity-80 transition-opacity duration-700"
        >
          <source src="/videos/hero-clean.mp4" type="video/mp4" />
          <source src="/videos/hero-shooting.mp4" type="video/mp4" />
        </video>

        {/* 🌟 OVERLAY LÉGER & ÉPURÉ */}
        <div className="absolute inset-0 bg-[#08090C]/45 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090C]/75 via-transparent to-[#08090C]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,163,29,0.06)_0%,transparent_75%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Copywriting */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Top kicker text */}
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#EFA31D]">
              Photographie & Vidéographie d'Art · Ouagadougou
            </p>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              L'art de capturer{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F3F4F6] to-[#EFA31D]">
                l'émotion pure
              </span>{" "}
              et intemporelle.
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Des portraits de caractère aux grands reportages de mariage, nous façonnons des images cinématographiques d'une rare intensité. Une exigence technique et artistique dédiée à vos souvenirs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a href="#portfolio" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-12 px-7 bg-[#EFA31D] hover:bg-[#D88F14] text-black font-bold text-sm tracking-wide rounded-xl transition-all shadow-md shadow-[#EFA31D]/15 gap-2 group"
                >
                  <span>Découvrir le Portfolio</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>

              <a href="#contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto h-12 px-7 border-[#2B2E38] bg-[#101116] text-white hover:bg-[#1A1C23] hover:border-[#EFA31D]/50 font-medium text-sm rounded-xl transition-all"
                >
                  <span>Demander un Devis</span>
                </Button>
              </a>
            </div>

            {/* Trust Proof & Ratings */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 border-t border-[#1C1E26]">
              {/* Avatars */}
              <div className="flex -space-x-3 items-center">
                {avatarList.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar.image}
                    alt={`Client Lemotif Prod ${index + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-[#08090C] object-cover ring-1 ring-[#23252B]"
                  />
                ))}
              </div>

              {/* Rating text */}
              <div className="flex flex-col text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#EFA31D] text-[#EFA31D]" />
                  ))}
                  <span className="text-xs font-bold text-white ml-1.5">5.0 / 5</span>
                </div>
                <span className="text-xs text-gray-400 mt-0.5">
                  Plus de 150 clients & événements immortalisés
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Artwork */}
          <div className="lg:col-span-5 relative">
            {/* Main Showcase Image Card */}
            <div className="relative rounded-2xl overflow-hidden bg-[#121318] border border-[#23252B] p-2 shadow-2xl group transition-all duration-500 hover:border-[#EFA31D]/40">
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&auto=format&fit=crop&q=85"
                  alt="Réalisation Lemotif Prod — Photographie d'art"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-transparent to-transparent opacity-80" />

                {/* Floating Meta Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#08090C]/90 backdrop-blur-md border border-[#23252B]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white">Séance Signature Mariage</p>
                      <p className="text-[11px] text-gray-400">Lumière dorée · Captation 4K & Argentique</p>
                    </div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#EFA31D]/15 text-[#EFA31D] border border-[#EFA31D]/30 tracking-wider">
                      LEMOTIF
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Small Floating Pill 1: Photo & Video dual badge */}
            <div className="hidden sm:flex absolute -bottom-5 -left-6 items-center gap-3 bg-[#101217]/95 border border-[#282B35] rounded-xl px-4 py-3 shadow-xl backdrop-blur-md">
              <Camera className="w-6 h-6 icon-liquid-glass-dark shrink-0" />
              <div className="text-left">
                <p className="text-xs font-bold text-white">Prise de Vue Haute Définition</p>
                <p className="text-[10px] text-gray-400">Plein format & Optiques d'art</p>
              </div>
            </div>

            {/* Small Floating Pill 2: 4K Video */}
            <div className="hidden sm:flex absolute -top-4 -right-4 items-center gap-3 bg-[#101217]/95 border border-[#282B35] rounded-xl px-3.5 py-2.5 shadow-xl backdrop-blur-md">
              <Film className="w-5 h-5 icon-liquid-glass-dark shrink-0" />
              <div className="text-left">
                <p className="text-xs font-semibold text-white">Teaser & Film 4K</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reassurance Bar */}
        <div className="mt-16 pt-8 border-t border-[#1C1E26] grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <Aperture className="w-4 h-4 icon-liquid-glass-dark" />
            <span>Direction artistique soignée</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <Camera className="w-4 h-4 icon-liquid-glass-dark" />
            <span>Service principal Photographie</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <Film className="w-4 h-4 icon-liquid-glass-dark" />
            <span>Service secondaire Vidéo</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <ShieldCheck className="w-4 h-4 icon-liquid-glass-dark" />
            <span>Livraison galerie privée sécurisée</span>
          </div>
        </div>
      </div>
    </section>
  )
}

