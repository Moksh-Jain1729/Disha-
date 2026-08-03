import React, { useState } from 'react';
import { RoadmapNode, NodeStatus, StreamId, StreamInfo } from '../types';
import { RoadmapNodeCard } from './RoadmapNodeCard';
import { ChevronDown, ChevronRight, Layers, ArrowRight, CornerDownRight } from 'lucide-react';

interface TreeViewerProps {
  nodes: RoadmapNode[];
  activeStream: StreamInfo;
  progressState: Record<string, NodeStatus>;
  onStatusChange: (nodeId: string, status: NodeStatus) => void;
  onSelectNode: (node: RoadmapNode) => void;
}

export const TreeViewer: React.FC<TreeViewerProps> = ({
  nodes,
  activeStream,
  progressState,
  onStatusChange,
  onSelectNode,
}) => {
  // Mobile accordion state (open path IDs)
  const [openPaths, setOpenPaths] = useState<Record<string, boolean>>({
    'pcm-eng': true,
    'pcb-medicine': true,
    'comm-accounting': true,
    'arts-law': true,
    'voc-polytechnic': true,
    'emg-tech': true,
  });

  const togglePath = (pathId: string) => {
    setOpenPaths((prev) => ({
      ...prev,
      [pathId]: !prev[pathId],
    }));
  };

  // Filter nodes for the selected stream
  const rootNode = nodes.find((n) => n.id === 'root')!;
  const streamLevel1Node = nodes.find(
    (n) => n.level === 1 && n.streamId === activeStream.id
  );
  const pathNodes = nodes.filter(
    (n) => n.level === 2 && n.streamId === activeStream.id
  );

  const getLeafNodesForPath = (pathId: string) => {
    return nodes.filter((n) => n.level === 3 && n.parentId === pathId);
  };

  return (
    <div className="space-y-8 my-6">
      
      {/* DESKTOP VIEW: Connected Tree Layout (md and up) */}
      <div className="hidden md:block space-y-8">
        
        {/* Level 0 -> Level 1 Connection Bar */}
        <div className="flex items-center justify-center gap-4 p-4 bg-[#FFFBF3] rounded-2xl border border-[#E8DCC8] shadow-xs">
          <div className="text-center bg-[#FDF6EC] px-4 py-2 rounded-xl border border-[#E8DCC8]">
            <span className="text-[10px] font-bold text-[#8A7A6D] uppercase block">Start</span>
            <span className="text-xs font-bold text-[#3A2E27]">Class 10th Completion</span>
          </div>

          <ArrowRight className="w-5 h-5 text-[#E4753A]" />

          <div 
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white shadow-xs"
            style={{ backgroundColor: activeStream.color }}
          >
            <span>{activeStream.icon}</span>
            <span>{activeStream.title}</span>
          </div>
        </div>

        {/* Level 2 & Level 3 Node Branches */}
        <div className="space-y-6">
          {pathNodes.map((pathNode) => {
            const leafNodes = getLeafNodesForPath(pathNode.id);
            const pathStatus = progressState[pathNode.id] || 'not-started';

            return (
              <div 
                key={pathNode.id}
                className="relative bg-[#FFFBF3] rounded-2xl p-5 border border-[#E8DCC8] shadow-xs space-y-4"
              >
                {/* Level 2 Header Box */}
                <div className="flex items-start justify-between gap-4 border-b border-[#E8DCC8]/60 pb-3">
                  <div className="flex items-center gap-3">
                    <span 
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ backgroundColor: activeStream.color }}
                    />
                    <div>
                      <h3 className="text-base font-extrabold text-[#3A2E27]">
                        {pathNode.title}
                      </h3>
                      <p className="text-xs text-[#8A7A6D] mt-0.5">
                        {pathNode.description}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectNode(pathNode)}
                    className="px-3 py-1.5 bg-[#FDF6EC] text-[#3A2E27] text-xs font-bold rounded-xl border border-[#E8DCC8] hover:bg-[#E4753A] hover:text-white transition-all shrink-0"
                  >
                    View Pathway Details
                  </button>
                </div>

                {/* Level 3 Leaf Nodes (Connected Grid) */}
                {leafNodes.length > 0 ? (
                  <div className="pl-4 border-l-2 border-[#E8DCC8] space-y-3 pt-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#8A7A6D] uppercase tracking-wider mb-2">
                      <CornerDownRight className="w-3.5 h-3.5 text-[#E4753A]" />
                      <span>Exams, Certifications & Entry Points:</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {leafNodes.map((leafNode) => (
                        <RoadmapNodeCard
                          key={leafNode.id}
                          node={leafNode}
                          status={progressState[leafNode.id] || 'not-started'}
                          onStatusChange={onStatusChange}
                          onSelectNode={onSelectNode}
                          isLeaf={true}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="p-3 bg-[#FDF6EC] rounded-xl text-xs text-[#8A7A6D] italic">
                    Direct degree admission based on Class 12 board marks or institute entrance.
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>


      {/* MOBILE VIEW: Vertical Accordion / Stacked List (below md) */}
      <div className="md:hidden space-y-4">
        
        {/* Stream Banner Indicator */}
        <div 
          className="p-3.5 rounded-2xl text-white font-bold text-xs flex items-center justify-between shadow-xs"
          style={{ backgroundColor: activeStream.color }}
        >
          <div className="flex items-center gap-2">
            <span className="text-base">{activeStream.icon}</span>
            <span>{activeStream.title} Roadmap</span>
          </div>
          <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-md">
            {pathNodes.length} Paths
          </span>
        </div>

        {/* Accordion Stacked List */}
        <div className="space-y-3">
          {pathNodes.map((pathNode) => {
            const isOpen = openPaths[pathNode.id];
            const leafNodes = getLeafNodesForPath(pathNode.id);

            return (
              <div
                key={pathNode.id}
                className="bg-[#FFFBF3] rounded-2xl border border-[#E8DCC8] overflow-hidden shadow-xs"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => togglePath(pathNode.id)}
                  className="w-full p-4 flex items-center justify-between gap-3 text-left bg-[#FFFBF3] hover:bg-[#FDF6EC] transition-colors"
                >
                  <div className="space-y-0.5">
                    <span 
                      className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md mb-1"
                      style={{ backgroundColor: `${activeStream.color}20`, color: activeStream.color }}
                    >
                      Pathway
                    </span>
                    <h4 className="text-sm font-bold text-[#3A2E27]">
                      {pathNode.title}
                    </h4>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs text-[#8A7A6D] font-medium">
                      {leafNodes.length} exams
                    </span>
                    {isOpen ? (
                      <ChevronDown className="w-5 h-5 text-[#E4753A]" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-[#8A7A6D]" />
                    )}
                  </div>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="p-4 pt-0 border-t border-[#E8DCC8]/60 bg-[#FDF6EC]/40 space-y-3">
                    <p className="text-xs text-[#8A7A6D] pt-2">
                      {pathNode.description}
                    </p>

                    <button
                      onClick={() => onSelectNode(pathNode)}
                      className="w-full py-2 bg-[#FFFBF3] text-[#E4753A] border border-[#E8DCC8] text-xs font-bold rounded-xl text-center hover:bg-[#E4753A] hover:text-white transition-all"
                    >
                      View Pathway Overview
                    </button>

                    {/* Leaf Exam Cards in Mobile View */}
                    {leafNodes.length > 0 && (
                      <div className="space-y-3 pt-2">
                        <span className="text-[11px] font-bold text-[#3A2E27] uppercase tracking-wider block">
                          Key Exams & Entry Points:
                        </span>
                        {leafNodes.map((leafNode) => (
                          <RoadmapNodeCard
                            key={leafNode.id}
                            node={leafNode}
                            status={progressState[leafNode.id] || 'not-started'}
                            onStatusChange={onStatusChange}
                            onSelectNode={onSelectNode}
                            isLeaf={true}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
};
