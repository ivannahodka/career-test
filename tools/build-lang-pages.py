#!/usr/bin/env python3
"""Собирает языковые версии главной страницы (/en/, /de/ …) из index.html.

Запуск из корня сайта:  python3 tools/build-lang-pages.py
После любой правки index.html запусти скрипт ещё раз — языковые страницы пересоберутся.
"""
import os, re, html

BASE = "https://ivannahodka.github.io/career-test/"
LANGS = ["ru", "en", "de", "fr", "es", "pt", "ar", "he", "zh"]
RTL = {"ar", "he"}
OG_LOCALE = {"ru": "ru_RU", "en": "en_US", "de": "de_DE", "fr": "fr_FR", "es": "es_ES",
             "pt": "pt_BR", "ar": "ar_AR", "he": "he_IL", "zh": "zh_CN"}

def url(l):
    return BASE if l == "ru" else BASE + l + "/"

# Ссылки внизу страницы: (адрес, текст)
def links(l, guides):
    htc = "how-to-choose-%s.html" % l
    htu = "how-to-use.html" if l == "ru" else "how-to-use-%s.html" % l
    gl = "glossary-static.html" if l == "ru" else "glossary-static-en.html"
    out = [(htc, guides[0]), (htu, guides[1]), (gl, guides[2])]
    if l == "ru":
        out += [("klimov-test.html", "Тест Климова онлайн (ДДО) — 20 вопросов"),
                ("holland-test.html", "Тест Холланда (RIASEC) — на английском"),
                ("articles/after-9-11-grade-ru.html", "Какую профессию выбрать после 9 и 11 класса"),
                ("articles/introvert-careers-ru.html", "Работа для интроверта: 20 профессий"),
                ("articles/future-careers-ru.html", "Профессии будущего и ИИ")]
    else:
        out += [("holland-test.html", guides[3]),
                ("articles/career-after-school-en.html", "What career to choose after school (EN)"),
                ("articles/introvert-careers-en.html", "Best jobs for introverts (EN)"),
                ("articles/future-careers-en.html", "Future jobs in demand by 2030 (EN)")]
    return out

