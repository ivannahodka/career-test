'use strict';
/* ── L2: PR-специалист ───────────────────────────────────────────────────────
   4 roles: media_rel 📡 | corp_pr 🏛️ | crisis_pr 🚨 | personal_brand ⭐
──────────────────────────────────────────────────────────────────────────── */
L2.pr_spec.ru = {
  questions: [
    {
      t: 'Что тебе интереснее всего в PR?',
      o: [
        'Выстраивать отношения со СМИ — так чтобы журналисты сами звонили за комментарием',
        'Формировать репутацию большой корпорации через стратегические коммуникации',
        'Защищать репутацию в кризис — когда всё рушится, именно ты держишь ситуацию под контролем',
        'Строить личный бренд конкретного человека — политика, эксперта, предпринимателя'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: 'Какая задача тебе ближе?',
      o: [
        'Написать пресс-релиз, организовать пресс-конференцию и добиться публикации в топ-изданиях',
        'Разработать годовую коммуникационную стратегию и управлять командой PR-специалистов',
        'За 24 часа подготовить антикризисное заявление и координировать ответы во всех каналах',
        'Создать медиаобраз спикера: темы, стиль, соцсети, публичные выступления и интервью'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: 'Какой инструмент тебе важнее всего?',
      o: [
        'Meltwater / Медиалогия, база журналистов, Cision — мониторинг и работа с медиа',
        'Коммуникационный аудит, stakeholder mapping, внутренние коммуникационные платформы',
        'Антикризисный план, симуляции кризисов, скрипты для спикеров и тёмные сайты',
        'Instagram / LinkedIn, контент-план, Canva, аналитика охватов и работа с блогерами'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: 'Что для тебя главный результат работы?',
      o: [
        'Топ-издание опубликовало эксклюзив о компании — без рекламной пометки',
        'Индекс доверия к бренду вырос на 20% по итогам PR-кампании',
        'Компания пережила скандал без потери капитализации — кризис отработан чисто',
        'Клиент стал узнаваемым экспертом: выступления на форумах, колонки в Forbes'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: 'Что тебя вдохновляет в профессии?',
      o: [
        'Я строю мосты между бизнесом и обществом — через честный диалог',
        'Я влияю на то, как миллионы людей воспринимают компании и бренды',
        'Я работаю в условиях цейтнота и давления — и именно тогда чувствую себя живым',
        'Я помогаю умным людям стать видимыми и влиятельными — их голос важен'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: 'Как выглядит твой путь через 10 лет?',
      o: [
        'Директор по коммуникациям в крупном медиахолдинге или PR-агентстве',
        'Chief Communications Officer корпорации или советник по репутации на уровне совета директоров',
        'Ведущий кризисный консультант с собственной практикой и международными клиентами',
        'Агентство личного брендинга или медиашкола для лидеров мнений'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    }
  ],
  roles: {
    media_rel: {
      emoji: '📡',
      name: 'Специалист по медиарилейшнз',
      desc: 'Выстраиваешь отношения со СМИ — добиваешься публикаций, которые формируют нужный образ',
      detail: 'Ты знаешь журналистов по именам и понимаешь, какая история зайдёт каждому изданию. Пишешь пресс-релизы, организуешь пресс-туры и брифинги, готовишь спикеров к интервью. Главная метрика — заработанные медиа без рекламного бюджета.',
      start: ['Изучи структуру медиарынка: кто что освещает и для какой аудитории', 'Пройди курс по написанию пресс-релизов и медиапитчингу', 'Освой Meltwater или аналоги для мониторинга упоминаний', 'Начни нетворкинг с журналистами: комментируй их материалы, знакомься на мероприятиях'],
      startUrls: ['https://www.meltwater.com', 'https://www.prsa.org/learning', 'https://www.coursera.org/learn/public-relations', 'https://practicum.yandex.ru/pr-manager/']
    },
    corp_pr: {
      emoji: '🏛️',
      name: 'Корпоративный PR-менеджер',
      desc: 'Управляешь репутацией крупной организации — стратегические коммуникации внутри и снаружи',
      detail: 'Ты отвечаешь за то, как компанию воспринимают все заинтересованные стороны: СМИ, сотрудники, инвесторы, регуляторы и общество. Разрабатываешь коммуникационную стратегию, управляешь командой и координируешь все каналы.',
      start: ['Изучи стратегические коммуникации и управление репутацией', 'Освой stakeholder mapping и коммуникационный аудит', 'Пройди курс по корпоративным коммуникациям на Coursera или edX', 'Изучи GR (Government Relations) — работу с регуляторами и властью'],
      startUrls: ['https://www.prsa.org', 'https://www.cipr.co.uk', 'https://www.coursera.org/learn/corporate-communications', 'https://skillbox.ru/course/pr-manager/']
    },
    crisis_pr: {
      emoji: '🚨',
      name: 'Кризисный PR-консультант',
      desc: 'Управляешь репутацией в момент скандала — быстро, точно и под давлением',
      detail: 'Ты специалист по худшим сценариям. Когда случается скандал, утечка или катастрофа — именно ты разрабатываешь ответную стратегию, пишешь заявления, координируешь спикеров и минимизируешь репутационный ущерб. Работаешь в условиях жёсткого цейтнота.',
      start: ['Изучи классические кризисные кейсы: Johnson & Johnson, United Airlines, Volkswagen', 'Освой методологию кризисных коммуникаций: модель SCCT, ситуационный менеджмент', 'Пройди симуляции кризисов — они учат думать быстро и системно', 'Изучи тёмный PR и дезинформацию — чтобы защищать клиентов от них'],
      startUrls: ['https://instituteforpr.org/crisis-management/', 'https://www.prsa.org/learning/crisis', 'https://www.coursera.org/learn/corporate-communications', 'https://www.edx.org/learn/public-relations']
    },
    personal_brand: {
      emoji: '⭐',
      name: 'Специалист по личному бренду',
      desc: 'Создаёшь публичный образ людей — экспертов, лидеров, предпринимателей — делаешь их видимыми и влиятельными',
      detail: 'Ты помогаешь умным людям стать узнаваемыми. Разрабатываешь позиционирование, создаёшь контент-стратегию, готовишь к публичным выступлениям и интервью. Работаешь с политиками, топ-менеджерами, учёными и предпринимателями.',
      start: ['Изучи методологию личного брендинга: Tom Peters, Dorie Clark', 'Освой ведение профессиональных соцсетей: LinkedIn, Telegram, Instagram', 'Пройди обучение ораторскому мастерству и подготовке к публичным выступлениям', 'Создай собственный сильный личный бренд — лучшее портфолио'],
      startUrls: ['https://www.linkedin.com/learning/', 'https://www.ted.com/talks', 'https://www.coursera.org/learn/personal-branding', 'https://practicum.yandex.ru/pr-manager/']
    }
  },
  ui: {
    tag: 'PR-специалист',
    title: 'Какой PR-специалист ты?',
    subtitle: '6 вопросов — найди свою нишу в коммуникациях',
    prog: 'Вопрос %d из 6',
    hint: 'Выбери один вариант',
    back: '← Назад', next: 'Далее →', finish: 'Показать результат',
    winBadge: 'Твоя ниша в PR',
    resTag: 'Результат', resSub: 'Твой путь в коммуникациях',
    lblStart: 'С чего начать:', l2back: '← Назад к результатам'
  }
};


L2.pr_spec.en = {
  questions: [
    {
      t: 'Which area of communications appeals to you most?',
      o: [
        'Media relations — building relationships with journalists and securing coverage in top outlets',
        'Corporate communications — shaping how a large organisation is perceived by all its stakeholders',
        'Crisis communications — managing reputation when something goes badly wrong',
        'Personal branding — helping individuals build a distinctive, credible public presence'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: 'Which skill would you most like to develop?',
      o: [
        'Pitching stories to journalists, writing press releases, and building a media contact list',
        'Stakeholder mapping, messaging frameworks, and executive communications',
        'Risk and issues management, crisis simulation, and rapid response drafting',
        'Content strategy, LinkedIn presence building, and thought leadership positioning'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: 'What result would make you most proud?',
      o: [
        'A story I pitched ran on the front page of a national newspaper — unpaid coverage worth six figures',
        'The company\'s reputation score improved by 20 points after our annual communications campaign',
        'A crisis that could have destroyed the brand was contained within 48 hours — no lasting damage',
        'A client with zero online presence became a recognised industry voice with 50,000 followers'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: 'How do you prefer to work?',
      o: [
        'Relationship-building and proactive outreach — calling journalists, attending media events, pitching ideas',
        'Strategic planning and internal stakeholder management — long-term campaigns, budgets, board reports',
        'Fast and high-pressure — responding to breaking issues, drafting holding statements, coordinating spokespeople',
        'Creative and consultative — developing a client\'s narrative and coaching them on how to tell their story'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: 'Which tool or approach interests you most?',
      o: [
        'Meltwater or Cision for media monitoring — tracking coverage, measuring share of voice, building lists',
        'Message houses, stakeholder matrices, and annual reports — the architecture of corporate reputation',
        'SCCT (Situational Crisis Communication Theory), dark site preparation, crisis simulations',
        'Content calendars, thought leadership articles, podcast appearances, and speaker positioning'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: 'Where do you see yourself in 10 years?',
      o: [
        'Head of Media Relations or Communications Director at a major brand or PR agency',
        'Chief Communications Officer (CCO) or VP of Corporate Affairs at a global company',
        'Partner at a specialist crisis communications consultancy or founder of your own firm',
        'Top personal branding consultant with a client list of CEOs and public figures'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    }
  ],
  roles: {
    media_rel: {
      emoji: '📡',
      name: 'Media Relations Specialist',
      desc: 'You build relationships with journalists and secure editorial coverage — earned media is your currency',
      detail: 'Your job is to get your organisation into the news — for the right reasons. You write press releases and media pitches, build and maintain relationships with journalists across print, broadcast, and digital, organise press briefings and media events, and monitor coverage using tools like Meltwater or Cision. The best media relations professionals think like journalists: they know what makes a story.',
      start: [
        'Study communications, journalism, or public relations at degree level',
        'Build a media list of 50 relevant journalists and practise pitching a real story',
        'Learn to write a press release in the inverted pyramid format — clarity and brevity are everything',
        'Read PRWeek and follow the CIPR (Chartered Institute of Public Relations) for industry news and training'
      ]
    },
    corp_pr: {
      emoji: '🏛️',
      name: 'Corporate Communications Manager',
      desc: 'You manage how an organisation communicates with all its stakeholders — employees, investors, media, and the public',
      detail: 'You oversee the full communications function: internal communications to employees, external messaging to media and the public, investor relations, annual reports, and executive communications. You develop the messaging framework that every spokesperson uses, and you ensure all communications are consistent, on-brand, and aligned with business strategy. You report to the C-suite and advise the board.',
      start: [
        'Study communications, business, or public administration — then build experience across different channels',
        'Learn to write a messaging house — a framework that cascades key messages to different audiences',
        'Get experience in internal communications — it is often underestimated but critically important',
        'Read "Spin Sucks" by Gini Dietrich — a frank and practical guide to modern corporate communications'
      ]
    },
    crisis_pr: {
      emoji: '🚨',
      name: 'Crisis Communications Specialist',
      desc: 'You manage reputations under fire — guiding organisations through their worst public moments',
      detail: 'You are the person organisations call when something goes wrong. You advise on what to say, when to say it, and how — often within hours of an incident. You use frameworks like SCCT to choose the right response strategy, prepare dark sites and holding statements in advance, run crisis simulations, and train spokespeople. In a real crisis, clarity, speed, and honesty are the only tools that work.',
      start: [
        'Build several years of broad communications experience before specialising in crisis work',
        'Study SCCT (Situational Crisis Communication Theory) — Timothy Coombs\'s framework is the academic foundation',
        'Learn to write a crisis communications plan — template structures are available from the CIPR and PRSA',
        'Run tabletop crisis simulations — experience under (simulated) pressure is the only real preparation'
      ]
    },
    personal_brand: {
      emoji: '⭐',
      name: 'Personal Branding Consultant',
      desc: 'You help individuals build a distinctive public identity — executives, entrepreneurs, and public figures',
      detail: 'Your clients are leaders who want to be known for something specific. You help them define their positioning, develop their narrative, build their LinkedIn and social media presence, coach them for media appearances and keynote speeches, and place them in podcasts, industry publications, and speaking slots. You are part strategist, part coach, part ghostwriter.',
      start: [
        'Study communications, marketing, or psychology — personal branding combines all three',
        'Build your own personal brand first — your LinkedIn and content are your portfolio',
        'Learn content strategy and thought leadership positioning — courses on LinkedIn Learning are a good start',
        'Read "Known" by Mark Schaefer — the definitive guide to building a personal brand that stands for something'
      ]
    }
  },
  ui: { l2back: '← Back to education', title: 'Communications & PR: which specialisation?' }
};



L2.pr_spec.de = {
  questions: [
    {
      t: 'Welcher Bereich der Kommunikation interessiert dich am meisten?',
      o: [
        'Medienarbeit – Beziehungen zu Journalisten aufbauen und Berichterstattung in führenden Medien sichern',
        'Unternehmenskommunikation – gestalten, wie eine große Organisation von all ihren Stakeholdern wahrgenommen wird',
        'Krisenkommunikation – Reputation managen, wenn etwas ernsthaft schiefläuft',
        'Personal Branding – Einzelpersonen helfen, eine unverwechselbare und glaubwürdige öffentliche Präsenz aufzubauen'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: 'Welche Fähigkeit möchtest du am liebsten entwickeln?',
      o: [
        'Story-Pitches an Journalisten, Pressemitteilungen schreiben und eine Mediakontaktliste aufbauen',
        'Stakeholder-Mapping, Botschaftsrahmen und Führungskräftekommunikation',
        'Risiko- und Krisenmanagement, Krisensimulation und schnelle Reaktionsentwürfe',
        'Content-Strategie, LinkedIn-Präsenz aufbauen und Thought-Leadership-Positionierung'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: 'Welches Ergebnis würde dich am stolzesten machen?',
      o: [
        'Eine Geschichte, die ich gepitcht habe, erschien auf der Titelseite einer überregionalen Zeitung – unbezahlte Berichterstattung im sechsstelligen Wert',
        'Der Reputationsindex des Unternehmens stieg nach unserer jährlichen Kommunikationskampagne um 20 Punkte',
        'Eine Krise, die die Marke hätte zerstören können, wurde innerhalb von 48 Stunden eingedämmt – kein dauerhafter Schaden',
        'Ein Kunde ohne Online-Präsenz wurde zu einer anerkannten Branchenstimme mit 50.000 Followern'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: 'Wie arbeitest du am liebsten?',
      o: [
        'Beziehungsaufbau und proaktive Ansprache – Journalisten anrufen, an Medienevents teilnehmen, Ideen pitchen',
        'Strategische Planung und internes Stakeholder-Management – langfristige Kampagnen, Budgets, Vorstandsberichte',
        'Schnell und unter Druck – auf aktuelle Themen reagieren, Holding Statements verfassen, Sprecher koordinieren',
        'Kreativ und beratend – die Narrative eines Kunden entwickeln und ihn coachen, wie er seine Geschichte erzählt'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: 'Welches Tool oder welcher Ansatz interessiert dich am meisten?',
      o: [
        'Meltwater oder Cision für Media Monitoring – Berichterstattung verfolgen, Share of Voice messen, Listen aufbauen',
        'Message Houses, Stakeholder-Matrizen und Geschäftsberichte – die Architektur der Unternehmensreputation',
        'SCCT (Situational Crisis Communication Theory), Dark-Site-Vorbereitung, Krisensimulationen',
        'Content-Kalender, Thought-Leadership-Artikel, Podcast-Auftritte und Speaker-Positionierung'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: 'Wo siehst du dich in 10 Jahren?',
      o: [
        'Leiter Medienarbeit oder Kommunikationsdirektor bei einer großen Marke oder PR-Agentur',
        'Chief Communications Officer (CCO) oder VP Corporate Affairs bei einem globalen Unternehmen',
        'Partner bei einer spezialisierten Krisenkommunikationsberatung oder Gründer deiner eigenen Firma',
        'Top-Berater für Personal Branding mit einer Kundenliste aus CEOs und öffentlichen Persönlichkeiten'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    }
  ],
  roles: {
    media_rel: {
      emoji: '📡',
      name: 'Spezialist für Medienarbeit',
      desc: 'Du baust Beziehungen zu Journalisten auf und sicherst redaktionelle Berichterstattung – Earned Media ist deine Währung',
      detail: 'Deine Aufgabe ist es, deine Organisation aus den richtigen Gründen in die Nachrichten zu bringen. Du schreibst Pressemitteilungen und Medienpitches, baust Beziehungen zu Journalisten aus Print, Rundfunk und Digital auf und pflegst sie, organisierst Pressebriefings und Medienevents und beobachtest die Berichterstattung mit Tools wie Meltwater oder Cision. Die besten Medienspezialisten denken wie Journalisten: Sie wissen, was eine Geschichte ausmacht.',
      start: [
        'Studiere Kommunikation, Journalismus oder Public Relations auf Hochschulniveau',
        'Erstelle eine Medienliste mit 50 relevanten Journalisten und übe, eine echte Geschichte zu pitchen',
        'Lerne, eine Pressemitteilung im umgekehrten Pyramidenformat zu schreiben – Klarheit und Kürze sind alles',
        'Lies PRWeek und folge dem CIPR (Chartered Institute of Public Relations) für Branchennews und Weiterbildung'
      ]
    },
    corp_pr: {
      emoji: '🏛️',
      name: 'Corporate Communications Manager',
      desc: 'Du steuerst, wie eine Organisation mit all ihren Stakeholdern kommuniziert – Mitarbeiter, Investoren, Medien und Öffentlichkeit',
      detail: 'Du verantwortest die gesamte Kommunikationsfunktion: interne Kommunikation an Mitarbeiter, externe Botschaften an Medien und Öffentlichkeit, Investor Relations, Geschäftsberichte und Führungskräftekommunikation. Du entwickelst den Botschaftsrahmen, den alle Sprecher nutzen, und stellst sicher, dass alle Kommunikation konsistent, markenkonform und auf die Unternehmensstrategie abgestimmt ist.',
      start: [
        'Studiere Kommunikation, BWL oder öffentliche Verwaltung – und baue dann Erfahrung über verschiedene Kanäle auf',
        'Lerne, ein Message House zu schreiben – einen Rahmen, der Kernbotschaften an verschiedene Zielgruppen anpasst',
        'Sammle Erfahrung in der internen Kommunikation – sie wird oft unterschätzt, ist aber entscheidend wichtig',
        'Lies „Spin Sucks" von Gini Dietrich – ein offener und praxisnaher Leitfaden zur modernen Unternehmenskommunikation'
      ]
    },
    crisis_pr: {
      emoji: '🚨',
      name: 'Krisenkommunikations-Spezialist',
      desc: 'Du managst Reputationen unter Beschuss – du führst Organisationen durch ihre schlimmsten öffentlichen Momente',
      detail: 'Du bist die Person, die Organisationen anrufen, wenn etwas schiefläuft. Du berätst, was gesagt werden soll, wann und wie – oft innerhalb weniger Stunden nach einem Vorfall. Du nutzt Rahmenwerke wie SCCT, um die richtige Reaktionsstrategie zu wählen, bereitest Dark Sites und Holding Statements im Voraus vor, führst Krisensimulationen durch und trainierst Sprecher. In einer echten Krise sind Klarheit, Schnelligkeit und Ehrlichkeit die einzigen Werkzeuge, die funktionieren.',
      start: [
        'Sammle mehrere Jahre breite Kommunikationserfahrung, bevor du dich auf Krisenarbeit spezialisierst',
        'Studiere SCCT (Situational Crisis Communication Theory) – Timothy Coombs\' Rahmen ist das wissenschaftliche Fundament',
        'Lerne, einen Krisenkommunikationsplan zu erstellen – Vorlagenstrukturen gibt es vom CIPR und PRSA',
        'Führe Tischübungen zur Krisensimulation durch – Erfahrung unter (simuliertem) Druck ist die einzige echte Vorbereitung'
      ]
    },
    personal_brand: {
      emoji: '⭐',
      name: 'Personal-Branding-Berater',
      desc: 'Du hilfst Einzelpersonen, eine unverwechselbare öffentliche Identität aufzubauen – Führungskräfte, Unternehmer und öffentliche Persönlichkeiten',
      detail: 'Deine Kunden sind Führungspersönlichkeiten, die für etwas Bestimmtes bekannt sein wollen. Du hilfst ihnen, ihre Positionierung zu definieren, ihre Narrative zu entwickeln, ihre LinkedIn- und Social-Media-Präsenz aufzubauen, coachst sie für Medienauftritte und Keynote-Reden und platzierst sie in Podcasts, Branchenpublikationen und auf Sprecherslots. Du bist Teil Stratege, Teil Coach, Teil Ghostwriter.',
      start: [
        'Studiere Kommunikation, Marketing oder Psychologie – Personal Branding verbindet alle drei Disziplinen',
        'Baue zuerst deine eigene persönliche Marke auf – dein LinkedIn und dein Content sind dein Portfolio',
        'Lerne Content-Strategie und Thought-Leadership-Positionierung – Kurse auf LinkedIn Learning sind ein guter Einstieg',
        'Lies „Known" von Mark Schaefer – der definitive Leitfaden zum Aufbau einer persönlichen Marke, die für etwas steht'
      ]
    }
  },
  ui: { l2back: '← Zurück zu Medien & PR', title: 'PR-Spezialist: welche Spezialisierung?' }
};

L2.pr_spec.fr = {
  questions: [
    {
      t: 'Quel domaine des communications t\'attire le plus ?',
      o: [
        'Les relations presse – nouer des liens avec les journalistes et obtenir une couverture dans les grands médias',
        'La communication d\'entreprise – façonner la perception d\'une grande organisation auprès de toutes ses parties prenantes',
        'La communication de crise – gérer la réputation quand quelque chose tourne vraiment mal',
        'Le personal branding – aider des individus à construire une présence publique distinctive et crédible'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: 'Quelle compétence aimerais-tu le plus développer ?',
      o: [
        'Pitcher des sujets aux journalistes, rédiger des communiqués de presse et constituer un carnet de contacts médias',
        'La cartographie des parties prenantes, les cadres de messages et la communication dirigeants',
        'La gestion des risques et des crises, les simulations de crise et la rédaction de réponses rapides',
        'La stratégie de contenu, la présence LinkedIn et le positionnement en leadership d\'opinion'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: 'Quel résultat te rendrait le plus fier ?',
      o: [
        'Un sujet que j\'ai pitché est paru en une d\'un journal national – une couverture gratuite valant six chiffres',
        'L\'indice de réputation de l\'entreprise a progressé de 20 points à l\'issue de notre campagne de communication annuelle',
        'Une crise qui aurait pu détruire la marque a été maîtrisée en 48 heures – sans dommage durable',
        'Un client sans présence en ligne est devenu une voix reconnue de son secteur avec 50 000 abonnés'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: 'Comment préfères-tu travailler ?',
      o: [
        'Développement de relations et démarche proactive – appeler des journalistes, assister à des événements médias, pitcher des idées',
        'Planification stratégique et gestion des parties prenantes internes – campagnes long terme, budgets, rapports au conseil d\'administration',
        'Vite et sous pression – répondre à des sujets urgents, rédiger des déclarations préliminaires, coordonner les porte-parole',
        'De façon créative et consultative – développer le récit d\'un client et le coacher sur la façon de raconter son histoire'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: 'Quel outil ou quelle approche t\'intéresse le plus ?',
      o: [
        'Meltwater ou Cision pour la veille médias – suivre les retombées, mesurer le share of voice, constituer des listes',
        'Les message houses, les matrices de parties prenantes et les rapports annuels – l\'architecture de la réputation d\'entreprise',
        'La SCCT (théorie situationnelle de la communication de crise), la préparation de dark sites, les simulations de crise',
        'Les calendriers éditoriaux, les articles de leadership d\'opinion, les apparitions en podcast et le positionnement de conférencier'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: 'Où te vois-tu dans 10 ans ?',
      o: [
        'Directeur des relations presse ou directeur de la communication d\'une grande marque ou agence RP',
        'Directeur de la communication (CCO) ou Vice-Président des affaires corporate dans une multinationale',
        'Associé dans un cabinet spécialisé en communication de crise ou fondateur de ta propre structure',
        'Consultant en personal branding de premier plan avec un portefeuille de clients composé de PDG et de personnalités publiques'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    }
  ],
  roles: {
    media_rel: {
      emoji: '📡',
      name: 'Chargé de relations presse',
      desc: 'Tu construis des relations avec les journalistes et obtiens des retombées éditoriales – les earned media sont ta monnaie',
      detail: 'Ton rôle est de faire parler de ton organisation dans les médias – pour de bonnes raisons. Tu rédiges des communiqués et des pitches, tu construis et entretiens des relations avec des journalistes de la presse écrite, de l\'audiovisuel et du numérique, tu organises des briefings presse et des événements médias, et tu surveilles les retombées avec des outils comme Meltwater ou Cision. Les meilleurs professionnels des relations presse pensent comme des journalistes : ils savent ce qui fait une bonne histoire.',
      start: [
        'Étudie la communication, le journalisme ou les relations publiques à l\'université',
        'Constitue une liste de 50 journalistes pertinents et entraîne-toi à pitcher une vraie histoire',
        'Apprends à rédiger un communiqué de presse selon le format de la pyramide inversée – clarté et concision sont essentielles',
        'Lis PRWeek et suis le CIPR (Chartered Institute of Public Relations) pour l\'actualité du secteur et la formation'
      ]
    },
    corp_pr: {
      emoji: '🏛️',
      name: 'Responsable communication d\'entreprise',
      desc: 'Tu gères la façon dont une organisation communique avec toutes ses parties prenantes – employés, investisseurs, médias et grand public',
      detail: 'Tu supervises l\'ensemble de la fonction communication : la communication interne aux employés, les messages externes aux médias et au public, les relations investisseurs, les rapports annuels et la communication dirigeants. Tu élabores le cadre de messages utilisé par tous les porte-parole et tu veilles à ce que toutes les communications soient cohérentes, conformes à la marque et alignées sur la stratégie d\'entreprise.',
      start: [
        'Étudie la communication, la gestion ou l\'administration publique – puis construis de l\'expérience sur différents canaux',
        'Apprends à rédiger un message house – un cadre qui décline les messages clés pour différents publics',
        'Acquiers de l\'expérience en communication interne – souvent sous-estimée mais absolument cruciale',
        'Lis "Spin Sucks" de Gini Dietrich – un guide franc et pratique de la communication d\'entreprise moderne'
      ]
    },
    crisis_pr: {
      emoji: '🚨',
      name: 'Spécialiste en communication de crise',
      desc: 'Tu gères les réputations sous le feu des critiques – tu guides les organisations dans leurs pires moments publics',
      detail: 'Tu es la personne que les organisations appellent quand quelque chose tourne mal. Tu conseilles sur quoi dire, quand et comment – souvent dans les heures suivant un incident. Tu utilises des cadres comme la SCCT pour choisir la bonne stratégie de réponse, tu prépares à l\'avance des dark sites et des déclarations préliminaires, tu animes des simulations de crise et tu formes les porte-parole. En situation de crise réelle, clarté, rapidité et honnêteté sont les seuls outils qui fonctionnent.',
      start: [
        'Acquiers plusieurs années d\'expérience large en communication avant de te spécialiser dans la gestion de crise',
        'Étudie la SCCT (théorie situationnelle de la communication de crise) – le cadre de Timothy Coombs est le fondement académique',
        'Apprends à rédiger un plan de communication de crise – des structures types sont disponibles auprès du CIPR et du PRSA',
        'Anime des exercices de simulation de crise – l\'expérience sous pression (simulée) est la seule vraie préparation'
      ]
    },
    personal_brand: {
      emoji: '⭐',
      name: 'Consultant en personal branding',
      desc: 'Tu aides des individus à construire une identité publique distinctive – dirigeants, entrepreneurs et personnalités publiques',
      detail: 'Tes clients sont des leaders qui veulent être connus pour quelque chose de précis. Tu les aides à définir leur positionnement, à développer leur récit, à construire leur présence LinkedIn et sur les réseaux sociaux, tu les coaches pour leurs apparitions médias et leurs conférences, et tu les places dans des podcasts, des publications sectorielles et sur des scènes de prise de parole. Tu es à la fois stratège, coach et nègre littéraire.',
      start: [
        'Étudie la communication, le marketing ou la psychologie – le personal branding combine les trois',
        'Construis d\'abord ta propre marque personnelle – ton LinkedIn et ton contenu sont ton portfolio',
        'Apprends la stratégie de contenu et le positionnement en leadership d\'opinion – les cours sur LinkedIn Learning sont un bon début',
        'Lis "Known" de Mark Schaefer – le guide de référence pour construire une marque personnelle qui représente quelque chose'
      ]
    }
  },
  ui: { l2back: '← Retour aux médias', title: 'Relations publiques : quelle spécialisation ?' }
};



L2.pr_spec.es = {
  questions: [
    {
      t: '¿Qué área de las comunicaciones te atrae más?',
      o: [
        'Relaciones con los medios — construir vínculos con periodistas y lograr cobertura en los principales medios',
        'Comunicación corporativa — modelar la percepción de una gran organización ante todos sus grupos de interés',
        'Comunicación de crisis — gestionar la reputación cuando algo sale muy mal',
        'Personal branding — ayudar a personas a construir una presencia pública distintiva y creíble'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: '¿Qué habilidad te gustaría desarrollar más?',
      o: [
        'Proponer historias a periodistas, redactar notas de prensa y construir una lista de contactos en medios',
        'Mapeo de stakeholders, marcos de mensajes y comunicación ejecutiva',
        'Gestión de riesgos y crisis, simulacros de crisis y redacción de respuestas rápidas',
        'Estrategia de contenidos, presencia en LinkedIn y posicionamiento como líder de opinión'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: '¿Qué resultado te enorgullecería más?',
      o: [
        'Una historia que propuse fue publicada en la portada de un diario nacional — cobertura gratuita de alto valor',
        'El índice de reputación de la empresa mejoró 20 puntos tras nuestra campaña anual de comunicación',
        'Una crisis que podría haber destruido la marca fue contenida en 48 horas — sin daño duradero',
        'Un cliente sin presencia digital se convirtió en una voz reconocida del sector con 50.000 seguidores'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: '¿Cómo prefieres trabajar?',
      o: [
        'Construyendo relaciones y haciendo contacto proactivo — llamar a periodistas, asistir a eventos de medios, proponer ideas',
        'Planificación estratégica y gestión de stakeholders internos — campañas a largo plazo, presupuestos, informes al consejo',
        'Rápido y bajo presión — responder a temas urgentes, redactar declaraciones de contención, coordinar portavoces',
        'De forma creativa y consultiva — desarrollar el relato de un cliente y orientarlo sobre cómo contar su historia'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: '¿Qué herramienta o enfoque te interesa más?',
      o: [
        'Meltwater o Cision para monitoreo de medios — seguir la cobertura, medir el share of voice, crear listas',
        'Message houses, matrices de stakeholders e informes anuales — la arquitectura de la reputación corporativa',
        'SCCT (Teoría de Comunicación de Crisis Situacional), preparación de dark sites, simulacros de crisis',
        'Calendarios de contenidos, artículos de liderazgo de opinión, apariciones en podcasts y posicionamiento como ponente'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: '¿Dónde te ves en 10 años?',
      o: [
        'Director de Relaciones con Medios o Director de Comunicación en una gran marca o agencia de PR',
        'Chief Communications Officer (CCO) o VP de Asuntos Corporativos en una empresa global',
        'Socio en una consultora especializada en comunicación de crisis o fundador de tu propia firma',
        'Consultor líder de personal branding con una cartera de clientes compuesta por CEOs y figuras públicas'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    }
  ],
  roles: {
    media_rel: {
      emoji: '📡',
      name: 'Especialista en Relaciones con Medios',
      desc: 'Construyes relaciones con periodistas y consigues cobertura editorial — los earned media son tu moneda',
      detail: 'Tu trabajo es que tu organización aparezca en los medios por las razones correctas. Redactas notas de prensa y pitches periodísticos, construyes y mantienes relaciones con periodistas de prensa escrita, radio, televisión y digital, organizas briefings de prensa y eventos mediáticos, y monitorizas la cobertura con herramientas como Meltwater o Cision. Los mejores profesionales de relaciones con medios piensan como periodistas: saben qué convierte algo en noticia.',
      start: [
        'Estudia comunicación, periodismo o relaciones públicas a nivel universitario',
        'Elabora una lista de 50 periodistas relevantes y practica cómo proponer una historia real',
        'Aprende a redactar una nota de prensa en formato de pirámide invertida — claridad y brevedad lo son todo',
        'Lee PRWeek y sigue el CIPR (Chartered Institute of Public Relations) para noticias del sector y formación'
      ]
    },
    corp_pr: {
      emoji: '🏢',
      name: 'Director de Comunicación Corporativa',
      desc: 'Gestionas cómo una organización se comunica con todos sus grupos de interés — empleados, inversores, medios y público',
      detail: 'Supervisas toda la función de comunicación: comunicación interna a empleados, mensajes externos a medios y público, relaciones con inversores, informes anuales y comunicación ejecutiva. Desarrollas el marco de mensajes que utilizan todos los portavoces, y te aseguras de que todas las comunicaciones sean coherentes, alineadas con la marca y con la estrategia empresarial. Reportas al C-suite y asesoras al consejo de administración.',
      start: [
        'Estudia comunicación, administración de empresas o gestión pública — luego acumula experiencia en distintos canales',
        'Aprende a construir un message house — un marco que adapta los mensajes clave a diferentes audiencias',
        'Adquiere experiencia en comunicación interna — a menudo subestimada pero de importancia crítica',
        'Lee "Spin Sucks" de Gini Dietrich — una guía franca y práctica sobre la comunicación corporativa moderna'
      ]
    },
    crisis_pr: {
      emoji: '🚨',
      name: 'Especialista en Comunicación de Crisis',
      desc: 'Gestionas reputaciones bajo presión — guiando a las organizaciones en sus peores momentos públicos',
      detail: 'Eres la persona a la que llaman las organizaciones cuando algo sale mal. Asesoras sobre qué decir, cuándo y cómo — a menudo en pocas horas tras un incidente. Usas marcos como la SCCT para elegir la estrategia de respuesta adecuada, preparas dark sites y declaraciones de contención con antelación, realizas simulacros de crisis y entrenas a portavoces. En una crisis real, la claridad, la rapidez y la honestidad son las únicas herramientas que funcionan.',
      start: [
        'Acumula varios años de experiencia amplia en comunicación antes de especializarte en gestión de crisis',
        'Estudia la SCCT (Teoría de Comunicación de Crisis Situacional) — el marco de Timothy Coombs es la base académica',
        'Aprende a redactar un plan de comunicación de crisis — el CIPR y la PRSA ofrecen estructuras de plantilla',
        'Realiza simulacros de crisis en mesa — la experiencia bajo presión (simulada) es la única preparación real'
      ]
    },
    personal_brand: {
      emoji: '⭐',
      name: 'Consultor de Personal Branding',
      desc: 'Ayudas a personas a construir una identidad pública distintiva — directivos, emprendedores y figuras públicas',
      detail: 'Tus clientes son líderes que quieren ser reconocidos por algo concreto. Les ayudas a definir su posicionamiento, desarrollar su relato, construir su presencia en LinkedIn y redes sociales, los preparas para apariciones en medios y conferencias magistrales, y los colocas en podcasts, publicaciones sectoriales y espacios de ponentes. Eres parte estratega, parte coach, parte ghostwriter.',
      start: [
        'Estudia comunicación, marketing o psicología — el personal branding combina las tres disciplinas',
        'Construye primero tu propia marca personal — tu LinkedIn y tu contenido son tu portfolio',
        'Aprende estrategia de contenidos y posicionamiento de liderazgo de opinión — los cursos de LinkedIn Learning son un buen inicio',
        'Lee "Known" de Mark Schaefer — la guía definitiva para construir una marca personal que represente algo'
      ]
    }
  },
  ui: { l2back: '← Volver a medios', title: 'Relaciones públicas: ¿qué especialización?' }
};

L2.pr_spec.pt = {
  questions: [
    {
      t: 'Qual área de comunicação te atrai mais?',
      o: [
        'Relações com a mídia — construir vínculos com jornalistas e garantir cobertura nos principais veículos',
        'Comunicação corporativa — moldar a percepção de uma grande organização perante todos os seus públicos',
        'Comunicação de crise — gerenciar reputação quando algo dá muito errado',
        'Personal branding — ajudar pessoas a construir uma presença pública distinta e crível'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: 'Qual habilidade você mais gostaria de desenvolver?',
      o: [
        'Propor pautas a jornalistas, escrever releases e montar uma lista de contatos na mídia',
        'Mapeamento de stakeholders, frameworks de mensagens e comunicação executiva',
        'Gestão de riscos e crises, simulações de crise e redação de respostas rápidas',
        'Estratégia de conteúdo, construção de presença no LinkedIn e posicionamento como líder de opinião'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: 'Qual resultado te deixaria mais orgulhoso?',
      o: [
        'Uma pauta que eu propus foi publicada na capa de um jornal nacional — cobertura gratuita de alto valor',
        'O índice de reputação da empresa melhorou 20 pontos após nossa campanha anual de comunicação',
        'Uma crise que poderia ter destruído a marca foi contida em 48 horas — sem dano duradouro',
        'Um cliente sem presença online se tornou uma voz reconhecida do setor com 50.000 seguidores'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: 'Como você prefere trabalhar?',
      o: [
        'Construindo relacionamentos e fazendo contato proativo — ligar para jornalistas, participar de eventos de mídia, propor ideias',
        'Planejamento estratégico e gestão de stakeholders internos — campanhas de longo prazo, orçamentos, relatórios ao conselho',
        'Rápido e sob pressão — responder a temas urgentes, redigir declarações de contenção, coordenar porta-vozes',
        'De forma criativa e consultiva — desenvolver a narrativa de um cliente e orientá-lo sobre como contar sua história'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: 'Qual ferramenta ou abordagem te interessa mais?',
      o: [
        'Meltwater ou Cision para monitoramento de mídia — acompanhar cobertura, medir share of voice, criar listas',
        'Message houses, matrizes de stakeholders e relatórios anuais — a arquitetura da reputação corporativa',
        'SCCT (Teoria Situacional de Comunicação de Crise), preparação de dark sites, simulações de crise',
        'Calendários editoriais, artigos de liderança de opinião, participações em podcasts e posicionamento como palestrante'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    },
    {
      t: 'Onde você se vê em 10 anos?',
      o: [
        'Diretor de Relações com a Mídia ou Diretor de Comunicação em uma grande marca ou agência de PR',
        'Chief Communications Officer (CCO) ou VP de Assuntos Corporativos em uma empresa global',
        'Sócio em uma consultoria especializada em comunicação de crise ou fundador da sua própria empresa',
        'Consultor líder de personal branding com uma carteira de clientes formada por CEOs e figuras públicas'
      ],
      s: [{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]
    }
  ],
  roles: {
    media_rel: {
      emoji: '📡',
      name: 'Especialista em Relações com a Mídia',
      desc: 'Você constrói relações com jornalistas e garante cobertura editorial — os earned media são sua moeda',
      detail: 'Seu trabalho é fazer sua organização aparecer na mídia — pelas razões certas. Você redige releases e pitches jornalísticos, constrói e mantém relações com jornalistas de impresso, rádio, TV e digital, organiza briefings de imprensa e eventos de mídia, e monitora a cobertura com ferramentas como Meltwater ou Cision. Os melhores profissionais de relações com a mídia pensam como jornalistas: sabem o que torna algo notícia.',
      start: [
        'Estude comunicação, jornalismo ou relações públicas em nível universitário',
        'Monte uma lista com 50 jornalistas relevantes e pratique como propor uma pauta real',
        'Aprenda a redigir um release no formato de pirâmide invertida — clareza e objetividade são tudo',
        'Leia PRWeek e acompanhe o CIPR (Chartered Institute of Public Relations) para notícias do setor e capacitação'
      ]
    },
    corp_pr: {
      emoji: '🏢',
      name: 'Gerente de Comunicação Corporativa',
      desc: 'Você gerencia como uma organização se comunica com todos os seus públicos — colaboradores, investidores, mídia e sociedade',
      detail: 'Você supervisiona toda a função de comunicação: comunicação interna para colaboradores, mensagens externas para mídia e público, relações com investidores, relatórios anuais e comunicação executiva. Você desenvolve o framework de mensagens usado por todos os porta-vozes e garante que todas as comunicações sejam coerentes, alinhadas à marca e à estratégia do negócio. Você reporta ao C-suite e assessora o conselho.',
      start: [
        'Estude comunicação, administração ou gestão pública — depois acumule experiência em diferentes canais',
        'Aprenda a construir um message house — um framework que adapta mensagens-chave para diferentes públicos',
        'Adquira experiência em comunicação interna — frequentemente subestimada, mas de importância crítica',
        'Leia "Spin Sucks" de Gini Dietrich — um guia franco e prático sobre a comunicação corporativa moderna'
      ]
    },
    crisis_pr: {
      emoji: '🚨',
      name: 'Especialista em Comunicação de Crise',
      desc: 'Você gerencia reputações sob pressão — guiando organizações em seus piores momentos públicos',
      detail: 'Você é a pessoa que as organizações ligam quando algo dá errado. Você orienta sobre o que dizer, quando e como — muitas vezes em poucas horas após um incidente. Usa frameworks como a SCCT para escolher a estratégia de resposta certa, prepara dark sites e declarações de contenção com antecedência, conduz simulações de crise e treina porta-vozes. Em uma crise real, clareza, rapidez e honestidade são as únicas ferramentas que funcionam.',
      start: [
        'Acumule vários anos de experiência ampla em comunicação antes de se especializar em gestão de crises',
        'Estude a SCCT (Teoria Situacional de Comunicação de Crise) — o framework de Timothy Coombs é a base acadêmica',
        'Aprenda a redigir um plano de comunicação de crise — o CIPR e a PRSA disponibilizam estruturas de modelo',
        'Realize simulações de crise em mesa — a experiência sob pressão (simulada) é a única preparação real'
      ]
    },
    personal_brand: {
      emoji: '⭐',
      name: 'Consultor de Personal Branding',
      desc: 'Você ajuda pessoas a construir uma identidade pública distinta — executivos, empreendedores e figuras públicas',
      detail: 'Seus clientes são líderes que querem ser conhecidos por algo específico. Você os ajuda a definir seu posicionamento, desenvolver sua narrativa, construir sua presença no LinkedIn e nas redes sociais, os prepara para aparições na mídia e palestras, e os coloca em podcasts, publicações do setor e slots de palestrante. Você é parte estrategista, parte coach, parte ghostwriter.',
      start: [
        'Estude comunicação, marketing ou psicologia — o personal branding combina as três disciplinas',
        'Construa primeiro sua própria marca pessoal — seu LinkedIn e seu conteúdo são seu portfólio',
        'Aprenda estratégia de conteúdo e posicionamento de liderança de opinião — os cursos do LinkedIn Learning são um bom começo',
        'Leia "Known" de Mark Schaefer — o guia definitivo para construir uma marca pessoal que represente algo'
      ]
    }
  },
  ui: { l2back: '← Voltar à mídia', title: 'Relações públicas: qual especialização?' }
};

L2.pr_spec.ar = {
  questions: [
    { t:"أيّ جانب من العلاقات العامة يستهويك أكثر؟", o:["بناء علاقات مع الصحفيين وتحقيق تغطية إعلامية للعلامة التجارية","إدارة الاتصالات المؤسسية والسمعة الاستراتيجية للشركات","إدارة الأزمات الإعلامية وحماية السمعة في الأوقات الصعبة","بناء العلامات الشخصية للمشاهير ورجال الأعمال والمؤثرين"], s:[{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}] },
    { t:"أيّ أداة تودّ إتقانها؟", o:["أدوات مراقبة الإعلام وكتابة البيانات الصحفية وإدارة العلاقات","استراتيجية الاتصال المؤسسي وإدارة أصحاب المصلحة","بروتوكولات إدارة الأزمات وتقنيات التواصل تحت الضغط","بناء حضور رقمي وإدارة الصورة الشخصية عبر المنصات"], s:[{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}] },
    { t:"أيّ نتيجة تُشعرك بالرضا أكثر؟", o:["تغطية إعلامية واسعة لعميل في وسائل الإعلام الكبرى","تحسين ملموس في سمعة مؤسسة بعد حملة اتصال استراتيجية","إدارة ناجحة لأزمة أنقذت سمعة شركة من الانهيار","مشهور أو رجل أعمال يُصبح صوتاً مؤثراً في مجاله"], s:[{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}] },
    { t:"أين تُفضّل العمل؟", o:["في وكالة علاقات عامة تخدم عملاء متنوعين","في قسم الاتصالات داخل مؤسسة أو شركة كبرى","في فريق أزمات متخصص يعمل تحت ضغط مستمر","بشكل مستقل مع عملاء من المشاهير ورجال الأعمال"], s:[{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}] },
    { t:"أيّ مهمة أقرب إليك؟", o:["كتابة بيان صحفي وتوزيعه لتحقيق تغطية لمنتج جديد","تطوير استراتيجية اتصال طويلة الأمد لشركة كبرى","التعامل مع صحفيين في أزمة إعلامية مفاجئة","تخطيط صورة عامة لمؤثر يريد توسيع حضوره"], s:[{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}] },
    { t:"أين ترى نفسك بعد عشر سنوات؟", o:["مدير وكالة علاقات عامة متخصص في إطلاق المنتجات","مدير اتصالات في شركة عالمية كبرى","خبير إدارة أزمات يعمل على القضايا الكبرى","وكيل مشاهير يُدير صورة نجوم ومؤثرين"], s:[{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}] },
  ],
  roles: {
    media_rel:{ emoji:"📢", name:"مسؤول علاقات إعلامية", desc:"تبني علاقات مع الصحفيين وتحقق تغطية لعملائك", detail:"تعمل مع الإعلام بشكل مستمر.", start:["تعلّم كتابة البيانات الصحفية وإدارة العلاقات الإعلامية","أتقن أدوات مراقبة الإعلام","تدرّب في وكالة علاقات عامة","ابنِ قاعدة بيانات من جهات الاتصال الإعلامية"] },
    corp_pr:{ emoji:"🏢", name:"متخصص علاقات عامة مؤسسية", desc:"تُدير سمعة المؤسسات والاتصال الاستراتيجي", detail:"تعمل داخل المؤسسات الكبرى.", start:["ادرس الاتصال المؤسسي والعلاقات العامة","تعلّم إدارة أصحاب المصلحة","تدرّب في قسم الاتصالات بشركة كبرى","أتقن كتابة التقارير السنوية والبيانات الرسمية"] },
    crisis_pr:{ emoji:"🚨", name:"متخصص إدارة أزمات", desc:"تحمي سمعة المؤسسات في أوقات الأزمات", detail:"تعمل تحت ضغط شديد.", start:["ادرس إدارة الأزمات وعلم النفس الاتصالي","تعلّم بروتوكولات الاستجابة للأزمات","تدرّب على محاكاة الأزمات","طوّر قدرتك على اتخاذ القرارات السريعة"] },
    personal_brand:{ emoji:"⭐", name:"خبير العلامة الشخصية", desc:"تبني الهوية العامة للمشاهير والمؤثرين", detail:"تعمل مع شخصيات عامة.", start:["تعلّم بناء الهوية الرقمية وإدارة السمعة","أتقن منصات التواصل الاجتماعي واستراتيجيات النمو","تدرّب مع وكلاء مواهب أو في وكالات رقمية","ابنِ محفظة عمل من العلامات الشخصية التي طورتها"] },
  },
  ui:{ l2back:"← العودة إلى الإعلام", title:"العلاقات العامة: ما التخصص؟" }
};

L2.pr_spec.he = {
  questions: [
    { t:"מה הצד שהכי מעניין אותך ביחסי ציבור?", o:["בניית קשרים עם עיתונאים וסיקור תקשורתי","ניהול תקשורת ארגונית ושמניהול מוניטין","ניהול משברי תקשורת","בניית מותגים אישיים למפורסמים ומשפיענים"], s:[{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}] },
    { t:"איזה כלי הכי תרצה לשלוט בו?", o:["מעקב תקשורתי, כתיבת הודעות לעיתונות","אסטרטגיית תקשורת ארגונית","פרוטוקולי ניהול משברים","בניית נוכחות דיגיטלית וניהול תדמית"], s:[{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}] },
    { t:"איזה תוצאה הכי ממלאת אותך סיפוק?", o:["סיקור תקשורתי רחב לגורמי התקשורת הגדולים","שיפור ניכר במוניטין ארגון לאחר קמפיין","ניהול משבר מוצלח שהציל מוניטין חברה","מפורסם שהופך לקול משפיע בתחומו"], s:[{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}] },
    { t:"איפה אתה מעדיף לעבוד?", o:["בסוכנות יחסי ציבור עם לקוחות מגוונים","במחלקת תקשורת של מוסד גדול","בצוות משברים מיוחד","עצמאי עם לקוחות מפורסמים"], s:[{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}] },
    { t:"איזה משימה הכי קרובה ללב שלך?", o:["כתיבת הודעה לעיתונות להשקת מוצר","פיתוח אסטרטגיית תקשורת ארוכת טווח","התמודדות עם עיתונאים במשבר פתאומי","תכנון תדמית למשפיען שרוצה להתרחב"], s:[{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}] },
    { t:"איפה אתה רואה את עצמך עוד 10 שנים?", o:["מנהל סוכנות יחסי ציבור","מנהל תקשורת בחברה גלובלית","מומחה ניהול משברים","סוכן כוכבים המנהל תדמית"], s:[{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}] },
  ],
  roles: {
    media_rel:{ emoji:"📢", name:"איש קשרי תקשורת", desc:"אתה בונה קשרים עם עיתונאים", detail:"אתה עובד עם התקשורת.", start:["למד כתיבת הודעות לעיתונות","שלוט בכלי מעקב תקשורתי","התמחה בסוכנות יחסי ציבור","בנה מאגר אנשי קשר תקשורתיים"] },
    corp_pr:{ emoji:"🏢", name:"יחסי ציבור ארגוניים", desc:"אתה מנהל מוניטין מוסדות", detail:"אתה עובד בתוך מוסדות גדולים.", start:["למד תקשורת ארגונית","למד ניהול בעלי עניין","התמחה במחלקת תקשורת","שלוט בכתיבת דוחות שנתיים"] },
    crisis_pr:{ emoji:"🚨", name:"מומחה ניהול משברים", desc:"אתה מגן על מוניטין בעיתות משבר", detail:"אתה עובד תחת לחץ.", start:["למד ניהול משברים","למד פרוטוקולי תגובה","התמחה בסימולציות משבר","פתח יכולת קבלת החלטות מהירה"] },
    personal_brand:{ emoji:"⭐", name:"מומחה מיתוג אישי", desc:"אתה בונה זהות ציבורית למפורסמים", detail:"אתה עובד עם דמויות ציבוריות.", start:["למד בניית זהות דיגיטלית","שלוט ברשתות חברתיות","התמחה עם סוכני כישרונות","בנה תיק מותגים שפיתחת"] },
  },
  ui:{ l2back:"← חזרה לתקשורת", title:"יחסי ציבור: איזה התמחות?" }
};

L2.pr_spec.zh = {
  questions: [
    {t:'公关工作中什么最吸引你？', o:['媒体关系——与记者合作，让品牌获得真实的媒体曝光','企业公关——塑造和维护企业的整体形象','危机公关——在最困难的时刻保护品牌的声誉','个人品牌——帮助领导者和名人建立强大的个人影响力'], s:[{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]},
    {t:'你最想精通哪个技能？', o:['媒体名单管理、新闻稿写作和记者关系维护','年度品牌传播规划和整合营销传播','危机情景演练、舆情监控和声誉恢复策略','个人定位设计、内容策略和媒体培训'], s:[{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]},
    {t:'什么成果最让你有成就感？', o:['你的新闻稿被10家主流媒体转载','品牌形象调研显示公众好感度提升了20%','你在48小时内帮助品牌平息了一场舆情危机','你辅导的CEO成为行业内最有影响力的意见领袖'], s:[{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]},
    {t:'你更喜欢哪种工作？', o:['维护媒体联系，推送新闻，组织新闻发布会','制定品牌传播战略，监督执行，评估效果','24小时监控舆情，快速制定应对策略','与客户深度协作，设计他们的个人形象和内容']  , s:[{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]},
    {t:'你会选择哪个项目？', o:['为一款新产品策划全国媒体发布活动','为某500强企业制定年度品牌传播计划','为某企业处理一次产品质量引发的舆情危机','帮助一位科技创业者在行业中建立权威声音'], s:[{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]},
    {t:'10年后你在哪里？', o:['顶级公关公司的媒体关系总监','500强企业的全球传播副总裁','危机管理咨询公司的合伙人','创立一家专注科技行业的公关公司'], s:[{media_rel:3},{corp_pr:3},{crisis_pr:3},{personal_brand:3}]}
  ],
  roles: {
    media_rel: {emoji:'📰', name:'媒体关系专家', desc:'与记者和编辑建立信任关系，让品牌获得真实、有价值的媒体曝光', detail:'你是品牌和媒体之间的桥梁。你了解记者在找什么样的故事，你写的新闻稿让编辑愿意刊发，你维护的媒体关系让品牌在需要时总能发出声音。', start:['学习新闻稿写作——让记者愿意刊发的格式和角度','研究目标媒体的报道风格和关注话题','学习如何用CisionPoint等工具管理媒体名单','阅读《媒体关系实务》——了解记者视角']},
    corp_pr: {emoji:'🏢', name:'企业公关经理', desc:'制定和执行整合传播策略，塑造企业在公众心中的形象', detail:'你管理着公司最重要的无形资产——声誉。你制定年度传播计划，协调内外部传播活动，确保公司每一次公众亮相都与品牌战略一致。', start:['学习整合营销传播（IMC）框架','了解品牌传播效果评估——AVE、媒体监测','掌握内容营销和社交媒体传播','研究经典企业传播案例——苹果、华为的品牌策略']},
    crisis_pr: {emoji:'⚡', name:'危机公关专家', desc:'在品牌面临舆情危机时快速响应，保护和修复企业声誉', detail:'你在压力最大的时刻才真正发挥价值。你快速评估危机性质，制定应对策略，起草声明，协调内外部沟通，并在危机过后帮助品牌修复形象。', start:['研究经典危机公关案例——好的和坏的都要学','学习危机传播理论——情境危机传播理论（SCCT）','掌握舆情监控工具——清博、新榜','练习危机声明写作——如何在短时间内写出有力的回应']},
    personal_brand: {emoji:'⭐', name:'个人品牌顾问', desc:'帮助高管、创业者和公众人物建立清晰、有力的个人品牌', detail:'你为个人打造的是他们的"人格IP"。你帮助客户找到自己的定位和独特声音，设计内容策略，辅导媒体采访，让他们成为所在领域最具影响力的声音之一。', start:['学习个人品牌定位框架——如何找到独特价值主张','了解LinkedIn和微博等平台的算法和内容规律','掌握媒体培训技巧——如何辅导客户应对媒体采访','研究成功的个人品牌案例——他们如何建立影响力']}
  },
  ui: {l2back:'← 返回公关', title:'公共关系：选择你的专业方向'}
};
