import React, { useState } from 'react';
import { StreamId, ResourceItem } from '../types';
import { STREAMS } from '../data/streamsData';
import { RESOURCES } from '../data/resourcesData';
import { Search, Library, ExternalLink, ShieldAlert, Filter, BookOpen, Tv, Compass } from 'lucide-react';

interface ResourcesPageProps {
  onNavigate: (tab: string, streamId?: string) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onNavigate }) => {
  const [selectedStreamFilter, setSelectedStreamFilter] = useState<string>('all');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterStreamPills = [
    { id: 'all', label: 'All 6 Streams', icon: '✨' },
    ...STREAMS.map((s) => ({ id: s.id, label: s.title, icon: s.icon })),
  ];

  const typePills = [
    { id: 'all', label: 'All Types' },
    { id: 'Watch', label: 'Watch (Video)' },
    { id: 'Read', label: 'Read (Docs/PDFs)' },
    { id: 'Try', label: 'Try (Portals/Forums)' },
  ];

  // Filter resources
  const filteredResources = RESOURCES.filter((res) => {
    const matchesStream =
      selectedStreamFilter === 'all' || res.streamId === selectedStreamFilter;
    const matchesType =
      selectedTypeFilter === 'all' || res.type === selectedTypeFilter;
    const matchesSearch =
      searchQuery.trim() === '' ||
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.examName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesStream && matchesType && matchesSearch;
  });

  return (
    <div className="space-y-8 py-4">
      
      {/* PAGE TITLE */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Library className="w-6 h-6 text-[#E4753A]" />
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E27]">
            Curated Study Resources & Exam Hub
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[#8A7A6D]">
          Verified YouTube channels, official board e-books, mock portals, and candidate guidance portals organized by stream.
        </p>
      </div>

      {/* SEARCH AND FILTER BAR */}
      <div className="bg-[#FFFBF3] p-5 rounded-3xl border border-[#E8DCC8] shadow-xs space-y-4">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-[#8A7A6D] absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by exam name, subject, or keyword (e.g., JEE, Biology, CA, CLAT, Figma)..."
            className="w-full pl-11 pr-4 py-3 bg-[#FDF6EC] border border-[#E8DCC8] rounded-2xl text-xs sm:text-sm text-[#3A2E27] focus:outline-none focus:border-[#E4753A]"
          />
        </div>

        {/* 6 Streams Filter Pills (+ All) */}
        <div className="space-y-2">
          <label className="text-[11px] font-bold uppercase tracking-wider text-[#8A7A6D] block">
            Filter by Stream:
          </label>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {filterStreamPills.map((pill) => (
              <button
                key={pill.id}
                onClick={() => setSelectedStreamFilter(pill.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all border ${
                  selectedStreamFilter === pill.id
                    ? 'bg-[#E4753A] text-white border-[#E4753A] shadow-xs'
                    : 'bg-[#FDF6EC] text-[#3A2E27] border-[#E8DCC8] hover:bg-[#E8DCC8]/40'
                }`}
              >
                <span>{pill.icon}</span>
                <span>{pill.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Type Filter Pills */}
        <div className="flex items-center gap-2 pt-1 border-t border-[#E8DCC8]/60">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A7A6D]">
            Type:
          </span>
          <div className="flex items-center gap-1.5 flex-wrap">
            {typePills.map((tp) => (
              <button
                key={tp.id}
                onClick={() => setSelectedTypeFilter(tp.id)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  selectedTypeFilter === tp.id
                    ? 'bg-[#3A2E27] text-white'
                    : 'bg-[#FDF6EC] text-[#3A2E27] border border-[#E8DCC8] hover:bg-[#E8DCC8]/40'
                }`}
              >
                {tp.label}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* RESOURCE CARDS GRID */}
      {filteredResources.length === 0 ? (
        /* EMPTY SEARCH STATE */
        <div className="bg-[#FFFBF3] rounded-3xl p-10 border border-dashed border-[#E8DCC8] text-center space-y-3 max-w-lg mx-auto">
          <Library className="w-10 h-10 text-[#8A7A6D] mx-auto opacity-50" />
          <h3 className="text-base font-bold text-[#3A2E27]">
            No resources match your search yet
          </h3>
          <p className="text-xs text-[#8A7A6D] leading-relaxed">
            Try searching for a different exam name (like JEE, NEET, CA, CLAT, ITI) or browse by stream using the filter buttons above.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedStreamFilter('all');
              setSelectedTypeFilter('all');
            }}
            className="px-4 py-2 bg-[#E4753A] text-white text-xs font-bold rounded-xl"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => {
            const streamMeta = STREAMS.find((s) => s.id === res.streamId);

            return (
              <div
                key={res.id}
                className="bg-[#FFFBF3] rounded-2xl p-5 border border-[#E8DCC8] shadow-xs hover:shadow-md hover:border-[#E4753A] transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  {/* Stream Badge & Type Tag */}
                  <div className="flex items-center justify-between gap-2">
                    {streamMeta && (
                      <span
                        className="inline-flex items-center gap-1 text-[10px] font-extrabold px-2.5 py-1 rounded-lg border"
                        style={{
                          backgroundColor: `${streamMeta.color}15`,
                          color: streamMeta.color,
                          borderColor: `${streamMeta.color}30`,
                        }}
                      >
                        <span>{streamMeta.icon}</span>
                        <span>{streamMeta.title}</span>
                      </span>
                    )}

                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                        res.type === 'Watch'
                          ? 'bg-red-100 text-red-700'
                          : res.type === 'Read'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-emerald-100 text-emerald-700'
                      }`}
                    >
                      {res.type}
                    </span>
                  </div>

                  {/* Title & Eligibility */}
                  <div>
                    <h3 className="text-sm font-bold text-[#3A2E27] leading-snug">
                      {res.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-[#8A7A6D] mt-0.5">
                      {res.provider ? `Provided by ${res.provider} • ` : ''}
                      {res.eligibility}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#8A7A6D] leading-relaxed bg-[#FDF6EC] p-3 rounded-xl border border-[#E8DCC8]">
                    {res.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {res.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] bg-[#FFFBF3] px-1.5 py-0.5 rounded-md border border-[#E8DCC8] text-[#8A7A6D]"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External Action Button */}
                <div className="pt-3 border-t border-[#E8DCC8]/60 flex items-center justify-between">
                  {res.examName && (
                    <span className="text-[10px] font-bold text-[#3A2E27]">
                      Exam: {res.examName}
                    </span>
                  )}

                  <a
                    href={res.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#E4753A] text-white text-xs font-bold rounded-xl hover:bg-[#d26229] transition-all"
                  >
                    <span>Official Link</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* DISCLAIMER UNDER RESOURCES */}
      <div className="p-4 bg-[#FFFBF3] border border-[#E8DCC8] rounded-2xl flex items-start gap-3 text-xs text-[#8A7A6D]">
        <ShieldAlert className="w-5 h-5 text-[#E4753A] shrink-0 mt-0.5" />
        <div>
          <strong>Resource Convenience Disclaimer:</strong> Not affiliated with these channels/communities — links provided for convenience, please verify current relevance and syllabus updates with official conducting bodies.
        </div>
      </div>

    </div>
  );
};
