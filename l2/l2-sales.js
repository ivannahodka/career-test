'use strict';
/* ── L2: Менеджер по продажам / Sales-менеджер ───────────────────────────────
   4 roles: b2b 🤝 | b2c 🛍️ | account 📋 | bizdev 🚀
   6 questions × 8 languages  /  structure: { t, o, s } per question
──────────────────────────────────────────────────────────────────────────── */

// ─── RU ──────────────────────────────────────────────────────────────────────
L2.sales.ru = {
  questions: [
    {
      t: 'Что тебя больше всего заряжает в продажах?',
      o: [
        'Закрыть сложную сделку с корпоративным клиентом после месяцев переговоров',
        'Высокий поток клиентов, быстрые решения и живое общение',
        'Выстраивать долгосрочные отношения и расти вместе с клиентом',
        'Открывать новые рынки и выстраивать партнёрства с нуля'
      ],
      s: [{b2b:3},{b2c:3},{account:3},{bizdev:3}]
    },
    {
      t: 'Какой тип сделок тебе ближе?',
      o: [
        'Большие контракты, несколько месяцев цикла, много стейкхолдеров',
        'Много небольших сделок в день, быстрый результат',
        'Расширение договора с действующим клиентом (upsell / cross-sell)',
        'Стратегические партнёрства, дистрибьюторы, новые каналы'
      ],
      s: [{b2b:3},{b2c:3},{account:3},{bizdev:3}]
    },
    {
      t: 'Какой навык ты считаешь своей суперсилой?',
      o: [
        'Выстраивать доверие с ЛПРами (лицами принимающими решения) на уровне C-suite',
        'Быстро считывать людей и закрывать возражения на ходу',
        'Знать клиента лучше, чем он знает себя — и предугадывать потребности',
        'Видеть возможности там, где другие видят только проблемы'
      ],
      s: [{b2b:3},{b2c:3},{account:3},{bizdev:3}]
    },
    {
      t: 'Как выглядит твой идеальный рабочий день?',
      o: [
        'Встречи с топ-менеджерами, подготовка коммерческих предложений, переговоры',
        'Звонки, демо, встречи — максимальный поток новых контактов',
        'Регулярные звонки с текущими клиентами, анализ их задач, поиск точек роста',
        'Исследование рынков, встречи с потенциальными партнёрами, стратегические питчи'
      ],
      s: [{b2b:3},{b2c:3},{account:3},{bizdev:3}]
    },
    {
      t: 'Какой инструмент тебе важнее всего?',
      o: [
        'Salesforce / HubSpot CRM — управление длинными воронками',
        'Скрипт продаж, телефония, быстрая CRM для входящего потока',
        'Success Plan, NPS-опросы, платформы лояльности (Gainsight)',
        'LinkedIn Sales Navigator, инструменты поиска партнёров, pitch-деки'
      ],
      s: [{b2b:3},{b2c:2,b2b:1},{account:3},{bizdev:3}]
    },
    {
      t: 'Как выглядит твой успех через 5 лет?',
      o: [
        'Head of Enterprise Sales — руковожу командой и закрываю стратегические сделки',
        'Директор по продажам с рекордными показателями выручки',
        'VP of Customer Success — отвечаю за удержание и рост всей клиентской базы',
        'Chief Business Development Officer — строю новые направления и рынки'
      ],
      s: [{b2b:3},{b2c:3},{account:3},{bizdev:3}]
    }
  ],
  roles: {
    b2b: {
      emoji: '🤝',
      name: 'B2B Sales — Корпоративные продажи',
      desc: 'Ведёшь сложные длинные сделки с бизнес-клиентами, работаешь с несколькими стейкхолдерами и заключаешь крупные контракты',
      detail: 'Твой мир — это тендеры, КП и многомесячные переговоры. Ты умеешь общаться с директорами и убеждать комитеты. Каждая закрытая сделка — это результат настойчивости, стратегии и доверия.',
      start: ['Изучи методологию SPIN или Challenger Sales', 'Освой Salesforce или HubSpot на продвинутом уровне', 'Разбери кейсы крупных B2B-компаний: как они выстраивают воронку', 'Пройди курс по переговорам (Harvard Negotiation Project)'],
      startUrls: ['https://www.salesgravy.com/sales-articles/', 'https://www.hubspot.com/products/crm', 'https://www.coursera.org/learn/negotiation', 'https://blog.hubspot.com/sales/b2b-sales']
    },
    b2c: {
      emoji: '🛍️',
      name: 'B2C Sales — Розничные продажи',
      desc: 'Работаешь напрямую с конечными покупателями, управляешь высоким потоком сделок и достигаешь результата через скорость и энергию',
      detail: 'Ты живёшь в режиме потока: много контактов, быстрые решения, высокая конверсия. Мастерски считываешь людей, снимаешь возражения и закрываешь сделки ещё во время первого разговора.',
      start: ['Изучи психологию принятия решений (Cialdini "Влияние")', 'Потренируй техники работы с возражениями', 'Разберись в воронке входящих продаж и конверсиях', 'Пройди курс по розничным продажам и переговорам'],
      startUrls: ['https://www.salesgravy.com/sales-articles/', 'https://blog.hubspot.com/sales/sales-skills', 'https://www.coursera.org/learn/sales-training', 'https://www.amazon.com/Influence-Psychology-Persuasion-Robert-Cialdini/dp/006124189X']
    },
    account: {
      emoji: '📋',
      name: 'Account Manager — Работа с ключевыми клиентами',
      desc: 'Развиваешь и удерживаешь существующих клиентов, глубоко понимаешь их бизнес и находишь возможности для роста через upsell и cross-sell',
      detail: 'Тебя ценят за то, что ты знаешь клиента лучше него самого. Ты строишь долгосрочные отношения, предугадываешь проблемы, предлагаешь решения и превращаешь клиентов в амбассадоров бренда.',
      start: ['Изучи подход Customer Success vs Account Management', 'Освой метрики удержания: NPS, churn rate, Net Revenue Retention', 'Разберись с Gainsight или аналогичными платформами', 'Почитай "The Trusted Advisor" — классику работы с клиентами'],
      startUrls: ['https://www.gainsight.com/blog/', 'https://www.customersuccesscollective.com/', 'https://blog.hubspot.com/service/account-management', 'https://www.amazon.com/Trusted-Advisor-David-H-Maister/dp/0743212347']
    },
    bizdev: {
      emoji: '🚀',
      name: 'Business Development — Развитие бизнеса',
      desc: 'Открываешь новые рынки, выстраиваешь стратегические партнёрства и создаёшь каналы роста, которых раньше не существовало',
      detail: 'Ты на стыке продаж и стратегии. Видишь возможности там, где другие видят конкурентов. Умеешь питчить C-level, структурировать партнёрские сделки и запускать новые направления с нуля.',
      start: ['Изучи основы корпоративной стратегии и бизнес-моделей', 'Разберись в партнёрских структурах: дистрибьюция, OEM, co-marketing', 'Освой LinkedIn Sales Navigator и pitch-презентации', 'Пройди курс по стратегическим переговорам и сделкам M&A'],
      startUrls: ['https://www.linkedin.com/business/sales/blog', 'https://hbr.org/topic/subject/business-development', 'https://www.coursera.org/learn/corporate-strategy', 'https://blog.hubspot.com/sales/business-development']
    }
  },
  ui: {
    tag: 'Менеджер по продажам',
    title: 'Какой ты sales-менеджер?',
    subtitle: '6 вопросов — найди свою нишу в продажах',
    prog: 'Вопрос %d из 6',
    hint: 'Выбери один вариант',
    back: '← Назад',
    next: 'Далее →',
    finish: 'Узнать результат',
    winBadge: 'Твоя ниша в продажах',
    resTag: 'Результат',
    resSub: 'Твой путь в продажах',
    lblStart: 'С чего начать:',
    l2back: '← К результатам'
  }
};

