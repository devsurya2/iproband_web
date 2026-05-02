/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Word {
  id: string;
  word: string;
  meaning: string;
  example: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const VOCAB_CATEGORIES = [
  'Daily Use Words',
  'Professional Vocabulary',
  'Meetings & Office',
  'Calls & Communication',
  'Journalism Vocabulary',
  'IELTS High-Frequency Words',
  'Phrasal Verbs',
  'Idioms & Expressions'
];

type CategoryConfig = {
  prefix: string;
  definition: string;
  example: (term: string) => string;
  seedTerms: string[];
  left: string[];
  right: string[];
};

const dailySeedTerms = [
  'accept', 'achieve', 'adapt', 'add', 'adjust', 'admire', 'advise', 'afford', 'agree', 'allow',
  'answer', 'apologize', 'appear', 'apply', 'arrange', 'arrive', 'ask', 'avoid', 'bake', 'balance',
  'believe', 'borrow', 'bring', 'build', 'buy', 'calculate', 'call', 'carry', 'catch', 'celebrate',
  'change', 'check', 'choose', 'clean', 'close', 'collect', 'compare', 'complain', 'complete', 'connect',
  'consider', 'continue', 'cook', 'copy', 'correct', 'count', 'create', 'decide', 'decorate', 'deliver',
  'describe', 'develop', 'discuss', 'discover', 'divide', 'drive', 'drop', 'earn', 'eat', 'encourage',
  'enjoy', 'explain', 'explore', 'finish', 'fix', 'follow', 'forget', 'forgive', 'gather', 'guess',
  'handle', 'help', 'hide', 'hope', 'imagine', 'improve', 'include', 'invite', 'join', 'keep',
  'learn', 'lend', 'listen', 'manage', 'measure', 'mention', 'miss', 'move', 'notice', 'offer',
  'open', 'organize', 'pack', 'pause', 'plan', 'prepare', 'promise', 'protect', 'provide', 'receive',
  'remember', 'remind', 'repair', 'repeat', 'reply', 'request', 'return', 'save', 'search', 'select',
  'share', 'shop', 'solve', 'spend', 'start', 'suggest', 'support', 'travel', 'understand', 'visit',
  'wait', 'wake', 'walk', 'wash', 'watch', 'wear', 'welcome', 'wonder', 'worry', 'write',
  'address', 'appointment', 'bag', 'bill', 'breakfast', 'budget', 'calendar', 'choice', 'clothes', 'coffee',
  'conversation', 'delivery', 'direction', 'discount', 'document', 'email', 'expense', 'family', 'favor', 'feedback',
  'friendship', 'grocery', 'habit', 'health', 'holiday', 'homework', 'journey', 'kitchen', 'laundry', 'message',
  'neighbor', 'notebook', 'payment', 'phone', 'receipt', 'recipe', 'reminder', 'schedule', 'shortcut', 'traffic',
  'weather', 'weekend', 'available', 'careful', 'comfortable', 'common', 'convenient', 'different', 'early', 'easy',
  'familiar', 'fresh', 'friendly', 'important', 'local', 'necessary', 'patient', 'polite', 'possible', 'ready'
];

const professionalSeedTerms = [
  'accountability', 'acquisition', 'alignment', 'analytics', 'benchmark', 'briefing', 'budgeting', 'capacity',
  'collaboration', 'compliance', 'consultation', 'coordination', 'deliverable', 'efficiency', 'engagement', 'execution',
  'forecast', 'framework', 'implementation', 'initiative', 'innovation', 'insight', 'integration', 'investment',
  'leadership', 'leverage', 'milestone', 'negotiation', 'objective', 'optimization', 'partnership', 'performance',
  'pipeline', 'portfolio', 'prioritization', 'proposal', 'revenue', 'roadmap', 'scalability', 'strategy',
  'stakeholder', 'sustainability', 'timeline', 'workflow', 'workforce', 'productivity', 'profitability', 'procurement',
  'onboarding', 'retention', 'delegation', 'escalation', 'governance', 'automation', 'segmentation', 'positioning',
  'conversion', 'distribution', 'documentation', 'evaluation', 'feasibility', 'projection', 'requirement', 'resource',
  'specification', 'transparency', 'validation', 'visibility', 'workload', 'benchmarking', 'clientele', 'competency',
  'contingency', 'dashboard', 'deployment', 'infrastructure', 'licensing', 'merger', 'outsourcing', 'quotation'
];

const meetingSeedTerms = [
  'agenda', 'action item', 'attendance', 'briefing', 'brainstorm', 'breakout session', 'chairperson', 'check-in',
  'consensus', 'deadline', 'decision log', 'discussion', 'follow-up', 'icebreaker', 'key takeaway', 'meeting minutes',
  'motion', 'objective', 'open item', 'parking lot', 'participant', 'priority', 'proposal', 'quorum',
  'recap', 'resolution', 'roundtable', 'schedule', 'stakeholder update', 'status report', 'talking point', 'timekeeper',
  'vote', 'workshop', 'wrap-up', 'availability', 'booking', 'conference room', 'desk', 'extension',
  'floor plan', 'front desk', 'hot desk', 'mailroom', 'office supplies', 'printer', 'reception', 'shared calendar',
  'whiteboard', 'workspace', 'approval note', 'attendance sheet', 'conference bridge', 'decision owner', 'meeting invite',
  'project update', 'review session', 'team huddle', 'weekly sync', 'working lunch'
];

const communicationSeedTerms = [
  'acknowledge', 'callback', 'call waiting', 'clarify', 'confirmation', 'connection', 'courtesy', 'dial tone',
  'direct message', 'extension number', 'feedback loop', 'follow-up email', 'greeting', 'hold music', 'inbox',
  'interruption', 'missed call', 'mute', 'notification', 'out of office', 'phone tag', 'recipient',
  'reply all', 'ringtone', 'screen share', 'signal', 'speakerphone', 'summary', 'text message', 'voicemail',
  'webinar', 'attachment', 'bcc', 'cc', 'chat thread', 'contact list', 'delivery report', 'draft',
  'emoji', 'forward', 'inquiry', 'memo', 'newsletter', 'pitch', 'salutation', 'signature',
  'subject line', 'thread', 'transcript', 'urgent message', 'video call', 'voice note', 'broadcast', 'caption',
  'handset', 'landline', 'microphone', 'pause', 'reception', 'roaming'
];

const journalismSeedTerms = [
  'angle', 'article', 'attribution', 'beat', 'brief', 'broadcast', 'byline', 'caption', 'circulation', 'column',
  'commentary', 'correspondent', 'coverage', 'dateline', 'deadline', 'editorial', 'exclusive', 'fact-check',
  'feature', 'headline', 'interview', 'investigation', 'lead paragraph', 'leak', 'masthead', 'newsroom',
  'op-ed', 'press release', 'profile', 'quote', 'retraction', 'source', 'scoop', 'syndication',
  'tabloid', 'wire service', 'breaking news', 'copy editor', 'front page', 'human-interest story', 'media outlet',
  'news agency', 'press briefing', 'public record', 'review', 'sidebar', 'sound bite', 'subheading',
  'viral story', 'watchdog', 'anonymous source', 'backgrounder', 'editorial board', 'embedded reporter',
  'freelancer', 'investigative desk', 'photo essay', 'press corps'
];

const ieltsSeedTerms = [
  'abstract', 'accurate', 'adequate', 'advantage', 'alternative', 'analysis', 'approach', 'assessment', 'assumption',
  'benefit', 'category', 'challenge', 'circumstance', 'comparison', 'complex', 'consequence', 'consistent',
  'context', 'contrast', 'criterion', 'data', 'debate', 'decline', 'definition', 'demonstrate', 'derive',
  'development', 'dimension', 'distinct', 'distribution', 'economic', 'emphasis', 'evidence', 'factor',
  'feature', 'function', 'fundamental', 'global', 'hypothesis', 'impact', 'implication', 'income',
  'indicate', 'individual', 'interpretation', 'issue', 'method', 'negative', 'objective', 'outcome',
  'overall', 'percentage', 'period', 'policy', 'positive', 'principle', 'process', 'proportion',
  'range', 'region', 'research', 'response', 'role', 'sector', 'significant', 'similar',
  'source', 'specific', 'structure', 'substantial', 'survey', 'trend', 'variable', 'whereas'
];

const phrasalSeedTerms = [
  'ask around', 'back away', 'back down', 'back up', 'break down', 'break in', 'break out', 'bring back',
  'bring up', 'call back', 'call off', 'calm down', 'carry on', 'catch up', 'check in', 'check out',
  'come across', 'come back', 'come in', 'come over', 'cut down', 'drop by', 'drop off', 'end up',
  'fall apart', 'figure out', 'fill in', 'find out', 'get along', 'get around', 'get back', 'get by',
  'get over', 'give back', 'give in', 'give up', 'go ahead', 'go over', 'grow up', 'hand in',
  'hang out', 'hold on', 'keep up', 'leave out', 'look after', 'look for', 'look into', 'look up',
  'make up', 'move on', 'pick up', 'point out', 'put off', 'put on', 'run into', 'run out',
  'set up', 'show up', 'sort out', 'take off', 'take over', 'turn down', 'turn up', 'work out'
];

const idiomSeedTerms = [
  'a blessing in disguise', 'a drop in the ocean', 'a fresh start', 'a long shot', 'a piece of cake',
  'against the clock', 'all ears', 'around the corner', 'back to square one', 'beat around the bush',
  'better late than never', 'bite the bullet', 'break the ice', 'by the book', 'call it a day',
  'cost an arm and a leg', 'cut corners', 'down to earth', 'easier said than done', 'every now and then',
  'face the music', 'from scratch', 'get the ball rolling', 'give it a shot', 'go the extra mile',
  'hang in there', 'hit the nail on the head', 'in hot water', 'in the long run', 'keep an eye on',
  'keep your chin up', 'learn the ropes', 'make ends meet', 'miss the boat', 'no strings attached',
  'on the same page', 'once in a blue moon', 'out of the blue', 'play it safe', 'pull your weight',
  'raise the bar', 'see eye to eye', 'sit on the fence', 'spill the beans', 'take it easy',
  'the last straw', 'think outside the box', 'under the weather', 'up in the air', 'worth a try'
];

const configs: CategoryConfig[] = [
  {
    prefix: 'd',
    definition: 'A common everyday word used in real-life conversation',
    example: term => `I often use "${term}" in daily conversation.`,
    seedTerms: dailySeedTerms,
    left: ['daily', 'morning', 'evening', 'family', 'home', 'personal', 'local', 'weekly', 'simple', 'regular', 'quick', 'friendly', 'healthy', 'basic', 'useful', 'urgent', 'careful', 'common', 'easy', 'shared'],
    right: ['routine', 'errand', 'request', 'reminder', 'choice', 'habit', 'task', 'plan', 'visit', 'message', 'budget', 'meal', 'ride', 'appointment', 'favor', 'answer', 'problem', 'question', 'schedule', 'update', 'payment', 'receipt', 'delivery', 'address', 'conversation']
  },
  {
    prefix: 'p',
    definition: 'A workplace term often used in professional situations',
    example: term => `The team discussed "${term}" during the project review.`,
    seedTerms: professionalSeedTerms,
    left: ['business', 'client', 'market', 'sales', 'project', 'team', 'product', 'service', 'growth', 'risk', 'quality', 'customer', 'digital', 'annual', 'quarterly', 'strategic', 'operational', 'financial', 'technical', 'executive'],
    right: ['analysis', 'strategy', 'report', 'review', 'planning', 'delivery', 'metric', 'target', 'brief', 'proposal', 'workflow', 'dashboard', 'forecast', 'audit', 'roadmap', 'initiative', 'priority', 'budget', 'performance', 'requirement', 'process', 'timeline', 'contract', 'resource', 'outcome']
  },
  {
    prefix: 'm',
    definition: 'A meeting or office term used for workplace coordination',
    example: term => `Please add "${term}" to the office update.`,
    seedTerms: meetingSeedTerms,
    left: ['meeting', 'office', 'team', 'weekly', 'monthly', 'project', 'planning', 'review', 'client', 'department', 'status', 'budget', 'strategy', 'training', 'board', 'staff', 'remote', 'hybrid', 'calendar', 'workspace'],
    right: ['agenda', 'minutes', 'invite', 'room', 'slot', 'note', 'recap', 'decision', 'action', 'owner', 'summary', 'update', 'briefing', 'session', 'huddle', 'workshop', 'discussion', 'approval', 'deadline', 'priority', 'follow-up', 'document', 'schedule', 'poll', 'checklist']
  },
  {
    prefix: 'c',
    definition: 'A communication term used in calls, chats, and messages',
    example: term => `Use "${term}" clearly when communicating with others.`,
    seedTerms: communicationSeedTerms,
    left: ['phone', 'video', 'email', 'chat', 'voice', 'text', 'customer', 'support', 'quick', 'clear', 'follow-up', 'urgent', 'formal', 'friendly', 'group', 'private', 'remote', 'online', 'missed', 'incoming'],
    right: ['call', 'reply', 'message', 'note', 'thread', 'summary', 'request', 'response', 'update', 'reminder', 'confirmation', 'question', 'answer', 'attachment', 'transcript', 'notification', 'invite', 'brief', 'signal', 'connection', 'recording', 'caption', 'contact', 'greeting', 'signature']
  },
  {
    prefix: 'j',
    definition: 'A journalism term used in news writing and media work',
    example: term => `The reporter used "${term}" while preparing the story.`,
    seedTerms: journalismSeedTerms,
    left: ['news', 'media', 'press', 'editorial', 'public', 'local', 'national', 'global', 'daily', 'digital', 'breaking', 'investigative', 'political', 'business', 'sports', 'culture', 'science', 'photo', 'video', 'live'],
    right: ['report', 'story', 'headline', 'source', 'interview', 'briefing', 'coverage', 'column', 'feature', 'analysis', 'update', 'article', 'caption', 'quote', 'lead', 'angle', 'profile', 'review', 'editor', 'desk', 'agency', 'bulletin', 'archive', 'newsletter', 'broadcast']
  },
  {
    prefix: 'i',
    definition: 'A high-frequency academic word useful for IELTS speaking and writing',
    example: term => `IELTS candidates can use "${term}" in formal answers.`,
    seedTerms: ieltsSeedTerms,
    left: ['academic', 'social', 'economic', 'environmental', 'cultural', 'global', 'local', 'major', 'minor', 'positive', 'negative', 'significant', 'general', 'specific', 'public', 'private', 'long-term', 'short-term', 'primary', 'overall'],
    right: ['factor', 'issue', 'trend', 'impact', 'benefit', 'challenge', 'solution', 'argument', 'evidence', 'example', 'policy', 'approach', 'method', 'result', 'outcome', 'effect', 'difference', 'increase', 'decline', 'comparison', 'analysis', 'reason', 'response', 'context', 'development']
  },
  {
    prefix: 'pv',
    definition: 'A practical phrasal verb used in everyday English',
    example: term => `Try to use "${term}" naturally in a sentence.`,
    seedTerms: phrasalSeedTerms,
    left: ['add', 'back', 'break', 'bring', 'call', 'carry', 'check', 'clean', 'come', 'cut', 'drop', 'fill', 'find', 'get', 'give', 'go', 'hand', 'keep', 'leave', 'look', 'make', 'move', 'pick', 'put', 'run', 'set', 'show', 'sort', 'take', 'turn', 'work', 'write'],
    right: ['about', 'across', 'ahead', 'along', 'around', 'away', 'back', 'by', 'down', 'for', 'in', 'into', 'off', 'on', 'out', 'over', 'through', 'together', 'up', 'with']
  },
  {
    prefix: 'id',
    definition: 'A common idiom or expression used in natural English',
    example: term => `People may say "${term}" in informal conversation.`,
    seedTerms: idiomSeedTerms,
    left: ['a matter of', 'a sign of', 'a touch of', 'ahead of', 'back in', 'close to', 'down in', 'far from', 'full of', 'in a bit of', 'in search of', 'in the middle of', 'on top of', 'out of', 'right on', 'short of', 'the heart of', 'the point of', 'under a cloud of', 'up for'],
    right: ['time', 'luck', 'trouble', 'practice', 'pressure', 'control', 'shape', 'reach', 'balance', 'focus', 'doubt', 'hope', 'steam', 'patience', 'energy', 'ideas', 'answers', 'change', 'progress', 'attention', 'confidence', 'comfort', 'surprise', 'success', 'support']
  }
];

const difficultyFor = (index: number): Word['difficulty'] => {
  if (index % 5 === 0) return 'hard';
  if (index % 2 === 0) return 'medium';
  return 'easy';
};

const makeUniqueTerms = ({ seedTerms, left, right }: CategoryConfig) => {
  const terms = new Set(seedTerms);

  for (const first of left) {
    for (const second of right) {
      terms.add(`${first} ${second}`);
      if (terms.size >= 500) return Array.from(terms).slice(0, 500);
    }
  }

  return Array.from(terms).slice(0, 500);
};

const dailyVerbSet = new Set(dailySeedTerms.slice(0, 120));
const phrasalVerbMeanings: Record<string, string> = {
  'ask around': 'to ask several people for information or help',
  'back away': 'to move away from someone or something',
  'back down': 'to stop arguing or stop opposing someone',
  'back up': 'to support someone or make an extra copy',
  'break down': 'to stop working or lose emotional control',
  'break in': 'to enter by force or interrupt a conversation',
  'break out': 'to begin suddenly, especially a fire or conflict',
  'bring back': 'to return something or make someone remember something',
  'bring up': 'to mention a topic or raise a child',
  'call back': 'to telephone someone again later',
  'call off': 'to cancel a plan or event',
  'calm down': 'to become less angry, worried, or excited',
  'carry on': 'to continue doing something',
  'catch up': 'to reach the same level as others or talk about recent news',
  'check in': 'to register arrival or contact someone briefly',
  'check out': 'to look at something or leave a hotel',
  'come across': 'to find something by chance or make a particular impression',
  'come back': 'to return',
  'come in': 'to enter',
  'come over': 'to visit someone at their place',
  'cut down': 'to reduce the amount of something',
  'drop by': 'to visit briefly without much planning',
  'drop off': 'to deliver someone or something to a place',
  'end up': 'to finally be in a particular situation',
  'fall apart': 'to break into pieces or fail badly',
  'figure out': 'to understand or solve something',
  'fill in': 'to complete missing information',
  'find out': 'to discover information',
  'get along': 'to have a friendly relationship',
  'get around': 'to travel from place to place or avoid a problem',
  'get back': 'to return or respond later',
  'get by': 'to manage with limited resources',
  'get over': 'to recover from something difficult',
  'give back': 'to return something to its owner',
  'give in': 'to finally agree after resisting',
  'give up': 'to stop trying or stop doing something',
  'go ahead': 'to proceed or start',
  'go over': 'to review something carefully',
  'grow up': 'to become an adult',
  'hand in': 'to submit work or documents',
  'hang out': 'to spend relaxed time with someone',
  'hold on': 'to wait briefly',
  'keep up': 'to continue at the same speed or level',
  'leave out': 'to not include someone or something',
  'look after': 'to take care of someone or something',
  'look for': 'to search for something',
  'look into': 'to investigate something',
  'look up': 'to search for information',
  'make up': 'to invent a story or repair a relationship',
  'move on': 'to continue after finishing or accepting something',
  'pick up': 'to collect, lift, or learn something casually',
  'point out': 'to draw attention to something',
  'put off': 'to delay something',
  'put on': 'to wear something or organize an event',
  'run into': 'to meet someone unexpectedly',
  'run out': 'to have no more of something left',
  'set up': 'to arrange or establish something',
  'show up': 'to arrive or appear',
  'sort out': 'to organize or solve a problem',
  'take off': 'to leave the ground or become successful',
  'take over': 'to gain control or responsibility',
  'turn down': 'to refuse or reduce volume',
  'turn up': 'to arrive or increase volume',
  'work out': 'to exercise or solve something',
};

const idiomMeanings: Record<string, string> = {
  'a blessing in disguise': 'something that seems bad at first but leads to a good result',
  'a drop in the ocean': 'an amount that is too small to make much difference',
  'a fresh start': 'a new beginning after a previous situation',
  'a long shot': 'something unlikely to succeed but still possible',
  'a piece of cake': 'something very easy to do',
  'against the clock': 'trying to finish something before time runs out',
  'all ears': 'fully ready and interested to listen',
  'around the corner': 'happening very soon',
  'back to square one': 'back to the beginning after a failure',
  'beat around the bush': 'avoid saying something directly',
  'better late than never': 'it is better to do something late than not do it',
  'bite the bullet': 'accept a difficult or unpleasant situation bravely',
  'break the ice': 'make people feel more relaxed at the start of a conversation',
  'by the book': 'following the rules exactly',
  'call it a day': 'stop working for the day',
  'cost an arm and a leg': 'be very expensive',
  'cut corners': 'do something cheaply or carelessly to save time or money',
  'down to earth': 'practical, realistic, and friendly',
  'easier said than done': 'more difficult to do than it sounds',
  'every now and then': 'occasionally',
  'face the music': 'accept the consequences of an action',
  'from scratch': 'from the very beginning',
  'get the ball rolling': 'start an activity or process',
  'give it a shot': 'try something',
  'go the extra mile': 'make more effort than expected',
  'hang in there': 'remain patient and keep trying',
  'hit the nail on the head': 'describe exactly what is true or correct',
  'in hot water': 'in trouble',
  'in the long run': 'over a long period of time',
  'keep an eye on': 'watch or monitor something',
  'keep your chin up': 'stay positive during difficulty',
  'learn the ropes': 'learn how to do a job or activity',
  'make ends meet': 'have enough money for basic needs',
  'miss the boat': 'lose an opportunity by being too late',
  'no strings attached': 'with no special conditions or hidden obligations',
  'on the same page': 'sharing the same understanding',
  'once in a blue moon': 'very rarely',
  'out of the blue': 'suddenly and unexpectedly',
  'play it safe': 'avoid risk',
  'pull your weight': 'do your fair share of work',
  'raise the bar': 'set a higher standard',
  'see eye to eye': 'agree with someone',
  'sit on the fence': 'avoid choosing one side',
  'spill the beans': 'reveal secret information',
  'take it easy': 'relax or avoid working too hard',
  'the last straw': 'the final problem that makes a situation unacceptable',
  'think outside the box': 'think creatively',
  'under the weather': 'feeling slightly ill',
  'up in the air': 'uncertain or undecided',
  'worth a try': 'reasonable to attempt',
};

const directMeanings: Record<string, string> = {
  accept: 'to receive, approve, or agree to something',
  achieve: 'to successfully reach a goal or result',
  adapt: 'to change so something works better in a new situation',
  adjust: 'to make a small change to improve fit or accuracy',
  admire: 'to respect or like someone for their qualities',
  advise: 'to give a suggestion about what someone should do',
  afford: 'to have enough money, time, or ability for something',
  apologize: 'to say sorry for a mistake or problem',
  arrange: 'to organize something in advance',
  avoid: 'to stay away from something or prevent it from happening',
  borrow: 'to take and use something temporarily',
  calculate: 'to work out an amount or answer using numbers',
  celebrate: 'to show happiness about a special event',
  compare: 'to look at similarities and differences',
  complain: 'to say that something is wrong or unsatisfactory',
  consider: 'to think carefully before deciding',
  deliver: 'to bring something to a person or place',
  describe: 'to say what someone or something is like',
  discover: 'to find or learn something for the first time',
  encourage: 'to give someone confidence or support',
  explain: 'to make an idea clear and easy to understand',
  forgive: 'to stop being angry about someone’s mistake',
  improve: 'to make something better',
  manage: 'to handle, control, or be responsible for something',
  organize: 'to arrange things in a planned and orderly way',
  prepare: 'to get ready for something',
  protect: 'to keep someone or something safe',
  provide: 'to give something that is needed',
  receive: 'to get something that is sent or given',
  remind: 'to help someone remember something',
  repair: 'to fix something that is broken',
  request: 'to ask for something politely or formally',
  suggest: 'to offer an idea or possible plan',
  understand: 'to know the meaning of something',
  accountability: 'responsibility for actions, decisions, and results',
  acquisition: 'the process of obtaining, buying, or gaining something',
  alignment: 'agreement or correct positioning between plans, people, or goals',
  analytics: 'the study of data to find useful patterns or insights',
  benchmark: 'a standard used to compare performance or quality',
  briefing: 'a short meeting or note that gives important information',
  budgeting: 'the process of planning how money will be spent',
  capacity: 'the amount that something can hold, produce, or manage',
  collaboration: 'working together to complete a task or goal',
  compliance: 'following rules, laws, or requirements',
  consultation: 'a discussion held to get advice or opinions',
  coordination: 'organizing people or tasks so they work well together',
  deliverable: 'a specific piece of work that must be completed',
  efficiency: 'the ability to do something well without wasting time or resources',
  engagement: 'active interest, involvement, or participation',
  execution: 'the act of carrying out a plan',
  forecast: 'a prediction about a future result or trend',
  framework: 'a basic structure used to organize ideas or work',
  implementation: 'the process of putting a plan into action',
  initiative: 'a new plan or action designed to solve a problem',
  innovation: 'a new idea, method, or product',
  insight: 'a clear and useful understanding of something',
  integration: 'combining parts so they work as one system',
  investment: 'money, time, or effort used to gain a future benefit',
  leadership: 'the ability to guide or influence people',
  leverage: 'to use something to gain the greatest advantage',
  milestone: 'an important stage in a project or process',
  negotiation: 'discussion to reach an agreement',
  objective: 'a specific goal or purpose',
  optimization: 'the process of making something as effective as possible',
  partnership: 'a working relationship between people or organizations',
  performance: 'how well someone or something works',
  pipeline: 'a series of planned steps, deals, or tasks',
  portfolio: 'a collection of work, products, or investments',
  prioritization: 'deciding what should be handled first',
  proposal: 'a suggested plan offered for consideration',
  revenue: 'money earned from business activities',
  roadmap: 'a plan showing steps toward a goal',
  scalability: 'the ability to grow or handle more work',
  strategy: 'a plan designed to reach a goal',
  stakeholder: 'a person or group affected by a decision or project',
  sustainability: 'the ability to continue without causing long-term harm',
  timeline: 'a schedule showing when things should happen',
  workflow: 'the sequence of steps used to complete work',
  agenda: 'a list of topics to discuss in a meeting',
  'action item': 'a specific task assigned to someone after a meeting',
  attendance: 'the act or record of being present at a meeting or event',
  minutes: 'written notes recording what happened in a meeting',
  quorum: 'the minimum number of people needed for an official meeting',
  consensus: 'general agreement among a group',
  acknowledge: 'to show that a message, request, or fact has been received',
  acknowledgement: 'a message or action showing something was received or noticed',
  callback: 'a phone call made in response to an earlier call',
  'call waiting': 'a phone feature that alerts you to another incoming call',
  clarify: 'to make something easier to understand',
  confirmation: 'a statement or message that verifies something',
  interruption: 'something that stops a conversation or activity briefly',
  notification: 'a message that alerts someone about something',
  recipient: 'the person who receives a message or item',
  transcript: 'a written record of spoken words',
  voicemail: 'a recorded phone message',
  angle: 'the main perspective or focus of a news story',
  article: 'a written piece published in a newspaper, magazine, or website',
  headline: 'the title of a news story',
  byline: 'the line in an article naming the writer',
  circulation: 'the number of copies distributed or readers reached',
  editorial: 'an article giving an editor’s opinion',
  exclusive: 'a story or interview available from only one source',
  attribution: 'naming the source of information',
  dateline: 'the line showing where and when a news story was written',
  retraction: 'a public correction that withdraws a previous statement',
  syndication: 'sharing content for publication in multiple places',
  abstract: 'general or theoretical rather than concrete',
  accurate: 'correct and precise',
  adequate: 'enough for a particular need',
  alternative: 'another possible choice',
  assumption: 'something accepted as true without full proof',
  circumstance: 'a condition or fact affecting a situation',
  consequence: 'a result or effect of an action',
  consistent: 'staying the same over time',
  criterion: 'a standard used for judging something',
  demonstrate: 'to show clearly with evidence or examples',
  dimension: 'an aspect or feature of a situation',
  fundamental: 'basic and very important',
  hypothesis: 'an idea tested through research or reasoning',
  implication: 'a possible effect or meaning',
  indicate: 'to show or point to something',
  interpretation: 'an explanation of meaning',
  substantial: 'large, important, or considerable',
  variable: 'a factor that can change',
};

const verbExamples: Record<string, string> = {
  accept: 'Please accept the meeting invitation before noon.',
  achieve: 'She worked hard to achieve her language goal.',
  adapt: 'We need to adapt our plan for the new schedule.',
  improve: 'I practice every day to improve my speaking.',
  manage: 'He can manage several tasks at the same time.',
  organize: 'Let’s organize the documents before the meeting.',
  prepare: 'I will prepare dinner after work.',
  protect: 'Use a strong password to protect your account.',
  provide: 'The office will provide the training materials.',
  suggest: 'Can you suggest a better route?',
  acknowledge: 'Please acknowledge the message when you receive it.',
};

const directExamples: Record<string, string> = {
  acknowledge: 'Please acknowledge the email when you receive it.',
  clarify: 'Could you clarify the final point on the call?',
  confirm: 'Please confirm your availability for Friday.',
  callback: 'I requested a callback from customer support.',
  'call waiting': 'Call waiting helped me notice the second incoming call.',
  angle: 'The reporter chose a human-interest angle for the article.',
  article: 'She wrote an article about public transport.',
  attribution: 'The editor checked the attribution before publishing.',
};

const adjectiveTerms = new Set([
  'abstract', 'accurate', 'adequate', 'alternative', 'complex', 'consistent', 'distinct',
  'economic', 'fundamental', 'global', 'negative', 'objective', 'overall', 'positive',
  'primary', 'significant', 'similar', 'specific', 'substantial'
]);

const articleFor = (word: string) => /^[aeiou]/i.test(word) ? 'an' : 'a';

const nounDefinition = (term: string, category: string) => {
  if (directMeanings[term]) return `${term} means ${directMeanings[term]}.`;

  const [modifier, head] = term.split(' ');
  if (!head) {
    if (term.endsWith('tion') || term.endsWith('sion')) return `${term} means the process, action, or result connected with "${term.replace(/(tion|sion)$/, '')}".`;
    if (term.endsWith('ment')) return `${term} means the result, act, or condition connected with "${term.replace(/ment$/, '')}".`;
    if (term.endsWith('ity')) return `${term} means the quality, state, or ability described by "${term}".`;
    if (term.endsWith('ing')) return `${term} means the activity or process of ${term}.`;
    if (category === 'Professional Vocabulary') return `${term} means a specific business concept, role, or measure used at work.`;
    if (category === 'Meetings & Office') return `${term} means an office or meeting item used to organize work.`;
    if (category === 'Calls & Communication') return `${term} means a communication action, signal, or message used to exchange information.`;
    if (category === 'Journalism Vocabulary') return `${term} means a news or media term used to produce, edit, or report information.`;
    if (category === 'IELTS High-Frequency Words') return `${term} means an academic idea commonly used to explain, compare, or evaluate topics.`;
    return `${term} means a practical everyday word used for real situations.`;
  }

  const headDefinitions: Record<string, string> = {
    agenda: 'a list of topics to discuss',
    analysis: 'a careful study of information',
    answer: 'a reply to a question',
    appointment: 'a planned meeting or visit',
    article: 'a written piece for readers',
    attachment: 'a file sent with a message',
    budget: 'a plan for spending money',
    call: 'a phone or video conversation',
    caption: 'short text explaining an image or media item',
    checklist: 'a list used to confirm tasks are complete',
    choice: 'an option selected from several possibilities',
    confirmation: 'a message that verifies something',
    connection: 'a link between people, devices, or ideas',
    conversation: 'an exchange of spoken or written ideas',
    coverage: 'reporting about a topic or event',
    deadline: 'the latest time something should be finished',
    delivery: 'the act of sending or bringing something',
    document: 'a written or digital record',
    evidence: 'facts that support an idea',
    example: 'a specific case used to explain something',
    factor: 'something that influences a result',
    feedback: 'comments about how something can improve',
    forecast: 'a prediction about what may happen',
    greeting: 'words used to welcome or start communication',
    habit: 'something done regularly',
    headline: 'the title of a news story',
    impact: 'a strong effect or influence',
    invite: 'a request for someone to attend',
    issue: 'an important problem or topic',
    message: 'information sent to someone',
    method: 'a way of doing something',
    minutes: 'written notes from a meeting',
    note: 'a short written message',
    outcome: 'the final result',
    payment: 'money given for something',
    plan: 'an arrangement for future action',
    policy: 'a rule or plan used by an organization',
    priority: 'something treated as more important',
    process: 'a series of steps',
    proposal: 'a suggested plan',
    question: 'something asked to get information',
    report: 'an organized account of information',
    request: 'an act of asking for something',
    resource: 'something useful for completing work',
    response: 'a reply or reaction',
    result: 'what happens because of an action',
    review: 'an assessment or examination',
    routine: 'regular actions done repeatedly',
    schedule: 'a plan showing times for activities',
    signature: 'a name or sign-off used to identify someone',
    source: 'where information comes from',
    strategy: 'a plan designed to reach a goal',
    summary: 'a short version of main points',
    target: 'a goal or intended result',
    thread: 'a connected series of messages',
    trend: 'a general direction of change',
    update: 'new information about progress or change',
    workflow: 'the order in which work is completed',
  };

  return `${term} means ${headDefinitions[head] || `${articleFor(head)} ${head} connected with ${modifier}`}, especially in a ${modifier} context.`;
};

const meaningFor = (category: string, term: string) => {
  if (category === 'Phrasal Verbs') {
    return phrasalVerbMeanings[term] || `to ${term}, meaning to use "${term}" as an action in practical spoken English.`;
  }

  if (category === 'Idioms & Expressions') {
    return idiomMeanings[term] || `${term} is an expression used to describe a situation involving ${term.split(' ').slice(-1)[0]}.`;
  }

  if (category === 'Daily Use Words') {
    if (directMeanings[term]) return `${term} means ${directMeanings[term]}.`;
    if (dailyVerbSet.has(term)) return `to ${term}; to do this action in ordinary daily life.`;
    return nounDefinition(term, category);
  }

  return nounDefinition(term, category);
};

const headExamples: Record<string, string> = {
  agenda: 'The {term} was distributed prior to the session.',
  analysis: 'A comprehensive {term} was required to solve the issue.',
  answer: 'We finally received a clear {term}.',
  appointment: 'She booked an {term} for next Tuesday.',
  article: 'I read an insightful {term} about the topic.',
  attachment: 'Please review the {term} I sent earlier.',
  budget: 'The new {term} will help us save money.',
  call: 'We had a brief {term} to confirm the details.',
  caption: 'The {term} provided context for the image.',
  checklist: 'Always review the {term} before finishing the task.',
  choice: 'It was a difficult {term} to make.',
  confirmation: 'We are waiting for {term} from the client.',
  connection: 'The {term} between the two events is obvious.',
  conversation: 'They had a deep {term} about their future plans.',
  coverage: 'The {term} of the event was quite extensive.',
  deadline: 'We have to meet the strict {term}.',
  delivery: 'The {term} was delayed due to bad weather.',
  document: 'He carefully reviewed the {term}.',
  evidence: 'There was enough {term} to prove the theory.',
  example: 'This serves as a prime {term}.',
  factor: 'Time was the deciding {term}.',
  feedback: 'Constructive {term} is always appreciated.',
  forecast: 'The {term} looks promising.',
  greeting: 'A warm {term} started the meeting on a good note.',
  habit: 'It has become a daily {term} for him.',
  headline: 'The morning {term} was shocking.',
  impact: 'The new law had a massive {term}.',
  invite: 'Did you receive the {term} for the event?',
  issue: 'The team quickly resolved the core {term}.',
  message: 'He left an urgent {term} on the desk.',
  method: 'This {term} proved to be very efficient.',
  minutes: 'The {term} were recorded by the secretary.',
  note: 'She wrote a quick {term} to remind herself.',
  outcome: 'We expect a positive {term} from the negotiations.',
  payment: 'The {term} was processed yesterday.',
  plan: 'They devised a solid {term} for the upcoming quarter.',
  policy: 'The company introduced a new {term}.',
  priority: 'Safety is our top {term}.',
  process: 'The whole {term} took about two hours.',
  proposal: 'The board approved the new {term}.',
  question: 'That is an excellent {term} to consider.',
  report: 'The {term} showed significant growth.',
  request: 'They submitted a formal {term} for more resources.',
  resource: 'We must utilize every available {term}.',
  response: 'Her {term} was very professional.',
  result: 'The final {term} exceeded our expectations.',
  review: 'The manager conducted a thorough {term}.',
  routine: 'It is part of my normal {term}.',
  schedule: 'The event went exactly according to the {term}.',
  signature: 'He put his {term} on the contract.',
  source: 'The information came from a reliable {term}.',
  strategy: 'The {term} was highly successful.',
  summary: 'The {term} highlighted all key aspects.',
  target: 'We managed to reach the {term}.',
  thread: 'I followed the entire {term}.',
  trend: 'This {term} is becoming very popular.',
  update: 'She provided a quick {term} on the situation.',
  workflow: 'The new {term} improved our efficiency.',
};

const exampleFor = (category: string, term: string) => {
  if (directExamples[term]) return directExamples[term];

  if (category === 'Phrasal Verbs') return `I need to ${term} before the deadline.`;
  if (category === 'Idioms & Expressions') return `When he said that, it was truly ${term}.`;

  if (category === 'Daily Use Words') {
    if (verbExamples[term]) return verbExamples[term];
    if (dailyVerbSet.has(term)) return `Please make sure to ${term} this correctly.`;
  }

  const parts = term.split(' ');
  const headWord = parts.length > 1 ? parts[parts.length - 1] : parts[0];
  if (headWord && headExamples[headWord]) {
    return headExamples[headWord].replace('{term}', term);
  }

  if (category === 'Daily Use Words') return `I incorporated the ${term} into my schedule.`;
  if (category === 'Professional Vocabulary') return `The team improved its ${term} during the project.`;
  if (category === 'Meetings & Office') return `We discussed the ${term} during the team meeting.`;
  if (category === 'Calls & Communication') return `She handled the ${term} clearly during the call.`;
  if (category === 'Journalism Vocabulary') return `The journalist used the ${term} to make the story clearer.`;
  if (category === 'IELTS High-Frequency Words') {
    return adjectiveTerms.has(term)
      ? `The essay gave ${articleFor(term)} ${term} explanation.`
      : `The essay explained the ${term} with a clear example.`;
  }
  return `You can use the phrase ${term} when speaking naturally.`;
};

const buildCategory = (category: string, config: CategoryConfig): Word[] => {
  return makeUniqueTerms(config).map((term, index) => ({
    id: `${config.prefix}${index + 1}`,
    word: term,
    meaning: meaningFor(category, term),
    example: exampleFor(category, term),
    category,
    difficulty: difficultyFor(index + 1),
  }));
};

export const VOCAB_DATA: Word[] = VOCAB_CATEGORIES.flatMap((category, index) =>
  buildCategory(category, configs[index])
);
