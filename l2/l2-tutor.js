'use strict';
/* ── L2: Тьютор / Методист ───────────────────────────────────────────────────
   4 roles: id_specialist 📐 | corp_methodist 🏢 | tutor_accomp 🎯 | ed_analyst 📊
──────────────────────────────────────────────────────────────────────────── */
L2.tutor.ru = {
  questions: [
    {
      t: 'Что тебе интереснее всего в образовании?',
      o: [
        'Проектировать учебные курсы и программы с нуля — выстраивать логику, сценарий и оценивание',
        'Обучать сотрудников в корпорациях — переводить бизнес-задачи в образовательные решения',
        'Сопровождать конкретного человека в его обучении — помогать ставить цели и двигаться к ним',
        'Анализировать данные об обучении и улучшать программы на основе цифр'
      ],
      s: [{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]
    },
    {
      t: 'Какой инструмент тебе важнее всего?',
      o: [
        'Articulate 360, iSpring, Miro — для проектирования и создания интерактивных курсов',
        'Корпоративный LMS, Zoom, Power Point — для проведения тренингов и вебинаров',
        'Notion, Google Calendar, видеосвязь — для индивидуального сопровождения учеников',
        'Tableau, Google Analytics, Excel — для анализа эффективности обучения'
      ],
      s: [{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]
    },
    {
      t: 'Какой результат тебя вдохновляет больше всего?',
      o: [
        'Запущен курс, который 1000 человек проходят самостоятельно — без меня',
        'Тренинг дал измеримый рост показателей команды — KPI выросли за квартал',
        'Студент поступил в вуз мечты или сменил карьеру — я сопровождал этот путь',
        'Я нашёл узкое место в обучении и исправил его — конверсия выросла на 30%'
      ],
      s: [{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]
    },
    {
      t: 'С кем тебе интереснее работать?',
      o: [
        'С командой разработчиков курсов, дизайнерами и экспертами в предметной области',
        'С HR, руководителями и сотрудниками компании — решать реальные бизнес-задачи',
        'Один на один со студентом или небольшой группой — видеть каждого человека',
        'С данными и системами — строить дашборды и находить паттерны в поведении учащихся'
      ],
      s: [{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]
    },
    {
      t: 'Что тебя восхищает в лучших представителях профессии?',
      o: [
        'Instructional designer, создавший курс, который обучает эффективнее живого лектора',
        'Корпоративный тренер, изменивший культуру компании через серию воркшопов',
        'Тьютор, который помог ребёнку поверить в себя и выстроить маршрут мечты',
        'Специалист по Learning Analytics, предсказавший отсев и остановивший его вовремя'
      ],
      s: [{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]
    },
    {
      t: 'Как выглядит твой успех через 10 лет?',
      o: [
        'Chief Learning Officer или руководитель продукта в топовой EdTech-компании',
        'Директор корпоративного университета крупной компании или L&D-консультант',
        'Известный тьютор или создатель академии персонального сопровождения',
        'Head of Learning Analytics или исследователь эффективности образования'
      ],
      s: [{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]
    }
  ],
  roles: {
    id_specialist: {
      emoji: '📐',
      name: 'Instructional Designer',
      desc: 'Проектируешь курсы и учебные программы по научным принципам — создаёшь обучение, которое реально работает',
      detail: 'Ты строишь архитектуру обучения: анализируешь целевую аудиторию, формулируешь учебные цели, выбираешь форматы и создаёшь контент в авторских инструментах. Твои курсы можно пройти без тебя — и они будут эффективны.',
      start: ['Изучи модель ADDIE и Kirkpatrick — базовые фреймворки instructional design', 'Освой Articulate Rise и Storyline 360 — стандарт индустрии для e-learning', 'Построй портфолио: создай 2–3 демо-курса на разные темы', 'Изучи Learning Experience Design (LXD) — современный подход к проектированию'],
      startUrls: ['https://articulate.com/community/rise', 'https://www.td.org/talent-development-glossary-terms/what-is-addie', 'https://www.coursera.org/learn/instructional-design-foundations', 'https://www.learningsolutionsmag.com']
    },
    corp_methodist: {
      emoji: '🏢',
      name: 'Корпоративный методист / L&D-специалист',
      desc: 'Разрабатываешь и проводишь обучение для сотрудников компаний — решаешь бизнес-задачи через образование',
      detail: 'Ты работаешь внутри компании или как внешний консультант. Выявляешь потребности в обучении, разрабатываешь программы, проводишь тренинги и измеряешь результат. Ключевая компетенция — переводить бизнес-проблему в образовательное решение.',
      start: ['Изучи методологию Training Needs Analysis (TNA)', 'Пройди сертификацию ATD или CIPD — международные стандарты L&D', 'Освой корпоративные LMS: iSpring, Teachbase, Moodle', 'Изучи модель Киркпатрика для оценки эффективности обучения'],
      startUrls: ['https://www.td.org', 'https://www.ispring.ru', 'https://www.cipd.org', 'https://www.mindtools.com/pages/article/kirkpatrick.htm']
    },
    tutor_accomp: {
      emoji: '🎯',
      name: 'Тьютор-наставник',
      desc: 'Сопровождаешь индивидуальный образовательный путь ученика — помогаешь ставить цели и двигаться к ним',
      detail: 'Ты не учишь предмету — ты помогаешь человеку учиться. Диагностируешь стиль обучения, помогаешь построить образовательный маршрут, преодолевать трудности и сохранять мотивацию. Работаешь с детьми, студентами или взрослыми в карьерном переходе.',
      start: ['Изучи основы тьюторства и педагогики сопровождения', 'Пройди курс по коучингу — он даст инструменты работы с целями и мотивацией', 'Освой работу с образовательными маршрутами и индивидуальными планами', 'Практикуй активное слушание и сократовский диалог — основу тьюторской работы'],
      startUrls: ['https://www.tutoringassociation.org', 'https://www.coursera.org/learn/coaching-skills', 'https://ta-tutor.ru', 'https://notion.so']
    },
    ed_analyst: {
      emoji: '📊',
      name: 'Специалист по Learning Analytics',
      desc: 'Анализируешь данные об обучении и помогаешь делать образование эффективнее через цифры и эксперименты',
      detail: 'Ты смотришь на образование через данные: кто отсевает и почему, какие модули не работают, что влияет на результат. Строишь дашборды, запускаешь A/B-тесты учебных форматов и даёшь рекомендации методистам и продукту.',
      start: ['Изучи Python или R для анализа данных', 'Освой Tableau или Power BI для визуализации образовательной аналитики', 'Изучи метрики LMS: completion rate, time-on-task, quiz scores', 'Пройди курс по Learning Analytics на edX или Coursera'],
      startUrls: ['https://www.solaresearch.org', 'https://www.edx.org/learn/learning-analytics', 'https://www.tableau.com/academic', 'https://www.coursera.org/learn/data-analysis-with-python']
    }
  },
  ui: {
    tag: 'Тьютор / Методист',
    title: 'Какой методист ты?',
    subtitle: '6 вопросов — найди свою нишу в образовательных технологиях',
    prog: 'Вопрос %d из 6',
    hint: 'Выбери один вариант',
    back: '← Назад', next: 'Далее →', finish: 'Показать результат',
    winBadge: 'Твоя ниша в методологии обучения',
    resTag: 'Результат', resSub: 'Твой путь в образовательных технологиях',
    lblStart: 'С чего начать:', l2back: '← Назад к результатам'
  }
};


L2.tutor.en = {
  questions: [
    {
      t: 'What excites you most in educational design?',
      o: [
        'Designing curricula from scratch — structuring content so learning flows logically from simple to complex',
        'Shaping corporate training — aligning learning programmes with business goals and KPIs',
        'Supporting individual learners — helping students navigate their path and overcome learning difficulties',
        'Analysing learning data — measuring effectiveness, tracking completion, and improving programmes based on numbers'
      ],
      s: [{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]
    },
    {
      t: 'Which tool would you most like to master?',
      o: [
        'Articulate 360 or iSpring — build interactive e-learning courses with scenarios and branching',
        'LMS (Moodle, Canvas, TalentLMS) — configure learning paths, automate assessments, and track progress',
        'Diagnostic tools — learning style tests, anxiety assessments, goal-setting frameworks',
        'Power BI or Google Data Studio — visualise training analytics and build effectiveness dashboards'
      ],
      s: [{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]
    },
    {
      t: 'What result of your work gives you most satisfaction?',
      o: [
        'A course is launched — learners complete it and say the material was clear and engaging',
        'Employee performance metrics improved after training — the business sees a measurable ROI',
        'A student overcame a barrier — exam passed, confidence rebuilt, goal achieved',
        'My analytics report showed that one module had a 40% drop-off — I found the cause and fixed it'
      ],
      s: [{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]
    },
    {
      t: 'How do you prefer to work?',
      o: [
        'Solo at a computer — designing visuals, writing scripts, building course logic in an authoring tool',
        'Closely with subject-matter experts and managers — turning their knowledge into a training product',
        'One-on-one with a student — conversations, diagnostics, personalised support sessions',
        'With data and reports — cleaning datasets, building charts, writing analytical conclusions'
      ],
      s: [{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]
    },
    {
      t: 'Which learning model appeals to you most?',
      o: [
        'ADDIE or SAM — systematic design from needs analysis through evaluation',
        'The 70-20-10 model — most learning happens on the job, training just supports it',
        'Zone of Proximal Development — stretch the learner just beyond what they can do alone',
        'Kirkpatrick model — measure reaction, learning, behaviour, and business results systematically'
      ],
      s: [{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]
    },
    {
      t: 'Where do you see yourself in 10 years?',
      o: [
        'Head of Instructional Design or Learning Experience Director at an EdTech company',
        'Chief Learning Officer (CLO) or Head of L&D at a large corporation',
        'Founder of a tutoring centre or independent educational consultant',
        'Head of Learning Analytics or Data-driven Education researcher'
      ],
      s: [{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]
    }
  ],
  roles: {
    id_specialist: {
      emoji: '📐',
      name: 'Instructional Designer',
      desc: 'You design e-learning courses and training programmes — turning expert knowledge into structured learning',
      detail: 'You are an architect of learning. You analyse what the learner needs to know, structure content into a logical sequence, write scripts for videos and interactive scenarios, and build courses in Articulate 360 or iSpring. Your work turns dense expertise into an engaging 30-minute module that someone can complete on their lunch break.',
      start: [
        'Learn the ADDIE model — the foundation of all instructional design; apply it to a real mini-course',
        'Master Articulate Storyline 360 — the industry standard tool for interactive e-learning',
        'Read "The Action Mapping" method by Cathy Moore — it will change how you think about training design',
        'Join the ATD (Association for Talent Development) community — courses, webinars, and a global network'
      ]
    },
    corp_methodist: {
      emoji: '🏢',
      name: 'Corporate Learning & Development Specialist',
      desc: 'You build and manage corporate training programmes — aligning learning with business strategy',
      detail: 'You work at the intersection of HR, business, and education. You conduct training needs analyses (TNA), commission or create learning content, manage the LMS, and report training ROI to senior leadership. You understand that adults learn differently from children — they need relevance, autonomy, and immediate applicability. Your programmes move the needle on real business KPIs.',
      start: [
        'Get your CIPD or ATD CPTD certification — the benchmark credentials for L&D professionals',
        'Learn to conduct a Training Needs Analysis (TNA) — start by interviewing managers and analysing performance gaps',
        'Master your company\'s LMS platform — most organisations use Moodle, Cornerstone, or SAP SuccessFactors',
        'Read "The Six Disciplines of Breakthrough Learning" — the definitive guide to corporate training that works'
      ]
    },
    tutor_accomp: {
      emoji: '🎯',
      name: 'Academic Tutor / Learning Coach',
      desc: 'You support individual learners — helping them overcome barriers, set goals, and reach their potential',
      detail: 'You work with students one-on-one: diagnosing their learning difficulties, building personalised study plans, explaining tricky concepts in new ways, and keeping motivation alive when progress feels invisible. You might support a student struggling with maths, a professional switching careers, or a university student overwhelmed by their coursework. Your superpower is meeting each person exactly where they are.',
      start: [
        'Study learning and memory psychology — books by Barbara Oakley ("A Mind for Numbers") are a great start',
        'Learn how to conduct a learning diagnostic session: what questions reveal the real barrier',
        'Get trained in active learning techniques: retrieval practice, spaced repetition, interleaving',
        'Build experience: offer free tutoring sessions to practise your approach and gather feedback'
      ]
    },
    ed_analyst: {
      emoji: '📊',
      name: 'Learning Analytics Specialist',
      desc: 'You measure the effectiveness of training — turning learning data into decisions that improve programmes',
      detail: 'You work with numbers that most L&D teams ignore. You pull data from LMS platforms, analyse completion rates, quiz scores, and time-on-task, identify drop-off points, and build dashboards that show leadership what is working and what is not. You apply the Kirkpatrick model to connect learning metrics to business outcomes. Your analysis directly shapes what gets funded next year.',
      start: [
        'Learn SQL and Power BI or Tableau — learning analytics lives in databases and dashboards',
        'Study the Kirkpatrick four-level evaluation model — the standard framework for measuring training impact',
        'Read "Measuring the Success of Learning Through Technology" by Jack and Patti Phillips',
        'Get familiar with xAPI (Tin Can) — the modern standard for capturing detailed learning experience data'
      ]
    }
  },
  ui: { l2back: '← Back to education', title: 'Educational Designer: which specialisation?' }
};



L2.tutor.de = {
  questions: [
    { t:'Was reizt dich am meisten im Bildungsbereich?', o:['Curricula von Grund auf gestalten — Inhalte so strukturieren, dass Lernen logisch vom Einfachen zum Komplexen führt','Betriebliche Weiterbildung entwickeln — Lernprogramme an Unternehmensziele und KPIs anpassen','Einzelne Lernende begleiten — Lernenden helfen, ihren Weg zu finden und Hindernisse zu überwinden','Lerndaten analysieren — Wirksamkeit messen, Abschlussquoten verfolgen und Programme datengestützt verbessern'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}] },
    { t:'Welches Tool möchtest du am liebsten beherrschen?', o:['Articulate 360 oder iSpring — interaktive E-Learning-Kurse mit Szenarien und Verzweigungen erstellen','LMS (Moodle, Canvas, TalentLMS) — Lernpfade konfigurieren und Fortschritte automatisch verfolgen','Diagnostiktools — Lernstiltests, Angstskalen, Zielvereinbarungsrahmen','Power BI oder Google Data Studio — Trainingsanalytik visualisieren und Wirksamkeits-Dashboards erstellen'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}] },
    { t:'Welches Ergebnis deiner Arbeit macht dich am stolzesten?', o:['Ein Kurs wurde veröffentlicht — Lernende schließen ihn ab und finden den Stoff klar und ansprechend','Mitarbeiterleistung verbesserte sich nach dem Training — das Unternehmen sieht messbaren ROI','Ein Lernender überwindet eine Hürde — Prüfung bestanden, Selbstvertrauen zurückgewonnen','Meine Analyse zeigte 40 % Abbrüche in einem Modul — ich fand die Ursache und behob sie'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}] },
    { t:'Wie arbeitest du am liebsten?', o:['Allein am Computer — Grafiken gestalten, Skripte schreiben, Kurslogik aufbauen','Eng mit Fachexperten und Führungskräften — ihr Wissen in ein Trainingsprodukt übersetzen','Eins-zu-eins mit Lernenden — Gespräche, Diagnostik, individuelle Begleitung','Mit Daten und Berichten — Datensätze bereinigen, Diagramme erstellen, Analysen schreiben'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}] },
    { t:'Welches Lernmodell spricht dich am meisten an?', o:['ADDIE oder SAM — systematisches Design von der Bedarfsanalyse bis zur Evaluation','Das 70-20-10-Modell — das meiste Lernen passiert im Job, Training unterstützt nur','Zone der nächsten Entwicklung — Lernende knapp über ihr aktuelles Niveau hinaus fordern','Kirkpatrick-Modell — Reaktion, Lernen, Verhalten und Geschäftsergebnisse systematisch messen'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}] },
    { t:'Wo siehst du dich in 10 Jahren?', o:['Head of Instructional Design oder Learning Experience Director bei einem EdTech-Unternehmen','Chief Learning Officer (CLO) oder Head of L&D in einem Großkonzern','Gründer eines Nachhilfenzentrums oder unabhängiger Bildungsberater','Head of Learning Analytics oder Forscher für datengestützte Bildung'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}] }
  ],
  roles: {
    id_specialist:{ emoji:'📐', name:'Instructional Designer', desc:'Du gestaltest E-Learning-Kurse und Trainingsprogramme — du übersetzt Expertenwissen in strukturiertes Lernen', detail:'Du bist Architekt des Lernens. Du analysierst, was Lernende wissen müssen, strukturierst Inhalte logisch, schreibst Skripte für Videos und interaktive Szenarien und baust Kurse in Articulate 360. Deine Arbeit verwandelt dichtes Fachwissen in ein ansprechendes 30-Minuten-Modul.', start:['Lerne das ADDIE-Modell — die Grundlage jedes Instructional Designs; wende es auf einen echten Mini-Kurs an','Beherrsche Articulate Storyline 360 — das Branchenstandard-Tool für interaktives E-Learning','Lies \"The Action Mapping\"-Methode von Cathy Moore — sie verändert dein Denken über Trainingsdesign','Werde Mitglied der ATD-Community — Kurse, Webinare und ein globales Netzwerk'] },
    corp_methodist:{ emoji:'🏢', name:'Corporate L&D-Spezialist', desc:'Du baust und steuerst betriebliche Weiterbildungsprogramme — du verbindest Lernen mit der Unternehmensstrategie', detail:'Du arbeitest an der Schnittstelle von HR, Business und Bildung. Du führst Trainingsbedarfsanalysen durch, beauftragst oder erstellst Lerninhalte, verwaltest das LMS und reportest den Trainings-ROI an die Führungsebene. Deine Programme bewegen reale Business-KPIs.', start:['Hol dir die CIPD- oder ATD-CPTD-Zertifizierung — die Referenzkredentiale für L&D-Profis','Lerne, eine Trainingsbedarfsanalyse (TNA) durchzuführen — beginne mit Interviews und Leistungslücken-Analysen','Beherrsche deine LMS-Plattform — die meisten Organisationen nutzen Moodle, Cornerstone oder SAP SuccessFactors','Lies \"The Six Disciplines of Breakthrough Learning\" — der Leitfaden für wirksame Unternehmensschulungen'] },
    tutor_accomp:{ emoji:'🎯', name:'Akademischer Tutor / Lerncoach', desc:'Du begleitest einzelne Lernende — hilfst ihnen, Hindernisse zu überwinden und ihr Potenzial zu entfalten', detail:'Du arbeitest eins-zu-eins: du diagnostizierst Lernschwierigkeiten, entwickelst persönliche Lernpläne, erklärst schwierige Konzepte neu und hältst die Motivation am Leben, wenn Fortschritte unsichtbar erscheinen. Deine Stärke: jeden Menschen genau dort abholen, wo er steht.', start:['Studiere Lern- und Gedächtnispsychologie — Bücher von Barbara Oakley sind ein guter Einstieg','Lerne, wie man eine Lerndiagnostik-Sitzung durchführt: welche Fragen das echte Hindernis aufdecken','Trainiere aktive Lerntechniken: Abrufübung, verteiltes Üben, Interleaving','Biete kostenlose Tutoringsitzungen an — Praxis ist durch nichts zu ersetzen'] },
    ed_analyst:{ emoji:'📊', name:'Learning-Analytics-Spezialist', desc:'Du misst die Wirksamkeit von Trainings — und verwandelst Lerndaten in Entscheidungen', detail:'Du arbeitest mit Zahlen, die die meisten L&D-Teams ignorieren. Du analysierst Abschlussquoten, Quizergebnisse und Bearbeitungszeiten, identifizierst Abbruchpunkte und baust Dashboards. Du verbindest Lernmetriken mit Geschäftsergebnissen nach dem Kirkpatrick-Modell.', start:['Lerne SQL und Power BI oder Tableau — Learning Analytics lebt in Datenbanken und Dashboards','Studiere das Kirkpatrick-Vier-Ebenen-Evaluierungsmodell — den Standardrahmen für Trainingseffekte','Lies \"Measuring the Success of Learning Through Technology\" von Jack und Patti Phillips','Lerne xAPI (Tin Can) — den modernen Standard für detaillierte Lerndatenerfassung'] }
  },
  ui:{ l2back:'← Zurück zur Bildung', title:'Bildungsdesigner: welche Spezialisierung?' }
};

L2.tutor.fr = {
  questions: [
    { t:'Qu\'est-ce qui t\'attire le plus dans la conception pédagogique ?', o:['Concevoir des curricula de A à Z — structurer le contenu pour que l\'apprentissage progresse logiquement du simple au complexe','Développer la formation en entreprise — aligner les programmes d\'apprentissage sur les objectifs et KPI de l\'organisation','Accompagner des apprenants individuels — aider les étudiants à trouver leur chemin et à surmonter les difficultés','Analyser les données d\'apprentissage — mesurer l\'efficacité, suivre les taux de complétion et améliorer les programmes'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}] },
    { t:'Quel outil aimerais-tu maîtriser en priorité ?', o:['Articulate 360 ou iSpring — créer des cours e-learning interactifs avec des scénarios et des embranchements','Un LMS (Moodle, Canvas, TalentLMS) — configurer des parcours et suivre les progrès automatiquement','Des outils de diagnostic — tests de styles d\'apprentissage, échelles d\'anxiété, cadres de définition d\'objectifs','Power BI ou Google Data Studio — visualiser l\'analytique formation et créer des tableaux de bord d\'efficacité'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}] },
    { t:'Quel résultat te rend le plus fier ?', o:['Un cours est lancé — les apprenants le terminent et trouvent le contenu clair et engageant','Les indicateurs de performance ont progressé après la formation — l\'entreprise voit un ROI mesurable','Un apprenant a surmonté un obstacle — examen réussi, confiance restaurée, objectif atteint','Mon analyse a montré 40 % d\'abandons dans un module — j\'ai trouvé la cause et l\'ai corrigée'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}] },
    { t:'Comment préfères-tu travailler ?', o:['Seul devant un ordinateur — concevoir des visuels, écrire des scripts, construire la logique du cours','En étroite collaboration avec des experts métier et des managers — transformer leur savoir en produit de formation','En tête-à-tête avec un apprenant — conversations, diagnostic, accompagnement personnalisé','Avec des données et des rapports — nettoyer des jeux de données, créer des graphiques, rédiger des analyses'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}] },
    { t:'Quel modèle d\'apprentissage t\'inspire le plus ?', o:['ADDIE ou SAM — conception systématique de l\'analyse des besoins à l\'évaluation','Le modèle 70-20-10 — la majorité de l\'apprentissage se fait au travail, la formation ne fait qu\'appuyer','Zone proximale de développement — pousser l\'apprenant juste au-delà de ce qu\'il peut faire seul','Le modèle Kirkpatrick — mesurer réaction, apprentissage, comportement et résultats business'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}] },
    { t:'Où te vois-tu dans 10 ans ?', o:['Directeur de l\'Instructional Design ou Learning Experience Director dans une EdTech','Directeur de la Formation (CLO) ou Responsable L&D dans un grand groupe','Fondateur d\'un centre de tutorat ou consultant pédagogique indépendant','Responsable Learning Analytics ou chercheur en éducation fondée sur les données'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}] }
  ],
  roles: {
    id_specialist:{ emoji:'📐', name:'Concepteur pédagogique', desc:'Tu conçois des cours e-learning et des programmes de formation — tu transformes l\'expertise en apprentissage structuré', detail:'Tu es architecte de l\'apprentissage. Tu analyses ce que les apprenants doivent savoir, structures le contenu, écris des scripts pour vidéos et scénarios interactifs, et construis des cours dans Articulate 360. Ton travail transforme un savoir dense en un module engageant de 30 minutes.', start:['Apprends le modèle ADDIE — la base de tout instructional design ; applique-le à un vrai mini-cours','Maîtrise Articulate Storyline 360 — l\'outil standard de l\'industrie pour le e-learning interactif','Lis la méthode «Action Mapping» de Cathy Moore — elle changera ta façon de penser la formation','Rejoins la communauté ATD — cours, webinaires et réseau mondial'] },
    corp_methodist:{ emoji:'🏢', name:'Spécialiste L&D en entreprise', desc:'Tu développes et pilotes les programmes de formation en entreprise — tu allignes l\'apprentissage sur la stratégie', detail:'Tu travailles à l\'intersection des RH, du business et de la pédagogie. Tu réalises des analyses des besoins en formation, commandes ou crées des contenus, gères le LMS et reportes le ROI formation à la direction. Tes programmes font bouger de vrais KPI.', start:['Obtiens la certification CIPD ou ATD CPTD — les références pour les professionnels L&D','Apprends à conduire une analyse des besoins en formation (TNA) — commence par des entretiens et analyses des écarts de performance','Maîtrise la plateforme LMS de ton organisation — Moodle, Cornerstone ou SAP SuccessFactors','Lis «The Six Disciplines of Breakthrough Learning» — le guide de la formation d\'entreprise qui fonctionne'] },
    tutor_accomp:{ emoji:'🎯', name:'Tuteur académique / Coach d\'apprentissage', desc:'Tu accompagnes des apprenants individuels — tu les aides à surmonter les obstacles et à réaliser leur potentiel', detail:'Tu travailles en tête-à-tête : tu diagnostiques les difficultés d\'apprentissage, construis des plans d\'étude personnalisés, expliques des concepts complexes différemment et maintiens la motivation quand les progrès semblent invisibles. Ton superpouvoir : rejoindre chaque personne exactement là où elle en est.', start:['Étudie la psychologie de l\'apprentissage et de la mémoire — les livres de Barbara Oakley sont un excellent point de départ','Apprends à mener une séance de diagnostic : quelles questions révèlent le vrai obstacle','Forme-toi aux techniques d\'apprentissage actif : rappel espacé, pratique distribuée, interleaving','Propose des séances de tutorat gratuites pour pratiquer et collecter des retours'] },
    ed_analyst:{ emoji:'📊', name:'Spécialiste Learning Analytics', desc:'Tu mesures l\'efficacité des formations — tu transformes les données en décisions qui améliorent les programmes', detail:'Tu travailles avec des chiffres que la plupart des équipes L&D ignorent. Tu analyses les taux de complétion, les scores aux quiz, les temps de traitement, identifies les points d\'abandon et construis des dashboards. Tu relies les métriques d\'apprentissage aux résultats business via le modèle Kirkpatrick.', start:['Apprends SQL et Power BI ou Tableau — le learning analytics vit dans les bases de données et les dashboards','Étudie le modèle d\'évaluation à quatre niveaux de Kirkpatrick — le cadre standard pour mesurer l\'impact','Lis «Measuring the Success of Learning Through Technology» de Jack et Patti Phillips','Familiarise-toi avec xAPI (Tin Can) — le standard moderne pour capturer des données d\'expérience d\'apprentissage détaillées'] }
  },
  ui:{ l2back:'← Retour à l\'éducation', title:'Concepteur pédagogique : quelle spécialisation ?' }
};



