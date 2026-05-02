/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BarChart3, CheckCircle2, TrendingUp, Target, Award } from 'lucide-react';
import { UserProgress } from '../types';
import { MODULES } from '../constants';

interface ProgressTrackerProps {
  progress: UserProgress;
}

export default function ProgressTracker({ progress }: ProgressTrackerProps) {
  const totalLessons = MODULES.reduce((acc, mod) => acc + mod.lessons.length, 0);
  const completedPercentage = Math.round((progress.completedLessons.length / totalLessons) * 100);

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Learning Journey</h1>
          <p className="opacity-60">Visualizing your progress towards Band 8.5.</p>
        </div>
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map(i => (
             <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-zinc-950 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-[10px] font-bold">
               {String.fromCharCode(64 + i)}
             </div>
          ))}
          <div className="w-10 h-10 rounded-full border-2 border-white dark:border-zinc-950 bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">
            +12
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-2 p-8 rounded-[40px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-xl">Module Completion</h3>
            <span className="text-sm font-bold text-blue-600">{completedPercentage}% Overall</span>
          </div>
          
          <div className="space-y-6">
            {MODULES.map((module) => {
               const moduleLessons = module.lessons.map(l => l.id);
               const doneInModule = progress.completedLessons.filter(id => moduleLessons.includes(id)).length;
               const pct = (doneInModule / moduleLessons.length) * 100;

               return (
                 <div key={module.id} className="space-y-2">
                   <div className="flex justify-between text-xs font-bold uppercase tracking-tight">
                     <span className="opacity-40">{module.title}</span>
                     <span>{doneInModule} / {moduleLessons.length}</span>
                   </div>
                   <div className="h-3 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                     <div 
                      className="h-full bg-blue-600 transition-all duration-1000" 
                      style={{ width: `${pct}%` }}
                     />
                   </div>
                 </div>
               );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-8 rounded-[40px] bg-zinc-900 text-white shadow-xl shadow-zinc-900/20 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-[28px] bg-blue-600 flex items-center justify-center mb-6 shadow-2xl shadow-blue-500/20">
              <Award size={40} />
            </div>
            <h3 className="font-bold text-xl mb-2">Achievement Rank</h3>
            <p className="text-sm opacity-60 mb-6 font-mono uppercase tracking-widest">ADVANCED LEARNER</p>
            <div className="w-full py-4 px-6 rounded-2xl bg-white/5 flex flex-col gap-1 items-start">
              <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest text-left">NEXT MILESTONE</span>
              <span className="text-xs font-medium text-left">Complete "Academic Essay" to reach Proficient level.</span>
            </div>
          </div>

          <div className="p-8 rounded-[40px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-green-100 text-green-600">
                <TrendingUp size={18} />
              </div>
              <h3 className="font-bold">Strength Areas</h3>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Grammar', value: 92 },
                { label: 'Vocabulary', value: 78 },
                { label: 'Reading', value: 85 },
              ].map(stat => (
                <div key={stat.label} className="flex items-center justify-between">
                  <span className="text-xs font-medium opacity-60">{stat.label}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: `${stat.value}%` }} />
                    </div>
                    <span className="text-[10px] font-bold">{stat.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
