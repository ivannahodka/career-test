// DEPRECATED — split into lang-base.js + lang-ru.js … lang-he.js
// This file is no longer loaded by index.html or glossary.html.

// ── RUSSIAN ──────────────────────────────────────────────────────────────────
I18N.ru = {
  dir:'ltr', flag:'🇷🇺', name:'RU',
  ui:{
    tag:'Тест для школьников',
    title:'Какая профессия в IT тебе подойдёт?',
    subtitle:'10 вопросов с множественным выбором — узнай своё направление',
    hint:'Можно выбрать несколько вариантов',
    next:'Далее →', back:'← Назад', finish:'Узнать результат →',
    resTag:'Результат', resSub:'Вот что подходит тебе больше всего',
    winBadge:'Твоя профессия', othTitle:'Другие подходящие направления',
    lblStart:'С чего начать', lblDay:'Типичный день', lblTools:'Ключевые инструменты',
    lblSalary:'Зарплата', lblEx:'Что ты создашь', restart:'↺ Пройти заново',
    footer:'Бесплатный тест · Без регистрации · Результат сразу', done:'✓ Готово',
    l2btn:'🔍 Уточнить специализацию →',
    l2back:'← К результату', l2resTag:'Твоя специализация',
    l2resSub:'Вот твоё направление внутри профессии',
    l2othTitle:'Другие подходящие специализации',
    l2toL1:'← К основному результату', hint2:'Можно выбрать несколько вариантов',
    l2direct:'Уже знаешь профессию? Начни с уточняющего теста:',
    l2directBack:'← На главную'
  },
  qs:[
    {t:'Что ты любишь делать в свободное время?',o:['Играть в игры (PC, консоль, мобильные)','Рисовать, лепить, создавать дизайны','Разбирать технику или чинить устройства','Решать задачки, головоломки, стратегии','Общаться и помогать другим людям','Смотреть ролики про технологии и программирование','Создавать что-то своё: блог, видео, сайт','Читать про историю, науку, факты']},
    {t:'Какие школьные предметы даются легко и нравятся?',o:['Математика и алгебра','Физика','Информатика','Рисование / черчение / ИЗО','Литература и русский язык','Биология / химия','Иностранные языки','История / обществознание']},
    {t:'Что из этого описывает тебя лучше всего?',o:['Замечаю ошибки и неточности везде','Люблю, когда результат виден сразу — красиво и наглядно','Могу долго разбираться в сложной проблеме','Умею объяснять другим сложные вещи просто','Хочу понимать, как всё устроено внутри','Люблю, когда есть данные и можно делать выводы','Хочу создавать то, чем будут пользоваться тысячи людей','Легко переключаюсь между разными задачами']},
    {t:'Ты открываешь крутое приложение — что привлекает внимание первым?',o:['Насколько красивый и удобный дизайн','Как быстро оно работает и не лагает','Умные функции: AI, аналитика, подсказки','Интересный игровой процесс или анимации','Нет ли уязвимостей, насколько безопасно','Понятно ли всё без инструкции','Как разработчики решили задачу пользователя']},
    {t:'Какой проект ты бы выбрал для школьной ярмарки?',o:['Сайт или мобильное приложение','Игра — браузерная или мобильная','Анализ данных + визуализация (графики, выводы)','Тест на безопасность — попробовать взломать сайт класса','Красивая инфографика или UI-макет','Организовать команду и продумать план','Автоматизировать что-то скучное (бот, скрипт)','Написать сценарий и тест-план для чужого проекта']},
    {t:'Представь: ты работаешь в IT-компании. Что тебе нравится делать?',o:['Рисую макеты и придумываю интерфейсы','Пишу код который работает на сервере','Делаю красивые страницы и кнопки','Ищу дыры в безопасности до хакеров','Слежу чтобы серверы не падали 24/7','Анализирую данные и строю предсказательные модели','Нахожу баги и пишу тест-кейсы','Общаюсь с заказчиком и ставлю задачи команде']},
    {t:'Что тебя реально раздражает или кажется скучным?',o:['Долго сидеть над одной задачей без результата','Много общаться и проводить встречи','Делать одно и то же по инструкции','Следить за деталями и документировать','Рисовать и думать о внешнем виде','Разбираться в чужом коде или системе','Ничего из этого, всё ок']},
    {t:'Что из этого тебя пугает или кажется сложным?',o:['Много математики и формул','Нести ответственность за решения','Общаться с большой командой каждый день','Не видеть результата своей работы месяцами','Работать с непонятным кодом без документации','Ничего из этого, всё ок']},
    {t:'Что важнее для тебя в будущей работе?',o:['Высокая зарплата','Творческая свобода','Стабильность и понятные задачи','Влиять на продукт и принимать решения','Всегда новые задачи, никакой рутины','Видеть результат своей работы своими глазами','Работать в известной крутой компании']},
    {t:'Что из этого ты уже пробовал или хочешь попробовать?',o:['Сделать сайт или лендинг','Написать бота (Telegram, Discord)','Поиграть в Roblox Studio или Unity','Порисовать в Figma или Canva','Решить задачки на Codeforces / Leetcode','Посмотреть CTF-задания по безопасности','Поанализировать данные в Excel или Python','Ничего ещё не пробовал']}
  ],
  prof:{
    frontend:{name:'Фронтенд-разработчик',desc:'Создаёт всё что видит пользователь: сайты, интерфейсы, анимации.',detail:'Фронтенд-разработчик воплощает дизайн в реальность — именно он превращает макеты в живые страницы. Ты пишешь HTML, CSS и JavaScript, а со временем осваиваешь React или Vue. Работа заметна сразу: написал компонент — открыл браузер — увидел результат. Фронтенд стоит на стыке дизайна и программирования: нужно и чувствовать визуальное, и думать как инженер.',day:'Code review, реализация блока по макету Figma, правка вёрстки на мобильных, тесты в разных браузерах, деплой.',examples:'Интерфейс Netflix, поиск Google, лента Instagram',start:['HTML + CSS — htmlacademy.ru (бесплатно)','JavaScript — learn.javascript.ru','React — react.dev (официально)']},
    backend:{name:'Бэкенд-разработчик',desc:'Пишет «мозг» приложений: логику, базы данных, API.',detail:'Бэкенд — это всё, что происходит «под капотом». Когда ты входишь в аккаунт, делаешь покупку или получаешь уведомление — это работает бэкенд. Ты проектируешь базы данных, пишешь серверную логику, создаёшь API. Одна из самых высокооплачиваемых специализаций в ИТ.',day:'Проектирование API, оптимизация SQL-запросов, написание тестов, code review, совещание с фронтендом.',examples:'Серверы WhatsApp, система рекомендаций Spotify, обработка платежей в банке',start:['Python — python.org','SQL — sqlbolt.com (бесплатно)','Первый проект: Telegram-бот']},
    design:{name:'UI/UX дизайнер',desc:'Придумывает как должен выглядеть и ощущаться продукт.',detail:'UI/UX дизайнер решает, как продукт выглядит и ощущается. Ты исследуешь что нужно пользователям, рисуешь макеты и прототипы. Хороший дизайн — это не «красиво», а «понятно и удобно». Поэтому психология не менее важна, чем художественный вкус.',day:'Интервью с пользователями, wireframes в Figma, прототип новой фичи, обсуждение с разработчиком, A/B тест.',examples:'Дизайн iOS от Apple, интерфейс Airbnb, меню Spotify',start:['Figma — figma.com (бесплатно)','UX-курс на Coursera','Скопируй интерфейс любого приложения как практику']},
    gamedev:{name:'Разработчик игр',desc:'Создаёт игры — от концепции до кода и геймплея.',detail:'Разработчик игр — это программист, дизайнер и сценарист в одном лице. Ты реализуешь игровую механику, физику, AI противников. Gamedev — одна из самых сложных и захватывающих областей ИТ. Многие начинают с модов к любимым играм.',day:'Реализация механики прыжка в Unity, настройка физики, тестирование уровня, оптимизация FPS.',examples:'Minecraft, Fortnite, Among Us, Roblox',start:['Unity Learn — learn.unity.com (бесплатно)','Roblox Studio — бесплатно, есть аудитория','Godot — godotengine.org (бесплатно)']},
    data:{name:'Data Scientist / ML-инженер',desc:'Анализирует данные, строит AI-модели, находит закономерности.',detail:'Data Scientist работает с большими объёмами данных, чтобы находить паттерны и принимать решения. ML-инженер создаёт модели машинного обучения — именно они стоят за рекомендациями YouTube и ChatGPT. Одна из самых быстрорастущих и высокооплачиваемых специальностей.',day:'Загрузка и очистка данных, построение модели, оценка точности, визуализация для команды.',examples:'ChatGPT, рекомендации Netflix и YouTube, антифрод в банках, Siri',start:['Python — kaggle.com/learn (бесплатно)','Соревнования на Kaggle.com','fast.ai — бесплатный практичный курс']},
    security:{name:'Специалист по кибербезопасности',desc:'Ищет уязвимости в системах и защищает их.',detail:'Специалист по кибербезопасности — это легальный хакер. Твоя задача — найти уязвимости раньше злоумышленников. Ты проводишь пентесты, анализируешь вредоносный код, выстраиваешь системы защиты. Спрос на безопасников постоянно растёт.',day:'Сканирование на уязвимости, тест на проникновение, написание отчёта, мониторинг угроз.',examples:'Bug bounty Google и Facebook, защита банков, расследование кибератак',start:['TryHackMe.com — игровой формат, бесплатно','picoCTF — CTF для начинающих','Linux — основа всего']},
    devops:{name:'DevOps / SRE инженер',desc:'Отвечает за стабильную работу сервисов и автоматизацию.',detail:'DevOps-инженер строит мост между разработчиками и серверами. Ты настраиваешь CI/CD пайплайны, управляешь облачной инфраструктурой, следишь за работой сервисов 24/7. Без DevOps код разработчиков просто не попадёт к пользователям.',day:'Настройка GitHub Actions, мониторинг в Grafana, расследование падения сервиса, обновление Kubernetes.',examples:'Инфраструктура Netflix, Google SRE, облако AWS/Azure/GCP',start:['Linux — linuxjourney.com (бесплатно)','Docker — docs.docker.com/get-started','AWS Free Tier — aws.amazon.com/free']},
    qa:{name:'QA-инженер (тестировщик)',desc:'Находит баги до того как их найдут пользователи.',detail:'QA-инженер гарантирует качество продукта. Ты придумываешь тест-кейсы, находишь баги, автоматизируешь проверки. QA — отличный вход в ИТ: не нужно сразу много программирования, важнее внимание к деталям и логическое мышление.',day:'Изучение задачи в Jira, написание тест-кейсов, ручное тестирование, баг-репорт, запуск автотестов.',examples:'Тестирование каждого iOS-обновления, проверка банковских транзакций',start:['«Тестирование ПО» Романа Савина — бесплатно онлайн','Postman — api.postman.com (бесплатно)','Найди баги на любом сайте — это уже практика']},
    pm:{name:'Продакт-менеджер',desc:'Управляет разработкой продукта: ставит задачи, принимает решения.',detail:'Продакт-менеджер — это «CEO продукта». Ты решаешь что именно строить и зачем. Нужно постоянно общаться: с разработчиками, дизайнерами, маркетингом, клиентами. PM не пишет код, но должен понимать технологии достаточно для осмысленного диалога с командой.',day:'Стендап, интервью с пользователем, написание спецификации, приоритизация беклога, анализ метрик.',examples:'Человек, определивший функции первого iPhone; команда за алгоритмом ленты TikTok',start:['«Inspired» — Marty Cagan (книга)','Product Manager на Coursera','Опиши продукт который хочешь создать — это уже PM-мышление']}
  }
};

// ── ENGLISH ───────────────────────────────────────────────────────────────────
I18N.en = {
  dir:'ltr', flag:'🇬🇧', name:'EN',
  ui:{
    tag:'Test for teenagers',
    title:'Which IT career suits you?',
    subtitle:'10 multiple-choice questions — find your direction in tech',
    hint:'You can select multiple answers',
    next:'Next →', back:'← Back', finish:'See my result →',
    resTag:'Result', resSub:'Here\'s what fits you best',
    winBadge:'Your career', othTitle:'Other matching directions',
    lblStart:'How to start', lblDay:'Typical day', lblTools:'Key tools',
    lblSalary:'Salary', lblEx:'What you\'ll build', restart:'↺ Retake test',
    footer:'Free test · No sign-up · Instant result', done:'✓ Done',
    l2btn:'🔍 Find your specialization →',
    l2back:'← Back to result', l2resTag:'Your specialization',
    l2resSub:'Here\'s your direction within the profession',
    l2othTitle:'Other matching specializations',
    l2toL1:'← Back to main result', hint2:'You can select multiple answers',
    l2direct:'Already know your profession? Start with the specialization test:',
    l2directBack:'← Back to start'
  },
  qs:[
    {t:'What do you like to do in your free time?',o:['Play video games (PC, console, mobile)','Draw, sculpt, create designs','Take apart or repair gadgets','Solve puzzles, riddles, strategies','Chat and help other people','Watch videos about tech and programming','Create something of your own: blog, video, website','Read about history, science, facts']},
    {t:'Which school subjects come easily and do you enjoy?',o:['Math and algebra','Physics','Computer science / IT','Art / drawing / technical drawing','Literature and language','Biology / chemistry','Foreign languages','History / social studies']},
    {t:'Which of these describes you best?',o:['I notice mistakes and inaccuracies everywhere','I love when results are visible right away — clear and beautiful','I can work a long time on a tough problem','I\'m good at explaining complex things simply','I want to understand how everything works inside','I love having data to draw conclusions from','I want to create things thousands of people will use','I easily switch between different tasks']},
    {t:'You open a cool app — what grabs your attention first?',o:['How beautiful and user-friendly the design is','How fast it runs without lagging','Smart features: AI, analytics, suggestions','Fun gameplay or animations','Whether there are security vulnerabilities','Whether everything is clear without instructions','How developers solved the user\'s problem']},
    {t:'Which project would you choose for a school fair?',o:['A website or mobile app','A game — browser-based or mobile','Data analysis + visualization (charts, insights)','Security test — try to hack the class website','A beautiful infographic or UI mockup','Organize a team and plan everything out','Automate something boring (bot, script)','Write a test plan for someone else\'s project']},
    {t:'Imagine you work at an IT company. What do you enjoy doing?',o:['I draw mockups and design interfaces','I write code that runs on the server','I build beautiful pages and buttons','I hunt for security holes before hackers do','I keep servers from going down 24/7','I analyze data and build predictive models','I find bugs and write test cases','I talk to clients and assign tasks to the team']},
    {t:'What really annoys you or seems boring?',o:['Sitting on one task for a long time with no visible result','Lots of meetings and communication','Doing the same thing over and over by instructions','Paying attention to details and documenting','Drawing and thinking about visual appearance','Digging through someone else\'s code','None of these, everything\'s fine']},
    {t:'What scares you or seems difficult?',o:['A lot of math and formulas','Being responsible for decisions','Communicating with a big team every day','Not seeing the result of your work for months','Working with unclear code without documentation','None of these, everything\'s fine']},
    {t:'What matters most to you in a future job?',o:['High salary','Creative freedom','Stability and clear tasks','Influencing the product and making decisions','Always new challenges, no routine','Seeing the result of your work with your own eyes','Working at a famous cool company']},
    {t:'What have you already tried or want to try?',o:['Build a website or landing page','Write a bot (Telegram, Discord)','Play in Roblox Studio or Unity','Design in Figma or Canva','Solve problems on Codeforces / Leetcode','Look at CTF security challenges','Analyze data in Excel or Python','Haven\'t tried anything yet']}
  ],
  prof:{
    frontend:{name:'Frontend Developer',desc:'Builds everything users see: websites, interfaces, animations.',detail:'A frontend developer brings designs to life in the browser. You write HTML, CSS and JavaScript — and immediately see the result. Modern frontend devs use frameworks like React or Vue. The job sits at the intersection of design and engineering: you need both visual sense and technical thinking.',day:'Code review, implement a new component from Figma mockup, fix mobile layout, cross-browser testing, deploy.',examples:'Netflix UI, Google Search, Instagram feed',start:['HTML + CSS — freecodecamp.org (free)','JavaScript — javascript.info','React — react.dev (official)']},
    backend:{name:'Backend Developer',desc:'Writes the "brain" of apps: logic, databases, APIs.',detail:'Backend is everything happening under the hood. When you log in, make a purchase or get a notification — that\'s backend. You design databases, write server logic, build APIs. One of the highest-paid specializations in IT.',day:'Design API endpoints, optimize SQL queries, write unit tests, code review, sync with frontend.',examples:'WhatsApp servers, Spotify recommendation engine, bank payment processing',start:['Python — python.org','SQL — sqlbolt.com (free)','First project: build a Telegram bot']},
    design:{name:'UI/UX Designer',desc:'Decides how a product looks and feels.',detail:'A UI/UX designer shapes the user experience. UI is the visual appearance, UX is how it feels to use. You research user needs, create wireframes and prototypes. Good design isn\'t just beautiful — it\'s intuitive and clear. Psychology matters as much as aesthetics.',day:'User interviews, wireframes in Figma, prototype a new feature, align with developers, A/B test.',examples:'Apple iOS design, Airbnb booking flow, Spotify interface',start:['Figma — figma.com (free)','UX Foundations on Coursera','Recreate an existing app\'s design as practice']},
    gamedev:{name:'Game Developer',desc:'Creates games — from concept to code and gameplay.',detail:'A game developer is programmer, designer and storyteller in one. You implement game mechanics, physics and enemy AI. Gamedev is one of the most exciting areas of IT. Many developers start by creating mods for their favorite games.',day:'Implement a new jump mechanic in Unity, tune physics, test a level, optimize FPS.',examples:'Minecraft, Fortnite, Among Us, Roblox',start:['Unity Learn — learn.unity.com (free)','Roblox Studio — free with built-in audience','Godot — godotengine.org (free)']},
    data:{name:'Data Scientist / ML Engineer',desc:'Analyzes data, builds AI models, finds hidden patterns.',detail:'A data scientist works with large datasets to find patterns and drive decisions. ML engineers build machine learning models — the ones behind YouTube recommendations and ChatGPT. One of the fastest-growing, highest-paid fields in tech.',day:'Load and clean data, build a prediction model, evaluate accuracy, visualize results for the team.',examples:'ChatGPT, Netflix & YouTube recommendations, bank fraud detection, Siri',start:['Python — kaggle.com/learn (free)','Compete on Kaggle.com','fast.ai — free practical course']},
    security:{name:'Cybersecurity Specialist',desc:'Finds vulnerabilities in systems and protects them.',detail:'A cybersecurity specialist is a legal hacker. Your job: find vulnerabilities before attackers do. You run penetration tests, analyze malware, build defense systems. Demand for security professionals keeps growing.',day:'Scan system for vulnerabilities, penetration test, write report, monitor suspicious activity.',examples:'Google & Facebook bug bounty programs, bank security, cyber incident investigation',start:['TryHackMe.com — free, gamified format','picoCTF — beginner CTF competitions','Learn Linux basics first']},
    devops:{name:'DevOps / SRE Engineer',desc:'Keeps services running smoothly and automates everything.',detail:'A DevOps engineer bridges developers and servers. You set up CI/CD pipelines, manage cloud infrastructure, ensure 24/7 uptime. Without DevOps, developers\' code never reaches users.',day:'Configure GitHub Actions, monitor metrics in Grafana, investigate an outage, update Kubernetes cluster.',examples:'Netflix infrastructure, Google SRE team, AWS/Azure/GCP cloud',start:['Linux — linuxjourney.com (free)','Docker — docs.docker.com/get-started','AWS Free Tier — aws.amazon.com/free']},
    qa:{name:'QA Engineer (Tester)',desc:'Finds bugs before users do.',detail:'A QA engineer guarantees software quality. You create test cases, find bugs and automate checks. QA is a great entry point into IT — attention to detail and logical thinking matter more than coding at first.',day:'Study a ticket in Jira, write test cases, manual testing, file a bug report, run automated tests.',examples:'Testing every iOS update, bank transaction verification',start:['Software Testing basics — guru99.com (free)','Postman — api.postman.com (free)','Find bugs on any website — that\'s already practice']},
    pm:{name:'Product Manager',desc:'Leads product development: sets tasks, makes decisions, aligns the team.',detail:'A product manager is the "CEO of the product." You decide what the team builds and why. You constantly communicate: with developers, designers, marketing, clients. PMs don\'t write code but must understand tech enough for meaningful conversations.',day:'Team standup, user interview, write a feature spec, prioritize backlog, analyze product metrics.',examples:'The person who defined the original iPhone features; team behind TikTok\'s algorithm',start:['"Inspired" by Marty Cagan (book)','Product Manager course on Coursera','Describe a product you want to build — that\'s already PM thinking']}
  }
};

// ── GERMAN ────────────────────────────────────────────────────────────────────
I18N.de = {
  dir:'ltr', flag:'🇩🇪', name:'DE',
  ui:{
    tag:'Test für Jugendliche',
    title:'Welcher IT-Beruf passt zu dir?',
    subtitle:'10 Fragen mit Mehrfachauswahl — finde deine Richtung',
    hint:'Du kannst mehrere Antworten wählen',
    next:'Weiter →', back:'← Zurück', finish:'Ergebnis sehen →',
    resTag:'Ergebnis', resSub:'Das passt am besten zu dir',
    winBadge:'Dein Beruf', othTitle:'Andere passende Richtungen',
    lblStart:'Wie anfangen', lblDay:'Typischer Arbeitstag', lblTools:'Wichtige Tools',
    lblSalary:'Gehalt', lblEx:'Was du baust', restart:'↺ Nochmal machen',
    footer:'Kostenloser Test · Keine Anmeldung · Sofortiges Ergebnis', done:'✓ Fertig',
    l2btn:'🔍 Spezialisierung finden →', l2back:'← Zurück zum Ergebnis',
    l2resTag:'Deine Spezialisierung', l2resSub:'Das ist deine Richtung im Beruf',
    l2othTitle:'Andere passende Spezialisierungen', l2toL1:'← Zum Hauptergebnis', hint2:'Du kannst mehrere Antworten wählen',
    l2direct:'Kennst du deinen Beruf schon? Starte den Spezialisierungstest:',
    l2directBack:'← Zurück zum Start'
  },
  qs:[
    {t:'Was machst du gerne in deiner Freizeit?',o:['Videospiele spielen (PC, Konsole, Handy)','Zeichnen, basteln, Designs erstellen','Geräte auseinandernehmen oder reparieren','Rätsel lösen, Denksport, Strategiespiele','Mit anderen reden und helfen','Videos über Technologie und Programmierung schauen','Eigene Sachen erstellen: Blog, Video, Website','Über Geschichte, Wissenschaft und Fakten lesen']},
    {t:'Welche Schulfächer fallen dir leicht und machen dir Spaß?',o:['Mathematik und Algebra','Physik','Informatik','Kunst / Zeichnen / Technisches Zeichnen','Deutsch und Literatur','Biologie / Chemie','Fremdsprachen','Geschichte / Sozialkunde']},
    {t:'Was beschreibt dich am besten?',o:['Ich bemerke überall Fehler und Ungenauigkeiten','Ich liebe es, wenn das Ergebnis sofort sichtbar ist','Ich kann lange an einem schwierigen Problem arbeiten','Ich erkläre anderen komplexe Dinge einfach','Ich will verstehen, wie alles von innen funktioniert','Ich liebe es, aus Daten Schlüsse zu ziehen','Ich will etwas erschaffen, das Tausende nutzen','Ich wechsle leicht zwischen verschiedenen Aufgaben']},
    {t:'Du öffnest eine coole App — was fällt dir als erstes auf?',o:['Wie schön und benutzerfreundlich das Design ist','Wie schnell sie läuft ohne zu ruckeln','Smarte Funktionen: KI, Analysen, Vorschläge','Spannendes Gameplay oder Animationen','Ob es Sicherheitslücken gibt','Ob alles ohne Anleitung verständlich ist','Wie die Entwickler das Nutzerproblem gelöst haben']},
    {t:'Welches Projekt würdest du für eine Schulausstellung wählen?',o:['Eine Website oder mobile App','Ein Spiel — Browser oder Handy','Datenanalyse + Visualisierung','Sicherheitstest — Schulwebsite hacken','Eine schöne Infografik oder UI-Mockup','Ein Team organisieren und planen','Etwas Langweiliges automatisieren (Bot, Skript)','Testplan für ein fremdes Projekt schreiben']},
    {t:'Stell dir vor, du arbeitest in einem IT-Unternehmen. Was machst du gerne?',o:['Mockups zeichnen und Interfaces entwerfen','Code schreiben der auf dem Server läuft','Schöne Seiten und Buttons bauen','Sicherheitslücken vor Hackern finden','Sicherstellen, dass Server 24/7 laufen','Daten analysieren und Vorhersagemodelle bauen','Bugs finden und Testfälle schreiben','Mit Kunden reden und dem Team Aufgaben geben']},
    {t:'Was nervt dich wirklich oder erscheint langweilig?',o:['Lange an einer Aufgabe ohne Ergebnis sitzen','Viele Besprechungen und Kommunikation','Immer das Gleiche nach Anleitung tun','Auf Details achten und dokumentieren','Zeichnen und über das Aussehen nachdenken','Sich im Code anderer zurechtfinden','Nichts davon, alles okay']},
    {t:'Was erschreckt dich oder scheint schwierig?',o:['Viel Mathematik und Formeln','Verantwortung für Entscheidungen tragen','Jeden Tag mit einem großen Team kommunizieren','Das Ergebnis der Arbeit monatelang nicht sehen','Mit unklarem Code ohne Dokumentation arbeiten','Nichts davon, alles okay']},
    {t:'Was ist dir bei einer zukünftigen Arbeit am wichtigsten?',o:['Hohes Gehalt','Kreative Freiheit','Stabilität und klare Aufgaben','Das Produkt beeinflussen und Entscheidungen treffen','Immer neue Herausforderungen, keine Routine','Das Ergebnis der Arbeit sehen','Bei einem bekannten coolen Unternehmen arbeiten']},
    {t:'Was hast du schon ausprobiert oder möchtest du ausprobieren?',o:['Eine Website oder Landing Page erstellen','Einen Bot schreiben (Telegram, Discord)','In Roblox Studio oder Unity spielen','In Figma oder Canva zeichnen','Aufgaben auf Codeforces / Leetcode lösen','CTF-Sicherheitsaufgaben anschauen','Daten in Excel oder Python analysieren','Noch nichts ausprobiert']}
  ],
  prof:{
    frontend:{name:'Frontend-Entwickler',desc:'Erstellt alles, was Nutzer sehen: Websites, Interfaces, Animationen.',detail:'Ein Frontend-Entwickler setzt Designs im Browser um. Du schreibst HTML, CSS und JavaScript und siehst das Ergebnis sofort. Moderne Entwickler nutzen Frameworks wie React oder Vue. Diese Arbeit verbindet kreatives Denken mit technischem Know-how.',day:'Code Review, neue Komponente aus Figma-Mockup implementieren, mobilen Layout fixen, browserübergreifend testen.',examples:'Netflix UI, Google Suche, Instagram Feed',start:['HTML + CSS — freecodecamp.org (kostenlos)','JavaScript — javascript.info','React — react.dev']},
    backend:{name:'Backend-Entwickler',desc:'Schreibt das „Gehirn" von Apps: Logik, Datenbanken, API.',detail:'Backend ist alles, was hinter den Kulissen passiert. Logins, Zahlungen, Benachrichtigungen — all das ist Backend. Du entwirfst Datenbankstrukturen, schreibst Serverlogik und erstellst APIs. Eine der bestbezahlten IT-Spezialisierungen.',day:'API-Endpoints entwerfen, SQL-Abfragen optimieren, Unit-Tests schreiben, Code Review.',examples:'WhatsApp-Server, Spotify-Empfehlungsalgorithmus, Bankzahlungen',start:['Python — python.org','SQL — sqlbolt.com (kostenlos)','Erstes Projekt: Telegram-Bot bauen']},
    design:{name:'UI/UX Designer',desc:'Bestimmt, wie ein Produkt aussieht und sich anfühlt.',detail:'Ein UI/UX Designer gestaltet das Nutzererlebnis. UI ist das Erscheinungsbild, UX die Bedienung. Du erforschst Nutzerbedürfnisse, erstellst Wireframes und Prototypen. Gutes Design bedeutet nicht nur schön — sondern intuitiv.',day:'Nutzerinterviews, Wireframes in Figma, Prototyp testen, mit Entwicklern abstimmen, A/B Test.',examples:'Apple iOS Design, Airbnb-Buchungsflow, Spotify-Interface',start:['Figma — figma.com (kostenlos)','UX-Grundlagen auf Coursera','Bestehendes App-Design nachzeichnen']},
    gamedev:{name:'Spieleentwickler',desc:'Erstellt Spiele — von der Idee bis zum fertigen Gameplay.',detail:'Ein Spieleentwickler kombiniert Programmierung mit Game Design. Du implementierst Spielmechaniken, Physik und KI-Gegner. Gamedev ist einer der spannendsten Bereiche der IT. Viele beginnen damit, Mods für Lieblingsspiele zu bauen.',day:'Neue Spielmechanik in Unity implementieren, Physik debuggen, Level testen, FPS optimieren.',examples:'Minecraft, Fortnite, Among Us, Roblox',start:['Unity Learn — learn.unity.com (kostenlos)','Roblox Studio — kostenlos mit Publikum','Godot — godotengine.org']},
    data:{name:'Data Scientist / ML-Ingenieur',desc:'Analysiert Daten, erstellt KI-Modelle, findet Muster.',detail:'Data Scientists arbeiten mit großen Datenmengen, um Muster zu erkennen. ML-Ingenieure bauen Machine-Learning-Modelle — sie stecken hinter YouTube-Empfehlungen und ChatGPT. Ein sehr gefragtes und gut bezahltes Feld.',day:'Daten laden und bereinigen, Vorhersagemodell bauen, Genauigkeit auswerten, Ergebnisse visualisieren.',examples:'ChatGPT, Netflix- & YouTube-Empfehlungen, Betrugserkennung in Banken',start:['Python — kaggle.com/learn (kostenlos)','Kaggle-Wettbewerbe mitmachen','fast.ai — kostenloser Kurs']},
    security:{name:'Cybersicherheitsexperte',desc:'Sucht und behebt Sicherheitslücken in Systemen.',detail:'Ein Cybersicherheitsexperte ist ein legaler Hacker. Du suchst Schwachstellen, bevor Angreifer sie finden — durch Penetrationstests und Malware-Analyse. Die Nachfrage nach Sicherheitsexperten wächst ständig.',day:'System auf Schwachstellen scannen, Sicherheitstest durchführen, Bericht schreiben, Bedrohungen überwachen.',examples:'Google & Facebook Bug-Bounty-Programme, Bankschutz, Cyber-Ermittlungen',start:['TryHackMe.com — kostenlos, spielerisch','picoCTF — Wettbewerb für Anfänger','Linux-Grundlagen lernen']},
    devops:{name:'DevOps / SRE Ingenieur',desc:'Sorgt für stabile Services und automatisiert Prozesse.',detail:'DevOps baut die Brücke zwischen Entwicklung und Betrieb. Du richtest CI/CD-Pipelines ein, verwaltest Cloud-Infrastruktur und stellst sicher, dass Dienste rund um die Uhr laufen.',day:'GitHub Actions konfigurieren, Metriken überwachen, Dienst-Ausfall untersuchen, Kubernetes aktualisieren.',examples:'Netflix-Infrastruktur, Google SRE-Team, AWS/Azure/GCP',start:['Linux — linuxjourney.com (kostenlos)','Docker — docs.docker.com/get-started','AWS Free Tier — aws.amazon.com/free']},
    qa:{name:'QA-Ingenieur (Tester)',desc:'Findet Bugs, bevor Nutzer sie entdecken.',detail:'QA-Ingenieure garantieren Softwarequalität. Du erstellst Testfälle, findest Fehler und automatisierst Prüfungen. QA ist ein toller Einstieg in die IT — Detailgenauigkeit und logisches Denken sind wichtiger als viel Programmiererfahrung.',day:'Ticket in Jira lesen, Testfälle schreiben, manuell testen, Bug-Report erstellen, automatische Tests starten.',examples:'iOS-Updates testen, Banktransaktions-Prüfungen',start:['Software-Testing-Grundlagen — guru99.com','Postman — kostenlos für API-Tests','Bugs auf beliebigen Websites suchen — das ist schon Übung']},
    pm:{name:'Produktmanager',desc:'Leitet die Produktentwicklung: Aufgaben, Entscheidungen, Teamkoordination.',detail:'Ein Produktmanager ist der „CEO des Produkts". Du entscheidest, was das Team baut und warum. Ständige Kommunikation mit Entwicklern, Designern, Marketing und Kunden ist Pflicht. PMs schreiben keinen Code, müssen aber die Technologie verstehen.',day:'Team-Standup, Nutzerinterview, Feature-Spezifikation schreiben, Backlog priorisieren, Produktmetriken analysieren.',examples:'Die Person, die iPhone-Funktionen definierte; das Team hinter TikToks Algorithmus',start:['"Inspired" von Marty Cagan (Buch)','Product Manager Kurs auf Coursera','Beschreibe ein Produkt, das du bauen willst — das ist schon PM-Denken']}
  }
};

