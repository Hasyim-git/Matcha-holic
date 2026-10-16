/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { BannerAnnouncement } from './components/BannerAnnouncement';
import { HeroSection } from './components/HeroSection';
import { FeaturedProductCard } from './components/FeaturedProductCard';
import { IngredientsSection } from './components/IngredientsSection';
import { HowToOrderSection } from './components/HowToOrderSection';
import { StorySection } from './components/StorySection';
import { FaqSection } from './components/FaqSection';
import { SidebarInfo } from './components/SidebarInfo';
import { Footer } from './components/Footer';
import { PreOrderModal } from './components/PreOrderModal';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [isPreorderOpen, setIsPreorderOpen] = useState(false);
  const [isFavoritesDrawerOpen, setIsFavoritesDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFavorited, setIsFavorited] = useState(() => {
    try {
      return localStorage.getItem('matchaholic_fav_original') === 'true';
    } catch {
      return false;
    }
  });

  const toggleFavorite = () => {
    setIsFavorited((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('matchaholic_fav_original', String(next));
      } catch {
        // Ignore storage errors in restricted contexts
      }
      return next;
    });
  };

  const handleExploreProduct = () => {
    const el = document.getElementById('produk');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F5F6] text-[#16191B] flex flex-col font-sans selection:bg-[#DCFBDF] selection:text-[#146720]">
      {/* 1. Top Announcement Bar */}
      <BannerAnnouncement onLearnMore={() => setIsPreorderOpen(true)} />

      {/* 2. Top Bar Navigation (Top Bar Contract) */}
      <Header
        onOpenPreorder={() => setIsPreorderOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        favoritesCount={isFavorited ? 1 : 0}
        onOpenFavorites={() => setIsFavoritesDrawerOpen(true)}
      />

      {/* 3. Search Feedback notice if searching */}
      {searchQuery.trim() && (
        <div className="bg-[#DCFBDF]/80 border-b border-[#37A53D]/30 py-2 px-4 text-xs text-[#146720] text-center">
          Menampilkan hasil pencarian untuk &ldquo;<strong>{searchQuery}</strong>&rdquo; ·{' '}
          <button
            onClick={() => setSearchQuery('')}
            className="underline font-bold hover:text-black ml-1 cursor-pointer"
          >
            Bersihkan pencarian
          </button>
        </div>
      )}

      {/* 4. Main Two-Column Layout */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Content (Left 8 columns on desktop) */}
          <div className="lg:col-span-8 space-y-10 sm:space-y-12">
            {/* Hero Section */}
            <HeroSection
              onExploreProduct={handleExploreProduct}
              onOpenPreorder={() => setIsPreorderOpen(true)}
            />

            {/* Featured Product: Matcha Latte Original */}
            <FeaturedProductCard
              onOpenPreorder={() => setIsPreorderOpen(true)}
              isFavorited={isFavorited}
              onToggleFavorite={toggleFavorite}
            />

            {/* Ingredients: Tiga bahan, satu cerita */}
            <IngredientsSection />

            {/* How to Order: Nanti, pesannya semudah ini */}
            <HowToOrderSection onOpenPreorder={() => setIsPreorderOpen(true)} />

            {/* Story: Cerita di balik racikan */}
            <StorySection />

            {/* FAQ: Masih penasaran? */}
            <FaqSection
              onOpenPreorder={() => setIsPreorderOpen(true)}
              searchFilter={searchQuery}
            />
          </div>

          {/* Sidebar (Right 4 columns on desktop, sticky position) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <SidebarInfo onOpenPreorder={() => setIsPreorderOpen(true)} />
          </div>
        </div>
      </main>

      {/* 5. Footer */}
      <Footer />

      {/* 6. Mobile Quick Action Bar (Respects 15% sticky cap) */}
      <MobileBottomBar
        onOpenPreorder={() => setIsPreorderOpen(true)}
        isFavorited={isFavorited}
        onToggleFavorite={toggleFavorite}
      />

      {/* 7. Interactive Modals & Drawers */}
      <PreOrderModal
        isOpen={isPreorderOpen}
        onClose={() => setIsPreorderOpen(false)}
      />

      <FavoritesDrawer
        isOpen={isFavoritesDrawerOpen}
        onClose={() => setIsFavoritesDrawerOpen(false)}
        isFavorited={isFavorited}
        onToggleFavorite={toggleFavorite}
        onOpenPreorder={() => {
          setIsFavoritesDrawerOpen(false);
          setIsPreorderOpen(true);
        }}
      />
    </div>
  );
}
