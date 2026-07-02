'use strict';
/* ── L2: Маркетолог / Бренд-менеджер ─────────────────────────────────────────
   4 roles: digital 📱 | brand 🎨 | growth 🚀 | product_mkt 📦
   6 questions × 8 languages  /  structure: { t, o, s } per question
──────────────────────────────────────────────────────────────────────────── */

// ─── RU ──────────────────────────────────────────────────────────────────────
L2.marketer.ru = {
  questions: [
    {
      t: 'Что тебя больше всего заряжает в маркетинге?',
      o: [
        'Создавать контент и управлять сообществами в соцсетях',
        'Строить образ бренда — айдентику, тон и позиционирование',
        'Запускать рекламные кампании и оптимизировать их по данным',
        'Выводить продукт на рынок и объяснять его ценность аудитории'
      ],
      s: [{digital:3},{brand:3},{growth:3},{product_mkt:3}]
    },
    {
      t: 'Какая задача тебе ближе всего?',
      o: [
        'Придумать серию постов, запустить рилс и прокачать охваты',
        'Разработать брендбук и гайдлайны для команды',
        'Снизить стоимость привлечения клиента (CAC) на 20% через A/B тесты',
        'Написать go-to-market стратегию для нового продукта'
      ],
      s: [{digital:3},{brand:3},{growth:3},{product_mkt:3}]
    },
    {
      t: 'Какой навык ты считаешь своей суперсилой?',
      o: [
        'Чувство трендов, насмотренность и умение говорить с аудиторией',
        'Стратегическое мышление и работа с визуальными смыслами',
        'Аналитика, работа с данными и умение масштабировать эксперименты',
        'Понимание продукта изнутри и умение транслировать его ценность'
      ],
      s: [{digital:3},{brand:3},{growth:3},{product_mkt:3}]
    },
    {
      t: 'Как выглядит твой идеальный рабочий день?',
      o: [
        'Планирование контента, съёмка, монтаж, работа с инфлюенсерами',
        'Брифинги с дизайнерами, ресёрч конкурентов, работа над месседжами',
        'Дашборды, гипотезы, запуск тестов, анализ результатов кампаний',
        'Интервью с клиентами, подготовка презентаций, работа с отделом продаж'
      ],
      s: [{digital:3},{brand:3},{growth:3},{product_mkt:3}]
    },
    {
      t: 'Какая метрика для тебя важнее всего?',
      o: [
        'Охваты, вовлечённость (ER), прирост подписчиков',
        'Узнаваемость бренда (Brand Awareness), NPS, тональность упоминаний',
        'ROAS, CPA, конверсия, LTV',
        'Product adoption rate, Feature usage, Win rate в продажах'
      ],
      s: [{digital:3},{brand:3},{growth:3},{product_mkt:3}]
    },
    {
      t: 'Как выглядит твой успех через 5 лет?',
      o: [
        'Head of Social / Creative Director — веду команду контента и выстраиваю digital-присутствие',
        'CMO или VP of Brand — отвечаю за восприятие компании на рынке',
        'VP of Growth — руковожу функцией привлечения и удержания с double-digit ростом',
        'VP of Product Marketing — управляю выводом продуктов на рынок по всему портфелю'
      ],
      s: [{digital:3},{brand:3},{growth:3},{product_mkt:3}]
    }
  ],
  roles: {
    digital: {
      emoji: '📱',
      name: 'Digital-маркетолог / SMM',
      desc: 'Управляешь присутствием бренда в соцсетях, создаёшь контент и работаешь с аудиторией в цифровой среде',
      detail: 'Ты там, где внимание людей — в соцсетях, мессенджерах, YouTube. Придумываешь идеи, снимаешь контент, работаешь с блогерами и следишь за трендами быстрее всех в команде.',
      start: ['Изучи алгоритмы Instagram, TikTok, YouTube и LinkedIn', 'Освой базовые инструменты: Canva, CapCut, Meta Ads Manager', 'Пройди курс по SMM и контент-маркетингу', 'Создай собственный аккаунт как портфолио'],
      startUrls: ['https://blog.hubspot.com/marketing/social-media-marketing', 'https://buffer.com/resources/social-media-marketing/', 'https://www.coursera.org/learn/social-media-marketing-introduction', 'https://neilpatel.com/blog/']
    },
    brand: {
      emoji: '🎨',
      name: 'Бренд-менеджер',
      desc: 'Строишь и защищаешь образ бренда — от визуальной айдентики до тональности коммуникаций',
      detail: 'Ты отвечаешь за то, как компанию воспринимают люди. Разрабатываешь позиционирование, следишь за консистентностью бренда на всех каналах и влияешь на то, какие чувства вызывает продукт.',
      start: ['Изучи основы бренд-стратегии и позиционирования', 'Прочитай "Building a StoryBrand" Дональда Миллера', 'Разбери брендбуки крупных компаний (Airbnb, Notion, Apple)', 'Пройди курс по стратегическому маркетингу'],
      startUrls: ['https://www.coursera.org/learn/brand-management', 'https://www.amazon.com/Building-StoryBrand-Clarify-Message-Customers/dp/0718033329', 'https://blog.hubspot.com/marketing/branding', 'https://www.brandingstrategyinsider.com/']
    },
    growth: {
      emoji: '🚀',
      name: 'Growth Marketer / Performance',
      desc: 'Запускаешь и оптимизируешь платные и органические каналы, проводишь A/B тесты и масштабируешь то, что работает',
      detail: 'Ты на пересечении маркетинга и аналитики. Строишь эксперименты, работаешь с данными и постоянно ищешь точки роста. Твои решения основаны на цифрах, а не на интуиции.',
      start: ['Изучи Google Analytics 4, Meta Ads, Google Ads', 'Разберись с A/B тестированием и статистической значимостью', 'Пройди курс по growth hacking или performance marketing', 'Прочитай "Hacking Growth" Шона Эллиса'],
      startUrls: ['https://analytic.tools/', 'https://www.coursera.org/learn/digital-marketing', 'https://growthmarketers.com/', 'https://www.amazon.com/Hacking-Growth-Fastest-Growing-Companies/dp/045149721X']
    },
    product_mkt: {
      emoji: '📦',
      name: 'Product Marketing Manager',
      desc: 'Выводишь продукт на рынок, формируешь его позиционирование и помогаешь команде продаж объяснять ценность клиентам',
      detail: 'Ты мост между продуктом, маркетингом и продажами. Понимаешь клиента глубже всех в компании, пишешь месседжи, создаёшь материалы для продаж и управляешь go-to-market стратегиями.',
      start: ['Изучи методологию Jobs-to-be-Done и customer interviews', 'Разберись с go-to-market стратегией и sales enablement', 'Пройди курс Product Marketing на Reforge или Coursera', 'Прочитай "Obviously Awesome" Эйприл Данфорд'],
      startUrls: ['https://www.reforge.com/blog/product-marketing', 'https://www.coursera.org/learn/marketing-strategy', 'https://www.amazon.com/Obviously-Awesome-Product-Positioning-Customers/dp/1999023005', 'https://productmarketingalliance.com/']
    }
  },
  ui: {
    tag: 'Маркетолог',
    title: 'Какой ты маркетолог?',
    subtitle: '6 вопросов — найди свою нишу в маркетинге',
    prog: 'Вопрос %d из 6',
    hint: 'Выбери один вариант',
    back: '← Назад',
    next: 'Далее →',
    finish: 'Узнать результат',
    winBadge: 'Твоя ниша в маркетинге',
    resTag: 'Результат',
    resSub: 'Твой путь в маркетинге',
    lblStart: 'С чего начать:',
    l2back: '← К результатам'
  }
};

