import React, { useState } from 'react';
import { Compass, ShieldAlert, GraduationCap, Heart, HelpCircle, ChevronDown, ChevronUp, BookOpen, HardDrive, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Can I switch streams after completing Class 12?',
      a: 'In most cases, Science (PCM/PCB) offers the highest flexibility to switch into Commerce, Arts, Design, or Law after 12th. Commerce students can easily switch into Arts, Law, or BBA, but switching into core Science or Engineering usually requires additional qualifying math courses. Arts students can readily pursue Law, Design, and BBA. Always double-check university admission guidelines.'
    },
    {
      q: 'How do CBSE, ICSE, and State Boards (SSC) differ for entrance exams?',
      a: 'CBSE syllabi align very closely with national entrance exams like JEE and NEET. ICSE offers broader depth and English proficiency which aids CLAT and humanities. State Boards (SSC) offer significant state-level seat quota benefits for local engineering and medical colleges. Choose based on your target entrance exam and study style.'
    },
    {
      q: 'Is a 3-year Polytechnic Diploma better than 11th and 12th Science?',
      a: 'A 3-year Polytechnic Diploma is ideal if you prefer hands-on technical skills and want early job readiness right after 10th. It also allows direct "Lateral Entry" into the 2nd year of B.Tech. 11th and 12th Science (PCM) is better if you aim directly for 4-year premier B.Tech degrees through JEE Main and Advanced.'
    },
    {
      q: 'How is my quiz result and progress saved on Disha?',
      a: 'Disha is a 100% front-end static prototype. All progress, board preferences, and explored career nodes are stored locally in your browser\'s localStorage. No user accounts, passwords, or personal tracking required.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-6 space-y-8">
      
      {/* HEADER TITLE */}
      <div className="text-center space-y-3">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E4753A] to-[#F2A93B] flex items-center justify-center text-white mx-auto shadow-md">
          <Compass className="w-7 h-7" />
        </div>
        <h1 className="text-3xl font-extrabold text-[#3A2E27]">
          About Disha: Life After 10th
        </h1>
        <p className="text-xs sm:text-sm text-[#8A7A6D] max-w-xl mx-auto leading-relaxed">
          An approachable, student-centered visual career roadmap tool designed specifically for Indian 10th-grade graduates, parents, and school counselors.
        </p>
      </div>

      {/* MANDATORY DISCLAIMER BOX */}
      <div className="p-6 bg-[#FFFBF3] border border-[#E8DCC8] rounded-3xl shadow-xs space-y-2">
        <div className="flex items-center gap-2 text-[#E4753A] font-bold text-sm">
          <ShieldAlert className="w-5 h-5" />
          <span>Educational Student Project Disclaimer</span>
        </div>
        <p className="text-xs sm:text-sm text-[#3A2E27] leading-relaxed">
          "This is a student project built for educational exploration. Stream-switching rules, exam patterns, and eligibility criteria vary by state/board and change often — always confirm with your school counselor or the official exam website before making a decision."
        </p>
      </div>

      {/* PROJECT SCOPE & PURPOSE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#FFFBF3] rounded-3xl p-6 border border-[#E8DCC8] space-y-3">
          <div className="flex items-center gap-2 text-[#E4753A] font-bold text-sm">
            <GraduationCap className="w-5 h-5" />
            <span>Target Audience</span>
          </div>
          <p className="text-xs text-[#8A7A6D] leading-relaxed">
            Built for 14–16 year old Indian students finishing Class 10 (SSC, CBSE, ICSE boards), alongside parents making stream decisions and academic counselors looking for intuitive visual aids.
          </p>
        </div>

        <div className="bg-[#FFFBF3] rounded-3xl p-6 border border-[#E8DCC8] space-y-3">
          <div className="flex items-center gap-2 text-[#4CAF7D] font-bold text-sm">
            <HardDrive className="w-5 h-5" />
            <span>Privacy & Storage</span>
          </div>
          <p className="text-xs text-[#8A7A6D] leading-relaxed">
            Fully static prototype. No backend server, no registration, no tracking scripts. Your board choice and explored roadmap nodes live on your local device.
          </p>
        </div>
      </div>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <div className="bg-[#FFFBF3] rounded-3xl p-6 sm:p-8 border border-[#E8DCC8] space-y-4">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-[#E4753A]" />
          <h2 className="text-lg font-bold text-[#3A2E27]">
            Frequently Asked Questions for Class 10th
          </h2>
        </div>

        <div className="space-y-3 pt-2">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-[#FDF6EC] rounded-2xl border border-[#E8DCC8] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 flex items-center justify-between text-left font-bold text-xs sm:text-sm text-[#3A2E27] hover:text-[#E4753A] transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-[#E4753A]" /> : <ChevronDown className="w-4 h-4 text-[#8A7A6D]" />}
                </button>

                {isOpen && (
                  <div className="p-4 pt-0 text-xs text-[#8A7A6D] leading-relaxed border-t border-[#E8DCC8]/50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* CREDITS FOOTNOTE */}
      <div className="text-center text-xs text-[#8A7A6D] space-y-1">
        <p>Disha v2 — Student Career Guidance Prototype</p>
        <p className="italic">Built with React, Vite, Tailwind CSS & Warm Terracotta Design System</p>
      </div>

    </div>
  );
};
