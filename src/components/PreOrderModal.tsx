import React, { useState } from 'react';
import { X, MessageCircle, Check, Copy, Sparkles, MapPin, ShieldCheck } from 'lucide-react';
import { OrderPreference } from '../types/matcha';

interface PreOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PreOrderModal: React.FC<PreOrderModalProps> = ({ isOpen, onClose }) => {
  const [pref, setPref] = useState<OrderPreference>({
    product: 'Matcha Latte Original',
    variant: 'Botol Kaca Khas 250ml',
    sweetness: 'Normal (100%)',
    milkType: 'Fresh Milk Sapi Segar',
    quantity: 2,
    customerName: '',
    city: 'Jakarta Selatan',
    address: '',
    notes: 'Mohon sertakan ice pack pendingin jika memungkinkan.',
  });

  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Estimate price (mock preview during trial)
  const basePrice = 28000;
  const oatExtra = pref.milkType.includes('Oat Milk') ? 6000 : 0;
  const totalPrice = (basePrice + oatExtra) * pref.quantity;

  const generateWhatsappMessage = () => {
    return `Halo Tim matcha-holic! 🍵✨

Saya tertarik untuk ikut daftar pre-order batch racikan matcha:

*Detail Pesanan:*
• Produk: ${pref.product} (${pref.variant})
• Jumlah: ${pref.quantity} botol
• Tingkat Manis: ${pref.sweetness}
• Pilihan Susu: ${pref.milkType}
• Estimasi Subtotal: Rp ${totalPrice.toLocaleString('id-ID')} (belum termasuk ongkir)

*Data Pengiriman Jabodetabek:*
• Nama: ${pref.customerName || '[Nama Belum Diisi]'}
• Area/Kota: ${pref.city}
• Alamat: ${pref.address || '[Alamat Lengkap]'}
• Catatan: ${pref.notes}

Mohon info ketersediaan slot batch terbaru & konfirmasi ongkirnya ya. Terima kasih!`;
  };

