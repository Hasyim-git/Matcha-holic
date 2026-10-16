import React from 'react';
import { MessageCircle, Heart } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenPreorder: () => void;
  isFavorited: boolean;
  onToggleFavorite: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  onOpenPreorder,
  isFavorited,
  onToggleFavorite,
}) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#DDE0E3] px-4 py-2.5 shadow-lg">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleFavorite}
            className={`p-2 rounded-full border transition-colors ${
              isFavorited
                ? 'bg-rose-50 border-rose-300 text-rose-600'
                : 'bg-[#F3F5F6] border-[#DDE0E3] text-[#696C6F]'
            }`}
            aria-label="Favoritkan"
          >
            <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
          </button>
          <div>
            <div className="text-xs font-bold text-[#16191B] leading-none">
              Matcha Latte Original
            </div>
            <div className="text-[10px] text-[#696C6F] mt-0.5">
              Batch Uji Coba · Jabodetabek
            </div>
          </div>
        </div>

        <button
          onClick={onOpenPreorder}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#37A53D] hover:bg-[#146720] text-white text-xs font-bold rounded-full transition-colors shadow-xs"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Pesan WA</span>
        </button>
      </div>
    </div>
  );
};
