// ─── L2 Test: Cybersecurity ───────────────────────────────────────────────────
// Roles: pentest | appsec | soc | forensics
// Add a new language: L2.security.xx = { questions:[...], roles:{...} }

L2.security.ru = {
  questions: [
    {
      t: 'Что тебе интереснее всего в кибербезопасности?',
      o: [
        'Легально взламывать системы и находить уязвимости',
        'Проектировать защищённые системы и писать безопасный код',
        'Мониторить угрозы и реагировать на инциденты в реальном времени',
        'Расследовать взломы: кто, как и когда атаковал'
      ],
      s: [{pentest:3,forensics:1},{appsec:3},{soc:3},{forensics:3,soc:1}]
    },
    {
      t: 'Какой инструмент хочется освоить первым?',
      o: [
        'Burp Suite и Metasploit — атаковать и тестировать',
        'SAST/DAST и code review — искать баги в коде',
        'SIEM (Splunk/Elastic) — анализировать логи и алерты',
        'Wireshark и Volatility — разбирать трафик и дампы памяти'
      ],
      s: [{pentest:3,appsec:1},{appsec:3},{soc:3},{forensics:3,soc:1}]
    },
    {
      t: 'Какая задача звучит интереснее?',
      o: [
        'Найти XSS или SQLi в bug bounty программе',
        'Провести threat modeling нового сервиса команде разработки',
        'Написать правило обнаружения атаки для SIEM',
        'Разобрать дамп памяти сервера после инцидента'
      ],
      s: [{pentest:3},{appsec:3,soc:1},{soc:3},{forensics:3,pentest:1}]
    },
    {
      t: 'Вышла критическая уязвимость (CVE). Что ты делаешь первым?',
      o: [
        'Воспроизвожу эксплойт в лаборатории',
        'Проверяю затронут ли наш код и что нужно пофиксить',
        'Ищу в логах — уже были попытки эксплуатации?',
        'Анализирую как уязвимость работает на низком уровне'
      ],
      s: [{pentest:3,forensics:1},{appsec:3},{soc:3},{forensics:3,appsec:1}]
    },
    {
      t: 'Какой формат работы тебе ближе?',
      o: [
        'Проект: тестирую систему и пишу детальный отчёт',
        'Sprint: закрываю уязвимости вместе с командой разработки',
        'Дежурство: мониторю дашборды и разбираю алерты',
        'Расследование: восстанавливаю картину атаки по артефактам'
      ],
      s: [{pentest:3},{appsec:3},{soc:3},{forensics:3}]
    },
    {
      t: 'Что из этого тебе ближе или ты уже делал?',
      o: [
        'CTF, HackTheBox, TryHackMe — решать задачи на взлом',
        'Security code review, DevSecOps пайплайны',
        'Анализ SIEM-правил, настройка алертов, threat hunting',
        'Reverse engineering, анализ вредоносного ПО'
      ],
      s: [{pentest:3,forensics:1},{appsec:3},{soc:3},{forensics:3,pentest:1}]
    }
  ],
  roles: {
    pentest: {
      emoji:'🔓', name:'Пентестер',
      desc:'Легальный хакер — находишь уязвимости в системах до того, как это сделают злоумышленники',
      detail:'Ты тестируешь веб-приложения, сети и инфраструктуру на проникновение, пишешь подробные отчёты и рекомендации. Работаешь в Red Team, консалтинге или на фрилансе через bug bounty программы.',
      start:['Изучи основы сетей: TCP/IP, HTTP, DNS','Пройди TryHackMe / HackTheBox для начинающих','Освой Burp Suite и базовый Python','Участвуй в CTF-соревнованиях'],
      startUrls:['https://tryhackme.com','https://hackthebox.com','https://portswigger.net/web-security','https://ctftime.org']
    },
    appsec: {
      emoji:'🛡️', name:'AppSec-инженер',
      desc:'Встраиваешь безопасность в разработку — находишь уязвимости в коде и не даёшь им попасть в продакшн',
      detail:'Ты проводишь code review на безопасность, настраиваешь SAST/DAST, обучаешь разработчиков, выстраиваешь безопасный SDLC. Работаешь бок о бок с командой разработки и DevOps.',
      start:['Изучи OWASP Top 10 и ASVS','Научись делать security code review','Освой Semgrep или SonarQube','Изучи основы DevSecOps'],
      startUrls:['https://owasp.org/www-project-top-ten','https://semgrep.dev','https://portswigger.net/web-security','https://www.devsecops.org']
    },
    soc: {
      emoji:'📡', name:'SOC-аналитик',
      desc:'Первая линия обороны — мониторишь угрозы в реальном времени и координируешь реагирование на инциденты',
      detail:'Ты работаешь с SIEM-системами, анализируешь алерты, расследуешь подозрительную активность, пишешь правила обнаружения и расставляешь приоритеты угроз на основе MITRE ATT&CK.',
      start:['Изучи основы сетевой безопасности и логов','Попрактикуйся в Splunk или Elastic SIEM','Изучи фреймворк MITRE ATT&CK','Пройди SOC Level 1 на TryHackMe'],
      startUrls:['https://attack.mitre.org','https://tryhackme.com/path/outline/soclevel1','https://www.elastic.co/siem','https://splunk.com']
    },
    forensics: {
      emoji:'🔬', name:'Форензик',
      desc:'Цифровой следователь — восстанавливаешь картину атаки по артефактам и помогаешь понять что произошло',
      detail:'Ты анализируешь дампы памяти, файловые системы и сетевой трафик после инцидентов, занимаешься reverse engineering вредоносного ПО, строишь таймлайн атаки. Работаешь в корпоративном SOC или правоохранительных органах.',
      start:['Изучи файловые системы и Windows-артефакты','Освой Wireshark и анализ трафика','Попробуй Autopsy и Volatility','Пройди DFIR-путь на TryHackMe'],
      startUrls:['https://tryhackme.com/path/outline/dfir','https://volatilityfoundation.org','https://www.sleuthkit.org/autopsy','https://cyberdefenders.org']
    }
  }
};

