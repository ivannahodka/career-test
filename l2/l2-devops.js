// L2 test — DevOps / SRE Engineer
// Roles: cicd 🔧 | sre 📊 | cloud ☁️ | platform 🏗️
// 6 questions × 8 languages

// ─── RU ──────────────────────────────────────────────────────────────────────
L2.devops.ru = {
  questions: [
    {
      t: 'Что тебе интереснее всего в DevOps/SRE?',
      o: [
        'Автоматизировать деплой и CI/CD пайплайны',
        'Следить за надёжностью и SLO сервисов',
        'Строить облачную инфраструктуру с нуля',
        'Создавать удобные платформы для разработчиков'
      ],
      s: [{cicd:3},{sre:3},{cloud:3},{platform:3}]
    },
    {
      t: 'Что ты делаешь первым делом, когда сервис падает в продакшне?',
      o: [
        'Пишу скрипт для автоматического восстановления',
        'Анализирую метрики и пишу подробный postmortem',
        'Масштабирую ресурсы в облаке',
        'Обновляю платформу, чтобы это не повторилось'
      ],
      s: [{cicd:3,platform:1},{sre:3},{cloud:2,sre:1},{platform:3}]
    },
    {
      t: 'Какой инструмент тебе ближе всего?',
      o: [
        'GitHub Actions / GitLab CI / Jenkins',
        'Prometheus + Grafana + PagerDuty',
        'Terraform + AWS / GCP / Azure',
        'Kubernetes + Helm + Argo CD'
      ],
      s: [{cicd:3},{sre:3},{cloud:3},{platform:3,cicd:1}]
    },
    {
      t: 'Что для тебя важнее в работе?',
      o: [
        'Частые и быстрые релизы без простоев',
        'Uptime 99.99% и мгновенная реакция на сбои',
        'Надёжная и дешёвая облачная инфраструктура',
        'Удобный опыт разработки (Developer Experience)'
      ],
      s: [{cicd:3},{sre:3},{cloud:3,sre:1},{platform:3}]
    },
    {
      t: 'Как ты относишься к дежурствам (on-call)?',
      o: [
        'Нормально, если автоматизация минимизирует алерты',
        'Люблю расследовать инциденты и находить причины',
        'Лучше строить, чем дежурить, — но могу',
        'Дежурства — сигнал автоматизировать всё больше'
      ],
      s: [{sre:2,cicd:1},{sre:3},{cloud:3,platform:2},{cicd:3,platform:1}]
    },
    {
      t: 'Как ты предпочитаешь учиться?',
      o: [
        'Прохожу сертификации: AWS, GCP или Azure',
        'Читаю postmortem от Google, Netflix, Cloudflare',
        'Разворачиваю кластер Kubernetes дома',
        'Автоматизирую рутину в собственных проектах'
      ],
      s: [{cloud:3},{sre:3},{platform:3,cicd:1},{cicd:3}]
    }
  ],
  roles: {
    cicd: {
      emoji: '🔧',
      name: 'CI/CD-инженер',
      desc: 'Строю пайплайны, которые доставляют код от разработчика до продакшна автоматически',
      detail: 'Ты настраиваешь CI/CD пайплайны, автоматизируешь тесты и деплой, следишь за скоростью доставки кода. Инструменты: GitHub Actions, GitLab CI, Jenkins, Docker.',
      start: ['GitHub Actions', 'GitLab CI Docs', 'Learn Docker'],
      startUrls: ['https://github.com/features/actions','https://docs.gitlab.com/ee/ci','https://docs.docker.com/get-started']
    },
    sre: {
      emoji: '📊',
      name: 'SRE-инженер',
      desc: 'Отвечаю за надёжность и стабильность продуктов — SLO, мониторинг, postmortem',
      detail: 'Ты определяешь SLI/SLO, настраиваешь мониторинг и алертинг, разбираешь инциденты и пишешь postmortem. Инструменты: Prometheus, Grafana, PagerDuty.',
      start: ['SRE Book (Google)', 'Prometheus', 'Coursera SRE'],
      startUrls: ['https://sre.google/sre-book/table-of-contents','https://prometheus.io/docs/introduction/overview','https://coursera.org/learn/site-reliability-engineering-slos']
    },
    cloud: {
      emoji: '☁️',
      name: 'Cloud-инженер',
      desc: 'Проектирую и управляю облачной инфраструктурой на AWS, GCP или Azure',
      detail: 'Ты описываешь инфраструктуру как код (IaC), управляешь облачными ресурсами, оптимизируешь затраты. Инструменты: Terraform, AWS, GCP, Azure.',
      start: ['AWS Free Tier', 'Google Cloud Free', 'Terraform Docs'],
      startUrls: ['https://aws.amazon.com/free','https://cloud.google.com/free','https://developer.hashicorp.com/terraform/docs']
    },
    platform: {
      emoji: '🏗️',
      name: 'Platform-инженер',
      desc: 'Создаю внутренние инструменты и платформы, которые делают работу разработчиков проще',
      detail: 'Ты строишь Internal Developer Platform (IDP), управляешь Kubernetes-кластерами, создаёшь шаблоны для команд. Инструменты: Kubernetes, Helm, Argo CD.',
      start: ['Kubernetes Tutorial', 'Helm Docs', 'Argo CD'],
      startUrls: ['https://kubernetes.io/docs/tutorials/kubernetes-basics','https://helm.sh/docs','https://argoproj.github.io/cd']
    }
  }
};

