'use strict';

/* ── CREATIVE PROFESSIONS BASE DATA ─────────────────────────────────────────── */
const CREATIVE_PROF_BASE = {
  'ux-ui': {
    emoji: '🖥️',
    tools: [
      {n:'Figma',       u:'https://figma.com'},
      {n:'Adobe XD',    u:'https://adobe.com/products/xd.html'},
      {n:'Miro',        u:'https://miro.com'},
      {n:'Maze',        u:'https://maze.co'},
    ],
    salary: '$800–3500/мес',
    startUrls: [
      'https://www.interaction-design.org/courses',
      'https://uxdesign.cc/',
      'https://www.nngroup.com/articles/',
    ]
  },
  graphic: {
    emoji: '🎨',
    tools: [
      {n:'Photoshop',   u:'https://adobe.com/products/photoshop.html'},
      {n:'Illustrator', u:'https://adobe.com/products/illustrator.html'},
      {n:'Canva',       u:'https://canva.com'},
      {n:'InDesign',    u:'https://adobe.com/products/indesign.html'},
    ],
    salary: '$600–2500/мес',
    startUrls: [
      'https://www.canva.com/learn/design/',
      'https://dribbble.com/',
      'https://www.behance.net/',
    ]
  },
  illustrator: {
    emoji: '✏️',
    tools: [
      {n:'Procreate',   u:'https://procreate.art'},
      {n:'Clip Studio', u:'https://www.clipstudio.net'},
      {n:'Illustrator', u:'https://adobe.com/products/illustrator.html'},
      {n:'Krita',       u:'https://krita.org'},
    ],
    salary: '$500–2500/мес',
    startUrls: [
      'https://www.artstation.com/',
      'https://www.skillshare.com/browse/illustration',
      'https://krita.org/en/learn/',
    ]
  },
  motion: {
    emoji: '🎬',
    tools: [
      {n:'After Effects', u:'https://adobe.com/products/aftereffects.html'},
      {n:'Premiere Pro',  u:'https://adobe.com/products/premiere.html'},
      {n:'DaVinci',       u:'https://blackmagicdesign.com/products/davinciresolve'},
      {n:'Cinema 4D',     u:'https://maxon.net/cinema-4d'},
    ],
    salary: '$700–3000/мес',
    startUrls: [
      'https://www.schoolofmotion.com/blog',
      'https://motionarray.com/learn/motion-design/',
      'https://www.youtube.com/@GreyscaleGorilla',
    ]
  },
  copywriter: {
    emoji: '✍️',
    tools: [
      {n:'Notion',      u:'https://notion.so'},
      {n:'Hemingway',   u:'https://hemingwayapp.com'},
      {n:'Grammarly',   u:'https://grammarly.com'},
      {n:'Google Docs', u:'https://docs.google.com'},
    ],
    salary: '$400–2000/мес',
    startUrls: [
      'https://copyblogger.com/',
      'https://www.coursera.org/learn/good-with-words',
      'https://medium.com/topic/writing',
    ]
  },
  smm: {
    emoji: '📱',
    tools: [
      {n:'Canva',      u:'https://canva.com'},
      {n:'Later',      u:'https://later.com'},
      {n:'Buffer',     u:'https://buffer.com'},
      {n:'Hootsuite',  u:'https://hootsuite.com'},
    ],
    salary: '$400–1800/мес',
    startUrls: [
      'https://blog.hootsuite.com/',
      'https://sproutsocial.com/insights/',
      'https://www.socialmediaexaminer.com/',
    ]
  },
  photo: {
    emoji: '📷',
    tools: [
      {n:'Lightroom',   u:'https://adobe.com/products/photoshop-lightroom.html'},
      {n:'Photoshop',   u:'https://adobe.com/products/photoshop.html'},
      {n:'Capture One', u:'https://captureone.com'},
      {n:'VSCO',        u:'https://vsco.co'},
    ],
    salary: '$500–3000/мес',
    startUrls: [
      'https://digital-photography-school.com/',
      'https://www.lightstalking.com/',
      'https://www.youtube.com/results?search_query=photography+basics',
    ]
  },
};

/* ── CREATIVE PROF GROUPS (for direct-to-L2 select) ─────────────────────────── */
const CREATIVE_PROF_GROUPS = [
  { labelKey:'grpCreativeDesign',  profs:['ux-ui','graphic'] },
  { labelKey:'grpCreativeArt',     profs:['illustrator','motion'] },
  { labelKey:'grpCreativeContent', profs:['copywriter','smm','photo'] },
];

/* ── CREATIVE L1 QUESTIONS ───────────────────────────────────────────────────── */
// Options order: illustrator, ux-ui, graphic, motion, copywriter, photo, smm
const CREATIVE_QS = [
  // Q1: What do you love doing most?
  { multi: false, opts: [
    { score: { illustrator:3 } },
    { score: { 'ux-ui':3 } },
    { score: { graphic:3 } },
    { score: { motion:3 } },
    { score: { copywriter:3 } },
    { score: { photo:3 } },
    { score: { smm:3 } },
  ]},
  // Q2: Which tool do you want to master?
  { multi: false, opts: [
    { score: { illustrator:3, graphic:1 } },
    { score: { 'ux-ui':3 } },
    { score: { graphic:3, illustrator:1 } },
    { score: { motion:3 } },
    { score: { copywriter:3 } },
    { score: { photo:3 } },
    { score: { smm:3 } },
  ]},
  // Q3: What impresses you in others' work?
  { multi: false, opts: [
    { score: { illustrator:3 } },
    { score: { 'ux-ui':3 } },
    { score: { graphic:3 } },
    { score: { motion:3 } },
    { score: { copywriter:3 } },
    { score: { photo:3 } },
    { score: { smm:3 } },
  ]},
  // Q4: Where would you like to work?
  { multi: false, opts: [
    { score: { illustrator:3, motion:1 } },
    { score: { 'ux-ui':3 } },
    { score: { graphic:3 } },
    { score: { motion:3 } },
    { score: { copywriter:3 } },
    { score: { photo:3 } },
    { score: { smm:3, copywriter:1 } },
  ]},
  // Q5: What do you do in free time?
  { multi: false, opts: [
    { score: { illustrator:3 } },
    { score: { 'ux-ui':3 } },
    { score: { graphic:3, illustrator:1 } },
    { score: { motion:3 } },
    { score: { copywriter:3 } },
    { score: { photo:3 } },
    { score: { smm:3 } },
  ]},
  // Q6: Your superpower?
  { multi: false, opts: [
    { score: { illustrator:3 } },
    { score: { 'ux-ui':3 } },
    { score: { graphic:3 } },
    { score: { motion:3 } },
    { score: { copywriter:3 } },
    { score: { photo:3 } },
    { score: { smm:3 } },
  ]},
  // Q7: What matters most in your work?
  { multi: false, opts: [
    { score: { illustrator:3 } },
    { score: { 'ux-ui':3 } },
    { score: { graphic:3 } },
    { score: { motion:3 } },
    { score: { copywriter:3 } },
    { score: { photo:3 } },
    { score: { smm:3 } },
  ]},
  // Q8: Which skill to develop?
  { multi: false, opts: [
    { score: { illustrator:3 } },
    { score: { 'ux-ui':3 } },
    { score: { graphic:3 } },
    { score: { motion:3 } },
    { score: { copywriter:3 } },
    { score: { photo:3 } },
    { score: { smm:3 } },
  ]},
];
