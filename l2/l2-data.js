// ─── L2 Test: Data ─────────────────────────────────────────────────
// Data / ML — Roles: analyst | ml | engineer | scientist
// Add a new language: L2.data.xx = { questions:[...], roles:{...} }

L2.data.ru = {
    questions: [
      {t:'Что тебя привлекает в Data Science больше всего?', o:[
        'Находить скрытые закономерности в данных и превращать их в понятные выводы для бизнеса',
        'Обучать нейросети и делать модели которые умнее с каждой итерацией',
        'Строить надёжные пайплайны которые доставляют чистые данные куда нужно',
        'Исследовать передовые алгоритмы и публиковать результаты как в научной статье'
      ], s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
      {t:'Что из этого ты готов делать часами?', o:[
        'Строить дашборды в Tableau или Looker и объяснять метрики стейкхолдерам',
        'Подбирать гиперпараметры, сравнивать модели и следить за метриками качества',
        'Проектировать схему базы данных и оптимизировать SQL-запросы',
        'Читать статьи с arxiv и реализовывать новые архитектуры нейросетей'
      ], s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
      {t:'Какой проект звучит круче всего?', o:[
        'Дашборд который помогает CEO принимать решения на основе данных в реальном времени',
        'Рекомендательная система как у Netflix или система распознавания лиц',
        'Data Platform — надёжная инфраструктура обработки терабайт данных в день',
        'Новая архитектура трансформера которая бьёт SOTA на известном бенчмарке'
      ], s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
      {t:'Какой инструмент хочешь освоить в первую очередь?', o:[
        'Power BI / Tableau — для красивых и понятных визуализаций',
        'PyTorch или TensorFlow — для обучения нейросетей',
        'Apache Spark или Airflow — для обработки больших данных',
        'Hugging Face + CUDA — для работы с большими языковыми моделями'
      ], s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
      {t:'Что тебя раздражает больше всего?', o:[
        'Когда данные есть, но никто не умеет их читать и все решают на интуиции',
        'Когда модель отлично работает на тестовых данных но падает в продакшне',
        'Когда данные грязные и разбросаны по десяткам несвязанных источников',
        'Когда используют устаревшие алгоритмы и не следят за новыми исследованиями'
      ], s:[{analyst:2},{ml:2},{engineer:2},{research:2}]},
      {t:'Через 3 года ты хочешь...', o:[
        'Быть Data Analyst в крупной компании и влиять на бизнес-решения через данные',
        'Деплоить ML-модели в продакшн и видеть как они реально работают для миллионов',
        'Строить data-инфраструктуру которая не ломается и масштабируется без проблем',
        'Работать в исследовательской лаборатории и двигать вперёд науку об ИИ'
      ], s:[{analyst:3},{ml:3},{engineer:3},{research:3}]}
    ],
    roles: {
      analyst: {
        emoji:'📊', name:'Data Analyst',
        desc:'Находит смысл в данных и помогает бизнесу принимать правильные решения.',
        detail:'Data Analyst — мост между сырыми данными и бизнес-решениями. Ты пишешь SQL-запросы, строишь дашборды в Tableau или Power BI, проводишь A/B тесты и объясняешь метрики команде. Не нужно знать глубокий ML — важнее понимать бизнес и уметь рассказывать историю через данные. Это одна из самых востребованных и хорошо оплачиваемых профессий во всех отраслях.',
        start:['SQL — sqlbolt.com (бесплатно, интерактивно)','Kaggle Learn: Intro to Data Analysis — kaggle.com/learn','Tableau Public (бесплатно) — public.tableau.com'],
        startUrls:['https://sqlbolt.com','https://www.kaggle.com/learn','https://public.tableau.com']
      },
      ml: {
        emoji:'🤖', name:'ML-инженер',
        desc:'Строит, обучает и запускает в продакшн модели машинного обучения.',
        detail:'ML-инженер — это пересечение науки о данных и разработки. Ты не просто обучаешь модели в ноутбуке, а деплоишь их в продакшн: API, мониторинг дрейфа данных, переобучение. Нужно знать Python, sklearn, PyTorch или TensorFlow, а также основы MLOps. Одна рабочая модель в продакшне стоит дороже сотни экспериментов в Jupyter.',
        start:['fast.ai (лучший практический курс по ML) — fast.ai','Scikit-learn документация — scikit-learn.org','MLflow для отслеживания экспериментов — mlflow.org'],
        startUrls:['https://fast.ai','https://scikit-learn.org','https://mlflow.org']
      },
      engineer: {
        emoji:'🔧', name:'Data Engineer',
        desc:'Строит инфраструктуру которая собирает, хранит и доставляет данные надёжно и быстро.',
        detail:'Data Engineer — невидимый герой мира данных. Без тебя Data Scientist просто не получит данные для работы. Ты проектируешь ETL-пайплайны, работаешь с Kafka, Spark, Airflow, строишь Data Warehouse. Это более инженерная роль чем аналитическая — ближе к backend-разработке, но вокруг данных. Очень высокооплачиваемая специализация.',
        start:['Data Engineering Zoomcamp — github.com/DataTalksClub/data-engineering-zoomcamp','Apache Airflow — airflow.apache.org','dbt (трансформации данных) — getdbt.com'],
        startUrls:['https://github.com/DataTalksClub/data-engineering-zoomcamp','https://airflow.apache.org','https://www.getdbt.com']
      },
      research: {
        emoji:'🧠', name:'AI Research Scientist',
        desc:'Исследует передовые алгоритмы ИИ и двигает науку вперёд.',
        detail:'AI Research Scientist — это академическая и индустриальная наука на переднем крае. Ты читаешь и реализуешь статьи с arxiv, разрабатываешь новые архитектуры (трансформеры, диффузионные модели, RL), работаешь в таких командах как DeepMind, OpenAI или Яндекс Исследования. Нужны глубокое знание математики (линейная алгебра, теорвер, матан), Python и PyTorch. Это самая сложная и самая влиятельная роль в AI.',
        start:['Deep Learning Specialization (Andrew Ng) — coursera.org','arxiv.org — читай свежие статьи по AI каждый день','PyTorch Tutorials — pytorch.org/tutorials'],
        startUrls:['https://www.coursera.org/specializations/deep-learning','https://arxiv.org/list/cs.LG/recent','https://pytorch.org/tutorials']
      }
    }
  };

L2.data.en = {
    questions: [
      {t:'What attracts you most about Data Science?', o:[
        'Finding hidden patterns in data and turning them into clear business insights',
        'Training neural networks and building models that get smarter with every iteration',
        'Building reliable pipelines that deliver clean data exactly where it is needed',
        'Exploring cutting-edge algorithms and publishing results like a research paper'
      ], s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
      {t:'What could you spend hours doing?', o:[
        'Building dashboards in Tableau or Looker and explaining metrics to stakeholders',
        'Tuning hyperparameters, comparing models and tracking performance metrics',
        'Designing database schemas and optimizing SQL queries',
        'Reading arxiv papers and implementing new neural network architectures'
      ], s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
      {t:'Which project sounds most exciting?', o:[
        'A dashboard that helps a CEO make data-driven decisions in real time',
        'A recommendation system like Netflix or a facial recognition system',
        'A Data Platform — reliable infrastructure processing terabytes of data per day',
        'A new transformer architecture that beats SOTA on a well-known benchmark'
      ], s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
      {t:'Which tool do you want to master first?', o:[
        'Power BI or Tableau — for beautiful and clear visualizations',
        'PyTorch or TensorFlow — for training neural networks',
        'Apache Spark or Airflow — for large-scale data processing',
        'Hugging Face + CUDA — for working with large language models'
      ], s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
      {t:'What annoys you the most?', o:[
        'When data exists but nobody can read it and everyone decides on gut feeling',
        'When a model performs great on test data but fails in production',
        'When data is messy and scattered across dozens of unconnected sources',
        'When people use outdated algorithms and ignore the latest research'
      ], s:[{analyst:2},{ml:2},{engineer:2},{research:2}]},
      {t:'In 3 years you want to...', o:[
        'Be a Data Analyst at a top company, influencing business decisions through data',
        'Deploy ML models to production and watch them work for millions of real users',
        'Build data infrastructure that scales effortlessly and never breaks',
        'Work at a research lab and push the frontier of AI science forward'
      ], s:[{analyst:3},{ml:3},{engineer:3},{research:3}]}
    ],
    roles: {
      analyst: {
        emoji:'📊', name:'Data Analyst',
        desc:'Finds meaning in data and helps businesses make the right decisions.',
        detail:'A Data Analyst is the bridge between raw data and business decisions. You write SQL queries, build dashboards in Tableau or Power BI, run A/B tests and explain metrics to the team. Deep ML knowledge is not required — what matters more is understanding the business and telling a clear story through data. This is one of the most in-demand and well-paid roles across all industries.',
        start:['SQL — sqlbolt.com (free, interactive)','Kaggle Learn: Intro to Data Analysis — kaggle.com/learn','Tableau Public (free) — public.tableau.com'],
        startUrls:['https://sqlbolt.com','https://www.kaggle.com/learn','https://public.tableau.com']
      },
      ml: {
        emoji:'🤖', name:'ML Engineer',
        desc:'Builds, trains and ships machine learning models to production.',
        detail:'An ML Engineer sits at the intersection of data science and software engineering. You do not just train models in a notebook — you deploy them to production: REST APIs, data drift monitoring, retraining pipelines. You need Python, sklearn, PyTorch or TensorFlow, and MLOps basics. One working model in production is worth more than a hundred notebook experiments.',
        start:['fast.ai (best practical ML course) — fast.ai','Scikit-learn documentation — scikit-learn.org','MLflow for experiment tracking — mlflow.org'],
        startUrls:['https://fast.ai','https://scikit-learn.org','https://mlflow.org']
      },
      engineer: {
        emoji:'🔧', name:'Data Engineer',
        desc:'Builds the infrastructure that collects, stores and delivers data reliably and fast.',
        detail:'A Data Engineer is the invisible hero of the data world. Without you, a Data Scientist simply gets no data to work with. You design ETL pipelines, work with Kafka, Spark and Airflow, and build Data Warehouses. This role is more engineering than analytical — closer to backend development but centred on data. It is one of the highest-paid specializations in the field.',
        start:['Data Engineering Zoomcamp — github.com/DataTalksClub/data-engineering-zoomcamp','Apache Airflow — airflow.apache.org','dbt (data transformations) — getdbt.com'],
        startUrls:['https://github.com/DataTalksClub/data-engineering-zoomcamp','https://airflow.apache.org','https://www.getdbt.com']
      },
      research: {
        emoji:'🧠', name:'AI Research Scientist',
        desc:'Explores cutting-edge AI algorithms and advances the state of the science.',
        detail:'An AI Research Scientist works at the frontier — in academia or industry labs. You read and implement papers from arxiv, develop new architectures (transformers, diffusion models, RL), and work in teams like DeepMind, OpenAI or Google Brain. You need deep mathematics (linear algebra, probability, calculus), Python and PyTorch. This is the hardest and most impactful role in AI.',
        start:['Deep Learning Specialization (Andrew Ng) — coursera.org','arxiv.org — read fresh AI papers every day','PyTorch Tutorials — pytorch.org/tutorials'],
        startUrls:['https://www.coursera.org/specializations/deep-learning','https://arxiv.org/list/cs.LG/recent','https://pytorch.org/tutorials']
      }
    }
  };

L2.data.de = {questions:[
    {t:'Was zieht dich in Data Science am meisten an?',o:['Versteckte Muster in Daten finden und in klare Business-Insights verwandeln','Neuronale Netze trainieren und Modelle bauen die mit jeder Iteration klüger werden','Zuverlässige Pipelines bauen die saubere Daten genau dorthin liefern wo sie gebraucht werden','Modernste Algorithmen erforschen und Ergebnisse wie in einem Forschungspapier veröffentlichen'],s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
    {t:'Was könntest du stundenlang machen?',o:['Dashboards in Tableau oder Looker bauen und Kennzahlen erklären','Hyperparameter tunen, Modelle vergleichen und Performance-Metriken verfolgen','Datenbankschemas entwerfen und SQL-Abfragen optimieren','Arxiv-Paper lesen und neue neuronale Netzwerk-Architekturen implementieren'],s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
    {t:'Welches Projekt klingt am spannendsten?',o:['Ein Dashboard das dem CEO hilft Entscheidungen in Echtzeit auf Basis von Daten zu treffen','Ein Empfehlungssystem wie Netflix oder ein Gesichtserkennungssystem','Eine Data Platform — zuverlässige Infrastruktur für Terabytes täglich','Eine neue Transformer-Architektur die SOTA auf einem bekannten Benchmark schlägt'],s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
    {t:'Welches Tool möchtest du zuerst meistern?',o:['Power BI oder Tableau — für schöne und klare Visualisierungen','PyTorch oder TensorFlow — für das Training neuronaler Netze','Apache Spark oder Airflow — für groß angelegte Datenverarbeitung','Hugging Face + CUDA — für die Arbeit mit großen Sprachmodellen'],s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
    {t:'Was nervt dich am meisten?',o:['Wenn Daten vorhanden sind aber niemand sie lesen kann und alle auf Bauchgefühl entscheiden','Wenn ein Modell bei Testdaten super funktioniert aber in Production versagt','Wenn Daten chaotisch über Dutzende unverbundene Quellen verstreut sind','Wenn veraltete Algorithmen verwendet werden und aktuelle Forschung ignoriert wird'],s:[{analyst:2},{ml:2},{engineer:2},{research:2}]},
    {t:'In 3 Jahren möchtest du...',o:['Data Analyst bei einem Top-Unternehmen sein und Business-Entscheidungen durch Daten beeinflussen','ML-Modelle in Production deployen und sie für Millionen echter Nutzer arbeiten sehen','Daten-Infrastruktur aufbauen die mühelos skaliert und nie zusammenbricht','In einem Forschungslabor arbeiten und die KI-Wissenschaft voranbringen'],s:[{analyst:3},{ml:3},{engineer:3},{research:3}]}
  ],roles:{
    analyst:{emoji:'📊',name:'Data Analyst',desc:'Findet Sinn in Daten und hilft Unternehmen die richtigen Entscheidungen zu treffen.',detail:'Ein Data Analyst ist die Brücke zwischen Rohdaten und Business-Entscheidungen. Du schreibst SQL-Abfragen, baust Dashboards in Tableau oder Power BI, führst A/B-Tests durch und erklärst Kennzahlen. Tiefes ML-Wissen ist nicht nötig — wichtiger ist das Verständnis des Business.',start:['SQL — sqlbolt.com (kostenlos, interaktiv)','Kaggle Learn — kaggle.com/learn','Tableau Public (kostenlos) — public.tableau.com'],startUrls:['https://sqlbolt.com','https://www.kaggle.com/learn','https://public.tableau.com']},
    ml:{emoji:'🤖',name:'ML Engineer',desc:'Baut, trainiert und deployed Machine Learning Modelle in Production.',detail:'Ein ML Engineer sitzt an der Schnittstelle von Data Science und Software Engineering. Du trainierst nicht nur Modelle — du deployest sie in Production: APIs, Data Drift Monitoring, Retraining-Pipelines. Python, sklearn, PyTorch und MLOps-Grundlagen sind Pflicht.',start:['fast.ai (bester praktischer ML-Kurs) — fast.ai','Scikit-learn Dokumentation — scikit-learn.org','MLflow für Experiment-Tracking — mlflow.org'],startUrls:['https://fast.ai','https://scikit-learn.org','https://mlflow.org']},
    engineer:{emoji:'🔧',name:'Data Engineer',desc:'Baut die Infrastruktur die Daten zuverlässig und schnell sammelt, speichert und liefert.',detail:'Ein Data Engineer ist der unsichtbare Held der Datenwelt. Ohne dich bekommt ein Data Scientist einfach keine Daten. Du entwirfst ETL-Pipelines, arbeitest mit Kafka, Spark und Airflow und baust Data Warehouses. Eine der höchstbezahlten Spezialisierungen.',start:['Data Engineering Zoomcamp — github.com/DataTalksClub/data-engineering-zoomcamp','Apache Airflow — airflow.apache.org','dbt — getdbt.com'],startUrls:['https://github.com/DataTalksClub/data-engineering-zoomcamp','https://airflow.apache.org','https://www.getdbt.com']},
    research:{emoji:'🧠',name:'AI Research Scientist',desc:'Erforscht modernste KI-Algorithmen und treibt die Wissenschaft voran.',detail:'Ein AI Research Scientist arbeitet an der Front — in der Wissenschaft oder Industrie-Labs. Du liest und implementierst Arxiv-Paper, entwickelst neue Architekturen und arbeitest in Teams wie DeepMind oder OpenAI. Tiefe Mathematik, Python und PyTorch sind Pflicht.',start:['Deep Learning Specialization (Andrew Ng) — coursera.org','arxiv.org — täglich neue KI-Paper lesen','PyTorch Tutorials — pytorch.org/tutorials'],startUrls:['https://www.coursera.org/specializations/deep-learning','https://arxiv.org/list/cs.LG/recent','https://pytorch.org/tutorials']}
  }};

L2.data.fr = {questions:[
    {t:'Qu\'est-ce qui t\'attire le plus dans la Data Science ?',o:['Trouver des modèles cachés dans les données et les transformer en insights business clairs','Entraîner des réseaux de neurones et construire des modèles qui s\'améliorent','Construire des pipelines fiables qui livrent des données propres exactement où il le faut','Explorer des algorithmes de pointe et publier des résultats comme un article de recherche'],s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
    {t:'Que pourrais-tu faire pendant des heures ?',o:['Construire des dashboards dans Tableau ou Looker et expliquer les métriques','Régler les hyperparamètres, comparer des modèles et suivre les performances','Concevoir des schémas de base de données et optimiser les requêtes SQL','Lire des articles d\'arxiv et implémenter de nouvelles architectures de réseaux neuronaux'],s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
    {t:'Quel projet te semble le plus passionnant ?',o:['Un dashboard qui aide le PDG à prendre des décisions basées sur les données en temps réel','Un système de recommandation comme Netflix ou un système de reconnaissance faciale','Une Data Platform — infrastructure fiable traitant des téraoctets de données par jour','Une nouvelle architecture transformer qui bat SOTA sur un benchmark connu'],s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
    {t:'Quel outil veux-tu maîtriser en premier ?',o:['Power BI ou Tableau — pour des visualisations belles et claires','PyTorch ou TensorFlow — pour entraîner des réseaux de neurones','Apache Spark ou Airflow — pour le traitement de données à grande échelle','Hugging Face + CUDA — pour travailler avec de grands modèles de langage'],s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
    {t:'Qu\'est-ce qui t\'énerve le plus ?',o:['Quand les données existent mais personne ne peut les lire et tout le monde décide à l\'instinct','Quand un modèle performe très bien sur les données de test mais échoue en production','Quand les données sont désordonnées et dispersées sur des dizaines de sources non connectées','Quand on utilise des algorithmes obsolètes et ignore les nouvelles recherches'],s:[{analyst:2},{ml:2},{engineer:2},{research:2}]},
    {t:'Dans 3 ans tu veux...',o:['Être Data Analyst dans une grande entreprise et influencer les décisions via les données','Déployer des modèles ML en production et les voir fonctionner pour des millions d\'utilisateurs','Construire une infrastructure de données qui s\'adapte sans effort et ne tombe jamais en panne','Travailler dans un labo de recherche et faire avancer la science de l\'IA'],s:[{analyst:3},{ml:3},{engineer:3},{research:3}]}
  ],roles:{
    analyst:{emoji:'📊',name:'Data Analyst',desc:'Trouve du sens dans les données et aide les entreprises à prendre les bonnes décisions.',detail:'Un Data Analyst est le pont entre les données brutes et les décisions business. Tu écris des requêtes SQL, construis des dashboards dans Tableau ou Power BI, fais des tests A/B et expliques les métriques. Une connaissance approfondie du ML n\'est pas requise — comprendre le business est plus important.',start:['SQL — sqlbolt.com (gratuit, interactif)','Kaggle Learn — kaggle.com/learn','Tableau Public (gratuit) — public.tableau.com'],startUrls:['https://sqlbolt.com','https://www.kaggle.com/learn','https://public.tableau.com']},
    ml:{emoji:'🤖',name:'Ingénieur ML',desc:'Construit, entraîne et déploie des modèles de machine learning en production.',detail:'Un ingénieur ML est à l\'intersection de la data science et du génie logiciel. Tu ne fais pas que entraîner des modèles — tu les déploies en production. Python, sklearn, PyTorch et les bases MLOps sont indispensables.',start:['fast.ai (meilleur cours ML pratique) — fast.ai','Scikit-learn documentation — scikit-learn.org','MLflow pour le suivi des expériences — mlflow.org'],startUrls:['https://fast.ai','https://scikit-learn.org','https://mlflow.org']},
    engineer:{emoji:'🔧',name:'Data Engineer',desc:'Construit l\'infrastructure qui collecte, stocke et livre les données de manière fiable.',detail:'Un Data Engineer est le héros invisible du monde des données. Sans toi, un Data Scientist ne reçoit tout simplement pas de données. Tu conçois des pipelines ETL, travailles avec Kafka, Spark et Airflow et construis des Data Warehouses.',start:['Data Engineering Zoomcamp — github.com/DataTalksClub/data-engineering-zoomcamp','Apache Airflow — airflow.apache.org','dbt — getdbt.com'],startUrls:['https://github.com/DataTalksClub/data-engineering-zoomcamp','https://airflow.apache.org','https://www.getdbt.com']},
    research:{emoji:'🧠',name:'Scientifique Chercheur en IA',desc:'Explore les algorithmes IA de pointe et fait avancer la science.',detail:'Un scientifique chercheur en IA travaille à la frontière — en académie ou dans des labs industriels. Tu lis et implémentes des articles d\'arxiv, développes de nouvelles architectures et travailles dans des équipes comme DeepMind ou OpenAI.',start:['Deep Learning Specialization (Andrew Ng) — coursera.org','arxiv.org — lire de nouveaux articles IA chaque jour','PyTorch Tutorials — pytorch.org/tutorials'],startUrls:['https://www.coursera.org/specializations/deep-learning','https://arxiv.org/list/cs.LG/recent','https://pytorch.org/tutorials']}
  }};

L2.data.es = {questions:[
    {t:'¿Qué es lo que más te atrae de Data Science?',o:['Encontrar patrones ocultos en datos y convertirlos en insights claros de negocio','Entrenar redes neuronales y construir modelos que mejoran con cada iteración','Construir pipelines confiables que entregan datos limpios exactamente donde se necesitan','Explorar algoritmos de vanguardia y publicar resultados como en un artículo de investigación'],s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
    {t:'¿Qué podrías hacer durante horas?',o:['Construir dashboards en Tableau o Looker y explicar métricas a stakeholders','Ajustar hiperparámetros, comparar modelos y monitorear métricas de rendimiento','Diseñar esquemas de bases de datos y optimizar consultas SQL','Leer papers de arxiv e implementar nuevas arquitecturas de redes neuronales'],s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
    {t:'¿Qué proyecto suena más emocionante?',o:['Un dashboard que ayuda al CEO a tomar decisiones basadas en datos en tiempo real','Un sistema de recomendación como Netflix o un sistema de reconocimiento facial','Una Data Platform — infraestructura confiable procesando terabytes por día','Una nueva arquitectura transformer que supera SOTA en un benchmark conocido'],s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
    {t:'¿Qué herramienta quieres dominar primero?',o:['Power BI o Tableau — para visualizaciones hermosas y claras','PyTorch o TensorFlow — para entrenar redes neuronales','Apache Spark o Airflow — para procesamiento de datos a gran escala','Hugging Face + CUDA — para trabajar con modelos de lenguaje grandes'],s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
    {t:'¿Qué te molesta más?',o:['Cuando los datos existen pero nadie puede leerlos y todos deciden por intuición','Cuando un modelo funciona bien en datos de prueba pero falla en producción','Cuando los datos están desordenados y dispersos en docenas de fuentes no conectadas','Cuando se usan algoritmos obsoletos e ignoran las últimas investigaciones'],s:[{analyst:2},{ml:2},{engineer:2},{research:2}]},
    {t:'En 3 años quieres...',o:['Ser Data Analyst en una empresa top e influir en decisiones de negocio a través de datos','Desplegar modelos ML en producción y verlos trabajar para millones de usuarios reales','Construir infraestructura de datos que escala sin esfuerzo y nunca falla','Trabajar en un laboratorio de investigación y avanzar la frontera de la ciencia de IA'],s:[{analyst:3},{ml:3},{engineer:3},{research:3}]}
  ],roles:{
    analyst:{emoji:'📊',name:'Data Analyst',desc:'Encuentra sentido en los datos y ayuda a las empresas a tomar las decisiones correctas.',detail:'Un Data Analyst es el puente entre datos crudos y decisiones de negocio. Escribes queries SQL, construyes dashboards en Tableau o Power BI, ejecutas pruebas A/B y explicas métricas. Conocimiento profundo de ML no es requerido — entender el negocio es más importante.',start:['SQL — sqlbolt.com (gratis, interactivo)','Kaggle Learn — kaggle.com/learn','Tableau Public (gratis) — public.tableau.com'],startUrls:['https://sqlbolt.com','https://www.kaggle.com/learn','https://public.tableau.com']},
    ml:{emoji:'🤖',name:'Ingeniero ML',desc:'Construye, entrena y despliega modelos de machine learning en producción.',detail:'Un ingeniero ML está en la intersección de data science e ingeniería de software. No solo entrenas modelos — los despliegas en producción. Python, sklearn, PyTorch y conceptos básicos de MLOps son esenciales.',start:['fast.ai (mejor curso práctico ML) — fast.ai','Documentación Scikit-learn — scikit-learn.org','MLflow para tracking de experimentos — mlflow.org'],startUrls:['https://fast.ai','https://scikit-learn.org','https://mlflow.org']},
    engineer:{emoji:'🔧',name:'Ingeniero de Datos',desc:'Construye la infraestructura que recolecta, almacena y entrega datos de manera confiable.',detail:'Un ingeniero de datos es el héroe invisible del mundo de datos. Sin ti, un Data Scientist simplemente no recibe datos. Diseñas pipelines ETL, trabajas con Kafka, Spark y Airflow y construyes Data Warehouses.',start:['Data Engineering Zoomcamp — github.com/DataTalksClub/data-engineering-zoomcamp','Apache Airflow — airflow.apache.org','dbt — getdbt.com'],startUrls:['https://github.com/DataTalksClub/data-engineering-zoomcamp','https://airflow.apache.org','https://www.getdbt.com']},
    research:{emoji:'🧠',name:'Científico Investigador de IA',desc:'Explora algoritmos de IA de vanguardia y hace avanzar la ciencia.',detail:'Un científico investigador de IA trabaja en la frontera — en academia o laboratorios industriales. Lees e implementas papers de arxiv, desarrollas nuevas arquitecturas y trabajas en equipos como DeepMind u OpenAI.',start:['Deep Learning Specialization (Andrew Ng) — coursera.org','arxiv.org — leer papers de IA frescos cada día','PyTorch Tutorials — pytorch.org/tutorials'],startUrls:['https://www.coursera.org/specializations/deep-learning','https://arxiv.org/list/cs.LG/recent','https://pytorch.org/tutorials']}
  }};

L2.data.pt = {questions:[
    {t:'O que mais te atrai em Data Science?',o:['Encontrar padrões ocultos nos dados e transformá-los em insights claros de negócio','Treinar redes neurais e construir modelos que ficam mais inteligentes a cada iteração','Construir pipelines confiáveis que entregam dados limpos exatamente onde são necessários','Explorar algoritmos de ponta e publicar resultados como em um artigo de pesquisa'],s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
    {t:'O que você poderia fazer por horas?',o:['Construir dashboards no Tableau ou Looker e explicar métricas para stakeholders','Ajustar hiperparâmetros, comparar modelos e acompanhar métricas de desempenho','Projetar schemas de banco de dados e otimizar queries SQL','Ler papers do arxiv e implementar novas arquiteturas de redes neurais'],s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
    {t:'Qual projeto parece mais empolgante?',o:['Um dashboard que ajuda o CEO a tomar decisões baseadas em dados em tempo real','Um sistema de recomendação como Netflix ou um sistema de reconhecimento facial','Uma Data Platform — infraestrutura confiável processando terabytes por dia','Uma nova arquitetura transformer que supera SOTA em um benchmark conhecido'],s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
    {t:'Qual ferramenta você quer dominar primeiro?',o:['Power BI ou Tableau — para visualizações belas e claras','PyTorch ou TensorFlow — para treinar redes neurais','Apache Spark ou Airflow — para processamento de dados em grande escala','Hugging Face + CUDA — para trabalhar com modelos de linguagem grandes'],s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
    {t:'O que mais te irrita?',o:['Quando dados existem mas ninguém consegue lê-los e todos decidem por intuição','Quando um modelo funciona bem nos dados de teste mas falha em produção','Quando os dados estão bagunçados e dispersos em dezenas de fontes não conectadas','Quando algoritmos desatualizados são usados e as pesquisas mais recentes são ignoradas'],s:[{analyst:2},{ml:2},{engineer:2},{research:2}]},
    {t:'Em 3 anos você quer...',o:['Ser Data Analyst em uma empresa top e influenciar decisões de negócio através de dados','Implantar modelos ML em produção e vê-los funcionando para milhões de usuários reais','Construir infraestrutura de dados que escala sem esforço e nunca quebra','Trabalhar em um laboratório de pesquisa e avançar a fronteira da ciência de IA'],s:[{analyst:3},{ml:3},{engineer:3},{research:3}]}
  ],roles:{
    analyst:{emoji:'📊',name:'Analista de Dados',desc:'Encontra sentido nos dados e ajuda empresas a tomar as decisões certas.',detail:'Um analista de dados é a ponte entre dados brutos e decisões de negócio. Você escreve queries SQL, constrói dashboards no Tableau ou Power BI, executa testes A/B e explica métricas. Conhecimento profundo de ML não é necessário — entender o negócio é mais importante.',start:['SQL — sqlbolt.com (gratuito, interativo)','Kaggle Learn — kaggle.com/learn','Tableau Public (gratuito) — public.tableau.com'],startUrls:['https://sqlbolt.com','https://www.kaggle.com/learn','https://public.tableau.com']},
    ml:{emoji:'🤖',name:'Engenheiro ML',desc:'Constrói, treina e implanta modelos de machine learning em produção.',detail:'Um engenheiro ML está na interseção de data science e engenharia de software. Você não apenas treina modelos — os implanta em produção. Python, sklearn, PyTorch e conceitos básicos de MLOps são essenciais.',start:['fast.ai (melhor curso prático de ML) — fast.ai','Documentação Scikit-learn — scikit-learn.org','MLflow para rastreamento de experimentos — mlflow.org'],startUrls:['https://fast.ai','https://scikit-learn.org','https://mlflow.org']},
    engineer:{emoji:'🔧',name:'Engenheiro de Dados',desc:'Constrói a infraestrutura que coleta, armazena e entrega dados de forma confiável.',detail:'Um engenheiro de dados é o herói invisível do mundo dos dados. Sem você, um Data Scientist simplesmente não recebe dados. Você projeta pipelines ETL, trabalha com Kafka, Spark e Airflow e constrói Data Warehouses.',start:['Data Engineering Zoomcamp — github.com/DataTalksClub/data-engineering-zoomcamp','Apache Airflow — airflow.apache.org','dbt — getdbt.com'],startUrls:['https://github.com/DataTalksClub/data-engineering-zoomcamp','https://airflow.apache.org','https://www.getdbt.com']},
    research:{emoji:'🧠',name:'Cientista Pesquisador de IA',desc:'Explora algoritmos de IA de ponta e faz avançar a ciência.',detail:'Um cientista pesquisador de IA trabalha na fronteira — em academia ou laboratórios industriais. Você lê e implementa papers do arxiv, desenvolve novas arquiteturas e trabalha em equipes como DeepMind ou OpenAI.',start:['Deep Learning Specialization (Andrew Ng) — coursera.org','arxiv.org — ler papers de IA frescos todo dia','PyTorch Tutorials — pytorch.org/tutorials'],startUrls:['https://www.coursera.org/specializations/deep-learning','https://arxiv.org/list/cs.LG/recent','https://pytorch.org/tutorials']}
  }};

L2.data.ar = {questions:[
    {t:'ما الذي يجذبك أكثر في علم البيانات؟',o:['إيجاد أنماط خفية في البيانات وتحويلها إلى رؤى تجارية واضحة','تدريب الشبكات العصبية وبناء نماذج تتحسن مع كل تكرار','بناء مسارات موثوقة تُوصل البيانات النظيفة تحديداً إلى حيث تحتاج','استكشاف خوارزميات متطورة ونشر نتائج كما في ورقة بحثية'],s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
    {t:'ما الذي يمكنك فعله لساعات؟',o:['بناء لوحات بيانات في Tableau أو Looker وشرح المقاييس للمعنيين','ضبط المعاملات الفائقة ومقارنة النماذج وتتبع مقاييس الأداء','تصميم مخططات قواعد البيانات وتحسين استعلامات SQL','قراءة أوراق بحثية من arxiv وتنفيذ معماريات شبكات عصبية جديدة'],s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
    {t:'أي مشروع يبدو الأكثر إثارة؟',o:['لوحة بيانات تساعد المدير التنفيذي على اتخاذ قرارات مبنية على البيانات في الوقت الفعلي','نظام توصيات مثل Netflix أو نظام التعرف على الوجوه','منصة بيانات — بنية تحتية موثوقة تعالج تيرابايتات يومياً','معمارية محول جديدة تتفوق على SOTA في معيار مشهور'],s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
    {t:'أي أداة تريد إتقانها أولاً؟',o:['Power BI أو Tableau — للتصورات البصرية الجميلة والواضحة','PyTorch أو TensorFlow — لتدريب الشبكات العصبية','Apache Spark أو Airflow — لمعالجة البيانات الكبيرة','Hugging Face + CUDA — للعمل مع نماذج اللغة الكبيرة'],s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
    {t:'ما الذي يزعجك أكثر؟',o:['عندما تتوفر البيانات لكن لا أحد يستطيع قراءتها والجميع يقرر بالحدس','عندما يؤدي النموذج أداءً رائعاً على بيانات الاختبار لكن يفشل في الإنتاج','عندما تكون البيانات فوضوية ومتناثرة عبر عشرات المصادر غير المتصلة','عندما تُستخدم خوارزميات قديمة وتُتجاهل أحدث الأبحاث'],s:[{analyst:2},{ml:2},{engineer:2},{research:2}]},
    {t:'بعد 3 سنوات تريد...',o:['أن تكون محلل بيانات في شركة كبرى وتؤثر على القرارات التجارية عبر البيانات','نشر نماذج ML في الإنتاج ومشاهدتها تعمل لملايين المستخدمين الحقيقيين','بناء بنية تحتية للبيانات تتوسع بسهولة ولا تنهار أبداً','العمل في مختبر بحثي والمضي قدماً في حدود علم الذكاء الاصطناعي'],s:[{analyst:3},{ml:3},{engineer:3},{research:3}]}
  ],roles:{
    analyst:{emoji:'📊',name:'محلل بيانات',desc:'يجد معنى في البيانات ويساعد الشركات على اتخاذ القرارات الصحيحة.',detail:'محلل البيانات هو الجسر بين البيانات الخام وقرارات الأعمال. تكتب استعلامات SQL وتبني لوحات بيانات في Tableau أو Power BI وتجري اختبارات A/B. المعرفة العميقة بالـ ML ليست مطلوبة — فهم الأعمال أهم.',start:['SQL — sqlbolt.com (مجاني، تفاعلي)','Kaggle Learn — kaggle.com/learn','Tableau Public (مجاني) — public.tableau.com'],startUrls:['https://sqlbolt.com','https://www.kaggle.com/learn','https://public.tableau.com']},
    ml:{emoji:'🤖',name:'مهندس تعلم آلي',desc:'يبني ويدرب وينشر نماذج تعلم الآلة في الإنتاج.',detail:'مهندس ML يقع عند تقاطع علم البيانات وهندسة البرمجيات. لا تقتصر مهمتك على تدريب النماذج — بل تنشرها في الإنتاج. Python وsklearn وPyTorch وأساسيات MLOps ضرورية.',start:['fast.ai (أفضل دورة عملية في ML) — fast.ai','توثيق Scikit-learn — scikit-learn.org','MLflow لتتبع التجارب — mlflow.org'],startUrls:['https://fast.ai','https://scikit-learn.org','https://mlflow.org']},
    engineer:{emoji:'🔧',name:'مهندس البيانات',desc:'يبني البنية التحتية التي تجمع البيانات وتخزنها وتوصلها بشكل موثوق وسريع.',detail:'مهندس البيانات هو البطل الخفي في عالم البيانات. بدونك لن يحصل Data Scientist على أي بيانات للعمل بها. تصمم مسارات ETL وتعمل مع Kafka وSpark وAirflow وتبني Data Warehouses.',start:['Data Engineering Zoomcamp — github.com/DataTalksClub/data-engineering-zoomcamp','Apache Airflow — airflow.apache.org','dbt — getdbt.com'],startUrls:['https://github.com/DataTalksClub/data-engineering-zoomcamp','https://airflow.apache.org','https://www.getdbt.com']},
    research:{emoji:'🧠',name:'عالم بحوث الذكاء الاصطناعي',desc:'يستكشف خوارزميات الذكاء الاصطناعي المتطورة ويدفع حدود العلم.',detail:'عالم بحوث الذكاء الاصطناعي يعمل في الطليعة — في الأوساط الأكاديمية أو مختبرات الصناعة. تقرأ وتنفذ أوراق بحثية من arxiv وتطور معماريات جديدة وتعمل في فرق مثل DeepMind أو OpenAI.',start:['Deep Learning Specialization (Andrew Ng) — coursera.org','arxiv.org — اقرأ أوراق بحثية جديدة في الذكاء الاصطناعي يومياً','PyTorch Tutorials — pytorch.org/tutorials'],startUrls:['https://www.coursera.org/specializations/deep-learning','https://arxiv.org/list/cs.LG/recent','https://pytorch.org/tutorials']}
  }};

L2.data.he = {
    questions: [
      {t:'מה מושך אותך יותר מכל ב-Data Science?', o:[
        'למצוא דפוסים נסתרים בנתונים ולהפוך אותם לתובנות עסקיות ברורות',
        'לאמן רשתות נוירונים ולבנות מודלים שמשתפרים בכל איטרציה',
        'לבנות פייפליינים אמינים שמעבירים נתונים נקיים בדיוק לאן שצריך',
        'לחקור אלגוריתמים חדשניים ולפרסם תוצאות כמו במאמר מדעי'
      ], s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
      {t:'מה אתה מוכן לעשות שעות?', o:[
        'לבנות דשבורדים ב-Tableau או Looker ולהסביר מדדים לבעלי עניין',
        'לכוונן היפר-פרמטרים, להשוות מודלים ולעקוב אחרי מדדי ביצועים',
        'לתכנן סכמות בסיסי נתונים ולאופטימז שאילתות SQL',
        'לקרוא מאמרים מ-arxiv ולממש ארכיטקטורות רשתות נוירונים חדשות'
      ], s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
      {t:'איזה פרויקט נשמע הכי מרגש?', o:[
        'דשבורד שעוזר למנכ"ל לקבל החלטות מבוססות נתונים בזמן אמת',
        'מערכת המלצות כמו Netflix או מערכת זיהוי פנים',
        'Data Platform — תשתית אמינה לעיבוד טרה-בייטים של נתונים ביום',
        'ארכיטקטורת טרנספורמר חדשה שמכה SOTA בבנצ\'מרק ידוע'
      ], s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
      {t:'איזה כלי אתה רוצה ללמוד ראשון?', o:[
        'Power BI / Tableau — לויזואליזציות יפות וברורות',
        'PyTorch או TensorFlow — לאימון רשתות נוירונים',
        'Apache Spark או Airflow — לעיבוד נתונים בקנה מידה גדול',
        'Hugging Face + CUDA — לעבודה עם מודלי שפה גדולים'
      ], s:[{analyst:3},{ml:3},{engineer:3},{research:3}]},
      {t:'מה הכי מרגיז אותך?', o:[
        'כשנתונים קיימים אבל אף אחד לא יכול לקרוא אותם וכולם מחליטים לפי אינטואיציה',
        'כשמודל עובד נהדר על נתוני בדיקה אבל נכשל בפרודקשן',
        'כשנתונים מבולגנים ומפוזרים על עשרות מקורות לא מחוברים',
        'כשמשתמשים באלגוריתמים מיושנים ומתעלמים ממחקרים חדשים'
      ], s:[{analyst:2},{ml:2},{engineer:2},{research:2}]},
      {t:'בעוד 3 שנים אתה רוצה...', o:[
        'להיות Data Analyst בחברה מובילה ולהשפיע על החלטות עסקיות דרך נתונים',
        'לפרוס מודלי ML לפרודקשן ולצפות בהם עובדים עבור מיליוני משתמשים',
        'לבנות תשתית נתונים שמשתרגת בקלות ולא נשברת',
        'לעבוד במעבדת מחקר ולהקדים את גבול מדע ה-AI'
      ], s:[{analyst:3},{ml:3},{engineer:3},{research:3}]}
    ],
    roles: {
      analyst: {
        emoji:'📊', name:'Data Analyst',
        desc:'מוצא משמעות בנתונים ועוזר לעסקים לקבל החלטות נכונות.',
        detail:'Data Analyst הוא הגשר בין נתונים גולמיים להחלטות עסקיות. אתה כותב שאילתות SQL, בונה דשבורדים ב-Tableau או Power BI, מנהל A/B טסטים ומסביר מדדים לצוות. לא נדרשת ידיעה עמוקה של ML — חשוב יותר להבין את העסק ולספר סיפור ברור דרך נתונים. זה אחד המקצועות המבוקשים ביותר בכל התעשיות.',
        start:['SQL — sqlbolt.com (חינמי, אינטראקטיבי)','Kaggle Learn: Intro to Data Analysis — kaggle.com/learn','Tableau Public (חינמי) — public.tableau.com'],
        startUrls:['https://sqlbolt.com','https://www.kaggle.com/learn','https://public.tableau.com']
      },
      ml: {
        emoji:'🤖', name:'מהנדס ML',
        desc:'בונה, מאמן ומפרס מודלי למידת מכונה לפרודקשן.',
        detail:'מהנדס ML יושב בצומת של מדע נתונים והנדסת תוכנה. אתה לא רק מאמן מודלים ב-notebook — אתה פורס אותם לפרודקשן: REST API, ניטור סחף נתונים, פייפליינים של אימון מחדש. נדרשים Python, sklearn, PyTorch או TensorFlow, ויסודות MLOps. מודל עובד אחד בפרודקשן שווה יותר ממאה ניסויים ב-Jupyter.',
        start:['fast.ai (הקורס המעשי הטוב ביותר) — fast.ai','תיעוד Scikit-learn — scikit-learn.org','MLflow למעקב ניסויים — mlflow.org'],
        startUrls:['https://fast.ai','https://scikit-learn.org','https://mlflow.org']
      },
      engineer: {
        emoji:'🔧', name:'מהנדס נתונים',
        desc:'בונה את התשתית שאוספת, מאחסנת ומעבירה נתונים בצורה אמינה ומהירה.',
        detail:'מהנדס נתונים הוא הגיבור הבלתי נראה של עולם הנתונים. בלעדיך, Data Scientist פשוט לא מקבל נתונים לעבוד איתם. אתה מתכנן ETL פייפליינים, עובד עם Kafka, Spark ו-Airflow, בונה Data Warehouse. זו תפקיד הנדסי יותר מאנליטי — קרוב לפיתוח בק-אנד אבל סביב נתונים. התמחות עם שכר גבוה מאוד.',
        start:['Data Engineering Zoomcamp — github.com/DataTalksClub/data-engineering-zoomcamp','Apache Airflow — airflow.apache.org','dbt (טרנספורמציות נתונים) — getdbt.com'],
        startUrls:['https://github.com/DataTalksClub/data-engineering-zoomcamp','https://airflow.apache.org','https://www.getdbt.com']
      },
      research: {
        emoji:'🧠', name:'מדען מחקר AI',
        desc:'חוקר אלגוריתמי AI חדשניים ומקדם את גבול המדע.',
        detail:'מדען מחקר AI עובד בחזית — באקדמיה או במעבדות תעשייתיות. אתה קורא ומממש מאמרים מ-arxiv, מפתח ארכיטקטורות חדשות (טרנספורמרים, מודלי דיפיוז\'ן, RL), ועובד בצוותים כמו DeepMind, OpenAI או Google Brain. נדרשת מתמטיקה עמוקה (אלגברה לינארית, הסתברות, חשבון), Python ו-PyTorch. זהו התפקיד הקשה והמשפיע ביותר ב-AI.',
        start:['Deep Learning Specialization (Andrew Ng) — coursera.org','arxiv.org — קרא מאמרי AI טריים כל יום','PyTorch Tutorials — pytorch.org/tutorials'],
        startUrls:['https://www.coursera.org/specializations/deep-learning','https://arxiv.org/list/cs.LG/recent','https://pytorch.org/tutorials']
      }
    }
  };

L2.data.zh = {
  questions: [
    { t:'数据科学中什么最吸引你？', o:['机器学习——构建预测模型','数据分析——发现规律，讲述数据故事','数据工程——管道、ETL和数据仓库','大数据——分布式系统和实时处理'], s:[{ml:3},{analytics:3},{engineering:3},{bigdata:3}] },
    { t:'你最想精通哪项技术？', o:['PyTorch、TensorFlow和深度学习','Python数据分析、Tableau、Power BI','Airflow、dbt、Spark和数据管道','Kafka、Flink和流式处理架构'], s:[{ml:3},{analytics:3},{engineering:3},{bigdata:3}] },
    { t:'什么工作成果最让你有成就感？', o:['模型在生产环境中准确运行','你的报表改变了公司的战略决策','搭建了稳定处理TB级数据的管道','实时仪表盘每天帮助运营团队决策'], s:[{ml:3},{analytics:3},{engineering:3},{bigdata:3}] },
    { t:'你更喜欢花时间做什么？', o:['调整模型超参数，提升模型精度','做探索性分析，找出有趣的规律','设计数据仓库schema','优化Spark作业的执行效率'], s:[{ml:3},{analytics:3},{engineering:3},{bigdata:3}] },
    { t:'你会选择哪个项目？', o:['训练一个客户流失预测模型','分析用户增长数据并给出建议','构建公司的数据平台从零开始','搭建实时推荐系统的数据层'], s:[{ml:3},{analytics:3},{engineering:3},{bigdata:3}] },
    { t:'10年后你在哪里？', o:['科技公司的首席科学家','数据驱动产品的增长分析总监','领导数据基础设施团队的首席数据工程师','实时计算平台的架构师'], s:[{ml:3},{analytics:3},{engineering:3},{bigdata:3}] }
  ],
  roles: {
    ml: { emoji:'🤖', name:'机器学习工程师', desc:'构建和部署改变产品体验的AI模型', detail:'你将数学模型转化为真实运行的产品功能。你研究算法，处理数据，训练模型，并将其部署到生产环境。你的工作驱动着推荐系统、搜索排序等核心功能。', start:['学习Python数据科学栈——NumPy、pandas、scikit-learn','在Kaggle上参加入门竞赛','学习深度学习基础——fast.ai课程推荐','研究MLflow做实验追踪'] },
    analytics: { emoji:'📊', name:'数据分析师', desc:'用数据讲故事，帮助业务做出更好的决策', detail:'你把复杂数据变成清晰洞见。你构建仪表盘，做A/B测试分析，寻找增长机会。你用数字说话，影响决策者。', start:['精通SQL——分析型查询和窗口函数','学习Tableau或Power BI的可视化','了解A/B测试统计原理','阅读Ben Stancil的数据分析博客'] },
    engineering: { emoji:'🔧', name:'数据工程师', desc:'构建让数据可靠流动和存储的管道和平台', detail:'你是数据基础设施的建造者。你构建ETL管道、数据仓库和数据湖。你的工作让分析师和数据科学家能够使用高质量的数据。', start:['学习SQL和Python（pandas）','掌握dbt——数据转换的行业标准','了解Airflow——任务调度和管道编排','学习云数据仓库——BigQuery、Snowflake或Redshift'] },
    bigdata: { emoji:'⚡', name:'大数据工程师', desc:'处理海量实时数据流——秒级延迟，从不丢失', detail:'你解决最大规模的数据挑战。你使用Spark、Kafka和Flink处理每秒数百万事件。你的系统是电商、金融和互联网产品的底层支撑。', start:['学习Apache Spark——PySpark入门','了解Kafka的核心概念和生产实践','学习分布式系统基础——CAP定理、一致性','在本地搭建Kafka+Spark的mini实验环境'] }
  },
  ui: { l2back:'← 返回数据科学', title:'数据科学：选择你的专业方向' }
};
