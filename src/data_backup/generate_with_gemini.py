import json
import re
import os
import time
import sys
import warnings

try:
    from dotenv import load_dotenv
    # The script is in src/data, so the project root is 2 directories up
    project_root = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    load_dotenv(os.path.join(project_root, '.env'))
except ImportError:
    pass

# No deprecation warnings needed for the new SDK

try:
    from google import genai
except ImportError:
    print("Please install the google-genai package: pip install google-genai")
    sys.exit(1)

# Ensure the user has provided an API key
API_KEY = os.environ.get("GEMINI_API_KEY")
if not API_KEY:
    print("Error: GEMINI_API_KEY environment variable not found.")
    print("Please set your API key in the .env file")
    sys.exit(1)

client = genai.Client(api_key=API_KEY)

def generate_questions_for_passage(passage, title):
    prompt = f"""
    You are an expert IELTS exam creator. Given the following academic passage about "{title}", generate 3 unique and challenging reading questions.
    The questions must accurately reflect the content of the passage.
    
    Return ONLY a JSON array of 3 objects. Do NOT use markdown code blocks or add any other text.
    
    Format:
    [
      {{
        "type": "mcq",
        "question": "Multiple choice question text?",
        "options": ["Option A", "Option B", "Option C", "Option D"],
        "answer": "Option B",
        "explanation": "Detailed explanation based on the passage."
      }},
      {{
        "type": "tfng",
        "question": "True, False, or Not Given statement.",
        "answer": "True",
        "explanation": "Detailed explanation based on the passage."
      }},
      {{
        "type": "fill",
        "question": "Sentence with a missing _______ here.",
        "answer": "word",
        "explanation": "Detailed explanation based on the passage."
      }}
    ]

    Passage:
    {passage}
    """
    
    max_retries = 3
    for attempt in range(max_retries):
        try:
            response = client.models.generate_content(
                model='gemini-2.5-flash',
                contents=prompt
            )
            text = response.text.strip()
            break # Success, exit retry loop
        except Exception as e:
            error_str = str(e)
            if "429" in error_str or "RESOURCE_EXHAUSTED" in error_str:
                print(f"Rate limit hit! Waiting 35 seconds before retrying {title}...")
                time.sleep(35)
                continue
            elif "404" in error_str:
                print(f"Model gemini-2.5-flash not found, attempting fallback to gemini-1.5-flash for {title}...")
                try:
                    response = client.models.generate_content(
                        model='gemini-1.5-flash',
                        contents=prompt
                    )
                    text = response.text.strip()
                    break # Success, exit retry loop
                except Exception as fallback_e:
                    print(f"Error generating questions with fallback model for {title}: {fallback_e}")
                    return None
            else:
                print(f"Error generating questions for {title}: {e}")
                return None
    else:
        print(f"Failed after {max_retries} attempts due to rate limits.")
        return None
            
    try:
        if text.startswith("```json"):
            text = text[7:]
        if text.startswith("```"):
            text = text[3:]
        if text.endswith("```"):
            text = text[:-3]
            
        return json.loads(text.strip())
    except Exception as e:
        print(f"Error parsing JSON for {title}: {e}")
        return None

# Resolve the absolute path of readingData.ts relative to this script
script_dir = os.path.dirname(os.path.abspath(__file__))
data_file_path = os.path.join(script_dir, 'readingData.ts')

if not os.path.exists(data_file_path):
    print(f"Error: Could not find {data_file_path}")
    sys.exit(1)

# Read the existing readingData.ts to extract passages
with open(data_file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the JSON array
match = re.search(r'export const READING_DATA: ReadingSet\[\] = (\[.*\]);', content, re.DOTALL)
if not match:
    print("Could not find READING_DATA array in readingData.ts")
    sys.exit(1)

json_str = match.group(1)
data = json.loads(json_str)

print(f"Loaded {len(data)} passages. Generating high-quality questions with Gemini API...")

import urllib.request
import urllib.parse
import ssl

def fetch_wiki_extract(title):
    url = f"https://en.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext=1&titles={urllib.parse.quote(title)}&format=json"
    try:
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, context=ctx) as response:
            resp_data = json.loads(response.read().decode())
            pages = resp_data['query']['pages']
            for page_id in pages:
                text = pages[page_id].get('extract', '')
                text = re.sub(r'==+.*?==+', '', text)
                text = re.sub(r'\n+', '\n\n', text).strip()
                words = text.split()
                if len(words) > 800:
                    text = ' '.join(words[:800]) + "..."
                return text
    except Exception as e:
        return "Error fetching data."

for i, item in enumerate(data):
    needs_generation = False
    
    # Refetch passage if it failed previously
    if item.get('passage') == "Error fetching data.":
        print(f"[{i+1}/{len(data)}] Refetching Wikipedia passage for {item['title']}...")
        new_passage = fetch_wiki_extract(item['title'])
        if new_passage and new_passage != "Error fetching data.":
            item['passage'] = new_passage
            print(f"Successfully fetched passage for {item['title']}.")
            needs_generation = True
        else:
            print(f"Failed to fetch passage for {item['title']}. Skipping.")
            continue

    # Check if this item has already been upgraded by Gemini
    if not needs_generation:
        if item.get('questions') and len(item['questions']) > 0:
            q1 = item['questions'][0]['question']
            # If it's NOT a placeholder AND NOT the generic heuristic question, it's a Gemini question
            if q1 != 'Placeholder MCQ?' and not q1.startswith('According to the text') and not q1.startswith('What is the main focus'):
                print(f"[{i+1}/{len(data)}] Skipping {item['title']} (already has Gemini questions)")
                continue

    print(f"[{i+1}/{len(data)}] Generating questions for: {item['title']}")
    
    questions = generate_questions_for_passage(item['passage'], item['title'])
    if questions and len(questions) == 3:
        # Update the IDs to match the dataset format
        for q_idx, q in enumerate(questions):
            q['id'] = f"{item['id']}-{q_idx+1}"
        item['questions'] = questions
    else:
        print(f"Failed to generate questions for {item['title']}, keeping existing questions.")
        
    time.sleep(2) # Sleep to avoid rate limiting

# Write back to readingData.ts
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

ts_content += json.dumps(data, indent=2) + ';'

with open(data_file_path, 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("Successfully updated readingData.ts with Gemini-generated questions!")
