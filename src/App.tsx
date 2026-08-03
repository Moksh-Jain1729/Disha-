import React, { useState, useEffect } from 'react';
import { Board, StreamId, NodeStatus } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { QuizPage } from './pages/QuizPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { AboutPage } from './pages/AboutPage';

export default function App() {
  // Navigation State
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedStreamId, setSelectedStreamId] = useState<string>('pcm');

  // Board State (Persisted in localStorage)
  const [board, setBoard] = useState<Board>(() => {
    try {
      const saved = localStorage.getItem('disha_board');
      return (saved as Board) || 'CBSE';
    } catch {
      return 'CBSE';
    }
  });

  // Progress Tracking State (Persisted in localStorage)
  const [progressState, setProgressState] = useState<Record<string, NodeStatus>>(() => {
    try {
      const saved = localStorage.getItem('disha_progress');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Save Board Selection
  const handleSelectBoard = (newBoard: Board) => {
    setBoard(newBoard);
    try {
      localStorage.setItem('disha_board', newBoard);
    } catch (e) {
      console.warn('Unable to write board selection to localStorage', e);
    }
  };

  // Update Node Status
  const handleStatusChange = (nodeId: string, status: NodeStatus) => {
    setProgressState((prev) => {
      const updated = { ...prev, [nodeId]: status };
      try {
        localStorage.setItem('disha_progress', JSON.stringify(updated));
      } catch (e) {
        console.warn('Unable to save progress to localStorage', e);
      }
      return updated;
    });
  };

  // Reset Progress
  const handleResetProgress = () => {
    if (window.confirm('Are you sure you want to reset your saved roadmap progress on this browser?')) {
      setProgressState({});
      try {
        localStorage.removeItem('disha_progress');
      } catch (e) {
        console.warn('Unable to clear progress from localStorage', e);
      }
    }
  };

  // Handle Navigation
  const handleNavigate = (tab: string, streamId?: string) => {
    setCurrentTab(tab);
    if (streamId) {
      setSelectedStreamId(streamId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Count explored nodes
  const exploredCount = Object.values(progressState).filter((s) => s === 'explored' || s === 'interested').length;

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF6EC] text-[#3A2E27] font-sans selection:bg-[#E4753A]/20 selection:text-[#E4753A]">
      
      {/* GLOBAL NAVBAR */}
      <Navbar
        currentTab={currentTab}
        onNavigate={handleNavigate}
        board={board}
        onSelectBoard={handleSelectBoard}
        exploredCount={exploredCount}
      />

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {currentTab === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            board={board}
            onSelectBoard={handleSelectBoard}
          />
        )}

        {currentTab === 'roadmaps' && (
          <ExplorePage
            initialStreamId={selectedStreamId}
            board={board}
            onSelectBoard={handleSelectBoard}
            progressState={progressState}
            onStatusChange={handleStatusChange}
            onResetProgress={handleResetProgress}
          />
        )}

        {currentTab === 'quiz' && (
          <QuizPage onNavigate={handleNavigate} />
        )}

        {currentTab === 'resources' && (
          <ResourcesPage onNavigate={handleNavigate} />
        )}

        {currentTab === 'about' && (
          <AboutPage />
        )}
      </main>

      {/* GLOBAL FOOTER */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
