// IT Career Test — Base language data structure
// Add a new language: create lang-XX.js and load it in index.html & glossary.html
const I18N = {};
const L2   = { frontend:{}, backend:{}, design:{}, gamedev:{}, data:{}, security:{}, devops:{}, qa:{}, pm:{}, financier:{}, entrepreneur:{}, sales:{}, marketer:{}, hr:{}, analyst:{}, doctor:{}, researcher:{}, psychologist:{}, pharmacist:{}, biotech:{}, ecologist:{}, teacher:{}, tutor:{}, edu_psych:{}, social_worker:{}, journalist:{}, pr_spec:{}, mecheng:{}, civil_eng:{}, robotics:{}, electrician:{}, automation:{}, production:{} };
const GLOSSARY = {};

// ─── DOMAIN ARCHITECTURE ─────────────────────────────────────────────────────
// To add a new domain: create its own QS/PROF_BASE/L2/lang files, then add
// a new entry to DOMAINS and a new card in index.html #home.
const DOMAINS = [
  {
    key: 'it',
    icon: '💻',
    // QS and PROF_BASE used for this domain (defined below)
  }
  // Future: { key: 'creative', icon: '🎨' }
  // Future: { key: 'business', icon: '💼' }
];

// Profession groups within the IT domain (for grouped <select> in home screen)
// Add a new group by appending here; labelKey maps to HOME_UI[lang][labelKey] in app.js
const PROF_GROUPS = [
  { labelKey: 'grpDev',            profs: ['frontend', 'backend', 'gamedev'] },
  { labelKey: 'grpData',           profs: ['data'] },
  { labelKey: 'grpInfra',          profs: ['devops'] },
  { labelKey: 'grpSec',            profs: ['security'] },
  { labelKey: 'grpDes',            profs: ['design', 'graphic'],             domain: 'mixed' },
  { labelKey: 'grpQa',             profs: ['qa'] },
  { labelKey: 'grpPm',             profs: ['pm'] },
  { labelKey: 'grpCreativeArt',    profs: ['illustrator', 'motion', 'photo'], domain: 'creative' },
  { labelKey: 'grpCreativeContent',profs: ['copywriter', 'smm'],             domain: 'creative' },
  { labelKey: 'grpBizMgmt',        profs: ['marketer', 'hr', 'analyst'],      domain: 'business' },
  { labelKey: 'grpBizOps',         profs: ['entrepreneur', 'sales', 'financier'], domain: 'business' },
  { labelKey: 'grpSciHealth',   profs: ['doctor', 'psychologist', 'pharmacist'], domain: 'science' },
  { labelKey: 'grpSciResearch', profs: ['researcher', 'biotech', 'ecologist'],   domain: 'science' },
  { labelKey: 'grpPedagogyEdu',    profs: ['teacher', 'tutor', 'edu_psych'],           domain: 'pedagogy' },
  { labelKey: 'grpPedagogySociety',profs: ['social_worker', 'journalist', 'pr_spec'],  domain: 'pedagogy' },
  { labelKey: 'grpEngineeringDesign',profs: ['mecheng', 'civil_eng', 'robotics'],            domain: 'engineering' },
  { labelKey: 'grpEngineeringProd',  profs: ['electrician', 'automation', 'production'],     domain: 'engineering' },
];
// ─── SCORES (language-independent) ───────────────────────────────────────────
const QS = [
  {opts:[{s:{gamedev:3,frontend:1}},{s:{design:3,frontend:1}},{s:{security:2,devops:2}},{s:{backend:3,data:2,security:1}},{s:{pm:3,qa:1}},{s:{backend:2,devops:2,data:1}},{s:{frontend:3,design:2}},{s:{data:2,pm:1}}]},
  {opts:[{s:{backend:2,data:3,security:1}},{s:{devops:2,security:2,data:1}},{s:{backend:2,frontend:2,devops:1}},{s:{design:3,frontend:1}},{s:{pm:2,qa:1}},{s:{data:1,security:1}},{s:{pm:2,frontend:1}},{s:{pm:2}}]},
  {opts:[{s:{qa:3,security:2}},{s:{design:3,frontend:2,gamedev:1}},{s:{backend:3,security:2,data:2}},{s:{pm:3,qa:1}},{s:{devops:3,security:2,backend:1}},{s:{data:3,pm:1}},{s:{backend:2,frontend:2,pm:1}},{s:{frontend:2,gamedev:2,design:1}}]},
  {opts:[{s:{design:3,frontend:2}},{s:{devops:3,backend:2}},{s:{data:3,backend:1}},{s:{gamedev:3,frontend:1}},{s:{security:3}},{s:{qa:2,design:2,pm:1}},{s:{pm:2,backend:1}}]},
  {opts:[{s:{frontend:3,backend:2}},{s:{gamedev:3,frontend:1}},{s:{data:3,backend:1}},{s:{security:3,backend:1}},{s:{design:3,frontend:1}},{s:{pm:3,qa:1}},{s:{devops:3,backend:2}},{s:{qa:3,pm:1}}]},
  {opts:[{s:{design:3,frontend:1}},{s:{backend:3,devops:1}},{s:{frontend:3,design:1}},{s:{security:3}},{s:{devops:3,security:1}},{s:{data:3,backend:1}},{s:{qa:3,pm:1}},{s:{pm:3,qa:1}}]},
  {opts:[{s:{frontend:1,design:1}},{s:{backend:2,data:2,security:1}},{s:{backend:2,security:2,gamedev:1}},{s:{gamedev:1,frontend:1}},{s:{backend:2,devops:2,data:1}},{s:{pm:1,design:1}},{s:{}}]},
  {opts:[{s:{design:1,pm:1,frontend:1}},{s:{backend:1,devops:1}},{s:{data:1,security:1,backend:1}},{s:{frontend:1,design:1,gamedev:1}},{s:{qa:1,pm:1}},{s:{}}]},
  {opts:[{s:{backend:2,data:2,security:2,devops:1}},{s:{design:3,gamedev:2,frontend:1}},{s:{qa:3,devops:2}},{s:{pm:3,data:1}},{s:{security:3,backend:1,gamedev:1}},{s:{frontend:2,design:2,gamedev:2}},{s:{backend:1,data:1,devops:1,pm:1}}]},
  {opts:[{s:{frontend:3,design:1}},{s:{backend:3,devops:1}},{s:{gamedev:3,frontend:1}},{s:{design:3,frontend:1}},{s:{backend:2,data:2,security:1}},{s:{security:3,backend:1}},{s:{data:3,backend:1}},{s:{}}]}
];