// ─── EN ──────────────────────────────────────────────────────────────────────
L2.sales.en = {
  questions: [
    {
      t: 'What energizes you most about sales?',
      o: [
        'Closing a complex enterprise deal after months of negotiation',
        'High volume of clients, fast decisions and live interaction',
        'Building long-term relationships and growing alongside clients',
        'Opening new markets and building partnerships from scratch'
      ],
      s: [{b2b:3},{b2c:3},{account:3},{bizdev:3}]
    },
    {
      t: 'Which type of deal suits you best?',
      o: [
        'Large contracts, multi-month cycles, multiple stakeholders',
        'Many small deals per day, fast results',
        'Expanding an existing contract (upsell / cross-sell)',
        'Strategic partnerships, distributors, new channels'
      ],
      s: [{b2b:3},{b2c:3},{account:3},{bizdev:3}]
    },
    {
      t: 'What skill do you consider your superpower?',
      o: [
        'Building trust with C-suite decision-makers',
        'Reading people quickly and handling objections on the fly',
        'Knowing clients better than they know themselves — anticipating needs',
        'Seeing opportunities where others see only problems'
      ],
      s: [{b2b:3},{b2c:3},{account:3},{bizdev:3}]
    },
    {
      t: 'What does your ideal workday look like?',
      o: [
        'Meetings with executives, writing proposals, complex negotiations',
        'Calls, demos, meetings — maximum flow of new contacts',
        'Regular check-ins with existing clients, analyzing their needs',
        'Market research, meetings with potential partners, strategic pitches'
      ],
      s: [{b2b:3},{b2c:3},{account:3},{bizdev:3}]
    },
    {
      t: 'Which tool matters most to you?',
      o: [
        'Salesforce / HubSpot CRM — managing long pipelines',
        'Sales scripts, telephony, fast CRM for inbound flow',
        'Success Plans, NPS surveys, loyalty platforms (Gainsight)',
        'LinkedIn Sales Navigator, partner search tools, pitch decks'
      ],
      s: [{b2b:3},{b2c:2,b2b:1},{account:3},{bizdev:3}]
    },
    {
      t: 'What does success look like in 5 years?',
      o: [
        'Head of Enterprise Sales — leading a team and closing strategic deals',
        'Sales Director with record revenue numbers',
        'VP of Customer Success — owning retention and growth of all accounts',
        'Chief Business Development Officer — building new directions and markets'
      ],
      s: [{b2b:3},{b2c:3},{account:3},{bizdev:3}]
    }
  ],
  roles: {
    b2b: { emoji:'🤝', name:'B2B Sales — Enterprise', desc:'You run complex long deals with business clients, manage multiple stakeholders and close large contracts', detail:'Your world is tenders, proposals and multi-month negotiations. You speak the language of directors and convince committees. Every closed deal is the result of persistence, strategy and trust.', start:['Study SPIN or Challenger Sales methodology','Master Salesforce or HubSpot at an advanced level','Study how top B2B companies build their pipeline','Take a negotiation course (Harvard Negotiation Project)'], startUrls:['https://www.salesgravy.com/sales-articles/','https://www.hubspot.com/products/crm','https://www.coursera.org/learn/negotiation','https://blog.hubspot.com/sales/b2b-sales'] },
    b2c: { emoji:'🛍️', name:'B2C Sales — Retail', desc:'You work directly with end consumers, manage high-volume transactions and win through speed and energy', detail:'You live in a high-flow environment: many contacts, fast decisions, high conversion. You read people masterfully, handle objections smoothly and close deals in the first conversation.', start:['Study the psychology of decision-making (Cialdini "Influence")','Practice objection-handling techniques','Understand inbound sales funnels and conversion rates','Take a retail sales and negotiation course'], startUrls:['https://www.salesgravy.com/sales-articles/','https://blog.hubspot.com/sales/sales-skills','https://www.coursera.org/learn/sales-training','https://www.amazon.com/Influence-Psychology-Persuasion-Robert-Cialdini/dp/006124189X'] },
    account: { emoji:'📋', name:'Account Manager', desc:'You grow and retain existing clients, understand their business deeply and find growth opportunities through upsell and cross-sell', detail:'You\'re valued for knowing your clients better than they know themselves. You build long-term relationships, anticipate problems, propose solutions and turn clients into brand ambassadors.', start:['Study Customer Success vs Account Management approaches','Learn retention metrics: NPS, churn rate, Net Revenue Retention','Explore Gainsight or similar platforms','Read "The Trusted Advisor" — a classic on client relationships'], startUrls:['https://www.gainsight.com/blog/','https://www.customersuccesscollective.com/','https://blog.hubspot.com/service/account-management','https://www.amazon.com/Trusted-Advisor-David-H-Maister/dp/0743212347'] },
    bizdev: { emoji:'🚀', name:'Business Development', desc:'You open new markets, build strategic partnerships and create growth channels that didn\'t exist before', detail:'You sit at the intersection of sales and strategy. You see opportunities where others see competitors. You can pitch to C-level, structure partnership deals and launch new directions from zero.', start:['Study corporate strategy and business model fundamentals','Understand partnership structures: distribution, OEM, co-marketing','Master LinkedIn Sales Navigator and pitch presentations','Take a course on strategic negotiation and M&A deals'], startUrls:['https://www.linkedin.com/business/sales/blog','https://hbr.org/topic/subject/business-development','https://www.coursera.org/learn/corporate-strategy','https://blog.hubspot.com/sales/business-development'] }
  },
  ui: { tag:'Sales Manager', title:'What kind of sales pro are you?', subtitle:'6 questions — find your niche in sales', prog:'Question %d of 6', hint:'Choose one option', back:'← Back', next:'Next →', finish:'See my result', winBadge:'Your niche in sales', resTag:'Result', resSub:'Your path in sales', lblStart:'Where to start:', l2back:'← Back to results' }
};

