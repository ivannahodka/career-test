'use strict';
/* ── L2: Социальный работник ─────────────────────────────────────────────────
   4 roles: family_sw 👨‍👩‍👧 | child_protect 🛡️ | ngo_coord 🌍 | rehab_spec ♿
──────────────────────────────────────────────────────────────────────────── */
L2.social_worker.ru = {
  questions: [
    {
      t: 'С какой категорией людей тебе важнее всего работать?',
      o: [
        'С семьями в кризисе — развод, бедность, насилие, зависимость — помогать найти выход',
        'С детьми в опасной ситуации — защищать их права и находить им безопасный дом',
        'С любыми уязвимыми группами через НКО — беженцы, бездомные, люди с зависимостями',
        'С людьми с инвалидностью или тяжёлыми заболеваниями — реабилитация и интеграция'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: 'Какая задача тебе ближе?',
      o: [
        'Оценить ситуацию в семье, оформить льготы и координировать помощь от разных служб',
        'Составить акт обследования, инициировать ограничение родительских прав, найти опекуна',
        'Организовать программу помощи, привлечь волонтёров, написать грант для НКО',
        'Разработать индивидуальную программу реабилитации и сопровождать её выполнение'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: 'Что для тебя важнее всего в работе?',
      o: [
        'Видеть, как семья постепенно выходит из кризиса и становится устойчивее',
        'Знать, что ребёнок в безопасности и его права защищены',
        'Менять систему помощи — строить программы, которые помогут сотням людей',
        'Сопровождать человека шаг за шагом к максимальной независимости и самостоятельности'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: 'Где ты хочешь работать?',
      o: [
        'Государственная социальная служба, центр помощи семье или МФЦ',
        'Органы опеки и попечительства, комиссия по делам несовершеннолетних',
        'НКО, фонд, международная организация (UNICEF, УВКБ ООН, Красный Крест)',
        'Реабилитационный центр, психоневрологический интернат, паллиативная служба'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: 'Какой инструмент или навык тебе важнее?',
      o: [
        'Кейс-менеджмент, нормативная база (ФЗ-442), работа с документами и базами данных',
        'Знание семейного кодекса, ювенальное право, методы оценки безопасности ребёнка',
        'Фандрайзинг, управление проектами, работа с волонтёрами, отчётность для доноров',
        'Нейрореабилитация, эрготерапия, программы возврата к труду, ассистивные технологии'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: 'Как выглядит твой путь через 10 лет?',
      o: [
        'Руководитель отдела социальной защиты или методист по работе с семьями в трудной ситуации',
        'Руководитель службы опеки или эксперт по защите прав детей в органах власти',
        'Директор НКО или программный офицер международной организации по социальным проектам',
        'Ведущий специалист реабилитационного центра или разработчик программ для людей с ОВЗ'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    }
  ],
  roles: {
    family_sw: {
      emoji: '👨‍👩‍👧',
      name: 'Специалист по работе с семьёй',
      desc: 'Помогаешь семьям в кризисе выбраться из трудной ситуации через комплексную социальную поддержку',
      detail: 'Ты работаешь с семьями, переживающими бедность, насилие, развод, потерю жилья или зависимость. Оцениваешь ситуацию, помогаешь оформить льготы, координируешь помощь от разных служб и сопровождаешь семью на пути к стабильности.',
      start: ['Изучи ФЗ-442 и другую нормативную базу социального обслуживания', 'Освой кейс-менеджмент — метод комплексного сопровождения семьи', 'Пройди волонтёрство в кризисном центре или фонде помощи семьям', 'Изучи методы оценки нуждаемости и разработки индивидуальной программы'],
      startUrls: ['https://www.nasw.org', 'https://www.unicef.org/social-policy', 'https://фондсемья.рф', 'https://www.coursera.org/learn/social-welfare-policy']
    },
    child_protect: {
      emoji: '🛡️',
      name: 'Специалист по защите прав детей',
      desc: 'Защищаешь детей от насилия и пренебрежения — работаешь с органами опеки и кризисными семьями',
      detail: 'Ты на передовой защиты детства. Выявляешь случаи жестокого обращения, проводишь оценку безопасности ребёнка, работаешь с органами опеки, судами и полицией. Это тяжёлая, но невероятно важная работа — ты буквально спасаешь жизни.',
      start: ['Изучи Семейный кодекс РФ, ФЗ-120 и ФЗ-124 о правах детей', 'Освой методы оценки безопасности ребёнка и риска жестокого обращения', 'Пройди обучение по trauma-informed подходу в работе с детьми', 'Изучи работу органов опеки и судебные процедуры по делам о детях'],
      startUrls: ['https://www.unicef.ru', 'https://fondpravoslav.ru', 'https://www.childwelfare.gov', 'https://www.coursera.org/learn/child-protection']
    },
    ngo_coord: {
      emoji: '🌍',
      name: 'Координатор НКО / Программный менеджер',
      desc: 'Организуешь социальные программы в некоммерческом секторе — помогаешь уязвимым группам через проекты',
      detail: 'Ты строишь и запускаешь программы помощи в НКО или международной организации. Привлекаешь гранты, управляешь командой волонтёров, выстраиваешь партнёрства и отчитываешься перед донорами. Твоя работа — масштабировать помощь через системный подход.',
      start: ['Изучи основы управления проектами (PMD Pro для НКО)', 'Освой фандрайзинг: как писать заявки на гранты и работать с донорами', 'Пройди волонтёрство в крупном НКО — это лучший старт в секторе', 'Изучи M&E (мониторинг и оценку) — ключевой навык для грантовой работы'],
      startUrls: ['https://www.unhcr.org', 'https://www.icrc.org', 'https://www.ngoconnect.net', 'https://www.coursera.org/learn/ngo-management']
    },
    rehab_spec: {
      emoji: '♿',
      name: 'Специалист по реабилитации',
      desc: 'Сопровождаешь людей с инвалидностью или тяжёлыми заболеваниями на пути к максимальной самостоятельности',
      detail: 'Ты помогаешь людям после инсульта, травмы, с инвалидностью или тяжёлым заболеванием вернуться к активной жизни. Разрабатываешь индивидуальные программы реабилитации, работаешь в мультидисциплинарной команде с врачами, логопедами и эрготерапевтами.',
      start: ['Изучи основы медико-социальной экспертизы и законодательство об инвалидности', 'Освой принципы эрготерапии и нейрореабилитации', 'Изучи ассистивные технологии и адаптацию среды для людей с ОВЗ', 'Пройди стажировку в реабилитационном центре или ПНИ'],
      startUrls: ['https://www.aota.org', 'https://www.worldpt.org', 'https://able-reabi.ru', 'https://www.coursera.org/learn/disability-inclusion']
    }
  },
  ui: {
    tag: 'Социальный работник',
    title: 'Какой социальный работник ты?',
    subtitle: '6 вопросов — найди свою нишу в социальной работе',
    prog: 'Вопрос %d из 6',
    hint: 'Выбери один вариант',
    back: '← Назад', next: 'Далее →', finish: 'Показать результат',
    winBadge: 'Твоя ниша в социальной работе',
    resTag: 'Результат', resSub: 'Твой путь в социальной сфере',
    lblStart: 'С чего начать:', l2back: '← Назад к результатам'
  }
};


L2.social_worker.en = {
  questions: [
    {
      t: 'Which area of social work appeals to you most?',
      o: [
        'Supporting families — helping parents in crisis, preventing family breakdown, keeping children safe at home',
        'Child protection — investigating abuse and neglect, making decisions that protect vulnerable children',
        'NGO and international work — managing humanitarian projects, fundraising, coordinating volunteers',
        'Rehabilitation — helping people with disabilities, addiction, or mental illness rebuild independent lives'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: 'What kind of work environment suits you best?',
      o: [
        'Home visits and community settings — meeting families where they live and seeing their reality directly',
        'Statutory services — working within a legal framework with clear powers and responsibilities',
        'NGO or international organisation — projects, partnerships, grant reports, and field missions',
        'Rehabilitation centres, day services, or supported housing — structured programmes for recovery'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: 'What result of your work matters most to you?',
      o: [
        'A family that was on the verge of breaking apart is now stable, connected, and coping',
        'A child who was at risk is now safe, and the investigation was thorough and fair',
        'A project reached 5,000 people in need and the grant report was approved for renewal',
        'A person who was told they would never live independently is now managing their own flat'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: 'How do you prefer to work?',
      o: [
        'Building long-term relationships with the same families — trust develops over months and years',
        'Making high-stakes decisions under pressure — I can hold complexity and act when needed',
        'Project management and coordination — planning, budgets, reporting, and managing partnerships',
        'Running groups and structured programmes — working with several clients in a therapeutic setting'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: 'Which challenge interests you most?',
      o: [
        'Domestic violence, poverty, parental mental illness — complex family systems under multiple pressures',
        'Child abuse and neglect — the hardest work, but the stakes could not be higher',
        'Refugee crises, poverty, inequality — systemic issues that require collective action at scale',
        'Addiction, acquired disability, psychiatric conditions — the long road back to independence'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: 'Where do you see yourself in 10 years?',
      o: [
        'Senior family support practitioner, practice educator, or team manager in children\'s services',
        'Principal social worker, safeguarding lead, or service manager in a local authority',
        'Country director or programme lead for an international humanitarian organisation',
        'Head of rehabilitation services or director of a specialist support charity'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    }
  ],
  roles: {
    family_sw: {
      emoji: '👨‍👩‍👧',
      name: 'Family Support Social Worker',
      desc: 'You work with families under pressure — preventing breakdown, building resilience, and keeping children safe at home',
      detail: 'You carry a caseload of families experiencing crisis: domestic abuse, poverty, parental mental illness, substance misuse. You visit homes, build trust over time, coordinate support from other agencies, and help parents develop the skills and resources to care safely for their children. Your goal is always to keep families together where it is safe to do so.',
      start: [
        'Study for a degree in social work — it is the required qualification for statutory roles in most countries',
        'Learn trauma-informed practice — understanding how adverse childhood experiences shape behaviour',
        'Read "The Body Keeps the Score" by Bessel van der Kolk — essential reading on trauma',
        'Volunteer with a family support charity to build experience before qualifying'
      ]
    },
    child_protect: {
      emoji: '🛡️',
      name: 'Child Protection Social Worker',
      desc: 'You investigate abuse and neglect — making decisions that keep vulnerable children safe',
      detail: 'This is the most demanding and responsible area of social work. You receive referrals about children at risk, conduct investigations, make recommendations to courts, and carry cases through the legal system. You must be able to hold complexity, manage risk, and make difficult decisions under pressure — while maintaining the child\'s voice at the centre of everything.',
      start: [
        'Qualify as a social worker, then apply for a child protection post — most require at least one year of post-qualifying experience',
        'Learn the legal framework thoroughly — Children Act, Working Together guidance, court processes',
        'Study risk assessment frameworks: Signs of Safety, DASH risk assessment for domestic abuse',
        'Get regular supervision — child protection work requires robust emotional and professional support'
      ]
    },
    ngo_coord: {
      emoji: '🌍',
      name: 'NGO Programme Coordinator',
      desc: 'You manage social projects in the non-profit sector — from fundraising to field delivery and impact reporting',
      detail: 'You work in the third sector or international organisations: designing projects, writing grant applications, managing budgets, coordinating volunteers and partner organisations, and reporting impact to donors. You might be working with refugees, homeless people, survivors of violence, or people living in poverty. You are the engine that keeps the programme running.',
      start: [
        'Study social work, international development, or public administration — all are relevant entry routes',
        'Learn project management: PCM (Project Cycle Management) and LogFrame are standard in the sector',
        'Build grant writing skills — practice by writing a small application for a local community fund',
        'Gain field experience: volunteer abroad or intern with an NGO before applying for coordinator roles'
      ]
    },
    rehab_spec: {
      emoji: '♿',
      name: 'Rehabilitation Specialist',
      desc: 'You support people with disabilities or complex needs to regain independence and rebuild their lives',
      detail: 'You work with people who have acquired disabilities, mental health conditions, brain injuries, or substance misuse histories. You assess their needs, develop rehabilitation plans, run structured groups, liaise with medical and psychological teams, and support the person to achieve their own goals — whether that is returning to work, living independently, or reconnecting with family.',
      start: [
        'Study social work, occupational therapy, or psychology — all are valid routes into rehabilitation',
        'Learn motivational interviewing (MI) — the evidence-based approach to supporting behaviour change',
        'Get familiar with the ICF (International Classification of Functioning) — the framework for disability assessment',
        'Read "Recovery: A Guide for Mental Health Practitioners" — foundation text for recovery-oriented practice'
      ]
    }
  },
  ui: { l2back: '← Back to education', title: 'Social Work: which specialisation?' }
};



L2.social_worker.de = {
  questions: [
    {
      t: 'Welcher Bereich der Sozialen Arbeit interessiert dich am meisten?',
      o: [
        'Familienunterstützung — Eltern in Krisen helfen, Familienzerbruch verhindern, Kinder sicher zuhause halten',
        'Kinderschutz — Misshandlung und Vernachlässigung aufklären und Entscheidungen zum Schutz gefährdeter Kinder treffen',
        'NGO und internationale Arbeit — humanitäre Projekte leiten, Förderanträge schreiben, Freiwillige koordinieren',
        'Rehabilitation — Menschen mit Behinderungen, Sucht oder psychischen Erkrankungen beim Aufbau eines selbstständigen Lebens unterstützen'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: 'Welches Arbeitsumfeld passt am besten zu dir?',
      o: [
        'Hausbesuche und Gemeinwesenarbeit — Familien dort aufsuchen, wo sie leben, und ihre Realität direkt erleben',
        'Staatliche Dienste — innerhalb eines rechtlichen Rahmens mit klaren Befugnissen und Verantwortlichkeiten arbeiten',
        'NGO oder internationale Organisation — Projekte, Partnerschaften, Förderberichte und Feldeinsätze',
        'Rehabilitationszentren, Tagesstätten oder betreutes Wohnen — strukturierte Programme zur Genesung'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: 'Welches Ergebnis deiner Arbeit ist dir am wichtigsten?',
      o: [
        'Eine Familie, die kurz vor dem Zerbrechen stand, ist jetzt stabil, verbunden und kommt zurecht',
        'Ein Kind, das gefährdet war, ist jetzt sicher, und die Untersuchung war gründlich und fair',
        'Ein Projekt hat 5.000 bedürftige Menschen erreicht und der Förderbericht wurde für eine Verlängerung genehmigt',
        'Eine Person, der man sagte, sie werde nie selbstständig leben, versorgt sich jetzt in der eigenen Wohnung'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: 'Wie arbeitest du am liebsten?',
      o: [
        'Langfristige Beziehungen zu denselben Familien aufbauen — Vertrauen wächst über Monate und Jahre',
        'Folgenreiche Entscheidungen unter Druck treffen — ich kann Komplexität aushalten und handeln wenn nötig',
        'Projektmanagement und Koordination — Planung, Budgets, Berichte und Partnerschaftspflege',
        'Gruppen und strukturierte Programme leiten — mit mehreren Klientinnen und Klienten in einem therapeutischen Rahmen'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: 'Welche Herausforderung interessiert dich am meisten?',
      o: [
        'Häusliche Gewalt, Armut, psychische Erkrankungen der Eltern — komplexe Familiensysteme unter mehrfachem Druck',
        'Kindesmisshandlung und Vernachlässigung — die schwerste Arbeit, aber der Einsatz könnte kaum höher sein',
        'Flüchtlingskrisen, Armut, Ungleichheit — systemische Probleme, die kollektives Handeln im großen Maßstab erfordern',
        'Sucht, erworbene Behinderung, psychiatrische Erkrankungen — der lange Weg zurück in die Selbstständigkeit'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: 'Wo siehst du dich in 10 Jahren?',
      o: [
        'Erfahrene Fachkraft in der Familienhilfe, Praxisanleiterin oder Teamleitung in der Kinder- und Jugendhilfe',
        'Leitende Sozialarbeiterin oder leitender Sozialarbeiter, Kinderschutzbeauftragte(r) oder Bereichsleitung',
        'Länderdirektorin oder Programmleitung für eine internationale humanitäre Organisation',
        'Leitung von Rehabilitationsdiensten oder Direktorin bzw. Direktor einer spezialisierten Fördereinrichtung'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    }
  ],
  roles: {
    family_sw: {
      emoji: '👨‍👩‍👧',
      name: 'Sozialarbeiterin / Sozialarbeiter in der Familienunterstützung',
      desc: 'Du arbeitest mit Familien unter Druck — verhinderst Krisen, stärkst Resilienz und hältst Kinder sicher zuhause',
      detail: 'Du betreust Familien in Krisen: häusliche Gewalt, Armut, psychische Erkrankungen der Eltern, Suchtmittelkonsum. Du machst Hausbesuche, baust über Zeit Vertrauen auf, koordinierst Unterstützung durch andere Fachstellen und hilfst Eltern, Kompetenzen und Ressourcen zu entwickeln, damit sie sicher für ihre Kinder sorgen können. Dein Ziel ist es stets, Familien zusammenzuhalten, wo immer es sicher ist.',
      start: [
        'Studiere Soziale Arbeit — das ist die erforderliche Qualifikation für staatliche Stellen in den meisten Ländern',
        'Lerne traumasensibles Arbeiten — verstehe, wie belastende Kindheitserfahrungen das Verhalten prägen',
        'Lies "Verkörperter Schrecken" von Bessel van der Kolk — Pflichtlektüre zum Thema Trauma',
        'Engagiere dich ehrenamtlich bei einer Familienberatungsorganisation, um Erfahrungen vor dem Abschluss zu sammeln'
      ]
    },
    child_protect: {
      emoji: '🛡️',
      name: 'Sozialarbeiterin / Sozialarbeiter im Kinderschutz',
      desc: 'Du klärst Misshandlung und Vernachlässigung auf — und triffst Entscheidungen, die gefährdete Kinder schützen',
      detail: 'Dies ist der anspruchsvollste und verantwortungsvollste Bereich der Sozialen Arbeit. Du erhältst Meldungen über gefährdete Kinder, führst Ermittlungen durch, gibst Empfehlungen an Gerichte ab und begleitest Fälle durch das Rechtssystem. Du musst Komplexität aushalten, Risiken einschätzen und unter Druck schwierige Entscheidungen treffen — und dabei stets die Stimme des Kindes ins Zentrum stellen.',
      start: [
        'Erwirbst die Qualifikation als Sozialarbeiterin oder Sozialarbeiter, dann bewirb dich auf eine Stelle im Kinderschutz — die meisten erfordern mindestens ein Jahr Berufserfahrung nach der Qualifikation',
        'Lerne den rechtlichen Rahmen gründlich kennen — Kindschaftsrecht, Schutzkonzepte, Gerichtsverfahren',
        'Studiere Risikoeinschätzungsrahmen: Zeichen der Sicherheit, DASH-Risikoeinschätzung bei häuslicher Gewalt',
        'Nutze regelmäßige Supervision — Kinderschutzarbeit erfordert robuste emotionale und fachliche Unterstützung'
      ]
    },
    ngo_coord: {
      emoji: '🌍',
      name: 'NGO-Programmkoordinatorin / NGO-Programmkoordinator',
      desc: 'Du managst soziale Projekte im gemeinnützigen Sektor — von der Fördermittelakquise bis zur Durchführung und Wirkungsberichterstattung',
      detail: 'Du arbeitest im dritten Sektor oder bei internationalen Organisationen: Du entwirfst Projekte, schreibst Förderanträge, verwaltest Budgets, koordinierst Freiwillige und Partnerorganisationen und berichtest Geldgebern über Wirkung. Du arbeitest vielleicht mit Geflüchteten, Wohnungslosen, Gewaltüberlebenden oder Menschen in Armut. Du bist der Motor, der das Programm am Laufen hält.',
      start: [
        'Studiere Soziale Arbeit, internationale Entwicklung oder öffentliche Verwaltung — alle sind relevante Einstiegswege',
        'Lerne Projektmanagement: PCM (Projektzyklus-Management) und LogFrame sind im Sektor Standard',
        'Baue Kompetenzen im Förderantragsschreiben auf — übe, indem du einen kleinen Antrag für einen lokalen Gemeinschaftsfonds schreibst',
        'Sammle Felderfahrung: Engagiere dich im Ausland ehrenamtlich oder mache ein Praktikum bei einer NGO, bevor du dich auf Koordinationsstellen bewirbst'
      ]
    },
    rehab_spec: {
      emoji: '♿',
      name: 'Rehabilitationsfachkraft',
      desc: 'Du unterstützt Menschen mit Behinderungen oder komplexen Bedarfen dabei, Selbstständigkeit zurückzugewinnen und ihr Leben neu aufzubauen',
      detail: 'Du arbeitest mit Menschen, die erworbene Behinderungen, psychische Erkrankungen, Hirnverletzungen oder Suchterkrankungen haben. Du erfasst ihren Bedarf, entwickelst Rehabilitationspläne, leitest strukturierte Gruppen, arbeitest mit medizinischen und psychologischen Teams zusammen und unterstützt die Person dabei, ihre eigenen Ziele zu erreichen — ob das die Rückkehr in den Beruf, selbstständiges Wohnen oder die Wiederverbindung mit der Familie ist.',
      start: [
        'Studiere Soziale Arbeit, Ergotherapie oder Psychologie — alle sind valide Einstiegswege in die Rehabilitation',
        'Lerne Motivational Interviewing (MI) — den evidenzbasierten Ansatz zur Unterstützung von Verhaltensänderung',
        'Mach dich mit der ICF (Internationale Klassifikation der Funktionsfähigkeit, Behinderung und Gesundheit) vertraut — der Rahmen für die Behinderungsbeurteilung',
        'Lies "Genesungsorientierte Praxis: Ein Leitfaden für Fachkräfte im Bereich psychische Gesundheit" — ein grundlegendes Werk für die recoveryorientierte Arbeit'
      ]
    }
  },
  ui: { l2back: '← Zurück zur Bildung', title: 'Sozialarbeit: welche Spezialisierung?' }
};

L2.social_worker.fr = {
  questions: [
    {
      t: 'Quel domaine du travail social t\'attire le plus ?',
      o: [
        'Soutien aux familles — aider les parents en crise, prévenir l\'éclatement familial, maintenir les enfants en sécurité à domicile',
        'Protection de l\'enfance — enquêter sur les abus et la négligence, prendre des décisions pour protéger les enfants vulnérables',
        'Travail en ONG et à l\'international — gérer des projets humanitaires, lever des fonds, coordonner des bénévoles',
        'Réadaptation — aider les personnes en situation de handicap, de dépendance ou de trouble psychique à reconstruire une vie autonome'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: 'Quel environnement de travail te correspond le mieux ?',
      o: [
        'Visites à domicile et travail communautaire — rencontrer les familles là où elles vivent et voir leur réalité directement',
        'Services publics — travailler dans un cadre juridique avec des pouvoirs et des responsabilités clairement définis',
        'ONG ou organisation internationale — projets, partenariats, rapports de subventions et missions de terrain',
        'Centres de rééducation, services de jour ou hébergements accompagnés — programmes structurés pour le rétablissement'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: 'Quel résultat de ton travail compte le plus pour toi ?',
      o: [
        'Une famille qui était sur le point d\'éclater est maintenant stable, unie et s\'en sort bien',
        'Un enfant qui était en danger est maintenant en sécurité, et l\'enquête a été rigoureuse et équitable',
        'Un projet a touché 5 000 personnes dans le besoin et le rapport de subvention a été approuvé pour renouvellement',
        'Une personne à qui on avait dit qu\'elle ne vivrait jamais de façon autonome gère maintenant son propre logement'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: 'Comment préfères-tu travailler ?',
      o: [
        'Construire des relations à long terme avec les mêmes familles — la confiance se développe sur des mois et des années',
        'Prendre des décisions à enjeux élevés sous pression — je sais gérer la complexité et agir quand c\'est nécessaire',
        'Gestion de projet et coordination — planification, budgets, rapports et gestion des partenariats',
        'Animer des groupes et des programmes structurés — travailler avec plusieurs clients dans un cadre thérapeutique'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: 'Quel défi t\'intéresse le plus ?',
      o: [
        'Violences conjugales, pauvreté, troubles psychiques des parents — des systèmes familiaux complexes sous de multiples pressions',
        'Maltraitance et négligence envers les enfants — le travail le plus difficile, mais les enjeux n\'ont jamais été aussi élevés',
        'Crises des réfugiés, pauvreté, inégalités — des problèmes systémiques qui nécessitent une action collective à grande échelle',
        'Dépendance, handicap acquis, troubles psychiatriques — le long chemin vers le retour à l\'autonomie'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: 'Où te vois-tu dans 10 ans ?',
      o: [
        'Praticien(ne) senior en soutien familial, formateur/formatrice de terrain ou responsable d\'équipe dans les services à l\'enfance',
        'Travailleur/travailleuse social(e) principal(e), responsable de la protection de l\'enfance ou directeur/directrice de service',
        'Directeur/directrice de pays ou responsable de programme pour une organisation humanitaire internationale',
        'Directeur/directrice des services de réadaptation ou d\'un organisme de soutien spécialisé'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    }
  ],
  roles: {
    family_sw: {
      emoji: '👨‍👩‍👧',
      name: 'Travailleur/travailleuse social(e) en soutien familial',
      desc: 'Tu travailles avec des familles sous pression — tu préviens les ruptures, renforces la résilience et maintiens les enfants en sécurité à domicile',
      detail: 'Tu gères un portefeuille de familles en crise : violences conjugales, pauvreté, troubles psychiques des parents, abus de substances. Tu fais des visites à domicile, tu instaures une relation de confiance au fil du temps, tu coordonnes le soutien d\'autres services et tu aides les parents à développer les compétences et les ressources nécessaires pour s\'occuper de leurs enfants en toute sécurité. Ton objectif est toujours de maintenir les familles unies lorsque cela est sûr.',
      start: [
        'Obtiens un diplôme en travail social — c\'est la qualification requise pour les postes statutaires dans la plupart des pays',
        'Apprends la pratique tenant compte des traumatismes — comprendre comment les expériences d\'enfance difficiles influencent les comportements',
        'Lis "Le corps n\'oublie rien" de Bessel van der Kolk — une lecture indispensable sur le traumatisme',
        'Fais du bénévolat dans une association de soutien familial pour acquérir de l\'expérience avant d\'être diplômé(e)'
      ]
    },
    child_protect: {
      emoji: '🛡️',
      name: 'Travailleur/travailleuse social(e) en protection de l\'enfance',
      desc: 'Tu enquêtes sur les abus et la négligence — tu prends des décisions qui assurent la sécurité des enfants vulnérables',
      detail: 'C\'est le domaine le plus exigeant et le plus responsable du travail social. Tu reçois des signalements concernant des enfants en danger, tu mènes des enquêtes, tu formules des recommandations aux tribunaux et tu accompagnes les dossiers dans le système judiciaire. Tu dois être capable de gérer la complexité, d\'évaluer les risques et de prendre des décisions difficiles sous pression — tout en gardant la voix de l\'enfant au centre de tout.',
      start: [
        'Qualifie-toi en travail social, puis postule à un poste en protection de l\'enfance — la plupart exigent au moins un an d\'expérience post-qualification',
        'Apprends le cadre juridique à fond — droit de l\'enfant, dispositifs de protection, procédures judiciaires',
        'Étudie les outils d\'évaluation des risques : Signes de sécurité, évaluation du risque de violence domestique',
        'Bénéficie d\'une supervision régulière — le travail en protection de l\'enfance nécessite un soutien émotionnel et professionnel solide'
      ]
    },
    ngo_coord: {
      emoji: '🌍',
      name: 'Coordinateur/coordinatrice de programme ONG',
      desc: 'Tu gères des projets sociaux dans le secteur non lucratif — de la levée de fonds à la mise en œuvre sur le terrain et aux rapports d\'impact',
      detail: 'Tu travailles dans le secteur associatif ou des organisations internationales : tu conçois des projets, rédiges des demandes de subventions, gères des budgets, coordonnes des bénévoles et des organisations partenaires, et tu rends compte de l\'impact aux donateurs. Tu travailles peut-être avec des réfugiés, des sans-abri, des survivants de violences ou des personnes vivant dans la pauvreté. Tu es le moteur qui fait fonctionner le programme.',
      start: [
        'Étudie le travail social, le développement international ou l\'administration publique — tous sont des voies d\'entrée pertinentes',
        'Apprends la gestion de projet : le PCM (Gestion du cycle de projet) et le LogFrame sont des standards dans le secteur',
        'Développe tes compétences en rédaction de demandes de subventions — entraîne-toi en rédigeant une petite demande pour un fonds communautaire local',
        'Acquiers une expérience de terrain : fais du bénévolat à l\'étranger ou un stage dans une ONG avant de postuler à des postes de coordinateur'
      ]
    },
    rehab_spec: {
      emoji: '♿',
      name: 'Spécialiste en réadaptation',
      desc: 'Tu accompagnes les personnes en situation de handicap ou à besoins complexes pour retrouver leur autonomie et reconstruire leur vie',
      detail: 'Tu travailles avec des personnes ayant des handicaps acquis, des troubles de santé mentale, des traumatismes crâniens ou des antécédents d\'abus de substances. Tu évalues leurs besoins, élabores des plans de réadaptation, animes des groupes structurés, assures la liaison avec les équipes médicales et psychologiques, et aides la personne à atteindre ses propres objectifs — qu\'il s\'agisse de retourner au travail, de vivre de façon autonome ou de renouer avec sa famille.',
      start: [
        'Étudie le travail social, l\'ergothérapie ou la psychologie — toutes sont des voies valides vers la réadaptation',
        'Apprends l\'entretien motivationnel (EM) — l\'approche fondée sur les preuves pour soutenir le changement de comportement',
        'Familiarise-toi avec la CIF (Classification internationale du fonctionnement, du handicap et de la santé) — le cadre d\'évaluation du handicap',
        'Lis "Rétablissement : un guide pour les praticiens en santé mentale" — un texte fondateur pour la pratique orientée vers le rétablissement'
      ]
    }
  },
  ui: { l2back: '← Retour à l\'éducation', title: 'Travail social : quelle spécialisation ?' }
};



L2.social_worker.es = {
  questions: [
    {
      t: '¿Con qué área del trabajo social te identificas más?',
      o: [
        'Apoyo a familias — ayudar a padres en crisis, prevenir la ruptura familiar, mantener a los niños seguros en casa',
        'Protección de la infancia — investigar abusos y negligencias, tomar decisiones que protejan a los niños vulnerables',
        'ONG y trabajo internacional — gestionar proyectos humanitarios, captar fondos, coordinar voluntarios',
        'Rehabilitación — ayudar a personas con discapacidad, adicción o enfermedad mental a reconstruir una vida independiente'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: '¿Qué entorno de trabajo se adapta mejor a ti?',
      o: [
        'Visitas domiciliarias y trabajo comunitario — conocer a las familias donde viven y ver su realidad directamente',
        'Servicios estatales — trabajar dentro de un marco legal con competencias y responsabilidades claras',
        'ONG u organización internacional — proyectos, alianzas, informes de subvenciones y misiones de campo',
        'Centros de rehabilitación, servicios de día o viviendas tuteladas — programas estructurados para la recuperación'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: '¿Qué resultado de tu trabajo te importa más?',
      o: [
        'Una familia que estaba al borde de romperse ahora es estable, está unida y sale adelante',
        'Un niño que estaba en riesgo ahora está seguro, y la investigación fue rigurosa y justa',
        'Un proyecto llegó a 5.000 personas necesitadas y el informe de la subvención fue aprobado para renovación',
        'Una persona a quien dijeron que nunca viviría de forma independiente ahora gestiona su propio piso'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: '¿Cómo prefieres trabajar?',
      o: [
        'Construyendo relaciones a largo plazo con las mismas familias — la confianza se desarrolla a lo largo de meses y años',
        'Tomando decisiones de alto impacto bajo presión — sé manejar la complejidad y actuar cuando es necesario',
        'Gestión de proyectos y coordinación — planificación, presupuestos, informes y gestión de alianzas',
        'Dirigiendo grupos y programas estructurados — trabajando con varios clientes en un entorno terapéutico'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: '¿Qué desafío te interesa más?',
      o: [
        'Violencia doméstica, pobreza, enfermedad mental parental — sistemas familiares complejos bajo múltiples presiones',
        'Maltrato y negligencia infantil — el trabajo más duro, pero con las consecuencias más importantes',
        'Crisis de refugiados, pobreza, desigualdad — problemas sistémicos que requieren acción colectiva a gran escala',
        'Adicción, discapacidad adquirida, trastornos psiquiátricos — el largo camino de regreso a la independencia'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: '¿Dónde te ves dentro de 10 años?',
      o: [
        'Profesional senior de apoyo familiar, formador/a de prácticas o responsable de equipo en servicios de infancia',
        'Trabajador/a social principal, responsable de protección o director/a de servicio en una administración local',
        'Director/a de país o responsable de programa en una organización humanitaria internacional',
        'Director/a de servicios de rehabilitación o de una entidad de apoyo especializada'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    }
  ],
  roles: {
    family_sw: {
      emoji: '👨‍👩‍👧',
      name: 'Trabajador/a social de apoyo familiar',
      desc: 'Trabajas con familias bajo presión — previniendo rupturas, fortaleciendo la resiliencia y manteniendo a los niños seguros en casa',
      detail: 'Llevas una cartera de familias en crisis: violencia doméstica, pobreza, enfermedad mental parental, consumo de sustancias. Realizas visitas domiciliarias, generas confianza con el tiempo, coordinas el apoyo de otras agencias y ayudas a los padres a desarrollar las habilidades y recursos para cuidar de sus hijos de forma segura. Tu objetivo siempre es mantener unidas a las familias cuando es seguro hacerlo.',
      start: [
        'Estudia un grado en trabajo social — es la titulación requerida para puestos estatales en la mayoría de países',
        'Aprende la práctica informada por el trauma — cómo las experiencias adversas en la infancia moldean el comportamiento',
        'Lee "El cuerpo lleva la cuenta" de Bessel van der Kolk — lectura esencial sobre el trauma',
        'Haz voluntariado en una entidad de apoyo familiar para ganar experiencia antes de titularte'
      ]
    },
    child_protect: {
      emoji: '🛡️',
      name: 'Trabajador/a social de protección a la infancia',
      desc: 'Investigas abusos y negligencias — tomando decisiones que mantienen seguros a los niños vulnerables',
      detail: 'Esta es el área más exigente y responsable del trabajo social. Recibes comunicaciones sobre niños en riesgo, realizas investigaciones, haces recomendaciones a los tribunales y llevas los casos por el sistema legal. Debes ser capaz de manejar la complejidad, gestionar el riesgo y tomar decisiones difíciles bajo presión, manteniendo siempre la voz del niño en el centro de todo.',
      start: [
        'Titúlate en trabajo social y luego solicita un puesto de protección infantil — la mayoría requiere al menos un año de experiencia postgraduación',
        'Aprende el marco legal a fondo — ley de menores, guías de trabajo conjunto, procesos judiciales',
        'Estudia marcos de evaluación del riesgo: Signs of Safety, evaluación de riesgo DASH para violencia doméstica',
        'Obtén supervisión regular — el trabajo de protección infantil requiere un apoyo emocional y profesional sólido'
      ]
    },
    ngo_coord: {
      emoji: '🌍',
      name: 'Coordinador/a de programas ONG',
      desc: 'Gestionas proyectos sociales en el sector no lucrativo — desde la captación de fondos hasta la ejecución en campo y los informes de impacto',
      detail: 'Trabajas en el tercer sector u organizaciones internacionales: diseñas proyectos, redactas solicitudes de subvención, gestionas presupuestos, coordinas voluntarios y organizaciones socias, e informas sobre el impacto a los donantes. Puedes trabajar con refugiados, personas sin hogar, supervivientes de violencia o personas en situación de pobreza. Eres el motor que mantiene el programa en marcha.',
      start: [
        'Estudia trabajo social, cooperación internacional o administración pública — todas son vías de entrada relevantes',
        'Aprende gestión de proyectos: PCM (Gestión del Ciclo de Proyecto) y Marco Lógico son estándares en el sector',
        'Desarrolla habilidades de redacción de propuestas — practica escribiendo una pequeña solicitud para un fondo comunitario local',
        'Gana experiencia de campo: haz voluntariado en el extranjero o prácticas en una ONG antes de optar a puestos de coordinación'
      ]
    },
    rehab_spec: {
      emoji: '♿',
      name: 'Especialista en rehabilitación',
      desc: 'Apoyás a personas con discapacidad o necesidades complejas para recuperar su independencia y reconstruir sus vidas',
      detail: 'Trabajas con personas con discapacidades adquiridas, trastornos de salud mental, lesiones cerebrales o historiales de abuso de sustancias. Evalúas sus necesidades, desarrollas planes de rehabilitación, diriges grupos estructurados, coordinas con equipos médicos y psicológicos y apoyas a la persona para alcanzar sus propios objetivos — ya sea volver al trabajo, vivir de forma independiente o reconectar con su familia.',
      start: [
        'Estudia trabajo social, terapia ocupacional o psicología — todas son vías válidas hacia la rehabilitación',
        'Aprende la entrevista motivacional (EM) — el enfoque basado en evidencia para apoyar el cambio de comportamiento',
        'Familiarízate con la CIF (Clasificación Internacional del Funcionamiento, de la Discapacidad y de la Salud) — el marco de evaluación de la discapacidad',
        'Lee "Recuperación: una guía para profesionales de salud mental" — texto fundamental para la práctica orientada a la recuperación'
      ]
    }
  },
  ui: { l2back: '← Volver a educación', title: 'Trabajo social: ¿qué especialización?' }
};

L2.social_worker.pt = {
  questions: [
    {
      t: 'Qual área do serviço social mais combina com você?',
      o: [
        'Apoio a famílias — ajudar pais em crise, prevenir a ruptura familiar, manter crianças seguras em casa',
        'Proteção da infância — investigar abusos e negligências, tomar decisões que protejam crianças vulneráveis',
        'ONG e trabalho internacional — gerir projetos humanitários, captar recursos, coordenar voluntários',
        'Reabilitação — ajudar pessoas com deficiência, dependência ou transtorno mental a reconstruir uma vida independente'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: 'Qual ambiente de trabalho é mais adequado para você?',
      o: [
        'Visitas domiciliares e trabalho comunitário — encontrar as famílias onde vivem e ver sua realidade diretamente',
        'Serviços estatais — trabalhar dentro de um marco legal com poderes e responsabilidades claros',
        'ONG ou organização internacional — projetos, parcerias, relatórios de financiamento e missões de campo',
        'Centros de reabilitação, serviços diurnos ou moradia assistida — programas estruturados para a recuperação'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: 'Qual resultado do seu trabalho é mais importante para você?',
      o: [
        'Uma família que estava prestes a se dissolver agora é estável, unida e consegue se manter',
        'Uma criança que estava em risco agora está segura, e a investigação foi rigorosa e justa',
        'Um projeto alcançou 5.000 pessoas em necessidade e o relatório do financiamento foi aprovado para renovação',
        'Uma pessoa que disseram que jamais viveria de forma independente agora administra o próprio apartamento'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: 'Como você prefere trabalhar?',
      o: [
        'Construindo relações de longo prazo com as mesmas famílias — a confiança se desenvolve ao longo de meses e anos',
        'Tomando decisões de alto impacto sob pressão — consigo lidar com a complexidade e agir quando necessário',
        'Gestão de projetos e coordenação — planejamento, orçamentos, relatórios e gestão de parcerias',
        'Conduzindo grupos e programas estruturados — trabalhando com vários clientes em um ambiente terapêutico'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: 'Qual desafio mais te interessa?',
      o: [
        'Violência doméstica, pobreza, doença mental parental — sistemas familiares complexos sob múltiplas pressões',
        'Maus-tratos e negligência infantil — o trabalho mais difícil, mas com as maiores consequências',
        'Crises de refugiados, pobreza, desigualdade — problemas sistêmicos que exigem ação coletiva em larga escala',
        'Dependência, deficiência adquirida, transtornos psiquiátricos — o longo caminho de volta à independência'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    },
    {
      t: 'Onde você se vê daqui a 10 anos?',
      o: [
        'Profissional sênior de apoio familiar, supervisor/a de prática ou gestor/a de equipe nos serviços à infância',
        'Assistente social principal, responsável pela proteção ou diretor/a de serviço em uma administração local',
        'Diretor/a de país ou responsável de programa em uma organização humanitária internacional',
        'Diretor/a de serviços de reabilitação ou de uma entidade de apoio especializada'
      ],
      s: [{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]
    }
  ],
  roles: {
    family_sw: {
      emoji: '👨‍👩‍👧',
      name: 'Assistente social de apoio familiar',
      desc: 'Você trabalha com famílias sob pressão — prevenindo rupturas, fortalecendo a resiliência e mantendo crianças seguras em casa',
      detail: 'Você acompanha famílias em crise: violência doméstica, pobreza, doença mental parental, uso de substâncias. Realiza visitas domiciliares, constrói confiança ao longo do tempo, coordena o apoio de outras agências e ajuda os pais a desenvolver habilidades e recursos para cuidar com segurança de seus filhos. Seu objetivo é sempre manter as famílias unidas quando é seguro fazê-lo.',
      start: [
        'Curse graduação em serviço social — é a qualificação exigida para cargos estatutários na maioria dos países',
        'Aprenda a prática informada pelo trauma — como experiências adversas na infância moldam o comportamento',
        'Leia "O Corpo Guarda o Placar" de Bessel van der Kolk — leitura essencial sobre trauma',
        'Faça voluntariado em uma organização de apoio familiar para ganhar experiência antes de se formar'
      ]
    },
    child_protect: {
      emoji: '🛡️',
      name: 'Assistente social de proteção à infância',
      desc: 'Você investiga abusos e negligências — tomando decisões que mantêm crianças vulneráveis em segurança',
      detail: 'Esta é a área mais exigente e responsável do serviço social. Você recebe comunicações sobre crianças em risco, conduz investigações, faz recomendações aos tribunais e acompanha os casos pelo sistema legal. Precisa ser capaz de lidar com a complexidade, gerenciar riscos e tomar decisões difíceis sob pressão, mantendo sempre a voz da criança no centro de tudo.',
      start: [
        'Forme-se em serviço social e depois candidature-se a um cargo de proteção infantil — a maioria exige ao menos um ano de experiência pós-formação',
        'Aprenda o marco legal a fundo — estatuto da criança, orientações de trabalho conjunto, processos judiciais',
        'Estude marcos de avaliação de risco: Signs of Safety, avaliação de risco DASH para violência doméstica',
        'Busque supervisão regular — o trabalho de proteção infantil exige suporte emocional e profissional sólido'
      ]
    },
    ngo_coord: {
      emoji: '🌍',
      name: 'Coordenador/a de programas ONG',
      desc: 'Você gerencia projetos sociais no setor sem fins lucrativos — da captação de recursos à execução em campo e relatórios de impacto',
      detail: 'Você trabalha no terceiro setor ou em organizações internacionais: elabora projetos, redige propostas de financiamento, gerencia orçamentos, coordena voluntários e organizações parceiras e reporta o impacto aos doadores. Pode trabalhar com refugiados, pessoas em situação de rua, sobreviventes de violência ou pessoas em situação de pobreza. Você é o motor que mantém o programa funcionando.',
      start: [
        'Curse serviço social, desenvolvimento internacional ou administração pública — todas são rotas de entrada relevantes',
        'Aprenda gestão de projetos: PCM (Gestão do Ciclo de Projeto) e Marco Lógico são padrão no setor',
        'Desenvolva habilidades de redação de propostas — pratique escrevendo uma pequena solicitação para um fundo comunitário local',
        'Ganhe experiência de campo: faça voluntariado no exterior ou estágio em uma ONG antes de se candidatar a cargos de coordenação'
      ]
    },
    rehab_spec: {
      emoji: '♿',
      name: 'Especialista em reabilitação',
      desc: 'Você apoia pessoas com deficiência ou necessidades complexas para recuperar a independência e reconstruir suas vidas',
      detail: 'Você trabalha com pessoas com deficiências adquiridas, transtornos de saúde mental, lesões cerebrais ou histórico de uso de substâncias. Avalia suas necessidades, desenvolve planos de reabilitação, conduz grupos estruturados, articula com equipes médicas e psicológicas e apoia a pessoa para alcançar seus próprios objetivos — seja retornar ao trabalho, viver de forma independente ou reconectar-se com a família.',
      start: [
        'Curse serviço social, terapia ocupacional ou psicologia — todas são rotas válidas para a reabilitação',
        'Aprenda entrevista motivacional (EM) — a abordagem baseada em evidências para apoiar a mudança de comportamento',
        'Familiarize-se com a CIF (Classificação Internacional de Funcionalidade, Incapacidade e Saúde) — o marco de avaliação da deficiência',
        'Leia "Recuperação: um guia para profissionais de saúde mental" — texto fundamental para a prática orientada à recuperação'
      ]
    }
  },
  ui: { l2back: '← Voltar à educação', title: 'Serviço social: qual especialização?' }
};

L2.social_worker.ar = {
  questions: [
    { t:"ما الجانب الذي يستهويك أكثر في الخدمة الاجتماعية؟", o:["دعم الأسر وتحسين الديناميكيات الأسرية وتقديم الإرشاد للوالدين","حماية الأطفال المعرّضين للخطر والتحقيق في الإساءة","إدارة برامج المنظمات غير الحكومية ومشاريع التنمية المجتمعية","تأهيل ذوي الاحتياجات الخاصة ومساعدتهم على الاندماج في المجتمع"], s:[{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}] },
    { t:"أيّ أداة تودّ إتقانها؟", o:["تقنيات الوساطة الأسرية والعلاج الأسري المنظومي","أدوات تقييم المخاطر وبروتوكولات السلامة","إدارة المشاريع وكتابة المقترحات والتقارير للمانحين","تقييم الإعاقة وخطط التأهيل المهني"], s:[{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}] },
    { t:"أيّ نتيجة تُشعرك بالرضا أكثر؟", o:["أسرة تتجاوز الأزمة وتسترجع تماسكها","طفل في خطر يُنقل إلى بيئة آمنة","مشروع مجتمعي يُحسّن حياة مئات الأشخاص","شخص ذو إعاقة يحصل على وظيفة ويعيش باستقلالية"], s:[{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}] },
    { t:"أين تُفضّل العمل؟", o:["في مراكز الإرشاد الأسري أو العيادات الاجتماعية","في أجهزة الدولة لحماية الطفل أو المحاكم الأسرية","في المنظمات الدولية والمجتمعية وبرامج التنمية","في مراكز التأهيل أو المستشفيات أو المنظمات الخدمية"], s:[{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}] },
    { t:"أيّ مهمة أقرب إليك؟", o:["تقديم إرشاد أسري لعائلة تمر بأزمة طلاق","التحقيق في بلاغ عن إهمال طفل واتخاذ إجراءات الحماية","إدارة مشروع تنموي لدعم مجتمع محلي","وضع خطة تأهيل لشخص تعافى من إصابة وعاد للعمل"], s:[{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}] },
    { t:"أين ترى نفسك بعد عشر سنوات؟", o:["مدير مركز للإرشاد الأسري","رئيس قسم حماية الطفل في منطقة تعليمية أو حكومية","مدير برامج في منظمة دولية أو غير حكومية كبرى","مشرف على مراكز التأهيل في مؤسسة طبية أو اجتماعية"], s:[{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}] },
  ],
  roles: {
    family_sw:{ emoji:"👨‍👩‍👧", name:"أخصائي اجتماعي أسري", desc:"تدعم الأسر وتُحسّن الديناميكيات الأسرية", detail:"تعمل مع الأسر في أوقات الأزمات.", start:["ادرس الخدمة الاجتماعية وعلم النفس الأسري","تدرّب على تقنيات الوساطة الأسرية","احصل على ترخيص الأخصائي الاجتماعي المعتمد","تعلّم العلاج الأسري المنظومي"] },
    child_protect:{ emoji:"🛡️", name:"أخصائي حماية الطفل", desc:"تحمي الأطفال من الإساءة والإهمال", detail:"تعمل مع الأجهزة الحكومية لضمان سلامة الأطفال.", start:["ادرس الحماية الاجتماعية وحقوق الطفل","تعلّم أدوات تقييم المخاطر","تدرّب في مؤسسات الحماية الاجتماعية","احصل على شهادة الإرشاد الاجتماعي"] },
    ngo_coord:{ emoji:"🌍", name:"منسّق منظمة غير حكومية", desc:"تُدير برامج التنمية المجتمعية وتنفّذ مشاريع التدخل الاجتماعي", detail:"تعمل في منظمات دولية ومحلية.", start:["تعلّم إدارة المشاريع ومتابعة التقييم","احصل على شهادة PMP أو ما يعادلها","تدرّب على كتابة المقترحات والتقارير","ابنِ شبكة علاقات في المجتمع المدني"] },
    rehab_spec:{ emoji:"♿", name:"أخصائي تأهيل", desc:"تساعد الأشخاص ذوي الإعاقة على الاستقلالية والاندماج المجتمعي", detail:"تعمل في مراكز التأهيل والمستشفيات.", start:["ادرس إعادة التأهيل وعلم النفس المهني","تعلّم تقنيات تقييم الإعاقة","تدرّب في مراكز التأهيل","احصل على شهادة التأهيل المهني"] },
  },
  ui:{ l2back:"← العودة إلى التعليم", title:"الخدمة الاجتماعية: ما التخصص؟" }
};

L2.social_worker.he = {
  questions: [
    { t:"מה הצד שהכי מעניין אותך בעבודה סוציאלית?", o:["תמיכה במשפחות ושיפור הדינמיקה המשפחתית","הגנה על ילדים בסיכון וחקירת התעלות","ניהול תוכניות בארגוני צדקה ופיתוח קהילתי","שיקום אנשים עם מוגבלויות ושילובם בחברה"], s:[{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}] },
    { t:"איזה כלי הכי תרצה לשלוט בו?", o:["טכניקות גישור משפחתי וטיפול מערכתי","כלי הערכת סיכונים ופרוטוקולי בטיחות","ניהול פרויקטים וכתיבת הצעות ודוחות","הערכת נכות ותוכניות שיקום מקצועי"], s:[{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}] },
    { t:"איזה תוצאה הכי ממלאת אותך סיפוק?", o:["משפחה שמתגברת על משבר ומתאחדת מחדש","ילד בסיכון שעובר לסביבה בטוחה","פרויקט קהילתי שמשפר חיים של מאות אנשים","אדם עם מוגבלות שמקבל עבודה וחי בעצמאות"], s:[{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}] },
    { t:"איפה אתה מעדיף לעבוד?", o:["במרכזי ייעוץ משפחתי","בשירותי רווחה ממשלתיים או בתי משפט לענייני משפחה","בארגונים בינלאומיים ותוכניות פיתוח","במרכזי שיקום, בתי חולים או ארגוני שירות"], s:[{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}] },
    { t:"איזה משימה הכי קרובה ללב שלך?", o:["מתן ייעוץ משפחתי למשפחה בעיצומה של גירושין","חקירת תלונה על הזנחת ילד ונקיטת אמצעי הגנה","ניהול פרויקט פיתוח לתמיכה בקהילה","גיבוש תוכנית שיקום לאדם שהחלים מפגיעה"], s:[{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}] },
    { t:"איפה אתה רואה את עצמך עוד 10 שנים?", o:["מנהל מרכז ייעוץ משפחתי","ראש מחלקת הגנת הילד ברשות מקומית","מנהל תוכניות בארגון בינלאומי גדול","מפקח על מרכזי שיקום במוסד רפואי או חברתי"], s:[{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}] },
  ],
  roles: {
    family_sw:{ emoji:"👨‍👩‍👧", name:"עובד סוציאלי משפחתי", desc:"אתה תומך במשפחות ומשפר דינמיקות", detail:"אתה עובד עם משפחות בזמן משבר.", start:["למד עבודה סוציאלית ופסיכולוגיה משפחתית","התמחה בגישור משפחתי","קבל רישיון עובד סוציאלי מוסמך","למד טיפול מערכתי"] },
    child_protect:{ emoji:"🛡️", name:"עובד הגנה על ילד", desc:"אתה מגן על ילדים מהתעלות והזנחה", detail:"אתה עובד עם רשויות ממשלתיות.", start:["למד הגנה סוציאלית וזכויות הילד","למד כלי הערכת סיכונים","התמחה ברשויות הרווחה","קבל הסמכה בייעוץ חברתי"] },
    ngo_coord:{ emoji:"🌍", name:"רכז ארגון עמותה", desc:"אתה מנהל תוכניות פיתוח קהילתי", detail:"אתה עובד בארגונים בינלאומיים ומקומיים.", start:["למד ניהול פרויקטים ומדידת השפעה","קבל הסמכת PMP","התמחה בכתיבת הצעות ודוחות","בנה רשת קשרים בחברה האזרחית"] },
    rehab_spec:{ emoji:"♿", name:"מומחה שיקום", desc:"אתה עוזר לאנשים עם מוגבלויות לחיות בעצמאות", detail:"אתה עובד במרכזי שיקום ובתי חולים.", start:["למד שיקום ופסיכולוגיה מקצועית","למד טכניקות הערכת נכות","התמחה במרכזי שיקום","קבל הסמכה בשיקום מקצועי"] },
  },
  ui:{ l2back:"← חזרה לחינוך", title:"עבודה סוציאלית: איזה התמחות?" }
};

L2.social_worker.zh = {
  questions: [
    {t:'社会工作中什么最吸引你？', o:['家庭社工——支持有困难的家庭，修复亲子关系','儿童保护——保护受虐待或被忽视的儿童','NGO协调员——管理公益项目，链接资源服务弱势群体','康复支持——帮助残障、戒毒或出狱人员重新融入社会'], s:[{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]},
    {t:'你最想在哪种环境工作？', o:['社区社会工作站或家庭综合服务中心','儿童保护机构或民政部门','公益基金会或非政府组织','康复中心、监狱或社区矫正机构'], s:[{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]},
    {t:'什么成果最让你有成就感？', o:['一个陷入危机的家庭重新找到了生活的希望','一个受到伤害的孩子被安置在安全的环境中','你发起的公益项目让500个困难家庭受益','一个曾经自暴自弃的人成功戒毒并重新就业'], s:[{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]},
    {t:'你更喜欢哪种工作方式？', o:['入户走访，了解家庭困难，链接社区资源','与多部门合作，评估儿童安全风险，采取保护措施','撰写项目方案，申请资助，组织志愿者服务','个案管理，设计康复计划，持续跟进服务对象进展'], s:[{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]},
    {t:'你会选择哪个项目？', o:['为困境母亲提供家庭支持和亲子辅导服务','开展社区儿童受虐风险排查和早期干预','发起一个为农村留守儿童提供教育支持的公益项目','为社区刑满释放人员提供就业辅导和心理支持'], s:[{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]},
    {t:'10年后你在哪里？', o:['家庭综合服务中心的督导','民政部门儿童保护科的负责人','大型公益机构的项目总监','社会工作系的教授，同时经营自己的督导实践'], s:[{family_sw:3},{child_protect:3},{ngo_coord:3},{rehab_spec:3}]}
  ],
  roles: {
    family_sw: {emoji:'👨‍👩‍👧', name:'家庭社会工作者', desc:'走进有困难的家庭，提供支持，帮助他们克服危机、重建生活', detail:'你是最了解家庭真实处境的人。你入户了解需求，链接社区资源，协助解决家庭危机，并陪伴他们走过最困难的时期。你的工作需要深深的同理心和强大的心理韧性。', start:['系统学习社会工作价值观、知识和技能','掌握个案工作方法——预约、评估、服务计划、结案','了解家庭理论——家庭系统理论','考取社会工作者证书（助理社工师/社工师）']},
    child_protect: {emoji:'🛡️', name:'儿童保护工作者', desc:'识别并应对儿童受虐待和被忽视的风险，让每个孩子都能安全成长', detail:'你是最脆弱人群的守护者。你进行风险评估，协调多部门应对紧急情况，为受害儿童提供安置和后续支持。这是社会工作中最有挑战性但也最有意义的方向之一。', start:['学习儿童虐待和忽视的识别方法','了解儿童保护相关法律——未成年人保护法','掌握儿童伤害评估工具和风险分级标准','在民政部门儿童科或儿童保护机构实习']},
    ngo_coord: {emoji:'🌍', name:'NGO项目协调员', desc:'设计和运营公益项目，将资源引向最需要帮助的群体', detail:'你是公益行动的组织者。你写项目方案申请资助，招募和管理志愿者，监督项目执行，并向捐助方汇报影响力。你需要同时具备专业性和管理能力。', start:['学习项目管理基础——逻辑框架法（LFA）','了解公益项目资金申请——基金会项目书写作','掌握志愿者管理和社区动员方法','在公益组织实习，了解非营利组织的运营模式']},
    rehab_spec: {emoji:'🌱', name:'康复支持专家', desc:'陪伴残障者、戒毒者或刑满释放者重新融入社会，找回生活的尊严', detail:'你相信每个人都值得第二次机会。你制定个性化康复计划，提供就业支持，链接社会资源，帮助被边缘化的人群重建自信和社会联系。', start:['了解主要服务群体的需求——残障、精神康复、司法社工','学习优势视角和增权理论——这是康复社工的核心哲学','掌握个案管理方法','在康复中心、社区矫正机构或残联下属机构实习']}
  },
  ui: {l2back:'← 返回社会工作', title:'社会工作：选择你的专业方向'}
};
