/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  BookOpen, 
  Flame, 
  CheckCircle2,
  GraduationCap
} from 'lucide-react';
import { UserProgress, PageId } from '../types';
import { MODULES } from '../constants';

interface DashboardProps {
  progress: UserProgress;
  onNavigate: (page: PageId) => void;
}

export default function Dashboard({ progress, onNavigate }: DashboardProps) {
  const stats = [
    { label: 'Completed', value: progress.completedLessons.length, icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-500/10' },
    { label: 'Streak', value: `${progress.streak} Days`, icon: Flame, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { label: 'Vocabulary', value: progress.vocabList.length, icon: GraduationCap, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  ];
  const moduleRoutes: Partial<Record<string, PageId>> = {
    Vocabulary: 'vocab-builder',
    Reading: 'reading-practice',
    Writing: 'writing-lab',
    Speaking: 'speaking-practice',
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl flex items-center gap-4">
            <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
               <stat.icon size={24} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</p>
              <p className="text-xl font-bold text-white tracking-tight">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modules Overview */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h4 className="text-2xl font-bold text-white tracking-tight">Main Learning Modules</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES.filter(m => m.category !== 'Grammar' && m.category !== 'Listening').map((module, i) => {
            const colors = [
              { bg: 'bg-emerald-900/20', text: 'text-emerald-400' },
              { bg: 'bg-orange-900/20', text: 'text-orange-400' },
              { bg: 'bg-blue-900/20', text: 'text-blue-400' },
              { bg: 'bg-purple-900/20', text: 'text-purple-400' }
            ];
            const color = colors[i % colors.length];
            return (
              <div 
                key={module.id}
                onClick={() => onNavigate(moduleRoutes[module.category] || 'modules')}
                className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 shadow-sm hover:border-blue-500 transition-all group cursor-pointer"
              >
                <div className={`w-12 h-12 ${color.bg} ${color.text} rounded-xl flex items-center justify-center mb-6`}>
                  <BookOpen size={24} />
                </div>
                <h5 className="font-bold text-xl text-white mb-2">{module.category}</h5>
                <p className="text-sm text-zinc-400 mb-8 leading-relaxed line-clamp-2">{module.description}</p>
                <div className="flex items-center justify-between text-[10px] font-bold uppercase text-zinc-500 tracking-widest">
                  <span>MODULE {i + 1}</span>
                  <span className="text-blue-400 group-hover:translate-x-1 transition-transform">Open Module →</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
