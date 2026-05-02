/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  PenTool, 
  Mic, 
  BookText, 
  BarChart3, 
  Home, 
  Moon, 
  Sun, 
  GraduationCap,
  ChevronRight,
  Target,
  ArrowRight,
  Search,
  Settings,
  Languages,
  Eye,
  Headphones
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId, UserProgress, Module, Lesson } from './types';
import { MODULES } from './constants';

// Internal Components
import Sidebar from './components/Sidebar';
const Dashboard = lazy(() => import('./components/Dashboard'));
const ModulesList = lazy(() => import('./components/ModulesList'));
const ModuleDetail = lazy(() => import('./components/ModuleDetail'));
const PracticeSession = lazy(() => import('./components/PracticeSession'));
const WritingLab = lazy(() => import('./components/WritingLab'));
const VocabBuilder = lazy(() => import('./components/VocabBuilder'));
const SpeakingLab = lazy(() => import('./components/SpeakingLab'));
const ReadingLab = lazy(() => import('./components/ReadingLab'));
const ListeningLab = lazy(() => import('./components/ListeningLab'));
const ProgressTracker = lazy(() => import('./components/ProgressTracker'));

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('dashboard');
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const contentRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState<UserProgress>({
    completedLessons: [],
    scores: {},
    vocabList: [],
    streak: 0,
    lastPracticeDate: new Date().toISOString()
  });

  // Load progress and update streak
  useEffect(() => {
    const saved = localStorage.getItem('ace_ielts_progress');
    if (saved) {
      const parsed: UserProgress = JSON.parse(saved);
      const lastDate = new Date(parsed.lastPracticeDate);
      const today = new Date();
      
      // Zero out hours/mins for comparison
      const diffTime = today.setHours(0,0,0,0) - lastDate.setHours(0,0,0,0);
      const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

      let newStreak = parsed.streak;
      if (diffDays === 1) {
        // Continued streak
      } else if (diffDays > 1) {
        newStreak = 0; // Broke streak
      }
      
      setProgress({
        ...parsed,
        streak: newStreak
      });
    }
  }, []);

  // Save progress
  useEffect(() => {
    localStorage.setItem('ace_ielts_progress', JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, left: 0 });
  }, [currentPage, selectedModuleId, selectedLessonId]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const navigateToModule = (id: string) => {
    setSelectedModuleId(id);
    setCurrentPage('module-detail');
  };

  const startLesson = (moduleId: string, lessonId: string) => {
    setSelectedModuleId(moduleId);
    setSelectedLessonId(lessonId);
    setCurrentPage('practice');
  };

  // Update streak when completing a lesson
  const updateProgress = (lessonId: string, score?: number, exerciseId?: string) => {
    setProgress(prev => {
      const newCompleted = prev.completedLessons.includes(lessonId) 
        ? prev.completedLessons 
        : [...prev.completedLessons, lessonId];
      
      const newScores = { ...prev.scores };
      if (exerciseId && score !== undefined) {
        newScores[exerciseId] = score;
      }

      const today = new Date().toISOString();
      const lastDate = new Date(prev.lastPracticeDate);
      const diffTime = new Date().setHours(0,0,0,0) - lastDate.setHours(0,0,0,0);
      const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

      let newStreak = prev.streak;
      if (diffDays === 1) newStreak += 1;
      else if (diffDays > 1 || prev.streak === 0) newStreak = 1;

      return {
        ...prev,
        completedLessons: newCompleted,
        scores: newScores,
        streak: newStreak,
        lastPracticeDate: today
      };
    });
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-zinc-100' : 'bg-black text-white'} font-sans transition-colors duration-300 flex overflow-hidden`}>
      {/* Sidebar Navigation */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 lg:relative lg:translate-x-0
        ${isMobileMenuOpen ? 'translate-x-0 shadow-2xl shadow-blue-900/40' : '-translate-x-full lg:translate-x-0'}
      `}>
        <Sidebar 
          currentPage={currentPage} 
          setCurrentPage={(p) => {
            setCurrentPage(p);
            setIsMobileMenuOpen(false);
          }} 
          isDarkMode={isDarkMode}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-16 border-b flex items-center justify-between px-4 md:px-8 sticky top-0 z-10 bg-black border-zinc-900 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-zinc-400 hover:text-white"
            >
              <LayoutDashboard size={24} />
            </button>
            <h2 className="text-lg font-semibold text-white truncate">
              {currentPage === 'dashboard' ? 'Student Dashboard' : currentPage.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 transition-all"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <section ref={contentRef} className="flex-1 overflow-y-auto p-4 md:p-8 max-w-7xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage + (selectedModuleId || '')}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="min-h-full"
            >
              <Suspense fallback={<div className="flex items-center justify-center min-h-[50vh]"><div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>}>
                {currentPage === 'home' && <HomeView onGetStarted={() => setCurrentPage('dashboard')} />}
                
                {currentPage === 'dashboard' && (
                  <Dashboard 
                    progress={progress} 
                    onNavigate={setCurrentPage}
                  />
                )}

                {currentPage === 'modules' && (
                  <ModulesList onModuleSelect={navigateToModule} />
                )}

                {currentPage === 'module-detail' && selectedModuleId && (
                  <ModuleDetail 
                    moduleId={selectedModuleId} 
                    onStartLesson={(lid) => startLesson(selectedModuleId, lid)}
                  />
                )}

                {currentPage === 'practice' && selectedModuleId && selectedLessonId && (
                  <PracticeSession 
                    moduleId={selectedModuleId} 
                    lessonId={selectedLessonId}
                    onComplete={(score) => {
                      updateProgress(selectedLessonId);
                      setCurrentPage('dashboard');
                    }}
                    onCancel={() => setCurrentPage('module-detail')}
                  />
                )}

                {currentPage === 'writing-lab' && <WritingLab />}
                
                {currentPage === 'vocab-builder' && (
                  <VocabBuilder 
                    progress={progress} 
                    onUpdateVocab={(id) => setProgress(prev => ({ 
                      ...prev, 
                      vocabList: prev.vocabList.includes(id) ? prev.vocabList : [...prev.vocabList, id] 
                    }))} 
                  />
                )}

                {currentPage === 'speaking-practice' && <SpeakingLab />}

                {currentPage === 'reading-practice' && <ReadingLab />}
                
                {currentPage === 'listening-practice' && <ListeningLab />}

                {currentPage === 'progress' && <ProgressTracker progress={progress} />}
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
}

function HomeView({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <div className="relative flex min-h-full flex-col items-center justify-start md:justify-center text-center py-8 md:py-12 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,black_65%,transparent)]" />
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 w-24 h-24 bg-blue-600 text-white rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-blue-500/20"
      >
        <GraduationCap size={48} />
      </motion.div>
      <h1 className="relative z-10 text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl">
        Master the IELTS Exam with Confidence
      </h1>
      <p className="relative z-10 text-lg md:text-xl opacity-60 mb-10 max-w-2xl leading-relaxed">
        A complete preparation platform with structured modules, real-time labs, and comprehensive progress tracking designed for Band 7+.
      </p>
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-5xl">
        {[
          { icon: <BookOpen />, title: "Structured Curriculum", text: "6 core modules covering all skills." },
          { icon: <Target />, title: "Precision Training", text: "Targeted exercises and MCQ drills." },
          { icon: <BarChart3 />, title: "Smart Progress", text: "Detailed insights into your journey." }
        ].map((feat, i) => (
          <div key={i} className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-left bg-white dark:bg-zinc-900 shadow-sm">
            <div className="mb-4 text-blue-600">{feat.icon}</div>
            <h3 className="font-semibold mb-2">{feat.title}</h3>
            <p className="text-sm opacity-60 leading-snug">{feat.text}</p>
          </div>
        ))}
      </div>

      <button 
        onClick={onGetStarted}
        id="btn-get-started"
        className="relative z-10 group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all flex items-center gap-3 shadow-xl shadow-blue-500/20"
      >
        Start Learning Now
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
