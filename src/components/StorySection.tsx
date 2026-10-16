import React from 'react';
import { Quote } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="cerita" className="scroll-mt-24 py-6 border-y border-[#DDE0E3] space-y-4">
      {/* Kicker */}
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#146720]" />
        <span className="text-xs font-bold uppercase tracking-wider text-[#146720]">
          Cerita di balik racikan
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-8 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#16191B] tracking-tight">
            Dari suka matcha, jadi matcha-holic.
          </h2>

          <p className="text-sm sm:text-base text-[#696C6F] leading-relaxed">
            Buat kami, matcha punya rasa yang fresh, earthy, dan creamy yang sangat pas buat jeda di tengah hari yang padat. Tidak terlalu manis, tapi tetap memberi ketenangan yang nyata.
          </p>

          <p className="text-sm sm:text-base text-[#696C6F] leading-relaxed">
            Karena itulah <strong>matcha-holic</strong> dimulai. Berawal dari eksperimen di dapur rumah mencari perbandingan bubuk matcha murni dan susu segar yang paling seimbang. Dibuat sendiri dalam jumlah kecil untuk memastikan kualitas setiap tetesnya.
          </p>
        </div>

        <div className="md:col-span-4 bg-[#DCFBDF]/50 rounded-2xl p-5 border border-[#37A53D]/20 flex flex-col justify-center relative overflow-hidden">
          <Quote className="w-8 h-8 text-[#146720]/20 absolute -top-1 -right-1" />
          <p className="text-xs italic text-[#146720] leading-relaxed font-medium">
            &ldquo;Sedikit matcha, sedikit jeda. Karena setiap orang berhak menikmati momen tenang di antara kesibukan hariannya.&rdquo;
          </p>
          <div className="mt-3 pt-2 border-t border-[#146720]/20 text-[11px] font-bold text-[#146720]">
            — Tim Dapur matcha-holic
          </div>
        </div>
      </div>
    </section>
  );
};
