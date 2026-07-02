'use strict';
/* ── L2: Инженер производства / Менеджер производства ───────────────────────
   4 roles: quality_eng 🔍 | lean_specialist 📉 | supply_chain_eng 🚚 | plant_manager 🏭
   RU only — другие языки добавляются отдельно
──────────────────────────────────────────────────────────────────────────── */

L2.production.ru = {
  questions: [
    {
      t: 'Что в производственной работе тебе ближе всего?',
      o: [
        'Контроль качества — убедиться, что каждая деталь соответствует стандартам и допускам',
        'Оптимизация процессов — убирать потери, сокращать время цикла и снижать себестоимость',
        'Управление цепочкой поставок — чтобы нужные материалы были на заводе в нужный момент',
        'Управлять всем заводом — отвечать за людей, оборудование, план и результат'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: 'Какой инструмент тебе хотелось бы освоить?',
      o: [
        'CMM (координатно-измерительная машина), MSA и SPC-карты — измерять и контролировать качество',
        'Value Stream Mapping, SMED и симуляция производства — видеть и устранять потери',
        'SAP MM / Oracle SCM — управлять запасами, закупками и поставщиками в ERP',
        'MES (Manufacturing Execution System) — управлять выполнением производственного плана в реальном времени'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: 'Какой результат работы тебя радует?',
      o: [
        'Уровень брака снизился с 3% до 0,3% — продукция теперь соответствует стандарту с первого раза',
        'OEE вырос на 15% после внедрения потока единичных изделий — производительность без инвестиций',
        'Срок исполнения заказов сократился с 6 недель до 2 — клиенты получают продукт быстрее конкурентов',
        'Завод выполнил годовой план, уложился в бюджет и снизил травматизм до нуля'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: 'Как ты предпочитаешь работать?',
      o: [
        'На производстве с измерительным инструментом — проверять, измерять, анализировать дефекты',
        'Между цехом и офисом — наблюдать процесс, рисовать карты потока и вести кайдзен-сессии',
        'В офисе с данными — анализировать спрос, управлять запасами и вести переговоры с поставщиками',
        'В переговорах, обходах, совещаниях — управлять людьми и принимать стратегические решения'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: 'Какой подход тебе ближе?',
      o: [
        'Ноль дефектов — продукт должен работать правильно с первого раза, всегда',
        'Непрерывное совершенствование — каждый день делаем что-то немного лучше, чем вчера',
        'Надёжность поставок — клиент должен получить то, что заказал, вовремя и в полном объёме',
        'Баланс целей — безопасность, качество, поставка, стоимость — всё должно работать вместе'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: 'Где ты видишь себя через 10 лет?',
      o: [
        'Директор по качеству (Quality Director) или менеджер по качеству поставщиков в автопроме или аэрокосмосе',
        'Директор по производственной системе или VP of Operational Excellence в международном холдинге',
        'Директор по цепочке поставок (CSCO) крупной производственной компании или FMCG-корпорации',
        'Генеральный директор завода или операционный директор (COO) производственного холдинга'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    }
  ],
  roles: {
    quality_eng: {
      emoji: '🔍',
      name: 'Инженер по качеству',
      desc: 'Обеспечиваешь качество продукции — от входного контроля до сертификации',
      detail: 'Ты гарантируешь, что продукт соответствует требованиям: международным стандартам, нормативам и ожиданиям клиента. Проводишь MSA (анализ системы измерений), строишь контрольные карты Шухарта, ведёшь FMEA, разрабатываешь план управления. Работаешь с координатно-измерительными машинами, проводишь аудиты поставщиков и внутренние аудиты. Главный результат — ноль дефектов у клиента.',
      start: [
        'Получи сертификацию ASQ CQE (Certified Quality Engineer) — международный стандарт профессии',
        'Изучи IATF 16949 (автопром) или AS9100 (аэрокосмос) — отраслевые стандарты качества',
        'Освой статистические методы: SPC, MSA, DOE — без них нельзя управлять качеством системно',
        'Читай «Выход из кризиса» Деминга — фундаментальная книга о философии управления качеством'
      ]
    },
    lean_specialist: {
      emoji: '📉',
      name: 'Lean-специалист / Инженер по бережливому производству',
      desc: 'Внедряешь бережливое производство — убираешь потери и делаешь процессы эффективнее',
      detail: 'Бережливое производство (Lean) — это философия Toyota, которую весь мир взял за основу. Ты картографируешь потоки создания ценности (VSM), проводишь кайдзен-события, внедряешь 5S, TPM, SMED и стандартизированную работу. Твой главный вопрос: «Зачем мы делаем это именно так?» Ты находишь потери там, где их никто не видит, и убираешь их системно. Результат — рост производительности без капитальных вложений.',
      start: [
        'Получи сертификацию Lean Six Sigma Green Belt — следующий шаг после Green Belt это Black Belt',
        'Изучи Toyota Production System (TPS) в первоисточнике — книга Таити Оно обязательна',
        'Освой Value Stream Mapping: нарисуй карту текущего состояния своего процесса и найди потери',
        'Пройди обучение по кайдзен в Kaizen Institute или на программах Lean Enterprise Institute'
      ]
    },
    supply_chain_eng: {
      emoji: '🚚',
      name: 'Инженер / менеджер цепочки поставок',
      desc: 'Управляешь материальными потоками — от поставщика до клиента без перебоев',
      detail: 'Ты отвечаешь за то, чтобы производство никогда не остановилось из-за нехватки материалов, а клиент всегда получал заказ вовремя. Управляешь запасами (ABC/XYZ анализ), ведёшь планирование по MRP/MRPII, выбираешь и оцениваешь поставщиков, отслеживаешь KPI цепочки поставок. Работаешь в SAP, Oracle или 1С. В кризис — именно ты находишь альтернативных поставщиков и вывозишь производство.',
      start: [
        'Получи сертификацию APICS CPIM или CSCP — золотой стандарт специалиста по цепочкам поставок',
        'Освой SAP MM или S/4HANA — большинство крупных производств работают на SAP',
        'Изучи ABC/XYZ-анализ запасов и методы расчёта точки заказа — это база управления запасами',
        'Читай «The Goal» Элияху Голдратта — теория ограничений, которая изменит твой взгляд на производство'
      ]
    },
    plant_manager: {
      emoji: '🏭',
      name: 'Директор / Управляющий производством',
      desc: 'Руководишь заводом или производственным подразделением — люди, план, безопасность, результат',
      detail: 'Ты несёшь полную ответственность за производство: безопасность работников, выполнение плана, качество продукции и затраты. Управляешь командой руководителей цехов, взаимодействуешь с коммерческим блоком и акционерами. Используешь MES и ERP для оперативного контроля, ведёшь ежедневные совещания по QCDSM (Quality, Cost, Delivery, Safety, Morale). Твоё слово — последнее на производстве.',
      start: [
        'Получи MBA или Executive-программу по операционному менеджменту в ведущей бизнес-школе',
        'Пройди программу развития лидеров на производстве — например, Leadership Development в международных компаниях',
        'Изучи производственные финансы: понимать P&L завода и управлять EBITDA — обязательный навык',
        'Читай «Менеджмент» Питера Друкера — фундамент управленческого мышления для любого руководителя'
      ]
    }
  },
  ui: { l2back: '← К инженерии', title: 'Производство: какая специализация?' }
};



L2.production.en = {
  questions: [
    {
      t: 'What aspect of manufacturing work is closest to you?',
      o: [
        'Quality control — making sure every part meets specifications, standards, and tolerances',
        'Process optimisation — eliminating waste, reducing cycle time, and cutting unit cost',
        'Supply chain management — ensuring the right materials are at the plant at the right time',
        'Running the whole factory — responsibility for people, equipment, output, and results'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: 'Which tool would you most like to master?',
      o: [
        'CMM, MSA, and SPC control charts — measure and monitor quality with statistical rigour',
        'Value Stream Mapping, SMED, and production simulation — see and eliminate waste systematically',
        'SAP MM / Oracle SCM — manage inventory, purchasing, and supplier relationships in an ERP',
        'MES (Manufacturing Execution System) — manage production execution in real time between ERP and the shop floor'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: 'What result of your work gives you most satisfaction?',
      o: [
        'Scrap rate fell from 3% to 0.3% — product now conforms to standard first time, every time',
        'OEE improved by 15% after introducing one-piece flow — more output without a single capital investment',
        'Order lead time dropped from 6 weeks to 2 — customers get their product faster than any competitor',
        'The plant hit its annual target, came in on budget, and recorded zero lost-time injuries'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: 'How do you prefer to work?',
      o: [
        'On the shop floor with measurement equipment — inspecting, measuring, analysing defects',
        'Between the factory and the office — observing the process, mapping value streams, running kaizen events',
        'In an office with data — analysing demand, managing inventory, and negotiating with suppliers',
        'In meetings, site walks, and reviews — managing people and making strategic decisions'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: 'Which principle is closest to your thinking?',
      o: [
        'Zero defects — the product must work correctly first time, every time, without exception',
        'Continuous improvement — small changes every day by everyone compound into extraordinary results',
        'Delivery reliability — the customer must receive exactly what they ordered, when they need it',
        'Balanced excellence — safety, quality, delivery, and cost must all be managed together, not traded off'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: 'Where do you see yourself in 10 years?',
      o: [
        'Quality Director or Supplier Quality Manager at an automotive or aerospace manufacturer',
        'Director of Operational Excellence or VP of the Manufacturing System at an international group',
        'Chief Supply Chain Officer (CSCO) at a large manufacturing company or FMCG corporation',
        'Plant General Manager or Chief Operating Officer (COO) of a manufacturing group'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    }
  ],
  roles: {
    quality_eng: {
      emoji: '🔍',
      name: 'Quality Engineer',
      desc: 'You ensure product quality — from incoming inspection to certification and customer delivery',
      detail: 'You are the guardian of conformance. You conduct measurement system analyses (MSA), build Shewhart control charts, lead FMEA sessions, and develop control plans. You audit suppliers and run internal quality audits. You work with CMMs and other metrology equipment. Your ultimate metric is zero defects reaching the customer — and you build the systems that make that possible.',
      start: [
        'Earn ASQ CQE (Certified Quality Engineer) certification — the international benchmark for quality professionals',
        'Study IATF 16949 (automotive) or AS9100 (aerospace) — the sector quality management standards',
        'Master statistical tools: SPC, MSA, DOE — you cannot manage quality without understanding variation',
        'Read "Out of the Crisis" by W. Edwards Deming — the philosophical foundation of quality management'
      ]
    },
    lean_specialist: {
      emoji: '📉',
      name: 'Lean / Operational Excellence Specialist',
      desc: 'You implement lean manufacturing — identifying and eliminating waste to make processes more effective',
      detail: 'Lean is Toyota\'s production philosophy, adopted as the global manufacturing benchmark. You map value streams (VSM), facilitate kaizen events, implement 5S, TPM, SMED, and standardised work. Your key question is always: "Why do we do this exactly this way?" You find waste where nobody else looks for it, and you eliminate it systematically. The result is higher output without capital investment.',
      start: [
        'Get Lean Six Sigma Green Belt certified — Black Belt follows after you have delivered real project results',
        'Read "Toyota Production System" by Taiichi Ohno — required reading, not optional background',
        'Draw a Value Stream Map of a real process you can observe — current state, waste identified, future state proposed',
        'Train with the Kaizen Institute or Lean Enterprise Institute — the leading global lean training organisations'
      ]
    },
    supply_chain_eng: {
      emoji: '🚚',
      name: 'Supply Chain Manager / Engineer',
      desc: 'You manage material flows from supplier to customer — without disruption, at the lowest possible cost',
      detail: 'You are responsible for ensuring production never stops because of missing materials, and customers always receive their orders on time and in full. You manage inventory using ABC/XYZ analysis, plan using MRP/MRPII logic, evaluate and develop suppliers, and track supply chain KPIs. You work in SAP, Oracle, or equivalent ERP systems. In a crisis, you are the one who finds an alternative supplier in 48 hours.',
      start: [
        'Earn APICS CPIM or CSCP certification — the gold standard for supply chain professionals globally',
        'Master SAP MM or S/4HANA — most large manufacturers run on SAP and require it from day one',
        'Learn ABC/XYZ inventory analysis and the economic order quantity model — the foundation of stock management',
        'Read "The Goal" by Eliyahu Goldratt — the theory of constraints will change how you see production systems'
      ]
    },
    plant_manager: {
      emoji: '🏭',
      name: 'Plant / Operations Manager',
      desc: 'You run the factory — full accountability for safety, output, quality, and cost',
      detail: 'You carry full responsibility for everything that happens inside the plant boundary: worker safety, hitting the production plan, product quality, and financial performance. You lead a team of department managers, interface with commercial and finance, and report to the board. You use MES and ERP for operational control, run daily QCDSM stand-ups, and deal with whatever the day throws at you — because something always does.',
      start: [
        'Complete an MBA or Executive Operations Management programme at a respected business school',
        'Pursue leadership development: most large manufacturers run internal LDP programmes — apply early',
        'Learn manufacturing finance: understanding a P&L and managing EBITDA is non-negotiable at this level',
        'Read "The Lean Manager" by Michael and Freddy Ballé — the most practical factory management book available'
      ]
    }
  },
  ui: { l2back: '← Back to engineering', title: 'Manufacturing: which specialisation?' }
};



L2.production.de = {
  questions: [
    {
      t: 'Welcher Aspekt der Produktionsarbeit liegt dir am nächsten?',
      o: [
        'Qualitätskontrolle — sicherstellen, dass jedes Teil den Spezifikationen, Normen und Toleranzen entspricht',
        'Prozessoptimierung — Verschwendung beseitigen, Zykluszeiten verkürzen und Stückkosten senken',
        'Supply-Chain-Management — dafür sorgen, dass die richtigen Materialien zur richtigen Zeit im Werk sind',
        'Die gesamte Fabrik leiten — Verantwortung für Menschen, Maschinen, Ausstoß und Ergebnisse tragen'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: 'Welches Werkzeug möchtest du am liebsten beherrschen?',
      o: [
        'KMG, MSA und SPC-Regelkarten — Qualität statistisch messen und überwachen',
        'Wertstromanalyse, SMED und Produktionssimulation — Verschwendung systematisch sehen und beseitigen',
        'SAP MM / Oracle SCM — Bestände, Einkauf und Lieferantenbeziehungen im ERP-System verwalten',
        'MES (Manufacturing Execution System) — die Produktionsausführung in Echtzeit zwischen ERP und Shopfloor steuern'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: 'Welches Arbeitsergebnis macht dich am stolzesten?',
      o: [
        'Der Ausschuss sank von 3 % auf 0,3 % — das Produkt entspricht jetzt beim ersten Durchgang dem Standard',
        'Die OEE stieg nach Einführung des Einzelstückflusses um 15 % — mehr Ausstoß ohne Kapitalinvestition',
        'Die Auftragsdurchlaufzeit fiel von 6 Wochen auf 2 — Kunden erhalten ihr Produkt schneller als jeder Wettbewerber',
        'Das Werk hat das Jahresziel erreicht, das Budget eingehalten und null Arbeitsunfälle verzeichnet'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: 'Wie arbeitest du am liebsten?',
      o: [
        'In der Fertigung mit Messmitteln — prüfen, messen, Fehler analysieren',
        'Zwischen Werkstatt und Büro — Prozesse beobachten, Wertstromkarten zeichnen, Kaizen-Events durchführen',
        'Im Büro mit Daten — Nachfrage analysieren, Bestände managen und mit Lieferanten verhandeln',
        'In Besprechungen, Rundgängen und Reviews — Menschen führen und strategische Entscheidungen treffen'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: 'Welches Prinzip entspricht deiner Denkweise am ehesten?',
      o: [
        'Null Fehler — das Produkt muss beim ersten Versuch richtig sein, immer und ohne Ausnahme',
        'Kontinuierliche Verbesserung — kleine tägliche Verbesserungen summieren sich zu außergewöhnlichen Ergebnissen',
        'Lieferzuverlässigkeit — der Kunde muss genau das erhalten, was er bestellt hat, wenn er es braucht',
        'Ausgewogene Exzellenz — Sicherheit, Qualität, Lieferung und Kosten müssen gemeinsam gemanagt werden, nicht gegeneinander abgewogen'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: 'Wo siehst du dich in 10 Jahren?',
      o: [
        'Qualitätsdirektor oder Lieferantenqualitätsmanager bei einem Automobil- oder Luft- und Raumfahrthersteller',
        'Direktor Operational Excellence oder VP des Produktionssystems in einem internationalen Konzern',
        'Chief Supply Chain Officer (CSCO) eines großen Produktionsunternehmens oder FMCG-Konzerns',
        'Werkleiter oder Chief Operating Officer (COO) eines Produktionskonzerns'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    }
  ],
  roles: {
    quality_eng: {
      emoji: '🔍',
      name: 'Qualitätsingenieur',
      desc: 'Du sicherst die Produktqualität — von der Wareneingangsprüfung bis zur Zertifizierung und Kundenlieferung',
      detail: 'Du bist der Hüter der Konformität. Du führst Messsystemanalysen (MSA) durch, erstellst Shewhart-Regelkarten, leitest FMEA-Sitzungen und entwickelst Kontrollpläne. Du auditierst Lieferanten und führst interne Qualitätsaudits durch. Du arbeitest mit KMGs und anderen Messtechnikgeräten. Deine Kennzahl ist null Fehler beim Kunden — und du baust die Systeme, die das möglich machen.',
      start: [
        'Erwerbe die ASQ-CQE-Zertifizierung (Certified Quality Engineer) — der internationale Maßstab für Qualitätsfachleute',
        'Studiere IATF 16949 (Automobil) oder AS9100 (Luft- und Raumfahrt) — die branchenspezifischen Qualitätsmanagementsysteme',
        'Meistere statistische Methoden: SPC, MSA, DOE — ohne Verständnis von Streuung kann man Qualität nicht systemisch managen',
        'Lies „Out of the Crisis" von W. Edwards Deming — die philosophische Grundlage des Qualitätsmanagements'
      ]
    },
    lean_specialist: {
      emoji: '📉',
      name: 'Lean- / Operational-Excellence-Spezialist',
      desc: 'Du führst Lean Manufacturing ein — identifizierst und beseitigst Verschwendung, um Prozesse wirksamer zu machen',
      detail: 'Lean ist die Produktionsphilosophie von Toyota, die zum globalen Fertigungsmaßstab geworden ist. Du erstellst Wertstromkarten (VSM), moderierst Kaizen-Events, führst 5S, TPM, SMED und standardisierte Arbeit ein. Deine Schlüsselfrage lautet immer: „Warum machen wir das genau so?" Du findest Verschwendung dort, wo niemand sonst sucht, und beseitigst sie systematisch. Das Ergebnis ist höherer Ausstoß ohne Kapitalinvestition.',
      start: [
        'Lass dich als Lean Six Sigma Green Belt zertifizieren — den Black Belt erwirbst du, nachdem du echte Projektergebnisse geliefert hast',
        'Lies „Das Toyota-Produktionssystem" von Taiichi Ohno — Pflichtlektüre, kein optionaler Hintergrund',
        'Zeichne eine Wertstromkarte eines realen Prozesses, den du beobachten kannst — Ist-Zustand, Verschwendung identifiziert, Soll-Zustand vorgeschlagen',
        'Bilde dich beim Kaizen-Institut oder Lean Enterprise Institute weiter — die weltweit führenden Lean-Trainingsorganisationen'
      ]
    },
    supply_chain_eng: {
      emoji: '🚚',
      name: 'Supply-Chain-Manager / -Ingenieur',
      desc: 'Du steuerst Materialflüsse vom Lieferanten bis zum Kunden — unterbrechungsfrei und zu geringstmöglichen Kosten',
      detail: 'Du trägst die Verantwortung dafür, dass die Produktion nie wegen fehlender Materialien stoppt und Kunden ihre Bestellungen stets pünktlich und vollständig erhalten. Du managst Bestände mit ABC/XYZ-Analyse, planst nach MRP/MRPII-Logik, bewertest und entwickelst Lieferanten und überwachst Supply-Chain-KPIs. Du arbeitest in SAP, Oracle oder vergleichbaren ERP-Systemen. In einer Krise bist du derjenige, der in 48 Stunden einen Alternativlieferanten findet.',
      start: [
        'Erwerbe APICS CPIM oder CSCP — der Goldstandard für Supply-Chain-Fachleute weltweit',
        'Meistere SAP MM oder S/4HANA — die meisten großen Hersteller arbeiten mit SAP und setzen es vom ersten Tag an voraus',
        'Lerne ABC/XYZ-Lageranalyse und das Modell der wirtschaftlichen Bestellmenge — die Grundlage des Bestandsmanagements',
        'Lies „Das Ziel" von Eliyahu Goldratt — die Theorie der Engpässe wird deine Sicht auf Produktionssysteme verändern'
      ]
    },
    plant_manager: {
      emoji: '🏭',
      name: 'Werks- / Betriebsleiter',
      desc: 'Du führst die Fabrik — mit voller Verantwortung für Sicherheit, Ausstoß, Qualität und Kosten',
      detail: 'Du trägst die volle Verantwortung für alles, was sich innerhalb der Werksgrenzen abspielt: Arbeitssicherheit, Erfüllung des Produktionsplans, Produktqualität und wirtschaftliche Leistung. Du leitest ein Team von Abteilungsleitern, arbeitest mit Vertrieb und Finanzen zusammen und berichtest an die Geschäftsführung. Du nutzt MES und ERP zur operativen Steuerung, leitest tägliche QCDSM-Stand-ups und bewältigst alles, was der Tag bringt — denn irgendetwas kommt immer.',
      start: [
        'Absolviere einen MBA oder ein Executive-Programm im Operations Management an einer angesehenen Business School',
        'Strebe Führungskräfteentwicklung an: die meisten großen Hersteller haben interne LDP-Programme — bewirb dich frühzeitig',
        'Lerne Produktionsfinanzierung: ein GuV zu verstehen und EBITDA zu managen ist auf dieser Ebene unverzichtbar',
        'Lies „Der Lean-Manager" von Michael und Freddy Ballé — das praxisnächste Buch über Fabrikmanagement, das es gibt'
      ]
    }
  },
  ui: { l2back: '← Zurück zur Ingenieurwissenschaft', title: 'Produktionsingenieur: welche Spezialisierung?' }
};

L2.production.fr = {
  questions: [
    {
      t: 'Quel aspect du travail en production te correspond le mieux ?',
      o: [
        'Contrôle qualité — s\'assurer que chaque pièce respecte les spécifications, les normes et les tolérances',
        'Optimisation des procédés — éliminer les gaspillages, réduire les temps de cycle et diminuer le coût unitaire',
        'Gestion de la chaîne d\'approvisionnement — garantir que les bons matériaux sont à l\'usine au bon moment',
        'Diriger toute l\'usine — être responsable des personnes, des équipements, de la production et des résultats'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: 'Quel outil aimerais-tu le plus maîtriser ?',
      o: [
        'MMT, MSA et cartes de contrôle SPC — mesurer et surveiller la qualité avec rigueur statistique',
        'Value Stream Mapping, SMED et simulation de production — voir et éliminer les gaspillages de façon systématique',
        'SAP MM / Oracle SCM — gérer les stocks, les achats et les relations fournisseurs dans un ERP',
        'MES (Manufacturing Execution System) — piloter l\'exécution de la production en temps réel entre l\'ERP et l\'atelier'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: 'Quel résultat de ton travail t\'apporte le plus de satisfaction ?',
      o: [
        'Le taux de rebut est passé de 3 % à 0,3 % — le produit est désormais conforme à la norme du premier coup, à chaque fois',
        'Le TRS a progressé de 15 % après l\'introduction du flux pièce à pièce — plus de production sans aucun investissement',
        'Le délai d\'exécution des commandes est passé de 6 semaines à 2 — les clients reçoivent leur produit plus vite que n\'importe quel concurrent',
        'L\'usine a atteint son objectif annuel, respecté son budget et enregistré zéro accident avec arrêt de travail'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: 'Comment préfères-tu travailler ?',
      o: [
        'En atelier avec des instruments de mesure — inspecter, mesurer, analyser les défauts',
        'Entre l\'usine et le bureau — observer le procédé, cartographier les flux de valeur, animer des chantiers kaizen',
        'Au bureau avec des données — analyser la demande, gérer les stocks et négocier avec les fournisseurs',
        'En réunions, visites terrain et revues — manager les équipes et prendre des décisions stratégiques'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: 'Quel principe correspond le mieux à ta façon de penser ?',
      o: [
        'Zéro défaut — le produit doit fonctionner correctement du premier coup, tout le temps, sans exception',
        'Amélioration continue — de petites améliorations quotidiennes par tous produisent des résultats extraordinaires',
        'Fiabilité des livraisons — le client doit recevoir exactement ce qu\'il a commandé, quand il en a besoin',
        'Excellence équilibrée — sécurité, qualité, délai et coût doivent être gérés ensemble, sans compromis les uns sur les autres'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: 'Où te vois-tu dans 10 ans ?',
      o: [
        'Directeur qualité ou responsable qualité fournisseurs chez un constructeur automobile ou aéronautique',
        'Directeur de l\'excellence opérationnelle ou VP du système de production dans un groupe international',
        'Directeur de la chaîne d\'approvisionnement (CSCO) d\'une grande entreprise industrielle ou d\'un groupe FMCG',
        'Directeur d\'usine ou Directeur des opérations (COO) d\'un groupe industriel'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    }
  ],
  roles: {
    quality_eng: {
      emoji: '🔍',
      name: 'Ingénieur qualité',
      desc: 'Tu garantis la qualité des produits — du contrôle en réception jusqu\'à la certification et la livraison client',
      detail: 'Tu es le gardien de la conformité. Tu réalises des analyses de système de mesure (MSA), construis des cartes de contrôle de Shewhart, animes des séances d\'AMDEC et élabores des plans de surveillance. Tu audites les fournisseurs et conduis des audits qualité internes. Tu travailles avec des MMT et d\'autres équipements de métrologie. Ton indicateur ultime est zéro défaut parvenant au client — et tu construis les systèmes qui le rendent possible.',
      start: [
        'Obtiens la certification ASQ CQE (Certified Quality Engineer) — la référence internationale pour les professionnels de la qualité',
        'Étudie l\'IATF 16949 (automobile) ou l\'AS9100 (aéronautique) — les normes sectorielles de management de la qualité',
        'Maîtrise les outils statistiques : SPC, MSA, DOE — on ne peut pas gérer la qualité sans comprendre la variabilité',
        'Lis « Hors de la crise » de W. Edwards Deming — le fondement philosophique du management de la qualité'
      ]
    },
    lean_specialist: {
      emoji: '📉',
      name: 'Spécialiste Lean / Excellence opérationnelle',
      desc: 'Tu déploies le lean manufacturing — en identifiant et éliminant les gaspillages pour rendre les processus plus efficaces',
      detail: 'Le Lean est la philosophie de production de Toyota, adoptée comme référence mondiale de la fabrication. Tu cartographies les flux de valeur (VSM), facilites des chantiers kaizen, déploies les 5S, la TPM, le SMED et le travail standardisé. Ta question clé est toujours : « Pourquoi faisons-nous exactement cela de cette façon ? » Tu trouves les gaspillages là où personne d\'autre ne les cherche, et tu les élimines de façon systématique. Le résultat : une production plus élevée sans investissement en capital.',
      start: [
        'Certifie-toi Lean Six Sigma Green Belt — le Black Belt suit après avoir livré de vrais résultats de projet',
        'Lis « Le Système de production Toyota » de Taiichi Ohno — lecture obligatoire, pas un simple complément',
        'Trace une cartographie des flux de valeur d\'un processus réel que tu peux observer — état actuel, gaspillages identifiés, état futur proposé',
        'Forme-toi avec le Kaizen Institute ou le Lean Enterprise Institute — les principales organisations mondiales de formation lean'
      ]
    },
    supply_chain_eng: {
      emoji: '🚚',
      name: 'Responsable / Ingénieur chaîne d\'approvisionnement',
      desc: 'Tu gères les flux de matières du fournisseur au client — sans rupture et au coût le plus bas possible',
      detail: 'Tu es responsable de faire en sorte que la production ne s\'arrête jamais par manque de matériaux et que les clients reçoivent toujours leurs commandes à temps et en totalité. Tu gères les stocks par l\'analyse ABC/XYZ, planifies selon la logique MRP/MRPII, évalues et développes les fournisseurs, et suis les KPIs de la chaîne d\'approvisionnement. Tu travailles dans SAP, Oracle ou des ERP équivalents. En cas de crise, c\'est toi qui trouves un fournisseur alternatif en 48 heures.',
      start: [
        'Obtiens la certification APICS CPIM ou CSCP — la référence mondiale pour les professionnels de la supply chain',
        'Maîtrise SAP MM ou S/4HANA — la plupart des grands fabricants fonctionnent sous SAP et l\'exigent dès le premier jour',
        'Apprends l\'analyse des stocks ABC/XYZ et le modèle de quantité économique de commande — le socle de la gestion des stocks',
        'Lis « Le But » d\'Eliyahu Goldratt — la théorie des contraintes changera ta façon de voir les systèmes de production'
      ]
    },
    plant_manager: {
      emoji: '🏭',
      name: 'Directeur d\'usine / Responsable des opérations',
      desc: 'Tu diriges l\'usine — avec une pleine responsabilité sur la sécurité, la production, la qualité et les coûts',
      detail: 'Tu portes l\'entière responsabilité de tout ce qui se passe dans l\'enceinte de l\'usine : sécurité des travailleurs, respect du plan de production, qualité des produits et performance financière. Tu animes une équipe de responsables de département, tu interfaces avec le commerce et les finances, et tu rends compte à la direction. Tu utilises le MES et l\'ERP pour le pilotage opérationnel, animes des points quotidiens QCDSM et fais face à tout ce que la journée t\'apporte — parce qu\'il se passe toujours quelque chose.',
      start: [
        'Complète un MBA ou un programme Executive en management des opérations dans une business school réputée',
        'Engage-toi dans un programme de développement du leadership : la plupart des grands industriels ont des programmes LDP internes — postule tôt',
        'Apprends la finance industrielle : comprendre un compte de résultat et piloter l\'EBITDA est incontournable à ce niveau',
        'Lis « Le Manager Lean » de Michael et Freddy Ballé — le livre de management d\'usine le plus pratique qui soit'
      ]
    }
  },
  ui: { l2back: '← Retour à l\'ingénierie', title: 'Ingénieur de production : quelle spécialisation ?' }
};



L2.production.es = {
  questions: [
    {
      t: '¿Qué aspecto del trabajo en manufactura es más afín a ti?',
      o: [
        'Control de calidad — asegurarse de que cada pieza cumpla con las especificaciones, normas y tolerancias',
        'Optimización de procesos — eliminar desperdicios, reducir el tiempo de ciclo y bajar el costo unitario',
        'Gestión de la cadena de suministro — garantizar que los materiales correctos estén en la planta en el momento adecuado',
        'Dirigir toda la fábrica — responsabilidad sobre personas, equipos, producción y resultados'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: '¿Qué herramienta te gustaría dominar?',
      o: [
        'CMM, MSA y cartas de control SPC — medir y monitorear la calidad con rigor estadístico',
        'Value Stream Mapping, SMED y simulación de producción — ver y eliminar desperdicios sistemáticamente',
        'SAP MM / Oracle SCM — gestionar inventarios, compras y relaciones con proveedores en un ERP',
        'MES (Manufacturing Execution System) — gestionar la ejecución de producción en tiempo real entre el ERP y el taller'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: '¿Qué resultado de tu trabajo te da mayor satisfacción?',
      o: [
        'La tasa de chatarra cayó del 3% al 0,3% — el producto cumple con el estándar a la primera, siempre',
        'El OEE mejoró un 15% tras implementar flujo de pieza única — más producción sin una sola inversión de capital',
        'El tiempo de entrega de pedidos bajó de 6 semanas a 2 — los clientes reciben su producto antes que cualquier competidor',
        'La planta cumplió su objetivo anual, se ajustó al presupuesto y registró cero accidentes con tiempo perdido'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: '¿Cómo prefieres trabajar?',
      o: [
        'En el taller con equipos de medición — inspeccionando, midiendo, analizando defectos',
        'Entre la fábrica y la oficina — observando el proceso, mapeando flujos de valor, liderando eventos kaizen',
        'En la oficina con datos — analizando la demanda, gestionando inventarios y negociando con proveedores',
        'En reuniones, recorridos de planta y revisiones — gestionando personas y tomando decisiones estratégicas'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: '¿Qué principio se acerca más a tu forma de pensar?',
      o: [
        'Cero defectos — el producto debe funcionar correctamente a la primera, siempre, sin excepción',
        'Mejora continua — pequeños cambios diarios de todos se suman para producir resultados extraordinarios',
        'Confiabilidad en la entrega — el cliente debe recibir exactamente lo que ordenó, cuando lo necesita',
        'Excelencia equilibrada — seguridad, calidad, entrega y costo deben gestionarse juntos, sin sacrificar uno por otro'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: '¿Dónde te ves en 10 años?',
      o: [
        'Director de Calidad o Gerente de Calidad de Proveedores en un fabricante automotriz o aeroespacial',
        'Director de Excelencia Operacional o VP del Sistema de Manufactura en un grupo internacional',
        'Director de la Cadena de Suministro (CSCO) de una gran empresa manufacturera o corporación de consumo masivo',
        'Gerente General de Planta o Director de Operaciones (COO) de un grupo manufacturero'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    }
  ],
  roles: {
    quality_eng: {
      emoji: '🔍',
      name: 'Ingeniero de Calidad',
      desc: 'Garantizas la calidad del producto — desde la inspección de recepción hasta la certificación y entrega al cliente',
      detail: 'Eres el guardián de la conformidad. Realizas análisis de sistema de medición (MSA), construyes cartas de control de Shewhart, lideras sesiones de FMEA y desarrollas planes de control. Auditas proveedores y realizas auditorías internas de calidad. Trabajas con CMMs y otros equipos de metrología. Tu métrica final es cero defectos llegando al cliente — y construyes los sistemas que lo hacen posible.',
      start: [
        'Obtén la certificación ASQ CQE (Certified Quality Engineer) — el referente internacional para profesionales de calidad',
        'Estudia IATF 16949 (automotriz) o AS9100 (aeroespacial) — las normas de gestión de calidad del sector',
        'Domina herramientas estadísticas: SPC, MSA, DOE — no puedes gestionar la calidad sin entender la variación',
        'Lee "Fuera de la Crisis" de W. Edwards Deming — el fundamento filosófico de la gestión de calidad'
      ]
    },
    lean_specialist: {
      emoji: '📉',
      name: 'Especialista Lean / Excelencia Operacional',
      desc: 'Implementas manufactura esbelta — identificando y eliminando desperdicios para hacer los procesos más efectivos',
      detail: 'Lean es la filosofía de producción de Toyota, adoptada como referente global de manufactura. Mapeas flujos de valor (VSM), facilitas eventos kaizen, implementas 5S, TPM, SMED y trabajo estandarizado. Tu pregunta clave siempre es: "¿Por qué hacemos esto exactamente de esta manera?" Encuentras el desperdicio donde nadie más lo busca y lo eliminas sistemáticamente. El resultado es mayor producción sin inversión de capital.',
      start: [
        'Certifícate como Lean Six Sigma Green Belt — el Black Belt sigue después de haber entregado resultados reales de proyectos',
        'Lee "Toyota Production System" de Taiichi Ohno — lectura obligatoria, no un complemento opcional',
        'Dibuja un Mapa de Flujo de Valor de un proceso real que puedas observar — estado actual, desperdicios identificados, estado futuro propuesto',
        'Capacítate con el Kaizen Institute o el Lean Enterprise Institute — las principales organizaciones globales de formación lean'
      ]
    },
    supply_chain_eng: {
      emoji: '🚚',
      name: 'Gerente / Ingeniero de Cadena de Suministro',
      desc: 'Gestionas flujos de materiales del proveedor al cliente — sin interrupciones y al menor costo posible',
      detail: 'Eres responsable de que la producción nunca se detenga por falta de materiales y de que los clientes siempre reciban sus pedidos a tiempo y completos. Gestionas inventarios con análisis ABC/XYZ, planificas con lógica MRP/MRPII, evalúas y desarrollas proveedores, y monitoreas KPIs de la cadena de suministro. Trabajas en SAP, Oracle o sistemas ERP equivalentes. En una crisis, eres quien encuentra un proveedor alternativo en 48 horas.',
      start: [
        'Obtén la certificación APICS CPIM o CSCP — el estándar de oro para profesionales de cadena de suministro a nivel mundial',
        'Domina SAP MM o S/4HANA — la mayoría de los grandes fabricantes trabajan con SAP y lo exigen desde el primer día',
        'Aprende el análisis de inventarios ABC/XYZ y el modelo de cantidad económica de pedido — la base de la gestión de stocks',
        'Lee "La Meta" de Eliyahu Goldratt — la teoría de restricciones cambiará tu forma de ver los sistemas de producción'
      ]
    },
    plant_manager: {
      emoji: '🏭',
      name: 'Gerente de Planta / Director de Operaciones',
      desc: 'Diriges la fábrica — con plena responsabilidad sobre seguridad, producción, calidad y costos',
      detail: 'Llevas la responsabilidad total de todo lo que ocurre dentro de los límites de la planta: seguridad de los trabajadores, cumplimiento del plan de producción, calidad del producto y desempeño financiero. Lideras un equipo de gerentes de departamento, interactúas con el área comercial y finanzas, y reportas a la dirección. Usas MES y ERP para el control operativo, conduces reuniones diarias de QCDSM y afrontas lo que el día traiga — porque siempre sucede algo.',
      start: [
        'Completa un MBA o un programa Executive de Gestión de Operaciones en una escuela de negocios reconocida',
        'Busca desarrollo de liderazgo: la mayoría de los grandes fabricantes tienen programas internos de LDP — aplica temprano',
        'Aprende finanzas de manufactura: entender un P&L y gestionar el EBITDA es imprescindible a este nivel',
        'Lee "The Lean Manager" de Michael y Freddy Ballé — el libro de gestión de fábricas más práctico disponible'
      ]
    }
  },
  ui: { l2back: '← Volver a ingeniería', title: 'Ingeniería de producción: ¿qué especialización?' }
};

L2.production.pt = {
  questions: [
    {
      t: 'Qual aspecto do trabalho em manufatura é mais próximo de você?',
      o: [
        'Controle de qualidade — garantir que cada peça atenda às especificações, normas e tolerâncias',
        'Otimização de processos — eliminar desperdícios, reduzir o tempo de ciclo e diminuir o custo unitário',
        'Gestão da cadeia de suprimentos — garantir que os materiais certos estejam na planta no momento certo',
        'Dirigir toda a fábrica — responsabilidade por pessoas, equipamentos, produção e resultados'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: 'Qual ferramenta você gostaria de dominar?',
      o: [
        'CMM, MSA e cartas de controle SPC — medir e monitorar a qualidade com rigor estatístico',
        'Value Stream Mapping, SMED e simulação de produção — ver e eliminar desperdícios sistematicamente',
        'SAP MM / Oracle SCM — gerenciar estoques, compras e relações com fornecedores em um ERP',
        'MES (Manufacturing Execution System) — gerenciar a execução da produção em tempo real entre o ERP e o chão de fábrica'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: 'Qual resultado do seu trabalho te dá mais satisfação?',
      o: [
        'A taxa de sucata caiu de 3% para 0,3% — o produto agora está em conformidade com o padrão na primeira vez, sempre',
        'O OEE melhorou 15% após a introdução do fluxo de peça única — mais produção sem nenhum investimento de capital',
        'O prazo de entrega dos pedidos caiu de 6 semanas para 2 — os clientes recebem seu produto mais rápido do que qualquer concorrente',
        'A planta atingiu sua meta anual, ficou dentro do orçamento e registrou zero acidentes com afastamento'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: 'Como você prefere trabalhar?',
      o: [
        'No chão de fábrica com equipamentos de medição — inspecionando, medindo, analisando defeitos',
        'Entre a fábrica e o escritório — observando o processo, mapeando fluxos de valor, conduzindo eventos kaizen',
        'No escritório com dados — analisando demanda, gerenciando estoques e negociando com fornecedores',
        'Em reuniões, visitas à planta e revisões — gerenciando pessoas e tomando decisões estratégicas'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: 'Qual princípio está mais próximo do seu modo de pensar?',
      o: [
        'Zero defeitos — o produto deve funcionar corretamente na primeira vez, sempre, sem exceção',
        'Melhoria contínua — pequenas mudanças diárias de todos se somam para produzir resultados extraordinários',
        'Confiabilidade na entrega — o cliente deve receber exatamente o que pediu, quando precisar',
        'Excelência equilibrada — segurança, qualidade, entrega e custo devem ser gerenciados juntos, sem sacrificar um pelo outro'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    },
    {
      t: 'Onde você se vê daqui a 10 anos?',
      o: [
        'Diretor de Qualidade ou Gerente de Qualidade de Fornecedores em uma montadora automotiva ou fabricante aeroespacial',
        'Diretor de Excelência Operacional ou VP do Sistema de Manufatura em um grupo internacional',
        'Diretor da Cadeia de Suprimentos (CSCO) de uma grande empresa manufatureira ou corporação de bens de consumo',
        'Gerente Geral de Planta ou Diretor de Operações (COO) de um grupo manufatureiro'
      ],
      s: [{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]
    }
  ],
  roles: {
    quality_eng: {
      emoji: '🔍',
      name: 'Engenheiro de Qualidade',
      desc: 'Você garante a qualidade do produto — desde a inspeção de recebimento até a certificação e entrega ao cliente',
      detail: 'Você é o guardião da conformidade. Realiza análises de sistema de medição (MSA), constrói cartas de controle de Shewhart, lidera sessões de FMEA e desenvolve planos de controle. Audita fornecedores e conduz auditorias internas de qualidade. Trabalha com CMMs e outros equipamentos de metrologia. Sua métrica final é zero defeitos chegando ao cliente — e você constrói os sistemas que tornam isso possível.',
      start: [
        'Obtenha a certificação ASQ CQE (Certified Quality Engineer) — o referencial internacional para profissionais de qualidade',
        'Estude IATF 16949 (automotivo) ou AS9100 (aeroespacial) — as normas de gestão de qualidade do setor',
        'Domine ferramentas estatísticas: SPC, MSA, DOE — você não pode gerenciar a qualidade sem entender a variação',
        'Leia "Saindo da Crise" de W. Edwards Deming — o fundamento filosófico da gestão da qualidade'
      ]
    },
    lean_specialist: {
      emoji: '📉',
      name: 'Especialista Lean / Excelência Operacional',
      desc: 'Você implementa manufatura enxuta — identificando e eliminando desperdícios para tornar os processos mais eficazes',
      detail: 'Lean é a filosofia de produção da Toyota, adotada como referência global de manufatura. Você mapeia fluxos de valor (VSM), facilita eventos kaizen, implementa 5S, TPM, SMED e trabalho padronizado. Sua pergunta-chave é sempre: "Por que fazemos isso exatamente dessa forma?" Você encontra o desperdício onde ninguém mais procura e o elimina sistematicamente. O resultado é maior produção sem investimento de capital.',
      start: [
        'Certifique-se como Lean Six Sigma Green Belt — o Black Belt vem após entregar resultados reais de projetos',
        'Leia "Sistema Toyota de Produção" de Taiichi Ohno — leitura obrigatória, não um complemento opcional',
        'Desenhe um Mapa de Fluxo de Valor de um processo real que você possa observar — estado atual, desperdícios identificados, estado futuro proposto',
        'Treine com o Kaizen Institute ou Lean Enterprise Institute — as principais organizações globais de treinamento lean'
      ]
    },
    supply_chain_eng: {
      emoji: '🚚',
      name: 'Gerente / Engenheiro de Cadeia de Suprimentos',
      desc: 'Você gerencia fluxos de materiais do fornecedor ao cliente — sem interrupções e ao menor custo possível',
      detail: 'Você é responsável por garantir que a produção nunca pare por falta de materiais e que os clientes sempre recebam seus pedidos no prazo e completos. Gerencia estoques com análise ABC/XYZ, planeja com lógica MRP/MRPII, avalia e desenvolve fornecedores, e monitora KPIs da cadeia de suprimentos. Trabalha em SAP, Oracle ou sistemas ERP equivalentes. Em uma crise, você é quem encontra um fornecedor alternativo em 48 horas.',
      start: [
        'Obtenha a certificação APICS CPIM ou CSCP — o padrão ouro para profissionais de cadeia de suprimentos globalmente',
        'Domine SAP MM ou S/4HANA — a maioria dos grandes fabricantes trabalha com SAP e o exige desde o primeiro dia',
        'Aprenda análise de estoque ABC/XYZ e o modelo de quantidade econômica de pedido — a base da gestão de estoques',
        'Leia "A Meta" de Eliyahu Goldratt — a teoria das restrições mudará a forma como você enxerga os sistemas de produção'
      ]
    },
    plant_manager: {
      emoji: '🏭',
      name: 'Gerente de Planta / Diretor de Operações',
      desc: 'Você dirige a fábrica — com plena responsabilidade por segurança, produção, qualidade e custos',
      detail: 'Você carrega a responsabilidade total por tudo o que acontece dentro dos limites da planta: segurança dos trabalhadores, cumprimento do plano de produção, qualidade do produto e desempenho financeiro. Lidera uma equipe de gerentes de departamento, interage com a área comercial e finanças, e reporta à diretoria. Usa MES e ERP para controle operacional, conduz reuniões diárias de QCDSM e lida com o que o dia trouxer — porque sempre acontece algo.',
      start: [
        'Conclua um MBA ou programa Executive de Gestão de Operações em uma escola de negócios reconhecida',
        'Busque desenvolvimento de liderança: a maioria dos grandes fabricantes tem programas internos de LDP — candidate-se cedo',
        'Aprenda finanças de manufatura: entender um DRE e gerenciar o EBITDA é indispensável neste nível',
        'Leia "The Lean Manager" de Michael e Freddy Ballé — o livro de gestão de fábricas mais prático disponível'
      ]
    }
  },
  ui: { l2back: '← Voltar à engenharia', title: 'Engenharia de produção: qual especialização?' }
};

L2.production.ar = {
  questions: [
    { t:"أيّ جانب من هندسة الإنتاج يستهويك أكثر؟", o:["التفتيش والقياس والتحقق من جودة المنتجات والعمليات","تحليل الإنتاج وتطبيق منهجيات تحسين الكفاءة وخفض الهدر","إدارة سلسلة التوريد والمشتريات والخدمات اللوجستية","إدارة العمليات اليومية للمصنع والفرق الميدانية"], s:[{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}] },
    { t:"أيّ أداة تودّ إتقانها؟", o:["CMM وأجهزة القياس الدقيق وأنظمة إدارة الجودة ISO","VSM وKaizen وأدوات Six Sigma لتحليل العمليات","SAP وOracle ERP وأنظمة إدارة سلسلة التوريد","إدارة الإنتاج وجدولة العمل وتحليل البيانات التشغيلية"], s:[{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}] },
    { t:"أيّ نتيجة تُشعرك بالرضا أكثر؟", o:["معدل عيوب يصل إلى الصفر في منتج طورت نظام جودته","تحقيق وفورات ملموسة في التكاليف بعد مشروع تحسين","تقليص وقت التسليم وتكاليف المخزون بتحسين سلسلة التوريد","مصنع ينتج بأعلى طاقته وبأقل أعطال تحت إشرافك"], s:[{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}] },
    { t:"أين تُفضّل العمل؟", o:["في قسم الجودة بمصنع للتفتيش والقياس","في مجموعة التحسين المستمر لتطبيق Lean/Six Sigma","في قسم المشتريات واللوجستيات لإدارة الموردين","في إدارة الإنتاج لتشغيل المصنع بكامل طاقته"], s:[{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}] },
    { t:"أيّ مهمة أقرب إليك؟", o:["إجراء تدقيق جودة على دفعة إنتاج جديدة","تحليل سبب جذري لمشكلة تكرارية في الإنتاج","التفاوض مع مورد لتحسين شروط التسليم والسعر","وضع جدول إنتاج أسبوعي وضمان تحقيق أهداف الإنتاج"], s:[{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}] },
    { t:"أين ترى نفسك بعد عشر سنوات؟", o:["مدير الجودة في شركة تصنيع عالمية","مدير تميز تشغيلي يقود التحول نحو Lean","مدير سلسلة التوريد في مجموعة صناعية كبرى","مدير عمليات المصنع أو نائب الرئيس للإنتاج"], s:[{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}] },
  ],
  roles: {
    quality_eng:{ emoji:"🔍", name:"مهندس الجودة", desc:"تضمن مطابقة المنتجات للمواصفات وتطوّر أنظمة إدارة الجودة", detail:"تعمل في قسم الجودة.", start:["تعلّم أنظمة إدارة الجودة ISO 9001","أتقن أدوات SPC وFMEA وSix Sigma","احصل على شهادة CQE من ASQ","تدرّب في بيئات تصنيعية ذات متطلبات جودة عالية"] },
    lean_specialist:{ emoji:"📉", name:"أخصائي Lean", desc:"تُحلّل العمليات وتُطبّق منهجيات تحسين الكفاءة", detail:"تعمل في التحسين المستمر.", start:["أتقن Value Stream Mapping وKaizen","احصل على شهادة Lean Green Belt أو Black Belt","تعلّم أدوات Six Sigma وDMAIC","تدرّب في بيئات تصنيعية لتطبيق مشاريع تحسين"] },
    supply_chain_eng:{ emoji:"🚚", name:"مهندس سلسلة التوريد", desc:"تُدير تدفق المواد من الموردين حتى المنتج النهائي", detail:"تعمل في المشتريات والخدمات اللوجستية.", start:["تعلّم أنظمة ERP مثل SAP وOracle","احصل على شهادة CPIM أو CSCP من APICS","تدرّب في قسم المشتريات أو اللوجستيات","تعلّم تحليل بيانات سلسلة التوريد"] },
    plant_manager:{ emoji:"🏭", name:"مدير المصنع", desc:"تُشرف على جميع عمليات المصنع وتضمن الإنتاج الأمثل", detail:"تعمل في الإدارة العليا.", start:["طوّر خبرة واسعة في التصنيع والإنتاج","تعلّم إدارة الفرق وقيادة التغيير","احصل على شهادة في إدارة العمليات","طوّر مهارات القيادة وتحليل الأداء"] },
  },
  ui:{ l2back:"← العودة إلى الهندسة", title:"هندسة الإنتاج: ما التخصص؟" }
};

L2.production.he = {
  questions: [
    { t:"מה הצד שהכי מעניין אותך בהנדסת ייצור?", o:["בדיקה, מדידה ואימות איכות מוצרים ותהליכים","ניתוח ייצור ויישום Lean לשיפור יעילות","ניהול שרשרת אספקה, רכש ולוגיסטיקה","ניהול פעולות יומיומיות של המפעל"], s:[{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}] },
    { t:"איזה כלי הכי תרצה לשלוט בו?", o:["CMM, מכשירי מדידה ו-ISO","VSM, Kaizen ו-Six Sigma","SAP, Oracle ERP ושרשרת אספקה","ניהול ייצור, תזמון וניתוח נתונים"], s:[{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}] },
    { t:"איזה תוצאה הכי ממלאת אותך סיפוק?", o:["שיעור פגמים אפס במוצר שפיתחת מערכת איכותו","חסכון ניכר בעלויות לאחר פרויקט שיפור","קיצור זמן אספקה בשיפור שרשרת ההספקה","מפעל שמייצר בקיבולת מקסימלית תחת פיקוחך"], s:[{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}] },
    { t:"איפה אתה מעדיף לעבוד?", o:["במחלקת איכות לבדיקה ומדידה","בקבוצת שיפור מתמיד Lean/Six Sigma","ברכש ולוגיסטיקה לניהול ספקים","בניהול ייצור להפעלת המפעל"], s:[{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}] },
    { t:"איזה משימה הכי קרובה ללב שלך?", o:["ביצוע ביקורת איכות על אצווה חדשה","ניתוח שורש לבעיה חוזרת בייצור","משא ומתן עם ספק לשיפור תנאי אספקה","עריכת לוח ייצור שבועי"], s:[{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}] },
    { t:"איפה אתה רואה את עצמך עוד 10 שנים?", o:["מנהל איכות בחברת ייצור גלובלית","מנהל מצוינות תפעולית","מנהל שרשרת אספקה בתעשייה גדולה","מנהל פעולות מפעל"], s:[{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}] },
  ],
  roles: {
    quality_eng:{ emoji:"🔍", name:"מהנדס איכות", desc:"אתה מבטיח שמוצרים עומדים במפרטים", detail:"אתה עובד במחלקת איכות.", start:["למד ISO 9001","שלוט ב-SPC, FMEA ו-Six Sigma","קבל CQE מ-ASQ","התמחה בייצור עם דרישות איכות גבוהות"] },
    lean_specialist:{ emoji:"📉", name:"מומחה Lean", desc:"אתה מנתח תהליכים ומשפר יעילות", detail:"אתה עובד בשיפור מתמיד.", start:["שלוט ב-VSM ו-Kaizen","קבל Green Belt או Black Belt","למד Six Sigma ו-DMAIC","התמחה ביישום פרויקטי שיפור"] },
    supply_chain_eng:{ emoji:"🚚", name:"מהנדס שרשרת אספקה", desc:"אתה מנהל זרימת חומרים מספקים למוצר הסופי", detail:"אתה עובד ברכש ולוגיסטיקה.", start:["למד ERP כגון SAP","קבל CPIM או CSCP מ-APICS","התמחה ברכש ולוגיסטיקה","למד ניתוח נתוני שרשרת אספקה"] },
    plant_manager:{ emoji:"🏭", name:"מנהל מפעל", desc:"אתה מפקח על כל פעולות המפעל", detail:"אתה עובד בניהול בכיר.", start:["פתח ניסיון רחב בייצור","למד ניהול צוותים","קבל הסמכה בניהול פעולות","פתח מיומנויות מנהיגות"] },
  },
  ui:{ l2back:"← חזרה להנדסה", title:"הנדסת ייצור: איזה התמחות?" }
};

L2.production.zh = {
  questions: [
    {t:'生产与制造管理中什么最吸引你？', o:['质量管理——确保产品符合标准，零缺陷生产','精益生产——消除浪费，让工厂更高效','供应链管理——协调供应商、物流和库存','工厂管理——统筹生产、安全、人员的综合运营'], s:[{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]},
    {t:'你最想精通哪个工具或方法？', o:['统计过程控制（SPC）、FMEA和8D问题解决','价值流图、5S、SMED快速换模','ERP系统、供应商管理和需求预测','生产计划、安全管理和团队领导'], s:[{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]},
    {t:'什么成果最让你有成就感？', o:['产品不良率从1000ppm降到50ppm','改造后的生产线效率提升了35%，库存减少一半','优化供应链后，交货准时率从80%提升到98%','你负责的工厂连续2年零重大安全事故，产量创历史新高'], s:[{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]},
    {t:'你更喜欢哪种工作？', o:['分析质量数据，找根本原因，推动问题解决','在车间推行精益改善，让员工参与进来','与供应商谈判，优化库存，设计需求计划','协调生产、维修、质量、安全各部门'], s:[{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]},
    {t:'你会选择哪个项目？', o:['对一条生产线开展全面的质量体系建设','推行一个工厂级的精益转型项目','重新设计供应链，将库存成本降低30%','接手一个问题工厂，在12个月内扭转局面'], s:[{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]},
    {t:'10年后你在哪里？', o:['汽车或消费电子企业的质量总监','精益咨询公司的合伙人','全球供应链管理总监','大型制造集团的工厂总经理'], s:[{quality_eng:3},{lean_specialist:3},{supply_chain_eng:3},{plant_manager:3}]}
  ],
  roles: {
    quality_eng: {emoji:'✅', name:'质量工程师', desc:'建立质量体系，用数据分析找到问题根因，推动持续改进', detail:'你是产品质量的守护者。你建立质量控制计划，用SPC监控过程能力，用FMEA预防失效，用8D方法解决客户投诉。你的目标是让质量问题消灭在源头。', start:['学习SPC统计过程控制——Minitab是常用工具','掌握FMEA——潜在失效模式和后果分析','了解质量管理体系——ISO 9001和IATF 16949','考取CQE（认证质量工程师）或六西格玛绿带']},
    lean_specialist: {emoji:'🔄', name:'精益改善专家', desc:'用精益思想消除工厂中的浪费，创造更高效的生产方式', detail:'你让工厂变得更快、更好、更便宜。你推行5S建立生产秩序，用价值流图找到浪费，用SMED缩短换模时间，用看板控制在制品库存，让整个工厂的运营效率持续提升。', start:['深入学习丰田生产系统（TPS）','掌握价值流图析（VSM）工具','了解SMED、TPM、看板等精益工具','考取精益六西格玛绿带或黑带认证']},
    supply_chain_eng: {emoji:'📦', name:'供应链工程师', desc:'设计和优化从原材料到成品的全链路，确保正确的货在正确的时间到达正确的地点', detail:'你是工厂的"血液循环系统"设计者。你管理供应商关系，设计库存策略，优化需求预测，确保生产不断料、不积压、交货准时。', start:['学习供应链管理基础——SCOR模型','了解ERP系统——SAP在制造业的应用','掌握需求预测方法——时间序列分析基础','考取CPIM（认证生产与库存管理师）认证']},
    plant_manager: {emoji:'🏭', name:'工厂经理', desc:'统筹管理工厂的生产、安全、质量、人员，实现经营目标', detail:'你是工厂的最高负责人。你设定目标，建立团队，管理预算，协调各职能部门，在客户要求、成本压力和员工需求之间寻找最优平衡。', start:['在生产、质量、工程等专业岗位积累经验','学习管理技能——领导力、绩效管理、冲突解决','了解EHS（环境、健康、安全）管理','学习财务基础——看懂工厂的P&L报表']}
  },
  ui: {l2back:'← 返回生产管理', title:'生产与制造管理：选择你的专业方向'}
};
