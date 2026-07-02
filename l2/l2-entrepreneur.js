'use strict';
/* ── L2: Предприниматель / Основатель стартапа ───────────────────────────────
   4 roles: founder 🚀 | ecommerce 🛒 | agency 🎯 | impact 🌱
   6 questions × 8 languages
   Structure per question: { t, o, s } — same as l2-financier.js
──────────────────────────────────────────────────────────────────────────── */

// ─── RU ──────────────────────────────────────────────────────────────────────
L2.entrepreneur.ru = {
  questions: [
    {
      t: 'Что тебя больше всего вдохновляет в предпринимательстве?',
      o: [
        'Создать технологический продукт и захватить рынок',
        'Найти классный товар и продавать его онлайн',
        'Помогать клиентам своей экспертизой и строить сервисный бизнес',
        'Менять мир через бизнес с социальной миссией'
      ],
      s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}]
    },
    {
      t: 'С каким типом клиентов тебе интереснее всего работать?',
      o: [
        'Инвесторы и технологические партнёры',
        'Конечные покупатели в интернет-магазине',
        'Компании-клиенты (B2B), которым нужна твоя экспертиза',
        'Социально уязвимые группы, НКО, государственные организации'
      ],
      s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}]
    },
    {
      t: 'Как ты предпочитаешь монетизировать своё дело?',
      o: [
        'Привлечь инвестиции, вырасти, потом заработать',
        'Прямые продажи товаров — купил/продал с маржой',
        'Проектные или ретейнерные контракты с клиентами',
        'Гранты, социальные инвестиции, impact-финансирование'
      ],
      s: [{founder:3},{ecommerce:2,agency:1},{agency:3},{impact:3}]
    },
    {
      t: 'Что ты сделаешь в первую очередь при запуске?',
      o: [
        'Напишу MVP и запитчу инвесторов',
        'Создам страницу товара и запущу таргетированную рекламу',
        'Найду первого клиента через нетворкинг и личные встречи',
        'Проведу глубокое исследование социальной проблемы'
      ],
      s: [{founder:3},{ecommerce:3},{agency:3},{impact:2,founder:1}]
    },
    {
      t: 'Какой инструмент тебе нужен прежде всего?',
      o: [
        'GitHub / Product Hunt / Notion',
        'Shopify / WooCommerce / Meta Ads',
        'CRM (HubSpot) / LinkedIn / Calendly',
        'Theory of Change / Impact Metrics / Miro'
      ],
      s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}]
    },
    {
      t: 'Как выглядит твой идеальный успех через 5 лет?',
      o: [
        'Единорог, успешный exit или IPO',
        'Популярный бренд с тысячами заказов в месяц',
        'Авторитетное агентство или консалтинг с командой 10–30 человек',
        'Измеримые социальные изменения и устойчивая бизнес-модель'
      ],
      s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}]
    }
  ],
  roles: {
    founder: {
      emoji: '🚀',
      name: 'Основатель стартапа',
      desc: 'Строишь технологический продукт и масштабируешь его на глобальный рынок с помощью инвестиций',
      detail: 'Ты видишь мир как набор рынков, которые можно разрушить умным продуктом. Живёшь питчами, метриками роста и командообразованием. Путь рискованный, но потенциал — безграничный.',
      start: ['Изучи Lean Startup и Customer Development', 'Создай первый MVP и покажи 10 потенциальным пользователям', 'Разберись в основах финансовой модели стартапа', 'Подай заявку в акселератор (YC, Skolkovo, ФРИИ)'],
      startUrls: ['https://www.startupschool.org/', 'https://www.ycombinator.com/library', 'https://leanstartup.co/']
    },
    ecommerce: {
      emoji: '🛒',
      name: 'E-commerce предприниматель',
      desc: 'Находишь востребованные товары и строишь прибыльный интернет-магазин, масштабируя через рекламу и логистику',
      detail: 'Твой бизнес — это цифры: маржа, стоимость клика, LTV покупателя. Умеешь быстро тестировать товарные гипотезы, настраивать воронки продаж и выстраивать повторные покупки.',
      start: ['Выбери нишу через анализ спроса (Google Trends, Wildberries)', 'Создай тестовый магазин на Shopify или WooCommerce', 'Запусти первую рекламную кампанию с минимальным бюджетом', 'Изучи unit-экономику: CAC, LTV, маржа'],
      startUrls: ['https://www.shopify.com/blog/ecommerce-business', 'https://ozon.ru/seller/', 'https://blog.hubspot.com/marketing/ecommerce']
    },
    agency: {
      emoji: '🎯',
      name: 'Владелец агентства',
      desc: 'Монетизируешь свою экспертизу, собирая команду и выстраивая B2B-сервисный бизнес с повторяющимися контрактами',
      detail: 'Твоя ценность — в знаниях и связях. Начинаешь с себя как фрилансера, потом нанимаешь людей, стандартизируешь процессы и строишь агентство, которое работает без тебя.',
      start: ['Определи свою экспертизу и идеального клиента (ICP)', 'Получи первых 3 клиента через LinkedIn и нетворкинг', 'Настрой CRM для управления сделками', 'Упакуй услугу в понятный оффер с фиксированной ценой'],
      startUrls: ['https://www.hubspot.com/products/crm', 'https://www.linkedin.com/business/sales', 'https://swipefiles.com/agency']
    },
    impact: {
      emoji: '🌱',
      name: 'Социальный предприниматель',
      desc: 'Создаёшь устойчивый бизнес, решающий социальные или экологические проблемы, измеряя успех не только в деньгах',
      detail: 'Ты совмещаешь предпринимательское мышление с желанием менять мир. Привлекаешь гранты и impact-инвесторов, строишь партнёрства с НКО и государством, измеряешь социальный эффект.',
      start: ['Выбери конкретную социальную проблему и исследуй её', 'Изучи Theory of Change и Impact Measurement', 'Найди примеры успешных социальных предприятий в своей сфере', 'Подай заявку на грант или социальный акселератор'],
      startUrls: ['https://www.ashoka.org/en', 'https://ssir.org/', 'https://skolkovo.ru/programmes/']
    }
  },
  ui: {
    tag: 'Предприниматель',
    title: 'Какой ты предприниматель?',
    subtitle: '6 вопросов — узнай свой путь в бизнесе',
    prog: 'Вопрос %d из 6',
    hint: 'Выбери один вариант',
    back: '← Назад',
    next: 'Далее →',
    finish: 'Узнать результат',
    winBadge: 'Твой предпринимательский стиль',
    resTag: 'Результат',
    resSub: 'Твоя роль в бизнесе',
    lblStart: 'С чего начать:',
    l2back: '← К результатам'
  }
};

