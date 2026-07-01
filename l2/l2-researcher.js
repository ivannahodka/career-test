'use strict';
/* ── L2: Учёный / Научный исследователь ──────────────────────────────────────
   4 roles: lab_sci 🧪 | comp_sci 💻 | academic 🎓 | industry_r 🏭
   6 questions × 8 languages
──────────────────────────────────────────────────────────────────────────── */

// ─── RU ──────────────────────────────────────────────────────────────────────
L2.researcher.ru = {
  questions: [
    {
      t: 'Что тебя больше всего привлекает в научной работе?',
      o: [
        'Ставить эксперименты руками — работать с реагентами, клетками, приборами в лаборатории',
        'Анализировать данные, строить модели и находить паттерны через код и вычисления',
        'Генерировать новое знание, публиковаться и передавать его студентам',
        'Превращать научные открытия в реальные продукты и технологии'
      ],
      s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}]
    },
    {
      t: 'Какая задача тебе ближе всего?',
      o: [
        'Провести серию экспериментов, собрать сырые данные и воспроизвести результат',
        'Написать скрипт на Python/R, обработать датасет и визуализировать находки',
        'Написать грантовую заявку, опубликовать статью в Nature/Science и защитить диссертацию',
        'Разработать прототип нового вещества или технологии и запатентовать его'
      ],
      s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}]
    },
    {
      t: 'Какой инструмент тебе важен больше всего?',
      o: [
        'ПЦР, масс-спектрометр, проточная цитометрия, микроскоп, протоколы экспериментов',
        'Python / R, Jupyter, биоинформатические базы NCBI/UniProt, облачные вычисления',
        'PubMed, LaTeX, Zotero, систематические обзоры, система грантов NIH/ERC/РНФ',
        'Лабораторная автоматизация, патентный поиск, LIMS, pipeline от идеи до прототипа'
      ],
      s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}]
    },
    {
      t: 'Что для тебя главный результат работы?',
      o: [
        'Воспроизводимый эксперимент, подтверждающий или опровергающий гипотезу',
        'Код и модель, которые объясняют явление лучше, чем любой предыдущий подход',
        'Публикация в рецензируемом журнале Q1 и h-индекс, растущий год за годом',
        'Патент, лицензия или спин-офф компания, которая выводит открытие на рынок'
      ],
      s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}]
    },
    {
      t: 'С кем тебе интереснее работать?',
      o: [
        'С командой лаборатории: аспиранты, постдоки, технические специалисты',
        'С биоинформатиками, дата-учёными и инженерами вычислительных систем',
        'Со студентами, коллегами-учёными из разных стран, рецензентами журналов',
        'С R&D-командой, патентными поверенными, менеджерами продукта и инвесторами'
      ],
      s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}]
    },
    {
      t: 'Как выглядит твой успех через 10 лет?',
      o: [
        'Ведущий научный сотрудник с собственной группой и оборудованием мирового уровня',
        'Признанный вычислительный учёный с открытым кодом, который используют тысячи исследователей',
        'Профессор с кафедрой, лекции в топовых университетах и индекс Хирша >25',
        'Директор R&D в биотех/фарма или сооснователь deep-tech стартапа'
      ],
      s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}]
    }
  ],
  roles: {
    lab_sci: {
      emoji: '🧪',
      name: 'Лабораторный учёный',
      desc: 'Ставишь эксперименты, генерируешь первичные данные и проверяешь гипотезы в реальных условиях',
      detail: 'Ты работаешь руками и головой одновременно. Разрабатываешь протоколы, ставишь эксперименты, устраняешь неполадки и добиваешься воспроизводимых результатов. Твои данные — основа для теорий и клинических применений.',
      start: ['Освой базовые лабораторные техники твоей области: ПЦР, Western blot, клеточные культуры', 'Изучи Good Laboratory Practice (GLP) и ведение лабораторного журнала', 'Пройди онлайн-курсы по лабораторным методам на Coursera или edX', 'Найди лабораторию для стажировки — практика важнее теории'],
      startUrls: ['https://www.coursera.org/learn/lab-techniques', 'https://www.ncbi.nlm.nih.gov/books/NBK21136/', 'https://www.addgene.org/protocols/', 'https://www.jove.com']
    },
    comp_sci: {
      emoji: '💻',
      name: 'Вычислительный учёный',
      desc: 'Анализируешь большие данные, строишь модели и симуляции — наука через код и алгоритмы',
      detail: 'Ты на пересечении биологии, физики или химии с программированием. Пишешь скрипты для анализа геномных данных, климатических рядов или астрофизических наблюдений. Твои модели предсказывают то, что сложно проверить экспериментально.',
      start: ['Изучи Python для науки: NumPy, SciPy, pandas, matplotlib', 'Освой R и Bioconductor если работаешь в биомедицине', 'Пройди курсы по машинному обучению в науке (fast.ai, deeplearning.ai)', 'Публикуй код на GitHub — открытая наука ценится'],
      startUrls: ['https://www.scipy.org', 'https://www.bioconductor.org', 'https://www.fast.ai', 'https://github.com']
    },
    academic: {
      emoji: '🎓',
      name: 'Академический исследователь',
      desc: 'Генерируешь новое знание, публикуешься в топовых журналах и передаёшь опыт следующему поколению',
      detail: 'Ты учёный в классическом смысле. Формулируешь гипотезы, пишешь заявки на гранты, руководишь аспирантами и публикуешься в рецензируемых журналах. Твоя карьера измеряется импакт-фактором и индексом Хирша.',
      start: ['Изучи как писать научные статьи и проходить peer review', 'Освой LaTeX для академических публикаций', 'Разберись с грантовыми системами: NIH, ERC, РНФ — как писать заявки', 'Найди научного руководителя и начни аспирантуру в сильной группе'],
      startUrls: ['https://scholar.google.com', 'https://arxiv.org', 'https://www.overleaf.com', 'https://www.zotero.org']
    },
    industry_r: {
      emoji: '🏭',
      name: 'Исследователь в индустрии (R&D)',
      desc: 'Превращаешь научные открытия в реальные продукты — работаешь в R&D фарма, биотех или технологических компаний',
      detail: 'Ты мост между фундаментальной наукой и рынком. Работаешь в коммерческой лаборатории, ведёшь прикладные исследования, патентуешь открытия и разрабатываешь прототипы. Результат виден быстрее, чем в академии.',
      start: ['Изучи основы IP (intellectual property) и патентования', 'Пройди курс по управлению R&D проектами и стадиям TRL', 'Разберись с регуляторными требованиями твоей отрасли (FDA, EMA, ГОСТ)', 'Построй связи с индустрией через стажировки в pharma/biotech'],
      startUrls: ['https://www.epo.org/en/learning', 'https://www.coursera.org/learn/innovating-with-data', 'https://www.nature.com/naturecareers', 'https://www.linkedin.com/jobs/r-d-jobs/']
    }
  },
  ui: {
    tag: 'Исследователь',
    title: 'Какой учёный ты?',
    subtitle: '6 вопросов — найди свою нишу в науке',
    prog: 'Вопрос %d из 6',
    hint: 'Выбери один вариант',
    back: '← Назад',
    next: 'Далее →',
    finish: 'Показать результат',
    winBadge: 'Твоя ниша в науке',
    resTag: 'Результат',
    resSub: 'Твой путь в науке',
    lblStart: 'С чего начать:',
    l2back: '← Назад к результатам'
  }
};

