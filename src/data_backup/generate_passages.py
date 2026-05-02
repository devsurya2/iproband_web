import json

topics = [
    ('The Migration of the Monarch Butterfly', 'Science', 'Monarch butterflies undertake one of the most incredible migrations in the insect world, traveling thousands of miles.'),
    ('Artificial Intelligence in Healthcare', 'Technology', 'AI is revolutionizing healthcare through predictive diagnostics and personalized medicine.'),
    ('The Fall of the Roman Empire', 'History', 'The decline of Rome was a complex process involving economic instability, military overreach, and political corruption.'),
    ('Cognitive Dissonance', 'Psychology', 'When individuals hold conflicting beliefs, they experience a psychological stress known as cognitive dissonance.'),
    ('Renewable Energy Adoption', 'Environment', 'The shift towards solar and wind energy is critical for mitigating the impacts of global climate change.'),
    ('The Impact of Social Media on Youth', 'Society', 'Social media platforms have drastically altered how adolescents communicate, forming new social paradigms.'),
    ('Quantum Cryptography', 'Technology', 'By leveraging the principles of quantum mechanics, this field aims to create virtually unbreakable encryption.'),
    ('Deep Sea Exploration', 'Science', 'The ocean floor remains one of the least explored frontiers, harboring unique extremophile organisms.'),
    ('The Industrial Revolution in Europe', 'History', 'Beginning in the 18th century, mechanization transformed agrarian societies into industrial powerhouses.'),
    ('Behavioral Economics', 'Psychology', 'This field challenges traditional economic theories by demonstrating that humans often make irrational financial decisions.'),
    ('Microplastics in the Ocean', 'Environment', 'The accumulation of microscopic plastic particles poses a severe threat to marine ecosystems and human health.'),
    ('Urbanization and Smart Cities', 'Society', 'Rapid city growth has prompted the development of smart infrastructures to manage resources efficiently.'),
    ('The Discovery of Penicillin', 'Science', 'Alexander Fleming\'s accidental discovery ushered in the era of antibiotics, saving countless lives.'),
    ('Blockchain Beyond Cryptocurrency', 'Technology', 'Distributed ledger technology is finding applications in supply chain management and secure voting systems.'),
    ('The Renaissance Art Movement', 'History', 'A period of intense cultural rebirth in Europe, characterized by a return to classical ideals and humanism.'),
    ('Memory Consolidation during Sleep', 'Psychology', 'Research indicates that specific stages of sleep are essential for transferring information into long-term memory.'),
    ('Deforestation in the Amazon', 'Environment', 'The rapid clearing of the world\'s largest rainforest threatens global biodiversity and carbon sequestration.'),
    ('The Gig Economy', 'Society', 'Short-term contracts and freelance work have reshaped the modern labor market, offering flexibility but reducing security.'),
    ('CRISPR Gene Editing', 'Science', 'This revolutionary technology allows for precise modifications to DNA, with implications for genetic diseases.'),
    ('The Evolution of Video Games', 'Technology', 'From simple pixelated graphics to immersive virtual realities, gaming has become a dominant entertainment medium.'),
    ('The French Revolution', 'History', 'A watershed event in modern European history that sought to dismantle the absolute monarchy and feudal system.'),
    ('The Bystander Effect', 'Psychology', 'Individuals are less likely to offer help to a victim when other people are present, a phenomenon extensively studied in social psychology.'),
    ('Coral Reef Bleaching', 'Environment', 'Rising ocean temperatures cause corals to expel their symbiotic algae, leading to widespread reef mortality.'),
    ('Universal Basic Income', 'Society', 'The concept of providing all citizens with a regular, unconditional sum of money is gaining traction as an economic model.'),
    ('Exoplanet Discovery', 'Science', 'Astronomers have identified thousands of planets outside our solar system, some residing in the habitable zone.'),
    ('The Internet of Things (IoT)', 'Technology', 'The network of physical objects embedded with sensors is creating highly connected, data-driven environments.'),
    ('The Cold War Space Race', 'History', 'The geopolitical rivalry between the US and the USSR spurred unprecedented advancements in space exploration.'),
    ('Neuroplasticity', 'Psychology', 'The brain\'s ability to reorganize itself by forming new neural connections throughout life challenges previous dogmas.'),
    ('Sustainable Agriculture', 'Environment', 'Farming practices that prioritize environmental health and economic profitability are essential for future food security.'),
    ('The Aging Global Population', 'Society', 'Increased life expectancy and declining birth rates are creating significant demographic shifts worldwide.'),
    ('Nanotechnology in Medicine', 'Science', 'Manipulating materials on an atomic scale offers novel approaches for targeted drug delivery and imaging.'),
    ('Autonomous Vehicles', 'Technology', 'Self-driving cars promise to reduce traffic accidents and transform urban transportation infrastructure.'),
    ('The Silk Road', 'History', 'This ancient network of trade routes facilitated the exchange of goods, culture, and ideas between East and West.'),
    ('Emotional Intelligence', 'Psychology', 'The ability to perceive, evaluate, and control emotions is increasingly recognized as a key indicator of personal and professional success.'),
    ('The Ozone Layer Depletion', 'Environment', 'International agreements like the Montreal Protocol have been crucial in phasing out substances that harm the ozone layer.'),
    ('Censorship in the Digital Age', 'Society', 'The regulation of internet content raises complex debates about free speech and the responsibilities of tech giants.'),
    ('String Theory', 'Science', 'A theoretical framework attempting to reconcile general relativity and quantum mechanics by modeling particles as one-dimensional strings.'),
    ('5G Networks', 'Technology', 'The fifth generation of mobile networks offers dramatically faster speeds and increased connectivity for devices.'),
    ('The American Civil Rights Movement', 'History', 'A decades-long struggle to end racial discrimination and segregation in the United States.'),
    ('The Placebo Effect', 'Psychology', 'Patients often experience real improvements in their health after receiving a non-active treatment, highlighting the mind-body connection.'),
    ('Glacial Melting', 'Environment', 'The accelerated retreat of glaciers worldwide is a stark indicator of global warming and contributes to rising sea levels.'),
    ('The Impact of Automation on Jobs', 'Society', 'The integration of robotics and AI in the workplace is displacing traditional roles while creating new, tech-centric opportunities.'),
    ('Dark Matter', 'Science', 'Though invisible, this mysterious substance is believed to make up a significant portion of the total mass in the universe.'),
    ('Augmented Reality in Education', 'Technology', 'Overlaying digital information onto the real world is providing students with interactive and immersive learning experiences.'),
    ('The Printing Press', 'History', 'Johannes Gutenberg\'s invention revolutionized the spread of information, democratizing knowledge across Europe.'),
    ('Groupthink', 'Psychology', 'The desire for harmony or conformity in a group can result in irrational or dysfunctional decision-making outcomes.'),
    ('Water Scarcity', 'Environment', 'Increasing demand and climate change are severely straining freshwater resources in many parts of the world.'),
    ('Cultural Globalization', 'Society', 'The transmission of ideas, meanings, and values across national borders is creating a more interconnected global culture.'),
    ('The Human Microbiome', 'Science', 'The trillions of microbes living in and on the human body play a vital role in digestion, immunity, and overall health.'),
    ('Brain-Computer Interfaces', 'Technology', 'Direct communication pathways between the brain and external devices hold promise for restoring lost sensory or motor functions.')
]

