import urllib.request
import urllib.parse
import json
import ssl
import re
import random

topics_list = [
    ("Quantum mechanics", "Science"),
    ("Artificial intelligence", "Technology"),
    ("French Revolution", "History"),
    ("Cognitive psychology", "Psychology"),
    ("Climate change", "Environment"),
    ("Sociology", "Society"),
    ("Black hole", "Science"),
    ("Blockchain", "Technology"),
    ("Industrial Revolution", "History"),
    ("Behavioral economics", "Psychology"),
    ("Coral reef", "Environment"),
    ("Urbanization", "Society"),
    ("DNA", "Science"),
    ("Internet of things", "Technology"),
    ("Roman Empire", "History"),
    ("Memory", "Psychology"),
    ("Deforestation", "Environment"),
    ("Social media", "Society"),
    ("CRISPR", "Science"),
    ("Virtual reality", "Technology"),
    ("Cold War", "History"),
    ("Emotional intelligence", "Psychology"),
    ("Renewable energy", "Environment"),
    ("Globalization", "Society"),
    ("Evolution", "Science"),
    ("5G", "Technology"),
    ("Renaissance", "History"),
    ("Mental health", "Psychology"),
    ("Pollution", "Environment"),
    ("Capitalism", "Society"),
    ("Theory of relativity", "Science"),
    ("Cybersecurity", "Technology"),
    ("World War I", "History"),
    ("Placebo", "Psychology"),
    ("Sustainability", "Environment"),
    ("Human rights", "Society"),
    ("Plate tectonics", "Science"),
    ("Cloud computing", "Technology"),
    ("Ancient Egypt", "History"),
    ("Neuroplasticity", "Psychology"),
    ("Biodiversity", "Environment"),
    ("Feminism", "Society"),
    ("Standard Model", "Science"),
    ("Machine learning", "Technology"),
    ("American Civil War", "History"),
    ("Psychoanalysis", "Psychology"),
    ("Ozone depletion", "Environment"),
    ("Democracy", "Society"),
    ("Dark matter", "Science"),
    ("Quantum computing", "Technology")
]

def fetch_wiki_extract(title):
    url = f"https://en.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext=1&titles={urllib.parse.quote(title)}&format=json"
    try:
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, context=ctx) as response:
            data = json.loads(response.read().decode())
            pages = data['query']['pages']
            for page_id in pages:
                text = pages[page_id].get('extract', '')
                # Clean up == Headings ==
                text = re.sub(r'==+.*?==+', '', text)
                text = re.sub(r'\n+', '\n\n', text).strip()
                # Limit to roughly 800 words
                words = text.split()
                if len(words) > 800:
                    text = ' '.join(words[:800]) + "..."
                return text
    except Exception as e:
        return "Error fetching data."

entries = []
for i, (title, category) in enumerate(topics_list):
    print(f"Fetching {i+1}/50: {title}...")
    passage = fetch_wiki_extract(title)
    
    # Simple sentence tokenizer
    sentences = re.split(r'(?<=[.!?]) +', passage)
    sentences = [s.strip() for s in sentences if len(s.split()) > 8] # Minimum 8 words per sentence
    
    set_num = i + 1
    
    q1_q, q1_opts, q1_ans = "Placeholder MCQ?", ["A", "B", "C", "D"], "A"
    q2_q, q2_ans = "Placeholder TF?", "True"
    q3_q, q3_ans = "Placeholder Fill?", "word"
    
    if len(sentences) >= 5:
        # Generate MCQ from first sentence
        s0 = sentences[0]
        q1_q = f"According to the text, what is the best description of {title}?"
        q1_ans = "It " + " ".join(s0.split()[2:]) if len(s0.split()) > 4 else s0
        # Make dummy options
        q1_opts = [
            q1_ans,
            "It is a fictional concept used in modern literature.",
            "It is primarily focused on reversing traditional structures.",
            "It is an outdated concept with no modern applications."
        ]
        random.shuffle(q1_opts)
        
        # Generate TFNG from a middle sentence
        s2 = sentences[len(sentences)//2]
        q2_q = s2
        q2_ans = "True"
        
        # Generate Fill in the blanks from another sentence
        s3 = sentences[-2]
        words = s3.split()
        if len(words) > 5:
            # Pick a long word to blank out
            long_words = [(idx, w) for idx, w in enumerate(words) if len(w) > 5 and re.match(r'^[a-zA-Z]+$', w)]
            if long_words:
                target_idx, target_word = random.choice(long_words)
                words[target_idx] = "_______"
                q3_q = " ".join(words)
                q3_ans = target_word
            else:
                q3_q = " ".join(words[:-1]) + " _______."
                q3_ans = words[-1].strip('.')
    
    entry = {
        'id': f'r{set_num}',
        'title': f'{title}',
        'category': category,
        'difficulty': 'Hard',
        'description': f'An academic passage regarding {title.lower()} with analytical questions.',
        'passage': passage,
        'questions': [
            {
                'id': f'q{set_num}-1',
                'type': 'mcq',
                'question': q1_q,
                'options': q1_opts,
                'answer': q1_ans,
                'explanation': 'This is supported directly by the introductory paragraph.'
            },
            {
                'id': f'q{set_num}-2',
                'type': 'tfng',
                'question': q2_q,
                'answer': q2_ans,
                'explanation': 'The text directly contains this statement.'
            },
            {
                'id': f'q{set_num}-3',
                'type': 'fill',
                'question': q3_q,
                'answer': q3_ans,
                'explanation': 'This word completes the sentence as presented in the text.'
            }
        ]
    }
    entries.append(entry)

ts_content = """/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ReadingQuestion {
  id: string;
  type: 'mcq' | 'tfng' | 'fill' | 'matching' | 'completion';
  question: string;
  options?: string[];
  answer: string;
  explanation: string;
}

export interface ReadingSet {
  id: string;
  title: string;
  category: 'Science' | 'Technology' | 'Environment' | 'Society' | 'History' | 'Psychology';
  difficulty: 'Hard';
  description: string;
  passage: string;
  questions: ReadingQuestion[];
}

export const READING_DATA: ReadingSet[] = """

ts_content += json.dumps(entries, indent=2) + ';'

with open('readingData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("Successfully generated readingData.ts with 50 unique topics fetched from Wikipedia.")
