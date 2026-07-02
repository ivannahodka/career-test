// L2 test — QA Engineer (Tester)
// Roles: manual 🔍 | auto 🤖 | perf ⚡ | mobile 📱
// 6 questions × 8 languages

// ─── RU ──────────────────────────────────────────────────────────────────────
L2.qa.ru = {
  questions: [
    {
      t: 'Что тебе интереснее всего в тестировании?',
      o: [
        'Исследовать продукт и находить неочевидные баги вручную',
        'Писать автотесты, которые сами проверяют весь функционал',
        'Нагружать систему и искать узкие места производительности',
        'Тестировать мобильные приложения на реальных устройствах'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3}]
    },
    {
      t: 'Как ты находишь баг, который воспроизводится непредсказуемо?',
      o: [
        'Тщательно документирую шаги и ищу паттерн вручную',
        'Пишу тест, который перебирает все комбинации условий',
        'Анализирую нагрузку и ресурсы системы в момент сбоя',
        'Проверяю на разных устройствах, ОС и версиях приложения'
      ],
      s: [{manual:3},{auto:3},{perf:2,auto:1},{mobile:3}]
    },
    {
      t: 'Какой инструмент тебе ближе всего?',
      o: [
        'Jira + TestRail — описывать тест-кейсы и баг-репорты',
        'Playwright / Selenium / pytest — автоматизация',
        'JMeter / k6 / Gatling — нагрузочное тестирование',
        'Appium / XCTest / Espresso — мобильные тесты'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3,auto:1}]
    },
    {
      t: 'Что для тебя важнее в работе?',
      o: [
        'Найти максимум багов до релиза',
        'Покрыть весь функционал автотестами',
        'Убедиться, что система выдержит пиковую нагрузку',
        'Чтобы приложение работало идеально на любом телефоне'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3}]
    },
    {
      t: 'Как ты относишься к написанию кода?',
      o: [
        'Не нужно — я нахожу баги без программирования',
        'Обожаю писать код для автотестов',
        'Пишу скрипты для нагрузочных сценариев',
        'Немного кожу под конкретные мобильные тесты'
      ],
      s: [{manual:3},{auto:3,perf:1},{perf:3,auto:1},{mobile:2,manual:1}]
    },
    {
      t: 'Как ты предпочитаешь учиться?',
      o: [
        'Изучаю методологии тестирования и стандарты (ISTQB)',
        'Прохожу курсы по автоматизации тестирования',
        'Разбираю кейсы производительности крупных систем',
        'Тестирую реальные мобильные приложения на разных девайсах'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3}]
    }
  ],
  roles: {
    manual: {
      emoji: '🔍',
      name: 'Ручной QA',
      desc: 'Исследую продукт, составляю тест-кейсы и нахожу баги до того, как их увидят пользователи',
      detail: 'Ты составляешь тест-планы и тест-кейсы, проводишь исследовательское тестирование, пишешь чёткие баг-репорты. Инструменты: Jira, TestRail, Confluence, Postman.',
      start: ['ISTQB Foundation', 'Guru99 Testing', 'Postman'],
      startUrls: ['https://www.istqb.org/certifications/certified-tester-foundation-level','https://guru99.com/software-testing.html','https://postman.com']
    },
    auto: {
      emoji: '🤖',
      name: 'Automation QA',
      desc: 'Пишу автотесты, которые проверяют продукт быстрее и надёжнее, чем вручную',
      detail: 'Ты пишешь автотесты на Python/JS, интегрируешь их в CI/CD, следишь за стабильностью тест-сьюта. Инструменты: Playwright, Selenium, pytest, GitHub Actions.',
      start: ['Playwright Docs', 'pytest', 'Selenium WebDriver'],
      startUrls: ['https://playwright.dev/docs/intro','https://docs.pytest.org','https://selenium.dev/documentation']
    },
    perf: {
      emoji: '⚡',
      name: 'Performance QA',
      desc: 'Нагружаю системы и нахожу узкие места до того, как это сделают пользователи',
      detail: 'Ты пишешь сценарии нагрузочного тестирования, анализируешь метрики, находишь утечки памяти и медленные запросы. Инструменты: k6, JMeter, Gatling, Grafana.',
      start: ['k6 Docs', 'Apache JMeter', 'Gatling'],
      startUrls: ['https://k6.io/docs','https://jmeter.apache.org/usermanual/get-started.html','https://gatling.io/docs']
    },
    mobile: {
      emoji: '📱',
      name: 'Mobile QA',
      desc: 'Тестирую iOS и Android приложения на реальных устройствах и эмуляторах',
      detail: 'Ты тестируешь нативные и гибридные мобильные приложения, пишешь автотесты для iOS и Android. Инструменты: Appium, XCTest, Espresso, BrowserStack.',
      start: ['Appium Docs', 'BrowserStack', 'Android Testing'],
      startUrls: ['https://appium.io/docs/en/latest','https://browserstack.com','https://developer.android.com/training/testing/espresso']
    }
  }
};

