import React from 'react';
import { RoadmapNode, NodeStatus } from '../types';
import { CheckCircle2, Bookmark, ExternalLink, ChevronRight, Sparkles } from 'lucide-react';

interface RoadmapNodeCardProps {
  node: RoadmapNode;
  status: NodeStatus;
  onStatusChange: (nodeId: string, status: NodeStatus) => void;
  onSelectNode: (node: RoadmapNode) => void;
  isLeaf?: boolean;
}

export const RoadmapNodeCard: React.FC<RoadmapNodeCardProps> = ({
  node,
  status,
  onStatusChange,
  onSelectNode,
  isLeaf = false,
}) => {
  const getStatusBadge = () => {
    switch (status) {
      case 'explored':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#4CAF7D] text-white">
            <CheckCircle2 className="w-3 h-3" />
            Explored
          </span>
        );
      case 'interested':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#F2A93B] text-white">
            <Bookmark className="w-3 h-3 fill-current" />
            Interested
          </span>
        );
      default:
        return (
          <span className="text-[11px] font-semibold text-[#8A7A6D] bg-[#FDF6EC] px-2 py-0.5 rounded-md border border-[#E8DCC8]">
            Not Started
          </span>
        );
    }
  };

  return (
    <div
      onClick={() => onSelectNode(node)}
      className={`group relative bg-[#FFFBF3] rounded-2xl p-4 transition-all cursor-pointer border shadow-xs hover:shadow-md ${
        status === 'explored'
          ? 'border-[#4CAF7D] ring-1 ring-[#4CAF7D]/30'
          : status === 'interested'
          ? 'border-[#F2A93B] ring-1 ring-[#F2A93B]/30'
          : 'border-[#E8DCC8] hover:border-[#E4753A]'
      }`}
    >
      {/* Accent strip on left */}
      <div
        className="absolute top-0 bottom-0 left-0 w-1.5 rounded-l-2xl"
        style={{ backgroundColor: node.accentColor || '#E4753A' }}
      />

      <div className="pl-2 space-y-2">
        {/* Header row */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className="text-sm font-bold text-[#3A2E27] group-hover:text-[#E4753A] transition-colors leading-snug">
              {node.title}
            </h4>
            {node.fullForm && (
              <p className="text-[11px] text-[#8A7A6D] font-medium mt-0.5">
                {node.fullForm}
              </p>
            )}
          </div>
          {getStatusBadge()}
        </div>

        {/* Description preview */}
        <p className="text-xs text-[#8A7A6D] line-clamp-2 leading-relaxed">
          {node.description}
        </p>

        {/* Level 3 exam pattern preview or leaf indicators */}
        {node.examPattern && (
          <div className="text-[11px] bg-[#FDF6EC] p-2 rounded-xl border border-[#E8DCC8] text-[#3A2E27]">
            <span className="font-bold text-[#E4753A]">Pattern: </span>
            <span className="line-clamp-1">{node.examPattern}</span>
          </div>
        )}

        {/* Card Footer Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-[#E8DCC8]/50 text-xs text-[#8A7A6D]">
          <span className="text-[10px] font-semibold text-[#8A7A6D] uppercase tracking-wider">
            {node.level === 1 ? 'Stream' : node.level === 2 ? 'Pathway' : 'Exam & Details'}
          </span>

          <div className="flex items-center gap-1 font-bold text-[#E4753A] group-hover:translate-x-0.5 transition-transform">
            <span>Explore Details</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};
