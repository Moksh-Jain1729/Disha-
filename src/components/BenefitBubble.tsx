import React from 'react';
import { StreamInfo } from '../types';
import { Sparkles, ShieldAlert } from 'lucide-react';

interface BenefitBubbleProps {
  stream: StreamInfo;
}

export const BenefitBubble: React.FC<BenefitBubbleProps> = ({ stream }) => {
  return (
    <div 
      className="p-4 md:p-5 rounded-2xl border transition-all my-4 shadow-sm"
      style={{ 
        backgroundColor: stream.bgLight, 
        borderColor: `${stream.color}40`
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span 
          className="p-1.5 rounded-lg text-white font-semibold text-xs flex items-center gap-1 shadow-2xs"
          style={{ backgroundColor: stream.color }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          Stream Flexibility
        </span>
        <h4 className="text-sm font-bold text-[#3A2E27]">
          {stream.title} — "{stream.benefitTitle}"
        </h4>
      </div>

      <p className="text-xs md:text-sm text-[#3A2E27] leading-relaxed mb-3">
        {stream.benefitDesc}
      </p>

      <div className="flex items-center gap-1.5 text-[11px] text-[#8A7A6D] pt-2 border-t border-black/5 italic">
        <ShieldAlert className="w-3.5 h-3.5 shrink-0 text-[#8A7A6D]" />
        <span>Rules vary by state, board, and institution — this is general guidance, not a guarantee.</span>
      </div>
    </div>
  );
};
