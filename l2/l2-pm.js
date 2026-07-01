// L2 test — Product Manager
// Roles: strategy 🎯 | growth 📈 | ux 🎨 | technical ⚙️
// 6 questions × 8 languages

// ─── RU ──────────────────────────────────────────────────────────────────────
L2.pm.ru = {
  questions: [
    {
      t: 'Что тебе интереснее всего в роли продакт-менеджера?',
      o: [
        'Определять стратегию продукта и расставлять приоритеты',
        'Запускать эксперименты и растить ключевые метрики',
        'Глубоко понимать пользователей и улучшать их опыт',
        'Работать на стыке бизнеса и инженерии над техническими продуктами'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'Как ты решаешь, что делать следующим?',
      o: [
        'Строю роадмап на основе стратегии и OKR',
        'Смотрю на данные: конверсии, retention, воронки',
        'Провожу интервью с пользователями и обобщаю инсайты',
        'Оцениваю технический долг и архитектурные зависимости'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'Какой инструмент тебе ближе всего?',
      o: [
        'Jira + Notion — роадмап и Product Requirements Doc',
        'Amplitude / Mixpanel + A/B-тесты',
        'Miro + Figma + пользовательские интервью',
        'SQL + Confluence + API-документация'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'С кем тебе приятнее всего работать?',
      o: [
        'Со стейкхолдерами и бизнесом — согласовывать приоритеты',
        'С аналитиками — копаться в данных и искать точки роста',
        'С дизайнерами и UX-исследователями',
        'С инженерами — обсуждать архитектуру и технические решения'
      ],
      s: [{strategy:3,growth:1},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'Что для тебя главный показатель успеха продукта?',
      o: [
        'Выполнение стратегических OKR и рост доли рынка',
        'Рост DAU, retention и revenue',
        'Высокий NPS и позитивная обратная связь от пользователей',
        'Стабильность платформы, аптайм и производительность API'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'Как ты предпочитаешь учиться?',
      o: [
        'Читаю книги о стратегии продукта (Inspired, Continuous Discovery)',
        'Изучаю кейсы роста крупных продуктов (Airbnb, Duolingo)',
        'Провожу собственные UX-исследования и анализирую результаты',
        'Прохожу технические курсы по SQL, API и системному дизайну'
      ],
      s: [{strategy:3,ux:1},{growth:3},{ux:3},{technical:3}]
    }
  ],
  roles: {
    strategy: {
      emoji: '🎯',
      name: 'Стратегический PM',
      desc: 'Определяю видение продукта, расставляю приоритеты и веду команду к бизнес-целям',
      detail: 'Ты строишь роадмап, пишешь PRD, работаешь со стейкхолдерами и задаёшь направление развития продукта. Инструменты: Jira, Notion, Confluence, Miro.',
      start: ['Книга Inspired', 'Roadmap Templates', 'ProductPlan'],
      startUrls: ['https://www.svpg.com/books/inspired-how-to-create-products-customers-love','https://notion.so/templates/product-roadmap','https://www.productplan.com']
    },
    growth: {
      emoji: '📈',
      name: 'Growth PM',
      desc: 'Выращиваю метрики продукта — запускаю эксперименты, оптимизирую воронки и ищу точки роста',
      detail: 'Ты проводишь A/B-тесты, анализируешь данные, ищешь узкие места в воронке и масштабируешь то, что работает. Инструменты: Amplitude, Mixpanel, SQL, Looker.',
      start: ['Amplitude Blog', 'GrowthDesign', 'Reforge'],
      startUrls: ['https://amplitude.com/blog','https://growth.design','https://www.reforge.com']
    },
    ux: {
      emoji: '🎨',
      name: 'UX Product Manager',
      desc: 'Ставлю пользователя в центр — провожу исследования, улучшаю опыт и проверяю гипотезы',
      detail: 'Ты проводишь пользовательские интервью и usability-тесты, работаешь с дизайнерами и переводишь инсайты в конкретные фичи. Инструменты: Miro, Figma, Dovetail, Hotjar.',
      start: ['Nielsen Norman Group', 'Dovetail', 'Continuous Discovery Habits'],
      startUrls: ['https://www.nngroup.com/articles','https://dovetailapp.com','https://www.producttalk.org/continuous-discovery-habits']
    },
    technical: {
      emoji: '⚙️',
      name: 'Technical PM',
      desc: 'Работаю на стыке бизнеса и инженерии — управляю платформами, API и техническими продуктами',
      detail: 'Ты пишешь технические спецификации, обсуждаешь архитектуру с инженерами и управляешь платформенными или API-продуктами. Инструменты: SQL, Confluence, Postman, системный дизайн.',
      start: ['SQL для PM', 'Структура API', 'System Design Primer'],
      startUrls: ['https://sqlbolt.com','https://stoplight.io/api-documentation','https://github.com/donnemartin/system-design-primer']
    }
  }
};

// ─── EN ──────────────────────────────────────────────────────────────────────
L2.pm.en = {
  questions: [
    {
      t: 'What interests you most as a Product Manager?',
      o: [
        'Defining product strategy and setting priorities',
        'Running experiments and growing key metrics',
        'Deeply understanding users and improving their experience',
        'Working at the intersection of business and engineering'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'How do you decide what to work on next?',
      o: [
        'Build a roadmap based on strategy and OKRs',
        'Look at the data: conversions, retention, funnels',
        'Run user interviews and synthesize the insights',
        'Assess technical debt and architectural dependencies'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'Which tool feels most natural to you?',
      o: [
        'Jira + Notion — roadmap and Product Requirements Docs',
        'Amplitude / Mixpanel + A/B tests',
        'Miro + Figma + user interviews',
        'SQL + Confluence + API documentation'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'Who do you enjoy working with most?',
      o: [
        'Stakeholders and business — aligning on priorities',
        'Analysts — digging into data and finding growth levers',
        'Designers and UX researchers',
        'Engineers — discussing architecture and technical trade-offs'
      ],
      s: [{strategy:3,growth:1},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'What\'s your top success metric for a product?',
      o: [
        'Strategic OKR completion and market share growth',
        'DAU, retention, and revenue growth',
        'High NPS and positive user feedback',
        'Platform stability, uptime, and API performance'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'How do you prefer to learn?',
      o: [
        'Reading product strategy books (Inspired, Continuous Discovery)',
        'Studying growth case studies from Airbnb, Duolingo, etc.',
        'Running my own UX research and analyzing findings',
        'Taking technical courses on SQL, APIs, and system design'
      ],
      s: [{strategy:3,ux:1},{growth:3},{ux:3},{technical:3}]
    }
  ],
  roles: {
    strategy: {
      emoji: '🎯',
      name: 'Strategic PM',
      desc: 'I define product vision, set priorities, and guide the team toward business goals',
      detail: 'You build roadmaps, write PRDs, work with stakeholders, and set the direction for the product. Tools: Jira, Notion, Confluence, Miro.',
      start: ['Inspired (book)', 'Roadmap Templates', 'ProductPlan'],
      startUrls: ['https://www.svpg.com/books/inspired-how-to-create-products-customers-love','https://notion.so/templates/product-roadmap','https://www.productplan.com']
    },
    growth: {
      emoji: '📈',
      name: 'Growth PM',
      desc: 'I grow product metrics — run experiments, optimize funnels, and find growth levers',
      detail: 'You run A/B tests, analyze data, find funnel bottlenecks, and scale what works. Tools: Amplitude, Mixpanel, SQL, Looker.',
      start: ['Amplitude Blog', 'GrowthDesign', 'Reforge'],
      startUrls: ['https://amplitude.com/blog','https://growth.design','https://www.reforge.com']
    },
    ux: {
      emoji: '🎨',
      name: 'UX Product Manager',
      desc: 'I put the user first — research, test, and improve the product experience',
      detail: 'You run user interviews and usability tests, work with designers, and translate insights into features. Tools: Miro, Figma, Dovetail, Hotjar.',
      start: ['Nielsen Norman Group', 'Dovetail', 'Continuous Discovery Habits'],
      startUrls: ['https://www.nngroup.com/articles','https://dovetailapp.com','https://www.producttalk.org/continuous-discovery-habits']
    },
    technical: {
      emoji: '⚙️',
      name: 'Technical PM',
      desc: 'I bridge business and engineering — owning platforms, APIs, and technical products',
      detail: 'You write technical specs, discuss architecture with engineers, and own platform or API products. Tools: SQL, Confluence, Postman, system design.',
      start: ['SQL for PMs', 'API Design Guide', 'System Design Primer'],
      startUrls: ['https://sqlbolt.com','https://stoplight.io/api-documentation','https://github.com/donnemartin/system-design-primer']
    }
  }
};

// ─── DE ──────────────────────────────────────────────────────────────────────
L2.pm.de = {
  questions: [
    {
      t: 'Was interessiert dich am meisten als Product Manager?',
      o: [
        'Produktstrategie definieren und Prioritäten setzen',
        'Experimente starten und wichtige Metriken steigern',
        'Nutzer tiefgehend verstehen und ihre Erfahrung verbessern',
        'An der Schnittstelle zwischen Business und Engineering arbeiten'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'Wie entscheidest du, was als nächstes zu tun ist?',
      o: [
        'Eine Roadmap basierend auf Strategie und OKRs erstellen',
        'Daten analysieren: Conversions, Retention, Funnels',
        'Nutzerinterviews führen und Erkenntnisse zusammenfassen',
        'Technische Schulden und architektonische Abhängigkeiten bewerten'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'Welches Tool fühlt sich für dich am natürlichsten an?',
      o: [
        'Jira + Notion — Roadmap und Product Requirements Docs',
        'Amplitude / Mixpanel + A/B-Tests',
        'Miro + Figma + Nutzerinterviews',
        'SQL + Confluence + API-Dokumentation'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'Mit wem arbeitest du am liebsten zusammen?',
      o: [
        'Stakeholder und Business — Prioritäten abstimmen',
        'Analysten — Daten durchforsten und Wachstumshebel finden',
        'Designer und UX-Forscher',
        'Ingenieure — Architektur und technische Trade-offs besprechen'
      ],
      s: [{strategy:3,growth:1},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'Was ist deine wichtigste Erfolgskennzahl für ein Produkt?',
      o: [
        'Strategische OKR-Erfüllung und Marktanteilswachstum',
        'DAU-, Retention- und Umsatzwachstum',
        'Hoher NPS und positives Nutzerfeedback',
        'Plattformstabilität, Uptime und API-Performance'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'Wie lernst du am liebsten?',
      o: [
        'Bücher über Produktstrategie lesen (Inspired, Continuous Discovery)',
        'Wachstumsfallstudien von Airbnb, Duolingo etc. studieren',
        'Eigene UX-Forschung durchführen und Ergebnisse analysieren',
        'Technische Kurse zu SQL, APIs und System Design belegen'
      ],
      s: [{strategy:3,ux:1},{growth:3},{ux:3},{technical:3}]
    }
  ],
  roles: {
    strategy: {
      emoji: '🎯',
      name: 'Strategischer PM',
      desc: 'Ich definiere die Produktvision, setze Prioritäten und führe das Team zu Geschäftszielen',
      detail: 'Du baust Roadmaps, schreibst PRDs, arbeitest mit Stakeholdern und gibst die Richtung für das Produkt vor. Tools: Jira, Notion, Confluence, Miro.',
      start: ['Inspired (Buch)', 'Roadmap-Vorlagen', 'ProductPlan'],
      startUrls: ['https://www.svpg.com/books/inspired-how-to-create-products-customers-love','https://notion.so/templates/product-roadmap','https://www.productplan.com']
    },
    growth: {
      emoji: '📈',
      name: 'Growth PM',
      desc: 'Ich steigere Produktmetriken — starte Experimente, optimiere Funnels und finde Wachstumshebel',
      detail: 'Du führst A/B-Tests durch, analysierst Daten, findest Funnel-Engpässe und skalierst, was funktioniert. Tools: Amplitude, Mixpanel, SQL, Looker.',
      start: ['Amplitude Blog', 'GrowthDesign', 'Reforge'],
      startUrls: ['https://amplitude.com/blog','https://growth.design','https://www.reforge.com']
    },
    ux: {
      emoji: '🎨',
      name: 'UX Product Manager',
      desc: 'Ich stelle den Nutzer in den Mittelpunkt — forsche, teste und verbessere das Produkterlebnis',
      detail: 'Du führst Nutzerinterviews und Usability-Tests durch, arbeitest mit Designern und übersetzt Erkenntnisse in Features. Tools: Miro, Figma, Dovetail, Hotjar.',
      start: ['Nielsen Norman Group', 'Dovetail', 'Continuous Discovery Habits'],
      startUrls: ['https://www.nngroup.com/articles','https://dovetailapp.com','https://www.producttalk.org/continuous-discovery-habits']
    },
    technical: {
      emoji: '⚙️',
      name: 'Technical PM',
      desc: 'Ich verbinde Business und Engineering — verantworte Plattformen, APIs und technische Produkte',
      detail: 'Du schreibst technische Spezifikationen, besprichst Architektur mit Ingenieuren und verantwortest Plattform- oder API-Produkte. Tools: SQL, Confluence, Postman, System Design.',
      start: ['SQL für PMs', 'API Design Guide', 'System Design Primer'],
      startUrls: ['https://sqlbolt.com','https://stoplight.io/api-documentation','https://github.com/donnemartin/system-design-primer']
    }
  }
};

// ─── FR ──────────────────────────────────────────────────────────────────────
L2.pm.fr = {
  questions: [
    {
      t: 'Qu\'est-ce qui t\'intéresse le plus en tant que Product Manager?',
      o: [
        'Définir la stratégie produit et établir les priorités',
        'Lancer des expériences et faire croître les métriques clés',
        'Comprendre profondément les utilisateurs et améliorer leur expérience',
        'Travailler à l\'intersection du business et de l\'ingénierie'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'Comment décides-tu sur quoi travailler ensuite?',
      o: [
        'Construire une roadmap basée sur la stratégie et les OKR',
        'Regarder les données: conversions, rétention, entonnoirs',
        'Mener des interviews utilisateurs et synthétiser les insights',
        'Évaluer la dette technique et les dépendances architecturales'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'Quel outil te semble le plus naturel?',
      o: [
        'Jira + Notion — roadmap et Product Requirements Docs',
        'Amplitude / Mixpanel + tests A/B',
        'Miro + Figma + interviews utilisateurs',
        'SQL + Confluence + documentation API'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'Avec qui aimes-tu travailler le plus?',
      o: [
        'Les parties prenantes et le business — aligner les priorités',
        'Les analystes — fouiller les données et trouver des leviers de croissance',
        'Les designers et les chercheurs UX',
        'Les ingénieurs — discuter architecture et compromis techniques'
      ],
      s: [{strategy:3,growth:1},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'Quel est ton principal indicateur de succès pour un produit?',
      o: [
        'Atteinte des OKR stratégiques et croissance de part de marché',
        'Croissance du DAU, de la rétention et du revenu',
        'NPS élevé et retours positifs des utilisateurs',
        'Stabilité de la plateforme, uptime et performance des API'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'Comment préfères-tu apprendre?',
      o: [
        'Lire des livres sur la stratégie produit (Inspired, Continuous Discovery)',
        'Étudier les cas de croissance d\'Airbnb, Duolingo, etc.',
        'Mener mes propres recherches UX et analyser les résultats',
        'Suivre des cours techniques sur SQL, APIs et la conception de systèmes'
      ],
      s: [{strategy:3,ux:1},{growth:3},{ux:3},{technical:3}]
    }
  ],
  roles: {
    strategy: {
      emoji: '🎯',
      name: 'PM Stratégique',
      desc: 'Je définis la vision du produit, fixe les priorités et guide l\'équipe vers les objectifs business',
      detail: 'Tu construis des roadmaps, écris des PRDs, travailles avec les parties prenantes et définis la direction du produit. Outils: Jira, Notion, Confluence, Miro.',
      start: ['Inspired (livre)', 'Modèles de roadmap', 'ProductPlan'],
      startUrls: ['https://www.svpg.com/books/inspired-how-to-create-products-customers-love','https://notion.so/templates/product-roadmap','https://www.productplan.com']
    },
    growth: {
      emoji: '📈',
      name: 'Growth PM',
      desc: 'Je fais croître les métriques — lance des expériences, optimise les entonnoirs et trouve des leviers',
      detail: 'Tu mènes des tests A/B, analyses les données, trouves les goulots d\'étranglement du funnel et scales ce qui fonctionne. Outils: Amplitude, Mixpanel, SQL, Looker.',
      start: ['Amplitude Blog', 'GrowthDesign', 'Reforge'],
      startUrls: ['https://amplitude.com/blog','https://growth.design','https://www.reforge.com']
    },
    ux: {
      emoji: '🎨',
      name: 'UX Product Manager',
      desc: 'Je place l\'utilisateur au centre — recherche, teste et améliore l\'expérience produit',
      detail: 'Tu mènes des interviews utilisateurs et des tests d\'utilisabilité, travailles avec des designers et traduis les insights en fonctionnalités. Outils: Miro, Figma, Dovetail, Hotjar.',
      start: ['Nielsen Norman Group', 'Dovetail', 'Continuous Discovery Habits'],
      startUrls: ['https://www.nngroup.com/articles','https://dovetailapp.com','https://www.producttalk.org/continuous-discovery-habits']
    },
    technical: {
      emoji: '⚙️',
      name: 'Technical PM',
      desc: 'Je fais le lien entre business et ingénierie — gère des plateformes, APIs et produits techniques',
      detail: 'Tu écris des spécifications techniques, discutes d\'architecture avec les ingénieurs et gères des produits plateforme ou API. Outils: SQL, Confluence, Postman, conception de systèmes.',
      start: ['SQL pour PMs', 'Guide de conception API', 'System Design Primer'],
      startUrls: ['https://sqlbolt.com','https://stoplight.io/api-documentation','https://github.com/donnemartin/system-design-primer']
    }
  }
};

// ─── ES ──────────────────────────────────────────────────────────────────────
L2.pm.es = {
  questions: [
    {
      t: '¿Qué es lo que más te interesa como Product Manager?',
      o: [
        'Definir la estrategia del producto y establecer prioridades',
        'Lanzar experimentos y hacer crecer las métricas clave',
        'Entender profundamente a los usuarios y mejorar su experiencia',
        'Trabajar en la intersección entre negocio e ingeniería'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: '¿Cómo decides qué hacer a continuación?',
      o: [
        'Construir un roadmap basado en estrategia y OKRs',
        'Mirar los datos: conversiones, retención, embudos',
        'Hacer entrevistas con usuarios y sintetizar los insights',
        'Evaluar la deuda técnica y las dependencias arquitectónicas'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: '¿Qué herramienta te resulta más natural?',
      o: [
        'Jira + Notion — roadmap y Product Requirements Docs',
        'Amplitude / Mixpanel + pruebas A/B',
        'Miro + Figma + entrevistas a usuarios',
        'SQL + Confluence + documentación de API'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: '¿Con quién disfrutas más trabajar?',
      o: [
        'Stakeholders y negocio — alinear prioridades',
        'Analistas — explorar datos y encontrar palancas de crecimiento',
        'Diseñadores e investigadores de UX',
        'Ingenieros — discutir arquitectura y decisiones técnicas'
      ],
      s: [{strategy:3,growth:1},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: '¿Cuál es tu principal métrica de éxito para un producto?',
      o: [
        'Cumplimiento de OKRs estratégicos y crecimiento de cuota de mercado',
        'Crecimiento de DAU, retención y revenue',
        'NPS alto y feedback positivo de los usuarios',
        'Estabilidad de la plataforma, uptime y rendimiento de la API'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: '¿Cómo prefieres aprender?',
      o: [
        'Leer libros sobre estrategia de producto (Inspired, Continuous Discovery)',
        'Estudiar casos de crecimiento de Airbnb, Duolingo, etc.',
        'Realizar mi propia investigación UX y analizar los resultados',
        'Tomar cursos técnicos de SQL, APIs y diseño de sistemas'
      ],
      s: [{strategy:3,ux:1},{growth:3},{ux:3},{technical:3}]
    }
  ],
  roles: {
    strategy: {
      emoji: '🎯',
      name: 'PM Estratégico',
      desc: 'Defino la visión del producto, establezco prioridades y guío al equipo hacia los objetivos de negocio',
      detail: 'Construyes roadmaps, escribes PRDs, trabajas con stakeholders y defines la dirección del producto. Herramientas: Jira, Notion, Confluence, Miro.',
      start: ['Inspired (libro)', 'Plantillas de roadmap', 'ProductPlan'],
      startUrls: ['https://www.svpg.com/books/inspired-how-to-create-products-customers-love','https://notion.so/templates/product-roadmap','https://www.productplan.com']
    },
    growth: {
      emoji: '📈',
      name: 'Growth PM',
      desc: 'Hago crecer las métricas del producto — lanzo experimentos, optimizo embudos y encuentro palancas',
      detail: 'Realizas pruebas A/B, analizas datos, encuentras cuellos de botella en el embudo y escalas lo que funciona. Herramientas: Amplitude, Mixpanel, SQL, Looker.',
      start: ['Amplitude Blog', 'GrowthDesign', 'Reforge'],
      startUrls: ['https://amplitude.com/blog','https://growth.design','https://www.reforge.com']
    },
    ux: {
      emoji: '🎨',
      name: 'UX Product Manager',
      desc: 'Pongo al usuario en el centro — investigo, pruebo y mejoro la experiencia del producto',
      detail: 'Realizas entrevistas a usuarios y pruebas de usabilidad, trabajas con diseñadores y conviertes insights en funcionalidades. Herramientas: Miro, Figma, Dovetail, Hotjar.',
      start: ['Nielsen Norman Group', 'Dovetail', 'Continuous Discovery Habits'],
      startUrls: ['https://www.nngroup.com/articles','https://dovetailapp.com','https://www.producttalk.org/continuous-discovery-habits']
    },
    technical: {
      emoji: '⚙️',
      name: 'Technical PM',
      desc: 'Conecto negocio e ingeniería — gestiono plataformas, APIs y productos técnicos',
      detail: 'Escribes especificaciones técnicas, discutes arquitectura con ingenieros y gestionas productos de plataforma o API. Herramientas: SQL, Confluence, Postman, diseño de sistemas.',
      start: ['SQL para PMs', 'Guía de diseño de API', 'System Design Primer'],
      startUrls: ['https://sqlbolt.com','https://stoplight.io/api-documentation','https://github.com/donnemartin/system-design-primer']
    }
  }
};

// ─── PT ──────────────────────────────────────────────────────────────────────
L2.pm.pt = {
  questions: [
    {
      t: 'O que mais te interessa como Product Manager?',
      o: [
        'Definir a estratégia do produto e estabelecer prioridades',
        'Lançar experimentos e crescer métricas-chave',
        'Entender profundamente os usuários e melhorar sua experiência',
        'Trabalhar na interseção entre negócio e engenharia'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'Como você decide o que fazer a seguir?',
      o: [
        'Construir um roadmap baseado em estratégia e OKRs',
        'Olhar os dados: conversões, retenção, funis',
        'Fazer entrevistas com usuários e sintetizar os insights',
        'Avaliar a dívida técnica e as dependências arquiteturais'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'Qual ferramenta parece mais natural para você?',
      o: [
        'Jira + Notion — roadmap e Product Requirements Docs',
        'Amplitude / Mixpanel + testes A/B',
        'Miro + Figma + entrevistas com usuários',
        'SQL + Confluence + documentação de API'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'Com quem você gosta mais de trabalhar?',
      o: [
        'Stakeholders e negócio — alinhar prioridades',
        'Analistas — explorar dados e encontrar alavancas de crescimento',
        'Designers e pesquisadores de UX',
        'Engenheiros — discutir arquitetura e decisões técnicas'
      ],
      s: [{strategy:3,growth:1},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'Qual é sua principal métrica de sucesso para um produto?',
      o: [
        'Atingimento de OKRs estratégicos e crescimento de market share',
        'Crescimento de DAU, retenção e receita',
        'Alto NPS e feedback positivo dos usuários',
        'Estabilidade da plataforma, uptime e performance da API'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'Como você prefere aprender?',
      o: [
        'Ler livros sobre estratégia de produto (Inspired, Continuous Discovery)',
        'Estudar casos de crescimento do Airbnb, Duolingo, etc.',
        'Fazer minha própria pesquisa UX e analisar os resultados',
        'Fazer cursos técnicos de SQL, APIs e design de sistemas'
      ],
      s: [{strategy:3,ux:1},{growth:3},{ux:3},{technical:3}]
    }
  ],
  roles: {
    strategy: {
      emoji: '🎯',
      name: 'PM Estratégico',
      desc: 'Defino a visão do produto, estabeleço prioridades e guio a equipe rumo aos objetivos de negócio',
      detail: 'Você constrói roadmaps, escreve PRDs, trabalha com stakeholders e define a direção do produto. Ferramentas: Jira, Notion, Confluence, Miro.',
      start: ['Inspired (livro)', 'Templates de roadmap', 'ProductPlan'],
      startUrls: ['https://www.svpg.com/books/inspired-how-to-create-products-customers-love','https://notion.so/templates/product-roadmap','https://www.productplan.com']
    },
    growth: {
      emoji: '📈',
      name: 'Growth PM',
      desc: 'Faço crescer as métricas do produto — lanço experimentos, otimizo funis e encontro alavancas',
      detail: 'Você realiza testes A/B, analisa dados, encontra gargalos no funil e escala o que funciona. Ferramentas: Amplitude, Mixpanel, SQL, Looker.',
      start: ['Amplitude Blog', 'GrowthDesign', 'Reforge'],
      startUrls: ['https://amplitude.com/blog','https://growth.design','https://www.reforge.com']
    },
    ux: {
      emoji: '🎨',
      name: 'UX Product Manager',
      desc: 'Coloco o usuário no centro — pesquiso, testo e melhoro a experiência do produto',
      detail: 'Você faz entrevistas com usuários e testes de usabilidade, trabalha com designers e transforma insights em funcionalidades. Ferramentas: Miro, Figma, Dovetail, Hotjar.',
      start: ['Nielsen Norman Group', 'Dovetail', 'Continuous Discovery Habits'],
      startUrls: ['https://www.nngroup.com/articles','https://dovetailapp.com','https://www.producttalk.org/continuous-discovery-habits']
    },
    technical: {
      emoji: '⚙️',
      name: 'Technical PM',
      desc: 'Conecto negócio e engenharia — gerencio plataformas, APIs e produtos técnicos',
      detail: 'Você escreve especificações técnicas, discute arquitetura com engenheiros e gerencia produtos de plataforma ou API. Ferramentas: SQL, Confluence, Postman, design de sistemas.',
      start: ['SQL para PMs', 'Guia de design de API', 'System Design Primer'],
      startUrls: ['https://sqlbolt.com','https://stoplight.io/api-documentation','https://github.com/donnemartin/system-design-primer']
    }
  }
};

// ─── AR ──────────────────────────────────────────────────────────────────────
L2.pm.ar = {
  questions: [
    {
      t: 'ما الذي يثير اهتمامك أكثر كـ Product Manager؟',
      o: [
        'تحديد استراتيجية المنتج ووضع الأولويات',
        'إطلاق التجارب وتنمية المقاييس الرئيسية',
        'فهم المستخدمين بعمق وتحسين تجربتهم',
        'العمل عند تقاطع الأعمال والهندسة'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'كيف تقرر ما الذي ستعمل عليه بعد ذلك؟',
      o: [
        'بناء خارطة طريق بناء على الاستراتيجية والـ OKRs',
        'النظر في البيانات: التحويلات، الاستبقاء، مسارات التحويل',
        'إجراء مقابلات مع المستخدمين وتجميع الرؤى',
        'تقييم الدين التقني والتبعيات المعمارية'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'أي أداة تشعر أنها الأكثر طبيعية بالنسبة لك؟',
      o: [
        'Jira + Notion — خارطة الطريق ووثائق متطلبات المنتج',
        'Amplitude / Mixpanel + اختبارات A/B',
        'Miro + Figma + مقابلات المستخدمين',
        'SQL + Confluence + توثيق API'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'مع من تستمتع بالعمل أكثر؟',
      o: [
        'أصحاب المصلحة والأعمال — توحيد الأولويات',
        'المحللون — التعمق في البيانات وإيجاد رافعات النمو',
        'المصممون وباحثو تجربة المستخدم',
        'المهندسون — مناقشة البنية والقرارات التقنية'
      ],
      s: [{strategy:3,growth:1},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'ما هو مقياس النجاح الرئيسي للمنتج بالنسبة لك؟',
      o: [
        'تحقيق OKRs الاستراتيجية ونمو حصة السوق',
        'نمو DAU والاستبقاء والإيرادات',
        'NPS مرتفع وتغذية راجعة إيجابية من المستخدمين',
        'استقرار المنصة والـ uptime وأداء الـ API'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'كيف تفضل التعلم؟',
      o: [
        'قراءة كتب استراتيجية المنتج (Inspired, Continuous Discovery)',
        'دراسة حالات نمو Airbnb وDuolingo وغيرها',
        'إجراء أبحاث UX الخاصة وتحليل النتائج',
        'أخذ دورات تقنية في SQL وAPIs وتصميم الأنظمة'
      ],
      s: [{strategy:3,ux:1},{growth:3},{ux:3},{technical:3}]
    }
  ],
  roles: {
    strategy: {
      emoji: '🎯',
      name: 'مدير المنتج الاستراتيجي',
      desc: 'أحدد رؤية المنتج وأضع الأولويات وأقود الفريق نحو أهداف الأعمال',
      detail: 'تبني خرائط طريق، تكتب وثائق متطلبات المنتج (PRD)، تعمل مع أصحاب المصلحة وتحدد اتجاه المنتج. الأدوات: Jira, Notion, Confluence, Miro.',
      start: ['كتاب Inspired', 'قوالب خارطة الطريق', 'ProductPlan'],
      startUrls: ['https://www.svpg.com/books/inspired-how-to-create-products-customers-love','https://notion.so/templates/product-roadmap','https://www.productplan.com']
    },
    growth: {
      emoji: '📈',
      name: 'مدير منتج النمو',
      desc: 'أنمي مقاييس المنتج — أطلق التجارب وأحسن مسارات التحويل وأجد رافعات النمو',
      detail: 'تجري اختبارات A/B، تحلل البيانات، تجد اختناقات المسار وتوسع ما ينجح. الأدوات: Amplitude, Mixpanel, SQL, Looker.',
      start: ['Amplitude Blog', 'GrowthDesign', 'Reforge'],
      startUrls: ['https://amplitude.com/blog','https://growth.design','https://www.reforge.com']
    },
    ux: {
      emoji: '🎨',
      name: 'مدير منتج UX',
      desc: 'أضع المستخدم في المركز — أبحث وأختبر وأحسن تجربة المنتج',
      detail: 'تجري مقابلات مع المستخدمين واختبارات قابلية الاستخدام، تعمل مع المصممين وتحول الرؤى إلى ميزات. الأدوات: Miro, Figma, Dovetail, Hotjar.',
      start: ['Nielsen Norman Group', 'Dovetail', 'Continuous Discovery Habits'],
      startUrls: ['https://www.nngroup.com/articles','https://dovetailapp.com','https://www.producttalk.org/continuous-discovery-habits']
    },
    technical: {
      emoji: '⚙️',
      name: 'مدير المنتج التقني',
      desc: 'أربط الأعمال بالهندسة — أدير المنصات وAPIs والمنتجات التقنية',
      detail: 'تكتب المواصفات التقنية، تناقش البنية مع المهندسين وتدير منتجات المنصة أو API. الأدوات: SQL, Confluence, Postman, تصميم الأنظمة.',
      start: ['SQL لمديري المنتج', 'دليل تصميم API', 'System Design Primer'],
      startUrls: ['https://sqlbolt.com','https://stoplight.io/api-documentation','https://github.com/donnemartin/system-design-primer']
    }
  }
};

// ─── HE ──────────────────────────────────────────────────────────────────────
L2.pm.he = {
  questions: [
    {
      t: 'מה הכי מעניין אותך כ-Product Manager?',
      o: [
        'להגדיר אסטרטגיית מוצר ולקבוע עדיפויות',
        'להריץ ניסויים ולהצמיח מטריקות מפתח',
        'להבין לעומק את המשתמשים ולשפר את החוויה שלהם',
        'לעבוד בצומת שבין עסקים להנדסה'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'איך אתה מחליט על מה לעבוד הלאה?',
      o: [
        'בונה roadmap על בסיס אסטרטגיה ו-OKRs',
        'מסתכל על הנתונים: המרות, retention, פאנלים',
        'עורך ראיונות עם משתמשים ומסכם insights',
        'מעריך חוב טכני ותלויות ארכיטקטוניות'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'איזה כלי הכי טבעי עבורך?',
      o: [
        'Jira + Notion — roadmap ו-Product Requirements Docs',
        'Amplitude / Mixpanel + בדיקות A/B',
        'Miro + Figma + ראיונות משתמשים',
        'SQL + Confluence + תיעוד API'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'עם מי אתה הכי נהנה לעבוד?',
      o: [
        'בעלי עניין ועסקים — לתאם עדיפויות',
        'אנליסטים — לחפור בנתונים ולמצוא מנופי צמיחה',
        'מעצבים וחוקרי UX',
        'מהנדסים — לדון בארכיטקטורה והחלטות טכניות'
      ],
      s: [{strategy:3,growth:1},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'מה המדד העיקרי להצלחת מוצר בשבילך?',
      o: [
        'עמידה ב-OKRs אסטרטגיים וצמיחה בנתח שוק',
        'צמיחה ב-DAU, retention ורווחים',
        'NPS גבוה ומשוב חיובי מהמשתמשים',
        'יציבות הפלטפורמה, uptime וביצועי ה-API'
      ],
      s: [{strategy:3},{growth:3},{ux:3},{technical:3}]
    },
    {
      t: 'איך אתה מעדיף ללמוד?',
      o: [
        'לקרוא ספרים על אסטרטגיית מוצר (Inspired, Continuous Discovery)',
        'לחקור מקרי צמיחה של Airbnb, Duolingo וכו\'',
        'לבצע מחקר UX עצמאי ולנתח את הממצאים',
        'לקחת קורסים טכניים ב-SQL, APIs ועיצוב מערכות'
      ],
      s: [{strategy:3,ux:1},{growth:3},{ux:3},{technical:3}]
    }
  ],
  roles: {
    strategy: {
      emoji: '🎯',
      name: 'PM אסטרטגי',
      desc: 'אני מגדיר את חזון המוצר, קובע עדיפויות ומוביל את הצוות למטרות עסקיות',
      detail: 'אתה בונה roadmaps, כותב PRDs, עובד עם בעלי עניין ומגדיר את כיוון המוצר. כלים: Jira, Notion, Confluence, Miro.',
      start: ['ספר Inspired', 'תבניות roadmap', 'ProductPlan'],
      startUrls: ['https://www.svpg.com/books/inspired-how-to-create-products-customers-love','https://notion.so/templates/product-roadmap','https://www.productplan.com']
    },
    growth: {
      emoji: '📈',
      name: 'Growth PM',
      desc: 'אני מצמיח מטריקות מוצר — מריץ ניסויים, מייעל פאנלים ומוצא מנופי צמיחה',
      detail: 'אתה מריץ בדיקות A/B, מנתח נתונים, מוצא צווארי בקבוק בפאנל ומגדיל את מה שעובד. כלים: Amplitude, Mixpanel, SQL, Looker.',
      start: ['Amplitude Blog', 'GrowthDesign', 'Reforge'],
      startUrls: ['https://amplitude.com/blog','https://growth.design','https://www.reforge.com']
    },
    ux: {
      emoji: '🎨',
      name: 'UX Product Manager',
      desc: 'אני שם את המשתמש במרכז — חוקר, בודק ומשפר את חוויית המוצר',
      detail: 'אתה עורך ראיונות משתמשים ובדיקות usability, עובד עם מעצבים ומתרגם insights לפיצ\'רים. כלים: Miro, Figma, Dovetail, Hotjar.',
      start: ['Nielsen Norman Group', 'Dovetail', 'Continuous Discovery Habits'],
      startUrls: ['https://www.nngroup.com/articles','https://dovetailapp.com','https://www.producttalk.org/continuous-discovery-habits']
    },
    technical: {
      emoji: '⚙️',
      name: 'Technical PM',
      desc: 'אני מחבר עסקים והנדסה — מנהל פלטפורמות, APIs ומוצרים טכניים',
      detail: 'אתה כותב מפרטים טכניים, דן בארכיטקטורה עם מהנדסים ומנהל מוצרי פלטפורמה או API. כלים: SQL, Confluence, Postman, עיצוב מערכות.',
      start: ['SQL לPMs', 'מדריך עיצוב API', 'System Design Primer'],
      startUrls: ['https://sqlbolt.com','https://stoplight.io/api-documentation','https://github.com/donnemartin/system-design-primer']
    }
  }
};

L2.pm.zh = {
  questions: [
    { t:'产品管理中什么最吸引你？', o:['增长产品——数据驱动，专注用户获取和留存','B2B产品——深入行业，服务企业客户','平台/技术产品——面向开发者，构建基础能力','0到1创业——从0构建新产品'], s:[{growth:3},{b2b:3},{platform:3},{zero_to_one:3}] },
    { t:'你最想掌握哪个能力？', o:['A/B测试、漏斗分析和增长黑客技术','深度行业理解和企业销售配合','API产品设计和开发者体验','用户调研、快速验证和MVP方法论'], s:[{growth:3},{b2b:3},{platform:3},{zero_to_one:3}] },
    { t:'什么工作成果最让你有成就感？', o:['一个实验让日活增长了20%','你的需求文档让销售签下了100万的大单','平台上线后，外部开发者建出了你没想到的东西','产品从0用户到10000用户的全过程'], s:[{growth:3},{b2b:3},{platform:3},{zero_to_one:3}] },
    { t:'你更喜欢什么样的工作？', o:['用数据找增长机会，快速实验验证','理解企业客户的复杂需求，推动产品落地','设计API和开发者文档，与技术团队深度合作','采访用户、画原型、快速迭代'], s:[{growth:3},{b2b:3},{platform:3},{zero_to_one:3}] },
    { t:'你会选择哪个项目？', o:['优化用户注册转化漏斗','为大客户定制一套解决方案','构建对外开放的API平台','从头开始做一款新产品的MVP'], s:[{growth:3},{b2b:3},{platform:3},{zero_to_one:3}] },
    { t:'10年后你在哪里？', o:['增长型产品公司的增长副总裁','企业软件公司的产品总监','开发者平台公司的CPO','成功创业公司的联合创始人'], s:[{growth:3},{b2b:3},{platform:3},{zero_to_one:3}] }
  ],
  roles: {
    growth: { emoji:'📈', name:'增长产品经理', desc:'用数据和实验驱动用户增长，让产品增长飞轮转起来', detail:'你痴迷于数据。你分析用户行为，找到增长杠杆，设计实验验证假设。你与数据、营销和工程三个团队都紧密合作。', start:['学习增长黑客基础——《增长黑客》','掌握数据分析工具——Mixpanel、Amplitude','了解A/B测试的统计原理','阅读Reforge的增长课程资源'] },
    b2b: { emoji:'🏢', name:'B2B产品经理', desc:'深入理解企业客户需求，构建让公司愿意付费的产品', detail:'你的客户是企业，决策过程复杂，但合同价值高。你需要理解行业，配合销售，平衡客户定制化和产品通用性的矛盾。', start:['学习企业软件的基本概念——CRM、ERP、SaaS','了解B2B销售流程和用户决策链','研究Salesforce、HubSpot等标杆产品','实践：参与客户拜访和需求收集'] },
    platform: { emoji:'🔧', name:'平台产品经理', desc:'构建让内外部开发者在上面创造更多可能的基础平台', detail:'你的用户是开发者。你设计API、SDK和开发者体验。你的成功不是自己做了什么，而是开发者们在你的平台上做了什么。', start:['学习REST API设计基础——从用户视角','研究优秀的开发者平台——Stripe、Twilio','了解开发者体验（DX）设计原则','学习基础的技术知识——让你能和工程师有效沟通'] },
    zero_to_one: { emoji:'🚀', name:'创新产品经理', desc:'从无到有打造新产品，在不确定中寻找产品市场契合点', detail:'你是探险家。你在已知边界之外工作，用最小的资源验证最大的假设。你需要容忍失败，快速学习，不断调整方向。', start:['阅读马蒂·卡根的《启示录》——产品经理圣经','学习精益创业方法论——《精益创业》','掌握用户访谈技术——Mom Test方法','实践：现在就去解决一个你身边的真实问题'] }
  },
  ui: { l2back:'← 返回产品管理', title:'产品管理：选择你的专业方向' }
};