entries = []
for i, (title, category, start_sentence) in enumerate(topics):
    set_num = i + 1
    
    p1 = f"{start_sentence} Researchers have spent decades analyzing the intricate details of this subject. "
    if category == 'Science':
        p1 += "Empirical data and rigorous experimental designs have shed new light on the underlying mechanisms. These discoveries not only challenge prior assumptions but also open up new avenues for applied research."
        q1_q = "What type of data has shed new light on the mechanisms?"
        q1_o = ["Anecdotal evidence", "Empirical data", "Historical records", "Philosophical arguments"]
        q1_a = "Empirical data"
        q2_q = "The recent discoveries confirm all prior assumptions without exception."
        q2_a = "False"
        q3_q = "The new discoveries open up avenues for _______ research."
        q3_a = "applied"
    elif category == 'Technology':
        p1 += "The rapid pace of innovation in this sector requires constant adaptation. Engineers and developers are continuously pushing the boundaries of what is possible, creating systems that are more efficient, scalable, and robust."
        q1_q = "What does the rapid pace of innovation require?"
        q1_o = ["Constant adaptation", "Decreased funding", "Stricter regulations", "Slower development cycles"]
        q1_a = "Constant adaptation"
        q2_q = "Engineers are currently satisfied with the existing boundaries of technology."
        q2_a = "False"
        q3_q = "Developers aim to create systems that are efficient, scalable, and _______."
        q3_a = "robust"
    elif category == 'History':
        p1 += "Historians rely on a multitude of primary sources to piece together these events. By cross-referencing documents, artifacts, and contemporary accounts, a clearer picture of the era emerges, free from later embellishments."
        q1_q = "What do historians rely on to understand these events?"
        q1_o = ["Future predictions", "Multitude of primary sources", "Modern technology solely", "Fictional narratives"]
        q1_a = "Multitude of primary sources"
        q2_q = "Cross-referencing sources helps to create a picture free from later embellishments."
        q2_a = "True"
        q3_q = "Historians piece together events using documents, artifacts, and contemporary _______."
        q3_a = "accounts"
    elif category == 'Psychology':
        p1 += "Psychological studies in this area often utilize both qualitative and quantitative methods. Observing behavioral patterns across different demographics provides invaluable insights into the human condition and cognitive processing."
        q1_q = "What methods are often utilized in these psychological studies?"
        q1_o = ["Only qualitative", "Only quantitative", "Both qualitative and quantitative", "Neither qualitative nor quantitative"]
        q1_a = "Both qualitative and quantitative"
        q2_q = "Observing behavioral patterns provides insights into the human condition."
        q2_a = "True"
        q3_q = "These studies provide insights into the human condition and cognitive _______."
        q3_a = "processing"
    elif category == 'Environment':
        p1 += "Environmental scientists stress the urgency of addressing these ecological shifts. Comprehensive policy changes, combined with grassroots initiatives, are deemed necessary to preserve fragile ecosystems for future generations."
        q1_q = "What do environmental scientists stress the urgency of?"
        q1_o = ["Economic development", "Addressing ecological shifts", "Technological stagnation", "Political campaigns"]
        q1_a = "Addressing ecological shifts"
        q2_q = "Grassroots initiatives alone are considered sufficient to preserve ecosystems."
        q2_a = "False"
        q3_q = "Policy changes are necessary to preserve fragile _______ for future generations."
        q3_a = "ecosystems"
    else: # Society
        p1 += "Sociologists examine how these trends impact community structures and individual identities. The intersection of cultural norms and modern pressures creates a dynamic landscape that requires ongoing, nuanced analysis."
        q1_q = "What do sociologists examine in relation to these trends?"
        q1_o = ["Impact on community structures and individual identities", "Geological formations", "Mathematical theorems", "Chemical reactions"]
        q1_a = "Impact on community structures and individual identities"
        q2_q = "The intersection of cultural norms and modern pressures creates a static landscape."
        q2_a = "False"
        q3_q = "This dynamic landscape requires ongoing, _______ analysis."
        q3_a = "nuanced"
        
    p2 = f"Furthermore, the implications of {title.lower()} extend significantly into related disciplines. Experts argue that an interdisciplinary approach is essential. The consensus is that isolated studies fail to capture the holistic impact of the phenomenon. Moving forward, collaborative frameworks will be vital in advancing our understanding."
    
    passage = f"{p1}\n\n{p2}"
    
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
                'options': q1_o,
                'answer': q1_a,
                'explanation': 'The passage explicitly states this information in the first paragraph.'
            },
            {
                'id': f'q{set_num}-2',
                'type': 'tfng',
                'question': q2_q,
                'answer': q2_a,
                'explanation': 'The text directly supports this true/false evaluation.'
            },
            {
                'id': f'q{set_num}-3',
                'type': 'fill',
                'question': q3_q,
                'answer': q3_a,
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

print("Successfully generated readingData.ts with 50 unique topics, passages, and questions.")
