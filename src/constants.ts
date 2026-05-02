/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Module, Word } from './types';

export const MODULES: Module[] = [
  {
    id: 'grammar-foundation',
    title: 'Grammar Foundation',
    description: 'Master the core grammatical structures required for high bands.',
    category: 'Grammar',
    icon: 'BookText',
    lessons: [
      {
        id: 'tenses-mastery',
        title: 'Tenses in Academic Context',
        content: 'IELTS Writing Task 1 often requires the simple past for describing trends in the past, while Task 2 requires present perfect and future forms for predictions.',
        exercises: [
          {
            id: 'tense-ex-1',
            type: 'mcq',
            question: 'Select the correct form: "The graph shows that the population ______ significantly since 1990."',
            options: ['increased', 'has increased', 'is increasing', 'will increase'],
            correctAnswer: 'has increased',
            explanation: 'The present perfect is used to describe a change that started in the past and continues to the present.'
          }
        ]
      },
      {
        id: 'active-passive',
        title: 'Active and Passive Voice',
        content: 'Passive voice is essential for formal reports in Writing Task 1.',
        exercises: [
          {
            id: 'voice-ex-1',
            type: 'correction',
            question: 'Rewrite in passive voice: "Researchers monitored the groups for six months."',
            correctAnswer: 'The groups were monitored by researchers for six months.',
            explanation: 'In academic writing, the focus is often on the action or the subject being acted upon.'
          }
        ]
      }
    ]
  },
  {
    id: 'vocab-phrasal',
    title: 'Vocabulary & Phrasal Verbs',
    description: 'Broaden your lexical resource with academic and topical vocabulary.',
    category: 'Vocabulary',
    icon: 'Languages',
    lessons: [
      {
        id: 'academic-vocab',
        title: 'Academic Word List (AWL)',
        content: 'Words like "analyze", "concept", and "formula" are crucial for higher bands.',
        exercises: [
          {
            id: 'vocab-ex-1',
            type: 'fill-in-blanks',
            question: 'The data provides a clear ______ of the current economic climate.',
            correctAnswer: 'analysis',
            explanation: '"Analysis" fits best as a noun in this context.'
          }
        ]
      }
    ]
  },
  {
    id: 'reading-skills',
    title: 'Reading Skills',
    description: 'Scanning, skimming, and answering complex question types.',
    category: 'Reading',
    icon: 'Eye',
    lessons: [
      {
        id: 'skimming-scanning',
        title: 'Speed Reading Techniques',
        content: 'Skimming is for getting the gist; scanning is for finding specific data.',
        exercises: [
          {
            id: 'read-ex-1',
            type: 'mcq',
            question: 'Which technique would you use to find a specific date in a text?',
            options: ['Skimming', 'Scanning', 'Intensive reading', 'Critical reading'],
            correctAnswer: 'Scanning',
            explanation: 'Scanning involves moving your eyes quickly over the text to locate specific information.'
          }
        ]
      }
    ]
  },
  {
    id: 'writing-skills',
    title: 'Writing Skills',
    description: 'Learn to structure reports and argumentative essays.',
    category: 'Writing',
    icon: 'PenTool',
    lessons: [
      {
        id: 'task-1-reports',
        title: 'IELTS Task 1: Data Reports',
        content: 'Summarize Information by selecting and reporting the main features.',
        exercises: [
          {
            id: 'write-ex-1',
            type: 'writing',
            question: 'Describe a bar chart showing coffee consumption in 5 countries.',
            correctAnswer: 'Model: The bar chart illustrates the amount of coffee consumed...',
            explanation: 'A good report starts with a paraphrase, followed by an overview of trends.',
            sampleAnswer: 'The chart provides information about the annual coffee intake in five distinct nations. Overall, it is evident that Finland leads the group, while Brazil shows the lowest consumption among the featured countries.'
          }
        ]
      }
    ]
  },
  {
    id: 'speaking-skills',
    title: 'Speaking Skills',
    description: 'Practice for Part 1, 2, and 3 of the speaking test.',
    category: 'Speaking',
    icon: 'Mic',
    lessons: [
      {
        id: 'part-2-cue-cards',
        title: 'Cue Card Strategy (Part 2)',
        content: 'You have 1 minute to prepare and 2 minutes to speak.',
        exercises: [
          {
            id: 'speak-ex-1',
            type: 'speaking',
            question: 'Describe a book you recently read. Include: what it was, why you read it, and how it affected you.',
            correctAnswer: 'N/A',
            explanation: 'Focus on fluency, coherence, and a wide range of vocabulary.'
          }
        ]
      }
    ]
  },
  {
    id: 'listening-skills',
    title: 'Listening Skills',
    description: 'Master track-based questions and various audio accents.',
    category: 'Listening',
    icon: 'Headphones',
    lessons: [
      {
        id: 'mcq-audio',
        title: 'Multiple Choice Audio',
        content: 'Listen for synonyms and distractors.',
        exercises: [
          {
            id: 'listen-ex-1',
            type: 'mcq',
            question: 'What time does the museum open on Sundays?',
            options: ['9:00 AM', '10:30 AM', '11:00 AM', 'Closed'],
            correctAnswer: '10:30 AM',
            explanation: 'The speaker mentions Sundays have a delayed opening compared to weekdays.'
          }
        ]
      }
    ]
  }
];

export const VOCABULARY: Word[] = [
  { id: 'w1', term: 'Mitigate', meaning: 'To make less severe, serious, or painful.', example: 'New measures were taken to mitigate the impact of the data breach.', category: 'Academic' },
  { id: 'w2', term: 'Ameliorate', meaning: 'To make something bad better.', example: 'Studies were conducted to see how the reform might ameliorate living conditions.', category: 'Formal' },
  { id: 'w3', term: 'Profound', meaning: 'Very great or intense.', example: 'The invention had a profound effect on the way we communicate.', category: 'Descriptive' },
  { id: 'w4', term: 'Cohesion', meaning: 'The action or fact of forming a united whole.', example: 'The essay lacked cohesion between the paragraphs.', category: 'IELTS Writing' },
  { id: 'w5', term: 'Exacerbate', meaning: 'To make a problem or bad situation worse.', example: 'Inflation will only exacerbate the existing poverty levels.', category: 'Academic' },
];
