'use strict';

/* ── PEDAGOGY & SOCIETY PROFESSIONS BASE DATA ────────────────────────────────
   Professions: teacher, tutor, edu_psych, social_worker, journalist, pr_spec
──────────────────────────────────────────────────────────────────────────── */
const PEDAGOGY_PROF_BASE = {
  teacher: {
    emoji: '👩‍🏫',
    tools: [
      {n:'Google Classroom',  u:'https://classroom.google.com'},
      {n:'Moodle',            u:'https://moodle.org'},
      {n:'Kahoot',            u:'https://kahoot.com'},
      {n:'Canva for Education',u:'https://www.canva.com/education/'},
    ],
    salary: '$600–3000/мес',
    startUrls: [
      'https://www.coursera.org/learn/learning-how-to-learn',
      'https://www.edutopia.org',
      'https://classroom.google.com',
    ]
  },
  tutor: {
    emoji: '🎯',
    tools: [
      {n:'Miro',              u:'https://miro.com'},
      {n:'Notion',            u:'https://notion.so'},
      {n:'Articulate 360',    u:'https://articulate.com'},
      {n:'iSpring',           u:'https://www.ispring.ru'},
    ],
    salary: '$800–4000/мес',
    startUrls: [
      'https://www.coursera.org/learn/instructional-design-foundations',
      'https://www.td.org',
      'https://articulate.com/community/rise',
    ]
  },
  edu_psych: {
    emoji: '💬',
    tools: [
      {n:'SPSS / R',          u:'https://www.ibm.com/spss'},
      {n:'Zoom',              u:'https://zoom.us'},
      {n:'PsycINFO',          u:'https://www.apa.org/pubs/databases/psycinfo'},
      {n:'Google Forms',      u:'https://forms.google.com'},
    ],
    salary: '$700–3000/мес',
    startUrls: [
      'https://www.coursera.org/learn/introduction-psychology',
      'https://www.apa.org/education-career/guide',
      'https://www.edx.org/learn/psychology',
    ]
  },
  social_worker: {
    emoji: '🤝',
    tools: [
      {n:'Системы ведения случая',u:'https://www.apricot.com'},
      {n:'Google Workspace',  u:'https://workspace.google.com'},
      {n:'Zoom',              u:'https://zoom.us'},
      {n:'SOSNET',            u:'https://www.sosnet.ru'},
    ],
    salary: '$500–2500/мес',
    startUrls: [
      'https://www.coursera.org/learn/social-welfare-policy',
      'https://www.nasw.org',
      'https://www.unicef.org/social-policy',
    ]
  },
  journalist: {
    emoji: '📰',
    tools: [
      {n:'Adobe Premiere',    u:'https://www.adobe.com/products/premiere.html'},
      {n:'Tilda',             u:'https://tilda.cc'},
      {n:'Telegram',          u:'https://telegram.org'},
      {n:'Google Analytics',  u:'https://analytics.google.com'},
    ],
    salary: '$700–4000/мес',
    startUrls: [
      'https://www.coursera.org/learn/journalism',
      'https://www.poynter.org',
      'https://knightcenter.utexas.edu',
    ]
  },
  pr_spec: {
    emoji: '📣',
    tools: [
      {n:'Meltwater',         u:'https://www.meltwater.com'},
      {n:'Canva',             u:'https://www.canva.com'},
      {n:'Telegram / VK',     u:'https://telegram.org'},
      {n:'Google Analytics',  u:'https://analytics.google.com'},
    ],
    salary: '$800–4500/мес',
    startUrls: [
      'https://www.coursera.org/learn/public-relations',
      'https://www.prsa.org',
      'https://practicum.yandex.ru/pr-manager/',
    ]
  },
};

/* ── PEDAGOGY PROF GROUPS ────────────────────────────────────────────────── */
const PEDAGOGY_PROF_GROUPS = [
  { labelKey:'grpPedagogyEdu',    profs:['teacher','tutor','edu_psych'] },
  { labelKey:'grpPedagogySociety',profs:['social_worker','journalist','pr_spec'] },
];

/* ── PEDAGOGY L1 SCORING MATRIX ─────────────────────────────────────────── */
// Options order per question: teacher, tutor, edu_psych, social_worker, journalist, pr_spec
const PEDAGOGY_QS = [
  // Q1: Что тебя вдохновляет больше всего?
  { opts: [
    {score:{teacher:3}},
    {score:{tutor:3}},
    {score:{edu_psych:3}},
    {score:{social_worker:3}},
    {score:{journalist:3}},
    {score:{pr_spec:3}},
  ]},
  // Q2: Какой инструмент ты хочешь освоить?
  { opts: [
    {score:{teacher:3}},
    {score:{tutor:3}},
    {score:{edu_psych:3}},
    {score:{social_worker:3}},
    {score:{journalist:3}},
    {score:{pr_spec:3}},
  ]},
  // Q3: Что тебя восхищает в других?
  { opts: [
    {score:{teacher:3}},
    {score:{tutor:3}},
    {score:{edu_psych:3}},
    {score:{social_worker:3}},
    {score:{journalist:3}},
    {score:{pr_spec:3}},
  ]},
  // Q4: Где ты хочешь работать?
  { opts: [
    {score:{teacher:3}},
    {score:{tutor:3, teacher:1}},
    {score:{edu_psych:3}},
    {score:{social_worker:3}},
    {score:{journalist:3}},
    {score:{pr_spec:3}},
  ]},
  // Q5: Что ты делаешь в свободное время?
  { opts: [
    {score:{teacher:3, tutor:1}},
    {score:{tutor:3}},
    {score:{edu_psych:3}},
    {score:{social_worker:3}},
    {score:{journalist:3}},
    {score:{pr_spec:3}},
  ]},
  // Q6: Какая суперсила тебя описывает?
  { opts: [
    {score:{teacher:3}},
    {score:{tutor:3}},
    {score:{edu_psych:3}},
    {score:{social_worker:3}},
    {score:{journalist:3}},
    {score:{pr_spec:3}},
  ]},
  // Q7: Что важнее всего для тебя в работе?
  { opts: [
    {score:{teacher:3}},
    {score:{tutor:3}},
    {score:{edu_psych:3}},
    {score:{social_worker:3}},
    {score:{journalist:3}},
    {score:{pr_spec:3}},
  ]},
  // Q8: Какой навык ты хочешь развить?
  { opts: [
    {score:{teacher:3}},
    {score:{tutor:3}},
    {score:{edu_psych:3}},
    {score:{social_worker:3}},
    {score:{journalist:3}},
    {score:{pr_spec:3}},
  ]},
];
