'use strict';
/* ── L2: Гражданский инженер / Строитель ────────────────────────────────────
   4 roles: struct_eng 🏗️ | arch_eng 🏛️ | geotech_eng 🌍 | constr_manager 📊
   RU only — другие языки добавляются отдельно
──────────────────────────────────────────────────────────────────────────── */

L2.civil_eng.ru = {
  questions: [
    {
      t: 'Что тебя больше привлекает в строительстве?',
      o: [
        'Считать несущие конструкции — колонны, балки, фундаменты, — чтобы здание стояло веками',
        'Совмещать инженерию с архитектурой — проектировать здания, которые и красивы, и функциональны',
        'Исследовать грунты и фундаменты — понимать, что происходит под землёй и как это учесть',
        'Управлять строительной площадкой — организовывать людей, технику и материалы в единый процесс'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: 'Какой инструмент тебе интереснее освоить?',
      o: [
        'ETABS или SAP2000 — расчёт зданий и сооружений на все виды нагрузок',
        'Revit или ArchiCAD — BIM-проектирование, где модель заменяет тысячи чертежей',
        'Plaxis или GeoStudio — моделирование геотехнических задач и устойчивости откосов',
        'MS Project, Primavera или BIM 360 — планировать стройку и отслеживать прогресс'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: 'Что важнее для тебя в работе?',
      o: [
        'Математическая точность — я люблю, когда всё можно посчитать и проверить расчётом',
        'Визуальный результат — видеть, как моя идея становится реальным зданием или мостом',
        'Исследование и анализ — брать пробы, изучать данные и делать заключения о надёжности грунта',
        'Управление и организация — мне важно, что проект завершён в срок и в рамках бюджета'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: 'Где тебе комфортнее работать?',
      o: [
        'В офисе за компьютером — строить модели, проверять расчёты, писать технические заключения',
        'На стыке офиса и площадки — проектировать в BIM и проверять соответствие на объекте',
        'В полевых условиях — бурить скважины, брать образцы грунта и тестировать прямо на месте',
        'На строительной площадке — ежедневно решать задачи, координировать бригады и подрядчиков'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: 'Какой проект тебя больше вдохновляет?',
      o: [
        'Расчёт небоскрёба или длиннопролётного моста — максимально сложная конструктивная задача',
        'Проектирование аэропорта, стадиона или культурного центра — масштаб и визуальный эффект',
        'Укрепление опасного оползневого склона или проектирование тоннеля в сложных грунтах',
        'Строительство крупного жилого квартала «под ключ» — от нулевого цикла до сдачи'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: 'Где ты видишь себя через 10 лет?',
      o: [
        'Главный конструктор проектной организации или партнёр инженерно-консалтинговой компании',
        'Ведущий BIM-специалист крупного бюро или архитектурный директор строительной группы',
        'Эксперт по основаниям и фундаментам с международной репутацией и собственным ИТ-р',
        'Директор строительного проекта стоимостью 10+ млрд рублей или владелец генподрядчика'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    }
  ],
  roles: {
    struct_eng: {
      emoji: '🏗️',
      name: 'Инженер-конструктор (строительство)',
      desc: 'Считаешь несущие конструкции зданий и сооружений — обеспечиваешь прочность и безопасность',
      detail: 'Твоя задача — чтобы здание устояло при землетрясении, ветре, снеговой нагрузке и времени. Ты проектируешь фундаменты, колонны, перекрытия и узлы соединений. Работаешь в ETABS, SAP2000 или SCAD, проверяешь расчёты по Еврокоду или СП. Каждый твой расчёт — это гарантия безопасности людей внутри здания.',
      start: [
        'Изучи СП (своды правил) по нагрузкам, бетонным и стальным конструкциям — они обязательны в РФ',
        'Освой SCAD Office — главный расчётный комплекс в российских проектных организациях',
        'Читай «Конструирование железобетонных конструкций» Байкова — базовый учебник',
        'Пройди онлайн-курс по Еврокоду, если планируешь работать с международными проектами'
      ]
    },
    arch_eng: {
      emoji: '🏛️',
      name: 'BIM-инженер / Архитектурный инженер',
      desc: 'Проектируешь здания в BIM-среде — совмещаешь архитектуру, конструктив и инженерные системы',
      detail: 'BIM (Building Information Modeling) — это будущее строительства. Ты создаёшь цифровую модель здания, в которой архитектура, конструктив, инженерные системы и сметы существуют единым целым. Работаешь в Revit, Navisworks или ArchiCAD, координируешь разделы проекта и устраняешь коллизии до начала стройки. Твоя модель — это истина для всей команды.',
      start: [
        'Освой Autodesk Revit — пройди официальный курс Autodesk или Академию BIM',
        'Изучи IFC и стандарты BIM Level 2/3 — это международный язык обмена данными в строительстве',
        'Читай ISO 19650 — международный стандарт управления информацией в BIM-проектах',
        'Вступи в сообщество bim.mos.ru или BIM-Russia в Telegram — там живая практика'
      ]
    },
    geotech_eng: {
      emoji: '🌍',
      name: 'Геотехнический инженер',
      desc: 'Исследуешь грунты и проектируешь основания — решаешь самые непредсказуемые задачи в строительстве',
      detail: 'Всё, что находится выше земли, стоит на том, что ты исследовал и рассчитал. Ты изучаешь геологическое строение площадки, оцениваешь несущую способность грунтов, проектируешь фундаменты, шпунтовые ограждения и анкерные системы. Работаешь с Plaxis, GeoStudio и результатами инженерно-геологических изысканий. Каждая проблема уникальна — грунт не бывает одинаковым.',
      start: [
        'Изучи механику грунтов по учебнику Тер-Мартиросяна — классика российской геотехники',
        'Освой Plaxis 2D/3D — стандарт для геотехнического моделирования в мире',
        'Читай SP 22.13330 (основания зданий и сооружений) — обязательный норматив',
        'Стажируйся в геотехнической лаборатории: реальные испытания грунтов незаменимы'
      ]
    },
    constr_manager: {
      emoji: '📊',
      name: 'Руководитель строительного проекта',
      desc: 'Управляешь стройкой от котлована до сдачи — координируешь людей, сроки и бюджет',
      detail: 'Ты несёшь ответственность за весь проект: набираешь подрядчиков, согласовываешь чертежи, контролируешь качество работ, управляешь рисками и общаешься с заказчиком. Используешь MS Project или Primavera для планирования, BIM 360 для контроля документации и регулярные планёрки для синхронизации команды. Без тебя стройка не начнётся — и не закончится.',
      start: [
        'Получи сертификацию PMP или Prince2 — они открывают двери в крупные строительные компании',
        'Освой MS Project или Primavera P6 — план-график это твой главный документ на стройке',
        'Читай «Руководство PMBoK» — универсальная база управления проектами любого масштаба',
        'Начни с должности помощника РП на реальной стройке — теория без практики не работает'
      ]
    }
  },
  ui: { l2back: '← К инженерии', title: 'Гражданский инженер: какая специализация?' }
};



L2.civil_eng.en = {
  questions: [
    {
      t: 'What draws you most to civil engineering?',
      o: [
        'Calculating load-bearing structures — columns, beams, foundations — so buildings stand for centuries',
        'Combining engineering with architecture — designing buildings that are both beautiful and functional',
        'Investigating soils and foundations — understanding what happens underground and designing for it',
        'Managing a construction site — organising people, plant, and materials into a single working process'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: 'Which tool would you most like to master?',
      o: [
        'ETABS or SAP2000 — analysing buildings and structures under all loading combinations',
        'Revit or ArchiCAD — BIM design where the model replaces thousands of separate drawings',
        'Plaxis or GeoStudio — modelling geotechnical problems and slope stability',
        'MS Project, Primavera, or BIM 360 — planning construction programmes and tracking progress'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: 'What matters most to you in your work?',
      o: [
        'Mathematical precision — I like knowing that everything can be calculated and verified',
        'Visual results — seeing my idea become a real building or bridge that people use every day',
        'Investigation and analysis — taking samples, studying data, drawing conclusions about ground conditions',
        'Delivery and organisation — I care that the project finishes on time and within budget'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: 'Where do you prefer to work?',
      o: [
        'In the office at a computer — building models, checking calculations, writing technical reports',
        'Across office and site — designing in BIM and verifying compliance during construction visits',
        'In the field — drilling boreholes, taking soil samples, and running tests on location',
        'On the construction site — solving problems daily, coordinating gangs, and managing subcontractors'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: 'Which project inspires you most?',
      o: [
        'Structural design of a skyscraper or long-span bridge — the most complex engineering challenge',
        'Design of an airport, stadium, or cultural centre — scale and visual impact',
        'Stabilising a dangerous landslide slope or designing a tunnel through difficult ground',
        'Delivering a large residential development from ground-breaking to handover'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: 'Where do you see yourself in 10 years?',
      o: [
        'Lead structural engineer or partner at an engineering consultancy',
        'BIM lead or design director at a major architecture and engineering practice',
        'Internationally recognised geotechnical expert with your own specialist consultancy',
        'Project director on a £1bn+ construction programme or owner of a main contractor'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    }
  ],
  roles: {
    struct_eng: {
      emoji: '🏗️',
      name: 'Structural Engineer',
      desc: 'You design load-bearing structures for buildings and infrastructure — ensuring strength and safety',
      detail: 'Your job is to ensure the building stands up: under wind, snow, seismic loads, and the test of time. You design foundations, columns, slabs, and connection details. You work in ETABS, SAP2000, or STAAD Pro, verify your calculations against Eurocodes or national standards, and produce structural drawings that contractors can build from. Every calculation you sign off is a guarantee of safety.',
      start: [
        'Study the Eurocodes thoroughly — especially EC0 (basis of design), EC1 (loads), EC2 (concrete), and EC3 (steel)',
        'Learn a structural analysis package: ETABS, SAP2000, or STAAD Pro are the most widely used',
        'Read "Structural Engineering: A Very Short Introduction" by David Blockley for an overview of the discipline',
        'Get chartered with the Institution of Structural Engineers (IStructE) — the gold standard credential'
      ]
    },
    arch_eng: {
      emoji: '🏛️',
      name: 'BIM Engineer / Architectural Engineer',
      desc: 'You design buildings in a BIM environment — integrating architecture, structure, and building services',
      detail: 'BIM is the future of construction. You create a digital model where architecture, structure, MEP services, and cost data exist as a single, coordinated whole. You work in Revit, Navisworks, or ArchiCAD, coordinate design across disciplines, and resolve clashes before construction begins. Your model is the single source of truth for the entire project team.',
      start: [
        'Master Autodesk Revit — take the official Autodesk training or a recognised BIM Academy programme',
        'Study ISO 19650 — the international standard for BIM information management on construction projects',
        'Learn IFC and the principles of BIM Level 2 — the framework for open data exchange between applications',
        'Join a BIM user group or online community — real-world practice shared by practitioners is invaluable'
      ]
    },
    geotech_eng: {
      emoji: '🌍',
      name: 'Geotechnical Engineer',
      desc: 'You investigate ground conditions and design foundations — solving the most unpredictable problems in construction',
      detail: 'Everything above ground rests on what you have investigated and designed. You assess the geological profile of a site, evaluate bearing capacity, design foundations, retaining walls, and ground anchors. You use Plaxis or GeoStudio to model soil behaviour and interpret borehole logs and laboratory test results. Every site is different — ground conditions never repeat exactly, and that makes every project a puzzle.',
      start: [
        'Study soil mechanics — Craig\'s "Soil Mechanics" is the standard textbook used by universities worldwide',
        'Learn Plaxis 2D/3D — the industry-standard geotechnical modelling package globally',
        'Understand the Eurocode 7 geotechnical design standard — it governs foundation design across Europe',
        'Get field experience in a geotechnical investigation firm — real borehole logging is irreplaceable'
      ]
    },
    constr_manager: {
      emoji: '📊',
      name: 'Construction Project Manager',
      desc: 'You manage construction from excavation to handover — coordinating people, programme, and budget',
      detail: 'You carry full responsibility for delivery: contractor selection, design coordination, quality monitoring, risk management, and client communication. You use MS Project or Primavera for programming, BIM 360 for document control, and daily site meetings to keep the team aligned. Without you, the project does not start — and without you, it does not finish.',
      start: [
        'Get PMP or APM PMQ certification — recognised qualifications for construction project management',
        'Master MS Project or Primavera P6 — the programme is your most important document on site',
        'Read the PMBOK Guide — the universal foundation for project management thinking and practice',
        'Start as a site engineer or assistant project manager — theory without site experience means nothing'
      ]
    }
  },
  ui: { l2back: '← Back to engineering', title: 'Civil Engineer: which specialisation?' }
};



L2.civil_eng.de = {
  questions: [
    {
      t: 'Was zieht dich am meisten am Bauingenieurwesen an?',
      o: [
        'Tragende Konstruktionen berechnen — Stützen, Träger, Fundamente —, damit Gebäude Jahrhunderte lang stehen',
        'Ingenieurtechnik mit Architektur verbinden — Gebäude entwerfen, die sowohl schön als auch funktional sind',
        'Böden und Fundamente untersuchen — verstehen, was unter der Erde passiert, und entsprechend planen',
        'Eine Baustelle managen — Menschen, Maschinen und Materialien zu einem einzigen funktionierenden Prozess organisieren'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: 'Welches Werkzeug möchtest du am liebsten beherrschen?',
      o: [
        'ETABS oder SAP2000 — Gebäude und Tragwerke unter allen Lastfallkombinationen analysieren',
        'Revit oder ArchiCAD — BIM-Planung, bei der das Modell Tausende einzelner Zeichnungen ersetzt',
        'Plaxis oder GeoStudio — geotechnische Probleme und Böschungsstabilität modellieren',
        'MS Project, Primavera oder BIM 360 — Bauprogramme planen und Fortschritte verfolgen'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: 'Was ist dir bei deiner Arbeit am wichtigsten?',
      o: [
        'Mathematische Präzision — ich mag es, wenn sich alles berechnen und überprüfen lässt',
        'Sichtbare Ergebnisse — sehen, wie meine Idee zu einem echten Gebäude oder einer Brücke wird, die Menschen täglich nutzen',
        'Untersuchung und Analyse — Proben nehmen, Daten auswerten, Schlussfolgerungen über Bodenverhältnisse ziehen',
        'Abwicklung und Organisation — mir ist wichtig, dass das Projekt termingerecht und im Budget abgeschlossen wird'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: 'Wo arbeitest du am liebsten?',
      o: [
        'Im Büro am Computer — Modelle erstellen, Berechnungen prüfen, technische Berichte schreiben',
        'Zwischen Büro und Baustelle — in BIM planen und die Ausführung bei Baustellenbesuchen kontrollieren',
        'Im Außeneinsatz — Bohrlöcher abteufen, Bodenproben nehmen und Tests vor Ort durchführen',
        'Auf der Baustelle — täglich Probleme lösen, Kolonnen koordinieren und Nachunternehmer steuern'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: 'Welches Projekt inspiriert dich am meisten?',
      o: [
        'Tragwerksplanung eines Hochhauses oder einer weitgespannten Brücke — die komplexeste Ingenieuraufgabe',
        'Entwurf eines Flughafens, Stadions oder Kulturzentrums — Maßstab und visuelle Wirkung',
        'Sicherung eines gefährlichen Rutschhang-Hangs oder Entwurf eines Tunnels durch schwieriges Gelände',
        'Übergabe eines großen Wohnkomplexes vom ersten Spatenstich bis zur Schlüsselübergabe'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: 'Wo siehst du dich in 10 Jahren?',
      o: [
        'Leitender Tragwerksplaner oder Partner eines Ingenieurbüros',
        'BIM-Leiter oder Entwurfsdirektor bei einem großen Architektur- und Ingenieurbüro',
        'International anerkannter Geotechnik-Experte mit einem eigenen Fachbüro',
        'Projektdirektor eines Bauprogramms mit 1 Mrd. € oder Inhaber eines Generalunternehmers'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    }
  ],
  roles: {
    struct_eng: {
      emoji: '🏗️',
      name: 'Tragwerksplaner',
      desc: 'Du planst tragende Konstruktionen für Gebäude und Infrastruktur — und sicherst Festigkeit und Sicherheit',
      detail: 'Deine Aufgabe ist es, dafür zu sorgen, dass das Gebäude standhält: unter Wind, Schnee, Erdbeben und dem Zahn der Zeit. Du entwirfst Fundamente, Stützen, Decken und Knotenverbindungen. Du arbeitest in ETABS, SAP2000 oder STAAD Pro, überprüfst deine Berechnungen anhand der Eurocodes oder nationaler Normen und erstellst Tragwerkspläne, nach denen Auftragnehmer bauen können. Jede Berechnung, die du unterzeichnest, ist eine Sicherheitsgarantie.',
      start: [
        'Studiere die Eurocodes gründlich — insbesondere EC0 (Grundlagen der Tragwerksplanung), EC1 (Einwirkungen), EC2 (Beton) und EC3 (Stahl)',
        'Erlerne ein Tragwerksanalyseprogramm: ETABS, SAP2000 oder STAAD Pro sind die am weitesten verbreiteten',
        'Lies „Structural Engineering: A Very Short Introduction" von David Blockley für einen Überblick über die Disziplin',
        'Strebe eine Zulassung als Chartered Engineer beim Institution of Structural Engineers (IStructE) an — die Goldstandard-Qualifikation'
      ]
    },
    arch_eng: {
      emoji: '🏛️',
      name: 'BIM-Ingenieur / Gebäudeingenieur',
      desc: 'Du planst Gebäude in einer BIM-Umgebung — und integrierst Architektur, Tragwerk und Gebäudetechnik',
      detail: 'BIM ist die Zukunft des Bauwesens. Du erstellst ein digitales Gebäudemodell, in dem Architektur, Tragwerk, TGA-Anlagen und Kostendaten als koordiniertes Ganzes existieren. Du arbeitest in Revit, Navisworks oder ArchiCAD, koordinierst die Planung über alle Gewerke hinweg und löst Kollisionen vor Baubeginn. Dein Modell ist die einzige verbindliche Informationsquelle für das gesamte Projektteam.',
      start: [
        'Beherrsche Autodesk Revit — absolviere die offizielle Autodesk-Schulung oder ein anerkanntes BIM-Akademieprogramm',
        'Studiere ISO 19650 — den internationalen Standard für BIM-Informationsmanagement bei Bauprojekten',
        'Erlerne IFC und die Grundsätze von BIM Level 2 — das Rahmenwerk für den offenen Datenaustausch zwischen Anwendungen',
        'Tritt einer BIM-Anwendergruppe oder Online-Community bei — der Erfahrungsaustausch mit Praktikern ist unbezahlbar'
      ]
    },
    geotech_eng: {
      emoji: '🌍',
      name: 'Geotechnikingenieur',
      desc: 'Du untersuchst Baugrundverhältnisse und planst Fundamente — und löst die unberechenbarsten Probleme im Bauwesen',
      detail: 'Alles, was sich über der Erde befindet, ruht auf dem, was du untersucht und geplant hast. Du bewertest das geologische Profil eines Geländes, beurteilst die Tragfähigkeit des Untergrunds und planst Fundamente, Stützkonstruktionen und Erdanker. Du nutzt Plaxis oder GeoStudio, um das Bodenverhalten zu modellieren und Bohrkernprotokolle sowie Laborergebnisse zu interpretieren. Jedes Gelände ist anders — Bodenverhältnisse wiederholen sich nie exakt, und das macht jedes Projekt zu einem Rätsel.',
      start: [
        'Studiere Bodenmechanik — Craig\'s „Soil Mechanics" ist das weltweit an Universitäten verwendete Standardlehrbuch',
        'Erlerne Plaxis 2D/3D — das branchenweite Standard-Geotechnikmodellierungsprogramm',
        'Verstehe Eurocode 7 für geotechnisches Design — er regelt die Fundamentplanung in ganz Europa',
        'Sammle Felderfahrung in einem Geotechnikuntersuchungsunternehmen — echte Bohrkernaufnahme ist unersetzlich'
      ]
    },
    constr_manager: {
      emoji: '📊',
      name: 'Bauprojektmanager',
      desc: 'Du leitest den Bau vom Aushub bis zur Übergabe — und koordinierst Menschen, Programm und Budget',
      detail: 'Du trägst die volle Verantwortung für die Projektabwicklung: Auftragnehmerauswahl, Planungskoordination, Qualitätsüberwachung, Risikomanagement und Kundenkommunikation. Du nutzt MS Project oder Primavera für die Programmplanung, BIM 360 für die Dokumentenverwaltung und tägliche Baubesprechungen, um das Team zu synchronisieren. Ohne dich beginnt das Projekt nicht — und ohne dich wird es auch nicht fertig.',
      start: [
        'Erwerbe eine PMP- oder APM PMQ-Zertifizierung — anerkannte Qualifikationen für das Bauprojektmanagement',
        'Beherrsche MS Project oder Primavera P6 — der Terminplan ist dein wichtigstes Dokument auf der Baustelle',
        'Lies den PMBOK Guide — die universelle Grundlage für Projektmanagement-Denken und -Praxis',
        'Beginne als Bauleiter oder stellvertretender Projektmanager — Theorie ohne Baustellenerfahrung ist nichts wert'
      ]
    }
  },
  ui: { l2back: '← Zurück zur Ingenieurwissenschaft', title: 'Bauingenieur: welche Spezialisierung?' }
};

L2.civil_eng.fr = {
  questions: [
    {
      t: 'Qu\'est-ce qui t\'attire le plus dans le génie civil ?',
      o: [
        'Calculer les structures porteuses — colonnes, poutres, fondations — pour que les bâtiments tiennent des siècles',
        'Associer ingénierie et architecture — concevoir des bâtiments à la fois beaux et fonctionnels',
        'Étudier les sols et les fondations — comprendre ce qui se passe sous terre et en tenir compte dans la conception',
        'Gérer un chantier de construction — organiser les hommes, les engins et les matériaux en un processus de travail cohérent'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: 'Quel outil aimerais-tu le plus maîtriser ?',
      o: [
        'ETABS ou SAP2000 — analyser bâtiments et ouvrages sous toutes les combinaisons de charges',
        'Revit ou ArchiCAD — conception BIM où le maquette remplace des milliers de plans séparés',
        'Plaxis ou GeoStudio — modéliser des problèmes géotechniques et la stabilité des talus',
        'MS Project, Primavera ou BIM 360 — planifier les programmes de construction et suivre l\'avancement'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: 'Qu\'est-ce qui compte le plus pour toi dans ton travail ?',
      o: [
        'La précision mathématique — j\'aime savoir que tout peut être calculé et vérifié',
        'Les résultats visibles — voir mon idée devenir un vrai bâtiment ou un pont que les gens utilisent chaque jour',
        'L\'investigation et l\'analyse — prélever des échantillons, étudier les données, tirer des conclusions sur les conditions du sol',
        'La livraison et l\'organisation — ce qui m\'importe, c\'est que le projet se termine dans les délais et dans le budget'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: 'Où préfères-tu travailler ?',
      o: [
        'Au bureau devant un ordinateur — construire des modèles, vérifier des calculs, rédiger des rapports techniques',
        'Entre bureau et chantier — concevoir en BIM et vérifier la conformité lors des visites de chantier',
        'Sur le terrain — forer des sondages, prélever des échantillons de sol et réaliser des essais sur place',
        'Sur le chantier de construction — résoudre des problèmes quotidiennement, coordonner les équipes et gérer les sous-traitants'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: 'Quel projet t\'inspire le plus ?',
      o: [
        'Conception structurelle d\'un gratte-ciel ou d\'un pont à grande portée — le défi d\'ingénierie le plus complexe',
        'Conception d\'un aéroport, d\'un stade ou d\'un centre culturel — envergure et impact visuel',
        'Stabilisation d\'un versant en glissement de terrain dangereux ou conception d\'un tunnel en terrain difficile',
        'Livraison d\'un grand ensemble résidentiel de la première pellée de terre à la remise des clés'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: 'Où te vois-tu dans 10 ans ?',
      o: [
        'Ingénieur structures principal ou associé dans un bureau d\'études',
        'Responsable BIM ou directeur de conception dans un grand cabinet d\'architecture et d\'ingénierie',
        'Expert géotechnicien reconnu internationalement avec ton propre bureau spécialisé',
        'Directeur de projet sur un programme de construction d\'un milliard d\'euros ou propriétaire d\'une entreprise générale'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    }
  ],
  roles: {
    struct_eng: {
      emoji: '🏗️',
      name: 'Ingénieur structures',
      desc: 'Tu conçois les structures porteuses des bâtiments et des ouvrages d\'infrastructure — en garantissant résistance et sécurité',
      detail: 'Ton travail consiste à t\'assurer que le bâtiment tient debout : sous le vent, la neige, les charges sismiques et l\'épreuve du temps. Tu conçois les fondations, les poteaux, les dalles et les assemblages. Tu travailles dans ETABS, SAP2000 ou STAAD Pro, vérifies tes calculs par rapport aux Eurocodes ou normes nationales, et produis des plans de structure que les entreprises peuvent construire. Chaque calcul que tu valides est une garantie de sécurité.',
      start: [
        'Étudie les Eurocodes en profondeur — notamment EC0 (bases de calcul), EC1 (actions), EC2 (béton) et EC3 (acier)',
        'Apprends un logiciel d\'analyse de structures : ETABS, SAP2000 ou STAAD Pro sont les plus utilisés',
        'Lis « Structural Engineering: A Very Short Introduction » de David Blockley pour une vue d\'ensemble de la discipline',
        'Obtiens le titre de Chartered Engineer auprès de l\'Institution of Structural Engineers (IStructE) — la qualification de référence'
      ]
    },
    arch_eng: {
      emoji: '🏛️',
      name: 'Ingénieur BIM / Ingénieur en bâtiment',
      desc: 'Tu conçois des bâtiments dans un environnement BIM — en intégrant architecture, structure et fluides',
      detail: 'Le BIM est l\'avenir de la construction. Tu crées une maquette numérique du bâtiment où architecture, structure, fluides et données de coûts existent comme un tout coordonné et unique. Tu travailles dans Revit, Navisworks ou ArchiCAD, coordonnes la conception entre les différents corps de métier et résous les conflits avant le début des travaux. Ta maquette est la source unique de vérité pour toute l\'équipe projet.',
      start: [
        'Maîtrise Autodesk Revit — suis la formation officielle Autodesk ou un programme BIM Academy reconnu',
        'Étudie ISO 19650 — la norme internationale pour la gestion de l\'information BIM sur les projets de construction',
        'Apprends l\'IFC et les principes du BIM niveau 2 — le cadre pour l\'échange ouvert de données entre applications',
        'Rejoins un groupe d\'utilisateurs BIM ou une communauté en ligne — la pratique partagée par des professionnels est inestimable'
      ]
    },
    geotech_eng: {
      emoji: '🌍',
      name: 'Ingénieur géotechnicien',
      desc: 'Tu étudies les conditions de sol et conçois des fondations — en résolvant les problèmes les plus imprévisibles de la construction',
      detail: 'Tout ce qui se trouve au-dessus du sol repose sur ce que tu as étudié et conçu. Tu évalues le profil géologique d\'un site, estimes la capacité portante, conçois des fondations, des murs de soutènement et des ancrages. Tu utilises Plaxis ou GeoStudio pour modéliser le comportement des sols et interpréter les logs de sondages et les résultats d\'essais en laboratoire. Chaque site est différent — les conditions de sol ne se répètent jamais exactement, ce qui fait de chaque projet une énigme.',
      start: [
        'Étudie la mécanique des sols — « Soil Mechanics » de Craig est le manuel de référence utilisé dans les universités du monde entier',
        'Apprends Plaxis 2D/3D — le logiciel de modélisation géotechnique de référence dans le monde',
        'Comprends l\'Eurocode 7 sur la conception géotechnique — il régit la conception des fondations dans toute l\'Europe',
        'Acquiers de l\'expérience de terrain dans un bureau d\'études géotechniques — la diagraphie réelle de sondages est irremplaçable'
      ]
    },
    constr_manager: {
      emoji: '📊',
      name: 'Directeur de projet de construction',
      desc: 'Tu pilotes la construction de l\'excavation à la livraison — en coordonnant hommes, programme et budget',
      detail: 'Tu portes la pleine responsabilité de la livraison : sélection des entreprises, coordination de la conception, suivi de la qualité, gestion des risques et communication avec le client. Tu utilises MS Project ou Primavera pour la planification, BIM 360 pour la gestion documentaire et les réunions de chantier quotidiennes pour maintenir l\'équipe alignée. Sans toi, le projet ne commence pas — et sans toi, il ne se termine pas non plus.',
      start: [
        'Obtiens une certification PMP ou APM PMQ — des qualifications reconnues pour la gestion de projets de construction',
        'Maîtrise MS Project ou Primavera P6 — le programme est ton document le plus important sur le chantier',
        'Lis le Guide PMBOK — le fondement universel de la réflexion et de la pratique en gestion de projet',
        'Commence comme ingénieur de chantier ou assistant chef de projet — la théorie sans expérience du terrain ne vaut rien'
      ]
    }
  },
  ui: { l2back: '← Retour à l\'ingénierie', title: 'Ingénieur civil : quelle spécialisation ?' }
};



L2.civil_eng.es = {
  questions: [
    {
      t: '¿Qué es lo que más te atrae de la ingeniería civil?',
      o: [
        'Calcular estructuras portantes — columnas, vigas, cimientos — para que los edificios duren siglos',
        'Combinar ingeniería con arquitectura — diseñar edificios que sean tanto hermosos como funcionales',
        'Investigar suelos y cimientos — entender qué pasa bajo tierra y diseñar en consecuencia',
        'Gestionar una obra — organizar personas, maquinaria y materiales en un proceso de trabajo único'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: '¿Qué herramienta te gustaría dominar primero?',
      o: [
        'ETABS o SAP2000 — analizar edificios y estructuras bajo todas las combinaciones de carga',
        'Revit o ArchiCAD — diseño BIM donde el modelo reemplaza miles de planos separados',
        'Plaxis o GeoStudio — modelar problemas geotécnicos y estabilidad de taludes',
        'MS Project, Primavera o BIM 360 — planificar programas de construcción y hacer seguimiento del progreso'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: '¿Qué es lo que más valoras en tu trabajo?',
      o: [
        'La precisión matemática — me gusta saber que todo se puede calcular y verificar',
        'Los resultados visibles — ver mi idea convertirse en un edificio o puente real que las personas usan cada día',
        'La investigación y el análisis — tomar muestras, estudiar datos, sacar conclusiones sobre las condiciones del suelo',
        'La entrega y la organización — lo que me importa es que el proyecto termine en plazo y dentro del presupuesto'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: '¿Dónde prefieres trabajar?',
      o: [
        'En la oficina frente a una computadora — construir modelos, verificar cálculos, redactar informes técnicos',
        'Entre oficina y obra — diseñar en BIM y verificar el cumplimiento durante las visitas a la obra',
        'En campo — perforar sondeos, tomar muestras de suelo y realizar ensayos in situ',
        'En la obra — resolver problemas cada día, coordinar cuadrillas y gestionar subcontratistas'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: '¿Qué proyecto te inspira más?',
      o: [
        'Diseño estructural de un rascacielos o un puente de gran luz — el reto de ingeniería más complejo',
        'Diseño de un aeropuerto, estadio o centro cultural — escala e impacto visual',
        'Estabilización de un talud peligroso en deslizamiento o diseño de un túnel en terreno difícil',
        'Entrega de un gran conjunto residencial desde el inicio de obras hasta la entrega'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: '¿Dónde te ves en 10 años?',
      o: [
        'Ingeniero estructural líder o socio de una consultora de ingeniería',
        'BIM manager o director de diseño en una gran firma de arquitectura e ingeniería',
        'Experto geotécnico reconocido internacionalmente con tu propia consultoría especializada',
        'Director de proyecto en un programa de construcción de más de 1.000 millones de dólares o propietario de una constructora principal'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    }
  ],
  roles: {
    struct_eng: {
      emoji: '🏗️',
      name: 'Ingeniero Estructural',
      desc: 'Diseñas estructuras portantes para edificios e infraestructuras — garantizando resistencia y seguridad',
      detail: 'Tu trabajo es asegurar que el edificio se mantenga en pie: bajo viento, nieve, cargas sísmicas y el paso del tiempo. Diseñas cimientos, columnas, losas y detalles de conexión. Trabajas en ETABS, SAP2000 o STAAD Pro, verificas tus cálculos con Eurocódigos o normas nacionales y produces planos estructurales con los que los contratistas pueden construir. Cada cálculo que firmas es una garantía de seguridad.',
      start: [
        'Estudia los Eurocódigos en profundidad — especialmente EC0 (bases de cálculo), EC1 (acciones), EC2 (hormigón) y EC3 (acero)',
        'Aprende un programa de análisis estructural: ETABS, SAP2000 o STAAD Pro son los más utilizados',
        'Lee "Structural Engineering: A Very Short Introduction" de David Blockley para una visión general de la disciplina',
        'Obtén la membresía del Institution of Structural Engineers (IStructE) — la credencial de referencia en la profesión'
      ]
    },
    arch_eng: {
      emoji: '🏛️',
      name: 'Ingeniero BIM / Ingeniero de Edificación',
      desc: 'Diseñas edificios en un entorno BIM — integrando arquitectura, estructura e instalaciones',
      detail: 'El BIM es el futuro de la construcción. Creas un modelo digital donde arquitectura, estructura, instalaciones y datos de costos existen como un todo coordinado y único. Trabajas en Revit, Navisworks o ArchiCAD, coordinas el diseño entre disciplinas y resuelves interferencias antes del inicio de obra. Tu modelo es la fuente única de verdad para todo el equipo de proyecto.',
      start: [
        'Domina Autodesk Revit — realiza el curso oficial de Autodesk o un programa BIM Academy reconocido',
        'Estudia ISO 19650 — el estándar internacional para la gestión de información BIM en proyectos de construcción',
        'Aprende IFC y los principios del BIM Nivel 2 — el marco para el intercambio abierto de datos entre aplicaciones',
        'Únete a un grupo de usuarios BIM o comunidad en línea — la práctica compartida por profesionales es invaluable'
      ]
    },
    geotech_eng: {
      emoji: '🌍',
      name: 'Ingeniero Geotécnico',
      desc: 'Investigas las condiciones del terreno y diseñas cimientos — resolviendo los problemas más impredecibles de la construcción',
      detail: 'Todo lo que hay sobre la tierra descansa en lo que tú has investigado y diseñado. Evalúas el perfil geológico de un emplazamiento, estimas la capacidad portante, diseñas cimientos, muros de contención y anclajes al terreno. Usas Plaxis o GeoStudio para modelar el comportamiento del suelo e interpretar registros de sondeos y resultados de ensayos de laboratorio. Cada emplazamiento es diferente — las condiciones del terreno nunca se repiten exactamente, y eso convierte cada proyecto en un rompecabezas.',
      start: [
        'Estudia mecánica de suelos — "Soil Mechanics" de Craig es el libro de texto estándar usado en universidades de todo el mundo',
        'Aprende Plaxis 2D/3D — el programa de modelado geotécnico de referencia en la industria global',
        'Comprende el Eurocódigo 7 de diseño geotécnico — rige el diseño de cimientos en toda Europa',
        'Obtén experiencia de campo en una empresa de investigación geotécnica — el registro real de sondeos es insustituible'
      ]
    },
    constr_manager: {
      emoji: '📊',
      name: 'Director de Proyecto de Construcción',
      desc: 'Gestionas la construcción desde la excavación hasta la entrega — coordinando personas, programa y presupuesto',
      detail: 'Llevas la plena responsabilidad de la entrega: selección de contratistas, coordinación de diseño, seguimiento de calidad, gestión de riesgos y comunicación con el cliente. Usas MS Project o Primavera para la programación, BIM 360 para el control documental y reuniones diarias de obra para mantener al equipo alineado. Sin ti, el proyecto no empieza — y sin ti, tampoco termina.',
      start: [
        'Obtén la certificación PMP o APM PMQ — calificaciones reconocidas para la gestión de proyectos de construcción',
        'Domina MS Project o Primavera P6 — el programa de obra es tu documento más importante en la construcción',
        'Lee la Guía PMBOK — la base universal del pensamiento y la práctica en gestión de proyectos',
        'Empieza como ingeniero de obra o asistente de director de proyecto — la teoría sin experiencia en obra no vale nada'
      ]
    }
  },
  ui: { l2back: '← Volver a ingeniería', title: 'Ingeniería civil: ¿qué especialización?' }
};

L2.civil_eng.pt = {
  questions: [
    {
      t: 'O que mais te atrai na engenharia civil?',
      o: [
        'Calcular estruturas portantes — colunas, vigas, fundações — para que os edifícios durem séculos',
        'Combinar engenharia com arquitetura — projetar edifícios que sejam ao mesmo tempo bonitos e funcionais',
        'Investigar solos e fundações — entender o que acontece no subsolo e projetar levando isso em conta',
        'Gerenciar uma obra — organizar pessoas, equipamentos e materiais em um único processo de trabalho'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: 'Qual ferramenta você gostaria mais de dominar?',
      o: [
        'ETABS ou SAP2000 — analisar edifícios e estruturas sob todas as combinações de carga',
        'Revit ou ArchiCAD — projeto BIM onde o modelo substitui milhares de pranchas separadas',
        'Plaxis ou GeoStudio — modelar problemas geotécnicos e estabilidade de taludes',
        'MS Project, Primavera ou BIM 360 — planejar programas de construção e acompanhar o progresso'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: 'O que mais importa para você no trabalho?',
      o: [
        'Precisão matemática — gosto de saber que tudo pode ser calculado e verificado',
        'Resultados visíveis — ver minha ideia se tornar um edifício ou ponte real que as pessoas usam todos os dias',
        'Investigação e análise — coletar amostras, estudar dados, tirar conclusões sobre as condições do terreno',
        'Entrega e organização — o que me importa é que o projeto termine no prazo e dentro do orçamento'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: 'Onde você prefere trabalhar?',
      o: [
        'No escritório no computador — construir modelos, verificar cálculos, escrever relatórios técnicos',
        'Entre escritório e obra — projetar em BIM e verificar a conformidade durante as visitas à obra',
        'No campo — perfurar sondagens, coletar amostras de solo e realizar ensaios no local',
        'Na obra — resolver problemas diariamente, coordenar equipes e gerenciar subempreiteiros'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: 'Qual projeto te inspira mais?',
      o: [
        'Projeto estrutural de um arranha-céu ou ponte de grande vão — o desafio de engenharia mais complexo',
        'Projeto de um aeroporto, estádio ou centro cultural — escala e impacto visual',
        'Estabilização de um talude perigoso em deslizamento ou projeto de um túnel em terreno difícil',
        'Entrega de um grande empreendimento residencial desde o início das obras até a entrega das chaves'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    },
    {
      t: 'Onde você se vê em 10 anos?',
      o: [
        'Engenheiro estrutural líder ou sócio de uma consultoria de engenharia',
        'BIM manager ou diretor de projeto em um grande escritório de arquitetura e engenharia',
        'Especialista geotécnico reconhecido internacionalmente com sua própria consultoria especializada',
        'Diretor de projeto em um programa de construção de mais de R$5 bilhões ou dono de uma construtora principal'
      ],
      s: [{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]
    }
  ],
  roles: {
    struct_eng: {
      emoji: '🏗️',
      name: 'Engenheiro Estrutural',
      desc: 'Você projeta estruturas portantes para edifícios e infraestruturas — garantindo resistência e segurança',
      detail: 'Seu trabalho é garantir que o edifício fique em pé: sob vento, neve, cargas sísmicas e o teste do tempo. Você projeta fundações, pilares, lajes e detalhes de ligação. Trabalha no ETABS, SAP2000 ou STAAD Pro, verifica seus cálculos conforme os Eurocódigos ou normas nacionais e produz pranchas estruturais com as quais as construtoras podem construir. Cada cálculo que você assina é uma garantia de segurança.',
      start: [
        'Estude os Eurocódigos em profundidade — especialmente EC0 (bases de projeto), EC1 (ações), EC2 (concreto) e EC3 (aço)',
        'Aprenda um programa de análise estrutural: ETABS, SAP2000 ou STAAD Pro são os mais usados',
        'Leia "Structural Engineering: A Very Short Introduction" de David Blockley para uma visão geral da disciplina',
        'Busque a titulação do Institution of Structural Engineers (IStructE) — a credencial de referência da profissão'
      ]
    },
    arch_eng: {
      emoji: '🏛️',
      name: 'Engenheiro BIM / Engenheiro de Edificações',
      desc: 'Você projeta edifícios em ambiente BIM — integrando arquitetura, estrutura e instalações prediais',
      detail: 'O BIM é o futuro da construção. Você cria um modelo digital onde arquitetura, estrutura, instalações e dados de custos existem como um todo coordenado e único. Trabalha no Revit, Navisworks ou ArchiCAD, coordena o projeto entre disciplinas e resolve interferências antes do início da obra. Seu modelo é a fonte única de verdade para toda a equipe do projeto.',
      start: [
        'Domine o Autodesk Revit — faça o treinamento oficial da Autodesk ou um programa BIM Academy reconhecido',
        'Estude a ISO 19650 — o padrão internacional para gestão de informação BIM em projetos de construção',
        'Aprenda IFC e os princípios do BIM Nível 2 — o framework para intercâmbio aberto de dados entre aplicações',
        'Participe de um grupo de usuários BIM ou comunidade online — a prática compartilhada por profissionais é inestimável'
      ]
    },
    geotech_eng: {
      emoji: '🌍',
      name: 'Engenheiro Geotécnico',
      desc: 'Você investiga as condições do terreno e projeta fundações — resolvendo os problemas mais imprevisíveis da construção',
      detail: 'Tudo o que existe acima do solo repousa sobre o que você investigou e projetou. Você avalia o perfil geológico de um terreno, estima a capacidade de carga, projeta fundações, muros de arrimo e tirantes. Usa Plaxis ou GeoStudio para modelar o comportamento do solo e interpretar registros de sondagens e resultados de ensaios de laboratório. Cada terreno é diferente — as condições do solo nunca se repetem exatamente, e isso torna cada projeto um quebra-cabeça.',
      start: [
        'Estude mecânica dos solos — "Soil Mechanics" de Craig é o livro-texto padrão usado em universidades do mundo inteiro',
        'Aprenda Plaxis 2D/3D — o programa de modelagem geotécnica de referência da indústria global',
        'Entenda o Eurocódigo 7 de projeto geotécnico — rege o projeto de fundações em toda a Europa',
        'Adquira experiência de campo em uma empresa de investigação geotécnica — o registro real de sondagens é insubstituível'
      ]
    },
    constr_manager: {
      emoji: '📊',
      name: 'Gerente de Projetos de Construção',
      desc: 'Você gerencia a construção da escavação à entrega — coordenando pessoas, cronograma e orçamento',
      detail: 'Você carrega a plena responsabilidade pela entrega: seleção de empreiteiros, coordenação de projeto, monitoramento de qualidade, gestão de riscos e comunicação com o cliente. Usa MS Project ou Primavera para o planejamento, BIM 360 para o controle documental e reuniões diárias de obra para manter a equipe alinhada. Sem você, o projeto não começa — e sem você, ele também não termina.',
      start: [
        'Obtenha a certificação PMP ou APM PMQ — qualificações reconhecidas para gestão de projetos de construção',
        'Domine MS Project ou Primavera P6 — o cronograma é o seu documento mais importante na obra',
        'Leia o Guia PMBOK — a base universal do pensamento e da prática em gestão de projetos',
        'Comece como engenheiro de campo ou assistente de gerente de projetos — teoria sem experiência de obra não vale nada'
      ]
    }
  },
  ui: { l2back: '← Voltar à engenharia', title: 'Engenharia civil: qual especialização?' }
};

L2.civil_eng.ar = {
  questions: [
    { t:"أيّ جانب من الهندسة المدنية يستهويك أكثر؟", o:["تصميم الجسور والأبنية والمنشآت الكبرى","العمارة والهندسة المعمارية والتصميم الوظيفي","دراسة التربة والجيولوجيا وسلامة الأساسات","إدارة مشاريع البناء وتنسيق الفرق الميدانية"], s:[{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}] },
    { t:"أيّ أداة تودّ إتقانها؟", o:["برامج SAP2000 وETABS وتحليل الهياكل الإنشائية","AutoCAD وRevit وتصميم المخططات المعمارية","اختبارات التربة وأدوات التحليل الجيوتقني","MS Project وPrimavera وأدوات جدولة المشاريع"], s:[{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}] },
    { t:"أيّ نتيجة تُشعرك بالرضا أكثر؟", o:["رؤية جسر أو مبنى أمّنت سلامة تصميمه يُبنى على أرض الواقع","رؤية مبنى صممت ملامحه يُصبح معلماً معمارياً مميزاً","تقرير جيوتقني يمنع كارثة بسبب اكتشاف خطأ في التربة","مشروع يُنجز في الوقت المحدد وبالميزانية المتفق عليها"], s:[{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}] },
    { t:"أين تُفضّل العمل؟", o:["في مكتب هندسي متخصص في الهياكل والإنشاءات","في مكتب معماري يجمع الجمال والوظيفة","في مشاريع الأساسات والبنية التحتية الكبرى","في موقع البناء لإدارة وتنسيق العمليات"], s:[{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}] },
    { t:"أيّ مهمة أقرب إليك؟", o:["تصميم هيكل إنشائي جسر يتحمل أحمالاً قصوى","رسم مخططات معمارية مفصلة لمبنى سكني","تحليل عينة تربة لتحديد عمق وطريقة الأساس","وضع جدول زمني تفصيلي لمشروع بناء ضخم"], s:[{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}] },
    { t:"أين ترى نفسك بعد عشر سنوات؟", o:["مهندس إنشائي أول في شركة هندسية عالمية","مهندس معماري يعمل على مشاريع ذات طابع خاص","خبير جيوتقني مرجعي في مشاريع البنية التحتية","مدير مشاريع يُشرف على إنشاءات كبرى"], s:[{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}] },
  ],
  roles: {
    struct_eng:{ emoji:"🏗️", name:"مهندس إنشائي", desc:"تُصمّم وتُحلّل الهياكل الإنشائية للمباني والجسور", detail:"تعمل في المكاتب الهندسية.", start:["تعلّم SAP2000 وETABS وبرامج التحليل الإنشائي","ادرس ميكانيكا الهياكل والمواد الإنشائية","تدرّب في مكاتب هندسية معتمدة","احصل على شهادة المهندس الإنشائي المعتمد"] },
    arch_eng:{ emoji:"🏛️", name:"مهندس معماري مدني", desc:"تُصمّم المباني بشكل وظيفي وجمالي", detail:"تجمع بين الفن والهندسة.", start:["أتقن AutoCAD وRevit وأدوات BIM","ادرس نظريات التصميم المعماري","طوّر حسك الجمالي والوظيفي","ابنِ ملف أعمال معمارية متنوعة"] },
    geotech_eng:{ emoji:"🌍", name:"مهندس جيوتقني", desc:"تدرس التربة والصخور لضمان سلامة الأساسات", detail:"تعمل في مشاريع البنية التحتية.", start:["ادرس الجيولوجيا الهندسية وميكانيكا التربة","تعلّم اختبارات التربة الحقلية والمختبرية","تدرّب في مشاريع الأساسات","احصل على شهادة الهندسة الجيوتقنية"] },
    constr_manager:{ emoji:"📊", name:"مدير موقع البناء", desc:"تُدير تنفيذ مشاريع البناء وتُنسّق بين الفرق", detail:"تعمل في الميدان.", start:["تعلّم إدارة المشاريع وجدولة الإنشاءات","أتقن Primavera وMS Project","تدرّب في مشاريع بناء كبيرة","احصل على شهادة PMP أو PMI-CP"] },
  },
  ui:{ l2back:"← العودة إلى الهندسة", title:"الهندسة المدنية: ما التخصص؟" }
};

L2.civil_eng.he = {
  questions: [
    { t:"מה הצד שהכי מעניין אותך בהנדסה אזרחית?", o:["תכנון גשרים, בניינים ומבנים גדולים","אדריכלות ועיצוב פונקציונלי","חקר קרקע, גיאולוגיה ובטיחות יסודות","ניהול פרויקטי בנייה"], s:[{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}] },
    { t:"איזה כלי הכי תרצה לשלוט בו?", o:["SAP2000, ETABS וניתוח מבנים","AutoCAD, Revit ותכנון אדריכלי","בדיקות קרקע וניתוח גיאוטכני","MS Project, Primavera וניהול לוחות זמנים"], s:[{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}] },
    { t:"איזה תוצאה הכי ממלאת אותך סיפוק?", o:["גשר שתכננת נבנה בפועל","בניין שעיצבת הופך לאתר מאפיין","דוח גיאוטכני שמנע קטסטרופה","פרויקט שמסתיים בזמן ובתקציב"], s:[{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}] },
    { t:"איפה אתה מעדיף לעבוד?", o:["במשרד הנדסי למבנים","במשרד אדריכלי","בפרויקטי תשתית ויסודות","באתר הבנייה לניהול"], s:[{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}] },
    { t:"איזה משימה הכי קרובה ללב שלך?", o:["תכנון מבנה גשר","שרטוט תוכניות אדריכליות","ניתוח דגימת קרקע","עריכת לוח זמנים לפרויקט בנייה"], s:[{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}] },
    { t:"איפה אתה רואה את עצמך עוד 10 שנים?", o:["מהנדס מבנים בכיר","אדריכל בעל פרויקטים מיוחדים","מומחה גיאוטכני","מנהל פרויקטים גדולים"], s:[{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}] },
  ],
  roles: {
    struct_eng:{ emoji:"🏗️", name:"מהנדס מבנים", desc:"אתה מתכנן ומנתח מבנים", detail:"אתה עובד במשרדים הנדסיים.", start:["למד SAP2000 ו-ETABS","למד מכניקת מבנים","התמחה במשרדים הנדסיים","קבל הסמכת מהנדס מבנים"] },
    arch_eng:{ emoji:"🏛️", name:"מהנדס אדריכלי", desc:"אתה מתכנן בניינים מבחינה פונקציונלית ואסתטית", detail:"אתה משלב אמנות והנדסה.", start:["שלוט ב-AutoCAD וRevit","למד תיאוריות עיצוב אדריכלי","פתח חוש אסתטי","בנה תיק עבודות אדריכלי"] },
    geotech_eng:{ emoji:"🌍", name:"מהנדס גיאוטכני", desc:"אתה חוקר קרקע לבטיחות יסודות", detail:"אתה עובד בפרויקטי תשתית.", start:["למד גיאולוגיה הנדסית ומכניקת קרקע","למד בדיקות קרקע","התמחה בפרויקטי יסודות","קבל הסמכה גיאוטכנית"] },
    constr_manager:{ emoji:"📊", name:"מנהל אתר בנייה", desc:"אתה מנהל ביצוע פרויקטים", detail:"אתה עובד בשטח.", start:["למד ניהול פרויקטים","שלוט ב-Primavera","התמחה בפרויקטים גדולים","קבל PMP"] },
  },
  ui:{ l2back:"← חזרה להנדסה", title:"הנדסה אזרחית: איזה התמחות?" }
};

L2.civil_eng.zh = {
  questions: [
    {t:'土木与建筑工程中什么最吸引你？', o:['结构工程——设计承受荷载的框架、桥梁和建筑结构','建筑工程——规划和管理建筑工程的施工全过程','岩土工程——研究地基和土体，让建筑安全建在地上','工程管理——作为总包方，统筹大型建设项目'], s:[{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]},
    {t:'你最想精通哪个方向？', o:['PKPM/SAP2000结构计算和结构优化','施工组织设计、进度管理和质量控制','地勘报告分析、地基处理方案设计','大型项目的进度、成本、安全综合管理'], s:[{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]},
    {t:'什么成果最让你有成就感？', o:['你负责的结构设计通过了全部审查并成功施工','你管理的项目提前20天竣工，质量零缺陷','你的地基处理方案解决了复杂地质条件下的难题','你负责的项目获得了鲁班奖（国家优质工程奖）'], s:[{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]},
    {t:'你更喜欢哪种工作？', o:['用计算软件分析荷载、计算配筋，出图纸','在工地协调施工队伍，解决现场技术问题','做地质勘察，分析土样，设计地基处理方案','制定总控计划，协调设计、采购、施工各方'], s:[{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]},
    {t:'你会选择哪个项目？', o:['设计一座50米跨度的钢结构天桥','负责一栋30层住宅楼的施工总承包','设计一个深基坑的支护和降水方案','作为项目经理负责一个大型商业综合体的建设'], s:[{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]},
    {t:'10年后你在哪里？', o:['设计院的注册结构工程师','大型施工企业的技术总工程师','岩土勘察设计公司的总工程师','集团公司的工程总监，手握百亿项目'], s:[{struct_eng:3},{arch_eng:3},{geotech_eng:3},{constr_manager:3}]}
  ],
  roles: {
    struct_eng: {emoji:'🏗️', name:'结构工程师', desc:'计算和设计能安全承受各种荷载的建筑结构', detail:'你是建筑骨架的设计者。你计算风荷载、地震力、重力，设计梁柱板的截面和配筋，确保建筑在极端情况下也不会倒塌。', start:['精通PKPM或YJK结构计算软件','学习建筑结构设计规范——抗震设计规范、混凝土结构规范','了解BIM基础——Revit在结构中的应用','考取注册结构工程师——这是结构设计的执业资格']},
    arch_eng: {emoji:'🏛️', name:'建筑施工工程师', desc:'将设计图纸变成真实建筑，管理施工现场的每一个细节', detail:'你在工地上工作。你审查施工图，协调各专业施工队伍，处理现场变更，确保工程按图施工、质量合规、安全无事故。', start:['学习建筑施工技术——混凝土、钢结构、幕墙施工','掌握施工质量验收规范','了解建设工程施工合同和造价知识','争取在施工现场实习，积累实际工程经验']},
    geotech_eng: {emoji:'⛏️', name:'岩土工程师', desc:'研究地质和土体条件，为建筑提供安全稳定的基础', detail:'你解决的是建筑最基础的问题——如何在地上建东西而不沉不倒。你分析地勘报告，设计桩基和地基处理方案，解决深基坑支护和降水问题。', start:['学习土力学和岩石力学基础','掌握地勘报告的阅读和分析','了解常见地基处理方法——换填、灌注桩、地基加固','考取注册岩土工程师执业资格']},
    constr_manager: {emoji:'📋', name:'工程建设项目经理', desc:'统筹协调建设项目的全过程，确保项目按时、按预算、高质量交付', detail:'你是建设项目的最高责任人。你管理进度、成本、质量、安全四大目标，协调建设单位、设计院、监理、施工方等多方关系。', start:['学习项目管理体系——考取PMP或一级建造师','了解工程造价基础——工程量清单和定额计价','掌握建设工程合同管理——FIDIC合同条件','在大型工程公司积累项目管理经验']}
  },
  ui: {l2back:'← 返回土木工程', title:'土木与建筑工程：选择你的专业方向'}
};