// ─── EN ──────────────────────────────────────────────────────────────────────
L2.qa.en = {
  questions: [
    {
      t: 'What interests you most in software testing?',
      o: [
        'Exploring the product and finding non-obvious bugs manually',
        'Writing automated tests that check everything automatically',
        'Load-testing systems and finding performance bottlenecks',
        'Testing mobile apps on real devices'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3}]
    },
    {
      t: 'How do you hunt down a bug that only appears sometimes?',
      o: [
        'Document the steps carefully and look for a pattern manually',
        'Write a test that cycles through all conditions automatically',
        'Analyze system load and resource usage at the moment of failure',
        'Test on different devices, OS versions, and app versions'
      ],
      s: [{manual:3},{auto:3},{perf:2,auto:1},{mobile:3}]
    },
    {
      t: 'Which tool feels most natural to you?',
      o: [
        'Jira + TestRail — writing test cases and bug reports',
        'Playwright / Selenium / pytest — automation',
        'JMeter / k6 / Gatling — performance testing',
        'Appium / XCTest / Espresso — mobile tests'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3,auto:1}]
    },
    {
      t: 'What matters most to you at work?',
      o: [
        'Finding as many bugs as possible before release',
        'Covering all functionality with automated tests',
        'Making sure the system handles peak load',
        'The app working flawlessly on any phone'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3}]
    },
    {
      t: 'How do you feel about writing code?',
      o: [
        'I don\'t need to code — I find bugs without it',
        'I love writing code for automated tests',
        'I write scripts for performance test scenarios',
        'I write a bit of code for specific mobile tests'
      ],
      s: [{manual:3},{auto:3,perf:1},{perf:3,auto:1},{mobile:2,manual:1}]
    },
    {
      t: 'How do you prefer to learn?',
      o: [
        'Studying testing methodologies and standards (ISTQB)',
        'Taking automation testing courses',
        'Analyzing performance case studies from large systems',
        'Testing real mobile apps on different devices'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3}]
    }
  ],
  roles: {
    manual: {
      emoji: '🔍',
      name: 'Manual QA Engineer',
      desc: 'I explore products, write test cases, and find bugs before users do',
      detail: 'You create test plans and test cases, run exploratory testing, and write clear bug reports. Tools: Jira, TestRail, Confluence, Postman.',
      start: ['ISTQB Foundation', 'Guru99 Testing', 'Postman'],
      startUrls: ['https://www.istqb.org/certifications/certified-tester-foundation-level','https://guru99.com/software-testing.html','https://postman.com']
    },
    auto: {
      emoji: '🤖',
      name: 'Automation QA Engineer',
      desc: 'I write automated tests that verify the product faster and more reliably than manual testing',
      detail: 'You write automated tests in Python/JS, integrate them into CI/CD, and maintain a stable test suite. Tools: Playwright, Selenium, pytest, GitHub Actions.',
      start: ['Playwright Docs', 'pytest', 'Selenium WebDriver'],
      startUrls: ['https://playwright.dev/docs/intro','https://docs.pytest.org','https://selenium.dev/documentation']
    },
    perf: {
      emoji: '⚡',
      name: 'Performance QA Engineer',
      desc: 'I stress-test systems and find bottlenecks before real users do',
      detail: 'You write load test scenarios, analyze metrics, and identify memory leaks and slow queries. Tools: k6, JMeter, Gatling, Grafana.',
      start: ['k6 Docs', 'Apache JMeter', 'Gatling'],
      startUrls: ['https://k6.io/docs','https://jmeter.apache.org/usermanual/get-started.html','https://gatling.io/docs']
    },
    mobile: {
      emoji: '📱',
      name: 'Mobile QA Engineer',
      desc: 'I test iOS and Android apps on real devices and emulators',
      detail: 'You test native and hybrid mobile apps and write automated tests for iOS and Android. Tools: Appium, XCTest, Espresso, BrowserStack.',
      start: ['Appium Docs', 'BrowserStack', 'Android Testing'],
      startUrls: ['https://appium.io/docs/en/latest','https://browserstack.com','https://developer.android.com/training/testing/espresso']
    }
  }
};