T = {
"ru": dict(
 title="Бесплатный тест профориентации — IT, Бизнес, Наука, Инженерия | Career Test",
 desc=None,
 h="Бесплатный тест профориентации онлайн",
 intro="Узнай, какая профессия тебе подходит, примерно за 10 минут. Сначала 10 вопросов покажут, какое из 6 направлений тебе ближе, затем уточняющий тест подскажет конкретную профессию и специализацию. Бесплатно, анонимно, без регистрации, с PDF-отчётом о результатах.",
 dom=[("IT и технологии","Frontend- и backend-разработчик, аналитик данных, AI/ML-инженер, DevOps-инженер, QA-инженер, специалист по кибербезопасности, разработчик игр, UX/UI-дизайнер, product manager."),
      ("Творческие профессии","Графический дизайнер, иллюстратор, моушн-дизайнер, копирайтер, SMM-специалист, фотограф, видеограф."),
      ("Бизнес и менеджмент","Предприниматель, маркетолог, HR-менеджер, финансист, бизнес-аналитик, менеджер по продажам."),
      ("Наука и медицина","Врач, учёный-исследователь, психолог, фармацевт, биотехнолог, эколог."),
      ("Педагогика и общество","Учитель, тьютор, педагог-психолог, социальный работник, журналист, PR-специалист."),
      ("Инженерия и производство","Инженер-механик, инженер-строитель, робототехник, электрик, специалист по автоматизации, технолог производства.")],
 lh="Полезные материалы",
 guides=["Как выбрать профессию: 7 шагов","Как пройти тест — пошаговая инструкция","Глоссарий профессиональных терминов"]),
"en": dict(
 title="Free Career Test for Teens and Adults — 40 Careers | Career Test",
 desc="Free online career test: find the right career in 10 questions. 6 fields — IT, Creative, Business, Science, Education, Engineering — and 40 careers. No sign-up.",
 h="Free online career test",
 intro="Find a career that fits you in about 10 minutes. Answer 10 questions to see which of 6 fields suits you best, then take a second-level test to narrow it down to a specific career and specialization. Free, anonymous, no sign-up, with a PDF of your results.",
 dom=[("IT & Technology","Frontend and backend developer, data analyst, AI/ML engineer, DevOps engineer, QA engineer, cybersecurity specialist, game developer, UX/UI designer, product manager."),
      ("Creative careers","Graphic designer, illustrator, motion designer, copywriter, social media specialist, photographer, videographer."),
      ("Business & Management","Entrepreneur, marketer, HR manager, financial analyst, business analyst, sales manager."),
      ("Science & Medicine","Doctor, research scientist, psychologist, pharmacist, biotechnologist, environmental scientist."),
      ("Education & Society","Teacher, tutor, school psychologist, social worker, journalist, PR specialist."),
      ("Engineering & Manufacturing","Mechanical engineer, civil engineer, robotics engineer, electrician, automation engineer, production engineer.")],
 lh="Guides and other tests",
 guides=["How to choose a career: 7 steps","How to take the test — step-by-step guide","Career glossary","Holland Code (RIASEC) career interest test"]),
"de": dict(
 title="Kostenloser Berufstest für Jugendliche — 40 Berufe | Career Test",
 desc="Kostenloser Online-Berufstest: Finde in 10 Fragen den passenden Beruf. 6 Bereiche — IT, Kreativ, Wirtschaft, Wissenschaft, Bildung, Technik — und 40 Berufe. Ohne Anmeldung.",
 h="Kostenloser Online-Berufstest",
 intro="Finde in etwa 10 Minuten heraus, welcher Beruf zu dir passt. 10 Fragen zeigen dir, welcher von 6 Bereichen am besten passt; ein zweiter Test grenzt das Ergebnis auf einen konkreten Beruf und eine Spezialisierung ein. Kostenlos, anonym, ohne Anmeldung, mit PDF-Auswertung.",
 dom=[("IT & Technologie","Frontend- und Backend-Entwickler, Datenanalyst, KI/ML-Ingenieur, DevOps-Ingenieur, QA-Ingenieur, IT-Sicherheitsexperte, Spieleentwickler, UX/UI-Designer, Produktmanager."),
      ("Kreative Berufe","Grafikdesigner, Illustrator, Motion Designer, Texter, Social-Media-Manager, Fotograf, Videograf."),
      ("Wirtschaft & Management","Unternehmer, Marketing-Manager, Personalreferent, Finanzanalyst, Business Analyst, Vertriebsmanager."),
      ("Wissenschaft & Medizin","Arzt, Wissenschaftler, Psychologe, Apotheker, Biotechnologe, Umweltwissenschaftler."),
      ("Bildung & Gesellschaft","Lehrer, Tutor, Schulpsychologe, Sozialarbeiter, Journalist, PR-Fachmann."),
      ("Technik & Produktion","Maschinenbauingenieur, Bauingenieur, Robotik-Ingenieur, Elektriker, Automatisierungstechniker, Produktionsingenieur.")],
 lh="Ratgeber und weitere Tests",
 guides=["Wie man einen Beruf wählt: 7 Schritte","So funktioniert der Test — Schritt-für-Schritt-Anleitung","Berufsglossar (Englisch)","Holland-Code-Test (RIASEC, Englisch)"]),
"fr": dict(
 title="Test d'orientation gratuit — 40 métiers, 6 domaines | Career Test",
 desc="Test d'orientation professionnelle gratuit en ligne : trouve ton métier en 10 questions. 6 domaines — IT, Créatif, Business, Sciences, Éducation, Ingénierie — et 40 métiers. Sans inscription.",
 h="Test d'orientation professionnelle gratuit",
 intro="Découvre en 10 minutes environ quel métier te correspond. 10 questions montrent lequel des 6 domaines te convient le mieux, puis un second test précise le métier et la spécialisation. Gratuit, anonyme, sans inscription, avec un rapport PDF.",
 dom=[("IT & Technologies","Développeur frontend et backend, analyste de données, ingénieur IA/ML, ingénieur DevOps, ingénieur QA, spécialiste en cybersécurité, développeur de jeux vidéo, designer UX/UI, chef de produit."),
      ("Métiers créatifs","Graphiste, illustrateur, motion designer, rédacteur, community manager, photographe, vidéaste."),
      ("Business & Management","Entrepreneur, marketeur, responsable RH, analyste financier, business analyst, commercial."),
      ("Sciences & Médecine","Médecin, chercheur, psychologue, pharmacien, biotechnologue, écologue."),
      ("Éducation & Société","Enseignant, tuteur, psychologue scolaire, travailleur social, journaliste, chargé de relations publiques."),
      ("Ingénierie & Production","Ingénieur mécanique, ingénieur civil, roboticien, électricien, automaticien, ingénieur de production.")],
 lh="Guides et autres tests",
 guides=["Comment choisir un métier : 7 étapes","Comment passer le test — guide pas à pas","Glossaire des métiers (anglais)","Test du code Holland (RIASEC, anglais)"]),
"es": dict(
 title="Test vocacional gratis — 40 profesiones, 6 áreas | Career Test",
 desc="Test vocacional gratuito en línea: descubre tu profesión en 10 preguntas. 6 áreas — IT, Creatividad, Negocios, Ciencia, Educación, Ingeniería — y 40 profesiones. Sin registro.",
 h="Test vocacional gratuito en línea",
 intro="Descubre en unos 10 minutos qué profesión encaja contigo. 10 preguntas muestran cuál de las 6 áreas te conviene más y un segundo test concreta la profesión y la especialización. Gratis, anónimo, sin registro y con informe en PDF.",
 dom=[("IT y tecnología","Desarrollador frontend y backend, analista de datos, ingeniero de IA/ML, ingeniero DevOps, ingeniero QA, especialista en ciberseguridad, desarrollador de videojuegos, diseñador UX/UI, product manager."),
      ("Profesiones creativas","Diseñador gráfico, ilustrador, motion designer, redactor publicitario, community manager, fotógrafo, videógrafo."),
      ("Negocios y gestión","Emprendedor, especialista en marketing, responsable de RR. HH., analista financiero, business analyst, gerente de ventas."),
      ("Ciencia y medicina","Médico, investigador, psicólogo, farmacéutico, biotecnólogo, ecólogo."),
      ("Educación y sociedad","Profesor, tutor, psicólogo educativo, trabajador social, periodista, especialista en relaciones públicas."),
      ("Ingeniería y producción","Ingeniero mecánico, ingeniero civil, ingeniero en robótica, electricista, ingeniero de automatización, ingeniero de producción.")],
 lh="Guías y otros tests",
 guides=["Cómo elegir una profesión: 7 pasos","Cómo hacer el test — guía paso a paso","Glosario de profesiones (inglés)","Test del código Holland (RIASEC, inglés)"]),
"pt": dict(
 title="Teste vocacional grátis — 40 profissões, 6 áreas | Career Test",
 desc="Teste vocacional gratuito online: descubra sua profissão em 10 perguntas. 6 áreas — TI, Criatividade, Negócios, Ciência, Educação, Engenharia — e 40 profissões. Sem cadastro.",
 h="Teste vocacional gratuito online",
 intro="Descubra em cerca de 10 minutos qual profissão combina com você. 10 perguntas mostram qual das 6 áreas é a melhor para você, e um segundo teste aponta a profissão e a especialização. Grátis, anônimo, sem cadastro e com relatório em PDF.",
 dom=[("TI e tecnologia","Desenvolvedor frontend e backend, analista de dados, engenheiro de IA/ML, engenheiro DevOps, engenheiro de QA, especialista em cibersegurança, desenvolvedor de jogos, designer UX/UI, gerente de produto."),
      ("Profissões criativas","Designer gráfico, ilustrador, motion designer, redator publicitário, social media, fotógrafo, videomaker."),
      ("Negócios e gestão","Empreendedor, profissional de marketing, gestor de RH, analista financeiro, analista de negócios, gerente de vendas."),
      ("Ciência e medicina","Médico, pesquisador, psicólogo, farmacêutico, biotecnólogo, ecólogo."),
      ("Educação e sociedade","Professor, tutor, psicólogo escolar, assistente social, jornalista, profissional de relações públicas."),
      ("Engenharia e produção","Engenheiro mecânico, engenheiro civil, engenheiro de robótica, eletricista, engenheiro de automação, engenheiro de produção.")],
 lh="Guias e outros testes",
 guides=["Como escolher uma profissão: 7 passos","Como fazer o teste — guia passo a passo","Glossário de profissões (inglês)","Teste do código Holland (RIASEC, inglês)"]),
"ar": dict(
 title="اختبار التوجيه المهني المجاني — 40 مهنة | Career Test",
 desc="اختبار توجيه مهني مجاني عبر الإنترنت: اكتشف المهنة المناسبة لك في 10 أسئلة. 6 مجالات — تكنولوجيا المعلومات، الإبداع، الأعمال، العلوم، التعليم، الهندسة — و40 مهنة. بدون تسجيل.",
 h="اختبار التوجيه المهني المجاني عبر الإنترنت",
 intro="اكتشف المهنة التي تناسبك في نحو 10 دقائق. تُظهر 10 أسئلة أي المجالات الستة هو الأقرب إليك، ثم يحدد اختبار ثانٍ المهنة والتخصص. مجاني، دون الكشف عن الهوية، بدون تسجيل، مع تقرير PDF.",
 dom=[("تكنولوجيا المعلومات","مطور واجهات أمامية وخلفية، محلل بيانات، مهندس ذكاء اصطناعي وتعلم آلي، مهندس DevOps، مهندس اختبار الجودة، أخصائي أمن سيبراني، مطور ألعاب، مصمم UX/UI، مدير منتج."),
      ("المهن الإبداعية","مصمم جرافيك، رسام، مصمم موشن، كاتب محتوى، أخصائي وسائل التواصل الاجتماعي، مصور، مصور فيديو."),
      ("الأعمال والإدارة","رائد أعمال، أخصائي تسويق، مدير موارد بشرية، محلل مالي، محلل أعمال، مدير مبيعات."),
      ("العلوم والطب","طبيب، باحث علمي، أخصائي نفسي، صيدلي، أخصائي تقنية حيوية، عالم بيئة."),
      ("التعليم والمجتمع","معلم، مدرس خصوصي، أخصائي نفسي مدرسي، أخصائي اجتماعي، صحفي، أخصائي علاقات عامة."),
      ("الهندسة والإنتاج","مهندس ميكانيكي، مهندس مدني، مهندس روبوتات، كهربائي، مهندس أتمتة، مهندس إنتاج.")],
 lh="أدلة واختبارات أخرى",
 guides=["كيف تختار مهنة: 7 خطوات","كيف تجري الاختبار — دليل خطوة بخطوة","معجم المهن (بالإنجليزية)","اختبار رمز هولاند (RIASEC، بالإنجليزية)"]),
"he": dict(
 title="מבחן התאמה מקצועית חינם — 40 מקצועות | Career Test",
 desc="מבחן התאמה מקצועית חינם אונליין: גלו איזה מקצוע מתאים לכם ב-10 שאלות. 6 תחומים — הייטק, יצירה, עסקים, מדע, חינוך, הנדסה — ו-40 מקצועות. ללא הרשמה.",
 h="מבחן התאמה מקצועית חינם אונליין",
 intro="גלו בתוך כ-10 דקות איזה מקצוע מתאים לכם. 10 שאלות מראות איזה מתוך 6 התחומים הכי מתאים לכם, ומבחן שני מצמצם את התוצאה למקצוע ולהתמחות מסוימים. חינם, אנונימי, ללא הרשמה, עם דוח PDF.",
 dom=[("הייטק וטכנולוגיה","מפתח פרונטאנד ובקאנד, אנליסט נתונים, מהנדס בינה מלאכותית ולמידת מכונה, מהנדס DevOps, מהנדס QA, מומחה סייבר, מפתח משחקים, מעצב UX/UI, מנהל מוצר."),
      ("מקצועות יצירתיים","מעצב גרפי, מאייר, מעצב מושן, קופירייטר, מנהל רשתות חברתיות, צלם, צלם וידאו."),
      ("עסקים וניהול","יזם, משווק, מנהל משאבי אנוש, אנליסט פיננסי, אנליסט עסקי, מנהל מכירות."),
      ("מדע ורפואה","רופא, חוקר, פסיכולוג, רוקח, ביוטכנולוג, אקולוג."),
      ("חינוך וחברה","מורה, מורה פרטי, פסיכולוג חינוכי, עובד סוציאלי, עיתונאי, מומחה יחסי ציבור."),
      ("הנדסה וייצור","מהנדס מכונות, מהנדס אזרחי, מהנדס רובוטיקה, חשמלאי, מהנדס אוטומציה, מהנדס ייצור.")],
 lh="מדריכים ומבחנים נוספים",
 guides=["איך לבחור מקצוע: 7 צעדים","איך עושים את המבחן — מדריך צעד אחר צעד","מילון מונחים מקצועיים (באנגלית)","מבחן קוד הולנד (RIASEC, באנגלית)"]),
"zh": dict(
 title="免费职业测试 — 40种职业、6大方向 | Career Test",
 desc="免费在线职业测试：10道题找到适合你的职业。6大方向——IT、创意、商业、科学、教育、工程——共40种职业。无需注册。",
 h="免费在线职业测试",
 intro="用大约10分钟了解哪种职业适合你。先通过10道题找出6大方向中最适合你的方向，再通过第二级测试确定具体职业和专业方向。免费、匿名、无需注册，并可下载PDF结果报告。",
 dom=[("IT与科技","前端和后端开发者、数据分析师、AI/机器学习工程师、DevOps工程师、测试工程师、网络安全专家、游戏开发者、UX/UI设计师、产品经理。"),
      ("创意类职业","平面设计师、插画师、动态设计师、文案、社交媒体运营、摄影师、摄像师。"),
      ("商业与管理","创业者、市场营销专员、人力资源经理、财务分析师、业务分析师、销售经理。"),
      ("科学与医学","医生、科研人员、心理学家、药剂师、生物技术专家、生态学家。"),
      ("教育与社会","教师、家教、学校心理咨询师、社会工作者、记者、公关专员。"),
      ("工程与制造","机械工程师、土木工程师、机器人工程师、电工、自动化工程师、生产工程师。")],
 lh="指南与其他测试",
 guides=["如何选择职业：7个步骤","如何进行测试——分步指南","职业术语表（英文）","霍兰德职业兴趣测试（RIASEC，英文）"]),
}

