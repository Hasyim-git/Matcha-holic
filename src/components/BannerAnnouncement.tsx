import React, { useState } from 'react';
import { Sparkles, ArrowRight, X } from 'lucide-react';

interface BannerAnnouncementProps {
  onLearnMore: () => void;
}

export const BannerAnnouncement: React.FC<BannerAnnouncementProps> = ({ onLearnMore }) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-[#DCFBDF] border-b border-[#37A53D]/20 text-[#146720] text-xs font-semibold px-4 py-2 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden mx-auto sm:mx-0">
          <Sparkles className="w-3.5 h-3.5 shrink-0 text-[#146720] animate-spin-slow" />
          <span className="truncate">
            Sedang diracik, belum dijual. Kenalan dulu dengan <strong>matcha-holic</strong>.
          </span>
          <button
            onClick={onLearnMore}
            className="hidden sm:inline-flex items-center gap-1 underline underline-offset-2 hover:text-[#37A53D] font-bold ml-1 cursor-pointer"
          >
            Gabung Waiting List <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <button
          onClick={() => setDismissed(true)}
          className="text-[#146720]/70 hover:text-[#146720] p-0.5 rounded-sm hover:bg-[#146720]/10 transition-colors"
          title="Tutup pengumuman"
          aria-label="Tutup pengumuman"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
