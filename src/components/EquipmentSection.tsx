import React from 'react';
import { GEAR_DATA } from '@/data/content';
import { Camera, Aperture, Sun, Plane, Monitor, Shield, Cpu } from 'lucide-react';

export const EquipmentSection: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'camera':
        return <Camera className="w-5 h-5 text-amber-400" />;
      case 'aperture':
        return <Aperture className="w-5 h-5 text-amber-400" />;
      case 'sun':
        return <Sun className="w-5 h-5 text-amber-400" />;
      case 'drone':
        return <Plane className="w-5 h-5 text-amber-400" />;
      case 'monitor':
        return <Monitor className="w-5 h-5 text-amber-400" />;
      case 'shield':
        return <Shield className="w-5 h-5 text-amber-400" />;
      default:
        return <Cpu className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="studio" className="py-24 bg-[#08090d] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Matériel & Infrastructure Technique</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight mb-4">
            L’exigence optique au service de l’émotion
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Pour garantir un rendu saisissant et des fichiers d’une clarté chirurgicale, nous investissons continuellement dans les standards les plus exigeants de l’industrie photographique et cinématographique.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GEAR_DATA.map((gear, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0e1017] border border-white/10 hover:border-amber-400/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                {getIcon(gear.iconType)}
              </div>
              <span className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                {gear.category}
              </span>
              <h3 className="text-base font-bold text-white font-serif mb-2">
                {gear.name}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                {gear.spec}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
