'use strict';
/* ── L2: Электроинженер ──────────────────────────────────────────────────────
   4 roles: power_eng ⚡ | electronics_eng 🔌 | embedded_eng 🖥️ | elec_project_eng 📐
   RU only — другие языки добавляются отдельно
──────────────────────────────────────────────────────────────────────────── */

L2.electrician.ru = {
  questions: [
    {
      t: 'Что в электротехнике тебя интересует больше?',
      o: [
        'Силовые системы — электростанции, подстанции, распределение энергии на сотни мегаватт',
        'Электронные устройства и схемы — усилители, преобразователи, микросхемы и платы',
        'Встроенные системы — программирование микроконтроллеров, которые управляют оборудованием',
        'Электропроектирование — разработка рабочей документации и согласование электрических систем'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: 'Какой инструмент тебе хотелось бы освоить?',
      o: [
        'ETAP или DigSilent — моделировать энергосистемы и рассчитывать токи короткого замыкания',
        'Altium Designer или KiCad — проектировать печатные платы и принципиальные схемы',
        'STM32CubeIDE или IAR — писать прошивки на С для микроконтроллеров',
        'AutoCAD Electrical или EPLAN — рисовать однолинейные схемы и шкафы управления'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: 'Какой результат работы тебя радует?',
      o: [
        'Подстанция введена в эксплуатацию — тысячи домов получили надёжное электричество',
        'Плата с первого раза запустилась и заработала именно так, как я спроектировал схему',
        'Прошивка написана, контроллер управляет станком в реальном времени без сбоев',
        'Комплект рабочей документации прошёл экспертизу с первого раза без замечаний'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: 'Где тебе комфортнее работать?',
      o: [
        'На объектах — подстанции, электростанции, в диспетчерских энергосистем',
        'В лаборатории — паять, измерять осциллографом, анализировать спектры сигналов',
        'В офисе за кодом — писать прошивки, дебажить в JTAG, тестировать на отладочных платах',
        'В офисе за CAD — рисовать чертежи, согласовывать с надзором, готовить спецификации'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: 'Какая задача тебе ближе?',
      o: [
        'Обеспечить бесперебойное электроснабжение промышленного района или крупного завода',
        'Разработать аналоговый фильтр или импульсный источник питания для нового устройства',
        'Написать RTOS-планировщик задач для управления промышленным оборудованием',
        'Разработать электрическую часть проекта нового производственного корпуса'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: 'Где ты видишь себя через 10 лет?',
      o: [
        'Главный энергетик крупного предприятия или директор по развитию электросетевой компании',
        'Ведущий разработчик аналоговых/цифровых схем в электронной компании мирового уровня',
        'Архитектор встроенных систем — разрабатываю платформы, на которых строят сотни продуктов',
        'ГИП (главный инженер проекта) крупного электротехнического проектного института'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    }
  ],
  roles: {
    power_eng: {
      emoji: '⚡',
      name: 'Инженер электроэнергетики',
      desc: 'Проектируешь и обслуживаешь системы электроснабжения — от подстанций до распределительных сетей',
      detail: 'Ты работаешь с большой энергетикой: рассчитываешь токи короткого замыкания, выбираешь коммутационную аппаратуру, проектируешь релейную защиту и автоматику. Используешь ETAP, DigSilent или RastrWin для моделирования энергосистем. Твоя работа — основа работы городов, заводов и инфраструктуры. Ошибка может стоить очень дорого, поэтому стандарты и регламенты — твои лучшие друзья.',
      start: [
        'Изучи ПУЭ (Правила устройства электроустановок) — библия российского электроинженера',
        'Освой RastrWin3 — стандарт расчёта электрических режимов в российских энергосистемах',
        'Пройди обучение и получи группу по электробезопасности (минимум IV группа до 1000В)',
        'Читай «Справочник по проектированию электроснабжения» Барановского — классика отрасли'
      ]
    },
    electronics_eng: {
      emoji: '🔌',
      name: 'Инженер-электронщик',
      desc: 'Разрабатываешь электронные устройства и схемы — от принципиальной схемы до готовой платы',
      detail: 'Ты создаёшь электронику, которая есть во всём: в смартфонах, медицинских приборах, промышленном оборудовании. Рисуешь принципиальные схемы в Altium Designer или KiCad, разводишь печатные платы, выбираешь компоненты и рассчитываешь режимы. Потом в лаборатории проверяешь: осциллограф, анализатор спектра, источник питания. Нашёл проблему — исправил, запустил.',
      start: [
        'Изучи основы аналоговой и цифровой электроники: книга Хоровица и Хилла «Искусство схемотехники»',
        'Освой KiCad — он бесплатный, мощный и используется во всём мире включая серьёзные компании',
        'Пройди курс по силовой электронике: DC/DC преобразователи — это основа большинства устройств',
        'Читай даташиты! Умение читать документацию на компоненты — главный навык электронщика'
      ]
    },
    embedded_eng: {
      emoji: '🖥️',
      name: 'Инженер встроенных систем',
      desc: 'Программируешь микроконтроллеры и создаёшь прошивки для умных устройств и оборудования',
      detail: 'Ты пишешь код, который работает на голом железе — без операционной системы Windows или Linux, напрямую управляя регистрами процессора. Программируешь STM32, NXP или TI на C/C++, работаешь с периферией: UART, SPI, I2C, CAN, PWM. Отлаживаешь через JTAG/SWD, оптимизируешь под ограничения памяти и энергопотребления. Твоя прошивка живёт в устройстве годами.',
      start: [
        'Начни с STM32 и HAL-библиотек — это самый распространённый МК в промышленности',
        'Изучи FreeRTOS — базовая RTOS для встроенных систем с несколькими задачами',
        'Читай «Разработка встраиваемых систем» Бэрри Эндрю — практическое руководство на C',
        'Освой работу с отладчиком: GDB + OpenOCD — умение дебажить прошивки на 80% твоей работы'
      ]
    },
    elec_project_eng: {
      emoji: '📐',
      name: 'Инженер-проектировщик (ЭОМ)',
      desc: 'Разрабатываешь электрическую часть строительных проектов — от ТЗ до рабочей документации',
      detail: 'Ты работаешь в проектной организации: разрабатываешь разделы ЭМ, ЭОМ и АУПС. Рисуешь однолинейные схемы, планы прокладки кабелей, шкафы управления и молниезащиту. Работаешь в AutoCAD Electrical или EPLAN, выполняешь расчёты по нагрузкам, выбору сечений и защитной аппаратуры. Твоя документация проходит государственную экспертизу — значит, каждая цифра должна быть обоснована.',
      start: [
        'Изучи ПУЭ, СП 256 и СП 6 — основные нормативные документы для электропроектирования',
        'Освой AutoCAD Electrical или nanoCAD Электро — главные инструменты российских проектировщиков',
        'Пройди курс по расчёту электрических нагрузок и выбору сечений кабелей',
        'Найди стажировку в проектном институте — практика под руководством ГИПа ценнее любых курсов'
      ]
    }
  },
  ui: { l2back: '← К инженерии', title: 'Электроинженер: какая специализация?' }
};



L2.electrician.en = {
  questions: [
    {
      t: 'What area of electrical engineering interests you most?',
      o: [
        'Power systems — power stations, substations, and distributing energy across hundreds of megawatts',
        'Electronic devices and circuits — amplifiers, converters, microchips, and PCB design',
        'Embedded systems — programming microcontrollers that control equipment in real time',
        'Electrical design — producing working drawings and getting electrical systems approved'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: 'Which tool would you most like to master?',
      o: [
        'ETAP or DigSilent — modelling power systems and calculating short-circuit currents',
        'Altium Designer or KiCad — designing PCBs and schematic diagrams',
        'STM32CubeIDE or IAR — writing firmware in C for microcontrollers',
        'AutoCAD Electrical or EPLAN — drawing single-line diagrams and control panel layouts'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: 'What result of your work gives you most satisfaction?',
      o: [
        'A substation is commissioned — thousands of homes have reliable power supplied through my design',
        'The PCB powered up first time and worked exactly as I had designed the schematic',
        'The firmware is written and the controller manages the machine in real time without a single fault',
        'The full design package passed engineering review first time with no comments'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: 'Where do you prefer to work?',
      o: [
        'On site — substations, power stations, and control rooms of energy systems',
        'In a lab — soldering, measuring with an oscilloscope, analysing signal spectra',
        'In an office writing code — firmware development, JTAG debugging, testing on evaluation boards',
        'In an office doing CAD — drawing schematics, coordinating with regulators, preparing specifications'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: 'Which challenge is closest to you?',
      o: [
        'Ensuring reliable power supply to an industrial district or large manufacturing facility',
        'Designing an analogue filter or switch-mode power supply for a new product',
        'Writing an RTOS task scheduler for industrial equipment control',
        'Developing the electrical design package for a new production building'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: 'Where do you see yourself in 10 years?',
      o: [
        'Chief Power Engineer at a major industrial facility or development director at a grid company',
        'Lead analogue/digital circuit designer at a world-class electronics company',
        'Embedded systems architect — developing platforms that underpin hundreds of products',
        'Lead Project Engineer at a large electrical engineering design institute'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    }
  ],
  roles: {
    power_eng: {
      emoji: '⚡',
      name: 'Power Systems Engineer',
      desc: 'You design and maintain electrical supply systems — from substations to distribution networks',
      detail: 'You work with large-scale electrical infrastructure: calculating short-circuit currents, selecting switchgear, designing protection and automation relays. You use ETAP, DigSilent, or PowerWorld to model power systems. Your work is the foundation of everything cities, factories, and infrastructure depend on. A mistake can be catastrophic, so standards and regulations are your closest allies.',
      start: [
        'Study IEC standards for power systems — the international framework for electrical engineers',
        'Learn ETAP or DigSilent PowerFactory — the leading power system analysis tools worldwide',
        'Get your electrical safety authorisation — a formal requirement before working on live systems',
        'Read "Electrical Power Systems" by C.L. Wadhwa — a comprehensive engineering textbook'
      ]
    },
    electronics_eng: {
      emoji: '🔌',
      name: 'Electronics Engineer',
      desc: 'You design electronic devices and circuits — from schematic to finished PCB',
      detail: 'You create the electronics inside everything: smartphones, medical devices, industrial equipment. You draw schematics in Altium Designer or KiCad, lay out PCBs, select components, and calculate operating conditions. Then in the lab you verify: oscilloscope, spectrum analyser, bench power supply. Found a problem — fix the layout, spin another board, retest.',
      start: [
        'Learn analogue and digital electronics fundamentals: "The Art of Electronics" by Horowitz and Hill',
        'Master KiCad — it is free, powerful, and used by serious companies and hobbyists worldwide',
        'Study power electronics: DC/DC converters are at the heart of almost every modern electronic product',
        'Read datasheets! The ability to extract what you need from component documentation is the core skill'
      ]
    },
    embedded_eng: {
      emoji: '🖥️',
      name: 'Embedded Systems Engineer',
      desc: 'You program microcontrollers and write firmware for smart devices and industrial equipment',
      detail: 'You write code that runs on bare metal — without Windows or Linux, directly controlling processor registers. You program STM32, NXP, or TI devices in C/C++, work with peripherals: UART, SPI, I2C, CAN, PWM. You debug over JTAG/SWD, optimise for memory and power constraints, and write code that will run in a device for ten years without being updated.',
      start: [
        'Start with STM32 and HAL libraries — the most widely used microcontroller family in industry',
        'Learn FreeRTOS — the standard RTOS for embedded systems with multiple concurrent tasks',
        'Read "Programming Embedded Systems" by Michael Barr — a practical C-based guide',
        'Master GDB + OpenOCD for debugging — firmware debugging is 80% of the embedded engineer\'s job'
      ]
    },
    elec_project_eng: {
      emoji: '📐',
      name: 'Electrical Design Engineer',
      desc: 'You produce the electrical design for construction projects — from specifications to approved drawings',
      detail: 'You work in a design consultancy or engineering firm: producing electrical layouts, single-line diagrams, cable schedules, and switchboard drawings for buildings and industrial facilities. You calculate loads, select cable cross-sections and protective devices, and coordinate with structural and mechanical engineers. Your documents go through formal engineering review — every figure must be justified.',
      start: [
        'Study IEC 60364 and the relevant national electrical installation standard for your country',
        'Learn AutoCAD Electrical or EPLAN — the standard tools for electrical schematic and panel design',
        'Take a course in load calculations and cable sizing — the technical foundation of the discipline',
        'Find a placement at a design firm — working under a senior engineer is worth more than any course'
      ]
    }
  },
  ui: { l2back: '← Back to engineering', title: 'Electrical Engineer: which specialisation?' }
};



L2.electrician.de = {
  questions: [
    {
      t: 'Welcher Bereich der Elektrotechnik interessiert dich am meisten?',
      o: [
        'Energiesysteme — Kraftwerke, Umspannwerke und Verteilung von Energie über hunderte Megawatt',
        'Elektronische Geräte und Schaltkreise — Verstärker, Wandler, Mikrochips und Leiterplattendesign',
        'Eingebettete Systeme — Programmierung von Mikrocontrollern, die Geräte in Echtzeit steuern',
        'Elektrische Planung — Ausführungszeichnungen erstellen und elektrische Systeme genehmigen lassen'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: 'Welches Werkzeug würdest du am liebsten beherrschen?',
      o: [
        'ETAP oder DigSilent — Energiesysteme modellieren und Kurzschlussströme berechnen',
        'Altium Designer oder KiCad — Leiterplatten und Schaltpläne entwerfen',
        'STM32CubeIDE oder IAR — Firmware in C für Mikrocontroller schreiben',
        'AutoCAD Electrical oder EPLAN — Einlinienschaltpläne und Steuertafellayouts zeichnen'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: 'Welches Arbeitsergebnis erfüllt dich am meisten mit Zufriedenheit?',
      o: [
        'Ein Umspannwerk wird in Betrieb genommen — tausende Haushalte haben durch mein Design zuverlässigen Strom',
        'Die Leiterplatte lief beim ersten Versuch und funktionierte genau so, wie ich den Schaltplan entworfen hatte',
        'Die Firmware ist fertig und der Controller steuert die Maschine ohne einen einzigen Fehler in Echtzeit',
        'Das vollständige Planungspaket bestand die technische Prüfung beim ersten Mal ohne Anmerkungen'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: 'Wo arbeitest du am liebsten?',
      o: [
        'Vor Ort — Umspannwerke, Kraftwerke und Leitstellen von Energiesystemen',
        'Im Labor — löten, mit dem Oszilloskop messen, Signalspektren analysieren',
        'Im Büro beim Programmieren — Firmware entwickeln, JTAG-Debugging, Tests auf Evaluierungsboards',
        'Im Büro am CAD — Schemata zeichnen, mit Behörden koordinieren, Spezifikationen erstellen'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: 'Welche Aufgabe liegt dir am nächsten?',
      o: [
        'Zuverlässige Stromversorgung für ein Industriegebiet oder eine große Produktionsanlage sicherstellen',
        'Einen Analogfilter oder ein Schaltnetzteil für ein neues Produkt entwerfen',
        'Einen RTOS-Aufgabenplaner für die industrielle Gerätesteuerung schreiben',
        'Das elektrische Planungspaket für ein neues Produktionsgebäude entwickeln'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: 'Wo siehst du dich in 10 Jahren?',
      o: [
        'Chefenergetiker in einem großen Industrieunternehmen oder Entwicklungsdirektor bei einem Netzbetreiber',
        'Leitender Analog-/Digitalschaltungs-Entwickler bei einem weltweit führenden Elektronikunternehmen',
        'Architekt für eingebettete Systeme — ich entwickle Plattformen, auf denen hunderte Produkte aufgebaut werden',
        'Leitender Projektingenieur bei einem großen elektrotechnischen Planungsbüro'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    }
  ],
  roles: {
    power_eng: {
      emoji: '⚡',
      name: 'Energiesystemingenieur',
      desc: 'Du entwirfst und wartest elektrische Versorgungssysteme — von Umspannwerken bis zu Verteilungsnetzen',
      detail: 'Du arbeitest mit großer elektrischer Infrastruktur: du berechnest Kurzschlussströme, wählst Schaltgeräte aus, entwirfst Schutz- und Automatisierungsrelais. Du verwendest ETAP, DigSilent oder PowerWorld zur Modellierung von Energiesystemen. Deine Arbeit ist das Fundament, auf das Städte, Fabriken und Infrastruktur angewiesen sind. Ein Fehler kann katastrophale Folgen haben — daher sind Normen und Vorschriften deine engsten Verbündeten.',
      start: [
        'Studiere IEC-Normen für Energiesysteme — den internationalen Rahmen für Elektroingenieure',
        'Lerne ETAP oder DigSilent PowerFactory — die führenden Analysewerkzeuge für Energiesysteme weltweit',
        'Erhalte deine Elektrosicherheitsgenehmigung — eine formelle Voraussetzung vor dem Arbeiten an Livesystemen',
        'Lies "Electrical Power Systems" von C.L. Wadhwa — ein umfassendes technisches Lehrbuch'
      ]
    },
    electronics_eng: {
      emoji: '🔌',
      name: 'Elektronikingenieur',
      desc: 'Du entwirfst elektronische Geräte und Schaltkreise — vom Schaltplan bis zur fertigen Leiterplatte',
      detail: 'Du entwickelst die Elektronik, die in allem steckt: Smartphones, Medizingeräte, Industrieausrüstung. Du zeichnest Schaltpläne in Altium Designer oder KiCad, layoutest Leiterplatten, wählst Bauteile aus und berechnest Betriebsbedingungen. Dann prüfst du im Labor: Oszilloskop, Spektrumanalysator, Labornetzgerät. Problem gefunden — Layout korrigieren, neue Platine fertigen, erneut testen.',
      start: [
        'Lerne analog- und digitalelektronische Grundlagen: "The Art of Electronics" von Horowitz und Hill',
        'Meistere KiCad — es ist kostenlos, leistungsstark und wird von seriösen Unternehmen weltweit eingesetzt',
        'Studiere Leistungselektronik: DC/DC-Wandler stecken im Kern fast jedes modernen elektronischen Produkts',
        'Lies Datenblätter! Die Fähigkeit, aus Bauteil-Dokumentationen das Wesentliche herauszuziehen, ist die Kernkompetenz'
      ]
    },
    embedded_eng: {
      emoji: '🖥️',
      name: 'Ingenieur für eingebettete Systeme',
      desc: 'Du programmierst Mikrocontroller und schreibst Firmware für intelligente Geräte und Industrieausrüstung',
      detail: 'Du schreibst Code, der auf blanker Hardware läuft — ohne Windows oder Linux, mit direkter Kontrolle über Prozessorregister. Du programmierst STM32-, NXP- oder TI-Geräte in C/C++, arbeitest mit Peripheriegeräten: UART, SPI, I2C, CAN, PWM. Du debuggst über JTAG/SWD, optimierst für Speicher- und Energiebeschränkungen und schreibst Code, der ein Jahrzehnt lang in einem Gerät läuft ohne aktualisiert zu werden.',
      start: [
        'Beginne mit STM32 und HAL-Bibliotheken — die am weitesten verbreitete Mikrocontroller-Familie in der Industrie',
        'Lerne FreeRTOS — das Standard-RTOS für eingebettete Systeme mit mehreren gleichzeitigen Aufgaben',
        'Lies "Programming Embedded Systems" von Michael Barr — ein praxisorientierter C-basierter Leitfaden',
        'Beherrsche GDB + OpenOCD zum Debuggen — Firmware-Debugging macht 80 % der Arbeit eines Embedded-Ingenieurs aus'
      ]
    },
    elec_project_eng: {
      emoji: '📐',
      name: 'Elektro-Planungsingenieur',
      desc: 'Du erstellst das elektrische Design für Bauprojekte — von den Spezifikationen bis zu den genehmigten Zeichnungen',
      detail: 'Du arbeitest in einem Planungsbüro oder Ingenieurbüro: du erstellst elektrische Grundrisse, Einlinienschaltpläne, Kabelverzeichnisse und Schaltschrankzeichnungen für Gebäude und Industrieanlagen. Du berechnest Lasten, wählst Kabelquerschnitte und Schutzgeräte aus und koordinierst mit Bau- und Maschineningenieuren. Deine Unterlagen durchlaufen eine formelle technische Prüfung — jede Zahl muss begründet sein.',
      start: [
        'Studiere IEC 60364 und die einschlägige nationale Elektroanlagennorm für dein Land',
        'Lerne AutoCAD Electrical oder EPLAN — die Standardwerkzeuge für elektrisches Schema- und Schalttafeldesign',
        'Mache einen Kurs in Lastberechnungen und Kabelquerschnittsbemessung — das technische Fundament der Disziplin',
        'Finde ein Praktikum in einem Planungsbüro — unter einem erfahrenen Ingenieur zu arbeiten ist mehr wert als jeder Kurs'
      ]
    }
  },
  ui: { l2back: '← Zurück zur Ingenieurwissenschaft', title: 'Elektroingenieur: welche Spezialisierung?' }
};

L2.electrician.fr = {
  questions: [
    {
      t: 'Quel domaine du génie électrique t\'intéresse le plus ?',
      o: [
        'Systèmes électriques — centrales électriques, postes de transformation et distribution d\'énergie sur des centaines de mégawatts',
        'Appareils électroniques et circuits — amplificateurs, convertisseurs, microprocesseurs et conception de circuits imprimés',
        'Systèmes embarqués — programmation de microcontrôleurs qui pilotent des équipements en temps réel',
        'Ingénierie électrique — produire des plans d\'exécution et faire approuver des systèmes électriques'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: 'Quel outil aimerais-tu le plus maîtriser ?',
      o: [
        'ETAP ou DigSilent — modéliser des réseaux électriques et calculer des courants de court-circuit',
        'Altium Designer ou KiCad — concevoir des circuits imprimés et des schémas électroniques',
        'STM32CubeIDE ou IAR — écrire du firmware en C pour des microcontrôleurs',
        'AutoCAD Electrical ou EPLAN — dessiner des schémas unifilaires et des agencements d\'armoires de commande'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: 'Quel résultat de ton travail te procure le plus de satisfaction ?',
      o: [
        'Un poste de transformation est mis en service — des milliers de foyers ont une alimentation électrique fiable grâce à ma conception',
        'Le circuit imprimé a fonctionné du premier coup exactement comme j\'avais conçu le schéma',
        'Le firmware est écrit et le contrôleur gère la machine en temps réel sans la moindre défaillance',
        'Le dossier de conception complet a passé la revue technique du premier coup sans aucune remarque'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: 'Où préfères-tu travailler ?',
      o: [
        'Sur site — postes de transformation, centrales électriques et salles de contrôle des réseaux électriques',
        'En laboratoire — souder, mesurer avec un oscilloscope, analyser des spectres de signaux',
        'Dans un bureau à écrire du code — développement de firmware, débogage JTAG, tests sur cartes d\'évaluation',
        'Dans un bureau en CAO — dessiner des schémas, coordonner avec les régulateurs, préparer des spécifications'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: 'Quel défi est le plus proche de toi ?',
      o: [
        'Assurer une alimentation électrique fiable à un district industriel ou à une grande installation de production',
        'Concevoir un filtre analogique ou une alimentation à découpage pour un nouveau produit',
        'Écrire un ordonnanceur de tâches RTOS pour la commande d\'équipements industriels',
        'Développer le dossier de conception électrique pour un nouveau bâtiment de production'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: 'Où te vois-tu dans 10 ans ?',
      o: [
        'Ingénieur en chef des systèmes électriques dans une grande installation industrielle ou directeur du développement dans une société de réseau',
        'Concepteur principal de circuits analogiques/numériques dans une entreprise électronique de classe mondiale',
        'Architecte de systèmes embarqués — je développe des plateformes sur lesquelles reposent des centaines de produits',
        'Ingénieur de projet principal dans un grand bureau d\'études en génie électrique'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    }
  ],
  roles: {
    power_eng: {
      emoji: '⚡',
      name: 'Ingénieur en systèmes électriques',
      desc: 'Tu conçois et entretiens des systèmes d\'alimentation électrique — des postes de transformation aux réseaux de distribution',
      detail: 'Tu travailles avec des infrastructures électriques à grande échelle : tu calcules les courants de court-circuit, tu sélectionnes l\'appareillage de commutation, tu conçois les relais de protection et d\'automatisation. Tu utilises ETAP, DigSilent ou PowerWorld pour modéliser les réseaux électriques. Ton travail est le fondement de tout ce dont dépendent les villes, les usines et les infrastructures. Une erreur peut être catastrophique — les normes et réglementations sont donc tes alliées les plus proches.',
      start: [
        'Étudie les normes IEC pour les systèmes électriques — le cadre international pour les ingénieurs électriciens',
        'Apprends ETAP ou DigSilent PowerFactory — les outils d\'analyse de réseaux électriques leaders dans le monde',
        'Obtiens ton habilitation électrique — une exigence formelle avant de travailler sur des systèmes sous tension',
        'Lis "Electrical Power Systems" de C.L. Wadhwa — un manuel d\'ingénierie complet'
      ]
    },
    electronics_eng: {
      emoji: '🔌',
      name: 'Ingénieur électronicien',
      desc: 'Tu conçois des appareils électroniques et des circuits — du schéma au circuit imprimé terminé',
      detail: 'Tu crées l\'électronique qui se trouve dans tout : smartphones, appareils médicaux, équipements industriels. Tu dessines des schémas dans Altium Designer ou KiCad, tu réalises le routage des circuits imprimés, tu sélectionnes des composants et calcules les conditions de fonctionnement. Ensuite en laboratoire tu vérifies : oscilloscope, analyseur de spectre, alimentation de laboratoire. Problème trouvé — corriger le layout, fabriquer une nouvelle carte, retester.',
      start: [
        'Apprends les fondamentaux de l\'électronique analogique et numérique : "The Art of Electronics" de Horowitz et Hill',
        'Maîtrise KiCad — il est gratuit, puissant et utilisé par de sérieuses entreprises et des passionnés dans le monde entier',
        'Étudie l\'électronique de puissance : les convertisseurs DC/DC sont au cœur de presque tout produit électronique moderne',
        'Lis les fiches techniques ! La capacité à extraire ce dont tu as besoin de la documentation des composants est la compétence clé'
      ]
    },
    embedded_eng: {
      emoji: '🖥️',
      name: 'Ingénieur en systèmes embarqués',
      desc: 'Tu programmes des microcontrôleurs et écris du firmware pour des appareils intelligents et des équipements industriels',
      detail: 'Tu écris du code qui tourne sur le métal nu — sans Windows ni Linux, en contrôlant directement les registres du processeur. Tu programmes des appareils STM32, NXP ou TI en C/C++, tu travailles avec des périphériques : UART, SPI, I2C, CAN, PWM. Tu débogues via JTAG/SWD, tu optimises pour les contraintes de mémoire et d\'énergie, et tu écris du code qui fonctionnera dans un appareil pendant dix ans sans être mis à jour.',
      start: [
        'Commence avec STM32 et les bibliothèques HAL — la famille de microcontrôleurs la plus utilisée dans l\'industrie',
        'Apprends FreeRTOS — le RTOS standard pour les systèmes embarqués avec plusieurs tâches simultanées',
        'Lis "Programming Embedded Systems" de Michael Barr — un guide pratique basé sur le langage C',
        'Maîtrise GDB + OpenOCD pour le débogage — le débogage de firmware représente 80 % du travail de l\'ingénieur embarqué'
      ]
    },
    elec_project_eng: {
      emoji: '📐',
      name: 'Ingénieur en conception électrique',
      desc: 'Tu produis la conception électrique pour des projets de construction — des spécifications aux plans approuvés',
      detail: 'Tu travailles dans un bureau d\'études ou une société d\'ingénierie : tu produis des plans électriques, des schémas unifilaires, des tableaux de câbles et des plans d\'armoires pour des bâtiments et des installations industrielles. Tu calcules les charges, tu sélectionnes les sections de câbles et les dispositifs de protection, et tu coordonnes avec les ingénieurs en structure et mécanique. Tes documents passent par une revue technique formelle — chaque chiffre doit être justifié.',
      start: [
        'Étudie la norme IEC 60364 et la norme nationale d\'installation électrique applicable dans ton pays',
        'Apprends AutoCAD Electrical ou EPLAN — les outils standard pour la conception de schémas électriques et d\'armoires',
        'Suis un cours sur les calculs de charges et le dimensionnement des câbles — le fondement technique de la discipline',
        'Trouve un stage dans un bureau d\'études — travailler sous la direction d\'un ingénieur senior vaut mieux que n\'importe quel cours'
      ]
    }
  },
  ui: { l2back: '← Retour à l\'ingénierie', title: 'Ingénieur électrique : quelle spécialisation ?' }
};



L2.electrician.es = {
  questions: [
    {
      t: '¿Qué área de la ingeniería eléctrica te interesa más?',
      o: [
        'Sistemas de potencia — centrales eléctricas, subestaciones y distribución de energía a cientos de megavatios',
        'Dispositivos electrónicos y circuitos — amplificadores, convertidores, microchips y diseño de PCB',
        'Sistemas embebidos — programación de microcontroladores que controlan equipos en tiempo real',
        'Diseño eléctrico — elaborar planos de ejecución y lograr la aprobación de sistemas eléctricos'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: '¿Qué herramienta te gustaría dominar?',
      o: [
        'ETAP o DigSilent — modelar sistemas eléctricos y calcular corrientes de cortocircuito',
        'Altium Designer o KiCad — diseñar PCBs y esquemas electrónicos',
        'STM32CubeIDE o IAR — escribir firmware en C para microcontroladores',
        'AutoCAD Electrical o EPLAN — dibujar diagramas unilineales y distribuciones de tableros de control'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: '¿Qué resultado de tu trabajo te genera más satisfacción?',
      o: [
        'Una subestación entra en servicio — miles de hogares tienen energía confiable gracias a mi diseño',
        'La PCB funcionó a la primera exactamente como diseñé el esquema',
        'El firmware está listo y el controlador gestiona la máquina en tiempo real sin ningún fallo',
        'El paquete de documentación completo pasó la revisión técnica a la primera sin observaciones'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: '¿Dónde prefieres trabajar?',
      o: [
        'En campo — subestaciones, centrales eléctricas y salas de control de redes eléctricas',
        'En laboratorio — soldar, medir con osciloscopio, analizar espectros de señal',
        'En oficina escribiendo código — desarrollo de firmware, depuración JTAG, pruebas en placas de evaluación',
        'En oficina con CAD — dibujar esquemas, coordinar con reguladores, preparar especificaciones'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: '¿Cuál desafío está más cerca de ti?',
      o: [
        'Garantizar el suministro eléctrico confiable a un distrito industrial o a una gran planta de producción',
        'Diseñar un filtro analógico o una fuente conmutada para un nuevo producto',
        'Escribir un planificador de tareas RTOS para el control de equipos industriales',
        'Desarrollar el paquete de diseño eléctrico para un nuevo edificio de producción'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: '¿Dónde te ves en 10 años?',
      o: [
        'Ingeniero jefe de sistemas eléctricos en una gran instalación industrial o director de desarrollo en una empresa de redes',
        'Diseñador principal de circuitos analógicos/digitales en una empresa electrónica de clase mundial',
        'Arquitecto de sistemas embebidos — desarrollo plataformas sobre las que se construyen cientos de productos',
        'Ingeniero de proyecto líder en un gran instituto de diseño de ingeniería eléctrica'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    }
  ],
  roles: {
    power_eng: {
      emoji: '⚡',
      name: 'Ingeniero en Sistemas de Potencia',
      desc: 'Diseñas y mantienes sistemas de suministro eléctrico — desde subestaciones hasta redes de distribución',
      detail: 'Trabajas con infraestructura eléctrica a gran escala: calculas corrientes de cortocircuito, seleccionas equipos de maniobra, diseñas relés de protección y automatización. Usas ETAP, DigSilent o PowerWorld para modelar sistemas eléctricos. Tu trabajo es la base de todo lo que dependen las ciudades, las fábricas y la infraestructura. Un error puede ser catastrófico, por eso las normas y regulaciones son tus aliadas más cercanas.',
      start: [
        'Estudia las normas IEC para sistemas de potencia — el marco internacional para ingenieros eléctricos',
        'Aprende ETAP o DigSilent PowerFactory — las herramientas líderes de análisis de sistemas eléctricos en el mundo',
        'Obtén tu habilitación en seguridad eléctrica — requisito formal antes de trabajar en sistemas energizados',
        'Lee "Electrical Power Systems" de C.L. Wadhwa — un libro de texto de ingeniería completo y muy práctico'
      ]
    },
    electronics_eng: {
      emoji: '🔌',
      name: 'Ingeniero Electrónico',
      desc: 'Diseñas dispositivos electrónicos y circuitos — desde el esquema hasta la PCB terminada',
      detail: 'Creas la electrónica que está en todo: smartphones, equipos médicos, maquinaria industrial. Dibujas esquemas en Altium Designer o KiCad, layouteas PCBs, seleccionas componentes y calculas condiciones de operación. Luego en el laboratorio verificas: osciloscopio, analizador de espectro, fuente de alimentación de banco. Encontraste un problema — corriges el layout, mandas fabricar otra placa y pruebas de nuevo.',
      start: [
        'Aprende fundamentos de electrónica analógica y digital: "The Art of Electronics" de Horowitz y Hill',
        'Domina KiCad — es gratuito, potente y usado por empresas serias y aficionados en todo el mundo',
        'Estudia electrónica de potencia: los convertidores DC/DC están en el corazón de casi todo producto electrónico moderno',
        'Lee hojas de datos! La capacidad de extraer lo que necesitas de la documentación de componentes es la habilidad clave'
      ]
    },
    embedded_eng: {
      emoji: '🖥️',
      name: 'Ingeniero de Sistemas Embebidos',
      desc: 'Programas microcontroladores y escribes firmware para dispositivos inteligentes y equipos industriales',
      detail: 'Escribes código que corre sobre metal desnudo — sin Windows ni Linux, controlando directamente los registros del procesador. Programas dispositivos STM32, NXP o TI en C/C++, trabajas con periféricos: UART, SPI, I2C, CAN, PWM. Depuras por JTAG/SWD, optimizas para restricciones de memoria y energía, y escribes código que vivirá en un dispositivo durante diez años sin actualizarse.',
      start: [
        'Comienza con STM32 y las bibliotecas HAL — la familia de microcontroladores más usada en la industria',
        'Aprende FreeRTOS — el RTOS estándar para sistemas embebidos con múltiples tareas concurrentes',
        'Lee "Programming Embedded Systems" de Michael Barr — una guía práctica basada en C',
        'Domina GDB + OpenOCD para depuración — la depuración de firmware es el 80% del trabajo del ingeniero embebido'
      ]
    },
    elec_project_eng: {
      emoji: '📐',
      name: 'Ingeniero de Diseño Eléctrico',
      desc: 'Produces el diseño eléctrico para proyectos de construcción — desde especificaciones hasta planos aprobados',
      detail: 'Trabajas en una consultora o empresa de ingeniería: produces planos eléctricos, diagramas unilineales, planillas de cables y planos de tableros para edificios e instalaciones industriales. Calculas cargas, seleccionas secciones de cable y dispositivos de protección, y coordinas con ingenieros estructurales y mecánicos. Tu documentación pasa por una revisión técnica formal — cada cifra debe estar justificada.',
      start: [
        'Estudia IEC 60364 y la norma nacional de instalaciones eléctricas aplicable en tu país',
        'Aprende AutoCAD Electrical o EPLAN — las herramientas estándar para diseño de esquemas eléctricos y tableros',
        'Toma un curso de cálculo de cargas y dimensionamiento de cables — la base técnica de la disciplina',
        'Busca una pasantía en una empresa de diseño — trabajar bajo un ingeniero senior vale más que cualquier curso'
      ]
    }
  },
  ui: { l2back: '← Volver a ingeniería', title: 'Ingeniería eléctrica: ¿qué especialización?' }
};

L2.electrician.pt = {
  questions: [
    {
      t: 'Qual área da engenharia elétrica mais te interessa?',
      o: [
        'Sistemas de potência — usinas, subestações e distribuição de energia em centenas de megawatts',
        'Dispositivos eletrônicos e circuitos — amplificadores, conversores, microchips e design de PCB',
        'Sistemas embarcados — programação de microcontroladores que controlam equipamentos em tempo real',
        'Projeto elétrico — elaborar projetos executivos e obter aprovação de sistemas elétricos'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: 'Qual ferramenta você mais gostaria de dominar?',
      o: [
        'ETAP ou DigSilent — modelar sistemas elétricos e calcular correntes de curto-circuito',
        'Altium Designer ou KiCad — projetar PCBs e esquemas eletrônicos',
        'STM32CubeIDE ou IAR — escrever firmware em C para microcontroladores',
        'AutoCAD Electrical ou EPLAN — desenhar diagramas unifilares e layouts de painéis de controle'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: 'Qual resultado do seu trabalho te dá mais satisfação?',
      o: [
        'Uma subestação é energizada — milhares de lares têm energia confiável graças ao meu projeto',
        'A PCB funcionou na primeira tentativa exatamente como eu projetei o esquema',
        'O firmware está pronto e o controlador gerencia a máquina em tempo real sem nenhuma falha',
        'O pacote de documentação completo passou pela revisão técnica na primeira vez sem comentários'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: 'Onde você prefere trabalhar?',
      o: [
        'Em campo — subestações, usinas e salas de controle de sistemas elétricos',
        'Em laboratório — soldar, medir com osciloscópio, analisar espectros de sinal',
        'Em escritório escrevendo código — desenvolvimento de firmware, depuração JTAG, testes em placas de avaliação',
        'Em escritório com CAD — desenhar esquemas, coordenar com reguladores, preparar especificações'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: 'Qual desafio está mais próximo de você?',
      o: [
        'Garantir o fornecimento confiável de energia para um distrito industrial ou uma grande instalação de produção',
        'Projetar um filtro analógico ou uma fonte chaveada para um novo produto',
        'Escrever um escalonador de tarefas RTOS para controle de equipamentos industriais',
        'Desenvolver o pacote de projeto elétrico para um novo edifício de produção'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    },
    {
      t: 'Onde você se vê daqui a 10 anos?',
      o: [
        'Engenheiro-chefe de sistemas elétricos em uma grande instalação industrial ou diretor de desenvolvimento em uma empresa de redes',
        'Designer principal de circuitos analógicos/digitais em uma empresa de eletrônica de classe mundial',
        'Arquiteto de sistemas embarcados — desenvolvo plataformas sobre as quais centenas de produtos são construídos',
        'Engenheiro de projeto sênior em um grande instituto de projetos de engenharia elétrica'
      ],
      s: [{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]
    }
  ],
  roles: {
    power_eng: {
      emoji: '⚡',
      name: 'Engenheiro de Sistemas de Potência',
      desc: 'Você projeta e mantém sistemas de fornecimento de energia — de subestações a redes de distribuição',
      detail: 'Você trabalha com infraestrutura elétrica de grande porte: calcula correntes de curto-circuito, seleciona equipamentos de manobra, projeta relés de proteção e automação. Usa ETAP, DigSilent ou PowerWorld para modelar sistemas elétricos. Seu trabalho é a base de tudo de que cidades, fábricas e infraestruturas dependem. Um erro pode ser catastrófico, então normas e regulamentos são seus aliados mais próximos.',
      start: [
        'Estude as normas IEC para sistemas de potência — o framework internacional para engenheiros eletricistas',
        'Aprenda ETAP ou DigSilent PowerFactory — as principais ferramentas de análise de sistemas elétricos do mundo',
        'Obtenha sua habilitação em segurança elétrica — requisito formal antes de trabalhar em sistemas energizados',
        'Leia "Electrical Power Systems" de C.L. Wadhwa — um livro didático abrangente de engenharia'
      ]
    },
    electronics_eng: {
      emoji: '🔌',
      name: 'Engenheiro Eletrônico',
      desc: 'Você projeta dispositivos eletrônicos e circuitos — do esquema até a PCB finalizada',
      detail: 'Você cria a eletrônica que está em tudo: smartphones, equipamentos médicos, maquinário industrial. Desenha esquemas no Altium Designer ou KiCad, faz o layout de PCBs, seleciona componentes e calcula condições de operação. Depois no laboratório você verifica: osciloscópio, analisador de espectro, fonte de bancada. Encontrou um problema — corrige o layout, manda fabricar outra placa, testa novamente.',
      start: [
        'Aprenda fundamentos de eletrônica analógica e digital: "The Art of Electronics" de Horowitz e Hill',
        'Domine o KiCad — é gratuito, poderoso e usado por empresas sérias e entusiastas no mundo todo',
        'Estude eletrônica de potência: conversores DC/DC estão no coração de quase todo produto eletrônico moderno',
        'Leia datasheets! A capacidade de extrair o que você precisa da documentação de componentes é a habilidade central'
      ]
    },
    embedded_eng: {
      emoji: '🖥️',
      name: 'Engenheiro de Sistemas Embarcados',
      desc: 'Você programa microcontroladores e escreve firmware para dispositivos inteligentes e equipamentos industriais',
      detail: 'Você escreve código que roda no metal puro — sem Windows ou Linux, controlando diretamente os registradores do processador. Programa dispositivos STM32, NXP ou TI em C/C++, trabalha com periféricos: UART, SPI, I2C, CAN, PWM. Depura via JTAG/SWD, otimiza para restrições de memória e energia, e escreve código que ficará rodando em um dispositivo por dez anos sem ser atualizado.',
      start: [
        'Comece com STM32 e as bibliotecas HAL — a família de microcontroladores mais usada na indústria',
        'Aprenda FreeRTOS — o RTOS padrão para sistemas embarcados com múltiplas tarefas concorrentes',
        'Leia "Programming Embedded Systems" de Michael Barr — um guia prático baseado em C',
        'Domine GDB + OpenOCD para depuração — depurar firmware é 80% do trabalho do engenheiro embarcado'
      ]
    },
    elec_project_eng: {
      emoji: '📐',
      name: 'Engenheiro de Projetos Elétricos',
      desc: 'Você elabora o projeto elétrico para obras de construção — das especificações até os desenhos aprovados',
      detail: 'Você trabalha em uma consultora ou empresa de engenharia: elabora plantas elétricas, diagramas unifilares, memoriais de cabos e projetos de painéis para edifícios e instalações industriais. Calcula cargas, seleciona seções de cabos e dispositivos de proteção, e coordena com engenheiros estruturais e mecânicos. Sua documentação passa por revisão técnica formal — cada número deve ser justificado.',
      start: [
        'Estude a NBR 5410 e as normas IEC 60364 aplicáveis — base normativa do projeto elétrico no Brasil',
        'Aprenda AutoCAD Electrical ou EPLAN — as ferramentas padrão para projeto de esquemas elétricos e painéis',
        'Faça um curso de cálculo de cargas e dimensionamento de cabos — a base técnica da disciplina',
        'Busque um estágio em uma empresa de projetos — trabalhar sob orientação de um engenheiro sênior vale mais do que qualquer curso'
      ]
    }
  },
  ui: { l2back: '← Voltar à engenharia', title: 'Engenharia elétrica: qual especialização?' }
};

L2.electrician.ar = {
  questions: [
    { t:"أيّ جانب من الهندسة الكهربائية يستهويك أكثر؟", o:["أنظمة توليد ونقل وتوزيع الطاقة الكهربائية الكبرى","تصميم الدوائر الإلكترونية والمكونات الدقيقة","تطوير البرمجيات المدمجة وأنظمة التحكم الآني","إدارة مشاريع البنية التحتية الكهربائية والتوثيق"], s:[{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}] },
    { t:"أيّ أداة تودّ إتقانها؟", o:["أنظمة SCADA وأدوات تحليل شبكات الطاقة","Altium وEagle وبرامج تصميم الدوائر PCB","C/C++ والبرمجة للأنظمة المدمجة ومعالجات DSP","AutoCAD Electrical ونظم رسم مخططات الكهرباء"], s:[{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}] },
    { t:"أيّ نتيجة تُشعرك بالرضا أكثر؟", o:["شبكة كهربائية مستقرة لا تنقطع وتعمل بكفاءة عالية","دائرة إلكترونية دقيقة تعمل بالمواصفات تماماً لأول مرة","نظام مدمج يعمل في الوقت الحقيقي بدون أخطاء","مشروع كهربائي يُنفَّذ بالكامل وفق الجداول والمواصفات"], s:[{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}] },
    { t:"أين تُفضّل العمل؟", o:["في شركات الطاقة والتوليد الكهربائي","في مصانع الإلكترونيات أو شركات الأجهزة","في فرق تطوير الأنظمة المدمجة والتحكم","في مكاتب الاستشارات الهندسية ومشاريع البنية التحتية"], s:[{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}] },
    { t:"أيّ مهمة أقرب إليك؟", o:["تحليل عطل في شبكة كهربائية وإيجاد الحل","تصميم دائرة إلكترونية لجهاز طبي","كتابة برنامج تحكم لميكروكنترولر في وقت حقيقي","مراجعة وتوثيق مخططات كهربائية لمشروع مبنى تجاري"], s:[{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}] },
    { t:"أين ترى نفسك بعد عشر سنوات؟", o:["مهندس طاقة كهربائية أول في شركة طاقة متجددة","مدير قسم R&D للإلكترونيات في شركة تقنية","مهندس أول للأنظمة المدمجة في شركة صناعة السيارات","مستشار هندسة كهربائية مستقل"], s:[{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}] },
  ],
  roles: {
    power_eng:{ emoji:"⚡", name:"مهندس طاقة كهربائية", desc:"تُصمّم وتُدير أنظمة توليد ونقل وتوزيع الطاقة", detail:"تعمل في قطاع الطاقة.", start:["ادرس هندسة القدرة الكهربائية","تعلّم أنظمة SCADA وأدوات تحليل الشبكات","تدرّب في محطات التوليد أو شركات الكهرباء","احصل على شهادة المهندس الكهربائي المعتمد"] },
    electronics_eng:{ emoji:"🔌", name:"مهندس إلكترونيات", desc:"تُصمّم الدوائر الإلكترونية والأنظمة الدقيقة", detail:"تعمل في الإلكترونيات والأجهزة.", start:["أتقن تصميم PCB وبرامج Altium","تعلّم نظرية الدوائر والإلكترونيات التناظرية والرقمية","تدرّب في شركات تصنيع الإلكترونيات","احصل على شهادة في الهندسة الإلكترونية"] },
    embedded_eng:{ emoji:"🖥️", name:"مهندس أنظمة مدمجة", desc:"تُطوّر البرمجيات والأجهزة للأنظمة ذات الموارد المحدودة", detail:"تعمل عند تقاطع الهادرة والبرمجة.", start:["أتقن C/C++ والبرمجة للأنظمة المدمجة","تعلّم معالجات ARM وAVR والبروتوكولات مثل I2C وSPI","تدرّب على مشاريع تطوير الأنظمة المدمجة","احصل على شهادة في الهندسة الكهربائية أو الحاسوبية"] },
    elec_project_eng:{ emoji:"📐", name:"مهندس مشاريع كهربائية", desc:"تُدير المشاريع الكهربائية وتُنسّق بين الفرق الهندسية", detail:"تعمل في مشاريع البنية التحتية.", start:["تعلّم إدارة المشاريع الهندسية","أتقن AutoCAD Electrical","تدرّب في مشاريع بنية تحتية كهربائية","احصل على شهادة PMP وخبرة في الكهرباء"] },
  },
  ui:{ l2back:"← العودة إلى الهندسة", title:"الهندسة الكهربائية: ما التخصص؟" }
};

L2.electrician.he = {
  questions: [
    { t:"מה הצד שהכי מעניין אותך בהנדסת חשמל?", o:["מערכות ייצור, העברה וחלוקת חשמל","עיצוב מעגלים אלקטרוניים","פיתוח תוכנה משובצת ובקרה בזמן אמת","ניהול פרויקטי תשתית חשמלית"], s:[{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}] },
    { t:"איזה כלי הכי תרצה לשלוט בו?", o:["SCADA וכלי ניתוח רשתות חשמל","Altium, Eagle ועיצוב PCB","C/C++ למערכות משובצות","AutoCAD Electrical ושרטוט חשמלי"], s:[{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}] },
    { t:"איזה תוצאה הכי ממלאת אותך סיפוק?", o:["רשת חשמל יציבה שעובדת ביעילות","מעגל אלקטרוני שעובד לפי מפרט בפעם הראשונה","מערכת משובצת בזמן אמת ללא שגיאות","פרויקט חשמלי שמבוצע לפי לוחות זמנים"], s:[{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}] },
    { t:"איפה אתה מעדיף לעבוד?", o:["בחברות אנרגיה","במפעלי אלקטרוניקה","בצוותי פיתוח מערכות משובצות","במשרדי ייעוץ הנדסי"], s:[{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}] },
    { t:"איזה משימה הכי קרובה ללב שלך?", o:["ניתוח תקלה ברשת חשמל","עיצוב מעגל לקטנה רפואית","כתיבת קוד בקרה למיקרוקונטרולר","בדיקת תיעוד שרטוטי חשמל"], s:[{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}] },
    { t:"איפה אתה רואה את עצמך עוד 10 שנים?", o:["מהנדס אנרגיה בכיר בחברת אנרגיה מתחדשת","ראש מחלקת R&D אלקטרוניקה","מהנדס מערכות משובצות בחברת רכב","יועץ הנדסת חשמל עצמאי"], s:[{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}] },
  ],
  roles: {
    power_eng:{ emoji:"⚡", name:"מהנדס אנרגיה חשמלית", desc:"אתה מתכנן מערכות חשמל", detail:"אתה עובד בתחום האנרגיה.", start:["למד הנדסת אנרגיה חשמלית","למד SCADA וניתוח רשתות","התמחה בתחנות כוח","קבל הסמכת מהנדס חשמל"] },
    electronics_eng:{ emoji:"🔌", name:"מהנדס אלקטרוניקה", desc:"אתה מתכנן מעגלים אלקטרוניים", detail:"אתה עובד באלקטרוניקה.", start:["שלוט ב-Altium ועיצוב PCB","למד תיאוריית מעגלים","התמחה בחברות ייצור","קבל תואר הנדסת אלקטרוניקה"] },
    embedded_eng:{ emoji:"🖥️", name:"מהנדס מערכות משובצות", desc:"אתה מפתח תוכנה וחומרה למערכות מוגבלות משאבים", detail:"אתה עובד בצומת חומרה-תוכנה.", start:["שלוט ב-C/C++","למד ARM, AVR ופרוטוקולים","התמחה בפיתוח מערכות משובצות","קבל תואר הנדסת חשמל"] },
    elec_project_eng:{ emoji:"📐", name:"מהנדס פרויקטים חשמלי", desc:"אתה מנהל פרויקטים חשמליים", detail:"אתה עובד בתשתיות.", start:["למד ניהול פרויקטים הנדסיים","שלוט ב-AutoCAD Electrical","התמחה בפרויקטי תשתית","קבל PMP"] },
  },
  ui:{ l2back:"← חזרה להנדסה", title:"הנדסת חשמל: איזה התמחות?" }
};

L2.electrician.zh = {
  questions: [
    {t:'电气工程中什么最吸引你？', o:['电力工程——设计输电、配电系统','电子工程——设计电路板和电子产品','嵌入式系统——让硬件和软件协同工作','电气项目工程——管理电气工程项目的全过程'], s:[{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]},
    {t:'你最想精通哪个技术方向？', o:['AutoCAD电气、继电保护和变电所设计','Altium Designer PCB设计和模拟电路','STM32嵌入式开发和RTOS实时操作系统','电气预算、招投标和项目施工管理'], s:[{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]},
    {t:'什么成果最让你有成就感？', o:['你设计的变电所投运后安全稳定运行','你设计的PCB第一版就一次点亮成功','你开发的嵌入式固件在极端条件下稳定运行','你负责的电气安装工程通过了所有验收'] , s:[{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]},
    {t:'你更喜欢哪种工作？', o:['计算短路电流，选择保护定值，画高压系统图','在Altium中画原理图，布PCB，做DFM检查','写嵌入式C代码，调试串口，优化功耗','审图、协调电气安装，处理现场问题'], s:[{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]},
    {t:'你会选择哪个项目？', o:['设计一个工厂的10kV变配电系统','设计一块工业级电源管理电路板','为一个IoT节点设计低功耗嵌入式固件','负责一个大型工业厂房的全套电气安装工程'], s:[{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]},
    {t:'10年后你在哪里？', o:['电力设计院的注册电气工程师','知名硬件公司的硬件总工','智能硬件创业公司的嵌入式技术负责人','EPC公司的电气总监'], s:[{power_eng:3},{electronics_eng:3},{embedded_eng:3},{elec_project_eng:3}]}
  ],
  roles: {
    power_eng: {emoji:'⚡', name:'电力工程师', desc:'设计安全可靠的供配电系统，让工厂、建筑和城市有电可用', detail:'你解决的是最基础的问题——如何安全地把电从发电厂送到每一个用电设备。你设计变电所、配电网络、继电保护系统，确保供电的可靠性和安全性。', start:['学习电力系统基础——交流电路、三相电、变压器','掌握电气设计软件——AutoCAD电气或EPLAN','了解继电保护原理——过流保护、差动保护','考取注册电气工程师（供配电）执业资格']},
    electronics_eng: {emoji:'🔌', name:'电子工程师', desc:'设计电路原理图和PCB，开发各类电子产品的硬件平台', detail:'你设计产品的"神经系统"。你从原理图设计开始，经过PCB布局布线、样板焊接调试，到量产DFM优化，全程参与电子产品的硬件开发。', start:['学习模拟电路和数字电路基础','掌握Altium Designer——原理图和PCB设计','了解常用电子元器件的选型——运放、MCU、电源管理IC','焊接练习——先从直插元件开始，再到SMT']},
    embedded_eng: {emoji:'💾', name:'嵌入式工程师', desc:'让芯片按照你的意志运行，开发在硬件上运行的底层软件', detail:'你在最接近硬件的层面编程。你写单片机固件，驱动各种外设，实现通信协议，优化功耗和实时性。你的代码运行在几乎所有智能设备中。', start:['从STM32开始——最主流的入门MCU','学习C语言——嵌入式开发的核心语言','了解常用通信协议——UART、SPI、I2C、CAN','完成一个完整的项目：传感器采集 + 数据处理 + 无线传输']},
    elec_project_eng: {emoji:'📋', name:'电气项目工程师', desc:'统筹电气工程的设计、采购、安装和调试，确保项目成功交付', detail:'你管理电气工程的全生命周期。你审核设计图纸，管理设备采购，协调安装施工，组织调试和验收，是业主和施工方之间的技术桥梁。', start:['获得一级建造师（机电工程）资质','学习电气工程预算——设备材料计价','了解弱电系统——楼控、消防、安防等配套系统','在EPC公司的电气专业积累项目经验']}
  },
  ui: {l2back:'← 返回电气工程', title:'电气工程：选择你的专业方向'}
};
