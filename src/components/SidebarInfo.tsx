import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Truck, 
  Snowflake, 
  MessageCircle, 
  Sparkles, 
  Check, 
  Search,
  ExternalLink
} from 'lucide-react';
import { JABODETABEK_AREAS } from '../data/matchaData';

interface SidebarInfoProps {
  onOpenPreorder: () => void;
}

export const SidebarInfo: React.FC<SidebarInfoProps> = ({ onOpenPreorder }) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [showCoverageResult, setShowCoverageResult] = useState(false);

  const matchedArea = JABODETABEK_AREAS.find((a) =>
    selectedCity ? a.name.toLowerCase().includes(selectedCity.toLowerCase()) : false
  );

  return (
    <aside id="pengiriman" className="scroll-mt-24 space-y-4">
      {/* 1. Info Pengiriman Card */}
      <section className="bg-white rounded-2xl p-5 border border-[#DDE0E3] shadow-2xs space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#DCFBDF] flex items-center justify-center">
              <Truck className="w-4 h-4 text-[#146720]" />
            </div>
            <h3 className="font-bold text-base text-[#16191B]">Info pengiriman</h3>
          </div>
          <div className="inline-block px-2.5 py-0.5 rounded-md bg-[#DCFBDF] text-[#146720] text-xs font-bold">
            Rencana saat pre-order dibuka
          </div>
        </div>

        {/* Details list */}
        <div className="space-y-3.5 text-xs">
          {/* Area */}
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#696C6F] shrink-0 mt-0.5" />
            <div>
              <strong className="block text-[#16191B] font-bold">Jabodetabek</strong>
              <p className="text-[#696C6F] mt-0.5">
                Jakarta, Bogor, Depok, Tangerang, dan Bekasi.
              </p>
            </div>
          </div>

          {/* Time */}
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-[#696C6F] shrink-0 mt-0.5" />
            <div>
              <strong className="block text-[#16191B] font-bold">Setiap hari, pukul 15.00</strong>
              <p className="text-[#696C6F] mt-0.5">
                Jadwal pengiriman yang direncanakan.
              </p>
            </div>
          </div>

          {/* Ongkir */}
          <div className="flex items-start gap-3">
            <Truck className="w-4 h-4 text-[#696C6F] shrink-0 mt-0.5" />
            <div>
              <strong className="block text-[#16191B] font-bold">Ongkir ditanggung pembeli</strong>
              <p className="text-[#696C6F] mt-0.5">
                Dikonfirmasi sebelum pengiriman sesuai tarif kurir instan/same-day.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Delivery Area Checker */}
        <div className="pt-3 border-t border-[#DDE0E3] space-y-2">
          <label className="block text-[11px] font-bold text-[#16191B]">
            Cek Jangkauan Area Kamu:
          </label>
          <div className="flex gap-2">
            <select
              value={selectedCity}
              onChange={(e) => {
                setSelectedCity(e.target.value);
                setShowCoverageResult(true);
              }}
              className="flex-1 px-3 py-1.5 bg-[#F3F5F6] border border-[#DDE0E3] rounded-lg text-xs text-[#16191B] focus:border-[#37A53D] outline-hidden"
            >
              <option value="">Pilih Area / Kota…</option>
              {JABODETABEK_AREAS.map((a) => (
                <option key={a.name} value={a.name}>
                  {a.name}
                </option>
              ))}
            </select>
          </div>

          {showCoverageResult && matchedArea && (
            <div className="p-2.5 rounded-lg bg-[#DCFBDF]/60 border border-[#37A53D]/30 text-xs text-[#146720] space-y-1 animate-in fade-in">
              <div className="flex items-center gap-1 font-bold">
                <Check className="w-3.5 h-3.5" />
                <span>Ter-cover Pengiriman!</span>
              </div>
              <p className="text-[11px] text-[#146720]/90">
                <strong>Area:</strong> {matchedArea.coverage}
              </p>
              <p className="text-[11px] text-[#146720]/90">
                <strong>Cut-off order:</strong> {matchedArea.cutoffTime} · Berangkat {matchedArea.deliverySchedule}
              </p>
            </div>
          )}
        </div>

        <p className="pt-2 border-t border-[#DDE0E3] text-[11px] text-[#696C6F] leading-relaxed">
          Batas jam order dan metode pengiriman akan diinformasikan lengkap pada konfirmasi chat WhatsApp.
        </p>
      </section>

      {/* 2. Storage Instruction Card ("Tetap dingin, ya.") */}
      <section className="bg-[#EEF4EE] rounded-2xl p-5 border border-[#DDE0E3] shadow-2xs space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <Snowflake className="w-4 h-4 text-blue-700" />
          </div>
          <h3 className="font-bold text-base text-[#16191B]">Tetap dingin, ya.</h3>
        </div>

        <p className="text-xs text-[#696C6F] leading-relaxed">
          Simpan di kulkas (chiller), tidak perlu dibekukan di freezer. Kami tidak menggunakan bahan pengawet artifisial, sehingga rasa terbaik didapat saat disajikan dingin segar.
        </p>

        <p className="text-[11px] text-[#696C6F]/80 leading-relaxed italic border-t border-[#DDE0E3]/70 pt-2">
          * Saran penyimpanan, bukan jaminan daya tahan tanpa batas. Sebaiknya dinikmati dalam 3–4 hari.
        </p>
      </section>

      {/* 3. WhatsApp Direct Contact Card */}
      <section className="bg-white rounded-2xl p-5 border border-[#DDE0E3] shadow-2xs space-y-3 text-center sm:text-left">
        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <div className="w-8 h-8 rounded-full bg-[#DCFBDF] flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-[#146720]" />
          </div>
          <h3 className="font-bold text-base text-[#16191B]">Ngobrol soal matcha?</h3>
        </div>

        <p className="text-xs text-[#696C6F] leading-relaxed">
          Pre-order nantinya lewat WhatsApp. Untuk sekarang, kamu bisa daftar waiting list atau tanya-tanya seputar racikan batch perdana.
        </p>

        <button
          onClick={onOpenPreorder}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#37A53D] hover:bg-[#146720] text-white text-xs font-bold rounded-full transition-all shadow-xs active:scale-98 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Pesan lewat WhatsApp</span>
        </button>

        <p className="text-[11px] text-[#696C6F] text-center font-medium">
          Layanan chat pre-order &amp; waiting list aktif.
        </p>
      </section>

      {/* 4. Brand Philosophy Tagline Card */}
      <div className="p-4 rounded-xl bg-white border border-[#DDE0E3] flex items-center gap-3">
        <Sparkles className="w-5 h-5 text-[#146720] shrink-0" />
        <p className="text-xs font-medium text-[#696C6F] leading-snug">
          Dibuat dari rasa suka. Diracik untuk momen tenang.
        </p>
      </div>
    </aside>
  );
};
