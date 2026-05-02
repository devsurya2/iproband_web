/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BookOpen, ChevronRight, Search } from 'lucide-react';
import { MODULES } from '../constants';
import { Module } from '../types';

interface ModulesListProps {
  onModuleSelect: (id: string) => void;
}

export default function ModulesList({ onModuleSelect }: ModulesListProps) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Course Modules</h1>
          <p className="opacity-60">Explore 6 foundational areas critical for IELTS success.</p>
        </div>
        <div className="relative group">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40 group-focus-within:text-blue-600 transition-colors" />
          <input 
            type="text" 
            placeholder="Search topics..." 
            className="pl-12 pr-6 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all w-full md:w-64"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MODULES.map((module) => (
          <div key={module.id}>
            <ModuleCard module={module} onSelect={onModuleSelect} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ModuleCard({ module, onSelect }: { module: Module; onSelect: (id: string) => void }) {
  return (
    <div 
      onClick={() => onSelect(module.id)}
      className="group p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-500 transition-all cursor-pointer shadow-sm hover:shadow-md"
    >
      <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-zinc-800 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
        <BookOpen size={20} />
      </div>
      <h5 className="font-bold text-slate-900 dark:text-white mb-1">{module.title}</h5>
      <p className="text-xs text-slate-500 dark:text-zinc-400 mb-6 leading-relaxed line-clamp-2">
        {module.description}
      </p>
      <div className="flex items-center justify-between text-[10px] font-bold uppercase text-slate-400">
        <span>0% Done</span>
        <span className="text-blue-500 group-hover:translate-x-1 transition-transform">Explore →</span>
      </div>
    </div>
  );
}
