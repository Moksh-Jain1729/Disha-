import React from 'react';
import { RoadmapNode, NodeStatus, ResourceItem } from '../types';
import { X, Calendar, CheckCircle2, Bookmark, Circle, ExternalLink, ShieldAlert, Sparkles, BookOpen, GraduationCap, Award } from 'lucide-react';

interface NodeDetailDrawerProps {
  node: RoadmapNode | null;
  status: NodeStatus;
  onStatusChange: (nodeId: string, status: NodeStatus) => void;
  onClose: () => void;
  allResources: ResourceItem[];
}

export const NodeDetailDrawer: React.FC<NodeDetailDrawerProps> = ({
  node,
  status,
  onStatusChange,
  onClose,
  allResources,
}) => {
  if (!node) return null;

  // Filter resources applicable to this node or exam
  const relevantResources = node.resources && node.resources.length > 0
    ? node.resources
    : allResources.filter(
        (r) =>
          r.streamId === node.streamId &&
          (r.examName?.toLowerCase().includes(node.title.toLowerCase()) ||
           node.title.toLowerCase().includes(r.examName?.toLowerCase() || '___'))
      );

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      
      {/* Backdrop click to dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Slide-over Drawer Panel */}
      <div className="relative w-full max-w-xl bg-[#FFFBF3] h-full shadow-2xl overflow-y-auto border-l border-[#E8DCC8] p-6 flex flex-col z-10 animate-in slide-in-from-right duration-300">
        
        {/* Top Close Button & Status Controls */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E8DCC8]">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8A7A6D]">
            Path & Exam Detail Drawer
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#FDF6EC] border border-[#E8DCC8] text-[#3A2E27] hover:bg-[#E4753A] hover:text-white transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-6 space-y-6 flex-1">
          
          {/* Header Title Block */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: node.accentColor }}
              />
              <span className="text-xs font-extrabold uppercase tracking-wide text-[#E4753A]">
                Level {node.level}: {node.level === 1 ? 'Stream' : node.level === 2 ? 'Path Domain' : 'Exam & Entrance'}
              </span>
            </div>

            <h2 className="text-2xl font-extrabold text-[#3A2E27] leading-tight">
              {node.title}
            </h2>

            {node.fullForm && (
              <p className="text-sm font-semibold text-[#8A7A6D]">
                {node.fullForm}
              </p>
            )}
          </div>

          {/* Interactive Status Selector Bar */}
          <div className="p-4 bg-[#FDF6EC] rounded-2xl border border-[#E8DCC8] space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#3A2E27] block">
              Mark Progress on this Device:
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => onStatusChange(node.id, 'not-started')}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  status === 'not-started'
                    ? 'bg-[#3A2E27] text-white shadow-xs'
                    : 'bg-[#FFFBF3] text-[#3A2E27] border border-[#E8DCC8] hover:bg-[#E8DCC8]/40'
                }`}
              >
                <Circle className="w-3.5 h-3.5" />
                Not Started
              </button>

              <button
                onClick={() => onStatusChange(node.id, 'interested')}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  status === 'interested'
                    ? 'bg-[#F2A93B] text-white shadow-xs'
                    : 'bg-[#FFFBF3] text-[#3A2E27] border border-[#E8DCC8] hover:bg-[#E8DCC8]/40'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5 fill-current" />
                Interested
              </button>

              <button
                onClick={() => onStatusChange(node.id, 'explored')}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  status === 'explored'
                    ? 'bg-[#4CAF7D] text-white shadow-xs'
                    : 'bg-[#FFFBF3] text-[#3A2E27] border border-[#E8DCC8] hover:bg-[#E8DCC8]/40'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                Explored
              </button>
            </div>
          </div>

          {/* Detailed Overview */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#3A2E27] uppercase tracking-wider">
              Overview & Scope
            </h3>
            <p className="text-sm text-[#3A2E27] leading-relaxed bg-[#FFFBF3]">
              {node.description}
            </p>

            {node.careerScope && (
              <div className="p-3.5 bg-[#FFF7ED] rounded-xl border border-[#FFEDD5] text-xs text-[#3A2E27] space-y-1">
                <span className="font-bold text-[#C2410C] flex items-center gap-1">
                  <GraduationCap className="w-4 h-4" /> Career Opportunities
                </span>
                <p className="leading-relaxed">{node.careerScope}</p>
              </div>
            )}
          </div>

          {/* Exam Details (If Level 3 or Exam) */}
          {(node.eligibility || node.examPattern || node.lastVerified) && (
            <div className="space-y-3 p-4 bg-[#FDF6EC] rounded-2xl border border-[#E8DCC8]">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#3A2E27] flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#E4753A]" />
                Exam Criteria & Structure
              </h3>

              {node.eligibility && (
                <div className="text-xs space-y-0.5">
                  <span className="font-bold text-[#3A2E27]">Eligibility:</span>
                  <p className="text-[#8A7A6D]">{node.eligibility}</p>
                </div>
              )}

              {node.examPattern && (
                <div className="text-xs space-y-0.5">
                  <span className="font-bold text-[#3A2E27]">Pattern & Subjects:</span>
                  <p className="text-[#8A7A6D]">{node.examPattern}</p>
                </div>
              )}

              {node.lastVerified && (
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#8A7A6D] pt-2 border-t border-[#E8DCC8]">
                  <Calendar className="w-3.5 h-3.5 text-[#E4753A]" />
                  <span>Info verified as of: <strong>{node.lastVerified}</strong></span>
                </div>
              )}
            </div>
          )}

          {/* Popular Resources Section */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-bold text-[#3A2E27] uppercase tracking-wider flex items-center justify-between">
              <span>Popular Learning Resources</span>
              <span className="text-xs font-normal text-[#8A7A6D]">
                ({relevantResources.length} available)
              </span>
            </h3>

            {relevantResources.length === 0 ? (
              <div className="p-6 text-center bg-[#FDF6EC] rounded-2xl border border-dashed border-[#E8DCC8]">
                <BookOpen className="w-8 h-8 text-[#8A7A6D] mx-auto mb-2 opacity-50" />
                <p className="text-xs font-bold text-[#3A2E27]">Resources coming soon</p>
                <p className="text-[11px] text-[#8A7A6D] mt-1">
                  We are actively curating verified channels and official links for this pathway.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {relevantResources.map((res) => (
                  <div
                    key={res.id}
                    className="p-4 bg-[#FDF6EC] rounded-2xl border border-[#E8DCC8] hover:border-[#E4753A] transition-all space-y-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        res.type === 'Watch' ? 'bg-red-100 text-red-700' :
                        res.type === 'Read' ? 'bg-blue-100 text-blue-700' :
                        'bg-emerald-100 text-emerald-700'
                      }`}>
                        {res.type}
                      </span>
                      <span className="text-[10px] font-semibold text-[#8A7A6D]">
                        {res.eligibility}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-[#3A2E27]">
                      {res.title}
                    </h4>

                    <p className="text-xs text-[#8A7A6D] leading-relaxed">
                      {res.description}
                    </p>

                    <div className="pt-2 flex items-center justify-between gap-2 border-t border-[#E8DCC8]/60">
                      <div className="flex flex-wrap gap-1">
                        {res.tags.slice(0, 3).map((t, idx) => (
                          <span key={idx} className="text-[9px] bg-[#FFFBF3] px-1.5 py-0.5 rounded-md border border-[#E8DCC8] text-[#8A7A6D]">
                            #{t}
                          </span>
                        ))}
                      </div>

                      <a
                        href={res.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#E4753A] hover:underline shrink-0"
                      >
                        <span>Open Resource</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Disclaimer under resources */}
            <div className="flex items-start gap-2 p-3 bg-[#FFFBF3] rounded-xl border border-[#E8DCC8] text-[11px] text-[#8A7A6D]">
              <ShieldAlert className="w-4 h-4 text-[#E4753A] shrink-0 mt-0.5" />
              <span>
                Not affiliated with these channels/communities — links provided for convenience, please verify current relevance.
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
