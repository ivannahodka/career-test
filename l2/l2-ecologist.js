'use strict';
/* ── L2: Эколог / Учёный-эколог ──────────────────────────────────────────────
   4 roles: field_eco 🌿 | geo_eco 🗺️ | climate_sci 🌡️ | env_consult 📋
   6 questions × 8 languages
──────────────────────────────────────────────────────────────────────────── */

// ─── RU ──────────────────────────────────────────────────────────────────────
L2.ecologist.ru = {
  questions: [
    {
      t: 'Что тебя больше всего привлекает в экологии?',
      o: [
        'Изучать живые экосистемы в поле — наблюдать за видами, брать пробы, описывать биоценозы',
        'Анализировать спутниковые снимки и строить карты изменений ландшафта',
        'Моделировать климатические сценарии и понимать, как меняется атмосфера',
        'Помогать бизнесу и государству снижать экологический вред и выстраивать устойчивую политику'
      ],
      s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}]
    },
    {
      t: 'Какая задача тебе ближе всего?',
      o: [
        'Провести биологическую инвентаризацию вида на охраняемой территории',
        'Обработать снимки Sentinel-2 в QGIS и выявить очаги вырубки леса',
        'Запустить климатическую модель в Python/R и проанализировать тренды температуры за 50 лет',
        'Написать отчёт ОВОС (оценка воздействия на окружающую среду) для нового промышленного объекта'
      ],
      s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}]
    },
    {
      t: 'Какой инструмент тебе важен больше всего?',
      o: [
        'Определители видов, полевые дневники, GPS-трекер, бинокль',
        'ArcGIS / QGIS / Google Earth Engine — геопространственный анализ',
        'Python / R / климатические модели (CMIP, WRF, ERA5)',
        'Нормативная база, EIA-методологии, Excel/Word для отчётности'
      ],
      s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}]
    },
    {
      t: 'Что для тебя главный результат работы?',
      o: [
        'Собрать данные по редкому виду и обеспечить его защиту',
        'Создать карту деградации экосистем, которая помогает принять управленческое решение',
        'Опубликовать статью с климатическими прогнозами и повлиять на научный консенсус',
        'Получить экологическое разрешение для проекта с минимальным вредом для природы'
      ],
      s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}]
    },
    {
      t: 'С кем тебе интереснее работать?',
      o: [
        'С командой биологов и рейнджеров в заповеднике',
        'С картографами, дата-инженерами и геоинформационными специалистами',
        'С физиками, климатологами, международными исследовательскими группами',
        'С юристами, инженерами и топ-менеджментом промышленных компаний'
      ],
      s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}]
    },
    {
      t: 'Как выглядит твой успех через 5 лет?',
      o: [
        'Руководитель полевых исследований крупного заповедника или национального парка',
        'GIS-эксперт в международной природоохранной организации (WWF, IUCN)',
        'Ведущий климатолог в академическом институте или рабочей группе IPCC',
        'Директор по устойчивому развитию (CSO) или партнёр ESG-консалтинга'
      ],
      s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}]
    }
  ],
  roles: {
    field_eco: {
      emoji: '🌿',
      name: 'Полевой эколог',
      desc: 'Изучаешь экосистемы напрямую — ведёшь наблюдения, собираешь данные о видах и биотопах в природных условиях',
      detail: 'Ты учёный на передовой. Выезжаешь в экспедиции, закладываешь пробные площадки, ведёшь мониторинг популяций и описываешь состояние экосистем. Твои данные — основа для охраны природы и научных публикаций.',
      start: ['Освой методы полевых биологических исследований (трансекты, маршрутный учёт)', 'Изучи основы биостатистики: R или Python для анализа полевых данных', 'Пройди курс по экологии и охране природы на Coursera', 'Присоединись к гражданским научным проектам (iNaturalist, eBird)'],
      startUrls: ['https://www.inaturalist.org','https://www.coursera.org/learn/introduction-to-sustainability','https://www.r-project.org','https://ebird.org']
    },
    geo_eco: {
      emoji: '🗺️',
      name: 'ГИС-эколог / Геопространственный аналитик',
      desc: 'Применяешь геоинформационные технологии и дистанционное зондирование для анализа состояния экосистем',
      detail: 'Ты работаешь с космическими снимками, строишь карты биоразнообразия, лесного покрова, деградации почв. Твои карты помогают принимать решения по охране природных территорий и планированию землепользования.',
      start: ['Изучи QGIS (бесплатный) или ArcGIS Pro — базовый и продвинутый уровень', 'Освой Google Earth Engine для анализа больших массивов спутниковых данных', 'Пройди курс Remote Sensing на Coursera или edX', 'Изучи Python для геопространственного анализа: библиотеки geopandas, rasterio'],
      startUrls: ['https://qgis.org','https://earthengine.google.com','https://www.coursera.org/learn/remote-sensing','https://geopandas.org']
    },
    climate_sci: {
      emoji: '🌡️',
      name: 'Климатолог / Учёный-эколог',
      desc: 'Исследуешь изменение климата, моделируешь атмосферные процессы и публикуешь научные работы мирового уровня',
      detail: 'Ты занимаешься фундаментальной наукой. Обрабатываешь данные климатических моделей, анализируешь временны́е ряды температуры, осадков, уровня CO₂. Твои публикации влияют на глобальную климатическую политику.',
      start: ['Изучи климатические датасеты: ERA5 (Copernicus), CMIP6, NOAA', 'Освой Python (xarray, netCDF4, cartopy) для работы с климатическими данными', 'Пройди курс "Climate Change: The Science" на edX (MITx)', 'Читай IPCC Assessment Reports и учись интерпретировать климатические модели'],
      startUrls: ['https://cds.climate.copernicus.eu','https://www.edx.org/course/climate-change-the-science','https://xarray.pydata.org','https://www.ipcc.ch/reports/']
    },
    env_consult: {
      emoji: '📋',
      name: 'Эколог-консультант / ESG-специалист',
      desc: 'Помогаешь компаниям и государству соответствовать экологическим требованиям и внедрять устойчивые практики',
      detail: 'Ты мост между природой и бизнесом. Проводишь экологические экспертизы, пишешь ОВОС, консультируешь по ESG-стандартам, помогаешь получать разрешения и снижать экологический след компаний.',
      start: ['Изучи законодательство об охране окружающей среды твоей страны и директивы ЕС', 'Освой методологию ОВОС / EIA (Environmental Impact Assessment)', 'Пройди курс по ESG и устойчивому развитию (GRI, SASB стандарты)', 'Изучи ISO 14001 — стандарт экологического менеджмента'],
      startUrls: ['https://www.ifc.org/en/what-we-do/sector-expertise/environmental-social-governance','https://www.globalreporting.org','https://www.iso.org/iso-14001-environmental-management.html','https://www.coursera.org/learn/sustainable-development']
    }
  },
  ui: {
    tag: 'Эколог',
    title: 'Какой эколог ты?',
    subtitle: '6 вопросов — найди свою нишу в экологии',
    prog: 'Вопрос %d из 6',
    hint: 'Выбери один вариант',
    back: '← Назад',
    next: 'Далее →',
    finish: 'Показать результат',
    winBadge: 'Твоя ниша в экологии',
    resTag: 'Результат',
    resSub: 'Твой путь в экологии',
    lblStart: 'С чего начать:',
    l2back: '← Назад к результатам'
  }
};