// ─── DE ──────────────────────────────────────────────────────────────────────
L2.sales.de = {
  questions: [
    { t:'Was begeistert dich am meisten am Verkauf?', o:['Einen komplexen Enterprise-Deal nach monatelangen Verhandlungen abschließen','Viele Kunden, schnelle Entscheidungen und lebhafter Austausch','Langfristige Beziehungen aufbauen und gemeinsam mit Kunden wachsen','Neue Märkte erschließen und Partnerschaften von Grund auf aufbauen'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] },
    { t:'Welche Art von Deals liegt dir mehr?', o:['Große Verträge, mehrmonatige Zyklen, viele Stakeholder','Viele kleine Abschlüsse pro Tag, schnelles Ergebnis','Erweiterung bestehender Verträge (Upsell / Cross-Sell)','Strategische Partnerschaften, Distributoren, neue Kanäle'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] },
    { t:'Welche Fähigkeit ist deine Superpower?', o:['Vertrauen bei C-Level-Entscheidern aufbauen','Menschen schnell einschätzen und Einwände auf der Stelle entkräften','Kunden besser kennen als sie sich selbst — Bedürfnisse antizipieren','Chancen sehen, wo andere nur Probleme sehen'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] },
    { t:'Wie sieht dein idealer Arbeitstag aus?', o:['Meetings mit Führungskräften, Angebote schreiben, komplexe Verhandlungen','Anrufe, Demos, Meetings — maximaler Fluss neuer Kontakte','Regelmäßige Check-ins mit Bestandskunden, Bedarfsanalyse','Marktrecherche, Meetings mit potenziellen Partnern, strategische Pitches'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] },
    { t:'Welches Tool ist für dich am wichtigsten?', o:['Salesforce / HubSpot CRM — für lange Pipelines','Verkaufsskripte, Telefonie, schnelle CRM für eingehenden Flow','Success Plans, NPS-Umfragen, Kundenbindungsplattformen','LinkedIn Sales Navigator, Partner-Tools, Pitch-Decks'], s:[{b2b:3},{b2c:2,b2b:1},{account:3},{bizdev:3}] },
    { t:'Wie sieht dein Erfolg in 5 Jahren aus?', o:['Head of Enterprise Sales — ich leite ein Team und schließe strategische Deals','Vertriebsleiter mit Rekordumsätzen','VP of Customer Success — verantwortlich für Bindung und Wachstum aller Kunden','Chief Business Development Officer — ich erschließe neue Richtungen und Märkte'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] }
  ],
  roles: {
    b2b: { emoji:'🤝', name:'B2B Sales — Enterprise', desc:'Du führst komplexe Deals mit Unternehmenskunden, arbeitest mit mehreren Stakeholdern und schließt große Verträge ab', detail:'Deine Welt sind Ausschreibungen, Angebote und monatelange Verhandlungen. Du sprichst die Sprache der Direktoren und überzeugst Komitees.', start:['SPIN- oder Challenger-Sales-Methodik studieren','Salesforce oder HubSpot auf fortgeschrittenem Niveau meistern','Erfolgreiche B2B-Unternehmen und ihre Pipeline-Strategie analysieren','Verhandlungskurs belegen (Harvard Negotiation Project)'], startUrls:['https://www.salesgravy.com/sales-articles/','https://www.hubspot.com/products/crm','https://www.coursera.org/learn/negotiation','https://blog.hubspot.com/sales/b2b-sales'] },
    b2c: { emoji:'🛍️', name:'B2C Sales — Einzelhandel', desc:'Du arbeitest direkt mit Endkunden, bewältigst ein hohes Transaktionsvolumen und gewinnst durch Tempo und Energie', detail:'Du lebst in einem Hochfrequenz-Umfeld: viele Kontakte, schnelle Entscheidungen, hohe Konversion. Du liest Menschen meisterhaft und schließt Deals im Erstgespräch.', start:['Entscheidungspsychologie studieren (Cialdini „Einfluss")','Einwandbehandlungstechniken üben','Eingehende Verkaufstrichter und Konversionsraten verstehen','Kurs zu Einzelhandelsumsatz und Verhandlung absolvieren'], startUrls:['https://www.salesgravy.com/sales-articles/','https://blog.hubspot.com/sales/sales-skills','https://www.coursera.org/learn/sales-training','https://www.amazon.de/Influence-Psychology-Persuasion-Robert-Cialdini/dp/006124189X'] },
    account: { emoji:'📋', name:'Account Manager', desc:'Du entwickelst und bindest Bestandskunden, verstehst ihr Geschäft tiefgreifend und findest Wachstumschancen durch Upsell und Cross-Sell', detail:'Du wirst dafür geschätzt, dass du deine Kunden besser kennst als sie sich selbst. Du baust langfristige Beziehungen auf und verwandelst Kunden in Markenbotschafter.', start:['Customer Success vs. Account Management kennenlernen','Bindungsmetriken lernen: NPS, Churn Rate, Net Revenue Retention','Gainsight oder ähnliche Plattformen erkunden','„The Trusted Advisor" lesen — Klassiker der Kundenbeziehung'], startUrls:['https://www.gainsight.com/blog/','https://www.customersuccesscollective.com/','https://blog.hubspot.com/service/account-management','https://www.amazon.de/Trusted-Advisor-David-H-Maister/dp/0743212347'] },
    bizdev: { emoji:'🚀', name:'Business Development', desc:'Du erschließt neue Märkte, baust strategische Partnerschaften auf und schaffst Wachstumskanäle, die noch nicht existierten', detail:'Du stehst an der Schnittstelle von Vertrieb und Strategie. Du siehst Chancen, wo andere Konkurrenten sehen. Du pitchst an C-Level und bringst neue Richtungen auf den Weg.', start:['Unternehmensstrategie und Geschäftsmodelle studieren','Partnerschaftsstrukturen verstehen: Distribution, OEM, Co-Marketing','LinkedIn Sales Navigator und Pitch-Präsentationen meistern','Kurs zu strategischen Verhandlungen und M&A-Deals'], startUrls:['https://www.linkedin.com/business/sales/blog','https://hbr.org/topic/subject/business-development','https://www.coursera.org/learn/corporate-strategy','https://blog.hubspot.com/sales/business-development'] }
  },
  ui: { tag:'Vertriebsmanager', title:'Welcher Verkaufstyp bist du?', subtitle:'6 Fragen — finde deine Nische im Vertrieb', prog:'Frage %d von 6', hint:'Wähle eine Option', back:'← Zurück', next:'Weiter →', finish:'Ergebnis anzeigen', winBadge:'Deine Nische im Vertrieb', resTag:'Ergebnis', resSub:'Dein Weg im Vertrieb', lblStart:'Wo anfangen:', l2back:'← Zurück zu den Ergebnissen' }
};

