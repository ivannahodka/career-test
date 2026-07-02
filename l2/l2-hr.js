'use strict';
/* ── L2: HR-менеджер / Рекрутер ───────────────────────────────────────────────
   4 roles: recruiter 🔍 | hrbp 🤝 | learning 📚 | hops ⚙️
   6 questions × 8 languages  /  structure: { t, o, s } per question
──────────────────────────────────────────────────────────────────────────── */

// ─── RU ──────────────────────────────────────────────────────────────────────
L2.hr.ru = {
  questions: [
    {
      t: 'Что тебя больше всего заряжает в работе с людьми?',
      o: [
        'Находить нужного человека среди сотен кандидатов и закрывать вакансию',
        'Помогать командам расти и решать конфликты внутри бизнеса',
        'Обучать сотрудников и строить культуру непрерывного развития',
        'Выстраивать процессы — от онбординга до системы оценки'
      ],
      s: [{recruiter:3},{hrbp:3},{learning:3},{hops:3}]
    },
    {
      t: 'Какая задача тебе ближе всего?',
      o: [
        'Провести 20 интервью за неделю и выбрать лучшего кандидата',
        'Провести беседу с менеджером о проблеме в его команде',
        'Разработать программу обучения для нового направления',
        'Внедрить HRIS-систему и автоматизировать кадровый документооборот'
      ],
      s: [{recruiter:3},{hrbp:3},{learning:3},{hops:3}]
    },
    {
      t: 'Какой навык ты считаешь своей суперсилой?',
      o: [
        'Быстро оценивать людей, видеть потенциал и «продавать» вакансию',
        'Слышать и людей, и бизнес — быть мостом между командой и менеджментом',
        'Создавать контент, фасилитировать и вдохновлять на развитие',
        'Системное мышление, автоматизация и работа с HR-данными'
      ],
      s: [{recruiter:3},{hrbp:3},{learning:3},{hops:3}]
    },
    {
      t: 'Как выглядит твой идеальный рабочий день?',
      o: [
        'Звонки с кандидатами, разбор резюме, координация с нанимающими менеджерами',
        'Встречи с тимлидами, анализ вовлечённости, коучинговые беседы',
        'Разработка воркшопа, фасилитация обучения, оценка эффективности программы',
        'Настройка процессов, аналитика текучести, автоматизация HR-задач'
      ],
      s: [{recruiter:3},{hrbp:3},{learning:3},{hops:3}]
    },
    {
      t: 'Какая метрика для тебя важнее всего?',
      o: [
        'Time-to-hire, cost-per-hire, качество найма (Quality of Hire)',
        'eNPS, вовлечённость команды, retention ключевых сотрудников',
        'Completion rate обучения, показатели роста компетенций, NPS от обучающихся',
        'Точность HR-данных, скорость закрытия кадровых процессов, HRIS uptime'
      ],
      s: [{recruiter:3},{hrbp:3},{learning:3},{hops:3}]
    },
    {
      t: 'Как выглядит твой успех через 5 лет?',
      o: [
        'Head of Talent Acquisition — выстраиваю стратегию найма на всю компанию',
        'HR Director или Chief People Officer — задаю культуру и стратегию людей',
        'Head of L&D — отвечаю за развитие людей и корпоративный университет',
        'VP of HR Operations — строю лучшие HR-процессы в индустрии'
      ],
      s: [{recruiter:3},{hrbp:3},{learning:3},{hops:3}]
    }
  ],
  roles: {
    recruiter: {
      emoji: '🔍',
      name: 'Рекрутер / Talent Acquisition',
      desc: 'Находишь, привлекаешь и отбираешь лучших кандидатов, выстраиваешь воронку найма и закрываешь вакансии в срок',
      detail: 'Ты охотник за талантами. Умеешь находить нужных людей в LinkedIn, строить employer brand, проводить структурированные интервью и «продавать» компанию кандидату лучше, чем он мог ожидать.',
      start: ['Изучи методы структурированного интервью (STAR, BEI)', 'Освой LinkedIn Recruiter и Boolean search', 'Разберись с ATS системами: Greenhouse, Lever, Huntflow', 'Пройди курс по talent acquisition и employer branding'],
      startUrls: ['https://www.linkedin.com/business/talent/blog', 'https://www.greenhouse.com/blog', 'https://www.coursera.org/learn/recruiting-hiring-onboarding-employees', 'https://hrbrainiac.ru/']
    },
    hrbp: {
      emoji: '🤝',
      name: 'HR Business Partner',
      desc: 'Работаешь с руководителями и командами как стратегический партнёр — помогаешь решать бизнес-задачи через людей',
      detail: 'Ты переводчик между бизнесом и HR. Знаешь боли каждого отдела, помогаешь менеджерам развивать команды, разрешаешь конфликты и влияешь на культуру через каждодневные разговоры.',
      start: ['Изучи основы организационного дизайна и бизнес-стратегии', 'Пройди курс по коучингу и фасилитации', 'Разберись с моделью Ulrich и HR Business Partner framework', 'Прочитай "The HR Business Partner" Арно Скольяри'],
      startUrls: ['https://www.shrm.org/', 'https://www.cipd.org/en/', 'https://www.coursera.org/learn/organizational-behavior', 'https://rework.withgoogle.com/']
    },
    learning: {
      emoji: '📚',
      name: 'L&D Specialist / Обучение и развитие',
      desc: 'Проектируешь и запускаешь программы обучения, развиваешь компетенции сотрудников и строишь культуру непрерывного роста',
      detail: 'Ты архитектор знаний в компании. Создаёшь курсы, воркшопы и программы развития. Умеешь превращать сложный контент в понятный и вовлекающий опыт.',
      start: ['Изучи instructional design и модели ADDIE, Bloom\'s Taxonomy', 'Освой LMS платформы: iSpring, Moodle, TalentLMS', 'Разберись с методами оценки обучения (Kirkpatrick)', 'Пройди курс по фасилитации и взрослой педагогике (andragogy)'],
      startUrls: ['https://www.td.org/', 'https://www.coursera.org/learn/learning-and-development', 'https://elearningindustry.com/', 'https://www.linkedin.com/learning/']
    },
    hops: {
      emoji: '⚙️',
      name: 'HR Operations / People Ops',
      desc: 'Выстраиваешь и автоматизируешь HR-процессы: онбординг, кадровый учёт, аналитику и HRIS-системы',
      detail: 'Ты инженер HR-процессов. Тебя вдохновляет порядок, автоматизация и данные. Настраиваешь системы так, чтобы HR работал как часы — от оффера до увольнения.',
      start: ['Изучи популярные HRIS: Workday, BambooHR, 1C:ЗУП', 'Разберись с HR-аналитикой: turnover, headcount, time-to-fill', 'Освой основы трудового законодательства', 'Пройди курс по HR Operations и People Analytics'],
      startUrls: ['https://www.bamboohr.com/blog/', 'https://www.visier.com/blog/', 'https://www.coursera.org/learn/people-analytics', 'https://hranalyticsthebook.com/']
    }
  },
  ui: {
    tag: 'HR-менеджер',
    title: 'Какой ты HR-специалист?',
    subtitle: '6 вопросов — найди свою нишу в HR',
    prog: 'Вопрос %d из 6',
    hint: 'Выбери один вариант',
    back: '← Назад',
    next: 'Далее →',
    finish: 'Узнать результат',
    winBadge: 'Твоя ниша в HR',
    resTag: 'Результат',
    resSub: 'Твой путь в HR',
    lblStart: 'С чего начать:',
    l2back: '← К результатам'
  }
};