L2.tutor.es = {
  questions: [
    {
      t: '¿Qué es lo que más te atrae del diseño educativo?',
      o: [
        'Diseñar currículos desde cero — estructurar el contenido para que el aprendizaje fluya lógicamente de lo simple a lo complejo',
        'Desarrollar la capacitación corporativa — alinear los programas de aprendizaje con los objetivos y KPIs del negocio',
        'Acompañar a estudiantes de forma individual — ayudarlos a encontrar su camino y superar dificultades de aprendizaje',
        'Analizar datos de aprendizaje — medir la efectividad, rastrear tasas de finalización y mejorar programas con base en números'
      ],
      s: [{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]
    },
    {
      t: '¿Qué herramienta te gustaría dominar más?',
      o: [
        'Articulate 360 o iSpring — crear cursos e-learning interactivos con escenarios y ramificaciones',
        'LMS (Moodle, Canvas, TalentLMS) — configurar rutas de aprendizaje, automatizar evaluaciones y hacer seguimiento del progreso',
        'Herramientas de diagnóstico — tests de estilos de aprendizaje, escalas de ansiedad, marcos para establecer metas',
        'Power BI o Google Data Studio — visualizar analíticas de capacitación y crear dashboards de efectividad'
      ],
      s: [{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]
    },
    {
      t: '¿Qué resultado de tu trabajo te genera más satisfacción?',
      o: [
        'Un curso está lanzado — los estudiantes lo completan y dicen que el material fue claro y motivador',
        'Los indicadores de rendimiento de los empleados mejoraron tras la capacitación — el negocio ve un ROI medible',
        'Un estudiante superó una barrera — examen aprobado, confianza recuperada, meta alcanzada',
        'Mi reporte de analítica mostró que un módulo tenía 40% de abandono — encontré la causa y la resolví'
      ],
      s: [{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]
    },
    {
      t: '¿Cómo prefieres trabajar?',
      o: [
        'Solo frente a una computadora — diseñando gráficos, escribiendo guiones, construyendo la lógica del curso en una herramienta de autor',
        'En estrecha colaboración con expertos en la materia y gerentes — convirtiendo su conocimiento en un producto de capacitación',
        'Uno a uno con un estudiante — conversaciones, diagnósticos, sesiones de apoyo personalizadas',
        'Con datos e informes — limpiando conjuntos de datos, creando gráficos, redactando conclusiones analíticas'
      ],
      s: [{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]
    },
    {
      t: '¿Qué modelo de aprendizaje te resulta más atractivo?',
      o: [
        'ADDIE o SAM — diseño sistemático desde el análisis de necesidades hasta la evaluación',
        'El modelo 70-20-10 — la mayor parte del aprendizaje ocurre en el trabajo, la capacitación solo lo apoya',
        'Zona de Desarrollo Próximo — llevar al estudiante justo más allá de lo que puede hacer solo',
        'Modelo Kirkpatrick — medir reacción, aprendizaje, comportamiento y resultados de negocio de forma sistemática'
      ],
      s: [{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]
    },
    {
      t: '¿Dónde te ves en 10 años?',
      o: [
        'Director de Diseño Instruccional o Director de Experiencia de Aprendizaje en una empresa EdTech',
        'Chief Learning Officer (CLO) o Jefe de L&D en una gran corporación',
        'Fundador de un centro de tutoría o consultor educativo independiente',
        'Director de Learning Analytics o investigador en educación basada en datos'
      ],
      s: [{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]
    }
  ],
  roles: {
    id_specialist: {
      emoji: '📐',
      name: 'Diseñador Instruccional',
      desc: 'Diseñas cursos e-learning y programas de capacitación — convirtiendo el conocimiento experto en aprendizaje estructurado',
      detail: 'Eres el arquitecto del aprendizaje. Analizas qué necesita saber el estudiante, estructuras el contenido en una secuencia lógica, escribes guiones para videos y escenarios interactivos, y construyes cursos en Articulate 360 o iSpring. Tu trabajo transforma un conocimiento denso en un módulo atractivo de 30 minutos que alguien puede completar en su hora de almuerzo.',
      start: [
        'Aprende el modelo ADDIE — la base de todo diseño instruccional; aplícalo a un mini-curso real',
        'Domina Articulate Storyline 360 — la herramienta estándar de la industria para e-learning interactivo',
        'Lee el método "Action Mapping" de Cathy Moore — cambiará tu forma de pensar sobre el diseño de capacitaciones',
        'Únete a la comunidad ATD (Association for Talent Development) — cursos, webinars y una red global'
      ]
    },
    corp_methodist: {
      emoji: '🏢',
      name: 'Especialista en Aprendizaje y Desarrollo Corporativo',
      desc: 'Construyes y gestionas programas de capacitación corporativa — alineando el aprendizaje con la estrategia del negocio',
      detail: 'Trabajas en la intersección de RR.HH., el negocio y la educación. Realizas análisis de necesidades de capacitación (TNA), encargas o creas contenido de aprendizaje, administras el LMS y reportas el ROI de la capacitación a la alta dirección. Entiendes que los adultos aprenden diferente a los niños — necesitan relevancia, autonomía y aplicabilidad inmediata. Tus programas mueven KPIs reales del negocio.',
      start: [
        'Obtén tu certificación CIPD o ATD CPTD — las credenciales de referencia para profesionales de L&D',
        'Aprende a realizar un Análisis de Necesidades de Capacitación (TNA) — empieza entrevistando gerentes y analizando brechas de desempeño',
        'Domina la plataforma LMS de tu organización — la mayoría usa Moodle, Cornerstone o SAP SuccessFactors',
        'Lee "The Six Disciplines of Breakthrough Learning" — la guía definitiva sobre capacitación corporativa que funciona'
      ]
    },
    tutor_accomp: {
      emoji: '🎯',
      name: 'Tutor Académico / Coach de Aprendizaje',
      desc: 'Acompañas a estudiantes de forma individual — ayudándolos a superar barreras, establecer metas y alcanzar su potencial',
      detail: 'Trabajas con estudiantes uno a uno: diagnosticando sus dificultades de aprendizaje, construyendo planes de estudio personalizados, explicando conceptos complicados de nuevas formas y manteniendo viva la motivación cuando el progreso parece invisible. Puedes apoyar a un estudiante que lucha con matemáticas, a un profesional que cambia de carrera o a un universitario abrumado por sus materias. Tu superpoder es encontrarte con cada persona exactamente donde está.',
      start: [
        'Estudia psicología del aprendizaje y la memoria — los libros de Barbara Oakley ("A Mind for Numbers") son un excelente comienzo',
        'Aprende a realizar una sesión de diagnóstico de aprendizaje: qué preguntas revelan la barrera real',
        'Capacítate en técnicas de aprendizaje activo: práctica de recuperación, repetición espaciada, interleaving',
        'Gana experiencia: ofrece sesiones de tutoría gratuitas para practicar tu enfoque y obtener retroalimentación'
      ]
    },
    ed_analyst: {
      emoji: '📊',
      name: 'Especialista en Learning Analytics',
      desc: 'Mides la efectividad de la capacitación — convirtiendo datos de aprendizaje en decisiones que mejoran los programas',
      detail: 'Trabajas con números que la mayoría de los equipos de L&D ignoran. Extraes datos de plataformas LMS, analizas tasas de finalización, puntajes de quizzes y tiempo en tarea, identificas puntos de abandono y construyes dashboards que muestran a la dirección qué funciona y qué no. Aplicas el modelo Kirkpatrick para conectar métricas de aprendizaje con resultados del negocio. Tu análisis determina directamente qué se financia el próximo año.',
      start: [
        'Aprende SQL y Power BI o Tableau — el learning analytics vive en bases de datos y dashboards',
        'Estudia el modelo de evaluación de cuatro niveles de Kirkpatrick — el marco estándar para medir el impacto de la capacitación',
        'Lee "Measuring the Success of Learning Through Technology" de Jack y Patti Phillips',
        'Familiarízate con xAPI (Tin Can) — el estándar moderno para capturar datos detallados de experiencia de aprendizaje'
      ]
    }
  },
  ui: { l2back: '← Volver a educación', title: 'Diseñador de aprendizaje: ¿qué especialización?' }
};

L2.tutor.pt = {
  questions: [
    {
      t: 'O que mais te atrai no design educacional?',
      o: [
        'Criar currículos do zero — estruturar o conteúdo para que o aprendizado flua logicamente do simples ao complexo',
        'Desenvolver treinamentos corporativos — alinhar programas de aprendizagem com objetivos de negócio e KPIs',
        'Apoiar aprendizes individualmente — ajudá-los a encontrar seu caminho e superar dificuldades de aprendizagem',
        'Analisar dados de aprendizagem — medir efetividade, acompanhar taxas de conclusão e melhorar programas com base em números'
      ],
      s: [{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]
    },
    {
      t: 'Qual ferramenta você mais gostaria de dominar?',
      o: [
        'Articulate 360 ou iSpring — criar cursos e-learning interativos com cenários e ramificações',
        'LMS (Moodle, Canvas, TalentLMS) — configurar trilhas de aprendizagem, automatizar avaliações e acompanhar o progresso',
        'Ferramentas de diagnóstico — testes de estilos de aprendizagem, escalas de ansiedade, frameworks para definição de metas',
        'Power BI ou Google Data Studio — visualizar análises de treinamento e criar dashboards de efetividade'
      ],
      s: [{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]
    },
    {
      t: 'Qual resultado do seu trabalho gera mais satisfação para você?',
      o: [
        'Um curso é lançado — os alunos o concluem e dizem que o material foi claro e envolvente',
        'Os indicadores de desempenho dos colaboradores melhoraram após o treinamento — o negócio vê um ROI mensurável',
        'Um estudante superou uma barreira — prova aprovada, confiança recuperada, meta alcançada',
        'Meu relatório de análise mostrou que um módulo tinha 40% de abandono — encontrei a causa e corrigi'
      ],
      s: [{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]
    },
    {
      t: 'Como você prefere trabalhar?',
      o: [
        'Sozinho no computador — criando visuais, escrevendo roteiros, construindo a lógica do curso em uma ferramenta de autoria',
        'Em estreita colaboração com especialistas no assunto e gestores — transformando o conhecimento deles em um produto de treinamento',
        'Individualmente com um aluno — conversas, diagnósticos, sessões de apoio personalizadas',
        'Com dados e relatórios — limpando conjuntos de dados, criando gráficos, redigindo conclusões analíticas'
      ],
      s: [{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]
    },
    {
      t: 'Qual modelo de aprendizagem mais te atrai?',
      o: [
        'ADDIE ou SAM — design sistemático desde a análise de necessidades até a avaliação',
        'O modelo 70-20-10 — a maior parte do aprendizado acontece no trabalho, o treinamento apenas apoia',
        'Zona de Desenvolvimento Proximal — levar o aprendiz um pouco além do que consegue fazer sozinho',
        'Modelo Kirkpatrick — medir reação, aprendizagem, comportamento e resultados de negócio de forma sistemática'
      ],
      s: [{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]
    },
    {
      t: 'Onde você se vê daqui a 10 anos?',
      o: [
        'Head de Instructional Design ou Learning Experience Director em uma empresa EdTech',
        'Chief Learning Officer (CLO) ou Head de L&D em uma grande corporação',
        'Fundador de um centro de tutoria ou consultor educacional independente',
        'Head de Learning Analytics ou pesquisador em educação baseada em dados'
      ],
      s: [{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]
    }
  ],
  roles: {
    id_specialist: {
      emoji: '📐',
      name: 'Designer Instrucional',
      desc: 'Você cria cursos e-learning e programas de treinamento — transformando conhecimento especializado em aprendizagem estruturada',
      detail: 'Você é o arquiteto do aprendizado. Analisa o que o aprendiz precisa saber, estrutura o conteúdo em uma sequência lógica, escreve roteiros para vídeos e cenários interativos, e constrói cursos no Articulate 360 ou iSpring. Seu trabalho transforma um conhecimento denso em um módulo envolvente de 30 minutos que alguém pode concluir na hora do almoço.',
      start: [
        'Aprenda o modelo ADDIE — a base de todo design instrucional; aplique-o a um mini-curso real',
        'Domine o Articulate Storyline 360 — a ferramenta padrão da indústria para e-learning interativo',
        'Leia o método "Action Mapping" de Cathy Moore — vai mudar sua forma de pensar sobre design de treinamentos',
        'Entre na comunidade ATD (Association for Talent Development) — cursos, webinars e uma rede global'
      ]
    },
    corp_methodist: {
      emoji: '🏢',
      name: 'Especialista em Aprendizagem e Desenvolvimento Corporativo',
      desc: 'Você cria e gerencia programas de treinamento corporativo — alinhando o aprendizado à estratégia do negócio',
      detail: 'Você trabalha na interseção entre RH, negócio e educação. Conduz análises de necessidades de treinamento (TNA), encomenda ou cria conteúdo de aprendizagem, gerencia o LMS e reporta o ROI de treinamento para a liderança sênior. Você entende que adultos aprendem diferente de crianças — precisam de relevância, autonomia e aplicabilidade imediata. Seus programas movem KPIs reais do negócio.',
      start: [
        'Obtenha sua certificação CIPD ou ATD CPTD — as credenciais de referência para profissionais de L&D',
        'Aprenda a conduzir uma Análise de Necessidades de Treinamento (TNA) — comece entrevistando gestores e analisando lacunas de desempenho',
        'Domine a plataforma LMS da sua organização — a maioria usa Moodle, Cornerstone ou SAP SuccessFactors',
        'Leia "The Six Disciplines of Breakthrough Learning" — o guia definitivo sobre treinamento corporativo que funciona'
      ]
    },
    tutor_accomp: {
      emoji: '🎯',
      name: 'Tutor Acadêmico / Coach de Aprendizagem',
      desc: 'Você apoia alunos individualmente — ajudando-os a superar barreiras, definir metas e alcançar seu potencial',
      detail: 'Você trabalha com alunos individualmente: diagnosticando suas dificuldades de aprendizagem, construindo planos de estudo personalizados, explicando conceitos difíceis de novas formas e mantendo a motivação viva quando o progresso parece invisível. Pode apoiar um estudante com dificuldades em matemática, um profissional em transição de carreira ou um universitário sobrecarregado com as disciplinas. Seu superpoder é encontrar cada pessoa exatamente onde ela está.',
      start: [
        'Estude psicologia da aprendizagem e da memória — os livros de Barbara Oakley ("A Mind for Numbers") são um ótimo começo',
        'Aprenda a conduzir uma sessão de diagnóstico de aprendizagem: quais perguntas revelam a barreira real',
        'Capacite-se em técnicas de aprendizagem ativa: prática de recuperação, repetição espaçada, interleaving',
        'Ganhe experiência: ofereça sessões de tutoria gratuitas para praticar sua abordagem e coletar feedback'
      ]
    },
    ed_analyst: {
      emoji: '📊',
      name: 'Especialista em Learning Analytics',
      desc: 'Você mede a efetividade dos treinamentos — transformando dados de aprendizagem em decisões que melhoram os programas',
      detail: 'Você trabalha com números que a maioria das equipes de L&D ignora. Extrai dados de plataformas LMS, analisa taxas de conclusão, pontuações de quizzes e tempo na tarefa, identifica pontos de abandono e constrói dashboards que mostram para a liderança o que está funcionando e o que não está. Aplica o modelo Kirkpatrick para conectar métricas de aprendizagem a resultados do negócio. Sua análise define diretamente o que será financiado no próximo ano.',
      start: [
        'Aprenda SQL e Power BI ou Tableau — o learning analytics vive em bancos de dados e dashboards',
        'Estude o modelo de avaliação de quatro níveis de Kirkpatrick — o framework padrão para medir o impacto do treinamento',
        'Leia "Measuring the Success of Learning Through Technology" de Jack e Patti Phillips',
        'Familiarize-se com xAPI (Tin Can) — o padrão moderno para capturar dados detalhados de experiência de aprendizagem'
      ]
    }
  },
  ui: { l2back: '← Voltar à educação', title: 'Designer de aprendizagem: qual especialização?' }
};



L2.tutor.ar = {
  questions: [
    { t:'ما الذي يثير اهتمامك أكثر في تصميم التعلم؟', o:['تصميم المناهج من الصفر — هيكلة المحتوى بحيث ينتقل التعلم من البسيط إلى المعقد','تطوير التدريب المؤسسي — مواءمة برامج التعلم مع أهداف المنظمة','مرافقة المتعلمين الأفراد — مساعدة الطلاب في إيجاد طريقهم وتجاوز العقبات','تحليل بيانات التعلم — قياس الفعالية ومتابعة معدلات الإتمام وتحسين البرامج'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}] },
    { t:'أيّ أداة تودّ إتقانها أكثر؟', o:['Articulate 360 أو iSpring — بناء دورات إلكترونية تفاعلية مع سيناريوهات متفرعة','نظام إدارة التعلم LMS — تكوين مسارات التعلم ومتابعة التقدم تلقائياً','أدوات التشخيص — اختبارات أساليب التعلم وأطر تحديد الأهداف','Power BI أو Google Data Studio — تصور تحليلات التدريب وبناء لوحات الفعالية'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}] },
    { t:'أيّ نتيجة عمل تُشعرك بالفخر أكثر؟', o:['إطلاق دورة يُكملها المتعلمون ويجدون المحتوى واضحاً وشيّقاً','تحسُّن أداء الموظفين بعد التدريب مع عائد استثمار ملموس للمؤسسة','تجاوز أحد المتعلمين عقبة كانت تعيقه واسترداده ثقته بنفسه','كشف تحليلي عن 40% تسرب في وحدة ومعالجة السبب الجذري'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}] },
    { t:'كيف تُفضّل العمل؟', o:['منفرداً أمام الحاسوب — تصميم رسوم وكتابة نصوص وبناء منطق الدورة','بالتعاون مع خبراء الموضوع والمديرين — تحويل معرفتهم إلى منتج تدريبي','فردياً مع المتعلم — محادثات وتشخيص ومرافقة شخصية','مع البيانات والتقارير — تنظيف مجموعات البيانات وإنشاء المخططات'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}] },
    { t:'أيّ نموذج تعلّم يستهويك أكثر؟', o:['ADDIE أو SAM — تصميم منهجي من تحليل الاحتياجات حتى التقييم','نموذج 70-20-10 — معظم التعلم يحدث في العمل والتدريب مجرد دعم','منطقة التطور المحيطي — دفع المتعلم خطوة واحدة فوق مستواه الحالي','نموذج كيركباتريك — قياس ردود الفعل والتعلم والسلوك ونتائج الأعمال'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}] },
    { t:'أين ترى نفسك بعد عشر سنوات؟', o:['مدير تصميم تعليمي أو مدير تجربة التعلم في شركة EdTech','مدير التعلم التنفيذي أو رئيس قسم L&D في مؤسسة كبرى','مؤسس مركز تعليمي أو مستشار تربوي مستقل','رئيس تحليلات التعلم أو باحث في التعليم المبني على البيانات'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}] },
  ],
  roles: {
    id_specialist:{ emoji:'📐', name:'مصمم تعليمي', desc:'تصمّم دورات التعلم الإلكتروني وبرامج التدريب — تحوّل المعرفة إلى تعلم منظم', detail:'أنت مهندس التعلم. تحلل ما يحتاج المتعلمون معرفته وتهيكل المحتوى وتكتب نصوص الفيديو والسيناريوهات التفاعلية وتبني الدورات في Articulate 360. عملك يحوّل معرفة كثيفة إلى وحدة جذابة مدتها 30 دقيقة.', start:['تعلّم نموذج ADDIE — أساس كل تصميم تعليمي وطبّقه على دورة حقيقية صغيرة','أتقن Articulate Storyline 360 — أداة الصناعة القياسية للتعلم الإلكتروني التفاعلي','اقرأ منهجية Action Mapping لكاثي مور — ستغيّر تفكيرك في تصميم التدريب','انضم لمجتمع ATD — دورات وندوات وشبكة عالمية'] },
    corp_methodist:{ emoji:'🏢', name:'أخصائي التطوير والتعلم المؤسسي', desc:'تبني وتدير برامج التدريب المؤسسي — تربط التعلم باستراتيجية المنظمة', detail:'تعمل عند تقاطع الموارد البشرية والأعمال والتعليم. تجري تحليلات احتياجات التدريب وتدير منظومة التعلم وتقدم تقارير العائد لإدارة التدريب إلى القيادة.', start:['احصل على شهادة CIPD أو ATD CPTD — المرجع المعتمد لمحترفي التعلم والتطوير','تعلّم كيف تجري تحليل احتياجات التدريب TNA — ابدأ بالمقابلات وتحليل فجوات الأداء','أتقن منصة LMS — معظم المنظمات تستخدم Moodle أو Cornerstone أو SAP SuccessFactors','اقرأ The Six Disciplines of Breakthrough Learning — دليل التدريب المؤسسي الفعّال'] },
    tutor_accomp:{ emoji:'🎯', name:'معلم خصوصي / مدرب تعلم', desc:'ترافق المتعلمين الأفراد — تساعدهم على تجاوز العقبات وتحقيق إمكاناتهم', detail:'تعمل فرداً مع فرد: تشخّص صعوبات التعلم وتضع خطط دراسة شخصية وتشرح المفاهيم الصعبة بطريقة مختلفة وتحافظ على الدافعية.', start:['ادرس علم النفس التعلمي والذاكرة — كتب باربرا أوكلي نقطة انطلاق ممتازة','تعلّم كيف تجري جلسة تشخيص تعلمي وأيّ الأسئلة تكشف العقبة الحقيقية','تدرّب على تقنيات التعلم النشط: الاسترداد والممارسة الموزعة والتداخل','قدّم جلسات تدريس مجانية للتدرب واكتساب الخبرة الفعلية'] },
    ed_analyst:{ emoji:'📊', name:'أخصائي تحليلات التعلم', desc:'تقيس فعالية التدريب — وتحوّل بيانات التعلم إلى قرارات تحسّن البرامج', detail:'تعمل مع أرقام يتجاهلها معظم فرق L&D. تحلل معدلات الإتمام ودرجات الاختبارات ونقاط التسرب وتبني لوحات بيانات.', start:['تعلّم SQL وPower BI أو Tableau — تحليلات التعلم تعيش في قواعد البيانات','ادرس نموذج كيركباتريك الرباعي — الإطار القياسي لتقييم أثر التدريب','اقرأ Measuring the Success of Learning Through Technology لجاك وباتي فيليبس','تعرّف على xAPI — المعيار الحديث لجمع بيانات تجربة التعلم التفصيلية'] },
  },
  ui:{ l2back:'← العودة إلى التعليم', title:'مصمم التعلم: ما التخصص؟' }
};

L2.tutor.he = {
  questions: [
    { t:'מה מעניין אותך יותר בתחום עיצוב הלמידה?', o:['עיצוב תוכניות לימודים מאפס — מבנה תוכן שמוביל מהפשוט למורכב','פיתוח הדרכה ארגונית — התאמת תוכניות למידה למטרות הארגון ומדדי KPI','ליווי לומדים יחידים — עזרה לסטודנטים למצוא דרכם ולהתגבר על מכשולים','ניתוח נתוני למידה — מדידת אפקטיביות ומעקב אחר שיעורי השלמה'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}] },
    { t:'איזה כלי הכי תרצה לשלוט בו?', o:['Articulate 360 או iSpring — בניית קורסי e-learning אינטראקטיביים עם תרחישים','מערכת LMS (Moodle, Canvas) — הגדרת מסלולי למידה ומעקב אוטומטי אחר התקדמות','כלי אבחון — מבחני סגנונות למידה, מדדי חרדה, מסגרות לקביעת מטרות','Power BI או Google Data Studio — ויזואליזציה של נתוני הדרכה ולוחות מחוונים'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}] },
    { t:'איזה תוצאה עבודה הכי מגאה אותך?', o:['קורס שהושק — לומדים מסיימים אותו ומוצאים את התוכן ברור ומרתק','ביצועי עובדים שיפרו אחרי ההדרכה — הארגון רואה ROI מדיד','לומד שהתגבר על מכשול — עבר מבחן, השיב ביטחון עצמי, השיג מטרה','הניתוח שלי הראה 40% נשירה במודול — מצאתי את הסיבה ותיקנתי אותה'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}] },
    { t:'איך אתה מעדיף לעבוד?', o:['לבד מול מחשב — עיצוב ויזואלי, כתיבת סקריפטים, בניית לוגיקת הקורס','בשיתוף עם מומחי תוכן ומנהלים — תרגום הידע שלהם למוצר הדרכה','אחד על אחד עם לומד — שיחות, אבחון, ליווי אישי','עם נתונים ודוחות — ניקוי מערכי נתונים, יצירת גרפים, כתיבת ניתוחים'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}] },
    { t:'איזה מודל למידה הכי מושך אותך?', o:['ADDIE או SAM — עיצוב שיטתי מניתוח צרכים ועד הערכה','מודל 70-20-10 — רוב הלמידה קורה בעבודה, ההדרכה רק תומכת','אזור ההתפתחות הקרובה — לאתגר לומד מעט מעבר למה שהוא יכול עצמאית','מודל קירקפטריק — מדידת תגובה, למידה, התנהגות ותוצאות עסקיות'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}] },
    { t:'איפה אתה רואה את עצמך עוד 10 שנים?', o:['ראש תחום Instructional Design או Learning Experience Director בחברת EdTech','מנהל למידה ראשי CLO או ראש L&D בארגון גדול','מייסד מרכז חינוך או יועץ חינוכי עצמאי','ראש Learning Analytics או חוקר בחינוך מבוסס-נתונים'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}] },
  ],
  roles: {
    id_specialist:{ emoji:'📐', name:'מעצב הוראה', desc:'אתה מעצב קורסי e-learning ותוכניות הדרכה — מתרגם מומחיות ללמידה מובנית', detail:'אתה האדריכל של הלמידה. אתה מנתח מה הלומדים צריכים לדעת, מבנה תוכן, כותב סקריפטים לסרטונים ולתרחישים אינטראקטיביים ובונה קורסים ב-Articulate 360.', start:['למד את מודל ADDIE — הבסיס של כל עיצוב הוראה; יישם אותו על קורס מיני אמיתי','שלוט ב-Articulate Storyline 360 — הכלי הסטנדרטי בתעשייה ל-e-learning אינטראקטיבי','קרא את מתודולוגיית Action Mapping של קאתי מור — תשנה את החשיבה שלך על עיצוב הדרכה','הצטרף לקהילת ATD — קורסים, ווביינרים ורשת גלובלית'] },
    corp_methodist:{ emoji:'🏢', name:'מומחה למידה ופיתוח ארגוני', desc:'אתה בונה ומנהל תוכניות הדרכה ארגוניות — מחבר למידה לאסטרטגיה עסקית', detail:'אתה עובד בצומת של משאבי אנוש, עסקים וחינוך. אתה מבצע ניתוחי צרכי הדרכה, מנהל את מערכת ה-LMS ומדווח על ROI ההדרכה להנהלה.', start:['קבל הסמכת CIPD או ATD CPTD — האישורים הייחוסיים למקצועני L&D','למד לבצע ניתוח צרכי הדרכה TNA — התחל עם ראיונות וניתוח פערי ביצועים','שלוט בפלטפורמת ה-LMS של הארגון — Moodle, Cornerstone או SAP SuccessFactors','קרא את The Six Disciplines of Breakthrough Learning — המדריך להדרכה ארגונית שעובדת'] },
    tutor_accomp:{ emoji:'🎯', name:'מורה פרטי / מאמן למידה', desc:'אתה מלווה לומדים יחידים — עוזר להם להתגבר על מכשולים ולממש את הפוטנציאל שלהם', detail:'אתה עובד אחד על אחד: מאבחן קשיי למידה, בונה תוכניות לימוד אישיות, מסביר מחדש מושגים מורכבים ושומר על מוטיבציה.', start:['למד פסיכולוגיה של למידה וזיכרון — הספרים של ברברה אוקלי הם נקודת התחלה מצוינת','למד כיצד לנהל שיחת אבחון: אילו שאלות חושפות את המכשול האמיתי','התאמן בטכניקות למידה פעילה: שליפה, תרגול מפוזר, interleaving','הצע שיעורים פרטיים חינמיים — אין תחליף לתרגול עם לומדים אמיתיים'] },
    ed_analyst:{ emoji:'📊', name:'מומחה ניתוח נתוני למידה', desc:'אתה מודד אפקטיביות של הדרכות — ומתרגם נתוני למידה להחלטות שמשפרות תוכניות', detail:'אתה עובד עם מספרים שרוב צוותי L&D מתעלמים מהם. אתה מנתח שיעורי השלמה, ציוני חידונים, נקודות נשירה ובונה לוחות מחוונים.', start:['למד SQL ו-Power BI או Tableau — ניתוח נתוני למידה חי במסדי נתונים ולוחות מחוונים','למד את מודל ההערכה הרבה-שכבתי של קירקפטריק — הבסיס לאמידת השפעת ההדרכה','קרא Measuring the Success of Learning Through Technology מאת ג׳ק ופאטי פיליפס','הכר את xAPI (Tin Can) — הסטנדרט המודרני לאיסוף נתוני חוויית למידה'] },
  },
  ui:{ l2back:'← חזרה לחינוך', title:'מעצב למידה: איזה התמחות?' }
};