// ─── FR ──────────────────────────────────────────────────────────────────────
L2.sales.fr = {
  questions: [
    { t:"Qu'est-ce qui t'enthousiasme le plus dans la vente ?", o:["Conclure un deal entreprise complexe après des mois de négociation","Un grand volume de clients, des décisions rapides et des échanges vivants","Construire des relations durables et grandir avec ses clients","Ouvrir de nouveaux marchés et bâtir des partenariats de zéro"], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] },
    { t:"Quel type de deal te correspond le mieux ?", o:["Grands contrats, cycles de plusieurs mois, multiples parties prenantes","Beaucoup de petits deals par jour, résultat rapide","Extension d'un contrat existant (upsell / cross-sell)","Partenariats stratégiques, distributeurs, nouveaux canaux"], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] },
    { t:"Quelle compétence est ton superpouvoir ?", o:["Instaurer la confiance avec des décideurs C-level","Lire rapidement les gens et gérer les objections à la volée","Connaître les clients mieux qu'ils ne se connaissent eux-mêmes","Voir des opportunités là où les autres ne voient que des problèmes"], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] },
    { t:"À quoi ressemble ta journée de travail idéale ?", o:["Réunions avec des dirigeants, rédaction de propositions, négociations complexes","Appels, démos, meetings — flux maximum de nouveaux contacts","Check-ins réguliers avec les clients existants, analyse de leurs besoins","Veille marché, rencontres avec des partenaires potentiels, pitches stratégiques"], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] },
    { t:"Quel outil est le plus important pour toi ?", o:["Salesforce / HubSpot CRM — gestion des pipelines longs","Scripts de vente, téléphonie, CRM rapide pour flux entrant","Success Plans, enquêtes NPS, plateformes de fidélisation (Gainsight)","LinkedIn Sales Navigator, outils de recherche de partenaires, pitch decks"], s:[{b2b:3},{b2c:2,b2b:1},{account:3},{bizdev:3}] },
    { t:"À quoi ressemble ton succès dans 5 ans ?", o:["Head of Enterprise Sales — je dirige une équipe et conclus des deals stratégiques","Directeur commercial avec des chiffres de revenus records","VP of Customer Success — responsable de la rétention et de la croissance de tous les comptes","Chief Business Development Officer — je bâtis de nouvelles directions et marchés"], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] }
  ],
  roles: {
    b2b: { emoji:'🤝', name:'B2B Sales — Grand Compte', desc:'Tu gères des deals complexes avec des clients entreprises, travailles avec plusieurs parties prenantes et conclus de grands contrats', detail:'Ton monde, c\'est les appels d\'offres, les propositions et les négociations de plusieurs mois. Tu parles le langage des directeurs et convaincs des comités.', start:['Étudier la méthodologie SPIN ou Challenger Sales','Maîtriser Salesforce ou HubSpot à un niveau avancé','Analyser comment les grandes entreprises B2B construisent leur pipeline','Suivre un cours de négociation (Harvard Negotiation Project)'], startUrls:['https://www.salesgravy.com/sales-articles/','https://www.hubspot.com/products/crm','https://www.coursera.org/learn/negotiation','https://blog.hubspot.com/sales/b2b-sales'] },
    b2c: { emoji:'🛍️', name:'B2C Sales — Commerce de détail', desc:'Tu travailles directement avec les consommateurs, gères un flux élevé de transactions et gagnes par la vitesse et l\'énergie', detail:'Tu vis dans un environnement à haute fréquence : beaucoup de contacts, décisions rapides, haute conversion. Tu lis les gens avec maestria et conclus dès le premier entretien.', start:['Étudier la psychologie de la décision (Cialdini « Influence »)','Pratiquer les techniques de traitement des objections','Comprendre les tunnels de vente entrants et les taux de conversion','Suivre un cours sur la vente au détail et la négociation'], startUrls:['https://www.salesgravy.com/sales-articles/','https://blog.hubspot.com/sales/sales-skills','https://www.coursera.org/learn/sales-training','https://www.amazon.fr/Influence-Psychology-Persuasion-Robert-Cialdini/dp/006124189X'] },
    account: { emoji:'📋', name:'Account Manager', desc:'Tu développes et fidélises tes clients existants, comprends leur activité en profondeur et trouves des leviers de croissance via l\'upsell et le cross-sell', detail:'Tu es reconnu pour connaître tes clients mieux qu\'ils ne se connaissent eux-mêmes. Tu bâtis des relations durables et transformes les clients en ambassadeurs.', start:['Comprendre la différence Customer Success / Account Management','Apprendre les métriques de rétention : NPS, churn, Net Revenue Retention','Explorer Gainsight ou plateformes similaires','Lire « The Trusted Advisor » — un classique de la relation client'], startUrls:['https://www.gainsight.com/blog/','https://www.customersuccesscollective.com/','https://blog.hubspot.com/service/account-management','https://www.amazon.fr/Trusted-Advisor-David-H-Maister/dp/0743212347'] },
    bizdev: { emoji:'🚀', name:'Business Development', desc:'Tu ouvres de nouveaux marchés, bâtis des partenariats stratégiques et crées des canaux de croissance inexistants auparavant', detail:'Tu es à l\'intersection des ventes et de la stratégie. Tu vois des opportunités là où les autres voient des concurrents. Tu pitches en C-level et lances de nouvelles directions de zéro.', start:['Étudier la stratégie d\'entreprise et les modèles économiques','Comprendre les structures de partenariat : distribution, OEM, co-marketing','Maîtriser LinkedIn Sales Navigator et les présentations pitch','Suivre un cours sur la négociation stratégique et les opérations M&A'], startUrls:['https://www.linkedin.com/business/sales/blog','https://hbr.org/topic/subject/business-development','https://www.coursera.org/learn/corporate-strategy','https://blog.hubspot.com/sales/business-development'] }
  },
  ui: { tag:'Commercial', title:'Quel type de commercial es-tu ?', subtitle:'6 questions pour trouver ta niche dans la vente', prog:'Question %d sur 6', hint:'Choisis une option', back:'← Retour', next:'Suivant →', finish:'Voir mon résultat', winBadge:'Ta niche dans la vente', resTag:'Résultat', resSub:'Ton chemin dans la vente', lblStart:'Par où commencer :', l2back:'← Retour aux résultats' }
};

