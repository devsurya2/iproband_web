/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Play, CheckCircle2, Clock, BookOpen } from 'lucide-react';
import { MODULES } from '../constants';

interface ModuleDetailProps {
  moduleId: string;
  onStartLesson: (lessonId: string) => void;
}

export default function ModuleDetail({ moduleId, onStartLesson }: ModuleDetailProps) {
  const module = MODULES.find(m => m.id === moduleId);

  if (!module) return <div>Module not found</div>;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="w-full md:w-1/3 aspect-video md:aspect-square bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-blue-500/20">
          <BookOpen size={80} strokeWidth={1} />
        </div>
        <div className="flex-1">
          <div className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-widest">{module.category}</div>
          <h1 className="text-4xl font-bold mb-4">{module.title}</h1>
          <p className="text-lg opacity-60 mb-8 leading-relaxed">
            {module.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-xs font-semibold">
              <Clock size={16} />
              <span>45 mins</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-xs font-semibold">
              <CheckCircle2 size={16} />
              <span>{module.lessons.length} Lessons</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-6">Curriculum</h2>
        {module.lessons.map((lesson, idx) => (
          <div 
            key={lesson.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group"
          >
            <div className="flex min-w-0 items-center gap-6">
              <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-bold text-sm">
                {idx + 1}
              </div>
              <div className="min-w-0">
                <h3 className="font-bold mb-1">{lesson.title}</h3>
                <p className="text-xs opacity-60">Lesson • 10-15 mins</p>
              </div>
            </div>
            <button 
              onClick={() => onStartLesson(lesson.id)}
              className="w-full sm:w-auto justify-center px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-bold flex items-center gap-2 transition-transform active:scale-95 hover:bg-blue-700"
            >
              <Play size={16} fill="currentColor" />
              Start Lesson
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
