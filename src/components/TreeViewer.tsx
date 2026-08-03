import React, { useState } from 'react';
import { RoadmapNode, NodeStatus, StreamInfo, ResourceItem } from '../types';
import { STREAMS } from '../data/streamsData';
import { RESOURCES } from '../data/resourcesData';
import {
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Bookmark,
  Circle,
  ExternalLink,
  Award,
  GraduationCap,
  Calendar,
  BookOpen,
  Sparkles,
  Layers,
  ArrowRight,
  Maximize2
} from 'lucide-react';

interface TreeViewerProps {
  nodes: RoadmapNode[];
  activeStream: StreamInfo;
  progressState: Record<string, NodeStatus>;
  onStatusChange: (nodeId: string, status: NodeStatus) => void;
  onSelectNode: (node: RoadmapNode) => void;
  searchQuery?: string;
  onClearSearch?: () => void;
}

export const TreeViewer: React.FC<TreeViewerProps> = ({
  nodes,
  activeStream,
  progressState,
  onStatusChange,
  onSelectNode,
  searchQuery = '',
  onClearSearch,
}) => {
  // Set of expanded item IDs
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'pcm-eng': true,
    'pcb-medicine': true,
    'comm-accounting': true,
    'arts-law': true,
    'voc-polytechnic': true,
    'emg-tech': true,
    'exam-jee-main': true,
    'exam-neet-ug': true,
    'exam-ca-foundation': true,
    'exam-clat-ug': true,
  });

  const toggleExpand = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const isSearchActive = searchQuery.trim().length > 0;

  // Render Status Badge Pill
  const renderStatusBadge = (nodeId: string) => {
    const status = progressState[nodeId] || 'not-started';
    switch (status) {
      case 'explored':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-[#4CAF7D] text-white shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Explored
          </span>
        );
      case 'interested':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-[#F2A93B] text-white shadow-2xs">
            <Bookmark className="w-3.5 h-3.5 fill-current" />
            Interested
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#8A7A6D] bg-[#FDF6EC] px-2.5 py-1 rounded-lg border border-[#E8DCC8]">
            <Circle className="w-3 h-3 text-[#8A7A6D]" />
            Not Started
          </span>
        );
    }
  };

  // Render Single Expanded Exam / Pathway Overview Box
  const renderNodeDetail = (node: RoadmapNode) => {
    const status = progressState[node.id] || 'not-started';

    // Find resources matching this node or stream
    const matchingResources = RESOURCES.filter(
      (r) =>
        r.streamId === node.streamId &&
        (r.examName?.toLowerCase().includes(node.title.toLowerCase()) ||
         node.title.toLowerCase().includes(r.examName?.toLowerCase() || '___') ||
         (node.fullForm && r.examName?.toLowerCase().includes(node.fullForm.toLowerCase())))
    ).slice(0, 4);

    return (
      <div className="mt-4 p-4 sm:p-5 bg-[#FDF6EC] rounded-2xl border border-[#E8DCC8] space-y-5 animate-in fade-in duration-200 text-left">
        
        {/* Full Form / Subtitle */}
        {node.fullForm && (
          <div className="text-xs font-semibold text-[#E4753A] bg-[#E4753A]/10 px-3 py-1.5 rounded-xl border border-[#E4753A]/20 inline-block">
            Full Name: {node.fullForm}
          </div>
        )}

        {/* Description / Overview */}
        <div className="space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3A2E27] block">
            Detailed Overview
          </span>
          <p className="text-xs text-[#3A2E27] leading-relaxed">
            {node.description}
          </p>
        </div>

        {/* Eligibility & Exam Pattern Grid */}
        {(node.eligibility || node.examPattern) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {node.eligibility && (
              <div className="p-3 bg-[#FFFBF3] rounded-xl border border-[#E8DCC8] space-y-1">
                <span className="text-[11px] font-extrabold uppercase tracking-wide text-[#3A2E27] flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-[#E4753A]" /> Eligibility Rules
                </span>
                <p className="text-xs text-[#8A7A6D] leading-relaxed">
                  {node.eligibility}
                </p>
              </div>
            )}

            {node.examPattern && (
              <div className="p-3 bg-[#FFFBF3] rounded-xl border border-[#E8DCC8] space-y-1">
                <span className="text-[11px] font-extrabold uppercase tracking-wide text-[#3A2E27] flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#F2A93B]" /> Exam Pattern & Syllabus
                </span>
                <p className="text-xs text-[#8A7A6D] leading-relaxed">
                  {node.examPattern}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Career Scope / Opportunities */}
        {node.careerScope && (
          <div className="p-3.5 bg-[#FFFBF3] rounded-xl border border-[#E8DCC8] space-y-1">
            <span className="text-[11px] font-extrabold uppercase tracking-wide text-[#4CAF7D] flex items-center gap-1">
              <GraduationCap className="w-4 h-4" /> Career Scope & Salary Outcomes
            </span>
            <p className="text-xs text-[#3A2E27] leading-relaxed">
              {node.careerScope}
            </p>
          </div>
        )}

        {/* Interactive Progress Toggle Bar */}
        <div className="p-3.5 bg-[#FFFBF3] rounded-xl border border-[#E8DCC8] space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3A2E27] block">
            Update Progress on this Device:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={(e) => { e.stopPropagation(); onStatusChange(node.id, 'not-started'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                status === 'not-started'
                  ? 'bg-[#3A2E27] text-white'
                  : 'bg-[#FDF6EC] text-[#3A2E27] border border-[#E8DCC8] hover:bg-[#E8DCC8]/40'
              }`}
            >
              <Circle className="w-3.5 h-3.5" />
              <span>Not Started</span>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); onStatusChange(node.id, 'interested'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                status === 'interested'
                  ? 'bg-[#F2A93B] text-white'
                  : 'bg-[#FDF6EC] text-[#3A2E27] border border-[#E8DCC8] hover:bg-[#E8DCC8]/40'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 fill-current" />
              <span>Mark Interested ⭐</span>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); onStatusChange(node.id, 'explored'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                status === 'explored'
                  ? 'bg-[#4CAF7D] text-white'
                  : 'bg-[#FDF6EC] text-[#3A2E27] border border-[#E8DCC8] hover:bg-[#E8DCC8]/40'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Mark Explored ✅</span>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); onSelectNode(node); }}
              className="ml-auto px-3 py-1.5 bg-[#E4753A] text-white text-xs font-bold rounded-xl hover:bg-[#d26229] transition-all flex items-center gap-1"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Full Drawer View</span>
            </button>
          </div>
        </div>

        {/* Curated Resource Links */}
        {matchingResources.length > 0 && (
          <div className="space-y-2 pt-1 border-t border-[#E8DCC8]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3A2E27] flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-[#E4753A]" /> Direct Learning Links & Portals:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {matchingResources.map((res) => (
                <a
                  key={res.id}
                  href={res.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2.5 bg-[#FFFBF3] rounded-xl border border-[#E8DCC8] hover:border-[#E4753A] transition-all flex items-start justify-between gap-2 group"
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#E4753A] block">{res.provider || res.type}</span>
                    <h5 className="text-xs font-bold text-[#3A2E27] group-hover:text-[#E4753A] line-clamp-1">{res.title}</h5>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8A7A6D] group-hover:text-[#E4753A] shrink-0 mt-0.5" />
                </a>
              ))}
            </div>
          </div>
        )}

      </div>
    );
  };

  // IF SEARCH IS ACTIVE
  if (isSearchActive) {
    const searchResults = nodes.filter((n) => n.id !== 'root' && n.level > 0);

    return (
      <div className="space-y-4">
        {/* Search Results Summary Header */}
        <div className="p-4 bg-[#FFFBF3] rounded-2xl border border-[#E8DCC8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-bold text-[#3A2E27]">
              Search Results for <span className="text-[#E4753A]">"{searchQuery}"</span>
            </h3>
            <p className="text-xs text-[#8A7A6D]">
              Found {searchResults.length} matching exams, degrees & pathways across all streams. Click any item to expand details.
            </p>
          </div>

          {onClearSearch && (
            <button
              onClick={onClearSearch}
              className="px-3 py-1.5 bg-[#FDF6EC] text-[#E4753A] border border-[#E8DCC8] rounded-xl text-xs font-bold hover:bg-[#E4753A] hover:text-white transition-all shrink-0"
            >
              Clear Search
            </button>
          )}
        </div>

        {/* Search Results Expandable List */}
        {searchResults.length === 0 ? (
          <div className="p-8 bg-[#FFFBF3] rounded-2xl border border-dashed border-[#E8DCC8] text-center space-y-3">
            <Sparkles className="w-8 h-8 text-[#8A7A6D] mx-auto opacity-40" />
            <h4 className="text-sm font-bold text-[#3A2E27]">No matching exams found</h4>
            <p className="text-xs text-[#8A7A6D]">
              Try searching for common terms like "JEE", "NEET", "CA", "Law", "CLAT", "CUET", "Polytechnic", or "Design".
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {searchResults.map((node) => {
              const isExpanded = expandedIds[node.id];
              const streamMeta = STREAMS.find((s) => s.id === node.streamId);

              return (
                <div
                  key={node.id}
                  className="bg-[#FFFBF3] rounded-2xl border border-[#E8DCC8] p-4 shadow-xs hover:border-[#E4753A] transition-all cursor-pointer"
                  onClick={() => toggleExpand(node.id)}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {/* Stream Badge Icon */}
                      {streamMeta && (
                        <span className="text-lg p-2 bg-[#FDF6EC] rounded-xl border border-[#E8DCC8]">
                          {streamMeta.icon}
                        </span>
                      )}

                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-extrabold text-[#3A2E27]">
                            {node.title}
                          </h4>
                          {streamMeta && (
                            <span
                              className="text-[10px] font-extrabold px-2 py-0.5 rounded-md border"
                              style={{
                                backgroundColor: `${streamMeta.color}15`,
                                color: streamMeta.color,
                                borderColor: `${streamMeta.color}30`,
                              }}
                            >
                              {streamMeta.title}
                            </span>
                          )}
                        </div>
                        {node.fullForm && (
                          <p className="text-xs text-[#8A7A6D] font-medium mt-0.5">
                            {node.fullForm}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {renderStatusBadge(node.id)}
                      {isExpanded ? (
                        <ChevronDown className="w-5 h-5 text-[#E4753A]" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-[#8A7A6D]" />
                      )}
                    </div>
                  </div>

                  {/* Inline Expanded Detail */}
                  {isExpanded && renderNodeDetail(node)}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // NORMAL STREAM EXPLORE EXPANDABLE LIST (PCM, PCB, COMMERCE, ARTS, VOCATIONAL, EMERGING)
  const pathNodes = nodes.filter(
    (n) => n.level === 2 && n.streamId === activeStream.id
  );

  return (
    <div className="space-y-6">
      
      {/* Active Stream Header Banner */}
      <div 
        className="p-5 rounded-3xl text-white shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        style={{ backgroundColor: activeStream.color }}
      >
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{activeStream.icon}</span>
            <h2 className="text-xl sm:text-2xl font-extrabold">
              {activeStream.title} Career Pathways & Exams
            </h2>
          </div>
          <p className="text-xs text-white/90">
            {activeStream.subtitle} — Click any pathway or exam below to expand its full detailed overview.
          </p>
        </div>

        <div className="px-3 py-1 bg-white/20 rounded-xl text-xs font-extrabold shrink-0">
          {pathNodes.length} Pathways Included
        </div>
      </div>

      {/* Expandable Pathway List */}
      <div className="space-y-4">
        {pathNodes.map((pathNode) => {
          const isPathExpanded = expandedIds[pathNode.id] ?? true;
          const leafExams = nodes.filter(
            (n) => n.level === 3 && n.parentId === pathNode.id
          );

          return (
            <div
              key={pathNode.id}
              className="bg-[#FFFBF3] rounded-3xl border border-[#E8DCC8] shadow-xs overflow-hidden transition-all"
            >
              {/* Pathway Header Bar (Clickable) */}
              <div
                onClick={() => toggleExpand(pathNode.id)}
                className="p-5 bg-[#FFFBF3] hover:bg-[#FDF6EC] cursor-pointer flex items-start justify-between gap-4 transition-colors border-b border-[#E8DCC8]/60"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ backgroundColor: activeStream.color }}
                    />
                    <span
                      className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md"
                      style={{ backgroundColor: `${activeStream.color}20`, color: activeStream.color }}
                    >
                      Pathway Domain
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-[#3A2E27]">
                    {pathNode.title}
                  </h3>

                  <p className="text-xs text-[#8A7A6D]">
                    {pathNode.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-center">
                  <span className="text-xs font-bold text-[#8A7A6D] hidden sm:inline">
                    {leafExams.length} Exams / Entry Points
                  </span>
                  {isPathExpanded ? (
                    <ChevronDown className="w-6 h-6 text-[#E4753A]" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-[#8A7A6D]" />
                  )}
                </div>
              </div>

              {/* Pathway Content (If Expanded) */}
              {isPathExpanded && (
                <div className="p-5 bg-[#FDF6EC]/40 space-y-4">
                  
                  {/* Career Scope Overview for Pathway */}
                  {pathNode.careerScope && (
                    <div className="p-3.5 bg-[#FFFBF3] rounded-2xl border border-[#E8DCC8] text-xs space-y-1">
                      <span className="font-extrabold text-[#E4753A] uppercase tracking-wider block">
                        Industry & Career Opportunities:
                      </span>
                      <p className="text-[#3A2E27] leading-relaxed">
                        {pathNode.careerScope}
                      </p>
                    </div>
                  )}

                  {/* Leaf Exams List (Sub-Accordion List) */}
                  <div className="space-y-3">
                    <span className="text-xs font-extrabold text-[#3A2E27] uppercase tracking-wider block">
                      Key Entrance Exams, Degrees & Certifications:
                    </span>

                    {leafExams.length === 0 ? (
                      <div className="p-3 bg-[#FFFBF3] rounded-xl text-xs text-[#8A7A6D] italic border border-[#E8DCC8]">
                        Direct merit admission based on Class 12 board marks or university counseling.
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {leafExams.map((leafNode) => {
                          const isLeafExpanded = expandedIds[leafNode.id];

                          return (
                            <div
                              key={leafNode.id}
                              className="bg-[#FFFBF3] rounded-2xl border border-[#E8DCC8] p-4 hover:border-[#E4753A] transition-all cursor-pointer shadow-2xs"
                              onClick={(e) => toggleExpand(leafNode.id, e)}
                            >
                              <div className="flex items-center justify-between gap-3">
                                <div className="space-y-0.5">
                                  <div className="flex items-center gap-2">
                                    <h4 className="text-sm font-extrabold text-[#3A2E27]">
                                      {leafNode.title}
                                    </h4>
                                  </div>
                                  {leafNode.fullForm && (
                                    <p className="text-xs text-[#8A7A6D] font-medium">
                                      {leafNode.fullForm}
                                    </p>
                                  )}
                                </div>

                                <div className="flex items-center gap-2 shrink-0">
                                  {renderStatusBadge(leafNode.id)}
                                  {isLeafExpanded ? (
                                    <ChevronDown className="w-5 h-5 text-[#E4753A]" />
                                  ) : (
                                    <ChevronRight className="w-5 h-5 text-[#8A7A6D]" />
                                  )}
                                </div>
                              </div>

                              {/* Detailed Inline Overview */}
                              {isLeafExpanded && renderNodeDetail(leafNode)}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