// ─── EN ──────────────────────────────────────────────────────────────────────
L2.entrepreneur.en = {
  questions: [
    {
      t: 'What inspires you most about entrepreneurship?',
      o: [
        'Building a tech product and conquering the market',
        'Finding a great product and selling it online',
        'Helping clients with your expertise and building a service business',
        'Changing the world through a mission-driven business'
      ],
      s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}]
    },
    {
      t: 'Which type of customer do you most enjoy working with?',
      o: [
        'Investors and technology partners',
        'End consumers in an online store',
        'B2B companies that need your expertise',
        'Vulnerable communities, NGOs, public sector'
      ],
      s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}]
    },
    {
      t: 'How do you prefer to monetize your business?',
      o: [
        'Raise investment, grow fast, profit later',
        'Direct product sales — buy low, sell high',
        'Project or retainer contracts with clients',
        'Grants, social investment, impact financing'
      ],
      s: [{founder:3},{ecommerce:2,agency:1},{agency:3},{impact:3}]
    },
    {
      t: 'What will you do first when launching?',
      o: [
        'Build an MVP and pitch investors',
        'Create a product page and launch targeted ads',
        'Find the first client through networking and meetings',
        'Do deep research into a social problem'
      ],
      s: [{founder:3},{ecommerce:3},{agency:3},{impact:2,founder:1}]
    },
    {
      t: 'Which tool do you need most?',
      o: [
        'GitHub / Product Hunt / Notion',
        'Shopify / WooCommerce / Meta Ads',
        'CRM (HubSpot) / LinkedIn / Calendly',
        'Theory of Change / Impact Metrics / Miro'
      ],
      s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}]
    },
    {
      t: 'What does success look like in 5 years?',
      o: [
        'Unicorn status, a successful exit, or IPO',
        'A popular brand processing thousands of orders a month',
        'A reputable agency or consultancy with a team of 10–30',
        'Measurable social change and a sustainable business model'
      ],
      s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}]
    }
  ],
  roles: {
    founder: {
      emoji: '🚀', name: 'Startup Founder',
      desc: 'You build tech products and scale them globally with the help of investors',
      detail: 'You see the world as markets waiting to be disrupted. You live for pitches, growth metrics and team building. High risk, unlimited upside.',
      start: ['Study Lean Startup and Customer Development', 'Build a first MVP and show it to 10 potential users', 'Learn the basics of startup financial modeling', 'Apply to an accelerator (YCombinator, Techstars)'],
      startUrls: ['https://www.startupschool.org/', 'https://www.ycombinator.com/library', 'https://leanstartup.co/']
    },
    ecommerce: {
      emoji: '🛒', name: 'E-commerce Entrepreneur',
      desc: 'You find in-demand products and build a profitable online store, scaling through ads and logistics',
      detail: 'Your business runs on numbers: margin, cost per click, LTV. You rapidly test product ideas, optimize sales funnels, and drive repeat purchases.',
      start: ['Pick a niche using demand analysis (Google Trends, Amazon)', 'Create a test store on Shopify or WooCommerce', 'Run a first ad campaign on a small budget', 'Study unit economics: CAC, LTV, gross margin'],
      startUrls: ['https://www.shopify.com/blog/ecommerce-business', 'https://sell.amazon.com/', 'https://blog.hubspot.com/marketing/ecommerce']
    },
    agency: {
      emoji: '🎯', name: 'Agency Owner',
      desc: 'You monetize your expertise by building a team and creating a B2B service business with recurring contracts',
      detail: 'Your value is your knowledge and network. You start as a freelancer, hire people, standardize processes, and build an agency that runs without you.',
      start: ['Define your expertise and ideal client (ICP)', 'Land your first 3 clients through LinkedIn and networking', 'Set up a CRM to manage deals', 'Package your service as a clear fixed-price offer'],
      startUrls: ['https://www.hubspot.com/products/crm', 'https://www.linkedin.com/business/sales', 'https://swipefiles.com/agency']
    },
    impact: {
      emoji: '🌱', name: 'Social Entrepreneur',
      desc: 'You build a sustainable business that solves social or environmental problems, measuring success beyond profit',
      detail: 'You blend entrepreneurial thinking with a desire to change the world. You attract grants and impact investors, partner with NGOs and government, and track social outcomes.',
      start: ['Choose a specific social problem and research it deeply', 'Study Theory of Change and Impact Measurement', 'Find successful social enterprises in your field', 'Apply for a grant or social accelerator'],
      startUrls: ['https://www.ashoka.org/en', 'https://ssir.org/', 'https://www.socialenterprise.org.uk/']
    }
  },
  ui: {
    tag: 'Entrepreneur', title: 'What kind of entrepreneur are you?',
    subtitle: '6 questions — discover your path in business',
    prog: 'Question %d of 6', hint: 'Choose one option',
    back: '← Back', next: 'Next →', finish: 'See my result',
    winBadge: 'Your entrepreneurial style', resTag: 'Result',
    resSub: 'Your role in business', lblStart: 'Where to start:',
    l2back: '← Back to results'
  }
};

