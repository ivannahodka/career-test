// L2 test — Financial Analyst / Financier
// Roles: fpa 📊 | investment 💹 | risk 🛡️ | fintech 🤖
// 6 questions × 8 languages

// ─── RU ──────────────────────────────────────────────────────────────────────
L2.financier.ru = {
  questions: [
    {
      t: 'Что тебе интереснее всего в финансовой работе?',
      o: [
        'Планировать бюджет и анализировать отклонения факта от плана',
        'Оценивать компании и находить инвестиционные возможности',
        'Выявлять риски и не давать компании попасть в ловушку',
        'Применять технологии и автоматизацию в финансах'
      ],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'Какой инструмент тебе ближе всего?',
      o: [
        'Excel / Power BI — бюджеты, прогнозы, P&L-модели',
        'Bloomberg / FactSet — рыночные данные, мультипликаторы, DCF',
        'Системы риск-менеджмента, сценарный анализ, VaR',
        'Python / SQL / BI-платформы — автоматизация и дашборды'
      ],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'С кем тебе интереснее работать?',
      o: [
        'С CFO и руководителями бизнес-юнитов — объяснять финансы нефинансистам',
        'С аналитиками рынков и инвест-командой',
        'С юристами, комплаенс и топ-менеджментом по управлению рисками',
        'С IT и продуктовой командой — строить финтех-продукты'
      ],
      s: [{fpa:3,risk:1},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'Что для тебя главный результат работы?',
      o: [
        'Бюджет принят, отклонения объяснены, бизнес принял верные решения',
        'Найден недооценённый актив, сделка закрыта с хорошей доходностью',
        'Риск выявлен заранее, потери предотвращены',
        'Процесс автоматизирован, ручной труд сокращён на 80%'
      ],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'Какую задачу ты готов решать часами?',
      o: [
        'Строить финансовые модели P&L, CF, Balance Sheet',
        'Анализировать отчётность компании и сравнивать с конкурентами',
        'Проводить стресс-тестирование и сценарный анализ',
        'Разрабатывать алгоритмы и пайплайны обработки финансовых данных'
      ],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'Как ты хочешь развиваться в карьере?',
      o: [
        'CFO крупной компании — управлять всеми финансами бизнеса',
        'Партнёр инвестиционного фонда или управляющий активами',
        'Chief Risk Officer — отвечать за риски на уровне совета директоров',
        'Основатель финтех-стартапа или CTO в финансовой компании'
      ],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    }
  ],
  roles: {
    fpa: {
      emoji: '📊',
      name: 'FP&A — Финансовое планирование и анализ',
      desc: 'Строю бюджеты, прогнозы и модели, которые помогают бизнесу принимать верные решения',
      detail: 'Ты — финансовый мозг компании. Готовишь годовые бюджеты, ежемесячные прогнозы, анализируешь отклонения план/факт и объясняешь их бизнесу. Работаешь с CFO и бизнес-юнитами. Инструменты: Excel, SAP, Power BI.',
      start: ['Курс Financial Modeling на CFI', 'Excel для финансистов — Advanced', 'Книга "Financial Intelligence" Бернман'],
      startUrls: ['https://corporatefinanceinstitute.com/resources/financial-modeling/','https://www.coursera.org/learn/excel-data-analysis','https://www.amazon.com/Financial-Intelligence-Revised-Managers-Knowing/dp/1422144119']
    },
    investment: {
      emoji: '💹',
      name: 'Инвестиционный аналитик',
      desc: 'Оцениваю компании и активы, ищу недооценённые возможности для инвестиций',
      detail: 'Ты работаешь в инвестиционном банке, фонде или M&A-команде. Строишь DCF-модели, сравниваешь компании по мультипликаторам, готовишь инвест-меморандумы. Ключевые навыки: финансовый анализ, оценка, презентации.',
      start: ['Wall Street Prep — Financial Modeling', 'Investment Banking by Rosenbaum', 'Bloomberg Market Concepts — бесплатно'],
      startUrls: ['https://www.wallstreetprep.com/','https://www.amazon.com/Investment-Banking-Valuation-Leveraged-Acquisitions/dp/1119706580','https://www.bloomberg.com/professional/solution/bloomberg-market-concepts/']
    },
    risk: {
      emoji: '🛡️',
      name: 'Риск-менеджер',
      desc: 'Выявляю и контролирую финансовые и операционные риски, защищая бизнес от потерь',
      detail: 'Ты строишь систему управления рисками: идентифицируешь, оцениваешь и снижаешь риски. Работаешь с моделями VaR, проводишь стресс-тесты, взаимодействуешь с регуляторами и комплаенс. Важен в банках, страховых и крупных корпорациях.',
      start: ['FRM (Financial Risk Manager) — GARP сертификат', 'Книга "Against the Gods" Бернштейн', 'Coursera: Financial Risk Management'],
      startUrls: ['https://www.garp.org/frm','https://www.amazon.com/Against-Gods-Remarkable-Story-Risk/dp/0471295639','https://www.coursera.org/learn/financial-risk-management-with-r']
    },
    fintech: {
      emoji: '🤖',
      name: 'FinTech-аналитик / Финансовый инженер',
      desc: 'Автоматизирую финансовые процессы и строю технологические продукты для финансов',
      detail: 'Ты на стыке финансов и технологий. Строишь алгоритмы для обработки данных, автоматизируешь отчётность, участвуешь в создании финтех-продуктов: платёжные системы, роботы-советники, скоринговые модели.',
      start: ['Python для финансов — курс на Coursera', 'Книга "Python for Finance" Yves Hilpisch', 'Kaggle — финансовые датасеты'],
      startUrls: ['https://www.coursera.org/learn/python-for-finance','https://www.amazon.com/Python-Finance-Mastering-Data-Driven/dp/1492024333','https://www.kaggle.com/search?q=finance']
    }
  },
  ui: {
    tag:'Специализация финансиста', title:'Финансовый аналитик',
    subtitle:'Найди свою нишу в финансах',
    prog:(n,t)=>`Вопрос ${n} из ${t}`,
    hint:'Выбери один ответ',
    back:'← Назад', next:'Далее →', finish:'Готово ✓',
    winBadge:'🏆 Твоя специализация',
    resTag:'Твоя ниша в финансах', resSub:'На основе твоих ответов',
    lblStart:'🚀 С чего начать',
    l2back:'← К результату теста',
  }
};

// ─── EN ──────────────────────────────────────────────────────────────────────
L2.financier.en = {
  questions: [
    {
      t: 'What excites you most about financial work?',
      o: [
        'Planning budgets and analyzing variance between actuals and forecasts',
        'Valuing companies and finding investment opportunities',
        'Identifying risks before they become losses',
        'Applying technology and automation to finance'
      ],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'Which tool feels most natural to you?',
      o: [
        'Excel / Power BI — budgets, forecasts, P&L models',
        'Bloomberg / FactSet — market data, multiples, DCF',
        'Risk management systems, scenario analysis, VaR',
        'Python / SQL / BI platforms — automation and dashboards'
      ],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'Who do you most enjoy working with?',
      o: [
        'CFO and business unit heads — translating finance for non-financial people',
        'Market analysts and investment teams',
        'Legal, compliance, and senior management on risk frameworks',
        'IT and product teams — building fintech products'
      ],
      s: [{fpa:3,risk:1},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'What does success look like in your work?',
      o: [
        'Budget approved, variances explained, business made better decisions',
        'Undervalued asset found, deal closed with solid returns',
        'Risk spotted early, losses prevented',
        'Process automated, manual work cut by 80%'
      ],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'What task could you work on for hours?',
      o: [
        'Building integrated financial models — P&L, Cash Flow, Balance Sheet',
        'Analyzing a company\'s financials and benchmarking against peers',
        'Running stress tests and scenario analysis',
        'Developing algorithms and pipelines for financial data processing'
      ],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'Where do you see yourself in your career?',
      o: [
        'CFO of a major company — managing all business finances',
        'Partner at an investment fund or asset manager',
        'Chief Risk Officer — reporting to the board on risk',
        'Founder of a fintech startup or CTO at a financial firm'
      ],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    }
  ],
  roles: {
    fpa: {
      emoji: '📊',
      name: 'FP&A — Financial Planning & Analysis',
      desc: 'Building budgets, forecasts, and models that help the business make the right decisions',
      detail: 'You are the financial brain of the company. You prepare annual budgets, monthly forecasts, analyze plan-vs-actual variances and explain them to business leaders. You work closely with the CFO and business units. Tools: Excel, SAP, Power BI.',
      start: ['Financial Modeling course at CFI', 'Advanced Excel for Finance', '"Financial Intelligence" by Berman'],
      startUrls: ['https://corporatefinanceinstitute.com/resources/financial-modeling/','https://www.coursera.org/learn/excel-data-analysis','https://www.amazon.com/Financial-Intelligence-Revised-Managers-Knowing/dp/1422144119']
    },
    investment: {
      emoji: '💹',
      name: 'Investment Analyst',
      desc: 'Valuing companies and assets, finding undervalued investment opportunities',
      detail: 'You work in investment banking, a fund, or M&A team. You build DCF models, compare companies on multiples, and write investment memos. Key skills: financial analysis, valuation, and persuasive presentations.',
      start: ['Wall Street Prep — Financial Modeling', '"Investment Banking" by Rosenbaum', 'Bloomberg Market Concepts — free'],
      startUrls: ['https://www.wallstreetprep.com/','https://www.amazon.com/Investment-Banking-Valuation-Leveraged-Acquisitions/dp/1119706580','https://www.bloomberg.com/professional/solution/bloomberg-market-concepts/']
    },
    risk: {
      emoji: '🛡️',
      name: 'Risk Manager',
      desc: 'Identifying and controlling financial and operational risks to protect the business from losses',
      detail: 'You build the risk management framework: identify, assess, and mitigate risks. You work with VaR models, run stress tests, and interact with regulators and compliance. In demand at banks, insurance companies, and large corporations.',
      start: ['FRM (Financial Risk Manager) — GARP certification', '"Against the Gods" by Peter Bernstein', 'Coursera: Financial Risk Management'],
      startUrls: ['https://www.garp.org/frm','https://www.amazon.com/Against-Gods-Remarkable-Story-Risk/dp/0471295639','https://www.coursera.org/learn/financial-risk-management-with-r']
    },
    fintech: {
      emoji: '🤖',
      name: 'FinTech Analyst / Financial Engineer',
      desc: 'Automating financial processes and building technology products for finance',
      detail: 'You sit at the intersection of finance and technology. You build data processing algorithms, automate reporting, and contribute to fintech products: payment systems, robo-advisors, and credit scoring models.',
      start: ['Python for Finance — Coursera course', '"Python for Finance" by Yves Hilpisch', 'Kaggle — finance datasets'],
      startUrls: ['https://www.coursera.org/learn/python-for-finance','https://www.amazon.com/Python-Finance-Mastering-Data-Driven/dp/1492024333','https://www.kaggle.com/search?q=finance']
    }
  },
  ui: {
    tag:'Finance Specialization', title:'Financial Analyst',
    subtitle:'Find your niche in finance',
    prog:(n,t)=>`Question ${n} of ${t}`,
    hint:'Choose one answer',
    back:'← Back', next:'Next →', finish:'Done ✓',
    winBadge:'🏆 Your Specialization',
    resTag:'Your finance niche', resSub:'Based on your answers',
    lblStart:'🚀 Where to start',
    l2back:'← Back to result',
  }
};

// ─── DE ──────────────────────────────────────────────────────────────────────
L2.financier.de = {
  questions: [
    {
      t: 'Was interessiert dich bei der Finanzarbeit am meisten?',
      o: ['Budgets planen und Ist-Plan-Abweichungen analysieren','Unternehmen bewerten und Investitionschancen finden','Risiken erkennen bevor sie zu Verlusten werden','Technologie und Automatisierung in Finanzen einsetzen'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'Welches Tool liegt dir am nächsten?',
      o: ['Excel / Power BI — Budgets, Prognosen, GuV-Modelle','Bloomberg / FactSet — Marktdaten, Multiples, DCF','Risikomanagement-Systeme, Szenarioanalyse, VaR','Python / SQL / BI-Plattformen — Automatisierung & Dashboards'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'Mit wem arbeitest du am liebsten?',
      o: ['CFO und Geschäftsbereichsleiter — Finanzen für Nicht-Finanziers erklären','Marktanalysten und Investment-Teams','Rechts-, Compliance- und Top-Management-Teams','IT- und Produktteams — FinTech-Produkte aufbauen'],
      s: [{fpa:3,risk:1},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'Was ist für dich das Hauptergebnis der Arbeit?',
      o: ['Budget genehmigt, Abweichungen erklärt, bessere Geschäftsentscheidungen','Unterbewerteten Vermögenswert gefunden, Deal mit guter Rendite abgeschlossen','Risiko frühzeitig erkannt, Verluste verhindert','Prozess automatisiert, manuelle Arbeit um 80% reduziert'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'An welcher Aufgabe kannst du stundenlang arbeiten?',
      o: ['Integrierte Finanzmodelle erstellen — GuV, Cash Flow, Bilanz','Unternehmensabschlüsse analysieren und mit Wettbewerbern vergleichen','Stresstests und Szenarioanalysen durchführen','Algorithmen und Pipelines für Finanzdaten entwickeln'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'Wie stellst du dir deine Karriere vor?',
      o: ['CFO eines großen Unternehmens','Partner bei einem Investmentfonds oder Asset Manager','Chief Risk Officer — Vorstandsverantwortung für Risiken','Gründer eines FinTech-Startups oder CTO'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    }
  ],
  roles: {
    fpa:        { emoji:'📊', name:'FP&A — Finanzplanung & Analyse', desc:'Budgets, Prognosen und Modelle für bessere Geschäftsentscheidungen', detail:'Du bist das finanzielle Gehirn des Unternehmens. Du erstellst Jahresbudgets, monatliche Forecasts und erklärst Abweichungen. Tools: Excel, SAP, Power BI.', start:['Financial Modeling bei CFI','Excel Advanced für Finanzen','"Financial Intelligence" von Berman'], startUrls:['https://corporatefinanceinstitute.com/resources/financial-modeling/','https://www.coursera.org/learn/excel-data-analysis','https://www.amazon.com/Financial-Intelligence-Revised-Managers-Knowing/dp/1422144119'] },
    investment: { emoji:'💹', name:'Investment-Analyst', desc:'Unternehmen und Vermögenswerte bewerten, unterbewertete Chancen finden', detail:'Du arbeitest in einer Investmentbank, einem Fonds oder M&A-Team. Du baust DCF-Modelle, vergleichst Multiples und schreibst Investment-Memos.', start:['Wall Street Prep','Investment Banking von Rosenbaum','Bloomberg Market Concepts — kostenlos'], startUrls:['https://www.wallstreetprep.com/','https://www.amazon.com/Investment-Banking-Valuation-Leveraged-Acquisitions/dp/1119706580','https://www.bloomberg.com/professional/solution/bloomberg-market-concepts/'] },
    risk:       { emoji:'🛡️', name:'Risikomanager', desc:'Finanzielle und operative Risiken identifizieren und kontrollieren', detail:'Du baust das Risikomanagementsystem: identifizieren, bewerten, mindern. Du arbeitest mit VaR-Modellen, Stresstests und Regulatoren.', start:['FRM-Zertifikat von GARP','"Against the Gods" von Bernstein','Coursera: Financial Risk Management'], startUrls:['https://www.garp.org/frm','https://www.amazon.com/Against-Gods-Remarkable-Story-Risk/dp/0471295639','https://www.coursera.org/learn/financial-risk-management-with-r'] },
    fintech:    { emoji:'🤖', name:'FinTech-Analyst / Financial Engineer', desc:'Finanzprozesse automatisieren und Technologieprodukte für Finance entwickeln', detail:'Du verbindest Finanzen und Technologie. Du baust Datenpipelines, automatisierst Berichte und entwickelst FinTech-Produkte.', start:['Python for Finance auf Coursera','"Python for Finance" von Hilpisch','Kaggle — Finanzdatensätze'], startUrls:['https://www.coursera.org/learn/python-for-finance','https://www.amazon.com/Python-Finance-Mastering-Data-Driven/dp/1492024333','https://www.kaggle.com/search?q=finance'] }
  },
  ui: { tag:'Finanzspezialisierung', title:'Finanzanalyst', subtitle:'Finde deine Nische in der Finanzwelt', prog:(n,t)=>`Frage ${n} von ${t}`, hint:'Eine Antwort wählen', back:'← Zurück', next:'Weiter →', finish:'Fertig ✓', winBadge:'🏆 Deine Spezialisierung', resTag:'Deine Finanz-Nische', resSub:'Basierend auf deinen Antworten', lblStart:'🚀 Wie anfangen', l2back:'← Zurück zum Ergebnis' }
};

// ─── FR ──────────────────────────────────────────────────────────────────────
L2.financier.fr = {
  questions: [
    {
      t: 'Qu\'est-ce qui vous intéresse le plus dans le travail financier ?',
      o: ['Planifier les budgets et analyser les écarts plan/réel','Évaluer les entreprises et trouver des opportunités d\'investissement','Identifier les risques avant qu\'ils ne deviennent des pertes','Appliquer la technologie et l\'automatisation à la finance'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'Quel outil vous est le plus naturel ?',
      o: ['Excel / Power BI — budgets, prévisions, modèles P&L','Bloomberg / FactSet — données de marché, multiples, DCF','Systèmes de gestion des risques, analyse de scénarios, VaR','Python / SQL / plateformes BI — automatisation et tableaux de bord'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'Avec qui aimez-vous travailler ?',
      o: ['DAF et responsables métier — expliquer la finance aux non-financiers','Analystes de marché et équipes d\'investissement','Juridique, conformité et direction générale sur les risques','Équipes IT et produit — construire des produits fintech'],
      s: [{fpa:3,risk:1},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'Quel est le principal résultat de votre travail ?',
      o: ['Budget validé, écarts expliqués, meilleures décisions d\'entreprise','Actif sous-évalué trouvé, deal clôturé avec un bon rendement','Risque détecté tôt, pertes évitées','Processus automatisé, travail manuel réduit de 80%'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'Sur quelle tâche pouvez-vous travailler des heures ?',
      o: ['Construire des modèles financiers intégrés — P&L, Cash Flow, Bilan','Analyser les états financiers d\'une société et les comparer aux pairs','Réaliser des stress-tests et analyses de scénarios','Développer des algorithmes et pipelines de données financières'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'Comment imaginez-vous votre carrière ?',
      o: ['DAF d\'une grande entreprise','Associé dans un fonds d\'investissement ou gestionnaire d\'actifs','Chief Risk Officer — responsable des risques au niveau du conseil','Fondateur d\'une fintech ou CTO dans une société financière'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    }
  ],
  roles: {
    fpa:        { emoji:'📊', name:'FP&A — Planification & Analyse Financière', desc:'Budgets, prévisions et modèles pour de meilleures décisions d\'entreprise', detail:'Vous êtes le cerveau financier de l\'entreprise. Vous préparez les budgets annuels, les prévisions mensuelles et expliquez les écarts aux métiers. Outils : Excel, SAP, Power BI.', start:['Formation Financial Modeling sur CFI','Excel avancé pour la finance','"Financial Intelligence" de Berman'], startUrls:['https://corporatefinanceinstitute.com/resources/financial-modeling/','https://www.coursera.org/learn/excel-data-analysis','https://www.amazon.com/Financial-Intelligence-Revised-Managers-Knowing/dp/1422144119'] },
    investment: { emoji:'💹', name:'Analyste en investissement', desc:'Évaluer des entreprises et actifs, trouver des opportunités sous-évaluées', detail:'Vous travaillez en banque d\'investissement, dans un fonds ou une équipe M&A. Vous construisez des modèles DCF, comparez des multiples et rédigez des mémorandums d\'investissement.', start:['Wall Street Prep','Investment Banking de Rosenbaum','Bloomberg Market Concepts — gratuit'], startUrls:['https://www.wallstreetprep.com/','https://www.amazon.com/Investment-Banking-Valuation-Leveraged-Acquisitions/dp/1119706580','https://www.bloomberg.com/professional/solution/bloomberg-market-concepts/'] },
    risk:       { emoji:'🛡️', name:'Gestionnaire des risques', desc:'Identifier et contrôler les risques financiers et opérationnels', detail:'Vous construisez le cadre de gestion des risques : identifier, évaluer, atténuer. Vous travaillez avec des modèles VaR, des stress-tests et des régulateurs.', start:['Certification FRM de GARP','"Against the Gods" de Bernstein','Coursera : Financial Risk Management'], startUrls:['https://www.garp.org/frm','https://www.amazon.com/Against-Gods-Remarkable-Story-Risk/dp/0471295639','https://www.coursera.org/learn/financial-risk-management-with-r'] },
    fintech:    { emoji:'🤖', name:'Analyste FinTech / Ingénieur financier', desc:'Automatiser les processus financiers et créer des produits technologiques', detail:'Vous êtes à l\'intersection de la finance et de la technologie. Vous construisez des pipelines de données, automatisez les rapports et développez des produits fintech.', start:['Python for Finance sur Coursera','"Python for Finance" de Hilpisch','Kaggle — jeux de données financières'], startUrls:['https://www.coursera.org/learn/python-for-finance','https://www.amazon.com/Python-Finance-Mastering-Data-Driven/dp/1492024333','https://www.kaggle.com/search?q=finance'] }
  },
  ui: { tag:'Spécialisation Finance', title:'Analyste Financier', subtitle:'Trouvez votre niche dans la finance', prog:(n,t)=>`Question ${n} sur ${t}`, hint:'Choisissez une réponse', back:'← Retour', next:'Suivant →', finish:'Terminer ✓', winBadge:'🏆 Votre Spécialisation', resTag:'Votre niche en finance', resSub:'Selon vos réponses', lblStart:'🚀 Par où commencer', l2back:'← Retour au résultat' }
};

// ─── ES ──────────────────────────────────────────────────────────────────────
L2.financier.es = {
  questions: [
    {
      t: '¿Qué te interesa más del trabajo financiero?',
      o: ['Planificar presupuestos y analizar desviaciones plan/real','Valorar empresas y encontrar oportunidades de inversión','Identificar riesgos antes de que se conviertan en pérdidas','Aplicar tecnología y automatización a las finanzas'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: '¿Qué herramienta te resulta más natural?',
      o: ['Excel / Power BI — presupuestos, previsiones, modelos P&L','Bloomberg / FactSet — datos de mercado, múltiplos, DCF','Sistemas de gestión de riesgos, análisis de escenarios, VaR','Python / SQL / plataformas BI — automatización y dashboards'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: '¿Con quién disfrutas más trabajar?',
      o: ['CFO y directores de negocio — explicar finanzas a no financieros','Analistas de mercado y equipos de inversión','Legal, compliance y alta dirección en gestión de riesgos','Equipos de IT y producto — construir productos fintech'],
      s: [{fpa:3,risk:1},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: '¿Cuál es el principal resultado de tu trabajo?',
      o: ['Presupuesto aprobado, desviaciones explicadas, mejores decisiones','Activo infravalorado encontrado, operación cerrada con buena rentabilidad','Riesgo detectado a tiempo, pérdidas evitadas','Proceso automatizado, trabajo manual reducido un 80%'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: '¿En qué tarea podrías trabajar durante horas?',
      o: ['Construir modelos financieros integrados — P&L, Cash Flow, Balance','Analizar estados financieros de una empresa y compararlos con la competencia','Realizar pruebas de estrés y análisis de escenarios','Desarrollar algoritmos y pipelines para datos financieros'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: '¿Cómo imaginas tu carrera?',
      o: ['CFO de una gran empresa','Socio en un fondo de inversión o gestor de activos','Chief Risk Officer — responsable de riesgos ante el consejo','Fundador de una fintech o CTO en una empresa financiera'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    }
  ],
  roles: {
    fpa:        { emoji:'📊', name:'FP&A — Planificación y Análisis Financiero', desc:'Presupuestos, previsiones y modelos para mejores decisiones empresariales', detail:'Eres el cerebro financiero de la empresa. Preparas presupuestos anuales, previsiones mensuales y explicas desviaciones a los directivos. Herramientas: Excel, SAP, Power BI.', start:['Curso Financial Modeling en CFI','Excel avanzado para finanzas','"Financial Intelligence" de Berman'], startUrls:['https://corporatefinanceinstitute.com/resources/financial-modeling/','https://www.coursera.org/learn/excel-data-analysis','https://www.amazon.com/Financial-Intelligence-Revised-Managers-Knowing/dp/1422144119'] },
    investment: { emoji:'💹', name:'Analista de inversiones', desc:'Valorar empresas y activos, encontrar oportunidades infravaloradas', detail:'Trabajas en banca de inversión, un fondo o equipo de M&A. Construyes modelos DCF, comparas múltiplos y redactas memorandos de inversión.', start:['Wall Street Prep','Investment Banking de Rosenbaum','Bloomberg Market Concepts — gratis'], startUrls:['https://www.wallstreetprep.com/','https://www.amazon.com/Investment-Banking-Valuation-Leveraged-Acquisitions/dp/1119706580','https://www.bloomberg.com/professional/solution/bloomberg-market-concepts/'] },
    risk:       { emoji:'🛡️', name:'Gestor de riesgos', desc:'Identificar y controlar riesgos financieros y operativos', detail:'Construyes el sistema de gestión de riesgos: identificar, evaluar, mitigar. Trabajas con modelos VaR, pruebas de estrés y reguladores.', start:['Certificación FRM de GARP','"Against the Gods" de Bernstein','Coursera: Financial Risk Management'], startUrls:['https://www.garp.org/frm','https://www.amazon.com/Against-Gods-Remarkable-Story-Risk/dp/0471295639','https://www.coursera.org/learn/financial-risk-management-with-r'] },
    fintech:    { emoji:'🤖', name:'Analista FinTech / Ingeniero financiero', desc:'Automatizar procesos financieros y crear productos tecnológicos', detail:'Estás en la intersección de finanzas y tecnología. Construyes pipelines de datos, automatizas informes y desarrollas productos fintech.', start:['Python for Finance en Coursera','"Python for Finance" de Hilpisch','Kaggle — conjuntos de datos financieros'], startUrls:['https://www.coursera.org/learn/python-for-finance','https://www.amazon.com/Python-Finance-Mastering-Data-Driven/dp/1492024333','https://www.kaggle.com/search?q=finance'] }
  },
  ui: { tag:'Especialización en Finanzas', title:'Analista Financiero', subtitle:'Encuentra tu nicho en las finanzas', prog:(n,t)=>`Pregunta ${n} de ${t}`, hint:'Elige una respuesta', back:'← Atrás', next:'Siguiente →', finish:'Listo ✓', winBadge:'🏆 Tu Especialización', resTag:'Tu nicho en finanzas', resSub:'Según tus respuestas', lblStart:'🚀 Cómo empezar', l2back:'← Volver al resultado' }
};

// ─── PT ──────────────────────────────────────────────────────────────────────
L2.financier.pt = {
  questions: [
    {
      t: 'O que mais te interessa no trabalho financeiro?',
      o: ['Planejar orçamentos e analisar desvios plano/real','Avaliar empresas e encontrar oportunidades de investimento','Identificar riscos antes que se tornem perdas','Aplicar tecnologia e automação nas finanças'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'Qual ferramenta te parece mais natural?',
      o: ['Excel / Power BI — orçamentos, previsões, modelos P&L','Bloomberg / FactSet — dados de mercado, múltiplos, DCF','Sistemas de gestão de riscos, análise de cenários, VaR','Python / SQL / plataformas BI — automação e dashboards'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'Com quem você mais gosta de trabalhar?',
      o: ['CFO e líderes de negócio — explicar finanças para não financeiros','Analistas de mercado e equipes de investimento','Jurídico, compliance e alta direção em gestão de riscos','Equipes de TI e produto — construir produtos fintech'],
      s: [{fpa:3,risk:1},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'Qual é o principal resultado do seu trabalho?',
      o: ['Orçamento aprovado, desvios explicados, melhores decisões','Ativo subavaliado encontrado, negócio fechado com boa rentabilidade','Risco detectado cedo, perdas evitadas','Processo automatizado, trabalho manual reduzido em 80%'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'Em qual tarefa você consegue trabalhar por horas?',
      o: ['Construir modelos financeiros integrados — P&L, Fluxo de Caixa, Balanço','Analisar demonstrações financeiras e comparar com concorrentes','Realizar testes de estresse e análise de cenários','Desenvolver algoritmos e pipelines de dados financeiros'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'Como você imagina sua carreira?',
      o: ['CFO de uma grande empresa','Sócio em fundo de investimento ou gestor de ativos','Chief Risk Officer — responsável por riscos no conselho','Fundador de uma fintech ou CTO em empresa financeira'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    }
  ],
  roles: {
    fpa:        { emoji:'📊', name:'FP&A — Planejamento e Análise Financeira', desc:'Orçamentos, previsões e modelos para melhores decisões empresariais', detail:'Você é o cérebro financeiro da empresa. Prepara orçamentos anuais, previsões mensais e explica desvios para os gestores. Ferramentas: Excel, SAP, Power BI.', start:['Curso Financial Modeling no CFI','Excel avançado para finanças','"Financial Intelligence" de Berman'], startUrls:['https://corporatefinanceinstitute.com/resources/financial-modeling/','https://www.coursera.org/learn/excel-data-analysis','https://www.amazon.com/Financial-Intelligence-Revised-Managers-Knowing/dp/1422144119'] },
    investment: { emoji:'💹', name:'Analista de Investimentos', desc:'Avaliar empresas e ativos, encontrar oportunidades subavaliadas', detail:'Você trabalha em banco de investimento, fundo ou equipe de M&A. Constrói modelos DCF, compara múltiplos e escreve memorandos de investimento.', start:['Wall Street Prep','Investment Banking de Rosenbaum','Bloomberg Market Concepts — gratuito'], startUrls:['https://www.wallstreetprep.com/','https://www.amazon.com/Investment-Banking-Valuation-Leveraged-Acquisitions/dp/1119706580','https://www.bloomberg.com/professional/solution/bloomberg-market-concepts/'] },
    risk:       { emoji:'🛡️', name:'Gestor de Riscos', desc:'Identificar e controlar riscos financeiros e operacionais', detail:'Você constrói o sistema de gestão de riscos: identificar, avaliar, mitigar. Trabalha com modelos VaR, testes de estresse e reguladores.', start:['Certificação FRM da GARP','"Against the Gods" de Bernstein','Coursera: Financial Risk Management'], startUrls:['https://www.garp.org/frm','https://www.amazon.com/Against-Gods-Remarkable-Story-Risk/dp/0471295639','https://www.coursera.org/learn/financial-risk-management-with-r'] },
    fintech:    { emoji:'🤖', name:'Analista FinTech / Engenheiro Financeiro', desc:'Automatizar processos financeiros e criar produtos de tecnologia', detail:'Você está na interseção de finanças e tecnologia. Constrói pipelines de dados, automatiza relatórios e desenvolve produtos fintech.', start:['Python for Finance no Coursera','"Python for Finance" de Hilpisch','Kaggle — conjuntos de dados financeiros'], startUrls:['https://www.coursera.org/learn/python-for-finance','https://www.amazon.com/Python-Finance-Mastering-Data-Driven/dp/1492024333','https://www.kaggle.com/search?q=finance'] }
  },
  ui: { tag:'Especialização em Finanças', title:'Analista Financeiro', subtitle:'Encontre seu nicho nas finanças', prog:(n,t)=>`Pergunta ${n} de ${t}`, hint:'Escolha uma resposta', back:'← Voltar', next:'Próximo →', finish:'Concluir ✓', winBadge:'🏆 Sua Especialização', resTag:'Seu nicho em finanças', resSub:'Com base nas suas respostas', lblStart:'🚀 Como começar', l2back:'← Voltar ao resultado' }
};

// ─── AR ──────────────────────────────────────────────────────────────────────
L2.financier.ar = {
  questions: [
    {
      t: 'ما الذي يثير اهتمامك أكثر في العمل المالي؟',
      o: ['التخطيط للميزانيات وتحليل الانحرافات عن الخطة','تقييم الشركات وإيجاد فرص استثمارية','الكشف عن المخاطر قبل أن تتحول إلى خسائر','تطبيق التكنولوجيا والأتمتة في المالية'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'أي أداة تشعر أنها الأقرب إليك؟',
      o: ['Excel / Power BI — ميزانيات وتوقعات ونماذج P&L','Bloomberg / FactSet — بيانات السوق والمضاعفات وDCF','أنظمة إدارة المخاطر وتحليل السيناريوهات وVaR','Python / SQL / منصات BI — أتمتة ولوحات بيانات'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'مع من تستمتع بالعمل أكثر؟',
      o: ['المدير المالي ورؤساء الأعمال — شرح الماليات لغير الماليين','محللي السوق وفرق الاستثمار','الفرق القانونية والامتثال والإدارة العليا في مجال المخاطر','فرق تكنولوجيا المعلومات والمنتج — بناء منتجات فينتك'],
      s: [{fpa:3,risk:1},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'ما هو النتيجة الرئيسية لعملك؟',
      o: ['ميزانية معتمدة وانحرافات موضّحة وقرارات أعمال أفضل','أصل مقيَّم بأقل من قيمته تم إيجاده وإتمام الصفقة بعائد جيد','مخاطرة اكتُشفت مبكراً وخسائر جرى تجنبها','عملية مؤتمتة وتقليص العمل اليدوي بنسبة 80٪'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'على أي مهمة يمكنك العمل لساعات؟',
      o: ['بناء نماذج مالية متكاملة — P&L والتدفق النقدي والميزانية العمومية','تحليل البيانات المالية لشركة ومقارنتها بالمنافسين','إجراء اختبارات الإجهاد وتحليل السيناريوهات','تطوير خوارزميات وخطوط أنابيب لمعالجة البيانات المالية'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'كيف تتخيل مسيرتك المهنية؟',
      o: ['مدير مالي رئيسي لشركة كبرى','شريك في صندوق استثمار أو مدير أصول','Chief Risk Officer — مسؤول عن المخاطر أمام مجلس الإدارة','مؤسس شركة فينتك ناشئة أو مدير تقني في شركة مالية'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    }
  ],
  roles: {
    fpa:        { emoji:'📊', name:'FP&A — التخطيط والتحليل المالي', desc:'الميزانيات والتوقعات والنماذج لاتخاذ قرارات أعمال أفضل', detail:'أنت العقل المالي للشركة. تُعِدّ الميزانيات السنوية والتوقعات الشهرية وتشرح الانحرافات للمديرين. الأدوات: Excel وSAP وPower BI.', start:['دورة Financial Modeling في CFI','Excel المتقدم للماليين','كتاب "Financial Intelligence" لبيرمان'], startUrls:['https://corporatefinanceinstitute.com/resources/financial-modeling/','https://www.coursera.org/learn/excel-data-analysis','https://www.amazon.com/Financial-Intelligence-Revised-Managers-Knowing/dp/1422144119'] },
    investment: { emoji:'💹', name:'محلل استثمار', desc:'تقييم الشركات والأصول وإيجاد الفرص المقيَّمة بأقل من قيمتها', detail:'تعمل في بنك استثمار أو صندوق أو فريق M&A. تبني نماذج DCF وتقارن المضاعفات وتكتب مذكرات الاستثمار.', start:['Wall Street Prep','كتاب Investment Banking لروزنباوم','Bloomberg Market Concepts — مجاناً'], startUrls:['https://www.wallstreetprep.com/','https://www.amazon.com/Investment-Banking-Valuation-Leveraged-Acquisitions/dp/1119706580','https://www.bloomberg.com/professional/solution/bloomberg-market-concepts/'] },
    risk:       { emoji:'🛡️', name:'مدير المخاطر', desc:'تحديد المخاطر المالية والتشغيلية والسيطرة عليها', detail:'تبني منظومة إدارة المخاطر: التعرف والتقييم والتخفيف. تعمل مع نماذج VaR واختبارات الإجهاد والجهات الرقابية.', start:['شهادة FRM من GARP','كتاب "Against the Gods" لبرنشتاين','Coursera: Financial Risk Management'], startUrls:['https://www.garp.org/frm','https://www.amazon.com/Against-Gods-Remarkable-Story-Risk/dp/0471295639','https://www.coursera.org/learn/financial-risk-management-with-r'] },
    fintech:    { emoji:'🤖', name:'محلل فينتك / مهندس مالي', desc:'أتمتة العمليات المالية وبناء المنتجات التقنية للمالية', detail:'أنت على مفترق الطرق بين المالية والتكنولوجيا. تبني خطوط أنابيب البيانات وتؤتمت التقارير وتطور منتجات فينتك.', start:['دورة Python for Finance في Coursera','كتاب "Python for Finance" لهيلبيش','Kaggle — مجموعات بيانات مالية'], startUrls:['https://www.coursera.org/learn/python-for-finance','https://www.amazon.com/Python-Finance-Mastering-Data-Driven/dp/1492024333','https://www.kaggle.com/search?q=finance'] }
  },
  ui: { tag:'تخصص في المالية', title:'المحلل المالي', subtitle:'ابحث عن مكانتك في المالية', prog:(n,t)=>`سؤال ${n} من ${t}`, hint:'اختر إجابة واحدة', back:'← رجوع', next:'التالي ←', finish:'تم ✓', winBadge:'🏆 تخصصك', resTag:'مكانتك في المالية', resSub:'بناءً على إجاباتك', lblStart:'🚀 كيف تبدأ', l2back:'← العودة إلى النتيجة' }
};

// ─── HE ──────────────────────────────────────────────────────────────────────
L2.financier.he = {
  questions: [
    {
      t: 'מה מעניין אותך הכי הרבה בעבודה פיננסית?',
      o: ['לתכנן תקציבים ולנתח סטיות תוכנית/ביצוע','להעריך חברות ולמצוא הזדמנויות השקעה','לזהות סיכונים לפני שהם הופכים להפסדים','ליישם טכנולוגיה ואוטומציה בפיננסים'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'איזה כלי מרגיש לך הכי טבעי?',
      o: ['Excel / Power BI — תקציבים, תחזיות, מודלי P&L','Bloomberg / FactSet — נתוני שוק, מכפילים, DCF','מערכות ניהול סיכונים, ניתוח תרחישים, VaR','Python / SQL / פלטפורמות BI — אוטומציה ודשבורדים'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'עם מי אתה הכי אוהב לעבוד?',
      o: ['CFO וראשי יחידות עסקיות — להסביר פיננסים ללא-פיננסיים','אנליסטי שוק וצוותי השקעות','משפטי, ציות והנהלה בכירה בנושאי סיכונים','צוותי IT ומוצר — לבנות מוצרי פינטק'],
      s: [{fpa:3,risk:1},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'מה התוצאה העיקרית של עבודתך?',
      o: ['תקציב מאושר, סטיות מוסברות, החלטות עסקיות טובות יותר','נכס מוערך בחסר נמצא, עסקה נסגרה עם תשואה טובה','סיכון זוהה מוקדם, הפסדים נמנעו','תהליך אוטומטי, עבודה ידנית ירדה ב-80%'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'על איזה משימה אתה יכול לעבוד שעות?',
      o: ['לבנות מודלים פיננסיים משולבים — P&L, תזרים מזומנים, מאזן','לנתח דוחות כספיים של חברה ולהשוות למתחרים','לבצע מבחני קיצון וניתוח תרחישים','לפתח אלגוריתמים ופייפליינים לעיבוד נתונים פיננסיים'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    },
    {
      t: 'איך אתה מדמיין את הקריירה שלך?',
      o: ['CFO של חברה גדולה','שותף בקרן השקעות או מנהל נכסים','Chief Risk Officer — אחריות על סיכונים בפני הדירקטוריון','מייסד של סטארטאפ פינטק או CTO בחברה פיננסית'],
      s: [{fpa:3},{investment:3},{risk:3},{fintech:3}]
    }
  ],
  roles: {
    fpa:        { emoji:'📊', name:'FP&A — תכנון וניתוח פיננסי', desc:'תקציבים, תחזיות ומודלים להחלטות עסקיות טובות יותר', detail:'אתה המוח הפיננסי של החברה. מכין תקציבים שנתיים, תחזיות חודשיות ומסביר סטיות למנהלים. כלים: Excel, SAP, Power BI.', start:['קורס Financial Modeling ב-CFI','Excel מתקדם לפיננסים','הספר "Financial Intelligence" של ברמן'], startUrls:['https://corporatefinanceinstitute.com/resources/financial-modeling/','https://www.coursera.org/learn/excel-data-analysis','https://www.amazon.com/Financial-Intelligence-Revised-Managers-Knowing/dp/1422144119'] },
    investment: { emoji:'💹', name:'אנליסט השקעות', desc:'הערכת חברות ונכסים, מציאת הזדמנויות מוערכות בחסר', detail:'עובד בבנק השקעות, קרן או צוות M&A. בונה מודלי DCF, משווה מכפילים וכותב מסמכי השקעה.', start:['Wall Street Prep','Investment Banking של רוזנבאום','Bloomberg Market Concepts — חינמי'], startUrls:['https://www.wallstreetprep.com/','https://www.amazon.com/Investment-Banking-Valuation-Leveraged-Acquisitions/dp/1119706580','https://www.bloomberg.com/professional/solution/bloomberg-market-concepts/'] },
    risk:       { emoji:'🛡️', name:'מנהל סיכונים', desc:'זיהוי ושליטה בסיכונים פיננסיים ותפעוליים', detail:'בונה מערכת ניהול סיכונים: זיהוי, הערכה, הפחתה. עובד עם מודלי VaR, מבחני קיצון ורגולטורים.', start:['הסמכת FRM של GARP','הספר "Against the Gods" של ברנשטיין','Coursera: Financial Risk Management'], startUrls:['https://www.garp.org/frm','https://www.amazon.com/Against-Gods-Remarkable-Story-Risk/dp/0471295639','https://www.coursera.org/learn/financial-risk-management-with-r'] },
    fintech:    { emoji:'🤖', name:'אנליסט פינטק / מהנדס פיננסי', desc:'אוטומציה של תהליכים פיננסיים ובניית מוצרי טכנולוגיה', detail:'אתה בצומת פיננסים וטכנולוגיה. בונה פייפליינים לנתונים, מאוטמת דוחות ומפתח מוצרי פינטק.', start:['דורת Python for Finance ב-Coursera','הספר "Python for Finance" של הילפיש','Kaggle — מאגרי נתונים פיננסיים'], startUrls:['https://www.coursera.org/learn/python-for-finance','https://www.amazon.com/Python-Finance-Mastering-Data-Driven/dp/1492024333','https://www.kaggle.com/search?q=finance'] }
  },
  ui: { tag:'התמחות בפיננסים', title:'אנליסט פיננסי', subtitle:'מצא את הנישה שלך בעולם הפיננסים', prog:(n,t)=>`שאלה ${n} מתוך ${t}`, hint:'בחר תשובה אחת', back:'← חזרה', next:'הבא ←', finish:'סיום ✓', winBadge:'🏆 ההתמחות שלך', resTag:'הנישה שלך בפיננסים', resSub:'על פי תשובותיך', lblStart:'🚀 איך להתחיל', l2back:'← חזרה לתוצאה' }
};

L2.financier.zh = {
  questions: [
    {t:'金融中什么最吸引你？', o:['财务规划——预算、预测、支撑公司战略','投资——分析资产，做出明智的投资决策','风险管理——识别和规避金融风险','金融科技——用技术颠覆传统金融'], s:[{fpa:3},{investment:3},{risk:3},{fintech:3}]},
    {t:'你最想精通哪个领域？', o:['财务建模——三表联动、DCF估值','股票分析、PE/VC尽职调查','VaR风险模型、Basel III合规','支付系统、量化策略或DeFi'], s:[{fpa:3},{investment:3},{risk:3},{fintech:3}]},
    {t:'什么工作成果最让你有成就感？', o:['你的财务模型帮公司做出了一个重要决策','你分析的股票两年后翻了3倍','你建立的风控体系避免了一次重大损失','你设计的金融产品改变了用户的理财方式'], s:[{fpa:3},{investment:3},{risk:3},{fintech:3}]},
    {t:'你更喜欢哪种工作？', o:['做月度财务分析和年度预算规划','研究公司报表，写深度研究报告','压力测试，设计风控指标体系','写代码做量化回测，或设计金融产品'], s:[{fpa:3},{investment:3},{risk:3},{fintech:3}]},
    {t:'你会选择哪个项目？', o:['为一家创业公司做完整的财务规划','分析一家公司并给出买入/卖出建议','为一家银行设计信用风险评估模型','开发一个自动化投资组合管理工具'], s:[{fpa:3},{investment:3},{risk:3},{fintech:3}]},
    {t:'10年后你在哪里？', o:['上市公司CFO','对冲基金合伙人','全球性银行首席风险官','金融科技独角兽的联合创始人'], s:[{fpa:3},{investment:3},{risk:3},{fintech:3}]}
  ],
  roles: {
    fpa: {emoji:'📊', name:'财务规划分析师（FP&A）', desc:'用财务数字指导公司战略，让管理层做出更好的决策', detail:'你是公司的财务导航仪。你做年度预算、季度预测和经营分析，你的报告直达CEO和董事会。', start:['掌握Excel财务建模——三表联动','学习Power BI或Tableau做数据可视化','了解企业会计基础——P&L、资产负债表','阅读《财务分析师》——CFA Level 1入门材料']},
    investment: {emoji:'💰', name:'投资分析师', desc:'研究资产和公司，识别投资机会，为客户或自己创造回报', detail:'你的工作是找到价值被低估的机会。你研究财务报表、行业趋势和竞争格局，写出有深度的研究报告。', start:['学习财务报表分析——三张表如何联动','了解估值方法——DCF、可比公司分析','阅读巴菲特的股东信——免费且极有价值','尝试参加CFA Level 1考试']},
    risk: {emoji:'🛡️', name:'风险管理师', desc:'识别、量化和控制金融风险，保护机构和客户的资产', detail:'你是金融系统的守门人。你评估信用风险、市场风险和操作风险，设计压力测试场景，确保机构在极端情况下也能生存。', start:['学习风险管理基础——VaR、CVaR的概念','了解Basel III和金融监管框架','学习Python用于风险模型——scipy、numpy','考取FRM（金融风险管理师）认证']},
    fintech: {emoji:'⚡', name:'金融科技专家', desc:'把技术应用到金融，重新定义人们管理和使用金钱的方式', detail:'你站在金融和技术的交叉点。你可能在构建支付系统、量化交易策略、个人理财应用，或者区块链金融协议。', start:['了解支付行业——Stripe文档是最好的教材','学习Python——在量化金融中广泛使用','了解区块链基础——以太坊白皮书','研究成功的Fintech产品——Revolut、Robinhood的设计']}
  },
  ui: {l2back:'← 返回金融', title:'金融：选择你的专业方向'}
};
