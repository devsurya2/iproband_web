/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId = 
  | 'home' 
  | 'dashboard' 
  | 'modules' 
  | 'module-detail' 
  | 'practice' 
  | 'writing-lab' 
  | 'vocab-builder' 
  | 'speaking-practice' 
  | 'reading-practice' 
  | 'listening-practice' 
  | 'progress';

export interface Module {
  id: string;
  title: string;
  description: string;
  category: 'Grammar' | 'Vocabulary' | 'Reading' | 'Writing' | 'Speaking' | 'Listening';
  lessons: Lesson[];
  icon: string;
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  exercises: Exercise[];
}

export type ExerciseType = 'mcq' | 'fill-in-blanks' | 'correction' | 'writing' | 'speaking';

export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  sampleAnswer?: string;
  audioUrl?: string;
}

export interface UserProgress {
  completedLessons: string[]; // lesson ids
  scores: Record<string, number>; // exerciseId -> score
  vocabList: string[]; // learned word ids
  streak: number;
  lastPracticeDate: string;
}

export interface Word {
  id: string;
  term: string;
  meaning: string;
  example: string;
  category: string;
}
