// ─── L2 Test: Design ─────────────────────────────────────────────────
// Design — Roles: ui | ux | motion | product
// Add a new language: L2.design.xx = { questions:[...], roles:{...} }

L2.design.ru = {
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
  };

L2.design.en = {
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
  };

L2.design.de = {
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
  };

L2.design.fr = {
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
  };

L2.design.es = {
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
  };

L2.design.pt = {
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
  };

L2.design.ar = {
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
  };

L2.design.he = {
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
  };

L2.design.zh = {
  questions: [
    { t:'UI/UX设计中什么最吸引你？', o:['用户研究——访谈、可用性测试、分析数据','产品设计——线框图、用户流程、交互设计','视觉设计——颜色、字体、精美的UI','设计系统——组件库和设计标准'], s:[{ux_research:3},{product_design:3},{visual:3},{design_sys:3}] },
    { t:'你最想掌握哪个工具？', o:['Maze、Hotjar用户行为分析工具','Figma原型和交互设计','Figma视觉组件和设计规范','Figma变量、Token Studio和设计令牌'], s:[{ux_research:3},{product_design:3},{visual:3},{design_sys:3}] },
    { t:'工作的哪个成果最让你满意？', o:['用户测试揭示了关键的可用性问题','新功能获得了积极的用户反馈','设计让产品看起来一流','整个产品团队开始使用你的组件库'], s:[{ux_research:3},{product_design:3},{visual:3},{design_sys:3}] },
    { t:'你更倾向于花时间做什么？', o:['采访用户并分析他们的行为','在Figma中画线框图和用户流程','精心打磨颜色、间距和每个细节','构建可复用的组件并完善文档'], s:[{ux_research:3},{product_design:3},{visual:3},{design_sys:3}] },
    { t:'你会选择哪个项目？', o:['对应用做完整的UX审计','为新功能设计用户流程','完全重新设计产品的视觉语言','为10个产品团队构建设计系统'], s:[{ux_research:3},{product_design:3},{visual:3},{design_sys:3}] },
    { t:'10年后你看到自己在哪里？', o:['用户研究负责人','顶级产品公司的产品设计总监','品牌或数字机构的首席视觉设计师','大型科技公司的设计系统负责人'], s:[{ux_research:3},{product_design:3},{visual:3},{design_sys:3}] }
  ],
  roles: {
    ux_research: { emoji:'🔍', name:'UX研究员', desc:'研究用户行为，用真实数据指导设计决策', detail:'你是用户的代言人。你进行访谈、可用性测试和数据分析，将发现转化为清晰的建议。没有你，设计就只是猜测。', start:['学习定性研究方法——用户访谈和观察','掌握Maze和Hotjar等测试工具','阅读史蒂夫·克鲁格的《点石成金》','在Behance上建立研究案例集'] },
    product_design: { emoji:'📐', name:'产品设计师', desc:'设计解决真实用户问题的完整交互体验', detail:'你在用户需求和商业目标之间建立桥梁。你画线框图、做原型并测试解决方案。你与PM和开发紧密合作。', start:['掌握Figma——组件、自动布局、原型','学习设计思维流程——同理心到测试','研究优秀产品的设计——拆解Notion、Linear的设计','建立3-5个展示你解决问题能力的作品集'] },
    visual: { emoji:'🎨', name:'视觉设计师', desc:'让产品看起来精美、一致且令人难忘', detail:'你对细节有近乎苛刻的追求。你的工作让用户在第一眼就爱上产品。你精通色彩理论、字体排版和设计构图。', start:['学习字体排版和色彩理论基础','研究Dribbble和Awwwards上的优秀视觉设计','掌握Figma高级功能——变量、样式库','建立一个展示你视觉风格的作品集'] },
    design_sys: { emoji:'🧩', name:'设计系统工程师', desc:'构建连接设计和开发的组件库和设计语言', detail:'你让整个公司的产品保持一致性。你构建可复用组件，编写使用规范，并确保设计令牌在设计工具和代码库之间同步。', start:['研究优秀设计系统——Material Design、Ant Design、Atlassian','学习Figma变量和Token Studio','了解CSS-in-JS和Storybook的基础','阅读nathan.curti.us的设计系统资源'] }
  },
  ui: { l2back:'← 返回设计', title:'UI/UX设计：选择你的专业方向' }
};
