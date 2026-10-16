import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/matchaData';

interface FaqSectionProps {
  onOpenPreorder: () => void;
  searchFilter?: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenPreorder, searchFilter = '' }) => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true, // first item open by default
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs = FAQ_DATA.filter((item) => {
    if (!searchFilter.trim()) return true;
    const q = searchFilter.toLowerCase();
    return item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q);
  });

  return (
    <section id="faq" className="scroll-mt-24 space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-1">
        <h2 className="text-xl sm:text-2xl font-bold text-[#16191B] tracking-tight">
          Masih penasaran?
        </h2>
        <span className="text-xs sm:text-sm font-medium text-[#696C6F]">
          Tanya-tanya dulu, boleh.
        </span>
      </div>

      {/* FAQ Accordion List */}
      <div className="bg-white rounded-2xl border border-[#DDE0E3] divide-y divide-[#DDE0E3] overflow-hidden shadow-2xs">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 text-center text-xs text-[#696C6F] space-y-2">
            <HelpCircle className="w-6 h-6 mx-auto text-[#696C6F]/50" />
            <p>Tidak ada pertanyaan yang sesuai dengan kata kunci pencarian.</p>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = !!openIds[faq.id] || (searchFilter.trim().length > 0);
            return (
              <div key={faq.id} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#F3F5F6]/60 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-[#16191B]">
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-full text-[#696C6F] transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#146720]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#696C6F] leading-relaxed animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Need more help CTA */}
      <div className="p-4 rounded-xl bg-[#EEF4EE] border border-[#DDE0E3] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <span className="text-[#16191B] font-medium text-center sm:text-left">
          Punya pertanyaan lain seputar ketersediaan batch atau kerja sama?
        </span>
        <button
          onClick={onOpenPreorder}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white text-[#146720] border border-[#37A53D] hover:bg-[#DCFBDF] rounded-full font-bold transition-colors cursor-pointer shrink-0"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Tanya via WhatsApp</span>
        </button>
      </div>
    </section>
  );
};