// ─── DE ──────────────────────────────────────────────────────────────────────
L2.entrepreneur.de = {
  questions: [
    {
      t: 'Was inspiriert dich am meisten am Unternehmertum?',
      o: ['Ein Technologieprodukt aufbauen und den Markt erobern', 'Ein tolles Produkt finden und es online verkaufen', 'Kunden mit meiner Expertise helfen und ein Dienstleistungsunternehmen aufbauen', 'Die Welt durch ein wertegetriebenes Unternehmen verändern'],
      s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}]
    },
    {
      t: 'Mit welchem Kundentyp arbeitest du am liebsten?',
      o: ['Investoren und Technologiepartner', 'Endkunden in einem Online-Shop', 'B2B-Unternehmen, die meine Expertise brauchen', 'Benachteiligte Gruppen, NGOs, öffentlicher Sektor'],
      s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}]
    },
    {
      t: 'Wie möchtest du dein Unternehmen monetarisieren?',
      o: ['Investitionen einwerben, schnell wachsen, später Gewinn machen', 'Direktverkauf von Produkten — günstig einkaufen, teurer verkaufen', 'Projekt- oder Retainer-Verträge mit Kunden', 'Fördermittel, Sozialinvestitionen, Impact-Finanzierung'],
      s: [{founder:3},{ecommerce:2,agency:1},{agency:3},{impact:3}]
    },
    {
      t: 'Was machst du beim Launch als erstes?',
      o: ['Ein MVP bauen und Investoren pitchen', 'Eine Produktseite erstellen und gezielte Werbung schalten', 'Über Networking und persönliche Treffen erste Kunden gewinnen', 'Ein soziales Problem tiefgehend erforschen'],
      s: [{founder:3},{ecommerce:3},{agency:3},{impact:2,founder:1}]
    },
    {
      t: 'Welches Tool brauchst du am dringendsten?',
      o: ['GitHub / Product Hunt / Notion', 'Shopify / WooCommerce / Meta Ads', 'CRM (HubSpot) / LinkedIn / Calendly', 'Theory of Change / Impact-Kennzahlen / Miro'],
      s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}]
    },
    {
      t: 'Wie sieht dein Erfolg in 5 Jahren aus?',
      o: ['Unicorn-Status, erfolgreicher Exit oder IPO', 'Eine beliebte Marke mit tausenden Bestellungen pro Monat', 'Eine angesehene Agentur oder Beratung mit 10–30 Mitarbeitern', 'Messbare soziale Veränderungen und ein nachhaltiges Geschäftsmodell'],
      s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}]
    }
  ],
  roles: {
    founder: { emoji:'🚀', name:'Startup-Gründer', desc:'Du baust Tech-Produkte und skalierst sie global mithilfe von Investoren', detail:'Du siehst die Welt als Märkte, die durch clevere Produkte disrupted werden können. Du lebst für Pitches, Wachstumsmetriken und Teamaufbau.', start:['Lean Startup und Customer Development studieren','Erstes MVP bauen und 10 potenziellen Nutzern zeigen','Grundlagen der Startup-Finanzmodellierung lernen','Bei einem Accelerator bewerben (YC, Techstars)'], startUrls:['https://www.startupschool.org/','https://www.ycombinator.com/library','https://leanstartup.co/'] },
    ecommerce: { emoji:'🛒', name:'E-Commerce-Unternehmer', desc:'Du findest gefragte Produkte und baust einen profitablen Online-Shop, der durch Werbung und Logistik skaliert', detail:'Dein Geschäft läuft über Zahlen: Marge, CPC, LTV. Du testest Produktideen schnell, optimierst Verkaufstrichter und steigerst Wiederkäufe.', start:['Nische per Nachfrageanalyse wählen','Testshop auf Shopify oder WooCommerce erstellen','Erste Kampagne mit kleinem Budget starten','Unit Economics lernen: CAC, LTV, Bruttomarge'], startUrls:['https://www.shopify.de/blog','https://sell.amazon.de/','https://blog.hubspot.de/marketing/ecommerce'] },
    agency: { emoji:'🎯', name:'Agenturinhaber', desc:'Du monetarisierst deine Expertise, indem du ein Team aufbaust und ein B2B-Dienstleistungsgeschäft schaffst', detail:'Dein Wert liegt in deinem Wissen und Netzwerk. Du startest als Freelancer, stellst Mitarbeiter ein und baust eine Agentur auf.', start:['Expertise und Wunschkunde (ICP) definieren','Erste 3 Kunden über LinkedIn und Networking gewinnen','CRM für die Auftragsverwaltung einrichten','Leistung als Festpreisangebot verpacken'], startUrls:['https://www.hubspot.de/products/crm','https://www.linkedin.com/business/sales','https://swipefiles.com/agency'] },
    impact: { emoji:'🌱', name:'Sozialunternehmer', desc:'Du baust ein nachhaltiges Unternehmen, das soziale oder ökologische Probleme löst', detail:'Du verbindest unternehmerisches Denken mit dem Wunsch, die Welt zu verändern. Du gewinnst Fördermittel und Impact-Investoren und misst soziale Wirkung.', start:['Konkretes soziales Problem erforschen','Theory of Change und Impact Measurement studieren','Erfolgreiche Sozialunternehmen finden','Für Förderprogramm oder Sozialakzelerator bewerben'], startUrls:['https://www.ashoka.org/de','https://ssir.org/','https://www.send-ev.de/'] }
  },
  ui: { tag:'Unternehmer', title:'Was für ein Unternehmer bist du?', subtitle:'6 Fragen — entdecke deinen Weg im Business', prog:'Frage %d von 6', hint:'Wähle eine Option', back:'← Zurück', next:'Weiter →', finish:'Ergebnis anzeigen', winBadge:'Dein unternehmerischer Stil', resTag:'Ergebnis', resSub:'Deine Rolle im Business', lblStart:'Wo anfangen:', l2back:'← Zurück zu den Ergebnissen' }
};

