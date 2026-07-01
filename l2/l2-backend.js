// ─── L2 Test: Backend ─────────────────────────────────────────────────
// Backend — Roles: node | python | java | go
// Add a new language: L2.backend.xx = { questions:[...], roles:{...} }

L2.backend.ru = {
    questions: [
      {t:'Какой стек тебя привлекает больше всего?', o:[
        'Python — лаконичный, мощный, везде используется',
        'JavaScript / TypeScript — один язык и на фронте и на сервере',
        'Java или Kotlin — строго, надёжно, большие системы',
        'Меня интересует не код а проектирование архитектуры систем'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'Что тебе интереснее всего делать на бэкенде?', o:[
        'Писать скрипты, автоматизировать задачи, работать с данными',
        'Строить быстрые REST API и WebSocket-сервисы',
        'Создавать надёжные enterprise-системы на годы вперёд',
        'Проектировать как сервисы общаются между собой'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'Какой проект звучит круче?', o:[
        'ML-сервис или Telegram-бот с умным поведением',
        'Высоконагруженный API который держит 10 000 запросов в секунду',
        'Банковская система или сервис с миллионами пользователей',
        'Распределённая система из десятков микросервисов'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'Какой инструмент ты бы освоил первым?', o:[
        'FastAPI или Django — Python веб-фреймворки',
        'Express или NestJS — Node.js фреймворки',
        'Spring Boot — главный Java-фреймворк',
        'Docker, Kubernetes и схемы баз данных'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'Что тебя пугает или раздражает?', o:[
        'Скучная типизация и многословный код',
        'Медленный и тяжёлый рантайм',
        'Нестабильные зависимости которые ломаются без предупреждения',
        'Когда нет чёткой схемы и всё написано хаотично'
      ], s:[{java:2},{python:2},{node:2},{architect:2}]},
      {t:'Через 3 года ты хочешь...', o:[
        'Строить AI-сервисы и автоматизировать всё что можно',
        'Быть Node.js экспертом и знать async/await до уровня ядра',
        'Проектировать надёжные системы для крупных компаний',
        'Стать Tech Lead или Solution Architect в большой команде'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]}
    ],
    roles: {
      python: {
        emoji:'🐍', name:'Python Backend разработчик',
        desc:'Серверная логика, API и автоматизация на самом популярном языке для бэкенда.',
        detail:'Python-бэкендер строит API, сервисы и автоматизирует процессы. Основные фреймворки — Django (батарейки включены) и FastAPI (максимальная скорость). Python также открывает дорогу в Data Science и ML — многие разработчики совмещают оба направления. Огромное сообщество, много библиотек.',
        start:['FastAPI — fastapi.tiangolo.com (лучший старт)','Django — djangoproject.com','Python для бэкенда — roadmap.sh/python'],
        startUrls:['https://fastapi.tiangolo.com','https://djangoproject.com','https://roadmap.sh/python']
      },
      node: {
        emoji:'🟩', name:'Node.js / TypeScript разработчик',
        desc:'Бэкенд на JavaScript — один язык для фронта и сервера.',
        detail:'Node.js разработчик строит API и сервисы на JavaScript. Главный плюс — один язык и на клиенте, и на сервере. NestJS добавляет строгую архитектуру, TypeScript — надёжность. Отличный выбор для стартапов и команд которые хотят fullstack-гибкость.',
        start:['Node.js — nodejs.org','NestJS — nestjs.com (структурированный бэкенд)','Express — expressjs.com (минимализм)'],
        startUrls:['https://nodejs.org','https://nestjs.com','https://expressjs.com']
      },
      java: {
        emoji:'☕', name:'Java / Kotlin разработчик',
        desc:'Надёжные enterprise-системы — банки, маркетплейсы, большие платформы.',
        detail:'Java и Kotlin — основа банковских систем, крупных маркетплейсов и корпоративного ПО. Spring Boot делает разработку удобной и стандартизированной. Строгая типизация и многолетние практики делают Java-код надёжным и легко поддерживаемым. Высокие зарплаты в крупных компаниях.',
        start:['Spring Boot — spring.io/quickstart','Kotlin — kotlinlang.org','Java — roadmap.sh/java'],
        startUrls:['https://spring.io/quickstart','https://kotlinlang.org','https://roadmap.sh/java']
      },
      architect: {
        emoji:'🏗️', name:'Backend Архитектор',
        desc:'Проектирует как устроена система в целом: сервисы, базы данных, связи.',
        detail:'Архитектор не пишет весь код сам — он решает как система устроена: монолит или микросервисы, какая база данных, как сервисы общаются через очереди или API. Это следующий уровень после опытного разработчика. Нужно глубоко знать хотя бы один стек и понимать компромиссы разных технологий.',
        start:['System Design — github.com/donnemartin/system-design-primer','Книга «Designing Data-Intensive Applications» Мартина Клеппмана','roadmap.sh/backend — полный путь бэкенд-разработчика'],
        startUrls:['https://github.com/donnemartin/system-design-primer','https://dataintensive.net','https://roadmap.sh/backend']
      }
    }
  };

L2.backend.en = {
    questions: [
      {t:'Which tech stack attracts you most?', o:[
        'Python — concise, powerful, used everywhere',
        'JavaScript / TypeScript — one language for both frontend and server',
        'Java or Kotlin — strict, reliable, large-scale systems',
        'I\'m more interested in system design than writing code'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'What do you enjoy doing most on the backend?', o:[
        'Writing scripts, automating tasks, working with data',
        'Building fast REST APIs and WebSocket services',
        'Creating reliable enterprise systems built to last for years',
        'Designing how different services talk to each other'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'Which project sounds the coolest?', o:[
        'An ML service or a smart Telegram bot',
        'A high-load API handling 10,000 requests per second',
        'A banking system or a platform with millions of users',
        'A distributed system of dozens of microservices'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'Which tool would you learn first?', o:[
        'FastAPI or Django — Python web frameworks',
        'Express or NestJS — Node.js frameworks',
        'Spring Boot — the main Java framework',
        'Docker, Kubernetes and database schema design'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'What frustrates or worries you?', o:[
        'Boring verbose code with excessive type annotations',
        'Slow and heavy runtimes',
        'Unstable dependencies that break without warning',
        'When there\'s no clear structure and everything is written chaotically'
      ], s:[{java:2},{python:2},{node:2},{architect:2}]},
      {t:'In 3 years you want to...', o:[
        'Build AI services and automate everything possible',
        'Be a Node.js expert who understands async/await at the core level',
        'Design reliable systems for large companies',
        'Become a Tech Lead or Solution Architect in a big team'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]}
    ],
    roles: {
      python: {
        emoji:'🐍', name:'Python Backend Developer',
        desc:'Server logic, APIs and automation in the most popular backend language.',
        detail:'A Python backend developer builds APIs, services and automates processes. The main frameworks are Django (batteries included) and FastAPI (maximum speed). Python also opens the door to Data Science and ML — many developers combine both areas. Huge community, countless libraries.',
        start:['FastAPI — fastapi.tiangolo.com (best starting point)','Django — djangoproject.com','Python backend roadmap — roadmap.sh/python'],
        startUrls:['https://fastapi.tiangolo.com','https://djangoproject.com','https://roadmap.sh/python']
      },
      node: {
        emoji:'🟩', name:'Node.js / TypeScript Developer',
        desc:'Backend in JavaScript — one language for both frontend and server.',
        detail:'A Node.js developer builds APIs and services in JavaScript. The biggest advantage is using one language on both client and server. NestJS adds strict architecture, TypeScript adds reliability. A great choice for startups and teams that want fullstack flexibility.',
        start:['Node.js — nodejs.org','NestJS — nestjs.com (structured backend)','Express — expressjs.com (minimalist)'],
        startUrls:['https://nodejs.org','https://nestjs.com','https://expressjs.com']
      },
      java: {
        emoji:'☕', name:'Java / Kotlin Developer',
        desc:'Reliable enterprise systems — banks, marketplaces, large platforms.',
        detail:'Java and Kotlin are the backbone of banking systems, large marketplaces and enterprise software. Spring Boot makes development convenient and standardized. Strict typing and decades of best practices make Java code reliable and maintainable. High salaries at large companies.',
        start:['Spring Boot — spring.io/quickstart','Kotlin — kotlinlang.org','Java roadmap — roadmap.sh/java'],
        startUrls:['https://spring.io/quickstart','https://kotlinlang.org','https://roadmap.sh/java']
      },
      architect: {
        emoji:'🏗️', name:'Backend Architect',
        desc:'Designs the overall system: services, databases, communication patterns.',
        detail:'An architect doesn\'t write all the code — they decide how the system is structured: monolith or microservices, which database, how services communicate via queues or APIs. This is the next level after becoming an experienced developer. You need deep knowledge of at least one stack and understanding of technology trade-offs.',
        start:['System Design Primer — github.com/donnemartin/system-design-primer','Book: Designing Data-Intensive Applications by Martin Kleppmann','roadmap.sh/backend — full backend developer path'],
        startUrls:['https://github.com/donnemartin/system-design-primer','https://dataintensive.net','https://roadmap.sh/backend']
      }
    }
  };

L2.backend.de = {
    questions: [
      {t:'Welcher Tech-Stack zieht dich am meisten an?', o:[
        'Python — präzise, mächtig, überall eingesetzt',
        'JavaScript / TypeScript — eine Sprache für Frontend und Server',
        'Java oder Kotlin — strikt, zuverlässig, große Systeme',
        'Mich interessiert mehr Systemdesign als Code schreiben'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'Was macht dir auf dem Backend am meisten Spaß?', o:[
        'Skripte schreiben, Aufgaben automatisieren, mit Daten arbeiten',
        'Schnelle REST APIs und WebSocket-Dienste bauen',
        'Zuverlässige Enterprise-Systeme erstellen, die jahrelang halten',
        'Entwerfen, wie verschiedene Dienste miteinander kommunizieren'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'Welches Projekt klingt am coolsten?', o:[
        'Ein ML-Dienst oder ein intelligenter Telegram-Bot',
        'Eine hochlastige API, die 10.000 Anfragen pro Sekunde verarbeitet',
        'Ein Bankensystem oder eine Plattform mit Millionen von Nutzern',
        'Ein verteiltes System aus Dutzenden von Microservices'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'Welches Tool würdest du als erstes lernen?', o:[
        'FastAPI oder Django — Python-Web-Frameworks',
        'Express oder NestJS — Node.js-Frameworks',
        'Spring Boot — das wichtigste Java-Framework',
        'Docker, Kubernetes und Datenbankschema-Design'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'Was frustriert oder beunruhigt dich?', o:[
        'Langweiliger, ausführlicher Code mit übermäßigen Typ-Annotierungen',
        'Langsame und schwerfällige Runtimes',
        'Instabile Abhängigkeiten, die ohne Vorwarnung brechen',
        'Wenn es keine klare Struktur gibt und alles chaotisch geschrieben ist'
      ], s:[{java:2},{python:2},{node:2},{architect:2}]},
      {t:'In 3 Jahren willst du...', o:[
        'KI-Dienste bauen und alles mögliche automatisieren',
        'Ein Node.js-Experte sein, der async/await bis ins Kern versteht',
        'Zuverlässige Systeme für große Unternehmen entwerfen',
        'Tech Lead oder Solution Architect in einem großen Team werden'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]}
    ],
    roles: {
      python: {
        emoji:'🐍', name:'Python Backend Entwickler',
        desc:'Serverlogik, APIs und Automatisierung in der beliebtesten Backend-Sprache.',
        detail:'Ein Python-Backend-Entwickler baut APIs, Dienste und automatisiert Prozesse. Die Hauptframeworks sind Django (Batterien inklusive) und FastAPI (maximale Geschwindigkeit). Python öffnet auch die Tür zu Data Science und ML — viele Entwickler kombinieren beide Bereiche. Riesige Community, unzählige Bibliotheken.',
        start:['FastAPI — fastapi.tiangolo.com (bester Einstiegspunkt)','Django — djangoproject.com','Python Backend Roadmap — roadmap.sh/python'],
        startUrls:['https://fastapi.tiangolo.com','https://djangoproject.com','https://roadmap.sh/python']
      },
      node: {
        emoji:'🟩', name:'Node.js / TypeScript Entwickler',
        desc:'Backend in JavaScript — eine Sprache für Frontend und Server.',
        detail:'Ein Node.js-Entwickler baut APIs und Dienste in JavaScript. Der größte Vorteil: eine Sprache auf Client und Server. NestJS fügt eine strikte Architektur hinzu, TypeScript die Zuverlässigkeit. Eine großartige Wahl für Startups und Teams, die Fullstack-Flexibilität wollen.',
        start:['Node.js — nodejs.org','NestJS — nestjs.com (strukturiertes Backend)','Express — expressjs.com (minimalistisch)'],
        startUrls:['https://nodejs.org','https://nestjs.com','https://expressjs.com']
      },
      java: {
        emoji:'☕', name:'Java / Kotlin Entwickler',
        desc:'Zuverlässige Enterprise-Systeme — Banken, Marktplätze, große Plattformen.',
        detail:'Java und Kotlin sind das Rückgrat von Bankensystemen, großen Marktplätzen und Unternehmenssoftware. Spring Boot macht die Entwicklung bequem und standardisiert. Strenge Typisierung und jahrzehntelange Best Practices machen Java-Code zuverlässig und wartbar. Hohe Gehälter bei großen Unternehmen.',
        start:['Spring Boot — spring.io/quickstart','Kotlin — kotlinlang.org','Java Roadmap — roadmap.sh/java'],
        startUrls:['https://spring.io/quickstart','https://kotlinlang.org','https://roadmap.sh/java']
      },
      architect: {
        emoji:'🏗️', name:'Backend Architekt',
        desc:'Entwirft das Gesamtsystem: Dienste, Datenbanken, Kommunikationsmuster.',
        detail:'Ein Architekt schreibt nicht den gesamten Code — er entscheidet, wie das System strukturiert ist: Monolith oder Microservices, welche Datenbank, wie Dienste über Warteschlangen oder APIs kommunizieren. Das ist die nächste Stufe nach einem erfahrenen Entwickler. Du brauchst tiefes Wissen in mindestens einem Stack und ein Verständnis von Technologie-Trade-offs.',
        start:['System Design Primer — github.com/donnemartin/system-design-primer','Buch: Designing Data-Intensive Applications von Martin Kleppmann','roadmap.sh/backend — vollständiger Backend-Entwicklerpfad'],
        startUrls:['https://github.com/donnemartin/system-design-primer','https://dataintensive.net','https://roadmap.sh/backend']
      }
    }
  };

L2.backend.fr = {
    questions: [
      {t:'Quel stack technique t\'attire le plus ?', o:[
        'Python — concis, puissant, utilisé partout',
        'JavaScript / TypeScript — un seul langage pour le frontend et le serveur',
        'Java ou Kotlin — strict, fiable, systèmes à grande échelle',
        'Je m\'intéresse plus au design de systèmes qu\'à l\'écriture de code'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'Qu\'est-ce que tu préfères faire sur le backend ?', o:[
        'Écrire des scripts, automatiser des tâches, travailler avec des données',
        'Construire des APIs REST rapides et des services WebSocket',
        'Créer des systèmes enterprise fiables conçus pour durer des années',
        'Concevoir comment différents services communiquent entre eux'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'Quel projet te semble le plus cool ?', o:[
        'Un service ML ou un bot Telegram intelligent',
        'Une API haute charge gérant 10 000 requêtes par seconde',
        'Un système bancaire ou une plateforme avec des millions d\'utilisateurs',
        'Un système distribué composé de dizaines de microservices'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'Quel outil voudrais-tu apprendre en premier ?', o:[
        'FastAPI ou Django — frameworks web Python',
        'Express ou NestJS — frameworks Node.js',
        'Spring Boot — le principal framework Java',
        'Docker, Kubernetes et conception de schémas de bases de données'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'Qu\'est-ce qui te frustre ou t\'inquiète ?', o:[
        'Code verbeux ennuyeux avec des annotations de type excessives',
        'Des runtimes lents et lourds',
        'Des dépendances instables qui cassent sans avertissement',
        'Quand il n\'y a pas de structure claire et que tout est écrit chaotiquement'
      ], s:[{java:2},{python:2},{node:2},{architect:2}]},
      {t:'Dans 3 ans tu veux...', o:[
        'Construire des services IA et automatiser tout ce qui est possible',
        'Être expert Node.js et comprendre async/await au niveau du noyau',
        'Concevoir des systèmes fiables pour de grandes entreprises',
        'Devenir Tech Lead ou Solution Architect dans une grande équipe'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]}
    ],
    roles: {
      python: {
        emoji:'🐍', name:'Développeur Python Backend',
        desc:'Logique serveur, APIs et automatisation dans le langage backend le plus populaire.',
        detail:'Un développeur Python backend construit des APIs, des services et automatise des processus. Les principaux frameworks sont Django (tout inclus) et FastAPI (vitesse maximale). Python ouvre aussi la porte au Data Science et au ML — beaucoup de développeurs combinent les deux. Énorme communauté, d\'innombrables bibliothèques.',
        start:['FastAPI — fastapi.tiangolo.com (meilleur point de départ)','Django — djangoproject.com','Roadmap Python backend — roadmap.sh/python'],
        startUrls:['https://fastapi.tiangolo.com','https://djangoproject.com','https://roadmap.sh/python']
      },
      node: {
        emoji:'🟩', name:'Développeur Node.js / TypeScript',
        desc:'Backend en JavaScript — un seul langage pour frontend et serveur.',
        detail:'Un développeur Node.js construit des APIs et des services en JavaScript. Le plus grand avantage : un seul langage côté client et côté serveur. NestJS ajoute une architecture stricte, TypeScript ajoute la fiabilité. Un excellent choix pour les startups et les équipes qui veulent la flexibilité fullstack.',
        start:['Node.js — nodejs.org','NestJS — nestjs.com (backend structuré)','Express — expressjs.com (minimaliste)'],
        startUrls:['https://nodejs.org','https://nestjs.com','https://expressjs.com']
      },
      java: {
        emoji:'☕', name:'Développeur Java / Kotlin',
        desc:'Systèmes enterprise fiables — banques, marketplaces, grandes plateformes.',
        detail:'Java et Kotlin sont l\'épine dorsale des systèmes bancaires, des grandes marketplaces et des logiciels d\'entreprise. Spring Boot rend le développement pratique et standardisé. Le typage strict et les décennies de bonnes pratiques rendent le code Java fiable et maintenable. Salaires élevés dans les grandes entreprises.',
        start:['Spring Boot — spring.io/quickstart','Kotlin — kotlinlang.org','Roadmap Java — roadmap.sh/java'],
        startUrls:['https://spring.io/quickstart','https://kotlinlang.org','https://roadmap.sh/java']
      },
      architect: {
        emoji:'🏗️', name:'Architecte Backend',
        desc:'Conçoit le système global : services, bases de données, patterns de communication.',
        detail:'Un architecte n\'écrit pas tout le code — il décide comment le système est structuré : monolithe ou microservices, quelle base de données, comment les services communiquent via des files d\'attente ou des APIs. C\'est le niveau suivant après être devenu un développeur expérimenté. Tu as besoin d\'une connaissance approfondie d\'au moins un stack et d\'une compréhension des compromis technologiques.',
        start:['System Design Primer — github.com/donnemartin/system-design-primer','Livre : Designing Data-Intensive Applications de Martin Kleppmann','roadmap.sh/backend — parcours complet développeur backend'],
        startUrls:['https://github.com/donnemartin/system-design-primer','https://dataintensive.net','https://roadmap.sh/backend']
      }
    }
  };

L2.backend.es = {
    questions: [
      {t:'¿Qué stack tecnológico te atrae más?', o:[
        'Python — conciso, poderoso, usado en todas partes',
        'JavaScript / TypeScript — un solo lenguaje para frontend y servidor',
        'Java o Kotlin — estricto, confiable, sistemas a gran escala',
        'Me interesa más el diseño de sistemas que escribir código'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'¿Qué disfrutas más hacer en el backend?', o:[
        'Escribir scripts, automatizar tareas, trabajar con datos',
        'Construir APIs REST rápidas y servicios WebSocket',
        'Crear sistemas enterprise confiables diseñados para durar años',
        'Diseñar cómo se comunican los distintos servicios entre sí'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'¿Qué proyecto suena más genial?', o:[
        'Un servicio de ML o un bot de Telegram inteligente',
        'Una API de alta carga manejando 10.000 peticiones por segundo',
        'Un sistema bancario o una plataforma con millones de usuarios',
        'Un sistema distribuido de docenas de microservicios'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'¿Qué herramienta aprenderías primero?', o:[
        'FastAPI o Django — frameworks web de Python',
        'Express o NestJS — frameworks de Node.js',
        'Spring Boot — el framework principal de Java',
        'Docker, Kubernetes y diseño de esquemas de base de datos'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'¿Qué te frustra o preocupa?', o:[
        'Código aburrido y verboso con anotaciones de tipo excesivas',
        'Runtimes lentos y pesados',
        'Dependencias inestables que se rompen sin previo aviso',
        'Cuando no hay una estructura clara y todo está escrito caóticamente'
      ], s:[{java:2},{python:2},{node:2},{architect:2}]},
      {t:'En 3 años quieres...', o:[
        'Construir servicios de IA y automatizar todo lo posible',
        'Ser experto en Node.js y entender async/await a nivel del núcleo',
        'Diseñar sistemas confiables para grandes empresas',
        'Convertirte en Tech Lead o Solution Architect en un equipo grande'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]}
    ],
    roles: {
      python: {
        emoji:'🐍', name:'Desarrollador Python Backend',
        desc:'Lógica de servidor, APIs y automatización en el lenguaje backend más popular.',
        detail:'Un desarrollador Python backend construye APIs, servicios y automatiza procesos. Los principales frameworks son Django (baterías incluidas) y FastAPI (máxima velocidad). Python también abre la puerta a Data Science y ML — muchos desarrolladores combinan ambas áreas. Enorme comunidad, innumerables bibliotecas.',
        start:['FastAPI — fastapi.tiangolo.com (mejor punto de partida)','Django — djangoproject.com','Roadmap Python backend — roadmap.sh/python'],
        startUrls:['https://fastapi.tiangolo.com','https://djangoproject.com','https://roadmap.sh/python']
      },
      node: {
        emoji:'🟩', name:'Desarrollador Node.js / TypeScript',
        desc:'Backend en JavaScript — un solo lenguaje para frontend y servidor.',
        detail:'Un desarrollador Node.js construye APIs y servicios en JavaScript. La mayor ventaja: un solo lenguaje tanto en cliente como en servidor. NestJS agrega arquitectura estricta, TypeScript agrega confiabilidad. Una excelente opción para startups y equipos que quieren flexibilidad fullstack.',
        start:['Node.js — nodejs.org','NestJS — nestjs.com (backend estructurado)','Express — expressjs.com (minimalista)'],
        startUrls:['https://nodejs.org','https://nestjs.com','https://expressjs.com']
      },
      java: {
        emoji:'☕', name:'Desarrollador Java / Kotlin',
        desc:'Sistemas enterprise confiables — bancos, marketplaces, grandes plataformas.',
        detail:'Java y Kotlin son la columna vertebral de los sistemas bancarios, los grandes marketplaces y el software empresarial. Spring Boot hace que el desarrollo sea cómodo y estandarizado. El tipado estricto y décadas de buenas prácticas hacen que el código Java sea confiable y mantenible. Altos salarios en grandes empresas.',
        start:['Spring Boot — spring.io/quickstart','Kotlin — kotlinlang.org','Roadmap Java — roadmap.sh/java'],
        startUrls:['https://spring.io/quickstart','https://kotlinlang.org','https://roadmap.sh/java']
      },
      architect: {
        emoji:'🏗️', name:'Arquitecto Backend',
        desc:'Diseña el sistema general: servicios, bases de datos, patrones de comunicación.',
        detail:'Un arquitecto no escribe todo el código — decide cómo está estructurado el sistema: monolito o microservicios, qué base de datos, cómo se comunican los servicios mediante colas o APIs. Este es el siguiente nivel después de convertirse en un desarrollador experimentado. Necesitas conocimiento profundo de al menos un stack y comprensión de los trade-offs tecnológicos.',
        start:['System Design Primer — github.com/donnemartin/system-design-primer','Libro: Designing Data-Intensive Applications de Martin Kleppmann','roadmap.sh/backend — camino completo de desarrollador backend'],
        startUrls:['https://github.com/donnemartin/system-design-primer','https://dataintensive.net','https://roadmap.sh/backend']
      }
    }
  };

L2.backend.pt = {
    questions: [
      {t:'Qual stack tecnológico te atrai mais?', o:[
        'Python — conciso, poderoso, usado em todo lugar',
        'JavaScript / TypeScript — uma linguagem para frontend e servidor',
        'Java ou Kotlin — rigoroso, confiável, sistemas em grande escala',
        'Me interessa mais design de sistemas do que escrever código'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'O que você mais gosta de fazer no backend?', o:[
        'Escrever scripts, automatizar tarefas, trabalhar com dados',
        'Construir APIs REST rápidas e serviços WebSocket',
        'Criar sistemas enterprise confiáveis projetados para durar anos',
        'Projetar como diferentes serviços se comunicam entre si'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'Qual projeto soa mais incrível?', o:[
        'Um serviço de ML ou um bot inteligente do Telegram',
        'Uma API de alta carga processando 10.000 requisições por segundo',
        'Um sistema bancário ou uma plataforma com milhões de usuários',
        'Um sistema distribuído de dezenas de microsserviços'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'Qual ferramenta você aprenderia primeiro?', o:[
        'FastAPI ou Django — frameworks web Python',
        'Express ou NestJS — frameworks Node.js',
        'Spring Boot — o principal framework Java',
        'Docker, Kubernetes e design de esquemas de banco de dados'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'O que te frustra ou preocupa?', o:[
        'Código chato e verboso com anotações de tipo excessivas',
        'Runtimes lentos e pesados',
        'Dependências instáveis que quebram sem aviso',
        'Quando não há uma estrutura clara e tudo está escrito de forma caótica'
      ], s:[{java:2},{python:2},{node:2},{architect:2}]},
      {t:'Em 3 anos você quer...', o:[
        'Construir serviços de IA e automatizar tudo que for possível',
        'Ser especialista em Node.js e entender async/await no nível do núcleo',
        'Projetar sistemas confiáveis para grandes empresas',
        'Tornar-se Tech Lead ou Solution Architect em uma equipe grande'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]}
    ],
    roles: {
      python: {
        emoji:'🐍', name:'Desenvolvedor Python Backend',
        desc:'Lógica de servidor, APIs e automação na linguagem backend mais popular.',
        detail:'Um desenvolvedor Python backend constrói APIs, serviços e automatiza processos. Os principais frameworks são Django (baterias incluídas) e FastAPI (velocidade máxima). Python também abre as portas para Data Science e ML — muitos desenvolvedores combinam as duas áreas. Enorme comunidade, inúmeras bibliotecas.',
        start:['FastAPI — fastapi.tiangolo.com (melhor ponto de partida)','Django — djangoproject.com','Roadmap Python backend — roadmap.sh/python'],
        startUrls:['https://fastapi.tiangolo.com','https://djangoproject.com','https://roadmap.sh/python']
      },
      node: {
        emoji:'🟩', name:'Desenvolvedor Node.js / TypeScript',
        desc:'Backend em JavaScript — uma linguagem para frontend e servidor.',
        detail:'Um desenvolvedor Node.js constrói APIs e serviços em JavaScript. A maior vantagem: uma linguagem tanto no cliente quanto no servidor. NestJS adiciona arquitetura estrita, TypeScript adiciona confiabilidade. Uma ótima escolha para startups e equipes que querem flexibilidade fullstack.',
        start:['Node.js — nodejs.org','NestJS — nestjs.com (backend estruturado)','Express — expressjs.com (minimalista)'],
        startUrls:['https://nodejs.org','https://nestjs.com','https://expressjs.com']
      },
      java: {
        emoji:'☕', name:'Desenvolvedor Java / Kotlin',
        desc:'Sistemas enterprise confiáveis — bancos, marketplaces, grandes plataformas.',
        detail:'Java e Kotlin são a espinha dorsal de sistemas bancários, grandes marketplaces e software empresarial. Spring Boot torna o desenvolvimento conveniente e padronizado. O tipagem estrita e décadas de boas práticas tornam o código Java confiável e de fácil manutenção. Altos salários em grandes empresas.',
        start:['Spring Boot — spring.io/quickstart','Kotlin — kotlinlang.org','Roadmap Java — roadmap.sh/java'],
        startUrls:['https://spring.io/quickstart','https://kotlinlang.org','https://roadmap.sh/java']
      },
      architect: {
        emoji:'🏗️', name:'Arquiteto Backend',
        desc:'Projeta o sistema geral: serviços, bancos de dados, padrões de comunicação.',
        detail:'Um arquiteto não escreve todo o código — ele decide como o sistema é estruturado: monólito ou microsserviços, qual banco de dados, como os serviços se comunicam via filas ou APIs. Este é o próximo nível após se tornar um desenvolvedor experiente. Você precisa de conhecimento profundo de pelo menos um stack e compreensão dos trade-offs tecnológicos.',
        start:['System Design Primer — github.com/donnemartin/system-design-primer','Livro: Designing Data-Intensive Applications de Martin Kleppmann','roadmap.sh/backend — caminho completo de desenvolvedor backend'],
        startUrls:['https://github.com/donnemartin/system-design-primer','https://dataintensive.net','https://roadmap.sh/backend']
      }
    }
  };

L2.backend.ar = {
    questions: [
      {t:'أي مجموعة تقنيات تجذبك أكثر؟', o:[
        'Python — مختصر وقوي ومستخدم في كل مكان',
        'JavaScript / TypeScript — لغة واحدة للواجهة الأمامية والخادم',
        'Java أو Kotlin — صارم وموثوق وأنظمة واسعة النطاق',
        'أهتم أكثر بتصميم الأنظمة من كتابة الكود'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'ما الذي تستمتع به أكثر في تطوير الخلفية؟', o:[
        'كتابة السكريبتات وأتمتة المهام والعمل مع البيانات',
        'بناء APIs REST سريعة وخدمات WebSocket',
        'إنشاء أنظمة enterprise موثوقة مصممة للاستمرار سنوات',
        'تصميم كيفية تواصل الخدمات المختلفة مع بعضها'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'أي مشروع يبدو الأروع؟', o:[
        'خدمة تعلم آلي أو بوت Telegram ذكي',
        'API عالية الحمل تعالج 10,000 طلب في الثانية',
        'نظام مصرفي أو منصة بملايين المستخدمين',
        'نظام موزع من عشرات الخدمات المصغرة'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'أي أداة ستتعلمها أولاً؟', o:[
        'FastAPI أو Django — أطر عمل Python للويب',
        'Express أو NestJS — أطر عمل Node.js',
        'Spring Boot — إطار Java الرئيسي',
        'Docker وKubernetes وتصميم مخططات قواعد البيانات'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'ما الذي يحبطك أو يقلقك؟', o:[
        'كود ممل مطوّل مع تعليقات نوع مفرطة',
        'بيئات تشغيل بطيئة وثقيلة',
        'تبعيات غير مستقرة تنهار بدون تحذير',
        'عندما لا يوجد هيكل واضح وكل شيء مكتوب بشكل فوضوي'
      ], s:[{java:2},{python:2},{node:2},{architect:2}]},
      {t:'بعد 3 سنوات تريد...', o:[
        'بناء خدمات الذكاء الاصطناعي وأتمتة كل شيء ممكن',
        'أن تكون خبيراً في Node.js وتفهم async/await على مستوى النواة',
        'تصميم أنظمة موثوقة للشركات الكبيرة',
        'أن تصبح Tech Lead أو Solution Architect في فريق كبير'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]}
    ],
    roles: {
      python: {
        emoji:'🐍', name:'مطور Python للخلفية',
        desc:'منطق الخادم وواجهات API والأتمتة في لغة الخلفية الأكثر شعبية.',
        detail:'يبني مطور Python للخلفية واجهات API وخدمات ويؤتمت العمليات. الأطر الرئيسية هي Django (شاملة كل شيء) وFastAPI (أقصى سرعة). يفتح Python أيضاً الباب أمام علم البيانات والتعلم الآلي — يجمع كثير من المطورين بين المجالين. مجتمع ضخم ومكتبات لا تحصى.',
        start:['FastAPI — fastapi.tiangolo.com (أفضل نقطة انطلاق)','Django — djangoproject.com','خارطة طريق Python — roadmap.sh/python'],
        startUrls:['https://fastapi.tiangolo.com','https://djangoproject.com','https://roadmap.sh/python']
      },
      node: {
        emoji:'🟩', name:'مطور Node.js / TypeScript',
        desc:'الخلفية بـ JavaScript — لغة واحدة للواجهة الأمامية والخادم.',
        detail:'يبني مطور Node.js واجهات API وخدمات بـ JavaScript. أكبر ميزة: لغة واحدة على جانبي العميل والخادم. تضيف NestJS بنية صارمة، وTypeScript تضيف الموثوقية. خيار رائع للشركات الناشئة والفرق التي تريد مرونة fullstack.',
        start:['Node.js — nodejs.org','NestJS — nestjs.com (خلفية منظمة)','Express — expressjs.com (بسيط ومختصر)'],
        startUrls:['https://nodejs.org','https://nestjs.com','https://expressjs.com']
      },
      java: {
        emoji:'☕', name:'مطور Java / Kotlin',
        desc:'أنظمة enterprise موثوقة — البنوك والأسواق والمنصات الكبيرة.',
        detail:'Java وKotlin هما العمود الفقري لأنظمة البنوك والأسواق الكبيرة وبرامج المؤسسات. يجعل Spring Boot التطوير مريحاً وموحداً. التيبيب الصارم وعقود من أفضل الممارسات يجعل كود Java موثوقاً وسهل الصيانة. رواتب عالية في الشركات الكبيرة.',
        start:['Spring Boot — spring.io/quickstart','Kotlin — kotlinlang.org','خارطة طريق Java — roadmap.sh/java'],
        startUrls:['https://spring.io/quickstart','https://kotlinlang.org','https://roadmap.sh/java']
      },
      architect: {
        emoji:'🏗️', name:'مهندس معمارية الخلفية',
        desc:'يصمم النظام الشامل: الخدمات وقواعد البيانات وأنماط التواصل.',
        detail:'المهندس المعماري لا يكتب كل الكود — يقرر كيفية هيكلة النظام: أحادي أم خدمات مصغرة، أي قاعدة بيانات، كيف تتواصل الخدمات عبر الطوابير أو واجهات API. هذا هو المستوى التالي بعد أن تصبح مطوراً متمرساً. تحتاج إلى معرفة عميقة بمجموعة تقنيات واحدة على الأقل وفهم المقايضات التقنية.',
        start:['System Design Primer — github.com/donnemartin/system-design-primer','كتاب: Designing Data-Intensive Applications لمارتن كليبمان','roadmap.sh/backend — مسار المطور الكامل'],
        startUrls:['https://github.com/donnemartin/system-design-primer','https://dataintensive.net','https://roadmap.sh/backend']
      }
    }
  };

L2.backend.he = {
    questions: [
      {t:'איזה טק-סטק מושך אותך יותר מכל?', o:[
        'Python — תמציתי, עוצמתי, בשימוש בכל מקום',
        'JavaScript / TypeScript — שפה אחת לפרונט ולשרת',
        'Java או Kotlin — קפדני, אמין, מערכות גדולות',
        'אני יותר מעוניין בתכנון ארכיטקטורת מערכות מאשר לכתוב קוד'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'מה אתה הכי אוהב לעשות בבק-אנד?', o:[
        'לכתוב סקריפטים, לאוטומט משימות ולעבוד עם נתונים',
        'לבנות REST API מהירים ושירותי WebSocket',
        'ליצור מערכות enterprise אמינות לשנים קדימה',
        'לתכנן איך שירותים מתקשרים ביניהם'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'איזה פרויקט נשמע הכי מגניב?', o:[
        'שירות ML או בוט Telegram עם התנהגות חכמה',
        'API בעומס גבוה שמטפל ב-10,000 בקשות לשנייה',
        'מערכת בנקאית או פלטפורמה עם מיליוני משתמשים',
        'מערכת מבוזרת של עשרות מיקרו-שירותים'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'איזה כלי תלמד ראשון?', o:[
        'FastAPI או Django — פריימוורקים של Python',
        'Express או NestJS — פריימוורקים של Node.js',
        'Spring Boot — פריימוורק Java הראשי',
        'Docker, Kubernetes ותכנון סכמות בסיסי נתונים'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]},
      {t:'מה מפחיד אותך או מרגיז?', o:[
        'קוד מפורט ומשעמם עם הרבה הגדרות טיפוסים',
        'ריצה איטית וכבדה',
        'תלויות לא יציבות שנשברות בלי אזהרה',
        'כשאין מבנה ברור וכל הקוד כתוב בצורה כאוטית'
      ], s:[{java:2},{python:2},{node:2},{architect:2}]},
      {t:'בעוד 3 שנים אתה רוצה...', o:[
        'לבנות שירותי AI ולאוטומט כל מה שאפשר',
        'להיות מומחה Node.js שמבין async/await עד לעומק',
        'לתכנן מערכות אמינות לחברות גדולות',
        'להפוך ל-Tech Lead או Solution Architect בצוות גדול'
      ], s:[{python:3},{node:3},{java:3},{architect:3}]}
    ],
    roles: {
      python: {
        emoji:'🐍', name:'מפתח Python Backend',
        desc:'לוגיקת שרת, API ואוטומציה בשפה הפופולרית ביותר לבק-אנד.',
        detail:'מפתח Python בק-אנד בונה API, שירותים ומבצע אוטומציה של תהליכים. הפריימוורקים העיקריים הם Django (כולל הכל) ו-FastAPI (מהירות מקסימלית). Python גם פותח את הדלת ל-Data Science ו-ML. קהילה עצומה, ספריות אינסופיות.',
        start:['FastAPI — fastapi.tiangolo.com (נקודת פתיחה מצוינת)','Django — djangoproject.com','מפת דרכים Python — roadmap.sh/python'],
        startUrls:['https://fastapi.tiangolo.com','https://djangoproject.com','https://roadmap.sh/python']
      },
      node: {
        emoji:'🟩', name:'מפתח Node.js / TypeScript',
        desc:'בק-אנד ב-JavaScript — שפה אחת לפרונט ולשרת.',
        detail:'מפתח Node.js בונה API ושירותים ב-JavaScript. היתרון הגדול ביותר הוא שפה אחת גם ב-client וגם ב-server. NestJS מוסיף ארכיטקטורה קפדנית, TypeScript מוסיף אמינות. בחירה מצוינת לסטארטאפים.',
        start:['Node.js — nodejs.org','NestJS — nestjs.com (בק-אנד מובנה)','Express — expressjs.com (מינימליסטי)'],
        startUrls:['https://nodejs.org','https://nestjs.com','https://expressjs.com']
      },
      java: {
        emoji:'☕', name:'מפתח Java / Kotlin',
        desc:'מערכות enterprise אמינות — בנקים, מרקטפלייסים, פלטפורמות גדולות.',
        detail:'Java ו-Kotlin הם הבסיס של מערכות בנקאיות, מרקטפלייסים גדולים ותוכנת ארגון. Spring Boot הופך את הפיתוח לנוח ומסטנדרטי. טיפוסים קפדניים ושנים של best practices הופכים קוד Java לאמין וקל לתחזוקה. משכורות גבוהות בחברות גדולות.',
        start:['Spring Boot — spring.io/quickstart','Kotlin — kotlinlang.org','מפת דרכים Java — roadmap.sh/java'],
        startUrls:['https://spring.io/quickstart','https://kotlinlang.org','https://roadmap.sh/java']
      },
      architect: {
        emoji:'🏗️', name:'ארכיטקט Backend',
        desc:'מתכנן את המבנה הכולל של המערכת: שירותים, בסיסי נתונים, תקשורת.',
        detail:'ארכיטקט לא כותב את כל הקוד — הוא מחליט איך המערכת בנויה: מונוליט או מיקרו-שירותים, איזה בסיס נתונים, איך שירותים מתקשרים. זהו הרמה הבאה אחרי מפתח מנוסה. נדרשת ידיעה עמוקה של לפחות stack אחד והבנת פשרות בין טכנולוגיות.',
        start:['System Design Primer — github.com/donnemartin/system-design-primer','ספר: Designing Data-Intensive Applications מאת Martin Kleppmann','roadmap.sh/backend — מסלול מלא'],
        startUrls:['https://github.com/donnemartin/system-design-primer','https://dataintensive.net','https://roadmap.sh/backend']
      }
    }
  };
L2.backend.zh = {
  questions: [
    { t:'后端开发中什么最吸引你？', o:['API设计——RESTful服务、GraphQL、微服务','数据库——SQL、NoSQL、查询优化','系统架构——可扩展性、缓存、消息队列','安全与认证——JWT、OAuth、数据保护'], s:[{api:3},{database:3},{arch:3},{security:3}] },
    { t:'你最想掌握哪项技术？', o:['REST API设计和OpenAPI文档规范','PostgreSQL高级技术和查询优化','微服务、Docker和Kubernetes','OWASP安全实践和渗透测试基础'], s:[{api:3},{database:3},{arch:3},{security:3}] },
    { t:'工作的哪个成果最让你满意？', o:['构建了一个供成千上万人使用的API','将慢查询从5秒优化到20毫秒','设计了一套支撑100万用户的架构','发现并修复了严重的安全漏洞','实现了关键认证模块'], s:[{api:3},{database:3},{arch:3},{security:3}] },
    { t:'你倾向于参与哪种讨论？', o:['关于API版本控制和接口设计的讨论','数据库schema设计和索引策略','服务拆分和容量规划','威胁建模和安全代码审查'], s:[{api:3},{database:3},{arch:3},{security:3}] },
    { t:'你会选择哪个项目？', o:['为移动应用设计完整API','优化拥有数百万条记录的数据库','把单体应用拆分成微服务','对现有应用做安全审计'], s:[{api:3},{database:3},{arch:3},{security:3}] },
    { t:'10年后你看到自己在哪里？', o:['领先产品的API平台负责人','设计大型系统数据层的首席数据库架构师','带领团队的系统架构师','科技公司的首席信息安全官或安全负责人'], s:[{api:3},{database:3},{arch:3},{security:3}] }
  ],
  roles: {
    api: { emoji:'🔌', name:'API工程师', desc:'设计清晰、文档完善、被开发者喜爱的接口', detail:'你构建系统沟通的语言。你设计直观的REST API，编写清晰的文档，并确保接口在多年后仍然可维护。这是后端最具战略性的工作之一。', start:['学习REST原则和HTTP协议','掌握OpenAPI/Swagger文档规范','研究优秀API设计——Stripe、Twilio的文档','用FastAPI（Python）或Express（Node.js）构建API'] },
    database: { emoji:'🗄️', name:'数据库工程师', desc:'让数据存储快速、可靠和一致', detail:'你深入理解数据库底层：索引结构、查询计划、事务和ACID属性。你的优化工作在性能数据上直接可见。', start:['精通SQL——窗口函数、CTE、查询计划','学习PostgreSQL高级功能——分区、全文搜索','了解Redis和缓存策略','实践：用EXPLAIN分析优化真实的慢查询'] },
    arch: { emoji:'🏗️', name:'系统架构师', desc:'设计可扩展、可维护且不会宕机的系统', detail:'你从大局出发思考。你选择技术栈，设计服务边界，规划容量，并确保系统在负载下保持稳定。这是丰富经验积累的方向。', start:['学习系统设计基础——《系统设计面试》','掌握Docker和Kubernetes的实际使用','研究Netflix、Airbnb的架构博客','学习消息队列——RabbitMQ、Kafka'] },
    security: { emoji:'🛡️', name:'安全工程师', desc:'在攻击者之前发现漏洞，保护用户数据', detail:'你将安全思维融入开发的每个阶段。你进行代码审查以发现安全问题，实施认证和授权，并了解常见攻击——SQL注入、XSS、CSRF。', start:['学习OWASP Top 10——最常见的Web漏洞','实践：在TryHackMe上做CTF练习','掌握JWT和OAuth 2.0','学习HTTPS、证书和传输层安全'] }
  },
  ui: { l2back:'← 返回后端', title:'后端开发：选择你的专业方向' }
};
