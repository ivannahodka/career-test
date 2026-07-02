'use strict';
/* ── L2: Инженер-робототехник ────────────────────────────────────────────────
   4 roles: hw_robotics 🤖 | sw_robotics 💻 | ai_robotics 🧠 | robotics_researcher 🔬
   RU only — другие языки добавляются отдельно
──────────────────────────────────────────────────────────────────────────── */

L2.robotics.ru = {
  questions: [
    {
      t: 'Что в роботе тебя интересует больше всего?',
      o: [
        'Механика и электроника — то, из чего робот сделан физически: моторы, сенсоры, корпус',
        'Программное управление — как робот двигается, реагирует на команды и взаимодействует со средой',
        'Интеллект — как робот воспринимает мир, принимает решения и учится на опыте',
        'Исследования — открывать новые принципы и публиковать результаты, которые меняют отрасль'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: 'С каким инструментом ты хотел бы работать?',
      o: [
        'SolidWorks / Fusion 360 + паяльник — проектировать корпуса и собирать электронику руками',
        'ROS2 и Python/C++ — писать узлы управления, планировщики движения и драйверы',
        'PyTorch + OpenCV — обучать нейронные сети видеть, принимать решения и управлять роботом',
        'MATLAB/Simulink и научные журналы — моделировать, экспериментировать и публиковать'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: 'Какой проект тебя вдохновляет?',
      o: [
        'Собрать робота-манипулятора с нуля — от мотор-редукторов до первого движения',
        'Написать систему навигации для автономного мобильного робота на складе',
        'Научить робота распознавать объекты и самостоятельно решать, как с ними обращаться',
        'Провести эксперимент по новому алгоритму и опубликовать результаты на ICRA или IROS'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: 'Как ты предпочитаешь работать?',
      o: [
        'Руками — паять, монтировать, отлаживать электронику и проверять механику вживую',
        'За кодом — писать, тестировать и рефакторить программное обеспечение в IDE',
        'Между данными и экспериментами — обучать модели, интерпретировать результаты, улучшать',
        'В лаборатории или на конференции — исследовать, обсуждать идеи и публиковать'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: 'Где ты хочешь применить робототехнику?',
      o: [
        'Промышленность — промышленные манипуляторы, сварка, сборка, покраска на заводах',
        'Логистика и склады — автономные AGV, дроны-сортировщики, роботы-комплектовщики',
        'Медицина или сельское хозяйство — роботы-хирурги, дроны-опрыскиватели, фермерские роботы',
        'Фундаментальные исследования — мягкая робототехника, рои роботов, биоинспирированные системы'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: 'Где ты видишь себя через 10 лет?',
      o: [
        'Главный аппаратный инженер в компании-производителе промышленных роботов',
        'Архитектор программного обеспечения для автономных роботических систем',
        'Руководитель команды AI/Robotics в крупном технологическом корпорации или стартапе',
        'Профессор или старший исследователь в ведущей лаборатории робототехники'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    }
  ],
  roles: {
    hw_robotics: {
      emoji: '🤖',
      name: 'Аппаратный инженер-робототехник',
      desc: 'Проектируешь и собираешь физическую часть роботов — механику, электронику, сенсоры',
      detail: 'Ты работаешь с тем, что можно потрогать: проектируешь корпуса и приводы в CAD, выбираешь моторы и редукторы, разрабатываешь печатные платы и схемы питания. Ты отлаживаешь электронику мультиметром и осциллографом, собираешь прототипы и смотришь, как они движутся. Твой робот — это реальный объект, который работает в физическом мире.',
      start: [
        'Изучи основы электроники: Ohm, I2C, SPI, PWM — без этого не собрать ни один робот',
        'Начни с Arduino или STM32: простые проекты с сервоприводами и датчиками',
        'Освой SolidWorks или Fusion 360 для проектирования механических частей',
        'Читай «Robot Builders Bonanza» Гордона МакКомба — практический справочник аппаратного инженера'
      ]
    },
    sw_robotics: {
      emoji: '💻',
      name: 'Программист робототехнических систем',
      desc: 'Пишешь ПО для управления роботами — навигацию, планирование движения, драйверы',
      detail: 'Ты даёшь роботу «мозг». Работаешь на стеке ROS2 + C++/Python: пишешь узлы управления, алгоритмы планирования пути (A*, RRT), драйверы сенсоров, системы локализации (SLAM). Ты тестируешь код в симуляции Gazebo и переносишь на реальное железо. Хороший код делает робота надёжным — плохой код делает его опасным.',
      start: [
        'Освой ROS2 (Robot Operating System) — стандарт де-факто для всех роботических систем',
        'Изучи C++ на уровне Modern C++17: скорость и контроль памяти критичны в реальном времени',
        'Пройди курс по SLAM (одновременная локализация и картография) на Coursera или edX',
        'Практикуй в Gazebo Simulator — тестируй код без риска сломать реального робота'
      ]
    },
    ai_robotics: {
      emoji: '🧠',
      name: 'AI-инженер в робототехнике',
      desc: 'Учишь роботов видеть, понимать и принимать решения с помощью машинного обучения',
      detail: 'Ты на пересечении AI и робототехники. Обучаешь модели компьютерного зрения (YOLO, SegFormer), разрабатываешь алгоритмы обучения с подкреплением для управления, интегрируешь языковые модели для взаимодействия робота с человеком. Работаешь с PyTorch, OpenCV, Isaac Lab. Твоя цель — чтобы робот понимал мир и действовал в нём разумно.',
      start: [
        'Изучи computer vision с OpenCV и PyTorch: детекция объектов — база AI-робототехники',
        'Освой Reinforcement Learning: курс Дэвида Сильвера на YouTube + библиотека Stable-Baselines3',
        'Поработай с NVIDIA Isaac Lab или MuJoCo — симуляторы для обучения роботов',
        'Следи за arXiv/robotics и конференциями ICRA, IROS, CoRL — там лучшие свежие работы'
      ]
    },
    robotics_researcher: {
      emoji: '🔬',
      name: 'Исследователь в робототехнике',
      desc: 'Разрабатываешь новые принципы и алгоритмы — публикуешь результаты, которые двигают отрасль вперёд',
      detail: 'Ты работаешь в академической или корпоративной исследовательской лаборатории. Формулируешь гипотезы, ставишь эксперименты, пишешь код для прототипов и публикуешь результаты на ведущих конференциях и в журналах. Твои темы — мягкая робототехника, роевые алгоритмы, тактильные сенсоры, биоинспирированное движение. Ты двигаешь границы возможного.',
      start: [
        'Поступи в магистратуру или аспирантуру по робототехнике — исследовательская карьера требует учёной степени',
        'Читай ключевые статьи: ICRA, IROS, Science Robotics — там живёт передний край',
        'Начни вести личный исследовательский проект и попробуй опубликовать workshop paper',
        'Найди научного руководителя с сильным h-индексом — ментор в науке важнее всего'
      ]
    }
  },
  ui: { l2back: '← К инженерии', title: 'Робототехника: какая специализация?' }
};



L2.robotics.en = {
  questions: [
    {
      t: 'What interests you most about robotics?',
      o: [
        'Mechanics and electronics — the physical hardware: motors, sensors, and chassis design',
        'Software control — how a robot moves, responds to commands, and interacts with its environment',
        'Intelligence — how a robot perceives the world, makes decisions, and learns from experience',
        'Research — discovering new principles and publishing results that advance the field'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: 'Which tool would you most like to work with?',
      o: [
        'SolidWorks / Fusion 360 + a soldering iron — design enclosures and assemble electronics by hand',
        'ROS2 and Python/C++ — write control nodes, motion planners, and hardware drivers',
        'PyTorch + OpenCV — train neural networks to see, decide, and control a robot',
        'MATLAB/Simulink and academic journals — model, experiment, and publish'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: 'Which project inspires you most?',
      o: [
        'Building a robotic arm from scratch — from motor-gearbox selection to first controlled movement',
        'Writing a navigation stack for an autonomous mobile robot operating in a warehouse',
        'Training a robot to recognise objects and independently decide how to handle them',
        'Running an experiment on a novel algorithm and publishing at ICRA or IROS'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: 'How do you prefer to work?',
      o: [
        'With my hands — soldering, assembling, debugging electronics, and testing mechanics physically',
        'Writing code — developing, testing, and refactoring software in an IDE',
        'Between data and experiments — training models, interpreting results, iterating to improve',
        'In a lab or at a conference — researching, discussing ideas, and publishing findings'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: 'Where do you want to apply robotics?',
      o: [
        'Industry — industrial manipulators for welding, assembly, and painting in factories',
        'Logistics and warehouses — autonomous AGVs, sorting drones, and picking robots',
        'Healthcare or agriculture — surgical robots, crop-spraying drones, or farm automation',
        'Fundamental research — soft robotics, robot swarms, or bio-inspired locomotion systems'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: 'Where do you see yourself in 10 years?',
      o: [
        'Lead hardware engineer at a major industrial robotics manufacturer',
        'Software architect for autonomous robotic systems at scale',
        'Head of AI/Robotics at a major tech corporation or well-funded start-up',
        'Professor or senior researcher at a leading robotics laboratory'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    }
  ],
  roles: {
    hw_robotics: {
      emoji: '🤖',
      name: 'Hardware Robotics Engineer',
      desc: 'You design and build the physical side of robots — mechanics, electronics, and sensors',
      detail: 'You work with what you can touch. You design chassis and actuators in CAD, select motors and gearboxes, develop PCBs and power systems. You debug electronics with a multimeter and oscilloscope, assemble prototypes, and watch them move. Your robot is a real object that operates in the physical world — and when something goes wrong, you find it with your hands.',
      start: [
        'Learn electronics fundamentals: Ohm\'s law, I2C, SPI, PWM — you cannot build a robot without them',
        'Start with Arduino or STM32: simple projects with servo motors and sensors to build intuition',
        'Learn SolidWorks or Fusion 360 for designing mechanical components and enclosures',
        'Read "Robot Builders Bonanza" by Gordon McComb — a practical hardware engineer\'s reference'
      ]
    },
    sw_robotics: {
      emoji: '💻',
      name: 'Robotics Software Engineer',
      desc: 'You write software that controls robots — navigation, motion planning, and hardware drivers',
      detail: 'You give the robot its brain. You work on the ROS2 + C++/Python stack: writing control nodes, path planning algorithms (A*, RRT), sensor drivers, and localisation systems (SLAM). You test code in Gazebo simulation before deploying to real hardware. Good software makes a robot reliable — bad software makes it dangerous.',
      start: [
        'Master ROS2 (Robot Operating System) — the de facto standard for all professional robotic systems',
        'Learn C++ at Modern C++17 level — speed and memory control are critical in real-time robotics',
        'Complete a SLAM course on Coursera or edX — Simultaneous Localisation and Mapping is fundamental',
        'Practice in Gazebo Simulator — test your code without risk of damaging real hardware'
      ]
    },
    ai_robotics: {
      emoji: '🧠',
      name: 'AI Engineer in Robotics',
      desc: 'You teach robots to see, understand, and make decisions using machine learning',
      detail: 'You sit at the intersection of AI and robotics. You train computer vision models (YOLO, SegFormer), develop reinforcement learning algorithms for robot control, and integrate language models for human-robot interaction. You work with PyTorch, OpenCV, and Isaac Lab. Your goal is a robot that genuinely understands its environment and acts intelligently within it.',
      start: [
        'Learn computer vision with OpenCV and PyTorch — object detection is the foundation of AI robotics',
        'Study Reinforcement Learning: David Silver\'s YouTube course + Stable-Baselines3 library',
        'Work with NVIDIA Isaac Lab or MuJoCo — the leading simulators for training robot behaviours',
        'Follow arXiv/robotics and conferences ICRA, IROS, CoRL — the best new work appears there first'
      ]
    },
    robotics_researcher: {
      emoji: '🔬',
      name: 'Robotics Researcher',
      desc: 'You develop new principles and algorithms — publishing results that push the boundaries of what robots can do',
      detail: 'You work in an academic or corporate research laboratory. You formulate hypotheses, design experiments, write prototype code, and publish findings at leading conferences and journals. Your topics might include soft robotics, swarm algorithms, tactile sensing, or bio-inspired locomotion. You are at the frontier of what is possible — and you define what comes next.',
      start: [
        'Complete a master\'s degree or PhD in robotics — a research career requires postgraduate study',
        'Read papers from ICRA, IROS, and Science Robotics regularly — stay at the frontier',
        'Start a personal research project and try to submit a workshop paper — publishing early matters',
        'Find a supervisor with a strong publication record — your academic mentor shapes your entire trajectory'
      ]
    }
  },
  ui: { l2back: '← Back to engineering', title: 'Robotics: which specialisation?' }
};



L2.robotics.de = {
  questions: [
    {
      t: 'Was interessiert dich an der Robotik am meisten?',
      o: [
        'Mechanik und Elektronik — die physische Hardware: Motoren, Sensoren und Gehäusedesign',
        'Softwaresteuerung — wie ein Roboter sich bewegt, auf Befehle reagiert und mit seiner Umgebung interagiert',
        'Intelligenz — wie ein Roboter die Welt wahrnimmt, Entscheidungen trifft und aus Erfahrung lernt',
        'Forschung — neue Prinzipien entdecken und Ergebnisse veröffentlichen, die das Fachgebiet voranbringen'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: 'Mit welchem Werkzeug würdest du am liebsten arbeiten?',
      o: [
        'SolidWorks / Fusion 360 + Lötkolben — Gehäuse entwerfen und Elektronik von Hand zusammenbauen',
        'ROS2 und Python/C++ — Steuerungsknoten, Bewegungsplaner und Hardware-Treiber schreiben',
        'PyTorch + OpenCV — neuronale Netze trainieren, damit ein Roboter sieht, entscheidet und handelt',
        'MATLAB/Simulink und Fachzeitschriften — modellieren, experimentieren und veröffentlichen'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: 'Welches Projekt inspiriert dich am meisten?',
      o: [
        'Einen Roboterarm von Grund auf bauen — von der Motor-Getriebe-Auswahl bis zur ersten kontrollierten Bewegung',
        'Einen Navigationsstack für einen autonomen mobilen Roboter in einem Lager entwickeln',
        'Einen Roboter trainieren, Objekte zu erkennen und selbstständig zu entscheiden, wie er mit ihnen umgeht',
        'Ein Experiment zu einem neuen Algorithmus durchführen und auf der ICRA oder IROS veröffentlichen'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: 'Wie arbeitest du am liebsten?',
      o: [
        'Mit den Händen — löten, zusammenbauen, Elektronik debuggen und Mechanik physisch testen',
        'Code schreiben — Software in einer IDE entwickeln, testen und refaktorieren',
        'Zwischen Daten und Experimenten — Modelle trainieren, Ergebnisse interpretieren, iterativ verbessern',
        'Im Labor oder auf einer Konferenz — forschen, Ideen diskutieren und Erkenntnisse veröffentlichen'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: 'Wo möchtest du Robotik einsetzen?',
      o: [
        'Industrie — Industriemanipulatoren zum Schweißen, Montieren und Lackieren in Fabriken',
        'Logistik und Lager — autonome AGVs, Sortierdrohnen und Kommissionierroboter',
        'Gesundheitswesen oder Landwirtschaft — chirurgische Roboter, Sprühdrohnen oder Farmautomatisierung',
        'Grundlagenforschung — Weichroboter, Roboterschwärme oder bioinspirierte Fortbewegungssysteme'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: 'Wo siehst du dich in 10 Jahren?',
      o: [
        'Leitender Hardware-Ingenieur bei einem führenden Industrierobotik-Hersteller',
        'Software-Architekt für autonome Robotersysteme in großem Maßstab',
        'Leiter AI/Robotik bei einem großen Technologiekonzern oder einem gut finanzierten Start-up',
        'Professor oder leitender Forscher an einem führenden Robotiklabor'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    }
  ],
  roles: {
    hw_robotics: {
      emoji: '🤖',
      name: 'Hardware-Ingenieur Robotik',
      desc: 'Du entwirfst und baust die physische Seite von Robotern — Mechanik, Elektronik und Sensoren',
      detail: 'Du arbeitest mit dem, was man anfassen kann. Du entwirfst Gehäuse und Aktoren in CAD, wählst Motoren und Getriebe aus, entwickelst Leiterplatten und Stromversorgungssysteme. Du debuggst Elektronik mit Multimeter und Oszilloskop, baust Prototypen und siehst ihnen bei der Bewegung zu. Dein Roboter ist ein echtes Objekt, das in der physischen Welt funktioniert — und wenn etwas schiefläuft, findest du es mit deinen Händen.',
      start: [
        'Lerne Elektronikgrundlagen: Ohmsches Gesetz, I2C, SPI, PWM — ohne sie kann man keinen Roboter bauen',
        'Fange mit Arduino oder STM32 an: einfache Projekte mit Servomotoren und Sensoren für das Grundgefühl',
        'Lerne SolidWorks oder Fusion 360 für den Entwurf mechanischer Bauteile und Gehäuse',
        'Lies "Robot Builders Bonanza" von Gordon McComb — ein praktisches Nachschlagewerk für Hardware-Ingenieure'
      ]
    },
    sw_robotics: {
      emoji: '💻',
      name: 'Robotik-Software-Ingenieur',
      desc: 'Du schreibst Software zur Steuerung von Robotern — Navigation, Bewegungsplanung und Hardware-Treiber',
      detail: 'Du gibst dem Roboter sein Gehirn. Du arbeitest auf dem ROS2 + C++/Python-Stack: du schreibst Steuerungsknoten, Pfadplanungsalgorithmen (A*, RRT), Sensortreiber und Lokalisierungssysteme (SLAM). Du testest Code in der Gazebo-Simulation, bevor du ihn auf echter Hardware einsetzt. Gute Software macht einen Roboter zuverlässig — schlechte Software macht ihn gefährlich.',
      start: [
        'Meistere ROS2 (Robot Operating System) — der De-facto-Standard für alle professionellen Robotersysteme',
        'Lerne C++ auf Modern-C++17-Niveau — Geschwindigkeit und Speicherkontrolle sind in der Echtzeit-Robotik entscheidend',
        'Absolviere einen SLAM-Kurs auf Coursera oder edX — Simultaneous Localisation and Mapping ist grundlegend',
        'Übe im Gazebo Simulator — teste deinen Code ohne das Risiko, echte Hardware zu beschädigen'
      ]
    },
    ai_robotics: {
      emoji: '🧠',
      name: 'KI-Ingenieur in der Robotik',
      desc: 'Du lehrst Roboter zu sehen, zu verstehen und mithilfe von maschinellem Lernen Entscheidungen zu treffen',
      detail: 'Du arbeitest an der Schnittstelle von KI und Robotik. Du trainierst Computer-Vision-Modelle (YOLO, SegFormer), entwickelst Reinforcement-Learning-Algorithmen für die Robotersteuerung und integrierst Sprachmodelle für die Mensch-Roboter-Interaktion. Du arbeitest mit PyTorch, OpenCV und Isaac Lab. Dein Ziel ist ein Roboter, der seine Umgebung wirklich versteht und intelligent darin handelt.',
      start: [
        'Lerne Computer Vision mit OpenCV und PyTorch — Objekterkennung ist das Fundament der KI-Robotik',
        'Studiere Reinforcement Learning: David Silvers YouTube-Kurs + die Stable-Baselines3-Bibliothek',
        'Arbeite mit NVIDIA Isaac Lab oder MuJoCo — die führenden Simulatoren zum Training von Roboterverhalten',
        'Verfolge arXiv/robotics und die Konferenzen ICRA, IROS, CoRL — die besten neuen Arbeiten erscheinen dort zuerst'
      ]
    },
    robotics_researcher: {
      emoji: '🔬',
      name: 'Robotikforscher',
      desc: 'Du entwickelst neue Prinzipien und Algorithmen — und veröffentlichst Ergebnisse, die die Grenzen der Robotik verschieben',
      detail: 'Du arbeitest in einem akademischen oder unternehmerischen Forschungslabor. Du formulierst Hypothesen, entwirfst Experimente, schreibst Prototypen-Code und veröffentlichst Ergebnisse auf führenden Konferenzen und in Fachzeitschriften. Deine Themen können Weichrobotik, Schwarm-Algorithmen, taktile Sensorik oder bioinspirierte Fortbewegung umfassen. Du stehst an der Grenze des Möglichen — und du bestimmst, was als Nächstes kommt.',
      start: [
        'Absolviere einen Master oder eine Promotion in Robotik — eine Forschungskarriere setzt ein Hochschulstudium voraus',
        'Lies regelmäßig Artikel von ICRA, IROS und Science Robotics — bleib an der Forschungsfront',
        'Starte ein eigenes Forschungsprojekt und versuche, ein Workshop-Paper einzureichen — früh veröffentlichen zählt',
        'Finde einen Betreuer mit starkem Publikationsverzeichnis — dein akademischer Mentor prägt deinen gesamten Werdegang'
      ]
    }
  },
  ui: { l2back: '← Zurück zur Ingenieurwissenschaft', title: 'Robotik: welche Spezialisierung?' }
};

L2.robotics.fr = {
  questions: [
    {
      t: 'Qu\'est-ce qui t\'intéresse le plus dans la robotique ?',
      o: [
        'La mécanique et l\'électronique — le matériel physique : moteurs, capteurs et conception du châssis',
        'Le contrôle logiciel — comment un robot se déplace, répond aux commandes et interagit avec son environnement',
        'L\'intelligence — comment un robot perçoit le monde, prend des décisions et apprend de son expérience',
        'La recherche — découvrir de nouveaux principes et publier des résultats qui font avancer le domaine'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: 'Avec quel outil aimerais-tu le plus travailler ?',
      o: [
        'SolidWorks / Fusion 360 + un fer à souder — concevoir des boîtiers et assembler de l\'électronique à la main',
        'ROS2 et Python/C++ — écrire des nœuds de contrôle, des planificateurs de mouvement et des pilotes matériels',
        'PyTorch + OpenCV — entraîner des réseaux de neurones pour voir, décider et contrôler un robot',
        'MATLAB/Simulink et des revues académiques — modéliser, expérimenter et publier'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: 'Quel projet t\'inspire le plus ?',
      o: [
        'Construire un bras robotique de zéro — du choix moteur-réducteur jusqu\'au premier mouvement contrôlé',
        'Développer une pile de navigation pour un robot mobile autonome dans un entrepôt',
        'Entraîner un robot à reconnaître des objets et à décider indépendamment comment les manipuler',
        'Mener une expérience sur un nouvel algorithme et publier à l\'ICRA ou à l\'IROS'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: 'Comment préfères-tu travailler ?',
      o: [
        'Avec les mains — souder, assembler, déboguer de l\'électronique et tester de la mécanique physiquement',
        'Écrire du code — développer, tester et refactoriser des logiciels dans un IDE',
        'Entre données et expériences — entraîner des modèles, interpréter les résultats, itérer pour s\'améliorer',
        'En laboratoire ou lors d\'une conférence — faire de la recherche, discuter d\'idées et publier des résultats'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: 'Où veux-tu appliquer la robotique ?',
      o: [
        'Industrie — manipulateurs industriels pour la soudure, l\'assemblage et la peinture en usine',
        'Logistique et entrepôts — AGV autonomes, drones de tri et robots de préparation de commandes',
        'Santé ou agriculture — robots chirurgicaux, drones de pulvérisation ou automatisation agricole',
        'Recherche fondamentale — robotique souple, essaims de robots ou systèmes de locomotion bio-inspirés'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: 'Où te vois-tu dans 10 ans ?',
      o: [
        'Ingénieur matériel principal chez un grand fabricant de robots industriels',
        'Architecte logiciel pour des systèmes robotiques autonomes à grande échelle',
        'Responsable IA/Robotique dans une grande entreprise technologique ou une start-up bien financée',
        'Professeur ou chercheur senior dans un laboratoire de robotique de premier plan'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    }
  ],
  roles: {
    hw_robotics: {
      emoji: '🤖',
      name: 'Ingénieur matériel en robotique',
      desc: 'Tu conçois et construis la partie physique des robots — mécanique, électronique et capteurs',
      detail: 'Tu travailles avec ce que tu peux toucher. Tu conçois des châssis et des actionneurs en CAO, tu sélectionnes des moteurs et des réducteurs, tu développes des circuits imprimés et des systèmes d\'alimentation. Tu débogues l\'électronique avec un multimètre et un oscilloscope, tu assembles des prototypes et tu les regardes se déplacer. Ton robot est un objet réel qui fonctionne dans le monde physique — et quand quelque chose ne va pas, tu le trouves avec tes mains.',
      start: [
        'Apprends les fondamentaux de l\'électronique : loi d\'Ohm, I2C, SPI, PWM — tu ne peux pas construire un robot sans eux',
        'Commence avec Arduino ou STM32 : des projets simples avec des servomoteurs et des capteurs pour développer l\'intuition',
        'Apprends SolidWorks ou Fusion 360 pour concevoir des composants mécaniques et des boîtiers',
        'Lis "Robot Builders Bonanza" de Gordon McComb — un guide pratique de référence pour l\'ingénieur matériel'
      ]
    },
    sw_robotics: {
      emoji: '💻',
      name: 'Ingénieur logiciel en robotique',
      desc: 'Tu écris des logiciels qui contrôlent les robots — navigation, planification de mouvement et pilotes matériels',
      detail: 'Tu donnes au robot son cerveau. Tu travailles sur la pile ROS2 + C++/Python : tu écris des nœuds de contrôle, des algorithmes de planification de chemin (A*, RRT), des pilotes de capteurs et des systèmes de localisation (SLAM). Tu testes le code dans la simulation Gazebo avant de le déployer sur du vrai matériel. Un bon logiciel rend un robot fiable — un mauvais logiciel le rend dangereux.',
      start: [
        'Maîtrise ROS2 (Robot Operating System) — la norme de facto pour tous les systèmes robotiques professionnels',
        'Apprends le C++ au niveau Modern C++17 — la vitesse et le contrôle de la mémoire sont essentiels en robotique temps réel',
        'Suis un cours SLAM sur Coursera ou edX — la Localisation et Cartographie Simultanées est fondamentale',
        'Entraîne-toi dans Gazebo Simulator — teste ton code sans risquer d\'endommager du vrai matériel'
      ]
    },
    ai_robotics: {
      emoji: '🧠',
      name: 'Ingénieur IA en robotique',
      desc: 'Tu apprends aux robots à voir, comprendre et prendre des décisions grâce à l\'apprentissage automatique',
      detail: 'Tu te situes à l\'intersection de l\'IA et de la robotique. Tu entraînes des modèles de vision par ordinateur (YOLO, SegFormer), développes des algorithmes d\'apprentissage par renforcement pour le contrôle de robots, et intègres des modèles de langage pour l\'interaction humain-robot. Tu travailles avec PyTorch, OpenCV et Isaac Lab. Ton objectif est un robot qui comprend véritablement son environnement et agit intelligemment en son sein.',
      start: [
        'Apprends la vision par ordinateur avec OpenCV et PyTorch — la détection d\'objets est la base de la robotique IA',
        'Étudie le Reinforcement Learning : le cours YouTube de David Silver + la bibliothèque Stable-Baselines3',
        'Travaille avec NVIDIA Isaac Lab ou MuJoCo — les simulateurs leaders pour l\'entraînement des comportements robotiques',
        'Suis arXiv/robotics et les conférences ICRA, IROS, CoRL — les meilleures nouvelles recherches y apparaissent en premier'
      ]
    },
    robotics_researcher: {
      emoji: '🔬',
      name: 'Chercheur en robotique',
      desc: 'Tu développes de nouveaux principes et algorithmes — en publiant des résultats qui repoussent les limites de ce que les robots peuvent faire',
      detail: 'Tu travailles dans un laboratoire de recherche académique ou d\'entreprise. Tu formules des hypothèses, conçois des expériences, écris du code de prototype et publies des résultats lors de conférences et dans des revues de premier plan. Tes sujets peuvent inclure la robotique souple, les algorithmes d\'essaim, la détection tactile ou la locomotion bio-inspirée. Tu es à la frontière du possible — et tu définis ce qui vient ensuite.',
      start: [
        'Obtiens un master ou un doctorat en robotique — une carrière de chercheur nécessite des études supérieures',
        'Lis régulièrement des articles de l\'ICRA, de l\'IROS et de Science Robotics — reste à la frontière de la recherche',
        'Lance un projet de recherche personnel et essaie de soumettre un article de workshop — publier tôt compte',
        'Trouve un directeur de thèse avec un bon palmarès de publications — ton mentor académique façonne toute ta trajectoire'
      ]
    }
  },
  ui: { l2back: '← Retour à l\'ingénierie', title: 'Robotique : quelle spécialisation ?' }
};



L2.robotics.es = {
  questions: [
    {
      t: '¿Qué es lo que más te interesa de la robótica?',
      o: [
        'Mecánica y electrónica — el hardware físico: motores, sensores y diseño de chasis',
        'Control por software — cómo un robot se mueve, responde a comandos e interactúa con su entorno',
        'Inteligencia — cómo un robot percibe el mundo, toma decisiones y aprende de la experiencia',
        'Investigación — descubrir nuevos principios y publicar resultados que hacen avanzar el campo'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: '¿Con qué herramienta te gustaría trabajar más?',
      o: [
        'SolidWorks / Fusion 360 + soldador — diseñar carcasas y ensamblar electrónica a mano',
        'ROS2 y Python/C++ — escribir nodos de control, planificadores de movimiento y drivers de hardware',
        'PyTorch + OpenCV — entrenar redes neuronales para que un robot vea, decida y actúe',
        'MATLAB/Simulink y revistas académicas — modelar, experimentar y publicar'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: '¿Qué proyecto te inspira más?',
      o: [
        'Construir un brazo robótico desde cero — desde la selección de motores y reductores hasta el primer movimiento controlado',
        'Desarrollar un stack de navegación para un robot móvil autónomo en un almacén',
        'Entrenar a un robot para reconocer objetos y decidir de forma independiente cómo manejarlos',
        'Ejecutar un experimento sobre un nuevo algoritmo y publicar en ICRA o IROS'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: '¿Cómo prefieres trabajar?',
      o: [
        'Con las manos — soldar, ensamblar, depurar electrónica y probar mecánica físicamente',
        'Escribiendo código — desarrollar, probar y refactorizar software en un IDE',
        'Entre datos y experimentos — entrenar modelos, interpretar resultados, iterar para mejorar',
        'En un laboratorio o en una conferencia — investigar, debatir ideas y publicar hallazgos'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: '¿Dónde quieres aplicar la robótica?',
      o: [
        'Industria — manipuladores industriales para soldadura, ensamblaje y pintura en fábricas',
        'Logística y almacenes — AGV autónomos, drones clasificadores y robots de picking',
        'Salud o agricultura — robots quirúrgicos, drones fumigadores o automatización agrícola',
        'Investigación fundamental — robótica blanda, enjambres de robots o sistemas de locomoción bioinspivados'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: '¿Dónde te ves en 10 años?',
      o: [
        'Ingeniero de hardware líder en un gran fabricante de robots industriales',
        'Arquitecto de software para sistemas robóticos autónomos a escala',
        'Director de IA/Robótica en una gran empresa tecnológica o startup bien financiada',
        'Profesor o investigador senior en un laboratorio de robótica de primer nivel'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    }
  ],
  roles: {
    hw_robotics: {
      emoji: '🤖',
      name: 'Ingeniero de Hardware en Robótica',
      desc: 'Diseñas y construyes la parte física de los robots — mecánica, electrónica y sensores',
      detail: 'Trabajas con lo que puedes tocar. Diseñas chasis y actuadores en CAD, seleccionas motores y reductores, desarrollas PCBs y sistemas de alimentación. Depuras la electrónica con multímetro y osciloscopio, ensamblas prototipos y los ves moverse. Tu robot es un objeto real que funciona en el mundo físico — y cuando algo falla, lo encuentras con tus manos.',
      start: [
        'Aprende los fundamentos de electrónica: ley de Ohm, I2C, SPI, PWM — son imprescindibles para construir cualquier robot',
        'Comienza con Arduino o STM32: proyectos simples con servomotores y sensores para desarrollar intuición',
        'Aprende SolidWorks o Fusion 360 para diseñar componentes mecánicos y carcasas',
        'Lee "Robot Builders Bonanza" de Gordon McComb — una referencia práctica para el ingeniero de hardware'
      ]
    },
    sw_robotics: {
      emoji: '💻',
      name: 'Ingeniero de Software en Robótica',
      desc: 'Escribes software que controla robots — navegación, planificación de movimiento y drivers de hardware',
      detail: 'Le das al robot su cerebro. Trabajas en el stack ROS2 + C++/Python: escribes nodos de control, algoritmos de planificación de rutas (A*, RRT), drivers de sensores y sistemas de localización (SLAM). Pruebas el código en la simulación de Gazebo antes de desplegarlo en hardware real. Un buen software hace que un robot sea confiable — un software malo lo hace peligroso.',
      start: [
        'Domina ROS2 (Robot Operating System) — el estándar de facto para todos los sistemas robóticos profesionales',
        'Aprende C++ a nivel Modern C++17 — la velocidad y el control de memoria son críticos en robótica en tiempo real',
        'Completa un curso de SLAM en Coursera o edX — la Localización y Mapeo Simultáneos es fundamental',
        'Practica en Gazebo Simulator — prueba tu código sin riesgo de dañar hardware real'
      ]
    },
    ai_robotics: {
      emoji: '🧠',
      name: 'Ingeniero de IA en Robótica',
      desc: 'Enseñas a los robots a ver, entender y tomar decisiones usando aprendizaje automático',
      detail: 'Estás en la intersección de la IA y la robótica. Entrenas modelos de visión por computadora (YOLO, SegFormer), desarrollas algoritmos de aprendizaje por refuerzo para el control de robots e integras modelos de lenguaje para la interacción humano-robot. Trabajas con PyTorch, OpenCV e Isaac Lab. Tu objetivo es un robot que comprenda genuinamente su entorno y actúe de forma inteligente en él.',
      start: [
        'Aprende visión por computadora con OpenCV y PyTorch — la detección de objetos es la base de la robótica con IA',
        'Estudia Aprendizaje por Refuerzo: el curso de YouTube de David Silver + la librería Stable-Baselines3',
        'Trabaja con NVIDIA Isaac Lab o MuJoCo — los principales simuladores para entrenar comportamientos robóticos',
        'Sigue arXiv/robotics y las conferencias ICRA, IROS, CoRL — los mejores trabajos nuevos aparecen allí primero'
      ]
    },
    robotics_researcher: {
      emoji: '🔬',
      name: 'Investigador en Robótica',
      desc: 'Desarrollas nuevos principios y algoritmos — publicando resultados que amplían los límites de lo que los robots pueden hacer',
      detail: 'Trabajas en un laboratorio de investigación académico o corporativo. Formulas hipótesis, diseñas experimentos, escribes código de prototipos y publicas resultados en conferencias y revistas de primer nivel. Tus temas pueden incluir robótica blanda, algoritmos de enjambre, sensado táctil o locomoción bioinspivada. Estás en la frontera de lo posible — y tú defines lo que viene después.',
      start: [
        'Completa una maestría o doctorado en robótica — una carrera investigadora requiere estudios de posgrado',
        'Lee regularmente artículos de ICRA, IROS y Science Robotics — mantente en la frontera del conocimiento',
        'Inicia un proyecto de investigación personal e intenta enviar un workshop paper — publicar pronto es importante',
        'Encuentra un asesor con un sólido historial de publicaciones — tu mentor académico moldea toda tu trayectoria'
      ]
    }
  },
  ui: { l2back: '← Volver a ingeniería', title: 'Robótica: ¿qué especialización?' }
};

L2.robotics.pt = {
  questions: [
    {
      t: 'O que mais te interessa na robótica?',
      o: [
        'Mecânica e eletrônica — o hardware físico: motores, sensores e design de chassi',
        'Controle por software — como um robô se move, responde a comandos e interage com o ambiente',
        'Inteligência — como um robô percebe o mundo, toma decisões e aprende com a experiência',
        'Pesquisa — descobrir novos princípios e publicar resultados que fazem avançar a área'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: 'Com qual ferramenta você mais gostaria de trabalhar?',
      o: [
        'SolidWorks / Fusion 360 + ferro de solda — projetar gabinetes e montar eletrônica à mão',
        'ROS2 e Python/C++ — escrever nós de controle, planejadores de movimento e drivers de hardware',
        'PyTorch + OpenCV — treinar redes neurais para que um robô veja, decida e atue',
        'MATLAB/Simulink e revistas acadêmicas — modelar, experimentar e publicar'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: 'Qual projeto te inspira mais?',
      o: [
        'Construir um braço robótico do zero — da seleção de motores e redutores ao primeiro movimento controlado',
        'Desenvolver um stack de navegação para um robô móvel autônomo em um armazém',
        'Treinar um robô para reconhecer objetos e decidir de forma independente como lidar com eles',
        'Executar um experimento sobre um novo algoritmo e publicar no ICRA ou IROS'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: 'Como você prefere trabalhar?',
      o: [
        'Com as mãos — soldar, montar, depurar eletrônica e testar mecânica fisicamente',
        'Escrevendo código — desenvolver, testar e refatorar software em uma IDE',
        'Entre dados e experimentos — treinar modelos, interpretar resultados, iterar para melhorar',
        'Em um laboratório ou conferência — pesquisar, debater ideias e publicar descobertas'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: 'Onde você quer aplicar a robótica?',
      o: [
        'Indústria — manipuladores industriais para soldagem, montagem e pintura em fábricas',
        'Logística e armazéns — AGVs autônomos, drones classificadores e robôs de separação',
        'Saúde ou agricultura — robôs cirúrgicos, drones de pulverização ou automação agrícola',
        'Pesquisa fundamental — robótica mole, enxames de robôs ou sistemas de locomoção bioinspivados'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    },
    {
      t: 'Onde você se vê daqui a 10 anos?',
      o: [
        'Engenheiro de hardware líder em um grande fabricante de robôs industriais',
        'Arquiteto de software para sistemas robóticos autônomos em escala',
        'Chefe de IA/Robótica em uma grande corporação de tecnologia ou startup bem financiada',
        'Professor ou pesquisador sênior em um laboratório de robótica de ponta'
      ],
      s: [{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]
    }
  ],
  roles: {
    hw_robotics: {
      emoji: '🤖',
      name: 'Engenheiro de Hardware em Robótica',
      desc: 'Você projeta e constrói a parte física dos robôs — mecânica, eletrônica e sensores',
      detail: 'Você trabalha com o que pode tocar. Projeta chassis e atuadores em CAD, seleciona motores e redutores, desenvolve PCBs e sistemas de alimentação. Depura a eletrônica com multímetro e osciloscópio, monta protótipos e os vê em movimento. Seu robô é um objeto real que funciona no mundo físico — e quando algo dá errado, você encontra o problema com as mãos.',
      start: [
        'Aprenda os fundamentos de eletrônica: lei de Ohm, I2C, SPI, PWM — são essenciais para construir qualquer robô',
        'Comece com Arduino ou STM32: projetos simples com servomotores e sensores para desenvolver intuição',
        'Aprenda SolidWorks ou Fusion 360 para projetar componentes mecânicos e gabinetes',
        'Leia "Robot Builders Bonanza" de Gordon McComb — um guia prático de referência para o engenheiro de hardware'
      ]
    },
    sw_robotics: {
      emoji: '💻',
      name: 'Engenheiro de Software em Robótica',
      desc: 'Você escreve software que controla robôs — navegação, planejamento de movimento e drivers de hardware',
      detail: 'Você dá ao robô o seu cérebro. Trabalha no stack ROS2 + C++/Python: escreve nós de controle, algoritmos de planejamento de rotas (A*, RRT), drivers de sensores e sistemas de localização (SLAM). Testa o código na simulação Gazebo antes de implantar no hardware real. Um bom software torna um robô confiável — um software ruim o torna perigoso.',
      start: [
        'Domine ROS2 (Robot Operating System) — o padrão de fato para todos os sistemas robóticos profissionais',
        'Aprenda C++ no nível Modern C++17 — velocidade e controle de memória são críticos na robótica em tempo real',
        'Conclua um curso de SLAM no Coursera ou edX — Localização e Mapeamento Simultâneos é fundamental',
        'Pratique no Gazebo Simulator — teste seu código sem risco de danificar hardware real'
      ]
    },
    ai_robotics: {
      emoji: '🧠',
      name: 'Engenheiro de IA em Robótica',
      desc: 'Você ensina robôs a ver, entender e tomar decisões usando aprendizado de máquina',
      detail: 'Você está na interseção entre IA e robótica. Treina modelos de visão computacional (YOLO, SegFormer), desenvolve algoritmos de aprendizado por reforço para controle de robôs e integra modelos de linguagem para interação humano-robô. Trabalha com PyTorch, OpenCV e Isaac Lab. Seu objetivo é um robô que genuinamente compreenda seu ambiente e aja de forma inteligente nele.',
      start: [
        'Aprenda visão computacional com OpenCV e PyTorch — detecção de objetos é a base da robótica com IA',
        'Estude Aprendizado por Reforço: o curso do YouTube de David Silver + a biblioteca Stable-Baselines3',
        'Trabalhe com NVIDIA Isaac Lab ou MuJoCo — os principais simuladores para treinar comportamentos robóticos',
        'Acompanhe arXiv/robotics e as conferências ICRA, IROS, CoRL — os melhores trabalhos novos aparecem lá primeiro'
      ]
    },
    robotics_researcher: {
      emoji: '🔬',
      name: 'Pesquisador em Robótica',
      desc: 'Você desenvolve novos princípios e algoritmos — publicando resultados que ampliam os limites do que os robôs podem fazer',
      detail: 'Você trabalha em um laboratório de pesquisa acadêmico ou corporativo. Formula hipóteses, projeta experimentos, escreve código de protótipos e publica resultados em conferências e periódicos de ponta. Seus temas podem incluir robótica mole, algoritmos de enxame, sensoriamento tátil ou locomoção bioinspivada. Você está na fronteira do possível — e define o que vem a seguir.',
      start: [
        'Conclua um mestrado ou doutorado em robótica — uma carreira de pesquisa requer pós-graduação',
        'Leia regularmente artigos do ICRA, IROS e Science Robotics — mantenha-se na fronteira do conhecimento',
        'Inicie um projeto de pesquisa pessoal e tente submeter um workshop paper — publicar cedo é importante',
        'Encontre um orientador com um forte histórico de publicações — seu mentor acadêmico molda toda a sua trajetória'
      ]
    }
  },
  ui: { l2back: '← Voltar à engenharia', title: 'Robótica: qual especialização?' }
};

L2.robotics.ar = {
  questions: [
    { t:"أيّ جانب من الروبوتيكا يستهويك أكثر؟", o:["تصميم الأجزاء الميكانيكية والهياكل المادية للروبوتات","برمجة الروبوتات وتطوير أنظمة التحكم","تطوير خوارزميات الذكاء الاصطناعي وتعلم الآلة للروبوتات","إجراء أبحاث علمية أكاديمية في مجال الروبوتيكا المتقدمة"], s:[{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}] },
    { t:"أيّ أداة تودّ إتقانها؟", o:["SolidWorks وتصميم الدوائر والمحاكاة الميكانيكية","ROS وC++ وPython لبرمجة الروبوتات والتحكم","TensorFlow وPyTorch وخوارزميات التعلم المعزز","MATLAB وSimulink والأدوات الأكاديمية للبحث"], s:[{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}] },
    { t:"أيّ نتيجة تُشعرك بالرضا أكثر؟", o:["رؤية روبوت صممت جسده يتحرك بسلاسة في الواقع","برمجة مهمة معقدة للروبوت وتنفيذها بدقة تامة","روبوت يتعلم مهارة جديدة تلقائياً بفضل خوارزميتك","نشر ورقة بحثية تُحدث أثراً في مجتمع الروبوتيكا"], s:[{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}] },
    { t:"أين تُفضّل العمل؟", o:["في شركة تصنيع روبوتات لتطوير الأجهزة الجديدة","في فريق برمجيات يطور تطبيقات الروبوتات","في شركة تقنية تطبّق الذكاء الاصطناعي على الروبوتات","في جامعة أو مختبر بحثي لتطوير جيل جديد من الروبوتات"], s:[{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}] },
    { t:"أيّ مهمة أقرب إليك؟", o:["تصميم ذراع آلية مفصلية قوية وخفيفة الوزن","كتابة كود التحكم في حركة روبوت متعدد المفاصل","تدريب روبوت على أداء مهمة معقدة بتعلم الآلة","تحليل ورقة بحثية جديدة وتطبيق أفكارها في مشروع"], s:[{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}] },
    { t:"أين ترى نفسك بعد عشر سنوات؟", o:["مهندس أجهزة أول يصمم روبوتات من الجيل القادم","مهندس برمجيات أول يقود فريق تطوير الروبوتات","عالم بيانات متخصص في ذكاء الروبوتات","أستاذ وباحث في روبوتيكا الجيل القادم"], s:[{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}] },
  ],
  roles: {
    hw_robotics:{ emoji:"🤖", name:"مهندس أجهزة روبوتات", desc:"تُصمّم وتبني الأجزاء الميكانيكية والكهربائية للروبوتات", detail:"تعمل مع الأجهزة المادية.", start:["أتقن CAD وتصميم الروبوتات الميكانيكي","تعلّم الإلكترونيات والأنظمة المدمجة","تدرّب على تجميع وإصلاح الروبوتات","احصل على شهادة في الهندسة الميكاترونية"] },
    sw_robotics:{ emoji:"💻", name:"مهندس برمجيات روبوتات", desc:"تُطوّر الأكواد والأنظمة التي تتحكم في الروبوتات", detail:"تعمل مع ROS والأنظمة الآنية.", start:["أتقن ROS وC++","تعلّم التحكم في الأنظمة وتخطيط المسار","تدرّب على مشاريع روبوتيكا حقيقية","احصل على شهادة في علوم الحاسوب أو الهندسة"] },
    ai_robotics:{ emoji:"🧠", name:"مهندس ذكاء اصطناعي للروبوتات", desc:"تُطوّر خوارزميات تجعل الروبوتات تتعلم وتتكيف", detail:"تعمل عند تقاطع الذكاء الاصطناعي والروبوتات.", start:["تعلّم التعلم المعزز ورؤية الحاسوب","أتقن PyTorch أو TensorFlow","ادرس خوارزميات التخطيط والإدراك","احصل على درجة علمية في الذكاء الاصطناعي أو الروبوتيكا"] },
    robotics_researcher:{ emoji:"🔬", name:"باحث في الروبوتيكا", desc:"تُجري أبحاثاً أكاديمية لتطوير الجيل القادم من الروبوتات", detail:"تعمل في الجامعات والمختبرات.", start:["احصل على الماجستير أو الدكتوراه في الروبوتيكا","تعلّم مناهج البحث العلمي والنشر الأكاديمي","تعاون مع مختبرات روبوتيكا بارزة","شارك في مؤتمرات IROS وICRA"] },
  },
  ui:{ l2back:"← العودة إلى الهندسة", title:"الروبوتيكا: ما التخصص؟" }
};

L2.robotics.he = {
  questions: [
    { t:"מה הצד שהכי מעניין אותך ברובוטיקה?", o:["תכנון חלקים מכניים ומבנים פיזיים של רובוטים","תכנות רובוטים ופיתוח מערכות שליטה","פיתוח אלגוריתמי AI ולמידת מכונה לרובוטים","ביצוע מחקר אקדמי ברובוטיקה מתקדמת"], s:[{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}] },
    { t:"איזה כלי הכי תרצה לשלוט בו?", o:["SolidWorks וסימולציה מכנית","ROS, C++ ו-Python לרובוטים","TensorFlow, PyTorch ולמידה מחוזקת","MATLAB, Simulink וכלים אקדמיים"], s:[{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}] },
    { t:"איזה תוצאה הכי ממלאת אותך סיפוק?", o:["לראות רובוט שעיצבת נע בחלקות","תכנות משימה מורכבת לרובוט בדיוק מלא","רובוט שלומד מיומנות אוטומטית בזכות האלגוריתם שלך","פרסום מאמר שמשפיע על קהילת הרובוטיקה"], s:[{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}] },
    { t:"איפה אתה מעדיף לעבוד?", o:["בחברת ייצור רובוטים לפיתוח חומרה","בצוות תוכנה לפיתוח אפליקציות רובוטיות","בחברת טכנולוגיה ליישום AI על רובוטים","באוניברסיטה למחקר"], s:[{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}] },
    { t:"איזה משימה הכי קרובה ללב שלך?", o:["עיצוב זרוע מפרקית קלת משקל","כתיבת קוד שליטה בתנועת רובוט","אימון רובוט על משימה ב-ML","ניתוח מאמר מחקרי ויישום רעיונותיו"], s:[{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}] },
    { t:"איפה אתה רואה את עצמך עוד 10 שנים?", o:["מהנדס חומרה בכיר","מהנדס תוכנה בכיר לרובוטים","מדען נתונים לAI רובוטי","פרופסור ומחקר ברובוטיקה"], s:[{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}] },
  ],
  roles: {
    hw_robotics:{ emoji:"🤖", name:"מהנדס חומרה רובוטית", desc:"אתה מתכנן ובונה חלקים מכניים וחשמליים", detail:"אתה עובד עם חומרה פיזית.", start:["שלוט ב-CAD ועיצוב מכני","למד אלקטרוניקה ומערכות משובצות","התמחה בהרכבה ותיקון רובוטים","קבל תואר במכניקה-אלקטרוניקה"] },
    sw_robotics:{ emoji:"💻", name:"מהנדס תוכנה רובוטית", desc:"אתה מפתח קוד שמשלט ברובוטים", detail:"אתה עובד עם ROS.", start:["שלוט ב-ROS ו-C++","למד בקרת מערכות ותכנון נתיבים","התמחה בפרויקטי רובוטיקה","קבל תואר במדעי המחשב"] },
    ai_robotics:{ emoji:"🧠", name:"מהנדס AI לרובוטיקה", desc:"אתה מפתח אלגוריתמים שגורמים לרובוטים ללמוד", detail:"אתה עובד בצומת AI ורובוטיקה.", start:["למד למידה מחוזקת וראיית מחשב","שלוט ב-PyTorch","למד אלגוריתמי תכנון ותפיסה","קבל תואר ב-AI או רובוטיקה"] },
    robotics_researcher:{ emoji:"🔬", name:"חוקר רובוטיקה", desc:"אתה מבצע מחקר לפיתוח הדור הבא", detail:"אתה עובד באוניברסיטאות.", start:["קבל תואר שני-שלישי ברובוטיקה","למד מתודולוגיות מחקר","שתף פעולה עם מעבדות מובילות","השתתף ב-IROS ו-ICRA"] },
  },
  ui:{ l2back:"← חזרה להנדסה", title:"רובוטיקה: איזה התמחות?" }
};

L2.robotics.zh = {
  questions: [
    {t:'机器人技术中什么最吸引你？', o:['硬件机器人——设计机械结构和传动系统','软件与控制——让机器人"动得对"','AI与感知——让机器人"看懂世界"','机器人研究——探索机器人技术的边界'], s:[{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]},
    {t:'你最想精通哪个技术方向？', o:['SolidWorks机械设计和运动学仿真','ROS机器人操作系统和控制算法','计算机视觉、SLAM和深度学习感知','强化学习、运动规划和前沿算法研究'], s:[{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]},
    {t:'什么成果最让你有成就感？', o:['你设计的机械臂完美执行了既定的动作序列','机器人用你写的代码学会了自主导航','机器人通过你训练的视觉模型识别并抓取了未知物体','你的研究论文被顶级机器人会议收录'], s:[{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]},
    {t:'你更喜欢哪种工作？', o:['设计机械结构，做运动学计算，选型执行器','写ROS节点，调整PID参数，实现运动控制','训练视觉模型，做目标检测和位姿估计','阅读前沿论文，复现算法，提出新方法'], s:[{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]},
    {t:'你会选择哪个项目？', o:['设计一款六轴协作机器人的机械本体','为一台移动机器人实现室内自主导航','让机器人通过视觉识别并分拣不同颜色的零件','研究机器人在非结构化环境中的稳定抓取算法'], s:[{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]},
    {t:'10年后你在哪里？', o:['人形机器人公司的首席机械工程师','工业机器人公司的控制系统总工','具身智能创业公司的感知算法负责人','卡内基梅隆或MIT机器人研究所的教授'], s:[{hw_robotics:3},{sw_robotics:3},{ai_robotics:3},{robotics_researcher:3}]}
  ],
  roles: {
    hw_robotics: {emoji:'🤖', name:'机器人机械工程师', desc:'设计机器人的物理身体——关节、连杆、传动和执行器', detail:'你决定机器人"长什么样"以及"能做什么动作"。你做运动学分析，设计机械结构，选择电机和减速器，确保机器人在物理上能实现设计目标。', start:['学习机器人学基础——D-H参数法和运动学','精通SolidWorks或CATIA——机器人本体设计','了解执行器选型——步进电机、伺服电机、液压系统','用低成本机械臂套件（如MechArm）实践']},
    sw_robotics: {emoji:'💻', name:'机器人软件/控制工程师', desc:'让机器人按照期望的轨迹运动，实现精确可靠的控制', detail:'你让机械结构"活起来"。你用ROS构建控制架构，实现运动规划、轨迹跟踪和多自由度协调控制。你的代码决定机器人动作是否流畅和精准。', start:['学习ROS（机器人操作系统）——从官方教程开始','掌握Python和C++——机器人软件开发的主要语言','了解控制理论基础——PID、状态空间控制','在Gazebo仿真环境中实践']}  ,
    ai_robotics: {emoji:'👁️', name:'机器人感知/AI工程师', desc:'让机器人通过视觉和传感器理解环境，做出智能决策', detail:'你赋予机器人"眼睛和大脑"。你实现目标检测、3D位姿估计、SLAM建图定位等功能，让机器人能在复杂环境中感知世界并做出正确反应。', start:['学习计算机视觉基础——OpenCV','掌握深度学习感知——YOLO、PointNet','了解SLAM算法——ORB-SLAM、RTAB-Map','配置ROS + 深度相机的实验环境']},
    robotics_researcher: {emoji:'🔬', name:'机器人学研究员', desc:'探索机器人技术的边界，发明让机器人更聪明、更灵巧的新方法', detail:'你在研究还没有答案的问题。你研究新的运动规划算法、学习策略或机器人交互方式，你的成果可能在5年后成为产业界的标准方法。', start:['深入学习机器人学经典教材——Siciliano《机器人建模、规划与控制》','掌握强化学习——在仿真环境中训练机器人策略','了解机器人顶级会议——ICRA、IROS、CoRL','争取进入顶级机器人实验室的研究组']}
  },
  ui: {l2back:'← 返回机器人', title:'机器人技术：选择你的专业方向'}
};