L2.security.en = {
  questions: [
    {
      t: 'What interests you most in cybersecurity?',
      o: [
        'Legally hacking systems and finding vulnerabilities',
        'Designing secure systems and writing safe code',
        'Monitoring threats and responding to incidents in real time',
        'Investigating breaches: who attacked, how, and when'
      ],
      s: [{pentest:3,forensics:1},{appsec:3},{soc:3},{forensics:3,soc:1}]
    },
    {
      t: 'Which tool would you learn first?',
      o: [
        'Burp Suite and Metasploit — attack and test',
        'SAST/DAST and code review — find bugs in code',
        'SIEM (Splunk/Elastic) — analyze logs and alerts',
        'Wireshark and Volatility — dissect traffic and memory dumps'
      ],
      s: [{pentest:3,appsec:1},{appsec:3},{soc:3},{forensics:3,soc:1}]
    },
    {
      t: 'Which task sounds more interesting?',
      o: [
        'Find XSS or SQLi in a bug bounty program',
        'Run threat modeling for a new service with the dev team',
        'Write a detection rule for an attack in the SIEM',
        'Analyze a server memory dump after an incident'
      ],
      s: [{pentest:3},{appsec:3,soc:1},{soc:3},{forensics:3,pentest:1}]
    },
    {
      t: 'A critical CVE just dropped. What\'s your first move?',
      o: [
        'Reproduce the exploit in a lab environment',
        'Check if our codebase is affected and what needs fixing',
        'Search logs — were there exploitation attempts already?',
        'Analyze how the vulnerability works at a low level'
      ],
      s: [{pentest:3,forensics:1},{appsec:3},{soc:3},{forensics:3,appsec:1}]
    },
    {
      t: 'Which work style fits you better?',
      o: [
        'Project: test a system and write a detailed report',
        'Sprint: fix vulnerabilities alongside the dev team',
        'On-call: monitor dashboards and triage alerts',
        'Investigation: reconstruct the attack timeline from artifacts'
      ],
      s: [{pentest:3},{appsec:3},{soc:3},{forensics:3}]
    },
    {
      t: 'Which of these is closest to what you do or want to do?',
      o: [
        'CTF, HackTheBox, TryHackMe — hacking challenges',
        'Security code review, DevSecOps pipelines',
        'SIEM rule analysis, alert tuning, threat hunting',
        'Reverse engineering, malware analysis'
      ],
      s: [{pentest:3,forensics:1},{appsec:3},{soc:3},{forensics:3,pentest:1}]
    }
  ],
  roles: {
    pentest: {
      emoji:'🔓', name:'Penetration Tester',
      desc:'Legal hacker — find vulnerabilities in systems before attackers do',
      detail:'You test web apps, networks and infrastructure for security weaknesses, write detailed reports and remediation recommendations. You work in Red Teams, consulting firms or independently via bug bounty programs.',
      start:['Learn networking basics: TCP/IP, HTTP, DNS','Start with TryHackMe / HackTheBox beginner paths','Master Burp Suite and basic Python scripting','Compete in CTF competitions'],
      startUrls:['https://tryhackme.com','https://hackthebox.com','https://portswigger.net/web-security','https://ctftime.org']
    },
    appsec: {
      emoji:'🛡️', name:'AppSec Engineer',
      desc:'You embed security into development — finding vulnerabilities in code before they reach production',
      detail:'You conduct security code reviews, configure SAST/DAST tools, train developers on secure coding, and build a secure SDLC. You work side-by-side with dev and DevOps teams.',
      start:['Study OWASP Top 10 and ASVS','Learn security-focused code review','Master Semgrep or SonarQube','Study DevSecOps fundamentals'],
      startUrls:['https://owasp.org/www-project-top-ten','https://semgrep.dev','https://portswigger.net/web-security','https://www.devsecops.org']
    },
    soc: {
      emoji:'📡', name:'SOC Analyst',
      desc:'First line of defense — monitor threats in real time and coordinate incident response',
      detail:'You work with SIEM platforms, analyze alerts, investigate suspicious activity and write detection rules. You prioritize threats using MITRE ATT&CK and coordinate response across teams.',
      start:['Learn network security fundamentals and log analysis','Practice with Splunk or Elastic SIEM','Study the MITRE ATT&CK framework','Complete SOC Level 1 on TryHackMe'],
      startUrls:['https://attack.mitre.org','https://tryhackme.com/path/outline/soclevel1','https://www.elastic.co/siem','https://splunk.com']
    },
    forensics: {
      emoji:'🔬', name:'Digital Forensics Analyst',
      desc:'Digital investigator — reconstruct attack timelines from artifacts and determine what happened',
      detail:'You analyze memory dumps, file systems and network traffic after incidents, reverse-engineer malware and build attack timelines. You can work in corporate SOCs or with law enforcement.',
      start:['Study file systems and Windows forensic artifacts','Master Wireshark and traffic analysis','Try Autopsy and Volatility','Complete the DFIR path on TryHackMe'],
      startUrls:['https://tryhackme.com/path/outline/dfir','https://volatilityfoundation.org','https://www.sleuthkit.org/autopsy','https://cyberdefenders.org']
    }
  }
};

