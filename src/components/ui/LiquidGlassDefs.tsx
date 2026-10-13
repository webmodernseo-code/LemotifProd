import React from "react";

/**
 * 💎 Définitions vectorielles SVG Liquid Glass
 * Inspiré du matériau optique de Broken-By-Design / Apple VisionOS :
 * - Lumière spéculaire haute précision (#FFFFFF / rgba(205, 225, 255, 0.95))
 * - Corps de verre bleuté-argenté nacre (rgba(198, 214, 244) & rgba(165, 185, 232))
 * - Reflet irisé subtil cristal (rgba(112, 96, 178, 0.2))
 */
export const LiquidGlassDefs: React.FC = () => {
  return (
    <svg
      width="0"
      height="0"
      className="absolute pointer-events-none opacity-0 select-none overflow-hidden"
      aria-hidden="true"
      style={{ position: "fixed", top: -9999, left: -9999 }}
    >
      <defs>
        {/* 1. Dégradé Liquid Glass Sombre : Verre givré nacre + Lueur spéculaire */}
        <linearGradient id="liquid-glass-dark-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="25%" stopColor="#C6D6F4" stopOpacity="0.9" />
          <stop offset="65%" stopColor="#A5B9E8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#DEE8FC" stopOpacity="0.9" />
        </linearGradient>

        {/* 2. Dégradé Liquid Glass Clair : Titane translucide & Reflet bleuté givré */}
        <linearGradient id="liquid-glass-light-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2E384D" stopOpacity="0.95" />
          <stop offset="35%" stopColor="#4A5874" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#6C7C9E" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#94A5C9" stopOpacity="0.9" />
        </linearGradient>

        {/* 3. Dégradé Liquid Glass Hot Specular */}
        <linearGradient id="liquid-glass-specular-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="30%" stopColor="#CDE1FF" stopOpacity="0.95" />
          <stop offset="70%" stopColor="#8CAAE6" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#E2ECFF" stopOpacity="1" />
        </linearGradient>

        {/* 4. Dégradé Liquid Glass Or Champagne & Ambre Givré */}
        <linearGradient id="liquid-glass-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="30%" stopColor="#FFF5DE" stopOpacity="0.95" />
          <stop offset="70%" stopColor="#F5CE7A" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#E5A848" stopOpacity="0.95" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LiquidGlassDefs;
