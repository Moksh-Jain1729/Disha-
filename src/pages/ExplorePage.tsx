import React, { useState, useEffect } from 'react';
import { StreamId, RoadmapNode, NodeStatus } from '../types';
import { STREAMS } from '../data/streamsData';
import { ROADMAP_NODES } from '../data/roadmapData';
import { RESOURCES } from '../data/resourcesData';
import { BenefitBubble } from '../components/BenefitBubble';
import { TreeViewer } from '../components/TreeViewer';
import { NodeDetailDrawer } from '../components/NodeDetailDrawer';
import { Sparkles, HardDrive, Search, RotateCcw, X } from 'lucide-react';

interface ExplorePageProps {
  initialStreamId?: string;
  progressState: Record<string, NodeStatus>;
  onStatusChange: (nodeId: string, status: NodeStatus) => void;
  onResetProgress: () => void;
}

export const ExplorePage: React.FC<ExplorePageProps> = ({
  initialStreamId,
  progressState,
  onStatusChange,
  onResetProgress,
}) => {
  const [selectedStreamId, setSelectedStreamId] = useState<StreamId>(
    (initialStreamId as StreamId) || 'pcm'
  );
  const [selectedNode, setSelectedNode] = useState<RoadmapNode | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Update selected stream if initialStreamId prop changes
  useEffect(() => {
    if (
      initialStreamId &&
      ['pcm', 'pcb', 'commerce', 'arts', 'vocational', 'emerging'].includes(initialStreamId)
    ) {
      setSelectedStreamId(initialStreamId as StreamId);
    }
  }, [initialStreamId]);

  const currentStream = STREAMS.find((s) => s.id === selectedStreamId) || STREAMS[0];

  // Global Search filter across all nodes
  const filteredNodes = searchQuery.trim()
    ? ROADMAP_NODES.filter((n) => {
        const q = searchQuery.toLowerCase();
        return (
          n.title.toLowerCase().includes(q) ||
          n.description.toLowerCase().includes(q) ||
          n.fullForm?.toLowerCase().includes(q) ||
          n.eligibility?.toLowerCase().includes(q) ||
          n.examPattern?.toLowerCase().includes(q) ||
          n.careerScope?.toLowerCase().includes(q)
        );
      })
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
              Expandable career lists mapping post-10th paths, degrees, polytechnics, and competitive entrance exams in India.
            </p>
          </div>

          {/* Search Input Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#8A7A6D] absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search exam or keyword (JEE, NEET, CA, CLAT, ITI)..."
              className="w-full pl-9 pr-8 py-2 text-xs bg-[#FFFBF3] border border-[#E8DCC8] rounded-xl focus:outline-none focus:border-[#E4753A] text-[#3A2E27]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2.5 text-[#8A7A6D] hover:text-[#E4753A]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* STREAM SELECTOR TABS (6 STREAM PILLS) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {STREAMS.map((s) => {
          const isActive = s.id === selectedStreamId && !searchQuery.trim();
          return (
            <button
              key={s.id}
              onClick={() => {
                setSelectedStreamId(s.id);
                setSearchQuery(''); // clear search when switching streams manually
              }}
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

      {/* STREAM BENEFIT BUBBLE (Shown when no search is active) */}
      {!searchQuery.trim() && <BenefitBubble stream={currentStream} />}

      {/* LOCAL STORAGE PROGRESS NOTICE */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 bg-[#FFFBF3] border border-[#E8DCC8] rounded-2xl text-xs text-[#8A7A6D]">
        <div className="flex items-center gap-2">
          <HardDrive className="w-4 h-4 text-[#E4753A] shrink-0" />
          <span>
            <strong>Device Progress:</strong> Explored nodes & marks are saved locally on this browser.
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

      {/* STREAM EXPLORE EXPANDABLE LIST VIEWER */}
      <TreeViewer
        nodes={filteredNodes}
        activeStream={currentStream}
        progressState={progressState}
        onStatusChange={onStatusChange}
        onSelectNode={(node) => setSelectedNode(node)}
        searchQuery={searchQuery}
        onClearSearch={() => setSearchQuery('')}
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