L2.security.de = {
  questions: [
    {
      t: 'Was interessiert dich am meisten in der Cybersicherheit?',
      o: [
        'Systeme legal hacken und Sicherheitslücken finden',
        'Sichere Systeme entwerfen und sicheren Code schreiben',
        'Bedrohungen in Echtzeit überwachen und auf Vorfälle reagieren',
        'Angriffe untersuchen: wer, wie und wann hat attackiert'
      ],
      s: [{pentest:3,forensics:1},{appsec:3},{soc:3},{forensics:3,soc:1}]
    },
    {
      t: 'Welches Tool würdest du als erstes erlernen?',
      o: [
        'Burp Suite und Metasploit — angreifen und testen',
        'SAST/DAST und Code-Review — Bugs im Code finden',
        'SIEM (Splunk/Elastic) — Logs und Alerts analysieren',
        'Wireshark und Volatility — Traffic und Memory-Dumps analysieren'
      ],
      s: [{pentest:3,appsec:1},{appsec:3},{soc:3},{forensics:3,soc:1}]
    },
    {
      t: 'Welche Aufgabe klingt interessanter?',
      o: [
        'XSS oder SQLi in einem Bug-Bounty-Programm finden',
        'Threat Modeling für einen neuen Dienst mit dem Dev-Team',
        'Eine Erkennungsregel für einen Angriff im SIEM schreiben',
        'Einen Server-Memory-Dump nach einem Vorfall analysieren'
      ],
      s: [{pentest:3},{appsec:3,soc:1},{soc:3},{forensics:3,pentest:1}]
    },
    {
      t: 'Ein kritischer CVE ist erschienen. Was machst du zuerst?',
      o: [
        'Den Exploit in einer Laborumgebung reproduzieren',
        'Prüfen ob unsere Codebasis betroffen ist und was gefixt werden muss',
        'Logs durchsuchen — gab es schon Ausnutzungsversuche?',
        'Analysieren wie die Schwachstelle auf niedrigem Level funktioniert'
      ],
      s: [{pentest:3,forensics:1},{appsec:3},{soc:3},{forensics:3,appsec:1}]
    },
    {
      t: 'Welcher Arbeitsstil passt besser zu dir?',
      o: [
        'Projekt: System testen und detaillierten Bericht schreiben',
        'Sprint: Schwachstellen gemeinsam mit dem Dev-Team schließen',
        'Bereitschaft: Dashboards überwachen und Alerts priorisieren',
        'Untersuchung: Angriffszeitlinie aus Artefakten rekonstruieren'
      ],
      s: [{pentest:3},{appsec:3},{soc:3},{forensics:3}]
    },
    {
      t: 'Was davon liegt dir am nächsten oder hast du schon gemacht?',
      o: [
        'CTF, HackTheBox, TryHackMe — Hacking-Challenges',
        'Security Code Review, DevSecOps-Pipelines',
        'SIEM-Regelanalyse, Alert-Tuning, Threat Hunting',
        'Reverse Engineering, Malware-Analyse'
      ],
      s: [{pentest:3,forensics:1},{appsec:3},{soc:3},{forensics:3,pentest:1}]
    }
  ],
  roles: {
    pentest: {
      emoji:'🔓', name:'Penetrationstester',
      desc:'Legaler Hacker — findest Schwachstellen in Systemen bevor Angreifer es tun',
      detail:'Du testest Web-Apps, Netzwerke und Infrastruktur auf Sicherheitslücken, schreibst detaillierte Berichte und Behebungsempfehlungen. Du arbeitest in Red Teams, Beratungsunternehmen oder selbstständig über Bug-Bounty-Programme.',
      start:['Netzwerkgrundlagen lernen: TCP/IP, HTTP, DNS','Mit TryHackMe / HackTheBox Einsteigerpfaden beginnen','Burp Suite und Python-Scripting meistern','An CTF-Wettbewerben teilnehmen'],
      startUrls:['https://tryhackme.com','https://hackthebox.com','https://portswigger.net/web-security','https://ctftime.org']
    },
    appsec: {
      emoji:'🛡️', name:'AppSec-Ingenieur',
      desc:'Du integrierst Sicherheit in die Entwicklung — findest Schwachstellen im Code bevor sie in Produktion gelangen',
      detail:'Du führst Security Code Reviews durch, konfigurierst SAST/DAST-Tools, schulst Entwickler in sicherem Coding und baust einen sicheren SDLC auf. Du arbeitest eng mit Dev- und DevOps-Teams zusammen.',
      start:['OWASP Top 10 und ASVS studieren','Security-fokussiertes Code-Review erlernen','Semgrep oder SonarQube meistern','DevSecOps-Grundlagen studieren'],
      startUrls:['https://owasp.org/www-project-top-ten','https://semgrep.dev','https://portswigger.net/web-security','https://www.devsecops.org']
    },
    soc: {
      emoji:'📡', name:'SOC-Analyst',
      desc:'Erste Verteidigungslinie — überwachst Bedrohungen in Echtzeit und koordinierst die Incident Response',
      detail:'Du arbeitest mit SIEM-Plattformen, analysierst Alerts, untersuchst verdächtige Aktivitäten und schreibst Erkennungsregeln. Du priorisierst Bedrohungen anhand von MITRE ATT&CK.',
      start:['Netzwerksicherheitsgrundlagen und Log-Analyse lernen','Mit Splunk oder Elastic SIEM üben','MITRE ATT&CK-Framework studieren','SOC Level 1 auf TryHackMe abschließen'],
      startUrls:['https://attack.mitre.org','https://tryhackme.com/path/outline/soclevel1','https://www.elastic.co/siem','https://splunk.com']
    },
    forensics: {
      emoji:'🔬', name:'Digitaler Forensiker',
      desc:'Digitaler Ermittler — rekonstruierst Angriffszeitlinien aus Artefakten und ermittelst was passiert ist',
      detail:'Du analysierst Memory-Dumps, Dateisysteme und Netzwerktraffic nach Vorfällen, führst Reverse Engineering von Malware durch und erstellst Angriffszeitlinien. Du kannst in Unternehmens-SOCs oder mit Strafverfolgungsbehörden arbeiten.',
      start:['Dateisysteme und Windows-Forensikartefakte studieren','Wireshark und Traffic-Analyse meistern','Autopsy und Volatility ausprobieren','DFIR-Pfad auf TryHackMe absolvieren'],
      startUrls:['https://tryhackme.com/path/outline/dfir','https://volatilityfoundation.org','https://www.sleuthkit.org/autopsy','https://cyberdefenders.org']
    }
  }
};

