/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  LayoutDashboard, 
  BookOpen, 
  PenTool, 
  Mic, 
  BookText, 
  BarChart3, 
  Home,
  Languages,
  Eye,
  Headphones,
  GraduationCap,
  X
} from 'lucide-react';
import { PageId } from '../types';

interface SidebarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  isDarkMode: boolean;
  onClose?: () => void;
}

export default function Sidebar({ currentPage, setCurrentPage, isDarkMode, onClose }: SidebarProps) {
  const menuItems: { id: PageId; icon: any; label: string }[] = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'reading-practice', icon: Eye, label: 'Reading' },
    { id: 'writing-lab', icon: PenTool, label: 'Writing Lab' },
    { id: 'vocab-builder', icon: Languages, label: 'Vocabulary' },
    { id: 'speaking-practice', icon: Mic, label: 'Speaking' },
  ];

  return (
    <aside className={`h-full w-full border-r flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-black border-zinc-900' : 'bg-black border-zinc-900'}`}>
      <div className="p-6 flex items-center justify-between">
        <div className="cursor-pointer flex items-center gap-2" onClick={() => setCurrentPage('home')}>
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold ring-2 ring-blue-600/20">I</div>
          <h1 className="text-xl font-bold tracking-tight text-white">
            IPro<span className="text-blue-600 underline decoration-2 underline-offset-4">Band</span>
          </h1>
        </div>
        {onClose && (
          <button onClick={onClose} className="lg:hidden p-2 text-zinc-500 hover:text-white">
            <X size={20} />
          </button>
        )}
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <div className="pb-2 px-4 text-[10px] uppercase tracking-widest font-bold text-zinc-500">
          Main Menu
        </div>
        
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${
              currentPage === item.id 
                ? 'bg-zinc-900 text-blue-400 border-l-4 border-blue-600 font-medium' 
                : 'hover:bg-zinc-900 text-zinc-400'
            }`}
          >
            <item.icon size={18} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto p-8 border-t border-zinc-900 text-center">
        <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest leading-relaxed">
          IProBand • v1.0<br/>Learning Made Simple
        </p>
      </div>
    </aside>
  );
}