// ─── EN ──────────────────────────────────────────────────────────────────────
L2.devops.en = {
  questions: [
    {
      t: 'What interests you most in DevOps/SRE?',
      o: [
        'Automating deployments and CI/CD pipelines',
        'Monitoring service reliability and SLOs',
        'Building cloud infrastructure from scratch',
        'Creating developer-friendly internal platforms'
      ],
      s: [{cicd:3},{sre:3},{cloud:3},{platform:3}]
    },
    {
      t: 'What\'s your first move when a production service goes down?',
      o: [
        'Write a script to auto-recover and prevent recurrence',
        'Analyze metrics and write a detailed postmortem',
        'Scale resources up in the cloud',
        'Update the platform so it never happens again'
      ],
      s: [{cicd:3,platform:1},{sre:3},{cloud:2,sre:1},{platform:3}]
    },
    {
      t: 'Which toolset feels most natural to you?',
      o: [
        'GitHub Actions / GitLab CI / Jenkins',
        'Prometheus + Grafana + PagerDuty',
        'Terraform + AWS / GCP / Azure',
        'Kubernetes + Helm + Argo CD'
      ],
      s: [{cicd:3},{sre:3},{cloud:3},{platform:3,cicd:1}]
    },
    {
      t: 'What matters most to you at work?',
      o: [
        'Frequent, fast releases with zero downtime',
        '99.99% uptime and instant incident response',
        'Reliable and cost-effective cloud infrastructure',
        'Great Developer Experience (DX) for engineering teams'
      ],
      s: [{cicd:3},{sre:3},{cloud:3,sre:1},{platform:3}]
    },
    {
      t: 'How do you feel about on-call duty?',
      o: [
        'Fine — if automation keeps alert noise low',
        'I enjoy investigating incidents and finding root causes',
        'I\'d rather build than be on-call, but I can handle it',
        'On-call alerts mean I need to automate even more'
      ],
      s: [{sre:2,cicd:1},{sre:3},{cloud:3,platform:2},{cicd:3,platform:1}]
    },
    {
      t: 'How do you prefer to learn?',
      o: [
        'Studying for AWS, GCP, or Azure certifications',
        'Reading postmortems from Google, Netflix, Cloudflare',
        'Spinning up a Kubernetes cluster at home',
        'Automating repetitive tasks in my own projects'
      ],
      s: [{cloud:3},{sre:3},{platform:3,cicd:1},{cicd:3}]
    }
  ],
  roles: {
    cicd: {
      emoji: '🔧',
      name: 'CI/CD Engineer',
      desc: 'I build pipelines that deliver code from developer to production automatically',
      detail: 'You set up CI/CD pipelines, automate tests and deployments, and track delivery speed. Tools: GitHub Actions, GitLab CI, Jenkins, Docker.',
      start: ['GitHub Actions', 'GitLab CI Docs', 'Learn Docker'],
      startUrls: ['https://github.com/features/actions','https://docs.gitlab.com/ee/ci','https://docs.docker.com/get-started']
    },
    sre: {
      emoji: '📊',
      name: 'SRE Engineer',
      desc: 'I ensure product reliability and stability — SLOs, monitoring, postmortems',
      detail: 'You define SLIs/SLOs, set up monitoring and alerting, handle incidents, and write postmortems. Tools: Prometheus, Grafana, PagerDuty.',
      start: ['SRE Book (Google)', 'Prometheus', 'Coursera SRE'],
      startUrls: ['https://sre.google/sre-book/table-of-contents','https://prometheus.io/docs/introduction/overview','https://coursera.org/learn/site-reliability-engineering-slos']
    },
    cloud: {
      emoji: '☁️',
      name: 'Cloud Engineer',
      desc: 'I design and manage cloud infrastructure on AWS, GCP, or Azure',
      detail: 'You write infrastructure as code (IaC), manage cloud resources, and optimize costs. Tools: Terraform, AWS, GCP, Azure.',
      start: ['AWS Free Tier', 'Google Cloud Free', 'Terraform Docs'],
      startUrls: ['https://aws.amazon.com/free','https://cloud.google.com/free','https://developer.hashicorp.com/terraform/docs']
    },
    platform: {
      emoji: '🏗️',
      name: 'Platform Engineer',
      desc: 'I build internal tools and platforms that make developers\' lives easier',
      detail: 'You build Internal Developer Platforms (IDP), manage Kubernetes clusters, and create templates for engineering teams. Tools: Kubernetes, Helm, Argo CD.',
      start: ['Kubernetes Tutorial', 'Helm Docs', 'Argo CD'],
      startUrls: ['https://kubernetes.io/docs/tutorials/kubernetes-basics','https://helm.sh/docs','https://argoproj.github.io/cd']
    }
  }
};