L2.security.fr = {
  questions: [
    {
      t: 'Qu\'est-ce qui t\'intéresse le plus en cybersécurité ?',
      o: [
        'Pirater légalement des systèmes et trouver des vulnérabilités',
        'Concevoir des systèmes sécurisés et écrire du code sûr',
        'Surveiller les menaces et répondre aux incidents en temps réel',
        'Enquêter sur les intrusions : qui, comment et quand a attaqué'
      ],
      s: [{pentest:3,forensics:1},{appsec:3},{soc:3},{forensics:3,soc:1}]
    },
    {
      t: 'Quel outil voudrais-tu maîtriser en premier ?',
      o: [
        'Burp Suite et Metasploit — attaquer et tester',
        'SAST/DAST et code review — trouver des bugs dans le code',
        'SIEM (Splunk/Elastic) — analyser logs et alertes',
        'Wireshark et Volatility — analyser trafic et dumps mémoire'
      ],
      s: [{pentest:3,appsec:1},{appsec:3},{soc:3},{forensics:3,soc:1}]
    },
    {
      t: 'Quelle tâche te semble la plus intéressante ?',
      o: [
        'Trouver un XSS ou SQLi dans un programme bug bounty',
        'Réaliser un threat modeling pour un nouveau service',
        'Écrire une règle de détection d\'attaque dans le SIEM',
        'Analyser un dump mémoire de serveur après un incident'
      ],
      s: [{pentest:3},{appsec:3,soc:1},{soc:3},{forensics:3,pentest:1}]
    },
    {
      t: 'Un CVE critique vient de sortir. Quelle est ta première action ?',
      o: [
        'Reproduire l\'exploit dans un environnement de laboratoire',
        'Vérifier si notre code est affecté et ce qu\'il faut corriger',
        'Chercher dans les logs — y a-t-il déjà eu des tentatives d\'exploitation ?',
        'Analyser comment la vulnérabilité fonctionne à bas niveau'
      ],
      s: [{pentest:3,forensics:1},{appsec:3},{soc:3},{forensics:3,appsec:1}]
    },
    {
      t: 'Quel mode de travail te correspond le mieux ?',
      o: [
        'Projet : tester un système et rédiger un rapport détaillé',
        'Sprint : corriger des vulnérabilités avec l\'équipe de dev',
        'Astreinte : surveiller les dashboards et trier les alertes',
        'Investigation : reconstruire la chronologie d\'une attaque'
      ],
      s: [{pentest:3},{appsec:3},{soc:3},{forensics:3}]
    },
    {
      t: 'Lequel de ces éléments te correspond ou que tu as déjà pratiqué ?',
      o: [
        'CTF, HackTheBox, TryHackMe — défis de hacking',
        'Security code review, pipelines DevSecOps',
        'Analyse de règles SIEM, tuning d\'alertes, threat hunting',
        'Reverse engineering, analyse de malware'
      ],
      s: [{pentest:3,forensics:1},{appsec:3},{soc:3},{forensics:3,pentest:1}]
    }
  ],
  roles: {
    pentest: {
      emoji:'🔓', name:'Testeur d\'intrusion',
      desc:'Hacker légal — tu trouves des vulnérabilités dans les systèmes avant que les attaquants ne le fassent',
      detail:'Tu testes des applications web, des réseaux et des infrastructures en sécurité, rédiges des rapports détaillés et des recommandations de remédiation. Tu travailles en Red Team, en conseil ou en freelance via des programmes bug bounty.',
      start:['Apprendre les bases réseau : TCP/IP, HTTP, DNS','Commencer par les parcours débutants TryHackMe / HackTheBox','Maîtriser Burp Suite et le scripting Python de base','Participer à des compétitions CTF'],
      startUrls:['https://tryhackme.com','https://hackthebox.com','https://portswigger.net/web-security','https://ctftime.org']
    },
    appsec: {
      emoji:'🛡️', name:'Ingénieur AppSec',
      desc:'Tu intègres la sécurité dans le développement — trouver des failles dans le code avant qu\'elles n\'atteignent la production',
      detail:'Tu effectues des revues de code sécurisées, configures les outils SAST/DAST, formes les développeurs et construis un SDLC sécurisé. Tu travailles en étroite collaboration avec les équipes dev et DevOps.',
      start:['Étudier l\'OWASP Top 10 et l\'ASVS','Apprendre la revue de code axée sécurité','Maîtriser Semgrep ou SonarQube','Étudier les fondamentaux DevSecOps'],
      startUrls:['https://owasp.org/www-project-top-ten','https://semgrep.dev','https://portswigger.net/web-security','https://www.devsecops.org']
    },
    soc: {
      emoji:'📡', name:'Analyste SOC',
      desc:'Première ligne de défense — tu surveilles les menaces en temps réel et coordonnes la réponse aux incidents',
      detail:'Tu travailles avec des plateformes SIEM, analyses les alertes, enquêtes sur les activités suspectes et rédiges des règles de détection. Tu priorises les menaces avec MITRE ATT&CK.',
      start:['Apprendre les fondamentaux de la sécurité réseau et l\'analyse de logs','Pratiquer avec Splunk ou Elastic SIEM','Étudier le framework MITRE ATT&CK','Compléter SOC Level 1 sur TryHackMe'],
      startUrls:['https://attack.mitre.org','https://tryhackme.com/path/outline/soclevel1','https://www.elastic.co/siem','https://splunk.com']
    },
    forensics: {
      emoji:'🔬', name:'Analyste Forensique',
      desc:'Enquêteur numérique — tu reconstitues les chronologies d\'attaques à partir d\'artefacts',
      detail:'Tu analyses des dumps mémoire, systèmes de fichiers et trafic réseau après des incidents, fais du reverse engineering de malware et construis des chronologies d\'attaques. Tu peux travailler dans des SOC d\'entreprise ou avec les forces de l\'ordre.',
      start:['Étudier les systèmes de fichiers et artefacts Windows','Maîtriser Wireshark et l\'analyse de trafic','Essayer Autopsy et Volatility','Compléter le parcours DFIR sur TryHackMe'],
      startUrls:['https://tryhackme.com/path/outline/dfir','https://volatilityfoundation.org','https://www.sleuthkit.org/autopsy','https://cyberdefenders.org']
    }
  }
};