def esc(s): return html.escape(s, quote=True)

def about(l):
    t = T[l]
    out = ['<section class="about" id="seo-content">', '  <h2>%s</h2>' % esc(t["h"]), '  <p>%s</p>' % esc(t["intro"])]
    for name, items in t["dom"]:
        out += ['  <h3>%s</h3>' % esc(name), '  <p>%s</p>' % esc(items)]
    out.append('  <h3>%s</h3>' % esc(t["lh"]))
    out.append('  <ul>')
    for href, txt in links(l, t["guides"]):
        out.append('    <li><a href="%s">%s</a></li>' % (href, esc(txt)))
    out.append('  </ul>')
    out.append('</section>')
    return "\n".join(out)

HREFLANG = "\n".join('<link rel="alternate" hreflang="%s" href="%s">' % (l, url(l)) for l in LANGS) + \
           '\n<link rel="alternate" hreflang="x-default" href="%s">' % BASE
LANG_URLS = "{" + ",".join('"%s":"%s"' % (l, "/career-test/" if l == "ru" else "/career-test/%s/" % l) for l in LANGS) + "}"
ABOUT_CSS = """<style>
  .about{max-width:860px;margin:8px auto 40px;padding:0 16px;color:#4a5568;font-size:14px;line-height:1.65}
  .about h2{font-size:18px;color:#2d3748;margin:28px 0 8px}
  .about h3{font-size:15px;color:#2d3748;margin:18px 0 4px}
  .about p{margin:4px 0}
  .about ul{padding-left:20px;margin:6px 0}
  .about a{color:var(--accent,#6C63FF)}
</style>"""