// ── FRENCH ────────────────────────────────────────────────────────────────────
I18N.fr = {
  dir:'ltr', flag:'🇫🇷', name:'FR',
  ui:{
    tag:'Test pour adolescents',
    title:'Quel métier de l\'IT te convient ?',
    subtitle:'10 questions à choix multiples — trouve ta voie dans la tech',
    hint:'Tu peux choisir plusieurs réponses',
    next:'Suivant →', back:'← Retour', finish:'Voir mon résultat →',
    resTag:'Résultat', resSub:'Voici ce qui te correspond le mieux',
    winBadge:'Ton métier', othTitle:'Autres directions possibles',
    lblStart:'Par où commencer', lblDay:'Journée type', lblTools:'Outils clés',
    lblSalary:'Salaire', lblEx:'Ce que tu créeras', restart:'↺ Recommencer',
    footer:'Test gratuit · Sans inscription · Résultat immédiat', done:'✓ Terminé',
    l2btn:'🔍 Trouver ma spécialisation →', l2back:'← Retour au résultat',
    l2resTag:'Ta spécialisation', l2resSub:'Voici ta direction dans ce métier',
    l2othTitle:'Autres spécialisations possibles', l2toL1:'← Retour au résultat principal', hint2:'Tu peux choisir plusieurs réponses',
    l2direct:'Tu connais déjà ton métier? Lance le test de spécialisation:',
    l2directBack:'← Retour au début'
  },
  qs:[
    {t:'Que préfères-tu faire pendant ton temps libre ?',o:['Jouer aux jeux vidéo (PC, console, mobile)','Dessiner, modeler, créer des designs','Démonter des appareils ou les réparer','Résoudre des puzzles, énigmes, stratégies','Discuter et aider les autres','Regarder des vidéos sur la tech et la programmation','Créer quelque chose à toi : blog, vidéo, site','Lire sur l\'histoire, les sciences, les faits']},
    {t:'Quelles matières scolaires te viennent facilement et t\'intéressent ?',o:['Mathématiques et algèbre','Physique','Informatique','Arts plastiques / dessin technique','Littérature et français','Biologie / chimie','Langues étrangères','Histoire / sciences sociales']},
    {t:'Laquelle de ces affirmations te décrit le mieux ?',o:['Je remarque les erreurs et imprécisions partout','J\'adore quand le résultat est immédiatement visible','Je peux travailler longtemps sur un problème difficile','Je sais expliquer des choses complexes simplement','Je veux comprendre comment tout fonctionne de l\'intérieur','J\'adore tirer des conclusions à partir de données','Je veux créer des choses que des milliers utiliseront','Je passe facilement d\'une tâche à l\'autre']},
    {t:'Tu ouvres une super appli — qu\'est-ce qui attire ton attention en premier ?',o:['La beauté et l\'ergonomie du design','La rapidité sans ralentissement','Les fonctions intelligentes : IA, analyses, suggestions','Le gameplay intéressant ou les animations','S\'il y a des failles de sécurité','Si tout est clair sans mode d\'emploi','Comment les développeurs ont résolu le problème']},
    {t:'Quel projet choisirais-tu pour une foire scolaire ?',o:['Un site web ou une application mobile','Un jeu navigateur ou mobile','Analyse de données + visualisation','Test de sécurité — tenter de pirater le site de la classe','Une belle infographie ou maquette UI','Organiser une équipe et planifier','Automatiser quelque chose d\'ennuyeux (bot, script)','Écrire un plan de tests pour le projet de quelqu\'un']},
    {t:'Imagine que tu travailles dans une entreprise IT. Qu\'est-ce que tu aimes faire ?',o:['Dessiner des maquettes et concevoir des interfaces','Écrire du code qui tourne sur le serveur','Créer de belles pages et boutons','Chercher des failles de sécurité avant les hackers','S\'assurer que les serveurs ne tombent pas 24h/24','Analyser des données et construire des modèles prédictifs','Trouver des bugs et écrire des cas de test','Communiquer avec les clients et assigner des tâches']},
    {t:'Qu\'est-ce qui t\'agace vraiment ou te semble ennuyeux ?',o:['Rester longtemps sur une tâche sans résultat visible','Beaucoup de réunions et de communication','Faire la même chose encore et encore','Faire attention aux détails et documenter','Dessiner et réfléchir à l\'apparence visuelle','Fouiller dans le code de quelqu\'un d\'autre','Rien de tout cela, tout va bien']},
    {t:'Qu\'est-ce qui te fait peur ou te semble difficile ?',o:['Beaucoup de mathématiques et de formules','Être responsable des décisions','Communiquer avec une grande équipe chaque jour','Ne pas voir le résultat de son travail pendant des mois','Travailler avec du code obscur sans documentation','Rien de tout cela, tout va bien']},
    {t:'Qu\'est-ce qui compte le plus pour toi dans un futur emploi ?',o:['Un salaire élevé','La liberté créative','La stabilité et des tâches claires','Influencer le produit et prendre des décisions','Toujours de nouveaux défis, pas de routine','Voir le résultat de son travail de ses propres yeux','Travailler dans une entreprise connue et cool']},
    {t:'Qu\'as-tu déjà essayé ou veux-tu essayer ?',o:['Créer un site web ou une landing page','Écrire un bot (Telegram, Discord)','Jouer dans Roblox Studio ou Unity','Dessiner dans Figma ou Canva','Résoudre des problèmes sur Codeforces / Leetcode','Regarder des défis CTF de sécurité','Analyser des données dans Excel ou Python','Je n\'ai encore rien essayé']}
  ],
  prof:{
    frontend:{name:'Développeur Frontend',desc:'Crée tout ce que les utilisateurs voient : sites, interfaces, animations.',detail:'Un développeur frontend donne vie aux designs dans le navigateur. Tu écris du HTML, CSS et JavaScript et vois le résultat immédiatement. Les devs modernes utilisent React ou Vue. Ce métier est au carrefour du design et de l\'ingénierie.',day:'Code review, implémenter un composant depuis Figma, corriger le layout mobile, tests multi-navigateurs, déploiement.',examples:'Interface Netflix, Recherche Google, Fil Instagram',start:['HTML + CSS — freecodecamp.org (gratuit)','JavaScript — javascript.info','React — react.dev']},
    backend:{name:'Développeur Backend',desc:'Écrit le « cerveau » des applications : logique, bases de données, API.',detail:'Le backend, c\'est tout ce qui se passe en coulisses. Connexion, paiements, notifications — tout ça, c\'est du backend. Tu conçois des bases de données, écris la logique serveur, crées des APIs. C\'est l\'une des spécialisations IT les mieux rémunérées.',day:'Concevoir des endpoints API, optimiser des requêtes SQL, écrire des tests unitaires, code review.',examples:'Serveurs WhatsApp, moteur de recommandation Spotify, paiements bancaires',start:['Python — python.org','SQL — sqlbolt.com (gratuit)','Premier projet : créer un bot Telegram']},
    design:{name:'Designer UI/UX',desc:'Décide de l\'apparence et des sensations d\'un produit.',detail:'Un designer UI/UX façonne l\'expérience utilisateur. UI c\'est l\'apparence visuelle, UX c\'est la facilité d\'utilisation. Tu explores les besoins des utilisateurs, crées des wireframes et prototypes. Un bon design n\'est pas seulement beau — il est intuitif.',day:'Interviews utilisateurs, wireframes dans Figma, prototyper une fonctionnalité, s\'aligner avec les devs, A/B test.',examples:'Design iOS d\'Apple, flux de réservation Airbnb, interface Spotify',start:['Figma — figma.com (gratuit)','Bases UX sur Coursera','Reproduire le design d\'une app existante comme exercice']},
    gamedev:{name:'Développeur de jeux',desc:'Crée des jeux — de l\'idée jusqu\'au gameplay.',detail:'Un développeur de jeux est programmeur, designer et scénariste à la fois. Tu implémentes des mécaniques de jeu, la physique, l\'IA des ennemis. Le gamedev est l\'un des domaines les plus passionnants de l\'IT.',day:'Implémenter une nouvelle mécanique dans Unity, régler la physique, tester un niveau, optimiser les FPS.',examples:'Minecraft, Fortnite, Among Us, Roblox',start:['Unity Learn — learn.unity.com (gratuit)','Roblox Studio — gratuit avec audience','Godot — godotengine.org']},
    data:{name:'Data Scientist / Ingénieur ML',desc:'Analyse des données, construit des modèles IA, trouve des patterns cachés.',detail:'Un data scientist travaille avec de grandes quantités de données pour trouver des patterns. Les ingénieurs ML construisent des modèles d\'apprentissage automatique — ceux qui font fonctionner les recommandations YouTube et ChatGPT. Un domaine en pleine croissance.',day:'Charger et nettoyer les données, construire un modèle de prédiction, évaluer la précision, visualiser les résultats.',examples:'ChatGPT, recommandations Netflix & YouTube, détection de fraude bancaire',start:['Python — kaggle.com/learn (gratuit)','Participer aux compétitions Kaggle','fast.ai — cours gratuit et pratique']},
    security:{name:'Spécialiste en cybersécurité',desc:'Trouve les vulnérabilités dans les systèmes et les protège.',detail:'Un spécialiste en cybersécurité est un hacker légal. Ta mission : trouver des failles avant les attaquants. Tu effectues des tests de pénétration, analyses les malwares, construis des systèmes de défense. La demande pour ces profils ne cesse de croître.',day:'Scanner les systèmes, faire un pentest, rédiger un rapport, surveiller les menaces.',examples:'Programmes bug bounty de Google & Facebook, sécurité bancaire, investigations cyber',start:['TryHackMe.com — gratuit, format ludique','picoCTF — CTF pour débutants','Apprendre les bases de Linux']},
    devops:{name:'Ingénieur DevOps / SRE',desc:'Assure la stabilité des services et automatise les processus.',detail:'Un ingénieur DevOps fait le pont entre développement et infrastructure. Tu configures des pipelines CI/CD, gères l\'infrastructure cloud, assures une disponibilité 24/7. Sans DevOps, le code des développeurs n\'atteint jamais les utilisateurs.',day:'Configurer GitHub Actions, surveiller les métriques dans Grafana, investiguer une panne, mettre à jour Kubernetes.',examples:'Infrastructure Netflix, équipe SRE de Google, cloud AWS/Azure/GCP',start:['Linux — linuxjourney.com (gratuit)','Docker — docs.docker.com/get-started','AWS Free Tier — aws.amazon.com/free']},
    qa:{name:'Ingénieur QA (Testeur)',desc:'Trouve les bugs avant les utilisateurs.',detail:'Un ingénieur QA garantit la qualité du logiciel. Tu crées des cas de test, trouves des bugs et automatises les vérifications. Le QA est une excellente porte d\'entrée dans l\'IT — l\'attention aux détails compte plus que l\'expérience de codage.',day:'Lire un ticket dans Jira, écrire des cas de test, tester manuellement, rédiger un rapport de bug, lancer les tests auto.',examples:'Tests de chaque mise à jour iOS, vérification des transactions bancaires',start:['Bases du test logiciel — guru99.com','Postman — gratuit pour les tests API','Trouver des bugs sur n\'importe quel site — c\'est déjà de la pratique']},
    pm:{name:'Product Manager',desc:'Pilote le développement produit : tâches, décisions, coordination d\'équipe.',detail:'Un product manager est le "CEO du produit". Tu décides ce que l\'équipe construit et pourquoi. Tu communiques constamment avec les développeurs, designers, marketing et clients. Le PM n\'écrit pas de code mais doit comprendre la technologie.',day:'Standup d\'équipe, interview utilisateur, rédiger une spécification, prioriser le backlog, analyser les métriques produit.',examples:'La personne qui a défini les fonctions du premier iPhone ; l\'équipe derrière l\'algorithme TikTok',start:['"Inspired" par Marty Cagan (livre)','Cours Product Manager sur Coursera','Décris un produit que tu veux créer — c\'est déjà penser comme un PM']}
  }
};

// ── SPANISH ───────────────────────────────────────────────────────────────────
I18N.es = {
  dir:'ltr', flag:'🇪🇸', name:'ES',
  ui:{
    tag:'Test para adolescentes',
    title:'¿Qué carrera de IT te conviene?',
    subtitle:'10 preguntas de opción múltiple — encuentra tu dirección en tecnología',
    hint:'Puedes elegir varias respuestas',
    next:'Siguiente →', back:'← Atrás', finish:'Ver mi resultado →',
    resTag:'Resultado', resSub:'Esto es lo que más te conviene',
    winBadge:'Tu carrera', othTitle:'Otras direcciones afines',
    lblStart:'Cómo empezar', lblDay:'Día típico', lblTools:'Herramientas clave',
    lblSalary:'Salario', lblEx:'Qué crearás', restart:'↺ Repetir test',
    footer:'Test gratuito · Sin registro · Resultado inmediato', done:'✓ Listo',
    l2btn:'🔍 Encontrar mi especialización →', l2back:'← Volver al resultado',
    l2resTag:'Tu especialización', l2resSub:'Esta es tu dirección dentro de la profesión',
    l2othTitle:'Otras especializaciones afines', l2toL1:'← Volver al resultado principal', hint2:'Puedes elegir varias respuestas',
    l2direct:'¿Ya conoces tu profesión? Empieza con el test de especialización:',
    l2directBack:'← Volver al inicio'
  },
  qs:[
    {t:'¿Qué te gusta hacer en tu tiempo libre?',o:['Jugar videojuegos (PC, consola, móvil)','Dibujar, modelar, crear diseños','Desmontar aparatos o repararlos','Resolver acertijos, rompecabezas, estrategias','Charlar y ayudar a otras personas','Ver videos sobre tecnología y programación','Crear algo propio: blog, video, sitio web','Leer sobre historia, ciencia, curiosidades']},
    {t:'¿Qué asignaturas se te dan bien y te gustan?',o:['Matemáticas y álgebra','Física','Informática','Arte / dibujo / diseño técnico','Literatura y lengua','Biología / química','Idiomas extranjeros','Historia / ciencias sociales']},
    {t:'¿Cuál de estas afirmaciones te describe mejor?',o:['Me doy cuenta de los errores en todas partes','Me encanta cuando el resultado se ve de inmediato','Puedo trabajar mucho tiempo en un problema difícil','Sé explicar cosas complejas de forma sencilla','Quiero entender cómo funciona todo por dentro','Me encanta tener datos para sacar conclusiones','Quiero crear algo que miles de personas usen','Paso fácilmente de una tarea a otra']},
    {t:'Abres una app genial — ¿qué llama tu atención primero?',o:['Lo bonito y fácil de usar que es el diseño','Lo rápido que va sin lag','Funciones inteligentes: IA, análisis, sugerencias','El gameplay interesante o las animaciones','Si hay vulnerabilidades de seguridad','Si todo queda claro sin instrucciones','Cómo los desarrolladores resolvieron el problema']},
    {t:'¿Qué proyecto elegirías para una feria escolar?',o:['Un sitio web o app móvil','Un juego en navegador o móvil','Análisis de datos + visualización','Prueba de seguridad — intentar hackear el sitio de la clase','Una infografía bonita o mockup de UI','Organizar un equipo y planificarlo todo','Automatizar algo aburrido (bot, script)','Escribir un plan de pruebas para el proyecto de otro']},
    {t:'Imagina que trabajas en una empresa de IT. ¿Qué te gusta hacer?',o:['Dibujo maquetas y diseño interfaces','Escribo código que corre en el servidor','Creo páginas bonitas y botones','Busco agujeros de seguridad antes que los hackers','Me aseguro de que los servidores no fallen 24/7','Analizo datos y construyo modelos predictivos','Encuentro bugs y escribo casos de prueba','Hablo con clientes y asigno tareas al equipo']},
    {t:'¿Qué te molesta de verdad o te parece aburrido?',o:['Estar mucho tiempo en una tarea sin resultado visible','Muchas reuniones y comunicación','Hacer siempre lo mismo según las instrucciones','Prestar atención a los detalles y documentar','Dibujar y pensar en la apariencia visual','Entender el código de otra persona','Nada de esto, todo bien']},
    {t:'¿Qué te da miedo o te parece difícil?',o:['Mucha matemática y fórmulas','Ser responsable de las decisiones','Comunicarse con un equipo grande cada día','No ver el resultado del trabajo durante meses','Trabajar con código confuso sin documentación','Nada de esto, todo bien']},
    {t:'¿Qué es lo más importante para ti en un trabajo futuro?',o:['Un salario alto','Libertad creativa','Estabilidad y tareas claras','Influir en el producto y tomar decisiones','Siempre nuevos retos, sin rutina','Ver el resultado de tu trabajo con tus propios ojos','Trabajar en una empresa famosa y genial']},
    {t:'¿Qué ya has probado o quieres probar?',o:['Crear un sitio web o landing page','Escribir un bot (Telegram, Discord)','Jugar en Roblox Studio o Unity','Diseñar en Figma o Canva','Resolver problemas en Codeforces / Leetcode','Ver desafíos CTF de seguridad','Analizar datos en Excel o Python','No he probado nada todavía']}
  ],
  prof:{
    frontend:{name:'Desarrollador Frontend',desc:'Crea todo lo que los usuarios ven: sitios web, interfaces, animaciones.',detail:'Un desarrollador frontend da vida a los diseños en el navegador. Escribes HTML, CSS y JavaScript y ves el resultado de inmediato. Los devs modernos usan React o Vue. Este trabajo está en la intersección del diseño y la ingeniería.',day:'Code review, implementar un componente desde Figma, corregir layout móvil, pruebas multi-navegador, despliegue.',examples:'UI de Netflix, Búsqueda de Google, Feed de Instagram',start:['HTML + CSS — freecodecamp.org (gratis)','JavaScript — javascript.info','React — react.dev']},
    backend:{name:'Desarrollador Backend',desc:'Escribe el "cerebro" de las apps: lógica, bases de datos, APIs.',detail:'El backend es todo lo que pasa bajo el capó. Logins, pagos, notificaciones — todo eso es backend. Diseñas bases de datos, escribes lógica de servidor, creas APIs. Una de las especializaciones mejor pagadas en IT.',day:'Diseñar endpoints API, optimizar consultas SQL, escribir tests unitarios, code review.',examples:'Servidores de WhatsApp, motor de recomendación de Spotify, pagos bancarios',start:['Python — python.org','SQL — sqlbolt.com (gratis)','Primer proyecto: crear un bot de Telegram']},
    design:{name:'Diseñador UI/UX',desc:'Decide cómo se ve y se siente un producto.',detail:'Un diseñador UI/UX da forma a la experiencia del usuario. UI es la apariencia visual, UX es cómo se usa. Investigas necesidades de usuarios, creas wireframes y prototipos. El buen diseño no es solo bonito — es intuitivo.',day:'Entrevistas con usuarios, wireframes en Figma, prototipo de nueva función, alinearse con devs, A/B test.',examples:'Diseño iOS de Apple, flujo de reserva de Airbnb, interfaz de Spotify',start:['Figma — figma.com (gratis)','Fundamentos UX en Coursera','Reproduce el diseño de una app existente como práctica']},
    gamedev:{name:'Desarrollador de Videojuegos',desc:'Crea juegos — desde el concepto hasta el código y el gameplay.',detail:'Un desarrollador de juegos es programador, diseñador y narrador a la vez. Implementas mecánicas de juego, física e IA de enemigos. El gamedev es una de las áreas más emocionantes de la IT.',day:'Implementar una nueva mecánica en Unity, ajustar física, probar un nivel, optimizar FPS.',examples:'Minecraft, Fortnite, Among Us, Roblox',start:['Unity Learn — learn.unity.com (gratis)','Roblox Studio — gratis con audiencia','Godot — godotengine.org']},
    data:{name:'Data Scientist / Ingeniero ML',desc:'Analiza datos, construye modelos de IA, encuentra patrones ocultos.',detail:'Un data scientist trabaja con grandes volúmenes de datos para encontrar patrones. Los ingenieros ML construyen modelos de aprendizaje automático — los que hay detrás de las recomendaciones de YouTube y ChatGPT. Uno de los campos con más demanda.',day:'Cargar y limpiar datos, construir modelo de predicción, evaluar precisión, visualizar resultados.',examples:'ChatGPT, recomendaciones de Netflix y YouTube, detección de fraude bancario',start:['Python — kaggle.com/learn (gratis)','Participar en competiciones de Kaggle','fast.ai — curso gratis y práctico']},
    security:{name:'Especialista en Ciberseguridad',desc:'Encuentra vulnerabilidades en sistemas y los protege.',detail:'Un especialista en ciberseguridad es un hacker legal. Tu misión: encontrar vulnerabilidades antes que los atacantes. Realizas pentests, analizas malware, construyes sistemas de defensa. La demanda de estos perfiles no deja de crecer.',day:'Escanear sistemas, hacer pentest, redactar informe, monitorear amenazas.',examples:'Programas bug bounty de Google y Facebook, seguridad bancaria, investigaciones cibernéticas',start:['TryHackMe.com — gratis, formato lúdico','picoCTF — CTF para principiantes','Aprender fundamentos de Linux']},
    devops:{name:'Ingeniero DevOps / SRE',desc:'Garantiza la estabilidad de los servicios y automatiza procesos.',detail:'Un ingeniero DevOps conecta desarrollo e infraestructura. Configuras pipelines CI/CD, gestionas infraestructura en la nube y garantizas disponibilidad 24/7. Sin DevOps, el código nunca llega a los usuarios.',day:'Configurar GitHub Actions, monitorear métricas en Grafana, investigar una caída, actualizar Kubernetes.',examples:'Infraestructura de Netflix, equipo SRE de Google, nube AWS/Azure/GCP',start:['Linux — linuxjourney.com (gratis)','Docker — docs.docker.com/get-started','AWS Free Tier — aws.amazon.com/free']},
    qa:{name:'Ingeniero QA (Tester)',desc:'Encuentra bugs antes de que los usuarios los descubran.',detail:'Un ingeniero QA garantiza la calidad del software. Creas casos de prueba, encuentras bugs y automatizas verificaciones. QA es una excelente puerta de entrada a la IT — la atención al detalle importa más que la experiencia de programación.',day:'Revisar ticket en Jira, escribir casos de prueba, probar manualmente, reportar bug, ejecutar tests automáticos.',examples:'Pruebas de cada actualización de iOS, verificación de transacciones bancarias',start:['Bases de pruebas de software — guru99.com','Postman — gratis para pruebas de API','Encontrar bugs en cualquier sitio web — eso ya es práctica']},
    pm:{name:'Product Manager',desc:'Lidera el desarrollo del producto: tareas, decisiones, coordinación de equipo.',detail:'Un product manager es el "CEO del producto". Decides qué construye el equipo y por qué. Te comunicas constantemente con desarrolladores, diseñadores, marketing y clientes. El PM no escribe código pero debe entender la tecnología.',day:'Standup del equipo, entrevista con usuario, escribir especificación, priorizar backlog, analizar métricas.',examples:'La persona que definió las funciones del primer iPhone; el equipo detrás del algoritmo de TikTok',start:['"Inspired" de Marty Cagan (libro)','Curso Product Manager en Coursera','Describe un producto que quieres crear — eso ya es pensar como PM']}
  }
};

