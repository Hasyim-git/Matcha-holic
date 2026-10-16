import React, { useState } from 'react';
import { Search, MessageCircle, Menu, X, Heart } from 'lucide-react';
import { MomenTenangAudio } from './MomenTenangAudio';

interface HeaderProps {
  onOpenPreorder: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  favoritesCount: number;
  onOpenFavorites: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenPreorder,
  searchQuery,
  setSearchQuery,
  favoritesCount,
  onOpenFavorites,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const navLinks = [
    { label: 'Produk', href: '#produk' },
    { label: 'Bahan', href: '#bahan' },
    { label: 'Cara Order', href: '#cara-order' },
    { label: 'Pengiriman', href: '#pengiriman' },
    { label: 'Cerita', href: '#cerita' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#DDE0E3] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4 sm:gap-8">
          
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#" className="flex items-center gap-2 group">
              <span className="w-8 h-8 rounded-lg bg-[#DCFBDF] flex items-center justify-center text-[#146720] font-bold text-lg border border-[#37A53D]/30 shadow-xs group-hover:scale-105 transition-transform">
                🍵
              </span>
              <span className="font-bold text-xl sm:text-2xl text-[#146720] tracking-tight">
                matcha-holic<span className="text-[#37A53D]">.</span>
              </span>
            </a>
          </div>

          {/* Search bar (Center-left interactive) */}
          <div className="hidden lg:flex items-center flex-1 max-w-xs relative">
            <Search className="w-4 h-4 text-[#696C6F] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Cari matcha, bahan, pengiriman…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#F3F5F6] hover:bg-[#EEF4EE] focus:bg-white border border-[#DDE0E3] focus:border-[#37A53D] rounded-full text-xs text-[#16191B] placeholder-[#696C6F]/70 outline-hidden transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#696C6F] hover:text-[#16191B]"
              >
                ✕
              </button>
            )}
          </div>

          {/* Zone 2: Single-line Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#696C6F]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#146720] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-[#37A53D] decoration-2 underline-offset-8"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Soundscape, Wishlist & WhatsApp CTA) */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Audio ambience toggle */}
            <div className="hidden sm:block">
              <MomenTenangAudio />
            </div>

            {/* Wishlist toggle */}
            <button
              onClick={onOpenFavorites}
              className="relative p-2 rounded-full text-[#696C6F] hover:text-[#146720] hover:bg-[#F3F5F6] transition-colors"
              title="Varian Tersimpan"
              aria-label="Varian Tersimpan"
            >
              <Heart className={`w-5 h-5 ${favoritesCount > 0 ? 'fill-emerald-500 text-emerald-600' : ''}`} />
              {favoritesCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#146720] text-white text-[10px] font-bold flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* Primary Order CTA */}
            <button
              onClick={onOpenPreorder}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#146720] bg-white border border-[#37A53D] hover:bg-[#DCFBDF] rounded-full transition-all shadow-2xs hover:shadow-xs active:scale-98 whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-[#146720]" />
              <span>Pesan WhatsApp</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#16191B] rounded-lg hover:bg-[#F3F5F6] transition-colors"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar toggle */}
        <div className="lg:hidden pb-3">
          <div className="relative">
            <Search className="w-4 h-4 text-[#696C6F] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari matcha favoritmu…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-[#F3F5F6] border border-[#DDE0E3] rounded-full text-xs text-[#16191B] outline-hidden focus:border-[#37A53D]"
            />
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#DDE0E3] bg-white px-4 py-4 space-y-3 animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-[#16191B] hover:bg-[#F3F5F6] hover:text-[#146720] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#DDE0E3] flex flex-col gap-2">
            <div className="flex justify-between items-center py-1">
              <span className="text-xs text-[#696C6F]">Audio Momen Tenang:</span>
              <MomenTenangAudio />
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPreorder();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#37A53D] hover:bg-[#146720] rounded-full transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pesan via WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