L2.security.es = {
  questions: [
    {
      t: '¿Qué te interesa más de la ciberseguridad?',
      o: [
        'Hackear sistemas legalmente y encontrar vulnerabilidades',
        'Diseñar sistemas seguros y escribir código protegido',
        'Monitorear amenazas y responder a incidentes en tiempo real',
        'Investigar brechas: quién atacó, cómo y cuándo'
      ],
      s: [{pentest:3,forensics:1},{appsec:3},{soc:3},{forensics:3,soc:1}]
    },
    {
      t: '¿Qué herramienta aprenderías primero?',
      o: [
        'Burp Suite y Metasploit — atacar y probar',
        'SAST/DAST y revisión de código — encontrar bugs en el código',
        'SIEM (Splunk/Elastic) — analizar logs y alertas',
        'Wireshark y Volatility — analizar tráfico y volcados de memoria'
      ],
      s: [{pentest:3,appsec:1},{appsec:3},{soc:3},{forensics:3,soc:1}]
    },
    {
      t: '¿Qué tarea te parece más interesante?',
      o: [
        'Encontrar XSS o SQLi en un programa bug bounty',
        'Realizar threat modeling para un nuevo servicio con el equipo de dev',
        'Escribir una regla de detección de ataque en el SIEM',
        'Analizar un volcado de memoria del servidor tras un incidente'
      ],
      s: [{pentest:3},{appsec:3,soc:1},{soc:3},{forensics:3,pentest:1}]
    },
    {
      t: 'Salió un CVE crítico. ¿Cuál es tu primer paso?',
      o: [
        'Reproducir el exploit en un entorno de laboratorio',
        'Verificar si nuestro código está afectado y qué hay que arreglar',
        'Buscar en los logs — ¿ya hubo intentos de explotación?',
        'Analizar cómo funciona la vulnerabilidad a bajo nivel'
      ],
      s: [{pentest:3,forensics:1},{appsec:3},{soc:3},{forensics:3,appsec:1}]
    },
    {
      t: '¿Qué estilo de trabajo te encaja mejor?',
      o: [
        'Proyecto: probar un sistema y escribir un informe detallado',
        'Sprint: cerrar vulnerabilidades junto al equipo de desarrollo',
        'Guardia: monitorear dashboards y gestionar alertas',
        'Investigación: reconstruir la línea de tiempo del ataque'
      ],
      s: [{pentest:3},{appsec:3},{soc:3},{forensics:3}]
    },
    {
      t: '¿Cuál de estas actividades te es más cercana o ya practicas?',
      o: [
        'CTF, HackTheBox, TryHackMe — desafíos de hacking',
        'Revisión de código de seguridad, pipelines DevSecOps',
        'Análisis de reglas SIEM, ajuste de alertas, threat hunting',
        'Ingeniería inversa, análisis de malware'
      ],
      s: [{pentest:3,forensics:1},{appsec:3},{soc:3},{forensics:3,pentest:1}]
    }
  ],
  roles: {
    pentest: {
      emoji:'🔓', name:'Pentester',
      desc:'Hacker legal — encuentras vulnerabilidades en sistemas antes de que lo hagan los atacantes',
      detail:'Pruebas aplicaciones web, redes e infraestructura en busca de fallos de seguridad, escribes informes detallados y recomendaciones. Trabajas en Red Teams, consultorías o de forma freelance con bug bounty.',
      start:['Aprender bases de redes: TCP/IP, HTTP, DNS','Comenzar con rutas para principiantes en TryHackMe / HackTheBox','Dominar Burp Suite y scripting básico en Python','Participar en competencias CTF'],
      startUrls:['https://tryhackme.com','https://hackthebox.com','https://portswigger.net/web-security','https://ctftime.org']
    },
    appsec: {
      emoji:'🛡️', name:'Ingeniero AppSec',
      desc:'Integras la seguridad en el desarrollo — encuentras vulnerabilidades en el código antes de que lleguen a producción',
      detail:'Realizas revisiones de código de seguridad, configuras SAST/DAST, formas a los desarrolladores y construyes un SDLC seguro. Trabajas junto a equipos de dev y DevOps.',
      start:['Estudiar OWASP Top 10 y ASVS','Aprender revisión de código enfocada en seguridad','Dominar Semgrep o SonarQube','Estudiar fundamentos de DevSecOps'],
      startUrls:['https://owasp.org/www-project-top-ten','https://semgrep.dev','https://portswigger.net/web-security','https://www.devsecops.org']
    },
    soc: {
      emoji:'📡', name:'Analista SOC',
      desc:'Primera línea de defensa — monitoreas amenazas en tiempo real y coordinas la respuesta a incidentes',
      detail:'Trabajas con plataformas SIEM, analizas alertas, investigas actividad sospechosa y escribes reglas de detección. Priorizas amenazas usando MITRE ATT&CK.',
      start:['Aprender fundamentos de seguridad de red y análisis de logs','Practicar con Splunk o Elastic SIEM','Estudiar el framework MITRE ATT&CK','Completar SOC Level 1 en TryHackMe'],
      startUrls:['https://attack.mitre.org','https://tryhackme.com/path/outline/soclevel1','https://www.elastic.co/siem','https://splunk.com']
    },
    forensics: {
      emoji:'🔬', name:'Analista Forense Digital',
      desc:'Investigador digital — reconstruyes la línea de tiempo de ataques a partir de artefactos',
      detail:'Analizas volcados de memoria, sistemas de archivos y tráfico de red tras incidentes, haces ingeniería inversa de malware y construyes líneas de tiempo de ataques.',
      start:['Estudiar sistemas de archivos y artefactos forenses de Windows','Dominar Wireshark y análisis de tráfico','Probar Autopsy y Volatility','Completar la ruta DFIR en TryHackMe'],
      startUrls:['https://tryhackme.com/path/outline/dfir','https://volatilityfoundation.org','https://www.sleuthkit.org/autopsy','https://cyberdefenders.org']
    }
  }
};

L2.security.pt = {
  questions: [
    {
      t: 'O que te interessa mais em cibersegurança?',
      o: [
        'Hackear sistemas legalmente e encontrar vulnerabilidades',
        'Projetar sistemas seguros e escrever código protegido',
        'Monitorar ameaças e responder a incidentes em tempo real',
        'Investigar invasões: quem atacou, como e quando'
      ],
      s: [{pentest:3,forensics:1},{appsec:3},{soc:3},{forensics:3,soc:1}]
    },
    {
      t: 'Qual ferramenta você aprenderia primeiro?',
      o: [
        'Burp Suite e Metasploit — atacar e testar',
        'SAST/DAST e revisão de código — encontrar bugs no código',
        'SIEM (Splunk/Elastic) — analisar logs e alertas',
        'Wireshark e Volatility — analisar tráfego e dumps de memória'
      ],
      s: [{pentest:3,appsec:1},{appsec:3},{soc:3},{forensics:3,soc:1}]
    },
    {
      t: 'Qual tarefa soa mais interessante?',
      o: [
        'Encontrar XSS ou SQLi em um programa bug bounty',
        'Realizar threat modeling para um novo serviço com o time de dev',
        'Escrever uma regra de detecção de ataque no SIEM',
        'Analisar um dump de memória do servidor após um incidente'
      ],
      s: [{pentest:3},{appsec:3,soc:1},{soc:3},{forensics:3,pentest:1}]
    },
    {
      t: 'Saiu um CVE crítico. Qual é o seu primeiro passo?',
      o: [
        'Reproduzir o exploit em um ambiente de laboratório',
        'Verificar se nosso código está afetado e o que precisa ser corrigido',
        'Buscar nos logs — já houve tentativas de exploração?',
        'Analisar como a vulnerabilidade funciona em baixo nível'
      ],
      s: [{pentest:3,forensics:1},{appsec:3},{soc:3},{forensics:3,appsec:1}]
    },
    {
      t: 'Qual estilo de trabalho combina mais com você?',
      o: [
        'Projeto: testar um sistema e escrever um relatório detalhado',
        'Sprint: corrigir vulnerabilidades junto ao time de desenvolvimento',
        'Plantão: monitorar dashboards e triar alertas',
        'Investigação: reconstruir a linha do tempo do ataque'
      ],
      s: [{pentest:3},{appsec:3},{soc:3},{forensics:3}]
    },
    {
      t: 'Qual dessas atividades está mais próxima do que você faz ou quer fazer?',
      o: [
        'CTF, HackTheBox, TryHackMe — desafios de hacking',
        'Revisão de código de segurança, pipelines DevSecOps',
        'Análise de regras SIEM, ajuste de alertas, threat hunting',
        'Engenharia reversa, análise de malware'
      ],
      s: [{pentest:3,forensics:1},{appsec:3},{soc:3},{forensics:3,pentest:1}]
    }
  ],
  roles: {
    pentest: {
      emoji:'🔓', name:'Pentester',
      desc:'Hacker legal — encontra vulnerabilidades em sistemas antes que os atacantes o façam',
      detail:'Você testa aplicações web, redes e infraestrutura em busca de falhas de segurança, escreve relatórios detalhados e recomendações. Trabalha em Red Teams, consultorias ou como freelancer via bug bounty.',
      start:['Aprender bases de redes: TCP/IP, HTTP, DNS','Começar pelos caminhos de iniciante no TryHackMe / HackTheBox','Dominar Burp Suite e scripting básico em Python','Participar de competições CTF'],
      startUrls:['https://tryhackme.com','https://hackthebox.com','https://portswigger.net/web-security','https://ctftime.org']
    },
    appsec: {
      emoji:'🛡️', name:'Engenheiro AppSec',
      desc:'Você integra a segurança no desenvolvimento — encontrando vulnerabilidades no código antes que cheguem à produção',
      detail:'Você realiza revisões de código de segurança, configura SAST/DAST, treina desenvolvedores e constrói um SDLC seguro. Trabalha lado a lado com times de dev e DevOps.',
      start:['Estudar OWASP Top 10 e ASVS','Aprender revisão de código focada em segurança','Dominar Semgrep ou SonarQube','Estudar fundamentos de DevSecOps'],
      startUrls:['https://owasp.org/www-project-top-ten','https://semgrep.dev','https://portswigger.net/web-security','https://www.devsecops.org']
    },
    soc: {
      emoji:'📡', name:'Analista SOC',
      desc:'Primeira linha de defesa — monitora ameaças em tempo real e coordena a resposta a incidentes',
      detail:'Você trabalha com plataformas SIEM, analisa alertas, investiga atividades suspeitas e escreve regras de detecção. Prioriza ameaças usando o MITRE ATT&CK.',
      start:['Aprender fundamentos de segurança de rede e análise de logs','Praticar com Splunk ou Elastic SIEM','Estudar o framework MITRE ATT&CK','Completar SOC Level 1 no TryHackMe'],
      startUrls:['https://attack.mitre.org','https://tryhackme.com/path/outline/soclevel1','https://www.elastic.co/siem','https://splunk.com']
    },
    forensics: {
      emoji:'🔬', name:'Analista Forense Digital',
      desc:'Investigador digital — reconstrói linhas do tempo de ataques a partir de artefatos',
      detail:'Você analisa dumps de memória, sistemas de arquivos e tráfego de rede após incidentes, faz engenharia reversa de malware e constrói linhas do tempo de ataques.',
      start:['Estudar sistemas de arquivos e artefatos forenses do Windows','Dominar Wireshark e análise de tráfego','Experimentar Autopsy e Volatility','Completar o caminho DFIR no TryHackMe'],
      startUrls:['https://tryhackme.com/path/outline/dfir','https://volatilityfoundation.org','https://www.sleuthkit.org/autopsy','https://cyberdefenders.org']
    }
  }
};