// ─── DE ──────────────────────────────────────────────────────────────────────
L2.devops.de = {
  questions: [
    {
      t: 'Was interessiert dich am meisten bei DevOps/SRE?',
      o: [
        'Deployments und CI/CD-Pipelines automatisieren',
        'Zuverlässigkeit und SLOs von Services überwachen',
        'Cloud-Infrastruktur von Grund auf aufbauen',
        'Entwicklerfreundliche interne Plattformen erstellen'
      ],
      s: [{cicd:3},{sre:3},{cloud:3},{platform:3}]
    },
    {
      t: 'Was ist dein erster Schritt, wenn ein Produktionsdienst ausfällt?',
      o: [
        'Ein Skript schreiben, das automatisch wiederherstellt',
        'Metriken analysieren und ein detailliertes Postmortem schreiben',
        'Ressourcen in der Cloud skalieren',
        'Die Plattform aktualisieren, damit es nicht wieder passiert'
      ],
      s: [{cicd:3,platform:1},{sre:3},{cloud:2,sre:1},{platform:3}]
    },
    {
      t: 'Welches Toolset fühlt sich für dich am natürlichsten an?',
      o: [
        'GitHub Actions / GitLab CI / Jenkins',
        'Prometheus + Grafana + PagerDuty',
        'Terraform + AWS / GCP / Azure',
        'Kubernetes + Helm + Argo CD'
      ],
      s: [{cicd:3},{sre:3},{cloud:3},{platform:3,cicd:1}]
    },
    {
      t: 'Was ist dir bei der Arbeit am wichtigsten?',
      o: [
        'Häufige, schnelle Releases ohne Ausfallzeiten',
        '99,99% Uptime und sofortige Incident-Reaktion',
        'Zuverlässige und kostengünstige Cloud-Infrastruktur',
        'Großartige Developer Experience (DX) für Engineering-Teams'
      ],
      s: [{cicd:3},{sre:3},{cloud:3,sre:1},{platform:3}]
    },
    {
      t: 'Wie stehst du zum On-Call-Dienst?',
      o: [
        'In Ordnung, wenn Automatisierung den Alert-Lärm gering hält',
        'Ich untersuche gerne Vorfälle und finde die Ursachen',
        'Ich baue lieber, als Dienst zu haben — aber ich kann es',
        'On-Call-Alerts sind ein Zeichen, dass ich mehr automatisieren muss'
      ],
      s: [{sre:2,cicd:1},{sre:3},{cloud:3,platform:2},{cicd:3,platform:1}]
    },
    {
      t: 'Wie lernst du am liebsten?',
      o: [
        'AWS-, GCP- oder Azure-Zertifizierungen machen',
        'Postmortems von Google, Netflix, Cloudflare lesen',
        'Einen Kubernetes-Cluster zu Hause aufsetzen',
        'Sich wiederholende Aufgaben in eigenen Projekten automatisieren'
      ],
      s: [{cloud:3},{sre:3},{platform:3,cicd:1},{cicd:3}]
    }
  ],
  roles: {
    cicd: {
      emoji: '🔧',
      name: 'CI/CD-Ingenieur',
      desc: 'Ich baue Pipelines, die Code automatisch vom Entwickler bis zur Produktion liefern',
      detail: 'Du richtest CI/CD-Pipelines ein, automatisierst Tests und Deployments und verfolgst die Liefergeschwindigkeit. Tools: GitHub Actions, GitLab CI, Jenkins, Docker.',
      start: ['GitHub Actions', 'GitLab CI Docs', 'Docker lernen'],
      startUrls: ['https://github.com/features/actions','https://docs.gitlab.com/ee/ci','https://docs.docker.com/get-started']
    },
    sre: {
      emoji: '📊',
      name: 'SRE-Ingenieur',
      desc: 'Ich sorge für Produktzuverlässigkeit und -stabilität — SLOs, Monitoring, Postmortems',
      detail: 'Du definierst SLIs/SLOs, richtest Monitoring und Alerting ein, bearbeitest Incidents und schreibst Postmortems. Tools: Prometheus, Grafana, PagerDuty.',
      start: ['SRE-Buch (Google)', 'Prometheus', 'Coursera SRE'],
      startUrls: ['https://sre.google/sre-book/table-of-contents','https://prometheus.io/docs/introduction/overview','https://coursera.org/learn/site-reliability-engineering-slos']
    },
    cloud: {
      emoji: '☁️',
      name: 'Cloud-Ingenieur',
      desc: 'Ich designe und verwalte Cloud-Infrastruktur auf AWS, GCP oder Azure',
      detail: 'Du schreibst Infrastructure as Code (IaC), verwaltest Cloud-Ressourcen und optimierst Kosten. Tools: Terraform, AWS, GCP, Azure.',
      start: ['AWS Free Tier', 'Google Cloud Free', 'Terraform Docs'],
      startUrls: ['https://aws.amazon.com/free','https://cloud.google.com/free','https://developer.hashicorp.com/terraform/docs']
    },
    platform: {
      emoji: '🏗️',
      name: 'Platform-Ingenieur',
      desc: 'Ich baue interne Tools und Plattformen, die Entwicklern die Arbeit erleichtern',
      detail: 'Du baust Internal Developer Platforms (IDP), verwaltest Kubernetes-Cluster und erstellst Templates für Engineering-Teams. Tools: Kubernetes, Helm, Argo CD.',
      start: ['Kubernetes Tutorial', 'Helm Docs', 'Argo CD'],
      startUrls: ['https://kubernetes.io/docs/tutorials/kubernetes-basics','https://helm.sh/docs','https://argoproj.github.io/cd']
    }
  }
};

