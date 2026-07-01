// ─── L2 Test: Gamedev ─────────────────────────────────────────────────
// Gamedev — Roles: unity | unreal | indie | designer
// Add a new language: L2.gamedev.xx = { questions:[...], roles:{...} }

L2.gamedev.ru = {
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
  };

L2.gamedev.en = {
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
  };

L2.gamedev.de = {questions:[
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
  }};

L2.gamedev.fr = {questions:[
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
  }};

L2.gamedev.es = {questions:[
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
  }};

L2.gamedev.pt = {questions:[
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
  }};

L2.gamedev.ar = {questions:[
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
  }};

L2.gamedev.he = {
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
  };

L2.gamedev.zh = {
  questions: [
    { t:'游戏开发中什么最吸引你？', o:['游戏编程——核心机制、物理、AI逻辑','游戏设计——关卡、系统设计和游戏感','3D图形——渲染、着色器、视觉优化','游戏服务端——多人联机、匹配、后端'], s:[{gameplay_prog:3},{game_design:3},{graphics:3},{online:3}] },
    { t:'你想专注哪个方向？', o:['Unity或Unreal Engine的游戏逻辑','关卡设计工具和游戏平衡','HLSL/GLSL着色器和渲染管线','后端服务器和实时网络协议'], s:[{gameplay_prog:3},{game_design:3},{graphics:3},{online:3}] },
    { t:'什么成就让你最骄傲？', o:['实现了手感极好的战斗系统','设计了玩家愿意反复游玩的关卡','让游戏画面提升了一个档次','让200人同时联机不卡顿'], s:[{gameplay_prog:3},{game_design:3},{graphics:3},{online:3}] },
    { t:'你最喜欢哪种工作内容？', o:['为新机制写代码并调整数值','在编辑器中搭关卡和测试手感','研究着色器并优化渲染性能','配置服务器并处理网络同步'], s:[{gameplay_prog:3},{game_design:3},{graphics:3},{online:3}] },
    { t:'你的理想项目是？', o:['为独立游戏实现完整的战斗系统','从头设计一款策略游戏的核心关卡','用自定义着色器做一个艺术风格化项目','为多人FPS游戏做服务端架构'], s:[{gameplay_prog:3},{game_design:3},{graphics:3},{online:3}] },
    { t:'10年后你在哪里？', o:['知名工作室的首席游戏程序员','独立游戏工作室的创始人','专注AAA游戏的技术图形总监','网易/腾讯量级游戏的服务端架构师'], s:[{gameplay_prog:3},{game_design:3},{graphics:3},{online:3}] }
  ],
  roles: {
    gameplay_prog: { emoji:'🎮', name:'游戏逻辑工程师', desc:'实现让游戏好玩的核心机制——战斗、物理、AI', detail:'你让游戏"动起来"。你实现角色控制器、战斗系统、敌人AI和物理交互。手感好不好，很大程度上取决于你的工作质量。', start:['学习Unity或Unreal Engine基础','掌握C#（Unity）或C++（Unreal）','研究《游戏编程模式》这本书','做一个完整的小游戏——哪怕是Flappy Bird'] },
    game_design: { emoji:'🗺️', name:'关卡/游戏设计师', desc:'设计让玩家沉浸其中、欲罢不能的游戏体验', detail:'你是游戏的"架构师"。你设计关卡、任务、经济系统和难度曲线。你需要理解玩家心理，知道什么让游戏好玩。', start:['研究经典关卡设计——《黑暗之魂》《塞尔达》','学习使用引擎的关卡编辑器','阅读《游戏设计艺术》——Jesse Schell','记录你玩游戏时的设计分析'] },
    graphics: { emoji:'✨', name:'图形技术工程师', desc:'让游戏画面令人惊叹——着色器、渲染、视觉优化', detail:'你让像素变成艺术。你编写自定义着色器，优化渲染管线，实现全局光照和后处理效果。这是技术与艺术的完美融合。', start:['学习GLSL/HLSL着色器基础','在Shader Graph（Unity）或Material Editor（Unreal）中实践','研究ShaderToy上的案例','学习实时渲染技术——阴影、PBR材质'] },
    online: { emoji:'🌐', name:'网络/服务端工程师', desc:'让成千上万玩家实时一起玩——无延迟、无作弊', detail:'你解决最难的技术问题——网络同步、延迟补偿和反作弊。你的工作让多人游戏成为可能。', start:['学习UDP和TCP网络协议基础','研究Photon SDK或Mirror（Unity）','了解游戏服务器架构——GameLift、PlayFab','实践：做一个简单的多人游戏demo'] }
  },
  ui: { l2back:'← 返回游戏开发', title:'游戏开发：选择你的专业方向' }
};