L2.security.ar = {
  questions: [
    {
      t: 'ما الذي يثير اهتمامك أكثر في الأمن السيبراني؟',
      o: [
        'اختراق الأنظمة بشكل قانوني وإيجاد الثغرات',
        'تصميم أنظمة آمنة وكتابة كود محمي',
        'مراقبة التهديدات والاستجابة للحوادث في الوقت الفعلي',
        'التحقيق في الاختراقات: من هاجم وكيف ومتى'
      ],
      s: [{pentest:3,forensics:1},{appsec:3},{soc:3},{forensics:3,soc:1}]
    },
    {
      t: 'أي أداة تريد تعلمها أولاً؟',
      o: [
        'Burp Suite وMetasploit — للهجوم والاختبار',
        'SAST/DAST ومراجعة الكود — لإيجاد الثغرات في الكود',
        'SIEM (Splunk/Elastic) — لتحليل السجلات والتنبيهات',
        'Wireshark وVolatility — لتحليل حركة المرور وإغراقات الذاكرة'
      ],
      s: [{pentest:3,appsec:1},{appsec:3},{soc:3},{forensics:3,soc:1}]
    },
    {
      t: 'أي مهمة تبدو أكثر إثارة للاهتمام؟',
      o: [
        'إيجاد XSS أو SQLi في برنامج bug bounty',
        'إجراء threat modeling لخدمة جديدة مع فريق التطوير',
        'كتابة قاعدة اكتشاف هجوم في الـSIEM',
        'تحليل إغراق ذاكرة الخادم بعد حادثة'
      ],
      s: [{pentest:3},{appsec:3,soc:1},{soc:3},{forensics:3,pentest:1}]
    },
    {
      t: 'ظهر CVE حرج. ما أول خطوة تتخذها؟',
      o: [
        'إعادة إنتاج الثغرة في بيئة مختبرية',
        'التحقق إذا كان كودنا متأثراً وما الذي يحتاج إصلاحاً',
        'البحث في السجلات — هل كانت هناك محاولات استغلال بالفعل؟',
        'تحليل كيفية عمل الثغرة على المستوى المنخفض'
      ],
      s: [{pentest:3,forensics:1},{appsec:3},{soc:3},{forensics:3,appsec:1}]
    },
    {
      t: 'أي أسلوب عمل يناسبك أكثر؟',
      o: [
        'مشروع: اختبار نظام وكتابة تقرير تفصيلي',
        'سبرينت: إغلاق الثغرات مع فريق التطوير',
        'مناوبة: مراقبة لوحات المعلومات وفرز التنبيهات',
        'تحقيق: إعادة بناء جدول زمني للهجوم من الأدلة'
      ],
      s: [{pentest:3},{appsec:3},{soc:3},{forensics:3}]
    },
    {
      t: 'أي من هذه الأنشطة يقترب منك أكثر أو تمارسه بالفعل؟',
      o: [
        'CTF وHackTheBox وTryHackMe — تحديات الاختراق',
        'مراجعة كود الأمان وخطوط DevSecOps',
        'تحليل قواعد SIEM وضبط التنبيهات وصيد التهديدات',
        'الهندسة العكسية وتحليل البرمجيات الخبيثة'
      ],
      s: [{pentest:3,forensics:1},{appsec:3},{soc:3},{forensics:3,pentest:1}]
    }
  ],
  roles: {
    pentest: {
      emoji:'🔓', name:'مختبر الاختراق',
      desc:'هاكر قانوني — تجد الثغرات في الأنظمة قبل أن يفعلها المهاجمون',
      detail:'تختبر تطبيقات الويب والشبكات والبنية التحتية بحثاً عن نقاط الضعف، تكتب تقارير مفصلة وتوصيات. تعمل في فرق Red Team أو شركات الاستشارات أو كمستقل عبر برامج bug bounty.',
      start:['تعلم أساسيات الشبكات: TCP/IP، HTTP، DNS','ابدأ بمسارات المبتدئين في TryHackMe / HackTheBox','أتقن Burp Suite وبرمجة Python الأساسية','شارك في مسابقات CTF'],
      startUrls:['https://tryhackme.com','https://hackthebox.com','https://portswigger.net/web-security','https://ctftime.org']
    },
    appsec: {
      emoji:'🛡️', name:'مهندس AppSec',
      desc:'تدمج الأمان في التطوير — تجد الثغرات في الكود قبل وصولها للإنتاج',
      detail:'تجري مراجعات كود أمنية، تضبط أدوات SAST/DAST، تدرب المطورين وتبني SDLC آمناً. تعمل جنباً إلى جنب مع فرق التطوير وDevOps.',
      start:['دراسة OWASP Top 10 وASVS','تعلم مراجعة الكود المتمحورة حول الأمان','إتقان Semgrep أو SonarQube','دراسة أساسيات DevSecOps'],
      startUrls:['https://owasp.org/www-project-top-ten','https://semgrep.dev','https://portswigger.net/web-security','https://www.devsecops.org']
    },
    soc: {
      emoji:'📡', name:'محلل SOC',
      desc:'خط الدفاع الأول — تراقب التهديدات في الوقت الفعلي وتنسق الاستجابة للحوادث',
      detail:'تعمل مع منصات SIEM، تحلل التنبيهات، تحقق في النشاط المشبوه وتكتب قواعد الاكتشاف. تحدد أولويات التهديدات باستخدام MITRE ATT&CK.',
      start:['تعلم أساسيات أمن الشبكات وتحليل السجلات','التدرب على Splunk أو Elastic SIEM','دراسة إطار MITRE ATT&CK','إكمال SOC Level 1 على TryHackMe'],
      startUrls:['https://attack.mitre.org','https://tryhackme.com/path/outline/soclevel1','https://www.elastic.co/siem','https://splunk.com']
    },
    forensics: {
      emoji:'🔬', name:'محلل الجنائيات الرقمية',
      desc:'محقق رقمي — تعيد بناء جداول زمنية للهجمات من الأدلة',
      detail:'تحلل إغراقات الذاكرة وأنظمة الملفات وحركة الشبكة بعد الحوادث، تجري هندسة عكسية للبرمجيات الخبيثة وتبني جداول زمنية للهجمات.',
      start:['دراسة أنظمة الملفات والأدلة الجنائية لنظام Windows','إتقان Wireshark وتحليل حركة المرور','تجربة Autopsy وVolatility','إكمال مسار DFIR على TryHackMe'],
      startUrls:['https://tryhackme.com/path/outline/dfir','https://volatilityfoundation.org','https://www.sleuthkit.org/autopsy','https://cyberdefenders.org']
    }
  }
};