const PROF_BASE = {
  frontend:{
    emoji:'🖥️', salary:'$50k–$140k/yr',
    tools:[
      {n:'HTML + CSS',   u:'https://developer.mozilla.org/docs/Web'},
      {n:'JavaScript',   u:'https://javascript.info'},
      {n:'React / Vue',  u:'https://react.dev'},
      {n:'Git',          u:'https://git-scm.com'},
      {n:'Figma',        u:'https://figma.com'}
    ],
    startUrls:['https://freecodecamp.org','https://javascript.info','https://react.dev']
  },
  backend:{
    emoji:'⚙️', salary:'$60k–$180k/yr',
    tools:[
      {n:'Python / Node.js', u:'https://python.org'},
      {n:'SQL / PostgreSQL', u:'https://postgresql.org'},
      {n:'REST API',         u:'https://restfulapi.net'},
      {n:'Docker',           u:'https://docker.com'},
      {n:'Git',              u:'https://git-scm.com'}
    ],
    startUrls:['https://python.org','https://sqlbolt.com','https://core.telegram.org/bots']
  },
  design:{
    emoji:'🎨', salary:'$45k–$130k/yr',
    tools:[
      {n:'Figma',     u:'https://figma.com'},
      {n:'Adobe XD',  u:'https://adobe.com/products/xd.html'},
      {n:'Miro',      u:'https://miro.com'},
      {n:'Notion',    u:'https://notion.so'},
      {n:'Principle', u:'https://principleformac.com'}
    ],
    startUrls:['https://figma.com','https://coursera.org/learn/ux-design','https://figma.com']
  },
  gamedev:{
    emoji:'🎮', salary:'$50k–$140k/yr',
    tools:[
      {n:'Unity + C#',      u:'https://unity.com'},
      {n:'Unreal Engine',   u:'https://unrealengine.com'},
      {n:'Godot',           u:'https://godotengine.org'},
      {n:'Blender',         u:'https://blender.org'},
      {n:'Git',             u:'https://git-scm.com'}
    ],
    startUrls:['https://learn.unity.com','https://roblox.com/create','https://godotengine.org']
  },
  data:{
    emoji:'📊', salary:'$70k–$200k/yr',
    tools:[
      {n:'Python',              u:'https://python.org'},
      {n:'Pandas / NumPy',      u:'https://pandas.pydata.org'},
      {n:'TensorFlow / PyTorch',u:'https://tensorflow.org'},
      {n:'SQL',                 u:'https://postgresql.org'},
      {n:'Jupyter',             u:'https://jupyter.org'}
    ],
    startUrls:['https://kaggle.com/learn','https://kaggle.com','https://fast.ai']
  },
  security:{
    emoji:'🔐', salary:'$70k–$180k/yr',
    tools:[
      {n:'Linux / Kali', u:'https://kali.org'},
      {n:'Wireshark',    u:'https://wireshark.org'},
      {n:'Metasploit',   u:'https://metasploit.com'},
      {n:'Python',       u:'https://python.org'},
      {n:'Burp Suite',   u:'https://portswigger.net/burp'}
    ],
    startUrls:['https://tryhackme.com','https://picoctf.org','https://linuxjourney.com']
  },
  devops:{
    emoji:'🚀', salary:'$70k–$180k/yr',
    tools:[
      {n:'Linux',      u:'https://linuxjourney.com'},
      {n:'Docker',     u:'https://docker.com'},
      {n:'Kubernetes', u:'https://kubernetes.io'},
      {n:'AWS',        u:'https://aws.amazon.com/free'},
      {n:'Terraform',  u:'https://terraform.io'}
    ],
    startUrls:['https://linuxjourney.com','https://docs.docker.com/get-started','https://aws.amazon.com/free']
  },
  qa:{
    emoji:'🔍', salary:'$40k–$110k/yr',
    tools:[
      {n:'Jira',               u:'https://atlassian.com/software/jira'},
      {n:'Postman',            u:'https://postman.com'},
      {n:'Playwright',         u:'https://playwright.dev'},
      {n:'Python',             u:'https://python.org'},
      {n:'SQL',                u:'https://postgresql.org'}
    ],
    startUrls:['https://guru99.com/software-testing.html','https://postman.com','https://playwright.dev']
  },
  pm:{
    emoji:'📋', salary:'$60k–$180k/yr',
    tools:[
      {n:'Jira',      u:'https://atlassian.com/software/jira'},
      {n:'Notion',    u:'https://notion.so'},
      {n:'Figma',     u:'https://figma.com'},
      {n:'Amplitude', u:'https://amplitude.com'},
      {n:'Miro',      u:'https://miro.com'}
    ],
    startUrls:['https://www.svpg.com/inspired-how-to-create-products-customers-love/','https://coursera.org/professional-certificates/google-project-management','https://notion.so']
  }
};
