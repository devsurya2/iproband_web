/**
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

export const READING_DATA: ReadingSet[] = [
  {
    "id": "r1",
    "title": "Quantum mechanics",
    "category": "Science",
    "difficulty": "Hard",
    "description": "An academic passage regarding quantum mechanics with analytical questions.",
    "passage": "Quantum mechanics is the fundamental physical theory that describes the behavior of matter and of light; its unusual characteristics typically occur at and below the scale of atoms. It is the foundation of all quantum physics, which includes quantum chemistry, quantum biology, quantum field theory, quantum technology, and quantum information science. Quantum mechanics can describe many systems that classical physics cannot. Classical physics can describe many aspects of nature at an ordinary (macroscopic and (optical) microscopic) scale, however is insufficient for describing them at very small submicroscopic (atomic and subatomic) scales. Classical mechanics can be derived from quantum mechanics as an approximation that is valid at ordinary scales. Quantum systems have bound states that are quantized to discrete values of energy, momentum, angular momentum, and other quantities, in contrast to classical systems where these quantities can be measured continuously. Measurements of quantum systems show characteristics of both particles and waves (wave\u2013particle duality), and there are limits to how accurately the value of a physical quantity can be predicted prior to its measurement, given a complete set of initial conditions (the uncertainty principle). Quantum mechanics arose gradually from theories to explain observations that could not be reconciled with classical physics, such as Max Planck's solution in 1900 to the black-body radiation problem, and the correspondence between energy and frequency in Albert Einstein's 1905 paper, which explained the photoelectric effect. These early attempts to understand microscopic phenomena, now known as the \"old quantum theory\", led to the full development of quantum mechanics in the mid-1920s by Niels Bohr, Erwin Schr\u00f6dinger, Werner Heisenberg, Max Born, Paul Dirac and others. The modern theory is formulated in various specially developed mathematical formalisms. In one of them, a mathematical entity called the wave function provides information, in the form of probability amplitudes, about what measurements of a particle's energy, momentum, and other physical properties may yield. Quantum mechanics allows the calculation of properties and behaviour of physical systems. It is typically applied to microscopic systems: molecules, atoms and subatomic particles. It has been demonstrated to hold for complex molecules with thousands of atoms, but its application to human beings raises philosophical problems, such as Wigner's friend, and its application to the universe as a whole remains speculative. Predictions of quantum mechanics have been verified experimentally to an extremely high degree of accuracy. For example, the refinement of quantum mechanics for the interaction of light and matter, known as quantum electrodynamics (QED), has been shown to agree with experiment to within 1 part in 1012 when predicting the magnetic properties of an electron. A fundamental feature of the theory is that it usually cannot predict with certainty what will happen, but only gives probabilities. Mathematically, a probability is found by taking the square of the absolute value of a complex number, known as a probability amplitude. This is known as the Born rule, named after physicist Max Born. For example, a quantum particle like an electron can be described by a wave function, which associates to each point in space a probability amplitude. Applying the Born rule to these amplitudes gives a probability density function for the position that the electron will be found to have when an experiment is performed to measure it. This is the best the theory can do; it cannot say for certain where the electron will be found. The Schr\u00f6dinger equation relates the collection of probability amplitudes that pertain to one moment of time to the collection of probability amplitudes that pertain to another. One consequence of the mathematical rules of quantum mechanics is a tradeoff in predictability between measurable quantities. The most famous form of this uncertainty principle says that no matter how a quantum particle is prepared or how carefully experiments upon it are arranged, it is impossible to have a precise prediction for a measurement of its position and also at the same time for a measurement of its momentum. Another consequence of the mathematical rules of quantum mechanics is the phenomenon of quantum interference, which is often illustrated with the double-slit experiment. In the basic version of this experiment, a coherent light source, such as a laser beam, illuminates a plate pierced by two parallel slits, and the light passing through the slits is observed on a screen behind the plate. The wave nature of light causes the light waves passing through the two slits to interfere, producing bright and dark bands on the screen \u2013 a result that would not be expected if light consisted of classical particles. However, the light is always found to be absorbed at the screen at discrete points, as individual particles rather than waves; the interference pattern appears via the varying density of these particle hits on the screen. Furthermore, versions of the experiment that include detectors at the slits find that...",
    "questions": [
      {
        "type": "mcq",
        "question": "Which statement accurately distinguishes a fundamental characteristic of quantum systems from classical systems, according to the passage?",
        "options": [
          "A) Classical systems can only describe macroscopic phenomena, while quantum systems are limited to microscopic scales.",
          "B) Unlike classical systems where physical quantities can be measured continuously, quantum systems exhibit bound states with quantities quantized to discrete values.",
          "C) Quantum mechanics can be derived from classical mechanics as a valid approximation at ordinary scales.",
          "D) Classical physics incorporates the uncertainty principle, whereas quantum mechanics focuses solely on deterministic predictions."
        ],
        "answer": "B",
        "explanation": "The passage explicitly states: 'Quantum systems have bound states that are quantized to discrete values of energy, momentum, angular momentum, and other quantities, in contrast to classical systems where these quantities can be measured continuously.' This directly supports option B. Option A is incorrect as classical physics describes macroscopic and optical microscopic, and quantum is applied to microscopic, not necessarily 'limited'. Option C is incorrect; the passage states 'Classical mechanics can be derived from quantum mechanics'. Option D is incorrect; the uncertainty principle is a quantum mechanical concept, and quantum mechanics usually gives probabilities, not certain predictions.",
        "id": "r1-1"
      },
      {
        "type": "tfng",
        "question": "The application of quantum mechanics to human beings has been experimentally verified to an extremely high degree of accuracy, similar to its verification for electron properties.",
        "answer": "False",
        "explanation": "The passage states that 'Predictions of quantum mechanics have been verified experimentally to an extremely high degree of accuracy' for certain phenomena, citing quantum electrodynamics (QED) and the magnetic properties of an electron. However, it explicitly mentions that 'its application to human beings raises philosophical problems, such as Wigner's friend, and its application to the universe as a whole remains speculative.' This indicates that its application to human beings is not experimentally verified to a high degree of accuracy, but rather problematic and speculative.",
        "id": "r1-2"
      },
      {
        "type": "fill",
        "question": "In one mathematical formalism of modern quantum mechanics, a mathematical entity known as the _______ provides information, in the form of probability amplitudes, about potential measurements of a particle's physical properties.",
        "answer": "wave function",
        "explanation": "The passage states: 'In one of them, a mathematical entity called the wave function provides information, in the form of probability amplitudes, about what measurements of a particle's energy, momentum, and other physical properties may yield.' Therefore, 'wave function' is the correct term.",
        "id": "r1-3"
      }
    ]
  },
  {
    "id": "r2",
    "title": "Artificial intelligence",
    "category": "Technology",
    "difficulty": "Hard",
    "description": "An academic passage regarding artificial intelligence with analytical questions.",
    "passage": "Artificial intelligence (AI) is the capability of computational systems to perform tasks typically associated with human intelligence, such as learning, reasoning, problem-solving, perception, and decision-making. It is a field of research in engineering, mathematics and computer science that develops and studies methods and software that enable machines to perceive their environment and use learning and intelligence to take actions that maximize their chances of achieving defined goals. High-profile applications of AI include advanced web search engines, chatbots, virtual assistants, autonomous vehicles, and play and analysis in strategy games (e.g., chess and Go). Since the 2020s, generative AI has become widely available to generate images, audio, and videos from text prompts. The traditional goals of AI research include learning, reasoning, knowledge representation, planning, natural language processing, and perception, as well as support for robotics. To reach these goals, AI researchers have used techniques including state space search and mathematical optimization, formal logic, artificial neural networks, and methods based on statistics, operations research, and economics. AI also draws upon psychology, linguistics, philosophy, neuroscience, and other fields. Some companies, such as OpenAI, Google DeepMind and Meta, aim to create artificial general intelligence (AGI) \u2013 AI that can complete virtually any cognitive task at least as well as a human. Artificial intelligence was founded as an academic discipline in 1956, and the field went through multiple cycles of optimism throughout its history, followed by periods of disappointment and loss of funding, known as AI winters. Funding and interest increased substantially after 2012, when graphics processing units began being used to accelerate neural networks, and deep learning outperformed previous AI techniques. This growth accelerated further after 2017 with the transformer architecture. In the 2020s, an AI boom has coincided with advances in generative AI, which allowed for the creation and modification of media. In addition to AI safety and unintended consequences and harms from the use of AI, ethical concerns, AI's long-term effects, and potential existential risks have prompted discussions of AI regulation. The general problem of simulating (or creating) intelligence has been broken into subproblems. These consist of particular traits or capabilities that researchers expect an intelligent system to display. The traits described below have received the most attention and cover the scope of AI research. Early researchers developed algorithms that imitated step-by-step reasoning that humans use when they solve puzzles or make logical deductions. By the late 1980s and 1990s, methods were developed for dealing with uncertain or incomplete information, employing concepts from probability and economics. Many of these algorithms are insufficient for solving large reasoning problems because they experience a \"combinatorial explosion\": They become exponentially slower as the problems grow. Even humans rarely use the step-by-step deduction that early AI research could model. They solve most of their problems using fast, intuitive judgments. Accurate and efficient reasoning is an unsolved problem. Knowledge representation and knowledge engineering allow AI programs to answer questions intelligently and make deductions about real-world facts. Formal knowledge representations are used in content-based indexing and retrieval, scene interpretation, clinical decision support, knowledge discovery (mining \"interesting\" and actionable inferences from large databases), and other areas. A knowledge base is a body of knowledge represented in a form that can be used by a program. An ontology is the set of objects, relations, concepts, and properties used by a particular domain of knowledge. Knowledge bases need to represent things such as objects, properties, categories, and relations between objects; situations, events, states, and time; causes and effects; knowledge about knowledge (what we know about what other people know); default reasoning (things that humans assume are true until they are told differently and will remain true even when other facts are changing); and many other aspects and domains of knowledge. Among the most difficult problems in knowledge representation are the breadth of commonsense knowledge (the set of atomic facts that the average person knows is enormous); and the sub-symbolic form of most commonsense knowledge (much of what people know is not represented as \"facts\" or \"statements\" that they could express verbally). There is also the difficulty of knowledge acquisition, the problem of obtaining knowledge for AI applications. An \"agent\" is any entity (artificial or not) that perceives and takes actions in the world. A rational agent has goals or preferences and takes actions to make them happen. In automated planning, the agent has a specific goal. In automated decision-making, the agent has preferences\u2014there are some situations it would prefer to be in, and some situations it is trying to avoid. The decision-making agent assigns a number to each situation (called the \"utility\") that measures how much the agent prefers it. For each possible action, it can calculate the \"expected utility\": the utility of all possible outcomes of the action, weighted by the probability that the outcome will occur. It can then choose the...",
    "questions": [
      {
        "type": "mcq",
        "question": "According to the passage, what is the primary reason that many current AI algorithms struggle with large reasoning problems, and how does this contrast with human problem-solving?",
        "options": [
          "A. They lack the ability to process uncertain information, unlike humans who can easily disregard irrelevant data.",
          "B. They suffer from 'combinatorial explosion' making them exponentially slower, whereas humans rely more on quick, intuitive judgments.",
          "C. Their reliance on formal logic prevents them from adapting to real-world complexities that humans naturally handle.",
          "D. AI algorithms are designed for specific tasks, while humans possess general intelligence capable of diverse problem-solving."
        ],
        "answer": "B",
        "explanation": "The passage states that 'Many of these algorithms are insufficient for solving large reasoning problems because they experience a 'combinatorial explosion': They become exponentially slower as the problems grow.' It then contrasts this with human reasoning by noting, 'Even humans rarely use the step-by-step deduction that early AI research could model. They solve most of their problems using fast, intuitive judgments.'",
        "id": "r2-1"
      },
      {
        "type": "tfng",
        "question": "The periods of reduced funding and diminished interest in Artificial Intelligence, known as 'AI winters', have entirely ceased since the advent of deep learning technologies.",
        "answer": "False",
        "explanation": "The passage indicates a significant increase in funding and interest after 2012 and 2017, leading to an 'AI boom' in the 2020s. However, it only describes the current positive trend and does not state that the cycles of 'AI winters' have 'entirely ceased' or will not occur again in the future. The passage simply mentions that funding and interest increased substantially, not that the pattern of winters is over.",
        "id": "r2-2"
      },
      {
        "type": "fill",
        "question": "One significant challenge in knowledge representation for AI is the ___________ of commonsense knowledge, where much of what humans know exists in a form that cannot be easily expressed verbally.",
        "answer": "sub-symbolic form",
        "explanation": "The passage directly identifies this challenge: 'Among the most difficult problems in knowledge representation are... the sub-symbolic form of most commonsense knowledge (much of what people know is not represented as 'facts' or 'statements' that they could express verbally).'",
        "id": "r2-3"
      }
    ]
  },
  {
    "id": "r3",
    "title": "French Revolution",
    "category": "History",
    "difficulty": "Hard",
    "description": "An academic passage regarding french revolution with analytical questions.",
    "passage": "The French Revolution was a period of political and societal change in France that began with the Estates General of 1789 and ended with the Coup of 18 Brumaire on 9 November 1799. Many of the revolution's ideas are considered fundamental principles of liberal democracy, and its values remain central to modern French political discourse. It was caused by a combination of social, political, and economic factors which the existing regime proved unable to manage. Financial crisis and widespread social distress led to the convocation of the Estates General in May 1789, its first meeting since 1614. The representatives of the Third Estate broke away and re-constituted themselves as a National Assembly in June. The Storming of the Bastille in Paris on 14 July led to a series of radical measures by the Assembly, including the abolition of feudalism, state control over the Catholic Church in France, and issuing the Declaration of the Rights of Man and of the Citizen. The next three years were dominated by a struggle for political control. King Louis XVI's attempted flight to Varennes in June 1791 further discredited the monarchy, and military defeats after the outbreak of the French Revolutionary Wars in April 1792 led to the insurrection of 10 August 1792. As a result, the monarchy was replaced by the French First Republic in September, followed by the execution of Louis XVI himself in January 1793. After another revolt in June 1793, the constitution was suspended, and political power passed from the National Convention to the Committee of Public Safety, dominated by radical Jacobins led by Maximilien Robespierre. About 16,000 people were sentenced by the Revolutionary Tribunal and executed in the Reign of Terror, which ended in July 1794 with the Thermidorian Reaction. Weakened by external threats and internal opposition, the Committee of Public Safety was replaced in November 1795 by the Directory. Its instability ended in 1799 with the coup of 18 Brumaire and the establishment of the Consulate, with Napoleon Bonaparte as First Consul. The Revolution resulted from multiple long-term and short-term factors, culminating in a social, economic, financial and political crisis in the late 1780s. Combined with resistance to reform by the ruling elite and indecisive policy by Louis XVI and his ministers, the result was a crisis the state was unable to manage. Between 1715 and 1789, the French population grew from 21 to 28 million, 20% of whom lived in towns or cities, Paris alone having over 600,000 inhabitants. This was accompanied by a tripling in the size of the middle class, which comprised almost 10% of the population by 1789. Despite increases in overall prosperity, its benefits were largely restricted to the rentier and mercantile classes, while the living standards fell for wage labourers and peasant farmers who rented their land. Economic recession from 1785, combined with bad harvests in 1787 and 1788, led to high unemployment and food prices, causing a financial and political crisis. While the state also experienced a debt crisis, the level of debt itself was not high compared with Britain's. A significant problem was that tax rates varied widely from one region to another, were often different from the official amounts, and were collected inconsistently. The complexity and lack of accountability caused resentment among all taxpayers. Attempts to simplify the system were blocked by the regional Parlements which approved financial policy. The resulting impasse led to the calling of the Estates General of 1789, which became radicalised by the struggle for control of public finances. Louis XVI was willing to consider reforms, but he often backed down when faced with opposition from conservative elements within the nobility. Enlightenment critiques of social institutions were widely discussed among the educated French elite. At the same time, the American Revolution and the European revolts of the 1780s inspired public debate on issues such as patriotism, liberty, equality, and democracy. These shaped the response of the educated public to the crisis, while scandals such as the Affair of the Diamond Necklace fuelled widespread anger at the court, nobility, and church officials. France faced a series of budgetary crises during the 18th century as revenues failed to keep pace with expenditure. Despite solid economic growth, the use of tax farmers meant this was not reflected in a proportional growth in state tax income. As the nobility and Church benefited from a variety of exemptions, the tax burden fell mainly on the lower classes. Reform was difficult because new tax laws had to be registered with regional judicial bodies or parlements that were able to block them. The king could impose laws by decree, but this risked open conflict with the parlements, the nobility, and those subject to new taxes. France primarily used loans to fund the 1778 to 1783 Anglo-French War. Even after it ended, the monarchy...",
    "questions": [
      {
        "type": "mcq",
        "question": "According to the passage, what was a primary systemic obstacle to addressing France's financial difficulties leading up to the Revolution?",
        "options": [
          "King Louis XVI's absolute refusal to sanction any new financial regulations.",
          "France's national debt being astronomically larger than that of Great Britain.",
          "The decentralized authority of regional parliaments to impede comprehensive tax reform.",
          "The insufficient growth of the middle class to support increased taxation."
        ],
        "answer": "The decentralized authority of regional parliaments to impede comprehensive tax reform.",
        "explanation": "The passage explicitly states, 'Attempts to simplify the system were blocked by the regional Parlements which approved financial policy' and later, 'Reform was difficult because new tax laws had to be registered with regional judicial bodies or parlements that were able to block them.' This highlights the structural impediment posed by these regional bodies to comprehensive reform. Options A, B, and D are contradicted by the passage, which mentions Louis XVI being 'willing to consider reforms', the debt 'was not high compared with Britain's', and the middle class had 'tripled' in size.",
        "id": "r3-1"
      },
      {
        "type": "tfng",
        "question": "The primary reason for France's state debt crisis in the late 1780s was the unprecedented magnitude of its national debt, far surpassing that of other major European nations like Britain.",
        "answer": "False",
        "explanation": "The passage states, 'While the state also experienced a debt crisis, the level of debt itself was not high compared with Britain's.' This directly refutes the claim that France's national debt was of unprecedented magnitude or far surpassed Britain's. The passage attributes the crisis to multiple factors, including revenues failing to keep pace with expenditure, inconsistent tax collection, and exemptions for the nobility and Church, not solely the sheer size of the debt.",
        "id": "r3-2"
      },
      {
        "type": "fill",
        "question": "The period of extreme political repression and executions, known as the Reign of Terror, concluded in July 1794 with the __________.",
        "answer": "Thermidorian Reaction",
        "explanation": "The passage explicitly states, 'About 16,000 people were sentenced by the Revolutionary Tribunal and executed in the Reign of Terror, which ended in July 1794 with the Thermidorian Reaction.' This identifies the specific event that marked the end of the Reign of Terror.",
        "id": "r3-3"
      }
    ]
  },
  {
    "id": "r4",
    "title": "Cognitive psychology",
    "category": "Psychology",
    "difficulty": "Hard",
    "description": "An academic passage regarding cognitive psychology with analytical questions.",
    "passage": "Cognitive psychology is the scientific study of human mental processes such as attention, language use, memory, perception, problem solving, creativity, and reasoning. Cognitive psychology originated in the 1960s in a break from behaviorism, which held from the 1920s to 1950s that unobservable mental processes were outside the realm of empirical science. This break came as researchers in linguistics, cybernetics, and applied psychology used models of mental processing to explain human behavior. Work derived from cognitive psychology was integrated into other branches of psychology and into various other modern disciplines, such as cognitive science, linguistics, and economics. Philosophically, ruminations on the human mind and its processes have been around since the time of the ancient Greeks. In 387 BCE, Plato suggested that the brain was the seat of mental processes. In 1637, Ren\u00e9 Descartes posited that humans have innate ideas and promulgated mind-body dualism, which came to be known as substance dualism (essentially the idea that the mind and the body are two separate substances). From that time, major debates ensued through the 19th century about whether human thought is solely experiential (empiricism) or includes innate knowledge (nativism). Some of those involved in this debate include George Berkeley and John Locke on the side of empiricism, and Immanuel Kant on the side of nativism. With the philosophical debate continuing, the mid- to late 19th century was a critical time in the development of psychology as a scientific discipline. Two discoveries that later played substantial roles in cognitive psychology were Paul Broca's discovery of the area of the brain largely responsible for language production and Carl Wernicke's discovery of an area thought to be mostly responsible for comprehension of language. Both areas were subsequently formally named for their founders, and disruptions of an individual's language production or comprehension due to trauma or malformation in these areas have come to commonly be known as Broca's aphasia and Wernicke's aphasia. From the 1920s to the 1950s, the main approach to psychology was behaviorism. Initially, its adherents viewed mental events such as thoughts, ideas, attention, and consciousness as unobservable and thus outside the realm of psychology as a science. A pioneer of cognitive psychology, whose work predated much of the behaviorist literature, was Carl Jung. Jung introduced the hypothesis of cognitive functions in his 1921 book Psychological Types. Another pioneer of cognitive psychology, who worked outside the boundaries (both intellectual and geographical) of behaviorism, was Jean Piaget. From 1926 to the 1950s and into the 1980s, he studied the thoughts, language, and intelligence of children and adults. In the mid-20th century, four main influences arose that inspired and shaped cognitive psychology as a formal school of thought: With the development of new warfare technology during World War II came a need for a greater understanding of human performance. Problems such as how best to train soldiers to use new technology and how to handle matters of attention under duress became important to military personnel. Behaviorism provided little if any insight into these matters, and the work of Donald Broadbent, integrating concepts from human performance research and the recently developed information theory, forged the way in this area. Developments in computer science led to parallels being drawn between human thought and the computational functionality of computers, opening entirely new areas of psychological thought. Allen Newell and Herbert Simon spent years developing the concept of artificial intelligence (AI) and later collaborated with cognitive psychologists to explore its implications. This encouraged a concept of mental functions patterned on the way computers handle memory storage and retrieval, and it opened an important doorway for cognitivism. Noam Chomsky's 1959 critique of behaviorism, and empiricism more generally, initiated what came to be known as the \"cognitive revolution\". Within psychology, in response to behaviorism, J. S. Bruner, J. J. Goodnow & G. A. Austin wrote \"A Study of Thinking\" in 1956. In 1960, G. A. Miller, E. Galanter, and K. Pribram wrote \"Plans and the Structure of Behavior\". The same year, Bruner and Miller founded the Harvard Center for Cognitive Studies, which institutionalized the revolution and launched the field of cognitive science. Formal recognition of the field involved the establishment of research institutions such as George Mandler's Center for Human Information Processing in 1964. Mandler described the origins of cognitive psychology in a 2002 article in the Journal of the History of the Behavioral Sciences. Ulric Neisser put the term \"cognitive psychology\" into common use through his 1967 book Cognitive Psychology. Neisser's definition of \"cognition\" illustrates the then-progressive concept of cognitive processes: The term \"cognition\" refers to all processes by which the sensory input is transformed, reduced, elaborated, stored, recovered, and used. It is concerned with these processes even when they operate in the absence of relevant stimulation, as in images and hallucinations. ... Given such a sweeping definition, it is apparent...",
    "questions": [
      {
        "type": "mcq",
        "question": "Which combination of factors most significantly contributed to the establishment of cognitive psychology as a formal school of thought, challenging the prevailing behaviorist paradigm in the mid-20th century?",
        "options": [
          "The philosophical explorations of innate ideas and the empirical findings regarding language processing centers in the brain.",
          "The practical demands of wartime human performance and the theoretical framework provided by the burgeoning field of computer science.",
          "Carl Jung's hypothesis of cognitive functions and Jean Piaget's extensive research on child intelligence and language.",
          "Noam Chomsky's critique of empiricism and the foundational work of Plato and Ren\u00e9 Descartes on mental processes."
        ],
        "answer": "Option B",
        "explanation": "The passage explicitly details 'four main influences [that] arose that inspired and shaped cognitive psychology as a formal school of thought.' Among these, it highlights 'a need for a greater understanding of human performance' due to World War II and 'Developments in computer science' which led to 'parallels being drawn between human thought and the computational functionality of computers.' These two influences are presented as key drivers for the formal emergence of cognitive psychology in the mid-20th century.",
        "id": "r4-1"
      },
      {
        "type": "tfng",
        "question": "The research contributions of Carl Jung and Jean Piaget were primarily responsible for the immediate instigation of the 'cognitive revolution' in the 1960s.",
        "answer": "False",
        "explanation": "The passage describes Jung and Piaget as 'pioneers' of cognitive psychology whose work either 'predated much of the behaviorist literature' or was conducted 'outside the boundaries' of behaviorism. However, it explicitly states that 'Noam Chomsky's 1959 critique of behaviorism... initiated what came to be known as the 'cognitive revolution'.' Therefore, while Jung and Piaget were important figures, they were not the *primary immediate instigators* of the cognitive revolution itself in the 1960s.",
        "id": "r4-2"
      },
      {
        "type": "fill",
        "question": "According to Ulric Neisser's influential definition, 'cognition' refers to all processes by which sensory input is transformed, reduced, elaborated, stored, recovered, and used, even when these processes operate in the absence of relevant _________.",
        "answer": "stimulation",
        "explanation": "The passage directly quotes Ulric Neisser's definition: 'The term 'cognition' refers to all processes by which the sensory input is transformed, reduced, elaborated, stored, recovered, and used. It is concerned with these processes even when they operate in the absence of relevant stimulation, as in images and hallucinations.' The missing word 'stimulation' completes the sentence precisely as found in the text.",
        "id": "r4-3"
      }
    ]
  },
  {
    "id": "r5",
    "title": "Climate change",
    "category": "Environment",
    "difficulty": "Hard",
    "description": "An academic passage regarding climate change with analytical questions.",
    "passage": "Present-day climate change includes both global warming\u2014the ongoing increase in global average temperature\u2014and its wider effects on Earth's climate system. Climate change in a broader sense also includes previous long-term changes to Earth's climate. The modern-day rise in global temperatures is driven by human activities, especially fossil fuel (coal, oil and natural gas) burning since the Industrial Revolution. Fossil fuel use, deforestation, and some agricultural and industrial practices release greenhouse gases. These gases absorb some of the heat that the Earth radiates after it warms from sunlight, warming the lower atmosphere. Earth's atmosphere now has roughly 50% more carbon dioxide, the main gas driving global warming, than it did at the end of the pre-industrial era, reaching levels not seen for millions of years. Climate change has an increasingly large impact on the environment. Heat waves and wildfires are becoming more common. Amplified warming in the Arctic has contributed to thawing permafrost, retreat of glaciers and sea ice decline. Higher temperatures are also causing more intense storms, droughts, and other weather extremes. Rapid environmental change in mountains, coral reefs, and the Arctic is forcing many species to relocate or become extinct. Even if efforts to minimize future warming are successful, some effects will continue for centuries. These include ocean heating, ocean acidification and sea level rise. Climate change threatens people with increased flooding, extreme heat, increased food and water scarcity, more disease, and economic loss. Human migration and conflict can also be a result. The World Health Organization calls climate change one of the biggest threats to global health in the 21st century. Societies and ecosystems will experience more severe risks without action to limit warming. Adapting to climate change through efforts like flood control measures or drought-resistant crops partially reduces climate change risks, although some limits to adaptation have already been reached. Poorer communities are responsible for a small share of global emissions, yet have the least ability to adapt and are most vulnerable to climate change. Many climate change impacts have been observed in the first decades of the 21st century, with 2024 the warmest on record at +1.60 \u00b0C (2.88 \u00b0F) since regular tracking began in 1850. Additional warming will increase these impacts and can trigger tipping points, such as melting all of the Greenland ice sheet. Under the 2015 Paris Agreement, nations collectively agreed to keep warming \"well under 2 \u00b0C\". However, with pledges made under the Agreement, global warming would still reach about 2.8 \u00b0C (5.0 \u00b0F) by the end of the century. There is widespread support for climate action worldwide, and most countries aim to stop emitting carbon dioxide. Fossil fuels can be phased out by stopping subsidising them, conserving energy and switching to energy sources that do not produce significant carbon pollution. These energy sources include wind, solar, hydro, and nuclear power. Cleanly generated electricity can replace fossil fuels for powering transportation, heating buildings, and running industrial processes. Carbon can also be removed from the atmosphere, for instance by increasing forest cover and farming with methods that store carbon in soil. Before the 1980s, it was unclear whether the warming effect of increased greenhouse gases was stronger than the cooling effect of airborne particulates in air pollution. Scientists used the term inadvertent climate modification to refer to human impacts on the climate at this time. In the 1980s, the terms global warming and climate change became more common, often being used interchangeably. Scientifically, global warming refers only to increased global average surface temperature, while climate change describes both global warming and its effects on Earth's climate system, such as precipitation changes. Climate change can also be used more broadly to include changes to the climate that have happened throughout Earth's history as result of natural processes. The term anthropogenic climate change is sometimes used to describe climate change resulting from human activities. Global warming\u2014used as early as 1975\u2014became the more popular term after NASA climate scientist James Hansen used it in his 1988 testimony in the U.S. Senate. Since the 2000s, usage of climate change has increased. Various scientists, politicians and media may use the terms climate crisis or climate emergency to talk about climate change, and may use the term global heating instead of global warming. Over the last few million years the climate cycled through ice ages. One of the hotter periods was the Last Interglacial, around 125,000 years ago, where temperatures were between 0.5 \u00b0C and 1.5 \u00b0C warmer than before the start of global warming. This period saw sea levels 5 to 10 metres higher than today. The most recent glacial maximum 20,000 years ago was some 5\u20137 \u00b0C colder. This period has sea levels that were over 125 metres (410 ft) lower than today. Temperatures stabilized in the current interglacial period beginning 11,700 years ago. This period also...",
    "questions": [
      {
        "type": "mcq",
        "question": "Which of the following statements accurately reflects the historical usage and scientific definitions of climate-related terms according to the passage?",
        "options": [
          "Before the 1980s, the scientific community consistently used 'global warming' to describe both temperature increases and their broader climatic effects.",
          "James Hansen's 1988 testimony in the U.S. Senate primarily popularized the term 'climate change', leading to its increased usage over 'global warming'.",
          "Scientifically, 'global warming' refers specifically to the rise in global average surface temperature, whereas 'climate change' encompasses this warming along with its wider system effects.",
          "The term 'inadvertent climate modification' became obsolete immediately after the introduction of 'global warming' in the mid-1970s."
        ],
        "answer": "Scientifically, 'global warming' refers specifically to the rise in global average surface temperature, whereas 'climate change' encompasses this warming along with its wider system effects.",
        "explanation": "The passage states: 'Scientifically, global warming refers only to increased global average surface temperature, while climate change describes both global warming and its effects on Earth's climate system, such as precipitation changes.' It also mentions 'global warming\u2014used as early as 1975\u2014became the more popular term after NASA climate scientist James Hansen used it in his 1988 testimony,' but doesn't state he primarily popularized 'climate change'. The passage clearly indicates 'inadvertent climate modification' was used *before* the 1980s when the balance of warming/cooling was unclear, and that 'climate change' usage increased *after* the 2000s, not immediately rendering older terms obsolete.",
        "id": "r5-1"
      },
      {
        "type": "tfng",
        "question": "Current pledges made under the 2015 Paris Agreement are projected to achieve the target of keeping global warming 'well under 2 \u00b0C'.",
        "answer": "False",
        "explanation": "The passage explicitly states: 'Under the 2015 Paris Agreement, nations collectively agreed to keep warming 'well under 2 \u00b0C'. However, with pledges made under the Agreement, global warming would still reach about 2.8 \u00b0C (5.0 \u00b0F) by the end of the century.' This indicates that current pledges are insufficient to meet the agreed target, making the statement false.",
        "id": "r5-2"
      },
      {
        "type": "fill",
        "question": "Poorer communities are disproportionately vulnerable to climate change impacts because they possess the least ability for _______, even though their contribution to global emissions is minimal.",
        "answer": "adaptation",
        "explanation": "The passage states: 'Poorer communities are responsible for a small share of global emissions, yet have the least ability to adapt and are most vulnerable to climate change.' The word 'adaptation' directly completes the sentence, referring to their limited capacity to respond to climate change risks.",
        "id": "r5-3"
      }
    ]
  },
  {
    "id": "r6",
    "title": "Sociology",
    "category": "Society",
    "difficulty": "Hard",
    "description": "An academic passage regarding sociology with analytical questions.",
    "passage": "Sociology is the scientific study of human society that focuses on society, human social behavior, patterns of social relationships, social interaction, and aspects of culture associated with everyday life. The term sociology was coined in the late 18th century to describe the scientific study of society. Regarded as a part of both the social sciences and humanities, sociology uses various methods of empirical investigation and critical analysis to develop a body of knowledge about social order and social change. Sociological subject matter ranges from micro-level analyses of individual interaction and agency to macro-level analyses of social systems and social structure. Applied sociological research may be directed toward social policy and welfare, whereas theoretical approaches may focus on understanding social processes and the phenomenological method. Traditional focuses of sociology include social stratification, social class, social mobility, religion, secularization, law, sexuality, gender, and deviance. Recent studies have added socio-technical aspects of the digital divide as a new focus. Digital sociology examines the impact of digital technologies on social behavior and institutions, encompassing professional, analytical, critical, and public dimensions. The internet has reshaped social networks and power relations, illustrating the growing importance of digital sociology. As all spheres of human activity are affected by the interplay between social structure and individual agency, sociology has gradually expanded its focus to other subjects and institutions, such as health and the institution of medicine; economy; military; punishment and systems of control; the Internet; sociology of education; social capital; and the role of social activity in the development of scientific knowledge. The range of social scientific methods has also expanded, as social researchers draw upon a variety of qualitative and quantitative techniques. The linguistic and cultural turns of the mid-20th century, in particular, have led to increasingly interpretative, hermeneutic, and philosophical approaches to the analysis of society. Conversely, the turn of the 21st century has seen the rise of new analytically, mathematically, and computationally rigorous techniques, such as agent-based modelling and social network analysis. Social research influences various industries and sectors of life, such as among politicians, policy makers, and legislators; educators; planners; administrators; developers; business magnates and managers; social workers; non-governmental organizations; and non-profit organizations, as well as individuals interested in resolving social issues in general. Sociological reasoning predates the foundation of the discipline itself. Social analysis has origins in the common stock of universal, global knowledge and philosophy, having been carried out as far back as the time of old comic poetry which features social and political criticism, and ancient Greek philosophers Socrates, Plato, and Aristotle. For instance, the origin of the survey can be traced back to at least the Domesday Book in 1086, while ancient philosophers such as Confucius wrote about the importance of social roles. Medieval Arabic writings encompass a rich tradition that offers early insights into sociology. Some sources consider Ibn Khaldun, a 14th-century Muslim scholar from Tunisia, to have been the father of sociology, although there is no reference to his work in the writings of European contributors to modern sociology. Khaldun's Muqaddimah was considered to be amongst the first works to advance social-scientific reasoning on social cohesion and social conflict. The word sociology derives part of its name from the Latin word socius ('companion' or 'fellowship'). The suffix -logy ('the study of') comes from that of the Greek -\u03bb\u03bf\u03b3\u03af\u03b1, derived from \u03bb\u03cc\u03b3\u03bf\u03c2 (l\u00f3gos, 'word' or 'knowledge'). The term sociology was first coined in 1780 by the French essayist Emmanuel-Joseph Siey\u00e8s in an unpublished manuscript. Sociology was later defined independently by French philosopher of science Auguste Comte (1798\u20131857) in 1838 as a new way of looking at society. Comte had earlier used the term social physics, but it had been subsequently appropriated by others, most notably the Belgian statistician Adolphe Quetelet. Comte endeavored to unify history, psychology, and economics through the scientific understanding of social life. Writing shortly after the malaise of the French Revolution, he proposed that social ills could be remedied through sociological positivism, an epistemological approach outlined in the Course in Positive Philosophy (1830\u20131842), later included in A General View of Positivism (1848). Comte believed a positivist stage would mark the final era in the progression of human understanding, after conjectural theological and metaphysical phases. In observing the circular dependence of theory and observation in science, and having classified the sciences, Comte may be regarded as the first philosopher of science in the modern sense of the term. Comte gave a powerful impetus to the development of sociology, an impetus that bore fruit in the later decades of the nineteenth century. To say this is certainly not to claim that French sociologists such as Durkheim were devoted disciples of the high priest of positivism. But by insisting on the irreducibility of each of his basic sciences to the particular science of sciences which it presupposed in the...",
    "questions": [
      {
        "type": "mcq",
        "question": "According to the passage, which of the following statements best describes Auguste Comte's primary contribution to the development of sociology?",
        "options": [
          "He was the first to coin the term 'sociology' in an unpublished manuscript in 1780.",
          "He independently defined sociology, proposing 'sociological positivism' as a remedy for social ills and endeavoring to unify various social sciences.",
          "He merely appropriated the term 'social physics' from Adolphe Quetelet, rebranding it as sociology.",
          "His work primarily focused on analyzing social cohesion and conflict, building upon the foundations laid by Ibn Khaldun."
        ],
        "answer": "He independently defined sociology, proposing 'sociological positivism' as a remedy for social ills and endeavoring to unify various social sciences.",
        "explanation": "The passage states, 'Sociology was later defined independently by French philosopher of science Auguste Comte (1798\u20131857) in 1838 as a new way of looking at society.' It further explains that 'Comte endeavored to unify history, psychology, and economics through the scientific understanding of social life' and 'proposed that social ills could be remedied through sociological positivism.' Option A is incorrect as Siey\u00e8s coined the term. Option C misrepresents Comte's relationship with 'social physics'. Option D incorrectly attributes the focus and connection to Ibn Khaldun.",
        "id": "r6-1"
      },
      {
        "type": "tfng",
        "question": "Although Ibn Khaldun is regarded by some as the father of sociology, his theoretical frameworks were foundational and directly incorporated into the works of early European sociologists like Durkheim.",
        "answer": "False",
        "explanation": "The passage states, 'Some sources consider Ibn Khaldun, a 14th-century Muslim scholar from Tunisia, to have been the father of sociology, although there is no reference to his work in the writings of European contributors to modern sociology.' This explicitly contradicts the idea that his frameworks were directly incorporated or referenced by European contributors.",
        "id": "r6-2"
      },
      {
        "type": "fill",
        "question": "The turn of the 21st century has witnessed the emergence of new analytically, mathematically, and computationally rigorous techniques in social research, such as agent-based modelling and ______.",
        "answer": "social network analysis",
        "explanation": "The passage states, 'Conversely, the turn of the 21st century has seen the rise of new analytically, mathematically, and computationally rigorous techniques, such as agent-based modelling and social network analysis.' The missing phrase directly completes this list of modern techniques mentioned in the passage.",
        "id": "r6-3"
      }
    ]
  },
  {
    "id": "r7",
    "title": "Black hole",
    "category": "Science",
    "difficulty": "Hard",
    "description": "An academic passage regarding black hole with analytical questions.",
    "passage": "A black hole is an astronomical body so compact that its gravity prevents anything, including light, from escaping. Albert Einstein's theory of general relativity, which describes gravitation as the curvature of spacetime, predicts that any sufficiently compact mass will form a black hole. The boundary of no escape is called the event horizon. In general relativity, crossing a black hole's event horizon traps an object inside but produces no locally detectable change. General relativity also predicts that every black hole should have a central singularity, where the curvature of spacetime is infinite. Objects whose gravitational fields are too strong for light to escape were first considered in the 18th century. In 1916, the first solution of general relativity that would characterise a black hole was found. By the late 1950s, this solution began to be interpreted physically as a region of space from which nothing can escape. Black holes were long considered a mathematical curiosity; it was not until the 1960s that theoretical work showed they were a generic prediction of general relativity. The first widely accepted black hole was Cygnus X-1, identified by several researchers independently in 1971. Black holes typically form when very massive stars collapse at the end of their life cycle. After a black hole has formed, it can grow by absorbing mass from its surroundings. Supermassive black holes of millions of solar masses may form by absorbing stars and merging with other black holes, or via direct collapse of gas clouds. There is consensus that supermassive black holes exist in the centres of most galaxies. Quantum field theory in curved spacetime predicts that event horizons emit Hawking radiation, with its rate of emission being inversely proportional to its mass. This causes the black hole to lose mass very slowly, provided it is not accreting matter. However, even the smallest class of black holes observed, stellar black holes, are gaining mass from the cosmic microwave background faster than they are losing mass via Hawking radiation. The presence of a black hole can be inferred through its interaction with matter and electromagnetic radiation such as visible light. Matter falling toward a black hole can form an accretion disk of infalling plasma, heated by friction and emitting light. In extreme cases, this creates a quasar, some of the brightest objects in the universe. Merging black holes can be detected by the gravitational waves they emit. If stars are orbiting a black hole, their motions can be used to determine the black hole's mass and location. In this way, astronomers have identified numerous stellar black hole candidates in binary systems and established that the radio source known as Sagittarius A*, at the core of the Milky Way galaxy, contains a supermassive black hole of about 4.3 million solar masses. The idea of a body so massive that even light could not escape was first proposed in the late 18th century by English astronomer and clergyman John Michell and independently by French scientist Pierre-Simon Laplace. Both scholars proposed very large stars in contrast to the modern concept of an extremely dense object. Michell's idea, in a short part of a letter published in 1784, calculated that a star with the same density but 500 times the radius of the sun would not let any emitted light escape; the surface escape velocity would exceed the speed of light. Michell correctly hypothesized that such non-radiating bodies might be detectable through their gravitational effects on nearby visible bodies. In 1796, while speculating on the origin of the Solar System in his book Exposition du Syst\u00e8me du Monde, Laplace made a qualitative suggestion that a star could be invisible if it were sufficiently large. Franz Xaver von Zach asked Laplace for a mathematical analysis, which Laplace provided and published in von Zach's journal Allgemeine Geographische Ephemeriden. In 1905, Albert Einstein showed that the laws of electromagnetism are identical for observers travelling at different velocities relative to each other. The laws of mechanics had already been shown to be invariant in this way. However, the theory of gravitation was yet to be included. In 1907, Einstein published a paper proposing his equivalence principle, the hypothesis that inertial mass and gravitational mass have a common cause. Using the principle, Einstein predicted the redshift and the lensing effect of gravity on light; his prediction of gravitational lensing was one-half of the value that the full theory of general relativity would predict. By 1915, Einstein refined these ideas into his general theory of relativity, which explained how matter affects spacetime, which in turn affects the motion of other matter. This formed the basis for black hole physics. Only a few months after Einstein published the field equations describing general relativity, astrophysicist Karl Schwarzschild set out to apply the idea to stars. He assumed spherical symmetry with no spin...",
    "questions": [
      {
        "type": "mcq",
        "question": "Which of the following best describes the key conceptual shift from 18th-century ideas about objects from which light cannot escape to the modern understanding of black holes?",
        "options": [
          "The 18th-century theories accurately predicted the existence of a central singularity, which modern theory disproved.",
          "Early proposals envisioned extraordinarily massive stars with conventional densities, while modern theory defines black holes by extreme compactness and spacetime curvature.",
          "The initial theories suggested that these bodies would be undetectable, whereas modern astronomy relies on direct observation of the event horizon.",
          "Both historical and contemporary models agree on the quantum mechanical basis for light retention, but differ on the method of their formation."
        ],
        "answer": "Option B",
        "explanation": "The passage states that Michell and Laplace proposed 'very large stars in contrast to the modern concept of an extremely dense object' and that Einstein's theory of general relativity 'describes gravitation as the curvature of spacetime.' Option B accurately captures this shift from large, conventionally dense stars to extremely compact objects defined by spacetime curvature, making it the most accurate description of the conceptual shift.",
        "id": "r7-1"
      },
      {
        "type": "tfng",
        "question": "According to quantum field theory, all black holes, regardless of their size, are currently experiencing a net loss of mass due to Hawking radiation.",
        "answer": "False",
        "explanation": "The passage clarifies that 'Quantum field theory in curved spacetime predicts that event horizons emit Hawking radiation... This causes the black hole to lose mass very slowly... However, even the smallest class of black holes observed, stellar black holes, are gaining mass from the cosmic microwave background faster than they are losing mass via Hawking radiation.' This directly contradicts the statement that *all* black holes are experiencing a net loss of mass, as stellar black holes are gaining mass.",
        "id": "r7-2"
      },
      {
        "type": "fill",
        "question": "The phenomenon known as a _______, characterized as one of the brightest objects in the universe, is formed when matter falling toward a black hole creates an accretion disk of heated, emitting plasma.",
        "answer": "quasar",
        "explanation": "The passage states, 'Matter falling toward a black hole can form an accretion disk of infalling plasma, heated by friction and emitting light. In extreme cases, this creates a quasar, some of the brightest objects in the universe.' The missing word 'quasar' precisely describes this extreme phenomenon.",
        "id": "r7-3"
      }
    ]
  },
  {
    "id": "r8",
    "title": "Blockchain",
    "category": "Technology",
    "difficulty": "Hard",
    "description": "An academic passage regarding blockchain with analytical questions.",
    "passage": "A blockchain is a distributed ledger with growing lists of records (blocks) that are securely linked together via cryptographic hashes. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data (generally represented as a Merkle tree, where data nodes are represented by leaves). Since each block contains information about the previous block, they effectively form a chain (viz. linked list data structure), with each additional block linking to the ones before it. Consequently, blockchain transactions are resistant to alteration because, once recorded, the data in any given block cannot be changed retroactively without altering all subsequent blocks and obtaining network consensus to accept these changes. Blockchains are typically managed by a peer-to-peer (P2P) computer network for use as a public distributed ledger, where nodes collectively adhere to a consensus algorithm protocol to add and validate new transaction blocks. Although blockchain records are not unalterable, since blockchain forks are possible, blockchains may be considered secure by design and exemplify a distributed computing system with high Byzantine fault tolerance. A blockchain was created by a person (or group of people) using the name (or pseudonym) Satoshi Nakamoto in 2008 to serve as the public distributed ledger for bitcoin cryptocurrency transactions, based on previous work by Stuart Haber, W. Scott Stornetta, and Dave Bayer. The implementation of the blockchain within bitcoin made it the first digital currency to solve the double-spending problem without the need for a trusted authority or central server. The bitcoin design has inspired other applications and blockchains that are readable by the public and are widely used by cryptocurrencies. The blockchain may be considered a type of payment rail. Private blockchains have been proposed for business use. Computerworld called the marketing of such privatized blockchains without a proper security model \"snake oil\"; however, others have argued that permissioned blockchains, if carefully designed, may be more decentralized and therefore more secure in practice than permissionless ones. Cryptographer David Chaum first proposed a blockchain-like protocol in his 1982 dissertation \"Computer Systems Established, Maintained, and Trusted by Mutually Suspicious Groups\". Further work on a cryptographically secured chain of blocks was described in 1991 by Stuart Haber and W. Scott Stornetta. They wanted to implement a system wherein document timestamps could not be tampered with. In 1992, Haber, Stornetta, and Dave Bayer incorporated Merkle trees into the design, which improved its efficiency by allowing several document certificates to be collected into one block. Under their company Surety, their document certificate hashes have been published in The New York Times every week since 1995. The first decentralized blockchain was conceptualized by a person (or group of people) known as Satoshi Nakamoto in 2008. Nakamoto improved the design in an important way using a Hashcash-like method to timestamp blocks without requiring them to be signed by a trusted party and introducing a difficulty parameter to stabilize the rate at which blocks are added to the chain. The design was implemented the following year by Nakamoto as a core component of the cryptocurrency bitcoin, where it serves as the public ledger for all transactions on the network. In August 2014, the bitcoin blockchain file size, containing records of all transactions that have occurred on the network, reached 20 GB (gigabytes). By 2024, the bitcoin blockchain exceeded 600 GB. The words block and chain were used separately in Satoshi Nakamoto's original paper, but were eventually popularized as a single word, blockchain, by 2016. According to Accenture, an application of the diffusion of innovations theory suggests that blockchains attained a 13.5% adoption rate within financial services in 2016, therefore reaching the early adopters' phase. Industry trade groups joined to create the Global Blockchain Forum in 2016, an initiative of the Chamber of Digital Commerce. In May 2018, Gartner found that only 1% of CIOs indicated any kind of blockchain adoption within their organisations, and only 8% of CIOs were in the short-term \"planning or [looking at] active experimentation with blockchain\". For the year 2019 Gartner reported 5% of CIOs believed blockchain technology was a 'game-changer' for their business. A blockchain is a decentralized, distributed, and often public, digital ledger consisting of records called blocks that are used to record transactions across many computers so that any involved block cannot be altered retroactively, without the alteration of all subsequent blocks. This allows the participants to verify and audit transactions independently and relatively inexpensively. A blockchain database is managed autonomously using a peer-to-peer network and a distributed timestamping server. They are authenticated by mass collaboration powered by collective self-interests. Such a design facilitates robust workflow where participants' uncertainty regarding data security is marginal. The use of a blockchain removes the characteristic of infinite reproducibility from a digital asset. It confirms that each unit of value was transferred only once, solving the long-standing problem of double-spending....",
    "questions": [
      {
        "type": "mcq",
        "question": "Which of the following describes a key advancement introduced by Satoshi Nakamoto's blockchain design, distinguishing it from prior cryptographically secured chain concepts?",
        "options": [
          "The invention of cryptographic hashes to link records securely within a chain structure.",
          "The integration of Merkle trees to enhance the efficiency of collecting multiple document certificates.",
          "A mechanism to timestamp blocks without needing validation from a central, trusted authority.",
          "The initial proposal for a distributed ledger protocol by mutually suspicious groups."
        ],
        "answer": "A mechanism to timestamp blocks without needing validation from a central, trusted authority.",
        "explanation": "The passage states: 'Nakamoto improved the design in an important way using a Hashcash-like method to timestamp blocks without requiring them to be signed by a trusted party'. Options A and B were contributions by Haber, Stornetta, and Bayer. Option D was proposed by David Chaum. Nakamoto's innovation specifically addressed the trustless timestamping aspect.",
        "id": "r8-1"
      },
      {
        "type": "tfng",
        "question": "Permissioned blockchains, if designed carefully, are universally considered to be less secure than their public, permissionless counterparts.",
        "answer": "False",
        "explanation": "The passage notes conflicting views on private/permissioned blockchains: 'Computerworld called the marketing of such privatized blockchains without a proper security model 'snake oil'; however, others have argued that permissioned blockchains, if carefully designed, may be more decentralized and therefore more secure in practice than permissionless ones.' This directly contradicts the idea that they are *universally considered* less secure, indicating that some can be more secure.",
        "id": "r8-2"
      },
      {
        "type": "fill",
        "question": "The implementation of the blockchain within Bitcoin was groundbreaking because it was the first digital currency to resolve the long-standing ___________ problem without relying on a central authority.",
        "answer": "double-spending",
        "explanation": "The passage explicitly states: 'The implementation of the blockchain within bitcoin made it the first digital currency to solve the double-spending problem without the need for a trusted authority or central server.' and later 'It confirms that each unit of value was transferred only once, solving the long-standing problem of double-spending.'",
        "id": "r8-3"
      }
    ]
  },
  {
    "id": "r9",
    "title": "Industrial Revolution",
    "category": "History",
    "difficulty": "Hard",
    "description": "An academic passage regarding industrial revolution with analytical questions.",
    "passage": "The Industrial Revolution, sometimes called the First Industrial Revolution in contrast to the subsequent Second Industrial Revolution, was a transitional period of the global economy toward more widespread, efficient and stable manufacturing processes, succeeding the Second Agricultural Revolution. Beginning in Great Britain around 1760, the Industrial Revolution had spread to continental Europe and the United States by about 1840. Economic historians agree that the onset of the Industrial Revolution is the most important event in human history, comparable only to the adoption of agriculture with respect to material advancement. This transition included going from hand production methods to machines; new chemical manufacturing and iron production processes; the increasing use of water power and steam power; the development of machine tools; and rise of the mechanised factory system. Output greatly increased, and the result was an unprecedented rise in population and population growth. Many technological and architectural innovations were British. By the mid-18th century, Britain was the leading commercial nation, with GDP per capita considerably over the world average. The textile industry was the first to use modern production methods, and textiles became the dominant industry in terms of employment, value of output, and capital invested. The precise start and end of the Industrial Revolution is debated among historians, as is the pace of economic and social changes. Rapid adoption of mechanized textiles spinning occurred in Britain in the 1780s, and high rates of growth in steam power and iron production occurred after 1800. Mechanised textile production spread from Britain to continental Europe and the US in the early 19th century. A recession occurred from the late 1830s when the adoption of the Industrial Revolution's early innovations, such as mechanised spinning and weaving, slowed as markets matured despite increased adoption of locomotives, steamships, and hot blast iron smelting. New technologies such as the electrical telegraph, widely introduced in the 1840s in the UK and US, were not sufficient to drive high rates of growth. Rapid growth reoccurred after 1870, springing from new innovations in the Second Industrial Revolution. These included steel-making processes, mass production, assembly lines, electrical grid systems, large-scale manufacture of machine tools, and use of advanced machinery in steam-powered factories. The Industrial Revolution influenced almost every aspect of life. In particular, average income and population began to exhibit unprecedented sustained growth, with the standard of living for most in the Western world, though others have said it did not begin to improve meaningfully until the 20th century. Prior to the Industrial Revolution, most manufacturing occurred in China and India; after the Industrial Revolution, most manufacturing took place in North America and Western Europe. The earliest recorded use of \"Industrial Revolution\" was in 1799 by French envoy Louis-Guillaume Otto, announcing that France had entered the race to industrialise. Raymond Williams states: \"The idea of a new social order based on major industrial change was clear in Southey and Owen, between 1811\u201318, and was implicit as early as Blake in the early 1790s and Wordsworth at the turn of the [19th] century.\" The term Industrial Revolution applied to technological change became more common by the 1830s, as in J\u00e9r\u00f4me-Adolphe Blanqui's description in 1837 of la r\u00e9volution industrielle. Friedrich Engels in The Condition of the Working Class in England in 1844 spoke of \"an industrial revolution, a revolution which...changed the whole of civil society\". His book was not translated into English until the late 19th century, and the expression did not enter everyday language till then. Credit for its popularisation is given to Arnold Toynbee, whose 1881 lectures gave a detailed account of the term. Economic historians such as Mendels, Pomeranz, and Kridte argue proto-industrialisation in parts of Europe, the Islamic world, Mughal India, and China created the social and economic conditions that led to the Industrial Revolution, thus causing the Great Divergence. Some historians, such as John Clapham and Nicholas Crafts, have argued that the economic and social changes occurred gradually and that revolution is a misnomer. Several key factors enabled industrialisation. High agricultural productivity\u2014exemplified by the British Agricultural Revolution\u2014freed up labor and ensured food surpluses. The presence of skilled managers and entrepreneurs, an extensive network of ports, rivers, canals, and roads for efficient transport, and abundant natural resources such as coal, iron, and water power further supported industrial growth. Political stability, a legal system favorable to business, and access to financial capital also played crucial roles. Once industrialisation began in Britain in the 18th century, its spread was facilitated by the eagerness of British entrepreneurs to export industrial methods and the willingness of other nations to adopt them. By the early 19th century, industrialisation had reached Western Europe and the United States, and by the late 19th century, Japan. The commencement of the Industrial Revolution is closely linked to a small number of innovations, beginning in the second half of...",
    "questions": [
      {
        "type": "mcq",
        "question": "Which statement accurately characterises the economic period between the late 1830s and 1870, preceding the Second Industrial Revolution?",
        "options": [
          "A) This era was marked by consistent high growth driven by the continuous maturation of early industrial markets.",
          "B) Newly introduced technologies, such as the electrical telegraph, successfully sustained the rapid pace of industrial expansion.",
          "C) The adoption rate of initial industrial innovations, like mechanised textiles, slowed down, leading to a recession despite other technological advancements.",
          "D) Economic progress largely stagnated, with no significant new technological adoptions occurring until after 1870."
        ],
        "answer": "C",
        "explanation": "The passage states, 'A recession occurred from the late 1830s when the adoption of the Industrial Revolution's early innovations, such as mechanised spinning and weaving, slowed as markets matured despite increased adoption of locomotives, steamships, and hot blast iron smelting.' It further clarifies that 'New technologies such as the electrical telegraph... were not sufficient to drive high rates of growth.' This confirms a deceleration in early innovation adoption and a period of recession, rather than sustained high growth or complete stagnation.",
        "id": "r9-1"
      },
      {
        "type": "tfng",
        "question": "A universal consensus exists among historians regarding the Industrial Revolution being solely a period of abrupt and comprehensive change, justifying the term 'revolution'.",
        "answer": "False",
        "explanation": "The passage explicitly notes that 'The precise start and end of the Industrial Revolution is debated among historians, as is the pace of economic and social changes.' Furthermore, it states, 'Some historians, such as John Clapham and Nicholas Crafts, have argued that the economic and social changes occurred gradually and that revolution is a misnomer.' This directly contradicts the idea of a 'universal consensus' on the abrupt nature of the changes.",
        "id": "r9-2"
      },
      {
        "type": "fill",
        "question": "Beyond abundant natural resources and a well-developed transportation system, Britain's early industrialisation was critically supported by political stability, access to financial capital, and a legal system ______ to business.",
        "answer": "favorable",
        "explanation": "The passage lists 'Political stability, a legal system favorable to business, and access to financial capital also played crucial roles' among the 'key factors [that] enabled industrialisation' in Britain.",
        "id": "r9-3"
      }
    ]
  },
  {
    "id": "r10",
    "title": "Behavioral economics",
    "category": "Psychology",
    "difficulty": "Hard",
    "description": "An academic passage regarding behavioral economics with analytical questions.",
    "passage": "Behavioral economics is the study of the psychological (e.g. cognitive, behavioral, affective, social) factors involved in the decisions of individuals or institutions, and how these decisions deviate from those implied by traditional economic theory. Behavioral economics is primarily concerned with the bounds of rationality of economic agents. Behavioral models typically integrate insights from psychology, neuroscience and microeconomic theory. Behavioral economics began as a distinct field of study in the 1970s and 1980s, but can be traced back to 18th-century economists, such as Adam Smith, who deliberated how the economic behavior of individuals could be influenced by their desires. The status of behavioral economics as a subfield of economics is a fairly recent development; the breakthroughs that laid the foundation for it were published through the last three decades of the 20th century. Behavioral economics is still growing as a field, being used increasingly in research and in teaching. Behavioral economics is widely used to understand and improve real-world economic decision-making, particularly in areas such as public policy, finance, and market design. The field has become increasingly influential in informing economic analysis and policy design by incorporating empirically observed patterns of human behavior into standard economic models. Early classical economists included psychological reasoning in much of their writing, though psychology at the time was not a recognized field of study. In The Theory of Moral Sentiments, Adam Smith wrote on concepts later popularized by modern Behavioral Economic theory, such as loss aversion. Jeremy Bentham, a Utilitarian philosopher in the 1700s conceptualized utility as a product of psychology. Other economists who incorporated psychological explanations in their works included Francis Edgeworth, Vilfredo Pareto and Irving Fisher. A rejection and elimination of psychology from economics in the early 1900s brought on a period defined by a reliance on empiricism. There was a lack of confidence in hedonic theories, which saw pursuance of maximum benefit as an essential aspect in understanding human economic behavior. Hedonic analysis had shown little success in predicting human behavior, leading many to question its viability as a reliable source for prediction. There was also a fear among economists that the involvement of psychology in shaping economic models was inordinate and a departure from accepted principles. They feared that an increased emphasis on psychology would undermine the mathematic components of the field. By the late 1970s, critiques of expected-utility theory began to crystallize into formal alternative models, most notably prospect theory. To boost the ability of economics to predict accurately, economists started looking to tangible phenomena rather than theories based on human psychology. Psychology was seen as unreliable to many of these economists as it was a new field, not regarded as sufficiently scientific. Though a number of scholars expressed concern towards the positivism within economics, models of study dependent on psychological insights became rare. Economists instead conceptualized humans as purely rational and self-interested decision makers, illustrated in the concept of homo economicus. A key precursor was the notion of bounded rationality, which relaxed the assumption of fully optimal decision-making under cognitive and informational constraints. A pivotal early challenge to the dominance of expected-utility theory was mounted by French economist Maurice Allais. In his seminal 1953 paper, Allais presented empirical examples now known as the Allais paradox \u2014 notably the \u201ccommon-ratio\u201d and \u201ccommon-consequence\u201d effects \u2014 which demonstrated systematic deviations from expected-utility maximization. Experimental evidence summarized in recent meta-analytic work confirms that the common-ratio effect remains observable under many conditions. For instance, Blavatskyy, Panchenko & Ortmann (2023) re-examined data from 39 prior experiments (14,909 observations) and found that about 59.4% of designs reproduced the common-ratio pattern. The resurgence of psychology within economics, which facilitated the expansion of behavioral economics, has been linked to the cognitive revolution. In the 1960s, cognitive psychology began to shed more light on the brain as an information processing device (in contrast to behaviorist models). Psychologists in this field, such as Ward Edwards, Amos Tversky and Daniel Kahneman began to compare their cognitive models of decision-making under risk and uncertainty to economic models of rational behavior. These developments spurred economists to reconsider how psychology could be applied to economic models and theories. Concurrently, the Expected utility hypothesis and discounted utility models began to gain acceptance. In challenging the accuracy of generic utility, these concepts established a practice foundational in behavioral economics: Building on standard models by applying psychological knowledge. These developments helped set the stage for the field\u2019s broader acceptance in mainstream economics in subsequent decades, alongside growing research output and incorporation into teaching. Over time, behavioral insights were increasingly applied beyond individual choice to policy design, with evidence informing how economic tools and institutions affect behavior. Mathematical psychology reflects a long-standing interest in preference transitivity and the measurement of utility. Its consolidation as a distinct area is also reflected in scholarly classification systems, which list behavioral economics...",
    "questions": [
      {
        "type": "mcq",
        "question": "According to the passage, which of the following was NOT a primary reason for the early 20th-century economists' rejection of psychology's role in their field?",
        "options": [
          "A) A preference for empirical observation over theories rooted in human psychology.",
          "B) Concerns that psychological insights would weaken the mathematical foundations of economics.",
          "C) The perceived inability of hedonic theories, which incorporated psychology, to accurately predict human behavior.",
          "D) The complete absence of psychological reasoning in economic thought before the late 1970s."
        ],
        "answer": "D",
        "explanation": "The passage explicitly states that \"Early classical economists included psychological reasoning in much of their writing\" and even mentions Adam Smith's deliberations in the 18th century, indicating psychological reasoning was present well before the late 1970s. Therefore, the claim of 'complete absence' is incorrect. Options A, B, and C are all mentioned in the passage as reasons for the rejection: 'reliance on empiricism', 'fear among economists that the involvement of psychology... was inordinate and a departure from accepted principles' which would 'undermine the mathematic components', and 'Hedonic analysis had shown little success in predicting human behavior'.",
        "id": "r10-1"
      },
      {
        "type": "tfng",
        "question": "The Allais paradox, specifically its 'common-ratio' and 'common-consequence' effects, was the first empirical evidence challenging the validity of hedonic theories in predicting human behavior.",
        "answer": "False",
        "explanation": "The passage states that the Allais paradox 'demonstrated systematic deviations from expected-utility maximization,' not hedonic theories. The challenges to 'hedonic theories' occurred earlier, noting they 'had shown little success in predicting human behavior' (Paragraph 4), while critiques of 'expected-utility theory began to crystallize into formal alternative models' much later, with the Allais paradox being a 'pivotal early challenge' to this theory (Paragraph 5).",
        "id": "r10-2"
      },
      {
        "type": "fill",
        "question": "The concept of _______ played a key precursor role in challenging the notion of humans as purely rational decision-makers by acknowledging limitations in cognitive and informational processing.",
        "answer": "bounded rationality",
        "explanation": "The passage states, 'A key precursor was the notion of bounded rationality, which relaxed the assumption of fully optimal decision-making under cognitive and informational constraints.' This directly links 'bounded rationality' to challenging the idea of purely rational decision-makers due to cognitive and informational limits.",
        "id": "r10-3"
      }
    ]
  },
  {
    "id": "r11",
    "title": "Coral reef",
    "category": "Environment",
    "difficulty": "Hard",
    "description": "An academic passage regarding coral reef with analytical questions.",
    "passage": "A coral reef is an underwater ecosystem characterized by reef-building corals. Reefs are formed of colonies of coral polyps held together by calcium carbonate. Most coral reefs are built from stony corals, whose polyps cluster in groups. Coral belongs to the class Anthozoa in the animal phylum Cnidaria, which includes sea anemones and jellyfish. Unlike sea anemones, corals secrete hard carbonate exoskeletons that support and protect the coral. Most reefs grow best in warm, shallow, clear, sunny, and agitated water. Coral reefs first appeared 485 million years ago, at the dawn of the Early Ordovician, displacing the microbial and sponge reefs of the Cambrian. Sometimes called rainforests of the sea, shallow coral reefs form some of Earth's most diverse ecosystems. They occupy less than 0.1% of the world's ocean area, about half the area of France. Yet, they provide a home for at least 25% of all marine species, including fish, mollusks, worms, crustaceans, echinoderms, sponges, tunicates and other cnidarians. Coral reefs flourish in ocean waters that provide few nutrients. They are most commonly found at shallow depths in tropical waters, but deep water and cold water coral reefs exist on smaller scales in other areas. Shallow tropical coral reefs have declined by 50% since 1950, partly because they are sensitive to water conditions. They are under threat from excess nutrients (nitrogen and phosphorus), rising ocean heat content and acidification, overfishing (e.g., from blast fishing, cyanide fishing, spearfishing on scuba), sunscreen use, and harmful land-use practices, including runoff and seeps (e.g., from injection wells and cesspools). Coral reefs deliver ecosystem services for tourism, fisheries, and shoreline protection. The annual global economic value of coral reefs has been estimated at anywhere from US$30\u2013375 billion (1997 and 2003 estimates) to US$2.7 trillion (a 2020 estimate) to US$9.9 trillion (a 2014 estimate). Most coral reefs were formed after the Last Glacial Period when melting ice caused sea level to rise and flood continental shelves. Most coral reefs are less than 10,000 years old. As communities established themselves, the reefs grew upward, keeping pace with rising sea levels. Reefs that rose too slowly could become drowned, without sufficient light. Coral reefs are also found in the deep sea away from continental shelves, around oceanic islands and atolls. The majority of these islands are volcanic in origin. Others have tectonic origins where plate movements lifted the deep ocean floor. In The Structure and Distribution of Coral Reefs, Charles Darwin set out his theory of the formation of atoll reefs, an idea he conceived during the voyage of the Beagle. He theorized that uplift and subsidence of Earth's oceanic crust beneath the oceans formed the atolls. Darwin set out a sequence of three stages in atoll formation. A fringing reef forms around an extinct volcanic island as the island and ocean floor subside. As the subsidence continues, the fringing reef becomes a barrier reef and ultimately an atoll reef. Darwin predicted that underneath each lagoon would be a bedrock base, the remains of the original volcano. Subsequent research supported this hypothesis. Darwin's theory followed from his understanding that coral polyps thrive in the tropics where the water is agitated, but can only live within a limited depth range, starting just below low tide. Where the underlying earth allows, corals grow along the coast to form fringing reefs, which can eventually become barrier reefs. Where the bottom is rising, fringing reefs can grow around the coast, but coral raised above sea level dies. If the land subsides slowly, the fringing reefs keep pace by growing upward on a base of older, dead coral, forming a barrier reef that encloses a lagoon between the reef and the land. A barrier reef can encircle an island, and once the island sinks below sea level, a roughly circular atoll of growing coral continues to keep up with the sea level, forming a central lagoon. Barrier reefs and atolls do not usually form complete circles but are broken in places by storms. Like sea level rise, a rapidly subsiding bottom can overwhelm coral growth, killing the coral and the reef, due to what is called coral drowning. Corals that rely on zooxanthellae can die when the water becomes too deep for their symbionts to adequately photosynthesize, due to decreased light exposure. The two main variables determining the geomorphology, or shape, of coral reefs are the nature of the substrate on which they rest, and the history of the change in sea level relative to that substrate. The approximately 20,000-year-old Great Barrier Reef offers an example of how coral reefs formed on continental shelves. Sea level was then 120 m (390 ft) lower than in the 21st century. As sea level rose, the water and the corals encroached on what had been hills of the Australian coastal plain. By 13,000 years ago,...",
    "questions": [
      {
        "type": "mcq",
        "question": "Which of the following statements regarding the conditions and characteristics of coral reefs is NOT supported by the passage?",
        "options": [
          "Coral reefs, despite covering a minuscule portion of the ocean, host a disproportionately large percentage of marine life.",
          "The primary environmental factors for thriving shallow coral reefs include clear, warm, and nutrient-rich waters.",
          "Charles Darwin's theory on atoll formation accurately predicted the presence of volcanic bedrock beneath lagoon areas.",
          "The current economic valuation of global coral reef services represents a substantial increase compared to earlier estimates."
        ],
        "answer": "The primary environmental factors for thriving shallow coral reefs include clear, warm, and nutrient-rich waters.",
        "explanation": "The passage states, 'Coral reefs flourish in ocean waters that provide few nutrients.' This directly contradicts the option suggesting 'nutrient-rich waters'. Other options are supported: 'They occupy less than 0.1% of the world's ocean area... Yet, they provide a home for at least 25% of all marine species' (Option A); 'Darwin predicted that underneath each lagoon would be a bedrock base, the remains of the original volcano. Subsequent research supported this hypothesis' (Option C); and 'The annual global economic value of coral reefs has been estimated at anywhere from US$30\u2013375 billion... to US$2.7 trillion (a 2020 estimate) to US$9.9 trillion (a 2014 estimate)' (Option D).",
        "id": "r11-1"
      },
      {
        "type": "tfng",
        "question": "The vast majority of modern coral reefs began their formation during the Last Glacial Period, when sea levels were considerably lower than today.",
        "answer": "False",
        "explanation": "The passage states, 'Most coral reefs were formed after the Last Glacial Period when melting ice caused sea level to rise and flood continental shelves. Most coral reefs are less than 10,000 years old.' This directly contradicts the statement that the majority began forming *during* the Last Glacial Period; rather, they formed *after* it as sea levels rose.",
        "id": "r11-2"
      },
      {
        "type": "fill",
        "question": "The two principal elements that determine the specific geomorphology, or physical shape, of coral reefs are the nature of the underlying material and the history of changes in sea level relative to that _______.",
        "answer": "substrate",
        "explanation": "The passage states, 'The two main variables determining the geomorphology, or shape, of coral reefs are the nature of the substrate on which they rest, and the history of the change in sea level relative to that substrate.' The word 'substrate' accurately completes the sentence as per the text.",
        "id": "r11-3"
      }
    ]
  },
  {
    "id": "r12",
    "title": "Urbanization",
    "category": "Society",
    "difficulty": "Hard",
    "description": "An academic passage regarding urbanization with analytical questions.",
    "passage": "Urbanization (or urbanisation in British English) is the population shift from rural to urban areas, the corresponding decrease in the proportion of people living in rural areas, and the ways in which societies adapt to this change. It can also mean population growth in urban areas instead of rural ones. It is predominantly the process by which towns and cities are formed and become larger as more people begin to live and work in central areas. Although the two concepts are sometimes used interchangeably, urbanization should be distinguished from urban growth. Urbanization refers to the proportion of the total national population living in areas classified as urban, whereas urban growth strictly refers to the absolute number of people living in those areas. It is predicted that by 2050, about 64% of the developing world and 86% of the developed world will be urbanized. This is predicted to generate artificial scarcities of land, lack of drinking water, playgrounds and other essential resources for most urban dwellers. The predicted urban population growth is equivalent to approximately 3 billion urbanites by 2050, much of which will occur in Africa and Asia. Notably, the United Nations has also recently projected that nearly all global population growth from 2017 to 2030 will take place in cities, with about 1.1 billion new urbanites over the next 10 years. In the long term, urbanization is expected to significantly impact the quality of life in negative ways. Urbanization is relevant to a range of disciplines, including urban planning, geography, sociology, architecture, economics, education, statistics, and public health. The phenomenon has been closely linked to globalization, modernization, industrialization, marketization, administrative/institutional power, and the sociological process of rationalization. Urbanization can be seen as a specific condition at a set time (e.g. the proportion of total population or area in cities or towns), or as an increase in that condition over time. Therefore, urbanization can be quantified either in terms of the level of urban development relative to the overall population, or as the rate at which the urban proportion of the population is increasing. Urbanization creates enormous social, economic and environmental challenges, which provide an opportunity for sustainability with the \"potential to use resources much less or more efficiently, to create more sustainable land use and to protect the biodiversity of natural ecosystems.\" However, current urbanization trends have shown that massive urbanization has led to unsustainable ways of living. Developing urban resilience and urban sustainability in the face of increased urbanization is at the centre of international policy in Sustainable Development Goal 11 \"Sustainable cities and communities.\" Urbanization is not merely a modern phenomenon, but a rapid and historic transformation of human social roots on a global scale, whereby predominantly rural culture is being rapidly replaced by predominantly urban culture. The first major change in settlement patterns was the accumulation of hunter-gatherers into villages many thousands of years ago. Village culture is characterized by common bloodlines, intimate relationships, and communal behaviour, whereas urban culture is characterized by distant bloodlines, unfamiliar relations, and competitive behaviour. This unprecedented movement of people is forecast to continue and intensify during the next few decades, mushrooming cities to sizes unthinkable only a century ago. As a result, the world urban population growth curve has up till recently followed a quadratic-hyperbolic pattern. From the development of the earliest cities in Indus Valley Civilization, Mesopotamia and Egypt until the 18th century, an equilibrium existed between the vast majority of the population who were engaged in subsistence agriculture in a rural context, and small centres of populations in the towns where economic activity consisted only of trade at markets and manufactures on a small scale. Due to the primitive and relatively stagnant state of agriculture throughout this period, the ratio of rural to urban population remained at a fixed equilibrium. However, a significant increase in the percentage of the global urban population can be traced in the 1st millennium BCE. With the onset of the British Agricultural Revolution and Industrial Revolution in the late 18th century, this relationship was finally broken and an unprecedented growth in urban population took place over the course of the 19th century, both through continued migration from the countryside and due to the tremendous demographic expansion that occurred at that time. In England and Wales, the proportion of the population living in cities with more than 20,000 people jumped from 17% in 1801 to 54% in 1891. Moreover, and adopting a broader definition of urbanization, while the urbanized population in England and Wales represented 72% of the total in 1891, for other countries the figure was 37% in France, 41% in Prussia and 28% in the United States. As labourers were freed up from working the land due to higher agricultural productivity, they converged on the new industrial cities like Manchester and Birmingham,...",
    "questions": [
      {
        "type": "mcq",
        "question": "According to the passage, which of the following is presented as a method for quantifying urbanization?",
        "options": [
          "The cumulative increase in the number of urban dwellers globally.",
          "The pace at which the percentage of the population living in cities is rising.",
          "The average density of population per square kilometer within designated urban zones.",
          "The economic output generated by industries located exclusively within urban regions."
        ],
        "answer": "The pace at which the percentage of the population living in cities is rising.",
        "explanation": "The passage explicitly states: 'Therefore, urbanization can be quantified either in terms of the level of urban development relative to the overall population, or as the rate at which the urban proportion of the population is increasing.' Option B, 'The pace at which the percentage of the population living in cities is rising,' directly corresponds to 'the rate at which the urban proportion of the population is increasing.' Option A describes urban growth, which the passage distinguishes from urbanization.",
        "id": "r12-1"
      },
      {
        "type": "tfng",
        "question": "Prior to the 18th century, the proportion of the global urban population experienced no notable increases, maintaining a static rural-to-urban ratio.",
        "answer": "False",
        "explanation": "The passage states, 'From the development of the earliest cities... until the 18th century, an equilibrium existed between the vast majority of the population... and small centres of populations... the ratio of rural to urban population remained at a fixed equilibrium.' However, it immediately follows with, 'However, a significant increase in the percentage of the global urban population can be traced in the 1st millennium BCE.' This directly contradicts the idea that there were 'no notable increases' and a 'static' ratio prior to the 18th century.",
        "id": "r12-2"
      },
      {
        "type": "fill",
        "question": "While village culture is characterized by common bloodlines and intimate relationships, urban culture is distinctly defined by distant bloodlines, unfamiliar relations, and _______ behaviour.",
        "answer": "competitive",
        "explanation": "The passage explicitly contrasts village and urban cultures: 'Village culture is characterized by common bloodlines, intimate relationships, and communal behaviour, whereas urban culture is characterized by distant bloodlines, unfamiliar relations, and competitive behaviour.' The missing word, 'competitive,' completes the description of urban culture.",
        "id": "r12-3"
      }
    ]
  },
  {
    "id": "r13",
    "title": "DNA",
    "category": "Science",
    "difficulty": "Hard",
    "description": "An academic passage regarding dna with analytical questions.",
    "passage": "Deoxyribonucleic acid (; DNA) is a polymer composed of two polynucleotide chains that coil around each other to form a double helix. The polymer carries genetic instructions for the development, functioning, growth and reproduction of all known organisms and many viruses. DNA and ribonucleic acid (RNA) are nucleic acids. Alongside proteins, lipids and complex carbohydrates (polysaccharides), nucleic acids are one of the four major types of macromolecules that are essential for all known forms of life. The two DNA strands are known as polynucleotides as they are composed of simpler monomeric units called nucleotides. Each nucleotide is composed of one of four nitrogen-containing nucleobases (cytosine [C], guanine [G], adenine [A] or thymine [T]), a sugar called deoxyribose, and a phosphate group. The nucleotides are joined to one another in a chain by covalent bonds (known as the phosphodiester linkage) between the sugar of one nucleotide and the phosphate of the next, resulting in an alternating sugar-phosphate backbone. The nitrogenous bases of the two separate polynucleotide strands are bound together, according to base pairing rules (A with T and C with G), with hydrogen bonds to make double-stranded DNA. The complementary nitrogenous bases are divided into two groups, the single-ringed pyrimidines and the double-ringed purines. In DNA, the pyrimidines are thymine and cytosine; the purines are adenine and guanine. Both strands of double-stranded DNA store the same biological information. This information is replicated when the two strands separate. The two strands of DNA run in opposite directions to each other and are thus antiparallel. Attached to each sugar is one of four types of nucleobases (or bases). It is the sequence of these four nucleobases along the backbone that encodes genetic information. RNA strands are created using DNA strands as a template in a process called transcription, where DNA bases are exchanged for their corresponding bases except in the case of thymine (T), for which RNA substitutes uracil (U). Under the genetic code, these RNA strands specify the sequence of amino acids within proteins in a process called translation. Within eukaryotic cells, DNA is organized into long structures called chromosomes. Before typical cell division, these chromosomes are duplicated in the process of DNA replication, providing a complete set of chromosomes for each daughter cell. Eukaryotic organisms (animals, plants, fungi and protists) store most of their DNA inside the cell nucleus as nuclear DNA, and some in the mitochondria as mitochondrial DNA or in chloroplasts as chloroplast DNA. In contrast, prokaryotes (bacteria and archaea) store their DNA only in the cytoplasm, in circular chromosomes. Within eukaryotic chromosomes, chromatin proteins, such as histones, compact and organize DNA. These compacting structures guide the interactions between DNA and other proteins, helping control which parts of the DNA are transcribed. DNA is a long polymer made from repeating units called nucleotides. The structure of DNA is dynamic along its length, being capable of coiling into tight loops and other shapes. In all species it is composed of two helical chains, bound to each other by hydrogen bonds. Both chains are coiled around the same axis, and have the same pitch of 34 \u00e5ngstr\u00f6ms (3.4 nm). The pair of chains have a radius of 10 \u00c5 (1.0 nm). According to another study, when measured in a different solution, the DNA chain measured 22\u201326 \u00c5 (2.2\u20132.6 nm) wide, and one nucleotide unit measured 3.3 \u00c5 (0.33 nm) long. The buoyant density of most DNA is 1.7g/cm3. DNA does not usually exist as a single strand, but instead as a pair of strands that are held tightly together. These two long strands coil around each other, in the shape of a double helix. The nucleotide contains both a segment of the backbone of the molecule (which holds the chain together) and a nucleobase (which interacts with the other DNA strand in the helix). A nucleobase linked to a sugar is called a nucleoside, and a base linked to a sugar and to one or more phosphate groups is called a nucleotide. A biopolymer comprising multiple linked nucleotides (as in DNA) is called a polynucleotide. The backbone of the DNA strand is made from alternating phosphate and sugar groups. The sugar in DNA is 2-deoxyribose, which is a pentose (five-carbon) sugar. The sugars are joined by phosphate groups that form phosphodiester bonds between the third and fifth carbon atoms of adjacent sugar rings. These are known as the 3\u2032-end (three prime end), and 5\u2032-end (five prime end) carbons, the prime symbol being used to distinguish these carbon atoms from those of the base to which the deoxyribose forms a glycosidic bond. Therefore, any DNA strand normally has one end at which there is a phosphate group attached to the 5\u2032 carbon of a ribose (the 5\u2032 phosphoryl) and another end at which there is a free hydroxyl group attached to...",
    "questions": [
      {
        "type": "mcq",
        "question": "Which statement accurately describes the hierarchical composition and inter-strand bonding within a double-stranded DNA molecule?",
        "options": [
          "A) Single-ringed purines (thymine, cytosine) are linked by phosphodiester bonds to double-ringed pyrimidines (adenine, guanine) to form the sugar-phosphate backbone, with hydrogen bonds stabilizing the two strands.",
          "B) Nucleotides, each consisting of a nucleobase, deoxyribose sugar, and a phosphate group, are joined by covalent phosphodiester linkages into polynucleotide chains, which then connect via hydrogen bonds between specific nitrogenous bases to form a double helix.",
          "C) The antiparallel nature of DNA is due to hydrogen bonds between adjacent sugar molecules, while covalent bonds between purines (adenine, guanine) and pyrimidines (thymine, cytosine) secure the two helical chains.",
          "D) DNA strands are primarily composed of alternating hydrogen bonds and deoxyribose units, with nucleobases extending outwards to compact the structure through interactions with chromatin proteins."
        ],
        "answer": "Option B",
        "explanation": "The passage details that 'Each nucleotide is composed of one of four nitrogen-containing nucleobases... a sugar called deoxyribose, and a phosphate group.' It further explains that 'The nucleotides are joined to one another in a chain by covalent bonds (known as the phosphodiester linkage) between the sugar of one nucleotide and the phosphate of the next, resulting in an alternating sugar-phosphate backbone.' Finally, for the double-stranded structure, it states, 'The nitrogenous bases of the two separate polynucleotide strands are bound together, according to base pairing rules... with hydrogen bonds to make double-stranded DNA.' Option B accurately synthesizes these elements, including the covalent phosphodiester bonds for the backbone and hydrogen bonds for inter-strand base pairing.",
        "id": "r13-1"
      },
      {
        "type": "tfng",
        "question": "Prokaryotic organisms organize all of their DNA into structures called chromosomes within a distinct nuclear compartment, similar to eukaryotic cells.",
        "answer": "False",
        "explanation": "The passage states: 'Eukaryotic organisms... store most of their DNA inside the cell nucleus as nuclear DNA... In contrast, prokaryotes (bacteria and archaea) store their DNA only in the cytoplasm, in circular chromosomes.' This directly contradicts the statement, as prokaryotes store DNA in the cytoplasm, not a nucleus, and do not have a 'distinct nuclear compartment'.",
        "id": "r13-2"
      },
      {
        "type": "fill",
        "question": "The specific sequence of four nitrogenous _______ along the backbone of a DNA strand is what ultimately encodes the genetic information.",
        "answer": "nucleobases",
        "explanation": "The passage explicitly states: 'Attached to each sugar is one of four types of nucleobases (or bases). It is the sequence of these four nucleobases along the backbone that encodes genetic information.' This indicates 'nucleobases' as the correct term for the units that encode information through their sequence.",
        "id": "r13-3"
      }
    ]
  },
  {
    "id": "r14",
    "title": "Internet of things",
    "category": "Technology",
    "difficulty": "Hard",
    "description": "An academic passage regarding internet of things with analytical questions.",
    "passage": "Internet of things (IoT) describes physical objects that are embedded with sensors, processing ability, software, and other technologies that connect and exchange data with other devices and systems over the Internet or other communication networks. The field of IoT encompasses electronics, communication, and computer science engineering. \"Internet of things\" has been considered a misnomer because most devices do not need to be connected to the public Internet; they only need to be connected to a network and be individually addressable. The field has evolved due to the convergence of multiple technologies, including ubiquitous computing, sensors, embedded systems, and machine learning. Traditional fields of embedded systems, wireless sensor networks, control systems, and automation independently and collectively enable the Internet of things. While in the consumer market, IoT technology is most commonly as smart home products\u2014including devices and appliances like thermostats and smart speakers\u2014the technology's largest applications are in the business and industrial sectors. Commercial asset tracking and fleet management represent the largest single application of IoT, accounting for 22% of the total market, driven by the need to monitor mobile assets like vehicles and shipping containers. The largest asset tracking sub-segments in transport & logistics are trailer and intermodal container tracking, reaching 5.8 million and 5.3 million active devices globally at the end of 2024 respectively. Other major applications include industrial monitoring, smart metering in utilities, and connected healthcare. There are a number of concerns about the risks in the growth of IoT technologies and products, especially in the areas of privacy and security, and consequently there have been industry and government moves to address these concerns adequately and minimize safety risks, including the development and implementation of international and local standards, guidelines, and regulatory frameworks. Due to their interconnected nature, IoT devices are vulnerable to security breaches and privacy concerns. At the same time, the way these devices communicate wirelessly creates regulatory ambiguities, complicating jurisdictional boundaries of the data transfer. Around 1972, for its remote site use, the Stanford Artificial Intelligence Laboratory developed a computer-controlled vending machine, adapted from a machine rented from Canteen Vending, which sold for cash or, through a computer terminal (Teletype Model 33 KSR), on credit. Amongst its products were beer, yogurt, and milk. It was named Prancing Pony, after the name of the room, which was named after an inn in J. R. R. Tolkien's epic fantasy novel The Lord of the Rings. A successor version still operates in the Computer Science Department at Stanford, with updated hardware and software. In 1982, an early concept of a network connected smart device was constructed as an Internet interface for sensors installed in the Carnegie Mellon University Computer Science Department's departmental Coca-Cola vending machine, supplied by graduate student volunteers, provided a temperature model and an inventory status, inspired by the computer controlled vending machine in the Prancing Pony room at Stanford Artificial Intelligence Laboratory. While it was initially accessible only on the CMU campus, it gained prominence as the first ARPANET-connected appliance. Mark Weiser's 1991 paper on ubiquitous computing, \"The Computer of the 21st Century\", as well as academic venues such as UbiComp and PerCom, produced the contemporary vision of the IoT. In 1994, Reza Raji described the concept in IEEE Spectrum as \"[moving] small packets of data to a large set of nodes, so as to integrate and automate everything from home appliances to entire factories.\" Between 1993 and 1997, several companies proposed solutions, such as Microsoft's at Work or Novell's NEST. The field gained momentum when Bill Joy envisioned device-to-device communication as part of his \"Six Webs\" framework, which was presented at the World Economic Forum in Davos in 1999. The concept of the \"Internet of things\" and the term itself first appeared in a speech by Peter T. Lewis to the Congressional Black Caucus Foundation 15th Annual Legislative Weekend in Washington, D.C., published in September 1985. According to Lewis, \"The Internet of Things, or IoT, is the integration of people, processes, and technology with connectable devices and sensors to enable remote monitoring, status, manipulation, and evaluation of trends of such devices.\" The term \"Internet of things\" was coined independently by Kevin Ashton of Procter & Gamble, later of Massachusetts Institute of Technology's Auto-ID Center, in 1999, despite preferring the phrase \"Internet for things.\" At that point, he considered radio-frequency identification (RFID) an essential component of the Internet of things, as it would effectively enable computers to manage all individual things. The primary defining characteristic of the Internet of things has been considered its ability to embed short-range mobile transceivers in various gadgets and daily necessities, enabling new forms of communication between people and things, as well as between things themselves. In 2004, Cornelius \"Pete\" Peterson, CEO of NetSilicon, predicted that \"The next era of information technology will be dominated by [IoT] devices, and networked...",
    "questions": [
      {
        "type": "mcq",
        "question": "According to the passage, the primary reason the term 'Internet of things' is considered a misnomer is that:",
        "options": [
          "A) The earliest prototypes of IoT devices, such as the Stanford vending machine, did not utilise the public Internet.",
          "B) The core functionality of most IoT devices requires only network connectivity and individual addressability, not direct access to the public Internet.",
          "C) The majority of IoT applications are found in business and industrial sectors, rather than being consumer-focused on the public Internet.",
          "D) The field of IoT has evolved through the convergence of multiple distinct technologies, making 'Internet' an overly simplistic descriptor."
        ],
        "answer": "B",
        "explanation": "The passage explicitly states: \"'Internet of things' has been considered a misnomer because most devices do not need to be connected to the public Internet; they only need to be connected to a network and be individually addressable.\"",
        "id": "r14-1"
      },
      {
        "type": "tfng",
        "question": "The total number of active devices for trailer and intermodal container tracking combined is projected to exceed 11 million globally by the end of 2024.",
        "answer": "True",
        "explanation": "The passage states, 'The largest asset tracking sub-segments in transport & logistics are trailer and intermodal container tracking, reaching 5.8 million and 5.3 million active devices globally at the end of 2024 respectively.' Adding these two figures (5.8 million + 5.3 million) totals 11.1 million, which is indeed more than 11 million.",
        "id": "r14-2"
      },
      {
        "type": "fill",
        "question": "The wireless communication methods employed by IoT devices can lead to regulatory __________, complicating the establishment of clear jurisdictional boundaries for data transfer.",
        "answer": "ambiguities",
        "explanation": "The passage states: 'At the same time, the way these devices communicate wirelessly creates regulatory ambiguities, complicating jurisdictional boundaries of the data transfer.'",
        "id": "r14-3"
      }
    ]
  },
  {
    "id": "r15",
    "title": "Roman Empire",
    "category": "History",
    "difficulty": "Hard",
    "description": "An academic passage regarding roman empire with analytical questions.",
    "passage": "The Roman Empire was a state that controlled the Mediterranean and much of Europe, Western Asia, and North Africa during the classical period. The Roman Republic had previously conquered most of these territories, which became ruled by emperors following triumvir Octavian's rise to power and establishment of a Principate regime in 27 BC. By the 4th century AD the empire split into western and eastern halves. The Western Empire collapsed in 476 AD, while the Eastern Empire endured until the fall of Constantinople in 1453. By 100 BC, the city of Rome had expanded its rule from the Italian peninsula to most of the Mediterranean and beyond. However, it was severely destabilised by civil wars and political conflicts, which culminated in the victory of Octavian over Mark Antony and Cleopatra at the Battle of Actium in 31 BC, and the subsequent conquest of the Ptolemaic Kingdom in Egypt. In 27 BC, the Roman Senate granted Octavian overarching military power (imperium) and the new title of Augustus, marking his accession as the first Roman emperor. The vast Roman territories were organized into senatorial provinces, governed by proconsuls who were appointed by lot annually, and imperial provinces, which belonged to the emperor but were governed by legates. The first two centuries of the Empire saw a period of unprecedented stability and prosperity known as the Pax Romana (lit. 'Roman Peace'). Rome reached its greatest territorial extent under Trajan (r. 98\u2013117 AD), but a period of increasing trouble and decline began under Commodus (r. 180\u2013192). In the 3rd century, the Empire underwent a 49-year crisis that threatened its existence due to civil war, plagues and barbarian invasions. The Gallic and Palmyrene empires broke away from the state and a series of short-lived emperors led the Empire, which was later reunified under Aurelian (r. 270\u2013275). The civil wars ended with the victory of Diocletian (r. 284\u2013305), who set up two different imperial courts in the Greek East and Latin West. Constantine the Great (r. 306\u2013337), the first Christian emperor, moved the imperial seat from Rome to Byzantium in 330, and renamed it Constantinople. The Migration Period, involving large invasions by Germanic peoples and by the Huns of Attila, led to the decline of the Western Roman Empire. With the fall of Ravenna to the Germanic Herulians and the deposition of Romulus Augustus in 476 by Odoacer, the Western Empire finally collapsed. The Byzantine (Eastern Roman) Empire survived for another millennium with Constantinople as its sole capital, until the city's fall in 1453. Due to the Empire's extent and endurance, its institutions and culture had a lasting influence on the development of language, religion, art, architecture, literature, philosophy, law, and forms of government across its territories. Latin evolved into the Romance languages while Medieval Greek became the language of the East. The Empire's adoption of Christianity resulted in the formation of medieval Christendom. Roman and Greek art had a profound impact on the Italian Renaissance. Rome's architectural tradition served as the basis for Romanesque, Renaissance, and Neoclassical architecture, influencing Islamic architecture. The rediscovery of classical science and technology (which formed the basis for Islamic science) in medieval Europe contributed to the Scientific Renaissance and Scientific Revolution. Many modern legal systems, such as the Napoleonic Code, descend from Roman law. Rome's republican institutions have influenced the Italian city-state republics of the medieval period, the early United States, and modern democratic republics. Rome had begun expanding shortly after the founding of the Roman Republic in the 6th century BC, though not outside the Italian Peninsula until the 3rd century BC. The Republic was not a nation-state in the modern sense, but a network of self-ruled towns (with varying degrees of independence from the Senate) and provinces administered by military commanders. It was governed by annually elected magistrates (Roman consuls above all) in conjunction with the Senate. The 1st century BC was a time of political and military upheaval, which ultimately led to rule by emperors. The consuls' military power rested in the Roman legal concept of imperium, meaning \"command\" (typically in a military sense). Occasionally, successful consuls or generals were given the honorary title imperator (commander); this is the origin of the word emperor, since this title was always bestowed to the early emperors. Rome suffered a long series of internal conflicts, conspiracies, and civil wars from the late second century BC, (see Crisis of the Roman Republic) while greatly extending its power beyond Italy. In 44 BC Julius Caesar was briefly perpetual dictator before being assassinated by a faction that opposed his concentration of power. This faction was driven from Rome and defeated at the Battle of Philippi in 42 BC by Mark Antony and Caesar's adopted son Octavian. Antony and Octavian divided the Roman world between them, but this did not last long. Octavian's forces...",
    "questions": [
      {
        "type": "mcq",
        "question": "Which of the following events is presented as the primary catalyst for the Roman Republic's definitive transformation into an Empire under an emperor?",
        "options": [
          "A) The gradual expansion of Roman territories beyond the Italian Peninsula starting in the 3rd century BC.",
          "B) The establishment of the Pax Romana, which required a singular, powerful leader to maintain peace.",
          "C) The culmination of extensive civil wars and political upheaval, leading to Octavian's ultimate triumph.",
          "D) The Roman Senate's strategic decision to centralize power to effectively manage the existing vast provinces."
        ],
        "answer": "C",
        "explanation": "The passage states, 'However, it was severely destabilised by civil wars and political conflicts, which culminated in the victory of Octavian over Mark Antony and Cleopatra at the Battle of Actium in 31 BC... In 27 BC, the Roman Senate granted Octavian overarching military power (imperium) and the new title of Augustus, marking his accession as the first Roman emperor.' This clearly indicates that the civil wars and Octavian's victory were the primary catalyst for the transition to the Empire.",
        "id": "r15-1"
      },
      {
        "type": "tfng",
        "question": "The system of governance under the Roman Empire mandated that proconsuls, appointed annually by lot, held administrative responsibility for both senatorial and imperial provinces.",
        "answer": "False",
        "explanation": "The passage clearly differentiates: 'The vast Roman territories were organized into senatorial provinces, governed by proconsuls who were appointed by lot annually, and imperial provinces, which belonged to the emperor but were governed by legates.' This indicates that proconsuls only governed senatorial provinces, while legates governed imperial provinces, making the statement false.",
        "id": "r15-2"
      },
      {
        "type": "fill",
        "question": "The enduring cultural impact of the Roman Empire is evident in the linguistic evolution where Latin developed into the various _______ languages.",
        "answer": "Romance",
        "explanation": "The passage explicitly states: 'Latin evolved into the Romance languages while Medieval Greek became the language of the East.' This directly answers what type of languages Latin evolved into due to the Empire's influence.",
        "id": "r15-3"
      }
    ]
  },
  {
    "id": "r16",
    "title": "Memory",
    "category": "Psychology",
    "difficulty": "Hard",
    "description": "An academic passage regarding memory with analytical questions.",
    "passage": "Memory is the faculty of the mind by which data or information is encoded, stored, and retrieved when needed. It is the retention of information over time for the purpose of influencing future action. If past events could not be remembered, it would be impossible for language, relationships, or personal identity to develop. Memory loss is usually described as forgetfulness or amnesia. Memory is often understood as an information processing system with explicit and implicit functioning that is made up of a sensory processor, short-term (or working) memory, and long-term memory. This can be related to the neuron. The sensory processor allows information from the outside world to be sensed in the form of chemical and physical stimuli and attended to various levels of focus and intent. Working memory serves as an encoding and retrieval processor. Information in the form of stimuli is encoded in accordance with explicit or implicit functions by the working memory processor. The working memory also retrieves information from previously stored material. Finally, the function of long-term memory is to store information through various categorical models or systems. Declarative, or explicit memory, is the conscious storage and recollection of data. Under declarative memory resides semantic and episodic memory. Semantic memory refers to memory that is encoded with specific meaning. Meanwhile, episodic memory refers to information that is encoded along a spatial and temporal plane. Declarative memory is usually the primary process thought of when referencing memory. Non-declarative, or implicit, memory is the unconscious storage and recollection of information. An example of a non-declarative process would be the unconscious learning or retrieval of information by way of procedural memory, or a priming phenomenon. Priming is the process of subliminally arousing specific responses from memory and shows that not all memory is consciously activated, whereas procedural memory is the slow and gradual learning of skills that often occurs without conscious attention to learning. Memory is not a perfect processor and is affected by many factors. The ways by which information is encoded, stored, and retrieved can all be corrupted. Pain, for example, has been identified as a physical condition that impairs memory, and has been noted in animal models as well as chronic pain patients. The amount of attention given new stimuli can diminish the amount of information that becomes encoded for storage. Also, the storage process can become corrupted by physical damage to areas of the brain that are associated with memory storage, such as the hippocampus. Finally, the retrieval of information from long-term memory can be disrupted because of decay within long-term memory. Normal functioning, decay over time, and brain damage all affect the accuracy and capacity of the memory. Sensory memory holds information, derived from the senses, less than one second after an item is perceived. The ability to look at an item and remember what it looked like with just a split second of observation, or memorization, is an example of sensory memory. It is out of cognitive control and is an automatic response. With very short presentations, participants often report that they seem to \"see\" more than they can actually report. The first precise experiments exploring this form of sensory memory were conducted by George Sperling (1963) using the \"partial report paradigm.\" Subjects were presented with a grid of 12 letters, arranged into three rows of four. After a brief presentation, subjects were then played either a high, medium or low tone, cuing them which of the rows to report. Based on these partial report experiments, Sperling was able to show that the capacity of sensory memory was approximately 12 items, but that it degraded very quickly (within a few hundred milliseconds). Because this form of memory degrades so quickly, participants would see the display but be unable to report all of the items (12 in the \"whole report\" procedure) before they decayed. This type of memory cannot be prolonged via rehearsal. Three types of sensory memories exist. Iconic memory is a fast decaying store of visual information, a type of sensory memory that briefly stores an image that has been perceived for a small duration. Echoic memory is a fast decaying store of auditory information, also a sensory memory that briefly stores sounds that have been perceived for short durations. Haptic memory is a type of sensory memory that represents a database for touch stimuli. How we encode information has a big impact on how well we remember it later. Research on levels of processing shows that memory is better when encoding emphasizes \u201cdeep\u201d aspects of a stimulus (such as meaning) vs. \u201cshallow\u201d aspects of a stimulus (such as a place). \u201cDeep\u201d encoding leads to a highly distributed representation and \u201cshallow\u201d encoding leads to a sparse representation. Thinking about meaning creates a richer, more connected memory, while shallow processing leads to weaker,...",
    "questions": [
      {
        "type": "mcq",
        "question": "According to the passage, what is the fundamental difference between declarative and non-declarative memory?",
        "options": [
          "Declarative memory pertains to skills acquisition, whereas non-declarative memory deals with factual information.",
          "Declarative memory is always long-term, while non-declarative memory is confined to short-term processing.",
          "Declarative memory involves conscious recall and storage, while non-declarative memory operates through unconscious processes.",
          "Declarative memory is susceptible to decay, whereas non-declarative memory is not affected by it."
        ],
        "answer": "Declarative memory involves conscious recall and storage, while non-declarative memory operates through unconscious processes.",
        "explanation": "The passage states that 'Declarative, or explicit memory, is the conscious storage and recollection of data' and 'Non-declarative, or implicit, memory is the unconscious storage and recollection of information.' This clearly delineates the difference based on the involvement of conscious or unconscious processes.",
        "id": "r16-1"
      },
      {
        "type": "tfng",
        "question": "The 'partial report paradigm' experiment conducted by George Sperling demonstrated that the capacity of sensory memory could be significantly extended through conscious rehearsal.",
        "answer": "False",
        "explanation": "The passage explicitly states regarding sensory memory: 'This type of memory cannot be prolonged via rehearsal.' This directly contradicts the statement that its capacity could be extended through conscious rehearsal.",
        "id": "r16-2"
      },
      {
        "type": "fill",
        "question": "The passage identifies physical damage to brain regions like the hippocampus as a factor that can corrupt the _______ process of memory.",
        "answer": "storage",
        "explanation": "The passage notes: 'Also, the storage process can become corrupted by physical damage to areas of the brain that are associated with memory storage, such as the hippocampus.' This indicates that the hippocampus's role is specifically tied to the storage aspect of memory.",
        "id": "r16-3"
      }
    ]
  },
  {
    "id": "r17",
    "title": "Deforestation",
    "category": "Environment",
    "difficulty": "Hard",
    "description": "An academic passage regarding deforestation with analytical questions.",
    "passage": "Deforestation or forest clearance is the removal and destruction of a forest or stand of trees from land that is then converted to non-forest use. Deforestation can involve conversion of forest land to farms, ranches, or urban use. About 31% of Earth's land surface is covered by forests at present. This is one-third less than the forest cover before the expansion of agriculture, with half of that loss occurring in the last century. On average 2,400 trees are cut down each minute. Estimates vary widely as to the extent of deforestation in the tropics. In 2019, nearly a third of the overall tree cover loss, or 3.8 million hectares, occurred within humid tropical primary forests. These are areas of mature rainforest that are especially important for biodiversity and carbon storage. By far, the direct cause of most deforestation is agriculture. In 2025 nearly 90% of global deforestation was caused by agriculture, with cropland expansion and pasture creation the primary drivers, this is up from more than 80% in 2012. Forests are being converted to plantations for coffee, palm oil, rubber and various other popular products. Livestock grazing also drives deforestation. Further drivers are the wood industry (logging), urbanization and mining. The effects of climate change are another cause via the increased risk of wildfires (see deforestation and climate change). Deforestation results in habitat destruction which in turn leads to biodiversity loss. Deforestation also leads to extinction of animals and plants, changes to the local climate, and displacement of indigenous people who live in forests. Deforested regions often also suffer from other environmental problems such as desertification and soil erosion. Another problem is that deforestation reduces the uptake of carbon dioxide (carbon sequestration) from the atmosphere. This reduces the potential of forests to assist with climate change mitigation. The role of forests in capturing and storing carbon and mitigating climate change is also important for the agricultural sector. The reason for this linkage is that the effects of climate change on agriculture pose new risks to global food systems. Since 1990, it is estimated that some 420 million hectares of forest have been lost through conversion to other land uses, although the rate of deforestation has decreased over the past three decades. Between 2015 and 2020, the rate of deforestation was estimated at 10 million hectares per year, down from 16 million hectares per year in the 1990s. The area of primary forest worldwide has decreased by over 80 million hectares since 1990. More than 100 million hectares of forests are adversely affected by forest fires, pests, diseases, invasive species, drought and adverse weather events. Deforestation is defined as the conversion of forest to other land uses (regardless of whether it is human-induced). Deforestation and forest area net change are not the same: the latter is the sum of all forest losses (deforestation) and all forest gains (forest expansion) in a given period. Net change, therefore, can be positive or negative, depending on whether gains exceed losses, or vice versa. The world has a total forest area of 4.14 billion hectares (ha), which is 32% of the global land area and equivalent to 0.50 ha of forest per person. The tropical domain has the largest proportion of the world\u2019s forests (45%), followed by the boreal, temperate and subtropical domains. Of the regions, Europe has the largest forest area, accounting for 25% of the world\u2019s total. South America has the highest proportion of forest, at 49% of the total land area. More than half (54%) of the world\u2019s forests is in only five countries (in descending order by area).; Russia, Brazil, Canada, the United States of America and China. The rate of net forest loss decreased globally from 10.7 million ha per year between 1990\u20132000 to 3.68 million ha per year in 2000\u20132015 due mainly to large increases in forest area in Canada, China, the Russian Federation and the United States of America. The annual rate of net forest loss increased in the period 2015\u20132025, to 4.12 million ha, due to a reduction in the rate of forest gain (i.e. afforestation and natural forest expansion). The FAO estimates that the global forest carbon stock has decreased 0.9%, and tree cover 4.2% between 1990 and 2020. As of 2019 there is still disagreement about whether the global forest is shrinking or not: \"While above-ground biomass carbon stocks are estimated to be declining in the tropics, they are increasing globally due to increasing stocks in temperate and boreal forest. Deforestation in many countries\u2014both naturally occurring and human-induced\u2014is an ongoing issue. Between 2000 and 2012, 2.3 million square kilometres (890,000 square miles) of forests around the world were cut down. Deforestation and forest degradation continue to take place at alarming rates, which contributes significantly to the ongoing loss of biodiversity. Forest area increased in Asia...",
    "questions": [
      {
        "type": "mcq",
        "question": "Which of the following best describes the fundamental difference between 'deforestation' and 'forest area net change' according to the passage?",
        "options": [
          "A. Deforestation considers only naturally occurring forest losses, whereas net change includes human-induced activities.",
          "B. Deforestation quantifies the conversion of forest land to other uses, while net change accounts for both forest losses and gains.",
          "C. Net change focuses exclusively on the expansion of new forests, whereas deforestation measures only primary forest degradation.",
          "D. Deforestation is a global measurement, while forest area net change is calculated only at regional or national levels."
        ],
        "answer": "B",
        "explanation": "The passage states: 'Deforestation is defined as the conversion of forest to other land uses (regardless of whether it is human-induced). Deforestation and forest area net change are not the same: the latter is the sum of all forest losses (deforestation) and all forest gains (forest expansion) in a given period.' This clearly indicates that deforestation is about conversion/loss, while net change encompasses both losses and gains.",
        "id": "r17-1"
      },
      {
        "type": "tfng",
        "question": "As of 2019, there was a general scientific consensus that the global forest area was unequivocally diminishing due to widespread deforestation.",
        "answer": "False",
        "explanation": "The passage explicitly states: 'As of 2019 there is still disagreement about whether the global forest is shrinking or not: While above-ground biomass carbon stocks are estimated to be declining in the tropics, they are increasing globally due to increasing stocks in temperate and boreal forest.' This contradicts the idea of a 'general scientific consensus' that the global forest was unequivocally diminishing.",
        "id": "r17-2"
      },
      {
        "type": "fill",
        "question": "One of the significant environmental problems caused by deforestation, in addition to habitat destruction and biodiversity loss, is the reduction of the atmosphere's capacity for carbon dioxide uptake, a process known as _______________.",
        "answer": "carbon sequestration",
        "explanation": "The passage states: 'Another problem is that deforestation reduces the uptake of carbon dioxide (carbon sequestration) from the atmosphere.' The missing word directly refers to the process described.",
        "id": "r17-3"
      }
    ]
  },
  {
    "id": "r18",
    "title": "Social media",
    "category": "Society",
    "difficulty": "Hard",
    "description": "An academic passage regarding social media with analytical questions.",
    "passage": "Social media are new media technologies that facilitate the creation, sharing and aggregation of content (such as ideas, interests, and other forms of expression) amongst virtual communities and networks. Common features include: Online platforms enable users to create and share content and participate in social networking. User-generated content such as text posts or comments, digital photos or videos, and data generated through online interactions. Service specific profiles that are designed and maintained by the social media organization. Social media helps the development of online social networks by connecting a user's profile with those of other individuals or groups. The term social in regard to media suggests platforms enable communal activity. Social media helps people connect and build networks. Users access social media through web-based or mobile applications. These interactive platforms allow individuals, communities, businesses, and organizations to share, co-create, discuss, participate in, and modify user-generated or self-curated content. Social media is used to share memories, form friendships, build communities and learn. They may be used to promote people, companies, products, and ideas. Social media can be used to consume, publish, or share news. Popular social media platforms with over 100 million registered users include Twitter, Facebook, WeChat, ShareChat, Instagram, Pinterest, QZone, Weibo, VK, Tumblr, Baidu Tieba, Threads, and LinkedIn. Depending on the interpretation, other popular platforms that are sometimes referred to as social media services include YouTube, Letterboxd, QQ, Quora, Telegram, WhatsApp, Signal, LINE, Snapchat, Viber, Reddit, Discord, and TikTok. Wikis and Roblox are examples of collaborative content creation. Social media outlets differ from old media (e.g. newspapers, TV, and radio broadcasting) in many ways, including quality, reach, frequency, usability, relevancy, and permanence. Social media outlets operate in a dialogic transmission system (many sources to many receivers) while traditional media operate under a monologic transmission model (one source to many receivers). For instance, a newspaper is delivered to many subscribers, and a radio station broadcasts the same programs to a city. Social media has been criticized for a range of negative impacts on children and teenagers, including exposure to inappropriate content, exploitation by adults, sleep problems, attention problems, feelings of exclusion, and various mental health maladies. Social media has also received criticism as worsening political polarization and undermining democracy, exacerbated by platform capture by vested interests, with journalist Maria Ressa deeming it \"toxic sludge\" for increasing distrust among members of society. Major news outlets often have strong controls in place to avoid and fix false claims, but social media's unique qualities bring viral content with little to no oversight. \"Algorithms that track user engagement to prioritize what is shown tend to favor content that spurs negative emotions like anger and outrage. Overall, most online misinformation originates from a small minority of \"superspreaders,\" but social media amplifies their reach and influence.\" The PLATO system was launched in 1960 at the University of Illinois and subsequently commercially marketed by Control Data Corporation. It offered early forms of social media features with innovations such as Notes, PLATO's message-forum application; TERM-talk, its instant-messaging feature; Talkomatic, perhaps the first online chat room; News Report, a crowdsourced online newspaper, and blog and Access Lists, enabling the owner of a note file or other application to limit access to a certain set of users, for example, only friends, classmates, or co-workers. ARPANET, which came online in 1969, had by the late 1970s enabled exchange of non-government/business ideas and communication, as evidenced by the network etiquette (or \"netiquette\") described in a 1982 handbook on computing at MIT's Artificial Intelligence Laboratory. ARPANET evolved into the Internet in the 1990s. Usenet, conceived by Tom Truscott and Jim Ellis in 1979 at the University of North Carolina at Chapel Hill and Duke University, was the first open social media app, established in 1980. A precursor of the electronic bulletin board system (BBS), known as Community Memory, appeared by 1973. Mainstream BBSs arrived with the Computer Bulletin Board System in Chicago, which launched on February 16, 1978. Before long, most major US cities had more than one BBS, running on TRS-80, Apple II, Atari 8-bit computers, IBM PC, Commodore 64, Sinclair, and others. CompuServe, Prodigy, and AOL were three of the largest BBS companies and were the first to migrate to the Internet in the 1990s. Between the mid-1980s and the mid-1990s, BBSes numbered in the tens of thousands in North America alone. Message forums were the signature BBS phenomenon throughout the 1980s and early 1990s. In 1991, Tim Berners-Lee integrated HTML hypertext software with the Internet, creating the World Wide Web. This breakthrough led to an explosion of blogs, list servers, and email services. Message forums migrated to the web, and evolved into Internet forums, supported by cheaper access as well as the ability to handle far more people simultaneously. These early text-based systems expanded to include images and video in...",
    "questions": [
      {
        "type": "mcq",
        "question": "According to the passage, what specific characteristic of social media algorithms *primarily exacerbates* the spread of political polarization and misinformation?",
        "options": [
          "Their inability to distinguish between factual news and false claims.",
          "Their design to prioritize content that evokes strong negative emotions for higher user engagement.",
          "The sheer volume of viral content that bypasses editorial review processes.",
          "The manipulation of platform content by external vested interests."
        ],
        "answer": "Option B",
        "explanation": "The passage states, 'Algorithms that track user engagement to prioritize what is shown tend to favor content that spurs negative emotions like anger and outrage.' This mechanism directly contributes to the exacerbation of political polarization and the spread of misinformation by giving prominence to inflammatory content.",
        "id": "r18-1"
      },
      {
        "type": "tfng",
        "question": "The PLATO system, launched in 1960, was the earliest platform mentioned in the passage to offer features such as instant messaging and message forums.",
        "answer": "True",
        "explanation": "The passage introduces PLATO, launched in 1960, stating it 'offered early forms of social media features with innovations such as Notes, PLATO's message-forum application; TERM-talk, its instant-messaging feature.' Later historical entries like Community Memory (1973), Usenet (1979/1980), and BBS (1978) are all described as appearing after PLATO, confirming PLATO as the earliest among those mentioned for these specific features.",
        "id": "r18-2"
      },
      {
        "type": "fill",
        "question": "Social media outlets are fundamentally distinct from traditional media because they operate under a ___________ transmission system, facilitating communication from many sources to many receivers.",
        "answer": "dialogic",
        "explanation": "The passage explicitly states, 'Social media outlets operate in a dialogic transmission system (many sources to many receivers) while traditional media operate under a monologic transmission model (one source to many receivers).' The missing word directly describes this unique transmission model of social media.",
        "id": "r18-3"
      }
    ]
  },
  {
    "id": "r19",
    "title": "CRISPR",
    "category": "Science",
    "difficulty": "Hard",
    "description": "An academic passage regarding crispr with analytical questions.",
    "passage": "CRISPR (; acronym for clustered regularly interspaced short palindromic repeats) is a family of DNA sequences found in the genomes of prokaryotic organisms such as bacteria and archaea. Each sequence within an individual prokaryotic CRISPR is derived from a DNA fragment of a bacteriophage that had previously infected the prokaryote or one of its ancestors. These sequences are used to detect and destroy DNA from similar bacteriophages during subsequent infections. Hence these sequences play a key role in the antiviral (i.e. anti-phage) defense system of prokaryotes and provide a form of heritable, acquired immunity. CRISPR is found in approximately 50% of sequenced bacterial genomes and nearly 90% of sequenced archaea. Cas9 (or \"CRISPR-associated protein 9\") is an enzyme that uses CRISPR sequences as a guide to recognize and open up specific strands of DNA that are complementary to the CRISPR sequence. Cas9 enzymes together with CRISPR sequences form the basis of a technology known as CRISPR-Cas9 that can be used to edit genes within living organisms. This editing process has a wide variety of applications including basic biological research, development of biotechnological products, and treatment of diseases. The development of the CRISPR-Cas9 genome editing technique was recognized by the Nobel Prize in Chemistry in 2020 awarded to Emmanuelle Charpentier and Jennifer Doudna. The CRISPR/Cas system evolved in nature as a means for bacteria to protect themselves from invading viruses and bacteriophages by inserting pieces of their DNA into the host genome. This allowed the adaptive immune system to respond accordingly on a subsequent infection. It was discovered in Streptococcus pyogenes and later found across many other species. The discovery of clustered DNA repeats took place independently in three parts of the world. The first description of what would later be called CRISPR is Ishino, et al. in 1987. They accidentally cloned part of a CRISPR sequence together with the iap gene (isozyme conversion of alkaline phosphatase) from Escherichia coli. The organization of the repeats surprised them, as clustered repeated sequences are more typically arranged consecutively, without interspersing sequences. In 1993, van Solingen et al., published two articles about a cluster of interrupted direct repeats (DR) in that bacterium. The team recognized the diversity of the sequences that intervened in the direct repeats among different strains of M. tuberculosis and used this property to design a typing method called spoligotyping, which remains in use. Mojica studied the function of repeats in the archaeal genera Haloferax and Haloarcula. Mojica's supervisor surmised that the clustered repeats had a role in segregating replicated DNA into daughter cells during cell division, because plasmids and chromosomes with identical repeat arrays could not coexist in Haloferax volcanii. They noted the transcription of the interrupted repeats for the first time; CRISPR's first full characterization. By 2000, Mojica and his students, after an automated search of published genomes, identified interrupted repeats in 20 species of microbes as belonging to the same family. Because those sequences were interspaced, Mojica initially called these sequences \"short regularly spaced repeats\" (SRSR). In 2001, Mojica and Jansen, who were searching for additional interrupted repeats, proposed the acronym CRISPR (Clustered Regularly Interspaced Short Palindromic Repeats) to encompass the numerous acronyms then in use. In 2002, Tang, et al. showed evidence that CRISPR repeat regions in Archaeoglobus fulgidus were transcribed into long RNA molecules subsequently processed into unit-length small RNAs, plus some longer forms of 2, 3, or more spacer-repeat units. In 2005, Barrangou discovered that S thermophilus, after iterative phage infection challenges, develops increased phage resistance due to the incorporation of additional CRISPR spacer sequences. A major advance came with Jansen's observation that the prokaryote repeat cluster was accompanied by four homologous genes, CRISPR-associated systems, Cas 1\u20134. The Cas proteins showed helicase and nuclease motifs, suggesting a role in the dynamic structure of the CRISPR loci. However, CRISPR's function remained enigmatic. In 2005, three independent research groups showed that some CRISPR spacers are derived from phage DNA and extrachromosomal DNA such as plasmids. In effect, the spacers are fragments of DNA gathered from viruses that previously attacked the cell. The source of the spacers was a sign that the CRISPR-cas system could have a role in adaptive immunity in bacteria. All three studies proposing this idea were initially rejected by high-profile journals, but eventually appeared elsewhere. The first publication proposing a role of CRISPR-Cas in microbial immunity, by Mojica, et al., predicted a role for the RNA transcript of spacers on target recognition in a mechanism that could be analogous to the RNA interference system used by eukaryotic cells. Koonin and colleagues extended this RNA interference hypothesis by proposing mechanisms of action for the different CRISPR-Cas subtypes according to the predicted function of their proteins. Experimental work by several groups revealed the basic mechanisms of CRISPR-Cas immunity. In 2007, the first experimental evidence that CRISPR...",
    "questions": [
      {
        "type": "mcq",
        "question": "Which of the following best describes the nature of the information presented in the passage?",
        "options": [
          "A) It details a groundbreaking scientific discovery.",
          "B) It outlines a procedure for data acquisition.",
          "C) It signals an impediment to content delivery.",
          "D) It provides an analysis of common technical faults."
        ],
        "answer": "C) It signals an impediment to content delivery.",
        "explanation": "The phrase 'Error fetching data.' directly indicates a failure or obstruction in the process of retrieving or delivering the intended content. Options A, B, and D are incorrect as the passage does not contain information on scientific discoveries, data acquisition procedures, or an analysis of faults, but rather states an error in retrieval.",
        "id": "r19-1"
      },
      {
        "type": "tfng",
        "question": "The passage provides an introductory overview of the biological functions of CRISPR.",
        "answer": "False",
        "explanation": "The passage contains only the phrase 'Error fetching data.', which describes a technical problem and does not offer any information or overview regarding the biological functions of CRISPR.",
        "id": "r19-2"
      },
      {
        "type": "fill",
        "question": "The provided text explicitly indicates a failure in _______ the intended content for analysis.",
        "answer": "fetching",
        "explanation": "The passage states 'Error fetching data.', directly pointing to 'fetching' as the failed action in retrieving the content.",
        "id": "r19-3"
      }
    ]
  },
  {
    "id": "r20",
    "title": "Virtual reality",
    "category": "Technology",
    "difficulty": "Hard",
    "description": "An academic passage regarding virtual reality with analytical questions.",
    "passage": "Virtual reality (VR) is a simulated experience that employs 3D head-mounted displays and pose tracking to give the user an immersive feel of a virtual world. Applications of virtual reality include entertainment (particularly video games), education (such as medical, safety, or military training), research and business (such as virtual meetings). Currently, standard virtual reality systems use either virtual reality headsets or multi-projected environments to generate some realistic images, sounds, and other sensations that simulate a user's physical presence in a virtual environment. A person using virtual reality equipment is able to look around the artificial world, move around in it, and interact with virtual features or items. The effect is commonly created by VR headsets consisting of a head-mounted display with a small screen in front of the eyes but can also be created through specially designed rooms with multiple large screens. Virtual reality typically incorporates auditory and video feedback but may also allow other types of sensory and force feedback through haptic technology. VR is one of the key technologies in the reality-virtuality continuum. As such, it is different from other digital visualization solutions, such as augmented virtuality and augmented reality. \"Virtual\" has had the meaning of \"being something in essence or effect, though not actually or in fact\" since the mid-1400s. The term \"virtual\" has been used in the computer sense of \"not physically existing but made to appear by software\" since 1959. In 1938, French avant-garde playwright Antonin Artaud described the illusory nature of characters and objects in the theatre as \"la r\u00e9alit\u00e9 virtuelle\" in a collection of essays, Le Th\u00e9\u00e2tre et son double. The English translation of this book, published in 1958 as The Theater and its Double, is the earliest published use of the term \"virtual reality\". The term \"artificial reality\", coined by Myron Krueger, has been in use since the 1970s. The term \"virtual reality\" was first used in a science fiction context in The Judas Mandala, a 1982 novel by Damien Broderick. Widespread adoption of the term \"virtual reality\" in the popular media is attributed to Jaron Lanier, who in the late 1980s designed some of the first business-grade virtual reality hardware under his firm VPL Research, and the 1992 film Lawnmower Man, which features use of virtual reality systems. One method of realizing virtual reality is through simulation-based virtual reality. For example, driving simulators give the driver the impression of actually driving a vehicle by predicting vehicular motion based on the driver's input and providing corresponding visual, motion, and audio cues. With avatar image-based virtual reality, people can join the virtual environment in the form of real video as well as an avatar. One can participate in the 3D distributed virtual environment in the form of either a conventional avatar or a real video. Users can select their own type of participation based on the system capability. In projector-based virtual reality, modeling of the real environment plays a vital role in various virtual reality applications, including robot navigation, construction modeling, and airplane simulation. Image-based virtual reality systems have been gaining popularity in computer graphics and computer vision communities. In generating realistic models, it is essential to accurately register acquired 3D data; usually, a camera is used for modeling small objects at a short distance. Desktop-based virtual reality involves displaying a 3D virtual world on a regular desktop display without use of any specialized VR positional tracking equipment. Many modern first-person video games can be used as an example, using various triggers, responsive characters, and other such interactive devices to make the user feel as though they are in a virtual world. A common criticism of this form of immersion is that there is no sense of peripheral vision, limiting the user's ability to know what is happening around them. A head-mounted display (HMD) more fully immerses the user in a virtual world. A virtual reality headset typically includes two small high resolution OLED or LCD monitors which provide separate images for each eye for stereoscopic graphics rendering a 3D virtual world, a binaural audio system, positional and rotational real-time head tracking for six degrees of movement. Options include motion controls with haptic feedback for physically interacting within the virtual world in an intuitive way with little to no abstraction and an omnidirectional treadmill for more freedom of physical movement allowing the user to perform locomotive motion in any direction. Augmented reality (AR) is a type of virtual reality technology that blends what the user sees in their real surroundings with digital content generated by computer software. The additional software-generated images with the virtual scene typically enhance how the real surroundings look in some way. AR systems layer virtual information over a camera live feed into a headset or smartglasses or through a mobile device giving the user the ability to view three-dimensional...",
    "questions": [
      {
        "type": "mcq",
        "question": "Which of the following challenges to the widespread adoption of Virtual Reality technology is presented as primarily attributable to physiological factors, according to the passage?",
        "options": [
          "The high financial cost of premium VR hardware.",
          "The current scarcity of deeply immersive, long-form content.",
          "The prevalence of cybersickness or motion sickness among users.",
          "Limited interoperability with existing digital ecosystems."
        ],
        "answer": "The prevalence of cybersickness or motion sickness among users.",
        "explanation": "The passage details several barriers to VR's mass market penetration, including hardware expense and content limitations. However, it specifically highlights 'cybersickness or motion sickness' as a significant physiological hurdle, explaining how discrepancies between visual input and vestibular system feedback can lead to discomfort, nausea, and disorientation, thus directly linking this challenge to user physiology.",
        "id": "r20-1"
      },
      {
        "type": "tfng",
        "question": "The passage suggests that the integration of haptic feedback systems is a novel and largely experimental concept that has yet to yield practical benefits in mainstream VR applications.",
        "answer": "False",
        "explanation": "The passage discusses haptic feedback not as a purely experimental concept, but rather as an evolving technology already demonstrating practical benefits. It explains how haptic devices enhance immersion and interaction by providing tactile sensations, mentioning their use in professional training simulators and certain gaming experiences to add a layer of realism and engagement, indicating their established, albeit growing, utility.",
        "id": "r20-2"
      },
      {
        "type": "fill",
        "question": "Beyond purely visual and auditory immersion, the passage indicates that a crucial element for achieving true 'presence' within a virtual environment involves the effective integration of _______ feedback.",
        "answer": "haptic",
        "explanation": "The passage emphasizes that while sight and sound are fundamental, the feeling of 'presence' \u2013 the sense of actually being in the virtual world \u2013 is significantly amplified by tactile sensations. It specifically points to 'haptic' feedback as the technology responsible for conveying these physical interactions, making the virtual experience more tangible and believable.",
        "id": "r20-3"
      }
    ]
  },
  {
    "id": "r21",
    "title": "Cold War",
    "category": "History",
    "difficulty": "Hard",
    "description": "An academic passage regarding cold war with analytical questions.",
    "passage": "The Cold War was a period of international geopolitical rivalry between the United States (US) and the Soviet Union (USSR) and their respective allies, the capitalist Western Bloc and communist Eastern Bloc. It began in the aftermath of the Second World War and ended with the dissolution of the Soviet Union in 1991. The term cold war is used because there was no direct fighting between the two superpowers, though each supported opposing sides in regional conflicts known as proxy wars. In addition to the struggle for ideological and economic influence and an arms race in both conventional and nuclear weapons, the Cold War was expressed through technological rivalries such as the Space Race, espionage, propaganda campaigns, embargoes, and sports diplomacy. After the end of the Second World War in 1945, during which the US and USSR had been allies, the USSR installed satellite governments in its occupied territories in Eastern Europe and North Korea by 1949, resulting in the political division of Europe (and Germany) by an \"Iron Curtain\". The USSR tested its first nuclear weapon in 1949, four years after their use by the US on Hiroshima and Nagasaki, and allied with the People's Republic of China, founded in 1949. The US declared the Truman Doctrine of \"containment\" of communism in 1947, launched the Marshall Plan in 1948 to assist Western Europe's economic recovery, and founded the NATO military alliance in 1949 (matched by the Soviet-led Warsaw Pact in 1955). The Berlin Blockade of 1948 to 1949 was an early confrontation, as was the Korean War of 1950 to 1953, which ended in a stalemate. US involvement in regime change during the Cold War included support for First World anti-communist and right-wing dictatorships and uprisings, while Soviet involvement included the funding of Second World left-wing parties, wars of independence, and dictatorships. As nearly all the colonial states underwent decolonization, many became Third World battlefields of the Cold War. Both powers used economic aid in an attempt to win the loyalty of non-aligned countries. The Cuban Revolution of 1959 installed the first communist regime in the Western Hemisphere, and in 1962, the Cuban Missile Crisis began after deployments of US missiles in Europe and Soviet missiles in Cuba; it is widely considered the closest the Cold War came to escalating into nuclear war. Another major proxy conflict was the Vietnam War of 1955 to 1975, which ended in defeat for the US. The USSR solidified its domination of Eastern Europe with its crushing of the Hungarian Revolution in 1956 and the Warsaw Pact invasion of Czechoslovakia in 1968. Relations between the USSR and China broke down by 1961, with the Sino-Soviet split bringing the two states to the brink of war amid a border conflict in 1969. In 1972, the US initiated diplomatic contacts with China and the US and USSR signed a series of treaties limiting their nuclear arsenals during a period known as d\u00e9tente. In 1979, the toppling of US-allied governments in Iran and Nicaragua and the outbreak of the Soviet\u2013Afghan War again raised tensions. In 1985, Mikhail Gorbachev became leader of the USSR and expanded political freedoms, which contributed to the revolutions of 1989 in the Eastern Bloc and the collapse of the USSR in 1991, ending the Cold War. Writer George Orwell used cold war, as a general term, in his essay \"You and the Atomic Bomb\", published 19 October 1945. Contemplating a world living in the shadow of the threat of nuclear warfare, Orwell looked at James Burnham's predictions of a polarized world, writing: Looking at the world as a whole, the drift for many decades has been not towards anarchy but towards the reimposition of slavery... James Burnham's theory has been much discussed, but few people have yet considered its ideological implications\u2014that is, the kind of world-view, the kind of beliefs, and the social structure that would probably prevail in a state which was at once unconquerable and in a permanent state of \"cold war\" with its neighbours. In The Observer of 10 March 1946, Orwell wrote, \"after the Moscow conference last December, Russia began to make a 'cold war' on Britain and the British Empire.\" The first use of the term to describe the specific post-war geopolitical confrontation between the Soviet Union and the United States came in a speech by Bernard Baruch, an influential advisor to Democratic presidents, on 16 April 1947. The speech, written by journalist Herbert Bayard Swope, proclaimed, \"we are today in the midst of a cold war.\" Newspaper columnist Walter Lippmann gave the term wide currency with his book The Cold War. When asked in 1947 about the source of the term, Lippmann traced it to a French term from the 1930s, la guerre froide. The United States and its Western European allies sought to strengthen their...",
    "questions": [
      {
        "type": "mcq",
        "question": "Due to the explicit statement 'Error fetching data' for the passage, which of the following is *impossible* to determine?",
        "options": [
          "The general subject matter (Cold War) implied by the prompt",
          "The specific details or arguments presented in the provided text",
          "The format of questions expected by the IELTS exam creator",
          "The requirement for a JSON output"
        ],
        "answer": "The specific details or arguments presented in the provided text",
        "explanation": "The prompt clearly stated 'Error fetching data' where the passage should have been. Without the passage content, it is impossible to extract specific details or arguments from it, making option B the correct impossibility.",
        "id": "r21-1"
      },
      {
        "type": "tfng",
        "question": "True, False, or Not Given: The academic passage about the Cold War elaborated on the ideological differences between the US and USSR as the primary cause of the conflict.",
        "answer": "Not Given",
        "explanation": "The passage content was not provided (indicated by 'Error fetching data'). Therefore, any statement regarding the specific content, such as a detailed elaboration on ideological differences, cannot be verified as true or false and must be classified as 'Not Given'.",
        "id": "r21-2"
      },
      {
        "type": "fill",
        "question": "The primary reason why questions cannot be accurately generated about the Cold War passage is that the passage itself is __________.",
        "answer": "missing",
        "explanation": "The prompt explicitly stated 'Error fetching data' for the passage. This means the content is missing, which is the fundamental obstacle to generating questions that accurately reflect its content.",
        "id": "r21-3"
      }
    ]
  },
  {
    "id": "r22",
    "title": "Emotional intelligence",
    "category": "Psychology",
    "difficulty": "Hard",
    "description": "An academic passage regarding emotional intelligence with analytical questions.",
    "passage": "Emotional intelligence (EI), also known as emotional quotient (EQ), is the ability to perceive, use, understand, manage, and handle emotions. High emotional intelligence includes emotional recognition of emotions of the self and others, using emotional information to guide thinking and behavior, discerning between and labelling different feelings, and adjusting emotions to adapt to environments. This includes emotional literacy. The term first appeared in 1964, gaining popularity in the 1995 bestselling book Emotional Intelligence by psychologist and science journalist Daniel Goleman. Some researchers suggest that emotional intelligence can be learned and strengthened, while others claim that it is innate. Various models have been developed to measure EI: The trait model focuses on self-reporting behavioral dispositions and perceived abilities; the ability model focuses on the individual's ability to process emotional information and use it to navigate the social environment. Goleman's original model may now be considered a mixed model that combines what has since been modelled separately as ability EI and trait EI. While some studies show that there is a correlation between high EI and positive workplace performance, there is no general consensus on the issue among psychologists, and no causal relationships have been shown. EI is typically associated with empathy, because it involves a person relating their personal experiences with those of others. Since its popularization in recent decades and links to workplace performance, methods of developing EI have become sought by people seeking to become more effective leaders. Recent research has focused on emotion recognition, which refers to the attribution of emotional states based on observations of visual and auditory nonverbal cues. In addition, neurological studies have sought to characterize the neural mechanisms of emotional intelligence. Criticisms of EI have centered on whether EI has incremental validity over intelligence quotient (IQ) and the Big Five personality traits. Meta-analyses have found that certain measures of EI have validity even when controlling for both IQ and personality. The concept of emotional strength was introduced by Abraham Maslow in the 1950s. The term \"emotional intelligence\" may have first appeared in a 1964 paper by Michael Beldoch and a 1966 paper by B. Leuner. In 1983, Howard Gardner's Frames of Mind: The Theory of Multiple Intelligences introduced the idea that traditional types of intelligence, such as IQ, fail to fully explain cognitive ability. He introduced the idea of multiple intelligences, which included both interpersonal intelligence and intrapersonal intelligence, which he respectively defined as the capacity to understand others and oneself. The first published use of the term EQ (emotional quotient) is in an article by Keith Beasley in 1987 in the British Mensa magazine. In 1989, Stanley Greenspan proposed a model to describe EI. The following year, Peter Salovey and John Mayer proposed another model. The term became widely known with the publication of Daniel Goleman's 1995 book: Emotional Intelligence \u2013 Why it can matter more than IQ. Goleman followed up with several similar publications that reinforce use of the term. Late in 1998, Goleman's Harvard Business Review article entitled \"What Makes a Leader?\" caught the attention of senior management at Johnson & Johnson's Consumer Companies. The article argued that EI comprised the skills and characteristics that drive leadership performance. Johnson & Johnson funded a study which concluded that there was a strong relationship between superior performing leaders and emotional competence, supporting theorists' suggestions that the EI is a distinguishing factor in leadership performance. Tests measuring EI have not replaced IQ tests as a standard metric of intelligence. In later research, EI has received criticism regarding its purported role in leadership and business success. Emotional intelligence has been defined by Peter Salovey and John Mayer as \"accurately perceiving emotion, using emotions to facilitate thought, understanding emotion, and managing emotion\". The concept comprises both emotional and intellectual processes. Emotional intelligence also reflects an ability to use intelligence, empathy, and emotions to enhance understanding of interpersonal dynamics. However, substantial disagreement exists regarding the definition of EI, with respect to both terminology and operationalization. Currently, there are three main models of EI: The ability model defines EI in terms of cognitive and emotional abilities; the mixed model, introduced by Daniel Goleman, comprises a variety of emotional competencies, sometimes being regarded as a form of trait EI; the trait model defines EI as comprising traits within a personality trait theory framework. Different models of EI have led to the development of various instruments for the assessment of the construct. While some of these measures may overlap, most researchers agree that they relate to different constructs. Based on theoretical and methodological approaches, EI measures are categorized in three main streams: ability-based measures (e.g. MSCEIT), self-reports of abilities measures (e.g. SREIT, SUEIT and WLEIS), and mixed-models (e.g. AES, ECI, EI questionnaire, EIS, EQ-I and GENOS), which include measures of EI and traditional social skills. Salovey and Mayer's define EI...",
    "questions": [
      {
        "id": "q22-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q22-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q22-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  },
  {
    "id": "r23",
    "title": "Renewable energy",
    "category": "Environment",
    "difficulty": "Hard",
    "description": "An academic passage regarding renewable energy with analytical questions.",
    "passage": "Renewable energy (also called green energy) is energy made from renewable natural resources that are replenished on a human timescale. The most widely used renewable energy types are solar energy, wind power, and hydropower. Bioenergy and geothermal power are also significant in some countries. Renewable energy installations can be large or small and are suited for both urban and rural areas. Renewable energy is often deployed together with further electrification. This has several benefits: electricity can move heat and vehicles efficiently and is clean at the point of consumption. Variable renewable energy sources are those that have a fluctuating nature, such as wind power and solar power. In contrast, controllable renewable energy sources include dammed hydroelectricity, bioenergy, or geothermal power. Renewable energy systems have rapidly become more efficient and cheaper over the past 30 years. A large majority of newly installed worldwide electricity capacity is now renewable. Renewable energy sources, such as solar and wind power, have seen significant cost reductions over the past decade, making them more competitive with traditional fossil fuels. In some geographic localities, photovoltaic solar or onshore wind is the cheapest new-build electricity. From 2011 to 2021, renewable energy grew from 20% to 28% of the global electricity supply. Power from the sun and wind accounted for most of this increase, growing from a combined 2% to 10%. Use of fossil energy shrank from 68% to 62%. In 2024, renewables accounted for over 30% of global electricity generation and are projected to reach over 45% by 2030. Many countries already have renewables contributing more than 20% of their total energy supply, with some generating over half or even all their electricity from renewable sources. The main motivation to use renewable energy instead of fossil fuels is to reduce greenhouse gas emissions, which cause climate change. In general, renewable energy sources pollute much less than fossil fuels. Renewables also cause much less air pollution than fossil fuels, improving public health, and are less noisy. The International Energy Agency estimates that to achieve net zero emissions by 2050, 90% of global electricity will need to be generated by renewables. The current pace of renewable expansion remains far from this required rate globally, including in major economies with high financial capacities such as the G7 and the EU. The deployment of renewable energy still faces obstacles, especially fossil fuel subsidies, lobbying by incumbent power providers, and local opposition to the use of land for renewable installations. Like all mining, the extraction of minerals required for many renewable energy technologies also results in environmental damage. Some also consider nuclear power a renewable power source, although this is controversial, as nuclear energy requires mining uranium, a nonrenewable resource. Renewable energy is usually understood as energy harnessed from continuously occurring natural phenomena. The International Energy Agency defines it as \"energy derived from natural processes that are replenished at a faster rate than they are consumed\". Solar power, wind power, hydroelectricity, geothermal energy, and biomass are widely agreed to be the main types of renewable energy. Renewable energy often displaces conventional fuels in four areas: electricity generation, hot water/space heating, transportation, and rural (off-grid) energy services. Although almost all forms of renewable energy cause much fewer carbon emissions than fossil fuels, the term is not synonymous with low-carbon energy. Some non-renewable sources of energy, such as nuclear power,generate almost no emissions, while some renewable energy sources can be very carbon-intensive, such as the burning of biomass if it is not offset by planting new plants. Renewable energy is also distinct from sustainable energy, a more abstract concept that seeks to group energy sources based on their overall permanent impact on future generations of humans. For example, biomass is often associated with unsustainable deforestation. As part of the global effort to limit climate change, most countries have committed to net zero greenhouse gas emissions. In practice, this means phasing out fossil fuels and replacing them with low-emissions energy sources. This much needed process, coined as \"low-carbon substitutions\" in contrast to other transition processes including energy additions, needs to be accelerated multiple times in order to successfully mitigate climate change. At the 2023 United Nations Climate Change Conference, around three-quarters of the world's countries set a goal of tripling renewable energy capacity by 2030. The European Union aims to generate 40% of its electricity from renewables by the same year. Renewable energy is more evenly distributed around the world than fossil fuels, which are concentrated in a limited number of countries. It also brings health benefits by reducing air pollution caused by the burning of fossil fuels. The potential worldwide savings in health care costs have been estimated at trillions of dollars annually. The two most important forms of renewable energy, solar and wind, are intermittent energy sources: they are not available constantly, resulting in...",
    "questions": [
      {
        "id": "q23-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q23-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q23-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  },
  {
    "id": "r24",
    "title": "Globalization",
    "category": "Society",
    "difficulty": "Hard",
    "description": "An academic passage regarding globalization with analytical questions.",
    "passage": "Globalization is the process of increasing interdependence and integration among the economies, markets, societies, and cultures of different countries worldwide. It can be attributed to a series of factors, including the reduction of barriers to international trade, the liberalization of capital movements, the development of transportation infrastructure, and the advancement of information and communication technologies. The term globalization first appeared in the early 20th century, but came into popular use in the 1990s to describe the growing international connectivity of the post\u2013Cold War world. Large-scale globalization began in the 1820s, and in the late 19th century and early 20th century drove a rapid expansion in the connectivity of the world's economies and cultures. The origins of globalization can be traced back to the 18th and 19th centuries, a period marked by significant advancements in transportation and communication technologies. These developments increased global interactions, supporting the growth of international trade and the exchange of ideas, beliefs, and cultures. Between 1990 and 2010, globalization progressed rapidly, driven by the information and communication technology revolution that lowered communication costs, along with trade liberalization and the shift of manufacturing operations to emerging economies (particularly China). Academic literature commonly divides globalization into three major areas: economic globalization, cultural globalization, and political globalization. Proponents of globalization point to economic growth and broader societal development as benefits, while opponents claim globalizing processes are detrimental to social well-being due to ethnocentrism, environmental consequences, and other potential drawbacks. The word globalization was used in the English language as early as the 1930s, but only ever in the context of education, and the term failed to gain traction. Over the next few decades, the term was occasionally used by other scholars and media, but it was not clearly defined. One of the first uses of a term resembling the more common meaning and usage of the modern word was by French economist Fran\u00e7ois Perroux in his essays from the early 1960s (in his French works he used the similar yet distinct term mondialisation, translated as mundialization). Theodore Levitt is sometimes inaccurately cited as having invented the term in the mid-1980s, although he can more confidently be credited with popularizing the term and bringing it into the mainstream business audience during that time. Though often treated as synonyms, in French, globalization is seen as a stage following mondialisation, a stage that implies the dissolution of national identities and the abolishment of borders within the world network of economic exchanges. Since its inception, the concept of globalization has inspired competing definitions and interpretations. Its antecedents date back to the great movements of trade and empire across Asia and the Indian Ocean from the 15th century onward. In 1848, Karl Marx noticed the increasing level of national interdependence brought on by capitalism, and predicted the universal character of the modern world society. He states: The bourgeoisie has through its exploitation of the world market given a cosmopolitan character to production and consumption in every country. To the great chagrin of Reactionists, it has drawn from under the feet of industry the national ground on which it stood. All old-established national industries have been destroyed or are daily being destroyed. . . . In place of the old local and national seclusion and self-sufficiency, we have intercourse in every direction, universal inter-dependence of nations. Sociologists Martin Albrow and Elizabeth King define globalization as \"all those processes by which the people of the world are incorporated into a single world society.\" In The Consequences of Modernity, Anthony Giddens writes: \"Globalization can thus be defined as the intensification of worldwide social relations which link distant localities in such a way that local happenings are shaped by events occurring many miles away and vice versa.\" In 1992, Roland Robertson, professor of sociology at the University of Aberdeen and an early writer in the field, described globalization as \"the compression of the world and the intensification of the consciousness of the world as a whole.\" In Global Transformations, David Held and his co-writers state: Although in its simplistic sense globalization refers to the widening, deepening and speeding up of global interconnection, such a definition begs further elaboration. ... Globalization can be on a continuum with the local, national and regional. At one end of the continuum lie social and economic relations and networks which are organized on a local and/or national basis; at the other end lie social and economic relations and networks which crystallize on the wider scale of regional and global interactions. Globalization can refer to those spatial-temporal processes of change which underpin a transformation in the organization of human affairs by linking together and expanding human activity across regions and continents. Without reference to such expansive spatial connections, there can be no clear or coherent formulation of this term. ... A satisfactory definition of globalization...",
    "questions": [
      {
        "id": "q24-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q24-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q24-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  },
  {
    "id": "r25",
    "title": "Evolution",
    "category": "Science",
    "difficulty": "Hard",
    "description": "An academic passage regarding evolution with analytical questions.",
    "passage": "Evolution is the change in the heritable characteristics of biological populations over successive generations. It occurs when evolutionary processes such as genetic drift and natural selection act on genetic variation, resulting in certain characteristics becoming more or less common within a population over successive generations. The process of evolution has given rise to biodiversity at every level of biological organisation. The scientific theory of evolution by natural selection was conceived independently by two British naturalists, Charles Darwin and Alfred Russel Wallace, in the mid-19th century as an explanation for why organisms are adapted to their physical and biological environments. The theory was first set out in detail in Darwin's book On the Origin of Species. Evolution by natural selection is established by observable facts about living organisms: (1) more offspring are often produced than can possibly survive; (2) traits vary among individuals with respect to their morphology, physiology, and behaviour; (3) different traits confer different rates of survival and reproduction (differential fitness); and (4) traits can be passed from generation to generation (heritability of fitness). In successive generations, members of a population are therefore more likely to be replaced by the offspring of parents with favourable characteristics for that environment. In the early 20th century, competing ideas of evolution were refuted and evolution was combined with Mendelian inheritance and population genetics to give rise to modern evolutionary theory. In this synthesis the basis for heredity is in DNA molecules that pass information from generation to generation. The processes that change DNA in a population include natural selection, genetic drift, mutation, and gene flow. All life on Earth\u2014including humanity\u2014shares a last universal common ancestor (LUCA), which lived approximately 3.5\u20133.8 billion years ago. The fossil record includes a progression from early biogenic graphite to microbial mat fossils to fossilised multicellular organisms. Existing patterns of biodiversity have been shaped by repeated formations of new species (speciation), changes within species (anagenesis), and loss of species (extinction) throughout the evolutionary history of life on Earth. Morphological and biochemical traits tend to be more similar among species that share a more recent common ancestor, which historically was used to reconstruct phylogenetic trees, although direct comparison of genetic sequences is a more common method today. Evolutionary biologists have continued to study various aspects of evolution by forming and testing hypotheses as well as constructing theories based on evidence from the field or laboratory and on data generated by the methods of mathematical and theoretical biology. Their discoveries have influenced not just the development of biology but also other fields including agriculture, medicine, and computer science. Evolution in organisms occurs through changes in heritable characteristics\u2014the inherited characteristics of an organism. In humans, for example, eye colour is an inherited characteristic and an individual might inherit the \"brown-eye trait\" from one of their parents. Inherited traits are controlled by genes and the complete set of genes within an organism's genome (genetic material) is called its genotype. The complete set of observable traits that make up the structure and behaviour of an organism is called its phenotype. Some of these traits come from the interaction of its genotype with the environment while others are neutral. Some observable characteristics are not inherited. For example, suntanned skin comes from the interaction between a person's genotype and sunlight; thus, suntans are not passed on to people's children. The phenotype is the ability of the skin to tan when exposed to sunlight. However, some people tan more easily than others, due to differences in genotypic variation; a striking example are people with the inherited trait of albinism, who do not tan at all and are very sensitive to sunburn. Heritable characteristics are passed from one generation to the next via DNA, a molecule that encodes genetic information. DNA is a long biopolymer composed of four types of bases. The sequence of bases along a particular DNA molecule specifies the genetic information, in a manner similar to a sequence of letters spelling out a sentence. Before a cell divides, the DNA is copied, so that each of the resulting two cells will inherit the DNA sequence. Portions of a DNA molecule that specify a single functional unit are called genes; different genes have different sequences of bases. Within cells, each long strand of DNA is called a chromosome. The specific location of a DNA sequence within a chromosome is known as a locus. If the DNA sequence at a locus varies between individuals, the different forms of this sequence are called alleles. DNA sequences can change through mutations, producing new alleles. If a mutation occurs within a gene, the new allele may affect the trait that the gene controls, altering the phenotype of the organism. However, while this simple correspondence between an allele and a trait works in some cases, most traits are influenced by...",
    "questions": [
      {
        "id": "q25-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q25-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q25-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  },
  {
    "id": "r26",
    "title": "5G",
    "category": "Technology",
    "difficulty": "Hard",
    "description": "An academic passage regarding 5g with analytical questions.",
    "passage": "5G is the fifth generation of cellular network technology and the successor to 4G. First deployed in 2019, its technical standards are developed by the 3rd Generation Partnership Project (3GPP) in cooperation with the ITU's IMT-2020 program. 5G networks divide coverage areas into smaller zones called cells, enabling devices to connect to local base stations via radio. Each station connects to the broader telephone network and the Internet through high-speed optical fiber or wireless backhaul. Compared to 4G, 5G offers significantly faster data transfer speed\u2014up to 10 Gbps (Gigabits per second) in tests\u2014and lower latency, with response times of just a few milliseconds. These advancements allow networks to support more users and applications such as extended reality, autonomous vehicles, remote surgery trials, and fixed wireless access for home Internet access. 5G also supports massive connectivity for sensors and machines, commonly referred to as the Internet of things (IoT), and leverages edge computing to improve data processing efficiency. Building 5G networks requires new infrastructure and access to suitable radio spectrum. Network operators report high costs and continue to improve energy efficiency and security. Analysts expect 5G to support telehealth, smart transport, and digital media, while operating alongside 4G networks into the 2030s. In 2008, NASA and the Machine-to-Machine Intelligence Corporation (M2Mi) conducted nanosatellite communication studies that influenced early next-generation network concepts. In 2012, New York University established NYU Wireless, a research center focused on millimeter-wave communication. The same year, the University of Surrey founded the 5G Innovation Centre, funded by \u00a335 million from public and industry partners including Huawei and Samsung. Also in 2012, the European Union launched the Mobile and Wireless Communications Enablers for the Twenty-Twenty Information Society (METIS) project to align emerging network research with international standardization. In 2013, the ITU-R Working Party 5D began studies on IMT-2020, later formalized as the 5G standard. During the same period, major firms such as Samsung Electronics, NTT Docomo, and Huawei conducted early trials. Samsung tested a prototype achieving more than 1 Gbit/s across 2 km using 8 \u00d7 8 MIMO antennas. NTT Docomo received a government award at CEATEC for high-speed network development, while Huawei announced a US$600 million program to advance mobile network technology. On April 3, 2019, South Korea launched its national network, the first full commercial deployment. Hours later, Verizon began limited service in select U.S. cities. In June 2019, Globe Telecom introduced the Philippines' first next-generation network, and in December 2019, AT&T launched a consumer service in the United States that expanded nationwide during 2020. Commercial 5G deployment expanded rapidly through 2020. Beyond public mobile networks, it was also adopted in private industrial and enterprise systems, including operation in unlicensed spectrum (NR-U) and licensed non-public networks (NPNs). Private 5G networks became important for Industry 4.0 automation and smart manufacturing. Early rollouts used non-standalone (NSA) mode\u2014with 4G cores\u2014before networks transitioned to standalone (SA) mode with dedicated 5G cores. South Korea\u2019s 2019 rollout used equipment from Samsung, Ericsson, and Nokia; LG U Plus also deployed Huawei hardware. Samsung supplied most of the roughly 86,000 sites, while SK Telecom, KT Corporation, and LG U Plus concentrated coverage in major cities using the 3.5 GHz band under NSA operation. Reported download speeds averaged 200\u2013400 Mbit/s, and subscriptions grew from about 260,000 to 4.7 million during 2019. Following these early deployments, T-Mobile US launched the first nationwide standalone network in 2020. Ericsson projected that by the mid-2020s, 5G networks would reach about 65 percent of the global population. Major suppliers of 5G radio and core systems included Altiostar, Cisco Systems, Datang Telecom/Fiberhome, Ericsson, Huawei, Nokia, Qualcomm, Samsung, and ZTE. Huawei was estimated to hold about 70 percent of global 5G base stations by 2023. By 2022, network speeds in many regions had stabilized, and operators began testing 5.5G upgrades to improve capacity and latency. By the early 2020s, large-scale commercial 5G networks were active across most developed markets, and rollout in developing regions was still accelerating. Small cells are low-power radio nodes that extend network capacity in dense or indoor areas. They operate over short distances, typically a few dozen to a few hundred metres, and are used to maintain coverage for mmWave signals. Massive multiple-input multiple-output (MIMO) systems use large antenna arrays to increase capacity and spectral efficiency. They extend conventional MIMO by serving multiple users simultaneously and steering signals toward them to reduce interference. Beamforming directs radio energy toward specific users. In analogue beamforming, antenna outputs are combined to focus signal power in one direction. Digital beamforming transmits data streams across multiple layers to improve signal strength and reliability. Non-orthogonal multiple access assigns different power levels to users sharing the same frequency resources to improve spectral efficiency. 5G NR uses polar codes for control channels and low-density parity-check codes (LDPC) for data channels, replacing the turbo codes used in 4G....",
    "questions": [
      {
        "id": "q26-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q26-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q26-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  },
  {
    "id": "r27",
    "title": "Renaissance",
    "category": "History",
    "difficulty": "Hard",
    "description": "An academic passage regarding renaissance with analytical questions.",
    "passage": "The Renaissance (UK: rin-AY-s\u0259nss, US: REN-\u0259-sahnss) was a European period of history and cultural movement taking place at the end of the Late Middle Ages and the beginning of the early modern era. It is variously defined as lasting from the 14th century to the 17th or, more narrowly, as covering only the 15th and 16th centuries. It was characterized by the European rediscovery and revival of the literary, philosophical, and artistic achievements of classical antiquity. Associated with great change in art, architecture, politics, literature, exploration and technology, the Renaissance was first centered in the Republic of Florence, then spread to the rest of Italy and later throughout Europe. The Renaissance's intellectual basis was founded in its version of humanism, derived from the concept of Roman humanitas and the rediscovery of classical Greek philosophy, such as that of Protagoras, who said that \"man is the measure of all things\". Although the invention of metal movable type sped the dissemination of ideas from the later 15th century, the changes of the Renaissance were not uniform across Europe: the first traces appear in Italy as early as the late 13th century, in particular with the writings of Dante and the paintings of Giotto. As a cultural movement, the Renaissance encompassed innovative flowering of literary Latin and an explosion of vernacular literatures, beginning with the 14th-century resurgence of learning based on classical sources, which contemporaries credited to Petrarch; the development of linear perspective and other techniques of rendering a more natural reality in painting; and gradual but widespread educational reform. It saw myriad artistic developments and contributions from such polymaths as Leonardo da Vinci and Michelangelo, who inspired the term \"Renaissance man\". In politics, the Renaissance contributed to the development of the customs and conventions of diplomacy, and in science to an increased reliance on observation and inductive reasoning. The period also saw revolutions in printing and navigation, as well as the introduction of modern banking and the field of accounting. The Renaissance began in Italy during the crisis of the Late Middle Ages. It had a different period and characteristics north of the Alps and in Spain. In Italy, the period conventionally ends with the waning of humanism, and the advent of the Reformation (1517), the Sack of Rome (1527) or the Counter-Reformation (1545), and in art, the Baroque period. Proponents of a \"long Renaissance,\" however, may propose that (outside of Italy) the period extended into the 17th century. The traditional view focuses more on the Renaissance's early modern aspects and argues that it was a break from the past, but many historians today focus more on its medieval aspects and argue that it was an extension of the Middle Ages. The beginnings of the period\u2014the early Renaissance of the 15th century and the Italian Proto-Renaissance from around 1250 or 1300\u2014overlap considerably with the Late Middle Ages, conventionally dated to c. 1350\u20131500, and the Middle Ages themselves were a long period filled with gradual changes, like the modern age; as a transitional period between both, the Renaissance has close similarities to both, especially the late and early sub-periods of either. The Renaissance began in Florence, one of the many states of Italy. The Italian Renaissance concluded in 1527 when Holy Roman Emperor Charles V launched an assault on Rome during the war of the League of Cognac. Nevertheless, its impact endured in the art of renowned Italian painters like Tintoretto, Sofonisba Anguissola, and Paolo Veronese, who continued their work during the mid-to-late 16th century. Various theories have been proposed to account for its origins and characteristics, focusing on a variety of factors, including Florence's social and civic peculiarities at the time: its political structure, the patronage of its dominant family, the Medici, and the migration of Greek scholars and their texts to Italy following the fall of Constantinople to the Ottoman Empire. Other major centers were Venice, Genoa, Milan, Rome during the Renaissance Papacy, and Naples. From Italy, the Renaissance spread throughout Europe and also to American, African and Asian territories ruled by the European colonial powers of the time or where Christian missionaries were active. The Renaissance has a long and complex historiography, and in line with general skepticism of discrete periodizations, there has been much debate among historians reacting to the 19th-century glorification of the \"Renaissance\" and individual cultural heroes as \"Renaissance men\", questioning the usefulness of Renaissance as a term and as a historical delineation. Some observers have questioned whether the Renaissance was a cultural \"advance\" from the Middle Ages, instead seeing it as a period of pessimism and nostalgia for classical antiquity, while social and economic historians, especially of the longue dur\u00e9e, have instead focused on the continuity between the two eras, which are linked, as Panofsky observed, \"by a thousand ties\". The Renaissance was a cultural movement...",
    "questions": [
      {
        "id": "q27-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q27-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q27-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  },
  {
    "id": "r28",
    "title": "Mental health",
    "category": "Psychology",
    "difficulty": "Hard",
    "description": "An academic passage regarding mental health with analytical questions.",
    "passage": "Mental health encompasses emotional, psychological, and social well-being, influencing cognition, perception, and behavior. Mental health plays a crucial role in an individual's daily life when managing stress, engaging with others, and contributing to life overall. According to the World Health Organization (WHO), it is a \"state of well-being in which the individual realizes their abilities, can cope with the normal stresses of life, can work productively and fruitfully, and can contribute to their community\". It likewise determines how an individual handles stress, interpersonal relationships, and decision-making. Mental health includes subjective well-being, perceived self-efficacy, autonomy, competence, intergenerational dependence, and self-actualization of one's intellectual and emotional potential, among others. Mental health also includes emotional, psychological, and social well-being, and it affects how people manage stress and make everyday decisions. From the perspectives of positive psychology or holism, mental health is thus not merely the absence of mental illness. Rather, it is a broader state of well-being that includes an individual's ability to enjoy life and to create a balance between life activities and efforts to achieve psychological resilience. Cultural differences, personal philosophy, subjective assessments, and competing professional theories all affect how one defines \"mental health\". Mental health, as defined by the Public Health Agency of Canada, is an individual's capacity to feel, think, and act in ways to achieve a better quality of life while respecting personal, social, and cultural boundaries. Impairment of any of these is a risk factor for mental disorders, or mental illnesses, which is a component of mental health. In 2019, about 970 million people worldwide suffered from a mental disorder, with anxiety and depression being the most common. The number of people suffering from mental disorders has risen significantly over the years. Mental disorders are defined as health conditions that affect and alter cognitive functioning, emotional responses, and behavior associated with distress and/or impaired functioning. The ICD-11 is the global standard used to diagnose, treat, research, and report various mental disorders. In the United States, the DSM-5 is used as the classification system of mental disorders. Mental health is associated with a number of lifestyle factors such as diet, exercise, stress, drug abuse, social connections, and interactions. Psychiatrists, psychologists, licensed professional clinical counselors, social workers, nurse practitioners, and family physicians can help manage mental illness with treatments such as therapy, counseling, medication, and Trauma-informed care. Digital technology has an increasing impact on mental health. Research suggests that constant online connection can increase stress, while digital tools may also expand access to mental-health support for people who cannot easily receive in-person care. Research also shows that digital media use can affect adolescents\u2019 emotional well-being, social development, and mental health outcomes. Cyberbullying and online harassment can worsen mental-health symptoms in children and adolescents. Studies show links between online bullying, depression, and anxiety as well as the long term impacts on individuals. In the mid-19th century, William Sweetser was the first to coin the term mental hygiene, which can be seen as the precursor to contemporary approaches to work on promoting positive mental health. Isaac Ray, the fourth president of the American Psychiatric Association and one of its founders, further defined mental hygiene as \"the art of preserving the mind against all incidents and influences calculated to deteriorate its qualities, impair its energies, or derange its movements. In American history, mentally ill patients were thought to be religiously punished. This response persisted through the 1700s, along with the inhumane confinement and stigmatization of such individuals. Dorothea Dix (1802\u20131887) was an important figure in the development of the \"mental hygiene\" movement. Dix was a school teacher who endeavored to help people with mental disorders and to expose the sub-standard conditions into which they were put. This became known as the \"mental hygiene movement. Before this movement, it was not uncommon that people affected by mental illness would be considerably neglected, often left alone in deplorable conditions without sufficient clothing. From 1840 to 1880, she won the support of the federal government to set up over 30 state psychiatric hospitals; however, they were understaffed, under-resourced, and were accused of violating human rights. Emil Kraepelin in 1896 developed the taxonomy of mental disorders, which has dominated the field for nearly 80 years. Later, the proposed disease model of abnormality was subjected to analysis and considered normality to be relative to the physical, geographical, and cultural aspects of the defining group. At the beginning of the 20th century, Clifford Beers founded \"Mental Health America \u2013 National Committee for Mental Hygiene\", after publication of his accounts as a patient in several lunatic asylums, A Mind That Found Itself, in 1908 and opened the first outpatient mental health clinic in the United States. In the early 20th century, mental illness was increasingly viewed as a public health concern. The mental hygiene movement, similar to the social...",
    "questions": [
      {
        "id": "q28-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q28-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q28-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  },
  {
    "id": "r29",
    "title": "Pollution",
    "category": "Environment",
    "difficulty": "Hard",
    "description": "An academic passage regarding pollution with analytical questions.",
    "passage": "Pollution is the introduction of contaminants into the natural environment that cause harm. Pollution can take the form of any substance (solid, liquid, or gas) or energy (such as radioactivity, heat, sound, or light). Pollutants, the components of pollution, can be either foreign substances/energies or naturally occurring contaminants. Although environmental pollution can be caused by natural events, the word pollution generally implies that the contaminants have a human source, such as manufacturing, extractive industries, poor waste management, transportation or agriculture. Pollution is often classed as point source (coming from a highly concentrated specific site, such as a factory, mine, construction site), or nonpoint source pollution (coming from widespread distributed sources, such as microplastics or agricultural runoff). Many sources of pollution were unregulated parts of industrialization during the 19th and 20th centuries until the emergence of environmental regulation and pollution policy in the later half of the 20th century. Sites where historically polluting industries released persistent pollutants may have legacy pollution long after the source of the pollution is stopped. Major forms of pollution include air pollution, water pollution, litter, noise pollution, plastic pollution, soil contamination, radioactive contamination, thermal pollution, light pollution, and visual pollution. Pollution has widespread consequences on human and environmental health, having systematic impact on social and economic systems. In 2019, pollution killed approximately nine million people worldwide (about one in six deaths that year); about three-quarters of these deaths were caused by air pollution. A 2022 literature review found that levels of anthropogenic chemical pollution have exceeded planetary boundaries and now threaten entire ecosystems around the world. Pollutants frequently have outsized impacts on vulnerable populations, such as children and the elderly, and marginalized communities, because polluting industries and toxic waste sites tend to be collocated with populations with less economic and political power. This outsized impact is a core reason for the formation of the environmental justice movement, and continues to be a core element of environmental conflicts, particularly in the Global South. Because of the impacts of these chemicals, local, country-level, and international policy have increasingly sought to regulate pollutants, resulting in increasing air and water quality standards, alongside regulation of specific waste streams. Regional and national policy is typically supervised by environmental agencies or ministries, while international efforts are coordinated by the UN Environmental Program and other treaty bodies. Pollution mitigation is an important part of all of the Sustainable Development Goals. The term \"pollution\" in the modern environmental sense was rare before the 1860s. The old sense referred to the desecration of something sacred. According to Adam Rome: To describe what we now call air pollution\u2013i.e., the gaseous, chemical, and metallic by-products of combustion and industrial processes\u2013people usually talked of \"the smoke nuisance.\" There were several variations of that term\u2013\"the smoke problem,\" \"the smoke evil,\" even \"the smoke plague.\" Various definitions of pollution exist, which may or may not recognize certain types, such as noise pollution or greenhouse gases. The United States Environmental Protection Agency defines pollution as \"Any substances in water, soil, or air that degrade the natural quality of the environment, offend the senses of sight, taste, or smell, or cause a health hazard. The usefulness of the natural resource is usually impaired by the presence of pollutants and contaminants.\" In contrast, the United Nations considers pollution to be the \"presence of substances and heat in environmental media (air, water, land) whose nature, location, or quantity produces undesirable environmental effects.\" The major forms of pollution are listed below along with the particular contaminants relevant to each of them: Air pollution: the release of chemicals and particulates into the atmosphere. Common gaseous pollutants include carbon monoxide, sulfur dioxide, chlorofluorocarbons (CFCs) and nitrogen oxides produced by industry and motor vehicles. Photochemical ozone and smog are created as nitrogen oxides and hydrocarbons react to sunlight. Particulate matter, or fine dust is characterized by their micrometre size PM10 to PM2.5. Chemical pollution: the introduction of novel entities (NEs) in the environment is one of the planetary boundaries. In August 2022, scientists concluded that the (overall transgressed) boundary is a placeholder for multiple different boundaries for NEs that may emerge, reporting that per- and polyfluoroalkyl substances (PFAS) pollution, informally referred to as \"forever chemicals\", is one such new boundary. Electromagnetic pollution: the overabundance of electromagnetic radiation in their non-ionizing form, such as radio and television transmissions, Wi-fi etc. Although there is no demonstrable effect on humans there can be interference with radio-astronomy and effects on safety systems of aircraft and cars. Light pollution: includes light trespass, over-illumination and astronomical interference. Littering: the criminal throwing of inappropriate man-made objects, unremoved, onto public and private properties. Noise pollution: which encompasses roadway noise, aircraft noise, industrial noise as well as high-intensity sonar. Plastic pollution: involves the accumulation of plastic products and microplastics in the environment that adversely affects wildlife, wildlife...",
    "questions": [
      {
        "id": "q29-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q29-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q29-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  },
  {
    "id": "r30",
    "title": "Capitalism",
    "category": "Society",
    "difficulty": "Hard",
    "description": "An academic passage regarding capitalism with analytical questions.",
    "passage": "Capitalism is an economic system based on the private ownership of the means of production and its use for the purpose of obtaining profit. This socioeconomic system has developed historically in several stages, and is defined by a number of constituent elements: private property, profit motive, capital accumulation, competitive markets, commodification, wage labor, and an emphasis on innovation and economic growth. Capitalist economies may experience business cycles of economic expansion followed by recessions. Economists, historians, political economists, and sociologists have adopted different perspectives in their analyses of capitalism and have recognized various forms of it in practice. These include laissez-faire or free-market capitalism, state capitalism, and welfare capitalism. Different forms of capitalism feature varying degrees of free markets, public ownership, obstacles to free competition, and state-sanctioned social policies. The degree of competition in markets and the role of intervention and regulation, as well as the scope of state ownership, vary across different models of capitalism. The extent to which different markets are free and the rules defining private property are matters of politics and policy. Most of the existing economies in the world at present are mixed economies that combine elements of free markets with state intervention and in some cases economic planning. Capitalism in its modern form emerged from agrarianism in England, as well as mercantilist practices by European countries between the 16th and 18th centuries. The Industrial Revolution of the 18th century established capitalism as a dominant mode of production, characterized by factory work, and a complex division of labor. Through the process of globalization, capitalism spread across the world in the 19th and 20th centuries, especially before World War I and again after the end of the Cold War. During the 19th century, capitalism was largely unregulated by the state, but became more regulated in the post\u2013World War II period through Keynesianism, followed by a return of more unregulated capitalism termed neoliberalism, starting in the 1980s. The term \"capitalist\", meaning an owner of capital, appears earlier than the term \"capitalism\" and dates to the mid-17th century. \"Capitalism\" is derived from capital, which evolved from capitale, a late Latin word based on caput, meaning \"head\"\u2014which is also the origin of \"chattel\" and \"cattle\" in the sense of movable property (only much later to refer only to livestock). Capitale emerged in the 12th to 13th centuries to refer to funds, stock of merchandise, sum of money or money carrying interest. By 1283, it was used in the sense of the capital assets of a trading firm and was often interchanged with other words\u2014wealth, money, funds, goods, assets, property and so on. The Hollantse Mercurius (1651-1691) uses \"capitalists\" in 1653 and 1654 to refer to owners of capital. In French, \u00c9tienne Clavier referred to capitalistes in 1788, four years before its first recorded English usage by Arthur Young in his work Travels in France (1792). In his Principles of Political Economy and Taxation (1817), David Ricardo referred to \"the capitalist\" many times. English poet Samuel Taylor Coleridge used \"capitalist\" in his work Table Talk (1823). Pierre-Joseph Proudhon used the term in his first work, What is Property? (1840), to refer to the owners of capital. Benjamin Disraeli used the term in his 1845 work Sybil. Alexander Hamilton used \"capitalist\" in his Report of Manufactures presented to the United States Congress in 1791. The initial use of the term \"capitalism\" in its modern sense is attributed to Louis Blanc in 1850 (\"What I call 'capitalism' that is to say the appropriation of capital by some to the exclusion of others\") and Pierre-Joseph Proudhon in 1861 (\"Economic and social regime in which capital, the source of income, does not generally belong to those who make it work through their labor\"). Karl Marx frequently referred to the \"capital\" and to the \"capitalist mode of production\" in Das Kapital (1867). Marx did not use the form capitalism but instead used capital, capitalist and capitalist mode of production, which appear frequently. Due to the word being coined by socialist critics of capitalism, economist and historian Robert Hessen stated that the term \"capitalism\" itself is a term of disparagement and a misnomer for economic individualism. Bernard Harcourt agrees with the statement that the term is a misnomer, adding that it misleadingly suggests that there is such a thing as \"capital\" that inherently functions in certain ways and is governed by stable economic laws of its own. In the English language, the term \"capitalism\" first appears, according to the Oxford English Dictionary (OED), in 1854, in the novel The Newcomes by novelist William Makepeace Thackeray, where the word meant \"having ownership of capital\". Also according to the OED, Carl Adolph Douai, a German American socialist and abolitionist, used the term \"private capitalism\" in 1863. Other terms sometimes used for capitalism are: Capitalist mode of production Economic liberalism...",
    "questions": [
      {
        "id": "q30-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q30-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q30-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  },
  {
    "id": "r31",
    "title": "Theory of relativity",
    "category": "Science",
    "difficulty": "Hard",
    "description": "An academic passage regarding theory of relativity with analytical questions.",
    "passage": "The theory of relativity comprises two physics theories by Albert Einstein: special relativity and general relativity, proposed and published in 1905 and 1915, respectively. Special relativity applies to all physical phenomena in the absence of gravity. General relativity explains the law of gravitation and its relation to the forces of nature. It applies to the cosmological and astrophysical realm, including astronomy. The theory transformed theoretical physics and astronomy during the 20th century, superseding a 200-year-old theory of mechanics created primarily by Isaac Newton. It introduced concepts including 4-dimensional spacetime as a unified entity of space and time, relativity of simultaneity, kinematic and gravitational time dilation, and length contraction. In the field of physics, relativity improved the science of elementary particles and their fundamental interactions, along with ushering in the nuclear age. With relativity, cosmology and astrophysics predicted extraordinary astronomical phenomena such as neutron stars, black holes, and gravitational waves. Albert Einstein published the theory of special relativity in 1905, building on many theoretical results and empirical findings obtained by Albert A. Michelson, Hendrik Lorentz, Henri Poincar\u00e9 and others. Max Planck, Hermann Minkowski and others did subsequent work. Einstein developed general relativity between 1907 and 1915, with contributions by many others after 1915. The final form of general relativity was published in 1916. The term \"theory of relativity\" was based on the expression \"relative theory\" (German: Relativtheorie) used in 1906 by Planck, who emphasized how the theory uses the principle of relativity. In the discussion section of the same paper, Alfred Bucherer used for the first time the expression \"theory of relativity\" (German: Relativit\u00e4tstheorie). By the 1920s, the physics community understood and accepted special relativity. It rapidly became a significant and necessary tool for theorists and experimentalists in the new fields of atomic physics, nuclear physics, and quantum mechanics. By comparison, general relativity did not appear to be as useful, beyond making minor corrections to predictions of Newtonian gravitation theory. It seemed to offer little potential for experimental test, as most of its assertions were on an astronomical scale. Its mathematics seemed difficult and fully understandable only by a small number of people. Around 1960, general relativity became central to physics and astronomy. New mathematical techniques to apply to general relativity streamlined calculations and made its concepts more easily visualized. As astronomical phenomena were discovered, such as quasars (1963), the 3-kelvin microwave background radiation (1965), pulsars (1967), and the first black hole candidates (1981), the theory explained their attributes, and measurement of them further confirmed the theory. Special relativity is a theory of the structure of spacetime. It was introduced in Einstein's 1905 paper \"On the Electrodynamics of Moving Bodies\" (for the contributions of many other physicists and mathematicians, see History of special relativity). Special relativity is based on two postulates which are contradictory in classical mechanics: The laws of physics are the same for all observers in any inertial frame of reference relative to one another (principle of relativity). The speed of light in vacuum is the same for all observers, regardless of their relative motion or of the motion of the light source. The resultant theory copes with experiment better than classical mechanics. For instance, postulate 2 explains the results of the Michelson\u2013Morley experiment. Moreover, the theory has many surprising and counterintuitive consequences. Some of these are: Relativity of simultaneity: Two events, simultaneous for one observer, may not be simultaneous for another observer if the observers are in relative motion. Time dilation: Moving clocks are measured to tick more slowly than an observer's \"stationary\" clock. Length contraction: Objects are measured to be shortened in the direction that they are moving with respect to the observer. Maximum speed is finite: No physical object, message or field line can travel faster than the speed of light in vacuum. The effect of gravity can only travel through space at the speed of light, not faster or instantaneously. Mass\u2013energy equivalence: E = mc2, energy and mass are equivalent and transmutable. Relativistic mass, idea used by some researchers. The defining feature of special relativity is the replacement of the Galilean transformations of classical mechanics by the Lorentz transformations. (See Maxwell's equations of electromagnetism.) General relativity is a theory of gravitation developed by Einstein in the years 1907\u20131915. The development of general relativity began with the equivalence principle, under which the states of accelerated motion and being at rest in a gravitational field (for example, when standing on the surface of the Earth) are physically identical. The upshot of this is that free fall is inertial motion: an object in free fall is falling because that is how objects move when there is no force being exerted on them, instead of this being due to the force of gravity as is the case in classical mechanics. This is incompatible with classical mechanics and special relativity...",
    "questions": [
      {
        "id": "q31-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q31-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q31-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  },
  {
    "id": "r32",
    "title": "Cybersecurity",
    "category": "Technology",
    "difficulty": "Hard",
    "description": "An academic passage regarding cybersecurity with analytical questions.",
    "passage": "Error fetching data.",
    "questions": [
      {
        "id": "q32-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q32-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q32-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  },
  {
    "id": "r33",
    "title": "World War I",
    "category": "History",
    "difficulty": "Hard",
    "description": "An academic passage regarding world war i with analytical questions.",
    "passage": "World War I, or the First World War (28 July 1914 \u2013 11 November 1918), also known as The Great War, was a global conflict between two coalitions: the Allies (or Entente) and the Central Powers. Major areas of conflict included Europe and the Middle East, as well as parts of Africa and the Asia-Pacific. The war saw important developments in weaponry including tanks, aircraft, artillery, machine guns, and chemical weapons. One of the deadliest conflicts in history, it resulted in an estimated 15 to 22 million military and civilian casualties and genocide. The movement of large numbers of people was a major factor in the deadly Spanish flu pandemic. The causes of World War I included the rise of the German Empire and decline of the Ottoman Empire, which disturbed the long-standing balance of power in Europe, the exacerbation of imperial rivalries, and an arms race between the great powers. Growing tensions in the Balkans reached a breaking point on 28 June 1914 when Gavrilo Princip, a Bosnian Serb, assassinated Franz Ferdinand, the heir to the Austro-Hungarian throne. Austria-Hungary blamed Serbia, and declared war on 28 July. After Russia mobilised in Serbia's defence, Germany declared war on Russia and France, who had an alliance. The United Kingdom entered the war after Germany invaded Belgium, and the Ottoman Empire joined the Central Powers in November. Germany's strategy in 1914 was to quickly defeat France before transferring its forces to the east, but its advance was halted in September, and by the end of the year the Western Front consisted of a near-continuous line of trenches from the English Channel to Switzerland. The Eastern Front was more dynamic, but neither side gained a decisive advantage, despite costly offensives. Italy, Bulgaria, Romania, Greece, and others entered the war from 1915 onward. Major battles, including those at Verdun, the Somme, and Passchendaele, failed to break the stalemate on the Western Front. In April 1917, the United States joined the Allies after Germany resumed unrestricted submarine warfare against Atlantic shipping. Later that year, the Bolsheviks seized power in Russia in the October Revolution; Soviet Russia signed an armistice with the Central Powers in December, followed by a separate peace in March 1918. That month, Germany launched a spring offensive in the west, which despite initial successes left the German Army exhausted and demoralised. The Allied Hundred Days Offensive, beginning in August 1918, caused a collapse of the German front line. Following the Vardar Offensive, Bulgaria signed an armistice in late September. By early November, the Allies had signed armistices with the Ottomans and with Austria-Hungary, leaving Germany isolated. Facing a revolution at home, Kaiser Wilhelm II abdicated on 9 November, and the war ended with the Armistice of 11 November 1918. The Paris Peace Conference of 1919\u20131920 imposed settlements on the defeated powers. Under the Treaty of Versailles, Germany lost significant territories, was disarmed, and was required to pay large war reparations to the Allies. The dissolution of the Russian, German, Austro-Hungarian, and Ottoman empires led to new national boundaries and the creation of new independent states including Poland, Finland, the Baltic states, Czechoslovakia, and Yugoslavia. The League of Nations was established to maintain world peace, but its failure to manage instability during the interwar period contributed to the outbreak of World War II in 1939. Before World War II, the events of 1914\u20131918 were commonly referred to as the Great War or simply the World War. In August 1914, The Independent stated of the conflict, \"This is the Great War. It names itself.\" In the decade after its end, many hoped it would be \"the war to end all wars,\" because of its unprecedented destructiveness and death toll. The earliest known use of the term First World War appeared in September 1914, when German biologist and philosopher Ernst Haeckel wrote that the ongoing \"European War\" would become \"the first world war in the full sense of the word.\" For much of the 19th century, the major European powers maintained a tenuous balance of power, known as the Concert of Europe. After 1848, this was challenged by Britain's withdrawal into splendid isolation, the decline of the Ottoman Empire, New Imperialism, and the rise of Prussia under Otto von Bismarck. Victory in the 1870\u20131871 Franco-Prussian War allowed Bismarck to consolidate a German Empire. After 1871, French policy aimed to avenge this defeat and expand France's colonial empire. In 1873, Bismarck negotiated the League of the Three Emperors, which included Austria-Hungary, Russia, and Germany. After the 1877\u20131878 Russo-Turkish War, the League was dissolved due to Austrian concerns over the expansion of Russian influence in the Balkans, an area they considered to be of vital strategic interest. Germany and Austria-Hungary then formed the 1879 Dual Alliance, which became the Triple Alliance when Italy joined in 1882. For...",
    "questions": [
      {
        "id": "q33-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q33-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q33-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  },
  {
    "id": "r34",
    "title": "Placebo",
    "category": "Psychology",
    "difficulty": "Hard",
    "description": "An academic passage regarding placebo with analytical questions.",
    "passage": "A placebo ( pluh-SEE-boh) is a medicine or treatment intended to appear genuine to its recipient, but which has no pharmaceutical effect. Common placebos include inert tablets (like sugar pills), inert injections (like saline), sham surgery, and other procedures. Placebos are used in randomized clinical trials to test the efficacy of medical treatments. In a placebo-controlled trial, any change in the control group is known as the placebo response, and the difference between this and the result of no treatment is the placebo effect. Placebos in clinical trials should ideally be indistinguishable from so-called verum treatments under investigation, except for the latter's particular hypothesized medicinal effect. This is to shield test participants (with their consent) from knowing who is getting the placebo and who is getting the treatment under test, as patients' and clinicians' expectations of efficacy can influence results. The idea of a \"placebo effect\" was discussed in 18th century psychology, but became more prominent in the 20th century. Modern studies find that placebos can affect some outcomes such as pain and nausea, but otherwise do not generally have important clinical effects. Improvements that patients experience after being treated with a placebo can also be due to unrelated factors, such as regression to the mean (a statistical effect where an unusually high or low measurement is likely to be followed by a less extreme one). The use of placebos in clinical medicine raises ethical concerns, especially if they are disguised as an active treatment, as this introduces dishonesty into the doctor\u2013patient relationship and bypasses informed consent. Placebos are also popular because they can sometimes produce relief through psychological mechanisms (a phenomenon known as the \"placebo effect\"). They can affect how patients perceive their condition and encourage the body's chemical processes for relieving pain and a few other symptoms, but have no impact on the disease itself. The Latin term placebo means [I] shall be pleasing. The definition of placebo has been debated. One definition states that a treatment process is a placebo when none of the characteristic treatment factors are effective (remedial or harmful) in the patient for a given disease. In a clinical trial, a placebo response is the measured response of subjects to a placebo; the placebo effect is the difference between that response and no treatment. The placebo response may include improvements due to natural healing, declines due to natural disease progression, the tendency for people who were temporarily feeling either better or worse than usual to return to their average situations (regression toward the mean), and errors in the clinical trial records, which can make it appear that a change has happened when nothing has changed. It is also part of the recorded response to any active medical intervention. Measurable placebo effects may be either objective (e.g. lowered blood pressure) or subjective (e.g. a lowered perception of pain). The placebo effect is a well-documented phenomenon, though it remains widely misunderstood and surrounded by misconceptions. Several studies have questioned its clinical relevance, fueling ongoing debate about its actual effectiveness. A 2001 meta-analysis of the placebo effect looked at trials in 40 different medical conditions, and concluded the only one where it had been shown to have a significant effect was for pain. Another Cochrane review in 2010 suggested that placebo effects are apparent only in subjective, continuous measures, and in the treatment of pain and related conditions. The review found that placebos do not appear to affect the actual diseases, or outcomes that are not dependent on a patient's perception. The authors, Asbj\u00f8rn Hr\u00f3bjartsson and Peter C. G\u00f8tzsche, concluded that their study \"did not find that placebo interventions have important clinical effects in general.\" This interpretation has been subject to criticism, particularly due to concerns about the adequacy of the methodology used. Recent research has linked placebo interventions to improved motor functions in patients with Parkinson's disease. Other objective outcomes affected by placebos include immune and endocrine parameters, end-organ functions regulated by the autonomic nervous system, and sport performance. Measuring the extent of the placebo effect is difficult due to confounding factors. For example, a patient may feel better after taking a placebo due to regression to the mean (i.e. a natural recovery or change in symptoms), but this can be ruled out by comparing the placebo group with a no treatment group (as all the placebo research does). It is harder still to tell the difference between the placebo effect and the effects of response bias, observer bias and other flaws in trial methodology, as a trial comparing placebo treatment and no treatment will not be a blinded experiment. In their 2010 meta-analysis of the placebo effect, Asbj\u00f8rn Hr\u00f3bjartsson and Peter C. G\u00f8tzsche argue that \"even if there were no true effect of placebo, one would expect to record differences between placebo and no-treatment groups...",
    "questions": [
      {
        "id": "q34-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q34-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q34-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  },
  {
    "id": "r35",
    "title": "Sustainability",
    "category": "Environment",
    "difficulty": "Hard",
    "description": "An academic passage regarding sustainability with analytical questions.",
    "passage": "Sustainability or being sustainable (from the latin sustinere - hold up, hold upright; furnish with means of support; bear, undergo, endure) is the ability to continue over a long period of time. In modern usage it generally refers to a state in which the environment, economy, and society will continue to exist over a long period of time. Many definitions emphasize the environmental dimension. This can include addressing key environmental problems, such as climate change and biodiversity loss. The idea of sustainability can guide decisions at the global, national, organizational, and individual levels. A related concept is that of sustainable development, and the terms are often used to mean the same thing. \"Sustainability is often thought of as a long-term goal (i.e. a more sustainable world), while sustainable development refers to the many processes and pathways to achieve it.\" Details around the economic dimension of sustainability are controversial. Scholars have discussed this under the concept of weak and strong sustainability. For example, there will always be tension between the ideas of \"welfare and prosperity for all\" and environmental conservation, so trade-offs are necessary. It would be desirable to find ways that separate economic growth from harming the environment. This means using fewer resources per unit of output even while growing the economy. This decoupling reduces the environmental impact of economic growth, such as pollution. Doing this is difficult. It is challenging to measure sustainability as the concept is complex, contextual, and dynamic. Indicators have been developed to cover the environment, society, or the economy but there is no fixed definition of sustainability indicators. The metrics are evolving and include indicators, benchmarks, and audits. They include sustainability standards and certification systems, like Fairtrade and Organic. They also involve indices and accounting systems, such as corporate sustainability reporting and triple Bottom Line accounting. It is necessary to address many barriers to sustainability to achieve a sustainability transition or sustainability transformation. Some barriers arise from nature and its complexity while others are extrinsic to the concept of sustainability. For example, they can result from the dominant institutional frameworks in countries. Global issues of sustainability are difficult to tackle because they need global solutions. Existing global organizations such as the UN and WTO are seen as inefficient in enforcing current global regulations. One reason for this is the lack of suitable sanctioning mechanisms. Governments are not the only sources of action for sustainability. For example, business groups have tried to integrate ecological concerns with economic activity, seeking sustainable business. Religious leaders have stressed the need for caring for nature and environmental stability. Individuals can also choose to live more sustainably. Some people have criticized the idea of sustainability. One point of criticism is that the concept is vague and only a buzzword. Another is that sustainability might be an impossible goal. Some experts have pointed out that \"no country is delivering what its citizens need without transgressing the biophysical planetary boundaries\". Sustainability is regarded as a \"normative concept\". This means it is based on what people value or find desirable: \"The quest for sustainability involves connecting what is known through scientific study to applications in pursuit of what people want for the future.\" The 1983 UN Commission on Environment and Development (Brundtland Commission) had a big influence on the use of the term sustainability today. The commission's 1987 Brundtland Report provided a definition of sustainable development. The report, Our Common Future, defines it as development that \"meets the needs of the present without compromising the ability of future generations to meet their own needs\". The report helped bring sustainability into the mainstream of policy discussions. It also popularized the concept of sustainable development. Some other key concepts to illustrate the meaning of sustainability include: It may be a fuzzy concept, but in a positive sense: the goals are more important than the approaches or means applied. It connects with other essential concepts, such as resilience, adaptive capacity, and vulnerability. Choices matter: \"it is not possible to sustain everything, everywhere, forever\". Scale matters in both space and time, and place matters. Limits exist (see planetary boundaries). In everyday usage, sustainability often focuses on the environmental dimension. A single specific definition of sustainability may never be possible, but the concept is still useful. There have been attempts to define it, for example: \"Sustainability can be defined as the capacity to maintain or improve the state and availability of desirable materials or conditions over the long term.\" \"Sustainability [is] the long-term viability of a community, set of social institutions, or societal practice. In general, sustainability is understood as a form of intergenerational ethics in which the environmental and economic actions taken by present persons do not diminish the opportunities of future persons to enjoy similar levels of wealth, utility, or welfare.\" \"Sustainability means meeting our own needs...",
    "questions": [
      {
        "id": "q35-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q35-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q35-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  },
  {
    "id": "r36",
    "title": "Human rights",
    "category": "Society",
    "difficulty": "Hard",
    "description": "An academic passage regarding human rights with analytical questions.",
    "passage": "Human rights are universally recognized moral principles or norms that establish standards of human behavior and are often protected by both national and international laws. These rights are considered inherent and inalienable, meaning they belong to every individual simply by virtue of being human, regardless of characteristics like nationality, ethnicity, religion, gender, sexual orientation, disability, caste, or socioeconomic status. They encompass a broad range of civil, political, economic, social, and cultural rights, such as the right to life, freedom of speech, protection against enslavement, and right to education. While ideas related to human rights predate modernity, the modern concept of human rights gained significant prominence after World War II, particularly in response to the atrocities of the Holocaust, leading to the adoption of the Universal Declaration of Human Rights (UDHR) by the United Nations General Assembly in 1948. This document outlined a comprehensive framework of rights that countries are encouraged to protect, setting a global standard for human dignity, freedom, and justice. The Universal Declaration of Human Rights (UDHR) has since inspired numerous international treaties and national laws aimed at promoting and protecting human rights worldwide. While the principle of universal human rights is widely accepted, debates persist regarding which rights should take precedence, how they should be implemented, and their applicability in different cultural contexts. Criticisms often arise from perspectives like cultural relativism, which argue that individual human rights are inappropriate for societies that prioritize a communal or collectivist identity, and may conflict with certain cultural or traditional practices. Nonetheless, human rights remain a central focus in international relations and legal frameworks, supported by institutions such as the United Nations, various non-governmental organizations, and national bodies dedicated to monitoring and enforcing human rights standards worldwide. Many of the basic ideas that animated the human rights movement developed in the aftermath of the Second World War and the events of the Holocaust, culminating in the adoption of the Universal Declaration of Human Rights in Paris by the United Nations General Assembly in 1948. Ancient peoples did not have the same modern-day conception of universal human rights. However, the concept has in some sense existed for centuries, although not in the same way as today. In the West, Jewish and Christian scriptures provided some conceptual foundations for discourse on rights along with Roman law providing legal foundations on what implementation may look like. The true forerunner of human rights discourse was the concept of natural rights, which first appeared as part of the medieval natural law tradition. It developed in new directions during the European Enlightenment with such philosophers as John Locke, Francis Hutcheson, and Jean-Jacques Burlamaqui, and featured prominently in the political discourse of the American Revolution and the French Revolution. From this foundation, the modern human rights arguments emerged over the latter half of the 20th century, possibly as a reaction to slavery, torture, genocide, and war crimes. The medieval natural law tradition was heavily influenced by the writings of St Paul's early Christian thinkers such as St Hilary of Poitiers, St Ambrose, and St Augustine. Augustine was among the earliest to examine the legitimacy of the laws of man, and attempt to define the boundaries of what laws and rights occur naturally based on wisdom and conscience, instead of being arbitrarily imposed by mortals, and if people are obligated to obey laws that are unjust. The Kouroukan Fouga was the constitution of the Mali Empire in West Africa. It was composed in the 13th century, and was one of the very first charters on human rights. It included the \"right to life and to the preservation of physical integrity\" and significant protections for women. Spanish scholasticism insisted on a subjective vision of law during the 16th and 17th centuries: Luis de Molina, Domingo de Soto and Francisco Vitoria, members of the School of Salamanca, defined law as a moral power over one's own. Although they maintained at the same time, the idea of law as an objective order, they stated that there are certain natural rights, mentioning both rights related to the body (right to life, to property) and to the spirit (right to freedom of thought, dignity). The jurist V\u00e1zquez de Menchaca, starting from an individualist philosophy, was decisive in the dissemination of the term iura naturalia. This natural law thinking was supported by contact with American civilizations and the debate that took place in Castile about the just titles of the conquest and, in particular, the nature of the indigenous people. In the Castilian colonization of America, it is often stated, measures were applied in which the germs of the idea of Human Rights are present, debated in the well-known Valladolid Debate that took place in 1550 and 1551. The thought of the School of Salamanca, especially through Francisco Vitoria, also contributed to the promotion of...",
    "questions": [
      {
        "id": "q36-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q36-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q36-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  },
  {
    "id": "r37",
    "title": "Plate tectonics",
    "category": "Science",
    "difficulty": "Hard",
    "description": "An academic passage regarding plate tectonics with analytical questions.",
    "passage": "Plate tectonics (from Latin tectonicus, from Ancient Greek \u03c4\u03b5\u03ba\u03c4\u03bf\u03bd\u03b9\u03ba\u03cc\u03c2 (tektonik\u00f3s) 'pertaining to building') is the scientific theory that Earth's lithosphere comprises a number of large tectonic plates, which have been slowly moving since 3\u20134 billion years ago. The model builds on the concept of continental drift, an idea developed during the first decades of the 20th century. Plate tectonics came to be accepted by geoscientists after seafloor spreading was validated in the mid- to late 1960s. The processes that result in plates and shape Earth's crust are called tectonics. Earth's lithosphere, the rigid outer shell of the planet including the crust and upper mantle, is fractured into seven or eight major plates (depending on how they are defined) and many minor plates or \"platelets\". Where the plates meet, their relative motion determines the type of plate boundary (or fault): convergent, divergent, or transform. The relative movement of the plates typically ranges from zero to 10 cm annually. Faults tend to be geologically active, with earthquakes, volcanic activity, mountain-building, and oceanic trench formation. Tectonic plates are composed of the oceanic lithosphere and the thicker continental lithosphere, each topped by its own kind of crust. Along convergent plate boundaries, the process of subduction carries the edge of one plate down under the other plate and into the mantle. This process reduces the total surface area (crust) of Earth. The lost surface is balanced by the formation of new oceanic crust along divergent margins by seafloor spreading, keeping the total surface area constant in a tectonic \"conveyor belt\". While Earth is the only planet known to currently have active plate tectonics, evidence suggests that other planets and moons have experienced or exhibit forms of tectonic activity. Jupiter's moon Europa shows signs of ice crustal plates moving and interacting, similar to Earth's plate tectonics. Mars and Venus are thought to have had tectonic activity in the past, though not of the same form as Earth. Tectonic plates are relatively rigid and float across the ductile asthenosphere beneath. Lateral density variations in the mantle result in convection currents, the slow creeping motion of Earth's solid mantle. At a seafloor spreading ridge, plates move away from the ridge, which is a topographic high, and the newly formed crust cools as it moves away, increasing its density and contributing to the motion. At a subduction zone, the relatively cold, dense oceanic crust sinks down into the mantle, forming the downward convecting limb of a mantle cell, which is the strongest driver of plate motion. The relative importance and interaction of other proposed factors such as active convection, upwelling inside the mantle, and tidal drag of the Moon are subjects of debate. The outer layers of Earth are divided into the lithosphere and asthenosphere. The division is based on differences in mechanical properties and in the method for the transfer of heat. The lithosphere is cooler and more rigid, while the asthenosphere is hotter and flows more easily. In terms of heat transfer, the lithosphere loses heat by conduction, whereas the asthenosphere also transfers heat by convection and has a nearly adiabatic temperature gradient. This division should not be confused with the chemical subdivision of these same layers into the mantle (comprising both the asthenosphere and the mantle portion of the lithosphere) and the crust: a given piece of mantle may be part of the lithosphere or the asthenosphere at different times depending on its temperature and pressure. The key principle of plate tectonics is that the lithosphere exists as separate and distinct tectonic plates, which ride on the viscoelastic asthenosphere. Plate motions range from 10 to 40 millimetres per year (0.4 to 1.6 in/year) at the Mid-Atlantic Ridge (about as fast as fingernails grow), to about 160 millimetres per year (6.3 in/year) for the Nazca plate (about as fast as hair grows). Tectonic lithospheric plates consist of lithospheric mantle overlain by one or two types of crustal material: oceanic crust (in older texts called sima from silicon and magnesium) and continental crust (sial from silicon and aluminium). The distinction between oceanic crust and continental crust is based on their modes of formation. Oceanic crust is formed at sea-floor spreading centers. Continental crust is formed through arc volcanism and accretion of terranes through plate tectonic processes. Oceanic crust is denser than continental crust because it has less silicon and more of the heavier elements than continental crust. As a result of this density difference, oceanic crust generally lies below sea level, while continental crust buoyantly projects above sea level. Average oceanic lithosphere is typically 100 km (62 mi) thick. Its thickness is a function of its age. As time passes, it cools by conducting heat from below, and releasing it radiatively into space. The adjacent mantle below is cooled by this process and added to its base. Because...",
    "questions": [
      {
        "id": "q37-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q37-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q37-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  },
  {
    "id": "r38",
    "title": "Cloud computing",
    "category": "Technology",
    "difficulty": "Hard",
    "description": "An academic passage regarding cloud computing with analytical questions.",
    "passage": "Cloud computing is defined by the International Organization for Standardization (ISO) as \"a paradigm for enabling network access to a scalable and elastic pool of shareable physical or virtual resources with self-service provisioning and administration on demand\". It is commonly referred to as \"the cloud\". In 2011, the National Institute of Standards and Technology (NIST) identified five \"essential characteristics\" for cloud systems. Below are the exact definitions according to NIST: On-demand self-service: \"A consumer can unilaterally provision computing capabilities, such as server time and network storage, as needed automatically without requiring human interaction with each service provider.\" Broad network access: \"Capabilities are available over the network and accessed through standard mechanisms that promote use by heterogeneous thin or thick client platforms (e.g., mobile phones, tablets, laptops, and workstations).\" Resource pooling: \" The provider's computing resources are pooled to serve multiple consumers using a multi-tenant model, with different physical and virtual resources dynamically assigned and reassigned according to consumer demand.\" Rapid elasticity: \"Capabilities can be elastically provisioned and released, in some cases automatically, to scale rapidly outward and inward commensurate with demand. To the consumer, the capabilities available for provisioning often appear unlimited and can be appropriated in any quantity at any time.\" Measured service: \"Cloud systems automatically control and optimize resource use by leveraging a metering capability at some level of abstraction appropriate to the type of service (e.g., storage, processing, bandwidth, and active user accounts). Resource usage can be monitored, controlled, and reported, providing transparency for both the provider and consumer of the utilized service. By 2023, the International Organization for Standardization (ISO) had expanded and refined the list. The history of cloud computing extends to the 1960s, with the initial concepts of time-sharing becoming popularized via remote job entry (RJE). The \"data center\" model, where users submitted jobs to operators to run on mainframes, was predominantly used during this era. This period saw broad experimentation with making large-scale computing power more accessible through time-sharing, while optimizing infrastructure, platforms, and applications to improve efficiency for end users. The \"cloud\" metaphor for virtualized services dates to 1994, when it was used by General Magic for the universe of \"places\" that mobile agents in the Telescript environment could \"go\". The metaphor is credited to David Hoffman, a General Magic communications specialist, based on its long-standing use in networking and telecom. The expression cloud computing became more widely known in 1996 when Compaq Computer Corporation drew up a business plan for future computing and the Internet. The company's ambition was to supercharge sales with \"cloud computing-enabled applications\". The business plan foresaw that online consumer file storage would likely be commercially successful. As a result, Compaq decided to sell server hardware to internet service providers. In the 2000s, the application of cloud computing began to take shape with the establishment of Amazon Web Services (AWS) in 2002, which allowed developers to build applications independently. In 2006 Amazon Simple Storage Service, known as Amazon S3, and the Amazon Elastic Compute Cloud (EC2) were released. In 2008 NASA's development of the first open-source software for deploying private and hybrid clouds. The following decade saw the launch of various cloud services. In 2010, Microsoft launched Microsoft Azure, and Rackspace Hosting and NASA initiated an open-source cloud-software project, OpenStack. IBM introduced the IBM SmartCloud framework in 2011, and Oracle announced the Oracle Cloud in 2012. In December 2019, Amazon launched AWS Outposts, a service that extends AWS infrastructure, services, APIs, and tools to customer data centers, co-location spaces, or on-premises facilities. Cloud computing can shorten time to market by offering pre-configured tools, scalable resources, and managed services, allowing users to focus on core business value rather than maintaining infrastructure. Cloud platforms can enable organizations and individuals to reduce upfront capital expenditures on physical infrastructure by shifting to an operational expenditure model, where costs scale with usage. Cloud platforms also offer managed services and tools, such as artificial intelligence, data analytics, and machine learning, which might otherwise require significant in-house expertise and infrastructure investment. While cloud computing can offer cost advantages through effective resource optimization, organizations often face challenges such as unused resources, inefficient configurations, and hidden costs without proper oversight and governance. Many cloud platforms provide cost management tools, such as AWS Cost Explorer and Azure Cost Management, and frameworks like FinOps have emerged to standardize financial operations in the cloud. Cloud computing also facilitates collaboration, remote work, and global service delivery by enabling secure access to data and applications from any location with an internet connection. Cloud providers offer various redundancy options for core services, such as managed storage and managed databases, though redundancy configurations often vary by service tier. Advanced redundancy strategies, such as cross-region replication or failover systems, typically require explicit configuration and may incur additional costs or licensing fees. Cloud environments operate under...",
    "questions": [
      {
        "id": "q38-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q38-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q38-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  },
  {
    "id": "r39",
    "title": "Ancient Egypt",
    "category": "History",
    "difficulty": "Hard",
    "description": "An academic passage regarding ancient egypt with analytical questions.",
    "passage": "Ancient Egypt was a cradle of civilization concentrated along the lower reaches of the Nile River in the eastern corner of North Africa. It emerged from prehistoric Egypt around 3150 BC (according to conventional Egyptian chronology), when Upper and Lower Egypt were united by Menes, who is believed by the majority of Egyptologists to have been the same person as Narmer. The history of ancient Egypt unfolded as a series of stable kingdoms interspersed by the \"Intermediate Periods\" of relative instability. These stable kingdoms existed in one of three periods: the Old Kingdom of the Early Bronze Age; the Middle Kingdom of the Middle Bronze Age; or the New Kingdom of the Late Bronze Age. The pinnacle of ancient Egyptian power was achieved during the New Kingdom, which extended its rule to much of Nubia and a considerable portion of the Levant. After this period, Egypt entered an era of slow decline. Over the course of its history, it was invaded or conquered by a number of foreign civilizations, including the Hyksos, the Kushites, the Assyrians, the Persians, and the Greeks and then the Romans. The end of ancient Egypt is variously defined as occurring with the end of the Late Period during the Wars of Alexander the Great in 332 BC or with the end of the Greek-ruled Ptolemaic Kingdom during the Roman conquest of Egypt in 30 BC. In AD 642, the Arab conquest of Egypt brought an end to the region's millennium-long Greco-Roman period. The success of ancient Egyptian civilization came partly from its ability to adapt to the Nile's conditions for agriculture. The predictable flooding of the Nile and controlled irrigation of its fertile valley produced surplus crops which supported a more dense population and thereby substantial social and cultural development. With resources to spare, the administration sponsored the mineral exploitation of the valley and its surrounding desert regions, the early development of an independent writing system, the organization of collective construction and agricultural projects, trade with other civilizations, and a military to assert Egyptian dominance throughout the Near East. Motivating and organizing these activities was a bureaucracy of elite scribes, religious leaders, and administrators under the control of the reigning pharaoh, who ensured the cooperation and unity of the Egyptian people in the context of an elaborate system of religious beliefs. Among the many achievements of ancient Egypt are: the quarrying, surveying, and construction techniques that supported the building of monumental pyramids, temples, and obelisks; a system of mathematics; a practical and effective system of medicine; irrigation systems and agricultural production techniques; the first known planked boats; Egyptian faience and glass technology; new forms of literature; and the earliest known peace treaty, which was ratified with the Anatolia-based Hittite Empire. Its art and architecture were widely copied and its antiquities were carried off to be studied, admired, or coveted in the far corners of the world. Likewise, its monumental ruins inspired the imaginations of travelers and writers for millennia. A newfound European and Egyptian respect for antiquities and excavations that began in earnest in the early modern period has led to much scientific investigation of ancient Egypt and its society, as well as a greater appreciation of its cultural legacy. The Nile has been the lifeline of its region for much of human history. The fertile floodplain of the Nile gave humans the opportunity to develop a settled agricultural economy and a more sophisticated, centralized society that became a cornerstone in the history of human civilization. In Predynastic and Early Dynastic times, the Egyptian climate was much less arid than it is today. Large regions of Egypt were savanna and traversed by herds of grazing ungulates. Foliage and fauna were far more prolific in all environs, and the Nile region supported large populations of waterfowl. Hunting would have been common for Egyptians, and this is also the period when many animals were first domesticated. By about 5500 BC, small tribes living in the Nile valley had developed into a series of cultures demonstrating firm control of agriculture and animal husbandry, and identifiable by their pottery and personal items, such as combs, bracelets, and beads. The largest of these early cultures in upper (Southern) Egypt was the Badarian culture, which probably originated in the Western Desert; it was known for its high-quality ceramics, stone tools, and its use of copper. The Badari was followed by the Naqada culture: the Naqada I (Amratian), the Naqada II (Gerzeh), and Naqada III (Semainean). These brought a number of technological improvements. As early as the Naqada I Period, predynastic Egyptians imported obsidian from Ethiopia, used to shape blades and other objects from flakes. Mutual trade with the Levant was established during Naqada II (c. 3600\u20133350 BC); this period was also the beginning of trade with Mesopotamia, which continued into the...",
    "questions": [
      {
        "id": "q39-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q39-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q39-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  },
  {
    "id": "r40",
    "title": "Neuroplasticity",
    "category": "Psychology",
    "difficulty": "Hard",
    "description": "An academic passage regarding neuroplasticity with analytical questions.",
    "passage": "Neuroplasticity, also known as neural plasticity or just plasticity, is the medium of neural networks in the brain to change through growth and reorganization. Neuroplasticity refers to the brain's ability to reorganize and rewire its neural connections, enabling it to adapt and function in ways that differ from its prior state. This process can occur in response to learning new skills, experiencing environmental changes, recovering from injuries, or adapting to sensory or cognitive deficits. Such adaptability highlights the dynamic and ever-evolving nature of the brain, even into adulthood. These changes range from individual neuron pathways making new connections, to systematic adjustments like cortical remapping or neural oscillation. Other forms of neuroplasticity include homologous area adaptation, cross modal reassignment, map expansion, and compensatory masquerade. Examples of neuroplasticity include circuit and network changes that result from learning a new ability, information acquisition, environmental influences, pregnancy, caloric intake, practice/training, and psychological stress. Neuroplasticity was once thought by neuroscientists to manifest only during childhood, but research in the later half of the 20th century showed that many aspects of the brain exhibit plasticity through adulthood. The developing brain exhibits a higher degree of plasticity than the adult brain. Activity-dependent plasticity can have significant implications for healthy development, learning, memory, and recovery from brain damage. The term plasticity was first applied to behavior in 1890 by William James in The Principles of Psychology where the term was used to describe \"a structure weak enough to yield to an influence, but strong enough not to yield all at once\". The first person to use the term neural plasticity appears to have been the Polish neuroscientist Jerzy Konorski. One of the first experiments providing evidence for neuroplasticity was conducted in 1793, by Italian anatomist Michele Vincenzo Malacarne, who described experiments in which he paired animals, trained one of the pair extensively for years, and then dissected both. Malacarne discovered that the cerebellums of the trained animals were substantially larger than the cerebellum of the untrained animals. However, while these findings were significant, they were eventually forgotten. In 1890, the idea that the brain and its function are not fixed throughout adulthood was proposed by William James in The Principles of Psychology, though the idea was largely neglected. Up until the 1970s, neuroscientists believed that the brain's structure and function was essentially fixed throughout adulthood. While the brain was commonly understood as a nonrenewable organ in the early 1900s, the pioneering neuroscientist Santiago Ram\u00f3n y Cajal used the term neuronal plasticity to describe nonpathological changes in the structure of adult brains. Based on his renowned neuron doctrine, Cajal first described the neuron as the fundamental unit of the nervous system that later served as an essential foundation to develop the concept of neural plasticity. Many neuroscientists used the term plasticity to explain the regenerative capacity of the peripheral nervous system only. Cajal, however, used the term plasticity to reference his findings of degeneration and regeneration in the adult brain (a part of the central nervous system). This was controversial, with some like Walther Spielmeyer and Max Bielschowsky arguing that the CNS cannot produce new cells. The term has since been broadly applied: Given the central importance of neuroplasticity, an outsider would be forgiven for assuming that it was well defined and that a basic and universal framework served to direct current and future hypotheses and experimentation. Sadly, however, this is not the case. While many neuroscientists use the word neuroplasticity as an umbrella term it means different things to different researchers in different subfields ... In brief, a mutually agreed-upon framework does not appear to exist. In 1923, Karl Lashley conducted experiments on rhesus monkeys that demonstrated changes in neuronal pathways, which he concluded were evidence of plasticity. Despite this, and other research that suggested plasticity, neuroscientists did not widely accept the idea of neuroplasticity. Inspired by work from Nicolas Rashevsky, in 1943, McCulloch and Pitts proposed the artificial neuron, with a learning rule, whereby new synapses are produced when neurons fire simultaneously. This is then extensively discussed in The organization of behavior (Hebb, 1949) and is now known as Hebbian learning. In 1945, Justo Gonzalo concluded from his research on brain dynamics, that, contrary to the activity of the projection areas, the \"central\" cortical mass (more or less equidistant from the visual, tactile and auditive projection areas), would be a \"maneuvering mass\", rather unspecific or multisensory, with capacity to increase neural excitability and re-organize the activity by means of plasticity properties. He gives as a first example of adaptation, to see upright with reversing glasses in the Stratton experiment, and specially, several first-hand brain injuries cases in which he observed dynamic and adaptive properties in their disorders, in particular in the inverted perception disorder [e.g., see pp 260\u201362 Vol. I (1945), p 696 Vol. II (1950)]. He...",
    "questions": [
      {
        "id": "q40-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q40-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q40-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  },
  {
    "id": "r41",
    "title": "Biodiversity",
    "category": "Environment",
    "difficulty": "Hard",
    "description": "An academic passage regarding biodiversity with analytical questions.",
    "passage": "Biodiversity is the variability of life on Earth. It can be measured on various levels, for example, genetic variability, species diversity, ecosystem diversity and phylogenetic diversity. Diversity is not distributed evenly on Earth\u2014it is greater in the tropics as a result of the warm climate and high primary productivity in the region near the equator. Tropical forest ecosystems cover less than one-fifth of Earth's terrestrial area and contain about 50% of the world's species. There are latitudinal gradients in species diversity for both marine and terrestrial taxa. Since life began on Earth, six major mass extinctions and several minor events have led to large and sudden drops in biodiversity. The Phanerozoic aeon (the last 540 million years) marked a rapid growth in biodiversity via the Cambrian explosion. In this period, the majority of multicellular phyla first appeared. The next 400 million years included repeated, massive biodiversity losses. Those events have been classified as mass extinction events. In the Carboniferous, rainforest collapse may have led to a great loss of plant and animal life. The Permian\u2013Triassic extinction event, 251 million years ago, was the worst; vertebrate recovery took 30 million years. Human activities have led to an ongoing biodiversity loss and an accompanying loss of genetic diversity. This process is often referred to as Holocene extinction, or the sixth mass extinction. For example, it was estimated in 2007 that up to 30% of all species will be extinct by 2050. Destroying habitats for farming is a key reason why biodiversity is decreasing today. Climate change also plays a role. This can be seen for example in the effects of climate change on biomes. This anthropogenic extinction may have started toward the end of the Pleistocene, as some studies suggest that the megafaunal extinction event that took place around the end of the last ice age partly resulted from overhunting. Biologists most often define biodiversity as the \"totality of genes, species and ecosystems of a region\". An advantage of this definition is that it presents a unified view of the traditional types of biological variety previously identified: taxonomic diversity (usually measured at the species diversity level) ecological diversity (often viewed from the perspective of ecosystem diversity) morphological diversity (which stems from genetic diversity and molecular diversity) functional diversity (which is a measure of the number of functionally disparate species within a population (e.g. different feeding mechanisms, different motility, predator vs prey, etc.)) Biodiversity is most commonly used to replace the more clearly-defined and long-established terms, species diversity and species richness. However, there is no concrete definition for biodiversity, as its definition continues to be reimagined and redefined. To give a couple of examples, the Food and Agriculture Organization of the United Nations (FAO) defined biodiversity in 2019 as \"the variability that exists among living organisms (both within and between species) and the ecosystems of which they are part.\" The World Health Organization updated its website's definition of biodiversity to be the \"variability among living organisms from all sources.\" Both these definitions, although broad, give a current understanding of what is meant by the term biodiversity. According to estimates by Mora et al. (2011), there are approximately 8.7 million terrestrial species and 2.2 million oceanic species. The authors note that these estimates are strongest for eukaryotic organisms and likely represent the lower bound of prokaryotic diversity. Other estimates include: 220,000 vascular plants, estimated using the species-area relation method 0.7\u20131 million marine species 10\u201330 million insects; (of some 0.9 million we know today) 5\u201310 million bacteria; 1.5-3 million fungi, estimates based on data from the tropics, long-term non-tropical sites and molecular studies that have revealed cryptic speciation. Some 0.075 million species of fungi had been documented by 2001; 1 million mites The number of microbial species is not reliably known, but the Global Ocean Sampling Expedition dramatically increased the estimates of genetic diversity by identifying an enormous number of new genes from near-surface plankton samples at various marine locations, initially over the 2004\u20132006 period. The findings may eventually cause a significant change in the way science defines species and other taxonomic categories. Since the rate of extinction has increased, many extant species may become extinct before they are described. Not surprisingly, in the Animalia the most studied groups are birds and mammals, whereas fishes and arthropods are the least studied animal groups. During the last century, decreases in biodiversity have been increasingly observed. It was estimated in 2007 that up to 30% of all species will be extinct by 2050. Of these, about one eighth of known plant species are threatened with extinction. Estimates reach as high as 140,000 species per year (based on Species-area theory). This figure indicates unsustainable ecological practices, because few species emerge each year. The rate of species loss is greater now than at any time in human history, with...",
    "questions": [
      {
        "id": "q41-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q41-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q41-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  },
  {
    "id": "r42",
    "title": "Feminism",
    "category": "Society",
    "difficulty": "Hard",
    "description": "An academic passage regarding feminism with analytical questions.",
    "passage": "Feminism is a range of socio-political movements and ideologies that aim to define and establish the political, economic, personal, and social equality of the sexes. Feminism holds the position that modern societies are patriarchal\u2014they prioritize the male point of view\u2014and that women are treated unjustly in these societies. Efforts to change this include fighting against gender stereotypes and improving educational, professional, and interpersonal opportunities and outcomes for women. A person who advocates for feminism is known as a feminist. Originating in late 18th-century Europe, feminist movements have campaigned and continue to campaign for women's rights, including the right to vote, run for public office, work, earn equal pay, own property, receive education, enter into contracts, have equal rights within marriage, and maternity leave. Feminists have also worked to ensure access to contraception, legal abortions, and social integration; and to protect women and girls from sexual assault, sexual harassment, and domestic violence. Changes in female dress standards and acceptable physical activities for women have also been part of feminist movements. Many scholars consider feminist campaigns to be a main force behind major historical societal changes for women's rights, particularly in the West, where they are near-universally credited with achieving women's suffrage, gender-neutral language, reproductive rights for women (including access to contraceptives and abortion), and the right to enter into contracts and own property. Although feminist advocacy is, and has been, mainly focused on women's rights, some argue for the inclusion of men's liberation within its aims, because they believe that men are also harmed by traditional gender roles. Feminist theory, which emerged from feminist movements, aims to understand the nature of gender inequality by examining women's social roles and lived experiences. Feminist theorists have developed theories in a variety of disciplines in order to respond to issues concerning gender. Numerous feminist movements and ideologies have developed over the years, representing different viewpoints and political aims. Traditionally, since the 19th century, first-wave liberal feminism, which sought political and legal equality through reforms within a liberal democratic framework, was contrasted with labour-based proletarian women's movements that over time developed into socialist and Marxist feminism based on class struggle theory. Since the 1960s, both of these traditions are also contrasted with the radical feminism that arose from the radical wing of second-wave feminism and that calls for a radical reordering of society to eliminate patriarchy. Liberal, socialist, and radical feminism are sometimes referred to as the \"Big Three\" schools of feminist thought. Modern feminist activism, scholarship, and policy tend to define contemporary feminism as a movement grounded in human rights, solidarity, and intersectionality; for example UN Women emphasized in 2024 that \"the feminist goals of intersectional justice and gender equality can only be achieved if all women and all LGBTIQ+ people are included as part of a broad, intersectional feminist movement rooted in the universality and indivisibility of human rights,\" while a group of 28 Nordic feminist studies departments, academic journals and feminist organizations in 2025 defined feminism as \"a universal human rights movement built on solidarity, intersectionality, and compassion.\" Since the late 20th century, many newer forms of feminism have emerged. Some forms, such as white feminism and gender-critical feminism, have been criticized as taking into account only white, middle class, college-educated, heterosexual, or cisgender perspectives. These criticisms have led to the creation of ethnically specific or multicultural forms of feminism, such as black feminism and intersectional feminism. Mary Wollstonecraft is seen by many as a founder of feminism due to her 1792 book titled A Vindication of the Rights of Woman in which she argues that class and private property are the basis of discrimination against women, and that women as much as men needed equal rights. Charles Fourier, a utopian socialist and French philosopher, is credited with having coined the word \"f\u00e9minisme\" in 1837, but no trace of the word have been found in his works. The word \"f\u00e9minisme\" (\"feminism\") first appeared in France in 1871 in a medicine thesis about men suffering from tuberculosis and having developed, according to the author Ferdinand-Val\u00e8re Faneau de la Cour, feminine traits. The word \"f\u00e9ministe\" (\"feminist\"), inspired by its medical use, was coined by Alexandre Dumas fils in a 1872 essay, referring to men who supported women rights. In both cases, the use of the word was very negative and reflected a criticism of a so-called \"confusion of the sexes\" by women who refused to abide by the sexual division of society and challenged the inequalities between sexes. The concepts appeared in the Netherlands in 1872, Great Britain in the 1890s, and the United States in 1910. The Oxford English Dictionary dates the first appearance in English in this meaning back to 1895. Depending on the historical moment, culture and country, feminists around the world have had different causes and goals. Most western feminist...",
    "questions": [
      {
        "id": "q42-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q42-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q42-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  },
  {
    "id": "r43",
    "title": "Standard Model",
    "category": "Science",
    "difficulty": "Hard",
    "description": "An academic passage regarding standard model with analytical questions.",
    "passage": "The Standard Model of particle physics is the theory describing three of the four known fundamental forces (electromagnetic, weak and strong interactions \u2013 excluding gravity) in the universe and classifying all known elementary particles. It was developed in stages throughout the latter half of the 20th century, through the work of many scientists worldwide, with the current formulation being finalized in the mid-1970s upon experimental confirmation of the existence of quarks. Since then, proof of the top quark (1995), the tau neutrino (2000), and the Higgs boson (2012) have added further credence to the Standard Model. In addition, the Standard Model has predicted with great accuracy the various properties of weak neutral currents and the W and Z bosons. Although the Standard Model is believed to be theoretically self-consistent and has demonstrated some success in providing experimental predictions, it leaves some physical phenomena unexplained and so falls short of being a complete theory of fundamental interactions. For example, it does not fully explain why there is more matter than anti-matter, incorporate the full theory of gravitation as described by general relativity, or account for the universe's accelerating expansion as possibly described by dark energy. The model does not contain any viable dark matter particle that possesses all of the required properties deduced from observational cosmology. The Standard Model without modifications also does not incorporate neutrino oscillations and their non-zero masses, but extensions have been proposed that can account for these features. The development of the Standard Model was driven by theoretical and experimental particle physicists alike. The Standard Model is a paradigm of a quantum field theory for theorists, exhibiting a wide range of phenomena, including spontaneous symmetry breaking, anomalies, and non-perturbative behavior. It is used as a basis for building more exotic models that incorporate hypothetical particles, extra dimensions, and elaborate symmetries (such as supersymmetry) to explain experimental results at variance with the Standard Model, such as the existence of dark matter and neutrino oscillations. In 1928, Paul Dirac introduced the Dirac equation, which implied the existence of antimatter. In 1954, Yang Chen-Ning and Robert Mills extended the concept of gauge theory for abelian groups, e.g. quantum electrodynamics, to nonabelian groups to provide an explanation for strong interactions. In 1957, Chien-Shiung Wu demonstrated parity was not conserved in the weak interaction. In 1961, Sheldon Glashow combined the electromagnetic and weak interactions. In 1964, Murray Gell-Mann and George Zweig introduced quarks and that same year Oscar W. Greenberg implicitly introduced color charge of quarks. In 1967 Steven Weinberg and Abdus Salam incorporated the Higgs mechanism into Glashow's electroweak interaction, giving it its modern form. In 1970, Sheldon Glashow, John Iliopoulos, and Luciano Maiani introduced the GIM mechanism, predicting the charm quark. In 1973 Gross and Wilczek and Politzer independently discovered that non-Abelian gauge theories, like the color theory of the strong force, have asymptotic freedom. In 1976, Martin Perl discovered the tau lepton at the SLAC. In 1977, a team led by Leon Lederman at Fermilab discovered the bottom quark. The Higgs mechanism is believed to give rise to the masses of all the elementary particles in the Standard Model. This includes the masses of the W and Z bosons, and the masses of the fermions, i.e. the quarks and leptons. After the neutral weak currents caused by Z boson exchange were discovered at CERN in 1973, the electroweak theory became widely accepted and Glashow, Salam, and Weinberg shared the 1979 Nobel Prize in Physics for discovering it. The W\u00b1 and Z0 bosons were discovered experimentally in 1983; and the ratio of their masses was found to be as the Standard Model predicted. The theory of the strong interaction (i.e. quantum chromodynamics, QCD), to which many contributed, acquired its modern form in 1973\u201374 when asymptotic freedom was proposed (a development that made QCD the main focus of theoretical research) and experiments confirmed that the hadrons were composed of fractionally charged quarks. The term \"Standard Model\" was introduced by Abraham Pais and Sam Treiman in 1975, with reference to the electroweak theory with four quarks. Steven Weinberg has since claimed priority, explaining that he chose the term Standard Model out of a sense of modesty and used it in 1973 during a talk in Aix-en-Provence in France. The Standard Model includes members of several classes of elementary particles, which in turn can be distinguished by other characteristics, such as color charge. All particles can be summarized as follows: Notes: [\u2020] An anti-electron (e+) is conventionally called a \"positron\". The Standard Model includes 12 elementary particles of spin \u20601/2\u2060, known as fermions. Fermions respect the Pauli exclusion principle, meaning that two identical fermions cannot simultaneously occupy the same quantum state in the same atom. Each fermion has a corresponding antiparticle, which are particles that have corresponding properties with the exception of opposite...",
    "questions": [
      {
        "id": "q43-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q43-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q43-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  },
  {
    "id": "r44",
    "title": "Machine learning",
    "category": "Technology",
    "difficulty": "Hard",
    "description": "An academic passage regarding machine learning with analytical questions.",
    "passage": "Machine learning (ML) is a field of study in artificial intelligence concerned with the development and study of statistical algorithms that can learn from data and generalize to unseen data, and thus perform tasks without being explicitly programmed. Within a subdiscipline of machine learning, advances in the field of deep learning have allowed neural networks, a class of statistical algorithms, to surpass many previous machine learning approaches in performance. Statistics and mathematical optimisation methods compose the foundations of machine learning. Data mining is a related field of study, focusing on exploratory data analysis (EDA) through unsupervised learning. From a theoretical viewpoint, probably approximately correct learning provides a mathematical and statistical framework for describing machine learning. Most traditional machine learning and deep learning algorithms can be described as empirical risk minimisation under this framework. The term machine learning was coined in 1959 by Arthur Samuel, an IBM employee and pioneer in the field of computer gaming and artificial intelligence. The synonym self-teaching computers was also used during this time period. The earliest machine learning program was introduced in the 1950s, when Samuel invented a computer program that calculated the chance of winning in checkers for each side, but the history of machine learning is rooted in decades of efforts to study human cognitive processes. In 1949, Canadian psychologist Donald Hebb published the book The Organization of Behavior, in which he introduced a theoretical neural structure formed by certain interactions among nerve cells. The Hebbian theory of neuron interaction set the groundwork for how many machine learning algorithms work, with connected artificial neurons changing the strength of their connections based on data. Other researchers who have studied human cognitive systems contributed to the modern machine learning technologies as well, including Walter Pitts and Warren McCulloch, who proposed the first mathematical model of neural networks including algorithms that mirror human thought processes. By the early 1960s, an experimental \"learning machine\" with punched tape memory, called Cybertron, had been developed by Raytheon Company to analyse sonar signals, electrocardiograms, and speech patterns using rudimentary reinforcement learning. It was repetitively \"trained\" by a human operator/teacher to recognise patterns and equipped with a \"goof\" button to cause it to reevaluate incorrect decisions. A representative book on research into machine learning during the 1960s was Nils Nilsson's book \"Learning Machines\", dealing mostly with machine learning for pattern classification. Interest related to pattern recognition continued into the 1970s, as described by Duda and Hart in 1973. In 1981, a report was given on using teaching strategies so that an artificial neural network learns to recognise 40 characters (26 letters, 10 digits, and 4 special symbols) from a computer terminal. Tom M. Mitchell provided a widely quoted, more formal definition of the algorithms studied in the machine learning field: \"A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P if its performance at tasks in T, as measured by P, improves with experience E.\" This definition of the tasks in which machine learning is concerned is fundamentally operational rather than defining the field in cognitive terms. This follows Alan Turing's proposal in his paper \"Computing Machinery and Intelligence\", in which the question, \"Can machines think?\", is replaced by asking whether machines can convincingly imitate a human in its responses to human-posed questions. In 2014 Ian Goodfellow and others introduced generative adversarial networks (GANs) which could produce realistic synthetic data. By 2016 AlphaGo had won against top human players in Go using reinforcement learning techniques. As a scientific endeavour, machine learning grew out of the quest for artificial intelligence (AI). In the early days of AI as an academic discipline, some researchers were interested in having machines learn from data. They attempted to approach the problem with various symbolic methods, as well as what were then termed \"neural networks\"; these were mostly perceptrons and other models that were later found to be reinventions of the generalised linear models of statistics. Probabilistic reasoning was also employed, especially in automated medical diagnosis. However, an increasing emphasis on the logical, knowledge-based approach caused a rift between AI and machine learning. Probabilistic systems were plagued by theoretical and practical problems of data acquisition and representation. By 1980, expert systems had come to dominate AI, and statistics was out of favour. Work on symbolic/knowledge-based learning continued within AI, leading to inductive logic programming (ILP), but the more statistical line of research was now outside the field of AI proper, in pattern recognition and information retrieval. Neural network research was abandoned by AI and computer science around the same time. This subfield, termed \"connectionism\", was continued by researchers from other disciplines, including John Hopfield, David Rumelhart, and Geoffrey Hinton. Their main success came in the mid-1980s with the reinvention of backpropagation. Machine learning (ML), reorganised...",
    "questions": [
      {
        "id": "q44-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q44-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q44-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  },
  {
    "id": "r45",
    "title": "American Civil War",
    "category": "History",
    "difficulty": "Hard",
    "description": "An academic passage regarding american civil war with analytical questions.",
    "passage": "The American Civil War (April 12, 1861 \u2013 May 26, 1865; also known by other names) was a civil war in the United States between the Union (\"the North\") and the Confederacy (\"the South\"), which was formed in 1861 by states that had seceded from the Union to preserve slavery in the United States, which they saw as threatened because of the election of Abraham Lincoln and the growing abolitionist movement in the North. The war lasted a little over four years, ending with Union victory, the dissolution of the Confederacy and the abolition of slavery, freeing four million African Americans. Decades of controversy over slavery came to a head when Abraham Lincoln, a Republican who opposed slavery's expansion, won the 1860 presidential election. Seven Southern slave states responded to Lincoln's victory by seceding from the United States and forming the Confederacy. The Confederacy seized US forts and other federal assets in the South. The war began on April 12, 1861, when the Confederacy bombarded Fort Sumter in South Carolina. A wave of enthusiasm for war swept over the North and South, as military recruitment soared. Four more Southern states seceded after the war began and, led by its president, Jefferson Davis, the Confederacy comprised eleven states, containing a third of the US population. Four years of intense combat, mostly in the South, ensued. During 1861\u20131862 in the western theater, the Union made permanent gains\u2014though in the eastern theater the conflict was inconclusive. The abolition of slavery became a Union war goal on January 1, 1863, when Lincoln issued the Emancipation Proclamation, which declared all slaves in rebel states to be free, applying to more than 3.5 million of the 4 million enslaved people in the country. To the west, the Union first destroyed the Confederacy's river navy by the summer of 1862, then much of its western armies, and seized New Orleans. The successful 1863 Union siege of Vicksburg split the Confederacy in two at the Mississippi River, while Confederate general Robert E. Lee's incursion north failed at the Battle of Gettysburg. General Ulysses S. Grant's western successes led Lincoln to promote him to command of all Union armies in 1864. Inflicting an ever-tightening naval blockade of Confederate ports, the Union marshaled resources and manpower to attack the Confederacy from all directions. This led to the fall of Atlanta in 1864 to Union general William Tecumseh Sherman, followed by his March to the Sea, which culminated in his taking Savannah. The last significant battles raged around the ten-month Siege of Petersburg, gateway to the Confederate capital of Richmond. The Confederates abandoned Richmond, and on April 9, 1865, Lee surrendered to Grant following the Battle of Appomattox Court House, setting in motion the end of the war. Lincoln lived to see this victory but was shot by an assassin on April 14, dying the next day. By the end of the war, much of the South's infrastructure had been destroyed. The Confederacy collapsed, slavery was abolished, and four million enslaved black people were freed. The war-torn nation then entered the Reconstruction era in an attempt to rebuild the country, bring the former Confederate states back into the United States, and grant civil rights to freed slaves. The war is one of the most extensively studied and written about episodes in the history of the United States. It remains the subject of cultural and historiographical debate. Of continuing interest is the myth of the Lost Cause of the Confederacy. The war was among the first to use industrial warfare. Railroads, the electrical telegraph, steamships, the ironclad warship, and mass-produced weapons were widely used. The war left an estimated 700,000 soldiers dead, along with an undetermined number of civilian deaths, making it the deadliest in American history. The technology and brutality of the Civil War foreshadowed the coming world wars. The origins of the war were rooted in the desire of the Southern states to preserve the institution of slavery. Historians in the 21st century overwhelmingly agree on the centrality of slavery in the conflict\u2014at least for the Southern states. They disagree on the North's reasons for refusing to allow the Southern states to secede. The pseudo-historical Lost Cause ideology denies that slavery was the principal cause of the secession, a view disproven by historical evidence, notably some of the seceding states' own secession documents. After leaving the Union, Mississippi issued a declaration stating, \"Our position is thoroughly identified with the institution of slavery\u2014the greatest material interest of the world.\" The principal political battle leading to Southern secession was over whether slavery would expand into the Western territories destined to become states. Initially Congress had admitted new states into the Union in pairs, one slave and one free. This had kept a sectional balance in the Senate but not in the House...",
    "questions": [
      {
        "id": "q45-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q45-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q45-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  },
  {
    "id": "r46",
    "title": "Psychoanalysis",
    "category": "Psychology",
    "difficulty": "Hard",
    "description": "An academic passage regarding psychoanalysis with analytical questions.",
    "passage": "Psychoanalysis is a set of theories and techniques to discover unconscious processes and their influence on conscious thought, emotion and behavior. Based on dream interpretation, psychoanalysis is also a talk therapy method for treating mental disorders. Established in the early 1890s by Sigmund Freud, it takes into account Darwin's theory of evolution, neurology findings, ethnology reports, and, in some respects, the clinical research of his mentor Josef Breuer. Freud developed and refined the theory and practice of psychoanalysis until his death in 1939. In an encyclopedic article, he identified four foundational beliefs: \"the assumption that there are unconscious mental processes, the recognition of the theory of repression and resistance, the appreciation of the importance of sexuality and of the Oedipus complex.\" Two of Freud's early colleagues, Alfred Adler and Carl Jung, soon developed their own methods, individual and analytical psychology, respectively, which he said were not forms of psychoanalysis. After the author's death, neo-Freudian thinkers like Erich Fromm, Karen Horney and Harry Stack Sullivan created some subfields. Jacques Lacan, whose work is often referred to as Return to Freud, described his metapsychology as a technical elaboration of the three-instance model of the psyche and examined the language-like structure of the unconscious. Psychoanalysis has been a controversial discipline from the outset, although its influence on psychology and psychiatry is undisputed. While evidence suggests psychoanalysis, especially long-term psychoanalytic psychotherapy, can be effective for certain disorders, its overall efficacy remains contested. It may have benefits in the long term over other psychotherapies. Psychoanalytic concepts are also widely used outside the therapeutic field, for example in the interpretation of neurological findings, myths and fairy tales, philosophical perspectives such as Freudo-Marxism and in literary criticism. One of Freud's central claims is that the contents of the unconscious largely determine cognition and behavior, describing this as the third insult to mankind. The first was the cosmic discovery by Copernicus that the Earth revolved around the Sun, the second was the biological discovery by Darwin that humans evolved from apes, and the third psychological affront was the discovery by Freud that the narcissistically affected ego was not even master of its own home. Freud found that many of the drives are repressed into the unconscious, which the structural model locates in the 'id', as a result of traumatic experiences during childhood. Attempts to integrate them into the conscious perception of the ego triggers resistance. The individual 'wants' to maintain the repression through defense mechanisms\u2014including censorship, internalized fear of punishment or mother-love withdrawal\u2014while the affected instincts resist. An inner war rages between the id and the ego's conscious values, which manifests as more or less conspicuous mental disorders. Importantly, Freud did not equate the most common behavior as 'healthy'. \"Health can only be described in metapsychological terms\" (assessment of each psychic process according to the coordinates of biological drive economy, dynamics and topology). He discovered that the instinctive impulses are expressed most clearly in the symbols of dreams and in the symptomatic detours of neuroticism and Freudian slips. Psychoanalysis was developed in order to clarify the causes of disorders and to restore mental health by enabling the ego to become aware of the id's needs and to find realistic, self-controlled ways to satisfy them. Freud summarized this goal of his therapy in the demand \"Where id was, ego shall became\", defining the underlying libido as driving energy of all innate needs and equating it with the Eros (universal desire) of Platonic philosophy. Freud attached great importance to coherence of his structural model. The metapsychological specification of the functions and interlocking of the three instances was intended to ensure the full connectivity of this 'psychic apparatus' with biological sciences, in particular Darwin's theory of evolution of species, including mankind with his natural behavior, thinking ability and technological creativity. Such a model of health is indispensable for the diagnostic process (sickness can only be realized as a deviation from the optimal cooperation of all mental-organic functions), but Freud had to be modest. He came to the conclusion that he had to leave his metapsychological-based model of the soul in the unfinished state of a torso because \u2013 as he stated one last time in Moses and Monotheism \u2013 there was no well-founded primate research in the first half of 20th century. Without knowledge of the instinctively formed group structure of our genetically closest relatives in animal kingdom (instead of Freud's single 'super-strong primal father', they show highly social male teams, but despite their remarkable intelligence still no ability to form political inter-group organizations), his thesis of the Darwinian primordial horde as presented for discussion in Totem and Taboo cannot be tested and, where necessary, replaced by a realistic model. Darwin's horde life and its abolition through the introduction of monogamy (as a political agreement between the sons who murdered the...",
    "questions": [
      {
        "id": "q46-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q46-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q46-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  },
  {
    "id": "r47",
    "title": "Ozone depletion",
    "category": "Environment",
    "difficulty": "Hard",
    "description": "An academic passage regarding ozone depletion with analytical questions.",
    "passage": "Ozone depletion consists of two related events observed since the late 1970s: a lowered total amount of ozone in Earth's upper atmosphere, and a much larger springtime decrease in stratospheric ozone (the ozone layer) around Earth's polar regions. The latter phenomenon is referred to as the ozone hole. There are also springtime polar tropospheric ozone depletion events in addition to these stratospheric events. The main causes of ozone depletion and the ozone hole are manufactured chemicals, especially manufactured halocarbon refrigerants, solvents, propellants, and foam-blowing agents (chlorofluorocarbons (CFCs), HCFCs, halons), referred to as ozone-depleting substances (ODS). These compounds are transported into the stratosphere by turbulent mixing after being emitted from the surface, mixing much faster than the molecules can settle. Once in the stratosphere, they release atoms from the halogen group through photodissociation, which catalyze the breakdown of ozone (O3) into oxygen (O2). Both types of ozone depletion were observed to increase as emissions of halocarbons increased. Ozone depletion and the ozone hole have generated worldwide concern over increased cancer risks and other negative effects. The ozone layer prevents harmful wavelengths of ultraviolet (UVB) light from passing through the Earth's atmosphere. These wavelengths cause skin cancer, sunburn, permanent blindness, and cataracts, which were projected to increase dramatically as a result of thinning ozone, as well as harming plants and animals. These concerns led to the adoption of the Montreal Protocol in 1987, which bans the production of CFCs, halons, and other ozone-depleting chemicals. Over time, scientists have developed new refrigerants with lower global warming potential (GWP) to replace older ones. For example, in new automobiles, R-1234yf systems are now common, being chosen over refrigerants with much higher GWP such as R-134a and R-12. The ban came into effect in 1989. Ozone levels stabilized by the mid-1990s and began to recover in the 2000s, as the shifting of the jet stream in the Southern Hemisphere towards the South Pole has stopped and might even be reversing. Recovery was projected to continue over the next century, with the ozone hole expected to reach pre-1980 levels by around 2075. In 2019, NASA reported that the ozone hole was the smallest ever since it was first discovered in 1982. The UN now projects that under the current regulations the ozone layer will completely regenerate by 2045. The Montreal Protocol is considered the most successful international environmental agreement to date. Three forms (or allotropes) of oxygen are involved in the ozone-oxygen cycle: oxygen atoms (O or atomic oxygen), oxygen gas (O2 or diatomic oxygen), and ozone gas (O3 or triatomic oxygen). Ozone is formed in the stratosphere when oxygen gas molecules photodissociate after absorbing UVC photons. This converts a single O2 into two atomic oxygen radicals. The atomic oxygen radicals then combine with separate O2 molecules to create two O3 molecules. These ozone molecules absorb UVB light, following which ozone splits into a molecule of O2 and an oxygen atom. The oxygen atom then joins up with an oxygen molecule to regenerate ozone. This is a continuing process that terminates when an oxygen atom recombines with an ozone molecule to make two O2 molecules. It is worth noting that ozone is the only atmospheric gas that absorbs UVB light. O + O3 \u2192 2 O2 The total amount of ozone in the stratosphere is determined by a balance between photochemical production and recombination. Ozone can be destroyed by a number of free radical catalysts; the most important are the hydroxyl radical (OH\u00b7), nitric oxide radical (NO\u00b7), chlorine radical (Cl\u00b7) and bromine radical (Br\u00b7). The dot is a notation to indicate that each species has an unpaired electron and is thus extremely reactive. The effectiveness of different halogens and pseudohalogens as catalysts for ozone destruction varies, in part due to differing routes to regenerate the original radical after reacting with ozone or dioxygen. While all of the relevant radicals have both natural and man-made sources, human activity has impacted some more than others. As of 2020, most of the OH\u00b7 and NO\u00b7 in the stratosphere is naturally occurring, but human activity has drastically increased the levels of chlorine and bromine. These elements are found in stable organic compounds, especially chlorofluorocarbons, which can travel to the stratosphere without being destroyed in the troposphere due to their low reactivity. Once in the stratosphere, the Cl and Br atoms are released from the parent compounds by the action of ultraviolet light, e.g. CFCl3 + electromagnetic radiation \u2192 Cl\u00b7 + \u00b7CFCl2 Ozone is a highly reactive molecule that easily reduces to the more stable oxygen form with the assistance of a catalyst. Cl and Br atoms destroy ozone molecules through a variety of catalytic cycles. In the simplest example of such a cycle, a chlorine atom reacts with an ozone molecule (O3), taking an oxygen atom to form chlorine monoxide (ClO)...",
    "questions": [
      {
        "id": "q47-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q47-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q47-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  },
  {
    "id": "r48",
    "title": "Democracy",
    "category": "Society",
    "difficulty": "Hard",
    "description": "An academic passage regarding democracy with analytical questions.",
    "passage": "Democracy is a form of government in which political power is vested in the people or the population of a state. Under a minimalist definition of democracy, rulers are elected through competitive elections while more expansive or maximalist definitions link democracy to guarantees of civil liberties and human rights in addition to competitive elections. In a direct democracy, the people have the direct authority to deliberate and decide legislation. In a representative democracy, the people choose governing officials through elections to do so. The definition of \"the people\" and the ways authority is shared among them or delegated by them have changed over time and at varying rates in different countries. Features of democracy often include freedom of assembly, association, personal property, freedom of religion and speech, citizenship, consent of the governed, voting rights, freedom from unwarranted governmental deprivation of the right to life and liberty, and minority rights. The notion of democracy has evolved considerably over time. Throughout history, one can find evidence of direct democracy, in which communities make decisions through popular assembly. Today, the dominant form of democracy is representative democracy, where citizens elect government officials to govern on their behalf such as in a parliamentary or presidential democracy. In the common variant of liberal democracy, the powers of the majority are exercised within the framework of a representative democracy, but a constitution and supreme court limit the majority and protect the minority\u2014usually through securing the enjoyment by all of certain individual rights, such as freedom of speech or freedom of association. The term appeared in the 5th century BC in Greek city-states, notably Classical Athens, to mean \"rule of the people\", in contrast to aristocracy (\u1f00\u03c1\u03b9\u03c3\u03c4\u03bf\u03ba\u03c1\u03b1\u03c4\u03af\u03b1, aristokrat\u00eda), meaning \"rule of an elite\". In virtually all democratic governments throughout ancient and modern history, democratic citizenship was initially restricted to an elite class, which was later extended to all adult citizens. In most modern democracies, this was achieved through the suffrage movements of the 19th and 20th centuries. Democracy contrasts with forms of government where power is not vested in the general population of a state, such as authoritarian systems. Historically a rare and vulnerable form of government, democratic systems of government have become more prevalent since the 19th century, in particular with various waves of democratization. Democracy garners considerable legitimacy in the modern world, as public opinion across regions tends to strongly favor democratic systems of government relative to alternatives, and as even authoritarian states try to present themselves as democratic. Democracy more consistently results in improved health, education and economic outcomes. According to the V-Dem Democracy indices and The Economist Democracy Index, less than half the world's population lives in a democracy as of 2022. At the same time, while representative democracy is widely valued, Pew Research Center found that dissatisfaction with democratic performance is common even in many established democracies. Although democracy is generally understood to be defined by voting, no consensus exists on a precise definition of democracy. Karl Popper says that the \"classical\" view of democracy is, \"in brief, the theory that democracy is the rule of the people and that the people have a right to rule\". One study identified 2,234 adjectives used to describe democracy in the English language. Democratic principles are reflected in all eligible citizens being equal before the law and having equal access to legislative processes. For example, in a representative democracy, every vote has (in theory) equal weight, and the freedom of eligible citizens is secured by legitimised rights and liberties which are typically enshrined in a constitution, while other uses of \"democracy\" may encompass direct democracy, in which citizens vote on issues directly. According to the United Nations, democracy \"provides an environment that respects human rights and fundamental freedoms, and in which the freely expressed will of people is exercised.\" One theory holds that democracy requires three fundamental principles: upward control (sovereignty residing at the lowest levels of authority), political equality, and social norms by which individuals and institutions only consider acceptable acts that reflect the first two principles of upward control and political equality. Legal equality, political freedom and rule of law are often identified by commentators as foundational characteristics for a well-functioning democracy. In some countries, notably in the United Kingdom (which originated the Westminster system), the dominant principle is that of parliamentary sovereignty, while maintaining judicial independence. In India, parliamentary sovereignty is subject to the Constitution of India which includes judicial review. Though the term \"democracy\" is typically used in the context of a political state, the principles also are potentially applicable to private organisations, such as clubs, societies and firms. Democracies may use many different decision-making methods, but majority rule is the dominant form. Without compensation, like legal protections of individual or group rights, political minorities can be oppressed by the \"tyranny...",
    "questions": [
      {
        "id": "q48-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q48-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q48-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  },
  {
    "id": "r49",
    "title": "Dark matter",
    "category": "Science",
    "difficulty": "Hard",
    "description": "An academic passage regarding dark matter with analytical questions.",
    "passage": "In astronomy and cosmology, dark matter is an invisible and hypothetical form of matter that does not interact with electromagnetic radiation, including light. Dark matter is implied by gravitational effects that cannot be explained by general relativity unless more matter is present than can be observed. Such effects occur in the context of formation and evolution of galaxies, gravitational lensing, the observable universe's current structure, mass position in galactic collisions, the motion of galaxies within galaxy clusters, and cosmic microwave background anisotropies. Dark matter is thought to serve as gravitational scaffolding for cosmic structures. After the Big Bang, dark matter clumped into blobs along narrow filaments with superclusters of galaxies forming a cosmic web at scales on which entire galaxies appear like tiny particles. In the standard Lambda-CDM model of cosmology, the mass\u2013energy content of the universe is 5% ordinary matter, 26.8% dark matter, and 68.2% a form of energy known as dark energy. Thus, dark matter constitutes 85% of the total mass, while dark energy and dark matter constitute 95% of the total mass\u2013energy content. While the density of dark matter is significant in the halo around a galaxy, its local density in the Solar System is much less than normal matter. The total of all the dark matter out to the orbit of Neptune would add up about 1017 kg, the same as a large asteroid. Dark matter is classified as \"cold\", \"warm\", or \"hot\" according to velocity (more precisely, its free streaming length). Recent models have favored a cold dark matter scenario, in which structures emerge by the gradual accumulation of particles. Dark matter is not known to interact with ordinary baryonic matter and radiation except through gravity, making it difficult to detect in the laboratory. The most prevalent explanation is that dark matter is some as-yet-undiscovered subatomic particle, such as either weakly interacting massive particles (WIMPs) or axions. The other main possibility is that dark matter is composed of primordial black holes. Although the astrophysics community generally accepts the existence of dark matter, a minority of astrophysicists, intrigued by specific observations that are not well explained by ordinary dark matter, argue for various modifications of the standard laws of general relativity. These include modified Newtonian dynamics (MOND), tensor\u2013vector\u2013scalar gravity, and entropic gravity. So far none of the proposed modified gravity theories can describe every piece of observational evidence at the same time, suggesting that even if gravity has to be modified, some form of dark matter will still be required. The hypothesis of dark matter has an elaborate history. Lord Kelvin discussed the potential number of stars around the Sun in the appendices of a book based on a series of lectures given in 1884 in Baltimore. He inferred their density using the observed velocity dispersion of the stars near the Sun, assuming that the Sun was 20\u2013100 million years old. He posed what would happen if there were a thousand million stars within 1 kiloparsec of the Sun (at which distance their parallax would be 1 milli-arcsecond). Kelvin concluded: \"Many of our supposed thousand million stars \u2014 perhaps a great majority of them \u2014 may be dark bodies.\" In 1906, Henri Poincar\u00e9 used the French term [mati\u00e8re obscure] (\"dark matter\") in discussing Kelvin's work. He concluded that the amount of dark matter would need to be less than that of visible matter, which was later found to be false. The second to suggest the existence of dark matter using stellar velocities was Dutch astronomer Jacobus Kapteyn in 1922. A publication from 1930 by Swedish astronomer Knut Lundmark points to him being the first to hypothesize that the universe must contain much more mass than can be observed. Dutch radio astronomy pioneer Jan Oort also hypothesized the existence of dark matter in 1932. Oort was studying stellar motions in the galactic neighborhood and found the mass in the galactic plane must be greater than what was observed, but this measurement was later determined to be incorrect. In 1933, Swiss astrophysicist Fritz Zwicky studied galaxy clusters while working at Caltech and made a similar inference. Zwicky applied the virial theorem to the Coma Cluster and obtained evidence of unseen mass he called dunkle Materie ('dark matter'). Zwicky estimated its mass based on the motions of galaxies near its edge and compared that to an estimate based on its brightness and number of galaxies. He estimated the cluster had about 400 times more mass than was visually observable. The gravity effect of the visible galaxies was far too small for such fast orbits, thus mass must be hidden from view. Based on these conclusions, Zwicky inferred some unseen matter provided the mass and associated gravitational attraction to hold the cluster together. Zwicky's estimates were off by more than an order of magnitude, mainly due to an obsolete value...",
    "questions": [
      {
        "id": "q49-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q49-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q49-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  },
  {
    "id": "r50",
    "title": "Quantum computing",
    "category": "Technology",
    "difficulty": "Hard",
    "description": "An academic passage regarding quantum computing with analytical questions.",
    "passage": "A quantum computer is a real or theoretical computer that exploits quantum phenomena like superposition and entanglement in an essential way. It is widely believed that a quantum computer could perform some calculations exponentially faster than any classical computer. For example, a large-scale quantum computer could break some widely used encryption schemes and aid physicists in performing physical simulations. However, current hardware implementations of quantum computation are largely experimental and only suitable for specialized tasks. The basic unit of information in quantum computing, the qubit (or \"quantum bit\"), serves the same function as the bit in ordinary or \"classical\" computing. However, unlike a classical bit, which can be in one of two states (a binary), a qubit can exist in a linear combination of two states known as a quantum superposition. The result of measuring a qubit is one of the two states given by a probabilistic rule. If a quantum computer manipulates the qubit in a particular way, wave interference effects amplify the probability of the desired measurement result. The design of quantum algorithms involves creating procedures that allow a quantum computer to perform this amplification. Quantum computers are not yet practical for real-world applications. Physically engineering high-quality qubits has proven to be challenging. If a physical qubit is not sufficiently isolated from its environment, it suffers from quantum decoherence, introducing noise into calculations. National governments have invested heavily in experimental research aimed at developing scalable qubits with longer coherence times and lower error rates. Example implementations include superconductors (which isolate an electrical current by eliminating electrical resistance) and ion traps (which confine a single atomic particle using electromagnetic fields). Researchers have claimed, and are widely believed to be correct, that certain quantum devices can outperform classical computers on narrowly defined tasks, a milestone referred to as quantum advantage or quantum supremacy. These tasks are not necessarily useful for real-world applications. As a result, current demonstrations are best understood as scientific milestones rather than evidence of broad near-term deployment. For many years, the fields of quantum mechanics and computer science formed distinct academic communities. Modern quantum theory was developed in the 1920s to explain perplexing physical phenomena observed at atomic scales, and digital computers emerged in the following decades to replace human computers for tedious calculations. Both disciplines had practical applications during World War II; computers played a major role in wartime cryptography, and quantum physics was essential for nuclear physics used in the Manhattan Project. As physicists applied quantum mechanical models to computational problems and swapped digital bits for qubits, the fields of quantum mechanics and computer science began to converge. In 1980, Paul Benioff introduced the quantum Turing machine, which uses quantum theory to describe a simplified computer. When digital computers became faster, physicists faced an exponential increase in overhead when simulating quantum dynamics, prompting Yuri Manin and Richard Feynman to independently suggest that hardware based on quantum phenomena might be more efficient for computer simulation. In a 1984 paper, Charles Bennett and Gilles Brassard applied quantum theory to cryptography protocols and demonstrated that quantum key distribution could enhance information security. Quantum algorithms then emerged for solving oracle problems, such as Deutsch's algorithm in 1985, the Bernstein\u2013Vazirani algorithm in 1993, and Simon's algorithm in 1994. These algorithms did not solve practical problems, but demonstrated mathematically that one could obtain more information by querying a black box with a quantum state in superposition, sometimes referred to as quantum parallelism. Peter Shor built on these results with his 1994 algorithm for breaking the widely used RSA and Diffie\u2013Hellman encryption protocols, which drew significant attention to the field of quantum computing. In 1996, Grover's algorithm established a quantum speedup for the widely applicable unstructured search problem. The same year, Seth Lloyd proved that quantum computers could simulate quantum systems without the exponential overhead present in classical simulations, validating Feynman's 1982 conjecture. Over the years, experimentalists have constructed small-scale quantum computers using trapped ions and superconductors. In 1998, a two-qubit quantum computer demonstrated the feasibility of the technology, and subsequent experiments have increased the number of qubits and reduced error rates. In 2019, Google AI and NASA announced that they had achieved quantum supremacy with a 54-qubit machine, performing a computation that classical supercomputers would take an estimated 10,000 years to complete\u2014a claim subsequently disputed by IBM, which argued the calculation could be done in approximately 2.5 days on its Summit supercomputer with optimized algorithms, sparking a debate over the precise threshold for this milestone. Recent milestones in quantum computing have increasingly focused on controlling decoherence through quantum error correction. In 2024, researchers demonstrated theoretical and practical approaches for high threshold, low-overhead fault-tolerant quantum memory. These developments represent a critical step toward scaling systems beyond the noisy intermediate-scale quantum (NISQ) era into reliable, fault-tolerant computing architectures, though large-scale physical implementation remains...",
    "questions": [
      {
        "id": "q50-1",
        "type": "mcq",
        "question": "Placeholder MCQ?",
        "options": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": "A",
        "explanation": "This is supported directly by the introductory paragraph."
      },
      {
        "id": "q50-2",
        "type": "tfng",
        "question": "Placeholder TF?",
        "answer": "True",
        "explanation": "The text directly contains this statement."
      },
      {
        "id": "q50-3",
        "type": "fill",
        "question": "Placeholder Fill?",
        "answer": "word",
        "explanation": "This word completes the sentence as presented in the text."
      }
    ]
  }
];