// ── PORTUGUESE ────────────────────────────────────────────────────────────────
I18N.pt = {
  dir:'ltr', flag:'🇧🇷', name:'PT',
  ui:{
    tag:'Teste para adolescentes',
    title:'Qual carreira de TI combina com você?',
    subtitle:'10 perguntas de múltipla escolha — descubra sua direção na tech',
    hint:'Você pode escolher várias respostas',
    next:'Próximo →', back:'← Voltar', finish:'Ver meu resultado →',
    resTag:'Resultado', resSub:'Isso é o que mais combina com você',
    winBadge:'Sua carreira', othTitle:'Outras direções compatíveis',
    lblStart:'Como começar', lblDay:'Dia típico', lblTools:'Ferramentas principais',
    lblSalary:'Salário', lblEx:'O que você vai criar', restart:'↺ Refazer teste',
    footer:'Teste gratuito · Sem cadastro · Resultado imediato', done:'✓ Pronto',
    l2btn:'🔍 Encontrar minha especialização →', l2back:'← Voltar ao resultado',
    l2resTag:'Sua especialização', l2resSub:'Esta é sua direção dentro da profissão',
    l2othTitle:'Outras especializações compatíveis', l2toL1:'← Voltar ao resultado principal', hint2:'Você pode escolher várias respostas',
    l2direct:'Já conhece sua profissão? Comece com o teste de especialização:',
    l2directBack:'← Voltar ao início'
  },
  qs:[
    {t:'O que você gosta de fazer no seu tempo livre?',o:['Jogar videogames (PC, console, celular)','Desenhar, modelar, criar designs','Desmontar aparelhos ou consertá-los','Resolver quebra-cabeças, enigmas, estratégias','Conversar e ajudar outras pessoas','Assistir vídeos sobre tecnologia e programação','Criar algo seu: blog, vídeo, site','Ler sobre história, ciência, curiosidades']},
    {t:'Quais matérias escolares você tem facilidade e gosta?',o:['Matemática e álgebra','Física','Informática / Computação','Artes / desenho técnico','Literatura e língua portuguesa','Biologia / química','Línguas estrangeiras','História / ciências humanas']},
    {t:'Qual dessas afirmações te descreve melhor?',o:['Percebo erros e imprecisões em tudo','Adoro quando o resultado é visível de imediato','Consigo trabalhar por muito tempo num problema difícil','Sei explicar coisas complexas de forma simples','Quero entender como tudo funciona por dentro','Adoro ter dados para tirar conclusões','Quero criar algo que milhares de pessoas vão usar','Mudo facilmente de uma tarefa para outra']},
    {t:'Você abre um app incrível — o que chama sua atenção primeiro?',o:['O quão bonito e fácil de usar é o design','O quão rápido funciona sem travar','Funções inteligentes: IA, análises, sugestões','O gameplay interessante ou as animações','Se há vulnerabilidades de segurança','Se tudo fica claro sem precisar de instruções','Como os desenvolvedores resolveram o problema']},
    {t:'Qual projeto você escolheria para uma feira escolar?',o:['Um site ou aplicativo móvel','Um jogo no navegador ou mobile','Análise de dados + visualização','Teste de segurança — tentar hackear o site da turma','Uma bela infografia ou mockup de UI','Organizar uma equipe e planejar tudo','Automatizar algo chato (bot, script)','Escrever um plano de testes para o projeto de outro']},
    {t:'Imagina que você trabalha em uma empresa de TI. O que gosta de fazer?',o:['Desenho mockups e projeto interfaces','Escrevo código que roda no servidor','Crio páginas bonitas e botões','Busco falhas de segurança antes dos hackers','Garanto que os servidores não caiam 24/7','Analiso dados e construo modelos preditivos','Encontro bugs e escrevo casos de teste','Falo com clientes e distribuo tarefas para a equipe']},
    {t:'O que te irrita de verdade ou parece chato?',o:['Ficar muito tempo em uma tarefa sem resultado','Muitas reuniões e comunicação','Fazer sempre a mesma coisa por instruções','Prestar atenção nos detalhes e documentar','Desenhar e pensar na aparência visual','Entender o código de outra pessoa','Nada disso, está tudo bem']},
    {t:'O que te assusta ou parece difícil?',o:['Muita matemática e fórmulas','Ser responsável pelas decisões','Se comunicar com uma equipe grande todo dia','Não ver o resultado do trabalho por meses','Trabalhar com código confuso sem documentação','Nada disso, está tudo bem']},
    {t:'O que é mais importante para você em um trabalho futuro?',o:['Salário alto','Liberdade criativa','Estabilidade e tarefas claras','Influenciar o produto e tomar decisões','Sempre novos desafios, sem rotina','Ver o resultado do seu trabalho com seus próprios olhos','Trabalhar em uma empresa famosa e legal']},
    {t:'O que você já tentou ou quer experimentar?',o:['Criar um site ou landing page','Escrever um bot (Telegram, Discord)','Brincar no Roblox Studio ou Unity','Desenhar no Figma ou Canva','Resolver problemas no Codeforces / Leetcode','Ver desafios CTF de segurança','Analisar dados no Excel ou Python','Ainda não tentei nada']}
  ],
  prof:{
    frontend:{name:'Desenvolvedor Frontend',desc:'Cria tudo que os usuários veem: sites, interfaces, animações.',detail:'Um desenvolvedor frontend dá vida aos designs no navegador. Você escreve HTML, CSS e JavaScript e vê o resultado na hora. Devs modernos usam React ou Vue. O trabalho fica na interseção do design com a engenharia.',day:'Code review, implementar componente a partir do Figma, corrigir layout mobile, testes multi-navegador, deploy.',examples:'UI da Netflix, Pesquisa do Google, Feed do Instagram',start:['HTML + CSS — freecodecamp.org (grátis)','JavaScript — javascript.info','React — react.dev']},
    backend:{name:'Desenvolvedor Backend',desc:'Escreve o "cérebro" dos apps: lógica, banco de dados, APIs.',detail:'Backend é tudo que acontece por baixo dos panos. Login, pagamentos, notificações — isso é backend. Você projeta bancos de dados, escreve lógica de servidor e cria APIs. Uma das especializações mais bem pagas em TI.',day:'Projetar endpoints de API, otimizar queries SQL, escrever testes, code review.',examples:'Servidores do WhatsApp, motor de recomendação do Spotify, pagamentos bancários',start:['Python — python.org','SQL — sqlbolt.com (grátis)','Primeiro projeto: criar um bot do Telegram']},
    design:{name:'Designer UI/UX',desc:'Decide como um produto parece e como é usado.',detail:'Um designer UI/UX molda a experiência do usuário. UI é a aparência visual, UX é como se usa. Você pesquisa as necessidades dos usuários, cria wireframes e protótipos. Bom design não é só bonito — é intuitivo.',day:'Entrevistas com usuários, wireframes no Figma, prototipar feature, alinhar com devs, A/B test.',examples:'Design do iOS da Apple, fluxo de reserva do Airbnb, interface do Spotify',start:['Figma — figma.com (grátis)','Fundamentos de UX no Coursera','Reproduza o design de um app existente como prática']},
    gamedev:{name:'Desenvolvedor de Jogos',desc:'Cria jogos — do conceito ao código e gameplay.',detail:'Um desenvolvedor de jogos é programador, designer e narrador em um só. Você implementa mecânicas, física e IA de inimigos. Gamedev é uma das áreas mais empolgantes da TI. Muitos começam criando mods dos seus jogos favoritos.',day:'Implementar nova mecânica no Unity, ajustar física, testar fase, otimizar FPS.',examples:'Minecraft, Fortnite, Among Us, Roblox',start:['Unity Learn — learn.unity.com (grátis)','Roblox Studio — grátis com audiência','Godot — godotengine.org']},
    data:{name:'Data Scientist / Engenheiro ML',desc:'Analisa dados, constrói modelos de IA, encontra padrões ocultos.',detail:'Um data scientist trabalha com grandes volumes de dados para encontrar padrões. Engenheiros ML constroem modelos de machine learning — os que alimentam as recomendações do YouTube e o ChatGPT. Uma das áreas com maior demanda.',day:'Carregar e limpar dados, construir modelo preditivo, avaliar acurácia, visualizar resultados.',examples:'ChatGPT, recomendações da Netflix e YouTube, detecção de fraude bancária',start:['Python — kaggle.com/learn (grátis)','Participar de competições no Kaggle','fast.ai — curso grátis e prático']},
    security:{name:'Especialista em Cibersegurança',desc:'Encontra vulnerabilidades em sistemas e os protege.',detail:'Um especialista em cibersegurança é um hacker legal. Sua missão: encontrar falhas antes dos atacantes. Você faz pentests, analisa malware e constrói sistemas de defesa. A demanda por esses profissionais não para de crescer.',day:'Escanear sistemas, fazer pentest, redigir relatório, monitorar ameaças.',examples:'Programas bug bounty do Google e Facebook, segurança bancária, investigações cibernéticas',start:['TryHackMe.com — grátis, formato gamificado','picoCTF — CTF para iniciantes','Aprender fundamentos de Linux']},
    devops:{name:'Engenheiro DevOps / SRE',desc:'Garante estabilidade dos serviços e automatiza processos.',detail:'Um engenheiro DevOps conecta desenvolvimento e infraestrutura. Você configura pipelines CI/CD, gerencia infraestrutura em nuvem e garante disponibilidade 24/7. Sem DevOps, o código nunca chega aos usuários.',day:'Configurar GitHub Actions, monitorar métricas no Grafana, investigar queda de serviço, atualizar Kubernetes.',examples:'Infraestrutura da Netflix, time SRE do Google, nuvem AWS/Azure/GCP',start:['Linux — linuxjourney.com (grátis)','Docker — docs.docker.com/get-started','AWS Free Tier — aws.amazon.com/free']},
    qa:{name:'Engenheiro QA (Testador)',desc:'Encontra bugs antes que os usuários descubram.',detail:'Um engenheiro QA garante a qualidade do software. Você cria casos de teste, encontra bugs e automatiza verificações. QA é uma ótima porta de entrada na TI — atenção aos detalhes importa mais do que experiência com código.',day:'Revisar ticket no Jira, escrever casos de teste, testar manualmente, reportar bug, executar testes automatizados.',examples:'Testes de cada atualização do iOS, verificação de transações bancárias',start:['Fundamentos de teste — guru99.com','Postman — grátis para testes de API','Encontrar bugs em qualquer site — isso já é prática']},
    pm:{name:'Product Manager',desc:'Lidera o desenvolvimento do produto: tarefas, decisões, coordenação da equipe.',detail:'Um product manager é o "CEO do produto". Você decide o que a equipe constrói e por quê. Comunica-se constantemente com desenvolvedores, designers, marketing e clientes. PM não escreve código mas precisa entender tecnologia.',day:'Standup da equipe, entrevista com usuário, escrever especificação, priorizar backlog, analisar métricas do produto.',examples:'A pessoa que definiu as funções do primeiro iPhone; equipe por trás do algoritmo do TikTok',start:['"Inspired" de Marty Cagan (livro)','Curso Product Manager no Coursera','Descreva um produto que quer criar — isso já é pensar como PM']}
  }
};

// ── ARABIC ────────────────────────────────────────────────────────────────────
I18N.ar = {
  dir:'rtl', flag:'🇸🇦', name:'AR',
  ui:{
    tag:'اختبار للمراهقين',
    title:'أي مهنة في تكنولوجيا المعلومات تناسبك؟',
    subtitle:'10 أسئلة متعددة الخيارات — اكتشف مسارك في عالم التقنية',
    hint:'يمكنك اختيار أكثر من إجابة',
    next:'التالي ←', back:'رجوع →', finish:'عرض النتيجة ←',
    resTag:'النتيجة', resSub:'هذا ما يناسبك أكثر',
    winBadge:'مهنتك', othTitle:'مسارات أخرى مناسبة',
    lblStart:'كيف تبدأ', lblDay:'يوم عمل نموذجي', lblTools:'الأدوات الرئيسية',
    lblSalary:'الراتب', lblEx:'ماذا ستبني', restart:'↺ إعادة الاختبار',
    footer:'اختبار مجاني · بدون تسجيل · نتيجة فورية', done:'✓ تم',
    l2btn:'🔍 اكتشف تخصصك ←', l2back:'← العودة للنتيجة',
    l2resTag:'تخصصك', l2resSub:'هذا هو مسارك داخل المهنة',
    l2othTitle:'تخصصات أخرى مناسبة', l2toL1:'← العودة للنتيجة الرئيسية', hint2:'يمكنك اختيار أكثر من إجابة',
    l2direct:'هل تعرف مهنتك بالفعل؟ ابدأ باختبار التخصص:',
    l2directBack:'← العودة للبداية'
  },
  qs:[
    {t:'ماذا تحب أن تفعل في وقت فراغك؟',o:['ألعاب الفيديو (حاسوب، كونسول، موبايل)','الرسم والنحت وتصميم الأشياء','تفكيك الأجهزة أو إصلاحها','حل الألغاز والأحاجي والألعاب الاستراتيجية','التحدث ومساعدة الآخرين','مشاهدة مقاطع عن التكنولوجيا والبرمجة','إنشاء شيء خاص بك: مدونة، فيديو، موقع','القراءة عن التاريخ والعلوم والحقائق']},
    {t:'أي المواد الدراسية تجدها سهلة وتستمتع بها؟',o:['الرياضيات والجبر','الفيزياء','الحاسوب والمعلوماتية','الفنون والرسم التقني','الأدب واللغة العربية','الأحياء والكيمياء','اللغات الأجنبية','التاريخ والدراسات الاجتماعية']},
    {t:'أيٌّ من هذه الجمل تصفك أكثر؟',o:['ألاحظ الأخطاء في كل مكان','أحب أن تكون النتيجة مرئية فوراً — جميلة وواضحة','أستطيع العمل طويلاً على مشكلة معقدة','أستطيع شرح الأشياء المعقدة للآخرين ببساطة','أريد أن أفهم كيف يعمل كل شيء من الداخل','أحب وجود البيانات لاستخلاص النتائج','أريد إنشاء شيء سيستخدمه الآلاف','أنتقل بسهولة بين المهام المختلفة']},
    {t:'تفتح تطبيقاً رائعاً — ما الذي يلفت انتباهك أولاً؟',o:['جمال التصميم وسهولة استخدامه','سرعته وعدم تجمّده','الميزات الذكية: الذكاء الاصطناعي والتحليلات','طريقة اللعب المثيرة أو الرسوم المتحركة','ما إذا كان فيه ثغرات أمنية','ما إذا كان واضحاً دون تعليمات','كيف حل المطورون مشكلة المستخدم']},
    {t:'أي مشروع تختار لمعرض مدرسي؟',o:['موقع ويب أو تطبيق موبايل','لعبة في المتصفح أو الموبايل','تحليل بيانات مع رسوم بيانية وتصور مرئي','اختبار أمني — محاولة اختراق موقع الفصل','إنفوجرافيك جميل أو نموذج واجهة','تنظيم فريق وتخطيط كل شيء','أتمتة شيء ممل (بوت، سكريبت)','كتابة سيناريو وخطة اختبار لمشروع شخص آخر']},
    {t:'تخيل أنك تعمل في شركة تقنية. ماذا تحب أن تفعل؟',o:['أرسم نماذج وأصمم واجهات','أكتب كوداً يعمل على الخادم','أبني صفحات وأزرار جميلة','أبحث عن ثغرات أمنية قبل المخترقين','أضمن أن الخوادم لا تتعطل على مدار الساعة','أحلل البيانات وأبني نماذج تنبؤية','أجد الأخطاء البرمجية وأكتب حالات الاختبار','أتواصل مع العملاء وأوزع المهام على الفريق']},
    {t:'ما الذي يزعجك حقاً أو يبدو مملاً؟',o:['الجلوس طويلاً على مهمة دون نتيجة مرئية','الكثير من الاجتماعات والتواصل','فعل نفس الشيء مراراً وفق التعليمات','الانتباه للتفاصيل والتوثيق','الرسم والتفكير في المظهر البصري','فهم كود أو نظام شخص آخر','لا شيء من هذا، كل شيء بخير']},
    {t:'ما الذي يخيفك أو يبدو صعباً؟',o:['الكثير من الرياضيات والمعادلات','تحمّل المسؤولية عن القرارات','التواصل مع فريق كبير كل يوم','عدم رؤية نتيجة عملك لأشهر','العمل مع كود غامض بدون توثيق','لا شيء من هذا، كل شيء بخير']},
    {t:'ما الأهم بالنسبة لك في وظيفة المستقبل؟',o:['راتب مرتفع','حرية إبداعية','الاستقرار والمهام الواضحة','التأثير على المنتج واتخاذ القرارات','تحديات جديدة دائماً، لا روتين','رؤية نتيجة عملك بعينيك','العمل في شركة مشهورة ورائعة']},
    {t:'ما الذي جربته بالفعل أو تريد تجربته؟',o:['إنشاء موقع ويب أو صفحة هبوط','كتابة بوت (تيليغرام، ديسكورد)','اللعب في Roblox Studio أو Unity','التصميم في Figma أو Canva','حل مسائل في Codeforces / Leetcode','النظر في تحديات CTF الأمنية','تحليل البيانات في Excel أو Python','لم أجرب أي شيء بعد']}
  ],
  prof:{
    frontend:{name:'مطوّر الواجهة الأمامية',desc:'يبني كل ما يراه المستخدم: مواقع، واجهات، رسوم متحركة.',detail:'مطوّر الواجهة الأمامية يُحوّل التصاميم إلى صفحات حية في المتصفح. تكتب HTML وCSS وJavaScript وترى النتيجة فوراً. المطورون الحديثون يستخدمون إطار عمل مثل React أو Vue. العمل يجمع بين التفكير البصري والهندسي.',day:'مراجعة الكود، تنفيذ مكوّن من تصميم Figma، إصلاح تخطيط الجوال، اختبار على متصفحات متعددة، نشر التحديثات.',examples:'واجهة Netflix، بحث Google، خلاصة Instagram',start:['HTML + CSS — freecodecamp.org (مجاني)','JavaScript — javascript.info','React — react.dev']},
    backend:{name:'مطوّر الخلفية',desc:'يكتب "دماغ" التطبيقات: المنطق وقواعد البيانات وواجهات API.',detail:'الخلفية هي كل شيء يحدث خلف الكواليس. تسجيل الدخول، المدفوعات، الإشعارات — كل ذلك هو الخلفية. تصمم قواعد البيانات وتكتب منطق الخادم وتبني واجهات API. من أعلى التخصصات أجراً في تقنية المعلومات.',day:'تصميم نقاط نهاية API، تحسين استعلامات SQL، كتابة اختبارات، مراجعة الكود.',examples:'خوادم WhatsApp، محرك توصيات Spotify، معالجة المدفوعات المصرفية',start:['Python — python.org','SQL — sqlbolt.com (مجاني)','أول مشروع: بناء بوت تيليغرام']},
    design:{name:'مصمم UI/UX',desc:'يحدد كيف يبدو المنتج وكيف يُستخدم.',detail:'مصمم UI/UX يشكّل تجربة المستخدم. UI هي المظهر البصري، وUX هو سهولة الاستخدام. تبحث في احتياجات المستخدمين وتنشئ إطارات سلكية ونماذج أولية. التصميم الجيد ليس فقط جميلاً — بل بديهياً وواضحاً.',day:'مقابلات مع المستخدمين، رسم إطارات في Figma، نمذجة أولية لميزة جديدة، التنسيق مع المطورين، اختبار A/B.',examples:'تصميم iOS من Apple، تدفق حجز Airbnb، واجهة Spotify',start:['Figma — figma.com (مجاني)','أساسيات UX على Coursera','إعادة رسم تصميم تطبيق موجود كتدريب']},
    gamedev:{name:'مطوّر الألعاب',desc:'يصنع الألعاب — من الفكرة إلى الكود وطريقة اللعب.',detail:'مطوّر الألعاب هو مبرمج ومصمم وكاتب سيناريو في آن واحد. تنفذ ميكانيكيات اللعبة والفيزياء وذكاء الأعداء. تطوير الألعاب أحد أكثر مجالات تقنية المعلومات إثارة.',day:'تنفيذ ميكانيكية قفز جديدة في Unity، ضبط الفيزياء، اختبار مستوى، تحسين معدل الإطارات.',examples:'Minecraft، Fortnite، Among Us، Roblox',start:['Unity Learn — learn.unity.com (مجاني)','Roblox Studio — مجاني مع جمهور جاهز','Godot — godotengine.org']},
    data:{name:'عالم بيانات / مهندس تعلم آلي',desc:'يحلل البيانات ويبني نماذج الذكاء الاصطناعي ويكتشف الأنماط.',detail:'عالم البيانات يعمل مع كميات ضخمة من البيانات لاكتشاف الأنماط. مهندسو التعلم الآلي يبنون النماذج التي تشغّل توصيات YouTube وChatGPT. أحد أسرع المجالات نمواً وأعلاها راتباً.',day:'تحميل البيانات وتنظيفها، بناء نموذج تنبؤي، تقييم الدقة، تصور النتائج.',examples:'ChatGPT، توصيات Netflix وYouTube، كشف الاحتيال المصرفي',start:['Python — kaggle.com/learn (مجاني)','المشاركة في مسابقات Kaggle','fast.ai — دورة مجانية وعملية']},
    security:{name:'متخصص الأمن السيبراني',desc:'يكتشف الثغرات في الأنظمة ويحميها.',detail:'متخصص الأمن السيبراني هو مخترق قانوني. مهمتك: العثور على الثغرات قبل المهاجمين. تجري اختبارات الاختراق، وتحلل البرمجيات الخبيثة، وتبني أنظمة الدفاع. الطلب على هؤلاء المتخصصين يرتفع باستمرار.',day:'مسح الأنظمة بحثاً عن ثغرات، اختبار اختراق، كتابة تقرير، مراقبة التهديدات.',examples:'برامج Bug Bounty من Google وFacebook، حماية الأنظمة المصرفية، التحقيق في الهجمات السيبرانية',start:['TryHackMe.com — مجاني، تنسيق تفاعلي','picoCTF — مسابقات للمبتدئين','تعلم أساسيات Linux أولاً']},
    devops:{name:'مهندس DevOps / SRE',desc:'يضمن استقرار الخدمات ويؤتمت العمليات.',detail:'مهندس DevOps يربط التطوير بالبنية التحتية. تضبط خطوط أنابيب CI/CD، وتدير البنية التحتية السحابية، وتضمن التوفر على مدار الساعة. بدون DevOps، لن يصل كود المطورين إلى المستخدمين أبداً.',day:'إعداد GitHub Actions، مراقبة المقاييس في Grafana، التحقيق في انقطاع الخدمة، تحديث Kubernetes.',examples:'بنية Netflix التحتية، فريق SRE في Google، سحابة AWS/Azure/GCP',start:['Linux — linuxjourney.com (مجاني)','Docker — docs.docker.com/get-started','AWS Free Tier — aws.amazon.com/free']},
    qa:{name:'مهندس ضمان الجودة (المختبِر)',desc:'يجد الأخطاء قبل أن يكتشفها المستخدمون.',detail:'مهندس ضمان الجودة يضمن جودة البرمجيات. تنشئ حالات الاختبار، وتجد الأخطاء، وتؤتمت عمليات التحقق. ضمان الجودة نقطة دخول رائعة لعالم تقنية المعلومات — الانتباه للتفاصيل أهم من الخبرة البرمجية.',day:'قراءة التذكرة في Jira، كتابة حالات اختبار، اختبار يدوي، تقرير خطأ، تشغيل الاختبارات الآلية.',examples:'اختبار كل تحديث iOS، التحقق من المعاملات المصرفية',start:['أساسيات اختبار البرمجيات — guru99.com','Postman — مجاني لاختبار API','البحث عن أخطاء في أي موقع — هذا تدريب فعلي']},
    pm:{name:'مدير المنتج',desc:'يقود تطوير المنتج: المهام، القرارات، تنسيق الفريق.',detail:'مدير المنتج هو "الرئيس التنفيذي للمنتج". تقرر ما يبنيه الفريق ولماذا. تتواصل باستمرار مع المطورين والمصممين والتسويق والعملاء. مدير المنتج لا يكتب كوداً لكنه يجب أن يفهم التقنية.',day:'اجتماع الفريق اليومي، مقابلة مستخدم، كتابة مواصفة، ترتيب أولويات القائمة، تحليل مقاييس المنتج.',examples:'الشخص الذي حدد ميزات iPhone الأول؛ الفريق وراء خوارزمية TikTok',start:['"Inspired" لمارتي كاغان (كتاب)','دورة مدير المنتج على Coursera','صف منتجاً تريد إنشاءه — هذا بالفعل تفكير مدير المنتج']}
  }
};

