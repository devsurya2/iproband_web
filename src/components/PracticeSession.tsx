/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { CheckCircle2, AlertCircle, ArrowRight, X, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { MODULES } from '../constants';

interface PracticeSessionProps {
  moduleId: string;
  lessonId: string;
  onComplete: (score: number) => void;
  onCancel: () => void;
}

export default function PracticeSession({ moduleId, lessonId, onComplete, onCancel }: PracticeSessionProps) {
  const module = MODULES.find(m => m.id === moduleId);
  const lesson = module?.lessons.find(l => l.id === lessonId);
  const [currentExerciseIdx, setCurrentExerciseIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [userCorrection, setUserCorrection] = useState('');

  if (!lesson) return <div>Lesson not found</div>;

  const exercise = lesson.exercises[currentExerciseIdx];
  const totalExercises = lesson.exercises.length;

  const handleSubmit = () => {
    if (submitted) return;
    
    let correct = false;
    if (exercise.type === 'mcq') {
      correct = selectedAnswer === exercise.correctAnswer;
    } else if (exercise.type === 'fill-in-blanks' || exercise.type === 'correction') {
      correct = (selectedAnswer || userCorrection).toLowerCase().trim() === exercise.correctAnswer.toLowerCase().trim();
    } else {
      correct = true; // Writing/Speaking are practice-based
    }

    setIsCorrect(correct);
    setSubmitted(true);
  };

  const handleNext = () => {
    if (currentExerciseIdx < totalExercises - 1) {
      setCurrentExerciseIdx(prev => prev + 1);
      setSelectedAnswer('');
      setUserCorrection('');
      setSubmitted(false);
    } else {
      onComplete(100);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 min-h-full flex flex-col pt-4 md:pt-8">
      {/* Exercise header */}
      <div className="flex items-center justify-between">
        <button onClick={onCancel} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
          <X size={20} />
        </button>
        <div className="flex-1 px-4 md:px-8">
          <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 transition-all duration-500" 
              style={{ width: `${((currentExerciseIdx + 1) / totalExercises) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="text-xs font-bold opacity-40">{currentExerciseIdx + 1} / {totalExercises}</div>
      </div>

      <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider">
            {exercise.type.replace('-', ' ')}
          </div>
          <h2 className="text-2xl font-bold leading-tight">{exercise.question}</h2>
        </div>

        {/* MCQ */}
        {exercise.type === 'mcq' && (
          <div className="space-y-3">
            {exercise.options?.map((option) => (
              <button
                key={option}
                disabled={submitted}
                onClick={() => setSelectedAnswer(option)}
                className={`w-full p-4 rounded-2xl border text-left font-medium transition-all flex items-center justify-between group ${
                  selectedAnswer === option 
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-600' 
                    : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                } ${
                  submitted && option === exercise.correctAnswer ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-600' : ''
                } ${
                  submitted && selectedAnswer === option && !isCorrect ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-600' : ''
                }`}
              >
                {option}
                {submitted && option === exercise.correctAnswer && <CheckCircle2 size={18} />}
                {submitted && selectedAnswer === option && !isCorrect && <AlertCircle size={18} />}
              </button>
            ))}
          </div>
        )}

        {/* Fill in Blanks / Correction */}
        {(exercise.type === 'fill-in-blanks' || exercise.type === 'correction') && (
          <div className="space-y-4">
            <input 
              type="text"
              value={userCorrection}
              onChange={(e) => setUserCorrection(e.target.value)}
              disabled={submitted}
              placeholder="Type your answer here..."
              className={`w-full p-5 rounded-2xl border dark:bg-zinc-900 focus:outline-none focus:ring-4 transition-all text-lg font-medium ${
                submitted 
                  ? isCorrect 
                    ? 'border-green-500 focus:ring-green-500/10' 
                    : 'border-red-500 focus:ring-red-500/10'
                  : 'border-zinc-200 dark:border-zinc-800 focus:border-blue-500 focus:ring-blue-500/10'
              }`}
            />
            {submitted && !isCorrect && (
              <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 text-sm">
                <span className="font-bold">Correct answer:</span> {exercise.correctAnswer}
              </div>
            )}
          </div>
        )}

        {/* Writing / Speaking Practice */}
        {(exercise.type === 'writing' || exercise.type === 'speaking') && (
          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-dashed border-zinc-300 dark:border-zinc-700 flex flex-col items-center justify-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center shadow-sm">
                <HelpCircle size={32} className="text-zinc-400" />
              </div>
              <p className="text-sm opacity-60 max-w-sm">This is a practice-oriented task. Refer to the model answer for comparison.</p>
            </div>
            {submitted && (
               <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm animate-in slide-in-from-top-2">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500" />
                  Model Answer Summary
                </h4>
                <p className="text-sm opacity-80 leading-relaxed italic">{exercise.sampleAnswer}</p>
              </div>
            )}
          </div>
        )}

        {/* Feedback / Explanation */}
        {submitted && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800"
          >
            <h4 className="font-bold mb-2">Explanation</h4>
            <p className="text-sm opacity-60 leading-relaxed">
              {exercise.explanation}
            </p>
          </motion.div>
        )}
      </div>

      {/* Action Footer */}
      <footer className="py-6 md:py-8 mt-auto border-t border-zinc-100 dark:border-zinc-900 flex flex-wrap justify-end gap-4">
        {!submitted ? (
          <button 
            disabled={!selectedAnswer && !userCorrection && exercise.type !== 'writing' && exercise.type !== 'speaking'}
            onClick={handleSubmit}
            className="px-10 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 rounded-full font-bold transition-all hover:opacity-90 active:scale-95 disabled:opacity-40"
          >
            Check Answer
          </button>
        ) : (
          <button 
            onClick={handleNext}
            className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold transition-all hover:bg-blue-700 active:scale-95 flex items-center gap-2"
          >
            {currentExerciseIdx < totalExercises - 1 ? 'Next Question' : 'Complete Session'}
            <ArrowRight size={18} />
          </button>
        )}
      </footer>
    </div>
  );
}