L2.tutor.zh = {
  questions: [
    {t:'教育设计工作中什么最吸引你？', o:['教学设计——系统化设计有效的学习体验','企业学习——为企业设计和管理培训体系','学习辅导——一对一陪伴学生个性化成长','教育数据分析——用数据优化学习效果'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]},
    {t:'你最想精通哪个技能？', o:['Articulate Storyline、课程架构设计和学习目标拆解','学习管理系统（LMS）运营和企业学习内容规划','个性化学习路径设计和心理支持技巧','学习数据分析——完课率、学习效果评估模型'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]},
    {t:'什么成果最让你有成就感？', o:['你设计的课程的学员满意度和完成率都远超平均','你搭建的企业学习体系让全公司培训效率提升了一倍','你辅导的学生突破了学习瓶颈，找到了适合自己的方法','你的数据分析发现了导致高辍学率的关键节点，并解决了它'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]},
    {t:'你更喜欢哪种工作？', o:['用E-learning工具制作精美的互动课件','在LMS上管理课程，分析学习数据，规划学习路径','与学生深度沟通，设计个性化学习计划','建立数据模型，评估哪种教学方式最有效'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]},
    {t:'你会选择哪个项目？', o:['为某在线教育机构设计一门完整的大学英语课程','为1000人的公司建立新员工入职培训体系','为10个高考生提供为期3个月的个性化学习辅导','分析某MOOC平台的学习数据，降低课程辍学率'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]},
    {t:'10年后你在哪里？', o:['教育科技公司的学习体验总监','大型集团的首席学习官（CLO）','独立的高端学习教练品牌创始人','教育研究机构的学习科学研究员'], s:[{id_specialist:3},{corp_methodist:3},{tutor_accomp:3},{ed_analyst:3}]}
  ],
  roles: {
    id_specialist: {emoji:'📐', name:'教学设计师', desc:'系统化设计高效的学习体验——从目标到评估，每个环节都经过精心规划', detail:'你不是在做PPT，你是在构建学习系统。你分析学习者的特点和需求，拆解知识结构，选择最适合的教学策略，最终制作出让人真正能学会的课程。', start:['学习ADDIE教学设计模型','掌握Articulate Storyline或Rise——E-learning制作工具','了解认知负荷理论——如何设计不让学习者脑子转不过来的课程','研究优秀课程的设计——拆解你喜欢的课是如何组织的']},
    corp_methodist: {emoji:'🏢', name:'企业学习方法论专家', desc:'为企业构建系统化的学习体系，让培训真正推动业务发展', detail:'你管理整个企业的学习生态。你选购LMS系统，规划学习路径，设计课程目录，确保每个岗位的员工都能获得他们需要的知识和技能。', start:['了解主流LMS系统——学浪、企学宝、SAP SuccessFactors','学习企业人才发展框架——能力模型、学习路径设计','掌握培训效果评估——ROI计算方法','考取ATD认证——国际培训与发展协会的行业认可']},
    tutor_accomp: {emoji:'🤝', name:'学习教练', desc:'一对一陪伴学生突破学习障碍，找到最适合自己的学习方式', detail:'你不是辅导具体的知识点，而是辅导学习这件事本身。你帮助学生理解自己的学习风格，建立良好习惯，突破心理障碍，实现真正的自主学习。', start:['学习教练技术基础——提问而不是给答案','了解成长型思维——卡罗尔·德韦克的研究','掌握学习方法论——间隔重复、提取练习、费曼技巧','在志愿服务中积累辅导经验']},
    ed_analyst: {emoji:'📊', name:'教育数据分析师', desc:'用数据发现教育中的规律，优化学习体验和教学效果', detail:'你让教育决策变得有据可依。你分析学生的学习行为、课程完成率、测验成绩，找到影响学习效果的关键因素，帮助平台和学校做出更好的决策。', start:['掌握SQL和Python数据分析基础','了解教育数据挖掘基本概念——Learning Analytics','学习数据可视化——用图表讲清楚教育数据的故事','熟悉常用的教育数据库和学习平台的数据导出功能']}
  },
  ui: {l2back:'← 返回教育设计', title:'教育设计：选择你的专业方向'}
};