def prepare_root(s):
    """Один раз переделывает index.html: маркеры, hreflang, видимый блок «О тесте»."""
    if "<!--LANG-HEAD-START-->" not in s:
        s = s.replace('<link rel="canonical" href="%s">' % BASE,
                      '<link rel="canonical" href="%s">\n<!--LANG-HEAD-START-->\n<!--LANG-HEAD-END-->' % BASE, 1)
    if "<!--ABOUT-START-->" not in s:
        m = re.search(r'<!-- ── SEO static content for crawlers[^\n]*\n<div id="seo-content".*?\n</div>\n', s, re.S)
        assert m, "seo block not found"
        s = s[:m.start()] + s[m.end():]
        s = s.replace('<script src="langs/lang-base.js"></script>',
                      '<!--ABOUT-START-->\n<!--ABOUT-END-->\n<script src="langs/lang-base.js"></script>', 1)
    return s

def fill(s, l):
    head = HREFLANG + "\n" + ABOUT_CSS + "\n<script>window.PAGE_LANG=%s;%swindow.LANG_URLS=%s;</script>" % (
        '"%s"' % l, "window.PAGE_LANG_STRICT=true;" if l != "ru" else "", LANG_URLS)
    s = re.sub(r"<!--LANG-HEAD-START-->.*?<!--LANG-HEAD-END-->", lambda m: "<!--LANG-HEAD-START-->\n" + head + "\n<!--LANG-HEAD-END-->", s, flags=re.S)
    s = re.sub(r"<!--ABOUT-START-->.*?<!--ABOUT-END-->", lambda m: "<!--ABOUT-START-->\n" + about(l) + "\n<!--ABOUT-END-->", s, flags=re.S)
    return s

