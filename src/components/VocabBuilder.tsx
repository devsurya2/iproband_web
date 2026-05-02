/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  CheckCircle2, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  Trophy, 
  Flame, 
  BookMarked,
  Lightbulb,
  SearchCheck,
  BrainCircuit,
  LayoutGrid,
  CreditCard,
  Gamepad2,
  Bookmark,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { VOCAB_DATA, VOCAB_CATEGORIES, Word } from '../data/vocabData';

type ViewMode = 'browse' | 'flashcards' | 'quiz';

export default function VocabBuilder() {
  const [activeTab, setActiveTab] = useState(VOCAB_CATEGORIES[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('browse');
  const [learnedWords, setLearnedWords] = useState<string[]>(() => {
    const saved = localStorage.getItem('learned_words');
    return saved ? JSON.parse(saved) : [];
  });
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('favorite_words');
    return saved ? JSON.parse(saved) : [];
  });
  const [sentenceFeedback, setSentenceFeedback] = useState<Record<string, 'success' | 'fail' | null>>({});
  
  // Flashcard State
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Quiz State
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [currentHourKey, setCurrentHourKey] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}-${now.getHours()}`;
  });

  // Sync learned words to localStorage
  useEffect(() => {
    localStorage.setItem('learned_words', JSON.stringify(learnedWords));
  }, [learnedWords]);

  // Sync favorites
  useEffect(() => {
    localStorage.setItem('favorite_words', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const updateHourKey = () => {
      const now = new Date();
      setCurrentHourKey(`${now.getFullYear()}-${now.getMonth()}-${now.getDate()}-${now.getHours()}`);
    };

    const interval = setInterval(updateHourKey, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const categoryWords = useMemo(() => {
    return VOCAB_DATA.filter(w => w.category === activeTab);
  }, [activeTab]);

  const filteredWords = useMemo(() => {
    return categoryWords.filter(w => {
      const matchesSearch = w.word.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           w.meaning.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [categoryWords, searchQuery]);

  const quizQuestionCount = Math.min(10, categoryWords.length);
  const quizQuestions = useMemo(() => categoryWords.slice(0, quizQuestionCount), [categoryWords, quizQuestionCount]);
  const quizChoices = useMemo(() => {
    return quizQuestions.map((word, questionIndex) => {
      const distractors = categoryWords
        .filter(v => v.id !== word.id)
        .slice(questionIndex + 1)
        .concat(categoryWords.filter(v => v.id !== word.id).slice(0, questionIndex + 1))
        .slice(0, 3)
        .map(v => v.meaning);

      return [word.meaning, ...distractors].sort((a, b) => a.localeCompare(b));
    });
  }, [categoryWords, quizQuestions]);

  useEffect(() => {
    setFlashcardIndex(0);
    setIsFlipped(false);
    setQuizStarted(false);
    setCurrentQuizIndex(0);
    setQuizScore(0);
    setShowQuizResult(false);
    setQuizAnswers({});
  }, [activeTab]);

  const toggleLearned = (id: string) => {
    setLearnedWords(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const toggleFavorite = (id: string) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const handleSentenceCheck = (word: string, input: string) => {
    if (!input.trim()) return;
    const isCorrect = input.toLowerCase().includes(word.toLowerCase());
    setSentenceFeedback(prev => ({ ...prev, [word]: isCorrect ? 'success' : 'fail' }));
  };

  const learnedCount = VOCAB_DATA.filter(w => learnedWords.includes(w.id)).length;
  const progressPct = Math.round((learnedCount / VOCAB_DATA.length) * 100);

  // Word of the Day (seeded by hour to rotate every 60 minutes)
  const wordOfTheDay = useMemo(() => {
    const now = new Date();
    const hourSeed = Math.floor(now.getTime() / (60 * 60 * 1000));
    return VOCAB_DATA[hourSeed % VOCAB_DATA.length];
  }, [currentHourKey]);

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuizIndex(0);
    setQuizScore(0);
    setShowQuizResult(false);
    setQuizAnswers({});
  };

  const finishQuiz = () => {
    const score = quizQuestions.reduce((total, word) => (
      quizAnswers[word.id] === word.meaning ? total + 1 : total
    ), 0);

    setQuizScore(score);
    setShowQuizResult(true);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header & Stats */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-white">Vocabulary Builder</h1>
          <p className="text-zinc-500">Master production-ready English for work and exams.</p>
        </div>
        <div className="flex gap-4">
          <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-900/20 text-blue-500 flex items-center justify-center">
              <BrainCircuit size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">LEARNED</p>
              <p className="font-bold text-white">{learnedCount} Words</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-[10px] font-bold text-zinc-500 uppercase tracking-widest px-1">
          <span>Overall Progress</span>
          <span>{progressPct}% Completed</span>
        </div>
        <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
          <motion.div 
            className="h-full bg-blue-600" 
            initial={{ width: 0 }}
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* View Switcher */}
      <div className="flex p-1 bg-zinc-900 border border-zinc-800 rounded-xl w-fit">
        {[
          { id: 'browse', icon: LayoutGrid, label: 'Browse' },
          { id: 'flashcards', icon: CreditCard, label: 'Flashcards' },
          { id: 'quiz', icon: Gamepad2, label: 'Quiz Mode' },
        ].map(mode => (
          <button
            key={mode.id}
            onClick={() => setViewMode(mode.id as ViewMode)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
              viewMode === mode.id 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <mode.icon size={16} />
            {mode.label}
          </button>
        ))}
      </div>

      {viewMode !== 'browse' && (
        <div className="flex flex-wrap gap-2">
          {VOCAB_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === cat 
                  ? 'bg-white text-zinc-950' 
                  : 'bg-zinc-900 text-zinc-500 hover:bg-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {viewMode === 'browse' && (
        <div className="space-y-8">
          {/* Daily Selection */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-blue-400 mb-4">
                  <Lightbulb size={20} />
                  <span className="text-xs font-bold uppercase tracking-widest">Word of the Day</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-2">{wordOfTheDay.word}</h2>
                <p className="text-zinc-400 italic mb-6">/ {wordOfTheDay.word} /</p>
                <p className="text-xl text-zinc-300 max-w-lg leading-relaxed">{wordOfTheDay.meaning}</p>
                <div className="mt-8 flex gap-4">
                  <button className="px-6 py-3 bg-white text-zinc-950 rounded-xl font-bold text-sm hover:bg-zinc-200 transition-colors">Listen Pronunciation</button>
                  <button 
                    onClick={() => toggleLearned(wordOfTheDay.id)}
                    className={`px-6 py-3 rounded-xl font-bold text-sm border-2 transition-all ${
                      learnedWords.includes(wordOfTheDay.id)
                        ? 'border-green-500/50 bg-green-500/10 text-green-500'
                        : 'border-zinc-700 text-zinc-400 hover:border-zinc-500'
                    }`}
                  >
                    {learnedWords.includes(wordOfTheDay.id) ? 'Learned' : 'Mark as Complete'}
                  </button>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 group-hover:bg-blue-600/10 transition-colors"></div>
            </div>

            <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
               <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                 <SearchCheck size={18} className="text-blue-500" />
                 Ready to Practice
               </h3>
               <div className="space-y-3">
                 {VOCAB_DATA.slice(0, 5).map(w => (
                   <div key={w.id} className="flex justify-between items-center p-3 rounded-xl bg-black border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer group">
                     <span className="text-sm text-zinc-300 group-hover:text-white">{w.word}</span>
                     <button 
                      onClick={() => toggleLearned(w.id)}
                      className={`w-6 h-6 rounded-full border transition-all flex items-center justify-center ${
                       learnedWords.includes(w.id) ? 'bg-green-500 border-green-500 text-white' : 'border-zinc-700'
                     }`}>
                       {learnedWords.includes(w.id) && <CheckCircle2 size={12} />}
                     </button>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Search & Tabs */}
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {VOCAB_CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      activeTab === cat 
                        ? 'bg-white text-zinc-950' 
                        : 'bg-zinc-900 text-zinc-500 hover:bg-zinc-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="relative w-full md:w-64">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                <input 
                  type="text" 
                  placeholder="Search words..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-white"
                />
              </div>
            </div>

            {/* Word Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWords.map(word => (
                <motion.div
                  layout
                  key={word.id}
                  className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{word.word}</h3>
                      <p className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${
                        word.difficulty === 'easy' ? 'text-green-500' : word.difficulty === 'medium' ? 'text-orange-500' : 'text-red-500'
                      }`}>
                        {word.difficulty}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => toggleLearned(word.id)}
                        className={`p-2 rounded-lg transition-colors ${learnedWords.includes(word.id) ? 'bg-green-500/10 text-green-500' : 'bg-transparent text-zinc-600 hover:text-zinc-400'}`}
                      >
                        <CheckCircle2 size={18} />
                      </button>
                      <button 
                        onClick={() => toggleFavorite(word.id)}
                        className={`p-2 rounded-lg transition-colors ${favorites.includes(word.id) ? 'bg-red-500/10 text-red-500' : 'bg-transparent text-zinc-600 hover:text-zinc-400'}`}
                      >
                        <Bookmark size={18} fill={favorites.includes(word.id) ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-sm text-zinc-400 leading-relaxed"><span className="text-zinc-200 font-semibold">Meaning:</span> {word.meaning}</p>
                    <p className="text-sm text-zinc-400 italic">"{word.example}"</p>
                    
                    <div className="pt-4 border-t border-zinc-800 space-y-3">
                      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Use in a sentence</p>
                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          placeholder="Type your sentence..." 
                          className="flex-1 bg-black border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500/50"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSentenceCheck(word.word, e.currentTarget.value);
                          }}
                        />
                        <button 
                          onClick={(e) => {
                            const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                            handleSentenceCheck(word.word, input.value);
                          }}
                          className="p-2 bg-zinc-800 rounded-lg text-zinc-300 hover:bg-zinc-700 transition-all active:scale-95"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>
                      <AnimatePresence>
                        {sentenceFeedback[word.word] && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className={`text-[10px] font-bold uppercase ${sentenceFeedback[word.word] === 'success' ? 'text-green-500' : 'text-red-500'}`}
                          >
                            {sentenceFeedback[word.word] === 'success' ? 'Good job! Correct usage.' : 'Try again! word not found in sentence.'}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {viewMode === 'flashcards' && (
        <div className="max-w-xl mx-auto py-12 flex flex-col items-center gap-8">
          <div className="w-full flex justify-between items-center text-zinc-500 font-mono text-xs uppercase tracking-widest px-4">
             <span>Category: {activeTab}</span>
             <span>Card {flashcardIndex + 1} / {categoryWords.length}</span>
          </div>

          <div 
            className="w-full h-96 relative perspective-1000 cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
            style={{ perspective: 1000 }}
          >
            <motion.div
              className="w-full h-full relative transition-[transform] duration-500"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 bg-zinc-900 border border-zinc-800 rounded-[40px] flex flex-col items-center justify-center p-12 text-center shadow-2xl"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-6">WORD</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{categoryWords[flashcardIndex]?.word}</h2>
                <div className="mt-8 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-zinc-700 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-zinc-700 animate-pulse delay-75" />
                  <div className="w-2 h-2 rounded-full bg-zinc-700 animate-pulse delay-150" />
                </div>
                <p className="mt-8 text-xs text-zinc-600 uppercase tracking-widest font-bold">Tap to reveal meaning</p>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 bg-blue-600 border border-blue-500 rounded-[40px] flex flex-col items-center justify-center p-12 text-center shadow-2xl"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-100 mb-6">MEANING</span>
                <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed mb-8">{categoryWords[flashcardIndex]?.meaning}</p>
                <div className="p-4 bg-white/10 rounded-2xl w-full border border-white/10">
                   <p className="text-xs italic text-blue-100 opacity-80">"{categoryWords[flashcardIndex]?.example}"</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex gap-6 items-center">
            <button 
              onClick={() => {
                setFlashcardIndex(prev => Math.max(0, prev - 1));
                setIsFlipped(false);
              }}
              disabled={flashcardIndex === 0}
              className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white disabled:opacity-30 hover:bg-zinc-800 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => {
                setFlashcardIndex(prev => (prev + 1) % categoryWords.length);
                setIsFlipped(false);
              }}
              className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white hover:bg-zinc-800 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}

      {viewMode === 'quiz' && (
        <div className="max-w-2xl mx-auto py-8">
          {!quizStarted ? (
            <div className="p-12 rounded-[40px] bg-zinc-900 border border-zinc-800 text-center space-y-8 shadow-2xl">
              <div className="w-24 h-24 rounded-[30px] bg-blue-600 flex items-center justify-center mx-auto shadow-xl shadow-blue-500/20 text-white">
                <Trophy size={48} />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-white">Ready for a Quiz?</h2>
                <p className="text-zinc-500">Test your knowledge on words from <span className="text-white font-bold">{activeTab}</span>.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="p-4 rounded-2xl bg-black border border-zinc-800">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">TOTAL QUESTIONS</p>
                  <p className="font-bold text-white">{quizQuestionCount} Points</p>
                </div>
                <div className="p-4 rounded-2xl bg-black border border-zinc-800">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">CATEGORY</p>
                  <p className="font-bold text-white truncate max-w-[150px]">{activeTab}</p>
                </div>
              </div>
              <button 
                onClick={startQuiz}
                disabled={categoryWords.length < 4}
                className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 disabled:opacity-50 disabled:grayscale"
              >
                {categoryWords.length < 4 ? 'Not enough words in category' : 'Start Assessment'}
              </button>
            </div>
          ) : showQuizResult ? (
            <div className="p-12 rounded-[40px] bg-zinc-900 border border-zinc-800 text-center space-y-8 shadow-2xl">
              <div className="w-32 h-32 rounded-full border-8 border-blue-600/20 flex items-center justify-center mx-auto relative group">
                <div className="absolute inset-2 rounded-full border-4 border-blue-500 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">{quizScore}</span>
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-white">Quiz Completed!</h2>
                <p className="text-zinc-500">You scored {quizScore} out of {quizQuestionCount} correctly.</p>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={startQuiz}
                  className="flex-1 py-4 bg-zinc-800 text-white rounded-2xl font-bold hover:bg-zinc-700 transition-all"
                >
                  Retake Quiz
                </button>
                <button 
                  onClick={() => setQuizStarted(false)}
                  className="flex-1 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all font-bold"
                >
                  Back to Library
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-12">
               <div className="flex justify-between items-center px-4">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Question {currentQuizIndex + 1} of {quizQuestionCount}</p>
                    <div className="h-1.5 w-64 bg-zinc-900 rounded-full border border-zinc-800 overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: `${((currentQuizIndex + 1) / quizQuestionCount) * 100}%` }} />
                    </div>
                  </div>
                  <button onClick={() => setQuizStarted(false)} className="text-xs font-bold text-zinc-500 hover:text-white uppercase tracking-widest">Quit Quiz</button>
               </div>

               <div className="space-y-8">
                  <div className="p-10 rounded-[40px] bg-zinc-900 border border-zinc-800 text-center">
                    <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-4">Choose the correct meaning</p>
                    <h2 className="text-4xl font-bold text-white">{quizQuestions[currentQuizIndex]?.word}</h2>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {quizChoices[currentQuizIndex]?.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => setQuizAnswers(prev => ({ ...prev, [quizQuestions[currentQuizIndex].id]: opt }))}
                        className={`w-full p-6 text-left rounded-[30px] border transition-all text-sm font-medium leading-relaxed ${
                          quizAnswers[quizQuestions[currentQuizIndex]?.id] === opt
                            ? 'bg-blue-600/10 border-blue-500 text-white'
                            : 'bg-zinc-900/50 border-zinc-800 hover:border-blue-500 hover:bg-zinc-900 text-zinc-300 hover:text-white'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <button
                      onClick={() => setCurrentQuizIndex(prev => Math.max(0, prev - 1))}
                      disabled={currentQuizIndex === 0}
                      className="flex-1 py-4 bg-zinc-900 border border-zinc-800 text-white rounded-2xl font-bold hover:bg-zinc-800 transition-all disabled:opacity-30"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => {
                        if (currentQuizIndex < quizQuestionCount - 1) {
                          setCurrentQuizIndex(prev => prev + 1);
                        } else {
                          finishQuiz();
                        }
                      }}
                      disabled={!quizAnswers[quizQuestions[currentQuizIndex]?.id]}
                      className="flex-1 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all disabled:opacity-30"
                    >
                      {currentQuizIndex < quizQuestionCount - 1 ? 'Next' : 'Finish Quiz'}
                    </button>
                  </div>
               </div>
            </div>
          )}
        </div>
      )}

      {/* Recommended Section (Simple) */}
      {viewMode === 'browse' && (
        <div className="pt-12 border-t border-zinc-800 space-y-6">
           <div className="flex items-center justify-between">
             <h3 className="text-xl font-bold text-white">Recently Learned</h3>
             <button onClick={() => setLearnedWords([])} className="text-[10px] font-bold text-zinc-500 hover:text-red-500 transition-colors uppercase tracking-widest">Clear History</button>
           </div>
           <div className="flex flex-wrap gap-2">
             {learnedWords.length > 0 ? (
               learnedWords.map(id => {
                 const word = VOCAB_DATA.find(w => w.id === id);
                 return word && (
                   <div key={id} className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-400">
                     {word.word}
                   </div>
                 );
               })
             ) : (
               <p className="text-xs text-zinc-600 italic">No words learned yet. Start your journey above!</p>
             )}
           </div>
        </div>
      )}
    </div>
  );
}