// ─── FR ──────────────────────────────────────────────────────────────────────
L2.entrepreneur.fr = {
  questions: [
    {
      t: "Qu'est-ce qui t'inspire le plus dans l'entrepreneuriat ?",
      o: ["Créer un produit technologique et conquérir le marché", "Trouver un super produit et le vendre en ligne", "Aider des clients grâce à mon expertise et bâtir une activité de service", "Changer le monde grâce à un business à mission"],
      s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}]
    },
    {
      t: "Avec quel type de client préfères-tu travailler ?",
      o: ["Investisseurs et partenaires technologiques", "Clients finaux dans une boutique en ligne", "Entreprises B2B qui ont besoin de ton expertise", "Populations vulnérables, ONG, secteur public"],
      s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}]
    },
    {
      t: "Comment préfères-tu monétiser ton activité ?",
      o: ["Lever des fonds, croître vite, gagner de l'argent plus tard", "Ventes directes de produits : acheter bas, vendre haut", "Contrats à la mission ou au forfait avec des clients", "Subventions, investissement social, financement à impact"],
      s: [{founder:3},{ecommerce:2,agency:1},{agency:3},{impact:3}]
    },
    {
      t: "Que feras-tu en premier au lancement ?",
      o: ["Construire un MVP et pitcher des investisseurs", "Créer une page produit et lancer des publicités ciblées", "Trouver le premier client via networking et rencontres", "Faire une recherche approfondie sur un problème social"],
      s: [{founder:3},{ecommerce:3},{agency:3},{impact:2,founder:1}]
    },
    {
      t: "De quel outil as-tu le plus besoin ?",
      o: ["GitHub / Product Hunt / Notion", "Shopify / WooCommerce / Meta Ads", "CRM (HubSpot) / LinkedIn / Calendly", "Théorie du changement / indicateurs d'impact / Miro"],
      s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}]
    },
    {
      t: "À quoi ressemble ton succès dans 5 ans ?",
      o: ["Statut de licorne, exit réussi ou introduction en bourse", "Une marque populaire avec des milliers de commandes par mois", "Une agence ou un cabinet de conseil reconnu avec 10 à 30 personnes", "Des changements sociaux mesurables et un modèle économique durable"],
      s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}]
    }
  ],
  roles: {
    founder: { emoji:'🚀', name:'Fondateur de startup', desc:"Tu crées des produits technologiques et les déploies à l'échelle mondiale grâce aux investisseurs", detail:"Tu vois le monde comme des marchés à disrupter. Tu vis pour les pitches, les métriques de croissance et la constitution d'équipes.", start:["Étudier le Lean Startup et le Customer Development","Créer un premier MVP et le montrer à 10 utilisateurs potentiels","Apprendre les bases de la modélisation financière","Candidater à un accélérateur (YC, Station F, NUMA)"], startUrls:['https://www.startupschool.org/','https://www.ycombinator.com/library','https://leanstartup.co/'] },
    ecommerce: { emoji:'🛒', name:'E-commerçant', desc:'Tu trouves des produits en demande et construis une boutique en ligne rentable', detail:"Ton business, c'est les chiffres : marge, coût par clic, LTV. Tu testes vite et optimises tes tunnels.", start:['Choisir une niche avec Google Trends','Créer un shop test sur Shopify ou WooCommerce','Lancer une première campagne avec un petit budget','Étudier la unit economics : CAC, LTV, marge brute'], startUrls:['https://www.shopify.fr/blog','https://sell.amazon.fr/','https://blog.hubspot.fr/marketing/ecommerce'] },
    agency: { emoji:'🎯', name:"Patron d'agence", desc:'Tu monétises ton expertise en construisant une équipe et une activité de services B2B', detail:"Ta valeur, c'est ton savoir et ton réseau. Tu commences en freelance et bâtis une agence qui tourne sans toi.", start:['Définir ton expertise et ton client idéal (ICP)','Décrocher tes 3 premiers clients via LinkedIn','Configurer un CRM pour gérer tes deals','Packager ton offre en un forfait clair'], startUrls:['https://www.hubspot.fr/products/crm','https://www.linkedin.com/business/sales','https://swipefiles.com/agency'] },
    impact: { emoji:'🌱', name:'Entrepreneur social', desc:'Tu crées un business durable qui résout des problèmes sociaux ou environnementaux', detail:"Tu mixes pensée entrepreneuriale et envie de changer le monde. Tu attires des subventions et investisseurs à impact.", start:['Choisir un problème social précis et le creuser',"Étudier la théorie du changement et la mesure d'impact",'Trouver des exemples réussis d\'entreprises sociales','Candidater à une subvention ou un accélérateur social'], startUrls:['https://www.ashoka.org/fr','https://ssir.org/','https://www.mouves.org/'] }
  },
  ui: { tag:'Entrepreneur', title:"Quel type d'entrepreneur es-tu ?", subtitle:'6 questions pour découvrir ta voie en business', prog:'Question %d sur 6', hint:'Choisis une option', back:'← Retour', next:'Suivant →', finish:'Voir mon résultat', winBadge:'Ton style entrepreneurial', resTag:'Résultat', resSub:'Ton rôle dans le business', lblStart:'Par où commencer :', l2back:'← Retour aux résultats' }
};