def localize(s, l):
    t = T[l]
    s = s.replace('<html lang="ru" dir="ltr">', '<html lang="%s" dir="%s">' % (l, "rtl" if l in RTL else "ltr"), 1)
    s = s.replace('<meta charset="UTF-8">', '<meta charset="UTF-8">\n<base href="/career-test/">', 1)
    s = re.sub(r"<title>[^<]*</title>", lambda m: "<title>%s</title>" % esc(t["title"]), s, count=1)
    s = re.sub(r'<meta name="description" content="[^"]*"', lambda m: '<meta name="description" content="%s"' % esc(t["desc"]), s, count=1)
    s = re.sub(r'<meta property="og:description" content="[^"]*"', lambda m: '<meta property="og:description" content="%s"' % esc(t["desc"]), s, count=1)
    s = re.sub(r'<meta name="twitter:description" content="[^"]*"', lambda m: '<meta name="twitter:description" content="%s"' % esc(t["desc"]), s, count=1)
    s = re.sub(r'<meta property="og:title" content="[^"]*"', lambda m: '<meta property="og:title" content="%s"' % esc(t["title"]), s, count=1)
    s = re.sub(r'<meta name="twitter:title" content="[^"]*"', lambda m: '<meta name="twitter:title" content="%s"' % esc(t["title"]), s, count=1)
    s = s.replace('<meta property="og:url" content="%s">' % BASE, '<meta property="og:url" content="%s">' % url(l), 1)
    s = s.replace('<meta property="og:locale" content="ru_RU">', '<meta property="og:locale" content="%s">' % OG_LOCALE[l], 1)
    s = s.replace('<link rel="canonical" href="%s">' % BASE, '<link rel="canonical" href="%s">' % url(l), 1)
    # проверочные коды поисковиков нужны только на главной
    s = re.sub(r'<meta name="(google-site-verification|yandex-verification)"[^>]*>\n', '', s)
    return s

def main():
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    p = os.path.join(root, "index.html")
    s = open(p, encoding="utf-8").read()
    s = prepare_root(s)
    open(p, "w", encoding="utf-8").write(fill(s, "ru"))
    for l in LANGS:
        if l == "ru":
            continue
        d = os.path.join(root, l)
        os.makedirs(d, exist_ok=True)
        open(os.path.join(d, "index.html"), "w", encoding="utf-8").write(fill(localize(s, l), l))
        print("built", l + "/index.html")
    print("updated index.html")

if __name__ == "__main__":
    main()