// ─── EN ──────────────────────────────────────────────────────────────────────
L2.ecologist.en = {
  questions: [
    { t: 'What attracts you most about ecology?', o: ['Studying living ecosystems in the field — observing species, collecting samples, describing biocenoses','Analysing satellite imagery and mapping landscape changes','Modelling climate scenarios and understanding how the atmosphere is changing','Helping businesses and governments reduce environmental harm and build sustainable policy'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: 'Which task suits you best?', o: ['Conducting a biological inventory of a species in a protected area','Processing Sentinel-2 imagery in QGIS to detect deforestation hotspots','Running a climate model in Python/R and analysing 50-year temperature trends','Writing an Environmental Impact Assessment (EIA) for a new industrial facility'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: 'Which tool matters most to you?', o: ['Field guides, field notebooks, GPS tracker, binoculars','ArcGIS / QGIS / Google Earth Engine — geospatial analysis','Python / R / climate models (CMIP, WRF, ERA5)','Regulatory frameworks, EIA methodologies, Excel/Word for reporting'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: 'What is the most important outcome of your work?', o: ['Collecting data on a rare species and securing its protection','Creating an ecosystem degradation map that supports management decisions','Publishing a paper with climate projections that shapes the scientific consensus','Obtaining environmental approval for a project with minimal harm to nature'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: 'Who do you most enjoy working with?', o: ['A team of biologists and rangers in a nature reserve','Cartographers, data engineers, and GIS specialists','Physicists, climatologists, and international research groups','Lawyers, engineers, and top management of industrial companies'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: 'What does success look like for you in 5 years?', o: ['Head of field research at a major nature reserve or national park','GIS expert at an international conservation organisation (WWF, IUCN)','Leading climate scientist at an academic institute or IPCC working group','Chief Sustainability Officer (CSO) or partner at an ESG consultancy'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] }
  ],
  roles: {
    field_eco: { emoji:'🌿', name:'Field Ecologist', desc:'You study ecosystems first-hand — conducting observations, collecting species data, and describing habitats in natural conditions', detail:'You are a scientist on the front line. You go on expeditions, set up study plots, monitor populations, and describe ecosystem health. Your data underpins conservation decisions and scientific publications.', start:['Master field biological survey methods (transects, point counts, mark-recapture)','Learn biostatistics: R or Python for analysing field data','Take an ecology and conservation course on Coursera','Join citizen science projects (iNaturalist, eBird)'], startUrls:['https://www.inaturalist.org','https://www.coursera.org/learn/introduction-to-sustainability','https://www.r-project.org','https://ebird.org'] },
    geo_eco: { emoji:'🗺️', name:'GIS Ecologist / Geospatial Analyst', desc:'You apply geospatial technologies and remote sensing to analyse the state of ecosystems', detail:'You work with satellite imagery, map biodiversity, forest cover, and soil degradation. Your maps inform decisions on protected area management and land-use planning.', start:['Learn QGIS (free) or ArcGIS Pro — basic and advanced levels','Master Google Earth Engine for large-scale satellite data analysis','Take a Remote Sensing course on Coursera or edX','Learn Python for geospatial analysis: geopandas, rasterio'], startUrls:['https://qgis.org','https://earthengine.google.com','https://www.coursera.org/learn/remote-sensing','https://geopandas.org'] },
    climate_sci: { emoji:'🌡️', name:'Climate Scientist / Ecological Researcher', desc:'You research climate change, model atmospheric processes, and publish world-class scientific work', detail:'You do fundamental science. You process climate model outputs, analyse temperature, precipitation, and CO₂ time series. Your publications influence global climate policy.', start:['Explore key climate datasets: ERA5 (Copernicus), CMIP6, NOAA','Learn Python for climate data: xarray, netCDF4, cartopy','Take "Climate Change: The Science" on edX (MITx)','Read IPCC Assessment Reports and learn to interpret climate models'], startUrls:['https://cds.climate.copernicus.eu','https://www.edx.org/course/climate-change-the-science','https://xarray.pydata.org','https://www.ipcc.ch/reports/'] },
    env_consult: { emoji:'📋', name:'Environmental Consultant / ESG Specialist', desc:'You help companies and governments meet environmental requirements and implement sustainable practices', detail:'You are the bridge between nature and business. You conduct environmental assessments, write EIAs, advise on ESG standards, help obtain permits, and reduce companies\' ecological footprint.', start:['Study environmental law in your country and EU directives','Master EIA (Environmental Impact Assessment) methodology','Take an ESG and sustainability course (GRI, SASB standards)','Study ISO 14001 — the environmental management standard'], startUrls:['https://www.ifc.org/en/what-we-do/sector-expertise/environmental-social-governance','https://www.globalreporting.org','https://www.iso.org/iso-14001-environmental-management.html','https://www.coursera.org/learn/sustainable-development'] }
  },
  ui: { tag:'Ecologist', title:'What kind of ecologist are you?', subtitle:'6 questions to find your niche in ecology', prog:'Question %d of 6', hint:'Choose one option', back:'← Back', next:'Next →', finish:'Show result', winBadge:'Your niche in ecology', resTag:'Result', resSub:'Your path in ecology', lblStart:'Where to start:', l2back:'← Back to results' }
};

// ─── DE ──────────────────────────────────────────────────────────────────────
L2.ecologist.de = {
  questions: [
    { t: 'Was zieht dich an der Ökologie am meisten an?', o: ['Lebende Ökosysteme im Feld studieren — Arten beobachten, Proben nehmen, Biozönosen beschreiben','Satellitenbilder analysieren und Karten des Landschaftswandels erstellen','Klimaszenarien modellieren und verstehen, wie sich die Atmosphäre verändert','Unternehmen und Behörden helfen, Umweltschäden zu reduzieren und eine nachhaltige Politik aufzubauen'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: 'Welche Aufgabe liegt dir am nächsten?', o: ['Eine biologische Bestandsaufnahme einer Art in einem Schutzgebiet durchführen','Sentinel-2-Bilder in QGIS verarbeiten und Abholzungsherde identifizieren','Ein Klimamodell in Python/R ausführen und 50-jährige Temperaturtrends analysieren','Einen Umweltverträglichkeitsbericht (UVP) für ein neues Industrieprojekt erstellen'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: 'Welches Werkzeug ist dir am wichtigsten?', o: ['Feldführer, Feldtagebücher, GPS-Tracker, Fernglas','ArcGIS / QGIS / Google Earth Engine — Geospatial-Analyse','Python / R / Klimamodelle (CMIP, WRF, ERA5)','Regulatorische Rahmenbedingungen, UVP-Methoden, Excel/Word für Berichte'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: 'Was ist das wichtigste Ergebnis deiner Arbeit?', o: ['Daten zu einer seltenen Art sammeln und ihren Schutz sicherstellen','Eine Karte der Ökosystemdegradation erstellen, die Managemententscheidungen unterstützt','Ein Paper mit Klimaprojektionen veröffentlichen und den wissenschaftlichen Konsens mitgestalten','Eine Umweltgenehmigung für ein Projekt mit minimalem Naturschaden erhalten'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: 'Mit wem arbeitest du am liebsten?', o: ['Mit einem Team aus Biologen und Rangern in einem Naturschutzgebiet','Mit Kartographen, Dateningenieuren und GIS-Spezialisten','Mit Physikern, Klimaforschern und internationalen Forschungsgruppen','Mit Juristen, Ingenieuren und dem Top-Management von Industrieunternehmen'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: 'Wie sieht dein Erfolg in 5 Jahren aus?', o: ['Leitung der Feldforschung in einem großen Naturschutzgebiet oder Nationalpark','GIS-Experte bei einer internationalen Naturschutzorganisation (WWF, IUCN)','Führender Klimaforscher an einem akademischen Institut oder einer IPCC-Arbeitsgruppe','Chief Sustainability Officer (CSO) oder Partner einer ESG-Unternehmensberatung'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] }
  ],
  roles: {
    field_eco: { emoji:'🌿', name:'Feldökologe', desc:'Du erforschst Ökosysteme direkt — beobachtest Arten, sammelst Daten und beschreibst Lebensräume unter natürlichen Bedingungen', detail:'Du bist Wissenschaftler an der Front. Du nimmst an Expeditionen teil, legst Untersuchungsflächen an, überwachst Populationen und beschreibst den Zustand von Ökosystemen. Deine Daten sind die Grundlage für Naturschutz und wissenschaftliche Veröffentlichungen.', start:['Feldbiologische Erhebungsmethoden erlernen (Transekte, Punktzählungen)','Biostatistik lernen: R oder Python für die Analyse von Felddaten','Einen Kurs zu Ökologie und Naturschutz auf Coursera belegen','An Citizen-Science-Projekten teilnehmen (iNaturalist, eBird)'], startUrls:['https://www.inaturalist.org','https://www.coursera.org/learn/introduction-to-sustainability','https://www.r-project.org','https://ebird.org'] },
    geo_eco: { emoji:'🗺️', name:'GIS-Ökologe / Geospatial-Analyst', desc:'Du nutzt Geoinformationstechnologien und Fernerkundung, um den Zustand von Ökosystemen zu analysieren', detail:'Du arbeitest mit Satellitenbildern, kartierst Biodiversität, Waldbedeckung und Bodendegradation. Deine Karten unterstützen Entscheidungen im Schutzgebietsmanagement und der Raumplanung.', start:['QGIS (kostenlos) oder ArcGIS Pro lernen — Grund- und Fortgeschrittenenstufe','Google Earth Engine für die Analyse großer Satellitendatensätze meistern','Einen Kurs zu Remote Sensing auf Coursera oder edX belegen','Python für Geospatial-Analyse lernen: geopandas, rasterio'], startUrls:['https://qgis.org','https://earthengine.google.com','https://www.coursera.org/learn/remote-sensing','https://geopandas.org'] },
    climate_sci: { emoji:'🌡️', name:'Klimatologe / Ökologischer Forscher', desc:'Du erforschst den Klimawandel, modellierst atmosphärische Prozesse und veröffentlichst wissenschaftliche Arbeiten von Weltrang', detail:'Du betreibst Grundlagenforschung. Du verarbeitest Klimamodelldaten, analysierst Zeitreihen von Temperatur, Niederschlag und CO₂. Deine Veröffentlichungen beeinflussen die globale Klimapolitik.', start:['Wichtige Klimadatensätze erkunden: ERA5 (Copernicus), CMIP6, NOAA','Python für Klimadaten lernen: xarray, netCDF4, cartopy','„Climate Change: The Science" auf edX (MITx) belegen','IPCC-Sachstandsberichte lesen und Klimamodelle interpretieren lernen'], startUrls:['https://cds.climate.copernicus.eu','https://www.edx.org/course/climate-change-the-science','https://xarray.pydata.org','https://www.ipcc.ch/reports/'] },
    env_consult: { emoji:'📋', name:'Umweltberater / ESG-Spezialist', desc:'Du hilfst Unternehmen und Behörden, Umweltanforderungen zu erfüllen und nachhaltige Praktiken einzuführen', detail:'Du bist die Brücke zwischen Natur und Wirtschaft. Du führst Umweltverträglichkeitsprüfungen durch, erstellst UVP-Berichte, berätst zu ESG-Standards, hilfst bei der Genehmigungserteilung und reduzierst den ökologischen Fußabdruck von Unternehmen.', start:['Umweltrecht in deinem Land und EU-Richtlinien studieren','UVP-Methodik (Umweltverträglichkeitsprüfung) beherrschen','Einen ESG- und Nachhaltigkeitskurs belegen (GRI, SASB-Standards)','ISO 14001 — den Umweltmanagementsystem-Standard studieren'], startUrls:['https://www.ifc.org/en/what-we-do/sector-expertise/environmental-social-governance','https://www.globalreporting.org','https://www.iso.org/iso-14001-environmental-management.html','https://www.coursera.org/learn/sustainable-development'] }
  },
  ui: { tag:'Ökologe', title:'Was für ein Ökologe bist du?', subtitle:'6 Fragen, um deine Nische in der Ökologie zu finden', prog:'Frage %d von 6', hint:'Wähle eine Option', back:'← Zurück', next:'Weiter →', finish:'Ergebnis anzeigen', winBadge:'Deine Nische in der Ökologie', resTag:'Ergebnis', resSub:'Dein Weg in der Ökologie', lblStart:'Wo anfangen:', l2back:'← Zurück zu den Ergebnissen' }
};

// ─── FR ──────────────────────────────────────────────────────────────────────
L2.ecologist.fr = {
  questions: [
    { t: "Qu'est-ce qui t'attire le plus dans l'écologie ?", o: ["Étudier les écosystèmes vivants sur le terrain — observer les espèces, prélever des échantillons, décrire les biocénoses","Analyser des images satellites et cartographier les changements de paysage","Modéliser des scénarios climatiques et comprendre comment l'atmosphère évolue","Aider les entreprises et les gouvernements à réduire les dommages environnementaux et à construire une politique durable"], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: 'Quelle tâche te correspond le mieux ?', o: ["Réaliser un inventaire biologique d'une espèce dans une zone protégée","Traiter des images Sentinel-2 dans QGIS pour identifier des foyers de déforestation","Lancer un modèle climatique en Python/R et analyser les tendances de température sur 50 ans","Rédiger une étude d'impact environnemental (EIE) pour un nouveau projet industriel"], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: "Quel outil est le plus important pour toi ?", o: ['Guides de terrain, carnets de notes, traceur GPS, jumelles','ArcGIS / QGIS / Google Earth Engine — analyse géospatiale','Python / R / modèles climatiques (CMIP, WRF, ERA5)',"Cadres réglementaires, méthodologies EIE, Excel/Word pour les rapports"], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: "Quel est le résultat le plus important de ton travail ?", o: ["Collecter des données sur une espèce rare et assurer sa protection","Créer une carte de dégradation des écosystèmes qui aide à prendre des décisions de gestion","Publier un article avec des projections climatiques qui influence le consensus scientifique","Obtenir un permis environnemental pour un projet avec un impact minimal sur la nature"], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: 'Avec qui aimes-tu le plus travailler ?', o: ["Avec une équipe de biologistes et de rangers dans une réserve naturelle","Avec des cartographes, des ingénieurs de données et des spécialistes SIG","Avec des physiciens, des climatologues et des groupes de recherche internationaux","Avec des juristes, des ingénieurs et la direction générale d'entreprises industrielles"], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: 'À quoi ressemble ton succès dans 5 ans ?', o: ["Responsable de la recherche de terrain dans une grande réserve naturelle ou un parc national","Expert SIG dans une organisation internationale de conservation (WWF, UICN)","Climatologue de premier plan dans un institut académique ou un groupe de travail du GIEC","Directeur du développement durable (CSO) ou associé dans un cabinet de conseil ESG"], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] }
  ],
  roles: {
    field_eco: { emoji:'🌿', name:'Écologue de terrain', desc:"Tu étudies les écosystèmes directement — en observant les espèces, collectant des données et décrivant les habitats dans des conditions naturelles", detail:"Tu es un scientifique en première ligne. Tu pars en expédition, établis des placettes d'étude, surveilles les populations et décris l'état des écosystèmes. Tes données constituent la base des décisions de conservation et des publications scientifiques.", start:['Maîtriser les méthodes de relevés biologiques de terrain (transects, points-comptages)','Apprendre la biostatistique : R ou Python pour analyser les données de terrain','Suivre un cours sur l\'écologie et la conservation sur Coursera','Participer à des projets de science citoyenne (iNaturalist, eBird)'], startUrls:['https://www.inaturalist.org','https://www.coursera.org/learn/introduction-to-sustainability','https://www.r-project.org','https://ebird.org'] },
    geo_eco: { emoji:'🗺️', name:'Écologue SIG / Analyste géospatial', desc:'Tu appliques les technologies géospatiales et la télédétection pour analyser l\'état des écosystèmes', detail:'Tu travailles avec des images satellites, tu cartographies la biodiversité, le couvert forestier et la dégradation des sols. Tes cartes éclairent les décisions de gestion des zones protégées et de planification de l\'occupation des sols.', start:['Apprendre QGIS (gratuit) ou ArcGIS Pro — niveaux de base et avancé','Maîtriser Google Earth Engine pour l\'analyse de grandes masses de données satellitaires','Suivre un cours de télédétection sur Coursera ou edX','Apprendre Python pour l\'analyse géospatiale : geopandas, rasterio'], startUrls:['https://qgis.org','https://earthengine.google.com','https://www.coursera.org/learn/remote-sensing','https://geopandas.org'] },
    climate_sci: { emoji:'🌡️', name:'Climatologue / Chercheur en écologie', desc:'Tu étudies le changement climatique, modélises les processus atmosphériques et publies des travaux scientifiques de niveau mondial', detail:'Tu fais de la recherche fondamentale. Tu traites les sorties de modèles climatiques, analyses des séries temporelles de température, de précipitations et de CO₂. Tes publications influencent la politique climatique mondiale.', start:['Explorer les jeux de données climatiques clés : ERA5 (Copernicus), CMIP6, NOAA','Apprendre Python pour les données climatiques : xarray, netCDF4, cartopy','Suivre « Climate Change : The Science » sur edX (MITx)','Lire les rapports d\'évaluation du GIEC et apprendre à interpréter les modèles climatiques'], startUrls:['https://cds.climate.copernicus.eu','https://www.edx.org/course/climate-change-the-science','https://xarray.pydata.org','https://www.ipcc.ch/reports/'] },
    env_consult: { emoji:'📋', name:'Consultant environnemental / Spécialiste ESG', desc:'Tu aides les entreprises et les gouvernements à respecter les exigences environnementales et à mettre en œuvre des pratiques durables', detail:'Tu es le pont entre la nature et les affaires. Tu réalises des études d\'impact environnemental, rédiges des EIE, conseilles sur les normes ESG, aides à obtenir des autorisations et réduis l\'empreinte écologique des entreprises.', start:['Étudier le droit de l\'environnement dans ton pays et les directives européennes','Maîtriser la méthodologie EIE (Étude d\'impact environnemental)','Suivre un cours sur l\'ESG et le développement durable (normes GRI, SASB)','Étudier ISO 14001 — la norme de management environnemental'], startUrls:['https://www.ifc.org/en/what-we-do/sector-expertise/environmental-social-governance','https://www.globalreporting.org','https://www.iso.org/iso-14001-environmental-management.html','https://www.coursera.org/learn/sustainable-development'] }
  },
  ui: { tag:'Écologue', title:'Quel type d\'écologue es-tu ?', subtitle:'6 questions pour trouver ta niche en écologie', prog:'Question %d sur 6', hint:'Choisis une option', back:'← Retour', next:'Suivant →', finish:'Voir mon résultat', winBadge:'Ta niche en écologie', resTag:'Résultat', resSub:'Ton chemin en écologie', lblStart:'Par où commencer :', l2back:'← Retour aux résultats' }
};

// ─── ES ──────────────────────────────────────────────────────────────────────
L2.ecologist.es = {
  questions: [
    { t: '¿Qué es lo que más te atrae de la ecología?', o: ['Estudiar ecosistemas vivos en el campo: observar especies, tomar muestras y describir biocenosis','Analizar imágenes satelitales y cartografiar los cambios del paisaje','Modelar escenarios climáticos y comprender cómo cambia la atmósfera','Ayudar a empresas y gobiernos a reducir el daño ambiental y construir políticas sostenibles'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: '¿Qué tarea te resulta más natural?', o: ['Realizar un inventario biológico de una especie en un área protegida','Procesar imágenes Sentinel-2 en QGIS para identificar focos de deforestación','Ejecutar un modelo climático en Python/R y analizar tendencias de temperatura durante 50 años','Redactar un Estudio de Impacto Ambiental (EIA) para un nuevo proyecto industrial'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: '¿Qué herramienta es más importante para ti?', o: ['Guías de campo, cuadernos de notas, rastreador GPS, binoculares','ArcGIS / QGIS / Google Earth Engine — análisis geoespacial','Python / R / modelos climáticos (CMIP, WRF, ERA5)','Marcos regulatorios, metodologías EIA, Excel/Word para informes'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: '¿Cuál es el resultado más importante de tu trabajo?', o: ['Recopilar datos sobre una especie rara y garantizar su protección','Crear un mapa de degradación de ecosistemas que apoye decisiones de gestión','Publicar un artículo con proyecciones climáticas que influya en el consenso científico','Obtener un permiso ambiental para un proyecto con el mínimo impacto en la naturaleza'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: '¿Con quién disfrutas más trabajar?', o: ['Con un equipo de biólogos y guardabosques en una reserva natural','Con cartógrafos, ingenieros de datos y especialistas en SIG','Con físicos, climatólogos y grupos de investigación internacionales','Con abogados, ingenieros y la alta dirección de empresas industriales'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: '¿Cómo luce tu éxito en 5 años?', o: ['Jefe de investigación de campo en una gran reserva natural o parque nacional','Experto en SIG en una organización internacional de conservación (WWF, UICN)','Climatólogo líder en un instituto académico o grupo de trabajo del IPCC','Director de Sostenibilidad (CSO) o socio en una consultoría ESG'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] }
  ],
  roles: {
    field_eco: { emoji:'🌿', name:'Ecólogo de campo', desc:'Estudias ecosistemas directamente: observas especies, recopilas datos y describes hábitats en condiciones naturales', detail:'Eres un científico en la primera línea. Participas en expediciones, estableces parcelas de estudio, monitoreas poblaciones y describes el estado de los ecosistemas. Tus datos son la base de las decisiones de conservación y las publicaciones científicas.', start:['Dominar métodos de muestreo biológico en campo (transectos, conteos por puntos)','Aprender bioestadística: R o Python para analizar datos de campo','Tomar un curso de ecología y conservación en Coursera','Participar en proyectos de ciencia ciudadana (iNaturalist, eBird)'], startUrls:['https://www.inaturalist.org','https://www.coursera.org/learn/introduction-to-sustainability','https://www.r-project.org','https://ebird.org'] },
    geo_eco: { emoji:'🗺️', name:'Ecólogo SIG / Analista Geoespacial', desc:'Aplicas tecnologías geoespaciales y teledetección para analizar el estado de los ecosistemas', detail:'Trabajas con imágenes satelitales, cartografías biodiversidad, cobertura forestal y degradación del suelo. Tus mapas informan decisiones de gestión de áreas protegidas y planificación del uso del suelo.', start:['Aprender QGIS (gratuito) o ArcGIS Pro — niveles básico y avanzado','Dominar Google Earth Engine para el análisis de grandes volúmenes de datos satelitales','Tomar un curso de teledetección en Coursera o edX','Aprender Python para análisis geoespacial: geopandas, rasterio'], startUrls:['https://qgis.org','https://earthengine.google.com','https://www.coursera.org/learn/remote-sensing','https://geopandas.org'] },
    climate_sci: { emoji:'🌡️', name:'Climatólogo / Investigador Ecológico', desc:'Investigas el cambio climático, modelas procesos atmosféricos y publicas trabajos científicos de nivel mundial', detail:'Haces ciencia fundamental. Procesas salidas de modelos climáticos, analizas series temporales de temperatura, precipitación y CO₂. Tus publicaciones influyen en la política climática global.', start:['Explorar conjuntos de datos climáticos clave: ERA5 (Copernicus), CMIP6, NOAA','Aprender Python para datos climáticos: xarray, netCDF4, cartopy','Tomar «Climate Change: The Science» en edX (MITx)','Leer los informes de evaluación del IPCC y aprender a interpretar modelos climáticos'], startUrls:['https://cds.climate.copernicus.eu','https://www.edx.org/course/climate-change-the-science','https://xarray.pydata.org','https://www.ipcc.ch/reports/'] },
    env_consult: { emoji:'📋', name:'Consultor Ambiental / Especialista ESG', desc:'Ayudas a empresas y gobiernos a cumplir los requisitos ambientales e implementar prácticas sostenibles', detail:'Eres el puente entre la naturaleza y los negocios. Realizas evaluaciones de impacto ambiental, redactas EIAs, asesoras sobre estándares ESG, ayudas a obtener permisos y reduces la huella ecológica de las empresas.', start:['Estudiar la legislación ambiental de tu país y las directivas de la UE','Dominar la metodología EIA (Evaluación de Impacto Ambiental)','Tomar un curso sobre ESG y sostenibilidad (estándares GRI, SASB)','Estudiar ISO 14001 — la norma de gestión ambiental'], startUrls:['https://www.ifc.org/en/what-we-do/sector-expertise/environmental-social-governance','https://www.globalreporting.org','https://www.iso.org/iso-14001-environmental-management.html','https://www.coursera.org/learn/sustainable-development'] }
  },
  ui: { tag:'Ecólogo', title:'¿Qué tipo de ecólogo eres?', subtitle:'6 preguntas para encontrar tu nicho en ecología', prog:'Pregunta %d de 6', hint:'Elige una opción', back:'← Atrás', next:'Siguiente →', finish:'Ver mi resultado', winBadge:'Tu nicho en ecología', resTag:'Resultado', resSub:'Tu camino en ecología', lblStart:'Por dónde empezar:', l2back:'← Volver a los resultados' }
};

// ─── PT ──────────────────────────────────────────────────────────────────────
L2.ecologist.pt = {
  questions: [
    { t: 'O que mais te atrai na ecologia?', o: ['Estudar ecossistemas vivos no campo — observar espécies, coletar amostras, descrever biocenoses','Analisar imagens de satélite e mapear mudanças na paisagem','Modelar cenários climáticos e entender como a atmosfera está mudando','Ajudar empresas e governos a reduzir danos ambientais e construir políticas sustentáveis'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: 'Qual tarefa é mais natural para você?', o: ['Realizar um inventário biológico de uma espécie em uma área protegida','Processar imagens Sentinel-2 no QGIS para identificar focos de desmatamento','Executar um modelo climático em Python/R e analisar tendências de temperatura ao longo de 50 anos','Redigir um Estudo de Impacto Ambiental (EIA) para um novo empreendimento industrial'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: 'Qual ferramenta é mais importante para você?', o: ['Guias de campo, cadernetas, rastreador GPS, binóculo','ArcGIS / QGIS / Google Earth Engine — análise geoespacial','Python / R / modelos climáticos (CMIP, WRF, ERA5)','Marcos regulatórios, metodologias EIA, Excel/Word para relatórios'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: 'Qual é o resultado mais importante do seu trabalho?', o: ['Coletar dados sobre uma espécie rara e garantir sua proteção','Criar um mapa de degradação de ecossistemas que apoie decisões de gestão','Publicar um artigo com projeções climáticas que influencie o consenso científico','Obter uma licença ambiental para um projeto com impacto mínimo na natureza'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: 'Com quem você mais gosta de trabalhar?', o: ['Com uma equipe de biólogos e guardas florestais em uma reserva natural','Com cartógrafos, engenheiros de dados e especialistas em SIG','Com físicos, climatologistas e grupos de pesquisa internacionais','Com advogados, engenheiros e a alta direção de empresas industriais'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: 'Como é o seu sucesso em 5 anos?', o: ['Chefe de pesquisa de campo em uma grande reserva natural ou parque nacional','Especialista em SIG em uma organização internacional de conservação (WWF, UICN)','Climatologista líder em um instituto acadêmico ou grupo de trabalho do IPCC','Diretor de Sustentabilidade (CSO) ou sócio de uma consultoria ESG'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] }
  ],
  roles: {
    field_eco: { emoji:'🌿', name:'Ecólogo de campo', desc:'Você estuda ecossistemas diretamente — observa espécies, coleta dados e descreve habitats em condições naturais', detail:'Você é um cientista na linha de frente. Participa de expedições, estabelece parcelas de estudo, monitora populações e descreve o estado dos ecossistemas. Seus dados são a base das decisões de conservação e publicações científicas.', start:['Dominar métodos de levantamento biológico em campo (transectos, contagem por pontos)','Aprender bioestatística: R ou Python para analisar dados de campo','Fazer um curso de ecologia e conservação no Coursera','Participar de projetos de ciência cidadã (iNaturalist, eBird)'], startUrls:['https://www.inaturalist.org','https://www.coursera.org/learn/introduction-to-sustainability','https://www.r-project.org','https://ebird.org'] },
    geo_eco: { emoji:'🗺️', name:'Ecólogo SIG / Analista Geoespacial', desc:'Você aplica tecnologias geoespaciais e sensoriamento remoto para analisar o estado dos ecossistemas', detail:'Você trabalha com imagens de satélite, mapeia biodiversidade, cobertura florestal e degradação do solo. Seus mapas informam decisões de gestão de áreas protegidas e planejamento do uso da terra.', start:['Aprender QGIS (gratuito) ou ArcGIS Pro — níveis básico e avançado','Dominar o Google Earth Engine para análise de grandes volumes de dados de satélite','Fazer um curso de sensoriamento remoto no Coursera ou edX','Aprender Python para análise geoespacial: geopandas, rasterio'], startUrls:['https://qgis.org','https://earthengine.google.com','https://www.coursera.org/learn/remote-sensing','https://geopandas.org'] },
    climate_sci: { emoji:'🌡️', name:'Climatologista / Pesquisador Ecológico', desc:'Você pesquisa mudanças climáticas, modela processos atmosféricos e publica trabalhos científicos de nível mundial', detail:'Você faz ciência fundamental. Processa saídas de modelos climáticos, analisa séries temporais de temperatura, precipitação e CO₂. Suas publicações influenciam a política climática global.', start:['Explorar conjuntos de dados climáticos chave: ERA5 (Copernicus), CMIP6, NOAA','Aprender Python para dados climáticos: xarray, netCDF4, cartopy','Fazer «Climate Change: The Science» no edX (MITx)','Ler os relatórios de avaliação do IPCC e aprender a interpretar modelos climáticos'], startUrls:['https://cds.climate.copernicus.eu','https://www.edx.org/course/climate-change-the-science','https://xarray.pydata.org','https://www.ipcc.ch/reports/'] },
    env_consult: { emoji:'📋', name:'Consultor Ambiental / Especialista ESG', desc:'Você ajuda empresas e governos a cumprir requisitos ambientais e implementar práticas sustentáveis', detail:'Você é a ponte entre a natureza e os negócios. Realiza avaliações de impacto ambiental, redige EIAs, orienta sobre padrões ESG, ajuda a obter licenças e reduz a pegada ecológica das empresas.', start:['Estudar a legislação ambiental do seu país e as diretivas da UE','Dominar a metodologia EIA (Avaliação de Impacto Ambiental)','Fazer um curso sobre ESG e sustentabilidade (padrões GRI, SASB)','Estudar a ISO 14001 — norma de gestão ambiental'], startUrls:['https://www.ifc.org/en/what-we-do/sector-expertise/environmental-social-governance','https://www.globalreporting.org','https://www.iso.org/iso-14001-environmental-management.html','https://www.coursera.org/learn/sustainable-development'] }
  },
  ui: { tag:'Ecólogo', title:'Que tipo de ecólogo você é?', subtitle:'6 perguntas para encontrar seu nicho na ecologia', prog:'Pergunta %d de 6', hint:'Escolha uma opção', back:'← Voltar', next:'Próximo →', finish:'Ver meu resultado', winBadge:'Seu nicho na ecologia', resTag:'Resultado', resSub:'Seu caminho na ecologia', lblStart:'Por onde começar:', l2back:'← Voltar aos resultados' }
};

// ─── AR ──────────────────────────────────────────────────────────────────────
L2.ecologist.ar = {
  questions: [
    { t: 'ما الذي يجذبك أكثر في علم البيئة؟', o: ['دراسة النظم البيئية الحية في الميدان — مراقبة الأنواع وأخذ العينات ووصف التجمعات الحيوية','تحليل صور الأقمار الصناعية ورسم خرائط التغيرات في المناظر الطبيعية','نمذجة سيناريوهات المناخ وفهم كيفية تغير الغلاف الجوي','مساعدة الشركات والحكومات على الحد من الأضرار البيئية وبناء سياسات مستدامة'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: 'أي مهمة تبدو الأكثر ملاءمة لك؟', o: ['إجراء جرد بيولوجي لنوع ما في منطقة محمية','معالجة صور Sentinel-2 في QGIS لتحديد بؤر إزالة الغابات','تشغيل نموذج مناخي بـ Python/R وتحليل اتجاهات درجات الحرارة على مدى 50 عاماً','إعداد دراسة تقييم الأثر البيئي (EIA) لمنشأة صناعية جديدة'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: 'أي أداة هي الأهم بالنسبة لك؟', o: ['أدلة الميدان ودفاتر الملاحظات وجهاز تتبع GPS والمنظار','ArcGIS / QGIS / Google Earth Engine — التحليل الجغرافي المكاني','Python / R / النماذج المناخية (CMIP, WRF, ERA5)','الأطر التنظيمية ومنهجيات EIA وExcel/Word لإعداد التقارير'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: 'ما هي أهم نتيجة لعملك؟', o: ['جمع بيانات عن نوع نادر وضمان حمايته','إنشاء خريطة لتدهور النظم البيئية تدعم قرارات الإدارة','نشر ورقة بحثية بتوقعات مناخية تؤثر في الإجماع العلمي','الحصول على تصريح بيئي لمشروع بأقل ضرر ممكن على الطبيعة'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: 'مع من تستمتع بالعمل أكثر؟', o: ['مع فريق من علماء الأحياء والحراس في محمية طبيعية','مع رسامي الخرائط ومهندسي البيانات ومتخصصي نظم المعلومات الجغرافية','مع الفيزيائيين وعلماء المناخ ومجموعات البحث الدولية','مع المحامين والمهندسين والإدارة العليا للشركات الصناعية'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: 'كيف يبدو نجاحك بعد 5 سنوات؟', o: ['رئيس أبحاث ميدانية في محمية طبيعية كبرى أو حديقة وطنية','خبير نظم معلومات جغرافية في منظمة دولية للحفاظ على البيئة (WWF, IUCN)','عالم مناخ رائد في معهد أكاديمي أو مجموعة عمل الهيئة الحكومية الدولية المعنية بتغير المناخ','مدير الاستدامة (CSO) أو شريك في شركة استشارات ESG'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] }
  ],
  roles: {
    field_eco: { emoji:'🌿', name:'عالم بيئة ميداني', desc:'تدرس النظم البيئية مباشرةً — تراقب الأنواع وتجمع البيانات وتصف الموائل في ظروف طبيعية', detail:'أنت عالم في الخطوط الأمامية. تشارك في الرحلات الاستكشافية وتُنشئ قطع الدراسة وتراقب الأعداد السكانية وتصف حالة النظم البيئية. بياناتك هي أساس قرارات الحفاظ على البيئة والمنشورات العلمية.', start:['إتقان طرق المسح البيولوجي الميداني (الترانسيكت والعدّ النقطي)','تعلّم الإحصاء الحيوي: R أو Python لتحليل البيانات الميدانية','الالتحاق بدورة في علم البيئة والحفاظ عليها على Coursera','المشاركة في مشاريع العلوم المجتمعية (iNaturalist, eBird)'], startUrls:['https://www.inaturalist.org','https://www.coursera.org/learn/introduction-to-sustainability','https://www.r-project.org','https://ebird.org'] },
    geo_eco: { emoji:'🗺️', name:'عالم بيئة جغرافي / محلل جغرافي مكاني', desc:'تطبّق تقنيات المعلومات الجغرافية والاستشعار عن بعد لتحليل حالة النظم البيئية', detail:'تعمل مع صور الأقمار الصناعية وترسم خرائط التنوع البيولوجي والغطاء الحرجي وتدهور التربة. خرائطك تُعلم قرارات إدارة المناطق المحمية والتخطيط لاستخدام الأراضي.', start:['تعلّم QGIS (مجاني) أو ArcGIS Pro — المستويين الأساسي والمتقدم','إتقان Google Earth Engine لتحليل كميات كبيرة من بيانات الأقمار الصناعية','الالتحاق بدورة في الاستشعار عن بعد على Coursera أو edX','تعلّم Python للتحليل الجغرافي المكاني: geopandas, rasterio'], startUrls:['https://qgis.org','https://earthengine.google.com','https://www.coursera.org/learn/remote-sensing','https://geopandas.org'] },
    climate_sci: { emoji:'🌡️', name:'عالم مناخ / باحث بيئي', desc:'تبحث في تغير المناخ وتُنمذج العمليات الجوية وتنشر أعمالاً علمية على مستوى عالمي', detail:'تُجري بحثاً أساسياً. تُعالج مخرجات النماذج المناخية وتُحلل السلاسل الزمنية لدرجات الحرارة والهطول وثاني أكسيد الكربون. منشوراتك تؤثر في السياسة المناخية العالمية.', start:['استكشاف مجموعات البيانات المناخية الرئيسية: ERA5 (Copernicus), CMIP6, NOAA','تعلّم Python للبيانات المناخية: xarray, netCDF4, cartopy','الالتحاق بدورة «تغير المناخ: العلم» على edX (MITx)','قراءة تقارير تقييم الهيئة الحكومية الدولية المعنية بتغير المناخ وتعلّم تفسير النماذج المناخية'], startUrls:['https://cds.climate.copernicus.eu','https://www.edx.org/course/climate-change-the-science','https://xarray.pydata.org','https://www.ipcc.ch/reports/'] },
    env_consult: { emoji:'📋', name:'مستشار بيئي / متخصص ESG', desc:'تساعد الشركات والحكومات على الوفاء بالمتطلبات البيئية وتطبيق الممارسات المستدامة', detail:'أنت الجسر بين الطبيعة والأعمال. تُجري تقييمات الأثر البيئي وتكتب دراسات EIA وتُقدّم المشورة بشأن معايير ESG وتساعد في الحصول على التصاريح وتُقلّل البصمة البيئية للشركات.', start:['دراسة قانون البيئة في بلدك والتوجيهات الأوروبية','إتقان منهجية EIA (تقييم الأثر البيئي)','الالتحاق بدورة حول ESG والتنمية المستدامة (معايير GRI, SASB)','دراسة ISO 14001 — معيار الإدارة البيئية'], startUrls:['https://www.ifc.org/en/what-we-do/sector-expertise/environmental-social-governance','https://www.globalreporting.org','https://www.iso.org/iso-14001-environmental-management.html','https://www.coursera.org/learn/sustainable-development'] }
  },
  ui: { tag:'عالم بيئة', title:'ما نوع عالم البيئة الذي أنت عليه؟', subtitle:'٦ أسئلة للعثور على مكانتك في علم البيئة', prog:'السؤال %d من ٦', hint:'اختر خياراً واحداً', back:'→ السابق', next:'التالي ←', finish:'اعرض نتيجتي', winBadge:'مكانتك في علم البيئة', resTag:'النتيجة', resSub:'مسارك في علم البيئة', lblStart:'من أين تبدأ:', l2back:'→ العودة إلى النتائج' }
};

// ─── HE ──────────────────────────────────────────────────────────────────────
L2.ecologist.he = {
  questions: [
    { t: 'מה מושך אותך ביותר באקולוגיה?', o: ['לחקור מערכות אקולוגיות חיות בשטח — לצפות במינים, לאסוף דגימות ולתאר ביוצנוזות','לנתח תמונות לוויין ולמפות שינויים בנוף','לדמות תרחישי אקלים ולהבין כיצד האטמוספרה משתנה','לעזור לעסקים וממשלות להפחית נזקים סביבתיים ולבנות מדיניות בת-קיימא'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: 'איזו משימה מרגישה הכי טבעית עבורך?', o: ['לבצע מיפוי ביולוגי של מין בשמורת טבע','לעבד תמונות Sentinel-2 ב-QGIS ולזהות מוקדי כריתת יערות','להריץ מודל אקלים ב-Python/R ולנתח מגמות טמפרטורה על פני 50 שנה','לכתוב דוח הערכת השפעה על הסביבה (EIA) עבור מתקן תעשייתי חדש'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: 'איזה כלי הכי חשוב לך?', o: ['מדריכי שטח, יומני שדה, מעקב GPS, משקפת','ArcGIS / QGIS / Google Earth Engine — ניתוח גאו-מרחבי','Python / R / מודלי אקלים (CMIP, WRF, ERA5)','מסגרות רגולטוריות, מתודולוגיות EIA, Excel/Word לדיווח'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: 'מה התוצאה החשובה ביותר של עבודתך?', o: ['לאסוף נתונים על מין נדיר ולהבטיח את הגנתו','ליצור מפת שפל מערכות אקולוגיות שתומכת בהחלטות ניהול','לפרסם מאמר עם תחזיות אקלים שמשפיע על הקונצנזוס המדעי','לקבל היתר סביבתי לפרויקט עם נזק מינימלי לטבע'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: 'עם מי אתה הכי אוהב לעבוד?', o: ['עם צוות ביולוגים ושומרי טבע בשמורה','עם קרטוגרפים, מהנדסי נתונים ומומחי GIS','עם פיזיקאים, קלימטולוגים וקבוצות מחקר בינלאומיות','עם עורכי דין, מהנדסים והנהלה בכירה של חברות תעשייתיות'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] },
    { t: 'כיצד נראה ההצלחה שלך בעוד 5 שנים?', o: ['ראש מחקר שטח בשמורת טבע גדולה או פארק לאומי','מומחה GIS בארגון שימור בינלאומי (WWF, IUCN)','קלימטולוג מוביל במכון אקדמי או קבוצת עבודה של IPCC','מנהל קיימות (CSO) או שותף בחברת ייעוץ ESG'], s: [{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}] }
  ],
  roles: {
    field_eco: { emoji:'🌿', name:'אקולוג שטח', desc:'אתה חוקר מערכות אקולוגיות ישירות — צופה במינים, אוסף נתונים ומתאר בתי גידול בתנאים טבעיים', detail:'אתה מדען בקו הקדמי. אתה יוצא לסיורים, מקים חלקות מחקר, עוקב אחרי אוכלוסיות ומתאר את מצב המערכות האקולוגיות. הנתונים שלך הם הבסיס להחלטות שימור ולפרסומים מדעיים.', start:['לשלוט בשיטות סקר ביולוגי שטחי (טרנסקטים, ספירות נקודות)','ללמוד ביוסטטיסטיקה: R או Python לניתוח נתוני שטח','לקחת קורס אקולוגיה ושימור ב-Coursera','להשתתף בפרויקטים של מדע אזרחי (iNaturalist, eBird)'], startUrls:['https://www.inaturalist.org','https://www.coursera.org/learn/introduction-to-sustainability','https://www.r-project.org','https://ebird.org'] },
    geo_eco: { emoji:'🗺️', name:'אקולוג GIS / אנליסט גאו-מרחבי', desc:'אתה מיישם טכנולוגיות גאו-מרחביות וחישה מרחוק לניתוח מצב המערכות האקולוגיות', detail:'אתה עובד עם תמונות לוויין, ממפה מגוון ביולוגי, כיסוי יערות ושפל קרקע. המפות שלך מעצבות החלטות לניהול שטחים מוגנים ותכנון שימוש בקרקע.', start:['ללמוד QGIS (חינמי) או ArcGIS Pro — ברמות בסיסית ומתקדמת','לשלוט ב-Google Earth Engine לניתוח כמויות גדולות של נתוני לוויין','לקחת קורס חישה מרחוק ב-Coursera או edX','ללמוד Python לניתוח גאו-מרחבי: geopandas, rasterio'], startUrls:['https://qgis.org','https://earthengine.google.com','https://www.coursera.org/learn/remote-sensing','https://geopandas.org'] },
    climate_sci: { emoji:'🌡️', name:'קלימטולוג / חוקר אקולוגי', desc:'אתה חוקר שינויי אקלים, ממדל תהליכים אטמוספריים ומפרסם עבודות מדעיות ברמה עולמית', detail:'אתה עוסק במחקר בסיסי. אתה מעבד פלטי מודלים אקלימיים, מנתח סדרות זמן של טמפרטורה, משקעים ו-CO₂. הפרסומים שלך משפיעים על המדיניות האקלימית הגלובלית.', start:['לחקור מאגרי נתונים אקלימיים מרכזיים: ERA5 (Copernicus), CMIP6, NOAA','ללמוד Python לנתוני אקלים: xarray, netCDF4, cartopy','לקחת «Climate Change: The Science» ב-edX (MITx)','לקרוא דוחות הערכה של IPCC וללמוד לפרש מודלים אקלימיים'], startUrls:['https://cds.climate.copernicus.eu','https://www.edx.org/course/climate-change-the-science','https://xarray.pydata.org','https://www.ipcc.ch/reports/'] },
    env_consult: { emoji:'📋', name:'יועץ סביבתי / מומחה ESG', desc:'אתה עוזר לחברות וממשלות לעמוד בדרישות סביבתיות וליישם פרקטיקות בנות-קיימא', detail:'אתה הגשר בין הטבע לעסקים. אתה מבצע הערכות השפעה סביבתית, כותב EIAs, יועץ לגבי תקני ESG, עוזר בקבלת היתרים ומפחית את הטביעה האקולוגית של חברות.', start:['ללמוד דיני איכות הסביבה במדינתך ואת הנחיות האיחוד האירופי','לשלוט במתודולוגיית EIA (הערכת השפעה סביבתית)','לקחת קורס על ESG וקיימות (תקני GRI, SASB)','ללמוד ISO 14001 — תקן ניהול סביבתי'], startUrls:['https://www.ifc.org/en/what-we-do/sector-expertise/environmental-social-governance','https://www.globalreporting.org','https://www.iso.org/iso-14001-environmental-management.html','https://www.coursera.org/learn/sustainable-development'] }
  },
  ui: { tag:'אקולוג', title:'איזה סוג אקולוג אתה?', subtitle:'6 שאלות למציאת הנישה שלך באקולוגיה', prog:'שאלה %d מתוך 6', hint:'בחר אפשרות אחת', back:'→ חזרה', next:'הבא ←', finish:'לראות את התוצאה', winBadge:'הנישה שלך באקולוגיה', resTag:'תוצאה', resSub:'הדרך שלך באקולוגיה', lblStart:'מאיפה להתחיל:', l2back:'→ חזרה לתוצאות' }
};

L2.ecologist.zh = {
  questions: [
    {t:'生态与环境领域什么最吸引你？', o:['野外生态学——在自然中研究生物和生态系统','地理信息与遥感——用技术理解地球变化','气候科学——研究气候变化的机制和影响','环境咨询——帮助企业和政府做出生态友好的决策'], s:[{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}]},
    {t:'你最想精通哪个技术方向？', o:['野外调查、样方设计和物种鉴定','GIS空间分析、卫星遥感数据处理','气候模型、大气数据分析','环境影响评估、法规合规咨询'], s:[{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}]},
    {t:'什么成果最让你有成就感？', o:['野外发现了一个新的濒危物种种群','你的GIS分析帮助划定了重要的生态保护区','你的研究为国家气候谈判提供了科学支撑','你的咨询报告帮助一个大型项目减少了对生态的破坏'], s:[{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}]},
    {t:'你更喜欢哪种工作？', o:['在野外采样、监测物种和生态系统','在GIS软件中处理和分析空间数据','处理气候数据，运行和验证气候模型','与客户沟通需求，撰写环境评估报告'], s:[{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}]},
    {t:'你会选择哪个项目？', o:['对某自然保护区进行全面的生物多样性调查','用遥感数据分析10年内森林覆盖率的变化','构建未来50年中国降水分布的气候预测模型','为某工业园区做环境影响评估'], s:[{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}]},
    {t:'10年后你在哪里？', o:['国家自然保护区或野生动物保护组织的研究员','自然资源部或生态环境部的GIS与遥感专家','中国气象科学研究院的气候科学家','国际环境咨询公司的中国区负责人'], s:[{field_eco:3},{geo_eco:3},{climate_sci:3},{env_consult:3}]}
  ],
  roles: {
    field_eco: {emoji:'🌿', name:'野外生态学家', desc:'在自然环境中研究生物和生态系统，为保护工作提供科学依据', detail:'你的实验室在野外。你设计调查方案，监测物种种群，研究生态系统的结构和功能，并将数据转化为保护行动的依据。', start:['学习生态学核心理论——种群生态学、群落生态学','掌握野外调查方法——样方法、标志重捕法','了解物种鉴定——学会使用图鉴和检索表','参加野外实习——自然保护区或生态调查项目']},
    geo_eco: {emoji:'🗺️', name:'地理信息与遥感分析师', desc:'用卫星数据和GIS技术揭示地球表面的生态变化', detail:'你用数据给地球拍X光片。你处理Landsat、Sentinel等卫星影像，在ArcGIS或QGIS中分析土地覆盖变化，为生态保护和城市规划提供空间决策支持。', start:['掌握QGIS或ArcGIS——GIS入门的首选工具','学习遥感基础——波谱分析、监督分类','了解Python地理空间分析——geopandas、rasterio','在Google Earth Engine上实践卫星数据分析']},
    climate_sci: {emoji:'🌡️', name:'气候科学家', desc:'研究气候系统的运作规律，预测气候变化的未来趋势', detail:'你研究地球气候系统最本质的问题。你分析历史气候数据，运行气候模型，研究碳循环和大气物理，你的成果为IPCC报告和国家政策提供科学依据。', start:['学习大气科学和海洋学基础','掌握气候数据分析——NetCDF格式、CDO/NCO工具','了解主流气候模型——CMIP6的数据和模型架构','学习Python气候分析——xarray、cartopy库']},
    env_consult: {emoji:'📋', name:'环境咨询专家', desc:'帮助企业和政府在发展的同时保护好自然环境', detail:'你是经济发展和生态保护之间的协调者。你做环境影响评估，帮助项目满足法规要求，为企业设计绿色转型策略，让发展和保护不再是对立的选择。', start:['了解中国环境影响评估制度——EIA法规体系','学习主要环境法律——环保法、水污染防治法等','了解ESG评级体系和企业环境信息披露要求','争取在环保咨询公司的实习机会']}
  },
  ui: {l2back:'← 返回生态学', title:'生态与环境：选择你的专业方向'}
};