// ─── DE ──────────────────────────────────────────────────────────────────────
L2.qa.de = {
  questions: [
    {
      t: 'Was interessiert dich am meisten beim Softwaretesten?',
      o: [
        'Das Produkt erkunden und nicht offensichtliche Bugs manuell finden',
        'Automatisierte Tests schreiben, die alles selbst prüfen',
        'Systeme unter Last testen und Performance-Engpässe finden',
        'Mobile Apps auf echten Geräten testen'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3}]
    },
    {
      t: 'Wie jagst du einen Bug, der nur manchmal auftritt?',
      o: [
        'Schritte sorgfältig dokumentieren und manuell nach einem Muster suchen',
        'Einen Test schreiben, der alle Bedingungen automatisch durchläuft',
        'Systemlast und Ressourcen im Fehlermoment analysieren',
        'Auf verschiedenen Geräten, OS-Versionen und App-Versionen testen'
      ],
      s: [{manual:3},{auto:3},{perf:2,auto:1},{mobile:3}]
    },
    {
      t: 'Welches Tool fühlt sich für dich am natürlichsten an?',
      o: [
        'Jira + TestRail — Testfälle und Bug-Reports schreiben',
        'Playwright / Selenium / pytest — Automatisierung',
        'JMeter / k6 / Gatling — Lasttests',
        'Appium / XCTest / Espresso — Mobile-Tests'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3,auto:1}]
    },
    {
      t: 'Was ist dir bei der Arbeit am wichtigsten?',
      o: [
        'So viele Bugs wie möglich vor dem Release finden',
        'Den gesamten Funktionsumfang mit automatisierten Tests abdecken',
        'Sicherstellen, dass das System Spitzenlast bewältigt',
        'Die App funktioniert auf jedem Smartphone einwandfrei'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3}]
    },
    {
      t: 'Wie stehst du zum Coden?',
      o: [
        'Ich brauche keinen Code — ich finde Bugs ohne Programmierung',
        'Ich schreibe gerne Code für automatisierte Tests',
        'Ich schreibe Skripte für Lasttest-Szenarien',
        'Ich schreibe etwas Code für spezifische Mobile-Tests'
      ],
      s: [{manual:3},{auto:3,perf:1},{perf:3,auto:1},{mobile:2,manual:1}]
    },
    {
      t: 'Wie lernst du am liebsten?',
      o: [
        'Testmethoden und -standards studieren (ISTQB)',
        'Kurse zur Testautomatisierung belegen',
        'Performance-Fallstudien großer Systeme analysieren',
        'Echte mobile Apps auf verschiedenen Geräten testen'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3}]
    }
  ],
  roles: {
    manual: {
      emoji: '🔍',
      name: 'Manueller QA-Ingenieur',
      desc: 'Ich erkunde Produkte, schreibe Testfälle und finde Bugs bevor Nutzer sie sehen',
      detail: 'Du erstellst Testpläne und Testfälle, führst explorative Tests durch und schreibst klare Bug-Reports. Tools: Jira, TestRail, Confluence, Postman.',
      start: ['ISTQB Foundation', 'Guru99 Testing', 'Postman'],
      startUrls: ['https://www.istqb.org/certifications/certified-tester-foundation-level','https://guru99.com/software-testing.html','https://postman.com']
    },
    auto: {
      emoji: '🤖',
      name: 'Automation QA Ingenieur',
      desc: 'Ich schreibe automatisierte Tests, die das Produkt schneller und zuverlässiger prüfen',
      detail: 'Du schreibst automatisierte Tests in Python/JS, integrierst sie in CI/CD und pflegst eine stabile Test-Suite. Tools: Playwright, Selenium, pytest, GitHub Actions.',
      start: ['Playwright Docs', 'pytest', 'Selenium WebDriver'],
      startUrls: ['https://playwright.dev/docs/intro','https://docs.pytest.org','https://selenium.dev/documentation']
    },
    perf: {
      emoji: '⚡',
      name: 'Performance QA Ingenieur',
      desc: 'Ich teste Systeme unter Last und finde Engpässe bevor echte Nutzer es tun',
      detail: 'Du schreibst Lasttestszenarien, analysierst Metriken und findest Memory Leaks und langsame Abfragen. Tools: k6, JMeter, Gatling, Grafana.',
      start: ['k6 Docs', 'Apache JMeter', 'Gatling'],
      startUrls: ['https://k6.io/docs','https://jmeter.apache.org/usermanual/get-started.html','https://gatling.io/docs']
    },
    mobile: {
      emoji: '📱',
      name: 'Mobile QA Ingenieur',
      desc: 'Ich teste iOS- und Android-Apps auf echten Geräten und Emulatoren',
      detail: 'Du testest native und hybride mobile Apps und schreibst automatisierte Tests für iOS und Android. Tools: Appium, XCTest, Espresso, BrowserStack.',
      start: ['Appium Docs', 'BrowserStack', 'Android Testing'],
      startUrls: ['https://appium.io/docs/en/latest','https://browserstack.com','https://developer.android.com/training/testing/espresso']
    }
  }
};