// ─── ES ──────────────────────────────────────────────────────────────────────
L2.entrepreneur.es = {
  questions: [
    { t: '¿Qué te inspira más del emprendimiento?', o: ['Crear un producto tecnológico y conquistar el mercado', 'Encontrar un producto genial y venderlo online', 'Ayudar a clientes con mi experiencia y construir un negocio de servicios', 'Cambiar el mundo con un negocio de impacto social'], s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}] },
    { t: '¿Con qué tipo de cliente disfrutas más trabajar?', o: ['Inversores y socios tecnológicos', 'Consumidores finales en una tienda online', 'Empresas B2B que necesitan mi expertise', 'Comunidades vulnerables, ONGs, sector público'], s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}] },
    { t: '¿Cómo prefieres monetizar tu negocio?', o: ['Levantar inversión, crecer rápido, ganar dinero después', 'Venta directa de productos: comprar barato y vender caro', 'Contratos por proyecto o retainer con clientes', 'Subvenciones, inversión social, financiación de impacto'], s: [{founder:3},{ecommerce:2,agency:1},{agency:3},{impact:3}] },
    { t: '¿Qué harás primero al lanzar?', o: ['Construir un MVP y presentárselo a inversores', 'Crear una página de producto y lanzar publicidad segmentada', 'Conseguir el primer cliente a través del networking', 'Investigar a fondo un problema social'], s: [{founder:3},{ecommerce:3},{agency:3},{impact:2,founder:1}] },
    { t: '¿Qué herramienta necesitas más?', o: ['GitHub / Product Hunt / Notion', 'Shopify / WooCommerce / Meta Ads', 'CRM (HubSpot) / LinkedIn / Calendly', 'Teoría del Cambio / métricas de impacto / Miro'], s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}] },
    { t: '¿Cómo luce tu éxito en 5 años?', o: ['Estatus de unicornio, exit exitoso o IPO', 'Una marca popular con miles de pedidos al mes', 'Una agencia o consultoría reconocida con equipo de 10–30 personas', 'Cambios sociales medibles y un modelo de negocio sostenible'], s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}] }
  ],
  roles: {
    founder: { emoji:'🚀', name:'Fundador de startup', desc:'Construyes productos tecnológicos y los escalas globalmente con la ayuda de inversores', detail:'Ves el mundo como mercados esperando ser disruptidos. Vives para los pitches, las métricas de crecimiento y la construcción de equipos.', start:['Estudia Lean Startup y Customer Development','Crea tu primer MVP y muéstraselo a 10 usuarios potenciales','Aprende los fundamentos del modelo financiero de startups','Aplica a una aceleradora (YC, Wayra, Seedrocket)'], startUrls:['https://www.startupschool.org/','https://www.ycombinator.com/library','https://leanstartup.co/'] },
    ecommerce: { emoji:'🛒', name:'Emprendedor e-commerce', desc:'Encuentras productos con demanda y construyes una tienda online rentable que escala con publicidad y logística', detail:'Tu negocio vive en los números: margen, CPC, LTV. Testeas ideas de producto rápido y optimizas embudos de venta.', start:['Elige un nicho con Google Trends y Amazon','Crea una tienda de prueba en Shopify o WooCommerce','Lanza tu primera campaña con presupuesto reducido','Estudia la unit economics: CAC, LTV, margen bruto'], startUrls:['https://es.shopify.com/blog','https://sell.amazon.es/','https://blog.hubspot.es/marketing/ecommerce'] },
    agency: { emoji:'🎯', name:'Dueño de agencia', desc:'Monetizas tu expertise construyendo un equipo y un negocio de servicios B2B con contratos recurrentes', detail:'Tu valor está en tu conocimiento y red de contactos. Comienzas como freelancer, contratas personas y construyes una agencia.', start:['Define tu expertise y tu cliente ideal (ICP)','Consigue tus 3 primeros clientes por LinkedIn y networking','Configura un CRM para gestionar tus oportunidades','Empaqueta tu servicio en una oferta clara de precio fijo'], startUrls:['https://www.hubspot.es/products/crm','https://www.linkedin.com/business/sales','https://swipefiles.com/agency'] },
    impact: { emoji:'🌱', name:'Emprendedor social', desc:'Creas un negocio sostenible que resuelve problemas sociales o ambientales, midiendo el éxito más allá de las ganancias', detail:'Combinas el pensamiento emprendedor con el deseo de cambiar el mundo. Atraes subvenciones e inversores de impacto.', start:['Elige un problema social concreto e investígalo a fondo','Estudia Teoría del Cambio y medición de impacto','Encuentra emprendimientos sociales exitosos en tu sector','Aplica a una beca o aceleradora social'], startUrls:['https://www.ashoka.org/es','https://ssir.org/','https://nesta.org.uk/'] }
  },
  ui: { tag:'Emprendedor', title:'¿Qué tipo de emprendedor eres?', subtitle:'6 preguntas para descubrir tu camino en los negocios', prog:'Pregunta %d de 6', hint:'Elige una opción', back:'← Atrás', next:'Siguiente →', finish:'Ver mi resultado', winBadge:'Tu estilo emprendedor', resTag:'Resultado', resSub:'Tu rol en los negocios', lblStart:'Por dónde empezar:', l2back:'← Volver a los resultados' }
};

// ─── PT ──────────────────────────────────────────────────────────────────────
L2.entrepreneur.pt = {
  questions: [
    { t: 'O que mais te inspira no empreendedorismo?', o: ['Criar um produto tecnológico e conquistar o mercado', 'Encontrar um produto incrível e vendê-lo online', 'Ajudar clientes com minha expertise e construir um negócio de serviços', 'Mudar o mundo com um negócio de impacto social'], s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}] },
    { t: 'Com que tipo de cliente você mais gosta de trabalhar?', o: ['Investidores e parceiros tecnológicos', 'Consumidores finais em uma loja online', 'Empresas B2B que precisam da minha expertise', 'Comunidades vulneráveis, ONGs, setor público'], s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}] },
    { t: 'Como você prefere monetizar seu negócio?', o: ['Captar investimento, crescer rápido, lucrar depois', 'Venda direta de produtos: comprar barato e vender caro', 'Contratos por projeto ou retainer com clientes', 'Subvenções, investimento social, financiamento de impacto'], s: [{founder:3},{ecommerce:2,agency:1},{agency:3},{impact:3}] },
    { t: 'O que você fará primeiro ao lançar?', o: ['Construir um MVP e apresentá-lo para investidores', 'Criar uma página de produto e lançar anúncios segmentados', 'Conquistar o primeiro cliente via networking', 'Pesquisar profundamente um problema social'], s: [{founder:3},{ecommerce:3},{agency:3},{impact:2,founder:1}] },
    { t: 'Qual ferramenta você mais precisa?', o: ['GitHub / Product Hunt / Notion', 'Shopify / WooCommerce / Meta Ads', 'CRM (HubSpot) / LinkedIn / Calendly', 'Teoria da Mudança / métricas de impacto / Miro'], s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}] },
    { t: 'Como é o seu sucesso em 5 anos?', o: ['Status de unicórnio, exit bem-sucedido ou IPO', 'Uma marca popular com milhares de pedidos por mês', 'Uma agência ou consultoria renomada com equipe de 10–30 pessoas', 'Mudanças sociais mensuráveis e um modelo de negócio sustentável'], s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}] }
  ],
  roles: {
    founder: { emoji:'🚀', name:'Fundador de startup', desc:'Você cria produtos tecnológicos e os escala globalmente com o apoio de investidores', detail:'Você vê o mundo como mercados esperando ser disruptados. Vive para pitches, métricas de crescimento e formação de equipes.', start:['Estudar Lean Startup e Customer Development','Criar um primeiro MVP e mostrar a 10 potenciais usuários','Aprender os fundamentos do modelo financeiro de startups','Candidatar-se a uma aceleradora (YC, Wayra, ACE)'], startUrls:['https://www.startupschool.org/','https://www.ycombinator.com/library','https://leanstartup.co/'] },
    ecommerce: { emoji:'🛒', name:'Empreendedor e-commerce', desc:'Você encontra produtos com demanda e constrói uma loja online rentável que escala com anúncios e logística', detail:'Seu negócio vive em números: margem, CPC, LTV. Você testa hipóteses de produto rapidamente e otimiza funis de venda.', start:['Escolher um nicho com Google Trends e Amazon','Criar uma loja de teste na Shopify ou WooCommerce','Lançar a primeira campanha com orçamento mínimo','Estudar unit economics: CAC, LTV, margem bruta'], startUrls:['https://www.shopify.com.br/blog','https://sell.amazon.com.br/','https://blog.hubspot.com.br/marketing/ecommerce'] },
    agency: { emoji:'🎯', name:'Dono de agência', desc:'Você monetiza sua expertise construindo uma equipe e um negócio de serviços B2B com contratos recorrentes', detail:'Seu valor está no seu conhecimento e rede de contatos. Começa como freelancer, contrata pessoas e constrói uma agência.', start:['Definir sua expertise e cliente ideal (ICP)','Conseguir seus 3 primeiros clientes por LinkedIn e networking','Configurar um CRM para gerenciar oportunidades','Empacotar o serviço em uma oferta clara de preço fixo'], startUrls:['https://www.hubspot.com.br/products/crm','https://www.linkedin.com/business/sales','https://swipefiles.com/agency'] },
    impact: { emoji:'🌱', name:'Empreendedor social', desc:'Você constrói um negócio sustentável que resolve problemas sociais ou ambientais, medindo o sucesso além do lucro', detail:'Você combina pensamento empreendedor com o desejo de mudar o mundo. Atrai subvenções e investidores de impacto.', start:['Escolher um problema social concreto e pesquisar profundamente','Estudar Teoria da Mudança e medição de impacto','Encontrar empreendimentos sociais de sucesso no seu setor','Candidatar-se a um edital ou aceleradora social'], startUrls:['https://www.ashoka.org/pt','https://ssir.org/','https://artemisia.org.br/'] }
  },
  ui: { tag:'Empreendedor', title:'Que tipo de empreendedor você é?', subtitle:'6 perguntas para descobrir seu caminho nos negócios', prog:'Pergunta %d de 6', hint:'Escolha uma opção', back:'← Voltar', next:'Próximo →', finish:'Ver meu resultado', winBadge:'Seu estilo empreendedor', resTag:'Resultado', resSub:'Seu papel nos negócios', lblStart:'Por onde começar:', l2back:'← Voltar aos resultados' }
};

