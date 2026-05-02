import json
import random

categories = [
  'Essay Writing',
  'Letter Writing',
  'News Writing',
  'Report Writing',
  'Article Writing',
  'Creative Writing'
]

entries = []

# 1. Essay Writing
essay_subjects = ["Artificial Intelligence", "Universal Basic Income", "Remote Work", "Space Exploration", "Social Media", "Fast Fashion", "Genetic Engineering", "Urbanization", "Public Transport", "Cryptocurrency"]
essay_prompts = [
    "To what extent do you agree or disagree?",
    "Discuss both sides and give your opinion.",
    "What are the advantages and disadvantages of this?",
    "Is this a positive or negative development?"
]
for i, subj in enumerate(essay_subjects):
    entries.append({
        "id": f"e{i+1}",
        "category": "Essay Writing",
        "question": f"Some people believe that the rise of {subj} has significantly altered modern society. {random.choice(essay_prompts)}",
        "wordLimit": 250,
        "instructions": "Include an introduction, two body paragraphs with examples, and a conclusion.",
        "modelAnswer": f"The phenomenon of {subj} has undoubtedly become a central point of debate in contemporary society. While some argue that its proliferation brings unparalleled benefits, others express profound concern regarding its long-term implications.\n\nOn the one hand, proponents highlight the immense efficiency and connectivity it fosters. For instance, recent studies demonstrate that integrating {subj} into daily operations increases productivity by over 30%. Furthermore, it democratizes access to resources that were previously gated.\n\nConversely, detractors point out the severe socio-economic disruptions it causes. A significant drawback is the potential loss of traditional skills and community cohesion. When {subj} replaces human interaction or fundamental processes, we risk alienating vulnerable populations.\n\nIn conclusion, while {subj} presents formidable challenges, its advantages cannot be ignored. I believe that with stringent regulations and ethical oversight, we can harness its potential while mitigating the risks."
    })

# 2. Letter Writing
letter_scenarios = [
    ("complain about terrible service", "a restaurant manager", "formal"),
    ("apply for a senior position", "a hiring director", "formal"),
    ("invite a guest speaker", "a renowned author", "formal"),
    ("apologize for missing an event", "a close friend", "informal"),
    ("request funding", "a local council", "formal"),
    ("resign from your job", "your supervisor", "formal"),
    ("thank someone for their help", "a former teacher", "semi-formal"),
    ("suggest improvements", "a gym manager", "formal"),
    ("explain a delay in a project", "a client", "formal"),
    ("organize a reunion", "former classmates", "informal")
]
for i, (action, recipient, tone) in enumerate(letter_scenarios):
    entries.append({
        "id": f"l{i+1}",
        "category": "Letter Writing",
        "question": f"Write a letter to {recipient} to {action}.",
        "wordLimit": 150,
        "instructions": f"Ensure your tone is appropriate ({tone}). Include necessary details and a clear call to action.",
        "modelAnswer": f"Dear {'Sir/Madam' if tone != 'informal' else 'Alex'},\n\nI am writing to you today regarding the recent situation. I felt it was absolutely necessary to reach out to you to {action}.\n\nSpecifically, the issue at hand requires careful attention. Over the past few weeks, there have been several instances that prompted this communication. I believe that by addressing this proactively, we can find a mutually beneficial resolution.\n\nI would appreciate it if we could discuss this further at your earliest convenience. Thank you for your time and understanding.\n\n{'Sincerely' if tone != 'informal' else 'Best wishes'},\n\nJordan Lee"
    })

# 3. News Writing
news_events = ["a major earthquake", "a historic election", "a groundbreaking scientific discovery", "a local festival", "a massive cyberattack", "a new public transit system opening", "a controversial law passing", "a championship sports game", "an unexpected celebrity visit", "a wildlife conservation milestone"]
for i, event in enumerate(news_events):
    entries.append({
        "id": f"n{i+1}",
        "category": "News Writing",
        "question": f"Write a news report covering {event}.",
        "wordLimit": 200,
        "instructions": "Include a headline, a lead paragraph (5 Ws), and a quote.",
        "modelAnswer": f"BREAKING: UNPRECEDENTED DEVELOPMENTS IN RECENT {event.upper()}\n\nMETROPOLIS — In a stunning turn of events, the city witnessed {event} earlier today, leaving citizens and officials reeling. The incident occurred shortly after 10:00 AM local time and has already prompted international media coverage.\n\n\"We were completely caught off guard, but our response teams acted flawlessly,\" stated Mayor Sarah Jenkins during a press briefing. Authorities have secured the immediate area and are conducting preliminary assessments.\n\nExperts predict that the long-term impact of this event will reshape local policy for years to come. Updates will be provided as more information becomes available."
    })