  const handleSendWhatsapp = () => {
    const text = encodeURIComponent(generateWhatsappMessage());
    // Direct link to WhatsApp
    const waUrl = `https://api.whatsapp.com/send?phone=6281234567890&text=${text}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateWhatsappMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#DDE0E3] overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#DDE0E3] bg-[#F3F5F6]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#DCFBDF] flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-[#146720]" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#16191B]">Pesan &amp; Masuk Waiting List</h3>
              <p className="text-xs text-[#696C6F]">Batch uji coba terbatas · Kirim via WhatsApp</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#696C6F] hover:text-[#16191B] rounded-lg hover:bg-white/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body content */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm">
          {/* Trial banner */}
          <div className="p-3.5 bg-[#FFF9C7]/70 border border-[#845922]/20 rounded-xl flex items-start gap-3 text-xs text-[#845922]">
            <Sparkles className="w-4 h-4 shrink-0 text-[#845922] mt-0.5" />
            <div>
              <span className="font-bold">Status Batch: Dalam Uji Coba Racikan.</span>
              <p className="mt-0.5 text-[#845922]/90">
                Harga resmi dan tanggal kirim batch akan dikonfirmasi langsung oleh tim kami saat chat WhatsApp terhubung.
              </p>
            </div>
          </div>

          {/* Form Options */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#16191B] mb-1.5">
                Varian Produk
              </label>
              <div className="p-3 bg-[#F3F5F6] rounded-xl border border-[#DDE0E3] flex justify-between items-center">
                <span className="font-semibold text-[#146720]">Matcha Latte Original (250ml)</span>
                <span className="text-xs text-[#696C6F] font-mono">Est. Rp 28.000/btl</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#16191B] mb-1.5">
                  Tingkat Kemanisan
                </label>
                <select
                  value={pref.sweetness}
                  onChange={(e) => setPref({ ...pref, sweetness: e.target.value as OrderPreference['sweetness'] })}
                  className="w-full px-3 py-2 bg-white border border-[#DDE0E3] rounded-lg text-xs font-medium text-[#16191B] focus:outline-hidden focus:border-[#37A53D]"
                >
                  <option value="Normal (100%)">Normal (100% - Resep Asli)</option>
                  <option value="Sedikit Manis (50%)">Sedikit Manis (50% Less Sugar)</option>
                  <option value="Tanpa Gula (0%)">Tanpa Gula (0% Pure Unsweetened)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#16191B] mb-1.5">
                  Pilihan Susu
                </label>
                <select
                  value={pref.milkType}
                  onChange={(e) => setPref({ ...pref, milkType: e.target.value as OrderPreference['milkType'] })}
                  className="w-full px-3 py-2 bg-white border border-[#DDE0E3] rounded-lg text-xs font-medium text-[#16191B] focus:outline-hidden focus:border-[#37A53D]"
                >
                  <option value="Fresh Milk Sapi Segar">Fresh Milk Sapi Segar</option>
                  <option value="Oat Milk Nabati (+Rp 6.000)">Oat Milk Nabati (+Rp 6.000)</option>
                </select>
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-xs font-bold text-[#16191B] mb-1.5">
                Jumlah Botol
              </label>
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-[#DDE0E3] rounded-lg bg-white overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setPref({ ...pref, quantity: Math.max(1, pref.quantity - 1) })}
                    className="w-9 h-9 flex items-center justify-center text-[#16191B] hover:bg-[#F3F5F6] font-bold"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold text-sm text-[#146720] tabular-nums">
                    {pref.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setPref({ ...pref, quantity: Math.min(12, pref.quantity + 1) })}
                    className="w-9 h-9 flex items-center justify-center text-[#16191B] hover:bg-[#F3F5F6] font-bold"
                  >
                    +
                  </button>
                </div>
                <span className="text-xs text-[#696C6F]">
                  Total estimasi: <strong className="text-[#146720]">Rp {totalPrice.toLocaleString('id-ID')}</strong> (Belum ongkir)
                </span>
              </div>
            </div>

            {/* Name & City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#16191B] mb-1.5">
                  Nama Kamu
                </label>
                <input
                  type="text"
                  placeholder="misal: Nadya / Dimas"
                  value={pref.customerName}
                  onChange={(e) => setPref({ ...pref, customerName: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#DDE0E3] rounded-lg text-xs text-[#16191B] focus:outline-hidden focus:border-[#37A53D]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#16191B] mb-1.5">
                  Kota / Wilayah Jabodetabek
                </label>
                <select
                  value={pref.city}
                  onChange={(e) => setPref({ ...pref, city: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#DDE0E3] rounded-lg text-xs font-medium text-[#16191B] focus:outline-hidden focus:border-[#37A53D]"
                >
                  <option value="Jakarta Selatan">Jakarta Selatan</option>
                  <option value="Jakarta Pusat">Jakarta Pusat</option>
                  <option value="Jakarta Barat">Jakarta Barat</option>
                  <option value="Jakarta Timur">Jakarta Timur</option>
                  <option value="Jakarta Utara">Jakarta Utara</option>
                  <option value="Tangerang Selatan (Bintaro, BSD)">Tangerang Selatan</option>
                  <option value="Kota Tangerang">Kota Tangerang</option>
                  <option value="Depok">Depok</option>
                  <option value="Bekasi">Bekasi</option>
                  <option value="Bogor">Bogor</option>
                </select>
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-xs font-bold text-[#16191B] mb-1.5">
                Alamat Singkat / Patokan Pengiriman
              </label>
              <input
                type="text"
                placeholder="Jl. Antasari No. 12, Cilandak..."
                value={pref.address}
                onChange={(e) => setPref({ ...pref, address: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-[#DDE0E3] rounded-lg text-xs text-[#16191B] focus:outline-hidden focus:border-[#37A53D]"
              />
            </div>
          </div>

          {/* Message Preview */}
          <div className="bg-[#F3F5F6] rounded-xl p-3 border border-[#DDE0E3] space-y-1.5">
            <div className="flex justify-between items-center text-xs text-[#696C6F]">
              <span className="font-semibold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#146720]" />
                Format Pesan WhatsApp Otomatis
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1 text-[11px] text-[#146720] hover:underline"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                {copied ? 'Tersalin!' : 'Salin Teks'}
              </button>
            </div>
            <pre className="text-[11px] leading-relaxed text-[#16191B]/80 font-mono whitespace-pre-wrap line-clamp-3 bg-white p-2 rounded border border-[#DDE0E3]">
              {generateWhatsappMessage()}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-[#DDE0E3] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-[#696C6F]">
            <ShieldCheck className="w-4 h-4 text-[#146720]" />
            <span>Tanpa pembayaran dimuka hingga batch terkonfirmasi</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/3 sm:w-auto px-4 py-2 text-xs font-semibold text-[#696C6F] hover:text-[#16191B] rounded-full border border-[#DDE0E3] hover:bg-[#F3F5F6] transition-colors"
            >
              Tutup
            </button>
            <button
              onClick={handleSendWhatsapp}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#37A53D] hover:bg-[#146720] text-white text-xs font-bold rounded-full transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Buka WhatsApp Sekarang</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