// ─── AR ──────────────────────────────────────────────────────────────────────
L2.entrepreneur.ar = {
  questions: [
    { t: 'ما الذي يلهمك أكثر في ريادة الأعمال؟', o: ['بناء منتج تقني واقتحام السوق', 'إيجاد منتج رائع وبيعه عبر الإنترنت', 'مساعدة العملاء بخبرتي وبناء أعمال خدمية', 'تغيير العالم من خلال أعمال ذات رسالة اجتماعية'], s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}] },
    { t: 'مع أي نوع من العملاء تفضّل العمل؟', o: ['المستثمرون والشركاء التقنيون', 'المستهلكون في متجر إلكتروني', 'الشركات B2B التي تحتاج إلى خبرتي', 'الفئات الهشة والمنظمات غير الحكومية والقطاع العام'], s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}] },
    { t: 'كيف تفضّل تحقيق الربح من أعمالك؟', o: ['جمع الاستثمارات والنمو بسرعة والتربح لاحقاً', 'البيع المباشر للمنتجات: اشتر بسعر منخفض وبع بسعر مرتفع', 'عقود مشاريع أو احتجاز مع العملاء', 'المنح والاستثمار الاجتماعي وتمويل الأثر'], s: [{founder:3},{ecommerce:2,agency:1},{agency:3},{impact:3}] },
    { t: 'ما أول خطوة ستتخذها عند الإطلاق؟', o: ['بناء نموذج أولي وعرضه على المستثمرين', 'إنشاء صفحة منتج وإطلاق إعلانات مستهدفة', 'إيجاد أول عميل عبر التواصل الشخصي', 'إجراء بحث معمّق حول مشكلة اجتماعية'], s: [{founder:3},{ecommerce:3},{agency:3},{impact:2,founder:1}] },
    { t: 'أي أداة تحتاجها أكثر من غيرها؟', o: ['GitHub / Product Hunt / Notion', 'Shopify / WooCommerce / Meta Ads', 'CRM (HubSpot) / LinkedIn / Calendly', 'نظرية التغيير / مقاييس الأثر / Miro'], s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}] },
    { t: 'كيف يبدو نجاحك بعد 5 سنوات؟', o: ['شركة ناشئة بقيمة مليار دولار أو خروج ناجح أو طرح عام', 'علامة تجارية شعبية بآلاف الطلبات شهرياً', 'وكالة أو استشارات موثوقة بفريق من 10 إلى 30 شخصاً', 'تغييرات اجتماعية قابلة للقياس ونموذج أعمال مستدام'], s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}] }
  ],
  roles: {
    founder: { emoji:'🚀', name:'مؤسس شركة ناشئة', desc:'تبني منتجات تقنية وتوسّعها عالمياً بمساعدة المستثمرين', detail:'ترى العالم كأسواق تنتظر التحول الجذري. تعيش من أجل العروض التقديمية ومقاييس النمو وبناء الفرق.', start:['دراسة Lean Startup وCustomer Development','بناء أول نموذج أولي وعرضه على 10 مستخدمين محتملين','تعلم أساسيات النمذجة المالية للشركات الناشئة','التقديم في مسرّع أعمال مثل YC أو Flat6Labs'], startUrls:['https://www.startupschool.org/','https://www.ycombinator.com/library','https://leanstartup.co/'] },
    ecommerce: { emoji:'🛒', name:'رائد أعمال في التجارة الإلكترونية', desc:'تجد منتجات مطلوبة وتبني متجراً إلكترونياً مربحاً يتوسع من خلال الإعلانات والخدمات اللوجستية', detail:'أعمالك تعيش على الأرقام: الهامش وتكلفة النقر وقيمة العميل مدى الحياة.', start:['اختيار مكانة تجارية بتحليل الطلب','إنشاء متجر تجريبي على Shopify','إطلاق أول حملة إعلانية بميزانية بسيطة','دراسة اقتصاديات الوحدة: CAC وLTV والهامش الإجمالي'], startUrls:['https://www.shopify.com/blog/ecommerce-business','https://sell.amazon.eg/','https://blog.hubspot.com/marketing/ecommerce'] },
    agency: { emoji:'🎯', name:'صاحب وكالة', desc:'تُنقّد خبرتك ببناء فريق وأعمال خدمية B2B مع عقود متكررة', detail:'قيمتك في معرفتك وشبكة علاقاتك. تبدأ كمستقل ثم توظّف وتبني وكالة تعمل بدونك.', start:['تحديد خبرتك وعميلك المثالي (ICP)','الحصول على أول 3 عملاء عبر LinkedIn','إعداد CRM لإدارة الصفقات','تعبئة خدمتك في عرض واضح بسعر ثابت'], startUrls:['https://www.hubspot.com/products/crm','https://www.linkedin.com/business/sales','https://swipefiles.com/agency'] },
    impact: { emoji:'🌱', name:'رائد أعمال اجتماعي', desc:'تبني أعمالاً مستدامة تحل مشاكل اجتماعية أو بيئية وتقيس النجاح بما يتجاوز الربح', detail:'تجمع بين التفكير الريادي والرغبة في تغيير العالم. تجذب المنح والمستثمرين الاجتماعيين وتقيس الأثر الاجتماعي.', start:['اختيار مشكلة اجتماعية محددة والبحث فيها بعمق','دراسة نظرية التغيير وقياس الأثر','البحث عن نماذج ناجحة للمشاريع الاجتماعية','التقديم للحصول على منحة أو الانضمام لمسرّع اجتماعي'], startUrls:['https://www.ashoka.org/ar','https://ssir.org/','https://www.wamda.com/'] }
  },
  ui: { tag:'رائد أعمال', title:'ما نوع رائد الأعمال الذي أنت عليه؟', subtitle:'٦ أسئلة لاكتشاف مسارك في عالم الأعمال', prog:'السؤال %d من ٦', hint:'اختر خياراً واحداً', back:'→ السابق', next:'التالي ←', finish:'اعرض نتيجتي', winBadge:'أسلوبك الريادي', resTag:'النتيجة', resSub:'دورك في عالم الأعمال', lblStart:'من أين تبدأ:', l2back:'→ العودة إلى النتائج' }
};

