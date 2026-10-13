import { useEffect } from "react";
import { Link } from "@/lib/router";
import { Button } from "@/components/ui/button";
import { LemotifLogo } from "@/components/ui/header-01";
import { Compass, ArrowLeft } from "lucide-react";

export default function ErrorBlock() {
  useEffect(() => {
    document.title = "Page introuvable (404) | LEMOTIF PROD · Ouagadougou";
  }, []);

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center gap-8 bg-[#08090C] px-6 py-16 text-center text-[#F3F4F6] relative overflow-hidden font-sans">
      {/* Subtle atmospheric gold spotlight in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#EFA31D]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Logo */}
      <div className="relative z-10">
        <LemotifLogo />
      </div>

      {/* Big 404 with yellow accent glow */}
      <div className="relative z-10 space-y-2">
        <p className="font-mono text-8xl sm:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-[#EFA31D]">
          404
        </p>
        <p className="text-xs font-semibold tracking-widest uppercase text-[#EFA31D]">
          Moment hors champ
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 relative z-10 max-w-md">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Page introuvable
        </h1>
        <p className="text-sm text-gray-400 font-light leading-relaxed">
          La page que vous recherchez n'existe pas ou a été déplacée. Revenez à l'accueil pour explorer nos réalisations photographiques et cinématographiques à Ouagadougou.
        </p>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center gap-2.5 sm:gap-3 relative z-10 pt-2">
        <Link to="/" className="inline-block">
          <Button
            className="h-10 sm:h-11 px-4 sm:px-5 bg-[#EFA31D] hover:bg-[#D88F14] text-black font-semibold text-xs rounded-xl shadow-md gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>Retour à l'accueil</span>
          </Button>
        </Link>

        <Link to="/#portfolio" className="inline-block">
          <Button
            variant="outline"
            className="h-10 sm:h-11 px-4 sm:px-5 border-[#2B2E38] bg-[#12141A] text-white hover:bg-[#1A1C23] text-xs rounded-xl gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explorer le Portfolio</span>
          </Button>
        </Link>
      </div>
    </section>
  );
}

