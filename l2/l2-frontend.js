// ─── L2 Test: Frontend ─────────────────────────────────────────────────
// Frontend — Roles: css | react | fullstack | mobile
// Add a new language: L2.frontend.xx = { questions:[...], roles:{...} }

L2.frontend.ru = {
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
  };

L2.frontend.en = {
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
  };

L2.frontend.de = {
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
  };

L2.frontend.fr = {
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
  };

L2.frontend.es = {
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
  };

L2.frontend.pt = {
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
  };

L2.frontend.ar = {
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
  };

L2.frontend.he = {
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
  };
L2.frontend.zh = {
  questions: [
    { t:'前端开发中什么最吸引你？', o:['HTML/CSS布局——让设计在浏览器中完美呈现','JavaScript和框架——React、Vue、Angular','性能优化——核心指标、懒加载、代码分割','UI动画和微交互——让界面活起来'], s:[{layout:3},{frameworks:3},{performance:3},{animation:3}] },
    { t:'你最想掌握哪个工具或技术？', o:['CSS Grid、Flexbox和现代布局技术','React生态系统——Hooks、Context、Next.js','Webpack、Vite构建工具和CI/CD流水线','GSAP、Framer Motion和Web动画API'], s:[{layout:3},{frameworks:3},{performance:3},{animation:3}] },
    { t:'工作的哪个成果对你最重要？', o:['完美实现了设计师的每一个像素','新功能运行顺畅，用户反馈积极','页面加载速度从3秒降到0.8秒','用户盯着界面看，感觉很精致'], s:[{layout:3},{frameworks:3},{performance:3},{animation:3}] },
    { t:'在团队中你更喜欢做什么？', o:['把设计稿变成精准的HTML/CSS代码','构建可复用的React/Vue组件','优化Bundle大小和渲染性能','制作令人印象深刻的动画和过渡效果'], s:[{layout:3},{frameworks:3},{performance:3},{animation:3}] },
    { t:'你会选择哪个项目？', o:['为设计师最喜欢的作品集网站做布局','用React搭建企业级应用','让现有网站的Lighthouse分数达到100','为产品做一个令人惊叹的登陆页动画'], s:[{layout:3},{frameworks:3},{performance:3},{animation:3}] },
    { t:'10年后你看到自己在哪里？', o:['顶级机构的资深HTML/CSS专家','大型产品团队的React架构师','专注核心性能指标的前端性能工程师','知名互联网公司的创意技术总监'], s:[{layout:3},{frameworks:3},{performance:3},{animation:3}] }
  ],
  roles: {
    layout: { emoji:'🎨', name:'布局与样式专家', desc:'精通CSS，将任何设计转化为完美的浏览器界面', detail:'你是CSS大师——精通Grid、Flexbox和现代布局。你实现复杂的响应式设计，确保跨浏览器兼容性，并与设计师密切合作将创意变为现实。', start:['掌握CSS Grid——css-tricks.com/snippets/css/complete-guide-grid/','学习BEM方法论——整洁CSS的行业标准','完成Frontend Mentor挑战——真实布局练习','在不同浏览器和设备上测试你的作品'] },
    frameworks: { emoji:'⚛️', name:'框架专家', desc:'用React或Vue构建复杂应用，知道每个架构决策背后的原因', detail:'你是现代JavaScript框架专家。你设计组件架构，管理状态，集成API，并确保应用可扩展。你的代码既清晰又高效。', start:['从官方React文档开始——react.dev','学习状态管理——useState、useContext、Redux Toolkit','掌握Next.js——SSR和静态生成的标准','在GitHub上做一个真实项目'] },
    performance: { emoji:'⚡', name:'性能工程师', desc:'让网站以最快速度工作——优化指标、减少代码、提升用户体验', detail:'你深入研究Core Web Vitals、bundle分析和渲染优化。你的工作有可见的商业价值——每提速1秒，转化率就会提升。', start:['学习Chrome DevTools——性能面板和网络分析','掌握Lighthouse和Web Vitals指标','学习懒加载、代码分割和图片优化技术','阅读web.dev/performance——谷歌的性能指南'] },
    animation: { emoji:'✨', name:'动画专家', desc:'创造让用户着迷、产品脱颖而出的流畅动画', detail:'你在界面与情感之间架起桥梁。你使用GSAP、CSS动画和WebGL创造引人入胜的体验。动画既是艺术，也是技术。', start:['从CSS过渡和关键帧动画开始','学习GSAP——业界最强大的动画库','探索Framer Motion——React动画生态系统','研究awwwards.com上的优秀案例'] }
  },
  ui: { l2back:'← 返回前端', title:'前端开发：选择你的专业方向' }
};