// ─── FR ──────────────────────────────────────────────────────────────────────
L2.qa.fr = {
  questions: [
    {
      t: 'Qu\'est-ce qui t\'intéresse le plus dans les tests logiciels?',
      o: [
        'Explorer le produit et trouver des bugs non évidents manuellement',
        'Écrire des tests automatisés qui vérifient tout par eux-mêmes',
        'Tester les systèmes sous charge et trouver les goulots d\'étranglement',
        'Tester des applications mobiles sur de vrais appareils'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3}]
    },
    {
      t: 'Comment trouves-tu un bug qui n\'apparaît que parfois?',
      o: [
        'Documenter soigneusement les étapes et chercher un pattern manuellement',
        'Écrire un test qui passe en revue toutes les conditions automatiquement',
        'Analyser la charge système et les ressources au moment de la défaillance',
        'Tester sur différents appareils, versions d\'OS et de l\'application'
      ],
      s: [{manual:3},{auto:3},{perf:2,auto:1},{mobile:3}]
    },
    {
      t: 'Quel outil te semble le plus naturel?',
      o: [
        'Jira + TestRail — écrire des cas de test et des rapports de bugs',
        'Playwright / Selenium / pytest — automatisation',
        'JMeter / k6 / Gatling — tests de charge',
        'Appium / XCTest / Espresso — tests mobiles'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3,auto:1}]
    },
    {
      t: 'Qu\'est-ce qui compte le plus pour toi au travail?',
      o: [
        'Trouver le maximum de bugs avant la mise en production',
        'Couvrir toutes les fonctionnalités avec des tests automatisés',
        'S\'assurer que le système supporte les pics de charge',
        'Que l\'application fonctionne parfaitement sur n\'importe quel téléphone'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3}]
    },
    {
      t: 'Quel est ton rapport avec le code?',
      o: [
        'Je n\'en ai pas besoin — je trouve des bugs sans programmer',
        'J\'adore écrire du code pour les tests automatisés',
        'J\'écris des scripts pour les scénarios de test de charge',
        'J\'écris un peu de code pour des tests mobiles spécifiques'
      ],
      s: [{manual:3},{auto:3,perf:1},{perf:3,auto:1},{mobile:2,manual:1}]
    },
    {
      t: 'Comment préfères-tu apprendre?',
      o: [
        'Étudier les méthodologies de test et les normes (ISTQB)',
        'Suivre des cours d\'automatisation des tests',
        'Analyser des études de cas de performance de grands systèmes',
        'Tester de vraies applications mobiles sur différents appareils'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3}]
    }
  ],
  roles: {
    manual: {
      emoji: '🔍',
      name: 'Ingénieur QA Manuel',
      desc: 'J\'explore les produits, écris des cas de test et trouve les bugs avant les utilisateurs',
      detail: 'Tu crées des plans de test et des cas de test, effectues des tests exploratoires et écris des rapports de bugs clairs. Outils: Jira, TestRail, Confluence, Postman.',
      start: ['ISTQB Foundation', 'Guru99 Testing', 'Postman'],
      startUrls: ['https://www.istqb.org/certifications/certified-tester-foundation-level','https://guru99.com/software-testing.html','https://postman.com']
    },
    auto: {
      emoji: '🤖',
      name: 'Ingénieur QA Automation',
      desc: 'J\'écris des tests automatisés qui vérifient le produit plus vite et plus fiablement',
      detail: 'Tu écris des tests automatisés en Python/JS, les intègres dans CI/CD et maintiens une suite de tests stable. Outils: Playwright, Selenium, pytest, GitHub Actions.',
      start: ['Playwright Docs', 'pytest', 'Selenium WebDriver'],
      startUrls: ['https://playwright.dev/docs/intro','https://docs.pytest.org','https://selenium.dev/documentation']
    },
    perf: {
      emoji: '⚡',
      name: 'Ingénieur QA Performance',
      desc: 'Je teste les systèmes sous charge et trouve les goulots d\'étranglement avant les vrais utilisateurs',
      detail: 'Tu écris des scénarios de test de charge, analyses les métriques et trouves les fuites mémoire et les requêtes lentes. Outils: k6, JMeter, Gatling, Grafana.',
      start: ['k6 Docs', 'Apache JMeter', 'Gatling'],
      startUrls: ['https://k6.io/docs','https://jmeter.apache.org/usermanual/get-started.html','https://gatling.io/docs']
    },
    mobile: {
      emoji: '📱',
      name: 'Ingénieur QA Mobile',
      desc: 'Je teste les applications iOS et Android sur de vrais appareils et émulateurs',
      detail: 'Tu testes des applications mobiles natives et hybrides et écris des tests automatisés pour iOS et Android. Outils: Appium, XCTest, Espresso, BrowserStack.',
      start: ['Appium Docs', 'BrowserStack', 'Android Testing'],
      startUrls: ['https://appium.io/docs/en/latest','https://browserstack.com','https://developer.android.com/training/testing/espresso']
    }
  }
};

// ─── ES ──────────────────────────────────────────────────────────────────────
L2.qa.es = {
  questions: [
    {
      t: '¿Qué es lo que más te interesa en las pruebas de software?',
      o: [
        'Explorar el producto y encontrar bugs no obvios manualmente',
        'Escribir pruebas automatizadas que verifiquen todo por sí solas',
        'Hacer pruebas de carga y encontrar cuellos de botella de rendimiento',
        'Probar aplicaciones móviles en dispositivos reales'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3}]
    },
    {
      t: '¿Cómo encuentras un bug que solo aparece a veces?',
      o: [
        'Documento los pasos cuidadosamente y busco un patrón manualmente',
        'Escribo una prueba que recorre todas las condiciones automáticamente',
        'Analizo la carga del sistema y los recursos en el momento del fallo',
        'Pruebo en diferentes dispositivos, versiones de SO y de la app'
      ],
      s: [{manual:3},{auto:3},{perf:2,auto:1},{mobile:3}]
    },
    {
      t: '¿Qué herramienta te resulta más natural?',
      o: [
        'Jira + TestRail — escribir casos de prueba y reportes de bugs',
        'Playwright / Selenium / pytest — automatización',
        'JMeter / k6 / Gatling — pruebas de carga',
        'Appium / XCTest / Espresso — pruebas móviles'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3,auto:1}]
    },
    {
      t: '¿Qué es lo más importante para ti en el trabajo?',
      o: [
        'Encontrar el máximo de bugs antes del lanzamiento',
        'Cubrir toda la funcionalidad con pruebas automatizadas',
        'Asegurarse de que el sistema aguante la carga máxima',
        'Que la app funcione perfectamente en cualquier teléfono'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3}]
    },
    {
      t: '¿Cómo te relacionas con el código?',
      o: [
        'No lo necesito — encuentro bugs sin programar',
        'Me encanta escribir código para pruebas automatizadas',
        'Escribo scripts para escenarios de prueba de carga',
        'Escribo algo de código para pruebas móviles específicas'
      ],
      s: [{manual:3},{auto:3,perf:1},{perf:3,auto:1},{mobile:2,manual:1}]
    },
    {
      t: '¿Cómo prefieres aprender?',
      o: [
        'Estudiando metodologías de testing y estándares (ISTQB)',
        'Tomando cursos de automatización de pruebas',
        'Analizando casos de rendimiento de grandes sistemas',
        'Probando apps móviles reales en diferentes dispositivos'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3}]
    }
  ],
  roles: {
    manual: {
      emoji: '🔍',
      name: 'QA Manual',
      desc: 'Exploro productos, escribo casos de prueba y encuentro bugs antes que los usuarios',
      detail: 'Creas planes y casos de prueba, realizas pruebas exploratorias y escribes reportes de bugs claros. Herramientas: Jira, TestRail, Confluence, Postman.',
      start: ['ISTQB Foundation', 'Guru99 Testing', 'Postman'],
      startUrls: ['https://www.istqb.org/certifications/certified-tester-foundation-level','https://guru99.com/software-testing.html','https://postman.com']
    },
    auto: {
      emoji: '🤖',
      name: 'QA Automation',
      desc: 'Escribo pruebas automatizadas que verifican el producto más rápido y confiable que manualmente',
      detail: 'Escribes pruebas automatizadas en Python/JS, las integras en CI/CD y mantienes una suite de pruebas estable. Herramientas: Playwright, Selenium, pytest, GitHub Actions.',
      start: ['Playwright Docs', 'pytest', 'Selenium WebDriver'],
      startUrls: ['https://playwright.dev/docs/intro','https://docs.pytest.org','https://selenium.dev/documentation']
    },
    perf: {
      emoji: '⚡',
      name: 'QA de Rendimiento',
      desc: 'Hago pruebas de carga y encuentro cuellos de botella antes que los usuarios reales',
      detail: 'Escribes escenarios de prueba de carga, analizas métricas y encuentras fugas de memoria y consultas lentas. Herramientas: k6, JMeter, Gatling, Grafana.',
      start: ['k6 Docs', 'Apache JMeter', 'Gatling'],
      startUrls: ['https://k6.io/docs','https://jmeter.apache.org/usermanual/get-started.html','https://gatling.io/docs']
    },
    mobile: {
      emoji: '📱',
      name: 'QA Móvil',
      desc: 'Pruebo aplicaciones iOS y Android en dispositivos reales y emuladores',
      detail: 'Pruebas aplicaciones móviles nativas e híbridas y escribes pruebas automatizadas para iOS y Android. Herramientas: Appium, XCTest, Espresso, BrowserStack.',
      start: ['Appium Docs', 'BrowserStack', 'Android Testing'],
      startUrls: ['https://appium.io/docs/en/latest','https://browserstack.com','https://developer.android.com/training/testing/espresso']
    }
  }
};