// ─── FR ──────────────────────────────────────────────────────────────────────
L2.devops.fr = {
  questions: [
    {
      t: 'Qu\'est-ce qui t\'intéresse le plus dans le DevOps/SRE?',
      o: [
        'Automatiser les déploiements et les pipelines CI/CD',
        'Surveiller la fiabilité des services et les SLO',
        'Construire une infrastructure cloud de zéro',
        'Créer des plateformes internes conviviales pour les développeurs'
      ],
      s: [{cicd:3},{sre:3},{cloud:3},{platform:3}]
    },
    {
      t: 'Quelle est ta première réaction quand un service de production tombe?',
      o: [
        'Écrire un script pour récupérer automatiquement et éviter la récidive',
        'Analyser les métriques et écrire un postmortem détaillé',
        'Scaler les ressources dans le cloud',
        'Mettre à jour la plateforme pour éviter que ça se reproduise'
      ],
      s: [{cicd:3,platform:1},{sre:3},{cloud:2,sre:1},{platform:3}]
    },
    {
      t: 'Quel ensemble d\'outils te semble le plus naturel?',
      o: [
        'GitHub Actions / GitLab CI / Jenkins',
        'Prometheus + Grafana + PagerDuty',
        'Terraform + AWS / GCP / Azure',
        'Kubernetes + Helm + Argo CD'
      ],
      s: [{cicd:3},{sre:3},{cloud:3},{platform:3,cicd:1}]
    },
    {
      t: 'Qu\'est-ce qui compte le plus pour toi au travail?',
      o: [
        'Des releases fréquentes et rapides sans temps d\'arrêt',
        'Un uptime de 99,99% et une réponse instantanée aux incidents',
        'Une infrastructure cloud fiable et économique',
        'Une excellente Developer Experience (DX) pour les équipes'
      ],
      s: [{cicd:3},{sre:3},{cloud:3,sre:1},{platform:3}]
    },
    {
      t: 'Comment te sens-tu par rapport aux astreintes (on-call)?',
      o: [
        'Bien, si l\'automatisation réduit le bruit des alertes',
        'J\'aime enquêter sur les incidents et trouver les causes racines',
        'Je préfère construire plutôt qu\'être de garde — mais je peux',
        'Les alertes on-call me signalent que je dois automatiser davantage'
      ],
      s: [{sre:2,cicd:1},{sre:3},{cloud:3,platform:2},{cicd:3,platform:1}]
    },
    {
      t: 'Comment préfères-tu apprendre?',
      o: [
        'Passer des certifications AWS, GCP ou Azure',
        'Lire les postmortems de Google, Netflix, Cloudflare',
        'Monter un cluster Kubernetes chez moi',
        'Automatiser les tâches répétitives dans mes propres projets'
      ],
      s: [{cloud:3},{sre:3},{platform:3,cicd:1},{cicd:3}]
    }
  ],
  roles: {
    cicd: {
      emoji: '🔧',
      name: 'Ingénieur CI/CD',
      desc: 'Je construis des pipelines qui livrent le code du développeur à la production automatiquement',
      detail: 'Tu configures des pipelines CI/CD, automatises les tests et les déploiements, et suis la vitesse de livraison. Outils: GitHub Actions, GitLab CI, Jenkins, Docker.',
      start: ['GitHub Actions', 'GitLab CI Docs', 'Apprendre Docker'],
      startUrls: ['https://github.com/features/actions','https://docs.gitlab.com/ee/ci','https://docs.docker.com/get-started']
    },
    sre: {
      emoji: '📊',
      name: 'Ingénieur SRE',
      desc: 'J\'assure la fiabilité et la stabilité des produits — SLOs, monitoring, postmortems',
      detail: 'Tu définis les SLIs/SLOs, configures le monitoring et les alertes, gères les incidents et écris des postmortems. Outils: Prometheus, Grafana, PagerDuty.',
      start: ['Livre SRE (Google)', 'Prometheus', 'Coursera SRE'],
      startUrls: ['https://sre.google/sre-book/table-of-contents','https://prometheus.io/docs/introduction/overview','https://coursera.org/learn/site-reliability-engineering-slos']
    },
    cloud: {
      emoji: '☁️',
      name: 'Ingénieur Cloud',
      desc: 'Je conçois et gère l\'infrastructure cloud sur AWS, GCP ou Azure',
      detail: 'Tu écris de l\'infrastructure as code (IaC), gères les ressources cloud et optimises les coûts. Outils: Terraform, AWS, GCP, Azure.',
      start: ['AWS Free Tier', 'Google Cloud Free', 'Terraform Docs'],
      startUrls: ['https://aws.amazon.com/free','https://cloud.google.com/free','https://developer.hashicorp.com/terraform/docs']
    },
    platform: {
      emoji: '🏗️',
      name: 'Ingénieur Platform',
      desc: 'Je crée des outils et plateformes internes qui facilitent le travail des développeurs',
      detail: 'Tu construis des Internal Developer Platforms (IDP), gères des clusters Kubernetes et crées des templates pour les équipes. Outils: Kubernetes, Helm, Argo CD.',
      start: ['Tutoriel Kubernetes', 'Helm Docs', 'Argo CD'],
      startUrls: ['https://kubernetes.io/docs/tutorials/kubernetes-basics','https://helm.sh/docs','https://argoproj.github.io/cd']
    }
  }
};

