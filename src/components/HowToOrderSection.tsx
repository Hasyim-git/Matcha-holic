import React from 'react';
import { MessageSquare, CheckCheck, Truck, ArrowRight } from 'lucide-react';

interface HowToOrderSectionProps {
  onOpenPreorder: () => void;
}

export const HowToOrderSection: React.FC<HowToOrderSectionProps> = ({ onOpenPreorder }) => {
  const steps = [
    {
      step: '1',
      title: 'Chat lewat WhatsApp',
      desc: 'Sampaikan nama, alamat lengkap di Jabodetabek, dan jumlah botol matcha latte yang ingin dipesan.',
      icon: <MessageSquare className="w-5 h-5 text-[#146720]" />,
    },
    {
      step: '2',
      title: 'Konfirmasi pesanan',
      desc: 'Pastikan ketersediaan slot batch, total harga, tarif ongkir kurir, dan konfirmasi jadwal pengiriman.',
      icon: <CheckCheck className="w-5 h-5 text-[#146720]" />,
    },
    {
      step: '3',
      title: 'Tunggu matcha datang',
      desc: 'Pesanan diberangkatkan pukul 15.00 WIB setiap harinya dengan kemasan bersegel dingin khusus.',
      icon: <Truck className="w-5 h-5 text-[#146720]" />,
    },
  ];

  return (
    <section id="cara-order" className="scroll-mt-24 space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between pb-1">
        <h2 className="text-xl sm:text-2xl font-bold text-[#16191B] tracking-tight">
          Nanti, pesannya semudah ini
        </h2>
        <span className="text-xs font-semibold text-[#146720] bg-[#DCFBDF] px-2.5 py-1 rounded-md">
          Simple 3 Langkah
        </span>
      </div>

      {/* 3 Step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {steps.map((item) => (
          <div
            key={item.step}
            className="p-5 rounded-2xl bg-white border border-[#DDE0E3] shadow-2xs hover:border-[#37A53D] transition-colors relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DCFBDF] text-[#146720] font-bold text-xs flex items-center justify-center">
                  {item.step}
                </span>
                <div className="p-2 rounded-lg bg-[#F3F5F6]">
                  {item.icon}
                </div>
              </div>

              <h3 className="font-bold text-base text-[#16191B] mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-[#696C6F] leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#DDE0E3]/60 text-[11px] font-semibold text-[#146720]">
              Langkah {item.step} dari 3
            </div>
          </div>
        ))}
      </div>

      {/* Quick Action Prompt */}
      <div className="p-4 rounded-xl bg-white border border-[#DDE0E3] flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-xs text-[#696C6F] text-center sm:text-left">
          Ingin mencoba simulasi pesan atau mendaftar waiting list sekarang?
        </span>
        <button
          onClick={onOpenPreorder}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#146720] hover:text-[#37A53D] transition-colors cursor-pointer"
        >
          <span>Uji Coba Pesan Sekarang</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
