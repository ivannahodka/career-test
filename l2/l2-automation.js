'use strict';
/* ── L2: Инженер по автоматизации ───────────────────────────────────────────
   4 roles: plc_eng 🖥️ | scada_eng 📡 | process_control_eng 🎛️ | iiot_eng 🌐
   RU only — другие языки добавляются отдельно
──────────────────────────────────────────────────────────────────────────── */

L2.automation.ru = {
  questions: [
    {
      t: 'Что тебя больше привлекает в автоматизации?',
      o: [
        'Программировать ПЛК — писать логику управления, которая работает на производстве 24/7',
        'Создавать SCADA-системы — визуализировать процесс и давать оператору полный контроль',
        'Настраивать регуляторы и петли управления — добиваться точной работы технологического процесса',
        'Подключать заводы к облаку — строить IIoT-системы для мониторинга и предиктивного обслуживания'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: 'С каким инструментом ты хотел бы работать?',
      o: [
        'TIA Portal (Siemens) или Studio 5000 (Allen-Bradley) — ведущие среды программирования ПЛК',
        'WinCC, Wonderware или Ignition — SCADA-платформы для визуализации промышленных объектов',
        'MATLAB/Simulink — моделировать системы регулирования и оптимизировать ПИД-контроллеры',
        'Node-RED, Kafka и Azure IoT Hub — строить потоки данных с датчиков в облако'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: 'Какой результат работы тебя радует?',
      o: [
        'Программа ПЛК загружена — линия запустилась и работает точно по алгоритму без участия человека',
        'Диспетчер за экраном SCADA видит весь завод в реальном времени и может управлять отовсюду',
        'Контур регулирования настроен — параметр держится в заданном диапазоне ±0,1% при любых возмущениях',
        'Датчики слили данные в облако — модель предсказала отказ оборудования за 3 дня до поломки'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: 'Как ты предпочитаешь работать?',
      o: [
        'На производстве рядом с оборудованием — подключаться к ПЛК, отлаживать программу прямо на объекте',
        'В диспетчерской или удалённо — настраивать интерфейсы, базы данных и серверную часть SCADA',
        'В офисе с моделями — писать уравнения, строить графики Боде и симулировать переходные процессы',
        'В офисе с данными — проектировать архитектуру IIoT, анализировать временные ряды и дашборды'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: 'В какой отрасли ты хотел бы работать?',
      o: [
        'Нефтегаз, химия или энергетика — управлять непрерывными процессами на крупных предприятиях',
        'Пищевая промышленность или фарма — строить SCADA для контроля качества и соответствия GMP',
        'Металлургия или горное дело — управлять мощными и сложными технологическими агрегатами',
        'Умное производство (Industry 4.0) — соединять цеха, ERP и облако в единую цифровую фабрику'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: 'Где ты видишь себя через 10 лет?',
      o: [
        'Ведущий инженер АСУ ТП или руководитель проекта автоматизации крупного промышленного объекта',
        'Архитектор SCADA/MES систем в системном интеграторе или крупном холдинге',
        'Эксперт по системам управления с международной сертификацией ISA',
        'Директор по цифровой трансформации производства или CTO в IIoT-стартапе'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    }
  ],
  roles: {
    plc_eng: {
      emoji: '🖥️',
      name: 'Инженер АСУ ТП / ПЛК-программист',
      desc: 'Программируешь промышленные контроллеры — сердце автоматизированных производств',
      detail: 'ПЛК (программируемый логический контроллер) управляет всем: от конвейера до нефтяной скважины. Ты пишешь программы на Ladder Diagram, Structured Text или Function Block Diagram в TIA Portal, Studio 5000 или Codesys. Настраиваешь ввод/вывод, связь по Profibus/Profinet/Modbus, пусконаладку проводишь прямо на объекте. Твоя программа работает без остановок годами.',
      start: [
        'Освой TIA Portal с Siemens S7-1200/1500 — это самый распространённый ПЛК в мире',
        'Изучи языки МЭК 61131-3: Ladder Diagram и Structured Text — два главных языка программирования ПЛК',
        'Читай «Программирование ПЛК для начинающих» — популярный курс на русском языке',
        'Установи Codesys бесплатно и собери первый проект: управление светофором или сортировщиком'
      ]
    },
    scada_eng: {
      emoji: '📡',
      name: 'SCADA-инженер',
      desc: 'Создаёшь системы диспетчерского управления — визуализируешь и контролируешь производство',
      detail: 'SCADA (Supervisory Control and Data Acquisition) — это глаза и руки диспетчера. Ты создаёшь экраны операторов, настраиваешь архивирование данных, алармы и тренды. Работаешь с WinCC, Wonderware InTouch, iFIX или Ignition. Твоя система должна показывать правду о процессе в реальном времени и никогда не падать — от неё зависит безопасность производства.',
      start: [
        'Освой Ignition от Inductive Automation — современная веб-SCADA с бесплатной trial-версией',
        'Изучи OPC UA — стандарт коммуникации между ПЛК и SCADA в современных системах',
        'Пройди курс по SQL — SCADA хранит терабайты данных, и ты должен уметь с ними работать',
        'Разберись в ISA-101 — стандарт проектирования операторских интерфейсов'
      ]
    },
    process_control_eng: {
      emoji: '🎛️',
      name: 'Инженер по системам регулирования',
      desc: 'Настраиваешь и оптимизируешь контуры управления — обеспечиваешь точность технологических процессов',
      detail: 'Ты — специалист по теории автоматического регулирования (ТАР). Идентифицируешь объекты управления, рассчитываешь ПИД-параметры, проектируешь каскадное и опережающее управление. Используешь MATLAB/Simulink для моделирования и оптимизации. На нефтеперегонном заводе твои контуры держат температуру и давление в жёстких пределах — это напрямую влияет на качество продукта и безопасность.',
      start: [
        'Изучи теорию автоматического управления: книга Солодовникова «Основы автоматического регулирования»',
        'Освой MATLAB с Control System Toolbox — стандарт для анализа и синтеза регуляторов',
        'Пройди курс по передаточным функциям, частотным характеристикам и устойчивости',
        'Получи сертификацию ISA CCST (Certified Control System Technician) — международно признанный стандарт'
      ]
    },
    iiot_eng: {
      emoji: '🌐',
      name: 'IIoT-инженер (Industry 4.0)',
      desc: 'Подключаешь промышленные объекты к цифровым платформам — строишь умные заводы будущего',
      detail: 'Ты строишь мост между заводским цехом и облаком. Подключаешь сенсоры, ПЛК и оборудование через OPC UA, MQTT или протоколы промышленных шин. Настраиваешь Edge Computing (Siemens MindSphere, PTC ThingWorx, AWS IoT) для предиктивного обслуживания и мониторинга. Анализируешь временные ряды, строишь дашборды и модели машинного обучения для предсказания отказов.',
      start: [
        'Изучи протоколы MQTT и OPC UA — они соединяют промышленный мир с облаком',
        'Освой Node-RED для создания потоков данных между датчиками и облачными сервисами',
        'Пройди курс по Azure IoT Hub или AWS IoT Core — ведущие облачные платформы для IIoT',
        'Читай о концепции цифрового двойника (Digital Twin) — это главный тренд Industry 4.0'
      ]
    }
  },
  ui: { l2back: '← К инженерии', title: 'Автоматизация: какая специализация?' }
};



L2.automation.en = {
  questions: [
    {
      t: 'What attracts you most in industrial automation?',
      o: [
        'Programming PLCs — writing control logic that runs a production line 24/7 without human intervention',
        'Building SCADA systems — visualising industrial processes and giving operators full control',
        'Tuning control loops — achieving precise regulation of a process variable under all conditions',
        'Connecting factories to the cloud — building IIoT systems for monitoring and predictive maintenance'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: 'Which tool would you most like to work with?',
      o: [
        'TIA Portal (Siemens) or Studio 5000 (Allen-Bradley) — the leading PLC programming environments',
        'WinCC, Wonderware, or Ignition — SCADA platforms for industrial process visualisation',
        'MATLAB/Simulink — modelling control systems and optimising PID controllers',
        'Node-RED, Kafka, and Azure IoT Hub — building data pipelines from sensors to the cloud'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: 'What result of your work gives you most satisfaction?',
      o: [
        'The PLC program is downloaded — the line starts and runs exactly to the algorithm without anyone touching it',
        'The dispatcher sees the whole plant on the SCADA screen in real time and can control everything from one place',
        'The control loop is tuned — the process variable holds within ±0.1% under any disturbance',
        'Sensor data flowed into the cloud and the model predicted an equipment failure 3 days before it happened'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: 'How do you prefer to work?',
      o: [
        'On the plant floor next to the equipment — connecting to the PLC and debugging logic on site',
        'In a control room or remotely — configuring interfaces, databases, and the SCADA server side',
        'In an office with models — writing equations, plotting Bode plots, simulating step responses',
        'In an office with data — designing IIoT architecture, analysing time series, building dashboards'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: 'Which industry would you like to work in?',
      o: [
        'Oil & gas, chemicals, or energy — controlling continuous processes on large industrial facilities',
        'Food & beverage or pharmaceuticals — building SCADA for quality control and GMP compliance',
        'Metals or mining — controlling powerful and mechanically complex process equipment',
        'Smart manufacturing (Industry 4.0) — connecting shop floors, ERP, and cloud into a digital factory'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: 'Where do you see yourself in 10 years?',
      o: [
        'Lead control systems engineer or automation project manager on a major industrial facility',
        'SCADA/MES architect at a systems integrator or large industrial group',
        'Internationally certified control systems expert with ISA credentials',
        'Director of Digital Transformation for a manufacturing business or CTO of an IIoT start-up'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    }
  ],
  roles: {
    plc_eng: {
      emoji: '🖥️',
      name: 'PLC / Control Systems Engineer',
      desc: 'You program industrial controllers — the heart of automated production facilities worldwide',
      detail: 'PLCs control everything from conveyor belts to oil wells. You write programs in Ladder Diagram, Structured Text, or Function Block Diagram using TIA Portal, Studio 5000, or Codesys. You configure I/O, set up communications over Profibus/Profinet/Modbus, and carry out commissioning directly on site. Your program runs without interruption for years — reliability is not optional.',
      start: [
        'Learn TIA Portal with Siemens S7-1200/1500 — the most widely deployed PLC platform globally',
        'Study IEC 61131-3 languages: Ladder Diagram and Structured Text are the two most important',
        'Install Codesys for free and build a first project — a traffic light or sorting system is a perfect start',
        'Read "Automating Manufacturing Systems with PLCs" by Hugh Jack — a free, comprehensive online textbook'
      ]
    },
    scada_eng: {
      emoji: '📡',
      name: 'SCADA Engineer',
      desc: 'You build supervisory control and data acquisition systems — giving operators real-time visibility and control',
      detail: 'SCADA is the eyes and hands of the plant operator. You design operator screens, configure data archiving, set up alarms and trends, and write scripts for advanced control functions. You work with WinCC, Wonderware InTouch, iFIX, or Ignition. Your system must show the truth about the process in real time and never go down — plant safety depends on it.',
      start: [
        'Learn Ignition by Inductive Automation — a modern web-based SCADA platform with a free trial',
        'Study OPC UA — the standard protocol for communication between PLCs and SCADA in modern systems',
        'Take an SQL course — SCADA systems store terabytes of historian data and you need to query it',
        'Read ISA-101 — the standard for designing human-machine interfaces for process industries'
      ]
    },
    process_control_eng: {
      emoji: '🎛️',
      name: 'Process Control Engineer',
      desc: 'You tune and optimise control loops — ensuring process variables are held within tight specifications',
      detail: 'You are a specialist in control theory. You identify process dynamics, calculate PID parameters, design cascade and feedforward control schemes, and analyse closed-loop stability. You use MATLAB/Simulink for modelling and virtual commissioning. On a refinery, your loops hold temperature and pressure within tight tolerances — this directly determines product quality and plant safety.',
      start: [
        'Study process control fundamentals: "Process Control: Designing Processes and Control Systems for Dynamic Performance" by Marlin',
        'Learn MATLAB with the Control System Toolbox — the standard for control system analysis and design',
        'Take a course covering transfer functions, frequency response, and stability margins',
        'Pursue ISA CCST (Certified Control System Technician) certification — an internationally recognised standard'
      ]
    },
    iiot_eng: {
      emoji: '🌐',
      name: 'IIoT Engineer (Industry 4.0)',
      desc: 'You connect industrial assets to digital platforms — building the smart factories of the future',
      detail: 'You build the bridge between the factory floor and the cloud. You connect sensors, PLCs, and equipment via OPC UA, MQTT, or industrial fieldbus protocols. You configure Edge Computing and cloud platforms (Siemens MindSphere, PTC ThingWorx, AWS IoT) for predictive maintenance and real-time monitoring. You analyse time series, build dashboards, and develop machine learning models to predict equipment failures before they happen.',
      start: [
        'Learn MQTT and OPC UA — the two protocols that connect the industrial world to cloud platforms',
        'Master Node-RED for building data flows between sensors and cloud services — free and visual',
        'Take a course in Azure IoT Hub or AWS IoT Core — the leading enterprise IIoT platforms',
        'Study the Digital Twin concept — the central technology trend of Industry 4.0'
      ]
    }
  },
  ui: { l2back: '← Back to engineering', title: 'Automation: which specialisation?' }
};



L2.automation.de = {
  questions: [
    {
      t: 'Was zieht dich in der industriellen Automatisierung am meisten an?',
      o: [
        'SPS programmieren — Steuerungslogik schreiben, die eine Produktionslinie rund um die Uhr ohne menschlichen Eingriff betreibt',
        'SCADA-Systeme aufbauen — Industrieprozesse visualisieren und Bedienern die vollständige Kontrolle geben',
        'Regelkreise einstellen — eine Prozessgröße unter allen Bedingungen präzise regeln',
        'Fabriken mit der Cloud verbinden — IIoT-Systeme für Überwachung und vorausschauende Wartung aufbauen'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: 'Mit welchem Werkzeug würdest du am liebsten arbeiten?',
      o: [
        'TIA Portal (Siemens) oder Studio 5000 (Allen-Bradley) — die führenden SPS-Programmierumgebungen',
        'WinCC, Wonderware oder Ignition — SCADA-Plattformen zur Visualisierung industrieller Prozesse',
        'MATLAB/Simulink — Regelungssysteme modellieren und PID-Regler optimieren',
        'Node-RED, Kafka und Azure IoT Hub — Datenpipelines von Sensoren bis in die Cloud aufbauen'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: 'Welches Arbeitsergebnis macht dich am stolzesten?',
      o: [
        'Das SPS-Programm ist geladen — die Linie startet und läuft exakt nach Algorithmus, ohne dass jemand eingreift',
        'Der Disponent sieht die gesamte Anlage auf dem SCADA-Bildschirm in Echtzeit und kann alles von einem Ort aus steuern',
        'Der Regelkreis ist eingestellt — die Prozessgröße hält ±0,1 % bei jeder Störung',
        'Sensordaten flossen in die Cloud und das Modell sagte einen Geräteausfall 3 Tage vor dem Defekt voraus'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: 'Wie arbeitest du am liebsten?',
      o: [
        'In der Produktion neben den Maschinen — die SPS anschließen und die Logik direkt vor Ort debuggen',
        'Im Leitstand oder remote — Oberflächen, Datenbanken und die SCADA-Serverseite konfigurieren',
        'Im Büro mit Modellen — Gleichungen aufstellen, Bode-Diagramme zeichnen, Sprungantworten simulieren',
        'Im Büro mit Daten — IIoT-Architektur entwerfen, Zeitreihen analysieren, Dashboards erstellen'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: 'In welcher Branche möchtest du arbeiten?',
      o: [
        'Öl & Gas, Chemie oder Energie — kontinuierliche Prozesse in großen Industrieanlagen steuern',
        'Lebensmittel & Getränke oder Pharma — SCADA für Qualitätskontrolle und GMP-Konformität aufbauen',
        'Metallurgie oder Bergbau — leistungsstarke und mechanisch komplexe Prozessanlagen steuern',
        'Intelligente Fertigung (Industrie 4.0) — Shopfloor, ERP und Cloud zu einer digitalen Fabrik verbinden'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: 'Wo siehst du dich in 10 Jahren?',
      o: [
        'Leitender Leittechnik-Ingenieur oder Automatisierungsprojektleiter an einer großen Industrieanlage',
        'SCADA/MES-Architekt bei einem Systemintegrator oder großen Industriekonzern',
        'International zertifizierter Regelungstechnik-Experte mit ISA-Zertifizierung',
        'Direktor Digitale Transformation in einem Fertigungsunternehmen oder CTO eines IIoT-Start-ups'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    }
  ],
  roles: {
    plc_eng: {
      emoji: '🖥️',
      name: 'SPS- / Leittechnik-Ingenieur',
      desc: 'Du programmierst industrielle Steuerungen — das Herzstück automatisierter Produktionsanlagen weltweit',
      detail: 'Speicherprogrammierbare Steuerungen (SPS) kontrollieren alles — vom Förderband bis zur Ölquelle. Du schreibst Programme in Kontaktplan, Strukturiertem Text oder Funktionsbausteinen mit TIA Portal, Studio 5000 oder Codesys. Du konfigurierst Ein-/Ausgänge, richtest Kommunikation über Profibus/Profinet/Modbus ein und führst die Inbetriebnahme direkt vor Ort durch. Dein Programm läuft jahrelang ohne Unterbrechung — Zuverlässigkeit ist keine Option.',
      start: [
        'Lerne TIA Portal mit Siemens S7-1200/1500 — die am weitesten verbreitete SPS-Plattform weltweit',
        'Studiere IEC 61131-3: Kontaktplan und Strukturierter Text sind die zwei wichtigsten Programmiersprachen',
        'Installiere Codesys kostenlos und baue dein erstes Projekt — eine Ampel oder ein Sortiersystem ist ein perfekter Einstieg',
        'Lies „Automating Manufacturing Systems with PLCs" von Hugh Jack — ein kostenloses, umfassendes Online-Lehrbuch'
      ]
    },
    scada_eng: {
      emoji: '📡',
      name: 'SCADA-Ingenieur',
      desc: 'Du baust Prozessleitsysteme — gibst Bedienern Echtzeittransparenz und vollständige Kontrolle',
      detail: 'SCADA ist die Augen und Hände des Anlagenführers. Du entwirfst Bedienbilder, konfigurierst Datenarchivierung, richtest Alarme und Trends ein und schreibst Skripte für erweiterte Steuerfunktionen. Du arbeitest mit WinCC, Wonderware InTouch, iFIX oder Ignition. Dein System muss den Prozess in Echtzeit korrekt abbilden und darf niemals ausfallen — die Anlagensicherheit hängt davon ab.',
      start: [
        'Lerne Ignition von Inductive Automation — eine moderne webbasierte SCADA-Plattform mit kostenloser Testversion',
        'Studiere OPC UA — das Standardprotokoll für die Kommunikation zwischen SPS und SCADA in modernen Systemen',
        'Mache einen SQL-Kurs — SCADA-Systeme speichern Terabytes an Historikdaten, die du abfragen können musst',
        'Lies ISA-101 — der Standard für die Gestaltung von Mensch-Maschine-Schnittstellen in der Prozessindustrie'
      ]
    },
    process_control_eng: {
      emoji: '🎛️',
      name: 'Regelungstechnik-Ingenieur',
      desc: 'Du stellst Regelkreise ein und optimierst sie — damit Prozessgrößen stets in engen Toleranzen bleiben',
      detail: 'Du bist Spezialist für Regelungstheorie. Du identifizierst Prozessdynamiken, berechnest PID-Parameter, entwirfst Kaskaden- und Vorsteuerungsregelungen und analysierst die Stabilität geschlossener Kreise. Du nutzt MATLAB/Simulink zur Modellierung und virtuellen Inbetriebnahme. In einer Raffinerie halten deine Regelkreise Temperatur und Druck in engen Toleranzen — das bestimmt direkt Produktqualität und Anlagensicherheit.',
      start: [
        'Studiere Grundlagen der Regelungstechnik: „Process Control: Designing Processes and Control Systems for Dynamic Performance" von Marlin',
        'Lerne MATLAB mit der Control System Toolbox — der Standard für Analyse und Entwurf von Regelungssystemen',
        'Mache einen Kurs zu Übertragungsfunktionen, Frequenzgang und Stabilitätsreserven',
        'Strebe die ISA CCST-Zertifizierung (Certified Control System Technician) an — ein international anerkannter Standard'
      ]
    },
    iiot_eng: {
      emoji: '🌐',
      name: 'IIoT-Ingenieur (Industrie 4.0)',
      desc: 'Du verbindest Industrieanlagen mit digitalen Plattformen — und baust die smarten Fabriken der Zukunft',
      detail: 'Du baust die Brücke zwischen Shopfloor und Cloud. Du verbindest Sensoren, SPS und Maschinen über OPC UA, MQTT oder industrielle Feldbusprotokolle. Du konfigurierst Edge Computing und Cloud-Plattformen (Siemens MindSphere, PTC ThingWorx, AWS IoT) für vorausschauende Wartung und Echtzeit-Monitoring. Du analysierst Zeitreihen, erstellst Dashboards und entwickelst Machine-Learning-Modelle, um Geräteausfälle vorherzusagen, bevor sie eintreten.',
      start: [
        'Lerne MQTT und OPC UA — die zwei Protokolle, die die Industriewelt mit Cloud-Plattformen verbinden',
        'Meistere Node-RED für den Aufbau von Datenflüssen zwischen Sensoren und Cloud-Diensten — kostenlos und visuell',
        'Mache einen Kurs zu Azure IoT Hub oder AWS IoT Core — die führenden Enterprise-IIoT-Plattformen',
        'Studiere das Konzept des Digitalen Zwillings — den zentralen Technologietrend der Industrie 4.0'
      ]
    }
  },
  ui: { l2back: '← Zurück zur Ingenieurwissenschaft', title: 'Automatisierungstechnik: welche Spezialisierung?' }
};

L2.automation.fr = {
  questions: [
    {
      t: 'Qu\'est-ce qui t\'attire le plus dans l\'automatisation industrielle ?',
      o: [
        'Programmer des automates — écrire la logique de commande qui fait tourner une ligne de production 24h/24 sans intervention humaine',
        'Construire des systèmes SCADA — visualiser les procédés industriels et donner aux opérateurs un contrôle total',
        'Régler des boucles de régulation — maintenir une variable de procédé dans des limites précises en toutes conditions',
        'Connecter les usines au cloud — développer des systèmes IIoT pour la surveillance et la maintenance prédictive'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: 'Avec quel outil aimerais-tu le plus travailler ?',
      o: [
        'TIA Portal (Siemens) ou Studio 5000 (Allen-Bradley) — les principaux environnements de programmation d\'automates',
        'WinCC, Wonderware ou Ignition — les plateformes SCADA pour la visualisation des procédés industriels',
        'MATLAB/Simulink — modéliser les systèmes de commande et optimiser les régulateurs PID',
        'Node-RED, Kafka et Azure IoT Hub — construire des pipelines de données des capteurs jusqu\'au cloud'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: 'Quel résultat de ton travail t\'apporte le plus de satisfaction ?',
      o: [
        'Le programme automate est chargé — la ligne démarre et fonctionne exactement selon l\'algorithme sans que personne n\'intervienne',
        'Le dispatcher voit toute l\'installation sur l\'écran SCADA en temps réel et peut tout piloter depuis un seul endroit',
        'La boucle de régulation est réglée — la variable de procédé reste dans ±0,1 % quelle que soit la perturbation',
        'Les données des capteurs ont transité vers le cloud et le modèle a prédit une panne d\'équipement 3 jours avant qu\'elle survienne'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: 'Comment préfères-tu travailler ?',
      o: [
        'Sur le terrain près des équipements — connecter l\'automate et déboguer la logique directement sur site',
        'En salle de contrôle ou à distance — configurer les interfaces, les bases de données et la partie serveur SCADA',
        'Au bureau avec des modèles — écrire des équations, tracer des diagrammes de Bode, simuler des réponses indicielle',
        'Au bureau avec des données — concevoir l\'architecture IIoT, analyser des séries temporelles, construire des tableaux de bord'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: 'Dans quel secteur aimerais-tu travailler ?',
      o: [
        'Pétrole & gaz, chimie ou énergie — piloter des procédés continus dans de grandes installations industrielles',
        'Agroalimentaire ou pharmacie — construire des systèmes SCADA pour le contrôle qualité et la conformité GMP',
        'Métallurgie ou mines — commander des équipements de procédé puissants et mécaniquement complexes',
        'Fabrication intelligente (Industrie 4.0) — relier l\'atelier, l\'ERP et le cloud pour former une usine numérique'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: 'Où te vois-tu dans 10 ans ?',
      o: [
        'Ingénieur principal en systèmes de commande ou chef de projet automatisation sur un grand site industriel',
        'Architecte SCADA/MES chez un intégrateur de systèmes ou dans un grand groupe industriel',
        'Expert en systèmes de commande certifié à l\'international avec les accréditations ISA',
        'Directeur de la Transformation Numérique d\'un industriel ou CTO d\'une start-up IIoT'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    }
  ],
  roles: {
    plc_eng: {
      emoji: '🖥️',
      name: 'Ingénieur automate / Systèmes de commande',
      desc: 'Tu programmes des automates industriels — le cœur des installations de production automatisées dans le monde entier',
      detail: 'Les automates programmables (API) contrôlent tout, des convoyeurs aux puits de pétrole. Tu écris des programmes en schéma à contacts, texte structuré ou blocs fonctionnels avec TIA Portal, Studio 5000 ou Codesys. Tu configures les entrées/sorties, mets en place les communications Profibus/Profinet/Modbus et effectues la mise en service directement sur site. Ton programme tourne sans interruption pendant des années — la fiabilité n\'est pas négociable.',
      start: [
        'Apprends TIA Portal avec les Siemens S7-1200/1500 — la plateforme automate la plus déployée au monde',
        'Étudie les langages CEI 61131-3 : le schéma à contacts et le texte structuré sont les deux plus importants',
        'Installe Codesys gratuitement et réalise un premier projet — un feu tricolore ou un système de tri est un parfait point de départ',
        'Lis « Automating Manufacturing Systems with PLCs » de Hugh Jack — un manuel en ligne complet et gratuit'
      ]
    },
    scada_eng: {
      emoji: '📡',
      name: 'Ingénieur SCADA',
      desc: 'Tu construis des systèmes de supervision — en donnant aux opérateurs une visibilité et un contrôle en temps réel',
      detail: 'Le SCADA est les yeux et les mains de l\'opérateur d\'installation. Tu conçois les écrans opérateurs, configures l\'archivage des données, paramètres les alarmes et les tendances, et écris des scripts pour les fonctions de commande avancées. Tu travailles avec WinCC, Wonderware InTouch, iFIX ou Ignition. Ton système doit refléter fidèlement l\'état du procédé en temps réel et ne jamais tomber en panne — la sécurité de l\'installation en dépend.',
      start: [
        'Apprends Ignition d\'Inductive Automation — une plateforme SCADA web moderne avec une version d\'essai gratuite',
        'Étudie OPC UA — le protocole standard de communication entre automates et SCADA dans les systèmes modernes',
        'Suis un cours SQL — les systèmes SCADA stockent des téraoctets de données historiques que tu dois savoir interroger',
        'Lis ISA-101 — la norme de conception des interfaces homme-machine pour les industries de procédé'
      ]
    },
    process_control_eng: {
      emoji: '🎛️',
      name: 'Ingénieur régulation de procédé',
      desc: 'Tu règles et optimises les boucles de régulation — pour maintenir les variables de procédé dans des tolérances strictes',
      detail: 'Tu es spécialiste en théorie de la commande. Tu identifies la dynamique des procédés, calcules les paramètres PID, conçois des schémas de régulation en cascade et par anticipation, et analyses la stabilité en boucle fermée. Tu utilises MATLAB/Simulink pour la modélisation et la mise en service virtuelle. Dans une raffinerie, tes boucles maintiennent la température et la pression dans des tolérances serrées — ce qui détermine directement la qualité du produit et la sécurité de l\'installation.',
      start: [
        'Étudie les fondamentaux de la régulation de procédé : « Process Control : Designing Processes and Control Systems for Dynamic Performance » de Marlin',
        'Apprends MATLAB avec la Control System Toolbox — la référence pour l\'analyse et la conception de systèmes de commande',
        'Suis un cours sur les fonctions de transfert, la réponse fréquentielle et les marges de stabilité',
        'Vise la certification ISA CCST (Certified Control System Technician) — une norme reconnue à l\'international'
      ]
    },
    iiot_eng: {
      emoji: '🌐',
      name: 'Ingénieur IIoT (Industrie 4.0)',
      desc: 'Tu connectes les actifs industriels aux plateformes numériques — et tu construis les usines intelligentes de demain',
      detail: 'Tu construis le pont entre l\'atelier et le cloud. Tu connectes capteurs, automates et équipements via OPC UA, MQTT ou des protocoles de bus de terrain industriels. Tu configures l\'edge computing et les plateformes cloud (Siemens MindSphere, PTC ThingWorx, AWS IoT) pour la maintenance prédictive et la surveillance en temps réel. Tu analyses des séries temporelles, construis des tableaux de bord et développes des modèles de machine learning pour prédire les pannes avant qu\'elles surviennent.',
      start: [
        'Apprends MQTT et OPC UA — les deux protocoles qui connectent le monde industriel aux plateformes cloud',
        'Maîtrise Node-RED pour construire des flux de données entre capteurs et services cloud — gratuit et visuel',
        'Suis un cours sur Azure IoT Hub ou AWS IoT Core — les principales plateformes IIoT d\'entreprise',
        'Étudie le concept de Jumeau Numérique — la tendance technologique centrale de l\'Industrie 4.0'
      ]
    }
  },
  ui: { l2back: '← Retour à l\'ingénierie', title: 'Automatisation industrielle : quelle spécialisation ?' }
};



L2.automation.es = {
  questions: [
    {
      t: '¿Qué te atrae más de la automatización industrial?',
      o: [
        'Programar PLCs — escribir lógica de control que mantiene una línea de producción funcionando 24/7 sin intervención humana',
        'Construir sistemas SCADA — visualizar procesos industriales y dar a los operadores control total',
        'Sintonizar lazos de control — lograr una regulación precisa de la variable de proceso en cualquier condición',
        'Conectar fábricas a la nube — desarrollar sistemas IIoT para monitoreo y mantenimiento predictivo'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: '¿Con qué herramienta te gustaría trabajar?',
      o: [
        'TIA Portal (Siemens) o Studio 5000 (Allen-Bradley) — los principales entornos de programación de PLCs',
        'WinCC, Wonderware o Ignition — plataformas SCADA para visualización de procesos industriales',
        'MATLAB/Simulink — modelar sistemas de control y optimizar controladores PID',
        'Node-RED, Kafka y Azure IoT Hub — construir pipelines de datos desde sensores hasta la nube'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: '¿Qué resultado de tu trabajo te da mayor satisfacción?',
      o: [
        'El programa del PLC está cargado — la línea arranca y funciona exactamente según el algoritmo sin que nadie la toque',
        'El operador ve toda la planta en la pantalla SCADA en tiempo real y puede controlar todo desde un solo lugar',
        'El lazo de control está sintonizado — la variable de proceso se mantiene en ±0,1% ante cualquier perturbación',
        'Los datos de los sensores fluyeron a la nube y el modelo predijo una falla de equipo 3 días antes de que ocurriera'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: '¿Cómo prefieres trabajar?',
      o: [
        'En la planta junto a los equipos — conectarse al PLC y depurar la lógica directamente en sitio',
        'En la sala de control o de forma remota — configurar interfaces, bases de datos y el lado servidor del SCADA',
        'En la oficina con modelos — escribir ecuaciones, trazar diagramas de Bode, simular respuestas al escalón',
        'En la oficina con datos — diseñar arquitecturas IIoT, analizar series temporales, construir dashboards'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: '¿En qué industria te gustaría trabajar?',
      o: [
        'Petróleo y gas, química o energía — controlar procesos continuos en grandes instalaciones industriales',
        'Alimentos y bebidas o farmacéutica — desarrollar SCADA para control de calidad y cumplimiento GMP',
        'Metalurgia o minería — controlar equipos de proceso potentes y mecánicamente complejos',
        'Manufactura inteligente (Industria 4.0) — conectar talleres, ERP y nube en una fábrica digital'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: '¿Dónde te ves en 10 años?',
      o: [
        'Ingeniero líder en sistemas de control o gerente de proyectos de automatización en una gran instalación industrial',
        'Arquitecto SCADA/MES en un integrador de sistemas o gran grupo industrial',
        'Experto en sistemas de control con certificación internacional ISA',
        'Director de Transformación Digital de una empresa manufacturera o CTO de una startup IIoT'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    }
  ],
  roles: {
    plc_eng: {
      emoji: '🔧',
      name: 'Ingeniero de PLC / Sistemas de Control',
      desc: 'Programas controladores industriales — el corazón de las instalaciones de producción automatizadas',
      detail: 'Los PLCs controlan todo, desde cintas transportadoras hasta pozos petroleros. Escribes programas en Diagrama de Escalera, Texto Estructurado o Diagrama de Bloques de Función usando TIA Portal, Studio 5000 o Codesys. Configuras entradas/salidas, estableces comunicaciones por Profibus/Profinet/Modbus y realizas la puesta en marcha directamente en sitio. Tu programa funciona sin interrupciones durante años — la confiabilidad no es opcional.',
      start: [
        'Aprende TIA Portal con Siemens S7-1200/1500 — la plataforma PLC más implementada a nivel mundial',
        'Estudia los lenguajes IEC 61131-3: Diagrama de Escalera y Texto Estructurado son los dos más importantes',
        'Instala Codesys gratuitamente y construye un primer proyecto — un semáforo o sistema de clasificación es un inicio perfecto',
        'Lee "Automating Manufacturing Systems with PLCs" de Hugh Jack — un libro de texto en línea gratuito y completo'
      ]
    },
    scada_eng: {
      emoji: '🖥️',
      name: 'Ingeniero SCADA',
      desc: 'Construyes sistemas de supervisión y control — dando a los operadores visibilidad y control en tiempo real',
      detail: 'El SCADA son los ojos y manos del operador de la planta. Diseñas pantallas de operador, configuras el archivado de datos, alarmas y tendencias, y escribes scripts para funciones de control avanzadas. Trabajas con WinCC, Wonderware InTouch, iFIX o Ignition. Tu sistema debe mostrar la realidad del proceso en tiempo real y nunca caer — la seguridad de la planta depende de ello.',
      start: [
        'Aprende Ignition de Inductive Automation — una plataforma SCADA web moderna con prueba gratuita',
        'Estudia OPC UA — el protocolo estándar de comunicación entre PLCs y SCADA en sistemas modernos',
        'Toma un curso de SQL — los sistemas SCADA almacenan terabytes de datos históricos que debes saber consultar',
        'Lee ISA-101 — el estándar para diseñar interfaces hombre-máquina en industrias de proceso'
      ]
    },
    process_control_eng: {
      emoji: '⚗️',
      name: 'Ingeniero de Control de Procesos',
      desc: 'Sintonizas y optimizas lazos de control — manteniendo variables de proceso dentro de especificaciones estrictas',
      detail: 'Eres especialista en teoría de control. Identificas la dinámica del proceso, calculas parámetros PID, diseñas esquemas de control en cascada y prealimentado, y analizas la estabilidad en lazo cerrado. Usas MATLAB/Simulink para modelado y puesta en marcha virtual. En una refinería, tus lazos mantienen temperatura y presión en tolerancias estrechas — esto determina directamente la calidad del producto y la seguridad de la planta.',
      start: [
        'Estudia fundamentos de control de procesos: "Process Control: Designing Processes and Control Systems for Dynamic Performance" de Marlin',
        'Aprende MATLAB con el Control System Toolbox — el estándar para análisis y diseño de sistemas de control',
        'Toma un curso sobre funciones de transferencia, respuesta en frecuencia y márgenes de estabilidad',
        'Obtén la certificación ISA CCST (Certified Control System Technician) — un estándar reconocido internacionalmente'
      ]
    },
    iiot_eng: {
      emoji: '🌐',
      name: 'Ingeniero IIoT (Industria 4.0)',
      desc: 'Conectas activos industriales a plataformas digitales — construyendo las fábricas inteligentes del futuro',
      detail: 'Construyes el puente entre el piso de planta y la nube. Conectas sensores, PLCs y equipos mediante OPC UA, MQTT o protocolos de bus de campo industrial. Configuras Edge Computing y plataformas en la nube (Siemens MindSphere, PTC ThingWorx, AWS IoT) para mantenimiento predictivo y monitoreo en tiempo real. Analizas series temporales, construyes dashboards y desarrollas modelos de machine learning para predecir fallas de equipos antes de que ocurran.',
      start: [
        'Aprende MQTT y OPC UA — los dos protocolos que conectan el mundo industrial con las plataformas en la nube',
        'Domina Node-RED para construir flujos de datos entre sensores y servicios en la nube — gratuito y visual',
        'Toma un curso sobre Azure IoT Hub o AWS IoT Core — las principales plataformas IIoT empresariales',
        'Estudia el concepto de Gemelo Digital — la tendencia tecnológica central de la Industria 4.0'
      ]
    }
  },
  ui: { l2back: '← Volver a ingeniería', title: 'Automatización industrial: ¿qué especialización?' }
};

L2.automation.pt = {
  questions: [
    {
      t: 'O que mais te atrai na automação industrial?',
      o: [
        'Programar CLPs — escrever lógica de controle que mantém uma linha de produção funcionando 24/7 sem intervenção humana',
        'Construir sistemas SCADA — visualizar processos industriais e dar aos operadores controle total',
        'Sintonizar malhas de controle — alcançar regulação precisa da variável de processo em qualquer condição',
        'Conectar fábricas à nuvem — desenvolver sistemas IIoT para monitoramento e manutenção preditiva'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: 'Com qual ferramenta você gostaria de trabalhar?',
      o: [
        'TIA Portal (Siemens) ou Studio 5000 (Allen-Bradley) — os principais ambientes de programação de CLPs',
        'WinCC, Wonderware ou Ignition — plataformas SCADA para visualização de processos industriais',
        'MATLAB/Simulink — modelar sistemas de controle e otimizar controladores PID',
        'Node-RED, Kafka e Azure IoT Hub — construir pipelines de dados de sensores até a nuvem'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: 'Qual resultado do seu trabalho te dá mais satisfação?',
      o: [
        'O programa do CLP foi carregado — a linha arranca e funciona exatamente conforme o algoritmo sem ninguém tocar',
        'O operador vê toda a planta na tela SCADA em tempo real e pode controlar tudo de um único lugar',
        'A malha de controle está sintonizada — a variável de processo se mantém em ±0,1% sob qualquer perturbação',
        'Os dados dos sensores fluíram para a nuvem e o modelo previu uma falha de equipamento 3 dias antes de acontecer'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: 'Como você prefere trabalhar?',
      o: [
        'No chão de fábrica perto dos equipamentos — conectar ao CLP e depurar a lógica diretamente no local',
        'Na sala de controle ou remotamente — configurar interfaces, bancos de dados e o lado servidor do SCADA',
        'No escritório com modelos — escrever equações, plotar diagramas de Bode, simular respostas ao degrau',
        'No escritório com dados — projetar arquiteturas IIoT, analisar séries temporais, construir dashboards'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: 'Em qual setor você gostaria de trabalhar?',
      o: [
        'Petróleo e gás, química ou energia — controlar processos contínuos em grandes instalações industriais',
        'Alimentos e bebidas ou farmacêutica — desenvolver SCADA para controle de qualidade e conformidade com GMP',
        'Metalurgia ou mineração — controlar equipamentos de processo potentes e mecanicamente complexos',
        'Manufatura inteligente (Indústria 4.0) — conectar chão de fábrica, ERP e nuvem em uma fábrica digital'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    },
    {
      t: 'Onde você se vê daqui a 10 anos?',
      o: [
        'Engenheiro líder de sistemas de controle ou gerente de projetos de automação em uma grande instalação industrial',
        'Arquiteto SCADA/MES em um integrador de sistemas ou grande grupo industrial',
        'Especialista em sistemas de controle com certificação internacional ISA',
        'Diretor de Transformação Digital de uma empresa de manufatura ou CTO de uma startup IIoT'
      ],
      s: [{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]
    }
  ],
  roles: {
    plc_eng: {
      emoji: '🔧',
      name: 'Engenheiro de CLP / Sistemas de Controle',
      desc: 'Você programa controladores industriais — o coração das instalações de produção automatizadas',
      detail: 'CLPs controlam tudo, desde esteiras transportadoras até poços de petróleo. Você escreve programas em Diagrama Ladder, Texto Estruturado ou Diagrama de Blocos de Função usando TIA Portal, Studio 5000 ou Codesys. Configura entradas/saídas, estabelece comunicações por Profibus/Profinet/Modbus e realiza o comissionamento diretamente no local. Seu programa funciona sem interrupções por anos — confiabilidade não é opcional.',
      start: [
        'Aprenda TIA Portal com Siemens S7-1200/1500 — a plataforma CLP mais implantada mundialmente',
        'Estude as linguagens IEC 61131-3: Diagrama Ladder e Texto Estruturado são as duas mais importantes',
        'Instale o Codesys gratuitamente e construa um primeiro projeto — um semáforo ou sistema de triagem é um começo perfeito',
        'Leia "Automating Manufacturing Systems with PLCs" de Hugh Jack — um livro didático online gratuito e abrangente'
      ]
    },
    scada_eng: {
      emoji: '🖥️',
      name: 'Engenheiro SCADA',
      desc: 'Você constrói sistemas de supervisão e aquisição de dados — dando aos operadores visibilidade e controle em tempo real',
      detail: 'O SCADA são os olhos e as mãos do operador da planta. Você projeta telas de operador, configura o arquivamento de dados, alarmes e tendências, e escreve scripts para funções de controle avançadas. Trabalha com WinCC, Wonderware InTouch, iFIX ou Ignition. Seu sistema deve mostrar a realidade do processo em tempo real e nunca cair — a segurança da planta depende disso.',
      start: [
        'Aprenda Ignition da Inductive Automation — uma plataforma SCADA web moderna com versão de teste gratuita',
        'Estude OPC UA — o protocolo padrão de comunicação entre CLPs e SCADA em sistemas modernos',
        'Faça um curso de SQL — os sistemas SCADA armazenam terabytes de dados históricos que você precisa saber consultar',
        'Leia ISA-101 — o padrão para projetar interfaces homem-máquina em indústrias de processo'
      ]
    },
    process_control_eng: {
      emoji: '⚗️',
      name: 'Engenheiro de Controle de Processos',
      desc: 'Você sintoniza e otimiza malhas de controle — mantendo variáveis de processo dentro de especificações rígidas',
      detail: 'Você é especialista em teoria de controle. Identifica a dinâmica do processo, calcula parâmetros PID, projeta esquemas de controle em cascata e feedforward, e analisa a estabilidade em malha fechada. Usa MATLAB/Simulink para modelagem e comissionamento virtual. Em uma refinaria, suas malhas mantêm temperatura e pressão em tolerâncias estreitas — isso determina diretamente a qualidade do produto e a segurança da planta.',
      start: [
        'Estude fundamentos de controle de processos: "Process Control: Designing Processes and Control Systems for Dynamic Performance" de Marlin',
        'Aprenda MATLAB com o Control System Toolbox — o padrão para análise e projeto de sistemas de controle',
        'Faça um curso sobre funções de transferência, resposta em frequência e margens de estabilidade',
        'Obtenha a certificação ISA CCST (Certified Control System Technician) — um padrão reconhecido internacionalmente'
      ]
    },
    iiot_eng: {
      emoji: '🌐',
      name: 'Engenheiro IIoT (Indústria 4.0)',
      desc: 'Você conecta ativos industriais a plataformas digitais — construindo as fábricas inteligentes do futuro',
      detail: 'Você constrói a ponte entre o chão de fábrica e a nuvem. Conecta sensores, CLPs e equipamentos via OPC UA, MQTT ou protocolos de fieldbus industrial. Configura Edge Computing e plataformas em nuvem (Siemens MindSphere, PTC ThingWorx, AWS IoT) para manutenção preditiva e monitoramento em tempo real. Analisa séries temporais, constrói dashboards e desenvolve modelos de machine learning para prever falhas de equipamentos antes que aconteçam.',
      start: [
        'Aprenda MQTT e OPC UA — os dois protocolos que conectam o mundo industrial às plataformas em nuvem',
        'Domine Node-RED para construir fluxos de dados entre sensores e serviços em nuvem — gratuito e visual',
        'Faça um curso sobre Azure IoT Hub ou AWS IoT Core — as principais plataformas IIoT empresariais',
        'Estude o conceito de Gêmeo Digital — a principal tendência tecnológica da Indústria 4.0'
      ]
    }
  },
  ui: { l2back: '← Voltar à engenharia', title: 'Automação industrial: qual especialização?' }
};

L2.automation.ar = {
  questions: [
    { t:"أيّ جانب من أتمتة الإنتاج يستهويك أكثر؟", o:["برمجة وحدات التحكم المنطقية PLC وأنظمة الأتمتة الصناعية","مراقبة العمليات الصناعية وإدارة بيانات SCADA","التحكم في العمليات الكيميائية والبتروكيماوية والمتغيرة","ربط الأجهزة الصناعية بالإنترنت وتحليل بيانات IIoT"], s:[{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}] },
    { t:"أيّ أداة تودّ إتقانها؟", o:["Siemens TIA Portal وروكويل Studio 5000 لبرمجة PLC","Ignition وWinCC وبرامج SCADA للمراقبة والتحكم","PID Control وأنظمة التحكم في العمليات المتقدمة","MQTT وOPC-UA وبروتوكولات اتصال الأجهزة الصناعية"], s:[{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}] },
    { t:"أيّ نتيجة تُشعرك بالرضا أكثر؟", o:["خط إنتاج آلي يعمل بدون أخطاء لأول مرة","لوحة SCADA تعرض بيانات كاملة وتنبيهات فورية","عملية صناعية تعمل ضمن معايير دقيقة محددة مسبقاً","خط إنتاج متصل بـ IIoT يرسل بيانات للتحليل تلقائياً"], s:[{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}] },
    { t:"أين تُفضّل العمل؟", o:["في مصانع لبرمجة وصيانة أنظمة PLC","في غرف التحكم لمراقبة العمليات عبر SCADA","في الصناعات العملياتية كالنفط والغاز والكيمياء","في شركات تقنية تطور حلول IIoT للمصانع"], s:[{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}] },
    { t:"أيّ مهمة أقرب إليك؟", o:["كتابة برنامج PLC جديد لخط إنتاج معبأت","تطوير لوحة مراقبة SCADA لمحطة معالجة المياه","ضبط معامل PID لتحكم دقيق في درجة الحرارة","ربط مجسات مصنع بمنصة IIoT وتصميم لوحة تحليل"], s:[{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}] },
    { t:"أين ترى نفسك بعد عشر سنوات؟", o:["مهندس أول أنظمة PLC يقود مشاريع الأتمتة الكبرى","مدير غرفة التحكم في منشأة صناعية ضخمة","مهندس أول تحكم في العمليات في شركة بترولية كبرى","مدير تحول رقمي صناعي في مؤسسة تصنيعية"], s:[{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}] },
  ],
  roles: {
    plc_eng:{ emoji:"🔧", name:"مهندس PLC", desc:"تُبرمج وتُصمّم أنظمة التحكم المنطقية للخطوط الصناعية", detail:"تعمل في برمجة الأتمتة.", start:["أتقن Siemens TIA Portal وAllenbradley Studio 5000","تعلّم لغات برمجة IEC 61131-3","تدرّب في مصانع ذات خطوط إنتاج آلية","احصل على شهادة Siemens أو Rockwell"] },
    scada_eng:{ emoji:"🖥️", name:"مهندس SCADA", desc:"تطوّر أنظمة المراقبة والتحكم الإشرافي للعمليات الصناعية", detail:"تعمل في غرف التحكم.", start:["أتقن منصات SCADA مثل Ignition أو iFIX","تعلّم بروتوكولات الاتصال الصناعي Modbus وDNP3","تدرّب في منشآت صناعية لها غرف تحكم","احصل على شهادة في الأنظمة الإشرافية"] },
    process_control_eng:{ emoji:"⚗️", name:"مهندس التحكم في العمليات", desc:"تُصمّم وتُحسّن أنظمة التحكم في العمليات الكيميائية والفيزيائية", detail:"تعمل في الصناعات العملياتية.", start:["ادرس نظرية التحكم الكلاسيكية والمتقدمة","أتقن MATLAB وSimulink","تدرّب في صناعات النفط والغاز أو الكيمياء","احصل على شهادة في الهندسة الكيميائية أو الكهربائية"] },
    iiot_eng:{ emoji:"🌐", name:"مهندس IIoT الصناعي", desc:"تُدمج الأجهزة الصناعية بالإنترنت وتُحلّل بياناتها", detail:"تعمل في التحول الرقمي للمصانع.", start:["تعلّم بروتوكولات MQTT وOPC-UA","أتقن منصات IIoT مثل Siemens MindSphere","تعلّم تحليل البيانات الصناعية","تدرّب في مشاريع التحول الرقمي للمصانع"] },
  },
  ui:{ l2back:"← العودة إلى الهندسة", title:"أتمتة الإنتاج: ما التخصص؟" }
};

L2.automation.he = {
  questions: [
    { t:"מה הצד שהכי מעניין אותך באוטומציה תעשייתית?", o:["תכנות בקרים לוגיים PLC ומערכות אוטומציה","ניטור תהליכים תעשייתיים ו-SCADA","בקרת תהליכים כימיים ופטרוכימיים","חיבור מכשירים תעשייתיים לאינטרנט IIoT"], s:[{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}] },
    { t:"איזה כלי הכי תרצה לשלוט בו?", o:["Siemens TIA Portal ו-Rockwell Studio 5000","Ignition, WinCC ו-SCADA","בקרת PID ומערכות בקרה מתקדמות","MQTT, OPC-UA ופרוטוקולי תקשורת תעשייתיים"], s:[{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}] },
    { t:"איזה תוצאה הכי ממלאת אותך סיפוק?", o:["קו ייצור אוטומטי שעובד בלי שגיאות","לוח SCADA עם נתונים מלאים והתראות","תהליך תעשייתי שעובד בתקנים מדויקים","קו ייצור מחובר ל-IIoT ששולח נתונים לניתוח"], s:[{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}] },
    { t:"איפה אתה מעדיף לעבוד?", o:["במפעלים לתכנות ותחזוקת PLC","בחדרי בקרה לניטור תהליכים","בתעשיות תפעוליות כנפט, גז וכימיה","בחברות טכנולוגיה לפיתוח IIoT"], s:[{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}] },
    { t:"איזה משימה הכי קרובה ללב שלך?", o:["כתיבת תוכנית PLC לקו אריזה","פיתוח לוח מחוון SCADA","כיוון PID לבקרת טמפרטורה","חיבור חיישני מפעל למנגנון IIoT"], s:[{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}] },
    { t:"איפה אתה רואה את עצמך עוד 10 שנים?", o:["מהנדס PLC בכיר","מנהל חדר בקרה","מהנדס בקרת תהליכים בחברת נפט","מנהל טרנספורמציה דיגיטלית"], s:[{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}] },
  ],
  roles: {
    plc_eng:{ emoji:"🔧", name:"מהנדס PLC", desc:"אתה מתכנת בקרים לוגיים לקווי ייצור", detail:"אתה עובד בתכנות אוטומציה.", start:["שלוט ב-TIA Portal ו-Studio 5000","למד IEC 61131-3","התמחה במפעלים עם קווי ייצור","קבל הסמכת Siemens/Rockwell"] },
    scada_eng:{ emoji:"🖥️", name:"מהנדס SCADA", desc:"אתה מפתח מערכות ניטור ובקרה", detail:"אתה עובד בחדרי בקרה.", start:["שלוט ב-Ignition/iFIX","למד Modbus ו-DNP3","התמחה במתקנים תעשייתיים","קבל הסמכה ב-SCADA"] },
    process_control_eng:{ emoji:"⚗️", name:"מהנדס בקרת תהליכים", desc:"אתה מתכנן בקרה לתהליכים כימיים", detail:"אתה עובד בתעשיות תפעוליות.", start:["למד תיאוריית בקרה","שלוט ב-MATLAB/Simulink","התמחה בנפט, גז וכימיה","קבל תואר הנדסה כימית/חשמלית"] },
    iiot_eng:{ emoji:"🌐", name:"מהנדס IIoT תעשייתי", desc:"אתה משלב מכשירים תעשייתיים עם אינטרנט", detail:"אתה עובד בטרנספורמציה דיגיטלית.", start:["למד MQTT ו-OPC-UA","שלוט ב-MindSphere","למד ניתוח נתונים תעשייתיים","התמחה בפרויקטי טרנספורמציה"] },
  },
  ui:{ l2back:"← חזרה להנדסה", title:"אוטומציה תעשייתית: איזה התמחות?" }
};

L2.automation.zh = {
  questions: [
    {t:'工业自动化中什么最吸引你？', o:['PLC编程——让工业设备按逻辑自动运行','SCADA系统——监控和管理整个工厂的运行状态','过程控制——精确控制温度、压力、流量等参数','工业物联网——让工厂设备连接到数字世界'], s:[{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]},
    {t:'你最想精通哪个技术？', o:['西门子S7-1500 PLC和TIA Portal编程','WinCC或Ignition SCADA系统开发','PID参数整定和先进过程控制（APC）','OPC UA、MQTT和工业数据采集系统'], s:[{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]},
    {t:'什么成果最让你有成就感？', o:['你编写的PLC程序让一条生产线实现了全自动化','工厂的管理人员通过你的SCADA每天了解生产情况','你优化了一个反应器的温度控制，产品质量提升了','你搭建的IIoT平台让设备数据实时可见，故障提前预警'], s:[{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]},
    {t:'你更喜欢哪种工作？', o:['在TIA Portal里写梯形图，在车间调试设备','设计人机界面，配置数据库，搭建监控画面','建立过程模型，整定控制参数，分析控制效果','配置工业网关，处理数据协议，开发数据平台'], s:[{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]},
    {t:'你会选择哪个项目？', o:['将一条半自动生产线升级为全自动化','为一个化工厂搭建实时生产监控系统','优化一套复杂的温度控制回路','为一个工厂搭建设备预测性维护系统'], s:[{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]},
    {t:'10年后你在哪里？', o:['系统集成商的自动化技术总监','大型制造企业的工厂数字化负责人','过程控制领域的独立顾问专家','工业物联网平台公司的CTO'], s:[{plc_eng:3},{scada_eng:3},{process_control_eng:3},{iiot_eng:3}]}
  ],
  roles: {
    plc_eng: {emoji:'🏭', name:'PLC工程师', desc:'编写和调试PLC程序，实现工业设备和生产线的自动化控制', detail:'你是工厂自动化的核心。你用梯形图或结构化文本编写控制逻辑，在现场调试设备，解决各种复杂的工艺控制问题。你的程序让机器代替人工完成重复、危险的工作。', start:['学习PLC基础——从西门子S7-200/300开始','掌握TIA Portal软件——西门子的编程环境','了解工业现场总线——Profibus、Profinet','找一台二手PLC，自己接线、编程、调试']},
    scada_eng: {emoji:'🖥️', name:'SCADA工程师', desc:'构建工厂级的监控和数据采集系统，让生产状态可视化', detail:'你让工厂管理者能够"看到"整个工厂的运行状态。你设计操作画面，配置实时数据库，设置报警和历史趋势，让每一台设备的状态都一目了然。', start:['学习WinCC或Ignition——两个最主流的SCADA平台','了解OPC（OLE for Process Control）——SCADA数据连接的标准','掌握工厂数据库基础——SQL Server在SCADA中的应用','了解工业网络安全——SCADA系统的安全防护']},
    process_control_eng: {emoji:'📈', name:'过程控制工程师', desc:'精确控制复杂工艺过程中的温度、压力、流量等关键参数', detail:'你让化工、石化、制药等行业的生产过程按照精确的参数运行。你建立工艺模型，设计控制方案，整定PID参数，应用先进过程控制技术，确保产品质量和生产安全。', start:['学习自动控制原理——PID控制是核心','了解主流DCS系统——艾默生DeltaV或霍尼韦尔','掌握过程仿真——Aspen HYSYS基础','学习先进过程控制（APC）基础——模型预测控制（MPC）']},
    iiot_eng: {emoji:'🌐', name:'工业物联网工程师', desc:'把工厂设备连接到数字网络，实现数据的采集、传输和分析应用', detail:'你是工厂数字化转型的推动者。你配置工业网关，处理各种设备协议，把现场数据传到云端，并构建数据分析应用，让设备故障提前预警，让生产决策有数据依据。', start:['了解工业通信协议——OPC UA、MQTT、Modbus','学习工业网关配置——树莓派或专业工业网关','掌握时序数据库——InfluxDB或TimescaleDB','了解工业云平台——阿里云工业互联网或微软Azure IoT']}
  },
  ui: {l2back:'← 返回自动化', title:'工业自动化：选择你的专业方向'}
};