// ─── ES ──────────────────────────────────────────────────────────────────────
L2.devops.es = {
  questions: [
    {
      t: '¿Qué es lo que más te interesa en DevOps/SRE?',
      o: [
        'Automatizar despliegues y pipelines CI/CD',
        'Monitorear la confiabilidad y los SLOs de los servicios',
        'Construir infraestructura cloud desde cero',
        'Crear plataformas internas amigables para desarrolladores'
      ],
      s: [{cicd:3},{sre:3},{cloud:3},{platform:3}]
    },
    {
      t: '¿Qué haces primero cuando un servicio de producción cae?',
      o: [
        'Escribir un script para recuperar automáticamente y evitar que vuelva a pasar',
        'Analizar métricas y escribir un postmortem detallado',
        'Escalar recursos en la nube',
        'Actualizar la plataforma para que no vuelva a ocurrir'
      ],
      s: [{cicd:3,platform:1},{sre:3},{cloud:2,sre:1},{platform:3}]
    },
    {
      t: '¿Qué conjunto de herramientas te resulta más natural?',
      o: [
        'GitHub Actions / GitLab CI / Jenkins',
        'Prometheus + Grafana + PagerDuty',
        'Terraform + AWS / GCP / Azure',
        'Kubernetes + Helm + Argo CD'
      ],
      s: [{cicd:3},{sre:3},{cloud:3},{platform:3,cicd:1}]
    },
    {
      t: '¿Qué es lo más importante para ti en el trabajo?',
      o: [
        'Releases frecuentes y rápidos sin tiempo de inactividad',
        'Uptime del 99,99% y respuesta instantánea a incidentes',
        'Infraestructura cloud confiable y rentable',
        'Excelente Developer Experience (DX) para los equipos'
      ],
      s: [{cicd:3},{sre:3},{cloud:3,sre:1},{platform:3}]
    },
    {
      t: '¿Cómo te sientes respecto a las guardias (on-call)?',
      o: [
        'Bien, si la automatización mantiene bajo el ruido de alertas',
        'Me gusta investigar incidentes y encontrar causas raíz',
        'Prefiero construir antes que estar de guardia — pero puedo hacerlo',
        'Las alertas on-call son señal de que necesito automatizar más'
      ],
      s: [{sre:2,cicd:1},{sre:3},{cloud:3,platform:2},{cicd:3,platform:1}]
    },
    {
      t: '¿Cómo prefieres aprender?',
      o: [
        'Estudiando para certificaciones de AWS, GCP o Azure',
        'Leyendo postmortems de Google, Netflix, Cloudflare',
        'Levantando un clúster de Kubernetes en casa',
        'Automatizando tareas repetitivas en mis propios proyectos'
      ],
      s: [{cloud:3},{sre:3},{platform:3,cicd:1},{cicd:3}]
    }
  ],
  roles: {
    cicd: {
      emoji: '🔧',
      name: 'Ingeniero CI/CD',
      desc: 'Construyo pipelines que entregan código del desarrollador a producción de forma automática',
      detail: 'Configuras pipelines CI/CD, automatizas pruebas y despliegues, y haces seguimiento de la velocidad de entrega. Herramientas: GitHub Actions, GitLab CI, Jenkins, Docker.',
      start: ['GitHub Actions', 'GitLab CI Docs', 'Aprender Docker'],
      startUrls: ['https://github.com/features/actions','https://docs.gitlab.com/ee/ci','https://docs.docker.com/get-started']
    },
    sre: {
      emoji: '📊',
      name: 'Ingeniero SRE',
      desc: 'Garantizo la fiabilidad y estabilidad de los productos — SLOs, monitoreo, postmortems',
      detail: 'Defines SLIs/SLOs, configuras monitoreo y alertas, gestionas incidentes y escribes postmortems. Herramientas: Prometheus, Grafana, PagerDuty.',
      start: ['Libro SRE (Google)', 'Prometheus', 'Coursera SRE'],
      startUrls: ['https://sre.google/sre-book/table-of-contents','https://prometheus.io/docs/introduction/overview','https://coursera.org/learn/site-reliability-engineering-slos']
    },
    cloud: {
      emoji: '☁️',
      name: 'Ingeniero Cloud',
      desc: 'Diseño y gestiono infraestructura cloud en AWS, GCP o Azure',
      detail: 'Escribes infraestructura como código (IaC), gestionas recursos cloud y optimizas costos. Herramientas: Terraform, AWS, GCP, Azure.',
      start: ['AWS Free Tier', 'Google Cloud Free', 'Terraform Docs'],
      startUrls: ['https://aws.amazon.com/free','https://cloud.google.com/free','https://developer.hashicorp.com/terraform/docs']
    },
    platform: {
      emoji: '🏗️',
      name: 'Ingeniero de Platform',
      desc: 'Creo herramientas y plataformas internas que facilitan el trabajo de los desarrolladores',
      detail: 'Construyes Internal Developer Platforms (IDP), gestionas clústeres de Kubernetes y creas templates para equipos. Herramientas: Kubernetes, Helm, Argo CD.',
      start: ['Tutorial Kubernetes', 'Helm Docs', 'Argo CD'],
      startUrls: ['https://kubernetes.io/docs/tutorials/kubernetes-basics','https://helm.sh/docs','https://argoproj.github.io/cd']
    }
  }
};

// ─── PT ──────────────────────────────────────────────────────────────────────
L2.devops.pt = {
  questions: [
    {
      t: 'O que mais te interessa em DevOps/SRE?',
      o: [
        'Automatizar deploys e pipelines CI/CD',
        'Monitorar a confiabilidade e os SLOs dos serviços',
        'Construir infraestrutura cloud do zero',
        'Criar plataformas internas amigáveis para desenvolvedores'
      ],
      s: [{cicd:3},{sre:3},{cloud:3},{platform:3}]
    },
    {
      t: 'Qual é sua primeira reação quando um serviço de produção cai?',
      o: [
        'Escrever um script para recuperar automaticamente e evitar recorrência',
        'Analisar métricas e escrever um postmortem detalhado',
        'Escalar recursos na nuvem',
        'Atualizar a plataforma para que não aconteça de novo'
      ],
      s: [{cicd:3,platform:1},{sre:3},{cloud:2,sre:1},{platform:3}]
    },
    {
      t: 'Qual conjunto de ferramentas parece mais natural para você?',
      o: [
        'GitHub Actions / GitLab CI / Jenkins',
        'Prometheus + Grafana + PagerDuty',
        'Terraform + AWS / GCP / Azure',
        'Kubernetes + Helm + Argo CD'
      ],
      s: [{cicd:3},{sre:3},{cloud:3},{platform:3,cicd:1}]
    },
    {
      t: 'O que mais importa para você no trabalho?',
      o: [
        'Releases frequentes e rápidos sem downtime',
        'Uptime de 99,99% e resposta instantânea a incidentes',
        'Infraestrutura cloud confiável e econômica',
        'Excelente Developer Experience (DX) para as equipes'
      ],
      s: [{cicd:3},{sre:3},{cloud:3,sre:1},{platform:3}]
    },
    {
      t: 'Como você se sente em relação ao plantão (on-call)?',
      o: [
        'Tudo bem, se a automação mantiver o ruído de alertas baixo',
        'Gosto de investigar incidentes e encontrar causas raiz',
        'Prefiro construir a ficar de plantão — mas consigo lidar',
        'Alertas on-call são sinal de que preciso automatizar mais'
      ],
      s: [{sre:2,cicd:1},{sre:3},{cloud:3,platform:2},{cicd:3,platform:1}]
    },
    {
      t: 'Como você prefere aprender?',
      o: [
        'Estudando para certificações AWS, GCP ou Azure',
        'Lendo postmortems do Google, Netflix, Cloudflare',
        'Subindo um cluster Kubernetes em casa',
        'Automatizando tarefas repetitivas nos meus próprios projetos'
      ],
      s: [{cloud:3},{sre:3},{platform:3,cicd:1},{cicd:3}]
    }
  ],
  roles: {
    cicd: {
      emoji: '🔧',
      name: 'Engenheiro CI/CD',
      desc: 'Construo pipelines que entregam código do desenvolvedor para produção automaticamente',
      detail: 'Você configura pipelines CI/CD, automatiza testes e deploys, e acompanha a velocidade de entrega. Ferramentas: GitHub Actions, GitLab CI, Jenkins, Docker.',
      start: ['GitHub Actions', 'GitLab CI Docs', 'Aprender Docker'],
      startUrls: ['https://github.com/features/actions','https://docs.gitlab.com/ee/ci','https://docs.docker.com/get-started']
    },
    sre: {
      emoji: '📊',
      name: 'Engenheiro SRE',
      desc: 'Garanto a confiabilidade e estabilidade dos produtos — SLOs, monitoramento, postmortems',
      detail: 'Você define SLIs/SLOs, configura monitoramento e alertas, gerencia incidentes e escreve postmortems. Ferramentas: Prometheus, Grafana, PagerDuty.',
      start: ['Livro SRE (Google)', 'Prometheus', 'Coursera SRE'],
      startUrls: ['https://sre.google/sre-book/table-of-contents','https://prometheus.io/docs/introduction/overview','https://coursera.org/learn/site-reliability-engineering-slos']
    },
    cloud: {
      emoji: '☁️',
      name: 'Engenheiro Cloud',
      desc: 'Projeto e gerencio infraestrutura cloud na AWS, GCP ou Azure',
      detail: 'Você escreve infraestrutura como código (IaC), gerencia recursos cloud e otimiza custos. Ferramentas: Terraform, AWS, GCP, Azure.',
      start: ['AWS Free Tier', 'Google Cloud Free', 'Terraform Docs'],
      startUrls: ['https://aws.amazon.com/free','https://cloud.google.com/free','https://developer.hashicorp.com/terraform/docs']
    },
    platform: {
      emoji: '🏗️',
      name: 'Engenheiro de Platform',
      desc: 'Crio ferramentas e plataformas internas que facilitam o trabalho dos desenvolvedores',
      detail: 'Você constrói Internal Developer Platforms (IDP), gerencia clusters Kubernetes e cria templates para equipes. Ferramentas: Kubernetes, Helm, Argo CD.',
      start: ['Tutorial Kubernetes', 'Helm Docs', 'Argo CD'],
      startUrls: ['https://kubernetes.io/docs/tutorials/kubernetes-basics','https://helm.sh/docs','https://argoproj.github.io/cd']
    }
  }
};