// ─── HE ──────────────────────────────────────────────────────────────────────
L2.entrepreneur.he = {
  questions: [
    { t: 'מה הכי מעורר בך השראה ביזמות?', o: ['לבנות מוצר טכנולוגי ולכבוש את השוק', 'למצוא מוצר מעולה ולמכור אותו אונליין', 'לסייע ללקוחות עם המומחיות שלי ולבנות עסק שירותים', 'לשנות את העולם דרך עסק עם מטרה חברתית'], s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}] },
    { t: 'עם איזה סוג לקוח אתה הכי אוהב לעבוד?', o: ['משקיעים ושותפים טכנולוגיים', 'צרכנים קצה בחנות אונליין', 'חברות B2B שצריכות את המומחיות שלי', 'קהילות מוחלשות, עמותות, המגזר הציבורי'], s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}] },
    { t: 'איך אתה מעדיף לייצר הכנסות?', o: ['לגייס השקעה, לצמוח מהר, להרוויח אחר כך', 'מכירה ישירה של מוצרים: קנה בזול מכור ביוקר', 'חוזים פרויקטליים או ריטיינר עם לקוחות', 'מענקים, השקעות חברתיות, מימון אימפקט'], s: [{founder:3},{ecommerce:2,agency:1},{agency:3},{impact:3}] },
    { t: 'מה תעשה ראשון בעת השקה?', o: ['לבנות MVP ולהציג למשקיעים', 'ליצור דף מוצר ולהשיק פרסום ממוקד', 'למצוא לקוח ראשון דרך נטוורקינג ופגישות', 'לחקור לעומק בעיה חברתית'], s: [{founder:3},{ecommerce:3},{agency:3},{impact:2,founder:1}] },
    { t: 'איזה כלי אתה צריך הכי הרבה?', o: ['GitHub / Product Hunt / Notion', 'Shopify / WooCommerce / Meta Ads', 'CRM (HubSpot) / LinkedIn / Calendly', 'Theory of Change / מדדי אימפקט / Miro'], s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}] },
    { t: 'איך נראה ההצלחה שלך בעוד 5 שנים?', o: ['חדקרן, אקזיט מוצלח או הנפקה', 'מותג פופולרי עם אלפי הזמנות בחודש', 'סוכנות או ייעוץ מוכרים עם צוות של 10–30 אנשים', 'שינוי חברתי מדיד ומודל עסקי בר-קיימא'], s: [{founder:3},{ecommerce:3},{agency:3},{impact:3}] }
  ],
  roles: {
    founder: { emoji:'🚀', name:'מייסד סטארטאפ', desc:'אתה בונה מוצרים טכנולוגיים ומרחיב אותם לשוק הגלובלי בסיוע משקיעים', detail:"אתה רואה את העולם כשווקים שממתינים לשיבוש. אתה חי בשביל פיצ'ים, מדדי צמיחה ובניית צוות.", start:['ללמוד Lean Startup ו-Customer Development','לבנות MVP ראשון ולהראות ל-10 משתמשים פוטנציאליים','ללמוד את יסודות המודל הפיננסי לסטארטאפ','להגיש מועמדות לאקסלרטור (YC, 8200, Start-Up Nation)'], startUrls:['https://www.startupschool.org/','https://www.ycombinator.com/library','https://leanstartup.co/'] },
    ecommerce: { emoji:'🛒', name:'יזם מסחר אלקטרוני', desc:'אתה מוצא מוצרים עם ביקוש ובונה חנות אונליין רווחית שמתרחבת דרך פרסום ולוגיסטיקה', detail:'העסק שלך חי על מספרים: מרווח, עלות קליק, LTV. אתה בודק רעיונות למוצרים במהירות ומייטב משפכי מכירות.', start:['לבחור נישה עם ניתוח ביקוש (Google Trends, Amazon)','ליצור חנות ניסיון ב-Shopify או WooCommerce','להשיק קמפיין ראשון עם תקציב מינימלי','ללמוד כלכלת יחידות: CAC, LTV, מרווח גולמי'], startUrls:['https://www.shopify.com/blog/ecommerce-business','https://sell.amazon.co.il/','https://blog.hubspot.com/marketing/ecommerce'] },
    agency: { emoji:'🎯', name:'בעל סוכנות', desc:'אתה מממש את המומחיות שלך על ידי בניית צוות ועסק שירותי B2B עם חוזים חוזרים', detail:'הערך שלך הוא בידע וברשת הקשרים שלך. מתחיל כפרילנסר, מגייס, מתקנן תהליכים ובונה סוכנות שעובדת בלעדיך.', start:['להגדיר את המומחיות שלך ולקוח אידיאלי (ICP)','להשיג 3 לקוחות ראשונים דרך LinkedIn ונטוורקינג','להגדיר CRM לניהול עסקאות','לארוז את השירות כהצעה ברורה במחיר קבוע'], startUrls:['https://www.hubspot.com/products/crm','https://www.linkedin.com/business/sales','https://swipefiles.com/agency'] },
    impact: { emoji:'🌱', name:'יזם חברתי', desc:'אתה בונה עסק בר-קיימא שפותר בעיות חברתיות וסביבתיות, ומודד הצלחה מעבר לרווח', detail:'אתה משלב חשיבה יזמית עם רצון לשנות את העולם. מושך מענקים ומשקיעי אימפקט, משתף פעולה עם עמותות ומכמת השפעה חברתית.', start:['לבחור בעיה חברתית קונקרטית ולחקור אותה לעומק','ללמוד Theory of Change ומדידת אימפקט','למצוא מיזמים חברתיים מוצלחים בתחום שלך','להגיש בקשה למענק או אקסלרטור חברתי'], startUrls:['https://www.ashoka.org/he','https://ssir.org/','https://www.shatil.org.il/'] }
  },
  ui: { tag:'יזם', title:'איזה סוג יזם אתה?', subtitle:'6 שאלות לגילוי הדרך שלך בעסקים', prog:'שאלה %d מתוך 6', hint:'בחר אפשרות אחת', back:'→ חזרה', next:'הבא ←', finish:'לראות את התוצאה', winBadge:'הסגנון היזמי שלך', resTag:'תוצאה', resSub:'התפקיד שלך בעסקים', lblStart:'מאיפה להתחיל:', l2back:'→ חזרה לתוצאות' }
};

