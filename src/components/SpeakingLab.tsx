/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect, useMemo } from 'react';
import { 
  Mic, 
  Square, 
  RotateCcw, 
  Clock, 
  AlertCircle, 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Headphones, 
  CheckCircle,
  HelpCircle,
  History,
  Timer,
  Zap,
  Volume2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SPEAKING_DATA, SpeakingQuestion } from '../data/speakingData';

export default function SpeakingLab() {
  const [view, setView] = useState<'list' | 'practice'>('list');
  const [selectedQuestion, setSelectedQuestion] = useState<SpeakingQuestion | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isPreparing, setIsPreparing] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [timer, setTimer] = useState(0);
  const [prepTimer, setPrepTimer] = useState(0);
  const [permissionError, setPermissionError] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSample, setShowSample] = useState(false);
  const [evaluation, setEvaluation] = useState<Record<string, number>>({});
  const [hasEvaluated, setHasEvaluated] = useState(false);
  
  const [completedIds, setCompletedIds] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('speaking_practice_count');
    return saved ? JSON.parse(saved) : {};
  });

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const prepIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    rootRef.current?.scrollIntoView({ block: 'start' });
  }, [view, selectedQuestion?.id]);

  const filteredQuestions = useMemo(() => {
    return SPEAKING_DATA.filter(q => 
      q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.question.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const startPreparation = () => {
    if (!selectedQuestion) return;
    setIsPreparing(true);
    setPrepTimer(60);
    prepIntervalRef.current = setInterval(() => {
      setPrepTimer(prev => {
        if (prev <= 1) {
          if (prepIntervalRef.current) clearInterval(prepIntervalRef.current);
          startRecording();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;
      chunksRef.current = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        setAudioURL(URL.createObjectURL(blob));
      };

      recorder.start();
      setIsRecording(true);
      setIsPreparing(false);
      setTimer(0);
      setAudioURL(null);
      setPermissionError(false);
      setHasEvaluated(false);

      const maxTime = selectedQuestion?.part === 2 ? 120 : (selectedQuestion?.part === 3 ? 60 : 30);

      timerIntervalRef.current = setInterval(() => {
        setTimer(prev => {
          if (prev >= maxTime) {
            stopRecording();
            return prev;
          }
          return prev + 1;
        });
      }, 1000);
    } catch (err) {
      console.error(err);
      setPermissionError(true);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }
    }
  };

  const handleSelectQuestion = (q: SpeakingQuestion) => {
    setSelectedQuestion(q);
    setView('practice');
    setAudioURL(null);
    setTimer(0);
    setPrepTimer(0);
    setIsRecording(false);
    setIsPreparing(false);
    setShowSample(false);
    setHasEvaluated(false);
    setEvaluation({});
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
    if (prepIntervalRef.current) {
      clearInterval(prepIntervalRef.current);
      prepIntervalRef.current = null;
    }
  };

  const submitEvaluation = () => {
    if (!selectedQuestion) return;
    const count = (completedIds[selectedQuestion.id] || 0) + 1;
    const newCounts = { ...completedIds, [selectedQuestion.id]: count };
    setCompletedIds(newCounts);
    localStorage.setItem('speaking_practice_count', JSON.stringify(newCounts));
    setHasEvaluated(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getPartColor = (part: number) => {
    if (part === 1) return 'text-sky-400 bg-sky-900/20';
    if (part === 2) return 'text-amber-400 bg-amber-900/20';
    return 'text-rose-400 bg-rose-900/20';
  };

  const evaluationCriteria = ['Fluency', 'Grammar', 'Vocabulary', 'Pronunciation'];
  const canSaveEvaluation = evaluationCriteria.every(criteria => evaluation[criteria]);
  const totalPracticeCount = Object.values(completedIds).reduce((a, b) => (a as any) + (b as any), 0);

  return (
    <div ref={rootRef} className="min-h-full flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {view === 'list' ? (
        /* List View */
        <div className="space-y-8 flex-1 overflow-visible md:overflow-hidden flex flex-col">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Speaking Lab</h1>
              <p className="text-zinc-500">Practice all three parts of the IELTS Speaking exam with real-time feedback.</p>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-zinc-900 border border-zinc-800 p-1 rounded-xl flex">
                <div className="flex items-center gap-3 px-4 py-2">
                  <Zap size={16} className="text-blue-500" />
                  <div>
                     <p className="text-[10px] font-bold text-zinc-500 uppercase">Total Practice</p>
                     <p className="text-sm font-bold text-white">{totalPracticeCount as any}</p>
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
                placeholder="Search topics or questions..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-2xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-600/50"
              />
            </div>
          </div>

          <div className="flex-1 overflow-visible md:overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:pr-2 scrollbar-hide pb-8">
            {filteredQuestions.map((q) => (
              <div 
                key={q.id}
                onClick={() => handleSelectQuestion(q)}
                className="group p-6 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-blue-600/50 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${getPartColor(q.part)}`}>
                      Part {q.part}
                    </span>
                    {completedIds[q.id] && (
                      <div className="flex items-center gap-1 text-green-500 text-[10px] font-bold">
                        <CheckCircle size={12} />
                        {completedIds[q.id]}x
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">{q.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed mb-4 line-clamp-2 italic text-left">"{q.question}"</p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                  <div className="flex items-center gap-4 text-zinc-500 text-[10px] font-bold uppercase">
                    <span className="flex items-center gap-1"><History size={12} /> {q.difficulty}</span>
                    <span className="flex items-center gap-1"><Mic size={12} /> {q.category}</span>
                  </div>
                  <ChevronRight size={18} className="text-zinc-700 group-hover:text-white transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Practice Interface */
        <div className="flex-1 flex flex-col gap-4 overflow-visible lg:overflow-hidden max-w-5xl mx-auto w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
            <button 
              onClick={() => { setView('list'); stopRecording(); }}
              className="flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-white transition-colors"
            >
              <ChevronLeft size={16} />
              BACK TO LIST
            </button>
            
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
               {selectedQuestion?.part === 2 && !isRecording && !audioURL && (
                 <button 
                  onClick={startPreparation}
                  disabled={isPreparing}
                  className="px-4 py-2 bg-zinc-800 text-white rounded-full text-[10px] font-bold hover:bg-zinc-700 transition-all disabled:opacity-50"
                 >
                   {isPreparing ? `PREPARING: ${prepTimer}s` : 'START PREP (1m)'}
                 </button>
               )}
               <div className={`px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900 flex items-center gap-2 font-mono text-xs font-bold ${isRecording ? 'text-red-500 animate-pulse' : 'text-zinc-400'}`}>
                 <Timer size={14} />
                 {formatTime(timer)}
               </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col lg:flex-row gap-6 overflow-visible lg:overflow-hidden">
            {/* Left Column: Question & Controls */}
            <div className="flex-1 flex flex-col gap-4 overflow-visible lg:overflow-hidden">
               {/* Question Card */}
               <div className="bg-zinc-900 border border-zinc-800 rounded-[40px] p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest ${getPartColor(selectedQuestion?.part || 1)}`}>
                      IELTS Speaking Part {selectedQuestion?.part}
                    </span>
                    <div className="flex items-center gap-2 text-zinc-500 text-xs font-medium">
                      <Clock size={14} />
                      <span>Limit: {selectedQuestion?.part === 2 ? '02:00' : (selectedQuestion?.part === 3 ? '01:00' : '00:30')}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-white leading-tight">{selectedQuestion?.question}</h2>
                    {selectedQuestion?.points && (
                      <div className="p-6 bg-black/40 rounded-3xl border border-zinc-800/50">
                        <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">You should say:</p>
                        <ul className="space-y-3">
                          {selectedQuestion.points.map((p, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-center p-8 bg-zinc-950/50 rounded-3xl border border-zinc-800/50">
                     {isRecording ? (
                       <button 
                        onClick={stopRecording}
                        className="group flex flex-col items-center gap-4"
                       >
                         <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center text-black shadow-xl shadow-white/5 group-hover:scale-105 transition-all">
                           <Square size={32} fill="currentColor" />
                         </div>
                         <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest animate-pulse">Recording Live...</span>
                       </button>
                     ) : (
                       <button 
                        onClick={startRecording}
                        disabled={isPreparing}
                        className="group flex flex-col items-center gap-4 disabled:opacity-30"
                       >
                         <div className="w-20 h-20 bg-blue-600 rounded-[2rem] flex items-center justify-center text-white shadow-xl shadow-blue-600/20 group-hover:scale-105 transition-all">
                           <Mic size={36} />
                         </div>
                         <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Click to Record</span>
                       </button>
                     )}
                  </div>
               </div>

               {/* Playback & Meta */}
               <div className={`p-6 rounded-[32px] border transition-all ${audioURL ? 'bg-blue-600/5 border-blue-600/20' : 'bg-zinc-900 border-zinc-800 grayscale opacity-50'}`}>
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${audioURL ? 'bg-blue-600 text-white' : 'bg-zinc-800 text-zinc-600'}`}>
                      <Volume2 size={24} />
                    </div>
                    <div className="flex-1 w-full">
                       {audioURL ? (
                         <div className="space-y-4">
                           <div className="flex items-center justify-between mb-1">
                              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Voice Recording</span>
                              <span className="text-[10px] font-mono text-blue-400">{formatTime(timer)}</span>
                           </div>
                           <audio src={audioURL} controls className="w-full h-8 brightness-90 filter" />
                         </div>
                       ) : (
                         <div className="text-center md:text-left">
                            <p className="text-sm font-bold text-zinc-500">No recording found</p>
                            <p className="text-[10px] text-zinc-600 uppercase tracking-widest">Speak into your mic to begin</p>
                         </div>
                       )}
                    </div>
                    {audioURL && (
                      <button 
                        onClick={() => { setAudioURL(null); setTimer(0); setHasEvaluated(false); setEvaluation({}); }}
                        className="p-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white rounded-xl transition-all"
                      >
                        <RotateCcw size={18} />
                      </button>
                    )}
                  </div>
               </div>
            </div>

            {/* Right Column: Evaluation & Sample */}
            <div className="w-full lg:w-80 flex flex-col gap-4">
               {/* Self Evaluation */}
               <div className="bg-zinc-900 border border-zinc-800 rounded-[32px] p-6 space-y-6">
                  <h3 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-500" />
                    Self-Evaluation
                  </h3>
                  
                  <div className="space-y-6">
                    {evaluationCriteria.map(criteria => (
                      <div key={criteria} className="space-y-2">
                        <div className="flex items-center justify-between text-[10px] font-bold text-zinc-500 uppercase">
                          <span>{criteria}</span>
                          <span>{evaluation[criteria] || 0}/5</span>
                        </div>
                        <div className="flex gap-1.5">
                          {[1, 2, 3, 4, 5].map(score => (
                            <button
                              key={score}
                              type="button"
                              disabled={hasEvaluated}
                              onClick={() => setEvaluation(prev => ({ ...prev, [criteria]: score }))}
                              className={`flex-1 h-9 rounded-xl text-xs font-bold transition-all ${
                                (evaluation[criteria] || 0) >= score ? 'bg-blue-600 text-white' : 'bg-zinc-800 text-zinc-500 hover:bg-zinc-700 hover:text-white'
                              }`}
                            >
                              {score}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={submitEvaluation}
                    disabled={!canSaveEvaluation || hasEvaluated}
                    className="w-full py-3 bg-white text-zinc-950 rounded-xl text-xs font-bold hover:bg-zinc-200 transition-all disabled:opacity-30"
                  >
                    {hasEvaluated ? 'PRACTICE SAVED' : 'SAVE PRACTICE'}
                  </button>
               </div>

               {/* Sample Answer */}
               <div className="bg-zinc-900 border border-zinc-800 rounded-[32px] p-6 space-y-4">
                  <button 
                    onClick={() => setShowSample(!showSample)}
                    className="w-full flex items-center justify-between text-xs font-bold text-zinc-400 hover:text-white"
                  >
                    <div className="flex items-center gap-2">
                      <HelpCircle size={14} />
                      SAMPLE ANSWER
                    </div>
                    {showSample ? <ChevronLeft size={14} className="rotate-90" /> : <ChevronRight size={14} className="rotate-90" />}
                  </button>
                  
                  <AnimatePresence>
                    {showSample && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs text-zinc-500 leading-relaxed italic bg-black/40 p-4 rounded-2xl border border-zinc-800">
                          {selectedQuestion?.sampleAnswer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
               </div>
            </div>
          </div>
        </div>
      )}

      {permissionError && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md p-4 bg-red-900/90 backdrop-blur-xl border border-red-500 text-white rounded-2xl flex items-center gap-4 z-50 animate-in slide-in-from-bottom-10">
          <AlertCircle size={24} />
          <div className="flex-1">
            <p className="text-sm font-bold">Microphone Error</p>
            <p className="text-[10px] opacity-80">Please check your browser permissions to use the speaking recorder.</p>
          </div>
          <button onClick={() => setPermissionError(false)} className="p-2 hover:bg-white/10 rounded-lg">
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
