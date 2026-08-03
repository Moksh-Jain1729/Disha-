import React, { useState } from 'react';
import { Board } from '../types';
import { Compass, BookOpen, BrainCircuit, Library, Info, Menu, X, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onNavigate: (tab: string, streamId?: string) => void;
  board: Board;
  onSelectBoard: (board: Board) => void;
  exploredCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onNavigate,
  board,
  onSelectBoard,
  exploredCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Compass },
    { id: 'roadmaps', label: 'Explore Streams', icon: BookOpen },
    { id: 'quiz', label: 'Aptitude Quiz', icon: BrainCircuit },
    { id: 'resources', label: 'Resources Hub', icon: Library },
    { id: 'about', label: 'About & Disclaimer', icon: Info },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FDF6EC]/90 backdrop-blur-md border-b border-[#E8DCC8] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo & Brand Name */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#E4753A] to-[#F2A93B] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-[#3A2E27] font-sans">
                  Disha
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E4753A]/10 text-[#E4753A] border border-[#E4753A]/20">
                  v2 Prototype
                </span>
              </div>
              <p className="text-xs text-[#8A7A6D] font-medium hidden sm:block">
                Life After 10th — Stream & Path Guidance
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#FFFBF3] p-1.5 rounded-2xl border border-[#E8DCC8] shadow-xs">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-xl transition-all ${
                    isActive
                      ? 'bg-[#E4753A] text-white shadow-xs'
                      : 'text-[#3A2E27] hover:bg-[#E8DCC8]/40 hover:text-[#E4753A]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Board Selector & Device Progress Counter */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Board Selector */}
            <div className="flex items-center gap-1 bg-[#FFFBF3] p-1 rounded-xl border border-[#E8DCC8] text-xs">
              <span className="text-[10px] font-bold text-[#8A7A6D] px-2 uppercase">Board:</span>
              {(['CBSE', 'ICSE', 'SSC'] as Board[]).map((b) => (
                <button
                  key={b}
                  onClick={() => onSelectBoard(b)}
                  className={`px-2 py-1 font-bold rounded-lg transition-all ${
                    board === b
                      ? 'bg-[#E4753A] text-white'
                      : 'text-[#3A2E27] hover:bg-[#E8DCC8]/40'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>

            {/* Saved Nodes Pill */}
            {exploredCount > 0 && (
              <div 
                onClick={() => handleNavClick('roadmaps')}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#4CAF7D]/10 text-[#4CAF7D] border border-[#4CAF7D]/30 rounded-xl text-xs font-bold cursor-pointer hover:bg-[#4CAF7D]/20 transition-all"
                title="Explored career nodes saved on this browser"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{exploredCount} Saved</span>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-[#FFFBF3] border border-[#E8DCC8] text-[#3A2E27] hover:bg-[#E8DCC8]/40 transition-all"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFBF3] border-b border-[#E8DCC8] px-4 py-4 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-[#E8DCC8]">
            <span className="text-xs font-bold text-[#8A7A6D] uppercase">Select Board:</span>
            <div className="flex items-center gap-1 bg-[#FDF6EC] p-1 rounded-xl border border-[#E8DCC8]">
              {(['CBSE', 'ICSE', 'SSC'] as Board[]).map((b) => (
                <button
                  key={b}
                  onClick={() => onSelectBoard(b)}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg ${
                    board === b ? 'bg-[#E4753A] text-white' : 'text-[#3A2E27]'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl transition-all text-left ${
                    isActive
                      ? 'bg-[#E4753A] text-white'
                      : 'text-[#3A2E27] bg-[#FDF6EC] hover:bg-[#E8DCC8]/40'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