// ─── PT ──────────────────────────────────────────────────────────────────────
L2.qa.pt = {
  questions: [
    {
      t: 'O que mais te interessa em testes de software?',
      o: [
        'Explorar o produto e encontrar bugs não óbvios manualmente',
        'Escrever testes automatizados que verificam tudo por si mesmos',
        'Fazer testes de carga e encontrar gargalos de desempenho',
        'Testar aplicações móveis em dispositivos reais'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3}]
    },
    {
      t: 'Como você encontra um bug que aparece apenas às vezes?',
      o: [
        'Documento os passos cuidadosamente e busco um padrão manualmente',
        'Escrevo um teste que percorre todas as condições automaticamente',
        'Analiso a carga do sistema e os recursos no momento da falha',
        'Testo em diferentes dispositivos, versões de SO e do aplicativo'
      ],
      s: [{manual:3},{auto:3},{perf:2,auto:1},{mobile:3}]
    },
    {
      t: 'Qual ferramenta parece mais natural para você?',
      o: [
        'Jira + TestRail — escrever casos de teste e relatórios de bugs',
        'Playwright / Selenium / pytest — automação',
        'JMeter / k6 / Gatling — testes de carga',
        'Appium / XCTest / Espresso — testes móveis'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3,auto:1}]
    },
    {
      t: 'O que mais importa para você no trabalho?',
      o: [
        'Encontrar o máximo de bugs antes do lançamento',
        'Cobrir toda a funcionalidade com testes automatizados',
        'Garantir que o sistema aguente carga de pico',
        'O aplicativo funcionar perfeitamente em qualquer celular'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3}]
    },
    {
      t: 'Como você se relaciona com código?',
      o: [
        'Não preciso — encontro bugs sem programar',
        'Adoro escrever código para testes automatizados',
        'Escrevo scripts para cenários de teste de carga',
        'Escrevo um pouco de código para testes móveis específicos'
      ],
      s: [{manual:3},{auto:3,perf:1},{perf:3,auto:1},{mobile:2,manual:1}]
    },
    {
      t: 'Como você prefere aprender?',
      o: [
        'Estudando metodologias de teste e padrões (ISTQB)',
        'Fazendo cursos de automação de testes',
        'Analisando casos de desempenho de grandes sistemas',
        'Testando apps móveis reais em diferentes dispositivos'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3}]
    }
  ],
  roles: {
    manual: {
      emoji: '🔍',
      name: 'QA Manual',
      desc: 'Exploro produtos, escrevo casos de teste e encontro bugs antes dos usuários',
      detail: 'Você cria planos e casos de teste, realiza testes exploratórios e escreve relatórios de bugs claros. Ferramentas: Jira, TestRail, Confluence, Postman.',
      start: ['ISTQB Foundation', 'Guru99 Testing', 'Postman'],
      startUrls: ['https://www.istqb.org/certifications/certified-tester-foundation-level','https://guru99.com/software-testing.html','https://postman.com']
    },
    auto: {
      emoji: '🤖',
      name: 'QA Automation',
      desc: 'Escrevo testes automatizados que verificam o produto mais rápido e confiável que manualmente',
      detail: 'Você escreve testes automatizados em Python/JS, os integra no CI/CD e mantém uma suite de testes estável. Ferramentas: Playwright, Selenium, pytest, GitHub Actions.',
      start: ['Playwright Docs', 'pytest', 'Selenium WebDriver'],
      startUrls: ['https://playwright.dev/docs/intro','https://docs.pytest.org','https://selenium.dev/documentation']
    },
    perf: {
      emoji: '⚡',
      name: 'QA de Performance',
      desc: 'Testo sistemas sob carga e encontro gargalos antes que os usuários reais o façam',
      detail: 'Você escreve cenários de teste de carga, analisa métricas e encontra vazamentos de memória e consultas lentas. Ferramentas: k6, JMeter, Gatling, Grafana.',
      start: ['k6 Docs', 'Apache JMeter', 'Gatling'],
      startUrls: ['https://k6.io/docs','https://jmeter.apache.org/usermanual/get-started.html','https://gatling.io/docs']
    },
    mobile: {
      emoji: '📱',
      name: 'QA Mobile',
      desc: 'Testo aplicações iOS e Android em dispositivos reais e emuladores',
      detail: 'Você testa aplicativos móveis nativos e híbridos e escreve testes automatizados para iOS e Android. Ferramentas: Appium, XCTest, Espresso, BrowserStack.',
      start: ['Appium Docs', 'BrowserStack', 'Android Testing'],
      startUrls: ['https://appium.io/docs/en/latest','https://browserstack.com','https://developer.android.com/training/testing/espresso']
    }
  }
};