// ─── EN ──────────────────────────────────────────────────────────────────────
L2.hr.en = {
  questions: [
    { t:'What energizes you most about working with people?', o:['Finding the right person among hundreds of candidates and closing the role','Helping teams grow and resolving conflicts within the business','Training employees and building a culture of continuous development','Building processes — from onboarding to performance review systems'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'Which task feels most natural to you?', o:['Running 20 interviews in a week and selecting the best candidate','Having a conversation with a manager about a problem in their team','Designing a training program for a new business area','Implementing an HRIS and automating HR document workflows'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'What skill is your superpower?', o:['Quickly assessing people, spotting potential and "selling" the role','Hearing both people and the business — bridging team and management','Creating content, facilitating and inspiring growth','Systematic thinking, automation and working with HR data'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'What does your ideal workday look like?', o:['Candidate calls, CV reviews, coordination with hiring managers','Meetings with team leads, engagement analysis, coaching conversations','Designing a workshop, facilitating training, measuring program effectiveness','Setting up processes, analysing turnover, automating HR tasks'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'Which metric matters most to you?', o:['Time-to-hire, cost-per-hire, quality of hire','eNPS, team engagement, retention of key employees','Training completion rate, competency growth, learner NPS','HR data accuracy, speed of HR process completion, HRIS uptime'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'What does success look like in 5 years?', o:['Head of Talent Acquisition — setting the hiring strategy for the whole company','HR Director or Chief People Officer — shaping culture and people strategy','Head of L&D — owning people development and the corporate university','VP of HR Operations — building the best HR processes in the industry'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] }
  ],
  roles: {
    recruiter: { emoji:'🔍', name:'Recruiter / Talent Acquisition', desc:'You find, attract and select the best candidates, build hiring funnels and close roles on time', detail:'You\'re a talent hunter. You find people on LinkedIn, build employer brand, run structured interviews and sell the company to candidates better than they expected.', start:['Study structured interview methods (STAR, BEI)','Master LinkedIn Recruiter and Boolean search','Learn ATS systems: Greenhouse, Lever, Workable','Take a talent acquisition and employer branding course'], startUrls:['https://www.linkedin.com/business/talent/blog','https://www.greenhouse.com/blog','https://www.coursera.org/learn/recruiting-hiring-onboarding-employees','https://www.shrm.org/'] },
    hrbp: { emoji:'🤝', name:'HR Business Partner', desc:'You work with leaders and teams as a strategic partner — helping solve business challenges through people', detail:'You translate between business and HR. You know the pain points of every department, help managers develop their teams, resolve conflicts and shape culture through everyday conversations.', start:['Study organizational design and business strategy basics','Take a coaching and facilitation course','Learn the Ulrich model and HR Business Partner framework','Read "The HR Champion" by Dave Ulrich'], startUrls:['https://www.shrm.org/','https://www.cipd.org/en/','https://www.coursera.org/learn/organizational-behavior','https://rework.withgoogle.com/'] },
    learning: { emoji:'📚', name:'L&D Specialist', desc:'You design and deliver training programs, develop employee competencies and build a culture of continuous growth', detail:'You\'re the knowledge architect of the company. You create courses, workshops and development programs. You turn complex content into engaging, memorable learning experiences.', start:['Study instructional design and ADDIE, Bloom\'s Taxonomy','Learn LMS platforms: Cornerstone, TalentLMS, LinkedIn Learning','Understand training evaluation methods (Kirkpatrick model)','Take a facilitation and adult learning (andragogy) course'], startUrls:['https://www.td.org/','https://www.coursera.org/learn/learning-and-development','https://elearningindustry.com/','https://www.linkedin.com/learning/'] },
    hops: { emoji:'⚙️', name:'HR Operations / People Ops', desc:'You build and automate HR processes: onboarding, HR records, analytics and HRIS systems', detail:'You\'re the HR process engineer. You\'re inspired by order, automation and data. You configure systems so HR runs like clockwork — from offer letter to offboarding.', start:['Learn popular HRIS: Workday, BambooHR, HiBob','Understand HR analytics: turnover, headcount, time-to-fill','Study employment law basics','Take an HR Operations and People Analytics course'], startUrls:['https://www.bamboohr.com/blog/','https://www.visier.com/blog/','https://www.coursera.org/learn/people-analytics','https://hranalyticsthebook.com/'] }
  },
  ui: { tag:'HR Manager', title:'What kind of HR professional are you?', subtitle:'6 questions — find your niche in HR', prog:'Question %d of 6', hint:'Choose one option', back:'← Back', next:'Next →', finish:'See my result', winBadge:'Your niche in HR', resTag:'Result', resSub:'Your path in HR', lblStart:'Where to start:', l2back:'← Back to results' }
};

// ─── DE ──────────────────────────────────────────────────────────────────────
L2.hr.de = {
  questions: [
    { t:'Was begeistert dich am meisten an der Arbeit mit Menschen?', o:['Den richtigen Kandidaten unter Hunderten finden und die Stelle besetzen','Teams beim Wachsen helfen und Konflikte im Unternehmen lösen','Mitarbeiter schulen und eine Kultur kontinuierlicher Entwicklung aufbauen','Prozesse aufbauen — vom Onboarding bis zur Leistungsbewertung'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'Welche Aufgabe liegt dir am nächsten?', o:['In einer Woche 20 Interviews führen und den besten Kandidaten auswählen','Ein Gespräch mit einem Manager über ein Problem in seinem Team führen','Ein Schulungsprogramm für einen neuen Bereich entwickeln','Ein HRIS einführen und HR-Dokumentenprozesse automatisieren'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'Welche Fähigkeit ist deine Superpower?', o:['Menschen schnell einschätzen, Potenzial erkennen und Stellen "verkaufen"','Sowohl Menschen als auch das Business verstehen — Brücke zwischen Team und Management','Inhalte erstellen, facilitieren und zur Entwicklung inspirieren','Systematisches Denken, Automatisierung und HR-Datenarbeit'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'Wie sieht dein idealer Arbeitstag aus?', o:['Kandidatengespräche, Lebenslauf-Screening, Abstimmung mit Hiring Managern','Meetings mit Teamleitern, Engagement-Analyse, Coaching-Gespräche','Workshop-Design, Training-Facilitation, Programm-Evaluation','Prozessgestaltung, Fluktuationsanalyse, Automatisierung von HR-Aufgaben'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'Welche Kennzahl ist dir am wichtigsten?', o:['Time-to-hire, Cost-per-hire, Quality of Hire','eNPS, Team-Engagement, Retention von Schlüsselmitarbeitern','Abschlussquote der Schulungen, Kompetenzwachstum, Learner-NPS','HR-Datenqualität, Prozessgeschwindigkeit, HRIS-Verfügbarkeit'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'Wie sieht dein Erfolg in 5 Jahren aus?', o:['Head of Talent Acquisition — ich gestalte die Einstellungsstrategie für das gesamte Unternehmen','HR Director oder Chief People Officer — ich präge Kultur und People-Strategie','Head of L&D — ich verantworte Personalentwicklung und Corporate University','VP of HR Operations — ich baue die besten HR-Prozesse der Branche'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] }
  ],
  roles: {
    recruiter: { emoji:'🔍', name:'Recruiter / Talent Acquisition', desc:'Du findest, gewinnst und wählst die besten Kandidaten aus, baust Einstellungspipelines auf und besetzt Stellen termingerecht', detail:'Du bist Talentjäger. Du findest Menschen auf LinkedIn, baust Employer Brand auf, führst strukturierte Interviews durch und verkaufst das Unternehmen besser, als Kandidaten es erwartet haben.', start:['Strukturierte Interviewmethoden studieren (STAR, BEI)','LinkedIn Recruiter und Boolean Search meistern','ATS-Systeme kennenlernen: Greenhouse, Lever, Workable','Einen Talent-Acquisition- und Employer-Branding-Kurs belegen'], startUrls:['https://www.linkedin.com/business/talent/blog','https://www.greenhouse.com/blog','https://www.coursera.org/learn/recruiting-hiring-onboarding-employees','https://www.shrm.org/'] },
    hrbp: { emoji:'🤝', name:'HR Business Partner', desc:'Du arbeitest als strategischer Partner mit Führungskräften und Teams — löst Geschäftsherausforderungen über Menschen', detail:'Du bist Übersetzer zwischen Business und HR. Du kennst die Schmerzpunkte jeder Abteilung, hilfst Managern, Teams zu entwickeln, löst Konflikte und gestaltest Kultur durch alltägliche Gespräche.', start:['Grundlagen Organisationsdesign und Geschäftsstrategie lernen','Einen Coaching- und Facilitationskurs belegen','Das Ulrich-Modell und HRBP-Framework kennenlernen','„HR from the Outside In" von Dave Ulrich lesen'], startUrls:['https://www.shrm.org/','https://www.cipd.org/en/','https://www.coursera.org/learn/organizational-behavior','https://rework.withgoogle.com/'] },
    learning: { emoji:'📚', name:'L&D-Spezialist', desc:'Du entwirfst und lieferst Schulungsprogramme, entwickelst Mitarbeiterkompetenzen und baust eine Kultur kontinuierlichen Wachstums auf', detail:'Du bist der Wissensarchitekt des Unternehmens. Du erstellst Kurse, Workshops und Entwicklungsprogramme und verwandelst komplexe Inhalte in ansprechende Lernerfahrungen.', start:['Instructional Design und ADDIE, Bloom\'s Taxonomy studieren','LMS-Plattformen kennenlernen: Cornerstone, TalentLMS, LinkedIn Learning','Schulungsevaluationsmethoden verstehen (Kirkpatrick-Modell)','Einen Kurs zu Facilitation und Erwachsenenbildung belegen'], startUrls:['https://www.td.org/','https://www.coursera.org/learn/learning-and-development','https://elearningindustry.com/','https://www.linkedin.com/learning/'] },
    hops: { emoji:'⚙️', name:'HR Operations / People Ops', desc:'Du baust und automatisierst HR-Prozesse: Onboarding, Personalverwaltung, Analytik und HRIS-Systeme', detail:'Du bist HR-Prozessingenieur. Dich inspirieren Ordnung, Automatisierung und Daten. Du konfigurierst Systeme so, dass HR wie ein Uhrwerk läuft — vom Angebotsschreiben bis zum Offboarding.', start:['Gängige HRIS kennenlernen: Workday, BambooHR, HiBob','HR-Analytik verstehen: Fluktuation, Headcount, Time-to-fill','Grundlagen des Arbeitsrechts studieren','Einen HR-Operations- und People-Analytics-Kurs belegen'], startUrls:['https://www.bamboohr.com/blog/','https://www.visier.com/blog/','https://www.coursera.org/learn/people-analytics','https://hranalyticsthebook.com/'] }
  },
  ui: { tag:'HR-Manager', title:'Welcher HR-Typ bist du?', subtitle:'6 Fragen — finde deine Nische im HR', prog:'Frage %d von 6', hint:'Wähle eine Option', back:'← Zurück', next:'Weiter →', finish:'Ergebnis anzeigen', winBadge:'Deine Nische im HR', resTag:'Ergebnis', resSub:'Dein Weg im HR', lblStart:'Wo anfangen:', l2back:'← Zurück zu den Ergebnissen' }
};

// ─── FR ──────────────────────────────────────────────────────────────────────
L2.hr.fr = {
  questions: [
    { t:"Qu'est-ce qui t'enthousiasme le plus dans le travail avec les gens ?", o:["Trouver la bonne personne parmi des centaines de candidats et pourvoir le poste","Aider les équipes à grandir et résoudre les conflits au sein de l'entreprise","Former les collaborateurs et construire une culture de développement continu","Construire des processus — de l'onboarding à l'évaluation des performances"], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:"Quelle tâche te semble la plus naturelle ?", o:["Conduire 20 entretiens en une semaine et sélectionner le meilleur candidat","Avoir une conversation avec un manager sur un problème dans son équipe","Concevoir un programme de formation pour un nouveau domaine","Implémenter un SIRH et automatiser les flux documentaires RH"], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:"Quelle compétence est ton superpouvoir ?", o:["Évaluer rapidement les gens, détecter le potentiel et 'vendre' le poste","Entendre à la fois les personnes et le business — faire le pont entre l'équipe et le management","Créer du contenu, faciliter et inspirer le développement","Pensée systémique, automatisation et travail avec les données RH"], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:"À quoi ressemble ta journée idéale ?", o:["Appels candidats, tri de CV, coordination avec les managers recruteurs","Réunions avec les chefs d'équipe, analyse de l'engagement, conversations de coaching","Conception d'un atelier, animation de formation, évaluation du programme","Mise en place de processus, analyse du turnover, automatisation des tâches RH"], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:"Quelle métrique est la plus importante pour toi ?", o:["Délai de recrutement, coût par recrutement, qualité des recrues","eNPS, engagement de l'équipe, rétention des collaborateurs clés","Taux de complétion des formations, progression des compétences, NPS apprenants","Qualité des données RH, rapidité des processus, disponibilité du SIRH"], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:"À quoi ressemble ton succès dans 5 ans ?", o:["Head of Talent Acquisition — je définis la stratégie de recrutement pour toute l'entreprise","DRH ou Chief People Officer — je façonne la culture et la stratégie people","Head of L&D — je pilote le développement des collaborateurs et l'université d'entreprise","VP of HR Operations — je construis les meilleurs processus RH de l'industrie"], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] }
  ],
  roles: {
    recruiter: { emoji:'🔍', name:'Recruteur / Talent Acquisition', desc:'Tu trouves, attires et sélectionnes les meilleurs candidats, construis des pipelines de recrutement et pourvois les postes dans les délais', detail:'Tu es chasseur de talents. Tu trouves des gens sur LinkedIn, construis l\'employer brand, mènes des entretiens structurés et vends l\'entreprise mieux que les candidats ne s\'y attendaient.', start:['Étudier les méthodes d\'entretien structuré (STAR, BEI)','Maîtriser LinkedIn Recruiter et la recherche booléenne','Apprendre les ATS : Greenhouse, Lever, Workable','Suivre une formation en talent acquisition et employer branding'], startUrls:['https://www.linkedin.com/business/talent/blog','https://www.greenhouse.com/blog','https://www.coursera.org/learn/recruiting-hiring-onboarding-employees','https://www.shrm.org/'] },
    hrbp: { emoji:'🤝', name:'RH Business Partner', desc:'Tu travailles avec les dirigeants et les équipes comme partenaire stratégique — tu aides à résoudre les défis business à travers les personnes', detail:'Tu traduis entre le business et les RH. Tu connais les douleurs de chaque département, aides les managers à développer leurs équipes et shapes la culture par des conversations quotidiennes.', start:['Étudier les bases du design organisationnel et de la stratégie','Suivre une formation en coaching et facilitation','Apprendre le modèle Ulrich et le framework HRBP','Lire « HR from the Outside In » de Dave Ulrich'], startUrls:['https://www.shrm.org/','https://www.cipd.org/en/','https://www.coursera.org/learn/organizational-behavior','https://rework.withgoogle.com/'] },
    learning: { emoji:'📚', name:'Spécialiste L&D', desc:'Tu conçois et délivres des programmes de formation, développes les compétences et construis une culture de croissance continue', detail:'Tu es l\'architecte de la connaissance en entreprise. Tu crées des cours, ateliers et programmes de développement, transformant des contenus complexes en expériences d\'apprentissage engageantes.', start:['Étudier le design pédagogique et ADDIE, Taxonomie de Bloom','Apprendre les LMS : Cornerstone, TalentLMS, LinkedIn Learning','Comprendre les méthodes d\'évaluation de la formation (Kirkpatrick)','Suivre un cours de facilitation et d\'andragogie'], startUrls:['https://www.td.org/','https://www.coursera.org/learn/learning-and-development','https://elearningindustry.com/','https://www.linkedin.com/learning/'] },
    hops: { emoji:'⚙️', name:'RH Operations / People Ops', desc:'Tu construis et automatises les processus RH : onboarding, administration, analytique et SIRH', detail:'Tu es l\'ingénieur des processus RH. Tu es inspiré par l\'ordre, l\'automatisation et les données. Tu configures les systèmes pour que les RH fonctionnent comme une horloge.', start:['Connaître les SIRH populaires : Workday, BambooHR, HiBob','Comprendre l\'analytique RH : turnover, effectifs, délai de recrutement','Étudier les bases du droit du travail','Suivre un cours en HR Operations et People Analytics'], startUrls:['https://www.bamboohr.com/blog/','https://www.visier.com/blog/','https://www.coursera.org/learn/people-analytics','https://hranalyticsthebook.com/'] }
  },
  ui: { tag:'Responsable RH', title:'Quel type de professionnel RH es-tu ?', subtitle:'6 questions pour trouver ta niche en RH', prog:'Question %d sur 6', hint:'Choisis une option', back:'← Retour', next:'Suivant →', finish:'Voir mon résultat', winBadge:'Ta niche en RH', resTag:'Résultat', resSub:'Ton chemin en RH', lblStart:'Par où commencer :', l2back:'← Retour aux résultats' }
};

// ─── ES ──────────────────────────────────────────────────────────────────────
L2.hr.es = {
  questions: [
    { t:'¿Qué te entusiasma más del trabajo con personas?', o:['Encontrar a la persona adecuada entre cientos de candidatos y cerrar la vacante','Ayudar a los equipos a crecer y resolver conflictos dentro de la empresa','Formar a empleados y construir una cultura de desarrollo continuo','Construir procesos — desde el onboarding hasta los sistemas de evaluación'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'¿Qué tarea te resulta más natural?', o:['Hacer 20 entrevistas en una semana y elegir al mejor candidato','Tener una conversación con un manager sobre un problema en su equipo','Diseñar un programa de formación para un área nueva','Implementar un HRIS y automatizar flujos documentales de RRHH'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'¿Cuál es tu superpoder?', o:['Evaluar personas rápido, detectar potencial y "vender" la vacante','Escuchar tanto a las personas como al negocio — ser puente entre equipo y dirección','Crear contenido, facilitar e inspirar el desarrollo','Pensamiento sistémico, automatización y trabajo con datos de RRHH'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'¿Cómo es tu día de trabajo ideal?', o:['Llamadas con candidatos, revisión de CVs, coordinación con hiring managers','Reuniones con líderes de equipo, análisis de engagement, conversaciones de coaching','Diseño de taller, facilitación de formación, evaluación del programa','Configuración de procesos, análisis de rotación, automatización de tareas RRHH'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'¿Qué métrica es la más importante para ti?', o:['Time-to-hire, cost-per-hire, calidad de la contratación','eNPS, engagement del equipo, retención de empleados clave','Tasa de finalización de formaciones, crecimiento de competencias, NPS de aprendices','Calidad de datos RRHH, velocidad de procesos, disponibilidad del HRIS'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'¿Cómo luce tu éxito en 5 años?', o:['Head of Talent Acquisition — defino la estrategia de contratación para toda la empresa','Director de RRHH o Chief People Officer — doy forma a la cultura y estrategia de personas','Head of L&D — gestiono el desarrollo de personas y la universidad corporativa','VP de HR Operations — construyo los mejores procesos RRHH del sector'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] }
  ],
  roles: {
    recruiter: { emoji:'🔍', name:'Reclutador / Talent Acquisition', desc:'Encuentras, atraes y seleccionas a los mejores candidatos, construyes embudos de contratación y cubres vacantes a tiempo', detail:'Eres cazador de talentos. Encuentras personas en LinkedIn, construyes employer brand, conduces entrevistas estructuradas y vendes la empresa mejor de lo que los candidatos esperaban.', start:['Estudiar métodos de entrevista estructurada (STAR, BEI)','Dominar LinkedIn Recruiter y búsqueda booleana','Aprender sistemas ATS: Greenhouse, Lever, Workable','Tomar un curso de talent acquisition y employer branding'], startUrls:['https://www.linkedin.com/business/talent/blog','https://www.greenhouse.com/blog','https://www.coursera.org/learn/recruiting-hiring-onboarding-employees','https://www.shrm.org/'] },
    hrbp: { emoji:'🤝', name:'HR Business Partner', desc:'Trabajas con líderes y equipos como socio estratégico — ayudas a resolver retos de negocio a través de las personas', detail:'Eres traductor entre el negocio y RRHH. Conoces los puntos de dolor de cada departamento, ayudas a managers a desarrollar sus equipos y moldeas la cultura a través de conversaciones cotidianas.', start:['Estudiar diseño organizacional y bases de estrategia de negocio','Tomar un curso de coaching y facilitación','Aprender el modelo Ulrich y el framework HRBP','Leer "HR from the Outside In" de Dave Ulrich'], startUrls:['https://www.shrm.org/','https://www.cipd.org/en/','https://www.coursera.org/learn/organizational-behavior','https://rework.withgoogle.com/'] },
    learning: { emoji:'📚', name:'Especialista en L&D', desc:'Diseñas y entregas programas de formación, desarrollas competencias y construyes una cultura de crecimiento continuo', detail:'Eres el arquitecto del conocimiento en la empresa. Creas cursos, talleres y programas de desarrollo, convirtiendo contenido complejo en experiencias de aprendizaje atractivas.', start:['Estudiar diseño instruccional y ADDIE, Taxonomía de Bloom','Aprender plataformas LMS: Cornerstone, TalentLMS, LinkedIn Learning','Entender métodos de evaluación del aprendizaje (Kirkpatrick)','Tomar un curso de facilitación y andragogía'], startUrls:['https://www.td.org/','https://www.coursera.org/learn/learning-and-development','https://elearningindustry.com/','https://www.linkedin.com/learning/'] },
    hops: { emoji:'⚙️', name:'HR Operations / People Ops', desc:'Construyes y automatizas procesos de RRHH: onboarding, administración de personal, analítica y sistemas HRIS', detail:'Eres el ingeniero de procesos de RRHH. Te inspiran el orden, la automatización y los datos. Configuras sistemas para que RRHH funcione como un reloj.', start:['Conocer los HRIS populares: Workday, BambooHR, HiBob','Entender HR analytics: rotación, headcount, time-to-fill','Estudiar bases de legislación laboral','Tomar un curso de HR Operations y People Analytics'], startUrls:['https://www.bamboohr.com/blog/','https://www.visier.com/blog/','https://www.coursera.org/learn/people-analytics','https://hranalyticsthebook.com/'] }
  },
  ui: { tag:'RRHH', title:'¿Qué tipo de profesional de RRHH eres?', subtitle:'6 preguntas para encontrar tu nicho en RRHH', prog:'Pregunta %d de 6', hint:'Elige una opción', back:'← Atrás', next:'Siguiente →', finish:'Ver mi resultado', winBadge:'Tu nicho en RRHH', resTag:'Resultado', resSub:'Tu camino en RRHH', lblStart:'Por dónde empezar:', l2back:'← Volver a los resultados' }
};

// ─── PT ──────────────────────────────────────────────────────────────────────
L2.hr.pt = {
  questions: [
    { t:'O que mais te entusiasma no trabalho com pessoas?', o:['Encontrar a pessoa certa entre centenas de candidatos e fechar a vaga','Ajudar equipes a crescer e resolver conflitos dentro da empresa','Treinar colaboradores e construir uma cultura de desenvolvimento contínuo','Construir processos — do onboarding ao sistema de avaliação de desempenho'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'Qual tarefa é mais natural para você?', o:['Fazer 20 entrevistas em uma semana e escolher o melhor candidato','Ter uma conversa com um gestor sobre um problema em sua equipe','Desenvolver um programa de treinamento para uma nova área','Implementar um HRIS e automatizar fluxos de documentação de RH'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'Qual habilidade é seu superpoder?', o:['Avaliar pessoas rapidamente, identificar potencial e "vender" a vaga','Ouvir tanto as pessoas quanto o negócio — ser ponte entre equipe e gestão','Criar conteúdo, facilitar e inspirar o desenvolvimento','Pensamento sistêmico, automação e trabalho com dados de RH'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'Como é seu dia de trabalho ideal?', o:['Ligações com candidatos, triagem de currículos, coordenação com hiring managers','Reuniões com líderes de equipe, análise de engajamento, conversas de coaching','Desenho de workshop, facilitação de treinamento, avaliação do programa','Configuração de processos, análise de turnover, automação de tarefas de RH'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'Qual métrica é mais importante para você?', o:['Time-to-hire, cost-per-hire, qualidade da contratação','eNPS, engajamento da equipe, retenção de colaboradores-chave','Taxa de conclusão de treinamentos, crescimento de competências, NPS de aprendizes','Qualidade dos dados de RH, velocidade dos processos, disponibilidade do HRIS'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'Como é o seu sucesso em 5 anos?', o:['Head of Talent Acquisition — defino a estratégia de contratação para toda a empresa','Diretor de RH ou Chief People Officer — dou forma à cultura e estratégia de pessoas','Head of L&D — gerencio o desenvolvimento de pessoas e a universidade corporativa','VP de HR Operations — construo os melhores processos de RH do setor'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] }
  ],
  roles: {
    recruiter: { emoji:'🔍', name:'Recrutador / Talent Acquisition', desc:'Você encontra, atrai e seleciona os melhores candidatos, constrói funis de contratação e fecha vagas no prazo', detail:'Você é um caçador de talentos. Encontra pessoas no LinkedIn, constrói employer brand, conduz entrevistas estruturadas e vende a empresa melhor do que os candidatos esperavam.', start:['Estudar métodos de entrevista estruturada (STAR, BEI)','Dominar LinkedIn Recruiter e busca booleana','Aprender sistemas ATS: Greenhouse, Lever, Workable','Fazer um curso de talent acquisition e employer branding'], startUrls:['https://www.linkedin.com/business/talent/blog','https://www.greenhouse.com/blog','https://www.coursera.org/learn/recruiting-hiring-onboarding-employees','https://www.shrm.org/'] },
    hrbp: { emoji:'🤝', name:'HR Business Partner', desc:'Você trabalha com líderes e equipes como parceiro estratégico — ajuda a resolver desafios de negócio por meio das pessoas', detail:'Você é o tradutor entre o negócio e o RH. Conhece as dores de cada departamento, ajuda gestores a desenvolver equipes e molda a cultura através de conversas cotidianas.', start:['Estudar design organizacional e bases de estratégia de negócio','Fazer um curso de coaching e facilitação','Aprender o modelo Ulrich e o framework HRBP','Ler "HR from the Outside In" de Dave Ulrich'], startUrls:['https://www.shrm.org/','https://www.cipd.org/en/','https://www.coursera.org/learn/organizational-behavior','https://rework.withgoogle.com/'] },
    learning: { emoji:'📚', name:'Especialista em L&D', desc:'Você projeta e entrega programas de treinamento, desenvolve competências e constrói uma cultura de crescimento contínuo', detail:'Você é o arquiteto do conhecimento na empresa. Cria cursos, workshops e programas de desenvolvimento, transformando conteúdo complexo em experiências de aprendizado envolventes.', start:['Estudar design instrucional e ADDIE, Taxonomia de Bloom','Aprender plataformas LMS: Cornerstone, TalentLMS, LinkedIn Learning','Entender métodos de avaliação de treinamento (Kirkpatrick)','Fazer um curso de facilitação e andragogia'], startUrls:['https://www.td.org/','https://www.coursera.org/learn/learning-and-development','https://elearningindustry.com/','https://www.linkedin.com/learning/'] },
    hops: { emoji:'⚙️', name:'HR Operations / People Ops', desc:'Você constrói e automatiza processos de RH: onboarding, administração de pessoal, análise e sistemas HRIS', detail:'Você é o engenheiro de processos de RH. Se inspira em ordem, automação e dados. Configura sistemas para que o RH funcione como um relógio.', start:['Conhecer os HRIS populares: Workday, BambooHR, HiBob','Entender HR analytics: turnover, headcount, time-to-fill','Estudar bases de legislação trabalhista','Fazer um curso de HR Operations e People Analytics'], startUrls:['https://www.bamboohr.com/blog/','https://www.visier.com/blog/','https://www.coursera.org/learn/people-analytics','https://hranalyticsthebook.com/'] }
  },
  ui: { tag:'RH', title:'Que tipo de profissional de RH você é?', subtitle:'6 perguntas para encontrar seu nicho em RH', prog:'Pergunta %d de 6', hint:'Escolha uma opção', back:'← Voltar', next:'Próximo →', finish:'Ver meu resultado', winBadge:'Seu nicho em RH', resTag:'Resultado', resSub:'Seu caminho em RH', lblStart:'Por onde começar:', l2back:'← Voltar aos resultados' }
};

// ─── AR ──────────────────────────────────────────────────────────────────────
L2.hr.ar = {
  questions: [
    { t:'ما الذي يُلهمك أكثر في العمل مع الناس؟', o:['إيجاد الشخص المناسب من بين مئات المرشحين وشغل الوظيفة','مساعدة الفرق على النمو وحل النزاعات داخل المؤسسة','تدريب الموظفين وبناء ثقافة التطوير المستمر','بناء العمليات — من الإعداد الوظيفي إلى أنظمة تقييم الأداء'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'أي مهمة تبدو أكثر طبيعية بالنسبة لك؟', o:['إجراء 20 مقابلة في أسبوع واختيار أفضل مرشح','إجراء محادثة مع مدير حول مشكلة في فريقه','تصميم برنامج تدريبي لمجال جديد','تطبيق نظام HRIS وأتمتة سير عمل وثائق الموارد البشرية'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'ما المهارة التي تعتبرها قوتك الخارقة؟', o:['تقييم الأشخاص بسرعة واكتشاف الإمكانات و"بيع" الوظيفة للمرشحين','الاستماع للناس وللأعمال معاً — الجسر بين الفريق والإدارة','إنشاء المحتوى والتيسير والإلهام نحو التطوير','التفكير المنهجي والأتمتة والعمل مع بيانات الموارد البشرية'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'كيف يبدو يوم عملك المثالي؟', o:['مكالمات المرشحين ومراجعة السير الذاتية والتنسيق مع مديري التوظيف','اجتماعات مع قادة الفرق وتحليل الانخراط والمحادثات التوجيهية','تصميم ورشة عمل وتيسير التدريب وتقييم فعالية البرنامج','إعداد العمليات وتحليل معدل دوران الموظفين وأتمتة مهام الموارد البشرية'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'أي مقياس هو الأهم بالنسبة لك؟', o:['Time-to-hire وCost-per-hire وجودة التوظيف','eNPS وانخراط الفريق والاحتفاظ بالموظفين الرئيسيين','معدل إتمام التدريب ونمو الكفاءات وNPS المتعلمين','دقة بيانات الموارد البشرية وسرعة العمليات وتوافر HRIS'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'كيف يبدو نجاحك بعد 5 سنوات؟', o:['رئيس اكتساب المواهب — أضع استراتيجية التوظيف للشركة بأكملها','مدير الموارد البشرية أو Chief People Officer — أشكّل الثقافة واستراتيجية الأفراد','رئيس التعلم والتطوير — أتولى تنمية الأفراد والجامعة المؤسسية','نائب رئيس عمليات الموارد البشرية — أبني أفضل عمليات HR في القطاع'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] }
  ],
  roles: {
    recruiter: { emoji:'🔍', name:'مسؤول التوظيف / اكتساب المواهب', desc:'تجد المرشحين المميزين وتستقطبهم وتختارهم، وتبني مسارات التوظيف وتشغل الوظائف في الوقت المحدد', detail:'أنت صائد المواهب. تجد الأشخاص عبر LinkedIn، وتبني العلامة التجارية لصاحب العمل، وتُجري مقابلات منظّمة، وتبيع الشركة للمرشحين بأفضل مما توقّعوه.', start:['دراسة أساليب المقابلة المنظّمة (STAR وBEI)','إتقان LinkedIn Recruiter والبحث البوليني','تعلّم أنظمة ATS: Greenhouse وLever وWorkable','الالتحاق بدورة اكتساب المواهب والعلامة التجارية لصاحب العمل'], startUrls:['https://www.linkedin.com/business/talent/blog','https://www.greenhouse.com/blog','https://www.coursera.org/learn/recruiting-hiring-onboarding-employees','https://www.shrm.org/'] },
    hrbp: { emoji:'🤝', name:'شريك أعمال الموارد البشرية', desc:'تعمل مع القادة والفرق بوصفك شريكاً استراتيجياً — تساعد على حل تحديات الأعمال من خلال الأفراد', detail:'أنت المترجم بين الأعمال والموارد البشرية. تعرف نقاط ألم كل قسم، وتساعد المديرين على تطوير فرقهم، وتشكّل الثقافة من خلال المحادثات اليومية.', start:['دراسة أسس تصميم المؤسسات واستراتيجية الأعمال','الالتحاق بدورة في التوجيه والتيسير','تعلّم نموذج أولريش وإطار HRBP','قراءة كتاب "HR from the Outside In" لديف أولريش'], startUrls:['https://www.shrm.org/','https://www.cipd.org/en/','https://www.coursera.org/learn/organizational-behavior','https://rework.withgoogle.com/'] },
    learning: { emoji:'📚', name:'متخصص التعلم والتطوير', desc:'تصمم وتُقدّم برامج التدريب، وتطوّر كفاءات الموظفين، وتبني ثقافة النمو المستمر', detail:'أنت مهندس المعرفة في الشركة. تنشئ دورات وورش عمل وبرامج تطوير، وتحوّل المحتوى المعقّد إلى تجارب تعليمية جذّابة.', start:['دراسة التصميم التعليمي ونماذج ADDIE وتصنيف بلوم','تعلّم منصات LMS: Cornerstone وTalentLMS وLinkedIn Learning','فهم أساليب تقييم التدريب (نموذج كيركباتريك)','الالتحاق بدورة في التيسير وتعليم الكبار (Andragogy)'], startUrls:['https://www.td.org/','https://www.coursera.org/learn/learning-and-development','https://elearningindustry.com/','https://www.linkedin.com/learning/'] },
    hops: { emoji:'⚙️', name:'عمليات الموارد البشرية / People Ops', desc:'تبني وتُؤتمت عمليات الموارد البشرية: الإعداد الوظيفي وإدارة الموظفين والتحليلات وأنظمة HRIS', detail:'أنت مهندس عمليات الموارد البشرية. يُلهمك النظام والأتمتة والبيانات. تُهيّئ الأنظمة لتعمل الموارد البشرية كالساعة.', start:['تعلّم أنظمة HRIS الشائعة: Workday وBambooHR وHiBob','فهم تحليلات الموارد البشرية: دوران الموظفين والأعداد وTime-to-fill','دراسة أسس قانون العمل','الالتحاق بدورة في HR Operations وPeople Analytics'], startUrls:['https://www.bamboohr.com/blog/','https://www.visier.com/blog/','https://www.coursera.org/learn/people-analytics','https://hranalyticsthebook.com/'] }
  },
  ui: { tag:'مدير الموارد البشرية', title:'ما نوع متخصص الموارد البشرية الذي أنت عليه؟', subtitle:'٦ أسئلة للعثور على مكانتك في الموارد البشرية', prog:'السؤال %d من ٦', hint:'اختر خياراً واحداً', back:'→ السابق', next:'التالي ←', finish:'اعرض نتيجتي', winBadge:'مكانتك في الموارد البشرية', resTag:'النتيجة', resSub:'مسارك في الموارد البشرية', lblStart:'من أين تبدأ:', l2back:'→ العودة إلى النتائج' }
};

// ─── HE ──────────────────────────────────────────────────────────────────────
L2.hr.he = {
  questions: [
    { t:'מה הכי מרגש אותך בעבודה עם אנשים?', o:['למצוא את האדם הנכון מבין מאות מועמדים ולסגור את המשרה','לעזור לצוותים לצמוח ולפתור קונפליקטים בתוך הארגון','להכשיר עובדים ולבנות תרבות של פיתוח מתמיד','לבנות תהליכים — מאונבורדינג ועד מערכות הערכת ביצועים'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'איזו משימה מרגישה הכי טבעית עבורך?', o:['לקיים 20 ראיונות בשבוע ולבחור את המועמד הטוב ביותר','לנהל שיחה עם מנהל על בעיה בצוות שלו','לפתח תוכנית הכשרה לתחום חדש','להטמיע HRIS ולהפוך תהליכי מסמכי HR לאוטומטיים'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'איזו מיומנות היא כוח-העל שלך?', o:['להעריך אנשים מהר, לזהות פוטנציאל ו"למכור" את המשרה','להקשיב גם לאנשים וגם לעסק — להיות גשר בין הצוות להנהלה','ליצור תוכן, לפסל ולהשריש מוטיבציה להתפתחות','חשיבה מערכתית, אוטומציה ועבודה עם נתוני HR'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'כיצד נראה יום העבודה האידיאלי שלך?', o:['שיחות עם מועמדים, סינון קורות חיים, תיאום עם מנהלים מגייסים','פגישות עם ראשי צוותים, ניתוח מעורבות, שיחות קואצ\'ינג','עיצוב סדנה, הנחיית הכשרה, הערכת יעילות התוכנית','בניית תהליכים, ניתוח תחלופה, אוטומציה של משימות HR'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'איזה מדד חשוב לך הכי הרבה?', o:['Time-to-hire, Cost-per-hire, איכות הגיוס','eNPS, מעורבות הצוות, שימור עובדים מפתח','שיעור השלמת הכשרות, צמיחת כישורים, NPS לומדים','דיוק נתוני HR, מהירות תהליכים, זמינות HRIS'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] },
    { t:'כיצד נראה ההצלחה שלך בעוד 5 שנים?', o:['Head of Talent Acquisition — אני קובע אסטרטגיית גיוס לכל החברה','מנהל HR או Chief People Officer — אני מעצב תרבות ואסטרטגיית אנשים','Head of L&D — אני אחראי על פיתוח אנשים ואוניברסיטה ארגונית','VP of HR Operations — אני בונה את תהליכי ה-HR הטובים ביותר בתעשייה'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}] }
  ],
  roles: {
    recruiter: { emoji:'🔍', name:'מגייס / Talent Acquisition', desc:'אתה מוצא, מושך ובוחר את המועמדים הטובים ביותר, בונה צינורות גיוס וסוגר משרות בזמן', detail:'אתה ציידן כישרונות. מוצא אנשים ב-LinkedIn, בונה מותג מעסיק, מנהל ראיונות מובנים ומוכר את החברה למועמדים טוב מכפי שציפו.', start:['ללמוד שיטות ראיון מובנה (STAR, BEI)','לשלוט ב-LinkedIn Recruiter ובחיפוש בוליאני','ללמוד מערכות ATS: Greenhouse, Lever, Workable','לקחת קורס ב-Talent Acquisition ו-Employer Branding'], startUrls:['https://www.linkedin.com/business/talent/blog','https://www.greenhouse.com/blog','https://www.coursera.org/learn/recruiting-hiring-onboarding-employees','https://www.shrm.org/'] },
    hrbp: { emoji:'🤝', name:'HR Business Partner', desc:'אתה עובד עם מנהלים וצוותים כשותף אסטרטגי — עוזר לפתור אתגרי עסק דרך אנשים', detail:'אתה המתרגם בין העסק ל-HR. מכיר את נקודות הכאב של כל מחלקה, עוזר למנהלים לפתח את הצוותים ומעצב את התרבות דרך שיחות יומיומיות.', start:['ללמוד עיצוב ארגוני ואסטרטגיית עסק','לקחת קורס קואצ\'ינג ופסילוץ','ללמוד את מודל Ulrich ומסגרת HRBP','לקרוא "HR from the Outside In" מאת Dave Ulrich'], startUrls:['https://www.shrm.org/','https://www.cipd.org/en/','https://www.coursera.org/learn/organizational-behavior','https://rework.withgoogle.com/'] },
    learning: { emoji:'📚', name:'מומחה L&D', desc:'אתה מתכנן ומספק תוכניות הכשרה, מפתח כישורי עובדים ובונה תרבות של צמיחה מתמדת', detail:'אתה אדריכל הידע בחברה. יוצר קורסים, סדנאות ותוכניות פיתוח, הופך תוכן מורכב לחוויות למידה מרתקות.', start:['ללמוד Instructional Design ו-ADDIE, טקסונומיית בלום','ללמוד פלטפורמות LMS: Cornerstone, TalentLMS, LinkedIn Learning','להבין שיטות הערכת הכשרה (מודל קירקפטריק)','לקחת קורס פסילוץ ואנדרגוגיה'], startUrls:['https://www.td.org/','https://www.coursera.org/learn/learning-and-development','https://elearningindustry.com/','https://www.linkedin.com/learning/'] },
    hops: { emoji:'⚙️', name:'HR Operations / People Ops', desc:'אתה בונה ומייעל תהליכי HR: אונבורדינג, רישומי עובדים, אנליטיקה ומערכות HRIS', detail:'אתה מהנדס תהליכי HR. מעורר בך השראה הסדר, האוטומציה והנתונים. מגדיר מערכות כך ש-HR עובד כמו שעון.', start:['ללמוד מערכות HRIS פופולריות: Workday, BambooHR, HiBob','להבין HR analytics: תחלופה, headcount, time-to-fill','ללמוד יסודות דיני עבודה','לקחת קורס HR Operations ו-People Analytics'], startUrls:['https://www.bamboohr.com/blog/','https://www.visier.com/blog/','https://www.coursera.org/learn/people-analytics','https://hranalyticsthebook.com/'] }
  },
  ui: { tag:'מנהל HR', title:'איזה סוג איש HR אתה?', subtitle:'6 שאלות למציאת הנישה שלך ב-HR', prog:'שאלה %d מתוך 6', hint:'בחר אפשרות אחת', back:'→ חזרה', next:'הבא ←', finish:'לראות את התוצאה', winBadge:'הנישה שלך ב-HR', resTag:'תוצאה', resSub:'הדרך שלך ב-HR', lblStart:'מאיפה להתחיל:', l2back:'→ חזרה לתוצאות' }
};

L2.hr.zh = {
  questions: [
    {t:'HR工作中什么最吸引你？', o:['招聘——找到最合适的人才','人力资源业务合作——帮助业务团队成功','学习与发展——让员工持续成长','HR运营——系统、流程和数据驱动HR'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}]},
    {t:'你最想精通哪个方向？', o:['猎头技术、候选人评估和雇主品牌','组织诊断、绩效管理和人才发展','培训体系设计和领导力发展项目','HRIS系统、HR数据分析和流程自动化'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}]},
    {t:'什么工作成果最让你有成就感？', o:['为关键岗位找到了完美匹配的候选人','你推动的组织变革让团队效能提升了30%','你设计的培训项目让员工留存率提升','HR系统自动化让团队节省了大量重复工作'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}]},
    {t:'你更喜欢哪种工作？', o:['主动搜寻候选人，做结构化面试','和业务leader讨论人才策略和组织设计','设计培训课程，促进员工技能发展','分析HR数据，找到流程优化机会'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}]},
    {t:'你会选择哪个项目？', o:['为公司建立技术岗招聘体系','为快速扩张的团队设计绩效管理体系','为管理层设计领导力发展培训','实施新的HRIS系统并完成数据迁移'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}]},
    {t:'10年后你在哪里？', o:['大型科技公司的招聘总监','区域HRBP负责人','企业大学校长','CHRO（首席人力资源官）'], s:[{recruiter:3},{hrbp:3},{learning:3},{hops:3}]}
  ],
  roles: {
    recruiter: {emoji:'🎯', name:'招聘专家', desc:'找到最合适的人才，让公司持续获得竞争优势', detail:'你是公司最重要的门卫。你主动搜寻候选人，设计评估流程，让对的人在对的时间加入对的团队。', start:['了解结构化面试设计——STAR方法','学习LinkedIn Recruiter的高级搜索技巧','研究雇主品牌建设——如何让公司对人才有吸引力','了解技术岗评估——编程题、系统设计题的评分标准']},
    hrbp: {emoji:'🤝', name:'HR业务合作伙伴', desc:'深入理解业务，成为管理层在人和组织上最信任的顾问', detail:'你不是后台支持，而是业务伙伴。你理解P&L，参与业务规划，提供人才和组织建议，推动绩效提升。', start:['学习组织设计基础——组织诊断工具','了解绩效管理体系——OKR vs KPI','掌握人才发展框架——9宫格、继任计划','阅读Dave Ulrich的HRBP理论']},
    learning: {emoji:'📚', name:'学习与发展专家', desc:'设计和推动让员工持续成长的学习体系', detail:'你是公司的"教育部长"。你识别能力差距，设计培训课程，建立导师体系，让每个人都能在工作中成长。', start:['学习教学设计基础——ADDIE模型','了解学习管理系统——LMS的选择和使用','研究微学习和混合学习设计','考取ATD认证——Association for Talent Development']},
    hops: {emoji:'⚙️', name:'HR运营专家', desc:'用系统、数据和流程让HR部门本身高效运转', detail:'你让HR变得数据驱动。你管理HRIS系统，分析员工数据，优化入离职流程，推动HR数字化转型。', start:['了解主流HRIS系统——Workday、SAP SuccessFactors','学习HR数据分析——员工留存率、招聘漏斗分析','掌握流程优化方法——精益思维在HR的应用','学习基础的Excel/Python数据分析']}
  },
  ui: {l2back:'← 返回人力资源', title:'人力资源：选择你的专业方向'}
};
