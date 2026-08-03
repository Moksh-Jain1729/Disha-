import React from 'react';
import { STREAMS } from '../data/streamsData';
import { Compass, BrainCircuit, BookOpen, Sparkles, ArrowRight, ShieldAlert, CheckCircle2, HelpCircle } from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: string, streamId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
}) => {
  return (
    <div className="space-y-12 py-4">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#FFFBF3] to-[#FDF6EC] border border-[#E8DCC8] p-6 sm:p-10 md:p-12 shadow-xs">
        
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4753A]/10 text-[#E4753A] border border-[#E4753A]/20 text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>Empowering Class 10th Students, Parents & Counselors</span>
          </div>

          {/* Main Display Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#3A2E27] tracking-tight leading-tight">
            Life After 10th Grade? <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E4753A] to-[#F2A93B]">
              Map Your Ideal Career Path
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-[#8A7A6D] leading-relaxed max-w-2xl mx-auto">
            Warm, approachable visual roadmaps and a 12-question aptitude quiz built to help Indian SSC, CBSE & ICSE students explore streams, polytechnic diplomas, and competitive exams with confidence.
          </p>

          {/* CTA Button Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('quiz')}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#E4753A] text-white text-sm font-extrabold rounded-2xl shadow-md hover:bg-[#d26229] hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <BrainCircuit className="w-5 h-5" />
              <span>Take Aptitude Quiz (3 Mins)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('roadmaps')}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#FFFBF3] text-[#3A2E27] text-sm font-bold rounded-2xl border border-[#E8DCC8] hover:bg-[#E8DCC8]/40 hover:border-[#E4753A] transition-all flex items-center justify-center gap-2"
            >
              <BookOpen className="w-5 h-5 text-[#E4753A]" />
              <span>Explore All 6 Streams</span>
            </button>
          </div>

          {/* Honest Static Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-[#E8DCC8]/70 text-left">
            <div className="p-3 bg-[#FFFBF3] rounded-2xl border border-[#E8DCC8]/80">
              <span className="text-xl font-extrabold text-[#E4753A] block">6 Streams</span>
              <span className="text-xs text-[#8A7A6D]">PCM, PCB, Comm, Arts, Voc, New-Age</span>
            </div>
            <div className="p-3 bg-[#FFFBF3] rounded-2xl border border-[#E8DCC8]/80">
              <span className="text-xl font-extrabold text-[#F2A93B] block">100+ Exams</span>
              <span className="text-xs text-[#8A7A6D]">JEE, NEET, CA, CLAT, ITI & More</span>
            </div>
            <div className="p-3 bg-[#FFFBF3] rounded-2xl border border-[#E8DCC8]/80">
              <span className="text-xl font-extrabold text-[#4CAF7D] block">12 Questions</span>
              <span className="text-xs text-[#8A7A6D]">Stream Matching Engine</span>
            </div>
            <div className="p-3 bg-[#FFFBF3] rounded-2xl border border-[#E8DCC8]/80">
              <span className="text-xl font-extrabold text-[#8B6BB8] block">100% Free</span>
              <span className="text-xs text-[#8A7A6D]">No Auth, Saved on Device</span>
            </div>
          </div>

        </div>
      </section>

      {/* MINI INTERACTIVE FLOW PREVIEW */}
      <section className="bg-[#FFFBF3] rounded-3xl p-6 sm:p-8 border border-[#E8DCC8] shadow-xs space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E4753A]">
            How Navigation Works
          </span>
          <h2 className="text-2xl font-extrabold text-[#3A2E27]">
            From 10th Completion to Career Goal
          </h2>
          <p className="text-xs text-[#8A7A6D]">
            A clean 3-level progression that breaks down overwhelming options into simple, manageable steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
          
          {/* Step 1 */}
          <div className="p-5 bg-[#FDF6EC] rounded-2xl border border-[#E8DCC8] space-y-2 relative">
            <span className="w-7 h-7 rounded-full bg-[#E4753A] text-white font-extrabold text-xs flex items-center justify-center">
              1
            </span>
            <h3 className="text-sm font-bold text-[#3A2E27]">
              Level 0: Class 10 Board
            </h3>
            <p className="text-xs text-[#8A7A6D]">
              Select your board (SSC/CBSE/ICSE) and evaluate your personal strengths, interests, and budget.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-5 bg-[#FDF6EC] rounded-2xl border border-[#E8DCC8] space-y-2 relative">
            <span className="w-7 h-7 rounded-full bg-[#F2A93B] text-white font-extrabold text-xs flex items-center justify-center">
              2
            </span>
            <h3 className="text-sm font-bold text-[#3A2E27]">
              Level 1 & 2: Choose Stream & Path
            </h3>
            <p className="text-xs text-[#8A7A6D]">
              Explore 6 canonical streams and sub-pathways like Engineering, Medicine, CA, Design, or Polytechnic.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-5 bg-[#FDF6EC] rounded-2xl border border-[#E8DCC8] space-y-2 relative">
            <span className="w-7 h-7 rounded-full bg-[#4CAF7D] text-white font-extrabold text-xs flex items-center justify-center">
              3
            </span>
            <h3 className="text-sm font-bold text-[#3A2E27]">
              Level 3: Entrance Exam & Degree
            </h3>
            <p className="text-xs text-[#8A7A6D]">
              Inspect syllabus patterns, eligibility rules, and verified study channels for JEE, NEET, CA, CLAT, ITI.
            </p>
          </div>

        </div>
      </section>

      {/* 6-STREAM GRID CARDS */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-2xl font-extrabold text-[#3A2E27]">
              Explore 6 Academic Streams
            </h2>
            <p className="text-xs text-[#8A7A6D]">
              Click any stream to view its full interactive roadmap and entry requirements.
            </p>
          </div>

          <button
            onClick={() => onNavigate('roadmaps')}
            className="text-xs font-bold text-[#E4753A] hover:underline flex items-center gap-1 self-start sm:self-auto"
          >
            <span>View All Stream Roadmaps</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STREAMS.map((stream) => (
            <div
              key={stream.id}
              className="bg-[#FFFBF3] rounded-2xl p-6 border border-[#E8DCC8] shadow-xs hover:shadow-md hover:border-[#E4753A] transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{stream.icon}</span>
                    <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-lg border border-black/10" style={{ backgroundColor: `${stream.color}20`, color: stream.color }}>
                      {stream.badgeText}
                    </span>
                  </div>
                  {stream.secondaryIcon && (
                    <span className="text-lg opacity-70">{stream.secondaryIcon}</span>
                  )}
                </div>

                {/* Stream Title & Tagline */}
                <div>
                  <h3 className="text-lg font-extrabold text-[#3A2E27] group-hover:text-[#E4753A] transition-colors">
                    {stream.title}
                  </h3>
                  <p className="text-xs text-[#8A7A6D] font-medium mt-0.5">
                    {stream.subtitle}
                  </p>
                </div>

                <p className="text-xs text-[#3A2E27] leading-relaxed bg-[#FDF6EC] p-3 rounded-xl border border-[#E8DCC8]">
                  {stream.tagline}
                </p>

                {/* Popular Careers */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-[#8A7A6D] uppercase tracking-wider block">
                    Popular Pathways Included:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {stream.popularCareers.map((car, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold bg-[#FDF6EC] px-2 py-0.5 rounded-md border border-[#E8DCC8] text-[#3A2E27]"
                      >
                        {car}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <button
                onClick={() => onNavigate('roadmaps', stream.id)}
                className="mt-6 w-full py-2.5 px-4 bg-[#FDF6EC] text-[#3A2E27] text-xs font-bold rounded-xl border border-[#E8DCC8] group-hover:bg-[#E4753A] group-hover:text-white group-hover:border-[#E4753A] transition-all flex items-center justify-center gap-1.5"
              >
                <span>View {stream.title} Roadmap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK QUIZ CTA BANNER */}
      <section className="bg-gradient-to-r from-[#E4753A] to-[#F2A93B] rounded-3xl p-8 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 rounded-full text-xs font-bold">
            <BrainCircuit className="w-4 h-4" />
            <span>Unsure which stream fits your personality?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Take the 12-Question Aptitude Quiz
          </h2>
          <p className="text-xs sm:text-sm text-white/90 max-w-xl">
            Get personalized percentage scores across all 6 streams based on how you solve problems, work in teams, and learn best.
          </p>
        </div>

        <button
          onClick={() => onNavigate('quiz')}
          className="px-6 py-3.5 bg-white text-[#3A2E27] text-sm font-extrabold rounded-2xl shadow-lg hover:bg-[#FFFBF3] hover:scale-105 transition-all shrink-0"
        >
          Start Quiz Now →
        </button>
      </section>

      {/* VISIBLE DISCLAIMER */}
      <section className="p-4 bg-[#FFFBF3] border border-[#E8DCC8] rounded-2xl text-xs text-[#8A7A6D] flex items-start gap-3">
        <HelpCircle className="w-5 h-5 text-[#E4753A] shrink-0 mt-0.5" />
        <div>
          <strong className="text-[#3A2E27]">Student Prototype Disclaimer:</strong> This platform is designed as an educational exploration tool. Always verify exam dates, eligibility, and state board rules with your school principal or counselor.
        </div>
      </section>

    </div>
  );
};