// ─── AR ──────────────────────────────────────────────────────────────────────
L2.qa.ar = {
  questions: [
    {
      t: 'ما الذي يثير اهتمامك أكثر في اختبار البرمجيات؟',
      o: [
        'استكشاف المنتج وإيجاد الأخطاء غير الواضحة يدوياً',
        'كتابة اختبارات آلية تتحقق من كل شيء تلقائياً',
        'اختبار الأنظمة تحت الضغط وإيجاد اختناقات الأداء',
        'اختبار التطبيقات المحمولة على أجهزة حقيقية'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3}]
    },
    {
      t: 'كيف تجد خطأً يظهر أحياناً فقط؟',
      o: [
        'أوثق الخطوات بعناية وأبحث عن نمط يدوياً',
        'أكتب اختباراً يمر عبر جميع الحالات تلقائياً',
        'أحلل حمل النظام والموارد في لحظة الفشل',
        'أختبر على أجهزة مختلفة وإصدارات نظام التشغيل والتطبيق'
      ],
      s: [{manual:3},{auto:3},{perf:2,auto:1},{mobile:3}]
    },
    {
      t: 'أي أداة تشعر أنها الأكثر طبيعية بالنسبة لك؟',
      o: [
        'Jira + TestRail — كتابة حالات الاختبار وتقارير الأخطاء',
        'Playwright / Selenium / pytest — الأتمتة',
        'JMeter / k6 / Gatling — اختبارات الحمل',
        'Appium / XCTest / Espresso — اختبارات الموبايل'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3,auto:1}]
    },
    {
      t: 'ما الأهم بالنسبة لك في العمل؟',
      o: [
        'إيجاد أكبر عدد من الأخطاء قبل الإطلاق',
        'تغطية جميع الوظائف باختبارات آلية',
        'التأكد من أن النظام يتحمل الحمل الذروة',
        'عمل التطبيق بشكل مثالي على أي هاتف'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3}]
    },
    {
      t: 'ما علاقتك بكتابة الكود؟',
      o: [
        'لا أحتاجه — أجد الأخطاء بدون برمجة',
        'أحب كتابة الكود للاختبارات الآلية',
        'أكتب سكريبتات لسيناريوهات اختبار الحمل',
        'أكتب القليل من الكود لاختبارات الموبايل المحددة'
      ],
      s: [{manual:3},{auto:3,perf:1},{perf:3,auto:1},{mobile:2,manual:1}]
    },
    {
      t: 'كيف تفضل التعلم؟',
      o: [
        'دراسة منهجيات الاختبار والمعايير (ISTQB)',
        'أخذ دورات في أتمتة الاختبار',
        'تحليل حالات الأداء لأنظمة كبيرة',
        'اختبار تطبيقات الموبايل الحقيقية على أجهزة مختلفة'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3}]
    }
  ],
  roles: {
    manual: {
      emoji: '🔍',
      name: 'مهندس QA يدوي',
      desc: 'أستكشف المنتجات وأكتب حالات الاختبار وأجد الأخطاء قبل المستخدمين',
      detail: 'تنشئ خطط وحالات اختبار، تجري اختبارات استكشافية وتكتب تقارير أخطاء واضحة. الأدوات: Jira, TestRail, Confluence, Postman.',
      start: ['ISTQB Foundation', 'Guru99 Testing', 'Postman'],
      startUrls: ['https://www.istqb.org/certifications/certified-tester-foundation-level','https://guru99.com/software-testing.html','https://postman.com']
    },
    auto: {
      emoji: '🤖',
      name: 'مهندس QA أتمتة',
      desc: 'أكتب اختبارات آلية تتحقق من المنتج بشكل أسرع وأكثر موثوقية',
      detail: 'تكتب اختبارات آلية بـ Python/JS، تدمجها في CI/CD، وتحافظ على مجموعة اختبارات مستقرة. الأدوات: Playwright, Selenium, pytest, GitHub Actions.',
      start: ['Playwright Docs', 'pytest', 'Selenium WebDriver'],
      startUrls: ['https://playwright.dev/docs/intro','https://docs.pytest.org','https://selenium.dev/documentation']
    },
    perf: {
      emoji: '⚡',
      name: 'مهندس QA الأداء',
      desc: 'أختبر الأنظمة تحت الضغط وأجد الاختناقات قبل المستخدمين الحقيقيين',
      detail: 'تكتب سيناريوهات اختبار الحمل، تحلل المقاييس، وتجد تسريبات الذاكرة والاستعلامات البطيئة. الأدوات: k6, JMeter, Gatling, Grafana.',
      start: ['k6 Docs', 'Apache JMeter', 'Gatling'],
      startUrls: ['https://k6.io/docs','https://jmeter.apache.org/usermanual/get-started.html','https://gatling.io/docs']
    },
    mobile: {
      emoji: '📱',
      name: 'مهندس QA الموبايل',
      desc: 'أختبر تطبيقات iOS و Android على أجهزة حقيقية ومحاكيات',
      detail: 'تختبر التطبيقات المحمولة الأصلية والهجينة وتكتب اختبارات آلية لـ iOS و Android. الأدوات: Appium, XCTest, Espresso, BrowserStack.',
      start: ['Appium Docs', 'BrowserStack', 'Android Testing'],
      startUrls: ['https://appium.io/docs/en/latest','https://browserstack.com','https://developer.android.com/training/testing/espresso']
    }
  }
};

