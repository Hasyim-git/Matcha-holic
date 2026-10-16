import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 bg-white border-t border-[#DDE0E3] py-8 text-xs text-[#696C6F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Brand info */}
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="w-5 h-5 rounded-md bg-[#DCFBDF] text-[#146720] text-xs font-bold flex items-center justify-center">
                🍵
              </span>
              <span className="font-bold text-base text-[#146720]">
                matcha-holic<span className="text-[#37A53D]">.</span>
              </span>
            </div>
            <p className="text-xs text-[#696C6F]">
              Sedikit matcha, sedikit jeda.
            </p>
          </div>

          {/* Regional & Copyright */}
          <div className="space-y-1 text-center sm:text-right">
            <p className="font-semibold text-[#16191B]">
              Matcha latte · Area Jabodetabek
            </p>
            <p className="text-[11px] text-[#696C6F]">
              &copy; {new Date().getFullYear()} matcha-holic. Masih diracik dengan sepenuh hati.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