// ─── EN ──────────────────────────────────────────────────────────────────────
L2.researcher.en = {
  questions: [
    { t: 'What attracts you most about scientific work?', o: ['Running experiments hands-on — working with reagents, cells, and instruments in the lab','Analysing data, building models, and finding patterns through code and computation','Generating new knowledge, publishing it, and passing it on to students','Turning scientific discoveries into real products and technologies'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: 'Which task suits you best?', o: ['Running a series of experiments, collecting raw data, and reproducing the result','Writing a Python/R script, processing a dataset, and visualising findings','Writing a grant proposal, publishing in Nature/Science, and defending a dissertation','Developing a prototype of a new compound or technology and filing a patent'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: 'Which tool matters most to you?', o: ['PCR, mass spectrometer, flow cytometry, microscope, experimental protocols','Python / R, Jupyter, NCBI/UniProt databases, cloud computing','PubMed, LaTeX, Zotero, systematic reviews, NIH/ERC grant systems','Lab automation, patent search, LIMS, idea-to-prototype pipeline'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: 'What is the most important outcome of your work?', o: ['A reproducible experiment that confirms or refutes a hypothesis','Code and a model that explain a phenomenon better than any previous approach','A publication in a Q1 peer-reviewed journal and an h-index growing year on year','A patent, licence, or spin-off company that brings a discovery to market'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: 'Who do you most enjoy working with?', o: ['The lab team: PhD students, postdocs, and technical staff','Bioinformaticians, data scientists, and computational engineers','Students, international colleagues, and journal reviewers','An R&D team, patent attorneys, product managers, and investors'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: 'What does success look like for you in 10 years?', o: ['A leading researcher with your own group and world-class equipment','A recognised computational scientist whose open-source code is used by thousands of researchers','A professor with a chair, lectures at top universities, and an h-index above 25','R&D Director at a biotech/pharma company or co-founder of a deep-tech startup'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] }
  ],
  roles: {
    lab_sci: { emoji:'🧪', name:'Laboratory Scientist', desc:'You run experiments, generate primary data, and test hypotheses under real conditions', detail:'You work with your hands and your mind simultaneously. You design protocols, run experiments, troubleshoot, and achieve reproducible results. Your data is the foundation for theories and clinical applications.', start:['Master core lab techniques for your field: PCR, Western blot, cell culture','Study Good Laboratory Practice (GLP) and lab notebook standards','Take online lab methods courses on Coursera or edX','Find a lab internship — hands-on practice beats theory'], startUrls:['https://www.coursera.org/learn/lab-techniques','https://www.ncbi.nlm.nih.gov/books/NBK21136/','https://www.addgene.org/protocols/','https://www.jove.com'] },
    comp_sci: { emoji:'💻', name:'Computational Scientist', desc:'You analyse large datasets, build models and simulations — science through code and algorithms', detail:'You sit at the intersection of biology, physics, or chemistry and programming. You write scripts for genomic data, climate time series, or astrophysical observations. Your models predict what is hard to test experimentally.', start:['Learn Python for science: NumPy, SciPy, pandas, matplotlib','Master R and Bioconductor if you work in biomedicine','Take machine learning for science courses (fast.ai, deeplearning.ai)','Publish code on GitHub — open science is valued'], startUrls:['https://www.scipy.org','https://www.bioconductor.org','https://www.fast.ai','https://github.com'] },
    academic: { emoji:'🎓', name:'Academic Researcher', desc:'You generate new knowledge, publish in top journals, and pass your expertise to the next generation', detail:'You are a scientist in the classic sense. You formulate hypotheses, write grant applications, supervise PhD students, and publish in peer-reviewed journals. Your career is measured by impact factor and h-index.', start:['Learn how to write scientific papers and navigate peer review','Master LaTeX for academic publications','Understand grant systems: NIH, ERC — how to write winning proposals','Find a supervisor and start a PhD in a strong research group'], startUrls:['https://scholar.google.com','https://arxiv.org','https://www.overleaf.com','https://www.zotero.org'] },
    industry_r: { emoji:'🏭', name:'Industry Researcher (R&D)', desc:'You turn scientific discoveries into real products — working in R&D at pharma, biotech, or technology companies', detail:'You are the bridge between fundamental science and the market. You work in a commercial lab, conduct applied research, file patents, and develop prototypes. Results come faster than in academia.', start:['Study IP basics (intellectual property) and patent filing','Take a course on R&D project management and TRL stages','Understand regulatory requirements for your industry (FDA, EMA)','Build industry connections through pharma/biotech internships'], startUrls:['https://www.epo.org/en/learning','https://www.coursera.org/learn/innovating-with-data','https://www.nature.com/naturecareers','https://www.linkedin.com/jobs/r-d-jobs/'] }
  },
  ui: { tag:'Researcher', title:'What kind of scientist are you?', subtitle:'6 questions to find your niche in science', prog:'Question %d of 6', hint:'Choose one option', back:'← Back', next:'Next →', finish:'Show result', winBadge:'Your niche in science', resTag:'Result', resSub:'Your path in science', lblStart:'Where to start:', l2back:'← Back to results' }
};

// ─── DE ──────────────────────────────────────────────────────────────────────
L2.researcher.de = {
  questions: [
    { t: 'Was zieht dich an der wissenschaftlichen Arbeit am meisten an?', o: ['Experimente selbst durchzuführen — mit Reagenzien, Zellen und Geräten im Labor zu arbeiten','Daten zu analysieren, Modelle zu bauen und durch Code Muster zu finden','Neues Wissen zu erzeugen, zu publizieren und es an Studierende weiterzugeben','Wissenschaftliche Entdeckungen in reale Produkte und Technologien zu verwandeln'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: 'Welche Aufgabe liegt dir am nächsten?', o: ['Eine Versuchsserie durchführen, Rohdaten erheben und das Ergebnis reproduzieren','Ein Python/R-Skript schreiben, einen Datensatz verarbeiten und Erkenntnisse visualisieren','Einen Förderantrag schreiben, in Nature/Science publizieren und eine Dissertation verteidigen','Einen Prototyp einer neuen Verbindung oder Technologie entwickeln und patentieren'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: 'Welches Werkzeug ist dir am wichtigsten?', o: ['PCR, Massenspektrometer, Durchflusszytometrie, Mikroskop, Versuchsprotokolle','Python / R, Jupyter, NCBI/UniProt-Datenbanken, Cloud-Computing','PubMed, LaTeX, Zotero, systematische Übersichten, NIH/ERC-Fördersysteme','Laborautomatisierung, Patentrecherche, LIMS, Pipeline von der Idee zum Prototyp'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: 'Was ist das wichtigste Ergebnis deiner Arbeit?', o: ['Ein reproduzierbares Experiment, das eine Hypothese bestätigt oder widerlegt','Code und ein Modell, die ein Phänomen besser erklären als alle bisherigen Ansätze','Eine Publikation in einem Q1-Fachjournal und ein h-Index, der Jahr für Jahr wächst','Ein Patent, eine Lizenz oder ein Spin-off-Unternehmen, das eine Entdeckung auf den Markt bringt'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: 'Mit wem arbeitest du am liebsten?', o: ['Mit dem Laborteam: Doktoranden, Postdocs und technischen Mitarbeitern','Mit Bioinformatikern, Datenwissenschaftlern und Computational Engineers','Mit Studierenden, internationalen Kolleginnen und Gutachtern von Fachzeitschriften','Mit dem F&E-Team, Patentanwälten, Produktmanagern und Investoren'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: 'Wie sieht dein Erfolg in 10 Jahren aus?', o: ['Führender Wissenschaftler mit eigener Gruppe und Geräten auf Weltniveau','Anerkannter Computational Scientist, dessen Open-Source-Code von Tausenden genutzt wird','Professor mit Lehrstuhl, Vorlesungen an Top-Universitäten und h-Index >25','F&E-Direktor bei Biotech/Pharma oder Mitgründer eines Deep-Tech-Startups'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] }
  ],
  roles: {
    lab_sci: { emoji:'🧪', name:'Laborwissenschaftler', desc:'Du führst Experimente durch, generierst Primärdaten und testest Hypothesen unter realen Bedingungen', detail:'Du arbeitest gleichzeitig mit Händen und Kopf. Du entwirfst Protokolle, führst Experimente durch, behebst Probleme und erzielst reproduzierbare Ergebnisse. Deine Daten sind die Grundlage für Theorien und klinische Anwendungen.', start:['Grundlegende Labortechniken deines Fachgebiets beherrschen: PCR, Western Blot, Zellkulturen','Good Laboratory Practice (GLP) und Laborjournalführung studieren','Online-Kurse zu Labormethoden auf Coursera oder edX absolvieren','Ein Laborpraktikum finden — praktische Erfahrung schlägt Theorie'], startUrls:['https://www.coursera.org/learn/lab-techniques','https://www.ncbi.nlm.nih.gov/books/NBK21136/','https://www.addgene.org/protocols/','https://www.jove.com'] },
    comp_sci: { emoji:'💻', name:'Computational Scientist', desc:'Du analysierst große Datensätze, baust Modelle und Simulationen — Wissenschaft durch Code und Algorithmen', detail:'Du stehst an der Schnittstelle von Biologie, Physik oder Chemie und Programmierung. Du schreibst Skripte für genomische Daten, Klimazeitreihen oder astrophysikalische Beobachtungen. Deine Modelle sagen vorher, was experimentell schwer zu testen ist.', start:['Python für die Wissenschaft lernen: NumPy, SciPy, pandas, matplotlib','R und Bioconductor beherrschen, wenn du in der Biomedizin arbeitest','Machine-Learning-Kurse für die Wissenschaft absolvieren (fast.ai, deeplearning.ai)','Code auf GitHub veröffentlichen — offene Wissenschaft wird geschätzt'], startUrls:['https://www.scipy.org','https://www.bioconductor.org','https://www.fast.ai','https://github.com'] },
    academic: { emoji:'🎓', name:'Akademischer Forscher', desc:'Du erzeugst neues Wissen, publizierst in Top-Journals und gibst deine Expertise an die nächste Generation weiter', detail:'Du bist Wissenschaftler im klassischen Sinne. Du formulierst Hypothesen, schreibst Förderanträge, betreust Doktoranden und veröffentlichst in Fachzeitschriften. Deine Karriere wird am Impaktfaktor und h-Index gemessen.', start:['Lernen, wie man wissenschaftliche Artikel schreibt und Peer Review navigiert','LaTeX für akademische Publikationen beherrschen','Fördersysteme verstehen: NIH, ERC — wie man erfolgreiche Anträge schreibt','Betreuer finden und in einer starken Forschungsgruppe promovieren'], startUrls:['https://scholar.google.com','https://arxiv.org','https://www.overleaf.com','https://www.zotero.org'] },
    industry_r: { emoji:'🏭', name:'Industrieforscher (F&E)', desc:'Du verwandelst wissenschaftliche Entdeckungen in reale Produkte — arbeitest in F&E bei Pharma, Biotech oder Technologieunternehmen', detail:'Du bist die Brücke zwischen Grundlagenforschung und Markt. Du arbeitest in einem kommerziellen Labor, führst angewandte Forschung durch, meldest Patente an und entwickelst Prototypen. Ergebnisse kommen schneller als in der Akademie.', start:['Grundlagen des geistigen Eigentums (IP) und der Patentanmeldung studieren','Kurs zu F&E-Projektmanagement und TRL-Stufen absolvieren','Regulatorische Anforderungen der eigenen Branche verstehen (FDA, EMA)','Branchenkontakte durch Praktika bei Pharma/Biotech aufbauen'], startUrls:['https://www.epo.org/en/learning','https://www.coursera.org/learn/innovating-with-data','https://www.nature.com/naturecareers','https://www.linkedin.com/jobs/r-d-jobs/'] }
  },
  ui: { tag:'Forscher', title:'Was für ein Wissenschaftler bist du?', subtitle:'6 Fragen, um deine Nische in der Wissenschaft zu finden', prog:'Frage %d von 6', hint:'Wähle eine Option', back:'← Zurück', next:'Weiter →', finish:'Ergebnis anzeigen', winBadge:'Deine Nische in der Wissenschaft', resTag:'Ergebnis', resSub:'Dein Weg in der Wissenschaft', lblStart:'Wo anfangen:', l2back:'← Zurück zu den Ergebnissen' }
};

// ─── FR ──────────────────────────────────────────────────────────────────────
L2.researcher.fr = {
  questions: [
    { t: "Qu'est-ce qui t'attire le plus dans le travail scientifique ?", o: ["Réaliser des expériences de ses propres mains — travailler avec des réactifs, des cellules et des instruments en laboratoire","Analyser des données, construire des modèles et trouver des tendances grâce au code","Générer de nouvelles connaissances, les publier et les transmettre aux étudiants","Transformer des découvertes scientifiques en produits et technologies réels"], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: 'Quelle tâche te correspond le mieux ?', o: ["Mener une série d'expériences, collecter des données brutes et reproduire le résultat","Écrire un script Python/R, traiter un jeu de données et visualiser les résultats","Rédiger une demande de financement, publier dans Nature/Science et soutenir une thèse","Développer le prototype d'un nouveau composé ou d'une technologie et le déposer en brevet"], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: "Quel outil est le plus important pour toi ?", o: ["PCR, spectromètre de masse, cytométrie en flux, microscope, protocoles expérimentaux","Python / R, Jupyter, bases de données NCBI/UniProt, cloud computing","PubMed, LaTeX, Zotero, revues systématiques, systèmes de financement NIH/ERC","Automatisation de laboratoire, recherche de brevets, LIMS, pipeline de l'idée au prototype"], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: "Quel est le résultat le plus important de ton travail ?", o: ["Une expérience reproductible qui confirme ou réfute une hypothèse","Du code et un modèle qui expliquent un phénomène mieux que toutes les approches précédentes","Une publication dans une revue Q1 à comité de lecture et un indice h qui croît d'année en année","Un brevet, une licence ou une spin-off qui amène une découverte sur le marché"], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: 'Avec qui aimes-tu le plus travailler ?', o: ["Avec l'équipe du labo : doctorants, post-doctorants et techniciens","Avec des bioinformaticiens, des data scientists et des ingénieurs en calcul","Avec des étudiants, des collègues internationaux et des relecteurs de revues","Avec l'équipe R&D, des conseils en brevets, des chefs de produit et des investisseurs"], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: 'À quoi ressemble ton succès dans 10 ans ?', o: ["Chercheur principal avec ton propre groupe et des équipements de niveau mondial","Chercheur computationnel reconnu dont le code open source est utilisé par des milliers de chercheurs","Professeur titulaire d'une chaire, avec des cours dans les meilleures universités et un indice h > 25","Directeur R&D dans une biotech/pharma ou co-fondateur d'une startup deep tech"], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] }
  ],
  roles: {
    lab_sci: { emoji:'🧪', name:'Scientifique de laboratoire', desc:"Tu réalises des expériences, génères des données primaires et testes des hypothèses dans des conditions réelles", detail:"Tu travailles avec tes mains et ta tête simultanément. Tu conçois des protocoles, réalises des expériences, résous des problèmes et obtiens des résultats reproductibles. Tes données constituent la base des théories et des applications cliniques.", start:["Maîtriser les techniques de laboratoire de base de ton domaine : PCR, Western blot, cultures cellulaires","Étudier les Bonnes Pratiques de Laboratoire (BPL) et la tenue du cahier de laboratoire","Suivre des cours en ligne sur les méthodes de laboratoire sur Coursera ou edX","Trouver un stage en laboratoire — la pratique prime sur la théorie"], startUrls:['https://www.coursera.org/learn/lab-techniques','https://www.ncbi.nlm.nih.gov/books/NBK21136/','https://www.addgene.org/protocols/','https://www.jove.com'] },
    comp_sci: { emoji:'💻', name:'Scientifique computationnel', desc:"Tu analyses de grands jeux de données, construis des modèles et des simulations — la science par le code et les algorithmes", detail:"Tu es à l'intersection de la biologie, de la physique ou de la chimie et de la programmation. Tu écris des scripts pour des données génomiques, des séries climatiques ou des observations astrophysiques. Tes modèles prédisent ce qui est difficile à tester expérimentalement.", start:["Apprendre Python pour la science : NumPy, SciPy, pandas, matplotlib","Maîtriser R et Bioconductor si tu travailles en biomédecine","Suivre des cours de machine learning pour la science (fast.ai, deeplearning.ai)","Publier du code sur GitHub — la science ouverte est valorisée"], startUrls:['https://www.scipy.org','https://www.bioconductor.org','https://www.fast.ai','https://github.com'] },
    academic: { emoji:'🎓', name:'Chercheur académique', desc:"Tu génères de nouvelles connaissances, publies dans les meilleures revues et transmets ton expertise à la prochaine génération", detail:"Tu es un scientifique au sens classique du terme. Tu formules des hypothèses, rédiges des demandes de financement, encadres des doctorants et publies dans des revues à comité de lecture. Ta carrière se mesure à l'indice h et au facteur d'impact.", start:["Apprendre à rédiger des articles scientifiques et à naviguer dans le processus de peer review","Maîtriser LaTeX pour les publications académiques","Comprendre les systèmes de financement : NIH, ERC — comment rédiger des demandes gagnantes","Trouver un directeur de thèse et commencer un doctorat dans un groupe de recherche solide"], startUrls:['https://scholar.google.com','https://arxiv.org','https://www.overleaf.com','https://www.zotero.org'] },
    industry_r: { emoji:'🏭', name:'Chercheur en industrie (R&D)', desc:"Tu transformes les découvertes scientifiques en produits réels — tu travailles en R&D dans une entreprise pharma, biotech ou technologique", detail:"Tu es le pont entre la science fondamentale et le marché. Tu travailles dans un laboratoire commercial, mènes des recherches appliquées, déposes des brevets et développes des prototypes. Les résultats arrivent plus vite qu'en milieu académique.", start:["Étudier les bases de la propriété intellectuelle (IP) et du dépôt de brevets","Suivre un cours sur la gestion de projets R&D et les niveaux TRL","Comprendre les exigences réglementaires de ton secteur (FDA, EMA)","Établir des contacts dans l'industrie par des stages en pharma/biotech"], startUrls:['https://www.epo.org/en/learning','https://www.coursera.org/learn/innovating-with-data','https://www.nature.com/naturecareers','https://www.linkedin.com/jobs/r-d-jobs/'] }
  },
  ui: { tag:'Chercheur', title:'Quel type de scientifique es-tu ?', subtitle:'6 questions pour trouver ta niche dans la science', prog:'Question %d sur 6', hint:'Choisis une option', back:'← Retour', next:'Suivant →', finish:'Voir mon résultat', winBadge:'Ta niche dans la science', resTag:'Résultat', resSub:'Ton chemin dans la science', lblStart:'Par où commencer :', l2back:'← Retour aux résultats' }
};

// ─── ES ──────────────────────────────────────────────────────────────────────
L2.researcher.es = {
  questions: [
    { t: '¿Qué es lo que más te atrae del trabajo científico?', o: ['Realizar experimentos con tus propias manos — trabajar con reactivos, células e instrumentos en el laboratorio','Analizar datos, construir modelos y encontrar patrones a través del código','Generar nuevo conocimiento, publicarlo y transmitirlo a los estudiantes','Convertir descubrimientos científicos en productos y tecnologías reales'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: '¿Qué tarea te resulta más natural?', o: ['Realizar una serie de experimentos, recopilar datos brutos y reproducir el resultado','Escribir un script en Python/R, procesar un conjunto de datos y visualizar los hallazgos','Redactar una solicitud de financiación, publicar en Nature/Science y defender una tesis doctoral','Desarrollar un prototipo de un nuevo compuesto o tecnología y patentarlo'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: '¿Qué herramienta es más importante para ti?', o: ['PCR, espectrómetro de masas, citometría de flujo, microscopio, protocolos experimentales','Python / R, Jupyter, bases de datos NCBI/UniProt, computación en la nube','PubMed, LaTeX, Zotero, revisiones sistemáticas, sistemas de becas NIH/ERC','Automatización de laboratorio, búsqueda de patentes, LIMS, pipeline de la idea al prototipo'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: '¿Cuál es el resultado más importante de tu trabajo?', o: ['Un experimento reproducible que confirma o refuta una hipótesis','Código y un modelo que explican un fenómeno mejor que cualquier enfoque previo','Una publicación en una revista Q1 revisada por pares y un índice h que crece año tras año','Una patente, licencia o empresa spin-off que lleva un descubrimiento al mercado'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: '¿Con quién disfrutas más trabajar?', o: ['Con el equipo del laboratorio: estudiantes de doctorado, postdocs y personal técnico','Con bioinformáticos, científicos de datos e ingenieros computacionales','Con estudiantes, colegas internacionales y revisores de revistas','Con el equipo de I+D, abogados de patentes, gestores de producto e inversores'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: '¿Cómo luce tu éxito en 10 años?', o: ['Investigador principal con tu propio grupo y equipos de nivel mundial','Científico computacional reconocido cuyo código abierto usan miles de investigadores','Profesor titular con cátedra, clases en las mejores universidades e índice h > 25','Director de I+D en biotech/farmacéutica o cofundador de una startup deep tech'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] }
  ],
  roles: {
    lab_sci: { emoji:'🧪', name:'Científico de laboratorio', desc:'Realizas experimentos, generas datos primarios y pruebas hipótesis en condiciones reales', detail:'Trabajas con manos y mente al mismo tiempo. Diseñas protocolos, realizas experimentos, resuelves problemas y logras resultados reproducibles. Tus datos son la base de teorías y aplicaciones clínicas.', start:['Dominar las técnicas de laboratorio básicas de tu campo: PCR, Western blot, cultivo celular','Estudiar Buenas Prácticas de Laboratorio (BPL) y mantenimiento del cuaderno de laboratorio','Tomar cursos de métodos de laboratorio en línea en Coursera o edX','Encontrar una pasantía de laboratorio — la práctica supera a la teoría'], startUrls:['https://www.coursera.org/learn/lab-techniques','https://www.ncbi.nlm.nih.gov/books/NBK21136/','https://www.addgene.org/protocols/','https://www.jove.com'] },
    comp_sci: { emoji:'💻', name:'Científico computacional', desc:'Analizas grandes conjuntos de datos, construyes modelos y simulaciones — ciencia a través del código y los algoritmos', detail:'Estás en la intersección de la biología, física o química con la programación. Escribes scripts para datos genómicos, series climáticas u observaciones astrofísicas. Tus modelos predicen lo que es difícil de probar experimentalmente.', start:['Aprender Python para ciencia: NumPy, SciPy, pandas, matplotlib','Dominar R y Bioconductor si trabajas en biomedicina','Tomar cursos de aprendizaje automático para ciencia (fast.ai, deeplearning.ai)','Publicar código en GitHub — la ciencia abierta es valorada'], startUrls:['https://www.scipy.org','https://www.bioconductor.org','https://www.fast.ai','https://github.com'] },
    academic: { emoji:'🎓', name:'Investigador académico', desc:'Generas nuevo conocimiento, publicas en las mejores revistas y transmites tu experiencia a la siguiente generación', detail:'Eres un científico en el sentido clásico. Formulas hipótesis, redactas solicitudes de financiación, supervises doctorandos y publicas en revistas revisadas por pares. Tu carrera se mide por el factor de impacto y el índice h.', start:['Aprender a escribir artículos científicos y navegar el proceso de revisión por pares','Dominar LaTeX para publicaciones académicas','Comprender los sistemas de financiación: NIH, ERC — cómo redactar solicitudes exitosas','Encontrar un director de tesis y comenzar un doctorado en un grupo de investigación sólido'], startUrls:['https://scholar.google.com','https://arxiv.org','https://www.overleaf.com','https://www.zotero.org'] },
    industry_r: { emoji:'🏭', name:'Investigador en industria (I+D)', desc:'Conviertes descubrimientos científicos en productos reales — trabajas en I+D en empresas farmacéuticas, biotecnológicas o tecnológicas', detail:'Eres el puente entre la ciencia fundamental y el mercado. Trabajas en un laboratorio comercial, realizas investigación aplicada, presentas patentes y desarrollas prototipos. Los resultados llegan más rápido que en la academia.', start:['Estudiar los fundamentos de la propiedad intelectual (PI) y el registro de patentes','Tomar un curso de gestión de proyectos de I+D y niveles TRL','Comprender los requisitos regulatorios de tu industria (FDA, EMA)','Construir conexiones con la industria a través de pasantías en pharma/biotech'], startUrls:['https://www.epo.org/en/learning','https://www.coursera.org/learn/innovating-with-data','https://www.nature.com/naturecareers','https://www.linkedin.com/jobs/r-d-jobs/'] }
  },
  ui: { tag:'Investigador', title:'¿Qué tipo de científico eres?', subtitle:'6 preguntas para encontrar tu nicho en la ciencia', prog:'Pregunta %d de 6', hint:'Elige una opción', back:'← Atrás', next:'Siguiente →', finish:'Ver mi resultado', winBadge:'Tu nicho en la ciencia', resTag:'Resultado', resSub:'Tu camino en la ciencia', lblStart:'Por dónde empezar:', l2back:'← Volver a los resultados' }
};

// ─── PT ──────────────────────────────────────────────────────────────────────
L2.researcher.pt = {
  questions: [
    { t: 'O que mais te atrai no trabalho científico?', o: ['Realizar experimentos com as próprias mãos — trabalhar com reagentes, células e instrumentos no laboratório','Analisar dados, construir modelos e encontrar padrões através de código','Gerar novo conhecimento, publicá-lo e transmiti-lo aos estudantes','Transformar descobertas científicas em produtos e tecnologias reais'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: 'Qual tarefa é mais natural para você?', o: ['Realizar uma série de experimentos, coletar dados brutos e reproduzir o resultado','Escrever um script em Python/R, processar um conjunto de dados e visualizar os achados','Redigir uma solicitação de financiamento, publicar na Nature/Science e defender uma tese','Desenvolver um protótipo de um novo composto ou tecnologia e patenteá-lo'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: 'Qual ferramenta é mais importante para você?', o: ['PCR, espectrômetro de massa, citometria de fluxo, microscópio, protocolos experimentais','Python / R, Jupyter, bases de dados NCBI/UniProt, computação em nuvem','PubMed, LaTeX, Zotero, revisões sistemáticas, sistemas de financiamento NIH/ERC','Automação de laboratório, busca de patentes, LIMS, pipeline da ideia ao protótipo'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: 'Qual é o resultado mais importante do seu trabalho?', o: ['Um experimento reproduzível que confirma ou refuta uma hipótese','Código e um modelo que explicam um fenômeno melhor do que qualquer abordagem anterior','Uma publicação em uma revista Q1 com revisão por pares e um índice h crescendo ano após ano','Uma patente, licença ou empresa spin-off que leva uma descoberta ao mercado'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: 'Com quem você mais gosta de trabalhar?', o: ['Com a equipe do laboratório: estudantes de doutorado, pós-doutorandos e pessoal técnico','Com bioinformatas, cientistas de dados e engenheiros computacionais','Com estudantes, colegas internacionais e revisores de revistas','Com a equipe de P&D, advogados de patentes, gerentes de produto e investidores'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: 'Como é o seu sucesso em 10 anos?', o: ['Pesquisador principal com seu próprio grupo e equipamentos de nível mundial','Cientista computacional reconhecido cujo código aberto é usado por milhares de pesquisadores','Professor titular com cátedra, aulas nas melhores universidades e índice h > 25','Diretor de P&D em biotech/farmacêutica ou cofundador de uma startup deep tech'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] }
  ],
  roles: {
    lab_sci: { emoji:'🧪', name:'Cientista de laboratório', desc:'Você realiza experimentos, gera dados primários e testa hipóteses em condições reais', detail:'Você trabalha com mãos e mente ao mesmo tempo. Projeta protocolos, realiza experimentos, resolve problemas e alcança resultados reproduzíveis. Seus dados são a base de teorias e aplicações clínicas.', start:['Dominar as técnicas básicas de laboratório do seu campo: PCR, Western blot, cultura celular','Estudar Boas Práticas de Laboratório (BPL) e manutenção do caderno de laboratório','Fazer cursos de métodos de laboratório online no Coursera ou edX','Encontrar um estágio em laboratório — a prática supera a teoria'], startUrls:['https://www.coursera.org/learn/lab-techniques','https://www.ncbi.nlm.nih.gov/books/NBK21136/','https://www.addgene.org/protocols/','https://www.jove.com'] },
    comp_sci: { emoji:'💻', name:'Cientista computacional', desc:'Você analisa grandes conjuntos de dados, constrói modelos e simulações — ciência através de código e algoritmos', detail:'Você está na interseção da biologia, física ou química com a programação. Escreve scripts para dados genômicos, séries climáticas ou observações astrofísicas. Seus modelos preveem o que é difícil de testar experimentalmente.', start:['Aprender Python para ciência: NumPy, SciPy, pandas, matplotlib','Dominar R e Bioconductor se trabalha em biomedicina','Fazer cursos de machine learning para ciência (fast.ai, deeplearning.ai)','Publicar código no GitHub — ciência aberta é valorizada'], startUrls:['https://www.scipy.org','https://www.bioconductor.org','https://www.fast.ai','https://github.com'] },
    academic: { emoji:'🎓', name:'Pesquisador acadêmico', desc:'Você gera novo conhecimento, publica nas melhores revistas e transmite sua experiência à próxima geração', detail:'Você é um cientista no sentido clássico. Formula hipóteses, redige solicitações de financiamento, orienta doutorandos e publica em revistas revisadas por pares. Sua carreira é medida pelo fator de impacto e pelo índice h.', start:['Aprender a escrever artigos científicos e navegar no processo de revisão por pares','Dominar LaTeX para publicações acadêmicas','Entender os sistemas de financiamento: NIH, ERC — como redigir propostas vencedoras','Encontrar um orientador e começar um doutorado em um grupo de pesquisa sólido'], startUrls:['https://scholar.google.com','https://arxiv.org','https://www.overleaf.com','https://www.zotero.org'] },
    industry_r: { emoji:'🏭', name:'Pesquisador na indústria (P&D)', desc:'Você transforma descobertas científicas em produtos reais — trabalhando em P&D em empresas farmacêuticas, de biotecnologia ou tecnologia', detail:'Você é a ponte entre a ciência fundamental e o mercado. Trabalha em um laboratório comercial, conduz pesquisa aplicada, registra patentes e desenvolve protótipos. Os resultados chegam mais rápido do que na academia.', start:['Estudar os fundamentos de propriedade intelectual (PI) e registro de patentes','Fazer um curso sobre gestão de projetos de P&D e níveis TRL','Entender os requisitos regulatórios do seu setor (FDA, ANVISA)','Construir conexões com a indústria por meio de estágios em pharma/biotech'], startUrls:['https://www.epo.org/en/learning','https://www.coursera.org/learn/innovating-with-data','https://www.nature.com/naturecareers','https://www.linkedin.com/jobs/r-d-jobs/'] }
  },
  ui: { tag:'Pesquisador', title:'Que tipo de cientista você é?', subtitle:'6 perguntas para encontrar seu nicho na ciência', prog:'Pergunta %d de 6', hint:'Escolha uma opção', back:'← Voltar', next:'Próximo →', finish:'Ver meu resultado', winBadge:'Seu nicho na ciência', resTag:'Resultado', resSub:'Seu caminho na ciência', lblStart:'Por onde começar:', l2back:'← Voltar aos resultados' }
};

// ─── AR ──────────────────────────────────────────────────────────────────────
L2.researcher.ar = {
  questions: [
    { t: 'ما الذي يجذبك أكثر في العمل العلمي؟', o: ['إجراء التجارب بنفسك — العمل بالكواشف والخلايا والأجهزة في المختبر','تحليل البيانات وبناء النماذج وإيجاد الأنماط عبر الكود والحوسبة','توليد معرفة جديدة ونشرها وتعليمها للطلاب','تحويل الاكتشافات العلمية إلى منتجات وتقنيات حقيقية'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: 'أي مهمة تبدو الأكثر ملاءمة لك؟', o: ['إجراء سلسلة من التجارب وجمع البيانات الخام واستنساخ النتيجة','كتابة سكريبت بـ Python/R ومعالجة مجموعة بيانات وتصوير النتائج','كتابة طلب منحة والنشر في Nature/Science والدفاع عن أطروحة دكتوراه','تطوير نموذج أولي لمركّب أو تقنية جديدة وتسجيل براءة اختراعها'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: 'أي أداة هي الأهم بالنسبة لك؟', o: ['PCR والمطياف الكتلي وعدّ الخلايا بالتدفق والمجهر وبروتوكولات التجارب','Python / R وJupyter وقواعد بيانات NCBI/UniProt والحوسبة السحابية','PubMed وLaTeX وZotero والمراجعات المنهجية وأنظمة المنح NIH/ERC','أتمتة المختبر والبحث عن البراءات وLIMS وخط سير من الفكرة إلى النموذج الأولي'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: 'ما أهم نتيجة لعملك؟', o: ['تجربة قابلة للاستنساخ تؤكد فرضية أو تدحضها','كود ونموذج يشرحان ظاهرة بشكل أفضل من أي نهج سابق','منشور في مجلة Q1 محكّمة ومؤشر h يتنامى عاماً بعد عام','براءة اختراع أو رخصة أو شركة spin-off تُدخل اكتشافاً إلى السوق'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: 'مع من تستمتع بالعمل أكثر؟', o: ['مع فريق المختبر: طلاب الدكتوراه والباحثون ما بعد الدكتوراه والفنيون','مع علماء المعلوماتية الحيوية وعلماء البيانات ومهندسي الحوسبة','مع الطلاب والزملاء الدوليين ومحكّمي المجلات العلمية','مع فريق البحث والتطوير ومحامي البراءات ومديري المنتجات والمستثمرين'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: 'كيف يبدو نجاحك بعد 10 سنوات؟', o: ['باحث رئيسي مع مجموعة بحثية خاصة وتجهيزات على مستوى عالمي','عالم حوسبة معترف به يستخدم كوده مفتوح المصدر آلاف الباحثين','أستاذ بكرسي جامعي ومحاضرات في أعرق الجامعات ومؤشر h أعلى من 25','مدير البحث والتطوير في شركة biotech/pharma أو مؤسس مشارك في شركة deep tech ناشئة'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] }
  ],
  roles: {
    lab_sci: { emoji:'🧪', name:'عالم مختبري', desc:'تُجري التجارب وتولّد البيانات الأولية وتختبر الفرضيات في ظروف حقيقية', detail:'تعمل بيديك وعقلك في آنٍ واحد. تصمّم البروتوكولات وتُجري التجارب وتحلّ المشكلات وتحقق نتائج قابلة للاستنساخ. بياناتك هي أساس النظريات والتطبيقات السريرية.', start:['إتقان تقنيات المختبر الأساسية في مجالك: PCR وWestern blot وزراعة الخلايا','دراسة الممارسات الجيدة للمختبر (GLP) ومعايير دفتر المختبر','الالتحاق بدورات إلكترونية لأساليب المختبر على Coursera أو edX','إيجاد تدريب في مختبر — التطبيق العملي أهم من النظرية'], startUrls:['https://www.coursera.org/learn/lab-techniques','https://www.ncbi.nlm.nih.gov/books/NBK21136/','https://www.addgene.org/protocols/','https://www.jove.com'] },
    comp_sci: { emoji:'💻', name:'عالم حوسبة', desc:'تُحلّل مجموعات بيانات ضخمة وتبني النماذج والمحاكاة — علم عبر الكود والخوارزميات', detail:'أنت عند تقاطع علم الأحياء أو الفيزياء أو الكيمياء مع البرمجة. تكتب سكريبتات لتحليل بيانات الجينوم أو السلاسل الزمنية المناخية أو الرصدات الفلكية. نماذجك تتنبأ بما يصعب اختباره تجريبياً.', start:['تعلّم Python للعلوم: NumPy وSciPy وpandas وmatplotlib','إتقان R وBioconductor إذا كنت تعمل في الطب الحيوي','الالتحاق بدورات التعلم الآلي للعلوم (fast.ai, deeplearning.ai)','نشر الكود على GitHub — العلم المفتوح مقدَّر ومُقيَّم'], startUrls:['https://www.scipy.org','https://www.bioconductor.org','https://www.fast.ai','https://github.com'] },
    academic: { emoji:'🎓', name:'باحث أكاديمي', desc:'تولّد معرفة جديدة وتنشر في أرقى المجلات وتنقل خبرتك إلى الجيل القادم', detail:'أنت عالم بالمعنى الكلاسيكي. تصوغ الفرضيات وتكتب طلبات المنح وتُشرف على طلاب الدكتوراه وتنشر في المجلات المحكّمة. مسيرتك تُقاس بمعامل التأثير ومؤشر h.', start:['تعلّم كيفية كتابة المقالات العلمية والتعامل مع التحكيم العلمي','إتقان LaTeX للمنشورات الأكاديمية','فهم أنظمة المنح: NIH وERC — كيفية كتابة طلبات ناجحة','إيجاد مشرف أكاديمي والالتحاق بمجموعة بحثية قوية للدكتوراه'], startUrls:['https://scholar.google.com','https://arxiv.org','https://www.overleaf.com','https://www.zotero.org'] },
    industry_r: { emoji:'🏭', name:'باحث في الصناعة (بحث وتطوير)', desc:'تُحوّل الاكتشافات العلمية إلى منتجات حقيقية — تعمل في البحث والتطوير في شركات الأدوية أو التقنية الحيوية أو التكنولوجيا', detail:'أنت الجسر بين العلم الأساسي والسوق. تعمل في مختبر تجاري وتُجري بحثاً تطبيقياً وتسجّل براءات الاختراع وتطوّر النماذج الأولية. النتائج تأتي أسرع مما هي عليه في الأكاديمية.', start:['دراسة أساسيات الملكية الفكرية (IP) وتسجيل براءات الاختراع','الالتحاق بدورة في إدارة مشاريع البحث والتطوير ومراحل TRL','فهم المتطلبات التنظيمية لصناعتك (FDA وEMA)','بناء صلات بالصناعة عبر التدريب في شركات الأدوية والتقنية الحيوية'], startUrls:['https://www.epo.org/en/learning','https://www.coursera.org/learn/innovating-with-data','https://www.nature.com/naturecareers','https://www.linkedin.com/jobs/r-d-jobs/'] }
  },
  ui: { tag:'باحث', title:'ما نوع العالم الذي أنت عليه؟', subtitle:'٦ أسئلة للعثور على مكانتك في العلوم', prog:'السؤال %d من ٦', hint:'اختر خياراً واحداً', back:'→ السابق', next:'التالي ←', finish:'اعرض نتيجتي', winBadge:'مكانتك في العلوم', resTag:'النتيجة', resSub:'مسارك في العلوم', lblStart:'من أين تبدأ:', l2back:'→ العودة إلى النتائج' }
};

// ─── HE ──────────────────────────────────────────────────────────────────────
L2.researcher.he = {
  questions: [
    { t: 'מה מושך אותך ביותר בעבודה המדעית?', o: ['לבצע ניסויים ביד — לעבוד עם ריאגנטים, תאים ומכשירים במעבדה','לנתח נתונים, לבנות מודלים ולמצוא דפוסים באמצעות קוד','לייצר ידע חדש, לפרסמו ולהעבירו לסטודנטים','להפוך גילויים מדעיים למוצרים וטכנולוגיות אמיתיים'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: 'איזו משימה מרגישה הכי טבעית עבורך?', o: ['לבצע סדרת ניסויים, לאסוף נתונים גולמיים ולשחזר את התוצאה','לכתוב סקריפט ב-Python/R, לעבד מערך נתונים ולהמחיש ממצאים','לכתוב בקשת מענק, לפרסם ב-Nature/Science ולהגן על דיסרטציה','לפתח אב-טיפוס של תרכובת או טכנולוגיה חדשה ולהגיש פטנט'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: 'איזה כלי הכי חשוב לך?', o: ['PCR, ספקטרומטר מסה, ציטומטריית זרימה, מיקרוסקופ, פרוטוקולי ניסויים','Python / R, Jupyter, מסדי נתונים NCBI/UniProt, מחשוב ענן','PubMed, LaTeX, Zotero, סקירות שיטתיות, מערכות מענקים NIH/ERC','אוטומציה של מעבדה, חיפוש פטנטים, LIMS, צינור מהרעיון לאב-טיפוס'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: 'מה התוצאה החשובה ביותר של עבודתך?', o: ['ניסוי ניתן לשחזור שמאשש או מפריך השערה','קוד ומודל שמסבירים תופעה טוב יותר מכל גישה קודמת','פרסום בכתב עת Q1 עם ביקורת עמיתים ומדד h שגדל משנה לשנה','פטנט, רישיון או חברת spin-off שמביאה גילוי לשוק'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: 'עם מי אתה הכי אוהב לעבוד?', o: ['עם צוות המעבדה: סטודנטים לדוקטורט, פוסט-דוקים וסגל טכני','עם ביואינפורמטיקאים, מדעני נתונים ומהנדסי מחשוב','עם סטודנטים, עמיתים בינלאומיים ושופטי כתבי עת','עם צוות המחקר והפיתוח, עורכי דין לפטנטים, מנהלי מוצר ומשקיעים'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] },
    { t: 'כיצד נראה ההצלחה שלך בעוד 10 שנים?', o: ['חוקר מוביל עם קבוצת מחקר משלך וציוד ברמה עולמית','מדען חישובי מוכר שהקוד הפתוח שלו משמש אלפי חוקרים','פרופסור עם כסא, הרצאות באוניברסיטאות מובילות ומדד h > 25','מנהל מחקר ופיתוח בחברת biotech/pharma או שותף-מייסד של סטארטאפ deep tech'], s: [{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}] }
  ],
  roles: {
    lab_sci: { emoji:'🧪', name:'מדען מעבדה', desc:'אתה מבצע ניסויים, מייצר נתונים ראשוניים ובוחן השערות בתנאים אמיתיים', detail:'אתה עובד עם הידיים והראש בו-זמנית. אתה מתכנן פרוטוקולים, מבצע ניסויים, פותר בעיות ומשיג תוצאות ניתנות לשחזור. הנתונים שלך הם הבסיס לתיאוריות וליישומים קליניים.', start:['לשלוט בטכניקות מעבדה בסיסיות בתחומך: PCR, Western blot, תרבית תאים','ללמוד נהלי מעבדה טובים (GLP) ותחזוקת יומן מעבדה','לקחת קורסי שיטות מעבדה מקוונים ב-Coursera או edX','למצוא סטאז\' במעבדה — תרגול מעשי עולה על תיאוריה'], startUrls:['https://www.coursera.org/learn/lab-techniques','https://www.ncbi.nlm.nih.gov/books/NBK21136/','https://www.addgene.org/protocols/','https://www.jove.com'] },
    comp_sci: { emoji:'💻', name:'מדען חישובי', desc:'אתה מנתח מאגרי נתונים גדולים, בונה מודלים וסימולציות — מדע דרך קוד ואלגוריתמים', detail:'אתה בצומת הביולוגיה, הפיזיקה או הכימיה עם התכנות. אתה כותב סקריפטים לניתוח נתוני גנומיקה, סדרות זמן אקלימיות או תצפיות אסטרופיזיקליות. המודלים שלך חוזים מה שקשה לבדוק ניסויית.', start:['ללמוד Python למדע: NumPy, SciPy, pandas, matplotlib','לשלוט ב-R וב-Bioconductor אם עובד בביומדיצינה','לקחת קורסי למידת מכונה למדע (fast.ai, deeplearning.ai)','לפרסם קוד ב-GitHub — מדע פתוח מוערך'], startUrls:['https://www.scipy.org','https://www.bioconductor.org','https://www.fast.ai','https://github.com'] },
    academic: { emoji:'🎓', name:'חוקר אקדמי', desc:'אתה מייצר ידע חדש, מפרסם בכתבי העת המובילים ומעביר את המומחיות שלך לדור הבא', detail:'אתה מדען במובן הקלאסי. אתה מנסח השערות, כותב בקשות מענקים, מנחה דוקטורנטים ומפרסם בכתבי עת עם ביקורת עמיתים. הקריירה שלך נמדדת במקדם ההשפעה ובמדד h.', start:['ללמוד כיצד לכתוב מאמרים מדעיים ולנווט בתהליך ביקורת עמיתים','לשלוט ב-LaTeX לפרסומים אקדמיים','להבין מערכות מענקים: NIH, ERC — כיצד לכתוב הצעות זוכות','למצוא מנחה ולהתחיל דוקטורט בקבוצת מחקר חזקה'], startUrls:['https://scholar.google.com','https://arxiv.org','https://www.overleaf.com','https://www.zotero.org'] },
    industry_r: { emoji:'🏭', name:'חוקר בתעשייה (מחקר ופיתוח)', desc:'אתה הופך גילויים מדעיים למוצרים אמיתיים — עובד במחקר ופיתוח בחברות תרופות, ביוטק או טכנולוגיה', detail:'אתה הגשר בין המדע הבסיסי לשוק. אתה עובד במעבדה מסחרית, עורך מחקר יישומי, מגיש פטנטים ומפתח אב-טיפוס. התוצאות מגיעות מהר יותר מאשר באקדמיה.', start:['ללמוד יסודות קניין רוחני (IP) והגשת פטנטים','לקחת קורס בניהול פרויקטי מחקר ופיתוח ורמות TRL','להבין דרישות רגולטוריות בתעשייתך (FDA, EMA)','לבנות קשרים בתעשייה דרך סטאז\' בחברות pharma/biotech'], startUrls:['https://www.epo.org/en/learning','https://www.coursera.org/learn/innovating-with-data','https://www.nature.com/naturecareers','https://www.linkedin.com/jobs/r-d-jobs/'] }
  },
  ui: { tag:'חוקר', title:'איזה סוג מדען אתה?', subtitle:'6 שאלות למציאת הנישה שלך במדע', prog:'שאלה %d מתוך 6', hint:'בחר אפשרות אחת', back:'→ חזרה', next:'הבא ←', finish:'לראות את התוצאה', winBadge:'הנישה שלך במדע', resTag:'תוצאה', resSub:'הדרך שלך במדע', lblStart:'מאיפה להתחיל:', l2back:'→ חזרה לתוצאות' }
};

L2.researcher.zh = {
  questions: [
    {t:'科学研究中什么最吸引你？', o:['实验室研究——在实验台上发现新规律','计算科学——用算法和模型理解复杂世界','学术研究——深耕理论，培养下一代科学家','产业研究——把科学发现转化为产品和解决方案'], s:[{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}]},
    {t:'你最想在哪个环境工作？', o:['大学或国家实验室的实验室','数据中心或高性能计算集群旁','大学讲台和研究室之间','企业研发部门或研究院'], s:[{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}]},
    {t:'什么成果最让你有成就感？', o:['在顶级期刊发表了一篇突破性论文','你的模型比过去最好的方案精度提升了10%','你指导的学生独立开展了高质量研究','你的技术成果被产品化，帮助了真实用户'], s:[{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}]},
    {t:'你更喜欢哪种工作？', o:['设计实验、动手操作、分析结果','写代码、调模型、处理大规模数据','构建理论框架、写论文、在会议上报告','解决具体的工程问题，推动成果落地'], s:[{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}]},
    {t:'你会选择哪个项目？', o:['研究某种新材料的电学性质','用深度学习解决蛋白质折叠问题','构建一个新的经济博弈理论模型','为企业开发一种新型传感器并完成中试'], s:[{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}]},
    {t:'10年后你在哪里？', o:['顶级大学的终身教授','科技公司的首席科学家','国家级实验室的学术带头人','成功创立一家深科技公司的科学家创业者'], s:[{lab_sci:3},{comp_sci:3},{academic:3},{industry_r:3}]}
  ],
  roles: {
    lab_sci: {emoji:'🔭', name:'实验室研究员', desc:'通过实验和观察发现自然界的新规律', detail:'你的实验台就是你探索世界的工具。你设计严格的实验，收集数据，分析结果，并将发现写成论文与世界分享。你的工作是科学进步的基石。', start:['掌握本领域的核心实验技术','学习科研数据分析——统计学和可视化','阅读本领域顶刊的最新论文——了解研究前沿','尽早进入导师课题组，参与真实的科研项目']},
    comp_sci: {emoji:'💻', name:'计算研究员', desc:'用计算方法解决科学中最困难的问题', detail:'你的实验室在计算机里。你构建数学模型，开发算法，用高性能计算模拟自然现象。你在物理、生物、金融等多个领域都受到欢迎。', start:['掌握Python和数学基础——线性代数、概率统计','学习机器学习——scikit-learn、PyTorch','了解高性能计算——MPI并行计算基础','在GitHub上关注相关领域的开源研究项目']},
    academic: {emoji:'📜', name:'学术科学家', desc:'在大学中构建知识体系，培养下一代研究者', detail:'你的使命是创造和传播知识。你领导研究团队，申请科研基金，发表论文，给本科生和研究生上课，并指导他们走上科研之路。', start:['争取顶尖实验室的博士或博后机会','构建国际化的学术合作网络','练习科学写作——清晰表达复杂想法','了解学术生涯路径——博后、助理教授、终身教授']},
    industry_r: {emoji:'🏭', name:'产业研究员', desc:'把前沿科学发现转化为可工程化的技术和产品', detail:'你站在科学和工程的交叉点。你在企业研发部门工作，既要推进科学边界，又要确保研究成果能在3-5年内变成真实的产品。', start:['了解从研究到产品的TRL技术成熟度模型','学习专利申请——保护你的科研成果','研究目标行业的产业链——理解技术的商业价值','争取在领先企业实验室的实习机会']}
  },
  ui: {l2back:'← 返回科研', title:'科学研究：选择你的专业方向'}
};
