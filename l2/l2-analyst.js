'use strict';
/* ── L2: Бизнес-аналитик / Data Analyst ──────────────────────────────────────
   4 roles: ba 📋 | da 📊 | bi 📈 | product_ana 🔬
   6 questions × 8 languages  /  structure: { t, o, s } per question
──────────────────────────────────────────────────────────────────────────── */

// ─── RU ──────────────────────────────────────────────────────────────────────
L2.analyst.ru = {
  questions: [
    {
      t: 'Что тебя больше всего заряжает в аналитике?',
      o: [
        'Разобраться, как работает бизнес, и найти, где теряются деньги или время',
        'Найти закономерности в данных и превратить их в выводы',
        'Построить дашборд, который каждый день помогает команде принимать решения',
        'Понять, почему пользователи ведут себя именно так, и улучшить продукт'
      ],
      s: [{ba:3},{da:3},{bi:3},{product_ana:3}]
    },
    {
      t: 'Какая задача тебе ближе всего?',
      o: [
        'Собрать требования у стейкхолдеров, описать процессы и написать ТЗ',
        'Написать SQL-запрос, обработать датасет и построить визуализацию',
        'Собрать витрину данных и настроить отчёты в Power BI или Tableau',
        'Провести A/B тест, посчитать метрики и презентовать результаты команде'
      ],
      s: [{ba:3},{da:3},{bi:3},{product_ana:3}]
    },
    {
      t: 'Какой навык ты считаешь своей суперсилой?',
      o: [
        'Переводить хаос требований в чёткие процессы и документы',
        'Видеть паттерны в данных и задавать правильные вопросы',
        'Превращать таблицы в понятные визуализации, которые говорят сами за себя',
        'Понимать пользовательский опыт и связывать поведение с бизнес-метриками'
      ],
      s: [{ba:3},{da:3},{bi:3},{product_ana:3}]
    },
    {
      t: 'Как выглядит твой идеальный рабочий день?',
      o: [
        'Воркшоп с заказчиком, описание процессов AS-IS/TO-BE, написание user stories',
        'Исследование данных, построение гипотез, Python/SQL, написание выводов',
        'Обновление дашбордов, ответы на вопросы бизнеса по цифрам, автоматизация отчётов',
        'Анализ воронки продукта, разбор когорт, обсуждение метрик с product manager'
      ],
      s: [{ba:3},{da:3},{bi:3},{product_ana:3}]
    },
    {
      t: 'Какой инструмент тебе важнее всего?',
      o: [
        'Confluence, Miro, BPMN — для описания процессов и требований',
        'Python (pandas, numpy), SQL, Jupyter — для анализа данных',
        'Power BI, Tableau, Looker — для построения отчётов и дашбордов',
        'Amplitude, Mixpanel, SQL + Excel — для продуктовой аналитики'
      ],
      s: [{ba:3},{da:3},{bi:3},{product_ana:3}]
    },
    {
      t: 'Как выглядит твой успех через 5 лет?',
      o: [
        'Chief Business Analyst или Head of BA — задаю стандарты анализа в компании',
        'Senior Data Scientist — строю ML-модели и влияю на стратегию через данные',
        'Head of BI — отвечаю за аналитическую платформу и культуру данных',
        'Head of Product Analytics или CPO — управляю продуктом на основе данных'
      ],
      s: [{ba:3},{da:3},{bi:3},{product_ana:3}]
    }
  ],
  roles: {
    ba: {
      emoji: '📋',
      name: 'Бизнес-аналитик',
      desc: 'Разбираешься в бизнес-процессах, собираешь требования и помогаешь команде строить правильные решения',
      detail: 'Ты мост между бизнесом и IT. Умеешь разговаривать с заказчиком, переводить его хотелки в чёткие требования и описывать процессы так, чтобы разработчики понимали, что строить.',
      start: ['Изучи нотации BPMN 2.0 и UML (Use Case, Activity Diagrams)', 'Разберись с методологиями Agile, Scrum, написанием User Stories', 'Освой Confluence, Jira, Miro для работы с требованиями', 'Пройди курс по бизнес-анализу (IIBA BABOK или Coursera)'],
      startUrls: ['https://www.iiba.org/', 'https://www.coursera.org/learn/business-analysis-basics', 'https://www.visual-paradigm.com/guide/bpmn/', 'https://www.agilealliance.org/glossary/user-stories/']
    },
    da: {
      emoji: '📊',
      name: 'Data Analyst',
      desc: 'Анализируешь данные, находишь паттерны и превращаешь цифры в выводы, которые помогают принимать решения',
      detail: 'Ты детектив с данными. Пишешь SQL, обрабатываешь датасеты в Python и задаёшь правильные вопросы к данным. Твои выводы влияют на стратегию — не интуиция, а факты.',
      start: ['Изучи SQL глубоко: оконные функции, CTE, подзапросы', 'Освой Python для анализа данных: pandas, numpy, matplotlib', 'Разберись со статистикой: гипотезы, A/B тесты, корреляции', 'Пройди курс Data Analysis на Coursera или DataCamp'],
      startUrls: ['https://www.datacamp.com/', 'https://www.coursera.org/specializations/data-analysis', 'https://mode.com/sql-tutorial/', 'https://kaggle.com/learn']
    },
    bi: {
      emoji: '📈',
      name: 'BI-аналитик / Business Intelligence',
      desc: 'Строишь аналитическую инфраструктуру компании: хранилища данных, ETL-процессы и дашборды для принятия решений',
      detail: 'Ты архитектор данных для бизнеса. Понимаешь, как устроено хранилище, строишь витрины и делаешь данные доступными для всей компании через красивые и понятные дашборды.',
      start: ['Изучи Power BI или Tableau на продвинутом уровне', 'Разберись с основами Data Warehouse: star schema, Kimball', 'Освой основы ETL/ELT и инструменты dbt, Airflow', 'Пройди курс Business Intelligence на Coursera или Udemy'],
      startUrls: ['https://learn.microsoft.com/en-us/power-bi/', 'https://www.tableau.com/learn/training', 'https://www.getdbt.com/blog/', 'https://www.coursera.org/learn/data-warehousing']
    },
    product_ana: {
      emoji: '🔬',
      name: 'Продуктовый аналитик',
      desc: 'Анализируешь поведение пользователей в продукте, проводишь A/B тесты и помогаешь команде улучшать метрики',
      detail: 'Ты голос данных в продуктовой команде. Знаешь воронки, когорты и ретеншн как пять пальцев. Помогаешь принимать решения об изменениях в продукте на основе цифр, а не ощущений.',
      start: ['Изучи основы продуктовых метрик: DAU/MAU, Retention, LTV, ARPPU', 'Освой Amplitude или Mixpanel для продуктовой аналитики', 'Разберись с A/B тестированием: статзначимость, размер выборки', 'Прочитай "Lean Analytics" Алистера Крола'],
      startUrls: ['https://amplitude.com/blog', 'https://mixpanel.com/blog/', 'https://www.coursera.org/learn/product-analytics', 'https://www.amazon.com/Lean-Analytics-Better-Startup-Faster/dp/1449335675']
    }
  },
  ui: {
    tag: 'Аналитик',
    title: 'Какой ты аналитик?',
    subtitle: '6 вопросов — найди свою нишу в аналитике',
    prog: 'Вопрос %d из 6',
    hint: 'Выбери один вариант',
    back: '← Назад',
    next: 'Далее →',
    finish: 'Узнать результат',
    winBadge: 'Твоя ниша в аналитике',
    resTag: 'Результат',
    resSub: 'Твой путь в аналитике',
    lblStart: 'С чего начать:',
    l2back: '← К результатам'
  }
};

