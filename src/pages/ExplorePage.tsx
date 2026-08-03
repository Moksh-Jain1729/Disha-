import React, { useState, useEffect } from 'react';
import { Board, StreamId, RoadmapNode, NodeStatus } from '../types';
import { STREAMS } from '../data/streamsData';
import { ROADMAP_NODES } from '../data/roadmapData';
import { RESOURCES } from '../data/resourcesData';
import { BoardBanner } from '../components/BoardBanner';
import { BenefitBubble } from '../components/BenefitBubble';
import { TreeViewer } from '../components/TreeViewer';
import { NodeDetailDrawer } from '../components/NodeDetailDrawer';
import { Sparkles, HardDrive, Filter, Search, RotateCcw } from 'lucide-react';

interface ExplorePageProps {
  initialStreamId?: string;
  board: Board;
  onSelectBoard: (board: Board) => void;
  progressState: Record<string, NodeStatus>;
  onStatusChange: (nodeId: string, status: NodeStatus) => void;
  onResetProgress: () => void;
}

export const ExplorePage: React.FC<ExplorePageProps> = ({
  initialStreamId,
  board,
  onSelectBoard,
  progressState,
  onStatusChange,
  onResetProgress,
}) => {
  const [selectedStreamId, setSelectedStreamId] = useState<StreamId>(
    (initialStreamId as StreamId) || 'pcm'
  );
  const [selectedNode, setSelectedNode] = useState<RoadmapNode | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Update selected stream if prop changes
  useEffect(() => {
    if (initialStreamId && ['pcm', 'pcb', 'commerce', 'arts', 'vocational', 'emerging'].includes(initialStreamId)) {
      setSelectedStreamId(initialStreamId as StreamId);
    }
  }, [initialStreamId]);

  const currentStream = STREAMS.find((s) => s.id === selectedStreamId) || STREAMS[0];

  // Search filter across nodes
  const filteredNodes = searchQuery.trim()
    ? ROADMAP_NODES.filter(
        (n) =>
          n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          n.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          n.fullForm?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : ROADMAP_NODES;

  return (
    <div className="space-y-6 py-4">
      
      {/* PAGE HEADER */}
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{currentStream.icon}</span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E27]">
                Explore Stream Roadmaps
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-[#8A7A6D]">
              Interactive tree diagrams & mobile-friendly lists mapping post-10th paths, degrees, and competitive entrance exams.
            </p>
          </div>

          {/* Search Input Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#8A7A6D] absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search exam (JEE, NEET, CA)..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#FFFBF3] border border-[#E8DCC8] rounded-xl focus:outline-none focus:border-[#E4753A] text-[#3A2E27]"
            />
          </div>
        </div>
      </div>

      {/* STREAM SELECTOR TABS (6 STREAM PILLS) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {STREAMS.map((s) => {
          const isActive = s.id === selectedStreamId;
          return (
            <button
              key={s.id}
              onClick={() => setSelectedStreamId(s.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold shrink-0 transition-all border ${
                isActive
                  ? 'text-white shadow-xs'
                  : 'bg-[#FFFBF3] text-[#3A2E27] border-[#E8DCC8] hover:bg-[#E8DCC8]/40'
              }`}
              style={{
                backgroundColor: isActive ? s.color : undefined,
                borderColor: isActive ? s.color : undefined,
              }}
            >
              <span>{s.icon}</span>
              <span>{s.title}</span>
            </button>
          );
        })}
      </div>

      {/* BOARD BANNER */}
      <BoardBanner board={board} onSelectBoard={onSelectBoard} />

      {/* STREAM BENEFIT BUBBLE */}
      <BenefitBubble stream={currentStream} />

      {/* LOCAL STORAGE HONEST PROGRESS NOTICE */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 bg-[#FFFBF3] border border-[#E8DCC8] rounded-2xl text-xs text-[#8A7A6D]">
        <div className="flex items-center gap-2">
          <HardDrive className="w-4 h-4 text-[#E4753A] shrink-0" />
          <span>
            <strong>Device Storage:</strong> Your progress & explored nodes are saved on this browser only — it won't carry over if you switch phones or clear your browser data.
          </span>
        </div>

        <button
          onClick={onResetProgress}
          className="text-[11px] font-bold text-[#E4753A] hover:underline flex items-center gap-1 shrink-0 self-end sm:self-auto"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset Saved Progress</span>
        </button>
      </div>

      {/* TREE VIEWER (DUAL DESKTOP TREE + MOBILE ACCORDION) */}
      <TreeViewer
        nodes={filteredNodes}
        activeStream={currentStream}
        progressState={progressState}
        onStatusChange={onStatusChange}
        onSelectNode={(node) => setSelectedNode(node)}
      />

      {/* NODE DETAIL OVERLAY DRAWER */}
      <NodeDetailDrawer
        node={selectedNode}
        status={selectedNode ? progressState[selectedNode.id] || 'not-started' : 'not-started'}
        onStatusChange={onStatusChange}
        onClose={() => setSelectedNode(null)}
        allResources={RESOURCES}
      />

    </div>
  );
};