L2.security.he = {
  questions: [
    {
      t: 'מה מעניין אותך הכי הרבה באבטחת סייבר?',
      o: [
        'לפרוץ מערכות בצורה חוקית ולמצוא פגיעויות',
        'לתכנן מערכות מאובטחות ולכתוב קוד בטוח',
        'לנטר איומים ולהגיב לאירועים בזמן אמת',
        'לחקור פרצות: מי תקף, איך ומתי'
      ],
      s: [{pentest:3,forensics:1},{appsec:3},{soc:3},{forensics:3,soc:1}]
    },
    {
      t: 'איזה כלי היית רוצה ללמוד ראשון?',
      o: [
        'Burp Suite ו-Metasploit — לתקוף ולבדוק',
        'SAST/DAST וסקירת קוד — למצוא באגים בקוד',
        'SIEM (Splunk/Elastic) — לנתח לוגים והתראות',
        'Wireshark ו-Volatility — לנתח תעבורה ושמיכות זיכרון'
      ],
      s: [{pentest:3,appsec:1},{appsec:3},{soc:3},{forensics:3,soc:1}]
    },
    {
      t: 'איזו משימה נשמעת מעניינת יותר?',
      o: [
        'למצוא XSS או SQLi בתכנית bug bounty',
        'לבצע threat modeling לשירות חדש עם צוות הפיתוח',
        'לכתוב כלל זיהוי התקפה ב-SIEM',
        'לנתח dump זיכרון של שרת לאחר אירוע'
      ],
      s: [{pentest:3},{appsec:3,soc:1},{soc:3},{forensics:3,pentest:1}]
    },
    {
      t: 'יצא CVE קריטי. מה הצעד הראשון שלך?',
      o: [
        'לשחזר את ה-exploit בסביבת מעבדה',
        'לבדוק אם הקוד שלנו מושפע ומה צריך לתקן',
        'לחפש בלוגים — האם כבר היו ניסיונות ניצול?',
        'לנתח כיצד הפגיעות פועלת ברמה נמוכה'
      ],
      s: [{pentest:3,forensics:1},{appsec:3},{soc:3},{forensics:3,appsec:1}]
    },
    {
      t: 'איזה סגנון עבודה מתאים לך יותר?',
      o: [
        'פרויקט: לבדוק מערכת ולכתוב דוח מפורט',
        'ספרינט: לסגור פגיעויות יחד עם צוות הפיתוח',
        'תורנות: לנטר לוחות מחוונים ולמיין התראות',
        'חקירה: לשחזר את ציר הזמן של ההתקפה מארטיפקטים'
      ],
      s: [{pentest:3},{appsec:3},{soc:3},{forensics:3}]
    },
    {
      t: 'מה מהדברים האלה קרוב אליך יותר או שכבר עשית?',
      o: [
        'CTF, HackTheBox, TryHackMe — אתגרי פריצה',
        'סקירת קוד אבטחה, pipeline-ים של DevSecOps',
        'ניתוח כללי SIEM, כיוון התראות, threat hunting',
        'הנדסה לאחור, ניתוח תוכנות זדוניות'
      ],
      s: [{pentest:3,forensics:1},{appsec:3},{soc:3},{forensics:3,pentest:1}]
    }
  ],
  roles: {
    pentest: {
      emoji:'🔓', name:'בודק חדירות',
      desc:'האקר חוקי — מוצא פגיעויות במערכות לפני שתוקפים עושים זאת',
      detail:'אתה בודק אפליקציות ווב, רשתות ותשתיות לנקודות תורפה, כותב דוחות מפורטים והמלצות. עובד בצוותי Red Team, חברות ייעוץ או כפרילנסר דרך תכניות bug bounty.',
      start:['ללמוד יסודות רשתות: TCP/IP, HTTP, DNS','להתחיל עם מסלולי מתחילים ב-TryHackMe / HackTheBox','לשלוט ב-Burp Suite וסקריפטינג Python בסיסי','להשתתף בתחרויות CTF'],
      startUrls:['https://tryhackme.com','https://hackthebox.com','https://portswigger.net/web-security','https://ctftime.org']
    },
    appsec: {
      emoji:'🛡️', name:'מהנדס AppSec',
      desc:'משלב אבטחה בפיתוח — מוצא פגיעויות בקוד לפני שמגיעות לפרודקשן',
      detail:'אתה מבצע סקירות קוד אבטחה, מגדיר כלי SAST/DAST, מכשיר מפתחים ובונה SDLC מאובטח. עובד לצד צוותי dev ו-DevOps.',
      start:['ללמוד OWASP Top 10 ו-ASVS','ללמוד סקירת קוד ממוקדת אבטחה','לשלוט ב-Semgrep או SonarQube','ללמוד יסודות DevSecOps'],
      startUrls:['https://owasp.org/www-project-top-ten','https://semgrep.dev','https://portswigger.net/web-security','https://www.devsecops.org']
    },
    soc: {
      emoji:'📡', name:'אנליסט SOC',
      desc:'קו ההגנה הראשון — מנטר איומים בזמן אמת ומתאם תגובה לאירועים',
      detail:'אתה עובד עם פלטפורמות SIEM, מנתח התראות, חוקר פעילות חשודה וכותב כללי זיהוי. מתעדף איומים באמצעות MITRE ATT&CK.',
      start:['ללמוד יסודות אבטחת רשת וניתוח לוגים','להתאמן עם Splunk או Elastic SIEM','ללמוד את מסגרת MITRE ATT&CK','להשלים SOC Level 1 ב-TryHackMe'],
      startUrls:['https://attack.mitre.org','https://tryhackme.com/path/outline/soclevel1','https://www.elastic.co/siem','https://splunk.com']
    },
    forensics: {
      emoji:'🔬', name:'חוקר פורנזיקה דיגיטלית',
      desc:'חוקר דיגיטלי — משחזר ציר זמן של התקפות מארטיפקטים',
      detail:'אתה מנתח dump-ים של זיכרון, מערכות קבצים ותעבורת רשת לאחר אירועים, מבצע הנדסה לאחור של תוכנות זדוניות ובונה ציר זמן של התקפות.',
      start:['ללמוד מערכות קבצים וארטיפקטים פורנזיים של Windows','לשלוט ב-Wireshark וניתוח תעבורה','לנסות Autopsy ו-Volatility','להשלים מסלול DFIR ב-TryHackMe'],
      startUrls:['https://tryhackme.com/path/outline/dfir','https://volatilityfoundation.org','https://www.sleuthkit.org/autopsy','https://cyberdefenders.org']
    }
  }
};

