'use strict';
/* ── L2: Врач / Медицинский работник ─────────────────────────────────────────
   4 roles: clinician 🩺 | surgeon ⚕️ | research_md 🔬 | digital_md 💻
   6 questions × 8 languages
──────────────────────────────────────────────────────────────────────────── */

// ─── RU ──────────────────────────────────────────────────────────────────────
L2.doctor.ru = {
  questions: [
    {
      t: 'Что тебя больше всего привлекает в медицине?',
      o: [
        'Напрямую лечить пациентов: ставить диагнозы, назначать терапию и видеть результат',
        'Работать руками — операции, процедуры, мгновенный видимый результат',
        'Разрабатывать новые методы лечения и публиковать открытия в научных журналах',
        'Применять технологии и данные чтобы сделать медицину умнее и доступнее'
      ],
      s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}]
    },
    {
      t: 'Какая задача тебе ближе всего?',
      o: [
        'Принять пациента, собрать анамнез, поставить дифференциальный диагноз и назначить лечение',
        'Провести сложную операцию, отработать технику до автоматизма',
        'Спланировать клиническое исследование и проанализировать результаты в R или Python',
        'Внедрить ИИ-инструмент в больнице или запустить телемедицинский сервис'
      ],
      s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}]
    },
    {
      t: 'Какой инструмент тебе важен больше всего?',
      o: [
        'ЭМК, UpToDate, клинические руководства — быстро находить верное решение у постели больного',
        'Операционный стол, эндоскоп, лапароскоп, симуляторы хирургических навыков',
        'PubMed, R/Python, протоколы РКИ, статистические методы анализа данных',
        'Платформы телемедицины, FHIR/HL7, ML-модели для диагностики, медицинские датасеты'
      ],
      s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}]
    },
    {
      t: 'Что для тебя главный результат работы?',
      o: [
        'Пациент выздоровел, ушёл домой здоровым — это и есть смысл',
        'Успешно выполненная операция, которая изменила жизнь человека',
        'Статья в журнале Q1 которая меняет стандарты лечения в мире',
        'Продукт или алгоритм, который помогает тысячам пациентов без моего личного участия'
      ],
      s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}]
    },
    {
      t: 'С кем тебе интереснее работать?',
      o: [
        'С пациентами и мультидисциплинарной командой: медсёстры, специалисты, фармацевты',
        'С операционной бригадой: анестезиолог, ассистенты, опытные хирурги-наставники',
        'С учёными, биостатистиками, международными исследовательскими консорциумами',
        'С разработчиками, дата-инженерами, инвесторами в медтех и управленцами здравоохранения'
      ],
      s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}]
    },
    {
      t: 'Как выглядит твой успех через 10 лет?',
      o: [
        'Заведующий отделением или ведущий специалист клиники с сильной репутацией среди пациентов',
        'Хирург высшей категории, обучающий следующее поколение и разрабатывающий новые техники',
        'Профессор с лабораторией, грантами и индексом Хирша выше 20',
        'СМО или сооснователь MedTech-стартапа, меняющего систему здравоохранения'
      ],
      s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}]
    }
  ],
  roles: {
    clinician: {
      emoji: '🩺',
      name: 'Врач-клиницист',
      desc: 'Диагностируешь, лечишь пациентов и координируешь их уход — это сердце медицины',
      detail: 'Ты на передовой. Принимаешь пациентов, ставишь диагнозы, назначаешь терапию и ведёшь хронических больных. Работаешь в команде с медсёстрами, узкими специалистами и фармацевтами. Каждый день — новые истории, новые вызовы.',
      start: ['Изучи клинические руководства своей специальности (UpToDate, PubMed)', 'Освой доказательную медицину: как читать и критически оценивать РКИ', 'Развивай коммуникативные навыки с пациентами — курсы по мотивационному интервьюированию', 'Пройди стажировку в стационаре с высокой нагрузкой'],
      startUrls: ['https://www.uptodate.com', 'https://pubmed.ncbi.nlm.nih.gov', 'https://www.cochrane.org', 'https://www.coursera.org/learn/health-communication']
    },
    surgeon: {
      emoji: '⚕️',
      name: 'Хирург',
      desc: 'Выполняешь операции и процедуры — сочетаешь точность, скорость и глубокие знания анатомии',
      detail: 'Ты работаешь руками. Месяцами и годами оттачиваешь технику, начиная с базовых разрезов и заканчивая сложнейшими лапароскопическими или робот-ассистированными операциями. Высокие ставки, высокое вознаграждение — физическое и моральное.',
      start: ['Тренируй мануальные навыки на симуляторах и в wet lab', 'Изучи хирургическую анатомию по атласам Неттера и видеоатласам ACS', 'Ассистируй на как можно большем числе операций — количество важно', 'Пройди базовые хирургические курсы ATLS, ACLS'],
      startUrls: ['https://www.facs.org/education/division-of-education/programs/', 'https://www.netterimages.com', 'https://www.atls.com', 'https://cpr.heart.org/en/courses/acls-course-options']
    },
    research_md: {
      emoji: '🔬',
      name: 'Врач-исследователь',
      desc: 'Проводишь клинические исследования, публикуешь открытия и создаёшь новые стандарты лечения',
      detail: 'Ты на стыке медицины и науки. Разрабатываешь протоколы клинических исследований, анализируешь данные, публикуешься в рецензируемых журналах. Твои открытия меняют то, как тысячи врачей лечат пациентов по всему миру.',
      start: ['Пройди курс по биостатистике и эпидемиологии (Coursera, edX)', 'Освой R или Python для анализа медицинских данных', 'Изучи структуру РКИ и требования GCP для клинических исследований', 'Найди ментора и присоединись к исследовательской группе'],
      startUrls: ['https://pubmed.ncbi.nlm.nih.gov', 'https://www.coursera.org/learn/biostatistics', 'https://www.consort-statement.org', 'https://ichgcp.net']
    },
    digital_md: {
      emoji: '💻',
      name: 'Врач цифрового здравоохранения',
      desc: 'Применяешь технологии, данные и ИИ чтобы трансформировать систему здравоохранения',
      detail: 'Ты врач и технолог одновременно. Внедряешь ЭМК, разрабатываешь телемедицинские сервисы, работаешь с ML-моделями для диагностики и прогнозирования. Твоя суперсила — понимать и медицину, и продукт.',
      start: ['Изучи основы программирования: Python для медицинских данных', 'Разберись со стандартами FHIR и HL7 — обмен медицинскими данными', 'Пройди курсы AI in Healthcare на Coursera (Stanford/deeplearning.ai)', 'Изучи телемедицинские платформы и регуляторику (FDA 510k, CE MDR)'],
      startUrls: ['https://www.coursera.org/specializations/ai-healthcare', 'https://hl7.org/fhir/', 'https://www.who.int/health-topics/digital-health', 'https://digital.ahrq.gov']
    }
  },
  ui: {
    tag: 'Врач',
    title: 'Какой врач ты?',
    subtitle: '6 вопросов — найди свою нишу в медицине',
    prog: 'Вопрос %d из 6',
    hint: 'Выбери один вариант',
    back: '← Назад',
    next: 'Далее →',
    finish: 'Показать результат',
    winBadge: 'Твоя ниша в медицине',
    resTag: 'Результат',
    resSub: 'Твой путь в медицине',
    lblStart: 'С чего начать:',
    l2back: '← Назад к результатам'
  }
};

