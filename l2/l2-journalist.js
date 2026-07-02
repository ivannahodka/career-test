'use strict';
/* ── L2: Журналист / Медиаспециалист ────────────────────────────────────────
   4 roles: news_reporter 📰 | invest_journ 🔍 | video_journ 🎥 | data_journ 📊
──────────────────────────────────────────────────────────────────────────── */
L2.journalist.ru = {
  questions: [
    {
      t: 'Что тебя привлекает в журналистике больше всего?',
      o: [
        'Быть первым — узнавать новости, писать быстро и держать читателя в курсе событий',
        'Копать глубоко — месяцами распутывать сложную историю и раскрывать то, что скрывают',
        'Снимать — рассказывать истории через видео, монтировать репортажи и документальные фильмы',
        'Анализировать — работать с данными, строить инфографику и находить паттерны в больших массивах'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: 'Какой формат контента тебе ближе?',
      o: [
        'Короткие новостные заметки, репортажи с мест событий, интервью и обзоры дня',
        'Большие расследования, лонгриды, подкасты о коррупции, экологии или правах человека',
        'Видеорепортажи, YouTube-шоу, документальные проекты и видеолонгриды',
        'Интерактивные материалы с картами, графиками и базами данных для читателя'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: 'Какой инструмент тебе важнее всего?',
      o: [
        'Telegram, Twitter, Google Docs, диктофон — скорость и мобильность',
        'ОСИНТ-инструменты (Maltego, OCCRP), архивы, юридические базы и зашифрованные мессенджеры',
        'Adobe Premiere Pro, DaVinci Resolve, камера, стабилизатор и звуковое оборудование',
        'Python / R, Flourish, Datawrapper, QGIS, OpenRefine — анализ и визуализация данных'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: 'Что для тебя главный результат работы?',
      o: [
        'Мой материал прочли 100 000 человек и он стал главной темой дня в социальных сетях',
        'После моего расследования возбудили уголовное дело или чиновник ушёл в отставку',
        'Мой документальный фильм показали на фестивале и он изменил мнение людей о проблеме',
        'Моя инфографика сделала сложные данные понятными для миллионов — и политика изменилась'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: 'Что тебя больше всего привлекает в профессии?',
      o: [
        'Быть свидетелем истории в режиме реального времени — я там, где всё происходит',
        'Говорить правду власти — делать то, что боятся другие, и защищать публичный интерес',
        'Искусство визуального рассказа — показывать мир глазами камеры',
        'Превращать сырые данные в открытия, которые невидимы без анализа'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: 'Как выглядит твой путь через 10 лет?',
      o: [
        'Редактор отдела или главный редактор крупного медиа с собственной командой',
        'Журналист-расследователь с международными наградами или руководитель следственного бюро',
        'Автор документальных фильмов на Netflix или ведущий собственного видеошоу с миллионной аудиторией',
        'Руководитель отдела данных в крупном медиа или основатель data-driven медиапроекта'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    }
  ],
  roles: {
    news_reporter: {
      emoji: '📰',
      name: 'Новостной журналист / Репортёр',
      desc: 'Освещаешь события в режиме реального времени — первым рассказываешь важные истории читателям',
      detail: 'Ты на передовой информации. Мониторишь источники, быстро пишешь, умеешь взять комментарий у чиновника или очевидца за 10 минут. Работаешь в редакции или как фриланс-корреспондент — скорость и точность твои главные качества.',
      start: ['Начни вести Telegram-канал или блог прямо сейчас — практика важнее курсов', 'Изучи основы журналистики: верификация, работа с источниками, право на информацию', 'Пройди курсы на Knight Center или Poynter — они бесплатны и очень практичны', 'Пиши в студенческие и региональные медиа — строй портфолио из реальных публикаций'],
      startUrls: ['https://www.poynter.org', 'https://knightcenter.utexas.edu', 'https://telegram.org', 'https://tilda.cc']
    },
    invest_journ: {
      emoji: '🔍',
      name: 'Журналист-расследователь',
      desc: 'Раскрываешь коррупцию, злоупотребления и скрытые факты — работаешь долго, глубоко и смело',
      detail: 'Ты копаешь туда, куда другие не заходят. Изучаешь финансовые документы, ищешь скрытые связи через ОСИНТ, работаешь с анонимными источниками и защищаешь их. Расследование может занять месяцы — зато результат меняет реальность.',
      start: ['Изучи ОСИНТ: Bellingcat, OCCRP, инструменты поиска по реестрам и соцсетям', 'Пройди курс "Journalism Skills for Engaged Citizens" на Coursera', 'Изучи работу с утечками данных: SecureDrop, Signal, защита источников', 'Разберись с корпоративными реестрами, судебными базами и открытыми данными властей'],
      startUrls: ['https://www.bellingcat.com/resources/how-tos/', 'https://occrp.org', 'https://freedom.press/training/', 'https://www.icij.org/investigate/']
    },
    video_journ: {
      emoji: '🎥',
      name: 'Видеожурналист / Документалист',
      desc: 'Рассказываешь истории через видео — от новостных репортажей до документальных фильмов',
      detail: 'Ты и оператор, и режиссёр, и монтажёр. Снимаешь в полевых условиях, работаешь со светом и звуком, строишь нарратив через монтаж. Современный видеожурналист умеет выпустить материал за несколько часов или провести два года над документальным проектом.',
      start: ['Начни с телефона: сними 5 историй о людях вокруг тебя — история важнее техники', 'Освой Adobe Premiere Pro или DaVinci Resolve (бесплатный) для монтажа', 'Изучи основы съёмки: экспозиция, фокус, звук в полевых условиях', 'Посмотри курсы Стэнфорда по видеожурналистике на YouTube'],
      startUrls: ['https://www.blackmagicdesign.com/products/davinciresolve', 'https://www.adobe.com/products/premiere.html', 'https://www.poynter.org/tag/video/', 'https://knightcenter.utexas.edu/courses/']
    },
    data_journ: {
      emoji: '📊',
      name: 'Дата-журналист',
      desc: 'Находишь истории в данных — анализируешь массивы, строишь визуализации и делаешь невидимое видимым',
      detail: 'Ты на пересечении журналистики и анализа данных. Работаешь с открытыми реестрами, утечками, государственной статистикой и социальными сетями. Умеешь рассказать историю через интерактивный дашборд так же убедительно, как через текст.',
      start: ['Изучи основы Python или R для работы с данными — pandas, matplotlib', 'Освой Datawrapper и Flourish для быстрой красивой визуализации без кода', 'Пройди курс "Investigative Journalism and Data" на edX или Knight Center', 'Поучаствуй в хакатоне по данным или дата-жур конкурсах ICIJ'],
      startUrls: ['https://www.datawrapper.de', 'https://flourish.studio', 'https://www.icij.org/investigate/', 'https://knightcenter.utexas.edu/courses/']
    }
  },
  ui: {
    tag: 'Журналист / Медиаспециалист',
    title: 'Какой журналист ты?',
    subtitle: '6 вопросов — найди свою нишу в медиа',
    prog: 'Вопрос %d из 6',
    hint: 'Выбери один вариант',
    back: '← Назад', next: 'Далее →', finish: 'Показать результат',
    winBadge: 'Твоя ниша в журналистике',
    resTag: 'Результат', resSub: 'Твой путь в медиа',
    lblStart: 'С чего начать:', l2back: '← Назад к результатам'
  }
};


L2.journalist.en = {
  questions: [
    {
      t: 'What kind of journalism appeals to you most?',
      o: [
        'Breaking news — being first on the story, filing quickly, keeping the public informed in real time',
        'Investigative journalism — spending months on one story, uncovering what the powerful want hidden',
        'Video and multimedia — telling stories through footage, sound, and images rather than text',
        'Data journalism — finding hidden patterns in datasets and turning numbers into compelling stories'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: 'Which tool or skill would you most like to develop?',
      o: [
        'Speed writing, shorthand, and live reporting — getting the story out fast and accurately',
        'OSINT techniques, document analysis, and source protection — the toolkit of investigative reporting',
        'Camera operation, audio recording, and video editing — telling the full story in sound and vision',
        'Python or R, Datawrapper, Flourish — coding and visualisation tools for data-driven stories'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: 'What kind of story would make you most proud?',
      o: [
        'I was live at a major event and my report was the most-read story of the day',
        'My investigation led to a parliamentary inquiry and real accountability for the people responsible',
        'My documentary was screened at a festival and changed how viewers understood an issue',
        'My data analysis revealed a pattern in public spending that no one else had spotted'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: 'How do you prefer to work?',
      o: [
        'Fast and reactive — monitoring feeds, responding to events, filing three stories before noon',
        'Deep and slow — months of documents, interviews, and verification before anything is published',
        'In the field — camera on shoulder, talking to people, capturing moments as they happen',
        'At a desk with data — cleaning spreadsheets, running queries, building visualisations'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: 'Which principle is most important to you?',
      o: [
        'Speed and accuracy — the public has a right to know, and they need to know now',
        'Accountability — power must answer for what it does, and I will find the evidence',
        'Empathy — every story is about people, and I will show them as fully human',
        'Evidence — I will only publish what I can prove with data, documents, and verified sources'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: 'Where do you see yourself in 10 years?',
      o: [
        'Editor of a news desk, political correspondent, or foreign correspondent for a major outlet',
        'Investigative editor at a major newsroom or co-founder of an independent investigative publication',
        'Commissioning editor for documentaries or head of video at a digital media company',
        'Data editor at a national newspaper or founder of a data journalism consultancy'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    }
  ],
  roles: {
    news_reporter: {
      emoji: '📰',
      name: 'News Reporter',
      desc: 'You cover breaking news and current events — informing the public quickly and accurately',
      detail: 'You live by the news cycle. You monitor social media and emergency services, make calls to get quotes, write fast, and file clean copy to deadline. You might be covering politics, crime, business, or general news. You interview people who have never spoken to a journalist before, and you earn their trust in ten minutes. The inverted pyramid is instinct, and a good lede is an art form.',
      start: [
        'Study journalism at university or complete an NCTJ (or equivalent national) qualification',
        'Get experience at your student newspaper, local radio station, or community news site immediately',
        'Learn shorthand — it remains one of the most valued practical skills in newsroom hiring',
        'Read "Flat Earth News" by Nick Davies — a forensic look at how journalism actually works'
      ]
    },
    invest_journ: {
      emoji: '🔍',
      name: 'Investigative Journalist',
      desc: 'You spend weeks or months exposing wrongdoing — using documents, data, and sources to hold power accountable',
      detail: 'Investigative journalism is the most demanding and impactful form of the craft. You use OSINT tools to verify facts, analyse leaked documents, cultivate confidential sources, and navigate legal risks around publication. You work with Bellingcat methods, collaborate with OCCRP networks, and use SecureDrop to receive tips safely. Your stories take months — and can change laws.',
      start: [
        'Master OSINT fundamentals: reverse image search, satellite imagery analysis, company registry searches',
        'Study the Bellingcat methodology — their online guides are the best free resource for open-source investigation',
        'Learn how to protect sources: Signal, SecureDrop, operational security basics',
        'Read "Flat Earth News" and the Organized Crime and Corruption Reporting Project (OCCRP) case studies'
      ]
    },
    video_journ: {
      emoji: '🎥',
      name: 'Video Journalist / Documentary Maker',
      desc: 'You tell stories through film — shooting, directing, and editing video journalism and documentaries',
      detail: 'You are a one-person film crew or part of a small team. You pitch story ideas, gain access to subjects, shoot footage, record interviews, and edit a final cut that tells a complete story. You work for broadcasters, digital platforms, or independently. Your tools are a camera, a microphone, Adobe Premiere or Final Cut Pro — and the ability to make a stranger feel comfortable enough to open up on camera.',
      start: [
        'Learn to shoot and edit: Adobe Premiere Pro or DaVinci Resolve are industry standards',
        'Study the principles of documentary storytelling — watch "Won\'t You Be My Neighbor?" and analyse its structure',
        'Build a portfolio of short video pieces — even three well-crafted stories will open doors',
        'Follow VICE, The Guardian\'s video team, and Field of Vision — the leaders in digital documentary journalism'
      ]
    },
    data_journ: {
      emoji: '📊',
      name: 'Data Journalist',
      desc: 'You find stories in data — analysing datasets and creating visualisations that make complex issues clear',
      detail: 'You combine journalism instincts with data skills. You file Freedom of Information requests, scrape public databases, clean messy spreadsheets, and run analyses that reveal patterns invisible to the naked eye. You use Datawrapper or Flourish to build interactive charts, and you write stories that translate numbers into human meaning. The New York Times, the Guardian, and the FT are the benchmark.',
      start: [
        'Learn spreadsheet analysis first (Excel or Google Sheets), then move to SQL and Python pandas',
        'Master Datawrapper — it is free, powerful, and used by the world\'s best newsrooms',
        'Study the data journalism work of the Guardian, FiveThirtyEight, and ProPublica',
        'Read "The Functional Art" by Alberto Cairo — the essential guide to data visualisation for journalists'
      ]
    }
  },
  ui: { l2back: '← Back to education', title: 'Journalism: which specialisation?' }
};



L2.journalist.de = {
  questions: [
    {
      t: 'Welche Art von Journalismus interessiert dich am meisten?',
      o: [
        'Aktuelle Nachrichten – als Erster über ein Ereignis berichten, schnell schreiben und die Öffentlichkeit in Echtzeit informieren',
        'Investigativer Journalismus – monatelang an einer Geschichte arbeiten und aufdecken, was Mächtige verbergen wollen',
        'Video und Multimedia – Geschichten durch Bilder, Ton und Film erzählen statt durch Text',
        'Datenjournalismus – versteckte Muster in Datensätzen finden und Zahlen in fesselnde Geschichten verwandeln'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: 'Welche Fähigkeit oder welches Werkzeug möchtest du am liebsten entwickeln?',
      o: [
        'Schnelles Schreiben, Stenografie und Live-Berichterstattung – die Geschichte schnell und präzise veröffentlichen',
        'OSINT-Techniken, Dokumentenanalyse und Quellenschutz – das Handwerkszeug des investigativen Reporters',
        'Kameraführung, Tonaufnahme und Videobearbeitung – die ganze Geschichte in Bild und Ton erzählen',
        'Python oder R, Datawrapper, Flourish – Programmier- und Visualisierungstools für datengestützte Geschichten'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: 'Auf welche Geschichte wärst du am stolzesten?',
      o: [
        'Ich war live bei einem wichtigen Ereignis dabei und mein Bericht war die meistgelesene Geschichte des Tages',
        'Meine Recherche führte zu einem parlamentarischen Untersuchungsausschuss und echter Verantwortlichkeit',
        'Mein Dokumentarfilm wurde auf einem Festival gezeigt und veränderte das Verständnis der Zuschauer für ein Thema',
        'Meine Datenanalyse deckte ein Muster in öffentlichen Ausgaben auf, das sonst niemand bemerkt hatte'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: 'Wie arbeitest du am liebsten?',
      o: [
        'Schnell und reaktiv – Feeds überwachen, auf Ereignisse reagieren, vor dem Mittag drei Berichte einreichen',
        'Gründlich und langsam – monatelang Dokumente sichten, Interviews führen und prüfen, bevor etwas veröffentlicht wird',
        'Im Feld – Kamera auf der Schulter, mit Menschen sprechen, Momente festhalten, wie sie passieren',
        'Am Schreibtisch mit Daten – Tabellen bereinigen, Abfragen ausführen, Visualisierungen erstellen'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: 'Welches Prinzip ist dir am wichtigsten?',
      o: [
        'Schnelligkeit und Genauigkeit – die Öffentlichkeit hat ein Recht zu wissen, und sie muss es jetzt erfahren',
        'Verantwortlichkeit – Macht muss Rechenschaft ablegen, und ich werde die Beweise finden',
        'Empathie – jede Geschichte handelt von Menschen, und ich werde sie in ihrer vollen Menschlichkeit zeigen',
        'Beweise – ich veröffentliche nur, was ich mit Daten, Dokumenten und verifizierten Quellen belegen kann'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: 'Wo siehst du dich in 10 Jahren?',
      o: [
        'Redakteur eines Nachrichtenressorts, politischer Korrespondent oder Auslandskorrespondent für ein großes Medium',
        'Investigativredakteur bei einem großen Nachrichtenhaus oder Mitgründer einer unabhängigen Investigativpublikation',
        'Auftragsredakteur für Dokumentarfilme oder Leiter des Videoressorts bei einem digitalen Medienunternehmen',
        'Datenchef bei einer überregionalen Zeitung oder Gründer einer Datenjournalismus-Beratung'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    }
  ],
  roles: {
    news_reporter: {
      emoji: '📰',
      name: 'Nachrichtenreporter',
      desc: 'Du berichtest über aktuelle Ereignisse – schnell, präzise und immer nah am Geschehen',
      detail: 'Du lebst im Rhythmus des Nachrichtenzyklus. Du überwachst soziale Medien und Behörden, holst Kommentare ein, schreibst unter Zeitdruck und lieferst saubere Texte ab. Du kannst über Politik, Kriminalität, Wirtschaft oder allgemeine Nachrichten berichten. Du interviewst Menschen, die noch nie mit einem Journalisten gesprochen haben, und gewinnst ihr Vertrauen in zehn Minuten.',
      start: [
        'Studiere Journalismus an einer Hochschule oder schließe eine anerkannte journalistische Ausbildung ab',
        'Mach sofort Erfahrungen bei deiner Schülerzeitung, einem lokalen Radiosender oder einer Community-Nachrichtenseite',
        'Lerne Stenografie – sie gehört zu den gefragtesten praktischen Fähigkeiten in Redaktionen',
        'Lies „Flat Earth News" von Nick Davies – eine genaue Analyse, wie Journalismus wirklich funktioniert'
      ]
    },
    invest_journ: {
      emoji: '🔍',
      name: 'Investigativjournalist',
      desc: 'Du deckst Missstände auf – mit Dokumenten, Daten und Quellen, um Macht zur Rechenschaft zu ziehen',
      detail: 'Investigativer Journalismus ist die anspruchsvollste und wirkungsvollste Form des Handwerks. Du nutzt OSINT-Tools zur Faktenprüfung, analysierst geleakte Dokumente, pflegst vertrauliche Quellen und navigierst rechtliche Risiken rund um die Veröffentlichung. Du arbeitest mit Bellingcat-Methoden, kooperierst mit OCCRP-Netzwerken und nutzt SecureDrop, um Hinweise sicher zu empfangen.',
      start: [
        'Beherrsche OSINT-Grundlagen: Rückwärtsbildersuche, Satellitenbildanalyse, Unternehmensregisterpflege',
        'Studiere die Bellingcat-Methodik – ihre Online-Leitfäden sind die beste kostenlose Ressource für Open-Source-Recherche',
        'Lerne, wie du Quellen schützt: Signal, SecureDrop, Grundlagen der operativen Sicherheit',
        'Lies „Flat Earth News" und die Fallstudien des Organised Crime and Corruption Reporting Project (OCCRP)'
      ]
    },
    video_journ: {
      emoji: '🎥',
      name: 'Videojournalist / Dokumentarfilmer',
      desc: 'Du erzählst Geschichten durch Film – du drehst, regie führst und schneidest Videojournalismus und Dokumentarfilme',
      detail: 'Du bist ein Ein-Personen-Filmteam oder Teil eines kleinen Teams. Du pitchst Story-Ideen, bekommst Zugang zu Protagonisten, drehst Material, nimmst Interviews auf und schneidest einen finalen Cut, der eine vollständige Geschichte erzählt. Deine Werkzeuge sind Kamera, Mikrofon, Adobe Premiere oder Final Cut Pro – und die Fähigkeit, einem Fremden das Gefühl zu geben, sich auf der Kamera zu öffnen.',
      start: [
        'Lerne drehen und schneiden: Adobe Premiere Pro oder DaVinci Resolve sind Branchenstandards',
        'Studiere die Prinzipien des dokumentarischen Geschichtenerzählens – analysiere preisgekrönte Dokumentarfilme in ihrer Struktur',
        'Baue ein Portfolio mit kurzen Videobeiträgen auf – bereits drei gut gestaltete Geschichten öffnen Türen',
        'Folge VICE, dem Videoteam des Guardian und Field of Vision – die führenden Köpfe im digitalen Dokumentarjournalismus'
      ]
    },
    data_journ: {
      emoji: '📊',
      name: 'Datenjournalist',
      desc: 'Du findest Geschichten in Daten – du analysierst Datensätze und erstellst Visualisierungen, die komplexe Themen verständlich machen',
      detail: 'Du verbindest journalistischen Instinkt mit Datenkompetenz. Du stellst Informationsfreiheitsanfragen, scrapst öffentliche Datenbanken, bereinigst unordentliche Tabellen und führst Analysen durch, die Muster sichtbar machen, die mit bloßem Auge unsichtbar wären. Du nutzt Datawrapper oder Flourish für interaktive Diagramme und schreibst Geschichten, die Zahlen in menschliche Bedeutung übersetzen.',
      start: [
        'Beginne mit Tabellenanalyse (Excel oder Google Sheets), dann wechsle zu SQL und Python pandas',
        'Beherrsche Datawrapper – es ist kostenlos, leistungsstark und wird von den besten Redaktionen weltweit genutzt',
        'Studiere die Datenjournalismus-Arbeit des Guardian, FiveThirtyEight und ProPublica',
        'Lies „The Functional Art" von Alberto Cairo – das unverzichtbare Handbuch zur Datenvisualisierung für Journalisten'
      ]
    }
  },
  ui: { l2back: '← Zurück zu Medien & PR', title: 'Journalismus: welche Spezialisierung?' }
};

L2.journalist.fr = {
  questions: [
    {
      t: 'Quel type de journalisme t\'attire le plus ?',
      o: [
        'L\'information en continu – être le premier sur un sujet, publier rapidement et informer le public en temps réel',
        'Le journalisme d\'investigation – passer des mois sur une histoire pour révéler ce que les puissants veulent cacher',
        'La vidéo et le multimédia – raconter des histoires par l\'image, le son et la vidéo plutôt que par le texte',
        'Le journalisme de données – trouver des tendances cachées dans des jeux de données et transformer des chiffres en récits captivants'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: 'Quelle compétence ou quel outil aimerais-tu le plus développer ?',
      o: [
        'L\'écriture rapide, la sténographie et le reportage en direct – publier l\'info vite et avec précision',
        'Les techniques OSINT, l\'analyse de documents et la protection des sources – la boîte à outils du reporter d\'investigation',
        'La prise de vue, l\'enregistrement audio et le montage vidéo – raconter l\'histoire complète en son et en image',
        'Python ou R, Datawrapper, Flourish – outils de programmation et de visualisation pour les récits fondés sur les données'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: 'De quelle histoire serais-tu le plus fier ?',
      o: [
        'J\'étais en direct lors d\'un événement majeur et mon reportage a été l\'article le plus lu de la journée',
        'Mon enquête a conduit à une commission d\'enquête parlementaire et à de vraies poursuites contre les responsables',
        'Mon documentaire a été projeté dans un festival et a changé la perception des spectateurs sur un sujet',
        'Mon analyse de données a révélé un schéma dans les dépenses publiques que personne d\'autre n\'avait repéré'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: 'Comment préfères-tu travailler ?',
      o: [
        'Vite et en réaction – surveiller les fils d\'actualité, répondre aux événements, publier trois articles avant midi',
        'En profondeur et lentement – des mois de documents, d\'interviews et de vérifications avant toute publication',
        'Sur le terrain – caméra à l\'épaule, à la rencontre des gens, en saisissant les moments au fil de l\'action',
        'Au bureau avec des données – nettoyer des tableurs, lancer des requêtes, construire des visualisations'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: 'Quel principe est le plus important pour toi ?',
      o: [
        'Rapidité et précision – le public a le droit de savoir, et il doit le savoir maintenant',
        'Responsabilité – le pouvoir doit rendre des comptes pour ses actes, et je trouverai les preuves',
        'Empathie – chaque histoire parle de personnes, et je les montrerai dans toute leur humanité',
        'Preuves – je ne publierai que ce que je peux démontrer avec des données, des documents et des sources vérifiées'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: 'Où te vois-tu dans 10 ans ?',
      o: [
        'Rédacteur en chef d\'un service d\'actualités, correspondant politique ou correspondant à l\'étranger pour un grand média',
        'Rédacteur en chef investigation dans une grande rédaction ou cofondateur d\'une publication d\'investigation indépendante',
        'Éditeur de documentaires ou directeur vidéo dans une société de médias numériques',
        'Responsable des données dans un quotidien national ou fondateur d\'un cabinet de conseil en journalisme de données'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    }
  ],
  roles: {
    news_reporter: {
      emoji: '📰',
      name: 'Reporter d\'actualité',
      desc: 'Tu couvres les événements en temps réel – tu informes le public rapidement et avec précision',
      detail: 'Tu vis au rythme du cycle de l\'information. Tu surveilles les réseaux sociaux et les services d\'urgence, tu obtiens des citations, tu écris vite et tu remets des articles propres dans les délais. Tu peux couvrir la politique, la criminalité, l\'économie ou l\'actualité générale. Tu interviewes des personnes qui n\'ont jamais parlé à un journaliste, et tu gagnes leur confiance en dix minutes.',
      start: [
        'Étudie le journalisme à l\'université ou décroche un diplôme journalistique reconnu nationalement',
        'Acquiers de l\'expérience immédiatement dans ton journal étudiant, une radio locale ou un site d\'information communautaire',
        'Apprends la sténographie – c\'est l\'une des compétences pratiques les plus valorisées dans les rédactions',
        'Lis "Flat Earth News" de Nick Davies – une analyse chirurgicale du fonctionnement réel du journalisme'
      ]
    },
    invest_journ: {
      emoji: '🔍',
      name: 'Journaliste d\'investigation',
      desc: 'Tu passes des semaines ou des mois à exposer des malversations – avec des documents, des données et des sources pour demander des comptes au pouvoir',
      detail: 'Le journalisme d\'investigation est la forme la plus exigeante et la plus impactante du métier. Tu utilises des outils OSINT pour vérifier les faits, tu analyses des documents fuités, tu cultives des sources confidentielles et tu navigues dans les risques juridiques liés à la publication. Tu travailles avec les méthodes Bellingcat, collabores avec les réseaux OCCRP et utilises SecureDrop pour recevoir des informations en toute sécurité.',
      start: [
        'Maîtrise les fondamentaux de l\'OSINT : recherche d\'image inversée, analyse d\'images satellites, recherches dans les registres d\'entreprises',
        'Étudie la méthodologie Bellingcat – leurs guides en ligne sont la meilleure ressource gratuite pour l\'investigation en sources ouvertes',
        'Apprends à protéger tes sources : Signal, SecureDrop, bases de la sécurité opérationnelle',
        'Lis "Flat Earth News" et les études de cas de l\'Organised Crime and Corruption Reporting Project (OCCRP)'
      ]
    },
    video_journ: {
      emoji: '🎥',
      name: 'Journaliste vidéo / Réalisateur de documentaires',
      desc: 'Tu racontes des histoires par le film – tu tournes, réalises et montes du journalisme vidéo et des documentaires',
      detail: 'Tu es une équipe de tournage à toi seul ou membre d\'une petite équipe. Tu proposes des idées de sujets, accèdes à des protagonistes, filmes des séquences, enregistres des interviews et montes un film final qui raconte une histoire complète. Tu travailles pour des diffuseurs, des plateformes numériques ou de façon indépendante. Tes outils : une caméra, un micro, Adobe Premiere ou Final Cut Pro – et la capacité de mettre un inconnu à l\'aise devant l\'objectif.',
      start: [
        'Apprends à filmer et à monter : Adobe Premiere Pro ou DaVinci Resolve sont les standards du secteur',
        'Étudie les principes du récit documentaire – regarde des documentaires primés et analyse leur structure',
        'Construis un portfolio de courts formats vidéo – même trois pièces bien réalisées ouvrent des portes',
        'Suis VICE, l\'équipe vidéo du Guardian et Field of Vision – les références du documentaire numérique'
      ]
    },
    data_journ: {
      emoji: '📊',
      name: 'Journaliste de données',
      desc: 'Tu trouves des histoires dans les données – tu analyses des jeux de données et crées des visualisations qui clarifient des sujets complexes',
      detail: 'Tu combines l\'instinct journalistique avec les compétences en données. Tu formules des demandes d\'accès à l\'information, tu scrapes des bases de données publiques, tu nettoies des tableurs désordonnés et tu réalises des analyses qui révèlent des tendances invisibles à l\'œil nu. Tu utilises Datawrapper ou Flourish pour construire des graphiques interactifs, et tu écris des articles qui traduisent les chiffres en sens humain.',
      start: [
        'Commence par l\'analyse de tableurs (Excel ou Google Sheets), puis passe à SQL et Python pandas',
        'Maîtrise Datawrapper – il est gratuit, puissant et utilisé par les meilleures rédactions du monde',
        'Étudie le travail de journalisme de données du Guardian, FiveThirtyEight et ProPublica',
        'Lis "The Functional Art" d\'Alberto Cairo – le guide essentiel de la visualisation de données pour journalistes'
      ]
    }
  },
  ui: { l2back: '← Retour aux médias', title: 'Journalisme : quelle spécialisation ?' }
};



L2.journalist.es = {
  questions: [
    {
      t: '¿Qué tipo de periodismo te atrae más?',
      o: [
        'Noticias de última hora — ser el primero en cubrir la historia, publicar rápido e informar al público en tiempo real',
        'Periodismo de investigación — pasar meses en una historia, sacando a la luz lo que los poderosos quieren ocultar',
        'Vídeo y multimedia — contar historias a través de imágenes, sonido y vídeo en lugar de texto',
        'Periodismo de datos — encontrar patrones ocultos en conjuntos de datos y convertir números en historias atractivas'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: '¿Qué herramienta o habilidad te gustaría desarrollar más?',
      o: [
        'Escritura rápida, taquigrafía y retransmisión en directo — publicar la noticia rápido y con precisión',
        'Técnicas OSINT, análisis de documentos y protección de fuentes — el kit del reportero de investigación',
        'Manejo de cámara, grabación de audio y edición de vídeo — contar la historia completa en imagen y sonido',
        'Python o R, Datawrapper, Flourish — herramientas de programación y visualización para historias basadas en datos'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: '¿De qué historia te sentirías más orgulloso/a?',
      o: [
        'Estaba en directo en un gran evento y mi reportaje fue el más leído del día',
        'Mi investigación derivó en una comisión parlamentaria y en verdadera responsabilidad para los implicados',
        'Mi documental se proyectó en un festival y cambió la percepción del público sobre un tema',
        'Mi análisis de datos reveló un patrón en el gasto público que nadie más había detectado'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: '¿Cómo prefieres trabajar?',
      o: [
        'Rápido y reactivo — monitorizando feeds, respondiendo a eventos, publicando tres noticias antes del mediodía',
        'Profundo y lento — meses de documentos, entrevistas y verificaciones antes de publicar nada',
        'En el campo — cámara al hombro, hablando con la gente, capturando momentos tal como ocurren',
        'En la mesa con datos — limpiando hojas de cálculo, ejecutando consultas, construyendo visualizaciones'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: '¿Qué principio es más importante para ti?',
      o: [
        'Velocidad y precisión — el público tiene derecho a saber, y necesita saberlo ahora',
        'Responsabilidad — el poder debe rendir cuentas por lo que hace, y yo encontraré las pruebas',
        'Empatía — cada historia es sobre personas, y las mostraré en toda su humanidad',
        'Evidencia — solo publicaré lo que pueda demostrar con datos, documentos y fuentes verificadas'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: '¿Dónde te ves dentro de 10 años?',
      o: [
        'Editor/a de sección de noticias, corresponsal político o corresponsal en el extranjero en un medio importante',
        'Editor/a de investigación en una gran redacción o cofundador/a de una publicación investigadora independiente',
        'Editor/a de encargos de documentales o responsable de vídeo en una empresa de medios digitales',
        'Editor/a de datos en un periódico nacional o fundador/a de una consultora de periodismo de datos'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    }
  ],
  roles: {
    news_reporter: {
      emoji: '📰',
      name: 'Reportero/a de noticias',
      desc: 'Cubres noticias de última hora y eventos de actualidad — informando al público rápido y con precisión',
      detail: 'Vives al ritmo del ciclo informativo. Monitorizas redes sociales y servicios de emergencia, consigues declaraciones, escribes rápido y entregas textos limpios antes del cierre. Puedes cubrir política, sucesos, economía o noticias generales. Entrevistas a personas que nunca han hablado con un periodista y te ganas su confianza en diez minutos.',
      start: [
        'Estudia periodismo en la universidad o consigue una titulación periodística reconocida a nivel nacional',
        'Gana experiencia en el periódico de tu facultad, una radio local o un medio comunitario cuanto antes',
        'Aprende taquigrafía — sigue siendo una de las habilidades prácticas más valoradas en las redacciones',
        'Lee "Flat Earth News" de Nick Davies — un análisis forense de cómo funciona realmente el periodismo'
      ]
    },
    invest_journ: {
      emoji: '🔍',
      name: 'Periodista de investigación',
      desc: 'Pasas semanas o meses destapando irregularidades — usando documentos, datos y fuentes para pedir cuentas al poder',
      detail: 'El periodismo de investigación es la forma más exigente e impactante del oficio. Usas herramientas OSINT para verificar hechos, analizas documentos filtrados, cultivas fuentes confidenciales y navegas los riesgos legales de la publicación. Trabajas con métodos de Bellingcat, colaboras con redes OCCRP y usas SecureDrop para recibir informaciones de forma segura. Tus historias llevan meses — y pueden cambiar leyes.',
      start: [
        'Domina los fundamentos OSINT: búsqueda inversa de imágenes, análisis de imágenes satelitales, búsquedas en registros mercantiles',
        'Estudia la metodología Bellingcat — sus guías en línea son el mejor recurso gratuito para la investigación en fuentes abiertas',
        'Aprende a proteger fuentes: Signal, SecureDrop, principios básicos de seguridad operacional',
        'Lee "Flat Earth News" y los estudios de caso del Organized Crime and Corruption Reporting Project (OCCRP)'
      ]
    },
    video_journ: {
      emoji: '🎥',
      name: 'Periodista de vídeo / Documentalista',
      desc: 'Cuentas historias a través del cine — rodando, dirigiendo y montando periodismo en vídeo y documentales',
      detail: 'Eres un equipo de rodaje unipersonal o parte de un equipo pequeño. Propones ideas de historias, consigues acceso a los protagonistas, filmas metraje, grabas entrevistas y montas un corte final que cuenta una historia completa. Trabajas para cadenas de televisión, plataformas digitales o de forma independiente. Tus herramientas son una cámara, un micrófono, Adobe Premiere o Final Cut Pro — y la capacidad de hacer que un desconocido se sienta cómodo abriéndose ante la cámara.',
      start: [
        'Aprende a rodar y montar: Adobe Premiere Pro o DaVinci Resolve son estándares del sector',
        'Estudia los principios del relato documental — analiza la estructura de documentales premiados',
        'Construye un portfolio de piezas de vídeo cortas — incluso tres historias bien elaboradas abren puertas',
        'Sigue a VICE, al equipo de vídeo de The Guardian y Field of Vision — los referentes del periodismo documental digital'
      ]
    },
    data_journ: {
      emoji: '📊',
      name: 'Periodista de datos',
      desc: 'Encuentras historias en los datos — analizando conjuntos de datos y creando visualizaciones que aclaran temas complejos',
      detail: 'Combinas el instinto periodístico con las habilidades en datos. Presentas solicitudes de acceso a la información, extraes bases de datos públicas, limpias hojas de cálculo desordenadas y ejecutas análisis que revelan patrones invisibles a simple vista. Usas Datawrapper o Flourish para crear gráficos interactivos y escribes historias que traducen los números en significado humano.',
      start: [
        'Aprende primero análisis con hojas de cálculo (Excel o Google Sheets), luego pasa a SQL y Python pandas',
        'Domina Datawrapper — es gratuito, potente y utilizado por las mejores redacciones del mundo',
        'Estudia el trabajo de periodismo de datos de The Guardian, FiveThirtyEight y ProPublica',
        'Lee "The Functional Art" de Alberto Cairo — la guía esencial de visualización de datos para periodistas'
      ]
    }
  },
  ui: { l2back: '← Volver a medios', title: 'Periodismo: ¿qué especialización?' }
};

L2.journalist.pt = {
  questions: [
    {
      t: 'Que tipo de jornalismo mais te atrai?',
      o: [
        'Notícias de última hora — ser o primeiro na pauta, publicar rápido e manter o público informado em tempo real',
        'Jornalismo investigativo — passar meses em uma única história, revelando o que os poderosos querem esconder',
        'Vídeo e multimídia — contar histórias por meio de imagens, som e vídeo em vez de texto',
        'Jornalismo de dados — encontrar padrões ocultos em conjuntos de dados e transformar números em histórias envolventes'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: 'Qual ferramenta ou habilidade você mais gostaria de desenvolver?',
      o: [
        'Escrita rápida, taquigrafia e transmissão ao vivo — publicar a notícia rápido e com precisão',
        'Técnicas de OSINT, análise de documentos e proteção de fontes — o kit do repórter investigativo',
        'Operação de câmera, gravação de áudio e edição de vídeo — contar a história completa em som e imagem',
        'Python ou R, Datawrapper, Flourish — ferramentas de programação e visualização para histórias baseadas em dados'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: 'De qual história você ficaria mais orgulhoso/a?',
      o: [
        'Estive ao vivo em um grande evento e minha reportagem foi a mais lida do dia',
        'Minha investigação resultou em uma comissão parlamentar e em responsabilização real para os envolvidos',
        'Meu documentário foi exibido em um festival e mudou a forma como os espectadores entenderam um tema',
        'Minha análise de dados revelou um padrão nos gastos públicos que ninguém mais havia percebido'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: 'Como você prefere trabalhar?',
      o: [
        'Rápido e reativo — monitorando feeds, respondendo a eventos, publicando três matérias antes do meio-dia',
        'Com profundidade e calma — meses de documentos, entrevistas e verificações antes de publicar qualquer coisa',
        'Em campo — câmera no ombro, conversando com pessoas, capturando momentos conforme acontecem',
        'Na mesa com dados — limpando planilhas, rodando consultas, construindo visualizações'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: 'Qual princípio é mais importante para você?',
      o: [
        'Velocidade e precisão — o público tem o direito de saber, e precisa saber agora',
        'Responsabilização — o poder deve prestar contas pelo que faz, e eu vou encontrar as evidências',
        'Empatia — toda história é sobre pessoas, e vou mostrá-las em toda a sua humanidade',
        'Evidência — só publicarei o que consigo provar com dados, documentos e fontes verificadas'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    },
    {
      t: 'Onde você se vê daqui a 10 anos?',
      o: [
        'Editor/a de uma editoria de notícias, correspondente político ou correspondente no exterior para um grande veículo',
        'Editor/a investigativo em uma grande redação ou cofundador/a de uma publicação investigativa independente',
        'Editor/a de encomendas de documentários ou chefe de vídeo em uma empresa de mídia digital',
        'Editor/a de dados em um jornal nacional ou fundador/a de uma consultoria de jornalismo de dados'
      ],
      s: [{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]
    }
  ],
  roles: {
    news_reporter: {
      emoji: '📰',
      name: 'Repórter de notícias',
      desc: 'Você cobre notícias de última hora e eventos de atualidade — informando o público com rapidez e precisão',
      detail: 'Você vive pelo ciclo de notícias. Monitora redes sociais e serviços de emergência, obtém declarações, escreve rápido e entrega textos limpos antes do fechamento. Pode cobrir política, polícia, economia ou notícias gerais. Entrevista pessoas que nunca falaram com um jornalista e conquista a confiança delas em dez minutos.',
      start: [
        'Curse jornalismo na universidade ou obtenha uma qualificação jornalística reconhecida nacionalmente',
        'Ganhe experiência no jornal do seu curso, em uma rádio local ou em um site de notícias comunitárias imediatamente',
        'Aprenda taquigrafia — continua sendo uma das habilidades práticas mais valorizadas nas redações',
        'Leia "Flat Earth News" de Nick Davies — uma análise forense de como o jornalismo realmente funciona'
      ]
    },
    invest_journ: {
      emoji: '🔍',
      name: 'Jornalista investigativo/a',
      desc: 'Você passa semanas ou meses expondo irregularidades — usando documentos, dados e fontes para cobrar responsabilidades do poder',
      detail: 'O jornalismo investigativo é a forma mais exigente e impactante do ofício. Você usa ferramentas OSINT para verificar fatos, analisa documentos vazados, cultiva fontes confidenciais e navega pelos riscos legais da publicação. Trabalha com métodos Bellingcat, colabora com redes OCCRP e usa SecureDrop para receber denúncias com segurança. Suas reportagens levam meses — e podem mudar leis.',
      start: [
        'Domine os fundamentos do OSINT: busca reversa de imagens, análise de imagens de satélite, buscas em registros empresariais',
        'Estude a metodologia Bellingcat — seus guias online são o melhor recurso gratuito para investigação em fontes abertas',
        'Aprenda a proteger fontes: Signal, SecureDrop, fundamentos de segurança operacional',
        'Leia "Flat Earth News" e os estudos de caso do Organized Crime and Corruption Reporting Project (OCCRP)'
      ]
    },
    video_journ: {
      emoji: '🎥',
      name: 'Jornalista de vídeo / Documentarista',
      desc: 'Você conta histórias pelo cinema — filmando, dirigindo e editando jornalismo em vídeo e documentários',
      detail: 'Você é uma equipe de filmagem de uma pessoa só ou parte de uma equipe pequena. Propõe ideias de pautas, consegue acesso aos personagens, grava material, registra entrevistas e edita um corte final que conta uma história completa. Trabalha para emissoras, plataformas digitais ou de forma independente. Suas ferramentas são câmera, microfone, Adobe Premiere ou Final Cut Pro — e a capacidade de fazer um estranho se sentir confortável abrindo o coração diante da câmera.',
      start: [
        'Aprenda a filmar e editar: Adobe Premiere Pro ou DaVinci Resolve são padrões da indústria',
        'Estude os princípios da narrativa documentária — analise a estrutura de documentários premiados',
        'Monte um portfólio com peças de vídeo curtas — mesmo três histórias bem elaboradas abrem portas',
        'Siga VICE, a equipe de vídeo do The Guardian e Field of Vision — os líderes no documentário digital'
      ]
    },
    data_journ: {
      emoji: '📊',
      name: 'Jornalista de dados',
      desc: 'Você encontra histórias nos dados — analisando conjuntos de dados e criando visualizações que tornam temas complexos compreensíveis',
      detail: 'Você combina instinto jornalístico com habilidades em dados. Faz pedidos de acesso à informação, raspa bancos de dados públicos, limpa planilhas bagunçadas e realiza análises que revelam padrões invisíveis a olho nu. Usa Datawrapper ou Flourish para construir gráficos interativos e escreve histórias que traduzem números em significado humano.',
      start: [
        'Aprenda análise de planilhas primeiro (Excel ou Google Sheets), depois avance para SQL e Python pandas',
        'Domine o Datawrapper — é gratuito, poderoso e utilizado pelas melhores redações do mundo',
        'Estude o trabalho de jornalismo de dados do The Guardian, FiveThirtyEight e ProPublica',
        'Leia "The Functional Art" de Alberto Cairo — o guia essencial de visualização de dados para jornalistas'
      ]
    }
  },
  ui: { l2back: '← Voltar à mídia', title: 'Jornalismo: qual especialização?' }
};

L2.journalist.ar = {
  questions: [
    { t:"أيّ نوع من الصحافة يستهويك أكثر؟", o:["تغطية الأخبار العاجلة والتحقيقات الميدانية اليومية","الصحافة الاستقصائية التي تكشف الفساد والظلم","الصحافة المرئية وإنتاج الفيديو والتحقيقات البصرية","الصحافة البيانية وتحليل البيانات وتصوير المعلومات"], s:[{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}] },
    { t:"أيّ أداة تودّ إتقانها؟", o:["التحقيق الميداني والمقابلات وأساليب البحث السريع","أساليب التحقيق المعمّق وقوانين حرية المعلومات","كاميرا الفيديو والمونتاج وصناعة المحتوى البصري","Python وSQL وأدوات تصوير البيانات"], s:[{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}] },
    { t:"أيّ نتيجة تُشعرك بالرضا أكثر؟", o:["سبق صحفي ينشر أولاً ويُحدث أثراً واسعاً","تحقيق يُسقط مسؤولاً فاسداً أو يُغيّر سياسة ما","فيديو يُحقق ملايين المشاهدات ويُثير نقاشاً عاماً","تحليل بيانات يكشف نمطاً خفياً يُغيّر طريقة فهم القراء للقضية"], s:[{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}] },
    { t:"أين تُفضّل العمل؟", o:["في غرفة الأخبار — بيئة سريعة ومتسارعة","في مكتب التحقيقات — عمل عميق وطويل الأمد","في الميدان — تصوير وإنتاج محتوى بصري","بشكل مستقل — تحليل بيانات وإنتاج تقارير رقمية"], s:[{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}] },
    { t:"أيّ مهمة أقرب إليك؟", o:["تغطية حدث عاجل ونشر تقرير في وقت قياسي","متابعة خيط تحقيق لأشهر حتى الكشف عن الحقيقة","إنتاج فيديو وثائقي قصير حول قضية مجتمعية","تحليل بيانات انتخابية وتصوير النتائج بيانياً"], s:[{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}] },
    { t:"أين ترى نفسك بعد عشر سنوات؟", o:["محرر أخبار في قناة إخبارية كبرى","صحفي استقصائي حائز على جوائز دولية","مدير إنتاج في استوديو محتوى رقمي","رئيس قسم بيانات في مؤسسة إعلامية كبرى"], s:[{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}] },
  ],
  roles: {
    news_reporter:{ emoji:"📰", name:"مراسل إخباري", desc:"تغطّي الأحداث العاجلة وتُقدّم الأخبار أولاً بدقة وسرعة", detail:"تعمل في غرفة الأخبار.", start:["تعلّم تقنيات التحقيق الميداني السريع","أتقن كتابة الأخبار والتحقيقات القصيرة","تدرّب في محطات إذاعية أو تلفزيونية أو صحف يومية","ابنِ شبكة مصادر موثوقة"] },
    invest_journ:{ emoji:"🔍", name:"صحفي استقصائي", desc:"تُجري تحقيقات معمّقة تكشف الفساد والمظالم", detail:"تعمل على قضايا معقدة لأشهر.", start:["تعلّم أساليب التحقيق الاستقصائي","أتقن قوانين حرية المعلومات وطلب الوثائق","تدرّب على التحقيق في الشركات والوثائق المالية","ابنِ سمعة في الصحافة الدقيقة"] },
    video_journ:{ emoji:"🎥", name:"صحفي فيديو", desc:"تُنتج محتوى صحفياً مرئياً مؤثراً", detail:"تعمل خلف الكاميرا وخلف الشاشة.", start:["تعلّم التصوير والمونتاج وإنتاج الفيديو","أتقن برامج المونتاج: Premiere وFinal Cut","طوّر حسك الروائي البصري","ابنِ ملف أعمال من تقارير مرئية متنوعة"] },
    data_journ:{ emoji:"📊", name:"صحفي بيانات", desc:"تُحلّل البيانات وتُحوّلها إلى قصص صحفية مؤثرة", detail:"تجمع بين الصحافة والتقنية.", start:["تعلّم Python وSQL لتحليل البيانات","أتقن أدوات التصوير البياني: D3 وTableau","طوّر مهاراتك في الصحافة التقليدية أيضاً","شارك في مشاريع صحافة بيانية مفتوحة"] },
  },
  ui:{ l2back:"← العودة إلى الإعلام", title:"الصحافة: ما التخصص؟" }
};

L2.journalist.he = {
  questions: [
    { t:"מה סוג העיתונאות שהכי מעניין אותך?", o:["סיקור חדשות שוטפות ותחקירים שטחיים יומיומיים","עיתונאות חקרנית שחושפת שחיתות ועוולות","עיתונאות ויזואלית והפקת וידאו","עיתונאות נתונים וניתוח מידע"], s:[{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}] },
    { t:"איזה כלי הכי תרצה לשלוט בו?", o:["חקירה שטחית, ראיונות וחיפוש מהיר","חקירה מעמיקה וחוקי חופש מידע","מצלמה, עריכה והפקת תוכן ויזואלי","Python, SQL וכלי ויזואליזציה"], s:[{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}] },
    { t:"איזה תוצאה הכי ממלאת אותך סיפוק?", o:["בלעדי שמגיע ראשון ויוצר אפקט רחב","תחקיר שמפיל פוליטיקאי מושחת","וידאו שמגיע למיליוני צפיות","ניתוח נתונים שחושף דפוס נסתר"], s:[{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}] },
    { t:"איפה אתה מעדיף לעבוד?", o:["בחדר חדשות — סביבה מהירה","במחלקת תחקירים — עבודה עמוקה","בשטח — צילום והפקה","עצמאי — ניתוח נתונים ודוחות דיגיטליים"], s:[{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}] },
    { t:"איזה משימה הכי קרובה ללב שלך?", o:["סיקור אירוע חם ופרסום דוח בזמן שיא","מעקב אחר חוט תחקיר לחודשים","הפקת סרטון דוקומנטרי קצר","ניתוח נתוני בחירות ויזואליזציה"], s:[{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}] },
    { t:"איפה אתה רואה את עצמך עוד 10 שנים?", o:["עורך חדשות בערוץ גדול","עיתונאי חקרני זוכה פרסים","מנהל הפקה באולפן דיגיטלי","ראש מחלקת נתונים בתקשורת"], s:[{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}] },
  ],
  roles: {
    news_reporter:{ emoji:"📰", name:"כתב חדשות", desc:"אתה מסקר אירועים שוטפים ומגיש חדשות ראשון", detail:"אתה עובד בחדר חדשות.", start:["למד טכניקות חקירה שטחית מהירה","שלוט בכתיבת חדשות","התמחה בתחנות רדיו, טלוויזיה או עיתונים","בנה רשת מקורות"] },
    invest_journ:{ emoji:"🔍", name:"עיתונאי חקרני", desc:"אתה מבצע תחקירים מעמיקים שחושפים שחיתות", detail:"אתה עובד על תיקים מורכבים.", start:["למד שיטות חקירה חקרנית","שלוט בחוקי חופש מידע","התמחה בחקירת חברות ומסמכים","בנה מוניטין בעיתונאות מדויקת"] },
    video_journ:{ emoji:"🎥", name:"עיתונאי וידאו", desc:"אתה מפיק תוכן עיתונאי ויזואלי", detail:"אתה עובד מאחורי המצלמה.", start:["למד צילום, עריכה והפקת וידאו","שלוט ב-Premiere ו-Final Cut","פתח חוש נרטיבי ויזואלי","בנה תיק עבודות מדוחות ויזואליים"] },
    data_journ:{ emoji:"📊", name:"עיתונאי נתונים", desc:"אתה מנתח נתונים ומהפך אותם לסיפורים עיתונאיים", detail:"אתה משלב עיתונאות וטכנולוגיה.", start:["למד Python ו-SQL","שלוט ב-D3 ו-Tableau","פתח מיומנויות עיתונאות מסורתית","השתתף בפרויקטי עיתונאות נתונים"] },
  },
  ui:{ l2back:"← חזרה לתקשורת", title:"עיתונאות: איזה התמחות?" }
};

L2.journalist.zh = {
  questions: [
    {t:'新闻与传媒中什么最吸引你？', o:['新闻报道——深入现场，记录真实发生的一切','调查新闻——挖掘被隐藏的真相，推动社会改变','视频新闻——用镜头讲述故事','数据新闻——用数据揭示深层规律'], s:[{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]},
    {t:'你最想精通哪个方向？', o:['采访技巧、新闻写作和突发报道','文件挖掘、信源保护和深度调查','视频拍摄、剪辑和多媒体叙事','数据抓取、可视化和统计分析'], s:[{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]},
    {t:'什么成果最让你有成就感？', o:['你的报道第一时间还原了事件的真相','你的调查报道推动了一项制度的改革','你的视频报道引发了广泛的社会讨论','你的数据新闻让公众看清了政策背后的数字真相'], s:[{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]},
    {t:'你更喜欢哪种工作方式？', o:['奔赴现场、采访当事人、快速撰稿','长达数月的深度调查、审阅文件、核实信源','拍摄、剪辑、配音，用画面和声音讲故事','处理大型数据集，制作交互式可视化报道'], s:[{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]},
    {t:'你会选择哪个项目？', o:['报道一场重大自然灾害的应急救援','调查某地区食品安全问题的系统性漏洞','制作一部关于城市化进程中农民工生活的纪录片','用10年的PM2.5数据揭示城市空气质量的真实变化'], s:[{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]},
    {t:'10年后你在哪里？', o:['驻外记者或电视台首席记者','普利策奖得主或顶级媒体调查组负责人','纪录片导演或媒体机构视频总监','创立数据新闻机构或主流媒体数据新闻部主任'], s:[{news_reporter:3},{invest_journ:3},{video_journ:3},{data_journ:3}]}
  ],
  roles: {
    news_reporter: {emoji:'📰', name:'新闻记者', desc:'用笔和镜头记录正在发生的历史，让公众了解真相', detail:'你是信息的守门人。你在第一时间到达现场，采访目击者和当事人，快速、准确、公正地报道事件。你的工作是民主社会的基石。', start:['学习新闻写作基础——倒金字塔结构','掌握采访技巧——如何让受访者说出真正想说的话','了解新闻伦理——准确性、公正性、独立性','在学校媒体或地方媒体积累报道经验']},
    invest_journ: {emoji:'🔍', name:'调查记者', desc:'深挖被掩盖的真相，用报道推动社会问责', detail:'你做的是最有影响力也最有风险的新闻。你花几个月调查一个话题，审阅数千份文件，保护信源，最终用无可辩驳的证据揭示真相。', start:['学习信息公开申请——如何获取政府文件','了解数字调查技术——OSINT开源情报收集','掌握信源保护技术——Signal、Tor的安全使用','研究经典调查报道案例——水门事件、巴拿马文件']},
    video_journ: {emoji:'🎥', name:'视频记者', desc:'用摄像机记录真实，用视频叙事打动人心', detail:'你是一支独立的媒体单元。你既是记者，也是摄影师和剪辑师。你在现场用摄像机捕捉最真实的瞬间，并把这些画面剪辑成引人入胜的故事。', start:['学习摄像基础——曝光、构图、稳定性','掌握视频剪辑——Premiere Pro或Final Cut Pro','了解视频新闻叙事结构——如何组织一个有冲击力的报道','制作你的第一个完整的新闻视频作品']},
    data_journ: {emoji:'📊', name:'数据新闻记者', desc:'用数据分析和可视化揭示隐藏在数字背后的公众利益故事', detail:'你把新闻学和数据科学结合起来。你获取和清洗数据，进行统计分析，用交互式可视化让复杂数据变得易于理解，揭示单纯文字报道无法呈现的深层模式。', start:['学习Python pandas或R做数据分析','掌握数据可视化工具——D3.js、Flourish、Datawrapper','了解数据获取——爬虫基础、信息公开申请','研究全球数据新闻奖（Data Journalism Awards）获奖作品']}
  },
  ui: {l2back:'← 返回新闻', title:'新闻与传媒：选择你的专业方向'}
};
