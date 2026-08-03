import React from 'react';
import { Board } from '../types';
import { BOARD_BANNERS } from '../data/streamsData';
import { BookmarkCheck, Info } from 'lucide-react';

interface BoardBannerProps {
  board: Board;
  onSelectBoard: (board: Board) => void;
}

export const BoardBanner: React.FC<BoardBannerProps> = ({ board, onSelectBoard }) => {
  const currentBanner = BOARD_BANNERS[board];

  return (
    <div className="bg-[#FFFBF3] border border-[#E8DCC8] rounded-2xl p-4 md:p-5 shadow-sm my-4 transition-all">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E8DCC8]/60 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <span className="p-1.5 bg-[#E4753A]/10 text-[#E4753A] rounded-lg">
            <BookmarkCheck className="w-4 h-4" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-[#8A7A6D]">Selected Board Context</span>
        </div>

        {/* Board Switcher Selector */}
        <div className="flex items-center gap-1.5 bg-[#FDF6EC] p-1 rounded-xl border border-[#E8DCC8] self-start sm:self-auto">
          {(['CBSE', 'ICSE', 'SSC'] as Board[]).map((b) => (
            <button
              key={b}
              onClick={() => onSelectBoard(b)}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                board === b
                  ? 'bg-[#E4753A] text-white shadow-xs'
                  : 'text-[#3A2E27] hover:bg-[#E8DCC8]/50'
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 text-[#E4753A] shrink-0 mt-0.5" />
        <div>
          <h4 className="text-sm font-bold text-[#3A2E27] mb-1">
            {currentBanner.title}
          </h4>
          <p className="text-xs md:text-sm text-[#8A7A6D] leading-relaxed">
            {currentBanner.copy}
          </p>
        </div>
      </div>
    </div>
  );
};
