import React, { useState } from 'react';
import { StreamId } from '../types';
import { STREAMS } from '../data/streamsData';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { BrainCircuit, ArrowLeft, ArrowRight, RotateCcw, CheckCircle2, Sparkles, BookOpen, ShieldAlert, BarChart3 } from 'lucide-react';

interface QuizPageProps {
  onNavigate: (tab: string, streamId?: string) => void;
}

export const QuizPage: React.FC<QuizPageProps> = ({ onNavigate }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, StreamId>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const totalQuestions = QUIZ_QUESTIONS.length;

  const handleSelectOption = (streamId: StreamId) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: streamId,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setIsSubmitted(false);
  };

  // Compute Results
  const computeScores = () => {
    const counts: Record<StreamId, number> = {
      pcm: 0,
      pcb: 0,
      commerce: 0,
      arts: 0,
      vocational: 0,
      emerging: 0,
    };

    Object.values(userAnswers).forEach((streamVal) => {
      const streamId = streamVal as StreamId;
      if (counts[streamId] !== undefined) {
        counts[streamId] += 1;
      }
    });

    // Compute percentages
    const scores = STREAMS.map((s) => {
      const rawCount = counts[s.id] || 0;
      const percentage = Math.round((rawCount / totalQuestions) * 100);
      return {
        stream: s,
        count: rawCount,
        percentage,
      };
    }).sort((a, b) => b.count - a.count);

    const maxCount = scores[0].count;
    // Handle tie breaks (all streams matching maxCount)
    const primaryMatches = scores.filter((s) => s.count === maxCount && s.count > 0);
    
    // Secondary matches (next highest non-zero)
    const secondaryMatches = scores.filter(
      (s) => s.count < maxCount && s.count > 0
    );

    return { scores, primaryMatches, secondaryMatches };
  };

  const { scores, primaryMatches, secondaryMatches } = computeScores();

  return (
    <div className="max-w-4xl mx-auto py-6 space-y-8">
      
      {/* HEADER TITLE */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4753A]/10 text-[#E4753A] border border-[#E4753A]/20 text-xs font-bold">
          <BrainCircuit className="w-4 h-4" />
          <span>Aptitude & Stream Alignment Engine</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#3A2E27]">
          Class 10th Aptitude & Interest Quiz
        </h1>
        <p className="text-xs sm:text-sm text-[#8A7A6D]">
          12 quick scenario-based questions to discover which post-10th stream matches your learning style and goals.
        </p>
      </div>

      {!isSubmitted ? (
        /* QUIZ QUESTION STEPPER INTERFACE */
        <div className="bg-[#FFFBF3] rounded-3xl p-6 sm:p-8 border border-[#E8DCC8] shadow-xs space-y-6">
          
          {/* Progress Bar & Counter */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-[#8A7A6D]">
              <span>Question {currentQuestionIndex + 1} of {totalQuestions}</span>
              <span className="text-[#E4753A]">{Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100)}% Completed</span>
            </div>
            
            <div className="w-full bg-[#E8DCC8]/50 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#E4753A] to-[#F2A93B] h-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div className="space-y-1.5 py-2">
            <h2 className="text-lg sm:text-xl font-extrabold text-[#3A2E27]">
              {currentQuestion.id}. {currentQuestion.question}
            </h2>
            {currentQuestion.subtitle && (
              <p className="text-xs text-[#8A7A6D]">
                {currentQuestion.subtitle}
              </p>
            )}
          </div>

          {/* 6 Stream Options List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentQuestion.options.map((opt, idx) => {
              const isSelected = userAnswers[currentQuestion.id] === opt.streamId;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt.streamId)}
                  className={`p-4 rounded-2xl text-left border transition-all flex items-start gap-3 ${
                    isSelected
                      ? 'bg-[#E4753A]/10 border-[#E4753A] ring-2 ring-[#E4753A]/30 text-[#3A2E27]'
                      : 'bg-[#FDF6EC] border-[#E8DCC8] hover:border-[#E4753A] text-[#3A2E27]'
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-xl font-bold text-xs flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'bg-[#E4753A] text-white'
                        : 'bg-[#FFFBF3] text-[#3A2E27] border border-[#E8DCC8]'
                    }`}
                  >
                    {opt.label}
                  </span>

                  <div className="space-y-0.5">
                    <p className="text-xs font-bold leading-snug">
                      {opt.text}
                    </p>
                    {opt.subtext && (
                      <span className="text-[10px] text-[#8A7A6D] font-medium block">
                        {opt.subtext}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-[#E8DCC8]">
            <button
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                currentQuestionIndex === 0
                  ? 'opacity-40 cursor-not-allowed text-[#8A7A6D]'
                  : 'bg-[#FDF6EC] text-[#3A2E27] border border-[#E8DCC8] hover:bg-[#E8DCC8]/40'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={handleNext}
              disabled={!userAnswers[currentQuestion.id]}
              className={`flex items-center gap-2 px-6 py-2.5 text-xs font-extrabold rounded-xl transition-all shadow-xs ${
                !userAnswers[currentQuestion.id]
                  ? 'bg-[#E8DCC8] text-[#8A7A6D] cursor-not-allowed'
                  : 'bg-[#E4753A] text-white hover:bg-[#d26229] hover:scale-[1.02]'
              }`}
            >
              <span>{currentQuestionIndex === totalQuestions - 1 ? 'View Results' : 'Next Question'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      ) : (
        /* QUIZ RESULTS VIEW */
        <div className="space-y-8 animate-in fade-in duration-300">
          
          {/* PRIMARY MATCH CARD(S) - TIE-BREAK GRACEFUL HANDLING */}
          <div className="bg-[#FFFBF3] rounded-3xl p-6 sm:p-8 border border-[#E8DCC8] shadow-xs space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-[#E8DCC8]">
              <div className="flex items-center gap-2 text-[#E4753A]">
                <Sparkles className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Your Aptitude Quiz Results</span>
              </div>

              <button
                onClick={handleRestart}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#3A2E27] bg-[#FDF6EC] border border-[#E8DCC8] rounded-xl hover:bg-[#E8DCC8]/40 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>
            </div>

            {/* Primary Match Header */}
            <div>
              {primaryMatches.length > 1 ? (
                <div className="p-4 bg-[#FFF7ED] rounded-2xl border border-[#FFEDD5] mb-4">
                  <h3 className="text-sm font-bold text-[#C2410C] flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-4 h-4" />
                    Joint Primary Match Detected ({primaryMatches.length} Streams Tied)
                  </h3>
                  <p className="text-xs text-[#3A2E27]">
                    You have balanced aptitude across multiple fields! We recommend exploring both pathways to see which syllabus appeals more.
                  </p>
                </div>
              ) : null}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {primaryMatches.map(({ stream, percentage }) => (
                  <div
                    key={stream.id}
                    className="p-6 rounded-2xl border shadow-xs space-y-4"
                    style={{
                      backgroundColor: stream.bgLight,
                      borderColor: stream.color,
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-3xl">{stream.icon}</span>
                      <span
                        className="text-lg font-extrabold px-3 py-1 rounded-xl text-white shadow-2xs"
                        style={{ backgroundColor: stream.color }}
                      >
                        {percentage}% Match
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-extrabold text-[#3A2E27]">
                        {stream.title}
                      </h3>
                      <p className="text-xs text-[#8A7A6D] mt-0.5">
                        {stream.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-[#3A2E27] leading-relaxed">
                      {stream.tagline}
                    </p>

                    <button
                      onClick={() => onNavigate('roadmaps', stream.id)}
                      className="w-full py-2.5 bg-[#FFFBF3] text-[#3A2E27] border text-xs font-bold rounded-xl hover:bg-[#E4753A] hover:text-white transition-all flex items-center justify-center gap-1.5"
                      style={{ borderColor: stream.color }}
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>See {stream.title} Roadmap</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* BAR CHART SHOWING ALL 6 STREAM PERCENTAGES */}
            <div className="space-y-4 pt-4 border-t border-[#E8DCC8]">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#E4753A]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#3A2E27]">
                  All 6 Stream Scores Breakdown
                </h3>
              </div>

              <div className="space-y-3">
                {scores.map(({ stream, percentage, count }) => (
                  <div key={stream.id} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold text-[#3A2E27]">
                      <span className="flex items-center gap-1.5">
                        <span>{stream.icon}</span>
                        <span>{stream.title}</span>
                      </span>
                      <span>{percentage}% ({count}/12 answers)</span>
                    </div>

                    <div className="w-full bg-[#E8DCC8]/50 h-3 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${Math.max(percentage, 5)}%`,
                          backgroundColor: stream.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* QUIZ ADVISORY DISCLAIMER */}
            <div className="p-4 bg-[#FDF6EC] border border-[#E8DCC8] rounded-2xl flex items-start gap-3 text-xs text-[#8A7A6D]">
              <ShieldAlert className="w-5 h-5 text-[#E4753A] shrink-0 mt-0.5" />
              <div>
                <strong>Aptitude Quiz Disclaimer:</strong> This quiz is a starting point for exploration, not a decision — talk to a teacher, parent, or counselor too.
              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
