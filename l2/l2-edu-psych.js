'use strict';
/* ── L2: Педагог-психолог ────────────────────────────────────────────────────
   4 roles: school_psych 🏫 | couns_psych 💬 | dev_psych 🌱 | spec_ed 🤲
──────────────────────────────────────────────────────────────────────────── */
L2.edu_psych.ru = {
  questions: [
    {
      t: 'Какая работа тебе ближе всего?',
      o: [
        'Диагностика, коррекция и сопровождение учеников в школе — работа с классами и учителями',
        'Индивидуальные консультации детей и подростков — помогать справляться с тревогой и трудностями',
        'Поддержка раннего развития: работа с маленькими детьми и их семьями в развивающем центре',
        'Сопровождение детей с ОВЗ и особыми образовательными потребностями в инклюзивной среде'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: 'Какой инструмент или метод ты хочешь освоить?',
      o: [
        'Социометрия, тест тревожности Спилбергера, методика Рене Жиля, наблюдение за классом',
        'КПТ для подростков, арт-терапия, работа с горем и кризисными ситуациями',
        'Шкалы развития (Bayley, Гриффитс), игровая терапия, нейропсихологические пробы',
        'ПМПК-диагностика, АВА-терапия, сенсорная интеграция, работа с аутизмом и ЗПР'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: 'Что для тебя главный результат работы?',
      o: [
        'Ребёнок перестал бояться школы, наладил отношения с классом, исчезли прогулы',
        'Подросток научился справляться с тревогой и сам обратился за помощью в следующий раз',
        'Ребёнок достиг возрастных норм развития и поступил в обычный детский сад или школу',
        'Ребёнок с аутизмом освоил коммуникативные навыки и начал учиться в инклюзивном классе'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: 'Где ты хочешь работать?',
      o: [
        'Школа, лицей или образовательный центр — в команде с учителями и завучами',
        'Психологический центр, частная практика или онлайн-консультирование подростков',
        'Центр раннего развития, детский сад, неврологическая клиника или реабилитационный центр',
        'Инклюзивная школа, центр психолого-педагогической помощи или НКО для семей с детьми с ОВЗ'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: 'Что тебя привлекает в психологии образования?',
      o: [
        'Работа с целым классом и школьной средой — менять систему, а не только отдельных детей',
        'Глубокая терапевтическая работа с конкретным ребёнком и его семьёй',
        'Наблюдать, как ребёнок растёт и развивается — особенно в самые важные первые годы',
        'Помогать детям, которым обычная система не подходит — находить их особый путь к обучению'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: 'Как выглядит твой путь через 10 лет?',
      o: [
        'Руководитель психологической службы школы или района, супервизор для молодых специалистов',
        'Психолог-консультант с частной практикой и авторскими программами для подростков',
        'Специалист по раннему вмешательству или руководитель центра развития',
        'Дефектолог высшей категории или основатель инклюзивного образовательного проекта'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    }
  ],
  roles: {
    school_psych: {
      emoji: '🏫',
      name: 'Школьный психолог',
      desc: 'Сопровождаешь учеников и педагогов в школе — диагностика, профилактика, кризисная помощь',
      detail: 'Ты — часть педагогической команды. Проводишь диагностику классов, выявляешь детей в трудной ситуации, ведёшь коррекционные занятия и консультируешь учителей. Твоя главная цель — сделать школу безопасным и развивающим местом для каждого ребёнка.',
      start: ['Изучи методы диагностики: социометрию, тест Люшера, методику Рене Жиля', 'Пройди обучение кризисному вмешательству и работе с буллингом', 'Освой ведение документации: программы сопровождения, ИПР, протоколы ПМПк', 'Стажируйся в школе рядом с опытным психологом — хотя бы один учебный год'],
      startUrls: ['https://psy.su', 'https://www.coursera.org/learn/introduction-psychology', 'https://fgosreestr.ru', 'https://www.apa.org/education-career/guide/subfields/school']
    },
    couns_psych: {
      emoji: '💬',
      name: 'Психолог-консультант для детей и подростков',
      desc: 'Ведёшь индивидуальные и групповые консультации — помогаешь детям и семьям справляться с трудностями',
      detail: 'Ты работаешь напрямую с детьми, подростками и их родителями. Используешь доказательные методы — КПТ, арт-терапию, нарративный подход — и строишь доверительные отношения. Часто работаешь в психологическом центре или ведёшь частную практику.',
      start: ['Пройди личную психотерапию — это обязательно для любого консультанта', 'Выбери специализацию: тревога, травма, семейные отношения, кризис подросткового возраста', 'Освой КПТ для детей и подростков — наиболее доказательный подход', 'Пройди долгосрочную супервизию у опытного детского психолога'],
      startUrls: ['https://www.beckinstitute.org', 'https://www.playtherapy.org', 'https://psy.su/find/psychologists/', 'https://www.apa.org/topics/children']
    },
    dev_psych: {
      emoji: '🌱',
      name: 'Специалист раннего развития',
      desc: 'Сопровождаешь развитие детей от 0 до 7 лет — диагностика, коррекция и работа с семьёй',
      detail: 'Ты работаешь в самый критический период — когда мозг ребёнка наиболее пластичен. Проводишь нейропсихологическую диагностику, выявляешь задержки развития, ведёшь коррекционные занятия и обучаешь родителей эффективному взаимодействию с ребёнком.',
      start: ['Изучи нейропсихологию развития и теорию привязанности', 'Освой шкалы оценки развития: Bayley-4, методику Гриффитс, Denver II', 'Пройди обучение игровой терапии — основному методу работы с маленькими детьми', 'Стажируйся в центре раннего вмешательства или неврологической клинике'],
      startUrls: ['https://www.zerotothree.org', 'https://www.coursera.org/learn/early-childhood-development', 'https://www.apta.org', 'https://нацпроект образование.рф']
    },
    spec_ed: {
      emoji: '🤲',
      name: 'Специальный педагог / Дефектолог',
      desc: 'Помогаешь детям с ОВЗ учиться и развиваться — адаптируешь образование под особые потребности',
      detail: 'Ты работаешь с детьми с аутизмом, ЗПР, нарушениями речи, слуха, зрения и другими особенностями развития. Разрабатываешь адаптированные образовательные программы, применяешь специальные методы и помогаешь ребёнку найти свой путь к обучению.',
      start: ['Изучи дефектологию: логопедию, олигофренопедагогику, тифло- и сурдопедагогику', 'Освой АВА-терапию и PECS — доказательные методы работы с аутизмом', 'Изучи принципы сенсорной интеграции и нейропсихологической коррекции', 'Пройди стажировку в инклюзивной школе или реабилитационном центре'],
      startUrls: ['https://autism-bhn.ru', 'https://www.bacb.com', 'https://inst-defectology.ru', 'https://www.coursera.org/learn/autism-spectrum-disorder']
    }
  },
  ui: {
    tag: 'Педагог-психолог',
    title: 'Какой психолог в образовании ты?',
    subtitle: '6 вопросов — найди свою нишу в психологии образования',
    prog: 'Вопрос %d из 6',
    hint: 'Выбери один вариант',
    back: '← Назад', next: 'Далее →', finish: 'Показать результат',
    winBadge: 'Твоя ниша в психологии образования',
    resTag: 'Результат', resSub: 'Твой путь в психологии и образовании',
    lblStart: 'С чего начать:', l2back: '← Назад к результатам'
  }
};


L2.edu_psych.en = {
  questions: [
    {
      t: 'What draws you most to educational psychology?',
      o: [
        'Working in schools — supporting students\' mental health and helping teachers understand each child',
        'Counselling and psychotherapy — providing structured support to people working through difficulties',
        'Child development — studying how children grow cognitively, emotionally, and socially',
        'Special education — supporting children with disabilities or additional learning needs'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: 'Which tool or method would you most like to master?',
      o: [
        'Psychological assessments (IQ tests, anxiety scales) — diagnosing difficulties with standardised instruments',
        'CBT (Cognitive Behavioural Therapy) — structured, evidence-based therapy for anxiety and depression',
        'Developmental observation methods — Piaget\'s tasks, Vygotsky\'s ZPD, attachment theory frameworks',
        'Applied Behaviour Analysis (ABA) — building skills in children with autism through structured reinforcement'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: 'What result of your work matters most to you?',
      o: [
        'A student who was struggling emotionally is now engaged, settled, and thriving in class',
        'A client completes their course of therapy and reports genuine, lasting change in how they cope',
        'My research contributes new evidence on how children learn — published and cited by others',
        'A child with additional needs achieves a milestone that their teachers said was impossible'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: 'Where are you most comfortable working?',
      o: [
        'In schools — observing classrooms, meeting with teachers and parents, running groups',
        'In a counselling room — private, safe, consistent sessions with individual clients',
        'In a research lab or university — running studies, coding data, writing papers',
        'In specialist settings — special schools, rehabilitation centres, early intervention programmes'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: 'Which issue interests you most professionally?',
      o: [
        'School refusal, bullying, ADHD, and emotional dysregulation in the classroom',
        'Anxiety disorders, depression, trauma, and relationship difficulties in adults and adolescents',
        'How attachment, play, and language shape cognitive and emotional development in early childhood',
        'Autism spectrum disorder, intellectual disability, sensory processing, and communication difficulties'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: 'Where do you see yourself in 10 years?',
      o: [
        'Lead educational psychologist for a local authority or head of wellbeing in a large school',
        'Chartered counselling psychologist in private practice or a senior NHS role',
        'Developmental researcher with a PhD, publishing in top journals and leading a lab',
        'Specialist SENCO, advisory teacher, or director of an inclusive education programme'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    }
  ],
  roles: {
    school_psych: {
      emoji: '🏫',
      name: 'School Psychologist',
      desc: 'You support students\' mental health and learning in schools — bridging psychology, education, and families',
      detail: 'You work across a school or group of schools: assessing students with learning difficulties, supporting those experiencing emotional distress, advising teachers on classroom strategies, and working with parents. You run group programmes on resilience and social skills, and you are often the person who spots what is really going on when a student starts falling behind or acting out.',
      start: [
        'Study for a degree in psychology, then complete a postgraduate qualification in educational psychology',
        'Gain experience working with children — volunteering, teaching assistant roles, or youth work',
        'Learn the most common assessment tools: WISC, BASC, WIAT — these are the language of the profession',
        'Read "Educational Psychology" by Anita Woolfolk — a comprehensive and accessible foundation text'
      ]
    },
    couns_psych: {
      emoji: '💬',
      name: 'Counselling Psychologist',
      desc: 'You provide structured therapeutic support — helping people work through emotional and psychological difficulties',
      detail: 'You work with individuals, couples, or groups using evidence-based therapeutic approaches: CBT, person-centred therapy, psychodynamic methods, or ACT. Your clients might be teenagers dealing with exam anxiety, adults processing grief, or professionals experiencing burnout. You hold a safe and consistent space for change. The work is demanding, deeply human, and genuinely transformative.',
      start: [
        'Complete a recognised counselling or psychology degree, then a masters or doctorate in counselling psychology',
        'Begin your own personal therapy — most training programmes require it, and it will make you a better therapist',
        'Train in CBT — it is the most evidence-based and widely used therapeutic approach across settings',
        'Read "On Becoming a Person" by Carl Rogers — a classic that defines what therapeutic relationship means'
      ]
    },
    dev_psych: {
      emoji: '🌱',
      name: 'Developmental Psychologist',
      desc: 'You study how children grow and develop — researching cognition, emotion, language, and social understanding',
      detail: 'You conduct research into how children develop from infancy through adolescence. You design studies, collect data using observational methods and standardised tasks, analyse results, and publish findings. Your work informs policy on early years education, parenting support, and child welfare. You might work in a university, a research institute, or a government agency.',
      start: [
        'Take a psychology degree with a strong research methods component — statistics and research design are essential',
        'Read Piaget, Vygotsky, and Bronfenbrenner — the three pillars of developmental theory',
        'Get hands-on experience: run a study with children, even a small one, early in your training',
        'Apply for a PhD — developmental psychology is primarily an academic research career'
      ]
    },
    spec_ed: {
      emoji: '🤲',
      name: 'Special Educational Needs Specialist',
      desc: 'You support children with disabilities and additional learning needs — making education genuinely inclusive',
      detail: 'You work with children who have autism, intellectual disabilities, sensory impairments, or complex communication needs. You design individual education plans (IEPs), train teachers in evidence-based strategies, liaise with families and other professionals, and advocate for each child\'s right to learn. You use approaches like ABA, PECS, sensory integration, and AAC (augmentative communication).',
      start: [
        'Study for a degree in special education, educational psychology, or speech and language therapy',
        'Get trained in ABA (Applied Behaviour Analysis) — the most evidence-based approach for autism',
        'Learn the PECS system and AAC tools — communication support is central to SEN work',
        'Read "Uniquely Human" by Barry Prizant — a compassionate, practical guide to understanding autism'
      ]
    }
  },
  ui: { l2back: '← Back to education', title: 'Educational Psychology: which specialisation?' }
};



L2.edu_psych.de = {
  questions: [
    {
      t: 'Was zieht dich am meisten zur Pädagogischen Psychologie?',
      o: [
        'Arbeit in Schulen — die psychische Gesundheit von Schülerinnen und Schülern stärken und Lehrkräfte beraten',
        'Beratung und Psychotherapie — Menschen strukturierte Unterstützung geben, die mit Schwierigkeiten umgehen',
        'Kindliche Entwicklung — erforschen, wie Kinder kognitiv, emotional und sozial wachsen',
        'Sonderpädagogik — Kinder mit Behinderungen oder besonderem Förderbedarf unterstützen'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: 'Welche Methode oder welches Werkzeug möchtest du am liebsten beherrschen?',
      o: [
        'Psychologische Diagnostik (IQ-Tests, Angstskalen) — Schwierigkeiten mit standardisierten Instrumenten erfassen',
        'KVT (Kognitive Verhaltenstherapie) — strukturierte, evidenzbasierte Therapie bei Angst und Depression',
        'Entwicklungspsychologische Beobachtungsmethoden — Piagets Aufgaben, Vygotskys ZPD, Bindungstheorie',
        'Angewandte Verhaltensanalyse (ABA) — Kompetenzen bei Kindern mit Autismus durch strukturierte Verstärkung aufbauen'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: 'Welches Ergebnis deiner Arbeit ist dir am wichtigsten?',
      o: [
        'Ein Schüler, der emotional kämpfte, ist jetzt engagiert, gefestigt und blüht im Unterricht auf',
        'Ein Klient schließt seine Therapie ab und berichtet von echter, dauerhafter Veränderung im Umgang mit sich',
        'Meine Forschung trägt neue Erkenntnisse darüber bei, wie Kinder lernen — veröffentlicht und zitiert',
        'Ein Kind mit besonderem Förderbedarf erreicht einen Meilenstein, den Lehrkräfte für unmöglich hielten'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: 'Wo arbeitest du am liebsten?',
      o: [
        'In Schulen — Klassen beobachten, mit Lehrkräften und Eltern sprechen, Gruppen leiten',
        'Im Beratungsraum — vertrauliche, sichere, regelmäßige Sitzungen mit einzelnen Klienten',
        'Im Forschungslabor oder an der Universität — Studien durchführen, Daten auswerten, Artikel schreiben',
        'In spezialisierten Einrichtungen — Förderschulen, Rehazentren, Frühförderprogramme'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: 'Welches Thema interessiert dich fachlich am meisten?',
      o: [
        'Schulverweigerung, Mobbing, ADHS und emotionale Dysregulation im Unterricht',
        'Angststörungen, Depression, Trauma und Beziehungsprobleme bei Jugendlichen und Erwachsenen',
        'Wie Bindung, Spiel und Sprache die kognitive und emotionale Entwicklung in der frühen Kindheit prägen',
        'Autismus-Spektrum-Störung, geistige Behinderung, sensorische Verarbeitung und Kommunikationsprobleme'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: 'Wo siehst du dich in 10 Jahren?',
      o: [
        'Leitende Schulpsychologin oder leitender Schulpsychologe in einer Behörde oder Leitung des Schulsozialen Dienstes',
        'Approbierte Beratungspsychologin oder approbierter Beratungspsychologe in eigener Praxis oder einer Klinik',
        'Entwicklungspsychologische Forscherin oder Forscher mit Promotion, Veröffentlichungen und eigenem Labor',
        'Spezialisierte Förderschullehrkraft, sonderpädagogische Fachkraft oder Leitung eines Inklusionsprogramms'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    }
  ],
  roles: {
    school_psych: {
      emoji: '🏫',
      name: 'Schulpsychologin / Schulpsychologe',
      desc: 'Du unterstützt die psychische Gesundheit und das Lernen von Schülerinnen und Schülern — als Brücke zwischen Psychologie, Schule und Familien',
      detail: 'Du arbeitest in einer oder mehreren Schulen: Du bewertest Schülerinnen und Schüler mit Lernschwierigkeiten, unterstützt jene mit emotionalen Problemen, berätst Lehrkräfte zu Unterrichtsstrategien und arbeitest mit Eltern zusammen. Du leitest Gruppen zu Resilienz und sozialen Kompetenzen und erkennst oft als Erste, was wirklich hinter Leistungsabfall oder Verhaltensauffälligkeiten steckt.',
      start: [
        'Studiere Psychologie und ergänze das Studium durch ein Aufbaustudium in Schulpsychologie oder Pädagogischer Psychologie',
        'Sammle Erfahrungen mit Kindern — durch Ehrenamt, Arbeit als Schulbegleitung oder in der Jugendarbeit',
        'Lerne die gängigen Diagnostikinstrumente kennen: WISC, BASC, WIAT — das ist die Fachsprache des Berufs',
        'Lies "Pädagogische Psychologie" von Anita Woolfolk — ein umfassendes und gut verständliches Grundlagenwerk'
      ]
    },
    couns_psych: {
      emoji: '💬',
      name: 'Beratungspsychologin / Beratungspsychologe',
      desc: 'Du bietest strukturierte therapeutische Unterstützung — und hilfst Menschen, emotionale und psychische Schwierigkeiten zu bewältigen',
      detail: 'Du arbeitest mit Einzelpersonen, Paaren oder Gruppen mit evidenzbasierten Therapiemethoden: KVT, personzentrierter Therapie, psychodynamischen Ansätzen oder ACT. Deine Klientinnen und Klienten können Jugendliche mit Prüfungsangst sein, Erwachsene, die Trauer verarbeiten, oder Berufstätige mit Burnout. Du schaffst einen sicheren, verlässlichen Raum für Veränderung. Die Arbeit ist anspruchsvoll, zutiefst menschlich und wirklich transformativ.',
      start: [
        'Schließe ein anerkanntes Psychologie- oder Beratungsstudium ab, dann einen Master oder eine Promotion in Beratungspsychologie',
        'Beginn deine eigene persönliche Therapie — die meisten Ausbildungsprogramme setzen das voraus, und sie macht dich zu einer besseren Therapeutin oder einem besseren Therapeuten',
        'Bilde dich in KVT weiter — es ist der am besten belegte und am weitesten verbreitete Therapieansatz',
        'Lies "Entwicklung der Persönlichkeit" von Carl Rogers — ein Klassiker, der definiert, was eine therapeutische Beziehung bedeutet'
      ]
    },
    dev_psych: {
      emoji: '🌱',
      name: 'Entwicklungspsychologin / Entwicklungspsychologe',
      desc: 'Du erforschst, wie Kinder wachsen und sich entwickeln — Kognition, Emotion, Sprache und soziales Verstehen',
      detail: 'Du forschst dazu, wie sich Kinder von der Säuglingszeit bis zur Adoleszenz entwickeln. Du entwirfst Studien, erhebst Daten mit Beobachtungsmethoden und standardisierten Aufgaben, wertest Ergebnisse aus und veröffentlichst Befunde. Deine Arbeit fließt in die Bildungspolitik, Elternförderung und den Kinderschutz ein. Du kannst an einer Universität, einem Forschungsinstitut oder einer Behörde arbeiten.',
      start: [
        'Studiere Psychologie mit starkem Forschungsmethodenteil — Statistik und Forschungsdesign sind unverzichtbar',
        'Lies Piaget, Vygotsky und Bronfenbrenner — die drei Grundpfeiler der Entwicklungstheorie',
        'Sammle praktische Erfahrung: Führe früh in deiner Ausbildung eine eigene Studie mit Kindern durch, auch eine kleine',
        'Bewirb dich für eine Promotion — Entwicklungspsychologie ist vor allem eine akademische Forschungskarriere'
      ]
    },
    spec_ed: {
      emoji: '🤲',
      name: 'Sonderpädagogische Fachkraft',
      desc: 'Du unterstützt Kinder mit Behinderungen und besonderem Förderbedarf — und machst Bildung wirklich inklusiv',
      detail: 'Du arbeitest mit Kindern, die Autismus, geistige Behinderungen, Sinnesbeeinträchtigungen oder komplexe Kommunikationsbedürfnisse haben. Du entwickelst individuelle Förderpläne (IEPs), schule Lehrkräfte in evidenzbasierten Methoden, kooperierst mit Familien und anderen Fachkräften und setzt dich für das Recht jedes Kindes auf Bildung ein. Du nutzt Ansätze wie ABA, PECS, sensorische Integration und UK (unterstützte Kommunikation).',
      start: [
        'Studiere Sonderpädagogik, Pädagogische Psychologie oder Sprach- und Kommunikationstherapie',
        'Lass dich in ABA (Angewandte Verhaltensanalyse) ausbilden — der evidenzbasierte Ansatz für Autismus',
        'Lerne das PECS-System und UK-Werkzeuge kennen — Kommunikationsunterstützung ist zentral in der Sonderpädagogik',
        'Lies "Uniquely Human" von Barry Prizant — ein einfühlsamer, praxisnaher Leitfaden zum Verständnis von Autismus'
      ]
    }
  },
  ui: { l2back: '← Zurück zur Bildung', title: 'Bildungspsychologie: welche Spezialisierung?' }
};

L2.edu_psych.fr = {
  questions: [
    {
      t: 'Qu\'est-ce qui t\'attire le plus dans la psychologie de l\'éducation ?',
      o: [
        'Travailler dans les écoles — soutenir la santé mentale des élèves et aider les enseignants à comprendre chaque enfant',
        'Conseil et psychothérapie — apporter un soutien structuré aux personnes traversant des difficultés',
        'Développement de l\'enfant — étudier comment les enfants grandissent cognitivement, émotionnellement et socialement',
        'Éducation spécialisée — soutenir les enfants en situation de handicap ou ayant des besoins éducatifs particuliers'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: 'Quel outil ou quelle méthode aimerais-tu le plus maîtriser ?',
      o: [
        'Les évaluations psychologiques (tests de QI, échelles d\'anxiété) — diagnostiquer les difficultés avec des instruments standardisés',
        'La TCC (Thérapie Cognitive et Comportementale) — une thérapie structurée et fondée sur les preuves pour l\'anxiété et la dépression',
        'Les méthodes d\'observation du développement — les tâches de Piaget, la ZPD de Vygotski, les cadres théoriques de l\'attachement',
        'L\'analyse appliquée du comportement (ABA) — développer des compétences chez les enfants autistes par le renforcement structuré'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: 'Quel résultat de ton travail compte le plus pour toi ?',
      o: [
        'Un élève qui avait des difficultés émotionnelles est maintenant engagé, épanoui et s\'épanouit en classe',
        'Un client termine sa thérapie et fait état d\'un changement réel et durable dans sa façon de faire face',
        'Mes recherches apportent de nouvelles preuves sur la façon dont les enfants apprennent — publiées et citées',
        'Un enfant avec des besoins particuliers atteint un jalon que ses enseignants jugeaient impossible'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: 'Où te sens-tu le plus à l\'aise pour travailler ?',
      o: [
        'Dans les écoles — observer les classes, rencontrer les enseignants et les parents, animer des groupes',
        'Dans une salle de consultation — des séances privées, sécurisantes et régulières avec des clients individuels',
        'Dans un laboratoire de recherche ou à l\'université — mener des études, coder des données, rédiger des articles',
        'Dans des environnements spécialisés — écoles spécialisées, centres de rééducation, programmes d\'intervention précoce'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: 'Quelle problématique t\'intéresse le plus sur le plan professionnel ?',
      o: [
        'Le refus scolaire, le harcèlement, le TDAH et la dysrégulation émotionnelle en classe',
        'Les troubles anxieux, la dépression, le traumatisme et les difficultés relationnelles chez les adolescents et les adultes',
        'Comment l\'attachement, le jeu et le langage façonnent le développement cognitif et émotionnel dans la petite enfance',
        'Le trouble du spectre autistique, la déficience intellectuelle, le traitement sensoriel et les difficultés de communication'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: 'Où te vois-tu dans 10 ans ?',
      o: [
        'Psychologue scolaire responsable d\'une autorité locale ou directrice/directeur du bien-être dans un grand établissement',
        'Psychologue-conseil agréé(e) en cabinet privé ou dans un rôle senior au sein d\'un service de santé',
        'Chercheuse ou chercheur en psychologie du développement avec un doctorat, publiant dans des revues de premier rang',
        'Coordinatrice ou coordinateur spécialisé(e) pour les besoins éducatifs particuliers ou directeur/directrice d\'un programme d\'éducation inclusive'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    }
  ],
  roles: {
    school_psych: {
      emoji: '🏫',
      name: 'Psychologue scolaire',
      desc: 'Tu soutiens la santé mentale et les apprentissages des élèves — en faisant le lien entre psychologie, éducation et familles',
      detail: 'Tu travailles dans une ou plusieurs écoles : tu évalues les élèves en difficulté d\'apprentissage, tu soutiens ceux qui vivent une détresse émotionnelle, tu conseilles les enseignants sur les stratégies pédagogiques et tu travailles avec les parents. Tu animes des groupes sur la résilience et les compétences sociales, et tu es souvent la première personne à repérer ce qui se passe vraiment quand un élève décroche ou se comporte de façon inhabituelle.',
      start: [
        'Réalise une licence en psychologie, puis complète par un master ou une formation spécialisée en psychologie scolaire',
        'Acquiers de l\'expérience auprès des enfants — bénévolat, auxiliaire de vie scolaire ou animation jeunesse',
        'Apprends les outils d\'évaluation les plus courants : WISC, BASC, WIAT — c\'est le langage de la profession',
        'Lis "Educational Psychology" d\'Anita Woolfolk — un ouvrage de référence complet et accessible'
      ]
    },
    couns_psych: {
      emoji: '💬',
      name: 'Psychologue-conseil',
      desc: 'Tu apportes un soutien thérapeutique structuré — en aidant les personnes à surmonter leurs difficultés émotionnelles et psychologiques',
      detail: 'Tu travailles avec des individus, des couples ou des groupes en utilisant des approches thérapeutiques fondées sur les preuves : TCC, thérapie centrée sur la personne, méthodes psychodynamiques ou ACT. Tes clients peuvent être des adolescents stressés par les examens, des adultes qui traversent un deuil, ou des professionnels en burn-out. Tu crées un espace sûr et stable pour le changement. Ce travail est exigeant, profondément humain et véritablement transformateur.',
      start: [
        'Complète une licence reconnue en conseil ou en psychologie, puis un master ou un doctorat en psychologie du conseil',
        'Entame ta propre thérapie personnelle — la plupart des programmes de formation l\'exigent, et cela fera de toi un meilleur thérapeute',
        'Forme-toi à la TCC — c\'est l\'approche thérapeutique la plus documentée et la plus utilisée dans tous les contextes',
        'Lis "Le développement de la personne" de Carl Rogers — un classique qui définit le sens de la relation thérapeutique'
      ]
    },
    dev_psych: {
      emoji: '🌱',
      name: 'Psychologue du développement',
      desc: 'Tu étudies comment les enfants grandissent et se développent — en recherchant la cognition, l\'émotion, le langage et la compréhension sociale',
      detail: 'Tu mènes des recherches sur le développement des enfants, de la petite enfance à l\'adolescence. Tu conçois des études, recueilles des données grâce à des méthodes d\'observation et des tâches standardisées, analyses les résultats et publies tes découvertes. Ton travail informe les politiques éducatives pour la petite enfance, le soutien à la parentalité et la protection de l\'enfance. Tu peux travailler dans une université, un institut de recherche ou un organisme public.',
      start: [
        'Suis une licence en psychologie avec un solide volet méthodes de recherche — statistiques et conception d\'études sont indispensables',
        'Lis Piaget, Vygotski et Bronfenbrenner — les trois piliers de la théorie du développement',
        'Acquiers une expérience pratique : mène une étude avec des enfants tôt dans ta formation, même une petite',
        'Postule à un doctorat — la psychologie du développement est avant tout une carrière de recherche académique'
      ]
    },
    spec_ed: {
      emoji: '🤲',
      name: 'Spécialiste en éducation spécialisée',
      desc: 'Tu soutiens les enfants en situation de handicap et à besoins éducatifs particuliers — pour une éducation vraiment inclusive',
      detail: 'Tu travailles avec des enfants autistes, porteurs d\'une déficience intellectuelle, d\'une déficience sensorielle ou de besoins complexes en communication. Tu élabores des plans d\'éducation individualisés (PEI), tu formes les enseignants aux stratégies fondées sur les preuves, tu fais le lien avec les familles et les autres professionnels, et tu défends le droit de chaque enfant à apprendre. Tu utilises des approches comme l\'ABA, le PECS, l\'intégration sensorielle et la communication alternative et augmentée (CAA).',
      start: [
        'Étudie en éducation spécialisée, en psychologie de l\'éducation ou en orthophonie',
        'Forme-toi à l\'ABA (Analyse Appliquée du Comportement) — l\'approche la plus probante pour l\'autisme',
        'Apprends le système PECS et les outils de CAA — le soutien à la communication est central dans le travail en ULIS',
        'Lis "Uniquement humain" de Barry Prizant — un guide bienveillant et pratique pour comprendre l\'autisme'
      ]
    }
  },
  ui: { l2back: '← Retour à l\'éducation', title: 'Psychologie de l\'éducation : quelle spécialisation ?' }
};



L2.edu_psych.es = {
  questions: [
    {
      t: '¿Qué es lo que más te atrae de la psicología educativa?',
      o: [
        'Trabajar en escuelas — apoyar la salud mental de los estudiantes y ayudar a los docentes a entender a cada niño',
        'Consejería y psicoterapia — brindar apoyo estructurado a personas que atraviesan dificultades',
        'Desarrollo infantil — estudiar cómo los niños crecen cognitiva, emocional y socialmente',
        'Educación especial — apoyar a niños con discapacidades o necesidades educativas adicionales'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: '¿Qué herramienta o método te gustaría dominar más?',
      o: [
        'Evaluaciones psicológicas (pruebas de CI, escalas de ansiedad) — diagnosticar dificultades con instrumentos estandarizados',
        'TCC (Terapia Cognitivo-Conductual) — terapia estructurada y basada en evidencia para la ansiedad y la depresión',
        'Métodos de observación del desarrollo — tareas de Piaget, ZDP de Vygotsky, marcos de la teoría del apego',
        'Análisis Aplicado del Comportamiento (ABA) — desarrollar habilidades en niños con autismo mediante refuerzo estructurado'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: '¿Qué resultado de tu trabajo importa más para ti?',
      o: [
        'Un estudiante que tenía dificultades emocionales ahora está comprometido, tranquilo y prosperando en clase',
        'Un cliente completa su proceso terapéutico y reporta un cambio genuino y duradero en cómo afronta la vida',
        'Mi investigación aporta nueva evidencia sobre cómo aprenden los niños — publicada y citada por otros',
        'Un niño con necesidades adicionales logra un hito que sus maestros decían era imposible'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: '¿Dónde te sientes más cómodo trabajando?',
      o: [
        'En escuelas — observando aulas, reuniéndome con docentes y familias, dirigiendo grupos',
        'En un consultorio — sesiones privadas, seguras y consistentes con clientes individuales',
        'En un laboratorio de investigación o universidad — realizando estudios, codificando datos, escribiendo artículos',
        'En entornos especializados — escuelas especiales, centros de rehabilitación, programas de intervención temprana'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: '¿Qué tema te interesa más a nivel profesional?',
      o: [
        'Fobia escolar, acoso, TDAH y desregulación emocional en el aula',
        'Trastornos de ansiedad, depresión, trauma y dificultades relacionales en adultos y adolescentes',
        'Cómo el apego, el juego y el lenguaje moldean el desarrollo cognitivo y emocional en la primera infancia',
        'Trastorno del espectro autista, discapacidad intelectual, procesamiento sensorial y dificultades de comunicación'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: '¿Dónde te ves en 10 años?',
      o: [
        'Psicólogo educativo líder de una institución local o director de bienestar en una gran escuela',
        'Psicólogo consejero habilitado en práctica privada o en un rol senior en servicios de salud',
        'Investigador en psicología del desarrollo con doctorado, publicando en revistas de primer nivel y liderando un laboratorio',
        'Especialista en NEE, docente asesor o director de un programa de educación inclusiva'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    }
  ],
  roles: {
    school_psych: {
      emoji: '🏫',
      name: 'Psicólogo Escolar',
      desc: 'Apoyas la salud mental y el aprendizaje de los estudiantes en las escuelas — siendo puente entre la psicología, la educación y las familias',
      detail: 'Trabajas en una o varias escuelas: evaluando a estudiantes con dificultades de aprendizaje, apoyando a quienes viven dificultades emocionales, asesorando a los docentes sobre estrategias en el aula y trabajando con las familias. Diriges programas grupales sobre resiliencia y habilidades sociales, y eres frecuentemente quien detecta lo que realmente ocurre cuando un estudiante empieza a rezagarse o a tener problemas de conducta.',
      start: [
        'Estudia una licenciatura en psicología y completa un posgrado en psicología educativa',
        'Gana experiencia trabajando con niños — voluntariado, roles de asistente educativo o trabajo con jóvenes',
        'Aprende las herramientas de evaluación más comunes: WISC, BASC, WIAT — ese es el lenguaje de la profesión',
        'Lee "Educational Psychology" de Anita Woolfolk — un texto de base completo y accesible'
      ]
    },
    couns_psych: {
      emoji: '💬',
      name: 'Psicólogo Consejero',
      desc: 'Brindas apoyo terapéutico estructurado — ayudando a las personas a trabajar sus dificultades emocionales y psicológicas',
      detail: 'Trabajas con individuos, parejas o grupos usando enfoques terapéuticos basados en evidencia: TCC, terapia centrada en la persona, métodos psicodinámicos o ACT. Tus clientes pueden ser adolescentes con ansiedad por los exámenes, adultos procesando un duelo o profesionales con burnout. Creas un espacio seguro y consistente para el cambio. Este trabajo es exigente, profundamente humano y genuinamente transformador.',
      start: [
        'Completa una licenciatura en consejería o psicología, luego una maestría o doctorado en psicología consejera',
        'Inicia tu propia terapia personal — la mayoría de los programas de formación la requieren y te hará mejor terapeuta',
        'Fórmate en TCC — es el enfoque terapéutico más basado en evidencia y ampliamente utilizado',
        'Lee "El proceso de convertirse en persona" de Carl Rogers — un clásico que define qué significa la relación terapéutica'
      ]
    },
    dev_psych: {
      emoji: '🧒',
      name: 'Psicólogo del Desarrollo',
      desc: 'Estudias cómo crecen y se desarrollan los niños — investigando cognición, emoción, lenguaje y comprensión social',
      detail: 'Realizas investigaciones sobre cómo se desarrollan los niños desde la infancia hasta la adolescencia. Diseñas estudios, recopilas datos con métodos de observación y tareas estandarizadas, analizas resultados y publicas hallazgos. Tu trabajo informa políticas de educación temprana, apoyo a la crianza y bienestar infantil. Puedes trabajar en una universidad, instituto de investigación o entidad gubernamental.',
      start: [
        'Cursa una licenciatura en psicología con un fuerte componente de métodos de investigación — la estadística y el diseño de investigación son esenciales',
        'Lee a Piaget, Vygotsky y Bronfenbrenner — los tres pilares de la teoría del desarrollo',
        'Obtén experiencia práctica: realiza un estudio con niños, aunque sea pequeño, desde el inicio de tu formación',
        'Postula a un doctorado — la psicología del desarrollo es principalmente una carrera de investigación académica'
      ]
    },
    spec_ed: {
      emoji: '🤝',
      name: 'Especialista en Necesidades Educativas Especiales',
      desc: 'Apoyas a niños con discapacidades y necesidades educativas adicionales — haciendo que la educación sea genuinamente inclusiva',
      detail: 'Trabajas con niños que tienen autismo, discapacidades intelectuales, deficiencias sensoriales o necesidades complejas de comunicación. Diseñas planes educativos individualizados (PEI), capacitas a los docentes en estrategias basadas en evidencia, te coordinas con las familias y otros profesionales, y abogás por el derecho de cada niño a aprender. Usas enfoques como ABA, PECS, integración sensorial y CAA (comunicación aumentativa y alternativa).',
      start: [
        'Estudia una licenciatura en educación especial, psicología educativa o terapia de lenguaje y comunicación',
        'Fórmate en ABA (Análisis Aplicado del Comportamiento) — el enfoque más basado en evidencia para el autismo',
        'Aprende el sistema PECS y las herramientas de CAA — el apoyo a la comunicación es central en el trabajo con NEE',
        'Lee "Únicamente humano" de Barry Prizant — una guía compasiva y práctica para entender el autismo'
      ]
    }
  },
  ui: { l2back: '← Volver a educación', title: 'Psicología educativa: ¿qué especialización?' }
};

L2.edu_psych.pt = {
  questions: [
    {
      t: 'O que mais te atrai na psicologia educacional?',
      o: [
        'Trabalhar em escolas — apoiar a saúde mental dos alunos e ajudar os professores a entender cada criança',
        'Aconselhamento e psicoterapia — oferecer apoio estruturado a pessoas que atravessam dificuldades',
        'Desenvolvimento infantil — estudar como as crianças crescem cognitiva, emocional e socialmente',
        'Educação especial — apoiar crianças com deficiências ou necessidades educacionais adicionais'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: 'Qual ferramenta ou método você mais gostaria de dominar?',
      o: [
        'Avaliações psicológicas (testes de QI, escalas de ansiedade) — diagnosticar dificuldades com instrumentos padronizados',
        'TCC (Terapia Cognitivo-Comportamental) — terapia estruturada e baseada em evidências para ansiedade e depressão',
        'Métodos de observação do desenvolvimento — tarefas de Piaget, ZDP de Vygotsky, frameworks da teoria do apego',
        'Análise do Comportamento Aplicada (ABA) — desenvolver habilidades em crianças com autismo por meio de reforço estruturado'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: 'Qual resultado do seu trabalho é mais importante para você?',
      o: [
        'Um aluno que tinha dificuldades emocionais agora está engajado, estável e prosperando na sala de aula',
        'Um cliente conclui seu processo terapêutico e relata uma mudança genuína e duradoura em como lida com a vida',
        'Minha pesquisa contribui com novas evidências sobre como as crianças aprendem — publicada e citada por outros',
        'Uma criança com necessidades adicionais alcança um marco que os professores diziam ser impossível'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: 'Onde você se sente mais confortável para trabalhar?',
      o: [
        'Em escolas — observando salas de aula, conversando com professores e pais, conduzindo grupos',
        'Em uma sala de atendimento — sessões privadas, seguras e consistentes com clientes individuais',
        'Em laboratório de pesquisa ou universidade — conduzindo estudos, codificando dados, escrevendo artigos',
        'Em ambientes especializados — escolas especiais, centros de reabilitação, programas de intervenção precoce'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: 'Qual tema te interessa mais profissionalmente?',
      o: [
        'Recusa escolar, bullying, TDAH e desregulação emocional em sala de aula',
        'Transtornos de ansiedade, depressão, trauma e dificuldades relacionais em adultos e adolescentes',
        'Como o apego, o brincar e a linguagem moldam o desenvolvimento cognitivo e emocional na primeira infância',
        'Transtorno do espectro autista, deficiência intelectual, processamento sensorial e dificuldades de comunicação'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    },
    {
      t: 'Onde você se vê daqui a 10 anos?',
      o: [
        'Psicólogo educacional líder de uma instituição local ou head de bem-estar em uma grande escola',
        'Psicólogo conselheiro habilitado em consultório particular ou em um cargo sênior em serviços de saúde',
        'Pesquisador em psicologia do desenvolvimento com doutorado, publicando em revistas de ponta e liderando um laboratório',
        'Especialista em NEE, professor assessor ou diretor de um programa de educação inclusiva'
      ],
      s: [{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]
    }
  ],
  roles: {
    school_psych: {
      emoji: '🏫',
      name: 'Psicólogo Escolar',
      desc: 'Você apoia a saúde mental e o aprendizado dos alunos nas escolas — fazendo a ponte entre psicologia, educação e famílias',
      detail: 'Você trabalha em uma ou mais escolas: avaliando alunos com dificuldades de aprendizagem, apoiando aqueles que vivem sofrimento emocional, orientando professores sobre estratégias em sala de aula e trabalhando com as famílias. Conduz programas em grupo sobre resiliência e habilidades sociais, e frequentemente é quem percebe o que realmente está acontecendo quando um aluno começa a ter queda no desempenho ou problemas de comportamento.',
      start: [
        'Curse uma graduação em psicologia e complete uma pós-graduação em psicologia educacional',
        'Ganhe experiência trabalhando com crianças — voluntariado, cargos de assistente de ensino ou trabalho com jovens',
        'Aprenda as ferramentas de avaliação mais comuns: WISC, BASC, WIAT — essa é a linguagem da profissão',
        'Leia "Educational Psychology" de Anita Woolfolk — um texto de base abrangente e acessível'
      ]
    },
    couns_psych: {
      emoji: '💬',
      name: 'Psicólogo Conselheiro',
      desc: 'Você oferece apoio terapêutico estruturado — ajudando pessoas a superar dificuldades emocionais e psicológicas',
      detail: 'Você trabalha com indivíduos, casais ou grupos usando abordagens terapêuticas baseadas em evidências: TCC, terapia centrada na pessoa, métodos psicodinâmicos ou ACT. Seus clientes podem ser adolescentes com ansiedade de provas, adultos processando um luto ou profissionais com burnout. Você cria um espaço seguro e consistente para a mudança. O trabalho é desafiador, profundamente humano e genuinamente transformador.',
      start: [
        'Conclua uma graduação reconhecida em aconselhamento ou psicologia, depois um mestrado ou doutorado em psicologia do aconselhamento',
        'Inicie sua própria terapia pessoal — a maioria dos programas de formação exige isso, e vai fazer de você um terapeuta melhor',
        'Forme-se em TCC — é a abordagem terapêutica mais baseada em evidências e amplamente utilizada',
        'Leia "Tornar-se Pessoa" de Carl Rogers — um clássico que define o significado da relação terapêutica'
      ]
    },
    dev_psych: {
      emoji: '🧒',
      name: 'Psicólogo do Desenvolvimento',
      desc: 'Você estuda como as crianças crescem e se desenvolvem — pesquisando cognição, emoção, linguagem e compreensão social',
      detail: 'Você realiza pesquisas sobre como as crianças se desenvolvem desde a infância até a adolescência. Projeta estudos, coleta dados com métodos de observação e tarefas padronizadas, analisa resultados e publica descobertas. Seu trabalho informa políticas de educação na primeira infância, suporte à parentalidade e proteção à infância. Pode trabalhar em uma universidade, instituto de pesquisa ou órgão governamental.',
      start: [
        'Curse uma graduação em psicologia com forte componente de métodos de pesquisa — estatística e design de pesquisa são essenciais',
        'Leia Piaget, Vygotsky e Bronfenbrenner — os três pilares da teoria do desenvolvimento',
        'Obtenha experiência prática: conduza um estudo com crianças, mesmo que pequeno, cedo na sua formação',
        'Candidature-se a um doutorado — a psicologia do desenvolvimento é principalmente uma carreira de pesquisa acadêmica'
      ]
    },
    spec_ed: {
      emoji: '🤝',
      name: 'Especialista em Necessidades Educacionais Especiais',
      desc: 'Você apoia crianças com deficiências e necessidades educacionais adicionais — tornando a educação genuinamente inclusiva',
      detail: 'Você trabalha com crianças que têm autismo, deficiências intelectuais, deficiências sensoriais ou necessidades complexas de comunicação. Elabora planos educacionais individualizados (PEI), capacita professores em estratégias baseadas em evidências, se articula com famílias e outros profissionais, e defende o direito de cada criança a aprender. Usa abordagens como ABA, PECS, integração sensorial e CAA (comunicação aumentativa e alternativa).',
      start: [
        'Curse uma graduação em educação especial, psicologia educacional ou fonoaudiologia',
        'Forme-se em ABA (Análise do Comportamento Aplicada) — a abordagem mais baseada em evidências para o autismo',
        'Aprenda o sistema PECS e as ferramentas de CAA — o suporte à comunicação é central no trabalho com NEE',
        'Leia "Uniquely Human" de Barry Prizant — um guia compassivo e prático para entender o autismo'
      ]
    }
  },
  ui: { l2back: '← Voltar à educação', title: 'Psicologia educacional: qual especialização?' }
};

L2.edu_psych.ar = {
  questions: [
    { t:"ما الجانب الذي يستهويك أكثر في علم النفس التربوي؟", o:["العمل مع الطلاب يومياً في المدرسة — التقييم والإرشاد والدعم","العلاج المعرفي السلوكي وجلسات الإرشاد الفردية والجماعية","دراسة مراحل النمو والتعلم لدى الأطفال والمراهقين علمياً","التدريس والدعم المتخصص للأطفال ذوي الاحتياجات الخاصة"], s:[{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}] },
    { t:"أيّ أداة تودّ إتقانها؟", o:["اختبارات التشخيص النفسي والسوسيومترية وتقنيات الملاحظة","المقاييس الإكلينيكية وبروتوكولات CBT وأدوات تقييم القلق","SPSS ومقاييس النمو وأدوات البحث في علم نفس التطور","أدوات تعديل السلوك والتواصل المعزز AAC والتدريس المتمايز"], s:[{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}] },
    { t:"أيّ نتيجة تُشعرك بالرضا أكثر؟", o:["طالب يتجاوز اضطراب القلق ويعود للمشاركة بثقة","مريض يُحقق أهدافه العلاجية ويتحسن مزاجه وأداؤه","نشر بحث يُسهم في فهم مرحلة نمو معينة","تلميذ ذو احتياجات خاصة يُحقق هدفاً كان يبدو مستحيلاً"], s:[{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}] },
    { t:"أين تُفضّل العمل؟", o:["في المدرسة — مع الطلاب والمعلمين وأولياء الأمور يومياً","في عيادة أو مركز صحة نفسية — جلسات فردية","في جامعة أو مركز بحثي — التدريس والبحث والنشر","في فصل أو مركز تأهيل — مع الأطفال ذوي الاحتياجات"], s:[{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}] },
    { t:"أيّ مهمة أقرب إليك؟", o:["إجراء تقييم نفسي لطالب يواجه صعوبات دراسية","مساعدة شخص على التعامل مع صدمة عبر جلسات علاجية","إجراء دراسة علمية عن تأثير أسلوب التعلم على الإنجاز","تصميم برنامج تعليمي فردي IEP لطفل مصاب بطيف التوحد"], s:[{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}] },
    { t:"أين ترى نفسك بعد عشر سنوات؟", o:["رئيس قسم الإرشاد النفسي في منطقة تعليمية","معالج نفسي معتمد يدير عيادة خاصة","أستاذ جامعي وباحث في علم نفس التطور أو التعليم","معلم متخصص ذو سمعة في رعاية ذوي الاحتياجات الخاصة"], s:[{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}] },
  ],
  roles: {
    school_psych:{ emoji:"🏫", name:"عالم نفس مدرسي", desc:"تُجري التقييمات النفسية وتدعم الطلاب في البيئة المدرسية يومياً", detail:"تعمل في المدرسة: تُجري التقييمات وتُنفّذ برامج الدعم وتستشير المعلمين وتُرشد أولياء الأمور. هدفك أن تجعل المدرسة مكاناً آمناً لكل طالب.", start:["ادرس علم النفس التربوي والتشخيصي","أكمل تدريباً في مدرسة تحت إشراف أخصائي معتمد","تعلّم أدوات التشخيص: مقاييس الذكاء والقلق والسوسيومترية","احصل على ترخيص مزاولة المهنة"] },
    couns_psych:{ emoji:"💬", name:"معالج نفسي", desc:"تُجري جلسات العلاج الفردي والجماعي — تساعد الناس على تجاوز أزماتهم", detail:"تعمل في عيادة أو ممارسة خاصة. تُطبّق CBT وACT وEMDR. كل جلسة هي رحلة تعاون للمساعدة على التغيير.", start:["تدرّب على CBT — الأكثر دعماً بالأدلة العلمية","تعلّم مناهج علاجية: ACT وDBT","احصل على الترخيص المعتمد","ابدأ بإشراف سريري تحت مرشد معتمد"] },
    dev_psych:{ emoji:"🧒", name:"عالم نفس نمائي", desc:"تدرس مراحل النمو الإنساني وتُنتج معرفة تُحسّن التعليم والتربية", detail:"تعمل في الجامعة أو مراكز البحث. أبحاثك تُفيد المعلمين وأولياء الأمور وصانعي السياسات.", start:["ادرس نظريات النمو: بياجيه وفيغوتسكي وإريكسون","تعلّم مناهج البحث الطولي","احصل على الماجستير أو الدكتوراه","تدرّب على SPSS أو R"] },
    spec_ed:{ emoji:"🤝", name:"معلم تربية خاصة", desc:"تُدرّس وتدعم الأطفال ذوي الاحتياجات الخاصة وتُصمّم تجارب تعلم شاملة", detail:"تعمل مع الأطفال ذوي الإعاقات التعلمية والتوحد. تضع برامج IEP وتُكيّف المناهج.", start:["ادرس التربية الخاصة وطرق التدريس المتمايز","تعلّم AAC وتقنيات ABA","احصل على شهادة التربية الخاصة","تدرّب في مدرسة للاحتياجات الخاصة"] },
  },
  ui:{ l2back:"← العودة إلى التعليم", title:"علم النفس التربوي: ما التخصص؟" }
};

L2.edu_psych.he = {
  questions: [
    { t:"מה הצד שהכי מעניין אותך בפסיכולוגיה חינוכית?", o:["עבודה עם תלמידים בבית הספר מדי יום — הערכה, ייעוץ ותמיכה","טיפול קוגניטיבי-התנהגותי וייעוץ נפשי לפרטים ולקבוצות","לימוד שלבי ההתפתחות אצל ילדים ומתבגרים באופן מדעי","הוראה ותמיכה מתמחה בילדים עם צרכים מיוחדים"], s:[{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}] },
    { t:"איזה כלי הכי תרצה לשלוט בו?", o:["מבחני אבחון פסיכולוגי, סוציומטריה וטכניקות תצפית","מדדים קליניים, פרוטוקולי CBT וכלי הערכת חרדה","SPSS, מדדי התפתחות וכלי מחקר פסיכולוגי","כלי שינוי התנהגות, AAC וטכניקות הוראה דיפרנציאלית"], s:[{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}] },
    { t:"איזה תוצאה הכי ממלאת אותך סיפוק?", o:["תלמיד שמתגבר על חרדה וחוזר להשתתף בביטחון","מטופל שמשיג מטרות טיפוליות ומשתפר","פרסום מחקר שתורם להבנת שלב התפתחותי","תלמיד עם צרכים מיוחדים שמשיג יעד שנראה בלתי אפשרי"], s:[{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}] },
    { t:"איפה אתה מעדיף לעבוד?", o:["בבית הספר — נוכחות יומיומית עם תלמידים, מורים והורים","בקליניקה — מפגשים פרטניים וייעוץ","באוניברסיטה — הוראה, מחקר ופרסום","בכיתה לחינוך מיוחד — עם ילדים עם צרכים"], s:[{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}] },
    { t:"איזה משימה הכי קרובה ללב שלך?", o:["ביצוע הערכה פסיכולוגית לתלמיד עם קשיים","עזרה לאדם להתמודד עם טראומה דרך טיפול","ביצוע מחקר על השפעת סגנון הלמידה על הישגים","עיצוב תוכנית IEP לילד עם אוטיזם"], s:[{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}] },
    { t:"איפה אתה רואה את עצמך עוד 10 שנים?", o:["ראש מחלקת ייעוץ בגוש חינוך","פסיכולוג מטפל מוסמך המנהל קליניקה פרטית","פרופסור ומחקר ראשי בפסיכולוגיה חינוכית","מורה מתמחה בחינוך מיוחד עם מוניטין בינלאומי"], s:[{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}] },
  ],
  roles: {
    school_psych:{ emoji:"🏫", name:"פסיכולוג בית ספרי", desc:"אתה מבצע הערכות פסיכולוגיות ותומך בתלמידים בסביבה הבית-ספרית", detail:"אתה עובד מדי יום בבית הספר: מבצע הערכות, מייעץ למורים ומדריך הורים. המטרה — שבית הספר יהיה בטוח לכל תלמיד.", start:["למד פסיכולוגיה חינוכית ואבחונית","השלם התמחות בבית ספר תחת פסיכולוג מוסמך","למד כלי אבחון: מדדי אינטליגנציה וחרדה","קבל רישיון עיסוק בפסיכולוגיה"] },
    couns_psych:{ emoji:"💬", name:"פסיכולוג מטפל", desc:"אתה מנהל שיחות טיפוליות ועוזר לאנשים להתגבר על משברים", detail:"אתה עובד בקליניקה ומיישם CBT, ACT ו-EMDR.", start:["התמחה ב-CBT","למד ACT, DBT וטיפול ממוקד-אדם","קבל רישיון מהאגודה המקצועית","התחל בהדרכה קלינית תחת מדריך מוסמך"] },
    dev_psych:{ emoji:"🧒", name:"פסיכולוג התפתחותי", desc:"אתה חוקר שלבי ההתפתחות ומייצר ידע שמשפר חינוך", detail:"אתה עובד באוניברסיטה: מעצב מחקרים, אוסף נתונים ומפרסם ממצאים.", start:["למד פיאז׳ה, ויגוצקי ואריקסון","למד מתודולוגיות מחקר אורכי","קבל תואר שני או שלישי","התמחה ב-SPSS או R"] },
    spec_ed:{ emoji:"🤝", name:"מורה לחינוך מיוחד", desc:"אתה מלמד ותומך בילדים עם צרכים מיוחדים ומעצב חוויות למידה כוללניות", detail:"אתה עובד עם ילדים עם לקויות למידה ואוטיזם ומכין תוכניות IEP.", start:["למד חינוך מיוחד ושיטות הוראה דיפרנציאלית","למד AAC ו-ABA","קבל הסמכה בחינוך מיוחד","התמחה בבית ספר לחינוך מיוחד"] },
  },
  ui:{ l2back:"← חזרה לחינוך", title:"פסיכולוגיה חינוכית: איזה התמחות?" }
};

L2.edu_psych.zh = {
  questions: [
    {t:'教育心理与特殊教育中什么最吸引你？', o:['学校心理——在学校为有困扰的学生提供支持','发展咨询——帮助不同发展阶段的儿童和青少年','发展心理研究——研究儿童认知和情感发展规律','特殊教育——支持有特殊需求的孩子实现最大潜能'], s:[{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]},
    {t:'你最想在哪种环境工作？', o:['中小学','家庭咨询中心或青少年服务机构','大学教育学院或儿童发展研究中心','特殊教育学校或融合教育资源教室'], s:[{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]},
    {t:'什么成果最让你有成就感？', o:['一个被欺凌或抑郁的学生重新找到了上学的动力','你的辅导让一个亲子关系紧张的家庭重归温暖','你的研究为早期干预方案提供了科学依据','一个有自闭症的孩子在你的支持下成功融入普通班级'], s:[{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]},
    {t:'你更喜欢哪种工作？', o:['与学生一对一面谈，设计危机干预方案','用游戏治疗和家庭咨询支持儿童情绪发展','设计测量儿童认知发展的实验，发表研究','为有特殊需求的学生制定个别教育计划（IEP）'], s:[{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]},
    {t:'你会选择哪个项目？', o:['在学校建立心理健康筛查和早期干预体系','为离异家庭的儿童开展亲子关系修复小组','研究电子设备使用对儿童注意力的影响','为一个班级的ADHD学生制定个性化支持方案'], s:[{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]},
    {t:'10年后你在哪里？', o:['知名学校的心理健康中心负责人','儿童心理发展专科机构的资深咨询师','大学教育心理学系的教授','特殊教育研究院的学科专家'], s:[{school_psych:3},{couns_psych:3},{dev_psych:3},{spec_ed:3}]}
  ],
  roles: {
    school_psych: {emoji:'🏫', name:'学校心理工作者', desc:'在校园中识别有心理健康需求的学生，及时提供支持和干预', detail:'你是学生在学校的心理健康守护者。你进行心理评估，处理危机事件，开展心理健康教育，并与教师、家长合作，为学生创造支持性的环境。', start:['学习学校心理学的核心工作——评估、咨询、干预、预防','了解儿童和青少年常见心理问题——焦虑、抑郁、霸凌','掌握危机干预基本流程','考取心理咨询师资质，了解学校心理教师的岗位要求']},
    couns_psych: {emoji:'💬', name:'儿童与青少年咨询师', desc:'用专业的心理辅导帮助孩子和家庭走过发展中的困难时期', detail:'你用游戏、绘画、沙盘等适合儿童的方式建立咨询关系，支持他们表达情绪，解决发展中的心理困扰。你同时与家长合作，改善整个家庭系统。', start:['系统学习儿童心理咨询理论——游戏治疗、家庭治疗','了解依恋理论——儿童早期情感发展的核心','学习沙盘游戏治疗、绘画治疗等非语言技术','在儿童服务机构积累实习督导小时数']},
    dev_psych: {emoji:'🔬', name:'发展心理学研究员', desc:'科学研究儿童和青少年的认知、情感和社会性发展规律', detail:'你研究人从出生到青少年期的心理发展。你的研究回答"为什么有些孩子学习更快""早期经历如何影响大脑发育"等重要问题，并为教育政策提供科学依据。', start:['深入学习发展心理学经典理论——皮亚杰、维果茨基、埃里克森','掌握儿童研究方法——观察法、实验法、纵向追踪','学习统计分析——R或SPSS','进入发展心理学实验室，参与真实的研究课题']},
    spec_ed: {emoji:'🌟', name:'特殊教育工作者', desc:'用专业知识和无限耐心，帮助有特殊需求的孩子发挥最大潜能', detail:'你相信每个孩子都有学习的能力。你为自闭症、智力障碍、学习障碍、ADHD等不同类型的孩子制定个别教育计划，运用专业的教学策略，创造融合的学习环境。', start:['学习特殊教育的主要类别和教学策略','了解个别教育计划（IEP）的设计和实施','掌握应用行为分析（ABA）基本原理','考取特殊教育教师资格证，争取在特校或资源教室实习']}
  },
  ui: {l2back:'← 返回教育心理', title:'教育心理与特殊教育：选择你的专业方向'}
};