// ─── EN ──────────────────────────────────────────────────────────────────────
L2.analyst.en = {
  questions: [
    { t:'What energizes you most about analytics?', o:['Understanding how a business works and finding where money or time is being lost','Finding patterns in data and turning them into insights','Building a dashboard that helps the team make decisions every day','Understanding why users behave the way they do and improving the product'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'Which task feels most natural to you?', o:['Gathering requirements from stakeholders, mapping processes and writing specs','Writing SQL queries, processing datasets and building visualizations','Building data marts and setting up reports in Power BI or Tableau','Running an A/B test, calculating metrics and presenting results to the team'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'What skill is your superpower?', o:['Turning messy requirements into clear processes and documentation','Spotting patterns in data and asking the right questions','Turning spreadsheets into clear visualizations that speak for themselves','Understanding user experience and connecting behavior to business metrics'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'What does your ideal workday look like?', o:['Workshop with the client, mapping AS-IS/TO-BE processes, writing user stories','Exploring data, building hypotheses, Python/SQL, writing findings','Updating dashboards, answering business questions with numbers, automating reports','Analyzing the product funnel, breaking down cohorts, discussing metrics with the PM'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'Which tool matters most to you?', o:['Confluence, Miro, BPMN — for process and requirements documentation','Python (pandas, numpy), SQL, Jupyter — for data analysis','Power BI, Tableau, Looker — for building reports and dashboards','Amplitude, Mixpanel, SQL + Excel — for product analytics'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'What does success look like in 5 years?', o:['Chief Business Analyst or Head of BA — setting analysis standards across the company','Senior Data Scientist — building ML models and influencing strategy through data','Head of BI — owning the analytics platform and data culture','Head of Product Analytics or CPO — managing a product driven by data'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] }
  ],
  roles: {
    ba: { emoji:'📋', name:'Business Analyst', desc:'You understand business processes, gather requirements and help teams build the right solutions', detail:'You\'re the bridge between business and IT. You talk to stakeholders, translate their needs into clear requirements and describe processes so developers understand exactly what to build.', start:['Study BPMN 2.0 and UML notations (Use Case, Activity Diagrams)','Learn Agile, Scrum and how to write User Stories','Master Confluence, Jira and Miro for requirements work','Take a business analysis course (IIBA BABOK or Coursera)'], startUrls:['https://www.iiba.org/','https://www.coursera.org/learn/business-analysis-basics','https://www.visual-paradigm.com/guide/bpmn/','https://www.agilealliance.org/glossary/user-stories/'] },
    da: { emoji:'📊', name:'Data Analyst', desc:'You analyze data, find patterns and turn numbers into insights that drive better decisions', detail:'You\'re a data detective. You write SQL, process datasets in Python and ask the right questions. Your findings shape strategy — facts over gut feel.', start:['Learn SQL deeply: window functions, CTEs, subqueries','Master Python for data analysis: pandas, numpy, matplotlib','Understand statistics: hypothesis testing, A/B tests, correlations','Take a Data Analysis course on Coursera or DataCamp'], startUrls:['https://www.datacamp.com/','https://www.coursera.org/specializations/data-analysis','https://mode.com/sql-tutorial/','https://kaggle.com/learn'] },
    bi: { emoji:'📈', name:'BI Analyst / Business Intelligence', desc:'You build the company\'s analytics infrastructure: data warehouses, ETL pipelines and dashboards for decision-making', detail:'You\'re the data architect for business. You understand how a data warehouse is structured, build data marts and make data accessible to the whole company through clear and compelling dashboards.', start:['Learn Power BI or Tableau at an advanced level','Understand Data Warehouse basics: star schema, Kimball methodology','Learn ETL/ELT fundamentals and tools like dbt, Airflow','Take a Business Intelligence course on Coursera or Udemy'], startUrls:['https://learn.microsoft.com/en-us/power-bi/','https://www.tableau.com/learn/training','https://www.getdbt.com/blog/','https://www.coursera.org/learn/data-warehousing'] },
    product_ana: { emoji:'🔬', name:'Product Analyst', desc:'You analyze user behavior in the product, run A/B tests and help the team improve key metrics', detail:'You\'re the data voice in the product team. You know funnels, cohorts and retention inside out. You help make product decisions based on numbers, not feelings.', start:['Study core product metrics: DAU/MAU, Retention, LTV, ARPPU','Master Amplitude or Mixpanel for product analytics','Understand A/B testing: statistical significance, sample size','Read "Lean Analytics" by Alistair Croll'], startUrls:['https://amplitude.com/blog','https://mixpanel.com/blog/','https://www.coursera.org/learn/product-analytics','https://www.amazon.com/Lean-Analytics-Better-Startup-Faster/dp/1449335675'] }
  },
  ui: { tag:'Analyst', title:'What kind of analyst are you?', subtitle:'6 questions — find your niche in analytics', prog:'Question %d of 6', hint:'Choose one option', back:'← Back', next:'Next →', finish:'See my result', winBadge:'Your niche in analytics', resTag:'Result', resSub:'Your path in analytics', lblStart:'Where to start:', l2back:'← Back to results' }
};

// ─── DE ──────────────────────────────────────────────────────────────────────
L2.analyst.de = {
  questions: [
    { t:'Was begeistert dich am meisten an der Analytik?', o:['Verstehen, wie ein Unternehmen funktioniert, und herausfinden, wo Geld oder Zeit verloren geht','Muster in Daten finden und daraus Erkenntnisse ableiten','Ein Dashboard bauen, das dem Team täglich bei Entscheidungen hilft','Verstehen, warum Nutzer sich so verhalten, und das Produkt verbessern'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'Welche Aufgabe liegt dir am nächsten?', o:['Anforderungen bei Stakeholdern sammeln, Prozesse modellieren und Spezifikationen schreiben','SQL-Abfragen schreiben, Datensätze verarbeiten und Visualisierungen erstellen','Data Marts aufbauen und Berichte in Power BI oder Tableau einrichten','A/B-Test durchführen, Metriken berechnen und Ergebnisse dem Team präsentieren'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'Welche Fähigkeit ist deine Superpower?', o:['Unübersichtliche Anforderungen in klare Prozesse und Dokumentation überführen','Muster in Daten erkennen und die richtigen Fragen stellen','Tabellen in verständliche Visualisierungen verwandeln, die für sich sprechen','User Experience verstehen und Verhalten mit Business-Metriken verknüpfen'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'Wie sieht dein idealer Arbeitstag aus?', o:['Workshop mit dem Kunden, Prozessmodellierung AS-IS/TO-BE, User Stories schreiben','Daten erkunden, Hypothesen aufstellen, Python/SQL, Erkenntnisse dokumentieren','Dashboards aktualisieren, Geschäftsfragen mit Zahlen beantworten, Berichte automatisieren','Produkttrichter analysieren, Kohorten auswerten, Metriken mit dem PM besprechen'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'Welches Tool ist dir am wichtigsten?', o:['Confluence, Miro, BPMN — für Prozess- und Anforderungsdokumentation','Python (pandas, numpy), SQL, Jupyter — für Datenanalyse','Power BI, Tableau, Looker — für Berichte und Dashboards','Amplitude, Mixpanel, SQL + Excel — für Produktanalytik'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'Wie sieht dein Erfolg in 5 Jahren aus?', o:['Chief Business Analyst oder Head of BA — ich setze Analysestandards im Unternehmen','Senior Data Scientist — ich entwickle ML-Modelle und beeinflusse Strategie durch Daten','Head of BI — ich verantworte die Analyseplattform und Datenkultur','Head of Product Analytics oder CPO — ich steuere ein datengetriebenes Produkt'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] }
  ],
  roles: {
    ba: { emoji:'📋', name:'Business Analyst', desc:'Du verstehst Geschäftsprozesse, sammelst Anforderungen und hilfst Teams, die richtigen Lösungen zu entwickeln', detail:'Du bist die Brücke zwischen Business und IT. Du sprichst mit Stakeholdern, übersetzt deren Bedürfnisse in klare Anforderungen und beschreibst Prozesse so, dass Entwickler wissen, was zu bauen ist.', start:['BPMN 2.0 und UML studieren (Use Case, Activity Diagrams)','Agile, Scrum und User Stories kennenlernen','Confluence, Jira und Miro für Anforderungsarbeit meistern','Einen Business-Analyse-Kurs belegen (IIBA BABOK oder Coursera)'], startUrls:['https://www.iiba.org/','https://www.coursera.org/learn/business-analysis-basics','https://www.visual-paradigm.com/guide/bpmn/','https://www.agilealliance.org/glossary/user-stories/'] },
    da: { emoji:'📊', name:'Data Analyst', desc:'Du analysierst Daten, findest Muster und verwandelst Zahlen in Erkenntnisse für bessere Entscheidungen', detail:'Du bist Datendetektiv. Du schreibst SQL, verarbeitest Datensätze in Python und stellst die richtigen Fragen. Deine Erkenntnisse prägen die Strategie — Fakten statt Bauchgefühl.', start:['SQL vertieft lernen: Fensterfunktionen, CTEs, Unterabfragen','Python für Datenanalyse meistern: pandas, numpy, matplotlib','Statistik verstehen: Hypothesentests, A/B-Tests, Korrelationen','Einen Data-Analysis-Kurs auf Coursera oder DataCamp belegen'], startUrls:['https://www.datacamp.com/','https://www.coursera.org/specializations/data-analysis','https://mode.com/sql-tutorial/','https://kaggle.com/learn'] },
    bi: { emoji:'📈', name:'BI-Analyst / Business Intelligence', desc:'Du baust die Analyseinfrastruktur des Unternehmens: Data Warehouse, ETL-Pipelines und Dashboards für Entscheidungen', detail:'Du bist der Datenarchitekt für das Business. Du verstehst den Aufbau eines Data Warehouse, baust Data Marts und machst Daten mit verständlichen Dashboards für alle zugänglich.', start:['Power BI oder Tableau auf fortgeschrittenem Niveau lernen','Data-Warehouse-Grundlagen verstehen: Star Schema, Kimball-Methodik','ETL/ELT-Grundlagen und Tools wie dbt, Airflow kennenlernen','Business-Intelligence-Kurs auf Coursera oder Udemy absolvieren'], startUrls:['https://learn.microsoft.com/en-us/power-bi/','https://www.tableau.com/learn/training','https://www.getdbt.com/blog/','https://www.coursera.org/learn/data-warehousing'] },
    product_ana: { emoji:'🔬', name:'Produktanalyst', desc:'Du analysierst Nutzerverhalten im Produkt, führst A/B-Tests durch und hilfst dem Team, wichtige Metriken zu verbessern', detail:'Du bist die Datenstimme im Produktteam. Du kennst Trichter, Kohorten und Retention in- und auswendig. Du hilfst dabei, Produktentscheidungen auf Basis von Zahlen statt Gefühlen zu treffen.', start:['Kern-Produktmetriken studieren: DAU/MAU, Retention, LTV, ARPPU','Amplitude oder Mixpanel für Produktanalytik meistern','A/B-Tests verstehen: statistische Signifikanz, Stichprobengröße','„Lean Analytics" von Alistair Croll lesen'], startUrls:['https://amplitude.com/blog','https://mixpanel.com/blog/','https://www.coursera.org/learn/product-analytics','https://www.amazon.de/Lean-Analytics-Better-Startup-Faster/dp/1449335675'] }
  },
  ui: { tag:'Analyst', title:'Welcher Analysetyp bist du?', subtitle:'6 Fragen — finde deine Nische in der Analytik', prog:'Frage %d von 6', hint:'Wähle eine Option', back:'← Zurück', next:'Weiter →', finish:'Ergebnis anzeigen', winBadge:'Deine Nische in der Analytik', resTag:'Ergebnis', resSub:'Dein Weg in der Analytik', lblStart:'Wo anfangen:', l2back:'← Zurück zu den Ergebnissen' }
};

// ─── FR ──────────────────────────────────────────────────────────────────────
L2.analyst.fr = {
  questions: [
    { t:"Qu'est-ce qui t'enthousiasme le plus dans l'analytique ?", o:["Comprendre comment fonctionne une entreprise et trouver où l'argent ou le temps se perd","Trouver des tendances dans les données et les transformer en insights","Construire un tableau de bord qui aide l'équipe à prendre des décisions chaque jour","Comprendre pourquoi les utilisateurs se comportent ainsi et améliorer le produit"], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:"Quelle tâche te semble la plus naturelle ?", o:["Recueillir les exigences des parties prenantes, modéliser les processus et rédiger des spécifications","Écrire des requêtes SQL, traiter des jeux de données et construire des visualisations","Créer des data marts et configurer des rapports dans Power BI ou Tableau","Lancer un test A/B, calculer des métriques et présenter les résultats à l'équipe"], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:"Quelle compétence est ton superpouvoir ?", o:["Transformer des exigences complexes en processus clairs et en documentation","Repérer des tendances dans les données et poser les bonnes questions","Transformer des tableaux en visualisations claires qui parlent d'elles-mêmes","Comprendre l'expérience utilisateur et relier les comportements aux métriques business"], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:"À quoi ressemble ta journée idéale ?", o:["Atelier avec le client, modélisation AS-IS/TO-BE, rédaction de user stories","Explorer les données, formuler des hypothèses, Python/SQL, rédiger des conclusions","Mettre à jour les tableaux de bord, répondre aux questions business par les chiffres, automatiser les rapports","Analyser le tunnel produit, décortiquer les cohortes, discuter des métriques avec le PM"], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:"Quel outil est le plus important pour toi ?", o:["Confluence, Miro, BPMN — pour la documentation des processus et des exigences","Python (pandas, numpy), SQL, Jupyter — pour l'analyse de données","Power BI, Tableau, Looker — pour les rapports et tableaux de bord","Amplitude, Mixpanel, SQL + Excel — pour l'analytique produit"], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:"À quoi ressemble ton succès dans 5 ans ?", o:["Chief Business Analyst ou Head of BA — je fixe les standards d'analyse dans l'entreprise","Senior Data Scientist — je construis des modèles ML et influence la stratégie par les données","Head of BI — je pilote la plateforme analytique et la culture de la donnée","Head of Product Analytics ou CPO — je pilote un produit data-driven"], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] }
  ],
  roles: {
    ba: { emoji:'📋', name:'Business Analyst', desc:'Tu comprends les processus métier, collectes les exigences et aides les équipes à construire les bonnes solutions', detail:'Tu es le pont entre le business et l\'IT. Tu parles aux parties prenantes, traduis leurs besoins en exigences claires et décris les processus pour que les développeurs sachent exactement quoi construire.', start:['Étudier BPMN 2.0 et UML (Use Case, Activity Diagrams)','Apprendre Agile, Scrum et comment rédiger des User Stories','Maîtriser Confluence, Jira et Miro pour le travail sur les exigences','Suivre un cours d\'analyse métier (IIBA BABOK ou Coursera)'], startUrls:['https://www.iiba.org/','https://www.coursera.org/learn/business-analysis-basics','https://www.visual-paradigm.com/guide/bpmn/','https://www.agilealliance.org/glossary/user-stories/'] },
    da: { emoji:'📊', name:'Data Analyst', desc:'Tu analyses les données, trouves des tendances et transformes les chiffres en insights pour de meilleures décisions', detail:'Tu es un détective des données. Tu écris du SQL, traites des jeux de données en Python et poses les bonnes questions. Tes conclusions orientent la stratégie — faits plutôt qu\'intuition.', start:['Approfondir SQL : fonctions fenêtre, CTE, sous-requêtes','Maîtriser Python pour l\'analyse : pandas, numpy, matplotlib','Comprendre les statistiques : tests d\'hypothèses, A/B, corrélations','Suivre un cours Data Analysis sur Coursera ou DataCamp'], startUrls:['https://www.datacamp.com/','https://www.coursera.org/specializations/data-analysis','https://mode.com/sql-tutorial/','https://kaggle.com/learn'] },
    bi: { emoji:'📈', name:'Analyste BI / Business Intelligence', desc:'Tu construis l\'infrastructure analytique de l\'entreprise : entrepôts de données, pipelines ETL et tableaux de bord décisionnels', detail:'Tu es l\'architecte des données pour le business. Tu comprends la structure d\'un entrepôt de données, construis des data marts et rends les données accessibles à toute l\'entreprise via des dashboards clairs.', start:['Apprendre Power BI ou Tableau à un niveau avancé','Comprendre les bases du Data Warehouse : star schema, méthodologie Kimball','Connaître les fondamentaux ETL/ELT et les outils dbt, Airflow','Suivre un cours Business Intelligence sur Coursera ou Udemy'], startUrls:['https://learn.microsoft.com/en-us/power-bi/','https://www.tableau.com/learn/training','https://www.getdbt.com/blog/','https://www.coursera.org/learn/data-warehousing'] },
    product_ana: { emoji:'🔬', name:'Analyste Produit', desc:'Tu analyses le comportement des utilisateurs dans le produit, réalises des tests A/B et aides l\'équipe à améliorer les métriques clés', detail:'Tu es la voix des données dans l\'équipe produit. Tu connais les tunnels, les cohortes et la rétention sur le bout des doigts. Tu aides à prendre des décisions produit basées sur les chiffres.', start:['Étudier les métriques produit clés : DAU/MAU, Rétention, LTV, ARPPU','Maîtriser Amplitude ou Mixpanel pour l\'analytique produit','Comprendre les tests A/B : significativité statistique, taille d\'échantillon','Lire « Lean Analytics » d\'Alistair Croll'], startUrls:['https://amplitude.com/blog','https://mixpanel.com/blog/','https://www.coursera.org/learn/product-analytics','https://www.amazon.fr/Lean-Analytics-Better-Startup-Faster/dp/1449335675'] }
  },
  ui: { tag:'Analyste', title:'Quel type d\'analyste es-tu ?', subtitle:'6 questions pour trouver ta niche en analytique', prog:'Question %d sur 6', hint:'Choisis une option', back:'← Retour', next:'Suivant →', finish:'Voir mon résultat', winBadge:'Ta niche en analytique', resTag:'Résultat', resSub:'Ton chemin en analytique', lblStart:'Par où commencer :', l2back:'← Retour aux résultats' }
};

// ─── ES ──────────────────────────────────────────────────────────────────────
L2.analyst.es = {
  questions: [
    { t:'¿Qué te entusiasma más de la analítica?', o:['Entender cómo funciona un negocio y encontrar dónde se pierde dinero o tiempo','Encontrar patrones en los datos y convertirlos en insights','Construir un dashboard que ayude al equipo a tomar decisiones cada día','Entender por qué los usuarios se comportan así y mejorar el producto'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'¿Qué tarea te resulta más natural?', o:['Recopilar requisitos de stakeholders, mapear procesos y escribir especificaciones','Escribir consultas SQL, procesar datasets y construir visualizaciones','Crear data marts y configurar informes en Power BI o Tableau','Lanzar un test A/B, calcular métricas y presentar resultados al equipo'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'¿Cuál es tu superpoder?', o:['Convertir requisitos caóticos en procesos claros y documentación','Ver patrones en datos y hacer las preguntas correctas','Transformar tablas en visualizaciones claras que hablan por sí solas','Entender la experiencia de usuario y conectar el comportamiento con métricas de negocio'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'¿Cómo es tu día de trabajo ideal?', o:['Taller con el cliente, mapeo AS-IS/TO-BE, escribir user stories','Explorar datos, formular hipótesis, Python/SQL, documentar hallazgos','Actualizar dashboards, responder preguntas del negocio con números, automatizar informes','Analizar el embudo del producto, revisar cohortes, discutir métricas con el PM'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'¿Qué herramienta es más importante para ti?', o:['Confluence, Miro, BPMN — para documentar procesos y requisitos','Python (pandas, numpy), SQL, Jupyter — para análisis de datos','Power BI, Tableau, Looker — para informes y dashboards','Amplitude, Mixpanel, SQL + Excel — para analítica de producto'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'¿Cómo luce tu éxito en 5 años?', o:['Chief Business Analyst o Head of BA — establezco estándares de análisis en la empresa','Senior Data Scientist — construyo modelos ML e influyo en la estrategia con datos','Head of BI — lidero la plataforma analítica y la cultura de datos','Head of Product Analytics o CPO — gestiono un producto basado en datos'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] }
  ],
  roles: {
    ba: { emoji:'📋', name:'Analista de Negocio', desc:'Entiendes los procesos de negocio, recopilas requisitos y ayudas a los equipos a construir las soluciones correctas', detail:'Eres el puente entre el negocio y TI. Hablas con los stakeholders, traduces sus necesidades en requisitos claros y describes los procesos para que los desarrolladores sepan exactamente qué construir.', start:['Estudiar BPMN 2.0 y UML (Use Case, Activity Diagrams)','Aprender Agile, Scrum y cómo escribir User Stories','Dominar Confluence, Jira y Miro para el trabajo con requisitos','Tomar un curso de análisis de negocio (IIBA BABOK o Coursera)'], startUrls:['https://www.iiba.org/','https://www.coursera.org/learn/business-analysis-basics','https://www.visual-paradigm.com/guide/bpmn/','https://www.agilealliance.org/glossary/user-stories/'] },
    da: { emoji:'📊', name:'Analista de Datos', desc:'Analizas datos, encuentras patrones y conviertes números en insights que impulsan mejores decisiones', detail:'Eres un detective de datos. Escribes SQL, procesas datasets en Python y haces las preguntas correctas. Tus hallazgos dan forma a la estrategia — hechos, no intuición.', start:['Aprender SQL en profundidad: funciones de ventana, CTEs, subconsultas','Dominar Python para análisis de datos: pandas, numpy, matplotlib','Entender estadística: pruebas de hipótesis, tests A/B, correlaciones','Tomar un curso de Análisis de Datos en Coursera o DataCamp'], startUrls:['https://www.datacamp.com/','https://www.coursera.org/specializations/data-analysis','https://mode.com/sql-tutorial/','https://kaggle.com/learn'] },
    bi: { emoji:'📈', name:'Analista BI / Business Intelligence', desc:'Construyes la infraestructura analítica de la empresa: almacenes de datos, pipelines ETL y dashboards para decisiones', detail:'Eres el arquitecto de datos para el negocio. Entiendes cómo está estructurado un data warehouse, construyes data marts y haces los datos accesibles para toda la empresa mediante dashboards claros.', start:['Aprender Power BI o Tableau a un nivel avanzado','Entender las bases del Data Warehouse: star schema, metodología Kimball','Conocer los fundamentos ETL/ELT y herramientas como dbt, Airflow','Tomar un curso de Business Intelligence en Coursera o Udemy'], startUrls:['https://learn.microsoft.com/en-us/power-bi/','https://www.tableau.com/learn/training','https://www.getdbt.com/blog/','https://www.coursera.org/learn/data-warehousing'] },
    product_ana: { emoji:'🔬', name:'Analista de Producto', desc:'Analizas el comportamiento de los usuarios en el producto, realizas tests A/B y ayudas al equipo a mejorar las métricas clave', detail:'Eres la voz de los datos en el equipo de producto. Conoces los embudos, cohortes y retención al dedillo. Ayudas a tomar decisiones de producto basadas en números, no en sensaciones.', start:['Estudiar métricas clave de producto: DAU/MAU, Retención, LTV, ARPPU','Dominar Amplitude o Mixpanel para analítica de producto','Entender los tests A/B: significancia estadística, tamaño de muestra','Leer "Lean Analytics" de Alistair Croll'], startUrls:['https://amplitude.com/blog','https://mixpanel.com/blog/','https://www.coursera.org/learn/product-analytics','https://es.amazon.com/Lean-Analytics-Better-Startup-Faster/dp/1449335675'] }
  },
  ui: { tag:'Analista', title:'¿Qué tipo de analista eres?', subtitle:'6 preguntas para encontrar tu nicho en analítica', prog:'Pregunta %d de 6', hint:'Elige una opción', back:'← Atrás', next:'Siguiente →', finish:'Ver mi resultado', winBadge:'Tu nicho en analítica', resTag:'Resultado', resSub:'Tu camino en analítica', lblStart:'Por dónde empezar:', l2back:'← Volver a los resultados' }
};

// ─── PT ──────────────────────────────────────────────────────────────────────
L2.analyst.pt = {
  questions: [
    { t:'O que mais te entusiasma na análise?', o:['Entender como um negócio funciona e encontrar onde dinheiro ou tempo se perde','Encontrar padrões nos dados e transformá-los em insights','Construir um dashboard que ajude a equipe a tomar decisões todos os dias','Entender por que os usuários se comportam dessa forma e melhorar o produto'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'Qual tarefa é mais natural para você?', o:['Coletar requisitos de stakeholders, mapear processos e escrever especificações','Escrever consultas SQL, processar datasets e construir visualizações','Criar data marts e configurar relatórios no Power BI ou Tableau','Lançar um teste A/B, calcular métricas e apresentar resultados à equipe'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'Qual habilidade é seu superpoder?', o:['Transformar requisitos caóticos em processos claros e documentação','Identificar padrões nos dados e fazer as perguntas certas','Transformar tabelas em visualizações claras que falam por si mesmas','Entender a experiência do usuário e conectar comportamento a métricas de negócio'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'Como é seu dia de trabalho ideal?', o:['Workshop com o cliente, mapeamento AS-IS/TO-BE, escrever user stories','Explorar dados, formular hipóteses, Python/SQL, documentar conclusões','Atualizar dashboards, responder perguntas do negócio com números, automatizar relatórios','Analisar o funil do produto, revisar coortes, discutir métricas com o PM'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'Qual ferramenta é mais importante para você?', o:['Confluence, Miro, BPMN — para documentar processos e requisitos','Python (pandas, numpy), SQL, Jupyter — para análise de dados','Power BI, Tableau, Looker — para relatórios e dashboards','Amplitude, Mixpanel, SQL + Excel — para análise de produto'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'Como é o seu sucesso em 5 anos?', o:['Chief Business Analyst ou Head of BA — estabeleço padrões de análise na empresa','Senior Data Scientist — construo modelos de ML e influencio a estratégia com dados','Head of BI — lidero a plataforma analítica e a cultura de dados','Head of Product Analytics ou CPO — gerencio um produto orientado por dados'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] }
  ],
  roles: {
    ba: { emoji:'📋', name:'Analista de Negócios', desc:'Você entende processos de negócio, coleta requisitos e ajuda equipes a construir as soluções certas', detail:'Você é a ponte entre negócio e TI. Fala com stakeholders, traduz suas necessidades em requisitos claros e descreve processos para que os desenvolvedores saibam exatamente o que construir.', start:['Estudar BPMN 2.0 e UML (Use Case, Activity Diagrams)','Aprender Agile, Scrum e como escrever User Stories','Dominar Confluence, Jira e Miro para trabalho com requisitos','Fazer um curso de análise de negócios (IIBA BABOK ou Coursera)'], startUrls:['https://www.iiba.org/','https://www.coursera.org/learn/business-analysis-basics','https://www.visual-paradigm.com/guide/bpmn/','https://www.agilealliance.org/glossary/user-stories/'] },
    da: { emoji:'📊', name:'Analista de Dados', desc:'Você analisa dados, encontra padrões e converte números em insights que impulsionam melhores decisões', detail:'Você é um detetive de dados. Escreve SQL, processa datasets em Python e faz as perguntas certas. Suas conclusões moldam a estratégia — fatos, não intuição.', start:['Aprender SQL em profundidade: funções de janela, CTEs, subconsultas','Dominar Python para análise de dados: pandas, numpy, matplotlib','Entender estatística: testes de hipótese, testes A/B, correlações','Fazer um curso de Análise de Dados no Coursera ou DataCamp'], startUrls:['https://www.datacamp.com/','https://www.coursera.org/specializations/data-analysis','https://mode.com/sql-tutorial/','https://kaggle.com/learn'] },
    bi: { emoji:'📈', name:'Analista de BI / Business Intelligence', desc:'Você constrói a infraestrutura analítica da empresa: data warehouses, pipelines ETL e dashboards para tomada de decisão', detail:'Você é o arquiteto de dados para o negócio. Entende a estrutura de um data warehouse, constrói data marts e torna os dados acessíveis para toda a empresa por meio de dashboards claros.', start:['Aprender Power BI ou Tableau em nível avançado','Entender as bases do Data Warehouse: star schema, metodologia Kimball','Conhecer os fundamentos de ETL/ELT e ferramentas como dbt, Airflow','Fazer um curso de Business Intelligence no Coursera ou Udemy'], startUrls:['https://learn.microsoft.com/en-us/power-bi/','https://www.tableau.com/learn/training','https://www.getdbt.com/blog/','https://www.coursera.org/learn/data-warehousing'] },
    product_ana: { emoji:'🔬', name:'Analista de Produto', desc:'Você analisa o comportamento dos usuários no produto, realiza testes A/B e ajuda a equipe a melhorar métricas-chave', detail:'Você é a voz dos dados na equipe de produto. Conhece funis, coortes e retenção de trás para frente. Ajuda a tomar decisões de produto baseadas em números, não em sensações.', start:['Estudar métricas-chave de produto: DAU/MAU, Retenção, LTV, ARPPU','Dominar Amplitude ou Mixpanel para análise de produto','Entender testes A/B: significância estatística, tamanho de amostra','Ler "Lean Analytics" de Alistair Croll'], startUrls:['https://amplitude.com/blog','https://mixpanel.com/blog/','https://www.coursera.org/learn/product-analytics','https://www.amazon.com.br/Lean-Analytics-Better-Startup-Faster/dp/1449335675'] }
  },
  ui: { tag:'Analista', title:'Que tipo de analista você é?', subtitle:'6 perguntas para encontrar seu nicho em análise', prog:'Pergunta %d de 6', hint:'Escolha uma opção', back:'← Voltar', next:'Próximo →', finish:'Ver meu resultado', winBadge:'Seu nicho em análise', resTag:'Resultado', resSub:'Seu caminho em análise', lblStart:'Por onde começar:', l2back:'← Voltar aos resultados' }
};

// ─── AR ──────────────────────────────────────────────────────────────────────
L2.analyst.ar = {
  questions: [
    { t:'ما الذي يُلهمك أكثر في التحليل؟', o:['فهم كيفية عمل الأعمال والعثور على مكان ضياع المال أو الوقت','إيجاد الأنماط في البيانات وتحويلها إلى رؤى','بناء لوحة معلومات تساعد الفريق على اتخاذ القرارات يومياً','فهم سبب تصرف المستخدمين بهذه الطريقة وتحسين المنتج'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'أي مهمة تبدو أكثر طبيعية بالنسبة لك؟', o:['جمع المتطلبات من أصحاب المصلحة ورسم العمليات وكتابة المواصفات','كتابة استعلامات SQL ومعالجة مجموعات البيانات وبناء التصورات','بناء عروض البيانات وإعداد التقارير في Power BI أو Tableau','إجراء اختبار A/B وحساب المقاييس وتقديم النتائج للفريق'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'ما المهارة التي تعتبرها قوتك الخارقة؟', o:['تحويل المتطلبات الفوضوية إلى عمليات وثائقية واضحة','رصد الأنماط في البيانات وطرح الأسئلة الصحيحة','تحويل الجداول إلى تصورات واضحة تتحدث عن نفسها','فهم تجربة المستخدم وربط السلوك بمقاييس الأعمال'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'كيف يبدو يوم عملك المثالي؟', o:['ورشة عمل مع العميل ورسم عمليات AS-IS/TO-BE وكتابة قصص المستخدم','استكشاف البيانات وبناء الفرضيات والعمل بـ Python/SQL وتوثيق النتائج','تحديث لوحات المعلومات والإجابة على أسئلة الأعمال بالأرقام وأتمتة التقارير','تحليل قمع المنتج ودراسة الفئات ومناقشة المقاييس مع مدير المنتج'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'أي أداة هي الأهم بالنسبة لك؟', o:['Confluence وMiro وBPMN — لتوثيق العمليات والمتطلبات','Python (pandas, numpy) وSQL وJupyter — لتحليل البيانات','Power BI وTableau وLooker — للتقارير ولوحات المعلومات','Amplitude وMixpanel وSQL + Excel — لتحليلات المنتج'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'كيف يبدو نجاحك بعد 5 سنوات؟', o:['كبير محللي الأعمال أو رئيس BA — أضع معايير التحليل في الشركة','عالم بيانات أول — أبني نماذج ML وأؤثر في الاستراتيجية من خلال البيانات','رئيس BI — أتولى منصة التحليل وثقافة البيانات','رئيس تحليلات المنتج أو CPO — أدير منتجاً مدفوعاً بالبيانات'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] }
  ],
  roles: {
    ba: { emoji:'📋', name:'محلل أعمال', desc:'تفهم عمليات الأعمال وتجمع المتطلبات وتساعد الفرق على بناء الحلول الصحيحة', detail:'أنت الجسر بين الأعمال وتكنولوجيا المعلومات. تتحدث مع أصحاب المصلحة، وتترجم احتياجاتهم إلى متطلبات واضحة، وتصف العمليات حتى يعرف المطورون بالضبط ما يجب بناؤه.', start:['دراسة نوتاتين BPMN 2.0 وUML (Use Case وActivity Diagrams)','تعلّم Agile وScrum وكيفية كتابة User Stories','إتقان Confluence وJira وMiro للعمل على المتطلبات','الالتحاق بدورة تحليل الأعمال (IIBA BABOK أو Coursera)'], startUrls:['https://www.iiba.org/','https://www.coursera.org/learn/business-analysis-basics','https://www.visual-paradigm.com/guide/bpmn/','https://www.agilealliance.org/glossary/user-stories/'] },
    da: { emoji:'📊', name:'محلل بيانات', desc:'تحلل البيانات وتجد الأنماط وتحوّل الأرقام إلى رؤى تدفع اتخاذ قرارات أفضل', detail:'أنت محقق البيانات. تكتب SQL وتعالج مجموعات البيانات بـ Python وتطرح الأسئلة الصحيحة. نتائجك تشكّل الاستراتيجية — حقائق لا حدس.', start:['تعلّم SQL بعمق: دوال النافذة وCTE والاستعلامات الفرعية','إتقان Python لتحليل البيانات: pandas وnumpy وmatplotlib','فهم الإحصاء: اختبارات الفرضيات واختبارات A/B والارتباطات','الالتحاق بدورة تحليل البيانات على Coursera أو DataCamp'], startUrls:['https://www.datacamp.com/','https://www.coursera.org/specializations/data-analysis','https://mode.com/sql-tutorial/','https://kaggle.com/learn'] },
    bi: { emoji:'📈', name:'محلل BI / ذكاء الأعمال', desc:'تبني البنية التحتية التحليلية للشركة: مستودعات البيانات وخطوط ETL ولوحات المعلومات لاتخاذ القرارات', detail:'أنت مهندس بيانات الأعمال. تفهم بنية مستودع البيانات، وتبني عروض البيانات، وتجعل البيانات متاحة للشركة بأكملها من خلال لوحات معلومات واضحة.', start:['تعلّم Power BI أو Tableau على مستوى متقدم','فهم أسس Data Warehouse: Star Schema ومنهجية Kimball','تعلّم أساسيات ETL/ELT وأدوات dbt وAirflow','الالتحاق بدورة Business Intelligence على Coursera أو Udemy'], startUrls:['https://learn.microsoft.com/en-us/power-bi/','https://www.tableau.com/learn/training','https://www.getdbt.com/blog/','https://www.coursera.org/learn/data-warehousing'] },
    product_ana: { emoji:'🔬', name:'محلل المنتج', desc:'تحلل سلوك المستخدمين في المنتج وتُجري اختبارات A/B وتساعد الفريق على تحسين المقاييس الرئيسية', detail:'أنت صوت البيانات في فريق المنتج. تعرف القمع والفئات والاحتفاظ جيداً. تساعد في اتخاذ قرارات المنتج بناءً على الأرقام لا على الإحساس.', start:['دراسة مقاييس المنتج الأساسية: DAU/MAU والاحتفاظ وLTV وARPPU','إتقان Amplitude أو Mixpanel لتحليلات المنتج','فهم اختبارات A/B: الدلالة الإحصائية وحجم العينة','قراءة كتاب "Lean Analytics" لأليستر كرول'], startUrls:['https://amplitude.com/blog','https://mixpanel.com/blog/','https://www.coursera.org/learn/product-analytics','https://www.amazon.com/Lean-Analytics-Better-Startup-Faster/dp/1449335675'] }
  },
  ui: { tag:'محلل', title:'ما نوع المحلل الذي أنت عليه؟', subtitle:'٦ أسئلة للعثور على مكانتك في التحليل', prog:'السؤال %d من ٦', hint:'اختر خياراً واحداً', back:'→ السابق', next:'التالي ←', finish:'اعرض نتيجتي', winBadge:'مكانتك في التحليل', resTag:'النتيجة', resSub:'مسارك في التحليل', lblStart:'من أين تبدأ:', l2back:'→ العودة إلى النتائج' }
};

// ─── HE ──────────────────────────────────────────────────────────────────────
L2.analyst.he = {
  questions: [
    { t:'מה הכי מרגש אותך בתחום האנליטיקה?', o:['להבין כיצד עסק עובד ולמצוא איפה כסף או זמן אובד','למצוא דפוסים בנתונים ולהפוך אותם לתובנות','לבנות דשבורד שעוזר לצוות לקבל החלטות כל יום','להבין למה משתמשים מתנהגים כך ולשפר את המוצר'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'איזו משימה מרגישה הכי טבעית עבורך?', o:['לאסוף דרישות מ-stakeholders, לתאר תהליכים ולכתוב מפרטים','לכתוב שאילתות SQL, לעבד datasets ולבנות ויזואליזציות','לבנות data marts ולהגדיר דוחות ב-Power BI או Tableau','להריץ בדיקת A/B, לחשב מדדים ולהציג תוצאות לצוות'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'איזו מיומנות היא כוח-העל שלך?', o:['להפוך דרישות כאוטיות לתהליכים ותיעוד ברורים','לראות דפוסים בנתונים ולשאול את השאלות הנכונות','להפוך טבלאות לויזואליזציות ברורות שמדברות בעד עצמן','להבין חוויית משתמש ולחבר התנהגות למדדים עסקיים'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'כיצד נראה יום העבודה האידיאלי שלך?', o:['סדנה עם לקוח, מיפוי תהליכי AS-IS/TO-BE, כתיבת user stories','חקר נתונים, בניית השערות, Python/SQL, תיעוד ממצאים','עדכון דשבורדים, מענה לשאלות עסקיות עם מספרים, אוטומציה של דוחות','ניתוח משפך המוצר, פירוק קוהורטים, דיון במדדים עם ה-PM'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'איזה כלי הכי חשוב לך?', o:['Confluence, Miro, BPMN — לתיעוד תהליכים ודרישות','Python (pandas, numpy), SQL, Jupyter — לניתוח נתונים','Power BI, Tableau, Looker — לדוחות ודשבורדים','Amplitude, Mixpanel, SQL + Excel — לאנליטיקת מוצר'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] },
    { t:'כיצד נראה ההצלחה שלך בעוד 5 שנים?', o:['Chief Business Analyst או Head of BA — אני קובע סטנדרטים לניתוח בחברה','Senior Data Scientist — אני בונה מודלי ML ומשפיע על אסטרטגיה דרך נתונים','Head of BI — אני אחראי על פלטפורמת האנליטיקה ותרבות הנתונים','Head of Product Analytics או CPO — אני מנהל מוצר מונחה-נתונים'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}] }
  ],
  roles: {
    ba: { emoji:'📋', name:'אנליסט עסקי', desc:'אתה מבין תהליכים עסקיים, אוסף דרישות ועוזר לצוותים לבנות את הפתרונות הנכונים', detail:'אתה הגשר בין העסק לטכנולוגיה. מדבר עם stakeholders, מתרגם את הצרכים שלהם לדרישות ברורות ומתאר תהליכים כדי שהמפתחים ידעו בדיוק מה לבנות.', start:['ללמוד נוטציות BPMN 2.0 ו-UML (Use Case, Activity Diagrams)','להכיר Agile, Scrum וכיצד לכתוב User Stories','לשלוט ב-Confluence, Jira ו-Miro לעבודה עם דרישות','לקחת קורס ניתוח עסקי (IIBA BABOK או Coursera)'], startUrls:['https://www.iiba.org/','https://www.coursera.org/learn/business-analysis-basics','https://www.visual-paradigm.com/guide/bpmn/','https://www.agilealliance.org/glossary/user-stories/'] },
    da: { emoji:'📊', name:'Data Analyst', desc:'אתה מנתח נתונים, מוצא דפוסים ומהפך מספרים לתובנות שמניעות החלטות טובות יותר', detail:'אתה בלש נתונים. כותב SQL, מעבד datasets ב-Python ושואל את השאלות הנכונות. הממצאים שלך מעצבים את האסטרטגיה — עובדות, לא תחושות.', start:['ללמוד SQL לעומק: window functions, CTEs, subqueries','לשלוט ב-Python לניתוח נתונים: pandas, numpy, matplotlib','להבין סטטיסטיקה: בדיקות השערות, בדיקות A/B, קורלציות','לקחת קורס ניתוח נתונים ב-Coursera או DataCamp'], startUrls:['https://www.datacamp.com/','https://www.coursera.org/specializations/data-analysis','https://mode.com/sql-tutorial/','https://kaggle.com/learn'] },
    bi: { emoji:'📈', name:'אנליסט BI / Business Intelligence', desc:'אתה בונה את תשתית האנליטיקה של החברה: מחסני נתונים, pipelines של ETL ודשבורדים לקבלת החלטות', detail:'אתה אדריכל הנתונים של העסק. מבין כיצד מחסן הנתונים בנוי, בונה data marts ומנגיש נתונים לכל החברה דרך דשבורדים ברורים.', start:['ללמוד Power BI או Tableau ברמה מתקדמת','להבין יסודות Data Warehouse: star schema, מתודולוגיית Kimball','להכיר יסודות ETL/ELT וכלים כמו dbt, Airflow','לקחת קורס Business Intelligence ב-Coursera או Udemy'], startUrls:['https://learn.microsoft.com/en-us/power-bi/','https://www.tableau.com/learn/training','https://www.getdbt.com/blog/','https://www.coursera.org/learn/data-warehousing'] },
    product_ana: { emoji:'🔬', name:'אנליסט מוצר', desc:'אתה מנתח התנהגות משתמשים במוצר, מריץ בדיקות A/B ועוזר לצוות לשפר מדדים מרכזיים', detail:'אתה קול הנתונים בצוות המוצר. מכיר משפכים, קוהורטים ושימור על הבוהן. עוזר לקבל החלטות מוצר מבוססות מספרים, לא תחושות.', start:['ללמוד מדדי מוצר מרכזיים: DAU/MAU, Retention, LTV, ARPPU','לשלוט ב-Amplitude או Mixpanel לאנליטיקת מוצר','להבין בדיקות A/B: מובהקות סטטיסטית, גודל מדגם','לקרוא "Lean Analytics" מאת אליסטר קרול'], startUrls:['https://amplitude.com/blog','https://mixpanel.com/blog/','https://www.coursera.org/learn/product-analytics','https://www.amazon.com/Lean-Analytics-Better-Startup-Faster/dp/1449335675'] }
  },
  ui: { tag:'אנליסט', title:'איזה סוג אנליסט אתה?', subtitle:'6 שאלות למציאת הנישה שלך באנליטיקה', prog:'שאלה %d מתוך 6', hint:'בחר אפשרות אחת', back:'→ חזרה', next:'הבא ←', finish:'לראות את התוצאה', winBadge:'הנישה שלך באנליטיקה', resTag:'תוצאה', resSub:'הדרך שלך באנליטיקה', lblStart:'מאיפה להתחיל:', l2back:'→ חזרה לתוצאות' }
};

L2.analyst.zh = {
  questions: [
    {t:'分析工作中什么最吸引你？', o:['商业分析——研究市场和竞争对手，支持战略决策','数据分析——处理数字，发现隐藏的规律','商业智能——构建仪表盘和报表系统','产品分析——理解用户行为，改善产品'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}]},
    {t:'你最想精通哪个工具？', o:['Excel + PowerPoint——商业报告和战略分析','Python pandas + SQL——数据处理和分析','Tableau或Power BI——数据可视化','Mixpanel或Amplitude——产品数据分析'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}]},
    {t:'什么工作成果最让你有成就感？', o:['你的市场研究改变了公司的战略方向','数据分析发现了竞争对手没注意到的机会','老板每天用你做的仪表盘做决策','产品实验结果让留存率提升了15%'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}]},
    {t:'你更喜欢哪种工作内容？', o:['调研市场、访谈客户、撰写战略建议','用SQL取数、用Python清洗、找规律','设计KPI体系，搭建自动化报表','分析漏斗转化，设计A/B测试'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}]},
    {t:'你会选择哪个项目？', o:['为新市场进入做全面竞争分析','清洗并分析100万条用户数据','为C端产品搭建核心指标仪表盘','分析某功能上线前后的用户行为变化'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}]},
    {t:'10年后你在哪里？', o:['战略咨询公司的合伙人','大型科技公司的首席数据科学家','BI平台负责人','数据驱动产品的增长VP'], s:[{ba:3},{da:3},{bi:3},{product_ana:3}]}
  ],
  roles: {
    ba: {emoji:'📋', name:'商业分析师', desc:'研究市场和竞争格局，用数据支撑战略决策', detail:'你让公司知道市场在哪里、机会在哪里。你做竞争分析、市场调研和财务建模，结果影响公司的投资和战略方向。', start:['学习Excel高级功能——透视表、VLOOKUP','掌握PowerPoint结构化汇报——金字塔原理','了解财务分析基础——利润表、现金流','阅读《麦肯锡结构化解决问题》']},
    da: {emoji:'📊', name:'数据分析师', desc:'用数字发现业务规律，把数据变成可行动的洞见', detail:'你是公司的侦探。你写SQL取数，用Python分析，用可视化讲故事。你的发现让其他人做出更好的决策。', start:['精通SQL——窗口函数、子查询、JOIN','学习Python数据分析——pandas + matplotlib','了解统计学基础——假设检验、置信区间','在Kaggle上完成3个数据分析项目']},
    bi: {emoji:'📈', name:'BI工程师', desc:'构建让全公司依赖的数据仪表盘和报表体系', detail:'你是数据的基础设施建造者。你设计数据模型，构建ETL流程，制作管理层每天看的仪表盘。你的工作让数据民主化。', start:['学习Tableau或Power BI——官方教程走一遍','掌握SQL——特别是分析型查询','了解数据仓库概念——维度建模、星型模型','实践：用公开数据集做一个完整仪表盘']},
    product_ana: {emoji:'🔬', name:'产品分析师', desc:'理解用户在产品中的行为，帮助产品团队做出数据驱动的决策', detail:'你的实验室是产品本身。你分析用户路径、设计A/B测试、建立留存模型。你的工作直接影响产品迭代方向。', start:['学习Mixpanel或Amplitude——产品分析工具','掌握A/B测试设计——样本量计算、显著性检验','了解用户行为分析框架——AARRR、North Star Metric','阅读《精益数据分析》']}
  },
  ui: {l2back:'← 返回分析', title:'数据与商业分析：选择你的专业方向'}
};
