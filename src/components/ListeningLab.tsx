/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Headphones, Play, Pause, RotateCcw, AlertCircle } from 'lucide-react';

export default function ListeningLab() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const questions = [
    { q: "Where is the library located?", options: ["North Campus", "South Campus", "Main Square"] },
    { q: "What time does it close?", options: ["8:00 PM", "9:00 PM", "Midnight"] }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-2">Listening Practice</h1>
        <p className="opacity-60">Listen to the audio track and answer the questions below.</p>
      </div>

      <div className="p-10 rounded-[40px] bg-zinc-900 text-white shadow-2xl shadow-zinc-900/20 space-y-8">
        <div className="flex flex-col items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
            {isPlaying ? <Pause size={40} fill="currentColor" onClick={() => setIsPlaying(false)} className="cursor-pointer" /> : <Play size={40} fill="currentColor" className="ml-1 cursor-pointer" onClick={() => setIsPlaying(true)} />}
          </div>
          <div className="text-center">
            <h3 className="font-bold text-xl">Campus Facilities Overview</h3>
            <p className="text-xs opacity-40 font-mono tracking-widest mt-1 uppercase">Track 01 • Academic Life</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 w-1/3" />
          </div>
          <div className="flex justify-between text-[10px] font-mono opacity-40">
            <span>01:12</span>
            <span>03:45</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {questions.map((item, i) => (
          <div key={i} className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-sm space-y-4">
            <p className="font-bold text-white">Question {i + 1}</p>
            <p className="text-sm opacity-60 leading-relaxed text-zinc-300">{item.q}</p>
            <div className="space-y-2">
              {item.options.map(opt => (
                <button key={opt} className="w-full p-3 rounded-xl border border-zinc-800 text-left text-xs font-medium text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors">
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-3xl bg-blue-900/10 border border-blue-800 flex items-start gap-4">
        <div className="p-2 rounded-lg bg-blue-600 text-white">
          <AlertCircle size={20} />
        </div>
        <div>
          <h4 className="font-bold text-sm text-blue-100 italic">Listening Strategy</h4>
          <p className="text-xs text-blue-100/60 leading-relaxed mt-1">
            Always read the questions before the audio starts. Look for keywords that will signal when the answer is about to be spoken.
          </p>
        </div>
      </div>
    </div>
  );
}