// ─── EN ──────────────────────────────────────────────────────────────────────
L2.marketer.en = {
  questions: [
    { t:'What energizes you most about marketing?', o:['Creating content and managing social media communities','Building a brand image — identity, tone and positioning','Running ad campaigns and optimizing them with data','Launching products to market and communicating their value'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'Which task feels most natural to you?', o:['Planning a content series, shooting reels and growing reach','Designing a brand book and style guidelines for the team','Reducing customer acquisition cost by 20% through A/B tests','Writing a go-to-market strategy for a new product'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'What skill is your superpower?', o:['Trend awareness, cultural fluency and audience empathy','Strategic thinking and working with visual meaning','Analytics, data work and scaling experiments','Deep product understanding and translating it into value messages'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'What does your ideal workday look like?', o:['Content planning, shooting, editing, influencer outreach','Briefings with designers, competitor research, messaging workshops','Dashboards, hypotheses, test launches, campaign analysis','Customer interviews, deck prep, collaboration with sales'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'Which metric matters most to you?', o:['Reach, engagement rate (ER), follower growth','Brand awareness, NPS, share of voice','ROAS, CPA, conversion rate, LTV','Product adoption rate, feature usage, sales win rate'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'What does success look like in 5 years?', o:['Head of Social / Creative Director — leading a content team and owning digital presence','CMO or VP of Brand — responsible for how the market perceives the company','VP of Growth — running acquisition and retention with double-digit growth','VP of Product Marketing — managing go-to-market across the full product portfolio'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] }
  ],
  roles: {
    digital: { emoji:'📱', name:'Digital Marketer / SMM', desc:'You manage the brand\'s presence on social media, create content and engage audiences in the digital space', detail:'You live where people\'s attention is — social media, messaging apps, YouTube. You come up with ideas, shoot content, work with creators and catch trends faster than anyone on the team.', start:['Study algorithms for Instagram, TikTok, YouTube and LinkedIn','Master core tools: Canva, CapCut, Meta Ads Manager','Take an SMM and content marketing course','Build your own account as a portfolio'], startUrls:['https://blog.hubspot.com/marketing/social-media-marketing','https://buffer.com/resources/social-media-marketing/','https://www.coursera.org/learn/social-media-marketing-introduction','https://neilpatel.com/blog/'] },
    brand: { emoji:'🎨', name:'Brand Manager', desc:'You build and protect the brand image — from visual identity to tone of voice across all touchpoints', detail:'You\'re responsible for how people perceive the company. You develop positioning, maintain brand consistency across channels and influence the feelings a product evokes.', start:['Study brand strategy and positioning fundamentals','Read "Building a StoryBrand" by Donald Miller','Analyze brand books of leading companies (Airbnb, Notion, Apple)','Take a strategic marketing course'], startUrls:['https://www.coursera.org/learn/brand-management','https://www.amazon.com/Building-StoryBrand-Clarify-Message-Customers/dp/0718033329','https://blog.hubspot.com/marketing/branding','https://www.brandingstrategyinsider.com/'] },
    growth: { emoji:'🚀', name:'Growth Marketer / Performance', desc:'You launch and optimize paid and organic channels, run A/B tests and scale what works', detail:'You sit at the intersection of marketing and analytics. You design experiments, work with data and constantly search for growth levers. Your decisions are driven by numbers, not gut feel.', start:['Learn Google Analytics 4, Meta Ads, Google Ads','Understand A/B testing and statistical significance','Take a growth hacking or performance marketing course','Read "Hacking Growth" by Sean Ellis'], startUrls:['https://analytic.tools/','https://www.coursera.org/learn/digital-marketing','https://growthmarketers.com/','https://www.amazon.com/Hacking-Growth-Fastest-Growing-Companies/dp/045149721X'] },
    product_mkt: { emoji:'📦', name:'Product Marketing Manager', desc:'You launch products to market, craft their positioning and help the sales team communicate value to customers', detail:'You\'re the bridge between product, marketing and sales. You understand the customer more deeply than anyone in the company, write the messaging, create sales materials and drive go-to-market strategies.', start:['Study Jobs-to-be-Done methodology and customer interviews','Understand go-to-market strategy and sales enablement','Take a Product Marketing course on Reforge or Coursera','Read "Obviously Awesome" by April Dunford'], startUrls:['https://www.reforge.com/blog/product-marketing','https://www.coursera.org/learn/marketing-strategy','https://www.amazon.com/Obviously-Awesome-Product-Positioning-Customers/dp/1999023005','https://productmarketingalliance.com/'] }
  },
  ui: { tag:'Marketer', title:'What kind of marketer are you?', subtitle:'6 questions — find your niche in marketing', prog:'Question %d of 6', hint:'Choose one option', back:'← Back', next:'Next →', finish:'See my result', winBadge:'Your niche in marketing', resTag:'Result', resSub:'Your path in marketing', lblStart:'Where to start:', l2back:'← Back to results' }
};

// ─── DE ──────────────────────────────────────────────────────────────────────
L2.marketer.de = {
  questions: [
    { t:'Was begeistert dich am Marketing am meisten?', o:['Inhalte erstellen und Social-Media-Communities managen','Ein Markenimage aufbauen — Identität, Tonalität und Positionierung','Werbekampagnen starten und datenbasiert optimieren','Produkte auf den Markt bringen und deren Wert kommunizieren'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'Welche Aufgabe liegt dir am nächsten?', o:['Eine Content-Serie planen, Reels drehen und Reichweite steigern','Ein Brandbook und Style-Guidelines für das Team entwickeln','CAC durch A/B-Tests um 20 % senken','Eine Go-to-Market-Strategie für ein neues Produkt schreiben'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'Welche Fähigkeit ist deine Superpower?', o:['Trendgespür, kulturelle Aufmerksamkeit und Publikumsempathie','Strategisches Denken und Arbeit mit visuellen Botschaften','Analytics, Datenarbeit und Skalierung von Experimenten','Tiefes Produktverständnis und Übertragung in Botschaften'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'Wie sieht dein idealer Arbeitstag aus?', o:['Content planen, drehen, schneiden, Influencer-Kooperationen','Briefings mit Designern, Wettbewerbsrecherche, Messaging-Workshops','Dashboards, Hypothesen, Testläufe, Kampagnenanalyse','Kundeninterviews, Präsentationen, Zusammenarbeit mit Vertrieb'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'Welche Kennzahl ist dir am wichtigsten?', o:['Reichweite, Engagement-Rate (ER), Follower-Wachstum','Markenbekanntheit, NPS, Tonalität der Erwähnungen','ROAS, CPA, Conversion Rate, LTV','Product-Adoption-Rate, Feature-Nutzung, Win Rate im Vertrieb'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'Wie sieht dein Erfolg in 5 Jahren aus?', o:['Head of Social / Creative Director — ich leite das Content-Team und verantworte die digitale Präsenz','CMO oder VP of Brand — ich gestalte die Marktwahrnehmung des Unternehmens','VP of Growth — ich verantworte Akquisition und Retention mit zweistelligem Wachstum','VP of Product Marketing — ich manage den Markteintritt über das gesamte Portfolio'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] }
  ],
  roles: {
    digital: { emoji:'📱', name:'Digital Marketer / Social Media', desc:'Du verwaltest die Markenpräsenz in sozialen Medien, erstellst Inhalte und interagierst mit der Zielgruppe im digitalen Raum', detail:'Du bist dort, wo die Aufmerksamkeit der Menschen ist — Social Media, Messenger, YouTube. Du entwickelst Ideen, produzierst Content und erkennst Trends schneller als alle anderen im Team.', start:['Lerne Algorithmen von Instagram, TikTok, YouTube und LinkedIn','Eigne dir Tools an: Canva, CapCut, Meta Ads Manager','Absolviere einen SMM- und Content-Marketing-Kurs','Baue einen eigenen Account als Portfolio auf'], startUrls:['https://blog.hubspot.com/marketing/social-media-marketing','https://buffer.com/resources/social-media-marketing/','https://www.coursera.org/learn/social-media-marketing-introduction','https://neilpatel.com/blog/'] },
    brand: { emoji:'🎨', name:'Brand Manager', desc:'Du baust und schützt das Markenimage — von der visuellen Identität bis zur Kommunikationstonalität', detail:'Du bist dafür verantwortlich, wie Menschen das Unternehmen wahrnehmen. Du entwickelst Positionierungen, sorgst für Markenkonsistenz und beeinflusst, welche Gefühle ein Produkt auslöst.', start:['Grundlagen der Markenstrategie und Positionierung studieren','„Building a StoryBrand" von Donald Miller lesen','Brandbooks führender Unternehmen analysieren (Airbnb, Notion, Apple)','Einen strategischen Marketingkurs absolvieren'], startUrls:['https://www.coursera.org/learn/brand-management','https://www.amazon.de/Building-StoryBrand-Clarify-Message-Customers/dp/0718033329','https://blog.hubspot.com/marketing/branding','https://www.brandingstrategyinsider.com/'] },
    growth: { emoji:'🚀', name:'Growth Marketer / Performance', desc:'Du startest und optimierst bezahlte und organische Kanäle, führst A/B-Tests durch und skalierst, was funktioniert', detail:'Du stehst an der Schnittstelle von Marketing und Analytik. Du entwirfst Experimente, arbeitest mit Daten und suchst ständig nach Wachstumshebeln. Deine Entscheidungen basieren auf Zahlen.', start:['Google Analytics 4, Meta Ads, Google Ads lernen','A/B-Tests und statistische Signifikanz verstehen','Einen Growth-Hacking- oder Performance-Marketing-Kurs machen','„Hacking Growth" von Sean Ellis lesen'], startUrls:['https://analytic.tools/','https://www.coursera.org/learn/digital-marketing','https://growthmarketers.com/','https://www.amazon.de/Hacking-Growth-Fastest-Growing-Companies/dp/045149721X'] },
    product_mkt: { emoji:'📦', name:'Product Marketing Manager', desc:'Du bringst Produkte auf den Markt, gestaltest ihre Positionierung und hilfst dem Vertrieb, den Wert zu kommunizieren', detail:'Du bist die Brücke zwischen Produkt, Marketing und Vertrieb. Du verstehst den Kunden tiefer als alle anderen und steuerst Go-to-Market-Strategien.', start:['Jobs-to-be-Done-Methodik und Kundeninterviews studieren','Go-to-Market-Strategie und Sales Enablement verstehen','Einen Product-Marketing-Kurs auf Reforge oder Coursera absolvieren','„Obviously Awesome" von April Dunford lesen'], startUrls:['https://www.reforge.com/blog/product-marketing','https://www.coursera.org/learn/marketing-strategy','https://www.amazon.de/Obviously-Awesome-Product-Positioning-Customers/dp/1999023005','https://productmarketingalliance.com/'] }
  },
  ui: { tag:'Marketing-Manager', title:'Welcher Marketing-Typ bist du?', subtitle:'6 Fragen — finde deine Nische im Marketing', prog:'Frage %d von 6', hint:'Wähle eine Option', back:'← Zurück', next:'Weiter →', finish:'Ergebnis anzeigen', winBadge:'Deine Nische im Marketing', resTag:'Ergebnis', resSub:'Dein Weg im Marketing', lblStart:'Wo anfangen:', l2back:'← Zurück zu den Ergebnissen' }
};

// ─── FR ──────────────────────────────────────────────────────────────────────
L2.marketer.fr = {
  questions: [
    { t:"Qu'est-ce qui t'enthousiasme le plus dans le marketing ?", o:["Créer du contenu et gérer des communautés sur les réseaux sociaux","Construire l'image d'une marque — identité, ton et positionnement","Lancer des campagnes publicitaires et les optimiser par les données","Lancer des produits sur le marché et communiquer leur valeur"], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:"Quelle tâche te semble la plus naturelle ?", o:["Planifier une série de contenus, tourner des reels et booster la portée","Créer un brandbook et des guidelines pour l'équipe","Réduire le CAC de 20 % grâce à des tests A/B","Rédiger une stratégie go-to-market pour un nouveau produit"], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:"Quelle compétence est ton superpouvoir ?", o:["Flair pour les tendances, culture digitale et empathie pour l'audience","Pensée stratégique et travail sur les sens visuels","Analytique, data et capacité à scaler des expérimentations","Compréhension profonde du produit et traduction en messages de valeur"], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:"À quoi ressemble ta journée idéale ?", o:["Planification de contenu, tournage, montage, collaborations influenceurs","Briefings avec les designers, veille concurrentielle, ateliers messaging","Tableaux de bord, hypothèses, tests, analyse des campagnes","Interviews clients, préparation de présentations, collaboration avec les ventes"], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:"Quelle métrique est la plus importante pour toi ?", o:["Portée, taux d'engagement (ER), croissance des abonnés","Notoriété de la marque, NPS, tonalité des mentions","ROAS, CPA, taux de conversion, LTV","Taux d'adoption produit, utilisation des fonctionnalités, win rate des ventes"], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:"À quoi ressemble ton succès dans 5 ans ?", o:["Head of Social / Creative Director — je pilote l'équipe contenu et la présence digitale","CMO ou VP Brand — je façonne la perception de l'entreprise sur le marché","VP of Growth — je pilote l'acquisition et la rétention avec une croissance à deux chiffres","VP of Product Marketing — je manage les lancements sur l'ensemble du portfolio"], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] }
  ],
  roles: {
    digital: { emoji:'📱', name:'Digital Marketer / Social Media', desc:'Tu gères la présence de la marque sur les réseaux sociaux, crées du contenu et engages les audiences dans l\'espace digital', detail:'Tu es là où se trouve l\'attention des gens — réseaux sociaux, messageries, YouTube. Tu génères des idées, produis du contenu et repères les tendances avant tout le monde.', start:['Étudier les algorithmes d\'Instagram, TikTok, YouTube et LinkedIn','Maîtriser les outils : Canva, CapCut, Meta Ads Manager','Suivre une formation SMM et content marketing','Créer ton propre compte comme portfolio'], startUrls:['https://blog.hubspot.com/marketing/social-media-marketing','https://buffer.com/resources/social-media-marketing/','https://www.coursera.org/learn/social-media-marketing-introduction','https://neilpatel.com/blog/'] },
    brand: { emoji:'🎨', name:'Brand Manager', desc:'Tu construis et protèges l\'image de la marque — de l\'identité visuelle au ton de communication', detail:'Tu es responsable de la façon dont les gens perçoivent l\'entreprise. Tu élabores le positionnement, veilles à la cohérence de la marque sur tous les canaux et influences les émotions que le produit suscite.', start:['Étudier les bases de la stratégie de marque et du positionnement','Lire « Building a StoryBrand » de Donald Miller','Analyser les brandbooks de grandes entreprises (Airbnb, Notion, Apple)','Suivre un cours de marketing stratégique'], startUrls:['https://www.coursera.org/learn/brand-management','https://www.amazon.fr/Building-StoryBrand-Clarify-Message-Customers/dp/0718033329','https://blog.hubspot.com/marketing/branding','https://www.brandingstrategyinsider.com/'] },
    growth: { emoji:'🚀', name:'Growth Marketer / Performance', desc:'Tu lances et optimises les canaux payants et organiques, réalises des tests A/B et scales ce qui fonctionne', detail:'Tu es à l\'intersection du marketing et de l\'analytique. Tu conçois des expériences, travailles avec les données et cherches constamment des leviers de croissance basés sur les chiffres.', start:['Apprendre Google Analytics 4, Meta Ads, Google Ads','Comprendre les tests A/B et la significativité statistique','Suivre un cours de growth hacking ou performance marketing','Lire « Hacking Growth » de Sean Ellis'], startUrls:['https://analytic.tools/','https://www.coursera.org/learn/digital-marketing','https://growthmarketers.com/','https://www.amazon.fr/Hacking-Growth-Fastest-Growing-Companies/dp/045149721X'] },
    product_mkt: { emoji:'📦', name:'Product Marketing Manager', desc:'Tu lances des produits sur le marché, conçois leur positionnement et aides l\'équipe commerciale à communiquer la valeur', detail:'Tu es le pont entre le produit, le marketing et les ventes. Tu comprends le client plus profondément que quiconque dans l\'entreprise et pilotes les stratégies go-to-market.', start:['Étudier la méthodologie Jobs-to-be-Done et les interviews clients','Comprendre la stratégie go-to-market et le sales enablement','Suivre une formation Product Marketing sur Reforge ou Coursera','Lire « Obviously Awesome » d\'April Dunford'], startUrls:['https://www.reforge.com/blog/product-marketing','https://www.coursera.org/learn/marketing-strategy','https://www.amazon.fr/Obviously-Awesome-Product-Positioning-Customers/dp/1999023005','https://productmarketingalliance.com/'] }
  },
  ui: { tag:'Marketeur', title:'Quel type de marketeur es-tu ?', subtitle:'6 questions pour trouver ta niche en marketing', prog:'Question %d sur 6', hint:'Choisis une option', back:'← Retour', next:'Suivant →', finish:'Voir mon résultat', winBadge:'Ta niche en marketing', resTag:'Résultat', resSub:'Ton chemin en marketing', lblStart:'Par où commencer :', l2back:'← Retour aux résultats' }
};

// ─── ES ──────────────────────────────────────────────────────────────────────
L2.marketer.es = {
  questions: [
    { t:'¿Qué te entusiasma más del marketing?', o:['Crear contenido y gestionar comunidades en redes sociales','Construir la imagen de marca — identidad, tono y posicionamiento','Lanzar campañas publicitarias y optimizarlas con datos','Llevar productos al mercado y comunicar su valor'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'¿Qué tarea te resulta más natural?', o:['Planear una serie de contenidos, grabar reels y crecer en alcance','Desarrollar un brandbook y guías de estilo para el equipo','Reducir el CAC un 20 % mediante pruebas A/B','Escribir una estrategia go-to-market para un nuevo producto'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'¿Cuál es tu superpoder?', o:['Olfato para tendencias, cultura digital y empatía con la audiencia','Pensamiento estratégico y trabajo con significados visuales','Analítica, datos y escalado de experimentos','Comprensión profunda del producto y traducción a mensajes de valor'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'¿Cómo es tu día de trabajo ideal?', o:['Planear, grabar, editar, colaborar con influencers','Briefings con diseñadores, investigación de competencia, talleres de mensajes','Dashboards, hipótesis, pruebas, análisis de campañas','Entrevistas con clientes, preparar presentaciones, trabajo con ventas'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'¿Qué métrica es la más importante para ti?', o:['Alcance, tasa de engagement (ER), crecimiento de seguidores','Reconocimiento de marca, NPS, sentimiento de menciones','ROAS, CPA, tasa de conversión, LTV','Tasa de adopción del producto, uso de funciones, win rate en ventas'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'¿Cómo luce tu éxito en 5 años?', o:['Head of Social / Creative Director — lidero el equipo de contenido y la presencia digital','CMO o VP de Marca — gestiono la percepción de la empresa en el mercado','VP of Growth — dirijo adquisición y retención con crecimiento de doble dígito','VP of Product Marketing — gestiono los lanzamientos de todo el portafolio'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] }
  ],
  roles: {
    digital: { emoji:'📱', name:'Digital Marketer / Social Media', desc:'Gestionas la presencia de la marca en redes sociales, creas contenido e interactúas con audiencias en el espacio digital', detail:'Estás donde está la atención de las personas — redes sociales, mensajería, YouTube. Generas ideas, produces contenido y detectas tendencias antes que nadie en el equipo.', start:['Estudiar algoritmos de Instagram, TikTok, YouTube y LinkedIn','Dominar herramientas: Canva, CapCut, Meta Ads Manager','Tomar un curso de SMM y marketing de contenidos','Crear tu propia cuenta como portafolio'], startUrls:['https://blog.hubspot.com/marketing/social-media-marketing','https://buffer.com/resources/social-media-marketing/','https://www.coursera.org/learn/social-media-marketing-introduction','https://neilpatel.com/blog/'] },
    brand: { emoji:'🎨', name:'Brand Manager', desc:'Construyes y proteges la imagen de marca — desde la identidad visual hasta el tono de comunicación', detail:'Eres responsable de cómo percibe la gente a la empresa. Desarrollas el posicionamiento, mantienes la coherencia de marca en todos los canales e influyes en las emociones que evoca el producto.', start:['Estudiar bases de estrategia de marca y posicionamiento','Leer "Building a StoryBrand" de Donald Miller','Analizar brandbooks de grandes empresas (Airbnb, Notion, Apple)','Tomar un curso de marketing estratégico'], startUrls:['https://www.coursera.org/learn/brand-management','https://es.amazon.com/Building-StoryBrand-Clarify-Message-Customers/dp/0718033329','https://blog.hubspot.com/marketing/branding','https://www.brandingstrategyinsider.com/'] },
    growth: { emoji:'🚀', name:'Growth Marketer / Performance', desc:'Lanzas y optimizas canales pagados y orgánicos, realizas pruebas A/B y escala lo que funciona', detail:'Estás en la intersección del marketing y la analítica. Diseñas experimentos, trabajas con datos y buscas constantemente palancas de crecimiento basadas en números.', start:['Aprender Google Analytics 4, Meta Ads, Google Ads','Entender las pruebas A/B y la significancia estadística','Tomar un curso de growth hacking o performance marketing','Leer "Hacking Growth" de Sean Ellis'], startUrls:['https://analytic.tools/','https://www.coursera.org/learn/digital-marketing','https://growthmarketers.com/','https://es.amazon.com/Hacking-Growth-Fastest-Growing-Companies/dp/045149721X'] },
    product_mkt: { emoji:'📦', name:'Product Marketing Manager', desc:'Lanzas productos al mercado, diseñas su posicionamiento y ayudas al equipo de ventas a comunicar el valor', detail:'Eres el puente entre producto, marketing y ventas. Entiendes al cliente más profundamente que nadie en la empresa y gestionas las estrategias go-to-market.', start:['Estudiar la metodología Jobs-to-be-Done y entrevistas con clientes','Entender la estrategia go-to-market y el sales enablement','Tomar un curso de Product Marketing en Reforge o Coursera','Leer "Obviously Awesome" de April Dunford'], startUrls:['https://www.reforge.com/blog/product-marketing','https://www.coursera.org/learn/marketing-strategy','https://es.amazon.com/Obviously-Awesome-Product-Positioning-Customers/dp/1999023005','https://productmarketingalliance.com/'] }
  },
  ui: { tag:'Marketing', title:'¿Qué tipo de marketer eres?', subtitle:'6 preguntas para encontrar tu nicho en marketing', prog:'Pregunta %d de 6', hint:'Elige una opción', back:'← Atrás', next:'Siguiente →', finish:'Ver mi resultado', winBadge:'Tu nicho en marketing', resTag:'Resultado', resSub:'Tu camino en marketing', lblStart:'Por dónde empezar:', l2back:'← Volver a los resultados' }
};

// ─── PT ──────────────────────────────────────────────────────────────────────
L2.marketer.pt = {
  questions: [
    { t:'O que mais te entusiasma no marketing?', o:['Criar conteúdo e gerenciar comunidades nas redes sociais','Construir a imagem da marca — identidade, tom e posicionamento','Lançar campanhas publicitárias e otimizá-las com dados','Levar produtos ao mercado e comunicar seu valor'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'Qual tarefa é mais natural para você?', o:['Planejar uma série de conteúdo, gravar reels e crescer o alcance','Criar um brandbook e guias de estilo para a equipe','Reduzir o CAC em 20% por meio de testes A/B','Escrever uma estratégia go-to-market para um novo produto'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'Qual habilidade é seu superpoder?', o:['Faro para tendências, cultura digital e empatia com a audiência','Pensamento estratégico e trabalho com significados visuais','Análise de dados e escalada de experimentos','Compreensão profunda do produto e tradução em mensagens de valor'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'Como é seu dia de trabalho ideal?', o:['Planejar, gravar, editar, colaborações com influenciadores','Briefings com designers, pesquisa de concorrência, workshops de mensagens','Dashboards, hipóteses, testes, análise de campanhas','Entrevistas com clientes, preparar apresentações, trabalho com vendas'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'Qual métrica é mais importante para você?', o:['Alcance, taxa de engajamento (ER), crescimento de seguidores','Brand awareness, NPS, sentimento de menções','ROAS, CPA, taxa de conversão, LTV','Taxa de adoção do produto, uso de funcionalidades, win rate em vendas'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'Como é o seu sucesso em 5 anos?', o:['Head of Social / Creative Director — lidero a equipe de conteúdo e a presença digital','CMO ou VP de Marca — gerenco a percepção da empresa no mercado','VP of Growth — dirijo aquisição e retenção com crescimento de dois dígitos','VP of Product Marketing — gerencio os lançamentos de todo o portfólio'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] }
  ],
  roles: {
    digital: { emoji:'📱', name:'Digital Marketer / Social Media', desc:'Você gerencia a presença da marca nas redes sociais, cria conteúdo e engaja audiências no espaço digital', detail:'Você está onde está a atenção das pessoas — redes sociais, mensageiros, YouTube. Gera ideias, produz conteúdo e detecta tendências antes de todos no time.', start:['Estudar algoritmos de Instagram, TikTok, YouTube e LinkedIn','Dominar ferramentas: Canva, CapCut, Meta Ads Manager','Fazer um curso de SMM e marketing de conteúdo','Criar sua própria conta como portfólio'], startUrls:['https://blog.hubspot.com/marketing/social-media-marketing','https://buffer.com/resources/social-media-marketing/','https://www.coursera.org/learn/social-media-marketing-introduction','https://neilpatel.com/blog/'] },
    brand: { emoji:'🎨', name:'Brand Manager', desc:'Você constrói e protege a imagem da marca — da identidade visual ao tom de comunicação', detail:'Você é responsável por como as pessoas percebem a empresa. Desenvolve o posicionamento, mantém a consistência da marca em todos os canais e influencia as emoções que o produto evoca.', start:['Estudar bases de estratégia de marca e posicionamento','Ler "Building a StoryBrand" de Donald Miller','Analisar brandbooks de grandes empresas (Airbnb, Notion, Apple)','Fazer um curso de marketing estratégico'], startUrls:['https://www.coursera.org/learn/brand-management','https://www.amazon.com.br/Building-StoryBrand-Clarify-Message-Customers/dp/0718033329','https://blog.hubspot.com/marketing/branding','https://www.brandingstrategyinsider.com/'] },
    growth: { emoji:'🚀', name:'Growth Marketer / Performance', desc:'Você lança e otimiza canais pagos e orgânicos, realiza testes A/B e escala o que funciona', detail:'Você está na interseção do marketing e da análise de dados. Projeta experimentos, trabalha com dados e busca constantemente alavancas de crescimento baseadas em números.', start:['Aprender Google Analytics 4, Meta Ads, Google Ads','Entender testes A/B e significância estatística','Fazer um curso de growth hacking ou performance marketing','Ler "Hacking Growth" de Sean Ellis'], startUrls:['https://analytic.tools/','https://www.coursera.org/learn/digital-marketing','https://growthmarketers.com/','https://www.amazon.com.br/Hacking-Growth-Fastest-Growing-Companies/dp/045149721X'] },
    product_mkt: { emoji:'📦', name:'Product Marketing Manager', desc:'Você lança produtos ao mercado, cria seu posicionamento e ajuda a equipe de vendas a comunicar o valor', detail:'Você é a ponte entre produto, marketing e vendas. Entende o cliente mais profundamente que ninguém na empresa e conduz estratégias go-to-market.', start:['Estudar a metodologia Jobs-to-be-Done e entrevistas com clientes','Entender a estratégia go-to-market e o sales enablement','Fazer um curso de Product Marketing no Reforge ou Coursera','Ler "Obviously Awesome" de April Dunford'], startUrls:['https://www.reforge.com/blog/product-marketing','https://www.coursera.org/learn/marketing-strategy','https://www.amazon.com.br/Obviously-Awesome-Product-Positioning-Customers/dp/1999023005','https://productmarketingalliance.com/'] }
  },
  ui: { tag:'Marketing', title:'Que tipo de profissional de marketing você é?', subtitle:'6 perguntas para encontrar seu nicho no marketing', prog:'Pergunta %d de 6', hint:'Escolha uma opção', back:'← Voltar', next:'Próximo →', finish:'Ver meu resultado', winBadge:'Seu nicho no marketing', resTag:'Resultado', resSub:'Seu caminho no marketing', lblStart:'Por onde começar:', l2back:'← Voltar aos resultados' }
};

// ─── AR ──────────────────────────────────────────────────────────────────────
L2.marketer.ar = {
  questions: [
    { t:'ما الذي يُلهمك أكثر في التسويق؟', o:['إنشاء المحتوى وإدارة مجتمعات وسائل التواصل الاجتماعي','بناء صورة العلامة التجارية — الهوية والأسلوب والتموضع','إطلاق حملات إعلانية وتحسينها بالبيانات','طرح المنتجات في السوق وإيصال قيمتها للجمهور'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'أي مهمة تبدو أكثر طبيعية بالنسبة لك؟', o:['التخطيط لسلسلة محتوى وتصوير Reels وتنمية الوصول','تصميم دليل الهوية البصرية وإرشادات الأسلوب','تخفيض تكلفة اكتساب العميل بنسبة 20٪ عبر اختبارات A/B','كتابة استراتيجية الطرح في السوق لمنتج جديد'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'ما المهارة التي تعتبرها قوتك الخارقة؟', o:['الحس بالتوجهات والثقافة الرقمية والتعاطف مع الجمهور','التفكير الاستراتيجي والعمل بالمعاني البصرية','التحليلات والبيانات وتوسيع نطاق التجارب','الفهم العميق للمنتج وترجمته إلى رسائل القيمة'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'كيف يبدو يوم عملك المثالي؟', o:['التخطيط للمحتوى والتصوير والمونتاج والتعاون مع المؤثرين','اجتماعات مع المصممين وبحث المنافسين وورش الرسائل','لوحات البيانات والفرضيات واختبارات الحملات وتحليل نتائجها','مقابلات العملاء وإعداد العروض والتنسيق مع فريق المبيعات'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'أي مقياس هو الأهم بالنسبة لك؟', o:['الوصول ومعدل التفاعل ونمو المتابعين','الوعي بالعلامة التجارية ومؤشر NPS ونبرة الإشارات','ROAS وCPA ومعدل التحويل وLTV','معدل اعتماد المنتج واستخدام الميزات ومعدل الفوز في المبيعات'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'كيف يبدو نجاحك بعد 5 سنوات؟', o:['رئيس وسائل التواصل / مدير إبداعي — أقود فريق المحتوى والحضور الرقمي','CMO أو نائب الرئيس للعلامة التجارية — أشكّل إدراك السوق للشركة','نائب رئيس النمو — أدير الاستقطاب والاحتفاظ بنمو بأرقام مزدوجة','نائب رئيس تسويق المنتجات — أدير إطلاق المنتجات عبر المحفظة الكاملة'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] }
  ],
  roles: {
    digital: { emoji:'📱', name:'مسوّق رقمي / إدارة وسائل التواصل', desc:'تدير حضور العلامة التجارية على وسائل التواصل الاجتماعي وتنشئ المحتوى وتتفاعل مع الجماهير في الفضاء الرقمي', detail:'أنت حيث تتجمع انتباه الناس — وسائل التواصل والرسائل ويوتيوب. تطوّر الأفكار وتنتج المحتوى وترصد التوجهات أسرع من أي شخص آخر في الفريق.', start:['تعلّم خوارزميات Instagram وTikTok وYouTube وLinkedIn','أتقِن الأدوات الأساسية: Canva وCapCut وMeta Ads Manager','خذ دورة في إدارة وسائل التواصل وتسويق المحتوى','أنشئ حسابك الخاص كمحفظة أعمال'], startUrls:['https://blog.hubspot.com/marketing/social-media-marketing','https://buffer.com/resources/social-media-marketing/','https://www.coursera.org/learn/social-media-marketing-introduction','https://neilpatel.com/blog/'] },
    brand: { emoji:'🎨', name:'مدير العلامة التجارية', desc:'تبني وتحمي صورة العلامة التجارية — من الهوية البصرية إلى أسلوب التواصل', detail:'أنت مسؤول عن كيفية إدراك الناس للشركة. تطوّر التموضع وتحافظ على اتساق العلامة التجارية عبر جميع القنوات وتؤثر في المشاعر التي يستثيرها المنتج.', start:['دراسة أسس استراتيجية العلامة التجارية والتموضع','قراءة كتاب "Building a StoryBrand" لدونالد ميلر','تحليل أدلة الهوية البصرية لكبرى الشركات (Airbnb وNotion وApple)','الالتحاق بدورة تسويق استراتيجي'], startUrls:['https://www.coursera.org/learn/brand-management','https://www.amazon.com/Building-StoryBrand-Clarify-Message-Customers/dp/0718033329','https://blog.hubspot.com/marketing/branding','https://www.brandingstrategyinsider.com/'] },
    growth: { emoji:'🚀', name:'مسوّق النمو / الأداء', desc:'تطلق القنوات المدفوعة والعضوية وتحسّنها، وتُجري اختبارات A/B وتوسّع نطاق ما ينجح', detail:'أنت عند تقاطع التسويق والتحليلات. تصمّم التجارب وتعمل بالبيانات وتبحث باستمرار عن روافع النمو القائمة على الأرقام.', start:['تعلّم Google Analytics 4 وMeta Ads وGoogle Ads','فهم اختبارات A/B والدلالة الإحصائية','الالتحاق بدورة Growth Hacking أو Performance Marketing','قراءة كتاب "Hacking Growth" لشون إليس'], startUrls:['https://analytic.tools/','https://www.coursera.org/learn/digital-marketing','https://growthmarketers.com/','https://www.amazon.com/Hacking-Growth-Fastest-Growing-Companies/dp/045149721X'] },
    product_mkt: { emoji:'📦', name:'مدير تسويق المنتجات', desc:'تطرح المنتجات في السوق وتصوغ تموضعها وتساعد فريق المبيعات على إيصال القيمة للعملاء', detail:'أنت الجسر بين المنتج والتسويق والمبيعات. تفهم العميل بعمق أكثر من أي شخص في الشركة وتقود استراتيجيات الطرح في السوق.', start:['دراسة منهجية Jobs-to-be-Done ومقابلات العملاء','فهم استراتيجية Go-to-Market وتمكين المبيعات','الالتحاق بدورة Product Marketing على Reforge أو Coursera','قراءة كتاب "Obviously Awesome" لأبريل دانفورد'], startUrls:['https://www.reforge.com/blog/product-marketing','https://www.coursera.org/learn/marketing-strategy','https://www.amazon.com/Obviously-Awesome-Product-Positioning-Customers/dp/1999023005','https://productmarketingalliance.com/'] }
  },
  ui: { tag:'مسوّق', title:'ما نوع المسوّق الذي أنت عليه؟', subtitle:'٦ أسئلة للعثور على مكانتك في التسويق', prog:'السؤال %d من ٦', hint:'اختر خياراً واحداً', back:'→ السابق', next:'التالي ←', finish:'اعرض نتيجتي', winBadge:'مكانتك في التسويق', resTag:'النتيجة', resSub:'مسارك في التسويق', lblStart:'من أين تبدأ:', l2back:'→ العودة إلى النتائج' }
};

// ─── HE ──────────────────────────────────────────────────────────────────────
L2.marketer.he = {
  questions: [
    { t:'מה הכי מרגש אותך בשיווק?', o:['ליצור תוכן ולנהל קהילות ברשתות חברתיות','לבנות את תדמית המותג — זהות, טון ומיצוב','להשיק קמפיינים פרסומיים ולייעל אותם בעזרת נתונים','להשיק מוצרים לשוק ולתקשר את הערך שלהם'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'איזו משימה מרגישה הכי טבעית עבורך?', o:['לתכנן סדרת תוכן, לצלם ריילס ולהגדיל טווח הגעה','לפתח ספר מותג ודגשי סגנון לצוות','להוריד CAC ב-20% דרך בדיקות A/B','לכתוב אסטרטגיית go-to-market למוצר חדש'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'איזו מיומנות היא כוח-העל שלך?', o:['חוש טרנדים, תרבות דיגיטלית ואמפתיה לקהל','חשיבה אסטרטגית ועבודה עם משמעויות ויזואליות','אנליטיקה, עבודה עם נתונים ושכפול ניסויים','הבנה עמוקה של המוצר ותרגומה למסרי ערך'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'כיצד נראה יום העבודה האידיאלי שלך?', o:['תכנון תוכן, צילום, עריכה, שיתופי פעולה עם אינפלואנסרים','בריפינגים עם מעצבים, מחקר מתחרים, סדנאות מסרים','דשבורדים, השערות, הרצת בדיקות, ניתוח קמפיינים','ראיונות עם לקוחות, הכנת מצגות, שיתוף פעולה עם מכירות'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'איזה מדד חשוב לך הכי הרבה?', o:['טווח הגעה, שיעור מעורבות (ER), גידול עוקבים','מודעות למותג, NPS, סנטימנט האזכורים','ROAS, CPA, שיעור המרה, LTV','שיעור אימוץ המוצר, שימוש בפיצ\'רים, win rate במכירות'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] },
    { t:'כיצד נראה ההצלחה שלך בעוד 5 שנים?', o:['Head of Social / Creative Director — מוביל את צוות התוכן והנוכחות הדיגיטלית','CMO או VP of Brand — אחראי על איך השוק תופס את החברה','VP of Growth — מוביל רכישה ושימור עם צמיחה דו-ספרתית','VP of Product Marketing — מנהל השקות מוצרים על פני כל התיק'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}] }
  ],
  roles: {
    digital: { emoji:'📱', name:'Digital Marketer / רשתות חברתיות', desc:'אתה מנהל את נוכחות המותג ברשתות חברתיות, יוצר תוכן ומעסיק קהלים במרחב הדיגיטלי', detail:'אתה שם שבו תשומת הלב של האנשים — רשתות חברתיות, מסנג\'ר, יוטיוב. מייצר רעיונות, מפיק תוכן ומזהה טרנדים לפני כולם בצוות.', start:['ללמוד אלגוריתמים של Instagram, TikTok, YouTube ו-LinkedIn','לשלוט בכלים בסיסיים: Canva, CapCut, Meta Ads Manager','לקחת קורס SMM ושיווק תוכן','לבנות חשבון אישי כתיק עבודות'], startUrls:['https://blog.hubspot.com/marketing/social-media-marketing','https://buffer.com/resources/social-media-marketing/','https://www.coursera.org/learn/social-media-marketing-introduction','https://neilpatel.com/blog/'] },
    brand: { emoji:'🎨', name:'מנהל מותג', desc:'אתה בונה ומגן על תדמית המותג — מזהות ויזואלית ועד טון תקשורת', detail:'אתה אחראי על האופן שבו אנשים תופסים את החברה. מפתח מיצוב, שומר על עקביות המותג בכל הערוצים ומשפיע על הרגשות שמוצר מעורר.', start:['ללמוד יסודות אסטרטגיית מותג ומיצוב','לקרוא "Building a StoryBrand" מאת דונלד מילר','לנתח ספרי מותג של חברות מובילות (Airbnb, Notion, Apple)','לקחת קורס שיווק אסטרטגי'], startUrls:['https://www.coursera.org/learn/brand-management','https://www.amazon.com/Building-StoryBrand-Clarify-Message-Customers/dp/0718033329','https://blog.hubspot.com/marketing/branding','https://www.brandingstrategyinsider.com/'] },
    growth: { emoji:'🚀', name:'Growth Marketer / Performance', desc:'אתה משיק ומייעל ערוצים ממומנים ואורגניים, מריץ בדיקות A/B ומשכפל מה שעובד', detail:'אתה בצומת שבין שיווק לאנליטיקה. מעצב ניסויים, עובד עם נתונים ומחפש כל הזמן מנופי צמיחה מבוססי מספרים.', start:['ללמוד Google Analytics 4, Meta Ads, Google Ads','להבין בדיקות A/B ומובהקות סטטיסטית','לקחת קורס Growth Hacking או Performance Marketing','לקרוא "Hacking Growth" מאת שון אליס'], startUrls:['https://analytic.tools/','https://www.coursera.org/learn/digital-marketing','https://growthmarketers.com/','https://www.amazon.com/Hacking-Growth-Fastest-Growing-Companies/dp/045149721X'] },
    product_mkt: { emoji:'📦', name:'Product Marketing Manager', desc:'אתה משיק מוצרים לשוק, מעצב את המיצוב שלהם ועוזר לצוות המכירות לתקשר ערך ללקוחות', detail:'אתה הגשר בין מוצר, שיווק ומכירות. מבין את הלקוח עמוק יותר מכולם בחברה ומוביל אסטרטגיות go-to-market.', start:['ללמוד מתודולוגיית Jobs-to-be-Done וראיונות עם לקוחות','להבין אסטרטגיית Go-to-Market ו-Sales Enablement','לקחת קורס Product Marketing ב-Reforge או Coursera','לקרוא "Obviously Awesome" מאת אפריל דנפורד'], startUrls:['https://www.reforge.com/blog/product-marketing','https://www.coursera.org/learn/marketing-strategy','https://www.amazon.com/Obviously-Awesome-Product-Positioning-Customers/dp/1999023005','https://productmarketingalliance.com/'] }
  },
  ui: { tag:'איש שיווק', title:'איזה סוג איש שיווק אתה?', subtitle:'6 שאלות למציאת הנישה שלך בשיווק', prog:'שאלה %d מתוך 6', hint:'בחר אפשרות אחת', back:'→ חזרה', next:'הבא ←', finish:'לראות את התוצאה', winBadge:'הנישה שלך בשיווק', resTag:'תוצאה', resSub:'הדרך שלך בשיווק', lblStart:'מאיפה להתחיל:', l2back:'→ חזרה לתוצאות' }
};

L2.marketer.zh = {
  questions: [
    {t:'市场营销中什么最吸引你？', o:['数字营销——SEO、SEM、付费广告','品牌营销——构建有灵魂的品牌','增长营销——用数据和实验驱动增长','产品市场化——让产品成功进入市场'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}]},
    {t:'你最想精通哪个方向？', o:['Google Ads + SEO + 数据分析','品牌策略、创意叙事和视觉识别','A/B测试、转化优化和增长模型','竞争分析、定位策略和GTM规划'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}]},
    {t:'什么工作成果最让你有成就感？', o:['广告ROI提升3倍，CAC下降一半','品牌知名度在一年内从零到行业第一','增长实验让月活翻倍','新产品上市第一个季度就占领了目标市场'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}]},
    {t:'你更喜欢哪种工作？', o:['优化广告账户、分析流量数据','构思品牌故事，指导创意团队','设计实验，分析数据，快速迭代','研究市场定位，制定产品上市策略'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}]},
    {t:'你会选择哪个项目？', o:['把一个新品牌的CPA降低50%','为一个老品牌做品牌焕新','设计一个产品的用户增长飞轮','负责一款新产品的全球上市计划'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}]},
    {t:'10年后你在哪里？', o:['数字营销代理公司的CEO','知名品牌的CMO','增长型科技公司的增长副总裁','大型科技公司的产品市场化副总裁'], s:[{digital:3},{brand:3},{growth:3},{product_mkt:3}]}
  ],
  roles: {
    digital: {emoji:'📱', name:'数字营销专家', desc:'通过SEO、付费广告和社交媒体吸引精准流量', detail:'你掌握互联网流量的密码。你管理Google Ads、优化SEO排名、运营社交媒体，用数据证明每一分营销预算的价值。', start:['获取Google Ads认证——免费的官方课程','学习SEO基础——Ahrefs或SEMrush的教程','掌握Google Analytics 4——数据分析是核心','实践：用1000元预算跑真实的广告实验']},
    brand: {emoji:'✨', name:'品牌经理', desc:'构建让消费者一眼认出、内心认同的品牌', detail:'你是品牌的守护者和建造者。你定义品牌的价值观、声音和视觉形象，确保每一次用户接触都一致、有力量。', start:['学习品牌策略基础——定位理论，里斯和特劳特','研究优秀品牌案例——Nike、Apple的品牌构建','了解设计基础——让你能有效指导创意团队','阅读《创意不是广告》——大卫·奥格威']},
    growth: {emoji:'📈', name:'增长营销专家', desc:'用数据和实验找到产品的增长杠杆，快速规模化', detail:'你是营销中最接近数据科学家的人。你建立增长模型，设计实验，分析结果，快速放大有效的策略。', start:['学习A/B测试统计原理——显著性、置信区间','掌握增长框架——AARRR漏斗分析','了解主要增长渠道——SEO、内容、病毒传播','阅读Reforge的增长案例库']},
    product_mkt: {emoji:'🎯', name:'产品市场化经理（PMM）', desc:'让产品成功进入市场，找到定位，赢得客户', detail:'你是产品与市场之间的桥梁。你研究竞争格局，定义目标客户，制定产品上市计划，写出让客户心动的产品故事。', start:['了解GTM（Go-to-Market）策略框架','学习竞争分析方法——定性和定量结合','研究B2B和B2C产品定位的区别','阅读April Dunford的《明显地更好》']}
  },
  ui: {l2back:'← 返回市场营销', title:'市场营销：选择你的专业方向'}
};