// ── HEBREW ────────────────────────────────────────────────────────────────────
I18N.he = {
  dir:'rtl', flag:'🇮🇱', name:'HE',
  ui:{
    tag:'מבחן למתבגרים',
    title:'איזו קריירה בהייטק מתאימה לך?',
    subtitle:'10 שאלות בחירה — גלה את הכיוון שלך בעולם הטכנולוגיה',
    hint:'אפשר לבחור כמה תשובות',
    next:'הבא ←', back:'→ חזרה', finish:'לתוצאה ←',
    resTag:'תוצאה', resSub:'זה מה שמתאים לך הכי טוב',
    winBadge:'המקצוע שלך', othTitle:'כיוונים נוספים שמתאימים',
    lblStart:'איך להתחיל', lblDay:'יום עבודה טיפוסי', lblTools:'כלים מרכזיים',
    lblSalary:'שכר', lblEx:'מה תבנה', restart:'↺ לעשות שוב',
    footer:'מבחן חינמי · ללא הרשמה · תוצאה מיידית', done:'✓ סיום',
    l2btn:'🔍 מצא את ההתמחות שלך ←', l2back:'→ חזרה לתוצאה',
    l2resTag:'ההתמחות שלך', l2resSub:'זהו הכיוון שלך בתוך המקצוע',
    l2othTitle:'התמחויות נוספות שמתאימות', l2toL1:'→ חזרה לתוצאה הראשית', hint2:'אפשר לבחור כמה תשובות',
    l2direct:'כבר יודע את המקצוע? התחל ישירות במבחן ההתמחות:',
    l2directBack:'→ חזרה להתחלה'
  },
  qs:[
    {t:'מה אתה אוהב לעשות בזמן הפנוי?',o:['לשחק משחקי מחשב (PC, קונסולה, מובייל)','לצייר, לפסל, ליצור עיצובים','לפרק מכשירים או לתקן אותם','לפתור חידות, פאזלים, אסטרטגיה','לשוחח ולעזור לאנשים אחרים','לצפות בסרטונים על טכנולוגיה ותכנות','ליצור משהו משלי: בלוג, סרטון, אתר','לקרוא על היסטוריה, מדע, עובדות']},
    {t:'אילו מקצועות בבית הספר קלים עליך ואתה נהנה מהם?',o:['מתמטיקה ואלגברה','פיזיקה','מדעי המחשב','אמנות / ציור / שרטוט','ספרות ולשון','ביולוגיה / כימיה','שפות זרות','היסטוריה / אזרחות']},
    {t:'מה מתאר אותך הכי טוב?',o:['אני מבחין בשגיאות ואי-דיוקים בכל מקום','אני אוהב כשהתוצאה נראית מיד — יפה וברורה','אני יכול לעבוד שעות על בעיה קשה','אני טוב בהסבר דברים מסובכים בפשטות','אני רוצה להבין איך הכל עובד מבפנים','אני אוהב כשיש נתונים ואפשר להסיק מסקנות','אני רוצה ליצור דברים שאלפים ישתמשו בהם','אני עובר בקלות בין משימות שונות']},
    {t:'אתה פותח אפליקציה מגניבה — מה מושך את תשומת לבך ראשון?',o:['כמה העיצוב יפה ונוח לשימוש','כמה מהר הוא עובד ולא נתקע','פיצ\'רים חכמים: AI, אנליטיקה, המלצות','גיימפליי מעניין או אנימציות','אם יש פרצות אבטחה','אם הכל ברור בלי הוראות','איך המפתחים פתרו את בעיית המשתמש']},
    {t:'איזה פרויקט תבחר לתערוכת בית ספר?',o:['אתר או אפליקציית מובייל','משחק — בדפדפן או מובייל','ניתוח נתונים + ויזואליזציה (גרפים, תובנות)','מבחן אבטחה — לנסות לפרוץ לאתר הכיתה','אינפוגרפיקה יפה או UI-מוקאפ','לארגן צוות ולתכנן הכל','לאוטומט משהו משעמם (בוט, סקריפט)','לכתוב תסריט ותכנית בדיקות לפרויקט של מישהו אחר']},
    {t:'דמיין שאתה עובד בחברת הייטק. מה אתה אוהב לעשות?',o:['מצייר מוקאפים ומעצב ממשקים','כותב קוד שרץ על השרת','בונה דפים ולחצנים יפים','מחפש חורי אבטחה לפני ההאקרים','מוודא שהשרתים לא נופלים 24/7','מנתח נתונים ובונה מודלים חזויים','מוצא באגים וכותב טסטים','מתקשר עם לקוחות ומחלק משימות לצוות']},
    {t:'מה ממש מרגיז אותך או נראה משעמם?',o:['לשבת שעות על משימה אחת בלי תוצאה גלויה','הרבה פגישות ותקשורת','לעשות אותו דבר שוב ושוב לפי הוראות','לשים לב לפרטים ולתעד הכל','לצייר ולחשוב על מראה ויזואלי','לפצח קוד של מישהו אחר','שום דבר מכל זה, הכל בסדר']},
    {t:'מה מפחיד אותך או נראה קשה?',o:['הרבה מתמטיקה ונוסחאות','לשאת אחריות על החלטות','לתקשר עם צוות גדול כל יום','לא לראות את פרי עבודתך חודשים','לעבוד עם קוד לא ברור בלי תיעוד','שום דבר מכל זה, הכל בסדר']},
    {t:'מה חשוב לך יותר בעבודה העתידית?',o:['משכורת גבוהה','חופש יצירתי','יציבות ומשימות ברורות','להשפיע על המוצר ולקבל החלטות','תמיד אתגרים חדשים, ללא שגרה','לראות את תוצאת עבודתך בעיניים שלך','לעבוד בחברה מפורסמת ומגניבה']},
    {t:'מה כבר ניסית או רוצה לנסות?',o:['לבנות אתר או דף נחיתה','לכתוב בוט (Telegram, Discord)','לשחק ב-Roblox Studio או Unity','לעצב ב-Figma או Canva','לפתור אתגרים ב-Codeforces / LeetCode','לעסוק באתגרי CTF','לנתח נתונים ב-Excel או Python','לא ניסיתי שום דבר עדיין']}
  ],
  prof:{
    frontend:{name:'מפתח פרונט-אנד',desc:'בונה את כל מה שהמשתמש רואה: אתרים, ממשקים, אנימציות.',detail:'מפתח פרונט-אנד מחיה עיצובים בדפדפן. אתה כותב HTML, CSS ו-JavaScript ורואה את התוצאה מיד. מפתחים מודרניים משתמשים ב-React או Vue. העבודה נמצאת בצומת בין עיצוב לתכנות.',day:'קוד-ריביו, מימוש קומפוננטה ממוקאפ של Figma, תיקון לייאאוט מובייל, בדיקות בדפדפנים, דיפלוי.',examples:'ממשק Netflix, חיפוש Google, פיד Instagram',start:['HTML + CSS — freecodecamp.org (חינמי)','JavaScript — javascript.info','React — react.dev (רשמי)']},
    backend:{name:'מפתח בק-אנד',desc:'כותב את "המוח" של האפליקציות: לוגיקה, מסדי נתונים, API.',detail:'הבק-אנד הוא כל מה שקורה מאחורי הקלעים. כניסה לחשבון, תשלומים, התראות — הכל בק-אנד. אתה מתכנן מסדי נתונים, כותב לוגיקת שרת, בונה API. אחת ההתמחויות בשכר הגבוה ביותר בהייטק.',day:'תכנון נקודות קצה של API, אופטימיזציית שאילתות SQL, כתיבת טסטים, קוד-ריביו.',examples:'שרתי WhatsApp, מנוע המלצות Spotify, עיבוד תשלומים בנקאיים',start:['Python — python.org','SQL — sqlbolt.com (חינמי)','פרויקט ראשון: לבנות בוט Telegram']},
    design:{name:'מעצב UI/UX',desc:'מחליט איך המוצר נראה ומרגיש.',detail:'מעצב UI/UX מעצב את חוויית המשתמש. UI הוא המראה, UX הוא תחושת השימוש. אתה חוקר צרכי משתמשים, יוצר wireframes ופרוטוטייפים. עיצוב טוב לא רק יפה — הוא אינטואיטיבי וברור.',day:'ראיונות עם משתמשים, wireframes ב-Figma, פרוטוטייפ לפיצ\'ר חדש, תיאום עם מפתחים, A/B טסט.',examples:'עיצוב iOS של Apple, תהליך ההזמנה של Airbnb, ממשק Spotify',start:['Figma — figma.com (חינמי)','UX Foundations ב-Coursera','שחזר עיצוב של אפליקציה קיימת כתרגיל']},
    gamedev:{name:'מפתח משחקים',desc:'יוצר משחקים — מהרעיון ועד הקוד והגיימפליי.',detail:'מפתח משחקים הוא מתכנת, מעצב וסופר באחד. אתה מממש מכניקות משחק, פיזיקה ובינה מלאכותית של אויבים. גיים-דב הוא אחד התחומים המרתקים ביותר בהייטק.',day:'מימוש מכניקת קפיצה ב-Unity, כוונון פיזיקה, בדיקת שלב, אופטימיזציה של FPS.',examples:'Minecraft, Fortnite, Among Us, Roblox',start:['Unity Learn — learn.unity.com (חינמי)','Roblox Studio — חינמי עם קהל מובנה','Godot — godotengine.org (חינמי)']},
    data:{name:'מדען נתונים / מהנדס ML',desc:'מנתח נתונים, בונה מודלי AI, מוצא דפוסים נסתרים.',detail:'מדען נתונים עובד עם מסדי נתונים גדולים כדי למצוא דפוסים ולקבל החלטות. מהנדסי ML בונים מודלים של למידת מכונה — אלה שמניעים את ההמלצות של YouTube ואת ChatGPT. אחד התחומים הצומחים ביותר.',day:'טעינה וניקוי נתונים, בניית מודל חיזוי, הערכת דיוק, ויזואליזציה לצוות.',examples:'ChatGPT, המלצות Netflix ו-YouTube, זיהוי הונאות בנקאיות',start:['Python — kaggle.com/learn (חינמי)','תחרויות ב-Kaggle','fast.ai — קורס מעשי חינמי']},
    security:{name:'מומחה אבטחת סייבר',desc:'מוצא פרצות במערכות ומגן עליהן.',detail:'מומחה אבטחת סייבר הוא האקר חוקי. המשימה שלך: למצוא פרצות לפני התוקפים. אתה מבצע בדיקות חדירה, מנתח קוד זדוני, בונה מערכות הגנה. הביקוש למומחי אבטחה ממשיך לגדול.',day:'סריקת מערכות לאיתור פרצות, בדיקת חדירה, כתיבת דוח, ניטור איומים.',examples:'תוכניות Bug Bounty של Google ו-Facebook, אבטחת בנקים, חקירת מתקפות סייבר',start:['TryHackMe.com — חינמי, פורמט משחקי','picoCTF — תחרויות למתחילים','לימוד יסודות Linux קודם']},
    devops:{name:'מהנדס DevOps / SRE',desc:'מבטיח יציבות השירותים ומבצע אוטומציה.',detail:'מהנדס DevOps מגשר בין פיתוח לתשתית. אתה מגדיר צינורות CI/CD, מנהל תשתית ענן, מבטיח זמינות 24/7. בלי DevOps, הקוד של המפתחים לא מגיע לעולם למשתמשים.',day:'הגדרת GitHub Actions, ניטור מדדים ב-Grafana, חקירת הפסקת שירות, עדכון Kubernetes.',examples:'תשתית Netflix, צוות SRE של Google, ענן AWS/Azure/GCP',start:['Linux — linuxjourney.com (חינמי)','Docker — docs.docker.com/get-started','AWS Free Tier — aws.amazon.com/free']},
    qa:{name:'מהנדס QA (בודק תוכנה)',desc:'מוצא באגים לפני שהמשתמשים מוצאים אותם.',detail:'מהנדס QA מבטיח איכות תוכנה. אתה יוצר מקרי בדיקה, מוצא באגים, מבצע אוטומציה. QA הוא נקודת כניסה מצוינת לתחום — תשומת לב לפרטים חשובה יותר מתכנות בשלב ההתחלה.',day:'קריאת כרטיס ב-Jira, כתיבת מקרי בדיקה, בדיקה ידנית, דיווח על באג, הרצת טסטים אוטומטיים.',examples:'בדיקת כל עדכון iOS, אימות עסקאות בנקאיות',start:['יסודות בדיקות תוכנה — guru99.com','Postman — חינמי לבדיקת API','מצא באגים בכל אתר — זה כבר תרגול']},
    pm:{name:'מנהל מוצר',desc:'מוביל את פיתוח המוצר: משימות, החלטות, תיאום הצוות.',detail:'מנהל מוצר הוא "המנכ"ל של המוצר". אתה מחליט מה הצוות בונה ולמה. אתה מתקשר כל הזמן עם מפתחים, מעצבים, שיווק ולקוחות. PM לא כותב קוד אבל חייב להבין טכנולוגיה.',day:'סטנד-אפ של הצוות, ראיון עם משתמש, כתיבת מפרט, תעדוף בקלוג, ניתוח מדדי מוצר.',examples:'האדם שהגדיר את פיצ\'רי ה-iPhone הראשון; הצוות מאחורי האלגוריתם של TikTok',start:['"Inspired" מאת Marty Cagan (ספר)','קורס מנהל מוצר ב-Coursera','תאר מוצר שאתה רוצה לבנות — זה כבר חשיבת PM']}
  }
};

// ─── LEVEL 2 DATA ─────────────────────────────────────────────────────────────
const L2 = {};

// Each question: {t: text, o: [opt0..optN], s: [{role:score}, ...]}
// s[i] = scores for option i

