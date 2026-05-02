/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo, useRef } from 'react';
import { 
  BookOpen, 
  Clock, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  Eye, 
  Book,
  Search,
  CheckCircle,
  HelpCircle,
  Trophy,
  History,
  Timer
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { READING_DATA, ReadingSet, ReadingQuestion } from '../data/readingData';

export default function ReadingLab() {
  const [view, setView] = useState<'list' | 'practice'>('list');
  const [selectedSet, setSelectedSet] = useState<ReadingSet | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [completedIds, setCompletedIds] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('reading_scores');
    return saved ? JSON.parse(saved) : {};
  });

  const passageRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    rootRef.current?.scrollIntoView({ block: 'start' });
  }, [view, selectedSet?.id]);

  // Timer logic
  useEffect(() => {
    let interval: any;
    if (isTimerRunning) {
      interval = setInterval(() => setTimer(t => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  const filteredSets = useMemo(() => {
    return READING_DATA.filter(set => 
      set.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      set.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleSelectSet = (set: ReadingSet) => {
    setSelectedSet(set);
    setView('practice');
    setAnswers({});
    setIsSubmitted(false);
    setTimer(0);
    setIsTimerRunning(true);
  };

  const handleAnswerChange = (qId: string, value: string) => {
    if (isSubmitted) return;
    setAnswers(prev => ({ ...prev, [qId]: value }));
  };

  const handleSubmit = () => {
    if (!selectedSet || isSubmitted) return;
    
    setIsSubmitted(true);
    setIsTimerRunning(false);
    
    const correctCount = selectedSet.questions.filter(q => 
      answers[q.id]?.toLowerCase().trim() === q.answer.toLowerCase().trim()
    ).length;
    
    const score = Math.round((correctCount / selectedSet.questions.length) * 100);
    const newScores = { ...completedIds, [selectedSet.id]: score };
    setCompletedIds(newScores);
    localStorage.setItem('reading_scores', JSON.stringify(newScores));
  };

  const completedScores = Object.values(completedIds) as number[];
  const averageAccuracy = completedScores.length > 0 
    ? Math.round(completedScores.reduce((acc: number, curr: number) => acc + curr, 0) / completedScores.length)
    : 0;

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getCategoryColor = (cat: string) => {
    const colors: Record<string, string> = {
      'Science': 'text-blue-400 bg-blue-900/20',
      'Technology': 'text-purple-400 bg-purple-900/20',
      'Environment': 'text-emerald-400 bg-emerald-900/20',
      'Society': 'text-orange-400 bg-orange-900/20',
      'History': 'text-amber-400 bg-amber-900/20',
      'Psychology': 'text-rose-400 bg-rose-900/20'
    };
    return colors[cat] || 'text-zinc-400 bg-zinc-900/20';
  };

  return (
    <div ref={rootRef} className="min-h-full flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {view === 'list' ? (
        <div className="space-y-8 flex-1 overflow-visible md:overflow-hidden flex flex-col">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Reading Lab</h1>
              <p className="text-zinc-500">Advanced IELTS-level passages to sharpen your comprehension skills.</p>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-zinc-900 border border-zinc-800 p-1 rounded-xl flex">
                <div className="flex items-center gap-3 px-4 py-2">
                  <Trophy size={16} className="text-yellow-500" />
                  <div>
                     <p className="text-[10px] font-bold text-zinc-500 uppercase">Avg. Accuracy</p>
                     <p className="text-sm font-bold text-white">
                       {averageAccuracy}%
                     </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-2 shrink-0">
            <div className="relative w-full max-w-md">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input 
                type="text" 
                placeholder="Search topics or categories..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-2xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-600/50"
              />
            </div>
          </div>

          <div className="flex-1 overflow-visible md:overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:pr-2 scrollbar-hide pb-8">
            {filteredSets.map((set) => (
              <div 
                key={set.id}
                onClick={() => handleSelectSet(set)}
                className="group p-6 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-blue-600/50 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${getCategoryColor(set.category)}`}>
                      {set.category}
                    </span>
                    {completedIds[set.id] !== undefined && (
                      <div className="flex items-center gap-1 text-green-500 text-[10px] font-bold">
                        <CheckCircle size={12} />
                        {completedIds[set.id]}%
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{set.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed mb-4 line-clamp-2">{set.description}</p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                  <div className="flex items-center gap-4 text-zinc-500 text-[10px] font-bold uppercase">
                    <span className="flex items-center gap-1"><History size={12} /> Hard</span>
                    <span className="flex items-center gap-1"><BookOpen size={12} /> {set.questions.length} Qs</span>
                  </div>
                  <ChevronRight size={18} className="text-zinc-700 group-hover:text-white transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Practice Interface */
        <div className="flex-1 flex flex-col gap-4 overflow-visible lg:overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
            <button 
              onClick={() => { setView('list'); setIsTimerRunning(false); }}
              className="flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-white transition-colors"
            >
              <ChevronLeft size={16} />
              EXIT TO LIBRARY
            </button>
            <div className="flex flex-wrap items-center gap-3 sm:gap-6">
              <div className={`flex items-center gap-2 font-mono text-sm font-bold ${timer >= 1200 ? 'text-red-500 animate-pulse' : 'text-zinc-100'}`}>
                <Timer size={16} />
                {formatTime(timer)}
              </div>
              <button 
                onClick={handleSubmit}
                disabled={isSubmitted}
                className="px-6 py-2 bg-blue-600 text-white rounded-full text-xs font-bold hover:bg-blue-700 transition-all disabled:bg-zinc-800 disabled:text-zinc-600"
              >
                {isSubmitted ? 'SUBMITTED' : 'SUBMIT ANSWERS'}
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col lg:flex-row gap-6 overflow-visible lg:overflow-hidden">
            {/* Left: Passage */}
            <div className="flex-1 min-h-[420px] lg:min-h-0 bg-zinc-900 border border-zinc-800 rounded-[32px] flex flex-col overflow-hidden">
              <div className="p-6 border-b border-zinc-800 bg-black/20 flex items-center justify-between">
                <h2 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                  <Book size={16} className="text-blue-600" />
                  Reading Passage
                </h2>
              </div>
              <div 
                ref={passageRef}
                className="flex-1 overflow-y-auto p-6 md:p-10 font-serif text-base md:text-lg leading-relaxed text-zinc-300 selection:bg-blue-600/30"
              >
                <h1 className="text-3xl font-bold text-white mb-8 leading-tight">{selectedSet?.title}</h1>
                <div className="whitespace-pre-wrap space-y-6">
                  {selectedSet?.passage}
                </div>
              </div>
            </div>

            {/* Right: Questions */}
            <div className="w-full lg:w-[450px] min-h-[420px] lg:min-h-0 bg-zinc-900 border border-zinc-800 rounded-[32px] flex flex-col overflow-hidden">
              <div className="p-6 border-b border-zinc-800 bg-black/20">
                <h2 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                  <HelpCircle size={16} className="text-orange-500" />
                  Questions (1-{selectedSet?.questions.length})
                </h2>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide">
                {selectedSet?.questions.map((q, idx) => (
                  <div key={q.id} className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 shrink-0 bg-zinc-800 rounded-lg flex items-center justify-center text-[10px] font-bold text-zinc-400">
                        {idx + 1}
                      </div>
                      <div className="space-y-4 flex-1">
                        <p className="text-sm font-medium text-white">{q.question}</p>
                        
                        {q.type === 'mcq' && q.options && (
                          <div className="space-y-2">
                            {q.options.map(opt => (
                              <button
                                key={opt}
                                onClick={() => handleAnswerChange(q.id, opt)}
                                disabled={isSubmitted}
                                className={`w-full text-left p-3 rounded-xl text-xs transition-all border ${
                                  answers[q.id] === opt 
                                    ? 'bg-blue-600/10 border-blue-600 text-white' 
                                    : 'bg-black border-zinc-800 text-zinc-400 hover:border-zinc-700'
                                } ${isSubmitted && q.answer === opt ? 'border-green-500 bg-green-500/10 text-green-400' : ''} ${isSubmitted && answers[q.id] === opt && q.answer !== opt ? 'border-red-500 bg-red-500/10 text-red-400' : ''}`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        )}

                        {(q.type === 'fill' || q.type === 'completion' || q.type === 'tfng' || q.type === 'matching') && q.type !== 'mcq' && (
                          <input 
                            type="text"
                            placeholder={q.type === 'tfng' ? 'TRUE, FALSE, or NOT GIVEN' : 'Type your answer...'}
                            value={answers[q.id] || ''}
                            onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                            disabled={isSubmitted}
                            className={`w-full bg-black border p-3 rounded-xl text-xs text-white focus:outline-none transition-all ${
                              isSubmitted 
                                ? (answers[q.id]?.toLowerCase().trim() === q.answer.toLowerCase().trim() ? 'border-green-500 text-green-400' : 'border-red-500 text-red-400')
                                : 'border-zinc-800 focus:border-blue-600'
                            }`}
                          />
                        )}

                        {isSubmitted && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-4 rounded-2xl bg-zinc-800/50 border border-zinc-700"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              {answers[q.id]?.toLowerCase().trim() === q.answer.toLowerCase().trim() ? (
                                <CheckCircle size={14} className="text-green-500" />
                              ) : (
                                <HelpCircle size={14} className="text-red-500" />
                              )}
                              <span className={`text-[10px] font-bold uppercase ${answers[q.id]?.toLowerCase().trim() === q.answer.toLowerCase().trim() ? 'text-green-500' : 'text-red-500'}`}>
                                {answers[q.id]?.toLowerCase().trim() === q.answer.toLowerCase().trim() ? 'Correct' : `Answer: ${q.answer}`}
                              </span>
                            </div>
                            <p className="text-[10px] text-zinc-500 leading-relaxed italic">{q.explanation}</p>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