L2.security.zh = {
  questions: [
    { t:'网络安全中什么最吸引你？', o:['渗透测试——像黑客一样思考，合法入侵系统','安全运营——监控威胁，快速响应事件','应用安全——让代码从一开始就安全','数字取证——调查攻击，还原真相'], s:[{pentest:3},{soc:3},{appsec:3},{forensics:3}] },
    { t:'你最想精通哪个方向？', o:['Metasploit、Burp Suite和Web应用渗透','SIEM平台、EDR和威胁狩猎','代码安全审计和DevSecOps实践','内存取证、恶意软件分析和事件响应'], s:[{pentest:3},{soc:3},{appsec:3},{forensics:3}] },
    { t:'什么工作成果最让你有成就感？', o:['在客户发现之前找到了一个严重漏洞','发现并阻止了一次真实的入侵尝试','帮助开发团队修复了一个被利用的漏洞','溯源了一次攻击的完整过程'], s:[{pentest:3},{soc:3},{appsec:3},{forensics:3}] },
    { t:'你更喜欢哪种工作方式？', o:['尝试一切可能的方式突破目标系统','盯着日志和告警，寻找异常行为','在代码中找安全缺陷，写安全需求文档','收集证据，重建攻击者的操作路径'], s:[{pentest:3},{soc:3},{appsec:3},{forensics:3}] },
    { t:'你会选择哪个项目？', o:['对某企业做全面的Web应用渗透测试','搭建SOC的威胁检测规则体系','把安全测试集成进CI/CD流水线','分析一个真实勒索软件样本的行为'], s:[{pentest:3},{soc:3},{appsec:3},{forensics:3}] },
    { t:'10年后你在哪里？', o:['知名安全公司的红队负责人','大型企业的SOC总监','科技公司的应用安全架构师','网络犯罪调查机构的数字取证专家'], s:[{pentest:3},{soc:3},{appsec:3},{forensics:3}] }
  ],
  roles: {
    pentest: { emoji:'🔴', name:'渗透测试工程师', desc:'用攻击者的视角，在坏人之前找到系统的弱点', detail:'你是合法的黑客。客户雇用你尝试入侵他们的系统。你使用真实攻击技术——社会工程、网络渗透、Web漏洞利用，并将发现整理成报告。', start:['在TryHackMe或HackTheBox上开始实战','学习Burp Suite——Web渗透的必备工具','参加CTF比赛，从Beginner难度开始','考取CEH或OSCP认证'] },
    soc: { emoji:'🔵', name:'安全运营工程师', desc:'7×24小时监控威胁，第一时间发现并响应攻击', detail:'你是数字世界的消防员。你分析告警，调查事件，处置威胁。你使用SIEM、EDR和威胁情报平台。反应速度和分析能力同样重要。', start:['学习Splunk或Microsoft Sentinel基础','了解MITRE ATT&CK框架——攻击者战术和技术','在Blue Team Labs Online上实践','考取CompTIA Security+认证'] },
    appsec: { emoji:'🟡', name:'应用安全工程师', desc:'从设计阶段就把安全融入软件开发', detail:'你在开发团队和安全之间架起桥梁。你做代码审计、威胁建模，把安全测试集成进CI/CD，帮助开发者写出更安全的代码。', start:['学习OWASP Top 10——最常见的Web漏洞','了解SAST和DAST工具——Semgrep、OWASP ZAP','学习Secure SDLC和DevSecOps实践','阅读《Web应用黑客手册》'] },
    forensics: { emoji:'🔬', name:'数字取证专家', desc:'调查网络事件，还原攻击者的行动路径', detail:'你是数字侦探。当攻击发生后，你收集证据，分析恶意软件，重建事件时间线。你的报告可能成为法庭证据。', start:['学习内存取证——Volatility框架','了解磁盘取证——Autopsy工具','在MalwareBazaar上分析真实样本','学习事件响应流程——NIST IR指南'] }
  },
  ui: { l2back:'← 返回网络安全', title:'网络安全：选择你的专业方向' }
};
