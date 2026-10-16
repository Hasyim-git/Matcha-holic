import React, { useState } from 'react';
import { Leaf, Milk, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { INGREDIENTS_DATA } from '../data/matchaData';
import { IngredientDetail } from '../types/matcha';
import { matchaPowderImage } from '../assets/images';

export const IngredientsSection: React.FC = () => {
  const [activeIngredient, setActiveIngredient] = useState<IngredientDetail>(INGREDIENTS_DATA[0]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'leaf':
        return <Leaf className="w-5 h-5 text-[#146720]" />;
      case 'milk':
        return <Milk className="w-5 h-5 text-[#146720]" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-[#146720]" />;
      default:
        return <Leaf className="w-5 h-5 text-[#146720]" />;
    }
  };

  return (
    <section id="bahan" className="scroll-mt-24 space-y-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-1">
        <h2 className="text-xl sm:text-2xl font-bold text-[#16191B] tracking-tight">
          Tiga bahan, satu cerita
        </h2>
        <span className="text-xs sm:text-sm font-medium text-[#696C6F]">
          Kenali yang kamu minum
        </span>
      </div>

      {/* 3 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {INGREDIENTS_DATA.map((item) => {
          const isSelected = activeIngredient.id === item.id;
          return (
            <article
              key={item.id}
              onClick={() => setActiveIngredient(item)}
              className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-white border-[#37A53D] shadow-sm ring-1 ring-[#37A53D]'
                  : 'bg-white border-[#DDE0E3] hover:border-gray-400 hover:shadow-2xs'
              }`}
            >
              <div>
                {/* Icon Container */}
                <div className="w-10 h-10 rounded-full bg-[#DCFBDF] flex items-center justify-center mb-4">
                  {getIcon(item.icon)}
                </div>

                {/* Heading 3 */}
                <h3 className="font-bold text-base text-[#16191B] mb-1 flex items-center justify-between">
                  <span>{item.name}</span>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-[#37A53D]" />}
                </h3>

                {/* Paragraph */}
                <p className="text-xs text-[#696C6F] leading-relaxed">
                  {item.shortDesc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#DDE0E3]/60 flex items-center justify-between text-[11px] text-[#146720] font-semibold">
                <span>{item.origin}</span>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
              </div>
            </article>
          );
        })}
      </div>

      {/* Interactive Ingredient Showcase Spotlight */}
      <div className="bg-[#EEF4EE] rounded-2xl p-5 sm:p-6 border border-[#DDE0E3] grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        <div className="md:col-span-4 relative aspect-4/3 rounded-xl overflow-hidden border border-[#DDE0E3]">
          <img
            src={matchaPowderImage}
            alt="Tekstur bubuk matcha murni dalam scoop bambu"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-xs text-white text-[10px] px-2 py-1 rounded-sm text-center">
            Pewarna alami 100% dari daun teh hijau
          </div>
        </div>

        <div className="md:col-span-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#DCFBDF] text-[#146720] text-[11px] font-bold">
            Detail Racikan: {activeIngredient.name}
          </div>
          <h4 className="text-lg font-bold text-[#16191B]">
            {activeIngredient.tasteNote}
          </h4>
          <p className="text-xs sm:text-sm text-[#696C6F] leading-relaxed">
            {activeIngredient.fullDesc}
          </p>
        </div>
      </div>

      {/* Footnote */}
      <p className="text-xs text-[#696C6F] italic">
        * Resep masih dalam uji coba. Detail takaran bahan akan disempurnakan dan diperbarui berkala sebelum rilis batch komersial.
      </p>
    </section>
  );
};
