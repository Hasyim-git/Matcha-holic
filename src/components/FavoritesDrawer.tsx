import React from 'react';
import { X, Heart, MessageCircle, ArrowRight } from 'lucide-react';
import { productBottleImage } from '../assets/images';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  isFavorited: boolean;
  onToggleFavorite: () => void;
  onOpenPreorder: () => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  isFavorited,
  onToggleFavorite,
  onOpenPreorder,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-2xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between border-l border-[#DDE0E3]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#DDE0E3] bg-[#F3F5F6]">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-current" />
            <h3 className="font-bold text-base text-[#16191B]">Varian Tersimpan</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#696C6F] hover:text-[#16191B] rounded-md hover:bg-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 overflow-y-auto space-y-4">
          {isFavorited ? (
            <div className="p-4 rounded-xl border border-[#DDE0E3] bg-[#F3F5F6]/50 space-y-3">
              <div className="flex items-center gap-3">
                <img
                  src={productBottleImage}
                  alt="Matcha Latte Original"
                  className="w-16 h-16 rounded-lg object-cover border border-[#DDE0E3]"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase font-bold text-[#146720] bg-[#DCFBDF] px-2 py-0.5 rounded-sm">
                    Original Blend
                  </span>
                  <h4 className="font-bold text-sm text-[#16191B] truncate mt-1">
                    Matcha Latte Original
                  </h4>
                  <p className="text-xs text-[#696C6F]">
                    Botol Kaca 250ml · Siap Minum
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#DDE0E3] text-xs">
                <button
                  type="button"
                  onClick={onToggleFavorite}
                  className="text-rose-600 hover:underline"
                >
                  Hapus dari favorit
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenPreorder();
                  }}
                  className="font-bold text-[#146720] hover:underline inline-flex items-center gap-1"
                >
                  <span>Pesan Varian Ini</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-[#696C6F] space-y-2">
              <Heart className="w-10 h-10 mx-auto text-gray-300 stroke-1" />
              <p className="text-sm font-semibold text-[#16191B]">Belum ada varian tersimpan</p>
              <p className="text-xs">
                Klik ikon hati pada produk Matcha Latte Original untuk menyimpannya ke daftar pantau kamu.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#DDE0E3] bg-[#F3F5F6]">
          <button
            onClick={() => {
              onClose();
              onOpenPreorder();
            }}
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#37A53D] hover:bg-[#146720] text-white rounded-full text-xs font-bold transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Pre-Order WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
