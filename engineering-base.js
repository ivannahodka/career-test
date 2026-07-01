'use strict';

/* ── ENGINEERING & PRODUCTION PROFESSIONS BASE DATA ──────────────────────────
   Professions: mecheng, civil_eng, robotics, electrician, automation, production
──────────────────────────────────────────────────────────────────────────── */
const ENGINEERING_PROF_BASE = {
  mecheng: {
    emoji: '🔧',
    tools: [
      {n:'SolidWorks',   u:'https://www.solidworks.com'},
      {n:'AutoCAD',      u:'https://www.autodesk.com/products/autocad'},
      {n:'ANSYS',        u:'https://www.ansys.com'},
      {n:'MATLAB',       u:'https://www.mathworks.com/products/matlab.html'},
    ],
    salary: '$800–5000/мес',
    startUrls: [
      'https://www.solidworks.com/sw/education/student-software-3d-mcad.htm',
      'https://www.coursera.org/learn/engineering-mechanics-statics',
      'https://www.autodesk.com/education/edu-software/overview',
    ]
  },
  civil_eng: {
    emoji: '🏛️',
    tools: [
      {n:'Revit',        u:'https://www.autodesk.com/products/revit'},
      {n:'ArchiCAD',     u:'https://graphisoft.com/solutions/archicad'},
      {n:'AutoCAD Civil 3D', u:'https://www.autodesk.com/products/civil-3d'},
      {n:'Navisworks',   u:'https://www.autodesk.com/products/navisworks'},
    ],
    salary: '$700–4500/мес',
    startUrls: [
      'https://graphisoft.com/solutions/archicad/free-archicad',
      'https://www.coursera.org/learn/construction-project-management',
      'https://www.autodesk.com/education/edu-software/overview',
    ]
  },
  robotics: {
    emoji: '🤖',
    tools: [
      {n:'ROS / ROS2',   u:'https://www.ros.org'},
      {n:'Arduino',      u:'https://www.arduino.cc'},
      {n:'Python',       u:'https://www.python.org'},
      {n:'OpenCV',       u:'https://opencv.org'},
    ],
    salary: '$1000–6000/мес',
    startUrls: [
      'https://www.ros.org/blog/getting-started/',
      'https://www.arduino.cc/en/Tutorial/HomePage',
      'https://www.coursera.org/specializations/modernrobotics',
    ]
  },
  electrician: {
    emoji: '⚡',
    tools: [
      {n:'AutoCAD Electrical', u:'https://www.autodesk.com/products/autocad/included-toolsets/autocad-electrical'},
      {n:'MATLAB/Simulink',    u:'https://www.mathworks.com/products/simulink.html'},
      {n:'ETAP',               u:'https://etap.com'},
      {n:'EKF / ABB инструменты', u:'https://www.abb.com/'},
    ],
    salary: '$700–4000/мес',
    startUrls: [
      'https://www.coursera.org/learn/solar-energy',
      'https://www.edx.org/learn/electrical-engineering',
      'https://www.mathworks.com/academia/student_version.html',
    ]
  },
  automation: {
    emoji: '🖥️',
    tools: [
      {n:'Siemens TIA Portal', u:'https://www.siemens.com/tia'},
      {n:'SCADA (IGSS, WinCC)',u:'https://www.siemens.com/wincc'},
      {n:'Codesys',            u:'https://www.codesys.com'},
      {n:'Modbus / OPC UA',    u:'https://opcfoundation.org'},
    ],
    salary: '$1000–5500/мес',
    startUrls: [
      'https://www.codesys.com/the-system/training.html',
      'https://www.coursera.org/learn/industrial-iot',
      'https://www.siemens.com/global/en/company/fairs-events/education.html',
    ]
  },
  production: {
    emoji: '🏭',
    tools: [
      {n:'1С:ERP / SAP',       u:'https://www.sap.com/products/erp.html'},
      {n:'Lean / Six Sigma',   u:'https://www.asq.org/quality-resources/six-sigma'},
      {n:'Microsoft Project',  u:'https://www.microsoft.com/project'},
      {n:'Minitab',            u:'https://www.minitab.com'},
    ],
    salary: '$800–4500/мес',
    startUrls: [
      'https://www.coursera.org/learn/lean-production',
      'https://www.asq.org/cert/six-sigma-black-belt',
      'https://www.coursera.org/learn/supply-chain-management',
    ]
  },
};

/* ── ENGINEERING PROF GROUPS ─────────────────────────────────────────────── */
const ENGINEERING_PROF_GROUPS = [
  { labelKey:'grpEngineeringDesign', profs:['mecheng','civil_eng','robotics'] },
  { labelKey:'grpEngineeringProd',   profs:['electrician','automation','production'] },
];

/* ── ENGINEERING L1 SCORING MATRIX ──────────────────────────────────────── */
// Options order per question: mecheng, civil_eng, robotics, electrician, automation, production
const ENGINEERING_QS = [
  { opts: [{score:{mecheng:3}},{score:{civil_eng:3}},{score:{robotics:3}},{score:{electrician:3}},{score:{automation:3}},{score:{production:3}}] },
  { opts: [{score:{mecheng:3}},{score:{civil_eng:3}},{score:{robotics:3}},{score:{electrician:3}},{score:{automation:3}},{score:{production:3}}] },
  { opts: [{score:{mecheng:3}},{score:{civil_eng:3}},{score:{robotics:3}},{score:{electrician:3}},{score:{automation:3}},{score:{production:3}}] },
  { opts: [{score:{mecheng:3}},{score:{civil_eng:3,mecheng:1}},{score:{robotics:3}},{score:{electrician:3}},{score:{automation:3}},{score:{production:3}}] },
  { opts: [{score:{mecheng:3,robotics:1}},{score:{civil_eng:3}},{score:{robotics:3,electrician:1}},{score:{electrician:3}},{score:{automation:3}},{score:{production:3}}] },
  { opts: [{score:{mecheng:3}},{score:{civil_eng:3}},{score:{robotics:3}},{score:{electrician:3}},{score:{automation:3}},{score:{production:3}}] },
  { opts: [{score:{mecheng:3}},{score:{civil_eng:3}},{score:{robotics:3}},{score:{electrician:3}},{score:{automation:3}},{score:{production:3}}] },
  { opts: [{score:{mecheng:3}},{score:{civil_eng:3}},{score:{robotics:3}},{score:{electrician:3}},{score:{automation:3}},{score:{production:3}}] },
];