// ─── AR ──────────────────────────────────────────────────────────────────────
L2.devops.ar = {
  questions: [
    {
      t: 'ما الذي يثير اهتمامك أكثر في DevOps/SRE؟',
      o: [
        'أتمتة النشر وخطوط أنابيب CI/CD',
        'مراقبة موثوقية الخدمات وأهداف SLO',
        'بناء البنية التحتية السحابية من الصفر',
        'إنشاء منصات داخلية سهلة الاستخدام للمطورين'
      ],
      s: [{cicd:3},{sre:3},{cloud:3},{platform:3}]
    },
    {
      t: 'ما أول ما تفعله عندما يتعطل خدمة في بيئة الإنتاج؟',
      o: [
        'كتابة سكريبت للاسترداد التلقائي ومنع التكرار',
        'تحليل المقاييس وكتابة تقرير postmortem مفصل',
        'توسيع نطاق الموارد في السحابة',
        'تحديث المنصة لمنع حدوثه مجدداً'
      ],
      s: [{cicd:3,platform:1},{sre:3},{cloud:2,sre:1},{platform:3}]
    },
    {
      t: 'أي مجموعة أدوات تشعر أنها أقرب إليك؟',
      o: [
        'GitHub Actions / GitLab CI / Jenkins',
        'Prometheus + Grafana + PagerDuty',
        'Terraform + AWS / GCP / Azure',
        'Kubernetes + Helm + Argo CD'
      ],
      s: [{cicd:3},{sre:3},{cloud:3},{platform:3,cicd:1}]
    },
    {
      t: 'ما الأهم بالنسبة لك في العمل؟',
      o: [
        'إصدارات متكررة وسريعة بدون توقف',
        'وقت تشغيل 99.99% واستجابة فورية للحوادث',
        'بنية تحتية سحابية موثوقة وفعالة من حيث التكلفة',
        'تجربة مطور رائعة (DX) للفرق الهندسية'
      ],
      s: [{cicd:3},{sre:3},{cloud:3,sre:1},{platform:3}]
    },
    {
      t: 'كيف تشعر تجاه مناوبات الطوارئ (on-call)؟',
      o: [
        'لا بأس، إذا كانت الأتمتة تقلل من ضجيج التنبيهات',
        'أحب التحقيق في الحوادث وإيجاد الأسباب الجذرية',
        'أفضل البناء على المناوبة — لكن يمكنني التعامل معها',
        'تنبيهات on-call تعني أنني بحاجة إلى أتمتة أكثر'
      ],
      s: [{sre:2,cicd:1},{sre:3},{cloud:3,platform:2},{cicd:3,platform:1}]
    },
    {
      t: 'كيف تفضل التعلم؟',
      o: [
        'الدراسة للحصول على شهادات AWS أو GCP أو Azure',
        'قراءة تقارير postmortem من Google وNetflix وCloudflare',
        'إنشاء مجموعة Kubernetes في المنزل',
        'أتمتة المهام المتكررة في مشاريعي الخاصة'
      ],
      s: [{cloud:3},{sre:3},{platform:3,cicd:1},{cicd:3}]
    }
  ],
  roles: {
    cicd: {
      emoji: '🔧',
      name: 'مهندس CI/CD',
      desc: 'أبني خطوط أنابيب تنقل الكود من المطور إلى الإنتاج تلقائياً',
      detail: 'تقوم بإعداد خطوط أنابيب CI/CD، وأتمتة الاختبارات والنشر، وتتبع سرعة التسليم. الأدوات: GitHub Actions, GitLab CI, Jenkins, Docker.',
      start: ['GitHub Actions', 'GitLab CI', 'تعلم Docker'],
      startUrls: ['https://github.com/features/actions','https://docs.gitlab.com/ee/ci','https://docs.docker.com/get-started']
    },
    sre: {
      emoji: '📊',
      name: 'مهندس SRE',
      desc: 'أضمن موثوقية واستقرار المنتجات — أهداف SLO، المراقبة، تقارير postmortem',
      detail: 'تحدد مؤشرات SLI/SLO، تعد المراقبة والتنبيهات، تتعامل مع الحوادث وتكتب تقارير postmortem. الأدوات: Prometheus, Grafana, PagerDuty.',
      start: ['كتاب SRE (Google)', 'Prometheus', 'Coursera SRE'],
      startUrls: ['https://sre.google/sre-book/table-of-contents','https://prometheus.io/docs/introduction/overview','https://coursera.org/learn/site-reliability-engineering-slos']
    },
    cloud: {
      emoji: '☁️',
      name: 'مهندس السحابة',
      desc: 'أصمم وأدير البنية التحتية السحابية على AWS أو GCP أو Azure',
      detail: 'تكتب البنية التحتية كرمز (IaC)، تدير موارد السحابة، وتحسن التكاليف. الأدوات: Terraform, AWS, GCP, Azure.',
      start: ['AWS Free Tier', 'Google Cloud Free', 'Terraform Docs'],
      startUrls: ['https://aws.amazon.com/free','https://cloud.google.com/free','https://developer.hashicorp.com/terraform/docs']
    },
    platform: {
      emoji: '🏗️',
      name: 'مهندس المنصات',
      desc: 'أبني أدوات ومنصات داخلية تسهل عمل المطورين',
      detail: 'تبني منصات المطورين الداخلية (IDP)، تدير مجموعات Kubernetes، وتنشئ قوالب للفرق الهندسية. الأدوات: Kubernetes, Helm, Argo CD.',
      start: ['تعليمي Kubernetes', 'Helm Docs', 'Argo CD'],
      startUrls: ['https://kubernetes.io/docs/tutorials/kubernetes-basics','https://helm.sh/docs','https://argoproj.github.io/cd']
    }
  }
};

