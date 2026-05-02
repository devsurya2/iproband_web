/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo, useRef } from 'react';
import { 
  FileText, 
  PenTool, 
  CheckCircle2, 
  Clock, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  Save, 
  Eye, 
  Layout, 
  Trash2,
  BookOpen,
  Info,
  TrendingUp,
  Search,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WRITING_DATA, WRITING_CATEGORIES, WritingQuestion } from '../data/writingData';

export default function WritingLab() {
  const [activeCategory, setActiveCategory] = useState(WRITING_CATEGORIES[0]);
  const [selectedQuestion, setSelectedQuestion] = useState<WritingQuestion | null>(null);
  const [text, setText] = useState('');
  const [showModel, setShowModel] = useState(false);
  const [isCompareMode, setIsCompareMode] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [completedIds, setCompletedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('writing_completed_ids');
    return saved ? JSON.parse(saved) : [];
  });
  const [searchQuery, setSearchQuery] = useState('');
  const rootRef = useRef<HTMLDivElement>(null);

  // Auto-save draft
  useEffect(() => {
    if (selectedQuestion) {
      localStorage.setItem(`writing_draft_${selectedQuestion.id}`, text);
    }
  }, [text, selectedQuestion]);

  // Timer logic
  useEffect(() => {
    let interval: any;
    if (isTimerRunning) {
      interval = setInterval(() => setTimer(t => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  useEffect(() => {
    rootRef.current?.scrollIntoView({ block: 'start' });
  }, [selectedQuestion?.id]);

  const filteredQuestions = useMemo(() => {
    return WRITING_DATA.filter(q => 
      q.category === activeCategory && 
      q.question.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeCategory, searchQuery]);

  const wordCount = text.trim().split(/\s+/).filter(w => w.length > 0).length;

  const handleSelectQuestion = (q: WritingQuestion) => {
    setSelectedQuestion(q);
    const savedDraft = localStorage.getItem(`writing_draft_${q.id}`);
    setText(savedDraft || '');
    setShowModel(false);
    setIsCompareMode(false);
    setTimer(0);
    setIsTimerRunning(false);
  };

  const handleSubmit = () => {
    if (selectedQuestion && !completedIds.includes(selectedQuestion.id)) {
      const newIds = [...completedIds, selectedQuestion.id];
      setCompletedIds(newIds);
      localStorage.setItem('writing_completed_ids', JSON.stringify(newIds));
    }
    alert('Writing submitted! Check the feedback section for tips.');
  };

  const getFeedback = () => {
    const feedback = [];
    if (wordCount < (selectedQuestion?.wordLimit || 0)) feedback.push("Minimum word limit not reached.");
    if (text.split('.').some(s => s.split(' ').length > 30)) feedback.push("Some sentences are too long. Use more periods.");
    
    // Simplistic repetition check
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const counts: Record<string, number> = {};
    words.forEach(w => { if(w.length > 3) counts[w] = (counts[w] || 0) + 1; });
    const repetitive = Object.entries(counts).filter(([_, count]) => count > 10).map(([w]) => w);
    if (repetitive.length > 0) feedback.push(`Avoid repeating "${repetitive[0]}" too often.`);

    if (feedback.length === 0) return ["Good structure and length!", "Vocabulary looks diverse."];
    return feedback;
  };

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const categoryProgress = (cat: string) => {
    const catTotal = WRITING_DATA.filter(q => q.category === cat).length;
    const catDone = WRITING_DATA.filter(q => q.category === cat && completedIds.includes(q.id)).length;
    return Math.round((catDone / catTotal) * 100);
  };

  return (
    <div ref={rootRef} className="min-h-[calc(100vh-120px)] flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {!selectedQuestion ? (
        <div className="space-y-8 flex-1 overflow-visible md:overflow-hidden flex flex-col">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Writing Lab</h1>
              <p className="text-zinc-500">Select a category and start practicing your writing skills.</p>
            </div>
            
            <div className="flex bg-zinc-900 border border-zinc-800 p-1 rounded-xl">
              <div className="flex items-center gap-3 px-4 py-2">
                <TrendingUp size={16} className="text-blue-500" />
                <div>
                   <p className="text-[10px] font-bold text-zinc-500 uppercase">Overall Progress</p>
                   <p className="text-sm font-bold text-white">{Math.round((completedIds.length / WRITING_DATA.length) * 100)}%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Categories Tabs */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {WRITING_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-white text-zinc-950' 
                    : 'bg-zinc-900 text-zinc-500 hover:bg-zinc-800'
                }`}
              >
                {cat}
                <span className="ml-2 opacity-40">{categoryProgress(cat)}%</span>
              </button>
            ))}
          </div>

          {/* Question List View */}
          <div className="flex-1 overflow-visible md:overflow-hidden flex flex-col bg-zinc-900/50 border border-zinc-800 rounded-[32px] p-4 md:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 shrink-0">
               <h3 className="font-bold text-white flex items-center gap-2">
                 <Search size={18} className="text-blue-500" />
                 {activeCategory} Questions
               </h3>
               <div className="relative w-full sm:w-64">
                 <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                 <input 
                   type="text" 
                   placeholder="Search prompts..." 
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   className="w-full pl-9 pr-4 py-2 bg-black border border-zinc-800 rounded-lg text-xs text-white focus:outline-none"
                 />
               </div>
            </div>

            <div className="flex-1 overflow-visible md:overflow-y-auto space-y-3 md:pr-2 scrollbar-hide">
              {filteredQuestions.map((q, i) => (
                <div 
                  key={q.id}
                  onClick={() => handleSelectQuestion(q)}
                  className="group flex items-center justify-between p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-all cursor-pointer"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-black border border-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-500">
                      {i + 1}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-zinc-200 group-hover:text-white line-clamp-1">{q.question}</p>
                      <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">{q.wordLimit} Words • {q.instructions.split(' ')[0]} Format</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {completedIds.includes(q.id) && <CheckCircle size={16} className="text-green-500" />}
                    <ChevronRight size={16} className="text-zinc-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Writing Editor View */
        <div className="flex-1 flex flex-col gap-6 overflow-visible lg:overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
            <button 
              onClick={() => setSelectedQuestion(null)}
              className="flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-white transition-colors"
            >
              <ChevronLeft size={16} />
              BACK TO LIST
            </button>
            <div className="flex flex-wrap items-center gap-3 sm:gap-6">
              <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs">
                <Clock size={14} />
                <span>{formatTime(timer)}</span>
              </div>
              <button 
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                  isTimerRunning ? 'bg-red-900/20 text-red-400 border border-red-800/50' : 'bg-green-900/20 text-green-400 border border-green-800/50'
                }`}
              >
                {isTimerRunning ? 'Stop Timer' : 'Start Timer'}
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col lg:flex-row gap-6 overflow-visible lg:overflow-hidden">
             {/* Left Column: Instructions (Desktop only) */}
             <div className="hidden lg:flex w-80 shrink-0 flex-col gap-4 overflow-y-auto pr-2 scrollbar-hide">
               <div className="p-6 rounded-[32px] bg-zinc-900 border border-zinc-800 space-y-4">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                    <FileText size={14} />
                    The Prompt
                  </div>
                  <p className="text-white font-medium leading-relaxed italic">
                    "{selectedQuestion.question}"
                  </p>
               </div>

               <div className="p-6 rounded-[32px] bg-black border border-zinc-800 space-y-4">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                    <BookOpen size={14} />
                    Instructions
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {selectedQuestion.instructions}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                    <span className="text-[10px] font-bold text-zinc-500 uppercase">Limit</span>
                    <span className="text-xs font-bold text-white">{selectedQuestion.wordLimit} Words</span>
                  </div>
               </div>

               <div className="p-6 rounded-[32px] bg-blue-900/10 border border-blue-900/20 space-y-4">
                  <h4 className="text-[10px] font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2">
                    <Info size={14} />
                    Live Feedback
                  </h4>
                  <ul className="space-y-2">
                    {getFeedback().map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-[10px] text-zinc-300">
                        <div className="mt-1 w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
               </div>
             </div>

             {/* Mobile Instruction Header (Visible on smaller screens) */}
             <div className="lg:hidden shrink-0 bg-zinc-900 border border-zinc-800 rounded-3xl p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 space-y-3">
                    <p className="text-sm font-medium text-white leading-relaxed italic">"{selectedQuestion.question}"</p>
                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                      <span>{selectedQuestion.instructions}</span>
                      <span className="text-zinc-700">•</span>
                      <span>{selectedQuestion.wordLimit} Words</span>
                    </div>
                  </div>
                  <div className="shrink-0 p-2 bg-zinc-800 rounded-xl text-blue-400">
                    <Info size={18} />
                  </div>
                </div>
             </div>

             {/* Right Column: Editor */}
             <div className="flex-1 flex flex-col gap-4 overflow-visible lg:overflow-hidden">
                <div className="flex-1 flex flex-col lg:flex-row gap-4 overflow-visible lg:overflow-hidden">
                  <div className={`flex min-h-[440px] flex-col bg-zinc-900 rounded-[32px] border border-zinc-800 overflow-hidden ${isCompareMode ? 'lg:min-h-0 lg:w-1/2' : 'lg:min-h-0 w-full'}`}>
                    <textarea 
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Type your response here..."
                      className="flex-1 w-full bg-transparent p-5 md:p-8 text-zinc-100 font-serif text-base md:text-lg leading-loose resize-none focus:outline-none placeholder:text-zinc-700"
                    />
                    <div className="p-4 bg-black/40 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                       <div className="flex items-center gap-4">
                         <div className={`px-4 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest ${
                           wordCount >= selectedQuestion.wordLimit ? 'bg-green-900/20 text-green-400 border border-green-800/50' : 'bg-zinc-800 text-zinc-500 border border-zinc-700/50'
                         }`}>
                           {wordCount} / {selectedQuestion.wordLimit} Words
                         </div>
                       </div>
                       <div className="flex flex-wrap gap-2">
                         <button 
                          onClick={() => setText('')}
                          className="p-2 text-zinc-500 hover:text-red-400 border border-transparent hover:border-red-900/30 rounded-lg transition-all"
                         >
                           <RotateCcw size={16} />
                         </button>
                         <button 
                          onClick={() => setIsCompareMode(!isCompareMode)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                            isCompareMode ? 'bg-blue-600 text-white' : 'bg-zinc-800 text-zinc-400 hover:text-white'
                          }`}
                         >
                           {isCompareMode ? <Layout size={14} /> : <Eye size={14} />}
                           {isCompareMode ? 'Close Split View' : 'Compare Mode'}
                         </button>
                       </div>
                    </div>
                  </div>

                  {isCompareMode && (
                    <div className="w-full min-h-[360px] lg:min-h-0 lg:w-1/2 bg-zinc-900 rounded-[32px] border border-zinc-800 flex flex-col overflow-hidden animate-in slide-in-from-right-4 duration-300">
                       <div className="p-4 bg-black/40 border-b border-zinc-800 flex items-center justify-between">
                         <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Model Answer</span>
                         <span className="px-2 py-0.5 bg-blue-600 text-[8px] font-extrabold text-white rounded uppercase">Band 9.0</span>
                       </div>
                       <div className="flex-1 overflow-y-auto p-8 prose prose-invert max-w-none">
                         <p className="text-zinc-300 font-serif leading-loose whitespace-pre-wrap">
                           {selectedQuestion.modelAnswer}
                         </p>
                       </div>
                    </div>
                  )}
                </div>

                {/* Footer Actions */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-zinc-900 rounded-3xl border border-zinc-800 shrink-0">
                  <div className="flex flex-wrap gap-2">
                    <button 
                      onClick={() => setShowModel(!showModel)}
                      className="px-6 py-3 bg-zinc-800 text-zinc-300 rounded-2xl text-xs font-bold hover:bg-zinc-700 transition-all flex items-center gap-2"
                    >
                      <BookOpen size={14} />
                      {showModel ? 'Hide Sample' : 'Show Sample'}
                    </button>
                    <button 
                      onClick={() => {
                        localStorage.setItem(`writing_draft_${selectedQuestion.id}`, text);
                        alert('Draft saved locally!');
                      }}
                      className="px-6 py-3 bg-zinc-800 text-zinc-300 rounded-2xl text-xs font-bold hover:bg-zinc-700 transition-all flex items-center gap-2"
                    >
                      <Save size={14} />
                      Save Draft
                    </button>
                  </div>
                  
                  <button 
                    onClick={handleSubmit}
                    disabled={wordCount < 10}
                    className="px-8 py-3 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:grayscale"
                  >
                    Submit Practice
                    <ChevronRight size={16} />
                  </button>
                </div>
             </div>
          </div>

          <AnimatePresence>
            {showModel && !isCompareMode && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
              >
                <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-[40px] overflow-hidden shadow-2xl">
                   <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
                     <h3 className="font-bold text-white uppercase tracking-widest text-xs">Review Model Response</h3>
                     <button onClick={() => setShowModel(false)} className="text-zinc-500 hover:text-white">
                        <Trash2 size={18} />
                     </button>
                   </div>
                   <div className="p-10 overflow-y-auto max-h-[60vh] font-serif leading-relaxed text-zinc-300 italic">
                      "{selectedQuestion.modelAnswer}"
                   </div>
                   <div className="p-6 border-t border-zinc-800 bg-black/20 text-center">
                      <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Studying professional samples helps improve structure and flow.</p>
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