// ─── ES ──────────────────────────────────────────────────────────────────────
L2.sales.es = {
  questions: [
    { t:'¿Qué te entusiasma más de las ventas?', o:['Cerrar un deal complejo con una empresa después de meses de negociación','Alto volumen de clientes, decisiones rápidas e interacción directa','Construir relaciones a largo plazo y crecer junto a los clientes','Abrir nuevos mercados y construir alianzas desde cero'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] },
    { t:'¿Qué tipo de trato te va mejor?', o:['Contratos grandes, ciclos de meses, múltiples stakeholders','Muchos deals pequeños al día, resultados rápidos','Ampliar un contrato existente (upsell / cross-sell)','Alianzas estratégicas, distribuidores, nuevos canales'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] },
    { t:'¿Cuál es tu superpoder?', o:['Generar confianza con tomadores de decisión a nivel C-suite','Leer a las personas rápido y manejar objeciones al vuelo','Conocer a los clientes mejor de lo que se conocen ellos mismos','Ver oportunidades donde otros solo ven problemas'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] },
    { t:'¿Cómo es tu día de trabajo ideal?', o:['Reuniones con directivos, propuestas, negociaciones complejas','Llamadas, demos, reuniones — máximo flujo de nuevos contactos','Check-ins regulares con clientes actuales, análisis de sus necesidades','Investigación de mercados, reuniones con socios potenciales, pitches estratégicos'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] },
    { t:'¿Qué herramienta te importa más?', o:['Salesforce / HubSpot CRM — gestión de pipelines largos','Scripts de ventas, telefonía, CRM rápido para flujo entrante','Success Plans, encuestas NPS, plataformas de fidelización (Gainsight)','LinkedIn Sales Navigator, herramientas de búsqueda de socios, pitch decks'], s:[{b2b:3},{b2c:2,b2b:1},{account:3},{bizdev:3}] },
    { t:'¿Cómo luce tu éxito en 5 años?', o:['Head of Enterprise Sales — dirijo un equipo y cierro deals estratégicos','Director Comercial con cifras de ingresos récord','VP of Customer Success — responsable de retención y crecimiento de cuentas','Chief Business Development Officer — construyo nuevas direcciones y mercados'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] }
  ],
  roles: {
    b2b: { emoji:'🤝', name:'B2B Sales — Grandes Cuentas', desc:'Gestionas deals complejos con clientes empresariales, trabajas con múltiples stakeholders y cierras contratos de gran valor', detail:'Tu mundo son los concursos, las propuestas y las negociaciones de meses. Hablas el lenguaje de los directores y convences a comités.', start:['Estudia la metodología SPIN o Challenger Sales','Domina Salesforce o HubSpot a nivel avanzado','Analiza cómo las grandes empresas B2B construyen su pipeline','Toma un curso de negociación (Harvard Negotiation Project)'], startUrls:['https://www.salesgravy.com/sales-articles/','https://www.hubspot.com/products/crm','https://www.coursera.org/learn/negotiation','https://blog.hubspot.com/sales/b2b-sales'] },
    b2c: { emoji:'🛍️', name:'B2C Sales — Venta al Consumidor', desc:'Trabajas directamente con consumidores finales, gestionas un alto volumen de transacciones y ganas por velocidad y energía', detail:'Vives en un entorno de alto flujo: muchos contactos, decisiones rápidas, alta conversión. Lees a las personas con maestría y cierras en la primera conversación.', start:['Estudia psicología de decisiones (Cialdini "Influencia")','Practica técnicas de manejo de objeciones','Entiende los embudos de venta entrantes y tasas de conversión','Toma un curso de ventas al detalle y negociación'], startUrls:['https://www.salesgravy.com/sales-articles/','https://blog.hubspot.com/sales/sales-skills','https://www.coursera.org/learn/sales-training','https://es.amazon.com/Influence-Psychology-Persuasion-Robert-Cialdini/dp/006124189X'] },
    account: { emoji:'📋', name:'Account Manager', desc:'Desarrollas y fidelizas clientes existentes, entiendes su negocio a fondo y encuentras oportunidades de crecimiento a través de upsell y cross-sell', detail:'Te valoran por conocer a tus clientes mejor de lo que se conocen ellos mismos. Construyes relaciones a largo plazo y conviertes clientes en embajadores de marca.', start:['Conoce las diferencias entre Customer Success y Account Management','Aprende métricas de retención: NPS, churn rate, Net Revenue Retention','Explora Gainsight o plataformas similares','Lee "The Trusted Advisor" — un clásico de relaciones con clientes'], startUrls:['https://www.gainsight.com/blog/','https://www.customersuccesscollective.com/','https://blog.hubspot.com/service/account-management','https://es.amazon.com/Trusted-Advisor-David-H-Maister/dp/0743212347'] },
    bizdev: { emoji:'🚀', name:'Business Development', desc:'Abres nuevos mercados, construyes alianzas estratégicas y creas canales de crecimiento que no existían', detail:'Estás en la intersección de ventas y estrategia. Ves oportunidades donde otros ven competidores. Puedes hacer pitches a nivel C y lanzar nuevas direcciones desde cero.', start:['Estudia estrategia corporativa y modelos de negocio','Comprende estructuras de asociación: distribución, OEM, co-marketing','Domina LinkedIn Sales Navigator y presentaciones de pitch','Toma un curso de negociación estratégica y operaciones M&A'], startUrls:['https://www.linkedin.com/business/sales/blog','https://hbr.org/topic/subject/business-development','https://www.coursera.org/learn/corporate-strategy','https://blog.hubspot.com/sales/business-development'] }
  },
  ui: { tag:'Comercial', title:'¿Qué tipo de vendedor eres?', subtitle:'6 preguntas para encontrar tu nicho en ventas', prog:'Pregunta %d de 6', hint:'Elige una opción', back:'← Atrás', next:'Siguiente →', finish:'Ver mi resultado', winBadge:'Tu nicho en ventas', resTag:'Resultado', resSub:'Tu camino en ventas', lblStart:'Por dónde empezar:', l2back:'← Volver a los resultados' }
};

