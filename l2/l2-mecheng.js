'use strict';
/* ── L2: Инженер-механик ─────────────────────────────────────────────────────
   4 roles: design_eng 📐 | process_eng ⚙️ | stress_eng 🔩 | product_manager_eng 📋
   RU only — другие языки добавляются отдельно
──────────────────────────────────────────────────────────────────────────── */

L2.mecheng.ru = {
  questions: [
    {
      t: 'Что тебя больше привлекает в инженерной работе?',
      o: [
        'Придумывать новые конструкции и детали — от эскиза в голове до чертежа в CAD',
        'Оптимизировать производственный процесс — чтобы детали делались быстрее, дешевле и лучше',
        'Рассчитывать нагрузки и прочность — убедиться, что конструкция не сломается ни при каких условиях',
        'Управлять продуктом от идеи до рынка — координировать инженеров, сроки и требования заказчика'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: 'Какой инструмент ты хотел бы освоить в первую очередь?',
      o: [
        'SolidWorks или CATIA — создавать объёмные 3D-модели сложных механизмов',
        'Lean, FMEA и производственные симуляции — устранять потери на каждом этапе',
        'ANSYS или Abaqus — симулировать напряжения, вибрации и температурные режимы',
        'Jira, MS Project и системы управления требованиями — держать проект под контролем'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: 'Какой результат работы тебя радует больше всего?',
      o: [
        'Прототип собран и работает точно так, как я спроектировал — чертёж ожил',
        'Производительность линии выросла на 20% после моих изменений — цифры говорят сами за себя',
        'Расчёты показали запас прочности 3× — изделие выдержит любые нагрузки в эксплуатации',
        'Продукт запущен в срок, заказчик доволен, команда уложилась в бюджет'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: 'Как ты предпочитаешь работать?',
      o: [
        'Самостоятельно за компьютером — строить модели, двигать грани, решать геометрические задачи',
        'На производстве, рядом со станками — наблюдать процесс и сразу видеть проблемы',
        'Глубоко в расчётах — часами проверять уравнения и интерпретировать графики напряжений',
        'В переговорах и переписке — согласовывать требования, приоритеты и дедлайны'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: 'Какая отрасль тебя привлекает больше?',
      o: [
        'Аэрокосмос или автопром — создавать детали для самолётов, ракет или электромобилей',
        'Машиностроение и производство — делать заводы эффективнее и снижать себестоимость',
        'Нефтегаз, энергетика или строительство — считать нагрузки для критически важных объектов',
        'Технологические стартапы или R&D — выводить инновационные продукты на рынок'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: 'Где ты видишь себя через 10 лет?',
      o: [
        'Главный конструктор или технический директор — я отвечаю за архитектуру всего изделия',
        'Руководитель производства или директор по операциям — мой завод самый эффективный в отрасли',
        'Эксперт по надёжности с международной сертификацией — мои расчёты используют как стандарт',
        'Вице-президент по продукту или основатель инженерного стартапа'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    }
  ],
  roles: {
    design_eng: {
      emoji: '📐',
      name: 'Инженер-конструктор',
      desc: 'Проектируешь механизмы и детали в CAD — от концепции до рабочего чертежа',
      detail: 'Ты переводишь техническое задание в 3D-модели и чертежи. Работаешь в SolidWorks, CATIA или Creo — строишь детали, собираешь сборки, проверяешь допуски. Твой чертёж уходит в производство, и по нему изготавливают реальные изделия. Это работа, где точность и пространственное мышление решают всё.',
      start: [
        'Освой SolidWorks — начни с бесплатных уроков на YouTube и официальных туториалов',
        'Пройди курс по GD&T (геометрические допуски) — это язык, на котором говорят чертежи',
        'Разберись в ГОСТ/ISO для машиностроительных чертежей — они обязательны в российской промышленности',
        'Попробуй Fusion 360 бесплатно — он идеален для старта и личных проектов'
      ]
    },
    process_eng: {
      emoji: '⚙️',
      name: 'Инженер-технолог',
      desc: 'Оптимизируешь производственные процессы — делаешь выпуск продукции быстрее и дешевле',
      detail: 'Ты стоишь между конструктором и заводом. Твоя задача — понять, как изготовить деталь: выбрать оборудование, написать техпроцесс, рассчитать режимы резания или сварки, внедрить контроль качества. Ты используешь методологии Lean и Six Sigma, чтобы убирать потери и брак. Результат твоей работы виден в цифрах: OEE, себестоимость, процент брака.',
      start: [
        'Изучи основы Lean Manufacturing и Six Sigma — пройди Yellow Belt сертификацию онлайн',
        'Разберись в FMEA (анализ видов и последствий отказов) — это главный инструмент технолога',
        'Освой базы данных по режимам обработки: нормативы резания, сварки, термообработки',
        'Читай «Производственную систему Тойоты» Таити Оно — фундаментальная книга по производству'
      ]
    },
    stress_eng: {
      emoji: '🔩',
      name: 'Расчётный инженер (FEA/CFD)',
      desc: 'Считаешь прочность, нагрузки и напряжения — убеждаешься, что конструкция выдержит',
      detail: 'Ты работаешь с методом конечных элементов (МКЭ): строишь модель, задаёшь нагрузки, граничные условия и материалы, запускаешь расчёт и интерпретируешь результаты. ANSYS, Abaqus, Nastran — твои главные инструменты. Ты отвечаешь на вопрос: «Выдержит ли это изделие?» — до того, как его начнут делать. Твои расчёты спасают жизни и деньги компании.',
      start: [
        'Изучи теорию механики деформируемого тела — без неё результаты МКЭ невозможно интерпретировать',
        'Начни с ANSYS Student Edition — бесплатная версия с полным функционалом для обучения',
        'Пройди курс SimScale или Coursera по МКЭ — там объясняют практику на реальных кейсах',
        'Читай отраслевые стандарты: ASME, Еврокод или ГОСТ по прочности — зависит от сферы'
      ]
    },
    product_manager_eng: {
      emoji: '📋',
      name: 'Менеджер инженерного продукта',
      desc: 'Управляешь разработкой технического продукта — от требований до запуска на рынок',
      detail: 'Ты соединяешь технический и бизнес-мир. Собираешь требования от клиентов и стейкхолдеров, переводишь их в техническое задание для инженеров, отслеживаешь прогресс и управляешь рисками. Твой инженерный бэкграунд позволяет говорить на одном языке с командой, а навыки управления — доносить ценность продукта до бизнеса. В итоге именно ты выводишь продукт на рынок.',
      start: [
        'Получи сертификацию PMP или CAPM — это международный стандарт управления проектами',
        'Изучи методологию Agile/Scrum для инженерных команд: SAFe или Scrum for Hardware',
        'Освой инструменты: Jira, Confluence, MS Project — они везде в промышленных компаниях',
        'Читай «Inspired» Марти Кагана — лучшая книга о создании технологических продуктов'
      ]
    }
  },
  ui: { l2back: '← К инженерии', title: 'Инженер-механик: какая специализация?' }
};



L2.mecheng.en = {
  questions: [
    {
      t: 'What appeals to you most in mechanical engineering?',
      o: [
        'Designing new mechanisms and parts — from a concept sketch to a finished CAD model',
        'Optimising manufacturing processes — making parts faster, cheaper, and better',
        'Calculating loads and stress — proving that a structure will not fail under any condition',
        'Managing a product from concept to market — coordinating engineers, timelines, and customer requirements'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: 'Which tool would you most like to master?',
      o: [
        'SolidWorks or CATIA — creating 3D solid models of complex mechanical assemblies',
        'Lean, FMEA, and process simulation — eliminating waste at every stage of production',
        'ANSYS or Abaqus — simulating stress, vibration, and thermal behaviour in virtual components',
        'Jira, MS Project, and requirements management systems — keeping engineering projects on track'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: 'What result of your work gives you the most satisfaction?',
      o: [
        'The prototype is assembled and works exactly as I designed it — the drawing came to life',
        'Production line throughput increased 20% after my process changes — the data speaks for itself',
        'My analysis showed a safety factor of 3× — the part will survive any real-world loading condition',
        'The product launched on schedule, the customer is satisfied, and the team came in under budget'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: 'How do you prefer to work?',
      o: [
        'Independently at a computer — building models, editing geometry, solving spatial problems',
        'On the factory floor, close to the machines — observing the process and spotting problems directly',
        'Deep in calculations — spending hours checking equations and interpreting stress plots',
        'In meetings and emails — aligning requirements, priorities, and deadlines with stakeholders'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: 'Which industry attracts you most?',
      o: [
        'Aerospace or automotive — designing components for aircraft, rockets, or electric vehicles',
        'Manufacturing and industrial machinery — making factories more efficient and cutting unit costs',
        'Oil & gas, energy, or construction — calculating loads for safety-critical infrastructure',
        'Technology start-ups or R&D — bringing innovative products to market'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: 'Where do you see yourself in 10 years?',
      o: [
        'Chief Engineer or CTO — responsible for the architecture of the entire product',
        'Head of Manufacturing or Director of Operations — running the most efficient plant in the industry',
        'Expert stress analyst with international certification — my calculations set the standard',
        'VP of Product or founder of an engineering start-up'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    }
  ],
  roles: {
    design_eng: {
      emoji: '📐',
      name: 'Design Engineer',
      desc: 'You design mechanisms and components in CAD — from concept to production drawing',
      detail: 'You translate a technical brief into 3D models and engineering drawings. You work in SolidWorks, CATIA, or Creo — building parts, assembling sub-systems, checking tolerances and fits. Your drawing goes to manufacturing, and real components are made from it. This is work where spatial thinking and precision are everything.',
      start: [
        'Learn SolidWorks — start with free YouTube tutorials and official Dassault Systèmes training',
        'Study GD&T (Geometric Dimensioning and Tolerancing) — the language that engineering drawings speak',
        'Understand ISO and ASME drawing standards — essential for working with international teams',
        'Try Fusion 360 for free — ideal for personal projects and learning solid modelling quickly'
      ]
    },
    process_eng: {
      emoji: '⚙️',
      name: 'Manufacturing Engineer',
      desc: 'You optimise production processes — making manufacturing faster, cheaper, and more reliable',
      detail: 'You stand between the designer and the factory floor. Your job is to work out how to make the part: choose equipment, write process plans, calculate cutting or welding parameters, and implement quality controls. You use Lean and Six Sigma to eliminate waste and reduce defect rates. Your results are visible in the numbers: OEE, unit cost, scrap rate.',
      start: [
        'Study Lean Manufacturing and Six Sigma — earn a Yellow Belt certification online as a starting point',
        'Learn FMEA (Failure Mode and Effects Analysis) — the core tool of the manufacturing engineer',
        'Build knowledge of machining, welding, and heat treatment parameters — the technical foundations',
        'Read "The Toyota Production System" by Taiichi Ohno — the foundational text on lean manufacturing'
      ]
    },
    stress_eng: {
      emoji: '🔩',
      name: 'Stress / FEA Engineer',
      desc: 'You calculate structural loads and stresses — proving that a design will withstand real-world conditions',
      detail: 'You work with Finite Element Analysis (FEA): build a model, apply loads and boundary conditions, define material properties, run the solver, and interpret the results. ANSYS, Abaqus, Nastran — these are your primary tools. You answer the question "Will this survive?" before a single component is manufactured. Your calculations save lives and protect company budgets.',
      start: [
        'Study mechanics of materials and structural mechanics thoroughly — FEA results are meaningless without theory',
        'Download ANSYS Student Edition — full functionality, free for students and self-learners',
        'Complete a practical FEA course on SimScale or Coursera — real-world case studies are essential',
        'Read the relevant design codes for your industry: ASME, Eurocode, or equivalent national standards'
      ]
    },
    product_manager_eng: {
      emoji: '📋',
      name: 'Engineering Product Manager',
      desc: 'You manage the development of technical products — from requirements to market launch',
      detail: 'You bridge the technical and business worlds. You gather requirements from customers and stakeholders, translate them into engineering specifications, track development progress, and manage risk. Your engineering background means you can hold a real conversation with the team; your management skills mean you can communicate value to the business. In the end, you are the person who ships the product.',
      start: [
        'Get a PMP or CAPM certification — the international standard for project management',
        'Learn Agile and Scrum for hardware teams: SAFe or hardware-specific Scrum frameworks',
        'Master Jira, Confluence, and MS Project — the standard toolset in industrial product development',
        'Read "Inspired" by Marty Cagan — the definitive book on building technology products'
      ]
    }
  },
  ui: { l2back: '← Back to engineering', title: 'Mechanical Engineer: which specialisation?' }
};



L2.mecheng.de = {
  questions: [
    {
      t: 'Was reizt dich am meisten am Maschinenbau?',
      o: [
        'Neue Mechanismen und Teile entwerfen — vom ersten Konzeptskizze bis zum fertigen CAD-Modell',
        'Fertigungsprozesse optimieren — Teile schneller, günstiger und besser herstellen',
        'Lasten und Spannungen berechnen — beweisen, dass eine Konstruktion unter keiner Bedingung versagt',
        'Ein Produkt von der Idee bis zur Markteinführung steuern — Ingenieure, Zeitpläne und Kundenanforderungen koordinieren'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: 'Welches Werkzeug möchtest du am liebsten beherrschen?',
      o: [
        'SolidWorks oder CATIA — 3D-Volumenmodelle komplexer Maschinenbaugruppen erstellen',
        'Lean, FMEA und Prozesssimulation — Verschwendung in jeder Produktionsstufe eliminieren',
        'ANSYS oder Abaqus — Spannungen, Schwingungen und thermisches Verhalten virtueller Bauteile simulieren',
        'Jira, MS Project und Anforderungsmanagement-Systeme — Ingenieurprojekte im Griff behalten'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: 'Welches Arbeitsergebnis bereitet dir die größte Befriedigung?',
      o: [
        'Der Prototyp ist zusammengebaut und funktioniert genau so, wie ich ihn konstruiert habe — die Zeichnung wurde lebendig',
        'Der Durchsatz der Fertigungslinie stieg nach meinen Prozessänderungen um 20 % — die Zahlen sprechen für sich',
        'Meine Analyse zeigte einen Sicherheitsfaktor von 3× — das Bauteil übersteht jede reale Belastung',
        'Das Produkt wurde termingerecht eingeführt, der Kunde ist zufrieden, und das Team blieb im Budget'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: 'Wie arbeitest du am liebsten?',
      o: [
        'Selbstständig am Computer — Modelle erstellen, Geometrien bearbeiten, räumliche Probleme lösen',
        'In der Fabrikhalle, nah an den Maschinen — den Prozess beobachten und Probleme direkt erkennen',
        'Tief in Berechnungen versunken — stundenlang Gleichungen prüfen und Spannungsverläufe interpretieren',
        'In Besprechungen und per E-Mail — Anforderungen, Prioritäten und Deadlines mit Stakeholdern abstimmen'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: 'Welche Branche zieht dich am meisten an?',
      o: [
        'Luft- und Raumfahrt oder Automotive — Komponenten für Flugzeuge, Raketen oder Elektrofahrzeuge entwickeln',
        'Maschinenbau und Industrieproduktion — Fabriken effizienter machen und Stückkosten senken',
        'Öl & Gas, Energie oder Bauwesen — Lasten für sicherheitskritische Infrastruktur berechnen',
        'Technologie-Start-ups oder F&E — innovative Produkte auf den Markt bringen'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: 'Wo siehst du dich in 10 Jahren?',
      o: [
        'Chefingenieur oder CTO — verantwortlich für die Architektur des gesamten Produkts',
        'Fertigungsleiter oder Operations-Direktor — ich führe das effizienteste Werk der Branche',
        'Erfahrener Festigkeitsanalytiker mit internationaler Zertifizierung — meine Berechnungen setzen den Standard',
        'VP Product oder Gründer eines Ingenieur-Start-ups'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    }
  ],
  roles: {
    design_eng: {
      emoji: '📐',
      name: 'Konstruktionsingenieur',
      desc: 'Du entwirfst Mechanismen und Bauteile in CAD — vom Konzept bis zur Fertigungszeichnung',
      detail: 'Du übersetzt technische Anforderungen in 3D-Modelle und Konstruktionszeichnungen. Du arbeitest in SolidWorks, CATIA oder Creo — baust Teile, stellst Baugruppen zusammen und prüfst Toleranzen und Passungen. Deine Zeichnung geht in die Fertigung, und reale Bauteile werden danach hergestellt. Das ist eine Arbeit, bei der räumliches Denken und Präzision alles entscheiden.',
      start: [
        'Erlerne SolidWorks — beginne mit kostenlosen YouTube-Tutorials und offiziellen Dassault Systèmes-Schulungen',
        'Studiere GD&T (Form- und Lagetoleranzen) — die Sprache, die Konstruktionszeichnungen sprechen',
        'Verstehe ISO- und ASME-Zeichnungsnormen — unverzichtbar für die Arbeit mit internationalen Teams',
        'Teste Fusion 360 kostenlos — ideal für persönliche Projekte und schnelles Erlernen der Volumenkörpermodellierung'
      ]
    },
    process_eng: {
      emoji: '⚙️',
      name: 'Fertigungsingenieur',
      desc: 'Du optimierst Produktionsprozesse — machst die Fertigung schneller, günstiger und zuverlässiger',
      detail: 'Du stehst zwischen dem Konstrukteur und der Fertigungshalle. Deine Aufgabe ist es herauszufinden, wie ein Teil hergestellt wird: Ausrüstung auswählen, Prozessabläufe schreiben, Schneid- oder Schweißparameter berechnen und Qualitätskontrollen einführen. Du nutzt Lean und Six Sigma, um Verschwendung zu eliminieren und Ausschussraten zu reduzieren. Deine Ergebnisse zeigen sich in Zahlen: OEE, Stückkosten, Ausschussquote.',
      start: [
        'Studiere Lean Manufacturing und Six Sigma — erwerbe online ein Yellow Belt-Zertifikat als Einstieg',
        'Erlerne FMEA (Fehlermöglichkeits- und -einflussanalyse) — das Kernwerkzeug des Fertigungsingenieurs',
        'Baue Wissen über Zerspanungs-, Schweiß- und Wärmebehandlungsparameter auf — die technischen Grundlagen',
        'Lies „Das Toyota-Produktionssystem" von Taiichi Ohno — der grundlegende Text über schlanke Produktion'
      ]
    },
    stress_eng: {
      emoji: '🔩',
      name: 'Festigkeits- / FEM-Ingenieur',
      desc: 'Du berechnest strukturelle Lasten und Spannungen — beweist, dass eine Konstruktion realen Bedingungen standhält',
      detail: 'Du arbeitest mit der Finite-Elemente-Methode (FEM): Modell aufbauen, Lasten und Randbedingungen aufbringen, Materialeigenschaften definieren, Berechnung starten und Ergebnisse interpretieren. ANSYS, Abaqus, Nastran — das sind deine wichtigsten Werkzeuge. Du beantwortest die Frage „Hält das stand?" bevor auch nur ein einziges Bauteil gefertigt wird. Deine Berechnungen retten Leben und schützen Unternehmensbudgets.',
      start: [
        'Studiere Werkstoffmechanik und Strukturmechanik gründlich — FEM-Ergebnisse sind ohne Theorie bedeutungslos',
        'Lade ANSYS Student Edition herunter — voller Funktionsumfang, kostenlos für Studierende und Lernende',
        'Absolviere einen praxisorientierten FEM-Kurs auf SimScale oder Coursera — reale Fallstudien sind unerlässlich',
        'Lies die relevanten Normen deiner Branche: ASME, Eurocode oder gleichwertige nationale Standards'
      ]
    },
    product_manager_eng: {
      emoji: '📋',
      name: 'Engineering Product Manager',
      desc: 'Du steuerst die Entwicklung technischer Produkte — von den Anforderungen bis zur Markteinführung',
      detail: 'Du verbindest die technische und die Geschäftswelt. Du erfasst Anforderungen von Kunden und Stakeholdern, übersetzt sie in technische Spezifikationen, verfolgst den Entwicklungsfortschritt und managst Risiken. Dein Ingenieurhintergrund ermöglicht dir echte Gespräche mit dem Team; deine Managementfähigkeiten ermöglichen dir, den Produktwert an das Unternehmen zu kommunizieren. Am Ende bist du die Person, die das Produkt ausliefert.',
      start: [
        'Erwerbe eine PMP- oder CAPM-Zertifizierung — der internationale Standard für Projektmanagement',
        'Erlerne Agile und Scrum für Hardware-Teams: SAFe oder hardware-spezifische Scrum-Frameworks',
        'Beherrsche Jira, Confluence und MS Project — das Standard-Toolset in der industriellen Produktentwicklung',
        'Lies „Inspired" von Marty Cagan — das maßgebliche Buch über den Aufbau von Technologieprodukten'
      ]
    }
  },
  ui: { l2back: '← Zurück zur Ingenieurwissenschaft', title: 'Maschinenbauingenieur: welche Spezialisierung?' }
};

L2.mecheng.fr = {
  questions: [
    {
      t: 'Qu\'est-ce qui t\'attire le plus dans le génie mécanique ?',
      o: [
        'Concevoir de nouveaux mécanismes et pièces — du premier croquis conceptuel au modèle CAO finalisé',
        'Optimiser les processus de fabrication — produire des pièces plus vite, moins cher et mieux',
        'Calculer les charges et les contraintes — démontrer qu\'une structure ne cèdera sous aucune condition',
        'Piloter un produit du concept au marché — coordonner les ingénieurs, les délais et les exigences clients'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: 'Quel outil aimerais-tu le plus maîtriser ?',
      o: [
        'SolidWorks ou CATIA — créer des modèles 3D volumiques d\'assemblages mécaniques complexes',
        'Lean, FMEA et simulation de procédés — éliminer les gaspillages à chaque étape de la production',
        'ANSYS ou Abaqus — simuler les contraintes, les vibrations et le comportement thermique de composants virtuels',
        'Jira, MS Project et systèmes de gestion des exigences — garder les projets d\'ingénierie sous contrôle'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: 'Quel résultat de ton travail te procure le plus de satisfaction ?',
      o: [
        'Le prototype est assemblé et fonctionne exactement comme je l\'ai conçu — le dessin a pris vie',
        'Le débit de la ligne de production a augmenté de 20 % grâce à mes modifications — les chiffres parlent d\'eux-mêmes',
        'Mon analyse a révélé un facteur de sécurité de 3× — la pièce résistera à toute charge réelle',
        'Le produit a été lancé dans les délais, le client est satisfait et l\'équipe est restée dans le budget'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: 'Comment préfères-tu travailler ?',
      o: [
        'De façon autonome devant un ordinateur — construire des modèles, modifier des géométries, résoudre des problèmes spatiaux',
        'Sur le plancher d\'usine, près des machines — observer le processus et repérer les problèmes directement',
        'Plongé dans les calculs — passer des heures à vérifier des équations et interpréter des courbes de contraintes',
        'En réunions et par e-mail — aligner les exigences, les priorités et les délais avec les parties prenantes'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: 'Quel secteur t\'attire le plus ?',
      o: [
        'Aérospatiale ou automobile — concevoir des composants pour avions, fusées ou véhicules électriques',
        'Fabrication et machines industrielles — rendre les usines plus efficaces et réduire les coûts unitaires',
        'Pétrole & gaz, énergie ou construction — calculer les charges pour des infrastructures à enjeux de sécurité',
        'Start-ups technologiques ou R&D — lancer des produits innovants sur le marché'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: 'Où te vois-tu dans 10 ans ?',
      o: [
        'Ingénieur en chef ou CTO — responsable de l\'architecture de l\'ensemble du produit',
        'Directeur de production ou directeur des opérations — je dirige l\'usine la plus efficace du secteur',
        'Analyste en résistance des matériaux expert avec certification internationale — mes calculs font référence',
        'VP Produit ou fondateur d\'une start-up d\'ingénierie'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    }
  ],
  roles: {
    design_eng: {
      emoji: '📐',
      name: 'Ingénieur en conception',
      desc: 'Tu conçois des mécanismes et des composants en CAO — du concept au dessin de fabrication',
      detail: 'Tu traduis un cahier des charges technique en modèles 3D et en dessins d\'ingénierie. Tu travailles dans SolidWorks, CATIA ou Creo — tu crées des pièces, assembles des sous-systèmes, vérifies les tolérances et les ajustements. Ton dessin part en fabrication et de vraies pièces en sont issues. C\'est un travail où la pensée spatiale et la précision sont tout.',
      start: [
        'Apprends SolidWorks — commence par des tutoriels YouTube gratuits et la formation officielle Dassault Systèmes',
        'Étudie le GD&T (tolérancement géométrique) — le langage que parlent les dessins d\'ingénierie',
        'Comprends les normes ISO et ASME pour les dessins — indispensables pour travailler avec des équipes internationales',
        'Essaie Fusion 360 gratuitement — idéal pour des projets personnels et apprendre rapidement la modélisation solide'
      ]
    },
    process_eng: {
      emoji: '⚙️',
      name: 'Ingénieur de fabrication',
      desc: 'Tu optimises les processus de production — rendant la fabrication plus rapide, moins chère et plus fiable',
      detail: 'Tu te situes entre le concepteur et l\'atelier de fabrication. Ton rôle est de déterminer comment fabriquer la pièce : choisir les équipements, rédiger les gammes opératoires, calculer les paramètres d\'usinage ou de soudage, et mettre en place les contrôles qualité. Tu utilises le Lean et le Six Sigma pour éliminer les gaspillages et réduire les taux de rebut. Tes résultats se lisent dans les chiffres : TRS, coût unitaire, taux de rebut.',
      start: [
        'Étudie le Lean Manufacturing et le Six Sigma — obtiens une certification Yellow Belt en ligne comme point de départ',
        'Apprends la FMEA (Analyse des modes de défaillance et de leurs effets) — l\'outil central de l\'ingénieur de fabrication',
        'Acquiers des connaissances sur les paramètres d\'usinage, de soudage et de traitement thermique — les bases techniques',
        'Lis « Le Système de production Toyota » de Taiichi Ohno — le texte fondateur de la production au plus juste'
      ]
    },
    stress_eng: {
      emoji: '🔩',
      name: 'Ingénieur en résistance des matériaux / EF',
      desc: 'Tu calcules les charges structurelles et les contraintes — en prouvant qu\'une conception résistera aux conditions réelles',
      detail: 'Tu travailles avec la méthode des éléments finis (EF) : construire un modèle, appliquer les charges et les conditions aux limites, définir les propriétés des matériaux, lancer le calcul et interpréter les résultats. ANSYS, Abaqus, Nastran — ce sont tes outils principaux. Tu réponds à la question « Est-ce que ça tiendra ? » avant qu\'un seul composant ne soit fabriqué. Tes calculs sauvent des vies et protègent les budgets des entreprises.',
      start: [
        'Étudie en profondeur la résistance des matériaux et la mécanique des structures — les résultats EF sont sans signification sans la théorie',
        'Télécharge ANSYS Student Edition — toutes les fonctionnalités, gratuitement pour les étudiants et autodidactes',
        'Suis un cours pratique d\'EF sur SimScale ou Coursera — les études de cas réels sont indispensables',
        'Lis les codes de calcul pertinents pour ton secteur : ASME, Eurocode ou normes nationales équivalentes'
      ]
    },
    product_manager_eng: {
      emoji: '📋',
      name: 'Chef de produit en ingénierie',
      desc: 'Tu pilotes le développement de produits techniques — des exigences au lancement sur le marché',
      detail: 'Tu fais le pont entre le monde technique et le monde des affaires. Tu recueilles les exigences des clients et des parties prenantes, tu les traduis en spécifications techniques, tu suis l\'avancement du développement et gères les risques. Ton bagage en ingénierie te permet d\'avoir de vraies conversations avec l\'équipe ; tes compétences en gestion te permettent de communiquer la valeur du produit à l\'entreprise. Au final, tu es la personne qui lance le produit.',
      start: [
        'Obtiens une certification PMP ou CAPM — la norme internationale en gestion de projet',
        'Apprends Agile et Scrum pour les équipes hardware : SAFe ou les frameworks Scrum spécifiques au matériel',
        'Maîtrise Jira, Confluence et MS Project — la boîte à outils standard dans le développement de produits industriels',
        'Lis « Inspired » de Marty Cagan — le livre de référence sur la création de produits technologiques'
      ]
    }
  },
  ui: { l2back: '← Retour à l\'ingénierie', title: 'Ingénieur mécanicien : quelle spécialisation ?' }
};



L2.mecheng.es = {
  questions: [
    {
      t: '¿Qué es lo que más te atrae de la ingeniería mecánica?',
      o: [
        'Diseñar nuevos mecanismos y piezas — desde un boceto conceptual hasta un modelo CAD terminado',
        'Optimizar procesos de fabricación — producir piezas más rápido, más barato y con mejor calidad',
        'Calcular cargas y tensiones — demostrar que una estructura no fallará bajo ninguna condición',
        'Gestionar un producto desde el concepto hasta el mercado — coordinar ingenieros, plazos y requisitos del cliente'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: '¿Qué herramienta te gustaría dominar primero?',
      o: [
        'SolidWorks o CATIA — crear modelos sólidos 3D de ensamblajes mecánicos complejos',
        'Lean, FMEA y simulación de procesos — eliminar desperdicios en cada etapa de la producción',
        'ANSYS o Abaqus — simular tensiones, vibraciones y comportamiento térmico en componentes virtuales',
        'Jira, MS Project y sistemas de gestión de requisitos — mantener los proyectos de ingeniería bajo control'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: '¿Qué resultado de tu trabajo te da mayor satisfacción?',
      o: [
        'El prototipo está ensamblado y funciona exactamente como lo diseñé — el plano cobró vida',
        'El rendimiento de la línea de producción aumentó un 20% tras mis cambios de proceso — los datos hablan por sí solos',
        'Mi análisis mostró un factor de seguridad de 3× — la pieza resistirá cualquier carga real',
        'El producto se lanzó en el plazo previsto, el cliente está satisfecho y el equipo se mantuvo dentro del presupuesto'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: '¿Cómo prefieres trabajar?',
      o: [
        'De forma independiente frente a una computadora — construir modelos, editar geometrías, resolver problemas espaciales',
        'En el piso de fábrica, cerca de las máquinas — observar el proceso y detectar problemas directamente',
        'Inmerso en cálculos — pasar horas verificando ecuaciones e interpretando gráficos de tensiones',
        'En reuniones y por correo — alinear requisitos, prioridades y plazos con los interesados'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: '¿Qué industria te atrae más?',
      o: [
        'Aeroespacial o automotriz — diseñar componentes para aviones, cohetes o vehículos eléctricos',
        'Manufactura e maquinaria industrial — hacer las fábricas más eficientes y reducir costos unitarios',
        'Petróleo y gas, energía o construcción — calcular cargas para infraestructuras críticas',
        'Startups tecnológicas o I+D — llevar productos innovadores al mercado'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: '¿Dónde te ves en 10 años?',
      o: [
        'Ingeniero jefe o CTO — responsable de la arquitectura de todo el producto',
        'Director de manufactura o Director de Operaciones — liderando la planta más eficiente de la industria',
        'Analista experto en resistencia de materiales con certificación internacional — mis cálculos marcan el estándar',
        'VP de Producto o fundador de una startup de ingeniería'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    }
  ],
  roles: {
    design_eng: {
      emoji: '⚙️',
      name: 'Ingeniero de Diseño',
      desc: 'Diseñas mecanismos y componentes en CAD — desde el concepto hasta el plano de producción',
      detail: 'Traduces un brief técnico en modelos 3D y planos de ingeniería. Trabajas en SolidWorks, CATIA o Creo — construyes piezas, ensamblas subsistemas y verificas tolerancias y ajustes. Tu plano va a manufactura y con él se fabrican componentes reales. Es un trabajo donde el pensamiento espacial y la precisión lo son todo.',
      start: [
        'Aprende SolidWorks — comienza con tutoriales gratuitos en YouTube y la capacitación oficial de Dassault Systèmes',
        'Estudia GD&T (Dimensionamiento y Tolerancias Geométricas) — el lenguaje que hablan los planos de ingeniería',
        'Comprende las normas de dibujo ISO y ASME — esenciales para trabajar con equipos internacionales',
        'Prueba Fusion 360 gratis — ideal para proyectos personales y para aprender modelado sólido rápidamente'
      ]
    },
    process_eng: {
      emoji: '🔧',
      name: 'Ingeniero de Manufactura',
      desc: 'Optimizas procesos de producción — haciendo la manufactura más rápida, barata y confiable',
      detail: 'Te sitúas entre el diseñador y el piso de producción. Tu trabajo es determinar cómo fabricar la pieza: elegir equipos, escribir planes de proceso, calcular parámetros de corte o soldadura e implementar controles de calidad. Usas Lean y Six Sigma para eliminar desperdicios y reducir tasas de defectos. Tus resultados son visibles en los números: OEE, costo unitario, tasa de chatarra.',
      start: [
        'Estudia Manufactura Lean y Six Sigma — obtén una certificación Yellow Belt en línea como punto de partida',
        'Aprende FMEA (Análisis de Modos de Falla y Efectos) — la herramienta central del ingeniero de manufactura',
        'Desarrolla conocimiento sobre parámetros de maquinado, soldadura y tratamiento térmico — las bases técnicas',
        'Lee "El Sistema de Producción Toyota" de Taiichi Ohno — el texto fundamental sobre manufactura esbelta'
      ]
    },
    stress_eng: {
      emoji: '📐',
      name: 'Ingeniero de Resistencia / FEA',
      desc: 'Calculas cargas estructurales y tensiones — demostrando que un diseño resistirá las condiciones reales',
      detail: 'Trabajas con el Análisis de Elementos Finitos (FEA): construyes un modelo, aplicas cargas y condiciones de contorno, defines propiedades de materiales, ejecutas el solver e interpretas los resultados. ANSYS, Abaqus, Nastran — estas son tus herramientas principales. Respondes la pregunta "¿Resistirá esto?" antes de que se fabrique un solo componente. Tus cálculos salvan vidas y protegen los presupuestos de la empresa.',
      start: [
        'Estudia mecánica de materiales y mecánica estructural a fondo — los resultados de FEA no tienen sentido sin la teoría',
        'Descarga ANSYS Student Edition — funcionalidad completa, gratis para estudiantes y autodidactas',
        'Completa un curso práctico de FEA en SimScale o Coursera — los casos de estudio del mundo real son esenciales',
        'Lee los códigos de diseño relevantes para tu industria: ASME, Eurocódigo o normas nacionales equivalentes'
      ]
    },
    product_manager_eng: {
      emoji: '🚀',
      name: 'Product Manager de Ingeniería',
      desc: 'Gestionas el desarrollo de productos técnicos — desde los requisitos hasta el lanzamiento al mercado',
      detail: 'Eres el puente entre el mundo técnico y el de negocios. Reúnes requisitos de clientes y stakeholders, los traduces en especificaciones de ingeniería, haces seguimiento al progreso del desarrollo y gestionas riesgos. Tu formación en ingeniería te permite tener conversaciones reales con el equipo; tus habilidades de gestión te permiten comunicar el valor del producto al negocio. Al final, eres la persona que lanza el producto.',
      start: [
        'Obtén una certificación PMP o CAPM — el estándar internacional para la gestión de proyectos',
        'Aprende Agile y Scrum para equipos de hardware: SAFe o frameworks Scrum específicos para hardware',
        'Domina Jira, Confluence y MS Project — el conjunto de herramientas estándar en el desarrollo de productos industriales',
        'Lee "Inspired" de Marty Cagan — el libro definitivo sobre la creación de productos tecnológicos'
      ]
    }
  },
  ui: { l2back: '← Volver a ingeniería', title: 'Ingeniería mecánica: ¿qué especialización?' }
};

L2.mecheng.pt = {
  questions: [
    {
      t: 'O que mais te atrai na engenharia mecânica?',
      o: [
        'Projetar novos mecanismos e peças — de um esboço conceitual até um modelo CAD finalizado',
        'Otimizar processos de fabricação — produzir peças mais rápido, mais barato e com melhor qualidade',
        'Calcular cargas e tensões — provar que uma estrutura não vai falhar sob nenhuma condição',
        'Gerenciar um produto do conceito ao mercado — coordenar engenheiros, prazos e requisitos do cliente'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: 'Qual ferramenta você gostaria mais de dominar?',
      o: [
        'SolidWorks ou CATIA — criar modelos sólidos 3D de conjuntos mecânicos complexos',
        'Lean, FMEA e simulação de processos — eliminar desperdícios em cada etapa da produção',
        'ANSYS ou Abaqus — simular tensões, vibrações e comportamento térmico em componentes virtuais',
        'Jira, MS Project e sistemas de gestão de requisitos — manter os projetos de engenharia sob controle'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: 'Qual resultado do seu trabalho te dá mais satisfação?',
      o: [
        'O protótipo foi montado e funciona exatamente como eu projetei — o desenho ganhou vida',
        'O rendimento da linha de produção aumentou 20% após minhas mudanças de processo — os dados falam por si',
        'Minha análise mostrou um fator de segurança de 3× — a peça vai suportar qualquer carga real',
        'O produto foi lançado no prazo, o cliente está satisfeito e a equipe ficou dentro do orçamento'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: 'Como você prefere trabalhar?',
      o: [
        'De forma independente no computador — construir modelos, editar geometrias, resolver problemas espaciais',
        'No chão de fábrica, perto das máquinas — observar o processo e identificar problemas diretamente',
        'Imerso em cálculos — passar horas verificando equações e interpretando gráficos de tensões',
        'Em reuniões e por e-mail — alinhar requisitos, prioridades e prazos com os stakeholders'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: 'Qual setor te atrai mais?',
      o: [
        'Aeroespacial ou automotivo — projetar componentes para aviões, foguetes ou veículos elétricos',
        'Manufatura e maquinário industrial — tornar as fábricas mais eficientes e reduzir os custos unitários',
        'Petróleo e gás, energia ou construção — calcular cargas para infraestruturas críticas',
        'Startups de tecnologia ou P&D — levar produtos inovadores ao mercado'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    },
    {
      t: 'Onde você se vê em 10 anos?',
      o: [
        'Engenheiro-chefe ou CTO — responsável pela arquitetura de todo o produto',
        'Diretor de Manufatura ou Diretor de Operações — liderando a planta mais eficiente da indústria',
        'Analista especialista em resistência dos materiais com certificação internacional — meus cálculos definem o padrão',
        'VP de Produto ou fundador de uma startup de engenharia'
      ],
      s: [{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]
    }
  ],
  roles: {
    design_eng: {
      emoji: '⚙️',
      name: 'Engenheiro de Projeto',
      desc: 'Você projeta mecanismos e componentes em CAD — do conceito ao desenho de produção',
      detail: 'Você traduz um briefing técnico em modelos 3D e desenhos de engenharia. Trabalha no SolidWorks, CATIA ou Creo — constrói peças, monta subsistemas e verifica tolerâncias e ajustes. Seu desenho vai para a fabricação e com ele são produzidos componentes reais. É um trabalho onde o pensamento espacial e a precisão são tudo.',
      start: [
        'Aprenda SolidWorks — comece com tutoriais gratuitos no YouTube e treinamento oficial da Dassault Systèmes',
        'Estude GD&T (Dimensionamento e Tolerâncias Geométricas) — a linguagem que os desenhos de engenharia falam',
        'Entenda as normas de desenho ISO e ASME — essenciais para trabalhar com equipes internacionais',
        'Experimente o Fusion 360 gratuitamente — ideal para projetos pessoais e para aprender modelagem sólida rapidamente'
      ]
    },
    process_eng: {
      emoji: '🔧',
      name: 'Engenheiro de Manufatura',
      desc: 'Você otimiza processos de produção — tornando a fabricação mais rápida, barata e confiável',
      detail: 'Você fica entre o projetista e o chão de fábrica. Seu trabalho é descobrir como fabricar a peça: escolher equipamentos, escrever planos de processo, calcular parâmetros de corte ou solda e implementar controles de qualidade. Você usa Lean e Six Sigma para eliminar desperdícios e reduzir taxas de defeitos. Seus resultados são visíveis nos números: OEE, custo unitário, taxa de refugo.',
      start: [
        'Estude Manufatura Lean e Six Sigma — obtenha uma certificação Yellow Belt online como ponto de partida',
        'Aprenda FMEA (Análise de Modos de Falha e Efeitos) — a ferramenta central do engenheiro de manufatura',
        'Desenvolva conhecimento sobre parâmetros de usinagem, soldagem e tratamento térmico — as bases técnicas',
        'Leia "O Sistema Toyota de Produção" de Taiichi Ohno — o texto fundamental sobre manufatura enxuta'
      ]
    },
    stress_eng: {
      emoji: '📐',
      name: 'Engenheiro de Resistência / FEA',
      desc: 'Você calcula cargas estruturais e tensões — provando que um projeto resistirá às condições reais',
      detail: 'Você trabalha com Análise de Elementos Finitos (FEA): constrói um modelo, aplica cargas e condições de contorno, define propriedades dos materiais, executa o solver e interpreta os resultados. ANSYS, Abaqus, Nastran — essas são suas ferramentas principais. Você responde a pergunta "Isso vai aguentar?" antes de um único componente ser fabricado. Seus cálculos salvam vidas e protegem os orçamentos da empresa.',
      start: [
        'Estude mecânica dos materiais e mecânica estrutural a fundo — os resultados de FEA não têm sentido sem a teoria',
        'Baixe o ANSYS Student Edition — funcionalidade completa, gratuita para estudantes e autodidatas',
        'Conclua um curso prático de FEA no SimScale ou Coursera — estudos de caso do mundo real são essenciais',
        'Leia os códigos de projeto relevantes para sua indústria: ASME, Eurocódigo ou normas nacionais equivalentes'
      ]
    },
    product_manager_eng: {
      emoji: '🚀',
      name: 'Product Manager de Engenharia',
      desc: 'Você gerencia o desenvolvimento de produtos técnicos — dos requisitos ao lançamento no mercado',
      detail: 'Você é a ponte entre o mundo técnico e o de negócios. Coleta requisitos de clientes e stakeholders, os traduz em especificações de engenharia, acompanha o progresso do desenvolvimento e gerencia riscos. Sua formação em engenharia permite que você tenha conversas reais com a equipe; suas habilidades de gestão permitem que você comunique o valor do produto para o negócio. No final, você é a pessoa que lança o produto.',
      start: [
        'Obtenha uma certificação PMP ou CAPM — o padrão internacional para gestão de projetos',
        'Aprenda Agile e Scrum para equipes de hardware: SAFe ou frameworks Scrum específicos para hardware',
        'Domine Jira, Confluence e MS Project — o conjunto de ferramentas padrão no desenvolvimento de produtos industriais',
        'Leia "Inspired" de Marty Cagan — o livro definitivo sobre a criação de produtos tecnológicos'
      ]
    }
  },
  ui: { l2back: '← Voltar à engenharia', title: 'Engenharia mecânica: qual especialização?' }
};

L2.mecheng.ar = {
  questions: [
    { t:"أيّ جانب من الهندسة الميكانيكية يستهويك أكثر؟", o:["تصميم المنتجات والأجهزة الميكانيكية من الصفر","تحسين عمليات التصنيع وكفاءة الإنتاج","تحليل الإجهاد وسلامة الهياكل والمواد","إدارة دورة حياة المنتج من التصميم حتى السوق"], s:[{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}] },
    { t:"أيّ أداة تودّ إتقانها؟", o:["برامج CAD/CAM مثل SolidWorks وAutodesk Inventor","Six Sigma وLean Manufacturing وتقنيات تحسين العمليات","FEA/FEM وMATLAB وأدوات تحليل الإجهاد","إدارة المشاريع وأدوات Agile للمنتجات التقنية"], s:[{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}] },
    { t:"أيّ نتيجة تُشعرك بالرضا أكثر؟", o:["رؤية منتج صممته يُنتج ويُستخدم في الواقع","تحقيق تحسين ملموس في كفاءة خط الإنتاج","إثبات أن هيكلاً ما آمن تحت ظروف قصوى","إطلاق منتج ناجح في السوق وتحقيق مبيعات عالية"], s:[{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}] },
    { t:"أين تُفضّل العمل؟", o:["في قسم R&D لتصميم وتطوير المنتجات الجديدة","في مصنع لتحسين العمليات وحل مشاكل الإنتاج","في مكتب هندسي للتحليل والاستشارات","في شركة تقنية تجمع الهندسة وإدارة المنتج"], s:[{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}] },
    { t:"أيّ مهمة أقرب إليك؟", o:["تصميم آلية ميكانيكية جديدة بالكامل باستخدام CAD","تطبيق Kaizen لتقليل فاقد الوقت في خط إنتاج","إجراء تحليل FEA لتحديد نقاط الفشل في هيكل ما","وضع خارطة طريق لتطوير منتج تقني جديد"], s:[{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}] },
    { t:"أين ترى نفسك بعد عشر سنوات؟", o:["مهندس تصميم أول يقود فريق تطوير المنتجات","مدير تصنيع مسؤول عن عمليات مصنع كامل","مستشار هندسة متخصص في تحليل الهياكل","مدير منتج في شركة تقنية أو صناعية كبرى"], s:[{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}] },
  ],
  roles: {
    design_eng:{ emoji:"⚙️", name:"مهندس تصميم", desc:"تُصمّم الأجهزة والأنظمة الميكانيكية من الفكرة حتى النموذج الأولي", detail:"تعمل في قسم R&D.", start:["أتقن SolidWorks أو CATIA","تعلّم مبادئ التصميم للتصنيع DFM","تدرّب في مشاريع تصميم حقيقية","احصل على شهادة هندسة ميكانيكية"] },
    process_eng:{ emoji:"🔧", name:"مهندس عمليات", desc:"تُحسّن كفاءة التصنيع وتُقلّل الهدر في خطوط الإنتاج", detail:"تعمل في المصانع.", start:["تعلّم منهجيات Lean وSix Sigma","احصل على شهادة Green Belt أو Black Belt","تدرّب في بيئات تصنيعية","أتقن تحليل تدفق العمليات وبطاقات VSM"] },
    stress_eng:{ emoji:"📐", name:"مهندس إجهاد وهياكل", desc:"تتحقق من سلامة الهياكل والأجزاء الميكانيكية تحت الأحمال", detail:"تعمل في المكاتب الهندسية.", start:["أتقن برامج FEA مثل ANSYS أو Abaqus","تعلّم ميكانيكا المواد وتحليل الإجهاد","تدرّب في مشاريع هندسية حقيقية","احصل على شهادة الهندسة الميكانيكية أو الإنشائية"] },
    product_manager_eng:{ emoji:"🚀", name:"مدير المنتج الهندسي", desc:"تُدير دورة حياة المنتجات التقنية وتجسر الفجوة بين الهندسة والأعمال", detail:"تعمل في شركات التقنية والتصنيع.", start:["تعلّم أساسيات إدارة المنتج وأطر Agile","أتقن أدوات البحث عن المستخدمين وتحليل المنافسين","طوّر مهارات التواصل والتأثير","احصل على شهادة PMP أو CSPO"] },
  },
  ui:{ l2back:"← العودة إلى الهندسة", title:"هندسة الميكانيكا: ما التخصص؟" }
};

L2.mecheng.he = {
  questions: [
    { t:"מה הצד שהכי מעניין אותך בהנדסה מכנית?", o:["עיצוב מוצרים ומכשירים מכניים מאפס","שיפור תהליכי ייצור וייעול ייצור","ניתוח מתחים ובטיחות מבנים וחומרים","ניהול מחזור חיי מוצר מעיצוב לשוק"], s:[{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}] },
    { t:"איזה כלי הכי תרצה לשלוט בו?", o:["תוכנות CAD/CAM כגון SolidWorks","Six Sigma, Lean Manufacturing","FEA/FEM ו-MATLAB","ניהול פרויקטים ו-Agile"], s:[{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}] },
    { t:"איזה תוצאה הכי ממלאת אותך סיפוק?", o:["לראות מוצר שעיצבת מיוצר ובשימוש","שיפור ניכר ביעילות קו הייצור","להוכיח שמבנה בטוח בתנאים קיצוניים","השקת מוצר מוצלח בשוק"], s:[{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}] },
    { t:"איפה אתה מעדיף לעבוד?", o:["במחלקת R&D לעיצוב מוצרים חדשים","במפעל לשיפור תהליכים","במשרד הנדסי לניתוח וייעוץ","בחברת טכנולוגיה המשלבת הנדסה וניהול"], s:[{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}] },
    { t:"איזה משימה הכי קרובה ללב שלך?", o:["עיצוב מנגנון מכני חדש ב-CAD","יישום Kaizen להפחתת בזבוז בקו ייצור","ביצוע ניתוח FEA לזיהוי נקודות כשל","מיפוי מפת דרכים לפיתוח מוצר"], s:[{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}] },
    { t:"איפה אתה רואה את עצמך עוד 10 שנים?", o:["מהנדס עיצוב בכיר","מנהל ייצור","יועץ הנדסה","מנהל מוצר בחברת טכנולוגיה"], s:[{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}] },
  ],
  roles: {
    design_eng:{ emoji:"⚙️", name:"מהנדס עיצוב", desc:"אתה מעצב מכשירים ומערכות מכניות", detail:"אתה עובד במחלקת R&D.", start:["שלוט ב-SolidWorks או CATIA","למד עיצוב לייצור DFM","התמחה בפרויקטי עיצוב","קבל תואר הנדסה מכנית"] },
    process_eng:{ emoji:"🔧", name:"מהנדס תהליכים", desc:"אתה משפר יעילות ייצור", detail:"אתה עובד במפעלים.", start:["למד Lean ו-Six Sigma","קבל Green Belt או Black Belt","התמחה בסביבות ייצור","שלוט בניתוח VSM"] },
    stress_eng:{ emoji:"📐", name:"מהנדס מתחים", desc:"אתה בודק בטיחות מבנים", detail:"אתה עובד במשרדים הנדסיים.", start:["שלוט ב-ANSYS או Abaqus","למד מכניקת חומרים","התמחה בפרויקטים הנדסיים","קבל תואר הנדסה מכנית"] },
    product_manager_eng:{ emoji:"🚀", name:"מנהל מוצר הנדסי", desc:"אתה מנהל מחזור חיי מוצרים", detail:"אתה עובד בחברות טכנולוגיה.", start:["למד ניהול מוצר ו-Agile","שלוט בכלי מחקר משתמשים","פתח מיומנויות תקשורת","קבל PMP או CSPO"] },
  },
  ui:{ l2back:"← חזרה להנדסה", title:"הנדסה מכנית: איזה התמחות?" }
};

L2.mecheng.zh = {
  questions: [
    {t:'机械工程中什么最吸引你？', o:['设计工程——用CAD设计机械结构和零件','工艺工程——优化制造流程，提升生产效率','强度/仿真——分析结构承载能力，防止失效','工程项目管理——协调团队，按时交付工程项目'], s:[{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]},
    {t:'你最想精通哪个技术？', o:['SolidWorks或CATIA三维建模','精益生产和工艺优化','ANSYS有限元分析和疲劳计算','项目计划、成本控制和团队协调'], s:[{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]},
    {t:'什么成果最让你有成就感？', o:['你设计的零件结构比上一代轻30%、强度不变','优化了生产工艺，节拍时间缩短20%','仿真分析准确预测了零件的疲劳寿命','复杂项目按时按预算交付，客户高度满意'], s:[{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]},
    {t:'你更喜欢哪种工作？', o:['在CAD软件中绘制图纸，与制造团队协作','在车间里优化生产线，解决工艺问题','建模、网格划分、运行仿真，分析结果','制定项目计划，协调设计、采购、制造各方'], s:[{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]},
    {t:'你会选择哪个项目？', o:['为电动汽车设计一个新型减速器','对某冲压生产线进行精益改造','对某飞机部件做疲劳寿命仿真分析','负责一条新生产线的安装调试项目'], s:[{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]},
    {t:'10年后你在哪里？', o:['汽车或航空企业的首席设计工程师','制造企业的工艺总监','仿真部门的技术专家，有自己的方法积累','大型工程公司的项目总监'], s:[{design_eng:3},{process_eng:3},{stress_eng:3},{product_manager_eng:3}]}
  ],
  roles: {
    design_eng: {emoji:'📐', name:'机械设计工程师', desc:'用三维设计工具将工程概念变成可制造的机械结构', detail:'你是机械产品的创造者。你用SolidWorks或CATIA设计零件和装配体，与制造、质量团队合作，确保设计既满足性能要求，又可以高效制造。', start:['精通SolidWorks——从零件到装配到工程图','学习机械设计基础——公差配合、材料选择','了解DFM（面向制造的设计）原则','找一个开源机械项目，练习从设计到3D打印的全流程']},
    process_eng: {emoji:'⚙️', name:'工艺工程师', desc:'优化制造流程，消除浪费，让工厂更高效地生产高质量产品', detail:'你的工作场所在车间。你研究生产流程，找到瓶颈，应用精益工具，把理论产能变成实际产能。你的改进直接影响公司的成本和竞争力。', start:['学习精益生产和六西格玛基础','掌握价值流图析（VSM）工具','了解生产节拍时间计算和产线平衡','在制造企业实习，直接在车间学习']},
    stress_eng: {emoji:'🔬', name:'结构/仿真工程师', desc:'用有限元分析等仿真方法预测结构在真实载荷下的行为', detail:'你让工程设计从"感觉够强"变成"数据证明够强"。你建立仿真模型，施加载荷，分析应力、变形和疲劳，为设计优化提供量化依据。', start:['学习ANSYS Mechanical基础——从建模到后处理','掌握材料力学和结构力学理论','了解疲劳分析基础——S-N曲线和损伤累积','在开源FEA软件（如Code_Aster）上练习真实案例']},
    product_manager_eng: {emoji:'📋', name:'工程项目经理', desc:'协调设计、制造、采购各方，确保复杂工程项目按时按质交付', detail:'你是工程项目的指挥官。你制定计划，管理风险，解决跨部门冲突，确保客户的工程项目在预算内按时完成。', start:['考取PMP项目管理认证','学习工程项目计划工具——MS Project或Primavera','了解合同管理和工程变更控制','在工程公司的项目组实习，参与真实项目的全过程']}
  },
  ui: {l2back:'← 返回机械工程', title:'机械工程：选择你的专业方向'}
};
