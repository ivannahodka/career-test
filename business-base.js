'use strict';

/* ── BUSINESS PROFESSIONS BASE DATA ─────────────────────────────────────────── */
// Professions: marketer, hr, analyst, entrepreneur, sales, financier
const BUSINESS_PROF_BASE = {
  marketer: {
    emoji: '📣',
    tools: [
      {n:'Google Ads',     u:'https://ads.google.com'},
      {n:'Meta Ads',       u:'https://business.facebook.com'},
      {n:'Google Analytics',u:'https://analytics.google.com'},
      {n:'Mailchimp',      u:'https://mailchimp.com'},
    ],
    salary: '$700–3000/мес',
    startUrls: [
      'https://skillshop.withgoogle.com/',
      'https://blog.hubspot.com/marketing',
      'https://neilpatel.com/blog/',
    ]
  },
  hr: {
    emoji: '🤝',
    tools: [
      {n:'LinkedIn Recruiter', u:'https://business.linkedin.com/talent-solutions'},
      {n:'Workday',            u:'https://www.workday.com'},
      {n:'BambooHR',           u:'https://www.bamboohr.com'},
      {n:'Notion',             u:'https://notion.so'},
    ],
    salary: '$600–2500/мес',
    startUrls: [
      'https://www.shrm.org/topics-tools/topics',
      'https://www.coursera.org/learn/human-resource-management',
      'https://hbr.org/topic/subject/human-resource-management',
    ]
  },
  analyst: {
    emoji: '📊',
    tools: [
      {n:'Excel / Google Sheets', u:'https://sheets.google.com'},
      {n:'Power BI',              u:'https://powerbi.microsoft.com'},
      {n:'Tableau',               u:'https://www.tableau.com'},
      {n:'SQL',                   u:'https://www.w3schools.com/sql/'},
    ],
    salary: '$800–3500/мес',
    startUrls: [
      'https://www.coursera.org/learn/excel-data-analysis',
      'https://www.kaggle.com/learn',
      'https://hbr.org/topic/subject/analytics',
    ]
  },
  entrepreneur: {
    emoji: '🚀',
    tools: [
      {n:'Notion',        u:'https://notion.so'},
      {n:'Canva',         u:'https://canva.com'},
      {n:'Stripe',        u:'https://stripe.com'},
      {n:'Trello',        u:'https://trello.com'},
    ],
    salary: '$0–∞ (зависит от бизнеса)',
    startUrls: [
      'https://www.ycombinator.com/library',
      'https://www.startupschool.org/',
      'https://paulgraham.com/articles.html',
    ]
  },
  sales: {
    emoji: '💼',
    tools: [
      {n:'Salesforce',  u:'https://www.salesforce.com'},
      {n:'HubSpot CRM', u:'https://www.hubspot.com/products/crm'},
      {n:'Pipedrive',   u:'https://www.pipedrive.com'},
      {n:'Zoom',        u:'https://zoom.us'},
    ],
    salary: '$600–4000/мес (оклад + %)',
    startUrls: [
      'https://blog.hubspot.com/sales',
      'https://www.salesgravy.com/sales-articles/',
      'https://www.coursera.org/learn/sales-training',
    ]
  },
  financier: {
    emoji: '💰',
    tools: [
      {n:'Excel',        u:'https://microsoft.com/excel'},
      {n:'Bloomberg',    u:'https://www.bloomberg.com/professional/'},
      {n:'QuickBooks',   u:'https://quickbooks.intuit.com'},
      {n:'Power BI',     u:'https://powerbi.microsoft.com'},
    ],
    salary: '$900–4000/мес',
    startUrls: [
      'https://www.coursera.org/learn/financial-accounting',
      'https://corporatefinanceinstitute.com/resources/',
      'https://www.investopedia.com/',
    ]
  },
};

/* ── BUSINESS PROF GROUPS (for direct-to-L2 select) ─────────────────────────── */
const BUSINESS_PROF_GROUPS = [
  { labelKey:'grpBizMgmt', profs:['marketer','hr','analyst'] },
  { labelKey:'grpBizOps',  profs:['entrepreneur','sales','financier'] },
];

/* ── BUSINESS L1 SCORING MATRIX ─────────────────────────────────────────────── */
// Options order per question: marketer, hr, analyst, entrepreneur, sales, financier
const BUSINESS_QS = [
  // Q1: What do you love doing most?
  { opts: [
    {score:{marketer:3}},
    {score:{hr:3}},
    {score:{analyst:3}},
    {score:{entrepreneur:3}},
    {score:{sales:3}},
    {score:{financier:3}},
  ]},
  // Q2: Which tool do you want to master?
  { opts: [
    {score:{marketer:3}},
    {score:{hr:3}},
    {score:{analyst:3}},
    {score:{entrepreneur:2, sales:1}},
    {score:{sales:3}},
    {score:{financier:3}},
  ]},
  // Q3: What inspires you in others' work?
  { opts: [
    {score:{marketer:3}},
    {score:{hr:3}},
    {score:{analyst:3}},
    {score:{entrepreneur:3}},
    {score:{sales:3}},
    {score:{financier:3}},
  ]},
  // Q4: Where would you like to work?
  { opts: [
    {score:{marketer:3, entrepreneur:1}},
    {score:{hr:3}},
    {score:{analyst:3}},
    {score:{entrepreneur:3}},
    {score:{sales:3}},
    {score:{financier:3}},
  ]},
  // Q5: What do you do in free time?
  { opts: [
    {score:{marketer:3}},
    {score:{hr:3}},
    {score:{analyst:3}},
    {score:{entrepreneur:3, sales:1}},
    {score:{sales:3}},
    {score:{financier:3}},
  ]},
  // Q6: Your superpower?
  { opts: [
    {score:{marketer:3}},
    {score:{hr:3}},
    {score:{analyst:3}},
    {score:{entrepreneur:3}},
    {score:{sales:3}},
    {score:{financier:3, analyst:1}},
  ]},
  // Q7: What matters most in your work?
  { opts: [
    {score:{marketer:3}},
    {score:{hr:3}},
    {score:{analyst:3}},
    {score:{entrepreneur:3}},
    {score:{sales:3}},
    {score:{financier:3}},
  ]},
  // Q8: Which skill do you want to develop?
  { opts: [
    {score:{marketer:3}},
    {score:{hr:3}},
    {score:{analyst:3}},
    {score:{entrepreneur:3}},
    {score:{sales:3}},
    {score:{financier:3}},
  ]},
];