# 4. Report Writing
report_topics = ["declining sales figures", "employee satisfaction survey results", "environmental impact of a new factory", "feasibility of a four-day work week", "school cafeteria improvements", "public library usage statistics", "annual budget deficit", "remote work productivity", "traffic congestion in the city center", "adoption of renewable energy in the office"]
for i, topic in enumerate(report_topics):
    entries.append({
        "id": f"r{i+1}",
        "category": "Report Writing",
        "question": f"Write a professional report analyzing {topic}.",
        "wordLimit": 200,
        "instructions": "Use subheadings, bullet points, and provide clear recommendations.",
        "modelAnswer": f"REPORT: ANALYSIS OF {topic.upper()}\n\n1. Introduction\nThis report analyzes the current data regarding {topic}. The objective is to identify key trends and propose actionable solutions.\n\n2. Findings\n- There has been a notable shift in the primary metrics over the last quarter.\n- Stakeholder feedback indicates a 40% dissatisfaction rate with the current processes.\n- Resource allocation remains a critical bottleneck.\n\n3. Conclusion & Recommendations\nBased on the data, the current trajectory is unsustainable. It is highly recommended that management:\n- Implement a revised strategy within 30 days.\n- Conduct follow-up surveys to monitor progress.\n- Reallocate 15% of the budget to address the core deficiencies highlighted above."
    })

# 5. Article Writing
article_themes = ["the benefits of a plant-based diet", "how to survive a digital detox", "the rise of indie game developers", "budget travel tips", "the psychology of procrastination", "minimalism in modern homes", "the future of augmented reality", "navigating freelance work", "the history of street art", "mindfulness for teenagers"]
for i, theme in enumerate(article_themes):
    entries.append({
        "id": f"a{i+1}",
        "category": "Article Writing",
        "question": f"Write an engaging magazine article about {theme}.",
        "wordLimit": 300,
        "instructions": "Use a catchy title, engaging hook, and conversational tone.",
        "modelAnswer": f"THE ULTIMATE GUIDE: {theme.upper()}\n\nHave you ever wondered why {theme} has suddenly taken the world by storm? You aren't alone. Everywhere you look, from social media feeds to casual coffee shop chatter, people are diving deep into this fascinating trend.\n\nAt its core, it's about simplifying our lives and finding meaning in the chaos. When you first approach {theme}, it can seem daunting. However, the secret lies in starting small. Experts suggest that integrating just one new habit a day can lead to monumental shifts in your overall well-being.\n\nMoreover, the community surrounding this movement is incredibly supportive. Online forums are brimming with shared experiences and tips that can save beginners countless hours of frustration. \n\nSo, why not take the plunge? Embrace the journey and discover how it can transform your perspective. After all, the only thing you have to lose is your old way of thinking!"
    })

# 6. Creative Writing
creative_prompts = [
    "Start your story with: 'The compass didn't point North anymore.'",
    "Write a story about a character who discovers they can hear plants talking.",
    "Describe a city where it rains colors instead of water.",
    "A detective finds a clue that implicates themselves in a crime they didn't commit.",
    "Start your story with: 'The antique mirror showed a reflection of the room, but empty.'",
    "Write about a world where memories can be bought and sold.",
    "A stranded astronaut receives a radio transmission from Earth... which was destroyed 100 years ago.",
    "Describe the first day of magic school for someone with absolutely no magical ability.",
    "Start your story with: 'The letter had been sealed for centuries, but it was addressed to me.'",
    "Write a story centered around a clock that ticks backwards."
]
for i, prompt in enumerate(creative_prompts):
    clean_prompt = prompt.replace("Start your story with: ", "").strip("\"'")
    entries.append({
        "id": f"cw{i+1}",
        "category": "Creative Writing",
        "question": prompt,
        "wordLimit": 400,
        "instructions": "Focus on sensory details, pacing, and character development.",
        "modelAnswer": f"The air was thick with an unnatural tension. I stood completely still, trying to process what was happening. {clean_prompt}\n\nEvery instinct screamed at me to turn back, to ignore the glaring anomaly and return to the safety of the mundane. But curiosity, that fatal human flaw, anchored my feet to the floorboards.\n\nShadows stretched across the room, seemingly dancing to a silent, eerie rhythm. I took a tentative step forward. The wood groaned under my weight, the sound deafening in the absolute silence. My heart hammered against my ribs like a trapped bird.\n\nAs I reached out, my fingers trembling, a sudden gust of icy wind blew out the single candle, plunging me into complete darkness. And in that darkness, a voice whispered my name."
    })

ts_content = """/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface WritingQuestion {
  id: string;
  category: string;
  question: string;
  wordLimit: number;
  modelAnswer: string;
  instructions: string;
}

export const WRITING_CATEGORIES = [
  'Essay Writing',
  'Letter Writing',
  'News Writing',
  'Report Writing',
  'Article Writing',
  'Creative Writing'
];

export const WRITING_DATA: WritingQuestion[] = """

ts_content += json.dumps(entries, indent=2) + ';'

with open('writingData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("Successfully generated unique writingData.ts")
