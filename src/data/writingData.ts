/**
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

export const WRITING_DATA: WritingQuestion[] = [
  {
    "id": "e1",
    "category": "Essay Writing",
    "question": "Some people believe that the rise of Artificial Intelligence has significantly altered modern society. Is this a positive or negative development?",
    "wordLimit": 250,
    "instructions": "Include an introduction, two body paragraphs with examples, and a conclusion.",
    "modelAnswer": "The phenomenon of Artificial Intelligence has undoubtedly become a central point of debate in contemporary society. While some argue that its proliferation brings unparalleled benefits, others express profound concern regarding its long-term implications.\n\nOn the one hand, proponents highlight the immense efficiency and connectivity it fosters. For instance, recent studies demonstrate that integrating Artificial Intelligence into daily operations increases productivity by over 30%. Furthermore, it democratizes access to resources that were previously gated.\n\nConversely, detractors point out the severe socio-economic disruptions it causes. A significant drawback is the potential loss of traditional skills and community cohesion. When Artificial Intelligence replaces human interaction or fundamental processes, we risk alienating vulnerable populations.\n\nIn conclusion, while Artificial Intelligence presents formidable challenges, its advantages cannot be ignored. I believe that with stringent regulations and ethical oversight, we can harness its potential while mitigating the risks."
  },
  {
    "id": "e2",
    "category": "Essay Writing",
    "question": "Some people believe that the rise of Universal Basic Income has significantly altered modern society. To what extent do you agree or disagree?",
    "wordLimit": 250,
    "instructions": "Include an introduction, two body paragraphs with examples, and a conclusion.",
    "modelAnswer": "The phenomenon of Universal Basic Income has undoubtedly become a central point of debate in contemporary society. While some argue that its proliferation brings unparalleled benefits, others express profound concern regarding its long-term implications.\n\nOn the one hand, proponents highlight the immense efficiency and connectivity it fosters. For instance, recent studies demonstrate that integrating Universal Basic Income into daily operations increases productivity by over 30%. Furthermore, it democratizes access to resources that were previously gated.\n\nConversely, detractors point out the severe socio-economic disruptions it causes. A significant drawback is the potential loss of traditional skills and community cohesion. When Universal Basic Income replaces human interaction or fundamental processes, we risk alienating vulnerable populations.\n\nIn conclusion, while Universal Basic Income presents formidable challenges, its advantages cannot be ignored. I believe that with stringent regulations and ethical oversight, we can harness its potential while mitigating the risks."
  },
  {
    "id": "e3",
    "category": "Essay Writing",
    "question": "Some people believe that the rise of Remote Work has significantly altered modern society. Discuss both sides and give your opinion.",
    "wordLimit": 250,
    "instructions": "Include an introduction, two body paragraphs with examples, and a conclusion.",
    "modelAnswer": "The phenomenon of Remote Work has undoubtedly become a central point of debate in contemporary society. While some argue that its proliferation brings unparalleled benefits, others express profound concern regarding its long-term implications.\n\nOn the one hand, proponents highlight the immense efficiency and connectivity it fosters. For instance, recent studies demonstrate that integrating Remote Work into daily operations increases productivity by over 30%. Furthermore, it democratizes access to resources that were previously gated.\n\nConversely, detractors point out the severe socio-economic disruptions it causes. A significant drawback is the potential loss of traditional skills and community cohesion. When Remote Work replaces human interaction or fundamental processes, we risk alienating vulnerable populations.\n\nIn conclusion, while Remote Work presents formidable challenges, its advantages cannot be ignored. I believe that with stringent regulations and ethical oversight, we can harness its potential while mitigating the risks."
  },
  {
    "id": "e4",
    "category": "Essay Writing",
    "question": "Some people believe that the rise of Space Exploration has significantly altered modern society. Is this a positive or negative development?",
    "wordLimit": 250,
    "instructions": "Include an introduction, two body paragraphs with examples, and a conclusion.",
    "modelAnswer": "The phenomenon of Space Exploration has undoubtedly become a central point of debate in contemporary society. While some argue that its proliferation brings unparalleled benefits, others express profound concern regarding its long-term implications.\n\nOn the one hand, proponents highlight the immense efficiency and connectivity it fosters. For instance, recent studies demonstrate that integrating Space Exploration into daily operations increases productivity by over 30%. Furthermore, it democratizes access to resources that were previously gated.\n\nConversely, detractors point out the severe socio-economic disruptions it causes. A significant drawback is the potential loss of traditional skills and community cohesion. When Space Exploration replaces human interaction or fundamental processes, we risk alienating vulnerable populations.\n\nIn conclusion, while Space Exploration presents formidable challenges, its advantages cannot be ignored. I believe that with stringent regulations and ethical oversight, we can harness its potential while mitigating the risks."
  },
  {
    "id": "e5",
    "category": "Essay Writing",
    "question": "Some people believe that the rise of Social Media has significantly altered modern society. Discuss both sides and give your opinion.",
    "wordLimit": 250,
    "instructions": "Include an introduction, two body paragraphs with examples, and a conclusion.",
    "modelAnswer": "The phenomenon of Social Media has undoubtedly become a central point of debate in contemporary society. While some argue that its proliferation brings unparalleled benefits, others express profound concern regarding its long-term implications.\n\nOn the one hand, proponents highlight the immense efficiency and connectivity it fosters. For instance, recent studies demonstrate that integrating Social Media into daily operations increases productivity by over 30%. Furthermore, it democratizes access to resources that were previously gated.\n\nConversely, detractors point out the severe socio-economic disruptions it causes. A significant drawback is the potential loss of traditional skills and community cohesion. When Social Media replaces human interaction or fundamental processes, we risk alienating vulnerable populations.\n\nIn conclusion, while Social Media presents formidable challenges, its advantages cannot be ignored. I believe that with stringent regulations and ethical oversight, we can harness its potential while mitigating the risks."
  },
  {
    "id": "e6",
    "category": "Essay Writing",
    "question": "Some people believe that the rise of Fast Fashion has significantly altered modern society. Discuss both sides and give your opinion.",
    "wordLimit": 250,
    "instructions": "Include an introduction, two body paragraphs with examples, and a conclusion.",
    "modelAnswer": "The phenomenon of Fast Fashion has undoubtedly become a central point of debate in contemporary society. While some argue that its proliferation brings unparalleled benefits, others express profound concern regarding its long-term implications.\n\nOn the one hand, proponents highlight the immense efficiency and connectivity it fosters. For instance, recent studies demonstrate that integrating Fast Fashion into daily operations increases productivity by over 30%. Furthermore, it democratizes access to resources that were previously gated.\n\nConversely, detractors point out the severe socio-economic disruptions it causes. A significant drawback is the potential loss of traditional skills and community cohesion. When Fast Fashion replaces human interaction or fundamental processes, we risk alienating vulnerable populations.\n\nIn conclusion, while Fast Fashion presents formidable challenges, its advantages cannot be ignored. I believe that with stringent regulations and ethical oversight, we can harness its potential while mitigating the risks."
  },
  {
    "id": "e7",
    "category": "Essay Writing",
    "question": "Some people believe that the rise of Genetic Engineering has significantly altered modern society. To what extent do you agree or disagree?",
    "wordLimit": 250,
    "instructions": "Include an introduction, two body paragraphs with examples, and a conclusion.",
    "modelAnswer": "The phenomenon of Genetic Engineering has undoubtedly become a central point of debate in contemporary society. While some argue that its proliferation brings unparalleled benefits, others express profound concern regarding its long-term implications.\n\nOn the one hand, proponents highlight the immense efficiency and connectivity it fosters. For instance, recent studies demonstrate that integrating Genetic Engineering into daily operations increases productivity by over 30%. Furthermore, it democratizes access to resources that were previously gated.\n\nConversely, detractors point out the severe socio-economic disruptions it causes. A significant drawback is the potential loss of traditional skills and community cohesion. When Genetic Engineering replaces human interaction or fundamental processes, we risk alienating vulnerable populations.\n\nIn conclusion, while Genetic Engineering presents formidable challenges, its advantages cannot be ignored. I believe that with stringent regulations and ethical oversight, we can harness its potential while mitigating the risks."
  },
  {
    "id": "e8",
    "category": "Essay Writing",
    "question": "Some people believe that the rise of Urbanization has significantly altered modern society. What are the advantages and disadvantages of this?",
    "wordLimit": 250,
    "instructions": "Include an introduction, two body paragraphs with examples, and a conclusion.",
    "modelAnswer": "The phenomenon of Urbanization has undoubtedly become a central point of debate in contemporary society. While some argue that its proliferation brings unparalleled benefits, others express profound concern regarding its long-term implications.\n\nOn the one hand, proponents highlight the immense efficiency and connectivity it fosters. For instance, recent studies demonstrate that integrating Urbanization into daily operations increases productivity by over 30%. Furthermore, it democratizes access to resources that were previously gated.\n\nConversely, detractors point out the severe socio-economic disruptions it causes. A significant drawback is the potential loss of traditional skills and community cohesion. When Urbanization replaces human interaction or fundamental processes, we risk alienating vulnerable populations.\n\nIn conclusion, while Urbanization presents formidable challenges, its advantages cannot be ignored. I believe that with stringent regulations and ethical oversight, we can harness its potential while mitigating the risks."
  },
  {
    "id": "e9",
    "category": "Essay Writing",
    "question": "Some people believe that the rise of Public Transport has significantly altered modern society. Discuss both sides and give your opinion.",
    "wordLimit": 250,
    "instructions": "Include an introduction, two body paragraphs with examples, and a conclusion.",
    "modelAnswer": "The phenomenon of Public Transport has undoubtedly become a central point of debate in contemporary society. While some argue that its proliferation brings unparalleled benefits, others express profound concern regarding its long-term implications.\n\nOn the one hand, proponents highlight the immense efficiency and connectivity it fosters. For instance, recent studies demonstrate that integrating Public Transport into daily operations increases productivity by over 30%. Furthermore, it democratizes access to resources that were previously gated.\n\nConversely, detractors point out the severe socio-economic disruptions it causes. A significant drawback is the potential loss of traditional skills and community cohesion. When Public Transport replaces human interaction or fundamental processes, we risk alienating vulnerable populations.\n\nIn conclusion, while Public Transport presents formidable challenges, its advantages cannot be ignored. I believe that with stringent regulations and ethical oversight, we can harness its potential while mitigating the risks."
  },
  {
    "id": "e10",
    "category": "Essay Writing",
    "question": "Some people believe that the rise of Cryptocurrency has significantly altered modern society. Discuss both sides and give your opinion.",
    "wordLimit": 250,
    "instructions": "Include an introduction, two body paragraphs with examples, and a conclusion.",
    "modelAnswer": "The phenomenon of Cryptocurrency has undoubtedly become a central point of debate in contemporary society. While some argue that its proliferation brings unparalleled benefits, others express profound concern regarding its long-term implications.\n\nOn the one hand, proponents highlight the immense efficiency and connectivity it fosters. For instance, recent studies demonstrate that integrating Cryptocurrency into daily operations increases productivity by over 30%. Furthermore, it democratizes access to resources that were previously gated.\n\nConversely, detractors point out the severe socio-economic disruptions it causes. A significant drawback is the potential loss of traditional skills and community cohesion. When Cryptocurrency replaces human interaction or fundamental processes, we risk alienating vulnerable populations.\n\nIn conclusion, while Cryptocurrency presents formidable challenges, its advantages cannot be ignored. I believe that with stringent regulations and ethical oversight, we can harness its potential while mitigating the risks."
  },
  {
    "id": "l1",
    "category": "Letter Writing",
    "question": "Write a letter to a restaurant manager to complain about terrible service.",
    "wordLimit": 150,
    "instructions": "Ensure your tone is appropriate (formal). Include necessary details and a clear call to action.",
    "modelAnswer": "Dear Sir/Madam,\n\nI am writing to you today regarding the recent situation. I felt it was absolutely necessary to reach out to you to complain about terrible service.\n\nSpecifically, the issue at hand requires careful attention. Over the past few weeks, there have been several instances that prompted this communication. I believe that by addressing this proactively, we can find a mutually beneficial resolution.\n\nI would appreciate it if we could discuss this further at your earliest convenience. Thank you for your time and understanding.\n\nSincerely,\n\nJordan Lee"
  },
  {
    "id": "l2",
    "category": "Letter Writing",
    "question": "Write a letter to a hiring director to apply for a senior position.",
    "wordLimit": 150,
    "instructions": "Ensure your tone is appropriate (formal). Include necessary details and a clear call to action.",
    "modelAnswer": "Dear Sir/Madam,\n\nI am writing to you today regarding the recent situation. I felt it was absolutely necessary to reach out to you to apply for a senior position.\n\nSpecifically, the issue at hand requires careful attention. Over the past few weeks, there have been several instances that prompted this communication. I believe that by addressing this proactively, we can find a mutually beneficial resolution.\n\nI would appreciate it if we could discuss this further at your earliest convenience. Thank you for your time and understanding.\n\nSincerely,\n\nJordan Lee"
  },
  {
    "id": "l3",
    "category": "Letter Writing",
    "question": "Write a letter to a renowned author to invite a guest speaker.",
    "wordLimit": 150,
    "instructions": "Ensure your tone is appropriate (formal). Include necessary details and a clear call to action.",
    "modelAnswer": "Dear Sir/Madam,\n\nI am writing to you today regarding the recent situation. I felt it was absolutely necessary to reach out to you to invite a guest speaker.\n\nSpecifically, the issue at hand requires careful attention. Over the past few weeks, there have been several instances that prompted this communication. I believe that by addressing this proactively, we can find a mutually beneficial resolution.\n\nI would appreciate it if we could discuss this further at your earliest convenience. Thank you for your time and understanding.\n\nSincerely,\n\nJordan Lee"
  },
  {
    "id": "l4",
    "category": "Letter Writing",
    "question": "Write a letter to a close friend to apologize for missing an event.",
    "wordLimit": 150,
    "instructions": "Ensure your tone is appropriate (informal). Include necessary details and a clear call to action.",
    "modelAnswer": "Dear Alex,\n\nI am writing to you today regarding the recent situation. I felt it was absolutely necessary to reach out to you to apologize for missing an event.\n\nSpecifically, the issue at hand requires careful attention. Over the past few weeks, there have been several instances that prompted this communication. I believe that by addressing this proactively, we can find a mutually beneficial resolution.\n\nI would appreciate it if we could discuss this further at your earliest convenience. Thank you for your time and understanding.\n\nBest wishes,\n\nJordan Lee"
  },
  {
    "id": "l5",
    "category": "Letter Writing",
    "question": "Write a letter to a local council to request funding.",
    "wordLimit": 150,
    "instructions": "Ensure your tone is appropriate (formal). Include necessary details and a clear call to action.",
    "modelAnswer": "Dear Sir/Madam,\n\nI am writing to you today regarding the recent situation. I felt it was absolutely necessary to reach out to you to request funding.\n\nSpecifically, the issue at hand requires careful attention. Over the past few weeks, there have been several instances that prompted this communication. I believe that by addressing this proactively, we can find a mutually beneficial resolution.\n\nI would appreciate it if we could discuss this further at your earliest convenience. Thank you for your time and understanding.\n\nSincerely,\n\nJordan Lee"
  },
  {
    "id": "l6",
    "category": "Letter Writing",
    "question": "Write a letter to your supervisor to resign from your job.",
    "wordLimit": 150,
    "instructions": "Ensure your tone is appropriate (formal). Include necessary details and a clear call to action.",
    "modelAnswer": "Dear Sir/Madam,\n\nI am writing to you today regarding the recent situation. I felt it was absolutely necessary to reach out to you to resign from your job.\n\nSpecifically, the issue at hand requires careful attention. Over the past few weeks, there have been several instances that prompted this communication. I believe that by addressing this proactively, we can find a mutually beneficial resolution.\n\nI would appreciate it if we could discuss this further at your earliest convenience. Thank you for your time and understanding.\n\nSincerely,\n\nJordan Lee"
  },
  {
    "id": "l7",
    "category": "Letter Writing",
    "question": "Write a letter to a former teacher to thank someone for their help.",
    "wordLimit": 150,
    "instructions": "Ensure your tone is appropriate (semi-formal). Include necessary details and a clear call to action.",
    "modelAnswer": "Dear Sir/Madam,\n\nI am writing to you today regarding the recent situation. I felt it was absolutely necessary to reach out to you to thank someone for their help.\n\nSpecifically, the issue at hand requires careful attention. Over the past few weeks, there have been several instances that prompted this communication. I believe that by addressing this proactively, we can find a mutually beneficial resolution.\n\nI would appreciate it if we could discuss this further at your earliest convenience. Thank you for your time and understanding.\n\nSincerely,\n\nJordan Lee"
  },
  {
    "id": "l8",
    "category": "Letter Writing",
    "question": "Write a letter to a gym manager to suggest improvements.",
    "wordLimit": 150,
    "instructions": "Ensure your tone is appropriate (formal). Include necessary details and a clear call to action.",
    "modelAnswer": "Dear Sir/Madam,\n\nI am writing to you today regarding the recent situation. I felt it was absolutely necessary to reach out to you to suggest improvements.\n\nSpecifically, the issue at hand requires careful attention. Over the past few weeks, there have been several instances that prompted this communication. I believe that by addressing this proactively, we can find a mutually beneficial resolution.\n\nI would appreciate it if we could discuss this further at your earliest convenience. Thank you for your time and understanding.\n\nSincerely,\n\nJordan Lee"
  },
  {
    "id": "l9",
    "category": "Letter Writing",
    "question": "Write a letter to a client to explain a delay in a project.",
    "wordLimit": 150,
    "instructions": "Ensure your tone is appropriate (formal). Include necessary details and a clear call to action.",
    "modelAnswer": "Dear Sir/Madam,\n\nI am writing to you today regarding the recent situation. I felt it was absolutely necessary to reach out to you to explain a delay in a project.\n\nSpecifically, the issue at hand requires careful attention. Over the past few weeks, there have been several instances that prompted this communication. I believe that by addressing this proactively, we can find a mutually beneficial resolution.\n\nI would appreciate it if we could discuss this further at your earliest convenience. Thank you for your time and understanding.\n\nSincerely,\n\nJordan Lee"
  },
  {
    "id": "l10",
    "category": "Letter Writing",
    "question": "Write a letter to former classmates to organize a reunion.",
    "wordLimit": 150,
    "instructions": "Ensure your tone is appropriate (informal). Include necessary details and a clear call to action.",
    "modelAnswer": "Dear Alex,\n\nI am writing to you today regarding the recent situation. I felt it was absolutely necessary to reach out to you to organize a reunion.\n\nSpecifically, the issue at hand requires careful attention. Over the past few weeks, there have been several instances that prompted this communication. I believe that by addressing this proactively, we can find a mutually beneficial resolution.\n\nI would appreciate it if we could discuss this further at your earliest convenience. Thank you for your time and understanding.\n\nBest wishes,\n\nJordan Lee"
  },
  {
    "id": "n1",
    "category": "News Writing",
    "question": "Write a news report covering a major earthquake.",
    "wordLimit": 200,
    "instructions": "Include a headline, a lead paragraph (5 Ws), and a quote.",
    "modelAnswer": "BREAKING: UNPRECEDENTED DEVELOPMENTS IN RECENT A MAJOR EARTHQUAKE\n\nMETROPOLIS \u2014 In a stunning turn of events, the city witnessed a major earthquake earlier today, leaving citizens and officials reeling. The incident occurred shortly after 10:00 AM local time and has already prompted international media coverage.\n\n\"We were completely caught off guard, but our response teams acted flawlessly,\" stated Mayor Sarah Jenkins during a press briefing. Authorities have secured the immediate area and are conducting preliminary assessments.\n\nExperts predict that the long-term impact of this event will reshape local policy for years to come. Updates will be provided as more information becomes available."
  },
  {
    "id": "n2",
    "category": "News Writing",
    "question": "Write a news report covering a historic election.",
    "wordLimit": 200,
    "instructions": "Include a headline, a lead paragraph (5 Ws), and a quote.",
    "modelAnswer": "BREAKING: UNPRECEDENTED DEVELOPMENTS IN RECENT A HISTORIC ELECTION\n\nMETROPOLIS \u2014 In a stunning turn of events, the city witnessed a historic election earlier today, leaving citizens and officials reeling. The incident occurred shortly after 10:00 AM local time and has already prompted international media coverage.\n\n\"We were completely caught off guard, but our response teams acted flawlessly,\" stated Mayor Sarah Jenkins during a press briefing. Authorities have secured the immediate area and are conducting preliminary assessments.\n\nExperts predict that the long-term impact of this event will reshape local policy for years to come. Updates will be provided as more information becomes available."
  },
  {
    "id": "n3",
    "category": "News Writing",
    "question": "Write a news report covering a groundbreaking scientific discovery.",
    "wordLimit": 200,
    "instructions": "Include a headline, a lead paragraph (5 Ws), and a quote.",
    "modelAnswer": "BREAKING: UNPRECEDENTED DEVELOPMENTS IN RECENT A GROUNDBREAKING SCIENTIFIC DISCOVERY\n\nMETROPOLIS \u2014 In a stunning turn of events, the city witnessed a groundbreaking scientific discovery earlier today, leaving citizens and officials reeling. The incident occurred shortly after 10:00 AM local time and has already prompted international media coverage.\n\n\"We were completely caught off guard, but our response teams acted flawlessly,\" stated Mayor Sarah Jenkins during a press briefing. Authorities have secured the immediate area and are conducting preliminary assessments.\n\nExperts predict that the long-term impact of this event will reshape local policy for years to come. Updates will be provided as more information becomes available."
  },
  {
    "id": "n4",
    "category": "News Writing",
    "question": "Write a news report covering a local festival.",
    "wordLimit": 200,
    "instructions": "Include a headline, a lead paragraph (5 Ws), and a quote.",
    "modelAnswer": "BREAKING: UNPRECEDENTED DEVELOPMENTS IN RECENT A LOCAL FESTIVAL\n\nMETROPOLIS \u2014 In a stunning turn of events, the city witnessed a local festival earlier today, leaving citizens and officials reeling. The incident occurred shortly after 10:00 AM local time and has already prompted international media coverage.\n\n\"We were completely caught off guard, but our response teams acted flawlessly,\" stated Mayor Sarah Jenkins during a press briefing. Authorities have secured the immediate area and are conducting preliminary assessments.\n\nExperts predict that the long-term impact of this event will reshape local policy for years to come. Updates will be provided as more information becomes available."
  },
  {
    "id": "n5",
    "category": "News Writing",
    "question": "Write a news report covering a massive cyberattack.",
    "wordLimit": 200,
    "instructions": "Include a headline, a lead paragraph (5 Ws), and a quote.",
    "modelAnswer": "BREAKING: UNPRECEDENTED DEVELOPMENTS IN RECENT A MASSIVE CYBERATTACK\n\nMETROPOLIS \u2014 In a stunning turn of events, the city witnessed a massive cyberattack earlier today, leaving citizens and officials reeling. The incident occurred shortly after 10:00 AM local time and has already prompted international media coverage.\n\n\"We were completely caught off guard, but our response teams acted flawlessly,\" stated Mayor Sarah Jenkins during a press briefing. Authorities have secured the immediate area and are conducting preliminary assessments.\n\nExperts predict that the long-term impact of this event will reshape local policy for years to come. Updates will be provided as more information becomes available."
  },
  {
    "id": "n6",
    "category": "News Writing",
    "question": "Write a news report covering a new public transit system opening.",
    "wordLimit": 200,
    "instructions": "Include a headline, a lead paragraph (5 Ws), and a quote.",
    "modelAnswer": "BREAKING: UNPRECEDENTED DEVELOPMENTS IN RECENT A NEW PUBLIC TRANSIT SYSTEM OPENING\n\nMETROPOLIS \u2014 In a stunning turn of events, the city witnessed a new public transit system opening earlier today, leaving citizens and officials reeling. The incident occurred shortly after 10:00 AM local time and has already prompted international media coverage.\n\n\"We were completely caught off guard, but our response teams acted flawlessly,\" stated Mayor Sarah Jenkins during a press briefing. Authorities have secured the immediate area and are conducting preliminary assessments.\n\nExperts predict that the long-term impact of this event will reshape local policy for years to come. Updates will be provided as more information becomes available."
  },
  {
    "id": "n7",
    "category": "News Writing",
    "question": "Write a news report covering a controversial law passing.",
    "wordLimit": 200,
    "instructions": "Include a headline, a lead paragraph (5 Ws), and a quote.",
    "modelAnswer": "BREAKING: UNPRECEDENTED DEVELOPMENTS IN RECENT A CONTROVERSIAL LAW PASSING\n\nMETROPOLIS \u2014 In a stunning turn of events, the city witnessed a controversial law passing earlier today, leaving citizens and officials reeling. The incident occurred shortly after 10:00 AM local time and has already prompted international media coverage.\n\n\"We were completely caught off guard, but our response teams acted flawlessly,\" stated Mayor Sarah Jenkins during a press briefing. Authorities have secured the immediate area and are conducting preliminary assessments.\n\nExperts predict that the long-term impact of this event will reshape local policy for years to come. Updates will be provided as more information becomes available."
  },
  {
    "id": "n8",
    "category": "News Writing",
    "question": "Write a news report covering a championship sports game.",
    "wordLimit": 200,
    "instructions": "Include a headline, a lead paragraph (5 Ws), and a quote.",
    "modelAnswer": "BREAKING: UNPRECEDENTED DEVELOPMENTS IN RECENT A CHAMPIONSHIP SPORTS GAME\n\nMETROPOLIS \u2014 In a stunning turn of events, the city witnessed a championship sports game earlier today, leaving citizens and officials reeling. The incident occurred shortly after 10:00 AM local time and has already prompted international media coverage.\n\n\"We were completely caught off guard, but our response teams acted flawlessly,\" stated Mayor Sarah Jenkins during a press briefing. Authorities have secured the immediate area and are conducting preliminary assessments.\n\nExperts predict that the long-term impact of this event will reshape local policy for years to come. Updates will be provided as more information becomes available."
  },
  {
    "id": "n9",
    "category": "News Writing",
    "question": "Write a news report covering an unexpected celebrity visit.",
    "wordLimit": 200,
    "instructions": "Include a headline, a lead paragraph (5 Ws), and a quote.",
    "modelAnswer": "BREAKING: UNPRECEDENTED DEVELOPMENTS IN RECENT AN UNEXPECTED CELEBRITY VISIT\n\nMETROPOLIS \u2014 In a stunning turn of events, the city witnessed an unexpected celebrity visit earlier today, leaving citizens and officials reeling. The incident occurred shortly after 10:00 AM local time and has already prompted international media coverage.\n\n\"We were completely caught off guard, but our response teams acted flawlessly,\" stated Mayor Sarah Jenkins during a press briefing. Authorities have secured the immediate area and are conducting preliminary assessments.\n\nExperts predict that the long-term impact of this event will reshape local policy for years to come. Updates will be provided as more information becomes available."
  },
  {
    "id": "n10",
    "category": "News Writing",
    "question": "Write a news report covering a wildlife conservation milestone.",
    "wordLimit": 200,
    "instructions": "Include a headline, a lead paragraph (5 Ws), and a quote.",
    "modelAnswer": "BREAKING: UNPRECEDENTED DEVELOPMENTS IN RECENT A WILDLIFE CONSERVATION MILESTONE\n\nMETROPOLIS \u2014 In a stunning turn of events, the city witnessed a wildlife conservation milestone earlier today, leaving citizens and officials reeling. The incident occurred shortly after 10:00 AM local time and has already prompted international media coverage.\n\n\"We were completely caught off guard, but our response teams acted flawlessly,\" stated Mayor Sarah Jenkins during a press briefing. Authorities have secured the immediate area and are conducting preliminary assessments.\n\nExperts predict that the long-term impact of this event will reshape local policy for years to come. Updates will be provided as more information becomes available."
  },
  {
    "id": "r1",
    "category": "Report Writing",
    "question": "Write a professional report analyzing declining sales figures.",
    "wordLimit": 200,
    "instructions": "Use subheadings, bullet points, and provide clear recommendations.",
    "modelAnswer": "REPORT: ANALYSIS OF DECLINING SALES FIGURES\n\n1. Introduction\nThis report analyzes the current data regarding declining sales figures. The objective is to identify key trends and propose actionable solutions.\n\n2. Findings\n- There has been a notable shift in the primary metrics over the last quarter.\n- Stakeholder feedback indicates a 40% dissatisfaction rate with the current processes.\n- Resource allocation remains a critical bottleneck.\n\n3. Conclusion & Recommendations\nBased on the data, the current trajectory is unsustainable. It is highly recommended that management:\n- Implement a revised strategy within 30 days.\n- Conduct follow-up surveys to monitor progress.\n- Reallocate 15% of the budget to address the core deficiencies highlighted above."
  },
  {
    "id": "r2",
    "category": "Report Writing",
    "question": "Write a professional report analyzing employee satisfaction survey results.",
    "wordLimit": 200,
    "instructions": "Use subheadings, bullet points, and provide clear recommendations.",
    "modelAnswer": "REPORT: ANALYSIS OF EMPLOYEE SATISFACTION SURVEY RESULTS\n\n1. Introduction\nThis report analyzes the current data regarding employee satisfaction survey results. The objective is to identify key trends and propose actionable solutions.\n\n2. Findings\n- There has been a notable shift in the primary metrics over the last quarter.\n- Stakeholder feedback indicates a 40% dissatisfaction rate with the current processes.\n- Resource allocation remains a critical bottleneck.\n\n3. Conclusion & Recommendations\nBased on the data, the current trajectory is unsustainable. It is highly recommended that management:\n- Implement a revised strategy within 30 days.\n- Conduct follow-up surveys to monitor progress.\n- Reallocate 15% of the budget to address the core deficiencies highlighted above."
  },
  {
    "id": "r3",
    "category": "Report Writing",
    "question": "Write a professional report analyzing environmental impact of a new factory.",
    "wordLimit": 200,
    "instructions": "Use subheadings, bullet points, and provide clear recommendations.",
    "modelAnswer": "REPORT: ANALYSIS OF ENVIRONMENTAL IMPACT OF A NEW FACTORY\n\n1. Introduction\nThis report analyzes the current data regarding environmental impact of a new factory. The objective is to identify key trends and propose actionable solutions.\n\n2. Findings\n- There has been a notable shift in the primary metrics over the last quarter.\n- Stakeholder feedback indicates a 40% dissatisfaction rate with the current processes.\n- Resource allocation remains a critical bottleneck.\n\n3. Conclusion & Recommendations\nBased on the data, the current trajectory is unsustainable. It is highly recommended that management:\n- Implement a revised strategy within 30 days.\n- Conduct follow-up surveys to monitor progress.\n- Reallocate 15% of the budget to address the core deficiencies highlighted above."
  },
  {
    "id": "r4",
    "category": "Report Writing",
    "question": "Write a professional report analyzing feasibility of a four-day work week.",
    "wordLimit": 200,
    "instructions": "Use subheadings, bullet points, and provide clear recommendations.",
    "modelAnswer": "REPORT: ANALYSIS OF FEASIBILITY OF A FOUR-DAY WORK WEEK\n\n1. Introduction\nThis report analyzes the current data regarding feasibility of a four-day work week. The objective is to identify key trends and propose actionable solutions.\n\n2. Findings\n- There has been a notable shift in the primary metrics over the last quarter.\n- Stakeholder feedback indicates a 40% dissatisfaction rate with the current processes.\n- Resource allocation remains a critical bottleneck.\n\n3. Conclusion & Recommendations\nBased on the data, the current trajectory is unsustainable. It is highly recommended that management:\n- Implement a revised strategy within 30 days.\n- Conduct follow-up surveys to monitor progress.\n- Reallocate 15% of the budget to address the core deficiencies highlighted above."
  },
  {
    "id": "r5",
    "category": "Report Writing",
    "question": "Write a professional report analyzing school cafeteria improvements.",
    "wordLimit": 200,
    "instructions": "Use subheadings, bullet points, and provide clear recommendations.",
    "modelAnswer": "REPORT: ANALYSIS OF SCHOOL CAFETERIA IMPROVEMENTS\n\n1. Introduction\nThis report analyzes the current data regarding school cafeteria improvements. The objective is to identify key trends and propose actionable solutions.\n\n2. Findings\n- There has been a notable shift in the primary metrics over the last quarter.\n- Stakeholder feedback indicates a 40% dissatisfaction rate with the current processes.\n- Resource allocation remains a critical bottleneck.\n\n3. Conclusion & Recommendations\nBased on the data, the current trajectory is unsustainable. It is highly recommended that management:\n- Implement a revised strategy within 30 days.\n- Conduct follow-up surveys to monitor progress.\n- Reallocate 15% of the budget to address the core deficiencies highlighted above."
  },
  {
    "id": "r6",
    "category": "Report Writing",
    "question": "Write a professional report analyzing public library usage statistics.",
    "wordLimit": 200,
    "instructions": "Use subheadings, bullet points, and provide clear recommendations.",
    "modelAnswer": "REPORT: ANALYSIS OF PUBLIC LIBRARY USAGE STATISTICS\n\n1. Introduction\nThis report analyzes the current data regarding public library usage statistics. The objective is to identify key trends and propose actionable solutions.\n\n2. Findings\n- There has been a notable shift in the primary metrics over the last quarter.\n- Stakeholder feedback indicates a 40% dissatisfaction rate with the current processes.\n- Resource allocation remains a critical bottleneck.\n\n3. Conclusion & Recommendations\nBased on the data, the current trajectory is unsustainable. It is highly recommended that management:\n- Implement a revised strategy within 30 days.\n- Conduct follow-up surveys to monitor progress.\n- Reallocate 15% of the budget to address the core deficiencies highlighted above."
  },
  {
    "id": "r7",
    "category": "Report Writing",
    "question": "Write a professional report analyzing annual budget deficit.",
    "wordLimit": 200,
    "instructions": "Use subheadings, bullet points, and provide clear recommendations.",
    "modelAnswer": "REPORT: ANALYSIS OF ANNUAL BUDGET DEFICIT\n\n1. Introduction\nThis report analyzes the current data regarding annual budget deficit. The objective is to identify key trends and propose actionable solutions.\n\n2. Findings\n- There has been a notable shift in the primary metrics over the last quarter.\n- Stakeholder feedback indicates a 40% dissatisfaction rate with the current processes.\n- Resource allocation remains a critical bottleneck.\n\n3. Conclusion & Recommendations\nBased on the data, the current trajectory is unsustainable. It is highly recommended that management:\n- Implement a revised strategy within 30 days.\n- Conduct follow-up surveys to monitor progress.\n- Reallocate 15% of the budget to address the core deficiencies highlighted above."
  },
  {
    "id": "r8",
    "category": "Report Writing",
    "question": "Write a professional report analyzing remote work productivity.",
    "wordLimit": 200,
    "instructions": "Use subheadings, bullet points, and provide clear recommendations.",
    "modelAnswer": "REPORT: ANALYSIS OF REMOTE WORK PRODUCTIVITY\n\n1. Introduction\nThis report analyzes the current data regarding remote work productivity. The objective is to identify key trends and propose actionable solutions.\n\n2. Findings\n- There has been a notable shift in the primary metrics over the last quarter.\n- Stakeholder feedback indicates a 40% dissatisfaction rate with the current processes.\n- Resource allocation remains a critical bottleneck.\n\n3. Conclusion & Recommendations\nBased on the data, the current trajectory is unsustainable. It is highly recommended that management:\n- Implement a revised strategy within 30 days.\n- Conduct follow-up surveys to monitor progress.\n- Reallocate 15% of the budget to address the core deficiencies highlighted above."
  },
  {
    "id": "r9",
    "category": "Report Writing",
    "question": "Write a professional report analyzing traffic congestion in the city center.",
    "wordLimit": 200,
    "instructions": "Use subheadings, bullet points, and provide clear recommendations.",
    "modelAnswer": "REPORT: ANALYSIS OF TRAFFIC CONGESTION IN THE CITY CENTER\n\n1. Introduction\nThis report analyzes the current data regarding traffic congestion in the city center. The objective is to identify key trends and propose actionable solutions.\n\n2. Findings\n- There has been a notable shift in the primary metrics over the last quarter.\n- Stakeholder feedback indicates a 40% dissatisfaction rate with the current processes.\n- Resource allocation remains a critical bottleneck.\n\n3. Conclusion & Recommendations\nBased on the data, the current trajectory is unsustainable. It is highly recommended that management:\n- Implement a revised strategy within 30 days.\n- Conduct follow-up surveys to monitor progress.\n- Reallocate 15% of the budget to address the core deficiencies highlighted above."
  },
  {
    "id": "r10",
    "category": "Report Writing",
    "question": "Write a professional report analyzing adoption of renewable energy in the office.",
    "wordLimit": 200,
    "instructions": "Use subheadings, bullet points, and provide clear recommendations.",
    "modelAnswer": "REPORT: ANALYSIS OF ADOPTION OF RENEWABLE ENERGY IN THE OFFICE\n\n1. Introduction\nThis report analyzes the current data regarding adoption of renewable energy in the office. The objective is to identify key trends and propose actionable solutions.\n\n2. Findings\n- There has been a notable shift in the primary metrics over the last quarter.\n- Stakeholder feedback indicates a 40% dissatisfaction rate with the current processes.\n- Resource allocation remains a critical bottleneck.\n\n3. Conclusion & Recommendations\nBased on the data, the current trajectory is unsustainable. It is highly recommended that management:\n- Implement a revised strategy within 30 days.\n- Conduct follow-up surveys to monitor progress.\n- Reallocate 15% of the budget to address the core deficiencies highlighted above."
  },
  {
    "id": "a1",
    "category": "Article Writing",
    "question": "Write an engaging magazine article about the benefits of a plant-based diet.",
    "wordLimit": 300,
    "instructions": "Use a catchy title, engaging hook, and conversational tone.",
    "modelAnswer": "THE ULTIMATE GUIDE: THE BENEFITS OF A PLANT-BASED DIET\n\nHave you ever wondered why the benefits of a plant-based diet has suddenly taken the world by storm? You aren't alone. Everywhere you look, from social media feeds to casual coffee shop chatter, people are diving deep into this fascinating trend.\n\nAt its core, it's about simplifying our lives and finding meaning in the chaos. When you first approach the benefits of a plant-based diet, it can seem daunting. However, the secret lies in starting small. Experts suggest that integrating just one new habit a day can lead to monumental shifts in your overall well-being.\n\nMoreover, the community surrounding this movement is incredibly supportive. Online forums are brimming with shared experiences and tips that can save beginners countless hours of frustration. \n\nSo, why not take the plunge? Embrace the journey and discover how it can transform your perspective. After all, the only thing you have to lose is your old way of thinking!"
  },
  {
    "id": "a2",
    "category": "Article Writing",
    "question": "Write an engaging magazine article about how to survive a digital detox.",
    "wordLimit": 300,
    "instructions": "Use a catchy title, engaging hook, and conversational tone.",
    "modelAnswer": "THE ULTIMATE GUIDE: HOW TO SURVIVE A DIGITAL DETOX\n\nHave you ever wondered why how to survive a digital detox has suddenly taken the world by storm? You aren't alone. Everywhere you look, from social media feeds to casual coffee shop chatter, people are diving deep into this fascinating trend.\n\nAt its core, it's about simplifying our lives and finding meaning in the chaos. When you first approach how to survive a digital detox, it can seem daunting. However, the secret lies in starting small. Experts suggest that integrating just one new habit a day can lead to monumental shifts in your overall well-being.\n\nMoreover, the community surrounding this movement is incredibly supportive. Online forums are brimming with shared experiences and tips that can save beginners countless hours of frustration. \n\nSo, why not take the plunge? Embrace the journey and discover how it can transform your perspective. After all, the only thing you have to lose is your old way of thinking!"
  },
  {
    "id": "a3",
    "category": "Article Writing",
    "question": "Write an engaging magazine article about the rise of indie game developers.",
    "wordLimit": 300,
    "instructions": "Use a catchy title, engaging hook, and conversational tone.",
    "modelAnswer": "THE ULTIMATE GUIDE: THE RISE OF INDIE GAME DEVELOPERS\n\nHave you ever wondered why the rise of indie game developers has suddenly taken the world by storm? You aren't alone. Everywhere you look, from social media feeds to casual coffee shop chatter, people are diving deep into this fascinating trend.\n\nAt its core, it's about simplifying our lives and finding meaning in the chaos. When you first approach the rise of indie game developers, it can seem daunting. However, the secret lies in starting small. Experts suggest that integrating just one new habit a day can lead to monumental shifts in your overall well-being.\n\nMoreover, the community surrounding this movement is incredibly supportive. Online forums are brimming with shared experiences and tips that can save beginners countless hours of frustration. \n\nSo, why not take the plunge? Embrace the journey and discover how it can transform your perspective. After all, the only thing you have to lose is your old way of thinking!"
  },
  {
    "id": "a4",
    "category": "Article Writing",
    "question": "Write an engaging magazine article about budget travel tips.",
    "wordLimit": 300,
    "instructions": "Use a catchy title, engaging hook, and conversational tone.",
    "modelAnswer": "THE ULTIMATE GUIDE: BUDGET TRAVEL TIPS\n\nHave you ever wondered why budget travel tips has suddenly taken the world by storm? You aren't alone. Everywhere you look, from social media feeds to casual coffee shop chatter, people are diving deep into this fascinating trend.\n\nAt its core, it's about simplifying our lives and finding meaning in the chaos. When you first approach budget travel tips, it can seem daunting. However, the secret lies in starting small. Experts suggest that integrating just one new habit a day can lead to monumental shifts in your overall well-being.\n\nMoreover, the community surrounding this movement is incredibly supportive. Online forums are brimming with shared experiences and tips that can save beginners countless hours of frustration. \n\nSo, why not take the plunge? Embrace the journey and discover how it can transform your perspective. After all, the only thing you have to lose is your old way of thinking!"
  },
  {
    "id": "a5",
    "category": "Article Writing",
    "question": "Write an engaging magazine article about the psychology of procrastination.",
    "wordLimit": 300,
    "instructions": "Use a catchy title, engaging hook, and conversational tone.",
    "modelAnswer": "THE ULTIMATE GUIDE: THE PSYCHOLOGY OF PROCRASTINATION\n\nHave you ever wondered why the psychology of procrastination has suddenly taken the world by storm? You aren't alone. Everywhere you look, from social media feeds to casual coffee shop chatter, people are diving deep into this fascinating trend.\n\nAt its core, it's about simplifying our lives and finding meaning in the chaos. When you first approach the psychology of procrastination, it can seem daunting. However, the secret lies in starting small. Experts suggest that integrating just one new habit a day can lead to monumental shifts in your overall well-being.\n\nMoreover, the community surrounding this movement is incredibly supportive. Online forums are brimming with shared experiences and tips that can save beginners countless hours of frustration. \n\nSo, why not take the plunge? Embrace the journey and discover how it can transform your perspective. After all, the only thing you have to lose is your old way of thinking!"
  },
  {
    "id": "a6",
    "category": "Article Writing",
    "question": "Write an engaging magazine article about minimalism in modern homes.",
    "wordLimit": 300,
    "instructions": "Use a catchy title, engaging hook, and conversational tone.",
    "modelAnswer": "THE ULTIMATE GUIDE: MINIMALISM IN MODERN HOMES\n\nHave you ever wondered why minimalism in modern homes has suddenly taken the world by storm? You aren't alone. Everywhere you look, from social media feeds to casual coffee shop chatter, people are diving deep into this fascinating trend.\n\nAt its core, it's about simplifying our lives and finding meaning in the chaos. When you first approach minimalism in modern homes, it can seem daunting. However, the secret lies in starting small. Experts suggest that integrating just one new habit a day can lead to monumental shifts in your overall well-being.\n\nMoreover, the community surrounding this movement is incredibly supportive. Online forums are brimming with shared experiences and tips that can save beginners countless hours of frustration. \n\nSo, why not take the plunge? Embrace the journey and discover how it can transform your perspective. After all, the only thing you have to lose is your old way of thinking!"
  },
  {
    "id": "a7",
    "category": "Article Writing",
    "question": "Write an engaging magazine article about the future of augmented reality.",
    "wordLimit": 300,
    "instructions": "Use a catchy title, engaging hook, and conversational tone.",
    "modelAnswer": "THE ULTIMATE GUIDE: THE FUTURE OF AUGMENTED REALITY\n\nHave you ever wondered why the future of augmented reality has suddenly taken the world by storm? You aren't alone. Everywhere you look, from social media feeds to casual coffee shop chatter, people are diving deep into this fascinating trend.\n\nAt its core, it's about simplifying our lives and finding meaning in the chaos. When you first approach the future of augmented reality, it can seem daunting. However, the secret lies in starting small. Experts suggest that integrating just one new habit a day can lead to monumental shifts in your overall well-being.\n\nMoreover, the community surrounding this movement is incredibly supportive. Online forums are brimming with shared experiences and tips that can save beginners countless hours of frustration. \n\nSo, why not take the plunge? Embrace the journey and discover how it can transform your perspective. After all, the only thing you have to lose is your old way of thinking!"
  },
  {
    "id": "a8",
    "category": "Article Writing",
    "question": "Write an engaging magazine article about navigating freelance work.",
    "wordLimit": 300,
    "instructions": "Use a catchy title, engaging hook, and conversational tone.",
    "modelAnswer": "THE ULTIMATE GUIDE: NAVIGATING FREELANCE WORK\n\nHave you ever wondered why navigating freelance work has suddenly taken the world by storm? You aren't alone. Everywhere you look, from social media feeds to casual coffee shop chatter, people are diving deep into this fascinating trend.\n\nAt its core, it's about simplifying our lives and finding meaning in the chaos. When you first approach navigating freelance work, it can seem daunting. However, the secret lies in starting small. Experts suggest that integrating just one new habit a day can lead to monumental shifts in your overall well-being.\n\nMoreover, the community surrounding this movement is incredibly supportive. Online forums are brimming with shared experiences and tips that can save beginners countless hours of frustration. \n\nSo, why not take the plunge? Embrace the journey and discover how it can transform your perspective. After all, the only thing you have to lose is your old way of thinking!"
  },
  {
    "id": "a9",
    "category": "Article Writing",
    "question": "Write an engaging magazine article about the history of street art.",
    "wordLimit": 300,
    "instructions": "Use a catchy title, engaging hook, and conversational tone.",
    "modelAnswer": "THE ULTIMATE GUIDE: THE HISTORY OF STREET ART\n\nHave you ever wondered why the history of street art has suddenly taken the world by storm? You aren't alone. Everywhere you look, from social media feeds to casual coffee shop chatter, people are diving deep into this fascinating trend.\n\nAt its core, it's about simplifying our lives and finding meaning in the chaos. When you first approach the history of street art, it can seem daunting. However, the secret lies in starting small. Experts suggest that integrating just one new habit a day can lead to monumental shifts in your overall well-being.\n\nMoreover, the community surrounding this movement is incredibly supportive. Online forums are brimming with shared experiences and tips that can save beginners countless hours of frustration. \n\nSo, why not take the plunge? Embrace the journey and discover how it can transform your perspective. After all, the only thing you have to lose is your old way of thinking!"
  },
  {
    "id": "a10",
    "category": "Article Writing",
    "question": "Write an engaging magazine article about mindfulness for teenagers.",
    "wordLimit": 300,
    "instructions": "Use a catchy title, engaging hook, and conversational tone.",
    "modelAnswer": "THE ULTIMATE GUIDE: MINDFULNESS FOR TEENAGERS\n\nHave you ever wondered why mindfulness for teenagers has suddenly taken the world by storm? You aren't alone. Everywhere you look, from social media feeds to casual coffee shop chatter, people are diving deep into this fascinating trend.\n\nAt its core, it's about simplifying our lives and finding meaning in the chaos. When you first approach mindfulness for teenagers, it can seem daunting. However, the secret lies in starting small. Experts suggest that integrating just one new habit a day can lead to monumental shifts in your overall well-being.\n\nMoreover, the community surrounding this movement is incredibly supportive. Online forums are brimming with shared experiences and tips that can save beginners countless hours of frustration. \n\nSo, why not take the plunge? Embrace the journey and discover how it can transform your perspective. After all, the only thing you have to lose is your old way of thinking!"
  },
  {
    "id": "cw1",
    "category": "Creative Writing",
    "question": "Start your story with: 'The compass didn't point North anymore.'",
    "wordLimit": 400,
    "instructions": "Focus on sensory details, pacing, and character development.",
    "modelAnswer": "The air was thick with an unnatural tension. I stood completely still, trying to process what was happening. The compass didn't point North anymore.\n\nEvery instinct screamed at me to turn back, to ignore the glaring anomaly and return to the safety of the mundane. But curiosity, that fatal human flaw, anchored my feet to the floorboards.\n\nShadows stretched across the room, seemingly dancing to a silent, eerie rhythm. I took a tentative step forward. The wood groaned under my weight, the sound deafening in the absolute silence. My heart hammered against my ribs like a trapped bird.\n\nAs I reached out, my fingers trembling, a sudden gust of icy wind blew out the single candle, plunging me into complete darkness. And in that darkness, a voice whispered my name."
  },
  {
    "id": "cw2",
    "category": "Creative Writing",
    "question": "Write a story about a character who discovers they can hear plants talking.",
    "wordLimit": 400,
    "instructions": "Focus on sensory details, pacing, and character development.",
    "modelAnswer": "The air was thick with an unnatural tension. I stood completely still, trying to process what was happening. Write a story about a character who discovers they can hear plants talking.\n\nEvery instinct screamed at me to turn back, to ignore the glaring anomaly and return to the safety of the mundane. But curiosity, that fatal human flaw, anchored my feet to the floorboards.\n\nShadows stretched across the room, seemingly dancing to a silent, eerie rhythm. I took a tentative step forward. The wood groaned under my weight, the sound deafening in the absolute silence. My heart hammered against my ribs like a trapped bird.\n\nAs I reached out, my fingers trembling, a sudden gust of icy wind blew out the single candle, plunging me into complete darkness. And in that darkness, a voice whispered my name."
  },
  {
    "id": "cw3",
    "category": "Creative Writing",
    "question": "Describe a city where it rains colors instead of water.",
    "wordLimit": 400,
    "instructions": "Focus on sensory details, pacing, and character development.",
    "modelAnswer": "The air was thick with an unnatural tension. I stood completely still, trying to process what was happening. Describe a city where it rains colors instead of water.\n\nEvery instinct screamed at me to turn back, to ignore the glaring anomaly and return to the safety of the mundane. But curiosity, that fatal human flaw, anchored my feet to the floorboards.\n\nShadows stretched across the room, seemingly dancing to a silent, eerie rhythm. I took a tentative step forward. The wood groaned under my weight, the sound deafening in the absolute silence. My heart hammered against my ribs like a trapped bird.\n\nAs I reached out, my fingers trembling, a sudden gust of icy wind blew out the single candle, plunging me into complete darkness. And in that darkness, a voice whispered my name."
  },
  {
    "id": "cw4",
    "category": "Creative Writing",
    "question": "A detective finds a clue that implicates themselves in a crime they didn't commit.",
    "wordLimit": 400,
    "instructions": "Focus on sensory details, pacing, and character development.",
    "modelAnswer": "The air was thick with an unnatural tension. I stood completely still, trying to process what was happening. A detective finds a clue that implicates themselves in a crime they didn't commit.\n\nEvery instinct screamed at me to turn back, to ignore the glaring anomaly and return to the safety of the mundane. But curiosity, that fatal human flaw, anchored my feet to the floorboards.\n\nShadows stretched across the room, seemingly dancing to a silent, eerie rhythm. I took a tentative step forward. The wood groaned under my weight, the sound deafening in the absolute silence. My heart hammered against my ribs like a trapped bird.\n\nAs I reached out, my fingers trembling, a sudden gust of icy wind blew out the single candle, plunging me into complete darkness. And in that darkness, a voice whispered my name."
  },
  {
    "id": "cw5",
    "category": "Creative Writing",
    "question": "Start your story with: 'The antique mirror showed a reflection of the room, but empty.'",
    "wordLimit": 400,
    "instructions": "Focus on sensory details, pacing, and character development.",
    "modelAnswer": "The air was thick with an unnatural tension. I stood completely still, trying to process what was happening. The antique mirror showed a reflection of the room, but empty.\n\nEvery instinct screamed at me to turn back, to ignore the glaring anomaly and return to the safety of the mundane. But curiosity, that fatal human flaw, anchored my feet to the floorboards.\n\nShadows stretched across the room, seemingly dancing to a silent, eerie rhythm. I took a tentative step forward. The wood groaned under my weight, the sound deafening in the absolute silence. My heart hammered against my ribs like a trapped bird.\n\nAs I reached out, my fingers trembling, a sudden gust of icy wind blew out the single candle, plunging me into complete darkness. And in that darkness, a voice whispered my name."
  },
  {
    "id": "cw6",
    "category": "Creative Writing",
    "question": "Write about a world where memories can be bought and sold.",
    "wordLimit": 400,
    "instructions": "Focus on sensory details, pacing, and character development.",
    "modelAnswer": "The air was thick with an unnatural tension. I stood completely still, trying to process what was happening. Write about a world where memories can be bought and sold.\n\nEvery instinct screamed at me to turn back, to ignore the glaring anomaly and return to the safety of the mundane. But curiosity, that fatal human flaw, anchored my feet to the floorboards.\n\nShadows stretched across the room, seemingly dancing to a silent, eerie rhythm. I took a tentative step forward. The wood groaned under my weight, the sound deafening in the absolute silence. My heart hammered against my ribs like a trapped bird.\n\nAs I reached out, my fingers trembling, a sudden gust of icy wind blew out the single candle, plunging me into complete darkness. And in that darkness, a voice whispered my name."
  },
  {
    "id": "cw7",
    "category": "Creative Writing",
    "question": "A stranded astronaut receives a radio transmission from Earth... which was destroyed 100 years ago.",
    "wordLimit": 400,
    "instructions": "Focus on sensory details, pacing, and character development.",
    "modelAnswer": "The air was thick with an unnatural tension. I stood completely still, trying to process what was happening. A stranded astronaut receives a radio transmission from Earth... which was destroyed 100 years ago.\n\nEvery instinct screamed at me to turn back, to ignore the glaring anomaly and return to the safety of the mundane. But curiosity, that fatal human flaw, anchored my feet to the floorboards.\n\nShadows stretched across the room, seemingly dancing to a silent, eerie rhythm. I took a tentative step forward. The wood groaned under my weight, the sound deafening in the absolute silence. My heart hammered against my ribs like a trapped bird.\n\nAs I reached out, my fingers trembling, a sudden gust of icy wind blew out the single candle, plunging me into complete darkness. And in that darkness, a voice whispered my name."
  },
  {
    "id": "cw8",
    "category": "Creative Writing",
    "question": "Describe the first day of magic school for someone with absolutely no magical ability.",
    "wordLimit": 400,
    "instructions": "Focus on sensory details, pacing, and character development.",
    "modelAnswer": "The air was thick with an unnatural tension. I stood completely still, trying to process what was happening. Describe the first day of magic school for someone with absolutely no magical ability.\n\nEvery instinct screamed at me to turn back, to ignore the glaring anomaly and return to the safety of the mundane. But curiosity, that fatal human flaw, anchored my feet to the floorboards.\n\nShadows stretched across the room, seemingly dancing to a silent, eerie rhythm. I took a tentative step forward. The wood groaned under my weight, the sound deafening in the absolute silence. My heart hammered against my ribs like a trapped bird.\n\nAs I reached out, my fingers trembling, a sudden gust of icy wind blew out the single candle, plunging me into complete darkness. And in that darkness, a voice whispered my name."
  },
  {
    "id": "cw9",
    "category": "Creative Writing",
    "question": "Start your story with: 'The letter had been sealed for centuries, but it was addressed to me.'",
    "wordLimit": 400,
    "instructions": "Focus on sensory details, pacing, and character development.",
    "modelAnswer": "The air was thick with an unnatural tension. I stood completely still, trying to process what was happening. The letter had been sealed for centuries, but it was addressed to me.\n\nEvery instinct screamed at me to turn back, to ignore the glaring anomaly and return to the safety of the mundane. But curiosity, that fatal human flaw, anchored my feet to the floorboards.\n\nShadows stretched across the room, seemingly dancing to a silent, eerie rhythm. I took a tentative step forward. The wood groaned under my weight, the sound deafening in the absolute silence. My heart hammered against my ribs like a trapped bird.\n\nAs I reached out, my fingers trembling, a sudden gust of icy wind blew out the single candle, plunging me into complete darkness. And in that darkness, a voice whispered my name."
  },
  {
    "id": "cw10",
    "category": "Creative Writing",
    "question": "Write a story centered around a clock that ticks backwards.",
    "wordLimit": 400,
    "instructions": "Focus on sensory details, pacing, and character development.",
    "modelAnswer": "The air was thick with an unnatural tension. I stood completely still, trying to process what was happening. Write a story centered around a clock that ticks backwards.\n\nEvery instinct screamed at me to turn back, to ignore the glaring anomaly and return to the safety of the mundane. But curiosity, that fatal human flaw, anchored my feet to the floorboards.\n\nShadows stretched across the room, seemingly dancing to a silent, eerie rhythm. I took a tentative step forward. The wood groaned under my weight, the sound deafening in the absolute silence. My heart hammered against my ribs like a trapped bird.\n\nAs I reached out, my fingers trembling, a sudden gust of icy wind blew out the single candle, plunging me into complete darkness. And in that darkness, a voice whispered my name."
  }
];