// ─── PT ──────────────────────────────────────────────────────────────────────
L2.sales.pt = {
  questions: [
    { t:'O que mais te entusiasma em vendas?', o:['Fechar um deal complexo com empresa após meses de negociação','Alto volume de clientes, decisões rápidas e interação direta','Construir relacionamentos duradouros e crescer junto com os clientes','Abrir novos mercados e construir parcerias do zero'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] },
    { t:'Qual tipo de negócio combina mais com você?', o:['Contratos grandes, ciclos de meses, múltiplos stakeholders','Muitos deals pequenos por dia, resultados rápidos','Expansão de contrato existente (upsell / cross-sell)','Parcerias estratégicas, distribuidores, novos canais'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] },
    { t:'Qual habilidade é seu superpoder?', o:['Construir confiança com tomadores de decisão no nível C-suite','Ler pessoas rapidamente e contornar objeções na hora','Conhecer clientes melhor do que eles se conhecem','Ver oportunidades onde outros só veem problemas'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] },
    { t:'Como é seu dia de trabalho ideal?', o:['Reuniões com executivos, propostas, negociações complexas','Ligações, demos, reuniões — máximo fluxo de novos contatos','Check-ins regulares com clientes atuais, análise de suas necessidades','Pesquisa de mercado, reuniões com parceiros potenciais, pitches estratégicos'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] },
    { t:'Qual ferramenta é mais importante para você?', o:['Salesforce / HubSpot CRM — gestão de pipelines longos','Scripts de vendas, telefonia, CRM rápido para fluxo inbound','Success Plans, pesquisas NPS, plataformas de fidelização (Gainsight)','LinkedIn Sales Navigator, ferramentas de busca de parceiros, pitch decks'], s:[{b2b:3},{b2c:2,b2b:1},{account:3},{bizdev:3}] },
    { t:'Como é o seu sucesso em 5 anos?', o:['Head of Enterprise Sales — lidero equipe e fecho deals estratégicos','Diretor Comercial com números de receita recordes','VP of Customer Success — responsável por retenção e crescimento de todas as contas','Chief Business Development Officer — construo novas direções e mercados'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] }
  ],
  roles: {
    b2b: { emoji:'🤝', name:'B2B Sales — Grandes Contas', desc:'Você gerencia deals complexos com clientes empresariais, trabalha com múltiplos stakeholders e fecha grandes contratos', detail:'Seu mundo são licitações, propostas e negociações de meses. Você fala a língua dos diretores e convence comitês.', start:['Estudar a metodologia SPIN ou Challenger Sales','Dominar Salesforce ou HubSpot em nível avançado','Analisar como grandes empresas B2B constroem seu pipeline','Fazer um curso de negociação (Harvard Negotiation Project)'], startUrls:['https://www.salesgravy.com/sales-articles/','https://www.hubspot.com/products/crm','https://www.coursera.org/learn/negotiation','https://blog.hubspot.com/sales/b2b-sales'] },
    b2c: { emoji:'🛍️', name:'B2C Sales — Varejo', desc:'Você trabalha diretamente com consumidores finais, gerencia alto volume de transações e vence pela velocidade e energia', detail:'Você vive em alto fluxo: muitos contatos, decisões rápidas, alta conversão. Lê pessoas com maestria e fecha negócios na primeira conversa.', start:['Estudar psicologia de decisões (Cialdini "Influência")','Praticar técnicas de contorno de objeções','Entender funis de venda inbound e taxas de conversão','Fazer um curso de vendas no varejo e negociação'], startUrls:['https://www.salesgravy.com/sales-articles/','https://blog.hubspot.com/sales/sales-skills','https://www.coursera.org/learn/sales-training','https://www.amazon.com.br/Influence-Psychology-Persuasion-Robert-Cialdini/dp/006124189X'] },
    account: { emoji:'📋', name:'Account Manager', desc:'Você desenvolve e fideliza clientes existentes, entende profundamente o negócio deles e encontra oportunidades de crescimento via upsell e cross-sell', detail:'Você é valorizado por conhecer seus clientes melhor do que eles se conhecem. Constrói relacionamentos duradouros e transforma clientes em embaixadores da marca.', start:['Conhecer as diferenças entre Customer Success e Account Management','Aprender métricas de retenção: NPS, churn rate, Net Revenue Retention','Explorar Gainsight ou plataformas similares','Ler "The Trusted Advisor" — um clássico sobre relacionamento com clientes'], startUrls:['https://www.gainsight.com/blog/','https://www.customersuccesscollective.com/','https://blog.hubspot.com/service/account-management','https://www.amazon.com.br/Trusted-Advisor-David-H-Maister/dp/0743212347'] },
    bizdev: { emoji:'🚀', name:'Business Development', desc:'Você abre novos mercados, constrói parcerias estratégicas e cria canais de crescimento que não existiam antes', detail:'Você está na interseção de vendas e estratégia. Vê oportunidades onde outros veem concorrentes. Faz pitches para C-level e lança novas direções do zero.', start:['Estudar estratégia corporativa e modelos de negócio','Entender estruturas de parceria: distribuição, OEM, co-marketing','Dominar LinkedIn Sales Navigator e apresentações de pitch','Fazer um curso de negociação estratégica e operações M&A'], startUrls:['https://www.linkedin.com/business/sales/blog','https://hbr.org/topic/subject/business-development','https://www.coursera.org/learn/corporate-strategy','https://blog.hubspot.com/sales/business-development'] }
  },
  ui: { tag:'Vendedor', title:'Que tipo de vendedor você é?', subtitle:'6 perguntas para encontrar seu nicho em vendas', prog:'Pergunta %d de 6', hint:'Escolha uma opção', back:'← Voltar', next:'Próximo →', finish:'Ver meu resultado', winBadge:'Seu nicho em vendas', resTag:'Resultado', resSub:'Seu caminho em vendas', lblStart:'Por onde começar:', l2back:'← Voltar aos resultados' }
};

// ─── AR ──────────────────────────────────────────────────────────────────────
L2.sales.ar = {
  questions: [
    { t:'ما الذي يُلهمك أكثر في المبيعات؟', o:['إتمام صفقة مؤسسية معقدة بعد شهور من التفاوض','تدفق عالٍ من العملاء وقرارات سريعة وتواصل مباشر','بناء علاقات طويلة الأمد والنمو جنباً إلى جنب مع العملاء','فتح أسواق جديدة وبناء شراكات من الصفر'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] },
    { t:'أي نوع من الصفقات يناسبك أكثر؟', o:['عقود كبيرة ودورات متعددة الأشهر وعدة أطراف معنية','صفقات صغيرة كثيرة يومياً ونتائج سريعة','توسيع عقد قائم مع عميل حالي (Upsell / Cross-sell)','شراكات استراتيجية وموزعون وقنوات توزيع جديدة'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] },
    { t:'ما المهارة التي تعتبرها قوتك الخارقة؟', o:['بناء الثقة مع صانعي القرار على مستوى C-suite','قراءة الناس بسرعة والتعامل مع الاعتراضات في الحال','معرفة العملاء أكثر مما يعرفون أنفسهم وتوقع احتياجاتهم','رؤية الفرص حيث يرى الآخرون مشاكل فحسب'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] },
    { t:'كيف يبدو يوم عملك المثالي؟', o:['اجتماعات مع المديرين التنفيذيين وإعداد عروض تجارية ومفاوضات','مكالمات وعروض تجريبية ولقاءات — أقصى تدفق من جهات الاتصال الجديدة','متابعات دورية مع العملاء الحاليين وتحليل احتياجاتهم','أبحاث السوق ولقاءات مع الشركاء المحتملين وعروض استراتيجية'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] },
    { t:'أي أداة هي الأهم بالنسبة لك؟', o:['Salesforce / HubSpot CRM — لإدارة مسارات المبيعات الطويلة','سكريبتات المبيعات والهاتف وCRM سريع لتدفق العملاء الواردين','Success Plans واستطلاعات NPS ومنصات الولاء (Gainsight)','LinkedIn Sales Navigator وأدوات البحث عن شركاء وعروض Pitch'], s:[{b2b:3},{b2c:2,b2b:1},{account:3},{bizdev:3}] },
    { t:'كيف يبدو نجاحك بعد 5 سنوات؟', o:['رئيس المبيعات المؤسسية — أقود فريقاً وأُبرم صفقات استراتيجية','مدير مبيعات بأرقام إيرادات قياسية','نائب رئيس لنجاح العملاء — أتولى الاحتفاظ والنمو لجميع الحسابات','مدير تطوير الأعمال — أبني اتجاهات وأسواق جديدة'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] }
  ],
  roles: {
    b2b: { emoji:'🤝', name:'مبيعات B2B — الشركات الكبرى', desc:'تُدير صفقات معقدة مع عملاء الأعمال وتعمل مع أطراف متعددة وتُبرم عقوداً ضخمة', detail:'عالمك هو المناقصات والعروض التجارية والمفاوضات التي تمتد لأشهر. تتحدث لغة المديرين وتقنع اللجان.', start:['دراسة منهجية SPIN أو Challenger Sales','إتقان Salesforce أو HubSpot على مستوى متقدم','تحليل كيفية بناء كبرى شركات B2B لمسار مبيعاتها','الالتحاق بدورة تفاوض (مشروع هارفارد للتفاوض)'], startUrls:['https://www.salesgravy.com/sales-articles/','https://www.hubspot.com/products/crm','https://www.coursera.org/learn/negotiation','https://blog.hubspot.com/sales/b2b-sales'] },
    b2c: { emoji:'🛍️', name:'مبيعات B2C — التجزئة', desc:'تعمل مباشرةً مع المستهلكين النهائيين وتُدير حجماً عالياً من المعاملات وتتفوق بالسرعة والطاقة', detail:'تعيش في بيئة عالية التدفق: كثير من جهات الاتصال وقرارات سريعة ونسبة تحويل مرتفعة. تقرأ الناس ببراعة وتُتم الصفقات في المحادثة الأولى.', start:['دراسة سيكولوجية القرار (Cialdini "التأثير")','التدرب على تقنيات معالجة الاعتراضات','فهم قمع المبيعات الواردة ومعدلات التحويل','الالتحاق بدورة مبيعات التجزئة والتفاوض'], startUrls:['https://www.salesgravy.com/sales-articles/','https://blog.hubspot.com/sales/sales-skills','https://www.coursera.org/learn/sales-training','https://www.amazon.com/Influence-Psychology-Persuasion-Robert-Cialdini/dp/006124189X'] },
    account: { emoji:'📋', name:'مدير الحسابات', desc:'تطوّر عملاءك الحاليين وتحتفظ بهم وتفهم أعمالهم بعمق وتجد فرص النمو عبر البيع الإضافي والمتقاطع', detail:'يقدّرونك لأنك تعرف عملاءك أكثر مما يعرفون أنفسهم. تبني علاقات طويلة الأمد وتحوّل العملاء إلى سفراء للعلامة التجارية.', start:['التعرف على الفرق بين Customer Success وAccount Management','تعلم مقاييس الاحتفاظ: NPS ومعدل الإلغاء وصافي نمو الإيرادات','استكشاف Gainsight أو منصات مماثلة','قراءة كتاب "The Trusted Advisor" — كلاسيكي في العلاقات مع العملاء'], startUrls:['https://www.gainsight.com/blog/','https://www.customersuccesscollective.com/','https://blog.hubspot.com/service/account-management','https://www.amazon.com/Trusted-Advisor-David-H-Maister/dp/0743212347'] },
    bizdev: { emoji:'🚀', name:'تطوير الأعمال', desc:'تفتح أسواقاً جديدة وتبني شراكات استراتيجية وتخلق قنوات نمو لم تكن موجودة من قبل', detail:'أنت عند تقاطع المبيعات والاستراتيجية. ترى الفرص حيث يرى الآخرون منافسين. تقدم عروضاً على مستوى C-suite وتُطلق اتجاهات جديدة من الصفر.', start:['دراسة الاستراتيجية المؤسسية ونماذج الأعمال','فهم هياكل الشراكة: التوزيع وOEM والتسويق المشترك','إتقان LinkedIn Sales Navigator وعروض Pitch','الالتحاق بدورة تفاوض استراتيجي وصفقات الاندماج والاستحواذ'], startUrls:['https://www.linkedin.com/business/sales/blog','https://hbr.org/topic/subject/business-development','https://www.coursera.org/learn/corporate-strategy','https://blog.hubspot.com/sales/business-development'] }
  },
  ui: { tag:'مدير مبيعات', title:'ما نوع مدير المبيعات الذي أنت عليه؟', subtitle:'٦ أسئلة للعثور على مكانتك في المبيعات', prog:'السؤال %d من ٦', hint:'اختر خياراً واحداً', back:'→ السابق', next:'التالي ←', finish:'اعرض نتيجتي', winBadge:'مكانتك في المبيعات', resTag:'النتيجة', resSub:'مسارك في المبيعات', lblStart:'من أين تبدأ:', l2back:'→ العودة إلى النتائج' }
};

