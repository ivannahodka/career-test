'use strict';

const CREATIVE_L2 = {};

// ── SMM ──────────────────────────────────────────────────────────────────────
CREATIVE_L2.smm = {};

CREATIVE_L2.smm.ru = {
  questions: [
    {t:'Что тебя привлекает в работе с соцсетями больше всего?', o:[
      'Создавать вирусный контент: посты, рилсы, сторис',
      'Строить живое сообщество вокруг бренда',
      'Настраивать рекламу и управлять бюджетами',
      'Разрабатывать стратегию присутствия бренда в соцсетях'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'Какой инструмент ты хочешь освоить?', o:[
      'CapCut + Canva — для создания видео и визуального контента',
      'Telegram + Discord — для управления сообществами',
      'Facebook Ads Manager + TikTok Ads — таргетированная реклама',
      'Google Analytics + DataStudio — аналитика и отчёты'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'Какой проект тебя зажигает?', o:[
      'Создать аккаунт с нуля и вывести его в топ ниши',
      'Построить сообщество где люди помогают друг другу',
      'Запустить рекламу с окупаемостью ×10',
      'Разработать SMM-стратегию для бренда на год вперёд'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'Что тебя вдохновляет?', o:[
      'Когда твой пост разлетается в репосты и собирает тысячи лайков',
      'Когда участники сами начинают помогать новичкам',
      'Когда цена заявки падает в разы из-за точного таргетинга',
      'Когда бренд начинает узнавать целевая аудитория'
    ], s:[{'content-creator':2},{'community':2},{'targeting':2},{'strategist':2}]},
    {t:'Что ты готов делать часами?', o:[
      'Снимать и монтировать рилсы, тестировать форматы',
      'Отвечать на комментарии и разжигать дискуссии в сообществе',
      'Анализировать аудитории и сплит-тестировать объявления',
      'Изучать конкурентов и строить контент-план на месяц вперёд'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'Через 3 года ты хочешь...', o:[
      'Быть известным контент-мейкером с большой аудиторией',
      'Управлять сообществом крупного бренда или платформы',
      'Руководить рекламными кампаниями с большими бюджетами',
      'Возглавлять SMM-отдел или работать SMM-директором'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]}
  ],
  roles: {
    'content-creator': {
      emoji:'🎬', name:'Контент-криейтор',
      desc:'Создаёт вирусный контент для соцсетей: рилсы, посты, сторис.',
      detail:'Контент-криейтор — лицо бренда в соцсетях. Ты снимаешь и монтируешь видео, пишешь подписи, придумываешь форматы. Хороший контент-мейкер понимает алгоритмы, знает тренды и умеет создавать контент который хочется репостить.',
      start:['CapCut — capcut.com','Canva — canva.com','Creator Academy — creators.instagram.com'],
      startUrls:['https://capcut.com','https://canva.com','https://creators.instagram.com']
    },
    'community': {
      emoji:'🤝', name:'Комьюнити-менеджер',
      desc:'Строит и поддерживает живое сообщество вокруг бренда.',
      detail:'Комьюнити-менеджер — это душа сообщества. Ты отвечаешь на комментарии, организуешь активности, модерируешь, создаёшь ощущение принадлежности. Хорошие комьюнити удерживают пользователей лучше любой рекламы.',
      start:['CMX Hub — cmxhub.com','Telegram для бизнеса','Discord — discord.com'],
      startUrls:['https://cmxhub.com','https://telegram.org','https://discord.com']
    },
    'targeting': {
      emoji:'🎯', name:'Таргетолог',
      desc:'Настраивает платную рекламу в соцсетях и управляет бюджетами.',
      detail:'Таргетолог — это маркетолог с цифрами. Ты сегментируешь аудитории, создаёшь объявления, тестируешь гипотезы и оптимизируешь стоимость заявки. Хороший таргетолог может принести бизнесу ×5–10 от вложенного бюджета.',
      start:['Facebook Blueprint — facebook.com/business/learn','TikTok Ads Guide — ads.tiktok.com','Google Skillshop — skillshop.google.com'],
      startUrls:['https://facebook.com/business/learn','https://ads.tiktok.com/help/','https://skillshop.google.com']
    },
    'strategist': {
      emoji:'📊', name:'SMM-стратег',
      desc:'Разрабатывает стратегию присутствия бренда в соцсетях.',
      detail:'SMM-стратег думает на уровне бизнеса. Ты анализируешь конкурентов, строишь контент-стратегию, определяешь KPI и отчитываешься перед руководством. Это самая высокооплачиваемая SMM-роль.',
      start:['Hootsuite Blog — blog.hootsuite.com','Sprout Social Insights — sproutsocial.com/insights','Google Analytics — analytics.google.com'],
      startUrls:['https://blog.hootsuite.com','https://sproutsocial.com/insights','https://analytics.google.com']
    }
  }
};

CREATIVE_L2.smm.en = {
  questions: [
    {t:'What attracts you most in social media work?', o:[
      'Creating viral content: posts, reels, stories',
      'Building a live community around a brand',
      'Setting up ads and managing budgets',
      'Developing a brand\'s social media strategy'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'Which tool do you want to master?', o:[
      'CapCut + Canva — for video and visual content',
      'Telegram + Discord — for community management',
      'Facebook Ads Manager + TikTok Ads — paid advertising',
      'Google Analytics + DataStudio — analytics and reports'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'Which project excites you most?', o:[
      'Build an account from zero and get it to the top of a niche',
      'Build a community where people help each other',
      'Launch ads with ×10 return on investment',
      'Develop a year-long SMM strategy for a brand'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'What inspires you?', o:[
      'When your post goes viral and gets thousands of likes',
      'When community members start helping newcomers on their own',
      'When cost per lead drops significantly due to precise targeting',
      'When the target audience starts recognizing the brand'
    ], s:[{'content-creator':2},{'community':2},{'targeting':2},{'strategist':2}]},
    {t:'What could you do for hours?', o:[
      'Filming and editing reels, testing content formats',
      'Replying to comments and sparking discussions in a community',
      'Analyzing audiences and split-testing ad creatives',
      'Studying competitors and building a monthly content plan'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'In 3 years you want to...', o:[
      'Be a well-known content creator with a large audience',
      'Manage the community of a major brand or platform',
      'Lead advertising campaigns with large budgets',
      'Head an SMM department or work as an SMM Director'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]}
  ],
  roles: {
    'content-creator': {
      emoji:'🎬', name:'Content Creator',
      desc:'Creates viral content for social media: reels, posts, stories.',
      detail:'A content creator is the face of a brand on social media. You shoot and edit videos, write captions, invent formats. A good content maker understands algorithms, knows trends, and creates content people want to share.',
      start:['CapCut — capcut.com','Canva — canva.com','Creator Academy — creators.instagram.com'],
      startUrls:['https://capcut.com','https://canva.com','https://creators.instagram.com']
    },
    'community': {
      emoji:'🤝', name:'Community Manager',
      desc:'Builds and maintains a live community around a brand.',
      detail:'A community manager is the soul of the community. You reply to comments, organize activities, moderate discussions, and create a sense of belonging. Good communities retain users better than any ad.',
      start:['CMX Hub — cmxhub.com','Telegram for business','Discord — discord.com'],
      startUrls:['https://cmxhub.com','https://telegram.org','https://discord.com']
    },
    'targeting': {
      emoji:'🎯', name:'Paid Social / Targeting Specialist',
      desc:'Sets up paid advertising on social media and manages budgets.',
      detail:'A targeting specialist is a marketer with numbers. You segment audiences, create ads, test hypotheses, and optimize cost per lead. A good specialist can bring a business ×5–10 return on ad spend.',
      start:['Facebook Blueprint — facebook.com/business/learn','TikTok Ads Guide','Google Skillshop — skillshop.google.com'],
      startUrls:['https://facebook.com/business/learn','https://ads.tiktok.com/help/','https://skillshop.google.com']
    },
    'strategist': {
      emoji:'📊', name:'SMM Strategist',
      desc:'Develops a brand\'s social media presence strategy.',
      detail:'An SMM strategist thinks at the business level. You analyze competitors, build content strategies, set KPIs, and report to leadership. This is the highest-paid SMM role.',
      start:['Hootsuite Blog — blog.hootsuite.com','Sprout Social Insights — sproutsocial.com/insights','Google Analytics'],
      startUrls:['https://blog.hootsuite.com','https://sproutsocial.com/insights','https://analytics.google.com']
    }
  }
};

CREATIVE_L2.smm.de = {
  questions: [
    {t:'Was interessiert dich an der Arbeit mit sozialen Medien am meisten?', o:[
      'Viralen Content erstellen: Posts, Reels, Stories',
      'Eine lebendige Community rund um eine Marke aufbauen',
      'Werbung schalten und Budgets verwalten',
      'Die Social-Media-Strategie einer Marke entwickeln'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'Welches Tool möchtest du meistern?', o:[
      'CapCut + Canva — für Video- und Bildcontent',
      'Telegram + Discord — für Community-Management',
      'Facebook Ads Manager + TikTok Ads — Paid Advertising',
      'Google Analytics + DataStudio — Analyse und Reports'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'Welches Projekt begeistert dich?', o:[
      'Einen Account von null aufbauen und zur Top-Nische bringen',
      'Eine Community aufbauen, in der sich Menschen gegenseitig helfen',
      'Eine Kampagne mit ×10 ROI starten',
      'Eine Jahres-SMM-Strategie für eine Marke entwickeln'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'Was inspiriert dich?', o:[
      'Wenn dein Post viral geht und tausende Likes bekommt',
      'Wenn Community-Mitglieder Neulingen von selbst helfen',
      'Wenn die Kosten pro Lead durch präzises Targeting sinken',
      'Wenn die Zielgruppe die Marke zu erkennen beginnt'
    ], s:[{'content-creator':2},{'community':2},{'targeting':2},{'strategist':2}]},
    {t:'Was könntest du stundenlang tun?', o:[
      'Reels drehen und schneiden, Content-Formate testen',
      'Kommentare beantworten und Diskussionen in der Community entfachen',
      'Zielgruppen analysieren und Anzeigen split-testen',
      'Wettbewerber analysieren und monatliche Content-Pläne erstellen'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'In 3 Jahren möchtest du...', o:[
      'Ein bekannter Content Creator mit großem Publikum sein',
      'Die Community einer großen Marke oder Plattform leiten',
      'Werbekampagnen mit großen Budgets führen',
      'Eine SMM-Abteilung leiten oder als SMM-Direktor arbeiten'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]}
  ],
  roles: {
    'content-creator': {emoji:'🎬',name:'Content Creator',desc:'Erstellt viralen Content für soziale Medien.',detail:'Ein Content Creator ist das Gesicht einer Marke in sozialen Medien. Du drehst und schneidest Videos, schreibst Bildunterschriften, erfindest Formate.',start:['CapCut — capcut.com','Canva — canva.com','Meta Creator Academy'],startUrls:['https://capcut.com','https://canva.com','https://creators.instagram.com']},
    'community': {emoji:'🤝',name:'Community Manager',desc:'Baut eine lebendige Community um eine Marke auf.',detail:'Ein Community Manager ist die Seele der Community. Du beantwortest Kommentare, organisierst Aktionen und schaffst ein Zugehörigkeitsgefühl.',start:['CMX Hub — cmxhub.com','Discord — discord.com','Telegram'],startUrls:['https://cmxhub.com','https://discord.com','https://telegram.org']},
    'targeting': {emoji:'🎯',name:'Paid Social Specialist',desc:'Schaltet bezahlte Werbung in sozialen Medien.',detail:'Ein Targeting-Spezialist ist ein Marketer mit Zahlen. Du segmentierst Zielgruppen, erstellst Anzeigen und optimierst den Cost per Lead.',start:['Facebook Blueprint','TikTok Ads Guide','Google Skillshop'],startUrls:['https://facebook.com/business/learn','https://ads.tiktok.com/help/','https://skillshop.google.com']},
    'strategist': {emoji:'📊',name:'SMM-Stratege/in',desc:'Entwickelt die Social-Media-Strategie einer Marke.',detail:'Ein SMM-Stratege denkt auf Unternehmensebene. Du analysierst Wettbewerber, entwickelst Content-Strategien und setzt KPIs.',start:['Hootsuite Blog','Sprout Social Insights','Google Analytics'],startUrls:['https://blog.hootsuite.com','https://sproutsocial.com/insights','https://analytics.google.com']}
  }
};

CREATIVE_L2.smm.fr = {
  questions: [
    {t:'Qu\'est-ce qui t\'attire le plus dans le travail avec les réseaux sociaux ?', o:[
      'Créer du contenu viral : posts, reels, stories',
      'Construire une communauté vivante autour d\'une marque',
      'Configurer des publicités et gérer des budgets',
      'Développer la stratégie de présence d\'une marque sur les réseaux'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'Quel outil veux-tu maîtriser ?', o:[
      'CapCut + Canva — pour la création de contenu visuel',
      'Telegram + Discord — pour la gestion de communautés',
      'Facebook Ads Manager + TikTok Ads — publicité payante',
      'Google Analytics + DataStudio — analytics et rapports'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'Quel projet t\'enthousiasme le plus ?', o:[
      'Créer un compte de zéro et le mener au top d\'une niche',
      'Construire une communauté où les gens s\'entraident',
      'Lancer une campagne avec un retour ×10',
      'Développer une stratégie SMM annuelle pour une marque'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'Qu\'est-ce qui t\'inspire ?', o:[
      'Quand ton post devient viral et reçoit des milliers de likes',
      'Quand les membres de la communauté commencent à s\'aider spontanément',
      'Quand le coût par lead baisse grâce au ciblage précis',
      'Quand le public cible commence à reconnaître la marque'
    ], s:[{'content-creator':2},{'community':2},{'targeting':2},{'strategist':2}]},
    {t:'Que pourrais-tu faire pendant des heures ?', o:[
      'Filmer et monter des reels, tester des formats',
      'Répondre aux commentaires et animer des discussions',
      'Analyser des audiences et faire des tests A/B sur les annonces',
      'Étudier la concurrence et bâtir un plan de contenu mensuel'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'Dans 3 ans tu veux...', o:[
      'Être un créateur de contenu connu avec une grande audience',
      'Gérer la communauté d\'une grande marque ou plateforme',
      'Diriger des campagnes publicitaires avec de gros budgets',
      'Diriger un département SMM ou travailler comme Directeur SMM'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]}
  ],
  roles: {
    'content-creator': {emoji:'🎬',name:'Créateur/trice de contenu',desc:'Crée du contenu viral pour les réseaux sociaux.',detail:'Un créateur de contenu est le visage d\'une marque sur les réseaux. Tu filmes, montes des vidéos, écris des légendes et inventes des formats.',start:['CapCut — capcut.com','Canva — canva.com','Meta Creator Academy'],startUrls:['https://capcut.com','https://canva.com','https://creators.instagram.com']},
    'community': {emoji:'🤝',name:'Community Manager',desc:'Construit et anime une communauté vivante.',detail:'Un community manager est l\'âme de la communauté. Tu réponds aux commentaires, organises des activités et crées un sentiment d\'appartenance.',start:['CMX Hub — cmxhub.com','Discord — discord.com','Telegram'],startUrls:['https://cmxhub.com','https://discord.com','https://telegram.org']},
    'targeting': {emoji:'🎯',name:'Spécialiste Paid Social',desc:'Configure la publicité payante sur les réseaux sociaux.',detail:'Un spécialiste targeting est un marketeur avec des chiffres. Tu segmentes les audiences, crées des annonces et optimises le coût par lead.',start:['Facebook Blueprint','TikTok Ads Guide','Google Skillshop'],startUrls:['https://facebook.com/business/learn','https://ads.tiktok.com/help/','https://skillshop.google.com']},
    'strategist': {emoji:'📊',name:'Stratège SMM',desc:'Développe la stratégie de présence d\'une marque sur les réseaux.',detail:'Un stratège SMM pense au niveau business. Tu analyses les concurrents, construis des stratégies de contenu et définis des KPIs.',start:['Hootsuite Blog','Sprout Social Insights','Google Analytics'],startUrls:['https://blog.hootsuite.com','https://sproutsocial.com/insights','https://analytics.google.com']}
  }
};

CREATIVE_L2.smm.es = {
  questions: [
    {t:'¿Qué te atrae más del trabajo con redes sociales?', o:[
      'Crear contenido viral: posts, reels, stories',
      'Construir una comunidad activa alrededor de una marca',
      'Configurar anuncios y gestionar presupuestos',
      'Desarrollar la estrategia de presencia de una marca en redes'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'¿Qué herramienta quieres dominar?', o:[
      'CapCut + Canva — para contenido visual y de video',
      'Telegram + Discord — para gestión de comunidades',
      'Facebook Ads Manager + TikTok Ads — publicidad de pago',
      'Google Analytics + DataStudio — analítica e informes'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'¿Qué proyecto te emociona más?', o:[
      'Crear una cuenta desde cero y llevarla al top de un nicho',
      'Construir una comunidad donde la gente se ayude mutuamente',
      'Lanzar una campaña con retorno ×10',
      'Desarrollar una estrategia SMM anual para una marca'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'¿Qué te inspira?', o:[
      'Cuando tu post se vuelve viral y recibe miles de likes',
      'Cuando los miembros de la comunidad empiezan a ayudarse solos',
      'Cuando el coste por lead cae gracias al targeting preciso',
      'Cuando el público objetivo empieza a reconocer la marca'
    ], s:[{'content-creator':2},{'community':2},{'targeting':2},{'strategist':2}]},
    {t:'¿Qué podrías hacer durante horas?', o:[
      'Grabar y editar reels, probar formatos de contenido',
      'Responder comentarios y avivar discusiones en la comunidad',
      'Analizar audiencias y hacer tests A/B de anuncios',
      'Estudiar a la competencia y construir un plan de contenido mensual'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'En 3 años quieres...', o:[
      'Ser un conocido creador de contenido con gran audiencia',
      'Gestionar la comunidad de una gran marca o plataforma',
      'Liderar campañas publicitarias con grandes presupuestos',
      'Dirigir un departamento SMM o trabajar como Director SMM'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]}
  ],
  roles: {
    'content-creator': {emoji:'🎬',name:'Creador/a de contenido',desc:'Crea contenido viral para redes sociales.',detail:'Un creador de contenido es la cara de una marca en redes sociales. Grabas y editas videos, escribes pies de foto, inventas formatos.',start:['CapCut — capcut.com','Canva — canva.com','Meta Creator Academy'],startUrls:['https://capcut.com','https://canva.com','https://creators.instagram.com']},
    'community': {emoji:'🤝',name:'Community Manager',desc:'Construye y mantiene una comunidad activa.',detail:'Un community manager es el alma de la comunidad. Respondes comentarios, organizas actividades y creas sentido de pertenencia.',start:['CMX Hub — cmxhub.com','Discord — discord.com','Telegram'],startUrls:['https://cmxhub.com','https://discord.com','https://telegram.org']},
    'targeting': {emoji:'🎯',name:'Especialista en Paid Social',desc:'Configura publicidad de pago en redes sociales.',detail:'Un especialista en targeting es un marketer con números. Segmentas audiencias, creas anuncios y optimizas el coste por lead.',start:['Facebook Blueprint','TikTok Ads Guide','Google Skillshop'],startUrls:['https://facebook.com/business/learn','https://ads.tiktok.com/help/','https://skillshop.google.com']},
    'strategist': {emoji:'📊',name:'Estratega SMM',desc:'Desarrolla la estrategia de presencia en redes de una marca.',detail:'Un estratega SMM piensa a nivel de negocio. Analizas competidores, construyes estrategias de contenido y defines KPIs.',start:['Hootsuite Blog','Sprout Social Insights','Google Analytics'],startUrls:['https://blog.hootsuite.com','https://sproutsocial.com/insights','https://analytics.google.com']}
  }
};

CREATIVE_L2.smm.pt = {
  questions: [
    {t:'O que mais te atrai no trabalho com redes sociais?', o:[
      'Criar conteúdo viral: posts, reels, stories',
      'Construir uma comunidade ativa em torno de uma marca',
      'Configurar anúncios e gerir orçamentos',
      'Desenvolver a estratégia de presença de uma marca nas redes'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'Qual ferramenta queres dominar?', o:[
      'CapCut + Canva — para conteúdo visual e de vídeo',
      'Telegram + Discord — para gestão de comunidades',
      'Facebook Ads Manager + TikTok Ads — publicidade paga',
      'Google Analytics + DataStudio — análise e relatórios'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'Que projeto te entusiasma mais?', o:[
      'Criar uma conta do zero e levá-la ao topo de um nicho',
      'Construir uma comunidade onde as pessoas se ajudam mutuamente',
      'Lançar uma campanha com retorno ×10',
      'Desenvolver uma estratégia SMM anual para uma marca'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'O que te inspira?', o:[
      'Quando o teu post se torna viral e recebe milhares de likes',
      'Quando os membros da comunidade começam a ajudar-se espontaneamente',
      'Quando o custo por lead cai graças ao targeting preciso',
      'Quando o público-alvo começa a reconhecer a marca'
    ], s:[{'content-creator':2},{'community':2},{'targeting':2},{'strategist':2}]},
    {t:'O que podes fazer durante horas?', o:[
      'Gravar e editar reels, testar formatos de conteúdo',
      'Responder a comentários e animar discussões na comunidade',
      'Analisar audiências e fazer testes A/B de anúncios',
      'Estudar concorrentes e construir um plano de conteúdo mensal'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'Em 3 anos queres...', o:[
      'Ser um criador de conteúdo conhecido com grande audiência',
      'Gerir a comunidade de uma grande marca ou plataforma',
      'Liderar campanhas publicitárias com grandes orçamentos',
      'Dirigir um departamento SMM ou trabalhar como Diretor SMM'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]}
  ],
  roles: {
    'content-creator': {emoji:'🎬',name:'Criador/a de conteúdo',desc:'Cria conteúdo viral para redes sociais.',detail:'Um criador de conteúdo é o rosto de uma marca nas redes sociais. Gravais e editas vídeos, escreves legendas, inventas formatos.',start:['CapCut — capcut.com','Canva — canva.com','Meta Creator Academy'],startUrls:['https://capcut.com','https://canva.com','https://creators.instagram.com']},
    'community': {emoji:'🤝',name:'Community Manager',desc:'Constrói e mantém uma comunidade ativa.',detail:'Um community manager é a alma da comunidade. Respondes a comentários, organizas atividades e crias sentido de pertença.',start:['CMX Hub — cmxhub.com','Discord — discord.com','Telegram'],startUrls:['https://cmxhub.com','https://discord.com','https://telegram.org']},
    'targeting': {emoji:'🎯',name:'Especialista em Paid Social',desc:'Configura publicidade paga em redes sociais.',detail:'Um especialista em targeting é um marketer com números. Segmentas audiências, crias anúncios e otimizas o custo por lead.',start:['Facebook Blueprint','TikTok Ads Guide','Google Skillshop'],startUrls:['https://facebook.com/business/learn','https://ads.tiktok.com/help/','https://skillshop.google.com']},
    'strategist': {emoji:'📊',name:'Estrategista SMM',desc:'Desenvolve a estratégia de presença nas redes de uma marca.',detail:'Um estrategista SMM pensa a nível de negócio. Analisas concorrentes, constróis estratégias de conteúdo e defines KPIs.',start:['Hootsuite Blog','Sprout Social Insights','Google Analytics'],startUrls:['https://blog.hootsuite.com','https://sproutsocial.com/insights','https://analytics.google.com']}
  }
};

CREATIVE_L2.smm.ar = {
  questions: [
    {t:'ما الذي يجذبك أكثر في العمل مع وسائل التواصل الاجتماعي؟', o:[
      'إنشاء محتوى فيروسي: منشورات وريلز وستوريز',
      'بناء مجتمع حي حول علامة تجارية',
      'إعداد الإعلانات وإدارة الميزانيات',
      'تطوير استراتيجية وجود العلامة التجارية على وسائل التواصل'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'أي أداة تريد إتقانها؟', o:[
      'CapCut + Canva — لإنشاء المحتوى المرئي والفيديو',
      'Telegram + Discord — لإدارة المجتمعات',
      'Facebook Ads Manager + TikTok Ads — الإعلانات المدفوعة',
      'Google Analytics + DataStudio — التحليلات والتقارير'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'أي مشروع يثير حماسك أكثر؟', o:[
      'إنشاء حساب من الصفر وإيصاله لقمة مجاله',
      'بناء مجتمع يتعاون فيه الأعضاء بعضهم البعض',
      'إطلاق حملة بعائد ×10',
      'تطوير استراتيجية SMM سنوية لعلامة تجارية'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'ما الذي يلهمك؟', o:[
      'عندما ينتشر منشورك بشكل فيروسي ويحصل على آلاف الإعجابات',
      'عندما يبدأ أعضاء المجتمع في مساعدة الوافدين الجدد تلقائياً',
      'عندما تنخفض تكلفة العميل المحتمل بسبب الاستهداف الدقيق',
      'عندما يبدأ الجمهور المستهدف في التعرف على العلامة التجارية'
    ], s:[{'content-creator':2},{'community':2},{'targeting':2},{'strategist':2}]},
    {t:'ما الذي يمكنك فعله لساعات؟', o:[
      'تصوير وتحرير الريلز واختبار تنسيقات المحتوى',
      'الرد على التعليقات وإشعال النقاشات في المجتمع',
      'تحليل الجماهير واختبار الإعلانات بشكل مقسم',
      'دراسة المنافسين وبناء خطة محتوى شهرية'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'بعد 3 سنوات تريد أن...', o:[
      'تكون صانع محتوى معروفاً بجمهور كبير',
      'تدير مجتمع علامة تجارية أو منصة كبرى',
      'تقود حملات إعلانية بميزانيات ضخمة',
      'ترأس قسم SMM أو تعمل كمدير SMM'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]}
  ],
  roles: {
    'content-creator': {emoji:'🎬',name:'صانع/ة محتوى',desc:'ينشئ محتوى فيروسياً لوسائل التواصل الاجتماعي.',detail:'صانع المحتوى هو وجه العلامة التجارية على وسائل التواصل. تصور وتحرر مقاطع الفيديو وتكتب التعليقات وتبتكر التنسيقات.',start:['CapCut — capcut.com','Canva — canva.com','Meta Creator Academy'],startUrls:['https://capcut.com','https://canva.com','https://creators.instagram.com']},
    'community': {emoji:'🤝',name:'مدير/ة المجتمع',desc:'يبني ويحافظ على مجتمع حي حول العلامة التجارية.',detail:'مدير المجتمع هو روح المجتمع. ترد على التعليقات وتنظم الأنشطة وتخلق الشعور بالانتماء.',start:['CMX Hub — cmxhub.com','Discord — discord.com','Telegram'],startUrls:['https://cmxhub.com','https://discord.com','https://telegram.org']},
    'targeting': {emoji:'🎯',name:'متخصص/ة الإعلانات المدفوعة',desc:'يُعد إعلانات مدفوعة على وسائل التواصل الاجتماعي.',detail:'متخصص الاستهداف هو مسوق بالأرقام. تقسم الجماهير وتنشئ الإعلانات وتحسن تكلفة العميل المحتمل.',start:['Facebook Blueprint','TikTok Ads Guide','Google Skillshop'],startUrls:['https://facebook.com/business/learn','https://ads.tiktok.com/help/','https://skillshop.google.com']},
    'strategist': {emoji:'📊',name:'استراتيجي/ة SMM',desc:'يطور استراتيجية وجود العلامة التجارية على وسائل التواصل.',detail:'استراتيجي SMM يفكر على مستوى الأعمال. تحلل المنافسين وتبني استراتيجيات المحتوى وتحدد مؤشرات الأداء.',start:['Hootsuite Blog','Sprout Social Insights','Google Analytics'],startUrls:['https://blog.hootsuite.com','https://sproutsocial.com/insights','https://analytics.google.com']}
  }
};

CREATIVE_L2.smm.he = {
  questions: [
    {t:'מה מושך אותך יותר מכל בעבודה עם רשתות חברתיות?', o:[
      'יצירת תוכן ויראלי: פוסטים, ריילס, סטוריז',
      'בניית קהילה חיה סביב מותג',
      'הגדרת פרסומות וניהול תקציבים',
      'פיתוח אסטרטגיית נוכחות של מותג ברשתות החברתיות'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'איזה כלי אתה רוצה לשלוט בו?', o:[
      'CapCut + Canva — ליצירת תוכן ויזואלי ווידאו',
      'Telegram + Discord — לניהול קהילות',
      'Facebook Ads Manager + TikTok Ads — פרסום ממומן',
      'Google Analytics + DataStudio — אנליטיקה ודוחות'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'איזה פרויקט מרגש אותך יותר מכל?', o:[
      'לבנות חשבון מאפס ולהוביל אותו לראש נישה',
      'לבנות קהילה שבה אנשים עוזרים זה לזה',
      'להשיק קמפיין עם תשואה ×10',
      'לפתח אסטרטגיית SMM שנתית למותג'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'מה מעורר בך השראה?', o:[
      'כשהפוסט שלך הופך לוויראלי ומקבל אלפי לייקים',
      'כשחברי הקהילה מתחילים לעזור לחדשים מעצמם',
      'כשעלות הליד יורדת בגלל טרגוט מדויק',
      'כשהקהל היעד מתחיל לזהות את המותג'
    ], s:[{'content-creator':2},{'community':2},{'targeting':2},{'strategist':2}]},
    {t:'מה אתה יכול לעשות שעות?', o:[
      'לצלם ולערוך ריילס, לבחון פורמטים של תוכן',
      'לענות לתגובות ולעורר דיונים בקהילה',
      'לנתח קהלים ולבצע A/B testing על מודעות',
      'לחקור מתחרים ולבנות תוכנית תוכן חודשית'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'בעוד 3 שנים אתה רוצה...', o:[
      'להיות יוצר תוכן ידוע עם קהל גדול',
      'לנהל את הקהילה של מותג גדול או פלטפורמה',
      'להוביל קמפיינים פרסומיים עם תקציבים גדולים',
      'לעמוד בראש מחלקת SMM או לעבוד כמנהל SMM'
    ], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]}
  ],
  roles: {
    'content-creator': {emoji:'🎬',name:'יוצר/ת תוכן',desc:'יוצר/ת תוכן ויראלי לרשתות חברתיות.',detail:'יוצר תוכן הוא הפנים של מותג ברשתות החברתיות. אתה מצלם ועורך סרטונים, כותב כיתובים וממציא פורמטים.',start:['CapCut — capcut.com','Canva — canva.com','Meta Creator Academy'],startUrls:['https://capcut.com','https://canva.com','https://creators.instagram.com']},
    'community': {emoji:'🤝',name:'מנהל/ת קהילה',desc:'בונה ומתחזק/ת קהילה חיה סביב מותג.',detail:'מנהל קהילה הוא נשמת הקהילה. אתה עונה לתגובות, מארגן פעילויות ויוצר תחושת שייכות.',start:['CMX Hub — cmxhub.com','Discord — discord.com','Telegram'],startUrls:['https://cmxhub.com','https://discord.com','https://telegram.org']},
    'targeting': {emoji:'🎯',name:'מומחה/ית פרסום ממומן',desc:'מגדיר/ה פרסום ממומן ברשתות חברתיות.',detail:'מומחה טרגוט הוא משווק עם מספרים. אתה מפלח קהלים, יוצר מודעות ומייטב את עלות הליד.',start:['Facebook Blueprint','TikTok Ads Guide','Google Skillshop'],startUrls:['https://facebook.com/business/learn','https://ads.tiktok.com/help/','https://skillshop.google.com']},
    'strategist': {emoji:'📊',name:'אסטרטג/ית SMM',desc:'מפתח/ת אסטרטגיית נוכחות של מותג ברשתות.',detail:'אסטרטג SMM חושב ברמת העסק. אתה מנתח מתחרים, בונה אסטרטגיות תוכן ומגדיר KPIs.',start:['Hootsuite Blog','Sprout Social Insights','Google Analytics'],startUrls:['https://blog.hootsuite.com','https://sproutsocial.com/insights','https://analytics.google.com']}
  }
};

// ── COPYWRITER ───────────────────────────────────────────────────────────────
CREATIVE_L2.copywriter = {};

CREATIVE_L2.copywriter.ru = {
  questions: [
    {t:'Что тебя привлекает в работе с текстами больше всего?', o:[
      'Писать полезные статьи, гайды, истории для блогов и медиа',
      'Создавать слоганы и тексты которые продают',
      'Писать тексты которые находят через Google',
      'Писать сценарии для видео, подкастов и рилсов'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'Какой инструмент ты хочешь освоить?', o:[
      'Notion + Hemingway — для структуры и ясности текста',
      'Копирайтинг-фреймворки: AIDA, PAS, FAB',
      'Semrush или Ahrefs — для анализа ключевых слов',
      'Final Draft или Arc Studio — для сценарного формата'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'Какой проект тебя зажигает?', o:[
      'Вести блог или медиа которое собирает постоянную аудиторию',
      'Написать рекламную кампанию которая станет культурным явлением',
      'Вывести статью в топ Google и наблюдать органический трафик',
      'Написать сценарий и увидеть как он стал живым видео'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'Что тебя вдохновляет?', o:[
      'Когда статья реально меняет решение или взгляд читателя',
      'Когда слоган сразу застрял в голове',
      'Когда статья занимает первое место в поиске',
      'Когда твой текст заставляет зрителя смеяться или плакать'
    ], s:[{'content-writer':2},{'ad-copy':2},{'seo-writer':2},{'scriptwriter':2}]},
    {t:'Что ты готов делать часами?', o:[
      'Исследовать тему и структурировать большой лонгрид',
      'Переписывать заголовок 20 раз пока не появится тот самый',
      'Анализировать поисковую выдачу и оптимизировать тексты',
      'Разрабатывать диалоги и выстраивать сцены'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'Через 3 года ты хочешь...', o:[
      'Вести собственное медиа или стать редактором крупного издания',
      'Быть копирайтером в топ-агентстве или крупном бренде',
      'Работать SEO-редактором в продуктовой компании',
      'Писать сценарии для брендов, YouTube-каналов или кино'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]}
  ],
  roles: {
    'content-writer': {
      emoji:'📝', name:'Контент-автор / Редактор',
      desc:'Пишет статьи, гайды, лонгриды для блогов и медиа.',
      detail:'Контент-автор создаёт тексты которые читают. Ты исследуешь темы, структурируешь материал, пишешь понятно и интересно. Хороший контент строит доверие к бренду и привлекает аудиторию без рекламы.',
      start:['Copyblogger — copyblogger.com','Notion — notion.so','Hemingway App — hemingwayapp.com'],
      startUrls:['https://copyblogger.com','https://notion.so','https://hemingwayapp.com']
    },
    'ad-copy': {
      emoji:'📣', name:'Рекламный копирайтер',
      desc:'Создаёт слоганы, заголовки и продающие тексты для рекламы.',
      detail:'Рекламный копирайтер делает слова которые продают. Ты пишешь объявления, лендинги, email-рассылки, слоганы. Знаешь фреймворки AIDA и PAS. Один сильный заголовок может удвоить конверсию.',
      start:['Swipe-файл лучших объявлений — swiped.co','The Copywriter\'s Handbook (книга)','Влиятельные слова — copyhackers.com'],
      startUrls:['https://swiped.co','https://amazon.com/s?k=copywriters+handbook','https://copyhackers.com']
    },
    'seo-writer': {
      emoji:'🔎', name:'SEO-автор',
      desc:'Пишет тексты которые находят через поисковики.',
      detail:'SEO-автор совмещает журналистику и техническую оптимизацию. Ты исследуешь ключевые слова, пишешь под поисковые намерения, оптимизируешь структуру. Хороший SEO-текст приносит трафик годами.',
      start:['Ahrefs Blog — ahrefs.com/blog','Semrush Academy — semrush.com/academy','Google Search Central — developers.google.com/search'],
      startUrls:['https://ahrefs.com/blog','https://semrush.com/academy','https://developers.google.com/search']
    },
    'scriptwriter': {
      emoji:'🎬', name:'Сценарист / Видеосценарист',
      desc:'Пишет сценарии для видео, подкастов, рилсов и рекламы.',
      detail:'Сценарист создаёт структуру для видеоконтента. Ты пишешь скрипты для YouTube, TikTok, рекламных роликов, подкастов. Умеешь держать внимание зрителя с первой секунды. Очень востребован у брендов и блогеров.',
      start:['No Film School — nofilmschool.com','Save the Cat (книга о структуре)','YouTube Creator Academy'],
      startUrls:['https://nofilmschool.com','https://amazon.com/s?k=save+the+cat','https://creatoracademy.youtube.com']
    }
  }
};

CREATIVE_L2.copywriter.en = {
  questions: [
    {t:'What attracts you most in working with texts?', o:[
      'Writing helpful articles, guides, stories for blogs and media',
      'Creating slogans and copy that sells',
      'Writing texts people find through Google',
      'Writing scripts for videos, podcasts, and reels'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'Which tool do you want to master?', o:[
      'Notion + Hemingway — for structure and text clarity',
      'Copywriting frameworks: AIDA, PAS, FAB',
      'Semrush or Ahrefs — for keyword research',
      'Final Draft or Arc Studio — for script format'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'Which project excites you most?', o:[
      'Run a blog or media that builds a loyal audience',
      'Write an ad campaign that becomes a cultural moment',
      'Get an article to the top of Google and watch organic traffic grow',
      'Write a script and see it come alive on screen'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'What inspires you?', o:[
      'When an article genuinely changes a reader\'s decision or perspective',
      'When a tagline sticks in your head instantly',
      'When an article ranks first in search results',
      'When your script makes viewers laugh or cry'
    ], s:[{'content-writer':2},{'ad-copy':2},{'seo-writer':2},{'scriptwriter':2}]},
    {t:'What could you do for hours?', o:[
      'Researching a topic and structuring a long-form piece',
      'Rewriting a headline 20 times until it clicks',
      'Analyzing search results and optimizing text',
      'Developing dialogue and building scenes'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'In 3 years you want to...', o:[
      'Run your own media or become editor of a major publication',
      'Be a copywriter at a top agency or major brand',
      'Work as an SEO editor at a product company',
      'Write scripts for brands, YouTube channels, or film'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]}
  ],
  roles: {
    'content-writer': {
      emoji:'📝', name:'Content Writer / Editor',
      desc:'Writes articles, guides, and long-reads for blogs and media.',
      detail:'A content writer creates texts people actually read. You research topics, structure material, write clearly and engagingly. Good content builds brand trust and attracts audiences without paid ads.',
      start:['Copyblogger — copyblogger.com','Notion — notion.so','Hemingway App — hemingwayapp.com'],
      startUrls:['https://copyblogger.com','https://notion.so','https://hemingwayapp.com']
    },
    'ad-copy': {
      emoji:'📣', name:'Advertising Copywriter',
      desc:'Creates slogans, headlines, and selling copy for advertising.',
      detail:'An advertising copywriter makes words that sell. You write ads, landing pages, email campaigns, and taglines. You know AIDA and PAS frameworks. One strong headline can double conversion.',
      start:['Swipe file — swiped.co','The Copywriter\'s Handbook (book)','Copy Hackers — copyhackers.com'],
      startUrls:['https://swiped.co','https://amazon.com/s?k=copywriters+handbook','https://copyhackers.com']
    },
    'seo-writer': {
      emoji:'🔎', name:'SEO Writer',
      desc:'Writes texts that rank in search engines.',
      detail:'An SEO writer combines journalism and technical optimization. You research keywords, write for search intent, optimize structure. A good SEO article drives traffic for years.',
      start:['Ahrefs Blog — ahrefs.com/blog','Semrush Academy — semrush.com/academy','Google Search Central'],
      startUrls:['https://ahrefs.com/blog','https://semrush.com/academy','https://developers.google.com/search']
    },
    'scriptwriter': {
      emoji:'🎬', name:'Scriptwriter / Video Scriptwriter',
      desc:'Writes scripts for videos, podcasts, reels, and ads.',
      detail:'A scriptwriter creates structure for video content. You write scripts for YouTube, TikTok, ad spots, and podcasts. You know how to grab and keep attention from the first second. Highly in demand by brands and creators.',
      start:['No Film School — nofilmschool.com','Save the Cat (book)','YouTube Creator Academy'],
      startUrls:['https://nofilmschool.com','https://amazon.com/s?k=save+the+cat','https://creatoracademy.youtube.com']
    }
  }
};

CREATIVE_L2.copywriter.de = {
  questions: [
    {t:'Was interessiert dich an der Arbeit mit Texten am meisten?', o:[
      'Nützliche Artikel, Guides und Geschichten für Blogs und Medien schreiben',
      'Slogans und verkaufsfördernde Texte erstellen',
      'Texte schreiben, die über Google gefunden werden',
      'Skripte für Videos, Podcasts und Reels schreiben'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'Welches Tool möchtest du meistern?', o:[
      'Notion + Hemingway — für Struktur und Klarheit','Copywriting-Frameworks: AIDA, PAS, FAB','Semrush oder Ahrefs — für Keyword-Recherche','Final Draft oder Arc Studio — für Skriptformat'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'Welches Projekt begeistert dich?', o:[
      'Einen Blog betreiben der treue Leser gewinnt','Eine Werbekampagne schreiben die zum Kulturereignis wird','Einen Artikel auf Platz 1 bei Google bringen','Ein Skript schreiben das als Video zum Leben erwacht'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'Was inspiriert dich?', o:[
      'Wenn ein Artikel die Entscheidung eines Lesers wirklich verändert','Wenn ein Slogan sofort im Kopf bleibt','Wenn ein Artikel in den Suchergebnissen ganz oben steht','Wenn dein Skript Zuschauer zum Lachen oder Weinen bringt'
    ], s:[{'content-writer':2},{'ad-copy':2},{'seo-writer':2},{'scriptwriter':2}]},
    {t:'Was könntest du stundenlang tun?', o:[
      'Ein Thema recherchieren und einen langen Artikel strukturieren','Eine Überschrift 20 Mal umschreiben bis sie stimmt','Suchergebnisse analysieren und Texte optimieren','Dialoge entwickeln und Szenen aufbauen'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'In 3 Jahren möchtest du...', o:[
      'Dein eigenes Medienformat betreiben oder Redakteur werden','Texter in einer Top-Agentur oder bei einer großen Marke sein','Als SEO-Redakteur in einem Produktunternehmen arbeiten','Skripte für Marken, YouTube-Kanäle oder Filme schreiben'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]}
  ],
  roles: {
    'content-writer': {emoji:'📝',name:'Content Writer / Redakteur/in',desc:'Schreibt Artikel, Guides und Longreads für Blogs.',detail:'Ein Content Writer erstellt Texte die wirklich gelesen werden. Du recherchierst Themen, strukturierst Inhalte und schreibst klar und ansprechend.',start:['Copyblogger — copyblogger.com','Notion — notion.so','Hemingway App'],startUrls:['https://copyblogger.com','https://notion.so','https://hemingwayapp.com']},
    'ad-copy': {emoji:'📣',name:'Werbetexter/in',desc:'Erstellt Slogans, Headlines und Verkaufstexte.',detail:'Ein Werbetexter macht Worte die verkaufen. Du schreibst Anzeigen, Landing Pages, E-Mail-Kampagnen und Slogans mit Frameworks wie AIDA.',start:['Swiped.co','The Copywriter\'s Handbook','Copy Hackers — copyhackers.com'],startUrls:['https://swiped.co','https://amazon.com/s?k=copywriters+handbook','https://copyhackers.com']},
    'seo-writer': {emoji:'🔎',name:'SEO-Texter/in',desc:'Schreibt Texte die in Suchmaschinen ranken.',detail:'Ein SEO-Texter kombiniert Journalismus und technische Optimierung. Du recherchierst Keywords und optimierst Struktur für Suchmaschinen.',start:['Ahrefs Blog — ahrefs.com/blog','Semrush Academy','Google Search Central'],startUrls:['https://ahrefs.com/blog','https://semrush.com/academy','https://developers.google.com/search']},
    'scriptwriter': {emoji:'🎬',name:'Drehbuchautor/in / Video-Skriptautor/in',desc:'Schreibt Skripte für Videos, Podcasts und Werbung.',detail:'Ein Skriptautor erstellt Strukturen für Video-Content. Du schreibst für YouTube, TikTok, Werbespots und Podcasts.',start:['No Film School — nofilmschool.com','Save the Cat (Buch)','YouTube Creator Academy'],startUrls:['https://nofilmschool.com','https://amazon.com/s?k=save+the+cat','https://creatoracademy.youtube.com']}
  }
};

CREATIVE_L2.copywriter.fr = {
  questions: [
    {t:'Qu\'est-ce qui t\'attire le plus dans le travail avec les textes ?', o:[
      'Écrire des articles utiles, guides et histoires pour blogs et médias',
      'Créer des slogans et des textes qui vendent',
      'Écrire des textes que les gens trouvent sur Google',
      'Écrire des scripts pour vidéos, podcasts et reels'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'Quel outil veux-tu maîtriser ?', o:[
      'Notion + Hemingway — pour la structure et la clarté','Frameworks copywriting : AIDA, PAS, FAB','Semrush ou Ahrefs — pour la recherche de mots-clés','Final Draft ou Arc Studio — pour le format scénario'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'Quel projet t\'enthousiasme le plus ?', o:[
      'Gérer un blog qui construit une audience fidèle','Écrire une campagne pub qui devient un phénomène culturel','Faire passer un article en tête de Google','Écrire un script et le voir prendre vie à l\'écran'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'Qu\'est-ce qui t\'inspire ?', o:[
      'Quand un article change vraiment la décision d\'un lecteur','Quand un slogan reste en tête instantanément','Quand un article est premier dans les résultats de recherche','Quand ton script fait rire ou pleurer les spectateurs'
    ], s:[{'content-writer':2},{'ad-copy':2},{'seo-writer':2},{'scriptwriter':2}]},
    {t:'Que pourrais-tu faire pendant des heures ?', o:[
      'Rechercher un sujet et structurer un long article','Réécrire un titre 20 fois jusqu\'à ce qu\'il clique','Analyser les résultats de recherche et optimiser les textes','Développer des dialogues et construire des scènes'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'Dans 3 ans tu veux...', o:[
      'Avoir ton propre média ou devenir rédacteur d\'une grande publication','Être copywriter dans une agence top ou grande marque','Travailler comme rédacteur SEO dans une entreprise produit','Écrire des scripts pour des marques, chaînes YouTube ou le cinéma'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]}
  ],
  roles: {
    'content-writer': {emoji:'📝',name:'Rédacteur/trice de contenu',desc:'Écrit des articles, guides et longs formats pour blogs.',detail:'Un rédacteur de contenu crée des textes que les gens lisent vraiment. Tu recherches des sujets, structures le contenu et écris clairement.',start:['Copyblogger — copyblogger.com','Notion — notion.so','Hemingway App'],startUrls:['https://copyblogger.com','https://notion.so','https://hemingwayapp.com']},
    'ad-copy': {emoji:'📣',name:'Concepteur-rédacteur',desc:'Crée slogans, accroches et textes publicitaires.',detail:'Un concepteur-rédacteur fait des mots qui vendent. Tu écris des annonces, landing pages, campagnes email et slogans avec des frameworks AIDA.',start:['Swiped.co','The Copywriter\'s Handbook','Copy Hackers — copyhackers.com'],startUrls:['https://swiped.co','https://amazon.com/s?k=copywriters+handbook','https://copyhackers.com']},
    'seo-writer': {emoji:'🔎',name:'Rédacteur/trice SEO',desc:'Écrit des textes qui se positionnent dans les moteurs de recherche.',detail:'Un rédacteur SEO combine journalisme et optimisation technique. Tu recherches des mots-clés et optimises la structure pour les moteurs.',start:['Ahrefs Blog — ahrefs.com/blog','Semrush Academy','Google Search Central'],startUrls:['https://ahrefs.com/blog','https://semrush.com/academy','https://developers.google.com/search']},
    'scriptwriter': {emoji:'🎬',name:'Scénariste / Auteur de scripts vidéo',desc:'Écrit des scripts pour vidéos, podcasts et publicités.',detail:'Un scénariste crée la structure du contenu vidéo. Tu écris pour YouTube, TikTok, spots publicitaires et podcasts.',start:['No Film School — nofilmschool.com','Save the Cat (livre)','YouTube Creator Academy'],startUrls:['https://nofilmschool.com','https://amazon.com/s?k=save+the+cat','https://creatoracademy.youtube.com']}
  }
};

CREATIVE_L2.copywriter.es = {
  questions: [
    {t:'¿Qué te atrae más del trabajo con textos?', o:[
      'Escribir artículos útiles, guías e historias para blogs y medios',
      'Crear eslóganes y textos que venden',
      'Escribir textos que la gente encuentra en Google',
      'Escribir guiones para videos, podcasts y reels'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'¿Qué herramienta quieres dominar?', o:[
      'Notion + Hemingway — para estructura y claridad','Frameworks de copywriting: AIDA, PAS, FAB','Semrush o Ahrefs — para investigación de palabras clave','Final Draft o Arc Studio — para formato de guión'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'¿Qué proyecto te emociona más?', o:[
      'Gestionar un blog que construya una audiencia fiel','Escribir una campaña publicitaria que se convierta en fenómeno cultural','Llevar un artículo al primer puesto de Google','Escribir un guión y verlo cobrar vida en pantalla'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'¿Qué te inspira?', o:[
      'Cuando un artículo realmente cambia la decisión de un lector','Cuando un eslogan se queda grabado en la mente al instante','Cuando un artículo está primero en los resultados de búsqueda','Cuando tu guión hace reír o llorar al espectador'
    ], s:[{'content-writer':2},{'ad-copy':2},{'seo-writer':2},{'scriptwriter':2}]},
    {t:'¿Qué podrías hacer durante horas?', o:[
      'Investigar un tema y estructurar un artículo largo','Reescribir un titular 20 veces hasta que encaje','Analizar resultados de búsqueda y optimizar textos','Desarrollar diálogos y construir escenas'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'En 3 años quieres...', o:[
      'Tener tu propio medio o ser editor de una publicación importante','Ser copywriter en una agencia top o gran marca','Trabajar como editor SEO en una empresa de producto','Escribir guiones para marcas, canales de YouTube o cine'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]}
  ],
  roles: {
    'content-writer': {emoji:'📝',name:'Redactor/a de contenido',desc:'Escribe artículos, guías y longforms para blogs.',detail:'Un redactor de contenido crea textos que la gente realmente lee. Investigas temas, estructuras contenido y escribes con claridad.',start:['Copyblogger — copyblogger.com','Notion — notion.so','Hemingway App'],startUrls:['https://copyblogger.com','https://notion.so','https://hemingwayapp.com']},
    'ad-copy': {emoji:'📣',name:'Redactor/a publicitario/a',desc:'Crea eslóganes, titulares y textos de venta.',detail:'Un redactor publicitario hace palabras que venden. Escribes anuncios, landing pages, campañas de email y eslóganes con frameworks AIDA.',start:['Swiped.co','The Copywriter\'s Handbook','Copy Hackers — copyhackers.com'],startUrls:['https://swiped.co','https://amazon.com/s?k=copywriters+handbook','https://copyhackers.com']},
    'seo-writer': {emoji:'🔎',name:'Redactor/a SEO',desc:'Escribe textos que posicionan en buscadores.',detail:'Un redactor SEO combina periodismo y optimización técnica. Investigas palabras clave y optimizas la estructura para motores de búsqueda.',start:['Ahrefs Blog — ahrefs.com/blog','Semrush Academy','Google Search Central'],startUrls:['https://ahrefs.com/blog','https://semrush.com/academy','https://developers.google.com/search']},
    'scriptwriter': {emoji:'🎬',name:'Guionista / Autor/a de scripts de video',desc:'Escribe guiones para videos, podcasts y publicidad.',detail:'Un guionista crea la estructura del contenido en video. Escribes para YouTube, TikTok, spots y podcasts.',start:['No Film School — nofilmschool.com','Save the Cat (libro)','YouTube Creator Academy'],startUrls:['https://nofilmschool.com','https://amazon.com/s?k=save+the+cat','https://creatoracademy.youtube.com']}
  }
};

CREATIVE_L2.copywriter.pt = {
  questions: [
    {t:'O que mais te atrai no trabalho com textos?', o:[
      'Escrever artigos úteis, guias e histórias para blogs e media',
      'Criar slogans e textos que vendem',
      'Escrever textos que as pessoas encontram no Google',
      'Escrever scripts para vídeos, podcasts e reels'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'Qual ferramenta queres dominar?', o:[
      'Notion + Hemingway — para estrutura e clareza','Frameworks de copywriting: AIDA, PAS, FAB','Semrush ou Ahrefs — para pesquisa de palavras-chave','Final Draft ou Arc Studio — para formato de guião'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'Que projeto te entusiasma mais?', o:[
      'Gerir um blog que construa uma audiência fiel','Escrever uma campanha publicitária que se torne num fenómeno cultural','Levar um artigo ao topo do Google','Escrever um guião e vê-lo ganhar vida no ecrã'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'O que te inspira?', o:[
      'Quando um artigo realmente muda a decisão de um leitor','Quando um slogan fica imediatamente na cabeça','Quando um artigo fica em primeiro nos resultados de pesquisa','Quando o teu script faz os espetadores rir ou chorar'
    ], s:[{'content-writer':2},{'ad-copy':2},{'seo-writer':2},{'scriptwriter':2}]},
    {t:'O que podes fazer durante horas?', o:[
      'Pesquisar um tema e estruturar um artigo longo','Reescrever um título 20 vezes até encaixar','Analisar resultados de pesquisa e otimizar textos','Desenvolver diálogos e construir cenas'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'Em 3 anos queres...', o:[
      'Ter o teu próprio meio ou ser editor de uma grande publicação','Ser copywriter numa agência top ou grande marca','Trabalhar como editor SEO numa empresa de produto','Escrever scripts para marcas, canais YouTube ou cinema'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]}
  ],
  roles: {
    'content-writer': {emoji:'📝',name:'Redator/a de conteúdo',desc:'Escreve artigos, guias e longforms para blogs.',detail:'Um redator de conteúdo cria textos que as pessoas realmente leem. Pesquisas temas, estruturas conteúdo e escreves com clareza.',start:['Copyblogger — copyblogger.com','Notion — notion.so','Hemingway App'],startUrls:['https://copyblogger.com','https://notion.so','https://hemingwayapp.com']},
    'ad-copy': {emoji:'📣',name:'Copywriter publicitário/a',desc:'Cria slogans, títulos e textos de venda.',detail:'Um copywriter publicitário faz palavras que vendem. Escreves anúncios, landing pages, campanhas de email e slogans com frameworks AIDA.',start:['Swiped.co','The Copywriter\'s Handbook','Copy Hackers — copyhackers.com'],startUrls:['https://swiped.co','https://amazon.com/s?k=copywriters+handbook','https://copyhackers.com']},
    'seo-writer': {emoji:'🔎',name:'Redator/a SEO',desc:'Escreve textos que posicionam nos motores de busca.',detail:'Um redator SEO combina jornalismo e otimização técnica. Pesquisas palavras-chave e otimizas a estrutura para motores de busca.',start:['Ahrefs Blog — ahrefs.com/blog','Semrush Academy','Google Search Central'],startUrls:['https://ahrefs.com/blog','https://semrush.com/academy','https://developers.google.com/search']},
    'scriptwriter': {emoji:'🎬',name:'Argumentista / Autor/a de scripts de vídeo',desc:'Escreve scripts para vídeos, podcasts e publicidade.',detail:'Um argumentista cria a estrutura para conteúdo de vídeo. Escreves para YouTube, TikTok, spots e podcasts.',start:['No Film School — nofilmschool.com','Save the Cat (livro)','YouTube Creator Academy'],startUrls:['https://nofilmschool.com','https://amazon.com/s?k=save+the+cat','https://creatoracademy.youtube.com']}
  }
};

CREATIVE_L2.copywriter.ar = {
  questions: [
    {t:'ما الذي يجذبك أكثر في العمل مع النصوص؟', o:[
      'كتابة مقالات مفيدة وأدلة وقصص للمدونات والإعلام',
      'إنشاء شعارات ونصوص مقنعة تُحقق المبيعات',
      'كتابة نصوص يجدها الناس عبر محرك البحث Google',
      'كتابة سيناريوهات للفيديو والبودكاست والريلز'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'أي أداة تريد إتقانها؟', o:[
      'Notion + Hemingway — للبنية ووضوح النص','أطر الكتابة الإعلانية: AIDA وPAS وFAB','Semrush أو Ahrefs — لبحث الكلمات المفتاحية','Final Draft أو Arc Studio — لتنسيق السيناريو'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'أي مشروع يثير حماسك أكثر؟', o:[
      'إدارة مدونة تبني جمهوراً مخلصاً','كتابة حملة إعلانية تصبح ظاهرة ثقافية','إيصال مقال إلى الصدارة في نتائج Google','كتابة سيناريو ورؤيته يتحول إلى محتوى حي'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'ما الذي يلهمك؟', o:[
      'عندما يغير مقال قرار القارئ أو رأيه فعلاً','عندما يعلق شعار في الذهن فوراً','عندما يحتل مقال المركز الأول في نتائج البحث','عندما يضحك المشاهدون أو يبكون بسبب نصك'
    ], s:[{'content-writer':2},{'ad-copy':2},{'seo-writer':2},{'scriptwriter':2}]},
    {t:'ما الذي يمكنك فعله لساعات؟', o:[
      'البحث في موضوع وبناء هيكل مقال طويل','إعادة كتابة عنوان 20 مرة حتى يكون مثالياً','تحليل نتائج البحث وتحسين النصوص','تطوير الحوارات وبناء المشاهد'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'بعد 3 سنوات تريد أن...', o:[
      'تمتلك منصتك الإعلامية أو تصبح محرراً لمنشور كبير','تكون كاتباً إعلانياً في وكالة كبرى أو علامة تجارية مرموقة','تعمل محرراً SEO في شركة منتجات','تكتب سيناريوهات للعلامات التجارية وقنوات YouTube أو السينما'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]}
  ],
  roles: {
    'content-writer': {emoji:'📝',name:'كاتب/ة محتوى',desc:'يكتب مقالات وأدلة ومحتوى طويلاً للمدونات.',detail:'كاتب المحتوى ينشئ نصوصاً يقرأها الناس فعلاً. تبحث في المواضيع وتبني المحتوى وتكتب بوضوح.',start:['Copyblogger — copyblogger.com','Notion — notion.so','Hemingway App'],startUrls:['https://copyblogger.com','https://notion.so','https://hemingwayapp.com']},
    'ad-copy': {emoji:'📣',name:'كاتب/ة إعلانات',desc:'ينشئ شعارات وعناوين ونصوص بيعية.',detail:'الكاتب الإعلاني يصنع كلمات تبيع. تكتب إعلانات وصفحات هبوط وحملات بريد إلكتروني باستخدام أطر AIDA.',start:['Swiped.co','The Copywriter\'s Handbook','Copy Hackers — copyhackers.com'],startUrls:['https://swiped.co','https://amazon.com/s?k=copywriters+handbook','https://copyhackers.com']},
    'seo-writer': {emoji:'🔎',name:'كاتب/ة SEO',desc:'يكتب نصوصاً تحتل مراتب في محركات البحث.',detail:'كاتب SEO يجمع بين الصحافة والتحسين التقني. تبحث عن الكلمات المفتاحية وتحسّن البنية لمحركات البحث.',start:['Ahrefs Blog — ahrefs.com/blog','Semrush Academy','Google Search Central'],startUrls:['https://ahrefs.com/blog','https://semrush.com/academy','https://developers.google.com/search']},
    'scriptwriter': {emoji:'🎬',name:'كاتب/ة سيناريو',desc:'يكتب سيناريوهات للفيديو والبودكاست والإعلانات.',detail:'كاتب السيناريو يخلق هيكل المحتوى المرئي. تكتب لـ YouTube وTikTok والإعلانات والبودكاست.',start:['No Film School — nofilmschool.com','Save the Cat (كتاب)','YouTube Creator Academy'],startUrls:['https://nofilmschool.com','https://amazon.com/s?k=save+the+cat','https://creatoracademy.youtube.com']}
  }
};

CREATIVE_L2.copywriter.he = {
  questions: [
    {t:'מה מושך אותך יותר מכל בעבודה עם טקסטים?', o:[
      'לכתוב מאמרים שימושיים, מדריכים וסיפורים לבלוגים ומדיה',
      'ליצור סלוגנים וטקסטים שמוכרים',
      'לכתוב טקסטים שאנשים מוצאים דרך Google',
      'לכתוב תסריטים לסרטוני וידאו, פודקאסטים וריילס'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'איזה כלי אתה רוצה לשלוט בו?', o:[
      'Notion + Hemingway — למבנה ולבהירות הטקסט','מסגרות קופירייטינג: AIDA, PAS, FAB','Semrush או Ahrefs — למחקר מילות מפתח','Final Draft או Arc Studio — לפורמט תסריט'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'איזה פרויקט מרגש אותך יותר מכל?', o:[
      'לנהל בלוג שבונה קהל נאמן','לכתוב קמפיין פרסומי שהופך לתופעה תרבותית','להביא מאמר לראש תוצאות Google','לכתוב תסריט ולראות אותו קם לחיים'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'מה מעורר בך השראה?', o:[
      'כשמאמר משנה באמת את ההחלטה של הקורא','כשסלוגן נשאר בראש מיד','כשמאמר עומד ראשון בתוצאות החיפוש','כשהתסריט שלך גורם לצופים לצחוק או לבכות'
    ], s:[{'content-writer':2},{'ad-copy':2},{'seo-writer':2},{'scriptwriter':2}]},
    {t:'מה אתה יכול לעשות שעות?', o:[
      'לחקור נושא ולבנות מאמר ארוך','לכתוב מחדש כותרת 20 פעמים עד שהיא מושלמת','לנתח תוצאות חיפוש ולאחסן טקסטים','לפתח דיאלוגים ולבנות סצנות'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'בעוד 3 שנים אתה רוצה...', o:[
      'להיות עם המדיה שלך או לערוך בפרסום גדול','להיות קופירייטר בסוכנות טופ או מותג גדול','לעבוד כעורך SEO בחברת מוצר','לכתוב תסריטים למותגים, ערוצי YouTube או קולנוע'
    ], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]}
  ],
  roles: {
    'content-writer': {emoji:'📝',name:'כותב/ת תוכן',desc:'כותב/ת מאמרים, מדריכים ולונגרידים לבלוגים.',detail:'כותב תוכן יוצר טקסטים שאנשים קוראים באמת. אתה חוקר נושאים, בונה תוכן וכותב בבהירות.',start:['Copyblogger — copyblogger.com','Notion — notion.so','Hemingway App'],startUrls:['https://copyblogger.com','https://notion.so','https://hemingwayapp.com']},
    'ad-copy': {emoji:'📣',name:'קופירייטר/ית פרסומי',desc:'יוצר/ת סלוגנים, כותרות וטקסטים שמוכרים.',detail:'קופירייטר פרסומי עושה מילים שמוכרות. אתה כותב מודעות, דפי נחיתה, קמפיינים ואימייל עם מסגרות AIDA.',start:['Swiped.co','The Copywriter\'s Handbook','Copy Hackers — copyhackers.com'],startUrls:['https://swiped.co','https://amazon.com/s?k=copywriters+handbook','https://copyhackers.com']},
    'seo-writer': {emoji:'🔎',name:'כותב/ת SEO',desc:'כותב/ת טקסטים שמדורגים במנועי חיפוש.',detail:'כותב SEO משלב עיתונאות ואופטימיזציה טכנית. אתה חוקר מילות מפתח ומייטב מבנה למנועי חיפוש.',start:['Ahrefs Blog — ahrefs.com/blog','Semrush Academy','Google Search Central'],startUrls:['https://ahrefs.com/blog','https://semrush.com/academy','https://developers.google.com/search']},
    'scriptwriter': {emoji:'🎬',name:'תסריטאי/ת',desc:'כותב/ת תסריטים לסרטוני וידאו, פודקאסטים ופרסומות.',detail:'תסריטאי יוצר מבנה לתוכן וידאו. אתה כותב ל-YouTube, TikTok, ספוטים ופודקאסטים.',start:['No Film School — nofilmschool.com','Save the Cat (ספר)','YouTube Creator Academy'],startUrls:['https://nofilmschool.com','https://amazon.com/s?k=save+the+cat','https://creatoracademy.youtube.com']}
  }
};


// ── GRAPHIC DESIGNER ─────────────────────────────────────────────────────────
CREATIVE_L2.graphic = {};

CREATIVE_L2.graphic.ru = {
  questions: [
    {t:'Что тебя привлекает в графическом дизайне больше всего?', o:[
      'Разрабатывать логотипы и фирменный стиль брендов',
      'Верстать журналы, книги и сложные печатные макеты',
      'Создавать визуал для соцсетей, сайтов и баннеров',
      'Придумывать упаковку — от идеи до финального дизайна'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'Что ты готов делать часами?', o:[
      'Строить логосистему: знак, типографика, цвет, паттерны',
      'Работать с типографикой и сеткой в многостраничном макете',
      'Делать баннеры и адаптивы под разные форматы в Figma',
      'Разрабатывать 3D-модель упаковки и переводить в плоский макет'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'Какой инструмент ты хочешь освоить в первую очередь?', o:[
      'Adobe Illustrator — для векторной графики и логотипов',
      'Adobe InDesign — для вёрстки многостраничных изданий',
      'Figma — для digital-дизайна и веб-графики',
      'Adobe Dimension / Blender — для 3D-визуализации упаковки'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'Какой проект зажигает тебя больше всего?', o:[
      'Ребрендинг известной компании — новый логотип и гайдлайн',
      'Оформление книги или журнала от обложки до последней страницы',
      'Серия баннеров для рекламной кампании которую увидят миллионы',
      'Дизайн упаковки которая стоит на полке рядом с мировыми брендами'
    ], s:[{'brand':2},{'print':2},{'digital':2},{'packaging':2}]},
    {t:'Что тебя вдохновляет?', o:[
      'Когда логотип работает на визитке и на рекламном щите одинаково',
      'Когда вёрстка книги такая удобная что читатель не замечает дизайн',
      'Когда баннер останавливает скролл',
      'Когда упаковку фотографируют и постят в Instagram'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'Через 3 года ты хочешь...', o:[
      'Быть арт-директором бренда или открыть своё агентство',
      'Работать в издательстве или журнале как арт-директор',
      'Вести digital-направление в маркетинговом агентстве',
      'Сотрудничать с FMCG-брендами над упаковкой мирового уровня'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]}
  ],
  roles: {
    'brand': {
      emoji:'🏷️', name:'Бренд-дизайнер',
      desc:'Создаёт фирменный стиль: логотипы, цвета, типографику.',
      detail:'Бренд-дизайнер строит визуальную идентичность компании. Ты разрабатываешь логотип, цветовую палитру, шрифты, паттерны и гайдлайн. Хороший бренд-дизайн узнаётся с первого взгляда и работает на любом носителе.',
      start:['Brand New — underconsideration.com/brandnew','Logo Design Love (книга)','Adobe Illustrator — adobe.com/illustrator'],
      startUrls:['https://underconsideration.com/brandnew','https://www.amazon.com/s?k=logo+design+love','https://adobe.com/products/illustrator.html']
    },
    'print': {
      emoji:'📰', name:'Дизайнер печатных изданий',
      desc:'Верстает книги, журналы и сложные многостраничные макеты.',
      detail:'Дизайнер печатных изданий владеет типографикой и сеткой. Ты работаешь с InDesign, знаешь цветовые модели CMYK, допечатную подготовку и полиграфические стандарты. Хорошая вёрстка делает чтение удовольствием.',
      start:['Adobe InDesign — adobe.com/indesign','Thinking with Type (книга)','InDesign Secrets — indesignsecrets.com'],
      startUrls:['https://adobe.com/products/indesign.html','https://www.amazon.com/s?k=thinking+with+type','https://indesignsecrets.com']
    },
    'digital': {
      emoji:'🖥️', name:'Digital-дизайнер',
      desc:'Создаёт визуал для соцсетей, сайтов и рекламных кампаний.',
      detail:'Digital-дизайнер работает в мире пикселей. Ты делаешь баннеры, посты, сторис, лендинги, email-шаблоны. Знаешь форматы и технические ограничения разных платформ. Быстрый, гибкий, умеешь работать в потоке.',
      start:['Figma — figma.com','Canva Pro — canva.com','Google Web Designer — webdesigner.withgoogle.com'],
      startUrls:['https://figma.com','https://canva.com','https://webdesigner.withgoogle.com']
    },
    'packaging': {
      emoji:'📦', name:'Дизайнер упаковки',
      desc:'Разрабатывает дизайн упаковки от идеи до производства.',
      detail:'Дизайнер упаковки работает на стыке графики и 3D. Ты разрабатываешь концепцию, делаешь развёртку, контролируешь цвет для печати и передаёшь файлы в производство. Упаковка — это молчаливый продавец на полке.',
      start:['The Dieline — thedieline.com','Adobe Illustrator + Dimension','Packaging Digest — packagingdigest.com'],
      startUrls:['https://thedieline.com','https://adobe.com/products/illustrator.html','https://packagingdigest.com']
    }
  }
};

CREATIVE_L2.graphic.en = {
  questions: [
    {t:'What attracts you most in graphic design?', o:[
      'Developing logos and brand identities',
      'Laying out magazines, books, and complex print materials',
      'Creating visuals for social media, websites, and banners',
      'Designing packaging — from concept to final design'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'What could you do for hours?', o:[
      'Building a logo system: mark, typography, colors, patterns',
      'Working with typography and grids in multi-page layouts',
      'Making banners and adapting them to different formats in Figma',
      'Developing 3D packaging models and translating them to flat artwork'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'Which tool do you want to master first?', o:[
      'Adobe Illustrator — for vector graphics and logos',
      'Adobe InDesign — for multi-page publication layouts',
      'Figma — for digital design and web graphics',
      'Adobe Dimension / Blender — for 3D packaging visualization'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'Which project excites you most?', o:[
      'Rebranding a well-known company — new logo and brand guidelines',
      'Designing a book or magazine from cover to last page',
      'A banner series for an ad campaign seen by millions',
      'Packaging design that stands on the shelf next to global brands'
    ], s:[{'brand':2},{'print':2},{'digital':2},{'packaging':2}]},
    {t:'What inspires you?', o:[
      'When a logo works equally well on a business card and a billboard',
      'When a book layout is so comfortable the reader doesn\'t notice the design',
      'When a banner stops the scroll',
      'When packaging gets photographed and posted on Instagram'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'In 3 years you want to...', o:[
      'Be an art director or open your own agency',
      'Work at a publisher or magazine as art director',
      'Lead the digital design direction at a marketing agency',
      'Collaborate with FMCG brands on world-class packaging'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]}
  ],
  roles: {
    'brand': {emoji:'🏷️',name:'Brand Designer',desc:'Creates brand identity: logos, colors, typography.',detail:'A brand designer builds a company\'s visual identity. You develop the logo, color palette, fonts, patterns, and brand guidelines. Great brand design is instantly recognizable on any medium.',start:['Brand New — underconsideration.com/brandnew','Logo Design Love (book)','Adobe Illustrator'],startUrls:['https://underconsideration.com/brandnew','https://www.amazon.com/s?k=logo+design+love','https://adobe.com/products/illustrator.html']},
    'print': {emoji:'📰',name:'Print Designer',desc:'Designs books, magazines, and complex multi-page layouts.',detail:'A print designer masters typography and grids. You work with InDesign, understand CMYK color, prepress, and print standards. Good layout makes reading a pleasure.',start:['Adobe InDesign','Thinking with Type (book)','InDesign Secrets — indesignsecrets.com'],startUrls:['https://adobe.com/products/indesign.html','https://www.amazon.com/s?k=thinking+with+type','https://indesignsecrets.com']},
    'digital': {emoji:'🖥️',name:'Digital Designer',desc:'Creates visuals for social media, websites, and ad campaigns.',detail:'A digital designer lives in pixels. You make banners, posts, stories, landing pages, and email templates. You know the formats and tech constraints of every platform.',start:['Figma — figma.com','Canva Pro — canva.com','Google Web Designer'],startUrls:['https://figma.com','https://canva.com','https://webdesigner.withgoogle.com']},
    'packaging': {emoji:'📦',name:'Packaging Designer',desc:'Designs packaging from concept to production.',detail:'A packaging designer works at the intersection of graphics and 3D. You develop concepts, create dielines, manage print color, and hand off files to production. Packaging is the silent salesperson on the shelf.',start:['The Dieline — thedieline.com','Adobe Illustrator + Dimension','Packaging Digest'],startUrls:['https://thedieline.com','https://adobe.com/products/illustrator.html','https://packagingdigest.com']}
  }
};

CREATIVE_L2.graphic.de = {
  questions: [
    {t:'Was interessiert dich am Grafikdesign am meisten?', o:[
      'Logos und Corporate Design für Marken entwickeln','Magazine, Bücher und komplexe Druckerzeugnisse gestalten','Visuals für Social Media, Websites und Banner erstellen','Verpackungen gestalten — von der Idee bis zum fertigen Design'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'Was könntest du stundenlang tun?', o:[
      'Ein Logo-System aufbauen: Zeichen, Typografie, Farben, Muster','Mit Typografie und Rastern in mehrseitigen Layouts arbeiten','Banner und Adaptierungen für verschiedene Formate in Figma erstellen','3D-Verpackungsmodelle entwickeln und in Flachart umsetzen'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'Welches Tool möchtest du zuerst meistern?', o:[
      'Adobe Illustrator — für Vektorgrafik und Logos','Adobe InDesign — für mehrseitige Publikationen','Figma — für digitales Design und Webgrafik','Adobe Dimension / Blender — für 3D-Verpackungsvisualisierung'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'Welches Projekt begeistert dich am meisten?', o:[
      'Rebranding eines bekannten Unternehmens — neues Logo und Markenhandbuch','Ein Buch oder Magazin von der Titelseite bis zur letzten Seite gestalten','Eine Bannerserie für eine Werbekampagne die Millionen sehen','Verpackungsdesign das neben globalen Marken im Regal steht'
    ], s:[{'brand':2},{'print':2},{'digital':2},{'packaging':2}]},
    {t:'Was inspiriert dich?', o:[
      'Wenn ein Logo auf Visitenkarte und Plakatwand gleich gut wirkt','Wenn ein Buchlayout so angenehm ist dass der Leser das Design nicht bemerkt','Wenn ein Banner den Scroll stoppt','Wenn Verpackung fotografiert und auf Instagram gepostet wird'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'In 3 Jahren möchtest du...', o:[
      'Art Director einer Marke sein oder eine eigene Agentur gründen','In einem Verlag oder Magazin als Art Director arbeiten','Die digitale Gestaltungsrichtung in einer Marketingagentur leiten','Mit FMCG-Marken an weltklasse Verpackungen zusammenarbeiten'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]}
  ],
  roles: {
    'brand': {emoji:'🏷️',name:'Brand Designer/in',desc:'Entwickelt Corporate Identity: Logos, Farben, Typografie.',detail:'Ein Brand Designer baut die visuelle Identität eines Unternehmens auf. Du entwickelst Logo, Farbpalette, Schriften, Muster und Markenhandbuch.',start:['Brand New — underconsideration.com/brandnew','Logo Design Love (Buch)','Adobe Illustrator'],startUrls:['https://underconsideration.com/brandnew','https://www.amazon.com/s?k=logo+design+love','https://adobe.com/products/illustrator.html']},
    'print': {emoji:'📰',name:'Print Designer/in',desc:'Gestaltet Bücher, Magazine und mehrseitige Druckerzeugnisse.',detail:'Ein Print Designer beherrscht Typografie und Raster. Du arbeitest mit InDesign, verstehst CMYK-Farben und Druckstandards.',start:['Adobe InDesign','Thinking with Type (Buch)','InDesign Secrets — indesignsecrets.com'],startUrls:['https://adobe.com/products/indesign.html','https://www.amazon.com/s?k=thinking+with+type','https://indesignsecrets.com']},
    'digital': {emoji:'🖥️',name:'Digital Designer/in',desc:'Erstellt Visuals für Social Media, Websites und Werbekampagnen.',detail:'Ein Digital Designer lebt in der Pixelwelt. Du machst Banner, Posts, Stories, Landing Pages und E-Mail-Templates.',start:['Figma — figma.com','Canva Pro — canva.com','Google Web Designer'],startUrls:['https://figma.com','https://canva.com','https://webdesigner.withgoogle.com']},
    'packaging': {emoji:'📦',name:'Verpackungsdesigner/in',desc:'Gestaltet Verpackungen von der Idee bis zur Produktion.',detail:'Ein Verpackungsdesigner arbeitet an der Schnittstelle von Grafik und 3D. Du entwickelst Konzepte, erstellst Stanzformen und übergibst Druckdateien.',start:['The Dieline — thedieline.com','Adobe Illustrator + Dimension','Packaging Digest'],startUrls:['https://thedieline.com','https://adobe.com/products/illustrator.html','https://packagingdigest.com']}
  }
};

CREATIVE_L2.graphic.fr = {
  questions: [
    {t:'Qu\'est-ce qui t\'attire le plus dans le design graphique ?', o:[
      'Développer des logos et des identités visuelles de marques','Mettre en page des magazines, livres et supports imprimés complexes','Créer des visuels pour réseaux sociaux, sites web et bannières','Concevoir des emballages — de l\'idée au design final'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'Que pourrais-tu faire pendant des heures ?', o:[
      'Construire un système de logo : signe, typographie, couleurs, motifs','Travailler la typographie et les grilles dans des mises en page multipages','Créer des bannières et les adapter à différents formats dans Figma','Développer des modèles 3D d\'emballage et les convertir en artwork plat'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'Quel outil veux-tu maîtriser en premier ?', o:[
      'Adobe Illustrator — pour la vectorielle et les logos','Adobe InDesign — pour les publications multipages','Figma — pour le design digital et la webgraphique','Adobe Dimension / Blender — pour la visualisation 3D d\'emballages'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'Quel projet t\'enthousiasme le plus ?', o:[
      'Le rebranding d\'une entreprise connue — nouveau logo et charte graphique','La conception d\'un livre ou d\'un magazine de la couverture à la dernière page','Une série de bannières pour une campagne vue par des millions de personnes','Un design d\'emballage qui se retrouve en rayon à côté des grandes marques'
    ], s:[{'brand':2},{'print':2},{'digital':2},{'packaging':2}]},
    {t:'Qu\'est-ce qui t\'inspire ?', o:[
      'Quand un logo fonctionne aussi bien sur une carte de visite que sur un panneau','Quand une mise en page de livre est si agréable que le lecteur n\'y prête pas attention','Quand une bannière arrête le scroll','Quand un emballage est photographié et posté sur Instagram'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'Dans 3 ans tu veux...', o:[
      'Être directeur artistique d\'une marque ou ouvrir ta propre agence','Travailler dans une maison d\'édition ou un magazine comme directeur artistique','Diriger la création digitale dans une agence marketing','Collaborer avec des marques FMCG sur des emballages de niveau mondial'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]}
  ],
  roles: {
    'brand': {emoji:'🏷️',name:'Designer d\'identité de marque',desc:'Crée l\'identité visuelle : logos, couleurs, typographie.',detail:'Un designer de marque construit l\'identité visuelle d\'une entreprise. Tu développes le logo, la palette de couleurs, les polices, les motifs et la charte graphique.',start:['Brand New — underconsideration.com/brandnew','Logo Design Love (livre)','Adobe Illustrator'],startUrls:['https://underconsideration.com/brandnew','https://www.amazon.com/s?k=logo+design+love','https://adobe.com/products/illustrator.html']},
    'print': {emoji:'📰',name:'Designer print / éditorial',desc:'Conçoit livres, magazines et mises en page multipages.',detail:'Un designer print maîtrise la typographie et les grilles. Tu travailles avec InDesign, comprends le CMYK et les normes d\'impression.',start:['Adobe InDesign','Thinking with Type (livre)','InDesign Secrets — indesignsecrets.com'],startUrls:['https://adobe.com/products/indesign.html','https://www.amazon.com/s?k=thinking+with+type','https://indesignsecrets.com']},
    'digital': {emoji:'🖥️',name:'Designer digital',desc:'Crée des visuels pour réseaux sociaux, sites et campagnes.',detail:'Un designer digital vit dans le monde des pixels. Tu fais des bannières, posts, stories, landing pages et templates email.',start:['Figma — figma.com','Canva Pro — canva.com','Google Web Designer'],startUrls:['https://figma.com','https://canva.com','https://webdesigner.withgoogle.com']},
    'packaging': {emoji:'📦',name:'Designer packaging',desc:'Conçoit les emballages de l\'idée à la production.',detail:'Un designer packaging travaille à l\'intersection du graphisme et de la 3D. Tu développes des concepts, crées des découpes et remets les fichiers à l\'imprimeur.',start:['The Dieline — thedieline.com','Adobe Illustrator + Dimension','Packaging Digest'],startUrls:['https://thedieline.com','https://adobe.com/products/illustrator.html','https://packagingdigest.com']}
  }
};

CREATIVE_L2.graphic.es = {
  questions: [
    {t:'¿Qué te atrae más del diseño gráfico?', o:[
      'Desarrollar logos e identidades visuales de marcas','Maquetar revistas, libros y materiales impresos complejos','Crear visuales para redes sociales, sitios web y banners','Diseñar packaging — desde la idea hasta el diseño final'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'¿Qué podrías hacer durante horas?', o:[
      'Construir un sistema de logo: símbolo, tipografía, colores, patrones','Trabajar con tipografía y retículas en maquetaciones multipágina','Crear banners y adaptarlos a diferentes formatos en Figma','Desarrollar modelos 3D de packaging y convertirlos en arte plano'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'¿Qué herramienta quieres dominar primero?', o:[
      'Adobe Illustrator — para gráficos vectoriales y logos','Adobe InDesign — para publicaciones multipágina','Figma — para diseño digital y gráficos web','Adobe Dimension / Blender — para visualización 3D de packaging'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'¿Qué proyecto te emociona más?', o:[
      'El rebranding de una empresa conocida — nuevo logo y manual de marca','Diseñar un libro o revista de portada a última página','Una serie de banners para una campaña vista por millones','Diseño de packaging que se ubica junto a marcas globales'
    ], s:[{'brand':2},{'print':2},{'digital':2},{'packaging':2}]},
    {t:'¿Qué te inspira?', o:[
      'Cuando un logo funciona igual en una tarjeta y en una valla publicitaria','Cuando una maquetación es tan cómoda que el lector no nota el diseño','Cuando un banner detiene el scroll','Cuando el packaging es fotografiado y publicado en Instagram'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'En 3 años quieres...', o:[
      'Ser director de arte de una marca o abrir tu propia agencia','Trabajar en una editorial o revista como director de arte','Liderar la dirección de diseño digital en una agencia de marketing','Colaborar con marcas FMCG en packaging de nivel mundial'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]}
  ],
  roles: {
    'brand': {emoji:'🏷️',name:'Diseñador/a de marca',desc:'Crea identidad visual: logos, colores, tipografía.',detail:'Un diseñador de marca construye la identidad visual de una empresa. Desarrollas el logo, paleta de color, tipografías, patrones y manual de marca.',start:['Brand New — underconsideration.com/brandnew','Logo Design Love (libro)','Adobe Illustrator'],startUrls:['https://underconsideration.com/brandnew','https://www.amazon.com/s?k=logo+design+love','https://adobe.com/products/illustrator.html']},
    'print': {emoji:'📰',name:'Diseñador/a editorial',desc:'Diseña libros, revistas y maquetaciones multipágina.',detail:'Un diseñador editorial domina la tipografía y las retículas. Trabajas con InDesign, entiendes el CMYK y los estándares de impresión.',start:['Adobe InDesign','Thinking with Type (libro)','InDesign Secrets — indesignsecrets.com'],startUrls:['https://adobe.com/products/indesign.html','https://www.amazon.com/s?k=thinking+with+type','https://indesignsecrets.com']},
    'digital': {emoji:'🖥️',name:'Diseñador/a digital',desc:'Crea visuales para redes sociales, sitios web y campañas.',detail:'Un diseñador digital vive en el mundo de los píxeles. Haces banners, posts, stories, landing pages y plantillas de email.',start:['Figma — figma.com','Canva Pro — canva.com','Google Web Designer'],startUrls:['https://figma.com','https://canva.com','https://webdesigner.withgoogle.com']},
    'packaging': {emoji:'📦',name:'Diseñador/a de packaging',desc:'Diseña packaging desde el concepto hasta la producción.',detail:'Un diseñador de packaging trabaja en la intersección de la gráfica y el 3D. Desarrollas conceptos, creas troqueles y entregas archivos a producción.',start:['The Dieline — thedieline.com','Adobe Illustrator + Dimension','Packaging Digest'],startUrls:['https://thedieline.com','https://adobe.com/products/illustrator.html','https://packagingdigest.com']}
  }
};

CREATIVE_L2.graphic.pt = {
  questions: [
    {t:'O que te atrai mais no design gráfico?', o:[
      'Desenvolver logos e identidades visuais de marcas','Paginar revistas, livros e materiais impressos complexos','Criar visuais para redes sociais, sites e banners','Desenhar embalagens — da ideia ao design final'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'O que podes fazer durante horas?', o:[
      'Construir um sistema de logo: símbolo, tipografia, cores, padrões','Trabalhar com tipografia e grelhas em paginações multipágina','Criar banners e adaptá-los a diferentes formatos no Figma','Desenvolver modelos 3D de embalagem e convertê-los em arte plana'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'Qual ferramenta queres dominar primeiro?', o:[
      'Adobe Illustrator — para gráficos vetoriais e logos','Adobe InDesign — para publicações multipágina','Figma — para design digital e gráficos web','Adobe Dimension / Blender — para visualização 3D de embalagens'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'Que projeto te entusiasma mais?', o:[
      'O rebranding de uma empresa conhecida — novo logo e manual de marca','Desenhar um livro ou revista da capa à última página','Uma série de banners para uma campanha vista por milhões','Design de embalagem que fica na prateleira ao lado de marcas globais'
    ], s:[{'brand':2},{'print':2},{'digital':2},{'packaging':2}]},
    {t:'O que te inspira?', o:[
      'Quando um logo funciona igualmente bem num cartão e num outdoor','Quando uma paginação é tão confortável que o leitor não nota o design','Quando um banner pára o scroll','Quando a embalagem é fotografada e publicada no Instagram'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'Em 3 anos queres...', o:[
      'Ser diretor/a de arte de uma marca ou abrir a tua agência','Trabalhar numa editora ou revista como diretor/a de arte','Liderar a direção de design digital numa agência de marketing','Colaborar com marcas FMCG em packaging de nível mundial'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]}
  ],
  roles: {
    'brand': {emoji:'🏷️',name:'Designer de marca',desc:'Cria identidade visual: logos, cores, tipografia.',detail:'Um designer de marca constrói a identidade visual de uma empresa. Desenvolves o logo, paleta de cores, fontes, padrões e manual de marca.',start:['Brand New — underconsideration.com/brandnew','Logo Design Love (livro)','Adobe Illustrator'],startUrls:['https://underconsideration.com/brandnew','https://www.amazon.com/s?k=logo+design+love','https://adobe.com/products/illustrator.html']},
    'print': {emoji:'📰',name:'Designer editorial',desc:'Pagina livros, revistas e layouts multipágina.',detail:'Um designer editorial domina tipografia e grelhas. Trabalhas com InDesign, entendes CMYK e padrões de impressão.',start:['Adobe InDesign','Thinking with Type (livro)','InDesign Secrets — indesignsecrets.com'],startUrls:['https://adobe.com/products/indesign.html','https://www.amazon.com/s?k=thinking+with+type','https://indesignsecrets.com']},
    'digital': {emoji:'🖥️',name:'Designer digital',desc:'Cria visuais para redes sociais, sites e campanhas.',detail:'Um designer digital vive no mundo dos píxeis. Fazes banners, posts, stories, landing pages e templates de email.',start:['Figma — figma.com','Canva Pro — canva.com','Google Web Designer'],startUrls:['https://figma.com','https://canva.com','https://webdesigner.withgoogle.com']},
    'packaging': {emoji:'📦',name:'Designer de embalagem',desc:'Desenvolve embalagens do conceito à produção.',detail:'Um designer de embalagem trabalha na interseção do gráfico e do 3D. Desenvolves conceitos, crias cortes e entregas ficheiros à produção.',start:['The Dieline — thedieline.com','Adobe Illustrator + Dimension','Packaging Digest'],startUrls:['https://thedieline.com','https://adobe.com/products/illustrator.html','https://packagingdigest.com']}
  }
};

CREATIVE_L2.graphic.ar = {
  questions: [
    {t:'ما الذي يجذبك أكثر في التصميم الجرافيكي؟', o:[
      'تطوير الشعارات والهويات البصرية للعلامات التجارية','تصميم المجلات والكتب والمطبوعات المعقدة','إنشاء مرئيات لمنصات التواصل والمواقع والبنرات','تصميم العبوات — من الفكرة حتى التصميم النهائي'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'ما الذي يمكنك فعله لساعات؟', o:[
      'بناء نظام شعار: الرمز والطباعة والألوان والأنماط','العمل مع الطباعة والشبكات في تخطيطات متعددة الصفحات','إنشاء بنرات وتكييفها لتنسيقات مختلفة في Figma','تطوير نماذج عبوات ثلاثية الأبعاد وتحويلها إلى رسومات مسطحة'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'أي أداة تريد إتقانها أولاً؟', o:[
      'Adobe Illustrator — للرسومات المتجهية والشعارات','Adobe InDesign — للمنشورات متعددة الصفحات','Figma — للتصميم الرقمي ورسومات الويب','Adobe Dimension / Blender — لتصور العبوات ثلاثي الأبعاد'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'أي مشروع يثير حماسك أكثر؟', o:[
      'إعادة تصميم هوية شركة مشهورة — شعار جديد ودليل العلامة','تصميم كتاب أو مجلة من الغلاف إلى الصفحة الأخيرة','سلسلة بنرات لحملة إعلانية يراها الملايين','تصميم عبوة تقف على الرف بجانب العلامات العالمية'
    ], s:[{'brand':2},{'print':2},{'digital':2},{'packaging':2}]},
    {t:'ما الذي يلهمك؟', o:[
      'عندما يعمل الشعار بنفس الكفاءة على بطاقة العمل وعلى اللوحة الإعلانية','عندما يكون تصميم الكتاب مريحاً لدرجة أن القارئ لا يلاحظه','عندما يوقف البنر التمرير','عندما يُصوَّر التغليف ويُنشر على Instagram'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'بعد 3 سنوات تريد أن...', o:[
      'تكون مديراً فنياً لعلامة تجارية أو تفتح وكالتك الخاصة','تعمل في دار نشر أو مجلة كمدير فني','تقود التصميم الرقمي في وكالة تسويق','تتعاون مع علامات FMCG في تغليف عالمي المستوى'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]}
  ],
  roles: {
    'brand': {emoji:'🏷️',name:'مصمم/ة هوية بصرية',desc:'يطور شعارات وهويات بصرية للعلامات التجارية.',detail:'مصمم الهوية البصرية يبني الشخصية البصرية للشركة. تطور الشعار ولوحة الألوان والخطوط والأنماط ودليل العلامة.',start:['Brand New — underconsideration.com/brandnew','كتاب: Logo Design Love','Adobe Illustrator'],startUrls:['https://underconsideration.com/brandnew','https://www.amazon.com/s?k=logo+design+love','https://adobe.com/products/illustrator.html']},
    'print': {emoji:'📰',name:'مصمم/ة مطبوعات',desc:'يصمم الكتب والمجلات والتخطيطات متعددة الصفحات.',detail:'مصمم المطبوعات يتقن الطباعة والشبكات. تعمل مع InDesign وتفهم CMYK ومعايير الطباعة.',start:['Adobe InDesign','كتاب: Thinking with Type','InDesign Secrets — indesignsecrets.com'],startUrls:['https://adobe.com/products/indesign.html','https://www.amazon.com/s?k=thinking+with+type','https://indesignsecrets.com']},
    'digital': {emoji:'🖥️',name:'مصمم/ة رقمي',desc:'يصمم مرئيات لمنصات التواصل والمواقع والحملات.',detail:'المصمم الرقمي يعيش في عالم البكسل. تصنع بنرات ومنشورات وستوريز وصفحات هبوط وقوالب بريد إلكتروني.',start:['Figma — figma.com','Canva Pro — canva.com','Google Web Designer'],startUrls:['https://figma.com','https://canva.com','https://webdesigner.withgoogle.com']},
    'packaging': {emoji:'📦',name:'مصمم/ة تغليف',desc:'يصمم التغليف من الفكرة حتى الإنتاج.',detail:'مصمم التغليف يعمل عند تقاطع الجرافيك والثلاثي الأبعاد. تطور المفاهيم وتنشئ خطوط القطع وتسلّم الملفات للإنتاج.',start:['The Dieline — thedieline.com','Adobe Illustrator + Dimension','Packaging Digest'],startUrls:['https://thedieline.com','https://adobe.com/products/illustrator.html','https://packagingdigest.com']}
  }
};

CREATIVE_L2.graphic.he = {
  questions: [
    {t:'מה מושך אותך יותר מכל בעיצוב גרפי?', o:[
      'לפתח לוגואים ואמות זהות ויזואלית למותגים','לפרוס מגזינים, ספרים וחומרי דפוס מורכבים','ליצור ויזואלים לרשתות חברתיות, אתרים ובאנרים','לעצב אריזות — מהרעיון ועד לעיצוב הסופי'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'מה אתה יכול לעשות שעות?', o:[
      'לבנות מערכת לוגו: סמל, טיפוגרפיה, צבעים, פטרנים','לעבוד עם טיפוגרפיה וגריד בפריסות רב-עמודיות','ליצור באנרים ולהתאים אותם לפורמטים שונים ב-Figma','לפתח מודלים תלת-ממדיים של אריזות ולהמיר אותם לארטוורק שטוח'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'איזה כלי אתה רוצה לשלוט בו ראשון?', o:[
      'Adobe Illustrator — לגרפיקה וקטורית ולוגואים','Adobe InDesign — לפרסומים רב-עמודיים','Figma — לעיצוב דיגיטלי וגרפיקה לוובסייט','Adobe Dimension / Blender — לויזואליזציה תלת-ממדית של אריזות'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'איזה פרויקט מרגש אותך יותר מכל?', o:[
      'ריברנדינג של חברה ידועה — לוגו חדש ומדריך מותג','עיצוב ספר או מגזין מהכריכה עד העמוד האחרון','סדרת באנרים לקמפיין שיראו אותו מיליונים','עיצוב אריזה שעומדת על המדף ליד מותגים עולמיים'
    ], s:[{'brand':2},{'print':2},{'digital':2},{'packaging':2}]},
    {t:'מה מעורר בך השראה?', o:[
      'כשלוגו עובד באותה מידה על כרטיס ביקור ועל שלט חוצות','כשפרישת ספר כל כך נוחה שהקורא לא שם לב לעיצוב','כשבאנר עוצר את הגלילה','כשאריזה מצולמת ומועלית לאינסטגרם'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'בעוד 3 שנים אתה רוצה...', o:[
      'להיות מנהל אמנותי של מותג או לפתוח סוכנות משלך','לעבוד בהוצאת ספרים או מגזין כמנהל אמנותי','להוביל את כיוון העיצוב הדיגיטלי בסוכנות שיווק','לשתף פעולה עם מותגי FMCG על אריזות ברמה עולמית'
    ], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]}
  ],
  roles: {
    'brand': {emoji:'🏷️',name:'מעצב/ת מותג',desc:'מפתח/ת לוגואים וזהות ויזואלית.',detail:'מעצב מותג בונה את הזהות הויזואלית של החברה. אתה מפתח לוגו, לוח צבעים, גופנים, פטרנים ומדריך מותג.',start:['Brand New — underconsideration.com/brandnew','ספר: Logo Design Love','Adobe Illustrator'],startUrls:['https://underconsideration.com/brandnew','https://www.amazon.com/s?k=logo+design+love','https://adobe.com/products/illustrator.html']},
    'print': {emoji:'📰',name:'מעצב/ת דפוס ועריכה',desc:'מפרס/ת ספרים, מגזינים ופריסות רב-עמודיות.',detail:'מעצב דפוס שולט בטיפוגרפיה וגריד. אתה עובד עם InDesign, מבין CMYK ותקני הדפסה.',start:['Adobe InDesign','ספר: Thinking with Type','InDesign Secrets — indesignsecrets.com'],startUrls:['https://adobe.com/products/indesign.html','https://www.amazon.com/s?k=thinking+with+type','https://indesignsecrets.com']},
    'digital': {emoji:'🖥️',name:'מעצב/ת דיגיטל',desc:'יוצר/ת ויזואלים לרשתות חברתיות, אתרים וקמפיינים.',detail:'מעצב דיגיטל חי בעולם הפיקסלים. אתה עושה באנרים, פוסטים, סטוריז, דפי נחיתה ותבניות אימייל.',start:['Figma — figma.com','Canva Pro — canva.com','Google Web Designer'],startUrls:['https://figma.com','https://canva.com','https://webdesigner.withgoogle.com']},
    'packaging': {emoji:'📦',name:'מעצב/ת אריזות',desc:'מעצב/ת אריזות מהקונספט ועד לייצור.',detail:'מעצב אריזות עובד בצומת של גרפיקה ותלת-ממד. אתה מפתח קונספטים, יוצר תבניות חיתוך ומעביר קבצים לייצור.',start:['The Dieline — thedieline.com','Adobe Illustrator + Dimension','Packaging Digest'],startUrls:['https://thedieline.com','https://adobe.com/products/illustrator.html','https://packagingdigest.com']}
  }
};

// ── ILLUSTRATOR ──────────────────────────────────────────────────────────────
CREATIVE_L2.illustrator = {};

CREATIVE_L2.illustrator.ru = {
  questions: [
    {t:'Что тебя привлекает в иллюстрации больше всего?', o:[
      'Рисовать персонажей и строить целые миры вокруг них',
      'Создавать иллюстрации для книг, журналов и редакционных материалов',
      'Делать иллюстрации для упаковки, брендов и рекламных кампаний',
      'Рисовать для игр, анимации и стриминг-платформ'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'Что ты готов делать часами?', o:[
      'Разрабатывать характер, мимику и пластику персонажа',
      'Работать над композицией и атмосферой разворота в книге',
      'Адаптировать стиль под брифы разных брендов',
      'Рисовать концепт-арт окружения и пропсов для игры'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'Какой инструмент ты хочешь освоить в первую очередь?', o:[
      'Procreate или Adobe Fresco — для цифрового рисунка',
      'Adobe Illustrator — для векторной иллюстрации',
      'Photoshop — для текстурных и смешанных техник',
      'Clip Studio Paint — для комиксов и концепт-арта'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'Что тебя вдохновляет?', o:[
      'Когда персонаж становится узнаваемым и живым',
      'Когда иллюстрация усиливает текст и становится его частью',
      'Когда рисунок на упаковке заставляет взять товар с полки',
      'Когда концепт превращается в игровой мир который видят тысячи'
    ], s:[{'character':2},{'editorial':2},{'commercial':2},{'concept':2}]},
    {t:'Какой проект ты хотел бы добавить в портфолио?', o:[
      'Серия персонажей с тёрн-арандами и листом выражений',
      'Иллюстрация к статье или обложка для журнала',
      'Упаковочная иллюстрация или рекламная кампания бренда',
      'Концепт-арт локации или набор персонажей для игры'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'Через 3 года ты хочешь...', o:[
      'Быть character-дизайнером в анимационной студии или на стриминге',
      'Работать с крупными издательствами как штатный иллюстратор',
      'Вести коммерческие проекты для мировых брендов фрилансом',
      'Попасть в геймдев-студию как концепт-художник'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]}
  ],
  roles: {
    'character': {
      emoji:'🧙', name:'Character-дизайнер',
      desc:'Создаёт персонажей для анимации, игр и стриминговых проектов.',
      detail:'Character-дизайнер придумывает и визуализирует персонажей. Ты прорабатываешь внешность, мимику, костюм и пластику. Хороший персонаж живёт даже в двух линиях — его узнают и любят.',
      start:['The Art of Character Design — YouTube','Schoolism — schoolism.com','Книга: Force: Dynamic Life Drawing'],
      startUrls:['https://youtube.com/results?search_query=character+design+tutorial','https://schoolism.com','https://www.amazon.com/s?k=force+dynamic+life+drawing']
    },
    'editorial': {
      emoji:'📖', name:'Редакционный иллюстратор',
      desc:'Рисует для книг, журналов и медиа.',
      detail:'Редакционный иллюстратор работает с издательствами и медиа. Ты создаёшь обложки, иллюстрации к статьям и детские книги. Умеешь работать с дедлайнами и адаптировать стиль под редакционный контекст.',
      start:['Society of Illustrators — societyillustrators.org','Folioart — folioart.co.uk','Behance Editorial Illustration'],
      startUrls:['https://societyillustrators.org','https://folioart.co.uk','https://behance.net/search/projects?search=editorial+illustration']
    },
    'commercial': {
      emoji:'🛍️', name:'Коммерческий иллюстратор',
      desc:'Создаёт иллюстрации для брендов, упаковки и рекламы.',
      detail:'Коммерческий иллюстратор работает с брендами и агентствами. Ты делаешь иллюстрации для упаковки, рекламных кампаний, мерча и брендинга. Умеешь читать бриф и воплощать чужое видение в своей манере.',
      start:['Dribbble — dribbble.com','The Dieline — thedieline.com','Книга: The Illustrator\'s Guide to Law and Business Practice'],
      startUrls:['https://dribbble.com','https://thedieline.com','https://www.amazon.com/s?k=illustrators+guide+law+business']
    },
    'concept': {
      emoji:'🎮', name:'Концепт-художник',
      desc:'Рисует концепт-арт для игр, кино и анимации.',
      detail:'Концепт-художник создаёт визуальный язык проекта до его производства. Ты рисуешь персонажей, окружение, транспорт и пропсы. Работаешь быстро и умеешь передавать атмосферу в скетче.',
      start:['ArtStation — artstation.com','CGMA — cgmasteracademy.com','Книга: Framed Ink (Marcos Mateu-Mestre)'],
      startUrls:['https://artstation.com','https://cgmasteracademy.com','https://www.amazon.com/s?k=framed+ink+marcos']
    }
  }
};

CREATIVE_L2.illustrator.en = {
  questions: [
    {t:'What attracts you most in illustration?', o:[
      'Drawing characters and building entire worlds around them',
      'Creating illustrations for books, magazines, and editorial content',
      'Making illustrations for packaging, brands, and ad campaigns',
      'Drawing for games, animation, and streaming platforms'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'What could you do for hours?', o:[
      'Developing a character\'s look, expressions, and body language',
      'Working on composition and atmosphere in a book spread',
      'Adapting your style to different brand briefs',
      'Drawing concept art of environments and props for a game'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'Which tool do you want to master first?', o:[
      'Procreate or Adobe Fresco — for digital drawing',
      'Adobe Illustrator — for vector illustration',
      'Photoshop — for textured and mixed-media techniques',
      'Clip Studio Paint — for comics and concept art'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'What inspires you?', o:[
      'When a character feels alive and recognizable',
      'When an illustration strengthens the text and becomes part of it',
      'When packaging art makes someone pick up a product from the shelf',
      'When a concept becomes a game world thousands of people explore'
    ], s:[{'character':2},{'editorial':2},{'commercial':2},{'concept':2}]},
    {t:'Which project would you add to your portfolio?', o:[
      'A character series with turnarounds and expression sheets',
      'An editorial illustration or magazine cover',
      'A packaging illustration or brand campaign',
      'Concept art of a location or character set for a game'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'In 3 years you want to...', o:[
      'Be a character designer at an animation studio or streaming service',
      'Work with major publishers as a staff illustrator',
      'Run commercial freelance projects for global brands',
      'Join a game studio as a concept artist'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]}
  ],
  roles: {
    'character': {emoji:'🧙',name:'Character Designer',desc:'Creates characters for animation, games, and streaming projects.',detail:'A character designer invents and visualizes characters. You develop appearance, expressions, costume, and movement. A great character is recognizable even in two lines.',start:['The Art of Character Design — YouTube','Schoolism — schoolism.com','Book: Force: Dynamic Life Drawing'],startUrls:['https://youtube.com/results?search_query=character+design+tutorial','https://schoolism.com','https://www.amazon.com/s?k=force+dynamic+life+drawing']},
    'editorial': {emoji:'📖',name:'Editorial Illustrator',desc:'Draws for books, magazines, and media.',detail:'An editorial illustrator works with publishers and media outlets. You create covers, article illustrations, and children\'s books. You can work to deadlines and adapt your style to different editorial contexts.',start:['Society of Illustrators — societyillustrators.org','Folioart — folioart.co.uk','Behance Editorial Illustration'],startUrls:['https://societyillustrators.org','https://folioart.co.uk','https://behance.net/search/projects?search=editorial+illustration']},
    'commercial': {emoji:'🛍️',name:'Commercial Illustrator',desc:'Creates illustrations for brands, packaging, and advertising.',detail:'A commercial illustrator works with brands and agencies. You make illustrations for packaging, ad campaigns, merch, and branding. You can read a brief and bring someone else\'s vision to life in your style.',start:['Dribbble — dribbble.com','The Dieline — thedieline.com','Book: The Illustrator\'s Guide to Law and Business Practice'],startUrls:['https://dribbble.com','https://thedieline.com','https://www.amazon.com/s?k=illustrators+guide+law+business']},
    'concept': {emoji:'🎮',name:'Concept Artist',desc:'Draws concept art for games, film, and animation.',detail:'A concept artist creates the visual language of a project before production. You draw characters, environments, vehicles, and props. You work fast and convey atmosphere in a sketch.',start:['ArtStation — artstation.com','CGMA — cgmasteracademy.com','Book: Framed Ink (Marcos Mateu-Mestre)'],startUrls:['https://artstation.com','https://cgmasteracademy.com','https://www.amazon.com/s?k=framed+ink+marcos']}
  }
};

CREATIVE_L2.illustrator.de = {
  questions: [
    {t:'Was interessiert dich an der Illustration am meisten?', o:[
      'Charaktere zeichnen und ganze Welten um sie herum aufbauen','Illustrationen für Bücher, Magazine und redaktionelle Inhalte erstellen','Illustrationen für Verpackungen, Marken und Werbekampagnen gestalten','Für Spiele, Animation und Streaming-Plattformen zeichnen'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'Was könntest du stundenlang tun?', o:[
      'Aussehen, Mimik und Körpersprache eines Charakters entwickeln','An Komposition und Atmosphäre einer Buchseite arbeiten','Deinen Stil an verschiedene Marken-Briefs anpassen','Konzeptkunst von Umgebungen und Requisiten für ein Spiel zeichnen'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'Welches Tool möchtest du zuerst meistern?', o:[
      'Procreate oder Adobe Fresco — für digitales Zeichnen','Adobe Illustrator — für Vektorillustration','Photoshop — für Textur- und Mixed-Media-Techniken','Clip Studio Paint — für Comics und Konzeptkunst'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'Was inspiriert dich?', o:[
      'Wenn ein Charakter lebendig und unverwechselbar wirkt','Wenn eine Illustration den Text stärkt und Teil davon wird','Wenn das Packaging-Artwork dazu bringt ein Produkt aus dem Regal zu nehmen','Wenn ein Konzept zu einer Spielwelt wird die Tausende erkunden'
    ], s:[{'character':2},{'editorial':2},{'commercial':2},{'concept':2}]},
    {t:'Welches Projekt würdest du ins Portfolio aufnehmen?', o:[
      'Eine Charakterserie mit Turnarounds und Ausdrucksblättern','Eine redaktionelle Illustration oder ein Magazin-Cover','Eine Verpackungsillustration oder Markenkampagne','Konzeptkunst eines Levels oder Charaktersets für ein Spiel'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'In 3 Jahren möchtest du...', o:[
      'Character Designer in einem Animationsstudio oder bei einem Streaming-Dienst sein','Mit großen Verlagen als fester Illustrator zusammenarbeiten','Kommerzielle Freelance-Projekte für globale Marken leiten','Als Concept Artist in ein Spielestudio einsteigen'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]}
  ],
  roles: {
    'character': {emoji:'🧙',name:'Character Designer/in',desc:'Erstellt Charaktere für Animation, Spiele und Streaming.',detail:'Ein Character Designer erfindet und visualisiert Charaktere. Du entwickelst Aussehen, Mimik, Kostüm und Bewegung.',start:['The Art of Character Design — YouTube','Schoolism — schoolism.com','Buch: Force: Dynamic Life Drawing'],startUrls:['https://youtube.com/results?search_query=character+design+tutorial','https://schoolism.com','https://www.amazon.com/s?k=force+dynamic+life+drawing']},
    'editorial': {emoji:'📖',name:'Redaktionelle/r Illustrator/in',desc:'Zeichnet für Bücher, Magazine und Medien.',detail:'Ein redaktioneller Illustrator arbeitet mit Verlagen und Medien. Du erstellst Titelbilder, Artikelillustrationen und Kinderbücher.',start:['Society of Illustrators — societyillustrators.org','Folioart — folioart.co.uk','Behance Editorial Illustration'],startUrls:['https://societyillustrators.org','https://folioart.co.uk','https://behance.net/search/projects?search=editorial+illustration']},
    'commercial': {emoji:'🛍️',name:'Kommerzielle/r Illustrator/in',desc:'Erstellt Illustrationen für Marken, Verpackungen und Werbung.',detail:'Ein kommerzieller Illustrator arbeitet mit Marken und Agenturen. Du machst Illustrationen für Verpackungen, Werbekampagnen und Branding.',start:['Dribbble — dribbble.com','The Dieline — thedieline.com','Buch: The Illustrator\'s Guide to Law and Business Practice'],startUrls:['https://dribbble.com','https://thedieline.com','https://www.amazon.com/s?k=illustrators+guide+law+business']},
    'concept': {emoji:'🎮',name:'Concept Artist/in',desc:'Zeichnet Konzeptkunst für Spiele, Film und Animation.',detail:'Ein Concept Artist schafft die visuelle Sprache eines Projekts vor der Produktion. Du zeichnest Charaktere, Umgebungen und Requisiten.',start:['ArtStation — artstation.com','CGMA — cgmasteracademy.com','Buch: Framed Ink (Marcos Mateu-Mestre)'],startUrls:['https://artstation.com','https://cgmasteracademy.com','https://www.amazon.com/s?k=framed+ink+marcos']}
  }
};

CREATIVE_L2.illustrator.fr = {
  questions: [
    {t:'Qu\'est-ce qui t\'attire le plus dans l\'illustration ?', o:[
      'Dessiner des personnages et construire des univers entiers autour d\'eux','Créer des illustrations pour des livres, magazines et contenus éditoriaux','Faire des illustrations pour des emballages, marques et campagnes pub','Dessiner pour des jeux vidéo, l\'animation et les plateformes streaming'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'Que pourrais-tu faire pendant des heures ?', o:[
      'Développer l\'apparence, les expressions et le langage corporel d\'un personnage','Travailler sur la composition et l\'atmosphère d\'une double page de livre','Adapter ton style à différents briefs de marques','Dessiner du concept art d\'environnements et d\'accessoires pour un jeu'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'Quel outil veux-tu maîtriser en premier ?', o:[
      'Procreate ou Adobe Fresco — pour le dessin numérique','Adobe Illustrator — pour l\'illustration vectorielle','Photoshop — pour les techniques texturées et mixtes','Clip Studio Paint — pour la BD et le concept art'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'Qu\'est-ce qui t\'inspire ?', o:[
      'Quand un personnage semble vivant et reconnaissable','Quand une illustration renforce le texte et en fait partie','Quand l\'art d\'une emballage pousse à prendre le produit en rayon','Quand un concept devient un monde de jeu que des milliers explorent'
    ], s:[{'character':2},{'editorial':2},{'commercial':2},{'concept':2}]},
    {t:'Quel projet ajouterais-tu à ton portfolio ?', o:[
      'Une série de personnages avec tournarounds et planches d\'expressions','Une illustration éditoriale ou une couverture de magazine','Une illustration de packaging ou une campagne de marque','Du concept art d\'un niveau ou d\'un ensemble de personnages pour un jeu'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'Dans 3 ans tu veux...', o:[
      'Être character designer dans un studio d\'animation ou une plateforme streaming','Travailler avec de grands éditeurs comme illustrateur attitré','Gérer des projets commerciaux freelance pour des marques mondiales','Rejoindre un studio de jeux vidéo comme concept artist'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]}
  ],
  roles: {
    'character': {emoji:'🧙',name:'Character designer',desc:'Crée des personnages pour l\'animation, les jeux et le streaming.',detail:'Un character designer invente et visualise des personnages. Tu développes l\'apparence, les expressions, le costume et les mouvements.',start:['The Art of Character Design — YouTube','Schoolism — schoolism.com','Livre: Force: Dynamic Life Drawing'],startUrls:['https://youtube.com/results?search_query=character+design+tutorial','https://schoolism.com','https://www.amazon.com/s?k=force+dynamic+life+drawing']},
    'editorial': {emoji:'📖',name:'Illustrateur/trice éditorial/e',desc:'Dessine pour des livres, magazines et médias.',detail:'Un illustrateur éditorial travaille avec des éditeurs et des médias. Tu crées des couvertures, des illustrations d\'articles et des livres pour enfants.',start:['Society of Illustrators — societyillustrators.org','Folioart — folioart.co.uk','Behance Editorial Illustration'],startUrls:['https://societyillustrators.org','https://folioart.co.uk','https://behance.net/search/projects?search=editorial+illustration']},
    'commercial': {emoji:'🛍️',name:'Illustrateur/trice commercial/e',desc:'Crée des illustrations pour des marques, emballages et publicités.',detail:'Un illustrateur commercial travaille avec des marques et des agences. Tu fais des illustrations pour des emballages, campagnes pub et branding.',start:['Dribbble — dribbble.com','The Dieline — thedieline.com','Livre: The Illustrator\'s Guide to Law and Business Practice'],startUrls:['https://dribbble.com','https://thedieline.com','https://www.amazon.com/s?k=illustrators+guide+law+business']},
    'concept': {emoji:'🎮',name:'Concept artist',desc:'Dessine du concept art pour les jeux, le cinéma et l\'animation.',detail:'Un concept artist crée le langage visuel d\'un projet avant la production. Tu dessines personnages, environnements et accessoires rapidement.',start:['ArtStation — artstation.com','CGMA — cgmasteracademy.com','Livre: Framed Ink (Marcos Mateu-Mestre)'],startUrls:['https://artstation.com','https://cgmasteracademy.com','https://www.amazon.com/s?k=framed+ink+marcos']}
  }
};

CREATIVE_L2.illustrator.es = {
  questions: [
    {t:'¿Qué te atrae más de la ilustración?', o:[
      'Dibujar personajes y construir mundos enteros a su alrededor','Crear ilustraciones para libros, revistas y contenido editorial','Hacer ilustraciones para packaging, marcas y campañas publicitarias','Dibujar para videojuegos, animación y plataformas de streaming'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'¿Qué podrías hacer durante horas?', o:[
      'Desarrollar el aspecto, las expresiones y el lenguaje corporal de un personaje','Trabajar en la composición y atmósfera de una doble página de libro','Adaptar tu estilo a distintos briefs de marcas','Dibujar concept art de entornos y props para un videojuego'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'¿Qué herramienta quieres dominar primero?', o:[
      'Procreate o Adobe Fresco — para dibujo digital','Adobe Illustrator — para ilustración vectorial','Photoshop — para técnicas con texturas y mixtas','Clip Studio Paint — para cómic y concept art'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'¿Qué te inspira?', o:[
      'Cuando un personaje parece vivo y reconocible','Cuando una ilustración refuerza el texto y forma parte de él','Cuando el arte de un envase hace que alguien coja el producto del estante','Cuando un concepto se convierte en un mundo de juego que miles exploran'
    ], s:[{'character':2},{'editorial':2},{'commercial':2},{'concept':2}]},
    {t:'¿Qué proyecto añadirías a tu portfolio?', o:[
      'Una serie de personajes con turnarounds y hojas de expresiones','Una ilustración editorial o portada de revista','Una ilustración de packaging o campaña de marca','Concept art de una localización o set de personajes para un juego'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'En 3 años quieres...', o:[
      'Ser character designer en un estudio de animación o plataforma streaming','Trabajar con grandes editoriales como ilustrador/a fijo/a','Gestionar proyectos comerciales freelance para marcas globales','Unirte a un estudio de videojuegos como concept artist'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]}
  ],
  roles: {
    'character': {emoji:'🧙',name:'Diseñador/a de personajes',desc:'Crea personajes para animación, videojuegos y streaming.',detail:'Un diseñador de personajes inventa y visualiza personajes. Desarrollas el aspecto, expresiones, vestuario y movimiento.',start:['The Art of Character Design — YouTube','Schoolism — schoolism.com','Libro: Force: Dynamic Life Drawing'],startUrls:['https://youtube.com/results?search_query=character+design+tutorial','https://schoolism.com','https://www.amazon.com/s?k=force+dynamic+life+drawing']},
    'editorial': {emoji:'📖',name:'Ilustrador/a editorial',desc:'Dibuja para libros, revistas y medios.',detail:'Un ilustrador editorial trabaja con editoriales y medios. Creas portadas, ilustraciones de artículos y libros infantiles.',start:['Society of Illustrators — societyillustrators.org','Folioart — folioart.co.uk','Behance Editorial Illustration'],startUrls:['https://societyillustrators.org','https://folioart.co.uk','https://behance.net/search/projects?search=editorial+illustration']},
    'commercial': {emoji:'🛍️',name:'Ilustrador/a comercial',desc:'Crea ilustraciones para marcas, packaging y publicidad.',detail:'Un ilustrador comercial trabaja con marcas y agencias. Haces ilustraciones para packaging, campañas y branding.',start:['Dribbble — dribbble.com','The Dieline — thedieline.com','Libro: The Illustrator\'s Guide to Law and Business Practice'],startUrls:['https://dribbble.com','https://thedieline.com','https://www.amazon.com/s?k=illustrators+guide+law+business']},
    'concept': {emoji:'🎮',name:'Concept artist',desc:'Dibuja concept art para videojuegos, cine y animación.',detail:'Un concept artist crea el lenguaje visual de un proyecto antes de la producción. Dibujas personajes, entornos y props rápidamente.',start:['ArtStation — artstation.com','CGMA — cgmasteracademy.com','Libro: Framed Ink (Marcos Mateu-Mestre)'],startUrls:['https://artstation.com','https://cgmasteracademy.com','https://www.amazon.com/s?k=framed+ink+marcos']}
  }
};

CREATIVE_L2.illustrator.pt = {
  questions: [
    {t:'O que te atrai mais na ilustração?', o:[
      'Desenhar personagens e construir mundos inteiros à sua volta','Criar ilustrações para livros, revistas e conteúdo editorial','Fazer ilustrações para embalagens, marcas e campanhas publicitárias','Desenhar para jogos, animação e plataformas de streaming'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'O que podes fazer durante horas?', o:[
      'Desenvolver o aspeto, expressões e linguagem corporal de um personagem','Trabalhar na composição e atmosfera de uma página dupla de livro','Adaptar o teu estilo a diferentes briefs de marcas','Desenhar concept art de ambientes e adereços para um jogo'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'Qual ferramenta queres dominar primeiro?', o:[
      'Procreate ou Adobe Fresco — para desenho digital','Adobe Illustrator — para ilustração vetorial','Photoshop — para técnicas com texturas e mistas','Clip Studio Paint — para banda desenhada e concept art'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'O que te inspira?', o:[
      'Quando um personagem parece vivo e reconhecível','Quando uma ilustração reforça o texto e faz parte dele','Quando a arte de uma embalagem faz alguém pegar no produto da prateleira','Quando um conceito se torna um mundo de jogo que milhares exploram'
    ], s:[{'character':2},{'editorial':2},{'commercial':2},{'concept':2}]},
    {t:'Que projeto adicionarias ao teu portfólio?', o:[
      'Uma série de personagens com turnarounds e folhas de expressões','Uma ilustração editorial ou capa de revista','Uma ilustração de embalagem ou campanha de marca','Concept art de uma localização ou set de personagens para um jogo'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'Em 3 anos queres...', o:[
      'Ser character designer num estúdio de animação ou plataforma streaming','Trabalhar com grandes editoras como ilustrador/a fixo/a','Gerir projetos comerciais freelance para marcas globais','Entrar num estúdio de jogos como concept artist'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]}
  ],
  roles: {
    'character': {emoji:'🧙',name:'Designer de personagens',desc:'Cria personagens para animação, jogos e streaming.',detail:'Um designer de personagens inventa e visualiza personagens. Desenvolves aspeto, expressões, figurino e movimento.',start:['The Art of Character Design — YouTube','Schoolism — schoolism.com','Livro: Force: Dynamic Life Drawing'],startUrls:['https://youtube.com/results?search_query=character+design+tutorial','https://schoolism.com','https://www.amazon.com/s?k=force+dynamic+life+drawing']},
    'editorial': {emoji:'📖',name:'Ilustrador/a editorial',desc:'Desenha para livros, revistas e media.',detail:'Um ilustrador editorial trabalha com editoras e media. Crias capas, ilustrações de artigos e livros infantis.',start:['Society of Illustrators — societyillustrators.org','Folioart — folioart.co.uk','Behance Editorial Illustration'],startUrls:['https://societyillustrators.org','https://folioart.co.uk','https://behance.net/search/projects?search=editorial+illustration']},
    'commercial': {emoji:'🛍️',name:'Ilustrador/a comercial',desc:'Cria ilustrações para marcas, embalagens e publicidade.',detail:'Um ilustrador comercial trabalha com marcas e agências. Fazes ilustrações para embalagens, campanhas e branding.',start:['Dribbble — dribbble.com','The Dieline — thedieline.com','Livro: The Illustrator\'s Guide to Law and Business Practice'],startUrls:['https://dribbble.com','https://thedieline.com','https://www.amazon.com/s?k=illustrators+guide+law+business']},
    'concept': {emoji:'🎮',name:'Concept artist',desc:'Desenha concept art para jogos, cinema e animação.',detail:'Um concept artist cria a linguagem visual de um projeto antes da produção. Desenhas personagens, ambientes e adereços rapidamente.',start:['ArtStation — artstation.com','CGMA — cgmasteracademy.com','Livro: Framed Ink (Marcos Mateu-Mestre)'],startUrls:['https://artstation.com','https://cgmasteracademy.com','https://www.amazon.com/s?k=framed+ink+marcos']}
  }
};

CREATIVE_L2.illustrator.ar = {
  questions: [
    {t:'ما الذي يجذبك أكثر في الرسم التوضيحي؟', o:[
      'رسم الشخصيات وبناء عوالم كاملة من حولها','إنشاء رسوم توضيحية للكتب والمجلات والمحتوى التحريري','صنع رسوم توضيحية للعبوات والعلامات التجارية والحملات الإعلانية','الرسم للألعاب والرسوم المتحركة ومنصات البث'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'ما الذي يمكنك فعله لساعات؟', o:[
      'تطوير مظهر الشخصية وتعبيراتها ولغة جسدها','العمل على التكوين والأجواء في صفحة كتاب مزدوجة','تكييف أسلوبك مع مختلف توجيهات العلامات التجارية','رسم فن مفاهيمي للبيئات والإكسسوارات لعبة ما'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'أي أداة تريد إتقانها أولاً؟', o:[
      'Procreate أو Adobe Fresco — للرسم الرقمي','Adobe Illustrator — للرسم التوضيحي المتجهي','Photoshop — لتقنيات الملمس والوسائط المختلطة','Clip Studio Paint — للكوميكس والفن المفاهيمي'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'ما الذي يلهمك؟', o:[
      'عندما تبدو الشخصية حية ومميزة','عندما يعزز الرسم النص ويصبح جزءاً منه','عندما يجعل فن التغليف شخصاً ما يمد يده لأخذ المنتج من الرف','عندما يتحول المفهوم إلى عالم لعبة يستكشفه الآلاف'
    ], s:[{'character':2},{'editorial':2},{'commercial':2},{'concept':2}]},
    {t:'أي مشروع ستضيفه إلى معرض أعمالك؟', o:[
      'سلسلة شخصيات مع مناظير متعددة وأوراق التعابير','رسم توضيحي تحريري أو غلاف مجلة','رسم توضيحي للتغليف أو حملة علامة تجارية','فن مفاهيمي لموقع لعبة أو مجموعة شخصيات'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'بعد 3 سنوات تريد أن...', o:[
      'تكون مصمم شخصيات في استوديو رسوم متحركة أو منصة بث','تعمل مع دور نشر كبرى كمصوّر ثابت','تدير مشاريع تجارية حرة للعلامات العالمية','تنضم إلى استوديو ألعاب كفنان مفاهيمي'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]}
  ],
  roles: {
    'character': {emoji:'🧙',name:'مصمم/ة شخصيات',desc:'يصمم شخصيات للرسوم المتحركة والألعاب ومنصات البث.',detail:'مصمم الشخصيات يخترع ويجسّد الشخصيات. تطور المظهر والتعابير والأزياء والحركة.',start:['The Art of Character Design — YouTube','Schoolism — schoolism.com','كتاب: Force: Dynamic Life Drawing'],startUrls:['https://youtube.com/results?search_query=character+design+tutorial','https://schoolism.com','https://www.amazon.com/s?k=force+dynamic+life+drawing']},
    'editorial': {emoji:'📖',name:'رسام/ة توضيحي تحريري',desc:'يرسم للكتب والمجلات ووسائل الإعلام.',detail:'الرسام التوضيحي التحريري يعمل مع الناشرين والإعلام. تصنع الأغلفة والرسوم التوضيحية للمقالات وكتب الأطفال.',start:['Society of Illustrators — societyillustrators.org','Folioart — folioart.co.uk','Behance Editorial Illustration'],startUrls:['https://societyillustrators.org','https://folioart.co.uk','https://behance.net/search/projects?search=editorial+illustration']},
    'commercial': {emoji:'🛍️',name:'رسام/ة توضيحي تجاري',desc:'يصنع رسوماً توضيحية للعلامات والتغليف والإعلانات.',detail:'الرسام التوضيحي التجاري يعمل مع العلامات التجارية والوكالات. تصنع رسوماً للعبوات والحملات والعلامة التجارية.',start:['Dribbble — dribbble.com','The Dieline — thedieline.com','كتاب: دليل الرسام للقانون والأعمال'],startUrls:['https://dribbble.com','https://thedieline.com','https://www.amazon.com/s?k=illustrators+guide+law+business']},
    'concept': {emoji:'🎮',name:'فنان/ة مفاهيمي/ة',desc:'يرسم فناً مفاهيمياً للألعاب والسينما والرسوم المتحركة.',detail:'الفنان المفاهيمي يخلق اللغة البصرية لمشروع قبل الإنتاج. تلتقط الشخصيات والبيئات بسرعة.',start:['ArtStation — artstation.com','CGMA — cgmasteracademy.com','كتاب: Framed Ink'],startUrls:['https://artstation.com','https://cgmasteracademy.com','https://www.amazon.com/s?k=framed+ink+marcos']}
  }
};

CREATIVE_L2.illustrator.he = {
  questions: [
    {t:'מה מושך אותך יותר מכל באיור?', o:[
      'לצייר דמויות ולבנות עולמות שלמים סביבן','ליצור איורים לספרים, מגזינים ותוכן עריכתי','לעשות איורים לאריזות, מותגים וקמפיינים פרסומיים','לצייר למשחקים, אנימציה ופלטפורמות סטרימינג'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'מה אתה יכול לעשות שעות?', o:[
      'לפתח את המראה, הבעות הפנים ושפת הגוף של דמות','לעבוד על קומפוזיציה ואטמוספרה בפריסת ספר','להתאים את הסגנון שלך לבריפים שונים של מותגים','לצייר concept art של סביבות ופריטים למשחק'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'איזה כלי אתה רוצה לשלוט בו ראשון?', o:[
      'Procreate או Adobe Fresco — לציור דיגיטלי','Adobe Illustrator — לאיור וקטורי','Photoshop — לטכניקות טקסטורה ומדיה מעורבת','Clip Studio Paint — לקומיקס ו-concept art'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'מה מעורר בך השראה?', o:[
      'כשדמות נראית חיה ומוכרת','כשאיור מחזק את הטקסט והופך לחלק ממנו','כשאמנות האריזה גורמת למישהו לקחת מוצר מהמדף','כשקונספט הופך לעולם משחק שאלפים מגלים'
    ], s:[{'character':2},{'editorial':2},{'commercial':2},{'concept':2}]},
    {t:'איזה פרויקט תוסיף לפורטפוליו שלך?', o:[
      'סדרת דמויות עם טרן-אראונדים וגיליונות הבעות','איור עריכתי או כריכת מגזין','איור לאריזה או קמפיין מותג','Concept art של לוקיישן או סט דמויות למשחק'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'בעוד 3 שנים אתה רוצה...', o:[
      'להיות מעצב דמויות באולפן אנימציה או פלטפורמת סטרימינג','לעבוד עם הוצאות ספרים גדולות כמאייר קבוע','לנהל פרויקטים מסחריים פרילנס למותגים עולמיים','להצטרף לאולפן משחקים כאמן קונספט'
    ], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]}
  ],
  roles: {
    'character': {emoji:'🧙',name:'מעצב/ת דמויות',desc:'יוצר/ת דמויות לאנימציה, משחקים וסטרימינג.',detail:'מעצב דמויות ממציא ומדמיין דמויות. אתה מפתח מראה, הבעות, תלבושת ותנועה.',start:['The Art of Character Design — YouTube','Schoolism — schoolism.com','ספר: Force: Dynamic Life Drawing'],startUrls:['https://youtube.com/results?search_query=character+design+tutorial','https://schoolism.com','https://www.amazon.com/s?k=force+dynamic+life+drawing']},
    'editorial': {emoji:'📖',name:'מאייר/ת עריכתי/ת',desc:'מצייר/ת לספרים, מגזינים ומדיה.',detail:'מאייר עריכתי עובד עם הוצאות ומדיה. אתה יוצר כריכות, איורים למאמרים וספרי ילדים.',start:['Society of Illustrators — societyillustrators.org','Folioart — folioart.co.uk','Behance Editorial Illustration'],startUrls:['https://societyillustrators.org','https://folioart.co.uk','https://behance.net/search/projects?search=editorial+illustration']},
    'commercial': {emoji:'🛍️',name:'מאייר/ת מסחרי/ת',desc:'יוצר/ת איורים למותגים, אריזות ופרסום.',detail:'מאייר מסחרי עובד עם מותגים וסוכנויות. אתה עושה איורים לאריזות, קמפיינים ומיתוג.',start:['Dribbble — dribbble.com','The Dieline — thedieline.com','ספר: The Illustrator\'s Guide to Law and Business Practice'],startUrls:['https://dribbble.com','https://thedieline.com','https://www.amazon.com/s?k=illustrators+guide+law+business']},
    'concept': {emoji:'🎮',name:'אמן/ית קונספט',desc:'מצייר/ת concept art למשחקים, קולנוע ואנימציה.',detail:'אמן קונספט יוצר את השפה הויזואלית של פרויקט לפני הייצור. אתה מצייר דמויות, סביבות ופריטים במהירות.',start:['ArtStation — artstation.com','CGMA — cgmasteracademy.com','ספר: Framed Ink (Marcos Mateu-Mestre)'],startUrls:['https://artstation.com','https://cgmasteracademy.com','https://www.amazon.com/s?k=framed+ink+marcos']}
  }
};

// ── PHOTOGRAPHER ─────────────────────────────────────────────────────────────
CREATIVE_L2.photo = {};

CREATIVE_L2.photo.ru = {
  questions: [
    {t:'Что тебя привлекает в фотографии больше всего?', o:[
      'Снимать людей — портреты, эмоции, истории',
      'Работать с брендами: снимать товары, еду и рекламные кампании',
      'Документировать события — репортаж, новости, социальные темы',
      'Снимать природу, пейзажи и абстракцию'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'Что ты готов делать часами?', o:[
      'Искать свет и угол для идеального портрета',
      'Выстраивать предметную съёмку в студии с нуля',
      'Быть в гуще событий и ловить решающий момент',
      'Ждать нужного освещения на рассвете или закате'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'Какой инструмент ты хочешь освоить в первую очередь?', o:[
      'Adobe Lightroom — для обработки и управления портфолио',
      'Adobe Photoshop — для сложного ретуша и коммерческой обработки',
      'Capture One — для профессионального цветокора',
      'Luminar Neo — для пейзажной обработки'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'Что тебя вдохновляет?', o:[
      'Когда снимок передаёт характер человека с первого взгляда',
      'Когда фотография продукта делает его желанным',
      'Когда один кадр рассказывает целую историю без слов',
      'Когда пейзаж захватывает дух и хочется оказаться там'
    ], s:[{'portrait':2},{'commercial':2},{'reportage':2},{'landscape':2}]},
    {t:'Какой проект ты хотел бы добавить в портфолио?', o:[
      'Серия портретов которая раскрывает характер через свет и взгляд',
      'Коммерческая съёмка продукта или рекламная кампания бренда',
      'Фоторепортаж о событии или социальной теме',
      'Серия пейзажей снятая в разных локациях и условиях'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'Через 3 года ты хочешь...', o:[
      'Быть востребованным портретным или свадебным фотографом',
      'Снимать для крупных брендов и рекламных агентств',
      'Публиковаться в медиа и работать фотожурналистом',
      'Выставляться в галереях и продавать авторские принты'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]}
  ],
  roles: {
    'portrait': {
      emoji:'🤳', name:'Портретный фотограф',
      desc:'Снимает людей: портреты, свадьбы, корпоративные съёмки.',
      detail:'Портретный фотограф умеет раскрыть человека через кадр. Ты работаешь со светом, позой, взглядом и эмоцией. Снимаешь портреты, свадьбы, семьи, корпоративные и lifestyle-проекты.',
      start:['Peter Hurley — peterhurley.com','Портретная фотография — YouTube','Adobe Lightroom — adobe.com/lightroom'],
      startUrls:['https://peterhurley.com','https://youtube.com/results?search_query=portrait+photography+tutorial','https://adobe.com/products/photoshop-lightroom.html']
    },
    'commercial': {
      emoji:'📦', name:'Коммерческий фотограф',
      desc:'Снимает продукты, еду и рекламный контент для брендов.',
      detail:'Коммерческий фотограф работает с бизнесом. Ты снимаешь предметку, еду, fashion и рекламные кампании. Умеешь организовать студийный свет, работать с командой и соблюдать брифы клиентов.',
      start:['Karl Taylor Education — karltayloreducation.com','The Bite Shot (food) — youtube.com','Photigy — photigy.com'],
      startUrls:['https://karltayloreducation.com','https://youtube.com/@thebiteshoteducation','https://photigy.com']
    },
    'reportage': {
      emoji:'📰', name:'Фотожурналист',
      desc:'Документирует события, истории и социальные темы.',
      detail:'Фотожурналист фиксирует реальность. Ты работаешь быстро, умеешь быть незаметным и поймать решающий момент. Публикуешься в медиа, новостных агентствах или ведёшь документальные проекты.',
      start:['World Press Photo — worldpressphoto.org','Magnum Photos — magnumphotos.com','Книга: The Decisive Moment — Картье-Брессон'],
      startUrls:['https://worldpressphoto.org','https://magnumphotos.com','https://www.amazon.com/s?k=decisive+moment+cartier+bresson']
    },
    'landscape': {
      emoji:'🏔️', name:'Пейзажный фотограф',
      desc:'Снимает природу, пейзажи и авторские проекты.',
      detail:'Пейзажный фотограф охотится за светом и моментом в природе. Ты планируешь съёмки по погоде и расположению солнца, умеешь обрабатывать в Lightroom и Luminar. Продаёшь принты или лицензируешь фото стокам.',
      start:['Thomas Heaton — YouTube','PhotoPills — photopills.com','500px — 500px.com'],
      startUrls:['https://youtube.com/@ThomasHeatonPhotography','https://photopills.com','https://500px.com']
    }
  }
};

CREATIVE_L2.photo.en = {
  questions: [
    {t:'What attracts you most in photography?', o:[
      'Photographing people — portraits, emotions, stories',
      'Working with brands: products, food, and ad campaigns',
      'Documenting events — reportage, news, social issues',
      'Shooting nature, landscapes, and abstract subjects'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'What could you do for hours?', o:[
      'Finding the right light and angle for the perfect portrait',
      'Setting up a product shoot from scratch in a studio',
      'Being in the middle of events and catching the decisive moment',
      'Waiting for the right light at dawn or dusk'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'Which tool do you want to master first?', o:[
      'Adobe Lightroom — for editing and portfolio management',
      'Adobe Photoshop — for advanced retouching and commercial work',
      'Capture One — for professional color grading',
      'Luminar Neo — for landscape post-processing'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'What inspires you?', o:[
      'When a shot captures someone\'s personality at first glance',
      'When a product photo makes it desirable',
      'When one frame tells a whole story without words',
      'When a landscape takes your breath away and makes you want to be there'
    ], s:[{'portrait':2},{'commercial':2},{'reportage':2},{'landscape':2}]},
    {t:'Which project would you add to your portfolio?', o:[
      'A portrait series that reveals character through light and gaze',
      'A commercial product shoot or brand ad campaign',
      'A photo essay about an event or social issue',
      'A landscape series shot in different locations and conditions'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'In 3 years you want to...', o:[
      'Be a sought-after portrait or wedding photographer',
      'Shoot for major brands and advertising agencies',
      'Be published in media and work as a photojournalist',
      'Exhibit in galleries and sell fine art prints'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]}
  ],
  roles: {
    'portrait': {emoji:'🤳',name:'Portrait Photographer',desc:'Photographs people: portraits, weddings, corporate shoots.',detail:'A portrait photographer reveals people through images. You work with light, pose, gaze, and emotion. You shoot portraits, weddings, families, corporate, and lifestyle projects.',start:['Peter Hurley — peterhurley.com','Portrait Photography — YouTube','Adobe Lightroom'],startUrls:['https://peterhurley.com','https://youtube.com/results?search_query=portrait+photography+tutorial','https://adobe.com/products/photoshop-lightroom.html']},
    'commercial': {emoji:'📦',name:'Commercial Photographer',desc:'Shoots products, food, and advertising content for brands.',detail:'A commercial photographer works with business clients. You shoot products, food, fashion, and ad campaigns. You know studio lighting, work with teams, and follow client briefs.',start:['Karl Taylor Education — karltayloreducation.com','The Bite Shot (food) — YouTube','Photigy — photigy.com'],startUrls:['https://karltayloreducation.com','https://youtube.com/@thebiteshoteducation','https://photigy.com']},
    'reportage': {emoji:'📰',name:'Photojournalist',desc:'Documents events, stories, and social issues.',detail:'A photojournalist captures reality. You work fast, stay unobtrusive, and catch the decisive moment. You publish in media and news agencies or pursue documentary projects.',start:['World Press Photo — worldpressphoto.org','Magnum Photos — magnumphotos.com','Book: The Decisive Moment — Cartier-Bresson'],startUrls:['https://worldpressphoto.org','https://magnumphotos.com','https://www.amazon.com/s?k=decisive+moment+cartier+bresson']},
    'landscape': {emoji:'🏔️',name:'Landscape Photographer',desc:'Shoots nature, landscapes, and fine art projects.',detail:'A landscape photographer hunts for light and moments in nature. You plan shoots by weather and sun position, edit in Lightroom and Luminar, sell prints or license to stock agencies.',start:['Thomas Heaton — YouTube','PhotoPills — photopills.com','500px — 500px.com'],startUrls:['https://youtube.com/@ThomasHeatonPhotography','https://photopills.com','https://500px.com']}
  }
};

CREATIVE_L2.photo.de = {
  questions: [
    {t:'Was interessiert dich an der Fotografie am meisten?', o:[
      'Menschen fotografieren — Porträts, Emotionen, Geschichten',
      'Mit Marken arbeiten: Produkte, Food und Werbekampagnen',
      'Ereignisse dokumentieren — Reportage, News, soziale Themen',
      'Natur, Landschaften und Abstraktes fotografieren'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'Was könntest du stundenlang tun?', o:[
      'Das richtige Licht und den idealen Winkel für ein Porträt suchen','Ein Produktshooting im Studio von Grund auf aufbauen','Mitten im Geschehen sein und den entscheidenden Moment einfangen','Auf das richtige Licht bei Sonnenauf- oder -untergang warten'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'Welches Tool möchtest du zuerst meistern?', o:[
      'Adobe Lightroom — für Bearbeitung und Portfolio-Management','Adobe Photoshop — für fortgeschrittenes Retuschieren und kommerzielle Arbeit','Capture One — für professionelles Color Grading','Luminar Neo — für Landschaftsbearbeitung'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'Was inspiriert dich?', o:[
      'Wenn ein Bild die Persönlichkeit auf den ersten Blick einfängt','Wenn ein Produktfoto es begehrenswert macht','Wenn ein einziges Bild eine ganze Geschichte erzählt','Wenn eine Landschaft den Atem verschlägt'
    ], s:[{'portrait':2},{'commercial':2},{'reportage':2},{'landscape':2}]},
    {t:'Welches Projekt würdest du ins Portfolio aufnehmen?', o:[
      'Eine Porträtserie die Charakter durch Licht und Blick zeigt','Ein kommerzielles Produktshooting oder eine Markenkampagne','Eine Fotoreportage über ein Ereignis oder ein soziales Thema','Eine Landschaftsserie aus verschiedenen Orten und Lichtverhältnissen'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'In 3 Jahren möchtest du...', o:[
      'Ein gefragter Porträt- oder Hochzeitsfotograf sein','Für große Marken und Werbeagenturen fotografieren','In Medien veröffentlichen und als Fotojournalist arbeiten','In Galerien ausstellen und Kunstdrucke verkaufen'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]}
  ],
  roles: {
    'portrait': {emoji:'🤳',name:'Porträtfotograf/in',desc:'Fotografiert Menschen: Porträts, Hochzeiten, Firmenshootings.',detail:'Ein Porträtfotograf enthüllt Menschen durch Bilder. Du arbeitest mit Licht, Pose, Blick und Emotion.',start:['Peter Hurley — peterhurley.com','Portrait Photography — YouTube','Adobe Lightroom'],startUrls:['https://peterhurley.com','https://youtube.com/results?search_query=portrait+photography+tutorial','https://adobe.com/products/photoshop-lightroom.html']},
    'commercial': {emoji:'📦',name:'Werbefotograf/in',desc:'Fotografiert Produkte, Food und Werbeinhalte für Marken.',detail:'Ein Werbefotograf arbeitet mit Unternehmen. Du fotografierst Produkte, Food, Fashion und Werbekampagnen.',start:['Karl Taylor Education — karltayloreducation.com','The Bite Shot — YouTube','Photigy — photigy.com'],startUrls:['https://karltayloreducation.com','https://youtube.com/@thebiteshoteducation','https://photigy.com']},
    'reportage': {emoji:'📰',name:'Fotojournalist/in',desc:'Dokumentiert Ereignisse, Geschichten und soziale Themen.',detail:'Ein Fotojournalist hält die Realität fest. Du arbeitest schnell, bleibst unauffällig und erwischst den entscheidenden Moment.',start:['World Press Photo — worldpressphoto.org','Magnum Photos — magnumphotos.com','Buch: The Decisive Moment — Cartier-Bresson'],startUrls:['https://worldpressphoto.org','https://magnumphotos.com','https://www.amazon.com/s?k=decisive+moment+cartier+bresson']},
    'landscape': {emoji:'🏔️',name:'Landschaftsfotograf/in',desc:'Fotografiert Natur, Landschaften und Fine-Art-Projekte.',detail:'Ein Landschaftsfotograf jagt Licht und Momente in der Natur. Du planst Shootings nach Wetter und Sonnenstand und verkaufst Prints oder Lizenzen.',start:['Thomas Heaton — YouTube','PhotoPills — photopills.com','500px — 500px.com'],startUrls:['https://youtube.com/@ThomasHeatonPhotography','https://photopills.com','https://500px.com']}
  }
};

CREATIVE_L2.photo.fr = {
  questions: [
    {t:'Qu\'est-ce qui t\'attire le plus dans la photographie ?', o:[
      'Photographier des personnes — portraits, émotions, histoires',
      'Travailler avec des marques : produits, food et campagnes pub',
      'Documenter des événements — reportage, actualité, sujets sociaux',
      'Photographier la nature, les paysages et l\'abstrait'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'Que pourrais-tu faire pendant des heures ?', o:[
      'Chercher la lumière et l\'angle parfaits pour un portrait','Monter un shooting produit de A à Z en studio','Être au cœur de l\'action et saisir l\'instant décisif','Attendre la bonne lumière à l\'aube ou au coucher du soleil'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'Quel outil veux-tu maîtriser en premier ?', o:[
      'Adobe Lightroom — pour le traitement et la gestion du portfolio','Adobe Photoshop — pour le retouche avancée et le travail commercial','Capture One — pour l\'étalonnage professionnel','Luminar Neo — pour le traitement des paysages'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'Qu\'est-ce qui t\'inspire ?', o:[
      'Quand une photo capture la personnalité d\'un coup d\'œil','Quand une photo de produit le rend désirable','Quand une seule image raconte toute une histoire sans mots','Quand un paysage coupe le souffle et donne envie d\'y être'
    ], s:[{'portrait':2},{'commercial':2},{'reportage':2},{'landscape':2}]},
    {t:'Quel projet ajouterais-tu à ton portfolio ?', o:[
      'Une série de portraits qui révèle le caractère par la lumière et le regard','Un shooting produit commercial ou une campagne de marque','Un reportage photo sur un événement ou un sujet social','Une série de paysages pris dans différents lieux et conditions'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'Dans 3 ans tu veux...', o:[
      'Être un photographe de portrait ou de mariage très demandé','Photographier pour de grandes marques et agences de publicité','Être publié dans les médias et travailler comme photojournaliste','Exposer en galerie et vendre des tirages d\'art'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]}
  ],
  roles: {
    'portrait': {emoji:'🤳',name:'Photographe de portrait',desc:'Photographie les personnes : portraits, mariages, shootings corporate.',detail:'Un photographe de portrait révèle les personnes à travers les images. Tu travailles avec la lumière, la pose, le regard et l\'émotion.',start:['Peter Hurley — peterhurley.com','Portrait Photography — YouTube','Adobe Lightroom'],startUrls:['https://peterhurley.com','https://youtube.com/results?search_query=portrait+photography+tutorial','https://adobe.com/products/photoshop-lightroom.html']},
    'commercial': {emoji:'📦',name:'Photographe commercial/e',desc:'Photographie produits, food et contenus publicitaires pour des marques.',detail:'Un photographe commercial travaille avec des entreprises. Tu photographies des produits, de la nourriture, de la mode et des campagnes pub.',start:['Karl Taylor Education — karltayloreducation.com','The Bite Shot — YouTube','Photigy — photigy.com'],startUrls:['https://karltayloreducation.com','https://youtube.com/@thebiteshoteducation','https://photigy.com']},
    'reportage': {emoji:'📰',name:'Photojournaliste',desc:'Documente des événements, des histoires et des sujets sociaux.',detail:'Un photojournaliste capture la réalité. Tu travailles vite, restes discret et attrapes l\'instant décisif.',start:['World Press Photo — worldpressphoto.org','Magnum Photos — magnumphotos.com','Livre: The Decisive Moment — Cartier-Bresson'],startUrls:['https://worldpressphoto.org','https://magnumphotos.com','https://www.amazon.com/s?k=decisive+moment+cartier+bresson']},
    'landscape': {emoji:'🏔️',name:'Photographe de paysage',desc:'Photographie la nature, les paysages et des projets artistiques.',detail:'Un photographe de paysage chasse la lumière et les moments dans la nature. Tu planifies les shootings selon la météo et le soleil, vends des tirages ou licencies aux banques d\'images.',start:['Thomas Heaton — YouTube','PhotoPills — photopills.com','500px — 500px.com'],startUrls:['https://youtube.com/@ThomasHeatonPhotography','https://photopills.com','https://500px.com']}
  }
};

CREATIVE_L2.photo.es = {
  questions: [
    {t:'¿Qué te atrae más de la fotografía?', o:[
      'Fotografiar personas — retratos, emociones, historias',
      'Trabajar con marcas: productos, gastronomía y campañas publicitarias',
      'Documentar eventos — reportaje, noticias, temas sociales',
      'Fotografiar la naturaleza, paisajes y lo abstracto'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'¿Qué podrías hacer durante horas?', o:[
      'Buscar la luz y el ángulo perfectos para un retrato','Montar una sesión de producto desde cero en el estudio','Estar en medio de los eventos y capturar el momento decisivo','Esperar la luz perfecta al amanecer o al atardecer'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'¿Qué herramienta quieres dominar primero?', o:[
      'Adobe Lightroom — para edición y gestión del portfolio','Adobe Photoshop — para retoque avanzado y trabajo comercial','Capture One — para corrección de color profesional','Luminar Neo — para postproducción de paisajes'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'¿Qué te inspira?', o:[
      'Cuando una foto capta la personalidad de alguien a primera vista','Cuando una foto de producto lo hace deseable','Cuando una sola imagen cuenta toda una historia sin palabras','Cuando un paisaje te corta la respiración y quieres estar allí'
    ], s:[{'portrait':2},{'commercial':2},{'reportage':2},{'landscape':2}]},
    {t:'¿Qué proyecto añadirías a tu portfolio?', o:[
      'Una serie de retratos que revele el carácter a través de la luz y la mirada','Una sesión fotográfica comercial o campaña de marca','Un reportaje fotográfico sobre un evento o tema social','Una serie de paisajes en distintas localizaciones y condiciones'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'En 3 años quieres...', o:[
      'Ser un fotógrafo de retrato o bodas muy solicitado','Fotografiar para grandes marcas y agencias de publicidad','Publicar en medios y trabajar como fotoperiodista','Exponer en galerías y vender copias de arte'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]}
  ],
  roles: {
    'portrait': {emoji:'🤳',name:'Fotógrafo/a de retratos',desc:'Fotografía personas: retratos, bodas, sesiones corporativas.',detail:'Un fotógrafo de retratos revela personas a través de imágenes. Trabajas con luz, pose, mirada y emoción.',start:['Peter Hurley — peterhurley.com','Portrait Photography — YouTube','Adobe Lightroom'],startUrls:['https://peterhurley.com','https://youtube.com/results?search_query=portrait+photography+tutorial','https://adobe.com/products/photoshop-lightroom.html']},
    'commercial': {emoji:'📦',name:'Fotógrafo/a comercial',desc:'Fotografía productos, gastronomía y contenido publicitario para marcas.',detail:'Un fotógrafo comercial trabaja con empresas. Fotografías productos, comida, moda y campañas publicitarias.',start:['Karl Taylor Education — karltayloreducation.com','The Bite Shot — YouTube','Photigy — photigy.com'],startUrls:['https://karltayloreducation.com','https://youtube.com/@thebiteshoteducation','https://photigy.com']},
    'reportage': {emoji:'📰',name:'Fotoperiodista',desc:'Documenta eventos, historias y temas sociales.',detail:'Un fotoperiodista captura la realidad. Trabajas rápido, pasas desapercibido y atrapas el momento decisivo.',start:['World Press Photo — worldpressphoto.org','Magnum Photos — magnumphotos.com','Libro: The Decisive Moment — Cartier-Bresson'],startUrls:['https://worldpressphoto.org','https://magnumphotos.com','https://www.amazon.com/s?k=decisive+moment+cartier+bresson']},
    'landscape': {emoji:'🏔️',name:'Fotógrafo/a de paisaje',desc:'Fotografía la naturaleza, paisajes y proyectos de arte.',detail:'Un fotógrafo de paisaje caza la luz y los momentos en la naturaleza. Planificas las sesiones según el tiempo y el sol, vendes copias o licencias a agencias de stock.',start:['Thomas Heaton — YouTube','PhotoPills — photopills.com','500px — 500px.com'],startUrls:['https://youtube.com/@ThomasHeatonPhotography','https://photopills.com','https://500px.com']}
  }
};

CREATIVE_L2.photo.pt = {
  questions: [
    {t:'O que te atrai mais na fotografia?', o:[
      'Fotografar pessoas — retratos, emoções, histórias',
      'Trabalhar com marcas: produtos, gastronomia e campanhas publicitárias',
      'Documentar eventos — reportagem, notícias, temas sociais',
      'Fotografar a natureza, paisagens e o abstrato'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'O que podes fazer durante horas?', o:[
      'Procurar a luz e o ângulo certos para o retrato perfeito','Montar uma sessão de produto de raiz num estúdio','Estar no meio dos acontecimentos e capturar o momento decisivo','Esperar pela luz certa ao amanhecer ou ao pôr do sol'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'Qual ferramenta queres dominar primeiro?', o:[
      'Adobe Lightroom — para edição e gestão de portfólio','Adobe Photoshop — para retoque avançado e trabalho comercial','Capture One — para gradação de cor profissional','Luminar Neo — para pós-produção de paisagens'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'O que te inspira?', o:[
      'Quando uma foto capta a personalidade de alguém à primeira vista','Quando uma foto de produto o torna desejável','Quando uma única imagem conta toda uma história sem palavras','Quando uma paisagem tira o fôlego e dás vontade de estar lá'
    ], s:[{'portrait':2},{'commercial':2},{'reportage':2},{'landscape':2}]},
    {t:'Que projeto adicionarias ao teu portfólio?', o:[
      'Uma série de retratos que revela o caráter através da luz e do olhar','Uma sessão fotográfica comercial ou campanha de marca','Uma reportagem fotográfica sobre um evento ou tema social','Uma série de paisagens em diferentes locais e condições'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'Em 3 anos queres...', o:[
      'Ser um fotógrafo de retratos ou casamentos muito procurado','Fotografar para grandes marcas e agências de publicidade','Publicar em media e trabalhar como fotojornalista','Expor em galerias e vender impressões de arte'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]}
  ],
  roles: {
    'portrait': {emoji:'🤳',name:'Fotógrafo/a de retratos',desc:'Fotografa pessoas: retratos, casamentos, sessões corporativas.',detail:'Um fotógrafo de retratos revela pessoas através de imagens. Trabalhas com luz, pose, olhar e emoção.',start:['Peter Hurley — peterhurley.com','Portrait Photography — YouTube','Adobe Lightroom'],startUrls:['https://peterhurley.com','https://youtube.com/results?search_query=portrait+photography+tutorial','https://adobe.com/products/photoshop-lightroom.html']},
    'commercial': {emoji:'📦',name:'Fotógrafo/a comercial',desc:'Fotografa produtos, gastronomia e conteúdo publicitário para marcas.',detail:'Um fotógrafo comercial trabalha com empresas. Fotografas produtos, comida, moda e campanhas publicitárias.',start:['Karl Taylor Education — karltayloreducation.com','The Bite Shot — YouTube','Photigy — photigy.com'],startUrls:['https://karltayloreducation.com','https://youtube.com/@thebiteshoteducation','https://photigy.com']},
    'reportage': {emoji:'📰',name:'Fotojornalista',desc:'Documenta eventos, histórias e temas sociais.',detail:'Um fotojornalista captura a realidade. Trabalhas rápido, passas despercebido e apanhas o momento decisivo.',start:['World Press Photo — worldpressphoto.org','Magnum Photos — magnumphotos.com','Livro: The Decisive Moment — Cartier-Bresson'],startUrls:['https://worldpressphoto.org','https://magnumphotos.com','https://www.amazon.com/s?k=decisive+moment+cartier+bresson']},
    'landscape': {emoji:'🏔️',name:'Fotógrafo/a de paisagem',desc:'Fotografa a natureza, paisagens e projetos de arte.',detail:'Um fotógrafo de paisagem caça a luz e os momentos na natureza. Planeias as sessões pelo tempo e posição do sol, vendes impressões ou licenças a agências de stock.',start:['Thomas Heaton — YouTube','PhotoPills — photopills.com','500px — 500px.com'],startUrls:['https://youtube.com/@ThomasHeatonPhotography','https://photopills.com','https://500px.com']}
  }
};

CREATIVE_L2.photo.ar = {
  questions: [
    {t:'ما الذي يجذبك أكثر في التصوير الفوتوغرافي؟', o:[
      'تصوير الناس — البورتريهات والمشاعر والقصص',
      'العمل مع العلامات التجارية: المنتجات والطعام والحملات الإعلانية',
      'توثيق الأحداث — التقارير الصحفية والأخبار والقضايا الاجتماعية',
      'تصوير الطبيعة والمناظر الطبيعية والموضوعات التجريدية'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'ما الذي يمكنك فعله لساعات؟', o:[
      'البحث عن الإضاءة والزاوية المثالية لبورتريه مثالي','إعداد جلسة تصوير منتج من الصفر في الاستوديو','أن تكون في قلب الأحداث وتلتقط اللحظة الحاسمة','انتظار الإضاءة المناسبة عند الفجر أو الغروب'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'أي أداة تريد إتقانها أولاً؟', o:[
      'Adobe Lightroom — لتحرير الصور وإدارة الملف الشخصي','Adobe Photoshop — للتعديل المتقدم والعمل التجاري','Capture One — لتصحيح الألوان الاحترافي','Luminar Neo — لمعالجة صور المناظر الطبيعية'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'ما الذي يلهمك؟', o:[
      'عندما تلتقط صورة شخصية المصوَّر للوهلة الأولى','عندما تجعل صورة المنتج مرغوباً فيه','عندما تروي صورة واحدة قصة كاملة بلا كلمات','عندما يأخذ منظر طبيعي نفسك ويجعلك تتمنى أن تكون هناك'
    ], s:[{'portrait':2},{'commercial':2},{'reportage':2},{'landscape':2}]},
    {t:'أي مشروع ستضيفه إلى معرض أعمالك؟', o:[
      'سلسلة بورتريهات تكشف الشخصية من خلال الضوء والنظرة','جلسة تصوير تجارية أو حملة علامة تجارية','تقرير صوري عن حدث أو قضية اجتماعية','سلسلة مناظر طبيعية في مواقع وظروف إضاءة مختلفة'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'بعد 3 سنوات تريد أن...', o:[
      'تكون مصوراً للبورتريهات أو الأعراس مطلوباً بشدة','تصور لكبرى العلامات التجارية ووكالات الإعلانات','تنشر في وسائل الإعلام وتعمل كمصور صحفي','تعرض في الجاليريهات وتبيع المطبوعات الفنية'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]}
  ],
  roles: {
    'portrait': {emoji:'🤳',name:'مصوّر/ة بورتريه',desc:'يصوّر الناس: البورتريهات والأعراس والجلسات المؤسسية.',detail:'مصوّر البورتريه يكشف الناس عبر الصور. تعمل مع الإضاءة والوضعية والنظرة والعاطفة.',start:['Peter Hurley — peterhurley.com','Portrait Photography — YouTube','Adobe Lightroom'],startUrls:['https://peterhurley.com','https://youtube.com/results?search_query=portrait+photography+tutorial','https://adobe.com/products/photoshop-lightroom.html']},
    'commercial': {emoji:'📦',name:'مصوّر/ة تجاري/ة',desc:'يصوّر المنتجات والطعام والمحتوى الإعلاني للعلامات التجارية.',detail:'المصوّر التجاري يعمل مع الشركات. تصوّر المنتجات والطعام والأزياء والحملات الإعلانية.',start:['Karl Taylor Education — karltayloreducation.com','The Bite Shot — YouTube','Photigy — photigy.com'],startUrls:['https://karltayloreducation.com','https://youtube.com/@thebiteshoteducation','https://photigy.com']},
    'reportage': {emoji:'📰',name:'مصوّر/ة صحفي/ة',desc:'يوثّق الأحداث والقصص والقضايا الاجتماعية.',detail:'المصوّر الصحفي يلتقط الواقع. تعمل بسرعة وتبقى غير ملحوظ وتمسك اللحظة الحاسمة.',start:['World Press Photo — worldpressphoto.org','Magnum Photos — magnumphotos.com','كتاب: The Decisive Moment — كارتييه-بريسون'],startUrls:['https://worldpressphoto.org','https://magnumphotos.com','https://www.amazon.com/s?k=decisive+moment+cartier+bresson']},
    'landscape': {emoji:'🏔️',name:'مصوّر/ة مناظر طبيعية',desc:'يصوّر الطبيعة والمناظر والمشاريع الفنية.',detail:'مصوّر المناظر الطبيعية يصطاد الضوء واللحظات في الطبيعة. تخطط الجلسات حسب الطقس وموضع الشمس وتبيع المطبوعات أو التراخيص.',start:['Thomas Heaton — YouTube','PhotoPills — photopills.com','500px — 500px.com'],startUrls:['https://youtube.com/@ThomasHeatonPhotography','https://photopills.com','https://500px.com']}
  }
};

CREATIVE_L2.photo.he = {
  questions: [
    {t:'מה מושך אותך יותר מכל בצילום?', o:[
      'לצלם אנשים — פורטרטים, רגשות, סיפורים',
      'לעבוד עם מותגים: מוצרים, אוכל וקמפיינים פרסומיים',
      'לתעד אירועים — רפורטז\'ה, חדשות, נושאים חברתיים',
      'לצלם טבע, נופים ונושאים מופשטים'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'מה אתה יכול לעשות שעות?', o:[
      'לחפש את האור והזווית הנכונים לפורטרט מושלם','להקים סשן צילום מוצר מאפס באולפן','להיות בלב האירועים ולתפוס את הרגע המכריע','לחכות לאור הנכון עם שחר או שקיעה'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'איזה כלי אתה רוצה לשלוט בו ראשון?', o:[
      'Adobe Lightroom — לעריכה וניהול תיק עבודות','Adobe Photoshop — לרטוש מתקדם ועבודה מסחרית','Capture One — לגריידינג צבע מקצועי','Luminar Neo — לעיבוד תמונות נוף'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'מה מעורר בך השראה?', o:[
      'כשצילום תופס את האישיות של מישהו במבט ראשון','כשצילום מוצר הופך אותו לרצוי','כשתמונה אחת מספרת סיפור שלם ללא מילים','כשנוף מחסל את הנשימה ואתה רוצה להיות שם'
    ], s:[{'portrait':2},{'commercial':2},{'reportage':2},{'landscape':2}]},
    {t:'איזה פרויקט תוסיף לפורטפוליו שלך?', o:[
      'סדרת פורטרטים שחושפת אופי דרך אור ומבט','סשן צילום מסחרי או קמפיין מותג','רפורטז\'ה צילומי על אירוע או נושא חברתי','סדרת נופים שצולמו במיקומים ותנאי תאורה שונים'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'בעוד 3 שנים אתה רוצה...', o:[
      'להיות צלם פורטרטים או חתונות מבוקש מאוד','לצלם עבור מותגים גדולים וסוכנויות פרסום','להתפרסם במדיה ולעבוד כצלם עיתונות','להציג בגלריות ולמכור הדפסים אמנותיים'
    ], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]}
  ],
  roles: {
    'portrait': {emoji:'🤳',name:'צלם/ת פורטרטים',desc:'מצלם/ת אנשים: פורטרטים, חתונות, צילומי קורפורייט.',detail:'צלם פורטרטים חושף אנשים דרך תמונות. אתה עובד עם אור, תנוחה, מבט ורגש.',start:['Peter Hurley — peterhurley.com','Portrait Photography — YouTube','Adobe Lightroom'],startUrls:['https://peterhurley.com','https://youtube.com/results?search_query=portrait+photography+tutorial','https://adobe.com/products/photoshop-lightroom.html']},
    'commercial': {emoji:'📦',name:'צלם/ת מסחרי/ת',desc:'מצלם/ת מוצרים, אוכל ותוכן פרסומי למותגים.',detail:'צלם מסחרי עובד עם חברות. אתה מצלם מוצרים, אוכל, אופנה וקמפיינים פרסומיים.',start:['Karl Taylor Education — karltayloreducation.com','The Bite Shot — YouTube','Photigy — photigy.com'],startUrls:['https://karltayloreducation.com','https://youtube.com/@thebiteshoteducation','https://photigy.com']},
    'reportage': {emoji:'📰',name:'צלם/ת עיתונות',desc:'מתעד/ת אירועים, סיפורים ונושאים חברתיים.',detail:'צלם עיתונות מתעד את המציאות. אתה עובד מהר, נשאר בלתי מורגש ותופס את הרגע המכריע.',start:['World Press Photo — worldpressphoto.org','Magnum Photos — magnumphotos.com','ספר: The Decisive Moment — קרטייה-ברסון'],startUrls:['https://worldpressphoto.org','https://magnumphotos.com','https://www.amazon.com/s?k=decisive+moment+cartier+bresson']},
    'landscape': {emoji:'🏔️',name:'צלם/ת נופים',desc:'מצלם/ת טבע, נופים ופרויקטים אמנותיים.',detail:'צלם נופים צד אור ורגעים בטבע. אתה מתכנן סשנים לפי מזג האוויר ומיקום השמש, מוכר הדפסים או רישיונות.',start:['Thomas Heaton — YouTube','PhotoPills — photopills.com','500px — 500px.com'],startUrls:['https://youtube.com/@ThomasHeatonPhotography','https://photopills.com','https://500px.com']}
  }
};

// ── MOTION DESIGNER ──────────────────────────────────────────────────────────
CREATIVE_L2.motion = {};

CREATIVE_L2.motion.ru = {
  questions: [
    {t:'Что тебя привлекает в моушн-дизайне больше всего?', o:[
      'Создавать анимированную графику и брендинг в движении',
      'Добавлять визуальные эффекты в видео и кино',
      'Строить трёхмерные миры, персонажей и архитектуру',
      'Монтировать видео и выстраивать нарратив из отснятого материала'
    ], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'Какой инструмент ты хочешь освоить в первую очередь?', o:[
      'After Effects + Illustrator — анимация графики и логотипов',
      'Nuke / DaVinci Fusion — композитинг и VFX',
      'Blender / Cinema 4D — 3D-моделирование и рендер',
      'Premiere Pro / DaVinci Resolve — монтаж и цветокоррекция'
    ], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'Какой проект тебя зажигает?', o:[
      'Анимировать айдентику бренда и создать motion-гайдлайн',
      'Добавить взрыв или телепортацию в сцену из фильма',
      'Смоделировать и анимировать персонажа с нуля',
      'Смонтировать документальный фильм или рекламный ролик'
    ], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'Что тебя вдохновляет?', o:[
      'Когда абстрактная идея превращается в живую анимацию',
      'Когда зритель не замечает где реальность а где спецэффект',
      'Когда 3D-сцена выглядит убедительнее реальной фотографии',
      'Когда монтаж заставляет зрителя чувствовать нужную эмоцию'
    ], s:[{'motion-graphics':2},{'vfx':2},{'3d':2},{'editor':2}]},
    {t:'Какой проект ты хотел бы добавить в портфолио?', o:[
      'Анимированный логотип и сет переходов для YouTube-канала',
      'Сцена с реалистичным огнём, водой или разрушением',
      'Короткий 3D-ролик с анимированным персонажем',
      'Смонтированный short-film или музыкальный клип'
    ], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'Через 3 года ты хочешь...', o:[
      'Делать motion-дизайн для крупных брендов и стриминговых платформ',
      'Работать в кино или геймдеве как VFX-художник',
      'Быть 3D-генералистом или Character TD в анимационной студии',
      'Монтировать рекламу, клипы и документальное кино'
    ], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]}
  ],
  roles: {
    'motion-graphics': {
      emoji:'✨', name:'Моушн-дизайнер',
      desc:'Создаёт анимированную графику, брендинг в движении и визуальный контент.',
      detail:'Моушн-дизайнер — это дизайнер который умеет двигаться. Ты создаёшь анимированные логотипы, интро, инфографику и UI-анимации. Работаешь в After Effects, знаешь принципы анимации и понимаешь дизайн.',
      start:['School of Motion — schoolofmotion.com','Motion Design School — motiondesign.school','Библиотека пресетов — aescripts.com'],
      startUrls:['https://schoolofmotion.com','https://motiondesign.school','https://aescripts.com']
    },
    'vfx': {
      emoji:'💥', name:'VFX-художник',
      desc:'Создаёт визуальные эффекты для видео, кино и игр.',
      detail:'VFX-художник добавляет в видео то чего не существует в реальности. Ты работаешь с композитингом, трекингом, симуляцией огня, воды и разрушений. Используешь Nuke, Houdini или DaVinci Fusion.',
      start:['VFX Bro — YouTube','SideFX Houdini — sidefx.com','Foundry Nuke — foundry.com'],
      startUrls:['https://youtube.com/@vfxbro','https://sidefx.com/learn','https://foundry.com/products/nuke']
    },
    '3d': {
      emoji:'🎲', name:'3D-художник',
      desc:'Моделирует, текстурирует и анимирует трёхмерные объекты и персонажей.',
      detail:'3D-художник строит цифровые миры с нуля. Ты моделируешь объекты и персонажей, настраиваешь материалы и освещение, делаешь рендер и анимацию. Работаешь в Blender, Cinema 4D или Maya.',
      start:['Blender (бесплатно) — blender.org','Blender Guru — YouTube','CGCookie — cgcookie.com'],
      startUrls:['https://blender.org','https://youtube.com/@blenderguru','https://cgcookie.com']
    },
    'editor': {
      emoji:'🎬', name:'Видеомонтажёр',
      desc:'Монтирует видео, работает с цветом и звуком в пост-продакшне.',
      detail:'Видеомонтажёр собирает историю из отдельных кадров. Ты работаешь с темпом, нарративом, цветокоррекцией и звуком. Монтируешь рекламу, клипы, документальное и игровое кино в Premiere Pro или DaVinci Resolve.',
      start:['DaVinci Resolve (бесплатно) — blackmagicdesign.com','Film Riot — YouTube','Курс монтажа — Skillshare'],
      startUrls:['https://blackmagicdesign.com/products/davinciresolve','https://youtube.com/@filmriot','https://skillshare.com']
    }
  }
};

CREATIVE_L2.motion.en = {
  questions: [
    {t:'What attracts you most in motion design?', o:[
      'Creating animated graphics and motion branding',
      'Adding visual effects to video and film',
      'Building 3D worlds, characters and architecture',
      'Editing video and crafting a narrative from footage'
    ], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'Which tool do you want to master first?', o:[
      'After Effects + Illustrator — graphic and logo animation',
      'Nuke / DaVinci Fusion — compositing and VFX',
      'Blender / Cinema 4D — 3D modelling and rendering',
      'Premiere Pro / DaVinci Resolve — editing and colour grading'
    ], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'Which project excites you?', o:[
      'Animate a brand identity and create a motion style guide',
      'Add an explosion or teleportation to a film scene',
      'Model and animate a character from scratch',
      'Edit a documentary or advertising video'
    ], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'What inspires you?', o:[
      'When an abstract idea becomes a living animation',
      'When viewers cannot tell where reality ends and VFX begins',
      'When a 3D scene looks more convincing than a real photograph',
      'When editing makes the audience feel exactly the right emotion'
    ], s:[{'motion-graphics':2},{'vfx':2},{'3d':2},{'editor':2}]},
    {t:'Which project would you add to your portfolio?', o:[
      'An animated logo and transition set for a YouTube channel',
      'A scene with realistic fire, water or destruction',
      'A short 3D film with an animated character',
      'An edited short film or music video'
    ], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'In 3 years you want to...', o:[
      'Create motion design for major brands and streaming platforms',
      'Work in film or game dev as a VFX artist',
      'Be a 3D generalist or Character TD at an animation studio',
      'Edit commercials, music videos and documentaries'
    ], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]}
  ],
  roles: {
    'motion-graphics': {emoji:'✨',name:'Motion Designer',desc:'Creates animated graphics, motion branding and visual content.',detail:'A motion designer is a designer who can move things. You create animated logos, intros, infographics and UI animations. You work in After Effects, know animation principles and understand design.',start:['School of Motion — schoolofmotion.com','Motion Design School — motiondesign.school','AEScripts — aescripts.com'],startUrls:['https://schoolofmotion.com','https://motiondesign.school','https://aescripts.com']},
    'vfx': {emoji:'💥',name:'VFX Artist',desc:'Creates visual effects for video, film and games.',detail:'A VFX artist adds to video what does not exist in reality. You work with compositing, tracking, and simulation of fire, water and destruction. Tools: Nuke, Houdini, DaVinci Fusion.',start:['VFX Bro — YouTube','SideFX Houdini — sidefx.com','Foundry Nuke — foundry.com'],startUrls:['https://youtube.com/@vfxbro','https://sidefx.com/learn','https://foundry.com/products/nuke']},
    '3d': {emoji:'🎲',name:'3D Artist',desc:'Models, textures and animates 3D objects and characters.',detail:'A 3D artist builds digital worlds from scratch. You model objects and characters, set up materials and lighting, and handle rendering and animation. Tools: Blender, Cinema 4D, Maya.',start:['Blender (free) — blender.org','Blender Guru — YouTube','CGCookie — cgcookie.com'],startUrls:['https://blender.org','https://youtube.com/@blenderguru','https://cgcookie.com']},
    'editor': {emoji:'🎬',name:'Video Editor',desc:'Edits video, works with colour and sound in post-production.',detail:'A video editor assembles a story from individual shots. You work with pacing, narrative, colour grading and sound. You edit commercials, music videos, documentaries and fiction in Premiere Pro or DaVinci Resolve.',start:['DaVinci Resolve (free) — blackmagicdesign.com','Film Riot — YouTube','Editing course — Skillshare'],startUrls:['https://blackmagicdesign.com/products/davinciresolve','https://youtube.com/@filmriot','https://skillshare.com']}
  }
};

CREATIVE_L2.motion.de = {
  questions: [
    {t:'Was zieht dich im Motion-Design am meisten an?', o:['Animierte Grafiken und Motion-Branding erstellen','Visuelle Effekte zu Videos und Filmen hinzufügen','3D-Welten, Charaktere und Architektur bauen','Videos schneiden und aus dem Footage eine Geschichte erzählen'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'Welches Tool möchtest du zuerst beherrschen?', o:['After Effects + Illustrator — Grafik- und Logoanimation','Nuke / DaVinci Fusion — Compositing und VFX','Blender / Cinema 4D — 3D-Modellierung und Rendering','Premiere Pro / DaVinci Resolve — Schnitt und Farbkorrektur'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'Welches Projekt begeistert dich?', o:['Eine Markenidentität animieren und einen Motion-Styleguide erstellen','Eine Explosion oder Teleportation in eine Filmszene einbauen','Einen Charakter von Grund auf modellieren und animieren','Einen Dokumentarfilm oder Werbespot schneiden'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'Was inspiriert dich?', o:['Wenn eine abstrakte Idee zur lebendigen Animation wird','Wenn Zuschauer nicht erkennen, wo die Realität aufhört','Wenn eine 3D-Szene überzeugender wirkt als ein echtes Foto','Wenn der Schnitt genau die richtige Emotion auslöst'], s:[{'motion-graphics':2},{'vfx':2},{'3d':2},{'editor':2}]},
    {t:'Welches Projekt möchtest du ins Portfolio aufnehmen?', o:['Ein animiertes Logo und Übergänge für einen YouTube-Kanal','Eine Szene mit realistischem Feuer, Wasser oder Zerstörung','Ein kurzer 3D-Film mit animiertem Charakter','Ein geschnittener Kurzfilm oder Musikvideo'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'In 3 Jahren möchtest du...', o:['Motion-Design für große Marken und Streaming-Plattformen machen','Als VFX-Artist in Film oder Game-Dev arbeiten','3D-Generalist oder Character TD in einem Animationsstudio sein','Werbespots, Musikvideos und Dokumentarfilme schneiden'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]}
  ],
  roles: {
    'motion-graphics':{emoji:'✨',name:'Motion-Designer/in',desc:'Erstellt animierte Grafiken, Motion-Branding und visuellen Content.',detail:'Ein Motion-Designer ist ein Designer, der Dinge bewegen kann. Du erstellst animierte Logos, Intros, Infografiken und UI-Animationen in After Effects.',start:['School of Motion — schoolofmotion.com','Motion Design School — motiondesign.school','AEScripts — aescripts.com'],startUrls:['https://schoolofmotion.com','https://motiondesign.school','https://aescripts.com']},
    'vfx':{emoji:'💥',name:'VFX-Artist/in',desc:'Erstellt visuelle Effekte für Video, Film und Spiele.',detail:'Ein VFX-Artist fügt dem Video hinzu, was in der Realität nicht existiert. Du arbeitest mit Compositing, Tracking und Simulation von Feuer, Wasser und Zerstörung.',start:['VFX Bro — YouTube','SideFX Houdini — sidefx.com','Foundry Nuke — foundry.com'],startUrls:['https://youtube.com/@vfxbro','https://sidefx.com/learn','https://foundry.com/products/nuke']},
    '3d':{emoji:'🎲',name:'3D-Artist/in',desc:'Modelliert, texturiert und animiert 3D-Objekte und Charaktere.',detail:'Ein 3D-Artist baut digitale Welten von Grund auf. Du modellierst Objekte und Charaktere, richtest Materialien und Beleuchtung ein. Tools: Blender, Cinema 4D, Maya.',start:['Blender (kostenlos) — blender.org','Blender Guru — YouTube','CGCookie — cgcookie.com'],startUrls:['https://blender.org','https://youtube.com/@blenderguru','https://cgcookie.com']},
    'editor':{emoji:'🎬',name:'Videoeditor/in',desc:'Schneidet Videos und arbeitet mit Farbe und Ton in der Post-Produktion.',detail:'Ein Videoeditor fügt aus einzelnen Einstellungen eine Geschichte zusammen. Du arbeitest mit Pacing, Narrativ, Farbkorrektur und Ton in Premiere Pro oder DaVinci Resolve.',start:['DaVinci Resolve (kostenlos) — blackmagicdesign.com','Film Riot — YouTube','Schnittkurs — Skillshare'],startUrls:['https://blackmagicdesign.com/products/davinciresolve','https://youtube.com/@filmriot','https://skillshare.com']}
  }
};

CREATIVE_L2.motion.fr = {
  questions: [
    {t:'Qu\'est-ce qui t\'attire le plus dans le motion design ?', o:['Créer des graphismes animés et du motion branding','Ajouter des effets visuels à des vidéos et films','Construire des mondes 3D, personnages et architecture','Monter des vidéos et construire un récit à partir des rushes'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'Quel outil veux-tu maîtriser en premier ?', o:['After Effects + Illustrator — animation graphique et logos','Nuke / DaVinci Fusion — compositing et VFX','Blender / Cinema 4D — modélisation 3D et rendu','Premiere Pro / DaVinci Resolve — montage et étalonnage'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'Quel projet t\'enthousiasme ?', o:['Animer une identité de marque et créer un guide motion','Ajouter une explosion ou téléportation dans une scène de film','Modéliser et animer un personnage de zéro','Monter un documentaire ou un spot publicitaire'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'Qu\'est-ce qui t\'inspire ?', o:['Quand une idée abstraite devient une animation vivante','Quand les spectateurs ne voient pas où finit le réel','Quand une scène 3D semble plus vraie qu\'une photo','Quand le montage provoque exactement la bonne émotion'], s:[{'motion-graphics':2},{'vfx':2},{'3d':2},{'editor':2}]},
    {t:'Quel projet ajouterais-tu à ton portfolio ?', o:['Un logo animé et des transitions pour une chaîne YouTube','Une scène avec du feu, de l\'eau ou une destruction réaliste','Un court film 3D avec un personnage animé','Un court-métrage ou clip vidéo monté'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'Dans 3 ans tu veux...', o:['Faire du motion design pour des grandes marques et plateformes','Travailler dans le cinéma ou le jeu vidéo comme artiste VFX','Être généraliste 3D ou Character TD dans un studio d\'animation','Monter des pubs, clips et documentaires'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]}
  ],
  roles: {
    'motion-graphics':{emoji:'✨',name:'Motion designer',desc:'Crée des graphismes animés, du motion branding et du contenu visuel.',detail:'Un motion designer est un designer qui sait faire bouger les choses. Tu crées des logos animés, intros, infographies et animations UI dans After Effects.',start:['School of Motion — schoolofmotion.com','Motion Design School — motiondesign.school','AEScripts — aescripts.com'],startUrls:['https://schoolofmotion.com','https://motiondesign.school','https://aescripts.com']},
    'vfx':{emoji:'💥',name:'Artiste VFX',desc:'Crée des effets visuels pour la vidéo, le cinéma et les jeux.',detail:'Un artiste VFX ajoute à la vidéo ce qui n\'existe pas dans la réalité. Tu travailles le compositing, le tracking et la simulation de feu, d\'eau et de destruction.',start:['VFX Bro — YouTube','SideFX Houdini — sidefx.com','Foundry Nuke — foundry.com'],startUrls:['https://youtube.com/@vfxbro','https://sidefx.com/learn','https://foundry.com/products/nuke']},
    '3d':{emoji:'🎲',name:'Artiste 3D',desc:'Modélise, texturise et anime des objets et personnages 3D.',detail:'Un artiste 3D construit des mondes numériques de toutes pièces. Tu modélises objets et personnages, configures matériaux et éclairage. Outils : Blender, Cinema 4D, Maya.',start:['Blender (gratuit) — blender.org','Blender Guru — YouTube','CGCookie — cgcookie.com'],startUrls:['https://blender.org','https://youtube.com/@blenderguru','https://cgcookie.com']},
    'editor':{emoji:'🎬',name:'Monteur/se vidéo',desc:'Monte des vidéos et travaille la couleur et le son en post-production.',detail:'Un monteur assemble une histoire à partir de plans individuels. Tu travailles rythme, narration, étalonnage et son dans Premiere Pro ou DaVinci Resolve.',start:['DaVinci Resolve (gratuit) — blackmagicdesign.com','Film Riot — YouTube','Cours montage — Skillshare'],startUrls:['https://blackmagicdesign.com/products/davinciresolve','https://youtube.com/@filmriot','https://skillshare.com']}
  }
};

CREATIVE_L2.motion.es = {
  questions: [
    {t:'¿Qué te atrae más del motion design?', o:['Crear gráficos animados y motion branding','Añadir efectos visuales a vídeos y películas','Construir mundos 3D, personajes y arquitectura','Editar vídeo y construir una narrativa a partir del material grabado'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'¿Qué herramienta quieres dominar primero?', o:['After Effects + Illustrator — animación gráfica y logos','Nuke / DaVinci Fusion — compositing y VFX','Blender / Cinema 4D — modelado 3D y renderizado','Premiere Pro / DaVinci Resolve — edición y corrección de color'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'¿Qué proyecto te emociona?', o:['Animar una identidad de marca y crear una guía de motion','Añadir una explosión o teletransportación a una escena de película','Modelar y animar un personaje desde cero','Editar un documental o un spot publicitario'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'¿Qué te inspira?', o:['Cuando una idea abstracta se convierte en animación viva','Cuando los espectadores no notan dónde termina la realidad','Cuando una escena 3D parece más real que una fotografía','Cuando el montaje provoca exactamente la emoción correcta'], s:[{'motion-graphics':2},{'vfx':2},{'3d':2},{'editor':2}]},
    {t:'¿Qué proyecto añadirías a tu portfolio?', o:['Un logo animado y transiciones para un canal de YouTube','Una escena con fuego, agua o destrucción realista','Un cortometraje 3D con un personaje animado','Un cortometraje o videoclip montado'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'En 3 años quieres...', o:['Hacer motion design para grandes marcas y plataformas','Trabajar en cine o videojuegos como artista VFX','Ser generalista 3D o Character TD en un estudio de animación','Editar anuncios, videoclips y documentales'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]}
  ],
  roles: {
    'motion-graphics':{emoji:'✨',name:'Motion designer',desc:'Crea gráficos animados, motion branding y contenido visual.',detail:'Un motion designer es un diseñador que sabe mover las cosas. Creas logos animados, intros, infografías y animaciones UI en After Effects.',start:['School of Motion — schoolofmotion.com','Motion Design School — motiondesign.school','AEScripts — aescripts.com'],startUrls:['https://schoolofmotion.com','https://motiondesign.school','https://aescripts.com']},
    'vfx':{emoji:'💥',name:'Artista VFX',desc:'Crea efectos visuales para vídeo, cine y juegos.',detail:'Un artista VFX añade al vídeo lo que no existe en la realidad. Trabajas con compositing, tracking y simulación de fuego, agua y destrucción.',start:['VFX Bro — YouTube','SideFX Houdini — sidefx.com','Foundry Nuke — foundry.com'],startUrls:['https://youtube.com/@vfxbro','https://sidefx.com/learn','https://foundry.com/products/nuke']},
    '3d':{emoji:'🎲',name:'Artista 3D',desc:'Modela, texturiza y anima objetos y personajes 3D.',detail:'Un artista 3D construye mundos digitales desde cero. Modelas objetos y personajes, configuras materiales e iluminación. Herramientas: Blender, Cinema 4D, Maya.',start:['Blender (gratis) — blender.org','Blender Guru — YouTube','CGCookie — cgcookie.com'],startUrls:['https://blender.org','https://youtube.com/@blenderguru','https://cgcookie.com']},
    'editor':{emoji:'🎬',name:'Editor/a de vídeo',desc:'Edita vídeo y trabaja color y sonido en postproducción.',detail:'Un editor de vídeo ensambla una historia a partir de planos individuales. Trabajas con ritmo, narrativa, corrección de color y sonido en Premiere Pro o DaVinci Resolve.',start:['DaVinci Resolve (gratis) — blackmagicdesign.com','Film Riot — YouTube','Curso de edición — Skillshare'],startUrls:['https://blackmagicdesign.com/products/davinciresolve','https://youtube.com/@filmriot','https://skillshare.com']}
  }
};

CREATIVE_L2.motion.pt = {
  questions: [
    {t:'O que mais te atrai no motion design?', o:['Criar gráficos animados e motion branding','Adicionar efeitos visuais a vídeos e filmes','Construir mundos 3D, personagens e arquitetura','Editar vídeo e construir uma narrativa a partir das gravações'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'Qual ferramenta queres dominar primeiro?', o:['After Effects + Illustrator — animação gráfica e logos','Nuke / DaVinci Fusion — compositing e VFX','Blender / Cinema 4D — modelagem 3D e renderização','Premiere Pro / DaVinci Resolve — edição e correção de cor'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'Que projeto te entusiasma?', o:['Animar uma identidade de marca e criar um guia de motion','Adicionar uma explosão ou teletransporte a uma cena de filme','Modelar e animar um personagem do zero','Editar um documentário ou spot publicitário'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'O que te inspira?', o:['Quando uma ideia abstrata se torna animação viva','Quando os espectadores não percebem onde termina a realidade','Quando uma cena 3D parece mais real do que uma fotografia','Quando a edição provoca exatamente a emoção certa'], s:[{'motion-graphics':2},{'vfx':2},{'3d':2},{'editor':2}]},
    {t:'Que projeto adicionarias ao teu portfólio?', o:['Um logo animado e transições para um canal do YouTube','Uma cena com fogo, água ou destruição realista','Um curta-metragem 3D com personagem animado','Um curta-metragem ou videoclipe montado'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'Em 3 anos queres...', o:['Fazer motion design para grandes marcas e plataformas de streaming','Trabalhar em cinema ou jogos como artista VFX','Ser generalista 3D ou Character TD num estúdio de animação','Editar anúncios, videoclipes e documentários'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]}
  ],
  roles: {
    'motion-graphics':{emoji:'✨',name:'Motion designer',desc:'Cria gráficos animados, motion branding e conteúdo visual.',detail:'Um motion designer é um designer que sabe mover as coisas. Crias logos animados, intros, infográficos e animações UI no After Effects.',start:['School of Motion — schoolofmotion.com','Motion Design School — motiondesign.school','AEScripts — aescripts.com'],startUrls:['https://schoolofmotion.com','https://motiondesign.school','https://aescripts.com']},
    'vfx':{emoji:'💥',name:'Artista VFX',desc:'Cria efeitos visuais para vídeo, cinema e jogos.',detail:'Um artista VFX adiciona ao vídeo o que não existe na realidade. Trabalhas com compositing, tracking e simulação de fogo, água e destruição.',start:['VFX Bro — YouTube','SideFX Houdini — sidefx.com','Foundry Nuke — foundry.com'],startUrls:['https://youtube.com/@vfxbro','https://sidefx.com/learn','https://foundry.com/products/nuke']},
    '3d':{emoji:'🎲',name:'Artista 3D',desc:'Modela, texturiza e anima objetos e personagens 3D.',detail:'Um artista 3D constrói mundos digitais do zero. Modelas objetos e personagens, configuras materiais e iluminação. Ferramentas: Blender, Cinema 4D, Maya.',start:['Blender (gratuito) — blender.org','Blender Guru — YouTube','CGCookie — cgcookie.com'],startUrls:['https://blender.org','https://youtube.com/@blenderguru','https://cgcookie.com']},
    'editor':{emoji:'🎬',name:'Editor/a de vídeo',desc:'Edita vídeo e trabalha cor e som em pós-produção.',detail:'Um editor de vídeo monta uma história a partir de planos individuais. Trabalhas ritmo, narrativa, correção de cor e som no Premiere Pro ou DaVinci Resolve.',start:['DaVinci Resolve (gratuito) — blackmagicdesign.com','Film Riot — YouTube','Curso de edição — Skillshare'],startUrls:['https://blackmagicdesign.com/products/davinciresolve','https://youtube.com/@filmriot','https://skillshare.com']}
  }
};

CREATIVE_L2.motion.ar = {
  questions: [
    {t:'ما الذي يجذبك أكثر في تصميم الموشن؟', o:['إنشاء رسومات متحركة وهوية بصرية متحركة','إضافة مؤثرات بصرية إلى مقاطع الفيديو والأفلام','بناء عوالم ثلاثية الأبعاد وشخصيات وهندسة معمارية','مونتاج الفيديو وبناء سرد قصصي من اللقطات'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'أي أداة تريد إتقانها أولاً؟', o:['After Effects + Illustrator — تحريك الجرافيك والشعارات','Nuke / DaVinci Fusion — التراكب والمؤثرات البصرية','Blender / Cinema 4D — النمذجة ثلاثية الأبعاد والتصيير','Premiere Pro / DaVinci Resolve — المونتاج وتصحيح الألوان'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'أي مشروع يثير حماسك؟', o:['تحريك هوية علامة تجارية وإنشاء دليل موشن','إضافة انفجار أو تلاشٍ إلى مشهد سينمائي','نمذجة شخصية وتحريكها من الصفر','مونتاج فيلم وثائقي أو إعلان تجاري'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'ما الذي يلهمك؟', o:['عندما تتحول فكرة مجردة إلى رسوم متحركة حية','عندما لا يستطيع المشاهد التمييز بين الواقع والمؤثرات','عندما تبدو مشهد ثلاثي الأبعاد أكثر واقعية من صورة فوتوغرافية','عندما يثير المونتاج المشاعر الصحيحة بدقة'], s:[{'motion-graphics':2},{'vfx':2},{'3d':2},{'editor':2}]},
    {t:'أي مشروع تضيفه إلى محفظة أعمالك؟', o:['شعار متحرك ومجموعة انتقالات لقناة يوتيوب','مشهد بنار أو ماء أو هدم واقعي','فيلم قصير ثلاثي الأبعاد بشخصية متحركة','فيلم قصير أو فيديو كليب مُنتَج'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'بعد 3 سنوات تريد...', o:['إنشاء موشن ديزاين للعلامات الكبرى ومنصات البث','العمل في السينما أو تطوير الألعاب كفنان VFX','أن تكون فناناً ثلاثي الأبعاد عاماً في استوديو أنيميشن','مونتاج الإعلانات والكليبات والأفلام الوثائقية'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]}
  ],
  roles: {
    'motion-graphics':{emoji:'✨',name:'مصمم/ة موشن',desc:'يُنشئ رسومات متحركة وهوية بصرية متحركة.',detail:'مصمم الموشن هو مصمم يعرف كيف يُحرّك الأشياء. تنشئ شعارات متحركة وإنتروهات وإنفوجرافيك وتحريك واجهات في After Effects.',start:['School of Motion — schoolofmotion.com','Motion Design School — motiondesign.school','AEScripts — aescripts.com'],startUrls:['https://schoolofmotion.com','https://motiondesign.school','https://aescripts.com']},
    'vfx':{emoji:'💥',name:'فنان/ة مؤثرات بصرية',desc:'يُنشئ مؤثرات بصرية للفيديو والسينما والألعاب.',detail:'فنان VFX يضيف إلى الفيديو ما لا يوجد في الواقع. تعمل على التراكب والتتبع ومحاكاة النار والماء والهدم.',start:['VFX Bro — YouTube','SideFX Houdini — sidefx.com','Foundry Nuke — foundry.com'],startUrls:['https://youtube.com/@vfxbro','https://sidefx.com/learn','https://foundry.com/products/nuke']},
    '3d':{emoji:'🎲',name:'فنان/ة ثلاثي الأبعاد',desc:'يُنمذج ويُحرّك كائنات وشخصيات ثلاثية الأبعاد.',detail:'فنان الثلاثي الأبعاد يبني عوالم رقمية من الصفر. تُنمذج كائنات وشخصيات وتُعد المواد والإضاءة. أدوات: Blender، Cinema 4D، Maya.',start:['Blender (مجاني) — blender.org','Blender Guru — YouTube','CGCookie — cgcookie.com'],startUrls:['https://blender.org','https://youtube.com/@blenderguru','https://cgcookie.com']},
    'editor':{emoji:'🎬',name:'مُحرِّر/ة فيديو',desc:'يُحرّر الفيديو ويعمل على الألوان والصوت في مرحلة ما بعد الإنتاج.',detail:'مُحرّر الفيديو يجمع القصة من اللقطات الفردية. تعمل على الإيقاع والسرد وتصحيح الألوان والصوت في Premiere Pro أو DaVinci Resolve.',start:['DaVinci Resolve (مجاني) — blackmagicdesign.com','Film Riot — YouTube','كورس مونتاج — Skillshare'],startUrls:['https://blackmagicdesign.com/products/davinciresolve','https://youtube.com/@filmriot','https://skillshare.com']}
  }
};

CREATIVE_L2.motion.he = {
  questions: [
    {t:'מה מושך אותך יותר מכל בעיצוב מוישן?', o:['ליצור גרפיקה מונפשת ומיתוג בתנועה','להוסיף אפקטים ויזואליים לוידאו ולקולנוע','לבנות עולמות תלת-ממד, דמויות וארכיטקטורה','לערוך וידאו ולבנות נרטיב מהחומר המצולם'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'איזה כלי תרצה לשלוט בו ראשון?', o:['After Effects + Illustrator — אנימציה של גרפיקה ולוגואים','Nuke / DaVinci Fusion — קומפוזיטינג ו-VFX','Blender / Cinema 4D — מידול תלת-ממד ורינדור','Premiere Pro / DaVinci Resolve — עריכה ותיקון צבע'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'איזה פרויקט מלהיב אותך?', o:['להנפיש זהות מותג וליצור מדריך מוישן','להוסיף פיצוץ או טלפורטציה לסצנת סרט','למדל ולהנפיש דמות מאפס','לערוך סרט תיעודי או פרסומת'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'מה מעורר בך השראה?', o:['כשרעיון מופשט הופך לאנימציה חיה','כשהצופים לא מבחינים היכן נגמרת המציאות','כשסצנת תלת-ממד נראית אמינה יותר מצילום אמיתי','כשהעריכה מעוררת בדיוק את הרגש הנכון'], s:[{'motion-graphics':2},{'vfx':2},{'3d':2},{'editor':2}]},
    {t:'איזה פרויקט תוסיף לתיק העבודות שלך?', o:['לוגו מונפש וסט מעברים לערוץ יוטיוב','סצנה עם אש, מים או הרס ריאליסטי','סרטון קצר בתלת-ממד עם דמות מונפשת','סרט קצר או קליפ מוזיקלי ערוך'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'בעוד 3 שנים אתה רוצה...', o:['לעשות מוישן-דיזיין למותגים גדולים ופלטפורמות סטרימינג','לעבוד בקולנוע או גיימינג כאמן VFX','להיות גנרליסט תלת-ממד או Character TD בסטודיו אנימציה','לערוך פרסומות, קליפים וסרטים תיעודיים'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]}
  ],
  roles: {
    'motion-graphics':{emoji:'✨',name:'מעצב/ת מוישן',desc:'יוצר/ת גרפיקה מונפשת, מיתוג בתנועה ותוכן ויזואלי.',detail:'מעצב מוישן הוא מעצב שיודע להזיז דברים. אתה יוצר לוגואים מונפשים, אינטרו, אינפוגרפיקה ואנימציות UI ב-After Effects.',start:['School of Motion — schoolofmotion.com','Motion Design School — motiondesign.school','AEScripts — aescripts.com'],startUrls:['https://schoolofmotion.com','https://motiondesign.school','https://aescripts.com']},
    'vfx':{emoji:'💥',name:'אמן/ית VFX',desc:'יוצר/ת אפקטים ויזואליים לוידאו, קולנוע ומשחקים.',detail:'אמן VFX מוסיף לוידאו מה שלא קיים במציאות. אתה עובד על קומפוזיטינג, טראקינג וסימולציה של אש, מים והרס.',start:['VFX Bro — YouTube','SideFX Houdini — sidefx.com','Foundry Nuke — foundry.com'],startUrls:['https://youtube.com/@vfxbro','https://sidefx.com/learn','https://foundry.com/products/nuke']},
    '3d':{emoji:'🎲',name:'אמן/ית תלת-ממד',desc:'מדלל/ת, מטקסטר/ת ומנפיש/ה אובייקטים ודמויות תלת-ממדיות.',detail:'אמן תלת-ממד בונה עולמות דיגיטליים מאפס. אתה מדלל אובייקטים ודמויות, מגדיר חומרים ותאורה. כלים: Blender, Cinema 4D, Maya.',start:['Blender (חינמי) — blender.org','Blender Guru — YouTube','CGCookie — cgcookie.com'],startUrls:['https://blender.org','https://youtube.com/@blenderguru','https://cgcookie.com']},
    'editor':{emoji:'🎬',name:'עורך/ת וידאו',desc:'עורך/ת וידאו ועובד/ת על צבע וסאונד בפוסט-פרודקשן.',detail:'עורך וידאו מרכיב סיפור מהלקות בודדות. אתה עובד על קצב, נרטיב, תיקון צבע וסאונד ב-Premiere Pro או DaVinci Resolve.',start:['DaVinci Resolve (חינמי) — blackmagicdesign.com','Film Riot — YouTube','קורס עריכה — Skillshare'],startUrls:['https://blackmagicdesign.com/products/davinciresolve','https://youtube.com/@filmriot','https://skillshare.com']}
  }
};


CREATIVE_L2.smm.zh = {
  questions: [
    {t:'社交媒体工作中什么最吸引你？', o:['创作病毒式传播的内容——帖子、短视频、故事','围绕品牌建立活跃的社区','精准投放广告、优化转化','制定品牌的社交媒体整体战略'], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'你最想精通哪个工具？', o:['CapCut + 剪映——短视频创作','微信群 + Discord——社区运营','Meta广告 + 抖音广告——付费投放','Google Analytics + 飞书多维表格——数据分析'], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'什么项目最让你兴奋？', o:['从零搭建一个账号，把它做到垂类头部','建立一个用户互相帮助的活跃社区','跑出ROI×10的广告投放策略','为品牌制定未来一年的社媒矩阵规划'], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'什么让你最有成就感？', o:['一条帖子被大量转发、点赞破万','社区成员自发帮助新人，氛围超好','精准定向让获客成本下降50%','品牌被目标用户主动搜索和关注'], s:[{'content-creator':2},{'community':2},{'targeting':2},{'strategist':2}]},
    {t:'你愿意花大量时间做什么？', o:['拍摄剪辑短视频，测试不同内容格式','回复评论，激发话题讨论，维护社区氛围','分析受众数据，A/B测试广告素材','研究竞品，制定月度内容日历'], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]},
    {t:'3年后你想在哪里？', o:['拥有大量粉丝的知名内容创作者','知名品牌或平台的社区负责人','管理大预算广告投放的高级媒介策划','担任SMM总监或创立自己的社媒机构'], s:[{'content-creator':3},{'community':3},{'targeting':3},{'strategist':3}]}
  ],
  roles: {
    'content-creator':{emoji:'🎬', name:'内容创作者', desc:'创作在社交平台上引发传播的原创内容', detail:'你让品牌在算法和用户之间找到共鸣。你构思有创意的短视频和图文，测试不同格式，快速学习并迭代，让每一条内容都有更大的传播可能。', start:['研究各平台的算法——抖音、小红书、微博的规则不同','学习剪映/CapCut——快速剪出高质量短视频','建立你自己的账号，哪怕粉丝很少，先开始','研究垂类头部创作者，拆解他们内容的规律']},
    'community':{emoji:'🤝', name:'社区运营专家', desc:'围绕品牌建立有温度的用户社区，让用户成为品牌的忠实伙伴', detail:'你让冷冰冰的品牌账号变成有人情味的社区。你设计互动机制，培养KOC，处理负面情绪，让社区成员感到被看见和被重视。', start:['了解社区设计原则——如何设置规则、角色和激励机制','学习危机处理——如何应对社区中的负面声音','研究成功社区案例——B站、得物的社区运营','在一个社区做义工运营，积累真实经验']},
    'targeting':{emoji:'🎯', name:'广告投放专家', desc:'精准找到目标用户，用最低的成本获取最多的有效客户', detail:'你让每一分广告预算都发挥最大价值。你研究目标受众，设计广告素材，A/B测试，优化投放策略，用数据证明你的广告ROI。', start:['获取Meta广告认证——官方免费培训','学习抖音广告投放——巨量引擎学习中心','了解广告归因——如何判断哪个渠道真正有效','用小预算实践——哪怕500元也能学到很多']},
    'strategist':{emoji:'📋', name:'社媒策略师', desc:'制定品牌的社交媒体整体战略，确保每个动作都服务于更大的目标', detail:'你思考全局。你分析竞争格局，定义品牌在社媒中的定位，规划内容矩阵，设定KPI，并持续评估策略的有效性。', start:['学习品牌传播策略基础','掌握竞品社媒分析——用飞瓜数据或新榜','了解内容日历规划——如何做有节奏的内容运营','阅读《社交媒体营销》领域的行业报告']}
  },
  ui: {l2back:'← 返回SMM', title:'社交媒体营销：选择你的专业方向'}
};

CREATIVE_L2.copywriter.zh = {
  questions: [
    {t:'写作工作中什么最吸引你？', o:['内容写作——深度文章、博客和品牌内容','广告文案——让人忍不住行动的一句话','SEO写作——让内容被搜索引擎和用户同时喜欢','脚本创作——为视频、播客和广告写故事'], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'你最想精通哪个方向？', o:['长文内容创作和内容营销策略','广告文案公式和转化率优化','关键词研究、内容布局和SEO策略','分镜脚本写作和影视广告创意'], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'什么成果最让你满意？', o:['你写的文章成为行业内被引用最多的参考','你的一句slogan让品牌销售额翻倍','你的SEO文章稳定排在Google第一位','你的脚本被制作成了刷屏的广告'], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'你更喜欢哪种工作？', o:['深度调研一个话题，写出有深度的长文','反复打磨一句话，让它既有力量又简洁','分析关键词数据，规划内容策略和文章结构','构思故事，写分镜，把文字变成可拍摄的画面'], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'你会选择哪个项目？', o:['为一个SaaS品牌写12篇有深度的行业洞察文章','为一个新产品写全套广告文案','优化一个电商网站的SEO内容架构','为一个App写品牌广告的30秒脚本'], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]},
    {t:'3年后你在哪里？', o:['知名品牌的首席内容官','顶级广告公司的创意总监','SEO内容机构的联合创始人','广告导演或知名编剧'], s:[{'content-writer':3},{'ad-copy':3},{'seo-writer':3},{'scriptwriter':3}]}
  ],
  roles: {
    'content-writer':{emoji:'✍️', name:'内容写作者', desc:'创作有深度、有价值的品牌内容，吸引并留住目标读者', detail:'你不是在生产内容，你是在创造价值。你深入研究话题，以清晰有力的文字表达复杂想法，让读者读完有所收获，并记住你代表的品牌。', start:['每天写作——哪怕只是200字的日记','建立自己的写作作品集——在微信公众号或知乎发布文章','阅读优秀的中英文内容——学习他们如何组织论点','学习内容营销基础——HubSpot有免费课程']},
    'ad-copy':{emoji:'💡', name:'广告文案师', desc:'用精准的语言激发用户行动——点击、购买、注册', detail:'你把价值主张变成行动号召。你深入理解用户心理，用最少的字传达最强的信息。一个好的广告文案可以直接影响品牌的营业收入。', start:['学习经典文案公式——AIDA、PAS、FAB','阅读大卫·奥格威和李奥贝纳的广告经典案例','练习改写——把冗长的产品描述变成简洁有力的句子','研究爆款广告背后的文案逻辑']},
    'seo-writer':{emoji:'🔍', name:'SEO内容写作者', desc:'写出既让用户爱读，又让搜索引擎排在第一位的内容', detail:'你同时服务两个读者——用户和算法。你研究关键词，规划内容结构，用高质量的写作满足搜索意图，持续为网站带来免费的自然流量。', start:['学习SEO基础——Ahrefs Academy的免费课程','掌握关键词研究——如何找到有搜索量且可以排名的词','了解内容优化——标题、小标题、内部链接的最佳实践','写你的第一篇针对特定关键词的SEO文章']},
    'scriptwriter':{emoji:'🎬', name:'视频脚本作者', desc:'将想法转化为适合拍摄的视频故事——广告、短视频、纪录片', detail:'你的文字最终会变成画面和声音。你用分镜头脚本的方式思考，设计冲突和情感节拍，让观众在30秒内被抓住注意力，记住品牌传达的信息。', start:['学习分镜脚本格式——如何写出可拍摄的脚本','研究优秀广告的脚本——拆解它们的故事结构','练习写短视频脚本——从15秒的信息流广告开始','了解影视语言——景别、转场、配音如何与文字配合']}
  },
  ui: {l2back:'← 返回文案', title:'文案写作：选择你的专业方向'}
};

CREATIVE_L2.graphic.zh = {
  questions: [
    {t:'平面设计中什么最吸引你？', o:['品牌设计——为企业创建视觉识别系统','印刷设计——书籍、杂志、包装的纸质设计','数字平面设计——网页、App界面和社交媒体视觉','包装设计——让产品在货架上脱颖而出'], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'你最想精通哪个工具？', o:['Illustrator + Figma——品牌和VI系统设计','InDesign + Illustrator——排版和印刷设计','Figma + Adobe XD——数字端视觉设计','Illustrator + Photoshop——包装结构和效果图'], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'什么成果最让你有成就感？', o:['你设计的LOGO在10年后依然被沿用','你排版的书籍获得了国际设计大奖','你设计的落地页让转化率提升了40%','你的包装设计让产品销量增长了50%'], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'你更喜欢哪种工作？', o:['研究品牌战略，设计LOGO和VI规范手册','在InDesign里精心排版，选字体，处理印刷细节','在Figma里设计网页，与开发团队协作','研究包装结构，做产品效果图，考虑材质和工艺'], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'你会选择哪个项目？', o:['为一家新餐厅做完整的品牌视觉设计','为一本非虚构类书籍做内文排版设计','为一个SaaS产品设计官网和落地页','为一款新消费品设计系列包装'], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]},
    {t:'3年后你在哪里？', o:['独立品牌设计师，专注中高端品牌项目','知名出版机构的艺术总监','数字设计机构的视觉总监','品牌包装设计公司的联合创始人'], s:[{'brand':3},{'print':3},{'digital':3},{'packaging':3}]}
  ],
  roles: {
    'brand':{emoji:'🎨', name:'品牌/VI设计师', desc:'为企业创建独特的视觉身份——标志、色彩系统和视觉语言', detail:'你赋予品牌视觉灵魂。你设计标志，建立色彩和字体系统，制作VI规范手册，确保品牌在任何场合都呈现一致的形象。', start:['深入学习字体排版和色彩理论','研究优秀的品牌设计案例——Pentagram的作品集','精通Adobe Illustrator——品牌设计的核心工具','建立你的Behance作品集，发布你的练习作品']},
    'print':{emoji:'📖', name:'印刷排版设计师', desc:'设计书籍、杂志和印刷品的版式，让阅读成为一种美的体验', detail:'你对字体、间距和网格有近乎痴迷的追求。你在InDesign中精心设计每一页的视觉节奏，同时深刻理解印刷工艺，确保设计在纸上完美呈现。', start:['精通Adobe InDesign——排版设计的核心工具','深入学习字体排版——读Robert Bringhurst的《排版风格》','了解印刷工艺——出血、色彩模式、印刷规格','尝试排版一本你喜欢的书，哪怕只是练习']},
    'digital':{emoji:'💻', name:'数字平面设计师', desc:'为网站、App和社交媒体创建视觉资产', detail:'你让像素完美排列。你设计网页Banner、App启动图、社交媒体视觉模板，确保数字端的每个视觉触点都美观且一致。', start:['精通Figma——数字设计的行业标准','了解网页设计规范——像素、分辨率、颜色模式的区别','学习动效基础——让静态设计有生命力','研究优秀的网页设计——Awwwards上的获奖作品']},
    'packaging':{emoji:'📦', name:'包装设计师', desc:'设计让产品在货架上被一眼看到、被伸手拿起的包装', detail:'你的设计在零售货架上经受着真实的考验。你研究包装结构，考虑材质和印刷工艺，设计正面和背面，确保包装在传达品牌价值的同时，也能在竞品中脱颖而出。', start:['学习包装结构基础——了解常见的展开图和折叠方式','研究成功的包装设计案例——无印良品、Aesop','掌握印刷工艺——烫金、UV、压纹的视觉效果','用Illustrator制作一个真实产品的包装设计练习']}
  },
  ui: {l2back:'← 返回平面设计', title:'平面设计：选择你的专业方向'}
};

CREATIVE_L2.illustrator.zh = {
  questions: [
    {t:'插画工作中什么最吸引你？', o:['角色设计——创造独特的人物和生物','出版插画——为书籍和杂志创作叙事图像','商业插画——为品牌和广告创作视觉内容','概念艺术——为游戏和影视设计世界观和视觉风格'], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'你最想精通哪个技能？', o:['Procreate角色塑造和角色表达','Adobe Illustrator矢量插画和叙事构图','多风格商业插画和客户需求理解','Photoshop/Procreate概念设计和世界观构建'], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'什么成果最让你有成就感？', o:['你设计的角色被粉丝大量cosplay','你的插画出现在一本畅销书的封面上','你的插画帮助品牌的某次活动引发了广泛传播','你的概念设计被某游戏或电影采用'], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'你更喜欢哪种工作？', o:['反复打磨一个角色的设计，直到他"活起来"','构思叙事性的构图，传达复杂的情感和故事','快速理解客户需求，适应不同风格创作','构建整个世界的视觉规则——建筑、生物、文明'], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'你会选择哪个项目？', o:['为一个独立游戏设计全套角色和反派','为一本科幻小说画12张章节插画','为某快消品牌的节日活动创作一套插画','为某动画项目设计世界观视觉圣经'], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]},
    {t:'3年后你在哪里？', o:['拥有国际粉丝群体的独立插画家','知名出版社的签约插画师','以插画为核心的创意品牌创始人','知名游戏或影视公司的概念艺术总监'], s:[{'character':3},{'editorial':3},{'commercial':3},{'concept':3}]}
  ],
  roles: {
    'character':{emoji:'🧝', name:'角色设计师', desc:'创造有灵魂、有辨识度的角色——人物、生物、英雄和反派', detail:'你赋予角色生命。你设计角色的外形、性格在外观上的体现、不同状态下的表情和姿势。好的角色设计让人一眼记住，并产生情感连接。', start:['每天画角色练习——30天角色设计挑战','研究动画和漫画中的经典角色设计','学习Procreate——iPad数字插画的首选工具','建立你的角色设计作品集——ArtStation或Pixiv']},
    'editorial':{emoji:'📰', name:'出版插画师', desc:'用插画为文字赋予视觉生命——书籍封面、报纸插图、杂志配图', detail:'你将文字叙述转化为视觉故事。你阅读文本，提取核心情感，用构图和色彩创作出强化故事的插画。你的作品让读者在翻页前就已被吸引。', start:['学习叙事构图——如何让一张图讲一个故事','研究出版插画经典——原田圭织、Matt Dorfman的作品','练习书籍封面改造——用自己的风格重新设计经典书封','建立投稿作品集，了解出版社的投稿流程']},
    'commercial':{emoji:'💼', name:'商业插画师', desc:'为品牌、广告、产品创作在商业场景下有效传播的插画', detail:'你的插画在商业场景中工作。你快速理解品牌调性和目标受众，能灵活切换风格，在截止日期前交付高质量作品，让客户满意并愿意长期合作。', start:['建立多风格的商业作品集','了解与客户合作的流程——报价、合同、修改轮次','学习在Procreate和Illustrator之间灵活切换','在Behance、小红书上展示作品，主动接触潜在客户']},
    'concept':{emoji:'🌌', name:'概念艺术家', desc:'为游戏、电影和动画设计视觉世界——场景、道具、生物和整体美术风格', detail:'你是虚构世界的建造者。你的工作从世界观构建开始，设计整个视觉语言，然后落实到具体的角色、场景和道具。你的设计是整个制作团队的视觉指南。', start:['学习透视画法——概念设计的基础技能','研究游戏和电影艺术设定集——《艾尔登法环》《银翼杀手2049》','掌握Photoshop——大多数概念艺术家的主要工具','建立ArtStation作品集，研究游戏公司的招聘要求']}
  },
  ui: {l2back:'← 返回插画', title:'插画：选择你的专业方向'}
};

CREATIVE_L2.photo.zh = {
  questions: [
    {t:'摄影中什么最吸引你？', o:['人像摄影——捕捉人的情感和性格','商业摄影——为品牌和产品拍出最佳形象','纪实/新闻摄影——记录真实发生的世界','风光/自然摄影——探索自然之美'], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'你最想精通哪个技能？', o:['人像布光和肖像后期——Adobe Lightroom + Photoshop','产品布光、商业后期和色彩管理','抓拍技巧、在限制中创作、图片编辑','长曝光、自然光运用和风光后期'], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'什么成果最让你有成就感？', o:['你拍的肖像让被摄者自己都惊叹"我有那么好看吗？"','你拍的产品图让品牌的销售额明显提升','你拍的照片出现在新闻头版，引发了社会讨论','你的风光作品在国际摄影比赛中获奖'], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'你更喜欢哪种工作？', o:['在精心布置的场景中与被摄者沟通，捕捉神情','在摄影棚中控制光线，布置产品，反复测试','在街头或新闻现场随机应变，抓住决定性瞬间','早起等光线，在极端环境中耐心等待最佳时机'], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'你会选择哪个项目？', o:['为一家书店的老顾客拍摄肖像系列','为某美妆品牌的新品拍摄全套电商和社媒图片','记录某地区普通人一年的生活变迁','用一年时间拍摄一处自然地点四季的变化'], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]},
    {t:'3年后你在哪里？', o:['受欢迎的独立人像摄影师，档期排到半年后','时尚杂志签约摄影师或商业摄影工作室创始人','图片社驻地摄影师或自由纪实摄影师','环保机构御用摄影师或旅行摄影品牌创始人'], s:[{'portrait':3},{'commercial':3},{'reportage':3},{'landscape':3}]}
  ],
  roles: {
    'portrait':{emoji:'👤', name:'人像摄影师', desc:'捕捉人的本质——表情、情感和个性', detail:'你的照片让被摄者感受到自己被看见。你通过对话和引导让人在镜头前自然放松，用光线和构图捕捉那个真实的他们。一张好的人像可以改变一个人对自己的认知。', start:['学习人像布光基础——伦勃朗光、蝴蝶光','练习用自然光拍人像——开始时最简单','研究历史上的伟大肖像摄影——Irving Penn、Yousuf Karsh','积累作品集——找朋友做模特，免费拍摄换取使用权']},
    'commercial':{emoji:'💡', name:'商业/产品摄影师', desc:'用精准的光线和构图让产品看起来极致诱人', detail:'你的照片让用户决定下单。你在摄影棚中精心布置，控制每一盏灯的方向和强度，在后期精细调整，让产品的每一个细节都在画面中完美呈现。', start:['学习摄影棚布光——硬光、软光的创建和控制','掌握商业后期——Photoshop修片和色彩管理','了解各平台的图片规格——电商主图、Banner、详情页','向本地小品牌提供免费或低价拍摄，积累作品']},
    'reportage':{emoji:'📸', name:'纪实/新闻摄影师', desc:'用照片记录历史，揭示那些不能被遗忘的真相', detail:'你的武器是相机，你的使命是真实。你在混乱、紧迫的环境中快速做出构图决策，捕捉那个"决定性瞬间"，让照片成为时代的见证。', start:['学习新闻图片的叙事逻辑——一组照片如何讲一个故事','了解摄影伦理——什么可以拍、什么不应该拍','练习街头摄影——从记录身边的日常生活开始','研究马格南图片社的摄影师作品']},
    'landscape':{emoji:'🏔️', name:'风光/自然摄影师', desc:'用镜头揭示自然之美，让观者感受到世界的壮阔与宁静', detail:'你的工作需要大量的准备和等待。你研究地形和光线，在最佳时机到达最佳位置，用长曝光和精心构图，拍出那张让人沉默的照片。', start:['精通曝光三角——光圈、快门、ISO的关系','学习构图法则——三分法、引导线、前景的运用','掌握风光后期——Lightroom的色彩和影调处理','用手机先开始——重要的是视角，不是器材']}
  },
  ui: {l2back:'← 返回摄影', title:'摄影：选择你的专业方向'}
};

CREATIVE_L2.motion.zh = {
  questions: [
    {t:'动态设计中什么最吸引你？', o:['动效/MG设计——让品牌和信息动起来','视觉特效——为视频和电影添加不存在的元素','三维设计——建模、纹理和三维动画','视频剪辑——在后期制作中构建故事'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'你最想精通哪个工具？', o:['After Effects + Illustrator——动效和品牌动画','Nuke / DaVinci Fusion——合成和特效','Blender / Cinema 4D——三维建模和渲染','Premiere Pro / DaVinci Resolve——剪辑和调色'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'什么项目最让你兴奋？', o:['为品牌做动态VI和片头动画','在电影镜头中加入火焰或建筑倒塌特效','建模并动画一个原创角色','剪辑一部纪录片或广告片'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'什么让你最有成就感？', o:['当抽象想法变成流畅的动画','当观众看不出哪里是特效','当三维场景比真实照片还真实','当剪辑唤起了观众精准的情感'], s:[{'motion-graphics':2},{'vfx':2},{'3d':2},{'editor':2}]},
    {t:'你会加入作品集的项目是？', o:['动态LOGO和一套转场效果','带有真实感火焰或液体的合成镜头','带原创角色的三维短片','一个剪辑好的短片或MV'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]},
    {t:'3年后你在哪里？', o:['为大品牌和流媒体平台做动效设计','在电影或游戏公司做VFX艺术家','在动画工作室担任三维全才或绑定师','剪辑广告、MV和纪录片'], s:[{'motion-graphics':3},{'vfx':3},{'3d':3},{'editor':3}]}
  ],
  roles: {
    'motion-graphics':{emoji:'✨', name:'动效/MG设计师', desc:'让品牌、数据和想法以动态方式呈现', detail:'动效设计师是会让东西运动的设计师。你在After Effects里创作动态Logo、片头、信息图和UI动效，让静态设计拥有生命力。', start:['School of Motion — schoolofmotion.com','Motion Design School — motiondesign.school','AEScripts — aescripts.com'],startUrls:['https://schoolofmotion.com','https://motiondesign.school','https://aescripts.com']},
    'vfx':{emoji:'💥', name:'视觉特效艺术家', desc:'为视频和电影创作视觉特效', detail:'VFX艺术家把现实中不存在的东西加入视频。你做合成、跟踪和模拟火焰、水流、爆炸效果。', start:['VFX Bro — YouTube','SideFX Houdini — sidefx.com','Foundry Nuke — foundry.com'],startUrls:['https://youtube.com/@vfxbro','https://sidefx.com/learn','https://foundry.com/products/nuke']},
    '3d':{emoji:'🎲', name:'三维设计师', desc:'建模、纹理、渲染三维物体和角色', detail:'三维设计师从零构建数字世界。你对物体和角色进行建模，设置材质和灯光。工具包括Blender、Cinema 4D、Maya。', start:['Blender（免费）— blender.org','Blender Guru — YouTube','CGCookie — cgcookie.com'],startUrls:['https://blender.org','https://youtube.com/@blenderguru','https://cgcookie.com']},
    'editor':{emoji:'🎬', name:'视频剪辑师', desc:'在后期制作中通过剪辑、调色和声音构建故事', detail:'视频剪辑师用单个镜头组建故事。你处理节奏、叙事、调色和声音，在Premiere Pro或DaVinci Resolve中完成后期制作。', start:['DaVinci Resolve（免费）— blackmagicdesign.com','Film Riot — YouTube','剪辑课程 — Skillshare'],startUrls:['https://blackmagicdesign.com/products/davinciresolve','https://youtube.com/@filmriot','https://skillshare.com']}
  },
  ui: {l2back:'← 返回动态设计', title:'动态设计：选择你的专业方向'}
};