// ─── HE ──────────────────────────────────────────────────────────────────────
L2.devops.he = {
  questions: [
    {
      t: 'מה הכי מעניין אותך ב-DevOps/SRE?',
      o: [
        'לאוטמט פריסות ו-CI/CD pipelines',
        'לנטר את אמינות השירותים ו-SLOs',
        'לבנות תשתית ענן מאפס',
        'ליצור פלטפורמות פנימיות ידידותיות למפתחים'
      ],
      s: [{cicd:3},{sre:3},{cloud:3},{platform:3}]
    },
    {
      t: 'מה הדבר הראשון שאתה עושה כשסרוויס בפרודקשן קורס?',
      o: [
        'כותב סקריפט לשחזור אוטומטי ומניעת הישנות',
        'מנתח מטריקות וכותב postmortem מפורט',
        'מרחיב משאבים בענן',
        'מעדכן את הפלטפורמה כך שזה לא יקרה שוב'
      ],
      s: [{cicd:3,platform:1},{sre:3},{cloud:2,sre:1},{platform:3}]
    },
    {
      t: 'איזה ערכת כלים הכי טבעית עבורך?',
      o: [
        'GitHub Actions / GitLab CI / Jenkins',
        'Prometheus + Grafana + PagerDuty',
        'Terraform + AWS / GCP / Azure',
        'Kubernetes + Helm + Argo CD'
      ],
      s: [{cicd:3},{sre:3},{cloud:3},{platform:3,cicd:1}]
    },
    {
      t: 'מה הכי חשוב לך בעבודה?',
      o: [
        'releases תכופים ומהירים ללא downtime',
        'uptime של 99.99% ותגובה מיידית לאירועים',
        'תשתית ענן אמינה וחסכונית',
        'Developer Experience מעולה לצוותי הנדסה'
      ],
      s: [{cicd:3},{sre:3},{cloud:3,sre:1},{platform:3}]
    },
    {
      t: 'איך אתה מרגיש לגבי תורנות on-call?',
      o: [
        'בסדר, אם האוטומציה מפחיתה את רעש ההתראות',
        'אני אוהב לחקור אירועים ולמצוא סיבות שורש',
        'אעדיף לבנות מאשר להיות בתורנות — אבל אני יכול',
        'התראות on-call הן סימן שאני צריך לאוטמט יותר'
      ],
      s: [{sre:2,cicd:1},{sre:3},{cloud:3,platform:2},{cicd:3,platform:1}]
    },
    {
      t: 'איך אתה מעדיף ללמוד?',
      o: [
        'לימוד לקראת הסמכות AWS, GCP או Azure',
        'קריאת postmortems מ-Google, Netflix, Cloudflare',
        'הקמת cluster Kubernetes בבית',
        'אוטומציה של משימות חוזרות בפרויקטים שלי'
      ],
      s: [{cloud:3},{sre:3},{platform:3,cicd:1},{cicd:3}]
    }
  ],
  roles: {
    cicd: {
      emoji: '🔧',
      name: 'מהנדס CI/CD',
      desc: 'אני בונה pipelines שמעבירים קוד ממפתח לפרודקשן אוטומטית',
      detail: 'אתה מגדיר CI/CD pipelines, מאוטמט בדיקות ופריסות, ועוקב אחר מהירות האספקה. כלים: GitHub Actions, GitLab CI, Jenkins, Docker.',
      start: ['GitHub Actions', 'GitLab CI Docs', 'ללמוד Docker'],
      startUrls: ['https://github.com/features/actions','https://docs.gitlab.com/ee/ci','https://docs.docker.com/get-started']
    },
    sre: {
      emoji: '📊',
      name: 'מהנדס SRE',
      desc: 'אני מבטיח אמינות ויציבות של מוצרים — SLOs, ניטור, postmortems',
      detail: 'אתה מגדיר SLIs/SLOs, מגדיר ניטור והתראות, מטפל באירועים וכותב postmortems. כלים: Prometheus, Grafana, PagerDuty.',
      start: ['ספר SRE (Google)', 'Prometheus', 'Coursera SRE'],
      startUrls: ['https://sre.google/sre-book/table-of-contents','https://prometheus.io/docs/introduction/overview','https://coursera.org/learn/site-reliability-engineering-slos']
    },
    cloud: {
      emoji: '☁️',
      name: 'מהנדס ענן',
      desc: 'אני מתכנן ומנהל תשתית ענן ב-AWS, GCP או Azure',
      detail: 'אתה כותב תשתית כקוד (IaC), מנהל משאבי ענן ומייעל עלויות. כלים: Terraform, AWS, GCP, Azure.',
      start: ['AWS Free Tier', 'Google Cloud Free', 'Terraform Docs'],
      startUrls: ['https://aws.amazon.com/free','https://cloud.google.com/free','https://developer.hashicorp.com/terraform/docs']
    },
    platform: {
      emoji: '🏗️',
      name: 'מהנדס פלטפורמה',
      desc: 'אני בונה כלים ופלטפורמות פנימיות שמקלות על עבודת המפתחים',
      detail: 'אתה בונה Internal Developer Platforms (IDP), מנהל clusters Kubernetes ויוצר תבניות לצוותים. כלים: Kubernetes, Helm, Argo CD.',
      start: ['מדריך Kubernetes', 'Helm Docs', 'Argo CD'],
      startUrls: ['https://kubernetes.io/docs/tutorials/kubernetes-basics','https://helm.sh/docs','https://argoproj.github.io/cd']
    }
  }
};

