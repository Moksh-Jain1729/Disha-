import React from 'react';
import { Compass, ShieldAlert, Heart, GraduationCap, MapPin } from 'lucide-react';
import { StreamId } from '../types';

interface FooterProps {
  onNavigate: (tab: string, streamId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const streamsList: { id: StreamId; name: string }[] = [
    { id: 'pcm', name: 'Science: PCM' },
    { id: 'pcb', name: 'Science: PCB' },
    { id: 'commerce', name: 'Commerce' },
    { id: 'arts', name: 'Arts & Humanities' },
    { id: 'vocational', name: 'Vocational & Diploma' },
    { id: 'emerging', name: 'Emerging & Cross-Stream' },
  ];

  return (
    <footer className="bg-[#FFFBF3] border-t border-[#E8DCC8] pt-12 pb-8 mt-16 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#E8DCC8]">
          
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#E4753A] to-[#F2A93B] flex items-center justify-center text-white font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-[#3A2E27]">Disha</span>
            </div>
            <p className="text-xs text-[#8A7A6D] leading-relaxed">
              Warm, approachable post-10th roadmaps helping Indian students explore streams, exams, and career pathways without stress.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#E4753A]">
              <GraduationCap className="w-4 h-4" />
              <span>Designed for 10th-grade students & parents</span>
            </div>
          </div>

          {/* Quick Stream Navigation */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#3A2E27] mb-3">
              Explore 6 Streams
            </h4>
            <ul className="space-y-2 text-xs text-[#8A7A6D]">
              {streamsList.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onNavigate('roadmaps', s.id)}
                    className="hover:text-[#E4753A] hover:underline transition-colors text-left"
                  >
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Tools */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#3A2E27] mb-3">
              Platform Features
            </h4>
            <ul className="space-y-2 text-xs text-[#8A7A6D]">
              <li>
                <button onClick={() => onNavigate('quiz')} className="hover:text-[#E4753A] transition-colors">
                  12-Question Aptitude Quiz
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-[#E4753A] transition-colors">
                  Exams & Resources Hub
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('roadmaps')} className="hover:text-[#E4753A] transition-colors">
                  Interactive Roadmap Trees
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#E4753A] transition-colors">
                  About Project & Disclaimers
                </button>
              </li>
            </ul>
          </div>

          {/* Honest Prototype Note */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#3A2E27] mb-3">
              Prototype Highlights
            </h4>
            <div className="bg-[#FDF6EC] p-3 rounded-xl border border-[#E8DCC8] text-xs text-[#8A7A6D] space-y-1.5">
              <div className="flex items-center justify-between font-semibold text-[#3A2E27]">
                <span>Streams Mapped:</span>
                <span className="text-[#E4753A]">6 Main Streams</span>
              </div>
              <div className="flex items-center justify-between font-semibold text-[#3A2E27]">
                <span>Exams Covered:</span>
                <span className="text-[#E4753A]">100+ Paths</span>
              </div>
              <div className="flex items-center justify-between font-semibold text-[#3A2E27]">
                <span>Data Storage:</span>
                <span className="text-[#4CAF7D]">100% Local Device</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Student Project Disclaimer Box */}
        <div className="mt-8 p-4 md:p-5 bg-[#FDF6EC] border border-[#E8DCC8] rounded-2xl">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#E4753A] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#E4753A]">
                Educational Student Project Disclaimer
              </h5>
              <p className="text-xs text-[#8A7A6D] leading-relaxed">
                This is a student project built for educational exploration. Stream-switching rules, exam patterns, and eligibility criteria vary by state/board and change often — always confirm with your school counselor or the official exam website before making a decision.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A7A6D] gap-2 pt-4 border-t border-[#E8DCC8]/50">
          <p>© 2026 Disha Project — Educational Exploration Tool for Indian Students</p>
          <div className="flex items-center gap-1">
            <span>Built with care</span>
            <Heart className="w-3.5 h-3.5 text-[#E4753A] fill-current" />
            <span>for Class 10 graduates across India</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