// ─── EN ──────────────────────────────────────────────────────────────────────
L2.doctor.en = {
  questions: [
    { t: 'What attracts you most about medicine?', o: ['Treating patients directly — making diagnoses, prescribing therapy, and seeing results','Working with your hands — surgery, procedures, immediate visible outcomes','Developing new treatments and publishing discoveries in scientific journals','Applying technology and data to make medicine smarter and more accessible'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: 'Which task suits you best?', o: ['Seeing a patient, taking an anamnesis, making a differential diagnosis, and prescribing treatment','Performing complex surgery and refining technique to the point of automaticity','Designing a clinical trial and analysing the results in R or Python','Deploying an AI tool in a hospital or launching a telemedicine service'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: 'Which tool matters most to you?', o: ['EHR, UpToDate, clinical guidelines — finding the right answer fast at the bedside','Operating table, endoscope, laparoscope, surgical skills simulators','PubMed, R/Python, RCT protocols, statistical methods for data analysis','Telemedicine platforms, FHIR/HL7, ML diagnostic models, medical datasets'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: 'What is the most important outcome of your work?', o: ['The patient recovered and went home healthy — that is the whole point','A successful operation that changed someone\'s life','A Q1 journal article that changes global treatment standards','A product or algorithm that helps thousands of patients without my direct involvement'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: 'Who do you most enjoy working with?', o: ['Patients and a multidisciplinary team: nurses, specialists, pharmacists','The surgical team: anaesthesiologist, assistants, experienced mentor surgeons','Scientists, biostatisticians, international research consortia','Developers, data engineers, MedTech investors, and healthcare managers'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: 'What does success look like for you in 10 years?', o: ['Head of department or leading specialist with a strong patient reputation','Top-tier surgeon training the next generation and developing new techniques','Professor with a lab, grants, and an h-index above 20','CMO or co-founder of a MedTech startup reshaping healthcare'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] }
  ],
  roles: {
    clinician: { emoji:'🩺', name:'Clinician', desc:'You diagnose and treat patients and coordinate their care — the heart of medicine', detail:'You are on the front line. You see patients, make diagnoses, prescribe therapy, and manage chronic conditions. You work with nurses, specialists, and pharmacists. Every day brings new stories and new challenges.', start:['Study clinical guidelines for your specialty (UpToDate, PubMed)','Master evidence-based medicine: how to read and critically appraise RCTs','Develop patient communication skills — motivational interviewing courses','Complete a residency rotation in a high-volume hospital'], startUrls:['https://www.uptodate.com','https://pubmed.ncbi.nlm.nih.gov','https://www.cochrane.org','https://www.coursera.org/learn/health-communication'] },
    surgeon: { emoji:'⚕️', name:'Surgeon', desc:'You perform operations and procedures — combining precision, speed, and deep anatomical knowledge', detail:'You work with your hands. Over months and years you refine your technique, from basic incisions to complex laparoscopic or robot-assisted procedures. High stakes, high reward — physical and moral.', start:['Train manual skills on simulators and in a wet lab','Study surgical anatomy with Netter\'s atlases and ACS video atlases','Assist in as many operations as possible — volume matters','Complete basic surgical courses: ATLS, ACLS'], startUrls:['https://www.facs.org/education/division-of-education/programs/','https://www.netterimages.com','https://www.atls.com','https://cpr.heart.org/en/courses/acls-course-options'] },
    research_md: { emoji:'🔬', name:'Physician-Scientist', desc:'You run clinical trials, publish discoveries, and create new standards of care', detail:'You sit at the intersection of medicine and science. You design clinical trial protocols, analyse data, and publish in peer-reviewed journals. Your discoveries change how thousands of doctors treat patients worldwide.', start:['Take a biostatistics and epidemiology course (Coursera, edX)','Learn R or Python for medical data analysis','Study RCT design and GCP requirements for clinical research','Find a mentor and join a research group'], startUrls:['https://pubmed.ncbi.nlm.nih.gov','https://www.coursera.org/learn/biostatistics','https://www.consort-statement.org','https://ichgcp.net'] },
    digital_md: { emoji:'💻', name:'Digital Health Physician', desc:'You apply technology, data, and AI to transform the healthcare system', detail:'You are a doctor and a technologist at once. You implement EHR systems, build telemedicine services, and work with ML models for diagnosis and prediction. Your superpower is understanding both medicine and product.', start:['Learn Python basics for medical data','Study FHIR and HL7 standards for health data interoperability','Take AI in Healthcare courses on Coursera (Stanford/deeplearning.ai)','Explore telemedicine platforms and regulation (FDA 510k, CE MDR)'], startUrls:['https://www.coursera.org/specializations/ai-healthcare','https://hl7.org/fhir/','https://www.who.int/health-topics/digital-health','https://digital.ahrq.gov'] }
  },
  ui: { tag:'Doctor', title:'What kind of doctor are you?', subtitle:'6 questions to find your niche in medicine', prog:'Question %d of 6', hint:'Choose one option', back:'← Back', next:'Next →', finish:'Show result', winBadge:'Your niche in medicine', resTag:'Result', resSub:'Your path in medicine', lblStart:'Where to start:', l2back:'← Back to results' }
};

// ─── DE ──────────────────────────────────────────────────────────────────────
L2.doctor.de = {
  questions: [
    { t: 'Was zieht dich an der Medizin am meisten an?', o: ['Patienten direkt zu behandeln — Diagnosen stellen, Therapien verordnen und Ergebnisse sehen','Mit den Händen arbeiten — Operationen, Eingriffe, sofort sichtbare Ergebnisse','Neue Behandlungsmethoden entwickeln und Entdeckungen in wissenschaftlichen Zeitschriften veröffentlichen','Technologie und Daten einsetzen, um die Medizin intelligenter und zugänglicher zu machen'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: 'Welche Aufgabe liegt dir am nächsten?', o: ['Einen Patienten aufnehmen, Anamnese erheben, Differentialdiagnose stellen und Behandlung einleiten','Eine komplexe Operation durchführen und die Technik bis zur Automatisierung perfektionieren','Eine klinische Studie planen und die Ergebnisse in R oder Python auswerten','Ein KI-Tool im Krankenhaus einführen oder einen Telemedizin-Service aufbauen'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: 'Welches Werkzeug ist dir am wichtigsten?', o: ['KPA, UpToDate, klinische Leitlinien — am Patientenbett schnell die richtige Antwort finden','Operationstisch, Endoskop, Laparoskop, chirurgische Simulatoren','PubMed, R/Python, RCT-Protokolle, statistische Analysemethoden','Telemedizin-Plattformen, FHIR/HL7, ML-Diagnosemodelle, medizinische Datensätze'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: 'Was ist das wichtigste Ergebnis deiner Arbeit?', o: ['Der Patient ist gesund und geht nach Hause — das ist der Sinn der Sache','Eine erfolgreiche Operation, die das Leben eines Menschen verändert hat','Ein Q1-Artikel, der weltweite Behandlungsstandards verändert','Ein Produkt oder Algorithmus, der Tausenden von Patienten ohne mein direktes Zutun hilft'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: 'Mit wem arbeitest du am liebsten?', o: ['Mit Patienten und einem multidisziplinären Team: Pflegekräfte, Spezialisten, Apotheker','Mit dem OP-Team: Anästhesist, Assistenten, erfahrene Mentor-Chirurgen','Mit Wissenschaftlern, Biostatistikern, internationalen Forschungskonsortien','Mit Entwicklern, Dateningenieuren, MedTech-Investoren und Gesundheitsmanagern'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: 'Wie sieht dein Erfolg in 10 Jahren aus?', o: ['Abteilungsleiter oder führender Facharzt mit starkem Patientenruf','Chirurg höchster Kategorie, der die nächste Generation ausbildet und neue Techniken entwickelt','Professor mit Labor, Forschungsgeldern und h-Index über 20','CMO oder Mitgründer eines MedTech-Startups, das das Gesundheitswesen verändert'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] }
  ],
  roles: {
    clinician: { emoji:'🩺', name:'Klinischer Arzt', desc:'Du diagnostizierst und behandelst Patienten und koordinierst ihre Versorgung — das Herzstück der Medizin', detail:'Du bist an der Front. Du siehst Patienten, stellst Diagnosen, verordnest Therapien und betreust chronisch Kranke. Du arbeitest mit Pflegepersonal, Fachärzten und Apothekern zusammen. Jeden Tag neue Geschichten, neue Herausforderungen.', start:['Klinische Leitlinien deiner Fachrichtung studieren (UpToDate, PubMed)','Evidenzbasierte Medizin meistern: RCTs lesen und kritisch bewerten','Kommunikationsfähigkeiten mit Patienten entwickeln — Kurse zur motivierenden Gesprächsführung','Famulaturen und PJ in einem Krankenhaus mit hoher Patientenzahl absolvieren'], startUrls:['https://www.uptodate.com','https://pubmed.ncbi.nlm.nih.gov','https://www.cochrane.org','https://www.coursera.org/learn/health-communication'] },
    surgeon: { emoji:'⚕️', name:'Chirurg', desc:'Du führst Operationen und Eingriffe durch — verbindest Präzision, Geschwindigkeit und tiefes anatomisches Wissen', detail:'Du arbeitest mit den Händen. Monatelang und jahrelang perfektionierst du deine Technik, von einfachen Schnitten bis hin zu komplexen laparoskopischen oder roboterassistierten Operationen. Hoher Einsatz, hohe Belohnung — körperlich und moralisch.', start:['Manuelle Fähigkeiten an Simulatoren und im Wet Lab trainieren','Chirurgische Anatomie mit Netter-Atlanten und ACS-Videoatlanten studieren','So viele Operationen wie möglich assistieren — Quantität zählt','Grundlegende chirurgische Kurse absolvieren: ATLS, ACLS'], startUrls:['https://www.facs.org/education/division-of-education/programs/','https://www.netterimages.com','https://www.atls.com','https://cpr.heart.org/en/courses/acls-course-options'] },
    research_md: { emoji:'🔬', name:'Arzt-Wissenschaftler', desc:'Du führst klinische Studien durch, veröffentlichst Entdeckungen und schaffst neue Behandlungsstandards', detail:'Du stehst an der Schnittstelle von Medizin und Wissenschaft. Du entwickelst klinische Studienprotokolle, analysierst Daten und veröffentlichst in Fachzeitschriften. Deine Entdeckungen verändern, wie Tausende von Ärzten weltweit Patienten behandeln.', start:['Kurs in Biostatistik und Epidemiologie belegen (Coursera, edX)','R oder Python für medizinische Datenanalyse erlernen','RCT-Design und GCP-Anforderungen für klinische Forschung studieren','Einen Mentor finden und einer Forschungsgruppe beitreten'], startUrls:['https://pubmed.ncbi.nlm.nih.gov','https://www.coursera.org/learn/biostatistics','https://www.consort-statement.org','https://ichgcp.net'] },
    digital_md: { emoji:'💻', name:'Arzt für digitale Gesundheit', desc:'Du wendest Technologie, Daten und KI an, um das Gesundheitssystem zu transformieren', detail:'Du bist Arzt und Technologe zugleich. Du implementierst elektronische Patientenakten, entwickelst Telemedizin-Services und arbeitest mit ML-Modellen für Diagnose und Prognose. Deine Stärke: Medizin und Produkt gleichermaßen verstehen.', start:['Python-Grundlagen für medizinische Daten erlernen','FHIR- und HL7-Standards für den Gesundheitsdatenaustausch studieren','KI im Gesundheitswesen auf Coursera belegen (Stanford/deeplearning.ai)','Telemedizin-Plattformen und Regulatorik erkunden (FDA 510k, CE MDR)'], startUrls:['https://www.coursera.org/specializations/ai-healthcare','https://hl7.org/fhir/','https://www.who.int/health-topics/digital-health','https://digital.ahrq.gov'] }
  },
  ui: { tag:'Arzt', title:'Was für ein Arzt bist du?', subtitle:'6 Fragen, um deine Nische in der Medizin zu finden', prog:'Frage %d von 6', hint:'Wähle eine Option', back:'← Zurück', next:'Weiter →', finish:'Ergebnis anzeigen', winBadge:'Deine Nische in der Medizin', resTag:'Ergebnis', resSub:'Dein Weg in der Medizin', lblStart:'Wo anfangen:', l2back:'← Zurück zu den Ergebnissen' }
};

// ─── FR ──────────────────────────────────────────────────────────────────────
L2.doctor.fr = {
  questions: [
    { t: "Qu'est-ce qui t'attire le plus dans la médecine ?", o: ["Traiter directement les patients — poser des diagnostics, prescrire des thérapies et voir les résultats","Travailler avec ses mains — chirurgie, procédures, résultats immédiatement visibles","Développer de nouveaux traitements et publier des découvertes dans des revues scientifiques","Appliquer la technologie et les données pour rendre la médecine plus intelligente et plus accessible"], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: 'Quelle tâche te correspond le mieux ?', o: ["Recevoir un patient, recueillir l'anamnèse, poser un diagnostic différentiel et prescrire un traitement","Réaliser une opération complexe et affiner la technique jusqu'à l'automatisme","Concevoir un essai clinique et analyser les résultats en R ou Python","Déployer un outil d'IA dans un hôpital ou lancer un service de télémédecine"], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: "Quel outil est le plus important pour toi ?", o: ["Dossier médical électronique, UpToDate, recommandations cliniques — trouver rapidement la bonne réponse au chevet du patient","Table d'opération, endoscope, laparoscope, simulateurs de compétences chirurgicales","PubMed, R/Python, protocoles d'ECR, méthodes statistiques d'analyse de données","Plateformes de télémédecine, FHIR/HL7, modèles ML de diagnostic, jeux de données médicales"], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: "Quel est le résultat le plus important de ton travail ?", o: ["Le patient a guéri et est rentré chez lui en bonne santé — c'est tout le sens","Une opération réussie qui a changé la vie d'une personne","Un article Q1 qui change les standards de traitement mondiaux","Un produit ou algorithme qui aide des milliers de patients sans mon implication directe"], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: 'Avec qui aimes-tu le plus travailler ?', o: ["Avec des patients et une équipe multidisciplinaire : infirmières, spécialistes, pharmaciens","Avec l'équipe chirurgicale : anesthésiste, assistants, chirurgiens mentors expérimentés","Avec des scientifiques, des biostatisticiens, des consortiums de recherche internationaux","Avec des développeurs, des ingénieurs de données, des investisseurs MedTech et des gestionnaires de santé"], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: 'À quoi ressemble ton succès dans 10 ans ?', o: ["Chef de service ou spécialiste de premier plan avec une solide réputation auprès des patients","Chirurgien de la plus haute catégorie, formant la prochaine génération et développant de nouvelles techniques","Professeur avec un laboratoire, des financements et un indice h supérieur à 20","Directeur médical ou cofondateur d'une startup MedTech qui transforme le système de santé"], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] }
  ],
  roles: {
    clinician: { emoji:'🩺', name:'Médecin clinicien', desc:"Tu diagnostiques et traites les patients et coordonnes leur prise en charge — le cœur de la médecine", detail:"Tu es en première ligne. Tu reçois des patients, poses des diagnostics, prescris des thérapies et suis des malades chroniques. Tu travailles avec des infirmières, des spécialistes et des pharmaciens. Chaque jour apporte de nouvelles histoires, de nouveaux défis.", start:["Étudier les recommandations cliniques de ta spécialité (UpToDate, PubMed)","Maîtriser la médecine factuelle : lire et évaluer de manière critique les ECR","Développer les compétences en communication avec les patients — cours d'entretien motivationnel","Effectuer des stages dans un hôpital à fort volume de patients"], startUrls:['https://www.uptodate.com','https://pubmed.ncbi.nlm.nih.gov','https://www.cochrane.org','https://www.coursera.org/learn/health-communication'] },
    surgeon: { emoji:'⚕️', name:'Chirurgien', desc:"Tu effectues des opérations et des procédures — en combinant précision, rapidité et connaissance anatomique approfondie", detail:"Tu travailles avec tes mains. Tu affines ta technique pendant des mois et des années, des incisions de base aux procédures laparoscopiques ou assistées par robot les plus complexes. Enjeux élevés, récompenses élevées — physiques et morales.", start:["Entraîner les compétences manuelles sur simulateurs et en wet lab","Étudier l'anatomie chirurgicale avec les atlas de Netter et les vidéo-atlas de l'ACS","Assister à autant d'opérations que possible — le volume compte","Suivre les cours chirurgicaux de base : ATLS, ACLS"], startUrls:['https://www.facs.org/education/division-of-education/programs/','https://www.netterimages.com','https://www.atls.com','https://cpr.heart.org/en/courses/acls-course-options'] },
    research_md: { emoji:'🔬', name:'Médecin-chercheur', desc:"Tu mènes des essais cliniques, publies des découvertes et crées de nouveaux standards de soins", detail:"Tu es à l'intersection de la médecine et de la science. Tu conçois des protocoles d'essais cliniques, analyses des données et publies dans des revues à comité de lecture. Tes découvertes changent la façon dont des milliers de médecins traitent leurs patients dans le monde.", start:["Suivre un cours de biostatistique et d'épidémiologie (Coursera, edX)","Apprendre R ou Python pour l'analyse de données médicales","Étudier la conception des ECR et les exigences BPC pour la recherche clinique","Trouver un mentor et rejoindre un groupe de recherche"], startUrls:['https://pubmed.ncbi.nlm.nih.gov','https://www.coursera.org/learn/biostatistics','https://www.consort-statement.org','https://ichgcp.net'] },
    digital_md: { emoji:'💻', name:'Médecin en santé numérique', desc:"Tu appliques la technologie, les données et l'IA pour transformer le système de santé", detail:"Tu es médecin et technologue à la fois. Tu implémentes des dossiers médicaux électroniques, développes des services de télémédecine et travailles avec des modèles ML pour le diagnostic et la prédiction. Ton superpouvoir : comprendre à la fois la médecine et le produit.", start:["Apprendre les bases de Python pour les données médicales","Étudier les standards FHIR et HL7 pour l'interopérabilité des données de santé","Suivre des cours d'IA en santé sur Coursera (Stanford/deeplearning.ai)","Explorer les plateformes de télémédecine et la réglementation (FDA 510k, CE MDR)"], startUrls:['https://www.coursera.org/specializations/ai-healthcare','https://hl7.org/fhir/','https://www.who.int/health-topics/digital-health','https://digital.ahrq.gov'] }
  },
  ui: { tag:'Médecin', title:'Quel type de médecin es-tu ?', subtitle:'6 questions pour trouver ta niche en médecine', prog:'Question %d sur 6', hint:'Choisis une option', back:'← Retour', next:'Suivant →', finish:'Voir mon résultat', winBadge:'Ta niche en médecine', resTag:'Résultat', resSub:'Ton chemin en médecine', lblStart:'Par où commencer :', l2back:'← Retour aux résultats' }
};

// ─── ES ──────────────────────────────────────────────────────────────────────
L2.doctor.es = {
  questions: [
    { t: '¿Qué es lo que más te atrae de la medicina?', o: ['Tratar directamente a los pacientes — hacer diagnósticos, prescribir terapias y ver resultados','Trabajar con las manos — cirugía, procedimientos, resultados inmediatos y visibles','Desarrollar nuevos tratamientos y publicar descubrimientos en revistas científicas','Aplicar tecnología y datos para hacer la medicina más inteligente y accesible'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: '¿Qué tarea te resulta más natural?', o: ['Recibir a un paciente, tomar la anamnesis, hacer un diagnóstico diferencial y prescribir tratamiento','Realizar una operación compleja y perfeccionar la técnica hasta la automatización','Diseñar un ensayo clínico y analizar los resultados en R o Python','Implementar una herramienta de IA en un hospital o lanzar un servicio de telemedicina'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: '¿Qué herramienta es más importante para ti?', o: ['Historia clínica electrónica, UpToDate, guías clínicas — encontrar rápidamente la respuesta correcta junto al paciente','Mesa de operaciones, endoscopio, laparoscopio, simuladores de habilidades quirúrgicas','PubMed, R/Python, protocolos de ECA, métodos estadísticos de análisis de datos','Plataformas de telemedicina, FHIR/HL7, modelos ML de diagnóstico, conjuntos de datos médicos'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: '¿Cuál es el resultado más importante de tu trabajo?', o: ['El paciente se recuperó y se fue a casa sano — eso es todo el propósito','Una operación exitosa que cambió la vida de alguien','Un artículo Q1 que cambia los estándares de tratamiento mundiales','Un producto o algoritmo que ayuda a miles de pacientes sin mi participación directa'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: '¿Con quién disfrutas más trabajar?', o: ['Con pacientes y un equipo multidisciplinar: enfermeras, especialistas, farmacéuticos','Con el equipo quirúrgico: anestesiólogo, asistentes, cirujanos mentores experimentados','Con científicos, bioestadísticos, consorcios de investigación internacionales','Con desarrolladores, ingenieros de datos, inversores de MedTech y gestores de salud'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: '¿Cómo luce tu éxito en 10 años?', o: ['Jefe de servicio o especialista de referencia con sólida reputación entre los pacientes','Cirujano de la máxima categoría que forma a la próxima generación y desarrolla nuevas técnicas','Profesor con laboratorio, financiación y un índice h superior a 20','Director médico o cofundador de una startup MedTech que transforma el sistema de salud'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] }
  ],
  roles: {
    clinician: { emoji:'🩺', name:'Médico clínico', desc:'Diagnosticas y tratas a los pacientes y coordinas su atención — el corazón de la medicina', detail:'Estás en primera línea. Recibes pacientes, haces diagnósticos, prescribes terapias y gestionas enfermos crónicos. Trabajas con enfermeras, especialistas y farmacéuticos. Cada día trae nuevas historias y nuevos desafíos.', start:['Estudiar las guías clínicas de tu especialidad (UpToDate, PubMed)','Dominar la medicina basada en evidencia: leer y evaluar críticamente ECA','Desarrollar habilidades de comunicación con pacientes — cursos de entrevista motivacional','Completar rotaciones en hospitales de alto volumen'], startUrls:['https://www.uptodate.com','https://pubmed.ncbi.nlm.nih.gov','https://www.cochrane.org','https://www.coursera.org/learn/health-communication'] },
    surgeon: { emoji:'⚕️', name:'Cirujano', desc:'Realizas operaciones y procedimientos — combinando precisión, velocidad y profundo conocimiento anatómico', detail:'Trabajas con tus manos. Durante meses y años perfeccionas tu técnica, desde incisiones básicas hasta procedimientos laparoscópicos o asistidos por robot de alta complejidad. Altas apuestas, alta recompensa — física y moral.', start:['Entrenar habilidades manuales en simuladores y wet lab','Estudiar anatomía quirúrgica con los atlas de Netter y videoatlas del ACS','Asistir en el mayor número posible de operaciones — el volumen importa','Completar cursos quirúrgicos básicos: ATLS, ACLS'], startUrls:['https://www.facs.org/education/division-of-education/programs/','https://www.netterimages.com','https://www.atls.com','https://cpr.heart.org/en/courses/acls-course-options'] },
    research_md: { emoji:'🔬', name:'Médico investigador', desc:'Realizas ensayos clínicos, publicas descubrimientos y creas nuevos estándares de atención', detail:'Estás en la intersección de la medicina y la ciencia. Diseñas protocolos de ensayos clínicos, analizas datos y publicas en revistas con revisión por pares. Tus descubrimientos cambian cómo miles de médicos tratan a sus pacientes en todo el mundo.', start:['Tomar un curso de bioestadística y epidemiología (Coursera, edX)','Aprender R o Python para análisis de datos médicos','Estudiar el diseño de ECA y los requisitos de BPC para investigación clínica','Encontrar un mentor y unirse a un grupo de investigación'], startUrls:['https://pubmed.ncbi.nlm.nih.gov','https://www.coursera.org/learn/biostatistics','https://www.consort-statement.org','https://ichgcp.net'] },
    digital_md: { emoji:'💻', name:'Médico en salud digital', desc:'Aplicas tecnología, datos e IA para transformar el sistema de salud', detail:'Eres médico y tecnólogo a la vez. Implementas historias clínicas electrónicas, desarrollas servicios de telemedicina y trabajas con modelos ML para diagnóstico y predicción. Tu superpoder: entender tanto la medicina como el producto.', start:['Aprender Python básico para datos médicos','Estudiar los estándares FHIR y HL7 para la interoperabilidad de datos de salud','Tomar cursos de IA en salud en Coursera (Stanford/deeplearning.ai)','Explorar plataformas de telemedicina y regulación (FDA 510k, CE MDR)'], startUrls:['https://www.coursera.org/specializations/ai-healthcare','https://hl7.org/fhir/','https://www.who.int/health-topics/digital-health','https://digital.ahrq.gov'] }
  },
  ui: { tag:'Médico', title:'¿Qué tipo de médico eres?', subtitle:'6 preguntas para encontrar tu nicho en medicina', prog:'Pregunta %d de 6', hint:'Elige una opción', back:'← Atrás', next:'Siguiente →', finish:'Ver mi resultado', winBadge:'Tu nicho en medicina', resTag:'Resultado', resSub:'Tu camino en medicina', lblStart:'Por dónde empezar:', l2back:'← Volver a los resultados' }
};

// ─── PT ──────────────────────────────────────────────────────────────────────
L2.doctor.pt = {
  questions: [
    { t: 'O que mais te atrai na medicina?', o: ['Tratar pacientes diretamente — fazer diagnósticos, prescrever terapias e ver resultados','Trabalhar com as mãos — cirurgia, procedimentos, resultados imediatos e visíveis','Desenvolver novos tratamentos e publicar descobertas em revistas científicas','Aplicar tecnologia e dados para tornar a medicina mais inteligente e acessível'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: 'Qual tarefa é mais natural para você?', o: ['Atender um paciente, coletar a anamnese, fazer diagnóstico diferencial e prescrever tratamento','Realizar uma cirurgia complexa e aperfeiçoar a técnica até a automatização','Planejar um ensaio clínico e analisar os resultados em R ou Python','Implementar uma ferramenta de IA em um hospital ou lançar um serviço de telemedicina'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: 'Qual ferramenta é mais importante para você?', o: ['Prontuário eletrônico, UpToDate, diretrizes clínicas — encontrar rapidamente a resposta certa à beira do leito','Mesa cirúrgica, endoscópio, laparoscópio, simuladores de habilidades cirúrgicas','PubMed, R/Python, protocolos de ECR, métodos estatísticos de análise de dados','Plataformas de telemedicina, FHIR/HL7, modelos ML de diagnóstico, conjuntos de dados médicos'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: 'Qual é o resultado mais importante do seu trabalho?', o: ['O paciente se recuperou e foi para casa saudável — esse é o propósito','Uma cirurgia bem-sucedida que mudou a vida de alguém','Um artigo Q1 que muda os padrões de tratamento mundiais','Um produto ou algoritmo que ajuda milhares de pacientes sem minha participação direta'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: 'Com quem você mais gosta de trabalhar?', o: ['Com pacientes e uma equipe multidisciplinar: enfermeiros, especialistas, farmacêuticos','Com a equipe cirúrgica: anestesista, assistentes, cirurgiões mentores experientes','Com cientistas, bioestatísticos, consórcios de pesquisa internacionais','Com desenvolvedores, engenheiros de dados, investidores de MedTech e gestores de saúde'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: 'Como é o seu sucesso em 10 anos?', o: ['Chefe de serviço ou especialista de referência com sólida reputação entre os pacientes','Cirurgião da mais alta categoria, formando a próxima geração e desenvolvendo novas técnicas','Professor com laboratório, financiamento e índice h acima de 20','Diretor médico ou cofundador de uma startup MedTech que transforma o sistema de saúde'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] }
  ],
  roles: {
    clinician: { emoji:'🩺', name:'Médico clínico', desc:'Você diagnostica e trata pacientes e coordena seu cuidado — o coração da medicina', detail:'Você está na linha de frente. Atende pacientes, faz diagnósticos, prescreve terapias e acompanha pacientes crônicos. Trabalha com enfermeiros, especialistas e farmacêuticos. Cada dia traz novas histórias e novos desafios.', start:['Estudar as diretrizes clínicas da sua especialidade (UpToDate, PubMed)','Dominar a medicina baseada em evidências: ler e avaliar criticamente ECRs','Desenvolver habilidades de comunicação com pacientes — cursos de entrevista motivacional','Completar estágios em hospitais de alto volume'], startUrls:['https://www.uptodate.com','https://pubmed.ncbi.nlm.nih.gov','https://www.cochrane.org','https://www.coursera.org/learn/health-communication'] },
    surgeon: { emoji:'⚕️', name:'Cirurgião', desc:'Você realiza operações e procedimentos — combinando precisão, velocidade e profundo conhecimento anatômico', detail:'Você trabalha com as mãos. Durante meses e anos aperfeiçoa sua técnica, de incisões básicas a procedimentos laparoscópicos ou assistidos por robô altamente complexos. Altas apostas, alta recompensa — física e moral.', start:['Treinar habilidades manuais em simuladores e wet lab','Estudar anatomia cirúrgica com os atlas de Netter e videoatlas do ACS','Assistir ao maior número possível de cirurgias — o volume importa','Completar cursos cirúrgicos básicos: ATLS, ACLS'], startUrls:['https://www.facs.org/education/division-of-education/programs/','https://www.netterimages.com','https://www.atls.com','https://cpr.heart.org/en/courses/acls-course-options'] },
    research_md: { emoji:'🔬', name:'Médico pesquisador', desc:'Você conduz ensaios clínicos, publica descobertas e cria novos padrões de cuidado', detail:'Você está na interseção da medicina e da ciência. Projeta protocolos de ensaios clínicos, analisa dados e publica em revistas revisadas por pares. Suas descobertas mudam como milhares de médicos tratam pacientes em todo o mundo.', start:['Fazer um curso de bioestatística e epidemiologia (Coursera, edX)','Aprender R ou Python para análise de dados médicos','Estudar o desenho de ECR e os requisitos de BPC para pesquisa clínica','Encontrar um mentor e ingressar em um grupo de pesquisa'], startUrls:['https://pubmed.ncbi.nlm.nih.gov','https://www.coursera.org/learn/biostatistics','https://www.consort-statement.org','https://ichgcp.net'] },
    digital_md: { emoji:'💻', name:'Médico em saúde digital', desc:'Você aplica tecnologia, dados e IA para transformar o sistema de saúde', detail:'Você é médico e tecnólogo ao mesmo tempo. Implementa prontuários eletrônicos, desenvolve serviços de telemedicina e trabalha com modelos ML para diagnóstico e predição. Seu superpoder: entender tanto a medicina quanto o produto.', start:['Aprender Python básico para dados médicos','Estudar os padrões FHIR e HL7 para interoperabilidade de dados de saúde','Fazer cursos de IA em saúde no Coursera (Stanford/deeplearning.ai)','Explorar plataformas de telemedicina e regulamentação (FDA 510k, CE MDR)'], startUrls:['https://www.coursera.org/specializations/ai-healthcare','https://hl7.org/fhir/','https://www.who.int/health-topics/digital-health','https://digital.ahrq.gov'] }
  },
  ui: { tag:'Médico', title:'Que tipo de médico você é?', subtitle:'6 perguntas para encontrar seu nicho na medicina', prog:'Pergunta %d de 6', hint:'Escolha uma opção', back:'← Voltar', next:'Próximo →', finish:'Ver meu resultado', winBadge:'Seu nicho na medicina', resTag:'Resultado', resSub:'Seu caminho na medicina', lblStart:'Por onde começar:', l2back:'← Voltar aos resultados' }
};

// ─── AR ──────────────────────────────────────────────────────────────────────
L2.doctor.ar = {
  questions: [
    { t: 'ما الذي يجذبك أكثر في الطب؟', o: ['علاج المرضى مباشرةً — وضع التشخيصات وصرف العلاجات ورؤية النتائج','العمل باليدين — العمليات الجراحية والإجراءات والنتائج الفورية الواضحة','تطوير علاجات جديدة ونشر الاكتشافات في المجلات العلمية المحكّمة','تطبيق التكنولوجيا والبيانات لجعل الطب أكثر ذكاءً وإمكانية للوصول'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: 'أي مهمة تبدو الأكثر ملاءمة لك؟', o: ['استقبال مريض وأخذ التاريخ المرضي وإجراء التشخيص التفريقي ووصف العلاج','إجراء عملية جراحية معقدة وصقل التقنية حتى تصبح تلقائية','تصميم تجربة سريرية وتحليل نتائجها بـ R أو Python','نشر أداة ذكاء اصطناعي في مستشفى أو إطلاق خدمة طب عن بُعد'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: 'أي أداة هي الأهم بالنسبة لك؟', o: ['السجل الطبي الإلكتروني وUpToDate والإرشادات السريرية — إيجاد الإجابة الصحيحة بسرعة عند سرير المريض','طاولة العمليات والمنظار والمنظار التشخيصي ومحاكيات المهارات الجراحية','PubMed وR/Python وبروتوكولات التجارب المضبوطة العشوائية والأساليب الإحصائية لتحليل البيانات','منصات الطب عن بُعد وFHIR/HL7 ونماذج التعلم الآلي التشخيصية ومجموعات البيانات الطبية'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: 'ما أهم نتيجة لعملك؟', o: ['تعافى المريض وعاد إلى منزله بصحة جيدة — هذا هو المعنى كله','عملية جراحية ناجحة غيّرت حياة إنسان','مقالة في مجلة Q1 تُغيّر معايير العلاج حول العالم','منتج أو خوارزمية تُساعد آلاف المرضى دون مشاركتي المباشرة'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: 'مع من تستمتع بالعمل أكثر؟', o: ['مع المرضى وفريق متعدد التخصصات: ممرضون ومتخصصون وصيادلة','مع فريق غرفة العمليات: طبيب التخدير والمساعدون والجراحون المرشدون المتمرسون','مع العلماء وعلماء الإحصاء الحيوي والاتحادات البحثية الدولية','مع المطورين ومهندسي البيانات ومستثمري MedTech ومديري الرعاية الصحية'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: 'كيف يبدو نجاحك بعد 10 سنوات؟', o: ['رئيس قسم أو متخصص بارز يتمتع بسمعة قوية بين المرضى','جراح من أعلى فئة يُدرّب الجيل القادم ويطوّر تقنيات جديدة','أستاذ جامعي بمختبر وتمويل بحثي ومؤشر h أعلى من 20','مدير طبي أو مؤسس مشارك في شركة MedTech ناشئة تُحوّل منظومة الرعاية الصحية'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] }
  ],
  roles: {
    clinician: { emoji:'🩺', name:'طبيب سريري', desc:'تشخّص وتعالج المرضى وتنسّق رعايتهم — قلب الطب النابض', detail:'أنت في الخط الأول. تستقبل المرضى وتضع التشخيصات وتصف العلاجات وتتابع الحالات المزمنة. تعمل مع الممرضين والمتخصصين والصيادلة. كل يوم قصص جديدة وتحديات جديدة.', start:['دراسة الإرشادات السريرية لتخصصك (UpToDate, PubMed)','إتقان الطب القائم على الأدلة: كيفية قراءة التجارب المضبوطة العشوائية وتقييمها نقدياً','تطوير مهارات التواصل مع المرضى — دورات المقابلة التحفيزية','إتمام تدريب سريري في مستشفى عالي الحجم'], startUrls:['https://www.uptodate.com','https://pubmed.ncbi.nlm.nih.gov','https://www.cochrane.org','https://www.coursera.org/learn/health-communication'] },
    surgeon: { emoji:'⚕️', name:'جراح', desc:'تُجري العمليات الجراحية والإجراءات — تجمع الدقة والسرعة والمعرفة التشريحية العميقة', detail:'تعمل بيديك. تُصقل تقنيتك على مدى أشهر وسنوات، من الشقوق الأساسية إلى أعقد الإجراءات بالمنظار أو بمساعدة الروبوت. مخاطر عالية، ومكافآت عالية — جسدياً ومعنوياً.', start:['تدريب المهارات اليدوية على المحاكيات وفي المختبر الرطب','دراسة التشريح الجراحي باستخدام أطالس نيتر وأطالس الفيديو التابعة لـ ACS','المساعدة في أكبر عدد ممكن من العمليات — الكمية مهمة','إتمام الدورات الجراحية الأساسية: ATLS وACLS'], startUrls:['https://www.facs.org/education/division-of-education/programs/','https://www.netterimages.com','https://www.atls.com','https://cpr.heart.org/en/courses/acls-course-options'] },
    research_md: { emoji:'🔬', name:'طبيب باحث', desc:'تُجري التجارب السريرية وتنشر الاكتشافات وتضع معايير علاجية جديدة', detail:'أنت على تقاطع الطب والعلوم. تُصمّم بروتوكولات التجارب السريرية وتُحلّل البيانات وتنشر في المجلات المحكّمة. اكتشافاتك تُغيّر طريقة علاج آلاف الأطباء لمرضاهم حول العالم.', start:['الالتحاق بدورة في الإحصاء الحيوي وعلم الأوبئة (Coursera, edX)','تعلّم R أو Python لتحليل البيانات الطبية','دراسة تصميم التجارب المضبوطة العشوائية ومتطلبات الممارسة السريرية الجيدة','إيجاد مرشد والانضمام إلى مجموعة بحثية'], startUrls:['https://pubmed.ncbi.nlm.nih.gov','https://www.coursera.org/learn/biostatistics','https://www.consort-statement.org','https://ichgcp.net'] },
    digital_md: { emoji:'💻', name:'طبيب الصحة الرقمية', desc:'تُطبّق التكنولوجيا والبيانات والذكاء الاصطناعي لتحويل منظومة الرعاية الصحية', detail:'أنت طبيب وتقنيّ في آنٍ واحد. تُطبّق السجلات الطبية الإلكترونية وتُطوّر خدمات الطب عن بُعد وتعمل مع نماذج التعلم الآلي للتشخيص والتنبؤ. قوتك الخارقة: فهم الطب والمنتج معاً.', start:['تعلّم أساسيات Python للبيانات الطبية','دراسة معايير FHIR وHL7 للتشغيل البيني لبيانات الصحة','الالتحاق بدورات الذكاء الاصطناعي في الرعاية الصحية على Coursera (Stanford/deeplearning.ai)','استكشاف منصات الطب عن بُعد والتنظيم (FDA 510k, CE MDR)'], startUrls:['https://www.coursera.org/specializations/ai-healthcare','https://hl7.org/fhir/','https://www.who.int/health-topics/digital-health','https://digital.ahrq.gov'] }
  },
  ui: { tag:'طبيب', title:'ما نوع الطبيب الذي أنت عليه؟', subtitle:'٦ أسئلة للعثور على مكانتك في الطب', prog:'السؤال %d من ٦', hint:'اختر خياراً واحداً', back:'→ السابق', next:'التالي ←', finish:'اعرض نتيجتي', winBadge:'مكانتك في الطب', resTag:'النتيجة', resSub:'مسارك في الطب', lblStart:'من أين تبدأ:', l2back:'→ العودة إلى النتائج' }
};

// ─── HE ──────────────────────────────────────────────────────────────────────
L2.doctor.he = {
  questions: [
    { t: 'מה מושך אותך ביותר ברפואה?', o: ['לטפל ישירות במטופלים — לאבחן, לרשום טיפולים ולראות תוצאות','לעבוד עם הידיים — ניתוחים, פרוצדורות, תוצאות מיידיות ונראות','לפתח טיפולים חדשים ולפרסם תגליות בכתבי עת מדעיים','ליישם טכנולוגיה ונתונים כדי להפוך את הרפואה לחכמה ונגישה יותר'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: 'איזו משימה מרגישה הכי טבעית עבורך?', o: ['לקבל מטופל, לקחת אנמנזה, לבצע אבחנה מבדלת ולרשום טיפול','לבצע ניתוח מורכב ולשכלל את הטכניקה עד לאוטומטיות','לתכנן ניסוי קליני ולנתח את התוצאות ב-R או Python','להטמיע כלי בינה מלאכותית בבית חולים או להשיק שירות רפואה מרחוק'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: 'איזה כלי הכי חשוב לך?', o: ['רשומה רפואית אלקטרונית, UpToDate, הנחיות קליניות — למצוא את התשובה הנכונה מהר ליד המיטה','שולחן ניתוח, אנדוסקופ, לפרוסקופ, סימולטורים של מיומנויות כירורגיות','PubMed, R/Python, פרוטוקולים של RCT, שיטות סטטיסטיות לניתוח נתונים','פלטפורמות רפואה מרחוק, FHIR/HL7, מודלי ML לאבחון, מאגרי נתונים רפואיים'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: 'מה התוצאה החשובה ביותר של עבודתך?', o: ['המטופל החלים וחזר הביתה בריא — זה כל המשמעות','ניתוח מוצלח ששינה את חייו של מישהו','מאמר ב-Q1 שמשנה את סטנדרטי הטיפול ברחבי העולם','מוצר או אלגוריתם שעוזר לאלפי מטופלים ללא מעורבותי הישירה'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: 'עם מי אתה הכי אוהב לעבוד?', o: ['עם מטופלים וצוות רב-מקצועי: אחיות, מומחים, רוקחים','עם צוות חדר הניתוח: מרדים, עוזרים, מנתחים מנוסים שמשמשים כמנטורים','עם מדענים, ביוסטטיסטיקאים, קונסורציומים בינלאומיים למחקר','עם מפתחים, מהנדסי נתונים, משקיעים ב-MedTech ומנהלי בריאות'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] },
    { t: 'כיצד נראה ההצלחה שלך בעוד 10 שנים?', o: ['ראש מחלקה או מומחה מוביל עם מוניטין חזק בקרב מטופלים','מנתח מהדרגה העליונה, שמכשיר את הדור הבא ומפתח טכניקות חדשות','פרופסור עם מעבדה, מענקים ומדד h מעל 20','מנהל רפואי ראשי או שותף-מייסד של סטארטאפ MedTech שמשנה את מערכת הבריאות'], s: [{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}] }
  ],
  roles: {
    clinician: { emoji:'🩺', name:'רופא קליני', desc:'אתה מאבחן ומטפל במטופלים ומתאם את הטיפול שלהם — לב הרפואה', detail:'אתה בקו הקדמי. אתה מקבל מטופלים, מאבחן, רושם טיפולים ומנהל מטופלים כרוניים. אתה עובד עם אחיות, מומחים ורוקחים. כל יום מביא סיפורים חדשים ואתגרים חדשים.', start:['ללמוד את ההנחיות הקליניות של ההתמחות שלך (UpToDate, PubMed)','לשלוט ברפואה מבוססת ראיות: לקרוא ולהעריך ביקורתית RCTs','לפתח מיומנויות תקשורת עם מטופלים — קורסים של ראיון מוטיבציוני','להשלים סטאז\' בבית חולים עם עומס מטופלים גבוה'], startUrls:['https://www.uptodate.com','https://pubmed.ncbi.nlm.nih.gov','https://www.cochrane.org','https://www.coursera.org/learn/health-communication'] },
    surgeon: { emoji:'⚕️', name:'מנתח', desc:'אתה מבצע ניתוחים ופרוצדורות — משלב דיוק, מהירות וידע אנטומי עמוק', detail:'אתה עובד עם הידיים. במשך חודשים ושנים אתה משכלל את הטכניקה, מחתכים בסיסיים ועד לפרוצדורות לפרוסקופיות או בסיוע רובוט מורכבות ביותר. סיכונים גבוהים, תגמול גבוה — פיזי ומוסרי.', start:['לתרגל מיומנויות ידניות על סימולטורים ובמעבדה רטובה','ללמוד אנטומיה כירורגית עם אטלסי נטר וידאו-אטלסי ACS','לסייע בכמה שיותר ניתוחים — הכמות חשובה','להשלים קורסים כירורגיים בסיסיים: ATLS, ACLS'], startUrls:['https://www.facs.org/education/division-of-education/programs/','https://www.netterimages.com','https://www.atls.com','https://cpr.heart.org/en/courses/acls-course-options'] },
    research_md: { emoji:'🔬', name:'רופא-חוקר', desc:'אתה מנהל ניסויים קליניים, מפרסם תגליות ויוצר סטנדרטים חדשים לטיפול', detail:'אתה בצומת הרפואה והמדע. אתה מתכנן פרוטוקולים של ניסויים קליניים, מנתח נתונים ומפרסם בכתבי עת עם ביקורת עמיתים. התגליות שלך משנות את הדרך שבה אלפי רופאים מטפלים במטופלים ברחבי העולם.', start:['לקחת קורס בביוסטטיסטיקה ואפידמיולוגיה (Coursera, edX)','ללמוד R או Python לניתוח נתונים רפואיים','ללמוד עיצוב RCT ודרישות GCP למחקר קליני','למצוא מנטור ולהצטרף לקבוצת מחקר'], startUrls:['https://pubmed.ncbi.nlm.nih.gov','https://www.coursera.org/learn/biostatistics','https://www.consort-statement.org','https://ichgcp.net'] },
    digital_md: { emoji:'💻', name:'רופא בריאות דיגיטלית', desc:'אתה מיישם טכנולוגיה, נתונים ובינה מלאכותית כדי לשנות את מערכת הבריאות', detail:'אתה רופא וטכנולוג בו-זמנית. אתה מטמיע רשומות רפואיות אלקטרוניות, מפתח שירותי רפואה מרחוק ועובד עם מודלי ML לאבחון וחיזוי. הכוח-העל שלך: להבין גם רפואה וגם מוצר.', start:['ללמוד בסיסי Python לנתונים רפואיים','ללמוד תקני FHIR ו-HL7 לאינטרופרביליות של נתוני בריאות','לקחת קורסי בינה מלאכותית בבריאות ב-Coursera (Stanford/deeplearning.ai)','לחקור פלטפורמות רפואה מרחוק ורגולציה (FDA 510k, CE MDR)'], startUrls:['https://www.coursera.org/specializations/ai-healthcare','https://hl7.org/fhir/','https://www.who.int/health-topics/digital-health','https://digital.ahrq.gov'] }
  },
  ui: { tag:'רופא', title:'איזה סוג רופא אתה?', subtitle:'6 שאלות למציאת הנישה שלך ברפואה', prog:'שאלה %d מתוך 6', hint:'בחר אפשרות אחת', back:'→ חזרה', next:'הבא ←', finish:'לראות את התוצאה', winBadge:'הנישה שלך ברפואה', resTag:'תוצאה', resSub:'הדרך שלך ברפואה', lblStart:'מאיפה להתחיל:', l2back:'→ חזרה לתוצאות' }
};

L2.doctor.zh = {
  questions: [
    {t:'医学中什么最吸引你？', o:['临床医学——直接诊断和治疗患者','外科——用双手改变患者的生命','医学研究——探索疾病机制，开发新疗法','数字医疗——用技术让医疗更高效和可及'], s:[{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}]},
    {t:'你更想在哪种环境工作？', o:['门诊/病房——每天与患者面对面','手术室——高度专注的精密操作','实验室或研究中心','医疗科技公司或卫生政策机构'], s:[{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}]},
    {t:'什么成果最让你有成就感？', o:['准确诊断了一个疑难病例，患者康复了','一台高难度手术成功完成','你的研究发表在顶刊，影响了临床实践','你设计的医疗软件帮助10万名患者管理慢病'], s:[{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}]},
    {t:'你更喜欢哪种工作方式？', o:['患者沟通、查房、多学科会诊','手术技能的精进和新术式的学习','文献研读、课题申请、数据分析','产品设计、用户研究、系统实施'], s:[{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}]},
    {t:'你最愿意在哪个领域深耕？', o:['内科、儿科、神经科等临床专科','普外、骨科、心外、神外等外科专科','基础医学研究或临床研究','医疗信息化、AI辅助诊断、远程医疗'], s:[{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}]},
    {t:'10年后你在哪里？', o:['三甲医院某专科的主任医师','在该领域独当一面的外科主任','国家级医学研究课题的PI','医疗科技公司的医疗总监或创始人'], s:[{clinician:3},{surgeon:3},{research_md:3},{digital_md:3}]}
  ],
  roles: {
    clinician: {emoji:'🩺', name:'临床医师', desc:'诊断疾病、制定治疗方案，是患者最直接的守护者', detail:'你是医患关系的核心。你通过问诊、体检和辅助检查，建立诊断，制定个体化治疗方案。你每天的决策直接影响患者的健康和生命。', start:['认真学习临床推理——鉴别诊断思维','掌握病史采集和体格检查的标准方法','学习循证医学——如何评估证据质量','主动参与临床实习，积累真实病例经验']},
    surgeon: {emoji:'🔬', name:'外科医生', desc:'通过手术干预改变病程，在手术台上拯救生命', detail:'你的双手是最精密的工具。你在极度压力下保持专注，在有限的时间窗口内完成复杂操作。外科是医学中对技术要求最高的方向。', start:['练习基本外科技能——打结、缝合、切开','了解主要外科专科的核心手术','学习围手术期管理——术前评估、术后监测','在模拟实验室大量练习外科操作']},
    research_md: {emoji:'🧬', name:'医学研究员', desc:'探索疾病的发生机制，开发改变医学实践的新疗法', detail:'你在实验台和临床之间架起桥梁。你提出假设、设计实验、分析数据，你的研究成果可能在10年后成为全球的临床指南。', start:['学习科研方法论——实验设计和统计分析','掌握生物信息学基础工具——R或Python','了解如何阅读和评估医学文献','尽早进入研究室——在导师指导下开始第一个课题']},
    digital_md: {emoji:'💻', name:'数字医疗专家', desc:'用技术让医疗更智慧、更高效、惠及更多人', detail:'你连接医学和科技两个世界。你可能在设计AI辅助诊断系统、电子病历平台或远程医疗方案，你的工作让优质医疗触达更多患者。', start:['学习医疗信息化基础——HL7 FHIR标准','了解医学AI——计算机视觉在影像诊断的应用','研究医疗产品设计——与临床医生合作开发产品','了解医疗监管——医疗软件的注册审批流程']}
  },
  ui: {l2back:'← 返回医学', title:'医学：选择你的专业方向'}
};