// ─── HE ──────────────────────────────────────────────────────────────────────
L2.qa.he = {
  questions: [
    {
      t: 'מה הכי מעניין אותך בבדיקות תוכנה?',
      o: [
        'לחקור את המוצר ולמצוא באגים לא ברורים ידנית',
        'לכתוב בדיקות אוטומטיות שבודקות הכל בעצמן',
        'לבצע בדיקות עומס ולמצוא צווארי בקבוק בביצועים',
        'לבדוק אפליקציות מובייל על מכשירים אמיתיים'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3}]
    },
    {
      t: 'איך אתה מוצא באג שמופיע רק לפעמים?',
      o: [
        'מתעד את הצעדים בקפידה ומחפש דפוס ידנית',
        'כותב בדיקה שעוברת על כל התנאים אוטומטית',
        'מנתח את עומס המערכת והמשאבים ברגע הכשל',
        'בודק על מכשירים שונים, גרסאות מערכת הפעלה ואפליקציה'
      ],
      s: [{manual:3},{auto:3},{perf:2,auto:1},{mobile:3}]
    },
    {
      t: 'איזה כלי הכי טבעי עבורך?',
      o: [
        'Jira + TestRail — לכתוב תרחישי בדיקה ודוחות באגים',
        'Playwright / Selenium / pytest — אוטומציה',
        'JMeter / k6 / Gatling — בדיקות עומס',
        'Appium / XCTest / Espresso — בדיקות מובייל'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3,auto:1}]
    },
    {
      t: 'מה הכי חשוב לך בעבודה?',
      o: [
        'למצוא כמה שיותר באגים לפני השחרור',
        'לכסות את כל הפונקציונליות בבדיקות אוטומטיות',
        'לוודא שהמערכת עומדת בעומס שיא',
        'שהאפליקציה תעבוד מושלם על כל טלפון'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3}]
    },
    {
      t: 'מה הקשר שלך לכתיבת קוד?',
      o: [
        'אני לא צריך — אני מוצא באגים בלי תכנות',
        'אני אוהב לכתוב קוד לבדיקות אוטומטיות',
        'אני כותב סקריפטים לתרחישי בדיקת עומס',
        'אני כותב קצת קוד לבדיקות מובייל ספציפיות'
      ],
      s: [{manual:3},{auto:3,perf:1},{perf:3,auto:1},{mobile:2,manual:1}]
    },
    {
      t: 'איך אתה מעדיף ללמוד?',
      o: [
        'לימוד מתודולוגיות בדיקה ותקנים (ISTQB)',
        'לקחת קורסים באוטומציית בדיקות',
        'ניתוח מקרי ביצועים של מערכות גדולות',
        'לבדוק אפליקציות מובייל אמיתיות על מכשירים שונים'
      ],
      s: [{manual:3},{auto:3},{perf:3},{mobile:3}]
    }
  ],
  roles: {
    manual: {
      emoji: '🔍',
      name: 'מהנדס QA ידני',
      desc: 'אני חוקר מוצרים, כותב תרחישי בדיקה ומוצא באגים לפני המשתמשים',
      detail: 'אתה יוצר תוכניות ותרחישי בדיקה, מבצע בדיקות חקרניות וכותב דוחות באגים ברורים. כלים: Jira, TestRail, Confluence, Postman.',
      start: ['ISTQB Foundation', 'Guru99 Testing', 'Postman'],
      startUrls: ['https://www.istqb.org/certifications/certified-tester-foundation-level','https://guru99.com/software-testing.html','https://postman.com']
    },
    auto: {
      emoji: '🤖',
      name: 'מהנדס QA אוטומציה',
      desc: 'אני כותב בדיקות אוטומטיות שמאמתות את המוצר מהר ואמין יותר מבדיקה ידנית',
      detail: 'אתה כותב בדיקות אוטומטיות ב-Python/JS, משלב אותן ב-CI/CD ומתחזק סט בדיקות יציב. כלים: Playwright, Selenium, pytest, GitHub Actions.',
      start: ['Playwright Docs', 'pytest', 'Selenium WebDriver'],
      startUrls: ['https://playwright.dev/docs/intro','https://docs.pytest.org','https://selenium.dev/documentation']
    },
    perf: {
      emoji: '⚡',
      name: 'מהנדס QA ביצועים',
      desc: 'אני בודק מערכות תחת עומס ומוצא צווארי בקבוק לפני המשתמשים האמיתיים',
      detail: 'אתה כותב תרחישי בדיקת עומס, מנתח מטריקות ומוצא דליפות זיכרון ושאילתות איטיות. כלים: k6, JMeter, Gatling, Grafana.',
      start: ['k6 Docs', 'Apache JMeter', 'Gatling'],
      startUrls: ['https://k6.io/docs','https://jmeter.apache.org/usermanual/get-started.html','https://gatling.io/docs']
    },
    mobile: {
      emoji: '📱',
      name: 'מהנדס QA מובייל',
      desc: 'אני בודק אפליקציות iOS ו-Android על מכשירים אמיתיים ואמולטורים',
      detail: 'אתה בודק אפליקציות מובייל נייטיב והיברידיות וכותב בדיקות אוטומטיות ל-iOS ו-Android. כלים: Appium, XCTest, Espresso, BrowserStack.',
      start: ['Appium Docs', 'BrowserStack', 'Android Testing'],
      startUrls: ['https://appium.io/docs/en/latest','https://browserstack.com','https://developer.android.com/training/testing/espresso']
    }
  }
};

