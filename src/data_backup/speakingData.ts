/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SpeakingQuestion {
  id: string;
  part: 1 | 2 | 3;
  title: string;
  question: string;
  points?: string[]; // for Part 2 cue cards
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  sampleAnswer?: string;
}

export const SPEAKING_DATA: SpeakingQuestion[] = [
  // PART 1 (20 questions)
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `s1-${i + 1}`,
    part: 1 as const,
    title: ['Work', 'Study', 'Hometown', 'Accommodation', 'Hobbies', 'Weather', 'Food', 'Music', 'Sports', 'Photography'][i % 10],
    question: `What do you like most about your ${['work', 'studies', 'hometown', 'current home', 'favourite hobby', 'local weather', 'local food', 'favourite music', 'favourite sport', 'interest in photography'][i % 10]}?`,
    difficulty: (i % 3 === 0 ? 'Easy' : i % 3 === 1 ? 'Medium' : 'Hard') as any,
    category: 'Daily Life',
    sampleAnswer: "That's an interesting question. I'd say the most appealing aspect is the diversity it offers. Every day is different, and I get to meet people from all walks of life, which keeps things exciting."
  })),
  // PART 2 (15 questions)
  ...Array.from({ length: 15 }, (_, i) => ({
    id: `s2-${i + 1}`,
    part: 2 as const,
    title: ['Memorable Journey', 'Influential Person', 'Favourite Book', 'Exciting Event', 'Historical Building'][i % 5],
    question: `Describe ${['a journey that you remember well', 'a person who has influenced you greatly', 'a book you enjoyed reading recently', 'an exciting event you attended', 'a historical building in your country'][i % 5]}.`,
    points: [
      "What it was / Who it was",
      "When and where it happened",
      "Who was involved",
      "Explain why it was significant or memorable to you"
    ],
    difficulty: (i % 2 === 0 ? 'Medium' : 'Hard') as any,
    category: 'Experience',
    sampleAnswer: "I'd like to talk about a journey I took two years ago to the mountains. It was a solo trip and it really helped me clear my mind. I started from the city early morning..."
  })),
  // PART 3 (15 questions)
  ...Array.from({ length: 15 }, (_, i) => ({
    id: `s3-${i + 1}`,
    part: 3 as const,
    title: ['Technology Impact', 'Environment Issues', 'Education Systems', 'Globalisation', 'Artificial Intelligence'][i % 5],
    question: `How do you think ${['modern technology', 'environmental awareness', 'digital education', 'global trade', 'AI in the workplace'][i % 5]} will change society in the next twenty years?`,
    difficulty: 'Hard' as const,
    category: 'Analysis',
    sampleAnswer: "In my view, the impact will be profound. We are likely to see a shift towards more decentralised systems, where individual autonomy is increased through tech, though this brings security risks."
  }))
];