L2.frontend = {
  ru: {
    questions: [
      {t:'Что тебя привлекает во фронтенде больше всего?', o:[
        'Делать страницу идеально по макету: пиксель в пиксель, анимации',
        'Строить умные компоненты и управлять состоянием приложения',
        'Писать и фронт, и серверную часть для одной фичи',
        'Создавать приложение для смартфона'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'Что из этого ты готов делать часами?', o:[
        'Доводить анимацию, тени и отступы до совершенства',
        'Рефакторить компонент чтобы он стал переиспользуемым',
        'Проектировать структуру API и схему базы данных',
        'Разбираться с жестами и нативными API телефона'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'Какой проект звучит круче всего?', o:[
        'Красивый адаптивный сайт с крутыми CSS-анимациями',
        'Сложный веб-апп типа Notion или Trello',
        'Полный продукт: UI + бэкенд + база данных',
        'Мобильное приложение в App Store / Google Play'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'Какой инструмент хотел бы освоить в первую очередь?', o:[
        'GSAP или Framer Motion — библиотеки анимаций',
        'TypeScript + Redux / Zustand',
        'Next.js или Nuxt — фреймворки с серверной частью',
        'React Native или Flutter'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'Что тебя раздражает больше всего?', o:[
        'Когда дизайн реализован небрежно — не те отступы, цвета, шрифты',
        'Когда приложение лагает из-за плохо организованного состояния',
        'Когда фронт и бэк плохо интегрированы и всё ломается',
        'Когда сайт работает на вебе но выглядит ужасно на телефоне'
      ], s:[{css:2},{react:2},{fullstack:2},{mobile:2}]},
      {t:'Через 3 года ты хочешь...', o:[
        'Быть экспертом по CSS, анимациям и дизайн-системам',
        'Строить сложные SPA и знать React/Vue вдоль и поперёк',
        'Уметь сделать продукт от кнопки до сервера в одиночку',
        'Иметь своё приложение в App Store с живыми пользователями'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]}
    ],
    roles: {
      css: {
        emoji:'✨', name:'Верстальщик / CSS-специалист',
        desc:'Мастер визуальной части: pixel-perfect вёрстка, анимации, адаптивность.',
        detail:'Верстальщик превращает дизайн-макеты в живые страницы. Ты отвечаешь за то, чтобы всё выглядело именно так, как задумал дизайнер: правильные отступы, шрифты, цвета, плавные анимации. Современный CSS — мощный инструмент: Grid, Flexbox, кастомные свойства, анимации без JavaScript. Это востребованная специализация в любой продуктовой компании.',
        start:['CSS Tricks — css-tricks.com','GSAP анимации — gsap.com','Flexbox Froggy — flexboxfroggy.com (игра)'],
        startUrls:['https://css-tricks.com','https://gsap.com','https://flexboxfroggy.com']
      },
      react: {
        emoji:'⚛️', name:'React / Vue разработчик',
        desc:'Строит сложные интерактивные SPA-приложения на современных фреймворках.',
        detail:'React и Vue разработчики — основа большинства современных команд. Ты строишь компонентную архитектуру, управляешь состоянием приложения (Redux, Zustand, Pinia), работаешь с API. Эта специализация открывает двери в любую продуктовую компанию — от стартапа до Google.',
        start:['React — react.dev (официально)','Vue — vuejs.org','TypeScript — typescriptlang.org'],
        startUrls:['https://react.dev','https://vuejs.org','https://typescriptlang.org']
      },
      fullstack: {
        emoji:'🔄', name:'Fullstack разработчик',
        desc:'Пишет и фронт, и бэк. Может построить продукт целиком.',
        detail:'Fullstack разработчик — универсальный боец. Ты знаешь и React/Vue, и Node.js или Python на бэкенде, и базы данных. Можешь взять задачу от дизайна до деплоя. Особенно востребован в стартапах где один разработчик закрывает большой фронт работ.',
        start:['Next.js — nextjs.org','Node.js + Express — expressjs.com','Prisma ORM — prisma.io'],
        startUrls:['https://nextjs.org','https://expressjs.com','https://prisma.io']
      },
      mobile: {
        emoji:'📱', name:'Mobile разработчик',
        desc:'Создаёт приложения для iOS и Android из одного кода.',
        detail:'Mobile разработчик делает то, что люди держат в руках. React Native и Flutter позволяют писать один код и получать нативные приложения для iOS и Android. Мобильный рынок огромен — почти у каждого бизнеса есть или нужно своё приложение.',
        start:['React Native — reactnative.dev','Flutter — flutter.dev','Expo (старт без настройки) — expo.dev'],
        startUrls:['https://reactnative.dev','https://flutter.dev','https://expo.dev']
      }
    }
  },
  en: {
    questions: [
      {t:'What attracts you most in frontend?', o:[
        'Making pages pixel-perfect: matching the design exactly with animations',
        'Building smart components and managing application state',
        'Writing both the UI and server logic for a single feature',
        'Creating an app for smartphones'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'What could you spend hours doing?', o:[
        'Perfecting animations, shadows and spacing',
        'Refactoring a component to make it fully reusable',
        'Designing an API structure and database schema',
        'Figuring out gestures and native phone APIs'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'Which project sounds the coolest?', o:[
        'A beautiful responsive site with smooth CSS animations',
        'A complex web app like Notion or Trello',
        'A complete product: UI + backend + database',
        'A mobile app in the App Store / Google Play'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'Which tool would you learn first?', o:[
        'GSAP or Framer Motion — animation libraries',
        'TypeScript + Redux / Zustand',
        'Next.js or Nuxt — frameworks with server-side rendering',
        'React Native or Flutter'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'What annoys you most?', o:[
        'When a design is implemented sloppily — wrong spacing, colors, fonts',
        'When an app lags because of poorly organized state',
        'When frontend and backend are badly integrated and things keep breaking',
        'When a site works on desktop but looks terrible on mobile'
      ], s:[{css:2},{react:2},{fullstack:2},{mobile:2}]},
      {t:'In 3 years you want to...', o:[
        'Be an expert in CSS, animations and design systems',
        'Build complex SPAs and know React/Vue inside out',
        'Be able to build a full product alone — from button to server',
        'Have my own app in the App Store with real users'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]}
    ],
    roles: {
      css: {
        emoji:'✨', name:'HTML/CSS Specialist',
        desc:'Master of the visual layer: pixel-perfect markup, animations, responsiveness.',
        detail:'A CSS specialist turns design mockups into living pages. You ensure everything looks exactly as the designer intended — correct spacing, fonts, colors, smooth animations. Modern CSS is powerful: Grid, Flexbox, custom properties, animations without JavaScript. This is a valued specialization in any product company.',
        start:['CSS Tricks — css-tricks.com','GSAP animations — gsap.com','Flexbox Froggy — flexboxfroggy.com (game)'],
        startUrls:['https://css-tricks.com','https://gsap.com','https://flexboxfroggy.com']
      },
      react: {
        emoji:'⚛️', name:'React / Vue Developer',
        desc:'Builds complex interactive SPAs using modern frameworks.',
        detail:'React and Vue developers form the backbone of most modern teams. You build component architecture, manage application state (Redux, Zustand, Pinia), and work with APIs. This specialization opens doors to any product company — from startups to Google.',
        start:['React — react.dev (official)','Vue — vuejs.org','TypeScript — typescriptlang.org'],
        startUrls:['https://react.dev','https://vuejs.org','https://typescriptlang.org']
      },
      fullstack: {
        emoji:'🔄', name:'Fullstack Developer',
        desc:'Writes both frontend and backend. Can build a product end to end.',
        detail:'A fullstack developer is a versatile engineer. You know both React/Vue and Node.js or Python on the backend, plus databases. You can take a task from design to deployment. Especially valued in startups where one developer covers a wide range of work.',
        start:['Next.js — nextjs.org','Node.js + Express — expressjs.com','Prisma ORM — prisma.io'],
        startUrls:['https://nextjs.org','https://expressjs.com','https://prisma.io']
      },
      mobile: {
        emoji:'📱', name:'Mobile Developer',
        desc:'Creates apps for iOS and Android from a single codebase.',
        detail:'Mobile developers build what people hold in their hands. React Native and Flutter let you write one codebase and deploy native apps for both iOS and Android. The mobile market is huge — almost every business has or needs its own app.',
        start:['React Native — reactnative.dev','Flutter — flutter.dev','Expo (zero-config start) — expo.dev'],
        startUrls:['https://reactnative.dev','https://flutter.dev','https://expo.dev']
      }
    }
  },
  he: {
    questions: [
      {t:'מה מושך אותך יותר מכל בפרונט-אנד?', o:[
        'לעשות דף מושלם לפי מוקאפ: פיקסל לפיקסל, אנימציות',
        'לבנות קומפוננטות חכמות ולנהל state של האפליקציה',
        'לכתוב גם פרונט וגם שרת לאותו פיצ\'ר',
        'ליצור אפליקציה לסמארטפון'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'מה אתה מוכן לעשות שעות?', o:[
        'לשכלל אנימציות, צללים ורווחים עד לשלמות',
        'לעשות ריפקטור לקומפוננטה כדי שתהיה לשימוש חוזר',
        'לתכנן מבנה API וסכמת בסיס נתונים',
        'להתמודד עם ג\'סצ\'רים ו-API נייטיב של הטלפון'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'איזה פרויקט נשמע הכי מגניב?', o:[
        'אתר רספונסיבי יפה עם אנימציות CSS מגניבות',
        'אפליקציית ווב מורכבת כמו Notion או Trello',
        'מוצר שלם: UI + בק-אנד + בסיס נתונים',
        'אפליקציית מובייל ב-App Store / Google Play'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'איזה כלי תרצה ללמוד ראשון?', o:[
        'GSAP או Framer Motion — ספריות אנימציה',
        'TypeScript + Redux / Zustand',
        'Next.js או Nuxt — פריימוורקים עם צד שרת',
        'React Native או Flutter'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'מה הכי מרגיז אותך?', o:[
        'כשהעיצוב מיושם רשלנית — רווחים, צבעים, פונטים לא נכונים',
        'כשאפליקציה מתגמגמת בגלל state מאורגן גרוע',
        'כשפרונט ובק-אנד מחוברים גרוע והכל נשבר',
        'כשאתר עובד בדסקטופ אבל נראה נורא במובייל'
      ], s:[{css:2},{react:2},{fullstack:2},{mobile:2}]},
      {t:'בעוד 3 שנים אתה רוצה...', o:[
        'להיות מומחה ב-CSS, אנימציות ומערכות עיצוב',
        'לבנות SPA מורכבים ולדעת React/Vue מקצה לקצה',
        'להיות מסוגל לבנות מוצר שלם לבד — מכפתור עד שרת',
        'שתהיה לי אפליקציה משלי ב-App Store עם משתמשים אמיתיים'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]}
    ],
    roles: {
      css: {
        emoji:'✨', name:'מומחה HTML/CSS',
        desc:'אדון השכבה הוויזואלית: מארקאפ pixel-perfect, אנימציות, רספונסיביות.',
        detail:'מומחה CSS הופך מוקאפים של עיצוב לדפים חיים. אתה מוודא שהכל נראה בדיוק כפי שהמעצב התכוון — רווחים, פונטים, צבעים ואנימציות חלקות. CSS מודרני עוצמתי: Grid, Flexbox, custom properties, אנימציות ללא JavaScript. זו התמחות מבוקשת בכל חברת מוצר.',
        start:['CSS Tricks — css-tricks.com','GSAP אנימציות — gsap.com','Flexbox Froggy — flexboxfroggy.com (משחק)'],
        startUrls:['https://css-tricks.com','https://gsap.com','https://flexboxfroggy.com']
      },
      react: {
        emoji:'⚛️', name:'מפתח React / Vue',
        desc:'בונה SPA אינטראקטיביים מורכבים עם פריימוורקים מודרניים.',
        detail:'מפתחי React ו-Vue הם עמוד השדרה של רוב הצוותים המודרניים. אתה בונה ארכיטקטורת קומפוננטות, מנהל state (Redux, Zustand, Pinia) ועובד עם API. התמחות זו פותחת דלתות לכל חברת מוצר.',
        start:['React — react.dev (רשמי)','Vue — vuejs.org','TypeScript — typescriptlang.org'],
        startUrls:['https://react.dev','https://vuejs.org','https://typescriptlang.org']
      },
      fullstack: {
        emoji:'🔄', name:'מפתח Fullstack',
        desc:'כותב גם פרונט וגם בק. יכול לבנות מוצר שלם.',
        detail:'מפתח Fullstack הוא מהנדס אוניברסלי. אתה מכיר React/Vue וגם Node.js או Python בבק-אנד, ובסיסי נתונים. אתה יכול לקחת משימה מעיצוב עד דיפלוי. מבוקש במיוחד בסטארטאפים שבהם מפתח אחד מכסה מגוון רחב של עבודה.',
        start:['Next.js — nextjs.org','Node.js + Express — expressjs.com','Prisma ORM — prisma.io'],
        startUrls:['https://nextjs.org','https://expressjs.com','https://prisma.io']
      },
      mobile: {
        emoji:'📱', name:'מפתח מובייל',
        desc:'יוצר אפליקציות ל-iOS ו-Android מבסיס קוד אחד.',
        detail:'מפתח מובייל בונה מה שאנשים מחזיקים בידיים. React Native ו-Flutter מאפשרים לכתוב קוד אחד ולפרוס אפליקציות נייטיב ל-iOS וגם ל-Android. שוק המובייל עצום — כמעט לכל עסק יש או צריך אפליקציה משלו.',
        start:['React Native — reactnative.dev','Flutter — flutter.dev','Expo (התחלה קלה) — expo.dev'],
        startUrls:['https://reactnative.dev','https://flutter.dev','https://expo.dev']
      }
    }
  },
  de: {
    questions: [
      {t:'Was zieht dich am meisten am Frontend an?', o:[
        'Seiten pixelgenau nach Design umsetzen: exakte Abstände, Animationen',
        'Smarte Komponenten bauen und den Anwendungsstatus verwalten',
        'Sowohl UI als auch Serverlogik für ein Feature schreiben',
        'Eine App für Smartphones erstellen'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'Was könntest du stundenlang tun?', o:[
        'Animationen, Schatten und Abstände bis zur Perfektion verfeinern',
        'Eine Komponente refaktorieren, damit sie vollständig wiederverwendbar ist',
        'Eine API-Struktur und ein Datenbankschema entwerfen',
        'Gesten und native Phone-APIs verstehen'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'Welches Projekt klingt am coolsten?', o:[
        'Eine schöne responsive Website mit flüssigen CSS-Animationen',
        'Eine komplexe Web-App wie Notion oder Trello',
        'Ein komplettes Produkt: UI + Backend + Datenbank',
        'Eine mobile App im App Store / Google Play'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'Welches Tool möchtest du als erstes lernen?', o:[
        'GSAP oder Framer Motion — Animationsbibliotheken',
        'TypeScript + Redux / Zustand',
        'Next.js oder Nuxt — Frameworks mit Server-seitigem Rendering',
        'React Native oder Flutter'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'Was nervt dich am meisten?', o:[
        'Wenn ein Design schlampig umgesetzt ist — falsche Abstände, Farben, Schriften',
        'Wenn eine App ruckelt wegen schlecht organisiertem State',
        'Wenn Frontend und Backend schlecht integriert sind und alles kaputt geht',
        'Wenn eine Website am Desktop gut funktioniert aber mobil furchtbar aussieht'
      ], s:[{css:2},{react:2},{fullstack:2},{mobile:2}]},
      {t:'In 3 Jahren willst du...', o:[
        'Experte für CSS, Animationen und Design-Systeme sein',
        'Komplexe SPAs bauen und React/Vue in- und auswendig kennen',
        'Ein vollständiges Produkt alleine bauen können — vom Button bis zum Server',
        'Eine eigene App im App Store mit echten Nutzern haben'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]}
    ],
    roles: {
      css: {
        emoji:'✨', name:'HTML/CSS-Spezialist',
        desc:'Meister der visuellen Schicht: pixelgenaues Markup, Animationen, Responsiveness.',
        detail:'Ein CSS-Spezialist verwandelt Design-Mockups in lebendige Seiten. Du stellst sicher, dass alles genau so aussieht, wie der Designer es sich vorgestellt hat — Abstände, Schriften, Farben, flüssige Animationen. Modernes CSS ist mächtig: Grid, Flexbox, Custom Properties, Animationen ohne JavaScript. Das ist eine gefragte Spezialisierung in jedem Produktunternehmen.',
        start:['CSS Tricks — css-tricks.com','GSAP Animationen — gsap.com','Flexbox Froggy — flexboxfroggy.com (Spiel)'],
        startUrls:['https://css-tricks.com','https://gsap.com','https://flexboxfroggy.com']
      },
      react: {
        emoji:'⚛️', name:'React / Vue Entwickler',
        desc:'Baut komplexe interaktive SPAs mit modernen Frameworks.',
        detail:'React- und Vue-Entwickler bilden das Rückgrat der meisten modernen Teams. Du baust Komponentenarchitektur, verwaltest den Anwendungsstatus (Redux, Zustand, Pinia) und arbeitest mit APIs. Diese Spezialisierung öffnet Türen zu jedem Produktunternehmen — von Startups bis Google.',
        start:['React — react.dev (offiziell)','Vue — vuejs.org','TypeScript — typescriptlang.org'],
        startUrls:['https://react.dev','https://vuejs.org','https://typescriptlang.org']
      },
      fullstack: {
        emoji:'🔄', name:'Fullstack Entwickler',
        desc:'Schreibt sowohl Frontend als auch Backend. Kann ein Produkt von Anfang bis Ende bauen.',
        detail:'Ein Fullstack-Entwickler ist ein vielseitiger Ingenieur. Du kennst React/Vue und Node.js oder Python im Backend sowie Datenbanken. Du kannst eine Aufgabe vom Design bis zur Bereitstellung übernehmen. Besonders gefragt in Startups, wo ein Entwickler ein breites Aufgabenspektrum abdeckt.',
        start:['Next.js — nextjs.org','Node.js + Express — expressjs.com','Prisma ORM — prisma.io'],
        startUrls:['https://nextjs.org','https://expressjs.com','https://prisma.io']
      },
      mobile: {
        emoji:'📱', name:'Mobile Entwickler',
        desc:'Erstellt Apps für iOS und Android aus einer einzigen Codebasis.',
        detail:'Mobile Entwickler bauen, was Menschen in den Händen halten. React Native und Flutter ermöglichen es, eine Codebasis zu schreiben und native Apps für iOS und Android bereitzustellen. Der mobile Markt ist riesig — fast jedes Unternehmen hat oder braucht eine eigene App.',
        start:['React Native — reactnative.dev','Flutter — flutter.dev','Expo (Zero-Config-Start) — expo.dev'],
        startUrls:['https://reactnative.dev','https://flutter.dev','https://expo.dev']
      }
    }
  },
  fr: {
    questions: [
      {t:'Qu\'est-ce qui t\'attire le plus dans le frontend ?', o:[
        'Faire des pages pixel-perfect : respecter le design exactement avec des animations',
        'Construire des composants intelligents et gérer l\'état de l\'application',
        'Écrire à la fois l\'UI et la logique serveur pour une seule fonctionnalité',
        'Créer une app pour smartphones'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'Qu\'est-ce que tu pourrais faire pendant des heures ?', o:[
        'Peaufiner les animations, les ombres et les espacements à la perfection',
        'Refactoriser un composant pour le rendre entièrement réutilisable',
        'Concevoir une structure d\'API et un schéma de base de données',
        'Comprendre les gestes et les APIs natives du téléphone'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'Quel projet te semble le plus cool ?', o:[
        'Un beau site responsive avec de fluides animations CSS',
        'Une app web complexe comme Notion ou Trello',
        'Un produit complet : UI + backend + base de données',
        'Une app mobile sur l\'App Store / Google Play'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'Quel outil voudrais-tu apprendre en premier ?', o:[
        'GSAP ou Framer Motion — bibliothèques d\'animation',
        'TypeScript + Redux / Zustand',
        'Next.js ou Nuxt — frameworks avec rendu côté serveur',
        'React Native ou Flutter'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'Qu\'est-ce qui t\'agace le plus ?', o:[
        'Quand un design est mal implémenté — mauvais espacements, couleurs, polices',
        'Quand une app rame à cause d\'un état mal organisé',
        'Quand le frontend et le backend sont mal intégrés et que tout se casse',
        'Quand un site marche bien sur desktop mais est horrible sur mobile'
      ], s:[{css:2},{react:2},{fullstack:2},{mobile:2}]},
      {t:'Dans 3 ans tu veux...', o:[
        'Être expert en CSS, animations et systèmes de design',
        'Construire des SPAs complexes et connaître React/Vue sur le bout des doigts',
        'Pouvoir construire un produit complet seul — du bouton au serveur',
        'Avoir ma propre app sur l\'App Store avec de vrais utilisateurs'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]}
    ],
    roles: {
      css: {
        emoji:'✨', name:'Spécialiste HTML/CSS',
        desc:'Maître de la couche visuelle : markup pixel-perfect, animations, responsivité.',
        detail:'Un spécialiste CSS transforme les maquettes de design en pages vivantes. Tu t\'assures que tout ressemble exactement à ce que le designer avait imaginé — espacements, polices, couleurs, animations fluides. Le CSS moderne est puissant : Grid, Flexbox, propriétés personnalisées, animations sans JavaScript. C\'est une spécialisation prisée dans toute entreprise produit.',
        start:['CSS Tricks — css-tricks.com','GSAP animations — gsap.com','Flexbox Froggy — flexboxfroggy.com (jeu)'],
        startUrls:['https://css-tricks.com','https://gsap.com','https://flexboxfroggy.com']
      },
      react: {
        emoji:'⚛️', name:'Développeur React / Vue',
        desc:'Construit des SPAs interactifs complexes avec des frameworks modernes.',
        detail:'Les développeurs React et Vue forment l\'épine dorsale de la plupart des équipes modernes. Tu construis une architecture de composants, gères l\'état de l\'application (Redux, Zustand, Pinia) et travailles avec des APIs. Cette spécialisation ouvre les portes de toute entreprise produit — des startups à Google.',
        start:['React — react.dev (officiel)','Vue — vuejs.org','TypeScript — typescriptlang.org'],
        startUrls:['https://react.dev','https://vuejs.org','https://typescriptlang.org']
      },
      fullstack: {
        emoji:'🔄', name:'Développeur Fullstack',
        desc:'Écrit à la fois frontend et backend. Peut construire un produit de bout en bout.',
        detail:'Un développeur fullstack est un ingénieur polyvalent. Tu maîtrises React/Vue et Node.js ou Python côté backend, ainsi que les bases de données. Tu peux prendre une tâche du design jusqu\'au déploiement. Particulièrement apprécié dans les startups où un seul développeur couvre un large éventail de travail.',
        start:['Next.js — nextjs.org','Node.js + Express — expressjs.com','Prisma ORM — prisma.io'],
        startUrls:['https://nextjs.org','https://expressjs.com','https://prisma.io']
      },
      mobile: {
        emoji:'📱', name:'Développeur Mobile',
        desc:'Crée des apps pour iOS et Android à partir d\'une seule base de code.',
        detail:'Les développeurs mobiles construisent ce que les gens tiennent dans leurs mains. React Native et Flutter permettent d\'écrire une seule base de code et de déployer des apps natives sur iOS et Android. Le marché mobile est immense — presque chaque entreprise a ou a besoin de sa propre app.',
        start:['React Native — reactnative.dev','Flutter — flutter.dev','Expo (démarrage zéro config) — expo.dev'],
        startUrls:['https://reactnative.dev','https://flutter.dev','https://expo.dev']
      }
    }
  },
  es: {
    questions: [
      {t:'¿Qué te atrae más del frontend?', o:[
        'Hacer páginas pixel-perfect: respetar el diseño exactamente con animaciones',
        'Construir componentes inteligentes y gestionar el estado de la aplicación',
        'Escribir tanto la UI como la lógica del servidor para una sola función',
        'Crear una app para smartphones'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'¿Qué podrías hacer durante horas?', o:[
        'Perfeccionar animaciones, sombras y espaciados',
        'Refactorizar un componente para que sea completamente reutilizable',
        'Diseñar una estructura de API y un esquema de base de datos',
        'Entender gestos y APIs nativas del teléfono'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'¿Qué proyecto te parece más genial?', o:[
        'Un sitio web responsive bonito con suaves animaciones CSS',
        'Una app web compleja como Notion o Trello',
        'Un producto completo: UI + backend + base de datos',
        'Una app móvil en el App Store / Google Play'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'¿Qué herramienta querrías aprender primero?', o:[
        'GSAP o Framer Motion — bibliotecas de animación',
        'TypeScript + Redux / Zustand',
        'Next.js o Nuxt — frameworks con renderizado del lado del servidor',
        'React Native o Flutter'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'¿Qué te molesta más?', o:[
        'Cuando un diseño está mal implementado — espaciados, colores, fuentes incorrectos',
        'Cuando una app va lenta por un estado mal organizado',
        'Cuando frontend y backend están mal integrados y todo se rompe',
        'Cuando un sitio funciona bien en escritorio pero se ve horrible en móvil'
      ], s:[{css:2},{react:2},{fullstack:2},{mobile:2}]},
      {t:'En 3 años quieres...', o:[
        'Ser experto en CSS, animaciones y sistemas de diseño',
        'Construir SPAs complejas y conocer React/Vue de cabo a rabo',
        'Poder construir un producto completo solo — del botón al servidor',
        'Tener mi propia app en el App Store con usuarios reales'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]}
    ],
    roles: {
      css: {
        emoji:'✨', name:'Especialista HTML/CSS',
        desc:'Maestro de la capa visual: markup pixel-perfect, animaciones, responsividad.',
        detail:'Un especialista CSS transforma maquetas de diseño en páginas vivas. Te aseguras de que todo se vea exactamente como el diseñador imaginó — espaciados, fuentes, colores, animaciones fluidas. El CSS moderno es poderoso: Grid, Flexbox, propiedades personalizadas, animaciones sin JavaScript. Es una especialización muy valorada en cualquier empresa de producto.',
        start:['CSS Tricks — css-tricks.com','GSAP animaciones — gsap.com','Flexbox Froggy — flexboxfroggy.com (juego)'],
        startUrls:['https://css-tricks.com','https://gsap.com','https://flexboxfroggy.com']
      },
      react: {
        emoji:'⚛️', name:'Desarrollador React / Vue',
        desc:'Construye SPAs interactivos complejos con frameworks modernos.',
        detail:'Los desarrolladores de React y Vue forman la columna vertebral de la mayoría de los equipos modernos. Construyes arquitectura de componentes, gestionas el estado de la aplicación (Redux, Zustand, Pinia) y trabajas con APIs. Esta especialización abre puertas en cualquier empresa de producto — desde startups hasta Google.',
        start:['React — react.dev (oficial)','Vue — vuejs.org','TypeScript — typescriptlang.org'],
        startUrls:['https://react.dev','https://vuejs.org','https://typescriptlang.org']
      },
      fullstack: {
        emoji:'🔄', name:'Desarrollador Fullstack',
        desc:'Escribe tanto frontend como backend. Puede construir un producto de principio a fin.',
        detail:'Un desarrollador fullstack es un ingeniero versátil. Conoces React/Vue y Node.js o Python en el backend, más bases de datos. Puedes tomar una tarea desde el diseño hasta el despliegue. Especialmente valorado en startups donde un desarrollador cubre un amplio rango de trabajo.',
        start:['Next.js — nextjs.org','Node.js + Express — expressjs.com','Prisma ORM — prisma.io'],
        startUrls:['https://nextjs.org','https://expressjs.com','https://prisma.io']
      },
      mobile: {
        emoji:'📱', name:'Desarrollador Mobile',
        desc:'Crea apps para iOS y Android desde una sola base de código.',
        detail:'Los desarrolladores móviles construyen lo que la gente sostiene en sus manos. React Native y Flutter permiten escribir una sola base de código y desplegar apps nativas para iOS y Android. El mercado móvil es enorme — casi todas las empresas tienen o necesitan su propia app.',
        start:['React Native — reactnative.dev','Flutter — flutter.dev','Expo (inicio sin configuración) — expo.dev'],
        startUrls:['https://reactnative.dev','https://flutter.dev','https://expo.dev']
      }
    }
  },
  pt: {
    questions: [
      {t:'O que mais te atrai no frontend?', o:[
        'Fazer páginas pixel-perfect: seguir o design exatamente com animações',
        'Construir componentes inteligentes e gerenciar o estado da aplicação',
        'Escrever tanto a UI quanto a lógica do servidor para uma única funcionalidade',
        'Criar um app para smartphones'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'O que você poderia fazer por horas?', o:[
        'Aperfeiçoar animações, sombras e espaçamentos',
        'Refatorar um componente para torná-lo completamente reutilizável',
        'Projetar uma estrutura de API e um esquema de banco de dados',
        'Entender gestos e APIs nativas do celular'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'Qual projeto soa mais incrível?', o:[
        'Um site responsivo bonito com animações CSS suaves',
        'Um app web complexo como Notion ou Trello',
        'Um produto completo: UI + backend + banco de dados',
        'Um app mobile na App Store / Google Play'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'Qual ferramenta você gostaria de aprender primeiro?', o:[
        'GSAP ou Framer Motion — bibliotecas de animação',
        'TypeScript + Redux / Zustand',
        'Next.js ou Nuxt — frameworks com renderização do lado do servidor',
        'React Native ou Flutter'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'O que te irrita mais?', o:[
        'Quando um design está mal implementado — espaçamentos, cores, fontes erradas',
        'Quando um app trava por causa de um estado mal organizado',
        'Quando frontend e backend estão mal integrados e tudo quebra',
        'Quando um site funciona bem no desktop mas fica horrível no mobile'
      ], s:[{css:2},{react:2},{fullstack:2},{mobile:2}]},
      {t:'Em 3 anos você quer...', o:[
        'Ser especialista em CSS, animações e sistemas de design',
        'Construir SPAs complexos e conhecer React/Vue de cabo a rabo',
        'Conseguir construir um produto completo sozinho — do botão ao servidor',
        'Ter meu próprio app na App Store com usuários reais'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]}
    ],
    roles: {
      css: {
        emoji:'✨', name:'Especialista HTML/CSS',
        desc:'Mestre da camada visual: markup pixel-perfect, animações, responsividade.',
        detail:'Um especialista CSS transforma maquetes de design em páginas vivas. Você garante que tudo pareça exatamente como o designer imaginou — espaçamentos, fontes, cores, animações suaves. O CSS moderno é poderoso: Grid, Flexbox, propriedades personalizadas, animações sem JavaScript. É uma especialização valorizada em qualquer empresa de produto.',
        start:['CSS Tricks — css-tricks.com','GSAP animações — gsap.com','Flexbox Froggy — flexboxfroggy.com (jogo)'],
        startUrls:['https://css-tricks.com','https://gsap.com','https://flexboxfroggy.com']
      },
      react: {
        emoji:'⚛️', name:'Desenvolvedor React / Vue',
        desc:'Constrói SPAs interativos complexos com frameworks modernos.',
        detail:'Desenvolvedores React e Vue formam a espinha dorsal da maioria das equipes modernas. Você constrói arquitetura de componentes, gerencia o estado da aplicação (Redux, Zustand, Pinia) e trabalha com APIs. Essa especialização abre portas em qualquer empresa de produto — de startups ao Google.',
        start:['React — react.dev (oficial)','Vue — vuejs.org','TypeScript — typescriptlang.org'],
        startUrls:['https://react.dev','https://vuejs.org','https://typescriptlang.org']
      },
      fullstack: {
        emoji:'🔄', name:'Desenvolvedor Fullstack',
        desc:'Escreve tanto frontend quanto backend. Pode construir um produto do início ao fim.',
        detail:'Um desenvolvedor fullstack é um engenheiro versátil. Você conhece React/Vue e Node.js ou Python no backend, além de bancos de dados. Pode pegar uma tarefa do design até o deploy. Especialmente valorizado em startups onde um desenvolvedor cobre uma ampla gama de trabalho.',
        start:['Next.js — nextjs.org','Node.js + Express — expressjs.com','Prisma ORM — prisma.io'],
        startUrls:['https://nextjs.org','https://expressjs.com','https://prisma.io']
      },
      mobile: {
        emoji:'📱', name:'Desenvolvedor Mobile',
        desc:'Cria apps para iOS e Android a partir de uma única base de código.',
        detail:'Desenvolvedores mobile constroem o que as pessoas seguram nas mãos. React Native e Flutter permitem escrever uma base de código e implantar apps nativos para iOS e Android. O mercado mobile é enorme — quase toda empresa tem ou precisa do seu próprio app.',
        start:['React Native — reactnative.dev','Flutter — flutter.dev','Expo (início sem configuração) — expo.dev'],
        startUrls:['https://reactnative.dev','https://flutter.dev','https://expo.dev']
      }
    }
  },
  ar: {
    questions: [
      {t:'ما الذي يجذبك أكثر في تطوير الواجهة الأمامية؟', o:[
        'جعل الصفحات مطابقة تماماً للتصميم: بدقة بالبكسل مع الرسوم المتحركة',
        'بناء مكونات ذكية وإدارة حالة التطبيق',
        'كتابة كل من الواجهة ومنطق الخادم لميزة واحدة',
        'إنشاء تطبيق للهواتف الذكية'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'ما الذي يمكنك القيام به لساعات؟', o:[
        'صقل الرسوم المتحركة والظلال والمسافات حتى الكمال',
        'إعادة هيكلة مكوّن لجعله قابلاً لإعادة الاستخدام بالكامل',
        'تصميم بنية API ومخطط قاعدة البيانات',
        'فهم الإيماءات وواجهات API الأصلية للهاتف'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'أي مشروع يبدو الأروع؟', o:[
        'موقع ويب متجاوب جميل مع رسوم متحركة CSS سلسة',
        'تطبيق ويب معقد مثل Notion أو Trello',
        'منتج كامل: واجهة + خلفية + قاعدة بيانات',
        'تطبيق موبايل في App Store / Google Play'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'أي أداة تريد تعلمها أولاً؟', o:[
        'GSAP أو Framer Motion — مكتبات الرسوم المتحركة',
        'TypeScript + Redux / Zustand',
        'Next.js أو Nuxt — أطر عمل مع التصيير من جانب الخادم',
        'React Native أو Flutter'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]},
      {t:'ما الذي يزعجك أكثر؟', o:[
        'عندما يكون التصميم منفذاً بإهمال — مسافات وألوان وخطوط خاطئة',
        'عندما يتأخر التطبيق بسبب حالة مُنظَّمة بشكل سيئ',
        'عندما تكون الواجهة الأمامية والخلفية متكاملتين بشكل سيئ وكل شيء ينهار',
        'عندما يعمل الموقع بشكل جيد على سطح المكتب لكنه يبدو رهيباً على الجوال'
      ], s:[{css:2},{react:2},{fullstack:2},{mobile:2}]},
      {t:'بعد 3 سنوات تريد...', o:[
        'أن تكون خبيراً في CSS والرسوم المتحركة وأنظمة التصميم',
        'بناء تطبيقات SPA معقدة ومعرفة React/Vue من الألف إلى الياء',
        'القدرة على بناء منتج كامل بمفردك — من الزر إلى الخادم',
        'امتلاك تطبيقك الخاص في App Store مع مستخدمين حقيقيين'
      ], s:[{css:3},{react:3},{fullstack:3},{mobile:3}]}
    ],
    roles: {
      css: {
        emoji:'✨', name:'متخصص HTML/CSS',
        desc:'سيد الطبقة المرئية: ترميز دقيق بالبكسل، رسوم متحركة، استجابة.',
        detail:'يحوّل متخصص CSS نماذج التصميم إلى صفحات حية. تضمن أن كل شيء يبدو تماماً كما تصور المصمم — المسافات والخطوط والألوان والرسوم المتحركة السلسة. CSS الحديث قوي: Grid وFlexbox والخصائص المخصصة والرسوم المتحركة بدون JavaScript. هذا تخصص مطلوب في أي شركة منتج.',
        start:['CSS Tricks — css-tricks.com','رسوم متحركة GSAP — gsap.com','Flexbox Froggy — flexboxfroggy.com (لعبة)'],
        startUrls:['https://css-tricks.com','https://gsap.com','https://flexboxfroggy.com']
      },
      react: {
        emoji:'⚛️', name:'مطور React / Vue',
        desc:'يبني تطبيقات SPA تفاعلية معقدة باستخدام أطر عمل حديثة.',
        detail:'يشكل مطورو React وVue العمود الفقري لمعظم الفرق الحديثة. تبني بنية المكونات وتدير حالة التطبيق (Redux, Zustand, Pinia) وتعمل مع واجهات برمجة التطبيقات. يفتح هذا التخصص أبواب أي شركة منتج — من الشركات الناشئة إلى Google.',
        start:['React — react.dev (رسمي)','Vue — vuejs.org','TypeScript — typescriptlang.org'],
        startUrls:['https://react.dev','https://vuejs.org','https://typescriptlang.org']
      },
      fullstack: {
        emoji:'🔄', name:'مطور Fullstack',
        desc:'يكتب الواجهة الأمامية والخلفية معاً. يمكنه بناء منتج كامل.',
        detail:'مطور Fullstack هو مهندس متعدد المهارات. تعرف React/Vue وNode.js أو Python في الخلفية وقواعد البيانات. يمكنك أخذ مهمة من التصميم حتى النشر. مطلوب بشكل خاص في الشركات الناشئة حيث يغطي مطور واحد نطاقاً واسعاً من العمل.',
        start:['Next.js — nextjs.org','Node.js + Express — expressjs.com','Prisma ORM — prisma.io'],
        startUrls:['https://nextjs.org','https://expressjs.com','https://prisma.io']
      },
      mobile: {
        emoji:'📱', name:'مطور تطبيقات الجوال',
        desc:'ينشئ تطبيقات لـ iOS وAndroid من قاعدة كود واحدة.',
        detail:'يبني مطورو الجوال ما يحمله الناس في أيديهم. تتيح React Native وFlutter كتابة قاعدة كود واحدة ونشر تطبيقات أصلية لـ iOS وAndroid. سوق الجوال ضخم — تمتلك كل شركة تقريباً أو تحتاج إلى تطبيقها الخاص.',
        start:['React Native — reactnative.dev','Flutter — flutter.dev','Expo (بداية بدون إعداد) — expo.dev'],
        startUrls:['https://reactnative.dev','https://flutter.dev','https://expo.dev']
      }
    }
  }
};


L2.backend = {
  ru: {
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
  },
  en: {
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
  },
  he: {
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
  },
  de: {
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
  },
  fr: {
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
  },
  es: {
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
  },
  pt: {
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
  },
  ar: {
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
  }
};

L2.design = {
  ru: {
    questions: [
      {t:'Что тебя привлекает в дизайне больше всего?', o:[
        'Придумывать внешний вид: цвета, шрифты, компоненты — чтобы всё выглядело красиво',
        'Понять как пользователи думают и убрать всё лишнее с их пути',
        'Проектировать продукт целиком — от первого экрана до бизнес-логики',
        'Оживлять интерфейс: анимации, переходы, микровзаимодействия'
      ], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'Что из этого ты готов делать часами?', o:[
        'Выстраивать дизайн-систему: компоненты, токены, документацию',
        'Проводить интервью с пользователями и анализировать результаты',
        'Прорабатывать пользовательские сценарии и флоу всего продукта',
        'Делать плавные анимации и прототипы с движением'
      ], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'Какой проект звучит круче всего?', o:[
        'Единая дизайн-система для большого продукта с сотнями компонентов',
        'Редизайн сложного сервиса на основе UX-исследования с реальными пользователями',
        'Запуск нового продукта с нуля: концепция, UX, UI, передача разработчикам',
        'Заставить кнопку «исчезать» так красиво что все скажут «вау»'
      ], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'Какой инструмент хочешь освоить в первую очередь?', o:[
        'Figma — авто-лейауты, переменные, компонентная система',
        'Maze или UserTesting — платформы для UX-тестирования',
        'FigJam + Miro — для воркшопов, карт пути пользователя, стратегии',
        'After Effects или Rive — для анимаций и интерактивных прототипов'
      ], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'Что тебя раздражает больше всего?', o:[
        'Когда у кнопок разный стиль на разных экранах и никакой системы',
        'Когда продукт выглядит красиво, но пользователи не понимают как им пользоваться',
        'Когда дизайнер делает только «картинки» и не думает о бизнесе и пользователях',
        'Когда переходы между экранами резкие и деревянные'
      ], s:[{ui:2},{ux:2},{product:2},{motion:2}]},
      {t:'Через 3 года ты хочешь...', o:[
        'Быть экспертом по дизайн-системам и визуальному языку продукта',
        'Возглавить UX-исследования и строить продукт на основе данных о пользователях',
        'Стать продуктовым дизайнером который влияет на стратегию, а не только на пиксели',
        'Делать анимации для топовых приложений и выступать на Dribbble/Behance'
      ], s:[{ui:3},{ux:3},{product:3},{motion:3}]}
    ],
    roles: {
      ui: {
        emoji:'🎨', name:'UI Дизайнер',
        desc:'Создаёт визуальный язык продукта: компоненты, цвета, типографику и дизайн-системы.',
        detail:'UI дизайнер отвечает за то, как продукт выглядит. Ты строишь дизайн-систему — библиотеку компонентов которую используют все дизайнеры и разработчики в команде. Figma — основной инструмент. Хороший UI дизайнер знает правила типографики, цветовые теории, принципы визуальной иерархии и умеет делать pixel-perfect макеты. Востребован в любой продуктовой компании.',
        start:['Figma — figma.com/resources/learn-design','Refactoring UI (книга о UI) — refactoringui.com','Dribbble для вдохновения — dribbble.com'],
        startUrls:['https://www.figma.com/resources/learn-design/','https://www.refactoringui.com','https://dribbble.com']
      },
      ux: {
        emoji:'🔍', name:'UX Исследователь',
        desc:'Изучает поведение пользователей и превращает данные в решения для продукта.',
        detail:'UX исследователь — человек который задаёт правильные вопросы. Ты проводишь интервью, юзабилити-тесты, анализируешь поведение пользователей в аналитике. Твоя работа — убедиться что продукт решает реальные проблемы реальных людей, а не то что команда придумала в переговорке. Один хороший инсайт из исследования может сэкономить месяц разработки.',
        start:['Nielsen Norman Group — nngroup.com','Just Enough Research (книга) — abookapart.com/products/just-enough-research','Maze для тестирования — maze.co'],
        startUrls:['https://www.nngroup.com','https://abookapart.com/products/just-enough-research','https://maze.co']
      },
      product: {
        emoji:'🧩', name:'Продуктовый Дизайнер',
        desc:'Проектирует продукт целиком: от исследования и стратегии до готового интерфейса.',
        detail:'Продуктовый дизайнер — это UX + UI + стратегия в одном лице. Ты работаешь с командой с самого начала: помогаешь формулировать задачи, исследуешь пользователей, строишь флоу и сценарии, делаешь прототипы и финальный дизайн. Это самая широкая и востребованная роль в продуктовых компаниях — дизайнер который понимает бизнес.',
        start:['Shape Up (метод Basecamp) — basecamp.com/shapeup','Figma — figma.com','Miro для воркшопов — miro.com'],
        startUrls:['https://basecamp.com/shapeup','https://figma.com','https://miro.com']
      },
      motion: {
        emoji:'✨', name:'Motion Дизайнер',
        desc:'Создаёт анимации, переходы и микровзаимодействия которые делают интерфейс живым.',
        detail:'Motion дизайнер добавляет продукту жизнь и характер. Плавный переход между экранами, кнопка которая «чувствуется» при нажатии, загрузочная анимация которая не раздражает — всё это твоя работа. Инструменты: After Effects, Rive (для web-анимаций), Lottie, Framer. Motion дизайнеры с хорошим портфолио очень ценятся в топовых продуктовых компаниях.',
        start:['Rive (анимации для web/app) — rive.app','LottieFiles — lottiefiles.com','The UX in Motion Manifesto — medium.com'],
        startUrls:['https://rive.app','https://lottiefiles.com','https://medium.com/ux-in-motion/ux-in-motion-manifesto-']
      }
    }
  },
  en: {
    questions: [
      {t:'What attracts you most about design?', o:[
        'Creating visuals: colors, fonts, components — making everything look beautiful',
        'Understanding how users think and removing friction from their path',
        'Designing the whole product — from the first screen to business logic',
        'Bringing interfaces to life: animations, transitions, micro-interactions'
      ], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'What could you spend hours doing?', o:[
        'Building a design system: components, tokens, documentation',
        'Conducting user interviews and analyzing findings',
        'Mapping out user journeys and full product flows',
        'Crafting smooth animations and motion prototypes'
      ], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'Which project sounds most exciting?', o:[
        'A unified design system for a large product with hundreds of components',
        'A redesign of a complex service based on real user research',
        'Launching a new product from scratch: concept, UX, UI, handoff to devs',
        'Making a button disappear so beautifully everyone says "wow"'
      ], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'Which tool do you want to master first?', o:[
        'Figma — auto-layout, variables, component systems',
        'Maze or UserTesting — platforms for UX testing',
        'FigJam + Miro — for workshops, user journey maps, strategy',
        'After Effects or Rive — for animations and interactive prototypes'
      ], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'What annoys you most?', o:[
        'When buttons have different styles across screens and there is no system at all',
        'When a product looks great but users have no idea how to use it',
        'When designers only make "pretty pictures" without thinking about users or business',
        'When screen transitions are abrupt and feel robotic'
      ], s:[{ui:2},{ux:2},{product:2},{motion:2}]},
      {t:'In 3 years you want to...', o:[
        'Be an expert in design systems and the visual language of products',
        'Lead UX research and build products based on real user data',
        'Become a product designer who influences strategy, not just pixels',
        'Create animations for top apps and have a strong Dribbble/Behance portfolio'
      ], s:[{ui:3},{ux:3},{product:3},{motion:3}]}
    ],
    roles: {
      ui: {
        emoji:'🎨', name:'UI Designer',
        desc:'Creates the visual language of a product: components, colors, typography and design systems.',
        detail:'A UI designer is responsible for how a product looks. You build the design system — a component library used by all designers and developers on the team. Figma is the main tool. A good UI designer understands typography rules, color theory, visual hierarchy principles, and can create pixel-perfect mockups.',
        start:['Figma Learn — figma.com/resources/learn-design','Refactoring UI (book) — refactoringui.com','Dribbble for inspiration — dribbble.com'],
        startUrls:['https://www.figma.com/resources/learn-design/','https://www.refactoringui.com','https://dribbble.com']
      },
      ux: {
        emoji:'🔍', name:'UX Researcher',
        desc:'Studies user behavior and turns data into product decisions.',
        detail:'A UX researcher asks the right questions. You run interviews, usability tests, and analyze user behavior in analytics. Your job is to ensure the product solves real problems for real people — not just what the team imagined in a meeting room. One good research insight can save a month of development.',
        start:['Nielsen Norman Group — nngroup.com','Just Enough Research (book) — abookapart.com/products/just-enough-research','Maze for testing — maze.co'],
        startUrls:['https://www.nngroup.com','https://abookapart.com/products/just-enough-research','https://maze.co']
      },
      product: {
        emoji:'🧩', name:'Product Designer',
        desc:'Designs the whole product: from research and strategy to the final interface.',
        detail:'A product designer is UX + UI + strategy in one person. You work with the team from the very start: help frame problems, research users, map flows and scenarios, build prototypes and final designs. This is the broadest and most sought-after design role in product companies.',
        start:['Shape Up by Basecamp — basecamp.com/shapeup','Figma — figma.com','Miro for workshops — miro.com'],
        startUrls:['https://basecamp.com/shapeup','https://figma.com','https://miro.com']
      },
      motion: {
        emoji:'✨', name:'Motion Designer',
        desc:'Creates animations, transitions, and micro-interactions that make interfaces feel alive.',
        detail:'A motion designer adds life and character to a product. Smooth screen transitions, a button that "feels" right on press, a loading animation that does not annoy — that is all your work. Tools: After Effects, Rive (for web animations), Lottie, Framer. Motion designers with strong portfolios are highly valued at top product companies.',
        start:['Rive (animations for web/app) — rive.app','LottieFiles — lottiefiles.com','The UX in Motion Manifesto — medium.com'],
        startUrls:['https://rive.app','https://lottiefiles.com','https://medium.com/ux-in-motion/ux-in-motion-manifesto-']
      }
    }
  },
  he: {
    questions: [
      {t:'מה מושך אותך יותר מכל בעיצוב?', o:[
        'להמציא מראה: צבעים, פונטים, קומפוננטות — שהכל ייראה יפה',
        'להבין איך משתמשים חושבים ולהסיר כל מכשול מדרכם',
        'לתכנן מוצר שלם — מהמסך הראשון ועד לוגיקה עסקית',
        'להחיות ממשקים: אנימציות, מעברים, מיקרו-אינטראקציות'
      ], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'מה אתה מוכן לעשות שעות?', o:[
        'לבנות מערכת עיצוב: קומפוננטות, טוקנים, תיעוד',
        'לערוך ראיונות עם משתמשים ולנתח ממצאים',
        'למפות מסעות משתמש ופלואים של המוצר כולו',
        'ליצור אנימציות חלקות ופרוטוטייפים עם תנועה'
      ], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'איזה פרויקט נשמע הכי מרגש?', o:[
        'מערכת עיצוב אחידה למוצר גדול עם מאות קומפוננטות',
        'ריד-זיין של שירות מורכב מבוסס מחקר UX עם משתמשים אמיתיים',
        'השקת מוצר חדש מאפס: קונספט, UX, UI, העברה למפתחים',
        'לגרום לכפתור ל"נעלם" כל כך יפה שכולם יגידו "וואו"'
      ], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'איזה כלי אתה רוצה ללמוד ראשון?', o:[
        'Figma — auto-layout, משתנים, מערכת קומפוננטות',
        'Maze או UserTesting — פלטפורמות לבדיקות UX',
        'FigJam + Miro — לוורקשופים, מפות מסע משתמש, אסטרטגיה',
        'After Effects או Rive — לאנימציות ופרוטוטייפים אינטראקטיביים'
      ], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'מה הכי מרגיז אותך?', o:[
        'כשלכפתורים יש סגנון שונה על מסכים שונים ואין שום מערכת',
        'כשמוצר נראה נהדר אבל משתמשים לא מבינים איך להשתמש בו',
        'כשמעצבים עושים רק "תמונות יפות" בלי לחשוב על משתמשים ועסקים',
        'כשמעברים בין מסכים חדים ומכניים'
      ], s:[{ui:2},{ux:2},{product:2},{motion:2}]},
      {t:'בעוד 3 שנים אתה רוצה...', o:[
        'להיות מומחה במערכות עיצוב ובשפה הוויזואלית של מוצרים',
        'להוביל מחקרי UX ולבנות מוצרים מבוססי נתוני משתמשים',
        'להפוך למעצב מוצר שמשפיע על אסטרטגיה, לא רק על פיקסלים',
        'ליצור אנימציות לאפליקציות מובילות ולהציג ב-Dribbble/Behance'
      ], s:[{ui:3},{ux:3},{product:3},{motion:3}]}
    ],
    roles: {
      ui: {
        emoji:'🎨', name:'מעצב UI',
        desc:'יוצר את השפה הוויזואלית של מוצר: קומפוננטות, צבעים, טיפוגרפיה ומערכות עיצוב.',
        detail:'מעצב UI אחראי על איך המוצר נראה. אתה בונה מערכת עיצוב — ספריית קומפוננטות בה משתמשים כל המעצבים והמפתחים בצוות. Figma הוא הכלי המרכזי. מעצב UI טוב מבין כללי טיפוגרפיה, תורת צבע, היררכיה ויזואלית ויוצר מוקאפים pixel-perfect.',
        start:['Figma Learn — figma.com/resources/learn-design','Refactoring UI (ספר) — refactoringui.com','Dribbble להשראה — dribbble.com'],
        startUrls:['https://www.figma.com/resources/learn-design/','https://www.refactoringui.com','https://dribbble.com']
      },
      ux: {
        emoji:'🔍', name:'חוקר UX',
        desc:'חוקר התנהגות משתמשים והופך נתונים להחלטות מוצריות.',
        detail:'חוקר UX שואל את השאלות הנכונות. אתה מנהל ראיונות, בדיקות שמישות ומנתח התנהגות משתמשים. המשימה שלך: לוודא שהמוצר פותר בעיות אמיתיות של אנשים אמיתיים. תובנה מחקרית אחת טובה יכולה לחסוך חודש של פיתוח.',
        start:['Nielsen Norman Group — nngroup.com','Just Enough Research (ספר) — abookapart.com','Maze לבדיקות — maze.co'],
        startUrls:['https://www.nngroup.com','https://abookapart.com/products/just-enough-research','https://maze.co']
      },
      product: {
        emoji:'🧩', name:'מעצב מוצר',
        desc:'מתכנן את המוצר כולו: ממחקר ואסטרטגיה ועד הממשק הסופי.',
        detail:'מעצב מוצר הוא UX + UI + אסטרטגיה באדם אחד. אתה עובד עם הצוות מההתחלה: עוזר לנסח בעיות, חוקר משתמשים, ממפה פלואים, בונה פרוטוטייפים ועיצוב סופי. זו התפקיד הרחב והמבוקש ביותר בחברות מוצר.',
        start:['Shape Up מאת Basecamp — basecamp.com/shapeup','Figma — figma.com','Miro לוורקשופים — miro.com'],
        startUrls:['https://basecamp.com/shapeup','https://figma.com','https://miro.com']
      },
      motion: {
        emoji:'✨', name:'מעצב Motion',
        desc:'יוצר אנימציות, מעברים ומיקרו-אינטראקציות שגורמים לממשקים להרגיש חיים.',
        detail:'מעצב Motion מוסיף חיים ואופי למוצר. מעבר חלק בין מסכים, כפתור שמרגיש נכון בלחיצה, אנימציית טעינה שלא מרגיזה — זה כל העבודה שלך. כלים: After Effects, Rive (לאנימציות ווב), Lottie, Framer. מעצבי Motion עם פורטפוליו חזק מוערכים מאוד בחברות מוצר מובילות.',
        start:['Rive (אנימציות ווב/אפליקציה) — rive.app','LottieFiles — lottiefiles.com','The UX in Motion Manifesto — medium.com'],
        startUrls:['https://rive.app','https://lottiefiles.com','https://medium.com/ux-in-motion/ux-in-motion-manifesto-']
      }
    }
  },
  de: {
    questions: [
      {t:'Was zieht dich im Design am meisten an?', o:['Visuals gestalten: Farben, Schriften, Komponenten — alles schön machen','Verstehen wie Nutzer denken und Hindernisse aus dem Weg räumen','Das gesamte Produkt gestalten — vom ersten Bildschirm bis zur Logik','Interfaces zum Leben erwecken: Animationen, Übergänge, Micro-Interactions'], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'Was könntest du stundenlang machen?', o:['Ein Design-System aufbauen: Komponenten, Tokens, Dokumentation','Nutzerinterviews führen und Ergebnisse analysieren','User Journeys und Produktflows kartieren','Sanfte Animationen und Bewegungsprototypen erstellen'], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'Welches Projekt klingt am spannendsten?', o:['Ein einheitliches Design-System für ein großes Produkt mit hunderten Komponenten','Redesign eines komplexen Dienstes auf Basis echter Nutzerforschung','Ein neues Produkt von Grund auf launchen: Konzept, UX, UI, Übergabe','Einen Button so schön verschwinden lassen, dass alle „wow" sagen'], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'Welches Tool möchtest du zuerst meistern?', o:['Figma — Auto-Layout, Variablen, Komponentensystem','Maze oder UserTesting — Plattformen für UX-Tests','FigJam + Miro — für Workshops, User Journey Maps, Strategie','After Effects oder Rive — für Animationen und interaktive Prototypen'], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'Was nervt dich am meisten?', o:['Wenn Buttons auf verschiedenen Screens unterschiedliche Stile haben','Wenn ein Produkt toll aussieht, aber Nutzer nicht wissen wie sie es benutzen sollen','Wenn Designer nur „hübsche Bilder" machen ohne an Nutzer oder Business zu denken','Wenn Übergänge zwischen Screens abrupt und mechanisch wirken'], s:[{ui:2},{ux:2},{product:2},{motion:2}]},
      {t:'In 3 Jahren möchtest du...', o:['Experte für Design-Systeme und visuelle Produktsprache sein','UX-Forschung leiten und Produkte auf Basis echter Nutzerdaten bauen','Product Designer werden der Strategie beeinflusst, nicht nur Pixel','Animationen für Top-Apps erstellen und auf Dribbble/Behance glänzen'], s:[{ui:3},{ux:3},{product:3},{motion:3}]}
    ],
    roles: {
      ui:{emoji:'🎨',name:'UI Designer',desc:'Gestaltet die visuelle Sprache des Produkts: Komponenten, Farben, Typografie und Design-Systeme.',detail:'Ein UI Designer verantwortet das Aussehen des Produkts. Du baust das Design-System — eine Komponentenbibliothek für alle Designer und Entwickler im Team. Figma ist das Hauptwerkzeug. Typografieregeln, Farbtheorie, visuelle Hierarchie und pixel-perfect Mockups sind dein Handwerk.',start:['Figma Learn — figma.com/resources/learn-design','Refactoring UI (Buch) — refactoringui.com','Dribbble zur Inspiration — dribbble.com'],startUrls:['https://www.figma.com/resources/learn-design/','https://www.refactoringui.com','https://dribbble.com']},
      ux:{emoji:'🔍',name:'UX Researcher',desc:'Untersucht das Nutzerverhalten und macht Daten zu Produktentscheidungen.',detail:'Ein UX Researcher stellt die richtigen Fragen. Du führst Interviews, Usability-Tests durch und analysierst Nutzerverhalten. Deine Aufgabe: sicherstellen, dass das Produkt echte Probleme löst. Ein guter Forschungseinblick kann einen Entwicklungsmonat sparen.',start:['Nielsen Norman Group — nngroup.com','Just Enough Research (Buch) — abookapart.com','Maze zum Testen — maze.co'],startUrls:['https://www.nngroup.com','https://abookapart.com/products/just-enough-research','https://maze.co']},
      product:{emoji:'🧩',name:'Product Designer',desc:'Gestaltet das gesamte Produkt: von Forschung und Strategie bis zum finalen Interface.',detail:'Ein Product Designer vereint UX + UI + Strategie in einer Person. Du arbeitest von Anfang an mit dem Team: Probleme formulieren, Nutzer erforschen, Flows kartieren, Prototypen bauen. Die gefragteste Designrolle in Produktunternehmen.',start:['Shape Up von Basecamp — basecamp.com/shapeup','Figma — figma.com','Miro für Workshops — miro.com'],startUrls:['https://basecamp.com/shapeup','https://figma.com','https://miro.com']},
      motion:{emoji:'✨',name:'Motion Designer',desc:'Erstellt Animationen, Übergänge und Micro-Interactions die Interfaces lebendig machen.',detail:'Ein Motion Designer gibt dem Produkt Leben und Charakter. Sanfte Übergänge, ein Knopf der sich richtig anfühlt, eine Ladeanimation die nicht nervt — das alles ist deine Arbeit. Tools: After Effects, Rive, Lottie, Framer.',start:['Rive — rive.app','LottieFiles — lottiefiles.com','UX in Motion Manifesto — medium.com'],startUrls:['https://rive.app','https://lottiefiles.com','https://medium.com/ux-in-motion/ux-in-motion-manifesto-']}
    }
  },
  fr: {
    questions: [
      {t:'Qu\'est-ce qui t\'attire le plus dans le design ?', o:['Créer des visuels : couleurs, polices, composants — rendre tout beau','Comprendre comment les utilisateurs pensent et éliminer les obstacles','Concevoir l\'ensemble du produit — du premier écran à la logique','Animer les interfaces : animations, transitions, micro-interactions'], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'Qu\'est-ce que tu pourrais faire pendant des heures ?', o:['Construire un design system : composants, tokens, documentation','Mener des interviews utilisateurs et analyser les résultats','Cartographier les parcours utilisateurs et les flux produit','Créer des animations fluides et des prototypes animés'], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'Quel projet te paraît le plus passionnant ?', o:['Un design system unifié pour un grand produit avec des centaines de composants','Un redesign basé sur une vraie recherche utilisateur','Lancer un nouveau produit de zéro : concept, UX, UI, handoff','Faire disparaître un bouton si joliment que tout le monde dit « wow »'], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'Quel outil veux-tu maîtriser en premier ?', o:['Figma — auto-layout, variables, système de composants','Maze ou UserTesting — plateformes de test UX','FigJam + Miro — pour workshops, parcours utilisateur, stratégie','After Effects ou Rive — pour animations et prototypes interactifs'], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'Qu\'est-ce qui t\'énerve le plus ?', o:['Quand les boutons ont des styles différents selon les écrans sans aucun système','Quand le produit est beau mais les utilisateurs ne savent pas s\'en servir','Quand les designers ne font que des « jolies images » sans penser aux utilisateurs','Quand les transitions entre écrans sont abruptes et mécaniques'], s:[{ui:2},{ux:2},{product:2},{motion:2}]},
      {t:'Dans 3 ans tu veux...', o:['Être expert en design systems et langage visuel produit','Diriger la recherche UX et construire des produits basés sur les données utilisateurs','Devenir product designer qui influence la stratégie, pas seulement les pixels','Créer des animations pour des top apps et briller sur Dribbble/Behance'], s:[{ui:3},{ux:3},{product:3},{motion:3}]}
    ],
    roles: {
      ui:{emoji:'🎨',name:'UI Designer',desc:'Crée le langage visuel du produit : composants, couleurs, typographie et design systems.',detail:'Un UI Designer est responsable de l\'apparence du produit. Tu construis le design system — une bibliothèque de composants utilisée par tous les designers et développeurs. Figma est l\'outil principal. Typographie, théorie des couleurs, hiérarchie visuelle et mockups pixel-perfect sont tes outils.',start:['Figma Learn — figma.com/resources/learn-design','Refactoring UI (livre) — refactoringui.com','Dribbble pour s\'inspirer — dribbble.com'],startUrls:['https://www.figma.com/resources/learn-design/','https://www.refactoringui.com','https://dribbble.com']},
      ux:{emoji:'🔍',name:'Chercheur UX',desc:'Étudie le comportement des utilisateurs et transforme les données en décisions produit.',detail:'Un chercheur UX pose les bonnes questions. Tu mènes des interviews, des tests d\'utilisabilité et analyses le comportement. Ta mission : t\'assurer que le produit résout de vrais problèmes. Un bon insight de recherche peut économiser un mois de développement.',start:['Nielsen Norman Group — nngroup.com','Just Enough Research (livre) — abookapart.com','Maze pour tester — maze.co'],startUrls:['https://www.nngroup.com','https://abookapart.com/products/just-enough-research','https://maze.co']},
      product:{emoji:'🧩',name:'Product Designer',desc:'Conçoit l\'ensemble du produit : de la recherche et stratégie jusqu\'à l\'interface finale.',detail:'Un product designer est UX + UI + stratégie en une seule personne. Tu travailles avec l\'équipe dès le début : formuler les problèmes, rechercher les utilisateurs, cartographier les flux, créer prototypes et design final. Le rôle design le plus recherché dans les entreprises produit.',start:['Shape Up de Basecamp — basecamp.com/shapeup','Figma — figma.com','Miro pour workshops — miro.com'],startUrls:['https://basecamp.com/shapeup','https://figma.com','https://miro.com']},
      motion:{emoji:'✨',name:'Motion Designer',desc:'Crée des animations, transitions et micro-interactions qui donnent vie aux interfaces.',detail:'Un motion designer ajoute vie et caractère au produit. Transitions fluides, bouton qui « se sent » bien, animation de chargement qui ne frustre pas — tout ça c\'est ton travail. Outils : After Effects, Rive, Lottie, Framer.',start:['Rive — rive.app','LottieFiles — lottiefiles.com','UX in Motion Manifesto — medium.com'],startUrls:['https://rive.app','https://lottiefiles.com','https://medium.com/ux-in-motion/ux-in-motion-manifesto-']}
    }
  },
  es: {
    questions: [
      {t:'¿Qué es lo que más te atrae del diseño?', o:['Crear visuales: colores, fuentes, componentes — hacer todo hermoso','Entender cómo piensan los usuarios y eliminar obstáculos de su camino','Diseñar el producto completo — de la primera pantalla a la lógica de negocio','Dar vida a interfaces: animaciones, transiciones, micro-interacciones'], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'¿Qué podrías hacer durante horas?', o:['Construir un design system: componentes, tokens, documentación','Realizar entrevistas con usuarios y analizar los resultados','Mapear recorridos de usuario y flujos completos del producto','Crear animaciones fluidas y prototipos con movimiento'], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'¿Qué proyecto suena más emocionante?', o:['Un design system unificado para un gran producto con cientos de componentes','Un rediseño basado en investigación real de usuarios','Lanzar un nuevo producto desde cero: concepto, UX, UI, entrega a devs','Hacer desaparecer un botón tan bonito que todos digan "wow"'], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'¿Qué herramienta quieres dominar primero?', o:['Figma — auto-layout, variables, sistema de componentes','Maze o UserTesting — plataformas de pruebas UX','FigJam + Miro — para workshops, mapas de usuario, estrategia','After Effects o Rive — para animaciones y prototipos interactivos'], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'¿Qué te molesta más?', o:['Cuando los botones tienen estilos distintos en diferentes pantallas sin ningún sistema','Cuando el producto se ve genial pero los usuarios no saben cómo usarlo','Cuando los diseñadores solo hacen "imágenes bonitas" sin pensar en usuarios','Cuando las transiciones entre pantallas son abruptas y mecánicas'], s:[{ui:2},{ux:2},{product:2},{motion:2}]},
      {t:'En 3 años quieres...', o:['Ser experto en design systems y lenguaje visual del producto','Liderar investigación UX y construir productos basados en datos de usuarios','Convertirte en product designer que influye en la estrategia, no solo en píxeles','Crear animaciones para top apps y destacar en Dribbble/Behance'], s:[{ui:3},{ux:3},{product:3},{motion:3}]}
    ],
    roles: {
      ui:{emoji:'🎨',name:'Diseñador UI',desc:'Crea el lenguaje visual del producto: componentes, colores, tipografía y design systems.',detail:'Un diseñador UI es responsable de cómo se ve el producto. Construyes el design system — una biblioteca de componentes usada por todos en el equipo. Figma es la herramienta principal. Tipografía, teoría del color, jerarquía visual y mockups pixel-perfect son tu oficio.',start:['Figma Learn — figma.com/resources/learn-design','Refactoring UI (libro) — refactoringui.com','Dribbble para inspiración — dribbble.com'],startUrls:['https://www.figma.com/resources/learn-design/','https://www.refactoringui.com','https://dribbble.com']},
      ux:{emoji:'🔍',name:'Investigador UX',desc:'Estudia el comportamiento de usuarios y convierte datos en decisiones de producto.',detail:'Un investigador UX hace las preguntas correctas. Conduces entrevistas, pruebas de usabilidad y analizas comportamiento. Tu misión: asegurarte de que el producto resuelva problemas reales. Un buen insight puede ahorrar un mes de desarrollo.',start:['Nielsen Norman Group — nngroup.com','Just Enough Research (libro) — abookapart.com','Maze para pruebas — maze.co'],startUrls:['https://www.nngroup.com','https://abookapart.com/products/just-enough-research','https://maze.co']},
      product:{emoji:'🧩',name:'Product Designer',desc:'Diseña el producto completo: desde investigación y estrategia hasta la interfaz final.',detail:'Un product designer es UX + UI + estrategia en una persona. Trabajas con el equipo desde el principio: formular problemas, investigar usuarios, mapear flujos, crear prototipos y diseño final. El rol de diseño más buscado en empresas de producto.',start:['Shape Up de Basecamp — basecamp.com/shapeup','Figma — figma.com','Miro para workshops — miro.com'],startUrls:['https://basecamp.com/shapeup','https://figma.com','https://miro.com']},
      motion:{emoji:'✨',name:'Motion Designer',desc:'Crea animaciones, transiciones y micro-interacciones que dan vida a las interfaces.',detail:'Un motion designer añade vida y carácter al producto. Transiciones suaves, un botón que "se siente" bien al pulsar, animación de carga que no molesta — todo eso es tu trabajo. Herramientas: After Effects, Rive, Lottie, Framer.',start:['Rive — rive.app','LottieFiles — lottiefiles.com','UX in Motion Manifesto — medium.com'],startUrls:['https://rive.app','https://lottiefiles.com','https://medium.com/ux-in-motion/ux-in-motion-manifesto-']}
    }
  },
  pt: {
    questions: [
      {t:'O que mais te atrai no design?', o:['Criar visuais: cores, fontes, componentes — fazer tudo bonito','Entender como os usuários pensam e remover obstáculos do caminho deles','Projetar o produto inteiro — da primeira tela à lógica de negócio','Dar vida às interfaces: animações, transições, micro-interações'], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'O que você poderia fazer por horas?', o:['Construir um design system: componentes, tokens, documentação','Conduzir entrevistas com usuários e analisar os resultados','Mapear jornadas de usuário e fluxos completos do produto','Criar animações suaves e protótipos com movimento'], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'Qual projeto parece mais empolgante?', o:['Um design system unificado para um grande produto com centenas de componentes','Redesign de um serviço complexo baseado em pesquisa real com usuários','Lançar um produto novo do zero: conceito, UX, UI, entrega para devs','Fazer um botão desaparecer tão lindamente que todos digam "uau"'], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'Qual ferramenta você quer dominar primeiro?', o:['Figma — auto-layout, variáveis, sistema de componentes','Maze ou UserTesting — plataformas de testes UX','FigJam + Miro — para workshops, mapas de jornada, estratégia','After Effects ou Rive — para animações e protótipos interativos'], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'O que te irrita mais?', o:['Quando botões têm estilos diferentes em telas diferentes sem nenhum sistema','Quando o produto parece ótimo mas os usuários não sabem como usá-lo','Quando designers só fazem "imagens bonitas" sem pensar em usuários','Quando as transições entre telas são abruptas e mecânicas'], s:[{ui:2},{ux:2},{product:2},{motion:2}]},
      {t:'Em 3 anos você quer...', o:['Ser especialista em design systems e linguagem visual do produto','Liderar pesquisa UX e construir produtos baseados em dados de usuários','Tornar-se product designer que influencia estratégia, não só pixels','Criar animações para top apps e brilhar no Dribbble/Behance'], s:[{ui:3},{ux:3},{product:3},{motion:3}]}
    ],
    roles: {
      ui:{emoji:'🎨',name:'Designer UI',desc:'Cria a linguagem visual do produto: componentes, cores, tipografia e design systems.',detail:'Um designer UI é responsável pela aparência do produto. Você constrói o design system — uma biblioteca de componentes usada por todos no time. Figma é a ferramenta principal. Tipografia, teoria das cores, hierarquia visual e mockups pixel-perfect são seu ofício.',start:['Figma Learn — figma.com/resources/learn-design','Refactoring UI (livro) — refactoringui.com','Dribbble para inspiração — dribbble.com'],startUrls:['https://www.figma.com/resources/learn-design/','https://www.refactoringui.com','https://dribbble.com']},
      ux:{emoji:'🔍',name:'Pesquisador UX',desc:'Estuda o comportamento dos usuários e transforma dados em decisões de produto.',detail:'Um pesquisador UX faz as perguntas certas. Você conduz entrevistas, testes de usabilidade e analisa comportamento. Sua missão: garantir que o produto resolva problemas reais. Um bom insight pode economizar um mês de desenvolvimento.',start:['Nielsen Norman Group — nngroup.com','Just Enough Research (livro) — abookapart.com','Maze para testes — maze.co'],startUrls:['https://www.nngroup.com','https://abookapart.com/products/just-enough-research','https://maze.co']},
      product:{emoji:'🧩',name:'Product Designer',desc:'Projeta o produto inteiro: da pesquisa e estratégia até a interface final.',detail:'Um product designer é UX + UI + estratégia em uma pessoa. Você trabalha com o time desde o início: formular problemas, pesquisar usuários, mapear fluxos, criar protótipos e design final. O papel de design mais buscado em empresas de produto.',start:['Shape Up do Basecamp — basecamp.com/shapeup','Figma — figma.com','Miro para workshops — miro.com'],startUrls:['https://basecamp.com/shapeup','https://figma.com','https://miro.com']},
      motion:{emoji:'✨',name:'Motion Designer',desc:'Cria animações, transições e micro-interações que dão vida às interfaces.',detail:'Um motion designer adiciona vida e caráter ao produto. Transições suaves, botão que "se sente" bem ao clicar, animação de carregamento que não irrita — tudo isso é seu trabalho. Ferramentas: After Effects, Rive, Lottie, Framer.',start:['Rive — rive.app','LottieFiles — lottiefiles.com','UX in Motion Manifesto — medium.com'],startUrls:['https://rive.app','https://lottiefiles.com','https://medium.com/ux-in-motion/ux-in-motion-manifesto-']}
    }
  },
  ar: {
    questions: [
      {t:'ما الذي يجذبك أكثر في التصميم؟', o:['إنشاء مرئيات: ألوان، خطوط، مكونات — جعل كل شيء جميل','فهم كيفية تفكير المستخدمين وإزالة العقبات من طريقهم','تصميم المنتج بالكامل — من الشاشة الأولى إلى المنطق','إحياء الواجهات: رسوم متحركة، انتقالات، تفاعلات دقيقة'], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'ما الذي يمكنك فعله لساعات؟', o:['بناء نظام تصميم: مكونات، رموز، توثيق','إجراء مقابلات مع المستخدمين وتحليل النتائج','رسم خرائط رحلات المستخدم وتدفقات المنتج','إنشاء رسوم متحركة سلسة ونماذج أولية متحركة'], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'أي مشروع يبدو الأكثر إثارة؟', o:['نظام تصميم موحد لمنتج كبير بمئات المكونات','إعادة تصميم خدمة معقدة بناءً على بحث حقيقي مع المستخدمين','إطلاق منتج جديد من الصفر: المفهوم، UX، UI، التسليم للمطورين','جعل زر يختفي بجمال شديد حتى يقول الجميع "واو"'], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'أي أداة تريد إتقانها أولاً؟', o:['Figma — تخطيط تلقائي، متغيرات، نظام مكونات','Maze أو UserTesting — منصات اختبار UX','FigJam + Miro — للورش، خرائط رحلة المستخدم، الاستراتيجية','After Effects أو Rive — للرسوم المتحركة والنماذج التفاعلية'], s:[{ui:3},{ux:3},{product:3},{motion:3}]},
      {t:'ما الذي يزعجك أكثر؟', o:['عندما تكون الأزرار بأنماط مختلفة على شاشات مختلفة دون أي نظام','عندما يبدو المنتج رائعاً لكن المستخدمين لا يعرفون كيف يستخدمونه','عندما يصنع المصممون فقط «صور جميلة» دون التفكير في المستخدمين','عندما تكون الانتقالات بين الشاشات مفاجئة وآلية'], s:[{ui:2},{ux:2},{product:2},{motion:2}]},
      {t:'بعد 3 سنوات تريد...', o:['أن تكون خبيراً في أنظمة التصميم واللغة البصرية للمنتج','قيادة بحث UX وبناء منتجات مبنية على بيانات المستخدمين','أن تصبح مصمم منتج يؤثر على الاستراتيجية وليس فقط البكسل','إنشاء رسوم متحركة لأفضل التطبيقات والتألق على Dribbble/Behance'], s:[{ui:3},{ux:3},{product:3},{motion:3}]}
    ],
    roles: {
      ui:{emoji:'🎨',name:'مصمم UI',desc:'يخلق اللغة البصرية للمنتج: مكونات، ألوان، طباعة وأنظمة تصميم.',detail:'مصمم UI مسؤول عن مظهر المنتج. تبني نظام التصميم — مكتبة مكونات يستخدمها جميع المصممين والمطورين في الفريق. Figma هو الأداة الرئيسية. قواعد الطباعة، نظرية الألوان، التسلسل الهرمي البصري والماكيتات الدقيقة هي حرفتك.',start:['Figma Learn — figma.com/resources/learn-design','Refactoring UI (كتاب) — refactoringui.com','Dribbble للإلهام — dribbble.com'],startUrls:['https://www.figma.com/resources/learn-design/','https://www.refactoringui.com','https://dribbble.com']},
      ux:{emoji:'🔍',name:'باحث UX',desc:'يدرس سلوك المستخدمين ويحول البيانات إلى قرارات للمنتج.',detail:'باحث UX يطرح الأسئلة الصحيحة. تجري مقابلات واختبارات قابلية الاستخدام وتحلل السلوك. مهمتك: ضمان أن المنتج يحل مشاكل حقيقية لأناس حقيقيين. بصيرة بحثية واحدة جيدة يمكن أن توفر شهر تطوير.',start:['Nielsen Norman Group — nngroup.com','Just Enough Research (كتاب) — abookapart.com','Maze للاختبار — maze.co'],startUrls:['https://www.nngroup.com','https://abookapart.com/products/just-enough-research','https://maze.co']},
      product:{emoji:'🧩',name:'مصمم منتج',desc:'يصمم المنتج بأكمله: من البحث والاستراتيجية حتى الواجهة النهائية.',detail:'مصمم المنتج هو UX + UI + استراتيجية في شخص واحد. تعمل مع الفريق منذ البداية: صياغة المشاكل، بحث المستخدمين، رسم التدفقات، بناء النماذج والتصميم النهائي. الدور الأكثر طلباً في شركات المنتجات.',start:['Shape Up من Basecamp — basecamp.com/shapeup','Figma — figma.com','Miro للورش — miro.com'],startUrls:['https://basecamp.com/shapeup','https://figma.com','https://miro.com']},
      motion:{emoji:'✨',name:'مصمم Motion',desc:'يخلق رسوماً متحركة وانتقالات وتفاعلات دقيقة تجعل الواجهات حية.',detail:'مصمم Motion يضيف حياة وطابعاً للمنتج. انتقالات سلسة، زر يُشعر بالصحة عند الضغط، رسم متحرك للتحميل لا يزعج — كل هذا عملك. الأدوات: After Effects، Rive، Lottie، Framer.',start:['Rive — rive.app','LottieFiles — lottiefiles.com','UX in Motion Manifesto — medium.com'],startUrls:['https://rive.app','https://lottiefiles.com','https://medium.com/ux-in-motion/ux-in-motion-manifesto-']}
    }
  }
};

L2.gamedev = {
  ru: {
    questions: [
      {t:'Какой движок тебя привлекает больше всего?', o:[
        'Unity — огромное сообщество, C#, мобильные и инди-игры',
        'Unreal Engine — нереальная графика, Blueprint, AAA-уровень',
        'Godot — бесплатный, лёгкий, идеален для инди и 2D',
        'Мне интереснее придумывать механики и уровни, чем писать код'
      ], s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
      {t:'Что из этого ты готов делать часами?', o:[
        'Настраивать физику, ИИ врагов и систему частиц в Unity',
        'Выжимать максимальную графику из Lumen и Nanite в Unreal',
        'Делать пиксель-арт, геймплей и уровни в одиночку за неделю',
        'Балансировать механики, писать GDD и тестировать ощущение от игры'
      ], s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
      {t:'Какой проект звучит круче всего?', o:[
        'Мобильная или PC-игра с онлайн-мультиплеером на Unity',
        'Шутер с фотореалистичной графикой уровня Fortnite или Battlefield',
        'Моя собственная инди-игра в Steam — полностью своими руками',
        'Продумать игровую механику с нуля: прогрессию, баланс, нарратив'
      ], s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
      {t:'Что тебя больше всего вдохновляет?', o:[
        'Большое сообщество и Asset Store — можно найти решение любой задачи',
        'Кинематографичность: катсцены, освещение, шейдеры как в кино',
        'Полная свобода: никаких лицензий, маленький размер, всё под контролем',
        'Момент когда игроки находят неожиданный способ пройти твой уровень'
      ], s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
      {t:'Что тебя раздражает больше всего?', o:[
        'Когда игра лагает из-за плохой оптимизации и утечек памяти',
        'Когда движок ограничивает графику и нельзя сделать "как в кино"',
        'Когда нужна большая команда чтобы сделать что-то простое',
        'Когда игра технически отличная но скучная — нет драйва и прогрессии'
      ], s:[{unity:2},{unreal:2},{indie:2},{designer:2}]},
      {t:'Через 3 года ты хочешь...', o:[
        'Работать в студии на Unity и делать хиты для мобайл или PC',
        'Попасть в AAA-студию и делать игры уровня Cyberpunk или God of War',
        'Выпустить свою инди-игру в Steam и зарабатывать на ней',
        'Стать гейм-дизайнером в топовой студии и определять что делает игру крутой'
      ], s:[{unity:3},{unreal:3},{indie:3},{designer:3}]}
    ],
    roles: {
      unity: {
        emoji:'🟦', name:'Unity Разработчик',
        desc:'Создаёт игры на Unity с помощью C# — от мобайла до PC и VR.',
        detail:'Unity — самый популярный движок в мире по числу выпущенных игр. На нём сделаны Pokémon GO, Hearthstone, Hollow Knight, Among Us. Ты пишешь на C#, работаешь с физикой, анимациями, ИИ и мультиплеером. Огромный Asset Store и сообщество означают что решение почти любой задачи уже существует. Отличный выбор для старта — и для карьеры в студии, и для собственных проектов.',
        start:['Unity Learn (официально, бесплатно) — learn.unity.com','Brackeys на YouTube (лучший курс по Unity) — youtube.com/@Brackeys','C# за 30 минут — docs.microsoft.com/dotnet/csharp'],
        startUrls:['https://learn.unity.com','https://www.youtube.com/@Brackeys','https://docs.microsoft.com/dotnet/csharp/tour-of-csharp']
      },
      unreal: {
        emoji:'🔵', name:'Unreal Engine Разработчик',
        desc:'Создаёт игры с фотореалистичной графикой на мощнейшем AAA-движке.',
        detail:'Unreal Engine — выбор AAA-студий и всех кто хочет максимальную графику. Fortnite, Gears of War, Hogwarts Legacy, The Matrix Awakens — всё это Unreal. Можно начать с Blueprint (визуальный скриптинг без кода) и постепенно переходить на C++. Lumen (глобальное освещение) и Nanite (бесконечная детализация) — это технологии которых нет нигде больше.',
        start:['Unreal Online Learning — dev.epicgames.com/courses','Blueprint Visual Scripting — docs.unrealengine.com','GameDev.tv Unreal курс — gamedev.tv'],
        startUrls:['https://dev.epicgames.com/community/learning','https://docs.unrealengine.com/5.0/programming-and-scripting/blueprints-visual-scripting/','https://www.gamedev.tv']
      },
      indie: {
        emoji:'🕹️', name:'Инди-разработчик',
        desc:'Делает игры самостоятельно или в маленькой команде — от идеи до Steam.',
        detail:'Инди-разработчик — это полная свобода и полная ответственность. Ты сам придумываешь игру, пишешь код, делаешь (или ищешь) арт и звук, выпускаешь в Steam или itch.io. Godot — отличный выбор: бесплатный, лёгкий, с GDScript похожим на Python. Stardew Valley, Undertale, Celeste — всё это инди-проекты одного или двух человек, которые заработали миллионы.',
        start:['Godot Engine (бесплатно) — godotengine.org','itch.io — публикуй первые игры бесплатно — itch.io','GameMaker — gamemaker.io (для 2D)'],
        startUrls:['https://godotengine.org','https://itch.io','https://gamemaker.io']
      },
      designer: {
        emoji:'🎲', name:'Гейм-дизайнер',
        desc:'Придумывает что делает игру интересной: механики, прогрессию, баланс, нарратив.',
        detail:'Гейм-дизайнер — это человек у которого в голове живёт целый игровой мир. Ты пишешь GDD (Game Design Document), придумываешь механики, балансируешь экономику игры, проектируешь уровни и прогрессию. Не обязательно уметь программировать — важнее понимать психологию игрока: почему это весело, что заставляет нажать ещё раз. Работаешь в тесном контакте с программистами и художниками.',
        start:['"The Art of Game Design" Джесси Шелл (лучшая книга по гейм-дизайну)','GDC Vault (бесплатные лекции от разработчиков) — gdcvault.com/free','Twine — делай текстовые игры без кода — twinery.org'],
        startUrls:['https://www.schellgames.com/art-of-game-design/','https://www.gdcvault.com/free','https://twinery.org']
      }
    }
  },
  en: {
    questions: [
      {t:'Which engine attracts you the most?', o:[
        'Unity — huge community, C#, mobile and indie games',
        'Unreal Engine — incredible graphics, Blueprints, AAA level',
        'Godot — free, lightweight, perfect for indie and 2D',
        'I am more interested in designing mechanics and levels than writing code'
      ], s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
      {t:'What could you spend hours doing?', o:[
        'Tuning physics, enemy AI and particle systems in Unity',
        'Pushing maximum visuals with Lumen and Nanite in Unreal',
        'Making pixel art, gameplay and levels solo in a week',
        'Balancing mechanics, writing a GDD and playtesting game feel'
      ], s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
      {t:'Which project sounds most exciting?', o:[
        'A mobile or PC game with online multiplayer built in Unity',
        'A shooter with photorealistic graphics at the level of Fortnite or Battlefield',
        'My own indie game on Steam — built entirely by myself',
        'Designing a game mechanic from scratch: progression, balance, narrative'
      ], s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
      {t:'What inspires you the most?', o:[
        'A huge community and Asset Store — solutions exist for almost every problem',
        'Cinematic quality: cutscenes, lighting and shaders like in a movie',
        'Total freedom: no licensing fees, small footprint, full control',
        'The moment when players find an unexpected way to beat your level'
      ], s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
      {t:'What annoys you the most?', o:[
        'When a game lags because of poor optimization and memory leaks',
        'When the engine limits graphics and you cannot achieve a cinematic look',
        'When you need a big team just to make something simple',
        'When a game is technically great but boring — no drive or progression'
      ], s:[{unity:2},{unreal:2},{indie:2},{designer:2}]},
      {t:'In 3 years you want to...', o:[
        'Work at a Unity studio and ship hits for mobile or PC',
        'Join an AAA studio and make games like Cyberpunk or God of War',
        'Release my own indie game on Steam and earn money from it',
        'Become a game designer at a top studio and define what makes a game great'
      ], s:[{unity:3},{unreal:3},{indie:3},{designer:3}]}
    ],
    roles: {
      unity: {
        emoji:'🟦', name:'Unity Developer',
        desc:'Builds games in Unity with C# — from mobile to PC and VR.',
        detail:'Unity is the world\'s most widely used engine by number of games shipped. Pokémon GO, Hearthstone, Hollow Knight and Among Us were all made with it. You write C#, work with physics, animations, AI and multiplayer. The enormous Asset Store and community mean solutions to almost any problem already exist. A great choice both for starting out and for a career at a studio.',
        start:['Unity Learn (official, free) — learn.unity.com','Brackeys on YouTube (best Unity course) — youtube.com/@Brackeys','C# in 30 minutes — docs.microsoft.com/dotnet/csharp'],
        startUrls:['https://learn.unity.com','https://www.youtube.com/@Brackeys','https://docs.microsoft.com/dotnet/csharp/tour-of-csharp']
      },
      unreal: {
        emoji:'🔵', name:'Unreal Engine Developer',
        desc:'Builds games with photorealistic graphics on the most powerful AAA engine.',
        detail:'Unreal Engine is the choice of AAA studios and anyone who wants maximum visual fidelity. Fortnite, Gears of War, Hogwarts Legacy, The Matrix Awakens — all Unreal. You can start with Blueprints (visual scripting without code) and gradually move to C++. Lumen (global illumination) and Nanite (infinite geometric detail) are technologies found nowhere else.',
        start:['Unreal Online Learning — dev.epicgames.com/courses','Blueprint Visual Scripting — docs.unrealengine.com','GameDev.tv Unreal course — gamedev.tv'],
        startUrls:['https://dev.epicgames.com/community/learning','https://docs.unrealengine.com/5.0/programming-and-scripting/blueprints-visual-scripting/','https://www.gamedev.tv']
      },
      indie: {
        emoji:'🕹️', name:'Indie Developer',
        desc:'Makes games solo or in a tiny team — from idea to Steam release.',
        detail:'An indie developer has total freedom and total responsibility. You design the game, write the code, create (or source) art and audio, then ship to Steam or itch.io. Godot is an excellent choice: free, lightweight, with GDScript similar to Python. Stardew Valley, Undertale, Celeste — all indie projects by one or two people that earned millions.',
        start:['Godot Engine (free) — godotengine.org','itch.io — publish your first games for free — itch.io','GameMaker — gamemaker.io (great for 2D)'],
        startUrls:['https://godotengine.org','https://itch.io','https://gamemaker.io']
      },
      designer: {
        emoji:'🎲', name:'Game Designer',
        desc:'Invents what makes a game fun: mechanics, progression, balance and narrative.',
        detail:'A game designer carries an entire game world in their head. You write the GDD (Game Design Document), invent mechanics, balance the in-game economy, design levels and progression curves. You do not have to be a programmer — what matters more is understanding player psychology: why is this fun, what makes someone press the button one more time. You work closely with programmers and artists.',
        start:['"The Art of Game Design" by Jesse Schell (the best book on game design)','GDC Vault (free talks by developers) — gdcvault.com/free','Twine — make text games without code — twinery.org'],
        startUrls:['https://www.schellgames.com/art-of-game-design/','https://www.gdcvault.com/free','https://twinery.org']
      }
    }
  },
  he: {
    questions: [
      {t:'איזה מנוע מושך אותך יותר מכל?', o:[
        'Unity — קהילה עצומה, C#, משחקי מובייל ואינדי',
        'Unreal Engine — גרפיקה מדהימה, Blueprint, רמת AAA',
        'Godot — חינמי, קל, מושלם לאינדי ו-2D',
        'אני יותר מעוניין להמציא מכניקות ושלבים מאשר לכתוב קוד'
      ], s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
      {t:'מה אתה מוכן לעשות שעות?', o:[
        'לכוונן פיזיקה, AI של אויבים ומערכת חלקיקים ב-Unity',
        'לדחוף גרפיקה מקסימלית עם Lumen ו-Nanite ב-Unreal',
        'לעשות פיקסל-ארט, גיימפליי ושלבים לבד תוך שבוע',
        'לאזן מכניקות, לכתוב GDD ולבדוק תחושת משחק'
      ], s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
      {t:'איזה פרויקט נשמע הכי מרגש?', o:[
        'משחק מובייל או PC עם מולטיפלייר אונליין ב-Unity',
        'שוטר עם גרפיקה פוטו-ריאליסטית ברמת Fortnite או Battlefield',
        'משחק אינדי שלי ב-Steam — עם הידיים שלי לגמרי',
        'לתכנן מכניקת משחק מאפס: פרוגרסיה, איזון, נרטיב'
      ], s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
      {t:'מה הכי מעורר בך השראה?', o:[
        'קהילה גדולה ו-Asset Store — פתרון לכמעט כל בעיה כבר קיים',
        'קולנועיות: קאטסצנות, תאורה ושיידרים כמו בסרט',
        'חופש מלא: ללא דמי רישוי, קטן, שליטה מלאה',
        'הרגע שבו שחקנים מוצאים דרך בלתי צפויה לסיים את השלב שלך'
      ], s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
      {t:'מה הכי מרגיז אותך?', o:[
        'כשמשחק מתגמגם בגלל אופטימיזציה גרועה ודליפות זיכרון',
        'כשהמנוע מגביל גרפיקה ולא ניתן להשיג מראה קולנועי',
        'כשצריך צוות גדול רק כדי לעשות משהו פשוט',
        'כשמשחק מעולה טכנית אבל משעמם — אין דרייב ופרוגרסיה'
      ], s:[{unity:2},{unreal:2},{indie:2},{designer:2}]},
      {t:'בעוד 3 שנים אתה רוצה...', o:[
        'לעבוד בסטודיו Unity ולשחרר הצלחות למובייל או PC',
        'להצטרף לסטודיו AAA ולעשות משחקים ברמת Cyberpunk או God of War',
        'לשחרר משחק אינדי שלי ב-Steam ולהרוויח ממנו',
        'להפוך למעצב משחקים בסטודיו מוביל ולהגדיר מה הופך משחק לנהדר'
      ], s:[{unity:3},{unreal:3},{indie:3},{designer:3}]}
    ],
    roles: {
      unity: {
        emoji:'🟦', name:'מפתח Unity',
        desc:'בונה משחקים ב-Unity עם C# — ממובייל ועד PC ו-VR.',
        detail:'Unity הוא המנוע הנפוץ ביותר בעולם לפי מספר משחקים שיצאו. Pokémon GO, Hearthstone, Hollow Knight, Among Us — כולם נוצרו בו. אתה כותב C#, עובד עם פיזיקה, אנימציות, AI ומולטיפלייר. ה-Asset Store הענק והקהילה אומרים שפתרונות לכמעט כל בעיה כבר קיימים.',
        start:['Unity Learn (רשמי, חינמי) — learn.unity.com','Brackeys ב-YouTube (הקורס הטוב ביותר) — youtube.com/@Brackeys','C# ב-30 דקות — docs.microsoft.com/dotnet/csharp'],
        startUrls:['https://learn.unity.com','https://www.youtube.com/@Brackeys','https://docs.microsoft.com/dotnet/csharp/tour-of-csharp']
      },
      unreal: {
        emoji:'🔵', name:'מפתח Unreal Engine',
        desc:'בונה משחקים עם גרפיקה פוטו-ריאליסטית על המנוע העוצמתי ביותר.',
        detail:'Unreal Engine הוא הבחירה של סטודיות AAA וכל מי שרוצה גרפיקה מקסימלית. Fortnite, Gears of War, Hogwarts Legacy — כולם Unreal. אפשר להתחיל עם Blueprint (סקריפטינג ויזואלי ללא קוד) ולעבור בהדרגה ל-C++. Lumen ו-Nanite הן טכנולוגיות שאין בשום מקום אחר.',
        start:['Unreal Online Learning — dev.epicgames.com/courses','Blueprint Visual Scripting — docs.unrealengine.com','GameDev.tv קורס Unreal — gamedev.tv'],
        startUrls:['https://dev.epicgames.com/community/learning','https://docs.unrealengine.com/5.0/programming-and-scripting/blueprints-visual-scripting/','https://www.gamedev.tv']
      },
      indie: {
        emoji:'🕹️', name:'מפתח אינדי',
        desc:'עושה משחקים לבד או בצוות קטן — מרעיון עד פרסום ב-Steam.',
        detail:'מפתח אינדי הוא חופש מלא ואחריות מלאה. אתה מתכנן את המשחק, כותב קוד, יוצר (או מחפש) אמנות וצליל, ומשחרר ל-Steam או itch.io. Godot הוא בחירה מצוינת: חינמי, קל, עם GDScript דומה ל-Python. Stardew Valley, Undertale, Celeste — כולם פרויקטי אינדי של אדם אחד או שניים שהרוויחו מיליונים.',
        start:['Godot Engine (חינמי) — godotengine.org','itch.io — פרסם משחקים ראשונים חינם — itch.io','GameMaker — gamemaker.io (מצוין ל-2D)'],
        startUrls:['https://godotengine.org','https://itch.io','https://gamemaker.io']
      },
      designer: {
        emoji:'🎲', name:'מעצב משחקים',
        desc:'ממציא מה הופך משחק למהנה: מכניקות, פרוגרסיה, איזון ונרטיב.',
        detail:'מעצב משחקים נושא עולם שלם בראש. אתה כותב GDD (Game Design Document), ממציא מכניקות, מאזן את הכלכלה של המשחק, מתכנן שלבים ועקומות פרוגרסיה. אין צורך לדעת לתכנת — חשוב יותר להבין פסיכולוגיית שחקנים: למה זה מהנה, מה גורם ללחוץ שוב. אתה עובד בשיתוף פעולה הדוק עם מתכנתים ואמנים.',
        start:['"The Art of Game Design" מאת Jesse Schell (הספר הטוב ביותר)','GDC Vault (הרצאות חינמיות) — gdcvault.com/free','Twine — צור משחקי טקסט ללא קוד — twinery.org'],
        startUrls:['https://www.schellgames.com/art-of-game-design/','https://www.gdcvault.com/free','https://twinery.org']
      }
    }
  },
  de:{questions:[
    {t:'Welche Engine zieht dich am meisten an?',o:['Unity — riesige Community, C#, Mobile- und Indie-Spiele','Unreal Engine — beeindruckende Grafik, Blueprints, AAA-Niveau','Godot — kostenlos, leichtgewichtig, ideal für Indie und 2D','Mich interessiert mehr, Mechaniken und Level zu entwerfen als Code zu schreiben'],s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
    {t:'Was könntest du stundenlang machen?',o:['Physik, Gegner-KI und Partikelsysteme in Unity feintunen','Maximale Grafik mit Lumen und Nanite in Unreal herausholen','Pixel-Art, Gameplay und Level alleine in einer Woche erstellen','Mechaniken balancieren, GDD schreiben und das Spielgefühl testen'],s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
    {t:'Welches Projekt klingt am aufregendsten?',o:['Ein Mobile- oder PC-Spiel mit Online-Multiplayer in Unity','Ein Shooter mit fotorealistischer Grafik auf Fortnite-Niveau','Mein eigenes Indie-Spiel auf Steam — komplett selbst gemacht','Eine Spielmechanik von Grund auf entwerfen: Progression, Balance, Narrative'],s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
    {t:'Was inspiriert dich am meisten?',o:['Riesige Community und Asset Store — Lösungen für fast alles vorhanden','Kinoqualität: Cutscenes, Beleuchtung und Shader wie im Film','Totale Freiheit: keine Lizenzgebühren, klein, volle Kontrolle','Der Moment wenn Spieler einen unerwarteten Weg durch dein Level finden'],s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
    {t:'Was nervt dich am meisten?',o:['Wenn ein Spiel wegen schlechter Optimierung ruckelt','Wenn die Engine die Grafik limitiert','Wenn man ein großes Team für etwas Einfaches braucht','Wenn ein Spiel technisch toll aber langweilig ist'],s:[{unity:2},{unreal:2},{indie:2},{designer:2}]},
    {t:'In 3 Jahren möchtest du...',o:['In einem Unity-Studio arbeiten und Hits für Mobile oder PC machen','In ein AAA-Studio einsteigen und Spiele wie Cyberpunk entwickeln','Mein eigenes Indie-Spiel auf Steam veröffentlichen und Geld verdienen','Game Designer in einem Top-Studio werden und definieren was Spiele großartig macht'],s:[{unity:3},{unreal:3},{indie:3},{designer:3}]}
  ],roles:{
    unity:{emoji:'🟦',name:'Unity Entwickler',desc:'Entwickelt Spiele in Unity mit C# — von Mobile bis PC und VR.',detail:'Unity ist die weltweit meistgenutzte Engine. Pokémon GO, Hearthstone, Hollow Knight, Among Us — alles damit gemacht. Du schreibst C#, arbeitest mit Physik, Animationen, KI und Multiplayer.',start:['Unity Learn — learn.unity.com','Brackeys auf YouTube — youtube.com/@Brackeys','C# Grundlagen — docs.microsoft.com/dotnet/csharp'],startUrls:['https://learn.unity.com','https://www.youtube.com/@Brackeys','https://docs.microsoft.com/dotnet/csharp/tour-of-csharp']},
    unreal:{emoji:'🔵',name:'Unreal Engine Entwickler',desc:'Erstellt Spiele mit fotorealistischer Grafik auf der leistungsstärksten AAA-Engine.',detail:'Unreal Engine ist die Wahl von AAA-Studios. Fortnite, Hogwarts Legacy — alles Unreal. Du kannst mit Blueprints beginnen und schrittweise zu C++ wechseln.',start:['Unreal Online Learning — dev.epicgames.com/courses','Blueprint Scripting — docs.unrealengine.com','GameDev.tv Unreal Kurs — gamedev.tv'],startUrls:['https://dev.epicgames.com/community/learning','https://docs.unrealengine.com/5.0/programming-and-scripting/blueprints-visual-scripting/','https://www.gamedev.tv']},
    indie:{emoji:'🕹️',name:'Indie Entwickler',desc:'Erstellt Spiele solo oder im kleinen Team — von der Idee bis Steam.',detail:'Indie-Entwickler hat totale Freiheit und totale Verantwortung. Godot ist eine ausgezeichnete Wahl: kostenlos, leicht, mit GDScript ähnlich wie Python. Stardew Valley, Undertale — Indie-Projekte die Millionen verdienten.',start:['Godot Engine — godotengine.org','itch.io — erste Spiele kostenlos veröffentlichen — itch.io','GameMaker — gamemaker.io (toll für 2D)'],startUrls:['https://godotengine.org','https://itch.io','https://gamemaker.io']},
    designer:{emoji:'🎲',name:'Game Designer',desc:'Erfindet was ein Spiel spaßig macht: Mechaniken, Progression, Balance und Narrativ.',detail:'Ein Game Designer trägt eine ganze Spielwelt im Kopf. Du schreibst das GDD, erfindest Mechaniken, balancierst die Spielökonomie. Du musst nicht programmieren können — wichtiger ist das Verständnis der Spielerpsychologie.',start:['"The Art of Game Design" von Jesse Schell','GDC Vault (kostenlose Talks) — gdcvault.com/free','Twine — Textspiele ohne Code — twinery.org'],startUrls:['https://www.schellgames.com/art-of-game-design/','https://www.gdcvault.com/free','https://twinery.org']}
  }},
  fr:{questions:[
    {t:'Quel moteur t\'attire le plus ?',o:['Unity — grande communauté, C#, jeux mobiles et indés','Unreal Engine — graphismes incroyables, Blueprints, niveau AAA','Godot — gratuit, léger, parfait pour indie et 2D','Je suis plus intéressé par la conception de mécaniques et de niveaux que par le code'],s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
    {t:'Que pourrais-tu faire pendant des heures ?',o:['Régler la physique, l\'IA ennemie et les systèmes de particules dans Unity','Pousser les visuels au maximum avec Lumen et Nanite dans Unreal','Faire du pixel-art, le gameplay et les niveaux seul en une semaine','Équilibrer les mécaniques, écrire un GDD et tester le ressenti du jeu'],s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
    {t:'Quel projet te semble le plus excitant ?',o:['Un jeu mobile ou PC avec multijoueur en ligne dans Unity','Un shooter avec des graphismes photoréalistes au niveau de Fortnite','Mon propre jeu indé sur Steam — entièrement fait par moi','Concevoir une mécanique de jeu de zéro : progression, équilibre, narration'],s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
    {t:'Qu\'est-ce qui t\'inspire le plus ?',o:['Grande communauté et Asset Store — des solutions existent pour presque tout','Qualité cinématographique : cinématiques, éclairage et shaders comme au cinéma','Liberté totale : pas de frais de licence, léger, contrôle total','Le moment où les joueurs trouvent une façon inattendue de finir ton niveau'],s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
    {t:'Qu\'est-ce qui t\'énerve le plus ?',o:['Quand un jeu rame à cause d\'une mauvaise optimisation','Quand le moteur limite les graphismes','Quand il faut une grande équipe pour faire quelque chose de simple','Quand un jeu est techniquement excellent mais ennuyeux'],s:[{unity:2},{unreal:2},{indie:2},{designer:2}]},
    {t:'Dans 3 ans tu veux...',o:['Travailler dans un studio Unity et sortir des hits mobile ou PC','Rejoindre un studio AAA et faire des jeux comme Cyberpunk','Sortir mon propre jeu indé sur Steam et en vivre','Devenir game designer dans un top studio et définir ce qui rend un jeu génial'],s:[{unity:3},{unreal:3},{indie:3},{designer:3}]}
  ],roles:{
    unity:{emoji:'🟦',name:'Développeur Unity',desc:'Crée des jeux dans Unity avec C# — du mobile au PC et VR.',detail:'Unity est le moteur le plus utilisé au monde. Pokémon GO, Hollow Knight, Among Us — tous faits avec. Tu écris en C#, travailles avec la physique, les animations, l\'IA et le multijoueur.',start:['Unity Learn — learn.unity.com','Brackeys sur YouTube — youtube.com/@Brackeys','C# en 30 min — docs.microsoft.com/dotnet/csharp'],startUrls:['https://learn.unity.com','https://www.youtube.com/@Brackeys','https://docs.microsoft.com/dotnet/csharp/tour-of-csharp']},
    unreal:{emoji:'🔵',name:'Développeur Unreal Engine',desc:'Crée des jeux avec des graphismes photoréalistes sur le moteur AAA le plus puissant.',detail:'Unreal Engine est le choix des studios AAA. Fortnite, Hogwarts Legacy — tout Unreal. Tu peux commencer avec les Blueprints et passer progressivement au C++.',start:['Unreal Online Learning — dev.epicgames.com/courses','Blueprint Scripting — docs.unrealengine.com','GameDev.tv cours Unreal — gamedev.tv'],startUrls:['https://dev.epicgames.com/community/learning','https://docs.unrealengine.com/5.0/programming-and-scripting/blueprints-visual-scripting/','https://www.gamedev.tv']},
    indie:{emoji:'🕹️',name:'Développeur Indé',desc:'Crée des jeux seul ou en petite équipe — de l\'idée à Steam.',detail:'Un développeur indé a une liberté totale et une responsabilité totale. Godot est un excellent choix : gratuit, léger, avec GDScript similaire à Python. Stardew Valley, Undertale — projets indés qui ont gagné des millions.',start:['Godot Engine — godotengine.org','itch.io — publie tes premiers jeux gratuitement — itch.io','GameMaker — gamemaker.io (super pour 2D)'],startUrls:['https://godotengine.org','https://itch.io','https://gamemaker.io']},
    designer:{emoji:'🎲',name:'Game Designer',desc:'Invente ce qui rend un jeu amusant : mécaniques, progression, équilibre et narration.',detail:'Un game designer porte tout un monde de jeu dans sa tête. Tu écris le GDD, inventes les mécaniques, équilibres l\'économie du jeu. Tu n\'as pas besoin de savoir programmer — comprendre la psychologie du joueur est plus important.',start:['"The Art of Game Design" de Jesse Schell','GDC Vault (talks gratuits) — gdcvault.com/free','Twine — jeux de texte sans code — twinery.org'],startUrls:['https://www.schellgames.com/art-of-game-design/','https://www.gdcvault.com/free','https://twinery.org']}
  }},
  es:{questions:[
    {t:'¿Qué motor te atrae más?',o:['Unity — enorme comunidad, C#, juegos móviles e indie','Unreal Engine — gráficos increíbles, Blueprints, nivel AAA','Godot — gratis, liviano, perfecto para indie y 2D','Me interesa más diseñar mecánicas y niveles que escribir código'],s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
    {t:'¿Qué podrías hacer durante horas?',o:['Afinar la física, la IA de enemigos y sistemas de partículas en Unity','Sacar el máximo gráfico con Lumen y Nanite en Unreal','Hacer pixel-art, gameplay y niveles solo en una semana','Equilibrar mecánicas, escribir un GDD y testear el feel del juego'],s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
    {t:'¿Qué proyecto suena más emocionante?',o:['Un juego móvil o PC con multijugador online en Unity','Un shooter con gráficos fotorrealistas al nivel de Fortnite','Mi propio juego indie en Steam — hecho completamente por mí','Diseñar una mecánica de juego desde cero: progresión, balance, narrativa'],s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
    {t:'¿Qué te inspira más?',o:['Enorme comunidad y Asset Store — soluciones para casi todo','Calidad cinematográfica: cinemáticas, iluminación y shaders como en película','Libertad total: sin tarifas de licencia, ligero, control total','El momento en que los jugadores encuentran una forma inesperada de superar tu nivel'],s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
    {t:'¿Qué te molesta más?',o:['Cuando un juego va lento por mala optimización','Cuando el motor limita los gráficos','Cuando se necesita un equipo grande para algo simple','Cuando un juego es técnicamente brillante pero aburrido'],s:[{unity:2},{unreal:2},{indie:2},{designer:2}]},
    {t:'En 3 años quieres...',o:['Trabajar en un estudio Unity y lanzar éxitos para móvil o PC','Unirte a un estudio AAA y hacer juegos como Cyberpunk','Lanzar mi propio juego indie en Steam y ganar dinero con él','Ser game designer en un top estudio y definir qué hace grande a un juego'],s:[{unity:3},{unreal:3},{indie:3},{designer:3}]}
  ],roles:{
    unity:{emoji:'🟦',name:'Desarrollador Unity',desc:'Crea juegos en Unity con C# — desde móvil hasta PC y VR.',detail:'Unity es el motor más usado en el mundo. Pokémon GO, Hollow Knight, Among Us — todos hechos con él. Escribes C#, trabajas con física, animaciones, IA y multijugador.',start:['Unity Learn — learn.unity.com','Brackeys en YouTube — youtube.com/@Brackeys','C# básico — docs.microsoft.com/dotnet/csharp'],startUrls:['https://learn.unity.com','https://www.youtube.com/@Brackeys','https://docs.microsoft.com/dotnet/csharp/tour-of-csharp']},
    unreal:{emoji:'🔵',name:'Desarrollador Unreal Engine',desc:'Crea juegos con gráficos fotorrealistas en el motor AAA más potente.',detail:'Unreal Engine es la elección de los estudios AAA. Fortnite, Hogwarts Legacy — todo Unreal. Puedes empezar con Blueprints y pasar gradualmente a C++.',start:['Unreal Online Learning — dev.epicgames.com/courses','Blueprint Scripting — docs.unrealengine.com','GameDev.tv curso Unreal — gamedev.tv'],startUrls:['https://dev.epicgames.com/community/learning','https://docs.unrealengine.com/5.0/programming-and-scripting/blueprints-visual-scripting/','https://www.gamedev.tv']},
    indie:{emoji:'🕹️',name:'Desarrollador Indie',desc:'Crea juegos solo o en equipo pequeño — de la idea hasta Steam.',detail:'Un desarrollador indie tiene libertad total y responsabilidad total. Godot es excelente: gratuito, ligero, con GDScript similar a Python. Stardew Valley, Undertale — proyectos indie que ganaron millones.',start:['Godot Engine — godotengine.org','itch.io — publica tus primeros juegos gratis — itch.io','GameMaker — gamemaker.io (genial para 2D)'],startUrls:['https://godotengine.org','https://itch.io','https://gamemaker.io']},
    designer:{emoji:'🎲',name:'Game Designer',desc:'Inventa qué hace divertido a un juego: mecánicas, progresión, balance y narrativa.',detail:'Un game designer lleva todo un mundo en la cabeza. Escribes el GDD, inventas mecánicas, equilibras la economía del juego. No necesitas saber programar — entender la psicología del jugador es más importante.',start:['"The Art of Game Design" de Jesse Schell','GDC Vault (charlas gratis) — gdcvault.com/free','Twine — juegos de texto sin código — twinery.org'],startUrls:['https://www.schellgames.com/art-of-game-design/','https://www.gdcvault.com/free','https://twinery.org']}
  }},
  pt:{questions:[
    {t:'Qual motor te atrai mais?',o:['Unity — enorme comunidade, C#, jogos mobile e indie','Unreal Engine — gráficos incríveis, Blueprints, nível AAA','Godot — gratuito, leve, perfeito para indie e 2D','Me interessa mais projetar mecânicas e níveis do que escrever código'],s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
    {t:'O que você poderia fazer por horas?',o:['Afinar a física, IA de inimigos e sistemas de partículas no Unity','Extrair o máximo gráfico com Lumen e Nanite no Unreal','Fazer pixel-art, gameplay e níveis sozinho em uma semana','Equilibrar mecânicas, escrever um GDD e testar o feel do jogo'],s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
    {t:'Qual projeto parece mais emocionante?',o:['Um jogo mobile ou PC com multiplayer online no Unity','Um shooter com gráficos fotorrealistas no nível de Fortnite','Meu próprio jogo indie na Steam — feito completamente por mim','Projetar uma mecânica de jogo do zero: progressão, balance, narrativa'],s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
    {t:'O que mais te inspira?',o:['Enorme comunidade e Asset Store — soluções para quase tudo','Qualidade cinematográfica: cutscenes, iluminação e shaders como no cinema','Liberdade total: sem taxas de licença, leve, controle total','O momento em que jogadores encontram uma forma inesperada de completar seu nível'],s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
    {t:'O que mais te irrita?',o:['Quando um jogo trava por otimização ruim','Quando o motor limita os gráficos','Quando precisa de uma equipe grande para algo simples','Quando um jogo é tecnicamente ótimo mas chato'],s:[{unity:2},{unreal:2},{indie:2},{designer:2}]},
    {t:'Em 3 anos você quer...',o:['Trabalhar num estúdio Unity e lançar hits para mobile ou PC','Entrar num estúdio AAA e fazer jogos como Cyberpunk','Lançar meu próprio jogo indie na Steam e ganhar dinheiro com ele','Ser game designer num top estúdio e definir o que torna um jogo incrível'],s:[{unity:3},{unreal:3},{indie:3},{designer:3}]}
  ],roles:{
    unity:{emoji:'🟦',name:'Desenvolvedor Unity',desc:'Cria jogos no Unity com C# — do mobile ao PC e VR.',detail:'Unity é o motor mais usado no mundo. Pokémon GO, Hollow Knight, Among Us — todos feitos com ele. Você escreve C#, trabalha com física, animações, IA e multijogador.',start:['Unity Learn — learn.unity.com','Brackeys no YouTube — youtube.com/@Brackeys','C# básico — docs.microsoft.com/dotnet/csharp'],startUrls:['https://learn.unity.com','https://www.youtube.com/@Brackeys','https://docs.microsoft.com/dotnet/csharp/tour-of-csharp']},
    unreal:{emoji:'🔵',name:'Desenvolvedor Unreal Engine',desc:'Cria jogos com gráficos fotorrealistas no motor AAA mais poderoso.',detail:'Unreal Engine é a escolha dos estúdios AAA. Fortnite, Hogwarts Legacy — tudo Unreal. Você pode começar com Blueprints e ir para C++ gradualmente.',start:['Unreal Online Learning — dev.epicgames.com/courses','Blueprint Scripting — docs.unrealengine.com','GameDev.tv curso Unreal — gamedev.tv'],startUrls:['https://dev.epicgames.com/community/learning','https://docs.unrealengine.com/5.0/programming-and-scripting/blueprints-visual-scripting/','https://www.gamedev.tv']},
    indie:{emoji:'🕹️',name:'Desenvolvedor Indie',desc:'Cria jogos solo ou em equipe pequena — da ideia até a Steam.',detail:'Um desenvolvedor indie tem liberdade total e responsabilidade total. Godot é excelente: gratuito, leve, com GDScript parecido com Python. Stardew Valley, Undertale — projetos indie que ganharam milhões.',start:['Godot Engine — godotengine.org','itch.io — publica seus primeiros jogos de graça — itch.io','GameMaker — gamemaker.io (ótimo para 2D)'],startUrls:['https://godotengine.org','https://itch.io','https://gamemaker.io']},
    designer:{emoji:'🎲',name:'Game Designer',desc:'Inventa o que torna um jogo divertido: mecânicas, progressão, balance e narrativa.',detail:'Um game designer carrega um mundo inteiro na cabeça. Você escreve o GDD, inventa mecânicas, equilibra a economia do jogo. Não precisa saber programar — entender a psicologia do jogador é mais importante.',start:['"The Art of Game Design" de Jesse Schell','GDC Vault (talks gratuitas) — gdcvault.com/free','Twine — jogos de texto sem código — twinery.org'],startUrls:['https://www.schellgames.com/art-of-game-design/','https://www.gdcvault.com/free','https://twinery.org']}
  }},
  ar:{questions:[
    {t:'أي محرك يجذبك أكثر؟',o:['Unity — مجتمع ضخم، C#، ألعاب الجوال والمستقلة','Unreal Engine — رسوميات مذهلة، Blueprints، مستوى AAA','Godot — مجاني، خفيف، مثالي للألعاب المستقلة وثنائية الأبعاد','أنا أكثر اهتماماً بتصميم الميكانيكيات والمستويات من كتابة الكود'],s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
    {t:'ما الذي يمكنك فعله لساعات؟',o:['ضبط الفيزياء وذكاء الأعداء وأنظمة الجسيمات في Unity','استخراج أقصى جودة بصرية مع Lumen وNanite في Unreal','إنشاء بكسل-آرت وطريقة اللعب والمستويات بمفردك في أسبوع','موازنة الميكانيكيات وكتابة GDD واختبار الإحساس باللعبة'],s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
    {t:'أي مشروع يبدو الأكثر إثارة؟',o:['لعبة جوال أو PC مع لعب جماعي أونلاين في Unity','شوتر بجرافيكس فوتوريالستي على مستوى Fortnite','لعبتي المستقلة على Steam — مصنوعة بالكامل بيدي','تصميم ميكانيكية لعبة من الصفر: تطور، توازن، قصة'],s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
    {t:'ما الذي يلهمك أكثر؟',o:['مجتمع ضخم وAsset Store — حلول لأي مشكلة موجودة','الجودة السينمائية: مقاطع الكاميرا والإضاءة والشيدرات كالأفلام','حرية كاملة: لا رسوم ترخيص، حجم صغير، تحكم كامل','اللحظة التي يجد فيها اللاعبون طريقة غير متوقعة لاجتياز مستواك'],s:[{unity:3},{unreal:3},{indie:3},{designer:3}]},
    {t:'ما الذي يزعجك أكثر؟',o:['عندما تتأخر اللعبة بسبب تحسين سيء','عندما يحد المحرك من الجرافيكس','عندما تحتاج فريقاً كبيراً لشيء بسيط','عندما تكون اللعبة ممتازة تقنياً لكن مملة'],s:[{unity:2},{unreal:2},{indie:2},{designer:2}]},
    {t:'بعد 3 سنوات تريد...',o:['العمل في استوديو Unity وإنتاج ألعاب ناجحة للجوال أو PC','الانضمام لاستوديو AAA وصنع ألعاب مثل Cyberpunk','إصدار لعبتي المستقلة على Steam والكسب منها','أن تصبح مصمم ألعاب في أفضل الاستوديوهات وتحدد ما يجعل اللعبة رائعة'],s:[{unity:3},{unreal:3},{indie:3},{designer:3}]}
  ],roles:{
    unity:{emoji:'🟦',name:'مطور Unity',desc:'يبني الألعاب في Unity بـ C# — من الجوال إلى PC وVR.',detail:'Unity هو المحرك الأكثر استخداماً في العالم. Pokémon GO، Hollow Knight، Among Us — كلها صُنعت به. تكتب بـ C# وتعمل مع الفيزياء والرسوم المتحركة والذكاء الاصطناعي.',start:['Unity Learn — learn.unity.com','Brackeys على YouTube — youtube.com/@Brackeys','أساسيات C# — docs.microsoft.com/dotnet/csharp'],startUrls:['https://learn.unity.com','https://www.youtube.com/@Brackeys','https://docs.microsoft.com/dotnet/csharp/tour-of-csharp']},
    unreal:{emoji:'🔵',name:'مطور Unreal Engine',desc:'يبني الألعاب بجرافيكس فوتوريالستي على أقوى محرك AAA.',detail:'Unreal Engine هو خيار استوديوهات AAA. Fortnite، Hogwarts Legacy — كلها Unreal. يمكنك البدء بـ Blueprints والانتقال تدريجياً إلى C++.',start:['Unreal Online Learning — dev.epicgames.com/courses','Blueprint Scripting — docs.unrealengine.com','GameDev.tv كورس Unreal — gamedev.tv'],startUrls:['https://dev.epicgames.com/community/learning','https://docs.unrealengine.com/5.0/programming-and-scripting/blueprints-visual-scripting/','https://www.gamedev.tv']},
    indie:{emoji:'🕹️',name:'مطور مستقل',desc:'يصنع الألعاب بمفرده أو في فريق صغير — من الفكرة إلى Steam.',detail:'المطور المستقل لديه حرية كاملة ومسؤولية كاملة. Godot خيار ممتاز: مجاني وخفيف مع GDScript مشابه لـ Python. Stardew Valley، Undertale — مشاريع مستقلة جنت الملايين.',start:['Godot Engine — godotengine.org','itch.io — انشر أولى ألعابك مجاناً — itch.io','GameMaker — gamemaker.io (رائع للألعاب ثنائية الأبعاد)'],startUrls:['https://godotengine.org','https://itch.io','https://gamemaker.io']},
    designer:{emoji:'🎲',name:'مصمم الألعاب',desc:'يبتكر ما يجعل اللعبة ممتعة: الميكانيكيات والتطور والتوازن والحكاية.',detail:'مصمم الألعاب يحمل عالماً كاملاً في رأسه. تكتب GDD وتبتكر الميكانيكيات وتوازن اقتصاد اللعبة. لا تحتاج للبرمجة — فهم سيكولوجية اللاعب أهم.',start:['"The Art of Game Design" لجيسي شيل','GDC Vault (محاضرات مجانية) — gdcvault.com/free','Twine — ألعاب نصية بدون كود — twinery.org'],startUrls:['https://www.schellgames.com/art-of-game-design/','https://www.gdcvault.com/free','https://twinery.org']}
  }}
};

L2.data = {
  ru: {
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
  },
  en: {
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
  },
  he: {
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
  },
  de:{questions:[
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
  }},
  fr:{questions:[
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
  }},
  es:{questions:[
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
  }},
  pt:{questions:[
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
  }},
  ar:{questions:[
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
  }}
};

// ─── SCORES (language-independent) ───────────────────────────────────────────
const QS = [
  {opts:[{s:{gamedev:3,frontend:1}},{s:{design:3,frontend:1}},{s:{security:2,devops:2}},{s:{backend:3,data:2,security:1}},{s:{pm:3,qa:1}},{s:{backend:2,devops:2,data:1}},{s:{frontend:3,design:2}},{s:{data:2,pm:1}}]},
  {opts:[{s:{backend:2,data:3,security:1}},{s:{devops:2,security:2,data:1}},{s:{backend:2,frontend:2,devops:1}},{s:{design:3,frontend:1}},{s:{pm:2,qa:1}},{s:{data:1,security:1}},{s:{pm:2,frontend:1}},{s:{pm:2}}]},
  {opts:[{s:{qa:3,security:2}},{s:{design:3,frontend:2,gamedev:1}},{s:{backend:3,security:2,data:2}},{s:{pm:3,qa:1}},{s:{devops:3,security:2,backend:1}},{s:{data:3,pm:1}},{s:{backend:2,frontend:2,pm:1}},{s:{frontend:2,gamedev:2,design:1}}]},
  {opts:[{s:{design:3,frontend:2}},{s:{devops:3,backend:2}},{s:{data:3,backend:1}},{s:{gamedev:3,frontend:1}},{s:{security:3}},{s:{qa:2,design:2,pm:1}},{s:{pm:2,backend:1}}]},
  {opts:[{s:{frontend:3,backend:2}},{s:{gamedev:3,frontend:1}},{s:{data:3,backend:1}},{s:{security:3,backend:1}},{s:{design:3,frontend:1}},{s:{pm:3,qa:1}},{s:{devops:3,backend:2}},{s:{qa:3,pm:1}}]},
  {opts:[{s:{design:3,frontend:1}},{s:{backend:3,devops:1}},{s:{frontend:3,design:1}},{s:{security:3}},{s:{devops:3,security:1}},{s:{data:3,backend:1}},{s:{qa:3,pm:1}},{s:{pm:3,qa:1}}]},
  {opts:[{s:{frontend:1,design:1}},{s:{backend:2,data:2,security:1}},{s:{backend:2,security:2,gamedev:1}},{s:{gamedev:1,frontend:1}},{s:{backend:2,devops:2,data:1}},{s:{pm:1,design:1}},{s:{}}]},
  {opts:[{s:{design:1,pm:1,frontend:1}},{s:{backend:1,devops:1}},{s:{data:1,security:1,backend:1}},{s:{frontend:1,design:1,gamedev:1}},{s:{qa:1,pm:1}},{s:{}}]},
  {opts:[{s:{backend:2,data:2,security:2,devops:1}},{s:{design:3,gamedev:2,frontend:1}},{s:{qa:3,devops:2}},{s:{pm:3,data:1}},{s:{security:3,backend:1,gamedev:1}},{s:{frontend:2,design:2,gamedev:2}},{s:{backend:1,data:1,devops:1,pm:1}}]},
  {opts:[{s:{frontend:3,design:1}},{s:{backend:3,devops:1}},{s:{gamedev:3,frontend:1}},{s:{design:3,frontend:1}},{s:{backend:2,data:2,security:1}},{s:{security:3,backend:1}},{s:{data:3,backend:1}},{s:{}}]}
];

const PROF_BASE = {
  frontend:{
    emoji:'🖥️', salary:'$50k–$140k/yr',
    tools:[
      {n:'HTML + CSS',   u:'https://developer.mozilla.org/docs/Web'},
      {n:'JavaScript',   u:'https://javascript.info'},
      {n:'React / Vue',  u:'https://react.dev'},
      {n:'Git',          u:'https://git-scm.com'},
      {n:'Figma',        u:'https://figma.com'}
    ],
    startUrls:['https://freecodecamp.org','https://javascript.info','https://react.dev']
  },
  backend:{
    emoji:'⚙️', salary:'$60k–$180k/yr',
    tools:[
      {n:'Python / Node.js', u:'https://python.org'},
      {n:'SQL / PostgreSQL', u:'https://postgresql.org'},
      {n:'REST API',         u:'https://restfulapi.net'},
      {n:'Docker',           u:'https://docker.com'},
      {n:'Git',              u:'https://git-scm.com'}
    ],
    startUrls:['https://python.org','https://sqlbolt.com','https://core.telegram.org/bots']
  },
  design:{
    emoji:'🎨', salary:'$45k–$130k/yr',
    tools:[
      {n:'Figma',     u:'https://figma.com'},
      {n:'Adobe XD',  u:'https://adobe.com/products/xd.html'},
      {n:'Miro',      u:'https://miro.com'},
      {n:'Notion',    u:'https://notion.so'},
      {n:'Principle', u:'https://principleformac.com'}
    ],
    startUrls:['https://figma.com','https://coursera.org/learn/ux-design','https://figma.com']
  },
  gamedev:{
    emoji:'🎮', salary:'$50k–$140k/yr',
    tools:[
      {n:'Unity + C#',      u:'https://unity.com'},
      {n:'Unreal Engine',   u:'https://unrealengine.com'},
      {n:'Godot',           u:'https://godotengine.org'},
      {n:'Blender',         u:'https://blender.org'},
      {n:'Git',             u:'https://git-scm.com'}
    ],
    startUrls:['https://learn.unity.com','https://roblox.com/create','https://godotengine.org']
  },
  data:{
    emoji:'📊', salary:'$70k–$200k/yr',
    tools:[
      {n:'Python',              u:'https://python.org'},
      {n:'Pandas / NumPy',      u:'https://pandas.pydata.org'},
      {n:'TensorFlow / PyTorch',u:'https://tensorflow.org'},
      {n:'SQL',                 u:'https://postgresql.org'},
      {n:'Jupyter',             u:'https://jupyter.org'}
    ],
    startUrls:['https://kaggle.com/learn','https://kaggle.com','https://fast.ai']
  },
  security:{
    emoji:'🔐', salary:'$70k–$180k/yr',
    tools:[
      {n:'Linux / Kali', u:'https://kali.org'},
      {n:'Wireshark',    u:'https://wireshark.org'},
      {n:'Metasploit',   u:'https://metasploit.com'},
      {n:'Python',       u:'https://python.org'},
      {n:'Burp Suite',   u:'https://portswigger.net/burp'}
    ],
    startUrls:['https://tryhackme.com','https://picoctf.org','https://linuxjourney.com']
  },
  devops:{
    emoji:'🚀', salary:'$70k–$180k/yr',
    tools:[
      {n:'Linux',      u:'https://linuxjourney.com'},
      {n:'Docker',     u:'https://docker.com'},
      {n:'Kubernetes', u:'https://kubernetes.io'},
      {n:'AWS',        u:'https://aws.amazon.com/free'},
      {n:'Terraform',  u:'https://terraform.io'}
    ],
    startUrls:['https://linuxjourney.com','https://docs.docker.com/get-started','https://aws.amazon.com/free']
  },
  qa:{
    emoji:'🔍', salary:'$40k–$110k/yr',
    tools:[
      {n:'Jira',               u:'https://atlassian.com/software/jira'},
      {n:'Postman',            u:'https://postman.com'},
      {n:'Playwright',         u:'https://playwright.dev'},
      {n:'Python',             u:'https://python.org'},
      {n:'SQL',                u:'https://postgresql.org'}
    ],
    startUrls:['https://guru99.com/software-testing.html','https://postman.com','https://playwright.dev']
  },
  pm:{
    emoji:'📋', salary:'$60k–$180k/yr',
    tools:[
      {n:'Jira',      u:'https://atlassian.com/software/jira'},
      {n:'Notion',    u:'https://notion.so'},
      {n:'Figma',     u:'https://figma.com'},
      {n:'Amplitude', u:'https://amplitude.com'},
      {n:'Miro',      u:'https://miro.com'}
    ],
    startUrls:['https://www.svpg.com/inspired-how-to-create-products-customers-love/','https://coursera.org/professional-certificates/google-project-management','https://notion.so']
  }
};