L2.qa.zh = {
  questions: [
    { t:'QA测试中什么最吸引你？', o:['自动化测试——用代码测试代码','手动和探索性测试——寻找意外缺陷','性能测试——发现系统的极限','质量流程——建立质量体系和标准'], s:[{automation:3},{manual:3},{performance:3},{process:3}] },
    { t:'你最想精通哪个方向？', o:['Playwright或Selenium自动化框架','探索性测试技术和测试用例设计','JMeter或k6性能和压力测试','测试策略制定和质量流程优化'], s:[{automation:3},{manual:3},{performance:3},{process:3}] },
    { t:'什么工作成果最让你满意？', o:['自动化测试套件发现了发布前的一个严重Bug','你的测试覆盖了别人没想到的边界场景','压测发现了生产环境的性能瓶颈','新的测试流程让整体缺陷率下降了一半'], s:[{automation:3},{manual:3},{performance:3},{process:3}] },
    { t:'你更倾向于做什么？', o:['用Python或JavaScript编写自动化测试脚本','手动测试应用并记录详细的缺陷报告','分析性能数据并找出系统瓶颈','设计测试策略并推动团队执行'], s:[{automation:3},{manual:3},{performance:3},{process:3}] },
    { t:'你会选择哪个项目？', o:['为核心业务流程构建自动化回归测试','对新产品做全面的探索性测试','对高并发场景做压力测试','为团队制定质量保证规范'], s:[{automation:3},{manual:3},{performance:3},{process:3}] },
    { t:'10年后你在哪里？', o:['大型产品公司的测试自动化架构师','资深QA工程师，是团队中最懂产品的人','性能工程专家','质量工程总监'], s:[{automation:3},{manual:3},{performance:3},{process:3}] }
  ],
  roles: {
    automation: { emoji:'🤖', name:'自动化测试工程师', desc:'构建让团队发布更快、更有信心的自动化测试体系', detail:'你让测试本身变成代码。你编写端到端测试、接口测试和单元测试，集成进CI/CD流水线，确保每次发布都有保障。', start:['学习Playwright——现代自动化测试的首选','掌握Python或JavaScript基础','了解测试金字塔——单元、集成、E2E的比例','在真实项目中实践，哪怕是给自己的项目加测试'] },
    manual: { emoji:'🔍', name:'探索性测试工程师', desc:'凭借经验和直觉发现自动化测试遗漏的真实缺陷', detail:'你代表真实用户使用产品。你设计测试用例，覆盖边界场景，发现意外行为。你对产品的深度理解让你能发现别人看不到的问题。', start:['学习探索性测试技术——基于会话的测试','掌握测试用例设计——等价类、边界值分析','学习Jira或Zephyr进行测试管理','建立缺陷报告的规范——好的Bug描述让开发事半功倍'] },
    performance: { emoji:'⚡', name:'性能测试工程师', desc:'发现系统在压力下的弱点，确保产品在峰值时正常运行', detail:'你模拟成千上万的用户，观察系统在极限下的表现。你找到瓶颈，给出优化建议。双十一、春运——你的工作防止它们崩溃。', start:['学习JMeter基础——负载测试最流行的工具','了解k6——现代化的性能测试工具','学习如何分析性能报告和瓶颈','理解基础架构知识——数据库、网络对性能的影响'] },
    process: { emoji:'📋', name:'质量工程师', desc:'建立让整个团队更好、更快地交付质量的流程和标准', detail:'你不只是找Bug，更是让Bug更少发生。你设计测试策略，建立质量门禁，推动团队践行测试文化。这是QA中最有影响力的方向。', start:['学习软件测试基础——ISTQB认证','了解敏捷测试方法论','研究如何在团队中推行测试左移','阅读Lisa Crispin的《敏捷测试》'] }
  },
  ui: { l2back:'← 返回QA测试', title:'QA测试：选择你的专业方向' }
};
