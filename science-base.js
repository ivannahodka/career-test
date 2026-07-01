'use strict';

/* ── SCIENCE & MEDICINE PROFESSIONS BASE DATA ────────────────────────────────── */
// Professions: doctor, researcher, psychologist, pharmacist, biotech, ecologist
const SCIENCE_PROF_BASE = {
  doctor: {
    emoji: '🩺',
    tools: [
      {n:'EMR / МИС',          u:'https://www.medscape.com'},
      {n:'UpToDate',           u:'https://www.uptodate.com'},
      {n:'PubMed',             u:'https://pubmed.ncbi.nlm.nih.gov'},
      {n:'Medscape',           u:'https://www.medscape.com'},
    ],
    salary: '$1500–8000/мес',
    startUrls: [
      'https://www.khanacademy.org/science/health-and-medicine',
      'https://www.coursera.org/browse/health',
      'https://pubmed.ncbi.nlm.nih.gov',
    ]
  },
  researcher: {
    emoji: '🔬',
    tools: [
      {n:'MATLAB',             u:'https://www.mathworks.com/products/matlab.html'},
      {n:'R / Python',         u:'https://www.r-project.org'},
      {n:'PubMed',             u:'https://pubmed.ncbi.nlm.nih.gov'},
      {n:'Mendeley',           u:'https://www.mendeley.com'},
    ],
    salary: '$1000–5000/мес',
    startUrls: [
      'https://pubmed.ncbi.nlm.nih.gov',
      'https://www.coursera.org/browse/data-science',
      'https://scholar.google.com',
    ]
  },
  psychologist: {
    emoji: '🧠',
    tools: [
      {n:'SPSS / R',           u:'https://www.ibm.com/spss'},
      {n:'Zoom / Telehealth',  u:'https://zoom.us'},
      {n:'PsycINFO',           u:'https://www.apa.org/pubs/databases/psycinfo'},
      {n:'Notion',             u:'https://notion.so'},
    ],
    salary: '$800–4000/мес',
    startUrls: [
      'https://www.coursera.org/learn/introduction-psychology',
      'https://www.apa.org/education-career/guide',
      'https://www.psychologytoday.com/us/therapists',
    ]
  },
  pharmacist: {
    emoji: '💊',
    tools: [
      {n:'Micromedex',         u:'https://www.micromedexsolutions.com'},
      {n:'DrugBank',           u:'https://go.drugbank.com'},
      {n:'PubChem',            u:'https://pubchem.ncbi.nlm.nih.gov'},
      {n:'Lexicomp',           u:'https://online.lexi.com'},
    ],
    salary: '$1200–5000/мес',
    startUrls: [
      'https://go.drugbank.com',
      'https://pubchem.ncbi.nlm.nih.gov',
      'https://www.pharmacytimes.com',
    ]
  },
  biotech: {
    emoji: '🧬',
    tools: [
      {n:'BLAST / NCBI',       u:'https://blast.ncbi.nlm.nih.gov'},
      {n:'Python / BioPython', u:'https://biopython.org'},
      {n:'Benchling',          u:'https://www.benchling.com'},
      {n:'ImageJ',             u:'https://imagej.nih.gov'},
    ],
    salary: '$1000–5500/мес',
    startUrls: [
      'https://www.coursera.org/learn/biotechnology',
      'https://www.ncbi.nlm.nih.gov',
      'https://www.nature.com/subjects/biotechnology',
    ]
  },
  ecologist: {
    emoji: '🌿',
    tools: [
      {n:'ArcGIS',             u:'https://www.arcgis.com'},
      {n:'R',                  u:'https://www.r-project.org'},
      {n:'QGIS',               u:'https://qgis.org'},
      {n:'Google Earth Engine',u:'https://earthengine.google.com'},
    ],
    salary: '$700–3000/мес',
    startUrls: [
      'https://www.coursera.org/learn/climate-change',
      'https://www.nature.org/en-us/about-us/who-we-are/how-we-work/science/',
      'https://qgis.org/en/site/forusers/index.html',
    ]
  },
};

/* ── SCIENCE PROF GROUPS (for direct-to-L2 select) ──────────────────────────── */
const SCIENCE_PROF_GROUPS = [
  { labelKey:'grpSciHealth',   profs:['doctor','psychologist','pharmacist'] },
  { labelKey:'grpSciResearch', profs:['researcher','biotech','ecologist'] },
];

/* ── SCIENCE L1 SCORING MATRIX ───────────────────────────────────────────────── */
// Options order per question: doctor, researcher, psychologist, pharmacist, biotech, ecologist
const SCIENCE_QS = [
  // Q1: What excites you most?
  { opts: [
    {score:{doctor:3}},
    {score:{researcher:3}},
    {score:{psychologist:3}},
    {score:{pharmacist:3}},
    {score:{biotech:3}},
    {score:{ecologist:3}},
  ]},
  // Q2: Which tool do you want to master?
  { opts: [
    {score:{doctor:3}},
    {score:{researcher:3}},
    {score:{psychologist:3}},
    {score:{pharmacist:3}},
    {score:{biotech:3}},
    {score:{ecologist:3}},
  ]},
  // Q3: What inspires you in others' work?
  { opts: [
    {score:{doctor:3}},
    {score:{researcher:3}},
    {score:{psychologist:3}},
    {score:{pharmacist:2, biotech:1}},
    {score:{biotech:3}},
    {score:{ecologist:3}},
  ]},
  // Q4: Where would you like to work?
  { opts: [
    {score:{doctor:3}},
    {score:{researcher:3}},
    {score:{psychologist:3}},
    {score:{pharmacist:3}},
    {score:{biotech:3}},
    {score:{ecologist:3}},
  ]},
  // Q5: What do you do in your free time?
  { opts: [
    {score:{doctor:3, psychologist:1}},
    {score:{researcher:3}},
    {score:{psychologist:3}},
    {score:{pharmacist:3}},
    {score:{biotech:3}},
    {score:{ecologist:3}},
  ]},
  // Q6: Your superpower?
  { opts: [
    {score:{doctor:3}},
    {score:{researcher:3}},
    {score:{psychologist:3}},
    {score:{pharmacist:3}},
    {score:{biotech:3}},
    {score:{ecologist:3}},
  ]},
  // Q7: What matters most in your work?
  { opts: [
    {score:{doctor:3}},
    {score:{researcher:3}},
    {score:{psychologist:3}},
    {score:{pharmacist:3}},
    {score:{biotech:3, researcher:1}},
    {score:{ecologist:3}},
  ]},
  // Q8: Which skill do you want to develop?
  { opts: [
    {score:{doctor:3}},
    {score:{researcher:3}},
    {score:{psychologist:3}},
    {score:{pharmacist:3}},
    {score:{biotech:3}},
    {score:{ecologist:3}},
  ]},
];
