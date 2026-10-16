import React from 'react';
import { ArrowDown, Sparkles, CupSoda } from 'lucide-react';
import { heroMatchaImage } from '../assets/images';

interface HeroSectionProps {
  onExploreProduct: () => void;
  onOpenPreorder: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreProduct, onOpenPreorder }) => {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-[#DDE0E3] bg-[#123416] text-white shadow-xs">
      {/* Background Photography with measured scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroMatchaImage}
          alt="Proses mengocok matcha dalam mangkuk chawan dengan chasen bambu"
          className="w-full h-full object-cover object-center transform scale-102 hover:scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark gradient scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35 sm:from-black/90 sm:via-black/65 sm:to-transparent" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 p-6 sm:p-10 md:p-12 max-w-2xl min-h-[360px] sm:min-h-[420px] flex flex-col justify-center">
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#37A53D]" />
          <span className="text-xs sm:text-xs font-bold tracking-widest uppercase text-[#DCFBDF]">
            Sedikit matcha, sedikit jeda.
          </span>
        </div>

        {/* Brand headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
          matcha-holic<span className="text-[#37A53D]">.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-white/90 font-medium leading-relaxed mb-6 max-w-lg text-balance">
          Matcha latte siap minum untuk menemani momen tenang kamu di tengah hari yang sibuk.
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={onExploreProduct}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#37A53D] hover:bg-[#146720] text-white text-sm font-bold rounded-full transition-all duration-200 shadow-md hover:shadow-lg active:scale-98 whitespace-nowrap cursor-pointer"
          >
            <CupSoda className="w-4 h-4" />
            <span>Kenalan dengan Original</span>
          </button>

          <button
            onClick={onOpenPreorder}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/15 hover:bg-white/25 text-white backdrop-blur-xs border border-white/30 text-sm font-semibold rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#DCFBDF]" />
            <span>Masuk Waiting List</span>
          </button>
        </div>

        {/* Micro caption */}
        <div className="mt-8 pt-4 border-t border-white/20 flex items-center justify-between text-xs text-white/70">
          <span className="italic">Ilustrasi suasana: ritual bubuk matcha dan pengocok bambu chasen</span>
          <a
            href="#produk"
            className="hidden sm:inline-flex items-center gap-1 text-[#DCFBDF] hover:underline"
          >
            <span>Lihat racikan</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
