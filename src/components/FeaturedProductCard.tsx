import React, { useState } from 'react';
import { Heart, MessageCircle, Clock, Milk, Snowflake, Sparkles, Check, Info } from 'lucide-react';
import { SENSORY_PROFILE } from '../data/matchaData';
import { productBottleImage } from '../assets/images';

interface FeaturedProductCardProps {
  onOpenPreorder: () => void;
  isFavorited: boolean;
  onToggleFavorite: () => void;
}

export const FeaturedProductCard: React.FC<FeaturedProductCardProps> = ({
  onOpenPreorder,
  isFavorited,
  onToggleFavorite,
}) => {
  const [selectedSweetness, setSelectedSweetness] = useState<'Normal' | 'Less' | 'Zero'>('Normal');
  const [showSensoryDetails, setShowSensoryDetails] = useState(false);

  return (
    <section id="produk" className="scroll-mt-24 space-y-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-1">
        <h2 className="text-xl sm:text-2xl font-bold text-[#16191B] tracking-tight">
          Kenalan dengan matcha kami
        </h2>
        <span className="text-xs sm:text-sm font-medium text-[#696C6F]">
          Satu varian, sepenuh hati.
        </span>
      </div>

      {/* Main Product Card */}
      <article className="bg-white rounded-2xl border border-[#DDE0E3] shadow-xs overflow-hidden transition-all hover:shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-5 sm:p-7">
          
          {/* Left Column: Product Photo & Badges */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="relative w-full aspect-4/3 md:aspect-square bg-[#F3F5F6] rounded-xl overflow-hidden border border-[#DDE0E3] group">
              <img
                src={productBottleImage}
                alt="Matcha Latte Original dalam botol kaca dingin segar"
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              {/* Cold indicator badge */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#146720] border border-[#DDE0E3] flex items-center gap-1 shadow-2xs">
                <Snowflake className="w-3 h-3 text-[#37A53D]" />
                <span>Sajikan Dingin</span>
              </div>
            </div>
            <p className="mt-2.5 text-[11px] text-[#696C6F] text-center font-medium">
              Ilustrasi bahan &amp; kemasan · batch uji coba
            </p>
          </div>

          {/* Right Column: Details & Specs */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-4">
            <div>
              {/* Badge row */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-[#DCFBDF] text-[#146720]">
                  <Sparkles className="w-3 h-3" />
                  Original Blend
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-[#FFF9C7] text-[#845922]">
                  Dalam Uji Coba Racikan
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#16191B] tracking-tight mb-2">
                Matcha Latte Original
              </h3>
              <p className="text-sm sm:text-base text-[#696C6F] leading-relaxed mb-4">
                Berawal dari suka matcha. Satu varian latte yang segar, creamy, dan pas untuk dinikmati santai saat butuh jeda di sela aktivitas.
              </p>

              {/* Attributes / Key info */}
              <div className="flex flex-wrap items-center gap-4 py-2 text-xs font-semibold text-[#16191B] border-y border-[#DDE0E3]/70">
                <div className="inline-flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-[#DCFBDF] flex items-center justify-center">
                    <Milk className="w-3.5 h-3.5 text-[#146720]" />
                  </div>
                  <span>Mengandung susu pasteurisasi</span>
                </div>

                <div className="inline-flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-[#DCFBDF] flex items-center justify-center">
                    <Snowflake className="w-3.5 h-3.5 text-[#146720]" />
                  </div>
                  <span>Simpan di kulkas (chiller)</span>
                </div>
              </div>

              {/* Sweetness Selector preview */}
              <div className="mt-4 pt-1">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-bold text-[#16191B]">Pilihan Tingkat Manis:</span>
                  <span className="text-[#696C6F]">Dapat disesuaikan saat pre-order</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'Normal', label: 'Normal (100%)', desc: 'Resep Asli' },
                    { id: 'Less', label: 'Less Sugar (50%)', desc: 'Lebih Earthy' },
                    { id: 'Zero', label: 'No Sugar (0%)', desc: 'Pahit Murni' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedSweetness(opt.id as 'Normal' | 'Less' | 'Zero')}
                      className={`p-2 rounded-xl text-left border transition-all text-xs ${
                        selectedSweetness === opt.id
                          ? 'border-[#37A53D] bg-[#DCFBDF]/40 text-[#146720] font-bold shadow-2xs'
                          : 'border-[#DDE0E3] bg-[#F3F5F6] text-[#696C6F] hover:bg-white'
                      }`}
                    >
                      <div className="truncate">{opt.label}</div>
                      <div className="text-[10px] opacity-75 font-normal">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price section */}
              <div className="mt-5">
                <div className="text-xl sm:text-2xl font-black text-[#146720] tracking-tight">
                  Harga segera diumumkan
                </div>
                <p className="text-xs text-[#696C6F] mt-0.5">
                  Ukuran dan kemasan botol kedap udara masih dipersiapkan untuk menjaga aroma optimal.
                </p>
              </div>
            </div>

            {/* Sensory profile accordion toggle */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowSensoryDetails(!showSensoryDetails)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#146720] hover:underline cursor-pointer"
              >
                <Info className="w-3.5 h-3.5" />
                <span>{showSensoryDetails ? 'Sembunyikan profil rasa' : 'Lihat karakter rasa & aroma'}</span>
              </button>

              {showSensoryDetails && (
                <div className="mt-3 p-3.5 bg-[#F3F5F6] rounded-xl border border-[#DDE0E3] space-y-2.5 animate-in fade-in duration-200">
                  <div className="text-xs font-bold text-[#16191B] mb-1">
                    Profil Karakter Uji Rasa:
                  </div>
                  {SENSORY_PROFILE.map((item) => (
                    <div key={item.label} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-semibold text-[#16191B]">{item.label}</span>
                        <span className="font-mono text-[#146720] font-bold">{item.value}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#37A53D] rounded-full transition-all duration-500"
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                      <p className="text-[11px] text-[#696C6F]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Card Action Bar (Sticky or Bottom strip) */}
        <div className="px-5 sm:px-7 py-4 bg-[#F3F5F6]/70 border-t border-[#DDE0E3] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-medium text-[#696C6F]">
            <Clock className="w-4 h-4 text-[#845922]" />
            <span>Pre-order batch perdana dibuka bertahap di WhatsApp</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {/* Wishlist toggle */}
            <button
              onClick={onToggleFavorite}
              className={`p-2.5 rounded-full border transition-all duration-200 cursor-pointer ${
                isFavorited
                  ? 'bg-rose-50 border-rose-300 text-rose-600'
                  : 'bg-white border-[#DDE0E3] text-[#696C6F] hover:text-[#16191B] hover:border-gray-400'
              }`}
              title={isFavorited ? 'Tersimpan di favorit' : 'Simpan ke favorit'}
              aria-label="Simpan ke favorit"
            >
              <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
            </button>

            {/* Order trigger */}
            <button
              onClick={onOpenPreorder}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#37A53D] hover:bg-[#146720] text-white text-xs font-bold rounded-full transition-all shadow-xs hover:shadow-sm active:scale-98 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pesan lewat WhatsApp</span>
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};