L2.entrepreneur.zh = {
  questions: [
    {t:'创业中什么最吸引你？', o:['科技创业——构建有技术壁垒的产品','电商/DTC——销售实体或数字产品','创意机构——提供设计、营销等专业服务','社会创业——用商业解决社会问题'], s:[{founder:3},{ecommerce:3},{agency:3},{impact:3}]},
    {t:'你最想掌握哪种能力？', o:['产品开发和融资路演','供应链管理和流量获取','客户获取和项目交付','社会影响力评估和可持续商业模式'], s:[{founder:3},{ecommerce:3},{agency:3},{impact:3}]},
    {t:'什么成果最让你兴奋？', o:['产品被用户真心喜爱并自发传播','第一个月GMV超过10万','签下第一个10万年费的客户','你的项目改变了100个家庭的生活'], s:[{founder:3},{ecommerce:3},{agency:3},{impact:3}]},
    {t:'你更喜欢做什么？', o:['用户访谈、产品迭代、路演投资人','选品、测款、优化广告ROI','提案、交付、建立长期客户关系','跑实地调研、设计解决方案、申请公益基金'], s:[{founder:3},{ecommerce:3},{agency:3},{impact:3}]},
    {t:'你会选择哪个项目？', o:['从0到1做一款SaaS产品','用Shopify开一个独立站卖自研产品','创立一家专注某垂直领域的创意机构','发起一个解决本地教育问题的社会企业'], s:[{founder:3},{ecommerce:3},{agency:3},{impact:3}]},
    {t:'10年后你在哪里？', o:['成功上市或被收购的科技公司创始人','多品类电商集团的CEO','细分领域领先机构的创始合伙人','改变了一个行业生态的社会创业者'], s:[{founder:3},{ecommerce:3},{agency:3},{impact:3}]}
  ],
  roles: {
    founder: {emoji:'🚀', name:'科技创始人', desc:'用技术和产品思维解决真实问题，构建可规模化的科技公司', detail:'你同时是产品经理、销售、招聘官和CEO。你在极度不确定中找到产品市场契合点，并快速扩张。', start:['阅读《从0到1》——彼得·蒂尔','学习精益创业方法——快速验证假设','了解天使融资和VC逻辑——如何写投资摘要','加入创业社区——在活动中找联合创始人']},
    ecommerce: {emoji:'🛒', name:'电商创业者', desc:'选对产品，掌握流量，把货卖给全世界', detail:'你的战场是Amazon、Shopify或淘宝。你研究选品、管理供应链、优化广告，把利润最大化。你需要对数字极度敏感。', start:['学习电商基础——产品调研、利润核算','了解Facebook/TikTok广告投放基础','用Shopify搭建独立站——14天免费试用','先卖别人的货——dropshipping测试市场']},
    agency: {emoji:'🏢', name:'创意机构创始人', desc:'把专业技能变成服务产品，服务有需求的企业客户', detail:'你把设计、营销、技术等专业能力打包成可交付的服务。你的核心挑战是同时管理销售、交付和团队。', start:['确定你的核心能力和目标客户——越细越好','接第一个客户——先从身边的人开始','学习项目管理——如何按时高质量交付','阅读《会飞的猫》——如何经营创意机构']},
    impact: {emoji:'🌱', name:'社会创业者', desc:'用可持续的商业模式解决社会和环境问题', detail:'你相信生意可以让世界更好。你的产品或服务同时创造经济价值和社会价值。你需要平衡使命和盈利。', start:['了解社会企业模式——B Corp认证体系','研究成功案例——Grameen Bank、TOMS','学习社会影响力评估——SROI方法论','申请社会创新相关的加速器项目']}
  },
  ui: {l2back:'← 返回创业', title:'创业方向：选择你的创业路径'}
};