L2.devops.zh = {
  questions: [
    { t:'DevOps/SRE中什么最吸引你？', o:['云基础设施——AWS、GCP、Azure的架构设计','CI/CD——自动化构建、测试和部署流水线','可观测性——监控、日志、告警和性能分析','平台工程——内部开发者平台的构建'], s:[{cloud:3},{cicd:3},{observ:3},{platform:3}] },
    { t:'你最想精通哪项技术？', o:['Terraform和云架构设计','GitHub Actions、ArgoCD和GitOps','Prometheus、Grafana和OpenTelemetry','Kubernetes平台和开发者工具链'], s:[{cloud:3},{cicd:3},{observ:3},{platform:3}] },
    { t:'什么工作成果最让你有成就感？', o:['设计了节省30%云成本的架构','发布频率从每月一次提升到每天十次','在用户发现之前主动发现并修复了性能问题','内部开发者平台让新工程师当天就能上手'], s:[{cloud:3},{cicd:3},{observ:3},{platform:3}] },
    { t:'你更喜欢花时间做什么？', o:['设计云架构和优化资源使用','搭建和维护CI/CD流水线','分析监控数据和排查线上问题','构建让开发者更高效的平台工具'], s:[{cloud:3},{cicd:3},{observ:3},{platform:3}] },
    { t:'你会选择哪个项目？', o:['把公司业务迁移到Kubernetes','为100个微服务搭建统一的CI/CD','建立全面的可观测性体系','构建内部PaaS平台'], s:[{cloud:3},{cicd:3},{observ:3},{platform:3}] },
    { t:'10年后你在哪里？', o:['大型互联网公司的云架构师','DevOps平台团队负责人','SRE首席工程师','平台工程总监'], s:[{cloud:3},{cicd:3},{observ:3},{platform:3}] }
  ],
  roles: {
    cloud: { emoji:'☁️', name:'云架构师', desc:'设计可靠、安全且经济高效的云基础设施', detail:'你决定公司如何使用云资源。你设计多区域架构，管理IaC代码，优化成本，并确保高可用性。你是连接技术和业务的桥梁。', start:['获取AWS解决方案架构师助理认证','掌握Terraform——IaC的行业标准','学习容器化——Docker和Kubernetes基础','研究Well-Architected Framework'] },
    cicd: { emoji:'🔄', name:'CI/CD工程师', desc:'让代码从提交到生产的全过程自动化、快速且可靠', detail:'你让"代码即产品"成为现实。你设计流水线，确保每次提交都经过测试，快速安全地到达用户。发布不再是大事件，而是日常操作。', start:['学习GitHub Actions——从零开始','了解GitOps原则——ArgoCD或Flux','掌握Docker镜像构建最佳实践','学习部署策略——蓝绿、金丝雀发布'] },
    observ: { emoji:'📈', name:'可观测性工程师', desc:'让系统状态透明可见，问题在用户发现前就被解决', detail:'你让黑盒变成白盒。你构建指标、日志和链路追踪体系，设计告警规则，建立SLO机制。你是团队中第一个知道系统出问题的人。', start:['学习Prometheus和Grafana基础','了解OpenTelemetry——可观测性的统一标准','掌握SLO、SLI、SLA的概念和实践','在本地搭建监控栈并实践'] },
    platform: { emoji:'🏗️', name:'平台工程师', desc:'构建内部开发者平台，让工程师专注于业务代码', detail:'你是工程师的工程师。你构建内部工具、自助服务平台和黄金路径，让其他开发者效率倍增。你的客户是内部工程团队。', start:['了解平台工程概念——platformengineering.org','学习Backstage——开发者门户的开源标准','研究优秀的内部平台案例——Spotify、Netflix','深入学习Kubernetes运算符开发'] }
  },
  ui: { l2back:'← 返回DevOps', title:'DevOps/SRE：选择你的专业方向' }
};