// ─── HE ──────────────────────────────────────────────────────────────────────
L2.sales.he = {
  questions: [
    { t:'מה הכי מרגש אותך במכירות?', o:['לסגור עסקה ארגונית מורכבת אחרי חודשים של משא ומתן','נפח גבוה של לקוחות, החלטות מהירות ואינטראקציה חיה','לבנות קשרים לטווח ארוך ולצמוח יחד עם הלקוחות','לפתוח שווקים חדשים ולבנות שותפויות מאפס'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] },
    { t:'איזה סוג עסקאות מתאים לך יותר?', o:['חוזים גדולים, מחזורים של חודשים, ריבוי בעלי עניין','הרבה עסקאות קטנות ביום, תוצאות מהירות','הרחבת חוזה קיים עם לקוח (Upsell / Cross-sell)','שותפויות אסטרטגיות, מפיצים, ערוצים חדשים'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] },
    { t:'איזו מיומנות היא כוח-העל שלך?', o:['לבנות אמון עם מקבלי החלטות ברמת C-suite','לקרוא אנשים מהר ולטפל בהתנגדויות תוך כדי תנועה','להכיר לקוחות טוב יותר ממה שהם מכירים את עצמם','לראות הזדמנויות היכן שאחרים רואים רק בעיות'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] },
    { t:'כיצד נראה יום העבודה האידיאלי שלך?', o:['פגישות עם בכירים, כתיבת הצעות, משא ומתן מורכב','שיחות, הדגמות, פגישות — זרם מקסימלי של אנשי קשר חדשים','בדיקות שוטפות עם לקוחות קיימים, ניתוח הצרכים שלהם','מחקר שווקים, פגישות עם שותפים פוטנציאליים, פיצ\'ים אסטרטגיים'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] },
    { t:'איזה כלי הכי חשוב לך?', o:['Salesforce / HubSpot CRM — ניהול צינורות ארוכים','סקריפטים, טלפוניה, CRM מהיר לזרם נכנס','Success Plans, סקרי NPS, פלטפורמות נאמנות (Gainsight)','LinkedIn Sales Navigator, כלי חיפוש שותפים, מצגות Pitch'], s:[{b2b:3},{b2c:2,b2b:1},{account:3},{bizdev:3}] },
    { t:'כיצד נראה ההצלחה שלך בעוד 5 שנים?', o:['Head of Enterprise Sales — אני מוביל צוות וסוגר עסקאות אסטרטגיות','מנהל מכירות עם שיאי הכנסות','VP of Customer Success — אחראי על שימור וצמיחה של כל הלקוחות','Chief Business Development Officer — אני בונה כיוונים ושווקים חדשים'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}] }
  ],
  roles: {
    b2b: { emoji:'🤝', name:'B2B Sales — לקוחות ארגוניים', desc:'אתה מנהל עסקאות מורכבות עם לקוחות עסקיים, עובד עם ריבוי בעלי עניין וסוגר חוזים גדולים', detail:'עולמך הוא מכרזים, הצעות ומשא ומתן שנמשך חודשים. אתה מדבר בשפה של מנהלים ומשכנע ועדות.', start:['ללמוד מתודולוגיית SPIN או Challenger Sales','לשלוט ב-Salesforce או HubSpot ברמה מתקדמת','לנתח כיצד חברות B2B גדולות בונות את צינור המכירות שלהן','לקחת קורס משא ומתן (Harvard Negotiation Project)'], startUrls:['https://www.salesgravy.com/sales-articles/','https://www.hubspot.com/products/crm','https://www.coursera.org/learn/negotiation','https://blog.hubspot.com/sales/b2b-sales'] },
    b2c: { emoji:'🛍️', name:'B2C Sales — קמעונאות', desc:'אתה עובד ישירות עם צרכנים קצה, מנהל נפח גבוה של עסקאות ומנצח בזכות מהירות ואנרגיה', detail:'אתה חי בסביבה של זרימה גבוהה: הרבה אנשי קשר, החלטות מהירות, המרה גבוהה. קורא אנשים במיומנות ומסגר עסקאות בשיחה הראשונה.', start:['ללמוד פסיכולוגיית קבלת החלטות (Cialdini "השפעה")','לתרגל טכניקות טיפול בהתנגדויות','להבין משפכי מכירות נכנסות ושיעורי המרה','לקחת קורס מכירות קמעונאיות ומשא ומתן'], startUrls:['https://www.salesgravy.com/sales-articles/','https://blog.hubspot.com/sales/sales-skills','https://www.coursera.org/learn/sales-training','https://www.amazon.com/Influence-Psychology-Persuasion-Robert-Cialdini/dp/006124189X'] },
    account: { emoji:'📋', name:'Account Manager', desc:'אתה מפתח ושומר לקוחות קיימים, מבין את העסק שלהם לעומק ומוצא הזדמנויות צמיחה דרך Upsell ו-Cross-sell', detail:'מעריכים אותך על כך שאתה מכיר את לקוחותיך טוב יותר ממה שהם מכירים את עצמם. אתה בונה קשרים לטווח ארוך והופך לקוחות לשגרירי מותג.', start:['להכיר את ההבדל בין Customer Success ו-Account Management','ללמוד מדדי שימור: NPS, churn rate, Net Revenue Retention','לחקור Gainsight או פלטפורמות דומות','לקרוא "The Trusted Advisor" — קלאסיקה ביחסי לקוחות'], startUrls:['https://www.gainsight.com/blog/','https://www.customersuccesscollective.com/','https://blog.hubspot.com/service/account-management','https://www.amazon.com/Trusted-Advisor-David-H-Maister/dp/0743212347'] },
    bizdev: { emoji:'🚀', name:'Business Development', desc:'אתה פותח שווקים חדשים, בונה שותפויות אסטרטגיות ויוצר ערוצי צמיחה שלא היו קיימים קודם', detail:'אתה בצומת שבין מכירות לאסטרטגיה. רואה הזדמנויות היכן שאחרים רואים מתחרים. מציג ל-C-level ומשיק כיוונים חדשים מאפס.', start:['ללמוד אסטרטגיה תאגידית ומודלים עסקיים','להבין מבני שותפות: הפצה, OEM, שיווק משותף','לשלוט ב-LinkedIn Sales Navigator ומצגות Pitch','לקחת קורס משא ומתן אסטרטגי ועסקאות מיזוג ורכישה'], startUrls:['https://www.linkedin.com/business/sales/blog','https://hbr.org/topic/subject/business-development','https://www.coursera.org/learn/corporate-strategy','https://blog.hubspot.com/sales/business-development'] }
  },
  ui: { tag:'מנהל מכירות', title:'איזה סוג מוכר אתה?', subtitle:'6 שאלות למציאת הנישה שלך במכירות', prog:'שאלה %d מתוך 6', hint:'בחר אפשרות אחת', back:'→ חזרה', next:'הבא ←', finish:'לראות את התוצאה', winBadge:'הנישה שלך במכירות', resTag:'תוצאה', resSub:'הדרך שלך במכירות', lblStart:'מאיפה להתחיל:', l2back:'→ חזרה לתוצאות' }
};

L2.sales.zh = {
  questions: [
    {t:'销售工作中什么最吸引你？', o:['B2B销售——向企业销售复杂解决方案','B2C销售——直接服务消费者和个人客户','大客户管理——深耕战略客户，做长期伙伴','商务拓展——寻找新的合作和增长机会'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}]},
    {t:'你最想掌握哪种能力？', o:['复杂销售循环、解决方案销售和企业谈判','快速建立信任、处理异议和成交技巧','客户成功管理和续约增购策略','商务谈判、合作设计和生态拓展'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}]},
    {t:'什么工作成果最让你有成就感？', o:['签下一个价值百万的企业合同','帮助客户解决了真实痛点，获得真诚感谢','一个客户续约并把合同价值翻倍','谈成了一个改变公司竞争格局的战略合作'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}]},
    {t:'你更喜欢哪种工作方式？', o:['做演示、写提案、与多层决策者周旋','快速理解客户需求，当场推荐最合适的方案','定期拜访客户，深入了解他们的业务','寻找潜在合作伙伴，设计双赢的合作方案'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}]},
    {t:'你会选择哪个项目？', o:['开拓某行业的Top 50企业客户','优化消费品的门店销售转化率','为5个关键客户制定全年客户成功计划','与3家行业领导者谈判战略合作'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}]},
    {t:'10年后你在哪里？', o:['企业软件公司的大中华区销售总监','直销型消费品公司的销售VP','全球战略客户负责人','科技公司的商务发展副总裁'], s:[{b2b:3},{b2c:3},{account:3},{bizdev:3}]}
  ],
  roles: {
    b2b: {emoji:'🏢', name:'企业销售顾问', desc:'向企业销售复杂解决方案，推动大额合同从接触到签约', detail:'你的销售周期可能长达6-18个月。你需要与5个以上的决策者打交道，理解他们的组织政治，并设计定制化解决方案。耐心和专业是你的武器。', start:['学习解决方案销售框架——SPIN Selling', '了解CRM工具——Salesforce基础操作','研究你所在行业的商业逻辑','阅读《销售就是要玩转情商》']},
    b2c: {emoji:'👤', name:'零售/消费品销售', desc:'直接服务消费者，用专业和信任快速完成销售', detail:'你每天面对不同的客户。你快速判断客户需求，建立信任，消除顾虑，找到最合适的产品。成交速度是你的核心指标。', start:['学习顾问式销售——先了解需求再推荐','掌握异议处理技巧——常见拒绝的10种应对','了解消费者心理——影响购买决策的因素','阅读《影响力》——罗伯特·西奥迪尼']},
    account: {emoji:'🤝', name:'大客户经理', desc:'深耕战略客户，成为他们最信任的长期业务伙伴', detail:'你的目标是成为客户内部离不开的人。你深入理解客户业务，主动发现机会，帮助客户解决问题，同时持续扩大合作规模。', start:['学习客户成功管理框架——QBR季度回顾','了解账户规划方法——账户地图和白空间分析','掌握续约和增购谈判技巧','研究客户体验设计——让客户爱上你的服务']},
    bizdev: {emoji:'🌐', name:'商务拓展经理', desc:'构建战略合作关系，开拓新市场和增长渠道', detail:'你寻找1+1>2的机会。你识别潜在合作伙伴，设计互利的合作模式，谈判框架协议，推动合作落地并产生结果。', start:['了解商业生态系统——平台、分销和联盟模式','学习商务谈判技巧——哈佛谈判学院方法','研究你所在行业的主要合作伙伴生态','阅读《影响力》和《谈判力》']}
  },
  ui: {l2back:'← 返回销售', title:'销售：选择你的专业方向'}
};
