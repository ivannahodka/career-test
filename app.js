
// ─── HOME UI STRINGS (all 8 languages, kept in app.js to avoid editing lang files)
// To add a new domain: add its name/sub to each language entry below.
const HOME_UI = {
  ru: {
    homeTag:'Тесты профориентации', homeTitle:'Выбери категорию',
    homeSub:'Пройди тест — узнай, какая профессия тебе подойдёт',
    domainIT:'IT & Технологии', domainITSub:'9 профессий',
    domainCreative:'Творческие профессии', domainCreativeSub:'7 профессий', domainBusiness:'Бизнес & Менеджмент', domainBusinessSub:'6 профессий', domainScience:'Наука & Медицина', domainScienceSub:'6 профессий', domainPedagogy:'Педагогика & Общество', domainPedagogySub:'6 профессий', domainEngineering:'Инженерия & Производство', domainEngineeringSub:'6 профессий',
    domainSoon:'Скоро', backHome:'← Все тесты',
    grpDev:'💻 Разработка', grpData:'📊 Данные & ИИ', grpInfra:'🚀 Инфраструктура',
    grpSec:'🔐 Безопасность', grpDes:'🎨 Дизайн', grpQa:'🔍 Тестирование',
    grpPm:'📋 Product Management',
    directLabel:'Знаешь профессию? Пропусти общий тест:',
    directPlaceholder:'— выбери профессию —', directGoBtn:'Начать →',
    poCta:'Не знаешь с чего начать? Пройди тест профориентации',
    footer:'© IT Career Test · Автор: Иван Тарасенко<br>Бесплатно · Без регистрации',
    disclaimer:'Результаты носят ознакомительный характер и не являются профессиональным заключением. Тест — инструмент для самоопределения, а не окончательный ответ.',
    glossaryLink:'📖 Глоссарий: IT, Дизайн, Бизнес…'
  },
  en: {
    homeTag:'Career Tests', homeTitle:'Choose a category',
    homeSub:'Take the test and find out which career suits you',
    domainIT:'IT & Technology', domainITSub:'9 careers',
    domainCreative:'Creative Careers', domainCreativeSub:'7 careers', domainBusiness:'Business & Management', domainBusinessSub:'6 careers', domainScience:'Science & Medicine', domainScienceSub:'6 careers', domainPedagogy:'Pedagogy & Society', domainPedagogySub:'6 careers', domainEngineering:'Engineering & Production', domainEngineeringSub:'6 careers',
    domainSoon:'Coming soon', backHome:'← All tests',
    grpDev:'💻 Development', grpData:'📊 Data & AI', grpInfra:'🚀 Infrastructure',
    grpSec:'🔐 Security', grpDes:'🎨 Design', grpQa:'🔍 Testing',
    grpPm:'📋 Product Management',
    directLabel:'Know your field? Skip the general test:',
    directPlaceholder:'— choose a career —', directGoBtn:'Start →',
    poCta:'Not sure where to start? Take the orientation test',
    footer:'© IT Career Test · by Ivan Tarasenko<br>Free · No sign-up',
    disclaimer:'Results are for informational purposes only and do not constitute professional career advice. This test is a self-discovery tool, not a definitive answer.',
    glossaryLink:'📖 Glossary: IT, Design, Business…'
  },
  de: {
    homeTag:'Karrieretests', homeTitle:'Kategorie wählen',
    homeSub:'Mach den Test und finde heraus, welcher Beruf zu dir passt',
    domainIT:'IT & Technologie', domainITSub:'9 Berufe',
    domainCreative:'Kreative Berufe', domainCreativeSub:'7 Berufe', domainBusiness:'Business & Management', domainBusinessSub:'6 Berufe', domainScience:'Wissenschaft & Medizin', domainScienceSub:'6 Berufe', domainPedagogy:'Pädagogik & Gesellschaft', domainPedagogySub:'6 Berufe', domainEngineering:'Ingenieurwesen & Produktion', domainEngineeringSub:'6 Berufe',
    domainSoon:'Bald verfügbar', backHome:'← Alle Tests',
    grpDev:'💻 Entwicklung', grpData:'📊 Daten & KI', grpInfra:'🚀 Infrastruktur',
    grpSec:'🔐 Sicherheit', grpDes:'🎨 Design', grpQa:'🔍 Testen',
    grpPm:'📋 Product Management',
    directLabel:'Kennst du deinen Bereich? Überspringe den allgemeinen Test:',
    directPlaceholder:'— Beruf wählen —', directGoBtn:'Starten →',
    poCta:'Unsicher, womit du anfangen sollst? Starte den Orientierungstest',
    footer:'© IT Career Test · Ivan Tarasenko<br>Kostenlos · Ohne Anmeldung',
    disclaimer:'Die Ergebnisse dienen nur zur Orientierung und stellen keine professionelle Beratung dar. Dieser Test ist ein Hilfsmittel zur Selbstfindung, keine endgültige Antwort.',
    glossaryLink:'📖 Glossar: IT, Design, Business…'
  },
  fr: {
    homeTag:'Tests de carrière', homeTitle:'Choisir une catégorie',
    homeSub:'Passe le test et découvre quelle carrière te correspond',
    domainIT:'IT & Technologie', domainITSub:'9 métiers',
    domainCreative:'Métiers créatifs', domainCreativeSub:'7 métiers', domainBusiness:'Business & Management', domainBusinessSub:'6 métiers', domainScience:'Sciences & Médecine', domainScienceSub:'6 métiers', domainPedagogy:'Pédagogie & Société', domainPedagogySub:'6 métiers', domainEngineering:'Ingénierie & Production', domainEngineeringSub:'6 métiers',
    domainSoon:'Bientôt', backHome:'← Tous les tests',
    grpDev:'💻 Développement', grpData:'📊 Données & IA', grpInfra:'🚀 Infrastructure',
    grpSec:'🔐 Sécurité', grpDes:'🎨 Design', grpQa:'🔍 Tests',
    grpPm:'📋 Product Management',
    directLabel:'Tu connais ton domaine? Saute le test général:',
    directPlaceholder:'— choisir un métier —', directGoBtn:'Démarrer →',
    poCta:'Pas sûr par où commencer? Passe le test d\'orientation',
    footer:'© IT Career Test · Ivan Tarasenko<br>Gratuit · Sans inscription',
    disclaimer:'Les résultats sont fournis à titre informatif uniquement et ne constituent pas un avis professionnel. Ce test est un outil d\'aide à la découverte de soi, pas une réponse définitive.',
    glossaryLink:'📖 Glossaire : IT, Design, Business…'
  },
  es: {
    homeTag:'Tests de orientación', homeTitle:'Elige una categoría',
    homeSub:'Haz el test y descubre qué carrera te conviene',
    domainIT:'IT & Tecnología', domainITSub:'9 profesiones',
    domainCreative:'Profesiones creativas', domainCreativeSub:'7 profesiones', domainBusiness:'Negocios & Gestión', domainBusinessSub:'6 profesiones', domainScience:'Ciencia & Medicina', domainScienceSub:'6 profesiones', domainPedagogy:'Pedagogía & Sociedad', domainPedagogySub:'6 profesiones', domainEngineering:'Ingeniería & Producción', domainEngineeringSub:'6 profesiones',
    domainSoon:'Próximamente', backHome:'← Todos los tests',
    grpDev:'💻 Desarrollo', grpData:'📊 Datos & IA', grpInfra:'🚀 Infraestructura',
    grpSec:'🔐 Seguridad', grpDes:'🎨 Diseño', grpQa:'🔍 Testing',
    grpPm:'📋 Product Management',
    directLabel:'¿Sabes tu área? Salta el test general:',
    directPlaceholder:'— elige una profesión —', directGoBtn:'Iniciar →',
    poCta:'¿No sabes por dónde empezar? Haz el test de orientación',
    footer:'© IT Career Test · Ivan Tarasenko<br>Gratis · Sin registro',
    disclaimer:'Los resultados son solo orientativos y no constituyen asesoramiento profesional. Este test es una herramienta de autodescubrimiento, no una respuesta definitiva.',
    glossaryLink:'📖 Glosario: IT, Diseño, Negocios…'
  },
  pt: {
    homeTag:'Testes de carreira', homeTitle:'Escolha uma categoria',
    homeSub:'Faça o teste e descubra qual carreira é ideal para você',
    domainIT:'IT & Tecnologia', domainITSub:'9 profissões',
    domainCreative:'Profissões criativas', domainCreativeSub:'7 profissões', domainBusiness:'Negócios & Gestão', domainBusinessSub:'6 profissões', domainScience:'Ciência & Medicina', domainScienceSub:'6 profissões', domainPedagogy:'Pedagogia & Sociedade', domainPedagogySub:'6 carreiras', domainEngineering:'Engenharia & Produção', domainEngineeringSub:'6 carreiras',
    domainSoon:'Em breve', backHome:'← Todos os testes',
    grpDev:'💻 Desenvolvimento', grpData:'📊 Dados & IA', grpInfra:'🚀 Infraestrutura',
    grpSec:'🔐 Segurança', grpDes:'🎨 Design', grpQa:'🔍 Testes',
    grpPm:'📋 Product Management',
    directLabel:'Conhece sua área? Pule o teste geral:',
    directPlaceholder:'— escolha uma profissão —', directGoBtn:'Iniciar →',
    poCta:'Não sabes por onde começar? Faz o teste de orientação',
    footer:'© IT Career Test · Ivan Tarasenko<br>Gratuito · Sem cadastro',
    disclaimer:'Os resultados são apenas informativos e não constituem aconselhamento profissional. Este teste é uma ferramenta de autodescoberta, não uma resposta definitiva.',
    glossaryLink:'📖 Glossário: IT, Design, Negócios…'
  },
  ar: {
    homeTag:'اختبارات التوجيه المهني', homeTitle:'اختر فئة',
    homeSub:'أجرِ الاختبار واكتشف المهنة التي تناسبك',
    domainIT:'تكنولوجيا المعلومات', domainITSub:'9 مهن',
    domainCreative:'المهن الإبداعية', domainCreativeSub:'7 مهن', domainBusiness:'الأعمال والإدارة', domainBusinessSub:'6 مهن', domainScience:'العلوم والطب', domainScienceSub:'6 مهن', domainPedagogy:'التربية والمجتمع', domainPedagogySub:'٦ مهن', domainEngineering:'الهندسة والإنتاج', domainEngineeringSub:'٦ مهن',
    domainSoon:'قريباً', backHome:'← جميع الاختبارات',
    grpDev:'💻 التطوير', grpData:'📊 البيانات والذكاء الاصطناعي',
    grpInfra:'🚀 البنية التحتية', grpSec:'🔐 الأمن', grpDes:'🎨 التصميم',
    grpQa:'🔍 الاختبار', grpPm:'📋 إدارة المنتج',
    directLabel:'هل تعرف مجالك؟ تخطَّ الاختبار العام:',
    directPlaceholder:'— اختر مهنة —', directGoBtn:'ابدأ →',
    poCta:'لست متأكداً من أين تبدأ؟ أجرِ اختبار التوجيه المهني',
    footer:'© IT Career Test · Ivan Tarasenko<br>مجاني · بدون تسجيل',
    disclaimer:'النتائج لأغراض إعلامية فقط ولا تمثل استشارة مهنية. هذا الاختبار أداة مساعدة على التعرف بالذات، وليس إجابة نهائية.',
    glossaryLink:'📖 المعجم: IT، التصميم، الأعمال…'
  },
  he: {
    homeTag:'מבחני כיוון מקצועי', homeTitle:'בחר קטגוריה',
    homeSub:'עשה את המבחן וגלה איזו קריירה מתאימה לך',
    domainIT:'IT וטכנולוגיה', domainITSub:'9 מקצועות',
    domainCreative:'מקצועות יצירתיים', domainCreativeSub:'7 מקצועות', domainBusiness:'עסקים וניהול', domainBusinessSub:'6 מקצועות', domainScience:'מדע ורפואה', domainScienceSub:'6 מקצועות', domainPedagogy:'פדגוגיה וחברה', domainPedagogySub:'6 מקצועות', domainEngineering:'הנדסה וייצור', domainEngineeringSub:'6 מקצועות',
    domainSoon:'בקרוב', backHome:'← כל המבחנים',
    grpDev:'💻 פיתוח', grpData:'📊 נתונים ובינה מלאכותית',
    grpInfra:'🚀 תשתיות', grpSec:'🔐 אבטחה', grpDes:'🎨 עיצוב',
    grpQa:'🔍 בדיקות', grpPm:'📋 ניהול מוצר',
    directLabel:'מכיר את התחום שלך? דלג על המבחן הכללי:',
    directPlaceholder:'— בחר מקצוע —', directGoBtn:'התחל →',
    poCta:'לא בטוח מאיפה להתחיל? עשה את מבחן האוריינטציה',
    footer:'© IT Career Test · Ivan Tarasenko<br>חינמי · ללא הרשמה',
    disclaimer:'התוצאות הן למטרות מידע בלבד ואינן מהוות ייעוץ מקצועי. מבחן זה הוא כלי לגילוי עצמי, לא תשובה סופית.',
    glossaryLink:'📖 מילון: IT, עיצוב, עסקים…'
  },
  zh: {
    homeTag:'青少年职业测试', homeTitle:'选择你的方向',
    homeSub:'做测试，发现最适合你的职业',
    domainIT:'IT与科技', domainITSub:'9个职业',
    domainCreative:'创意职业', domainCreativeSub:'7个职业', domainBusiness:'商业与管理', domainBusinessSub:'6个职业', domainScience:'科学与医学', domainScienceSub:'6个职业', domainPedagogy:'教育与社会', domainPedagogySub:'6个职业', domainEngineering:'工程与制造', domainEngineeringSub:'6个职业',
    domainSoon:'即将推出', backHome:'← 所有测试',
    grpDev:'💻 开发', grpData:'📊 数据与AI',
    grpInfra:'🚀 基础设施', grpSec:'🔐 安全', grpDes:'🎨 设计',
    grpQa:'🔍 测试', grpPm:'📋 产品管理',
    directLabel:'已知道自己的方向？直接开始：',
    directPlaceholder:'— 选择职业 —', directGoBtn:'开始 →',
    poCta:'不确定从哪里开始？做一下职业定向测试',
    footer:'© IT Career Test · Ivan Tarasenko<br>免费 · 无需注册',
    disclaimer:'测试结果仅供参考，不构成专业建议。本测试是自我探索工具，不是最终答案。',
    glossaryLink:'📖 词汇表：IT、设计、商业…'
  }
};

// ─── APP STATE ─────────────────────────────────────────────────────────────────
let lang = 'ru';
let activeDomain = 'it'; // 'it' | 'creative'

// ── Glossary hints ──────────────────────────────────────────────────────────
function glossHint(text) {
  if (!text || typeof GLOSSARY === 'undefined') return text;
  const dict = GLOSSARY[lang] || GLOSSARY.en || {};
  // Sort keys longest first so "GitHub Actions" matches before "GitHub"
  const keys = Object.keys(dict).sort((a,b) => b.length - a.length);
  let result = text;
  keys.forEach(term => {
    if (!dict[term]) return;
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`(?<![\\w>])${escaped}(?![\\w<])`, 'g');
    const def = dict[term].replace(/"/g, '&quot;');
    // Only replace in text nodes — skip content inside HTML tags/attributes
    result = result.replace(/(<[^>]+>)|([^<]+)/g, (match, tag, txt) => {
      if (tag) return tag;
      if (!txt) return match;
      return txt.replace(re, `<abbr class="g-hint" title="${def}">${term}</abbr>`);
    });
  });
  return result;
}

// ── Glossary hint tap handler (mobile) ───────────────────────────────────────
function toggleGlossHint(el) {
  const isOpen = el.classList.contains('g-hint--open');
  document.querySelectorAll('abbr.g-hint--open, abbr.g-hint--flip').forEach(a => a.classList.remove('g-hint--open', 'g-hint--flip'));
  if (!isOpen) {
    const rect = el.getBoundingClientRect();
    if (rect.left + 228 > window.innerWidth - 12) el.classList.add('g-hint--flip');
    el.classList.add('g-hint--open');
  }
}
// touchstart with preventDefault stops the synthetic click reaching the answer button
document.addEventListener('touchstart', function(e) {
  const hint = e.target.closest('abbr.g-hint');
  if (hint) {
    e.preventDefault();
    e.stopPropagation();
    toggleGlossHint(hint);
  } else {
    document.querySelectorAll('abbr.g-hint--open').forEach(a => a.classList.remove('g-hint--open'));
  }
}, { capture: true, passive: false });
// Desktop: close on click outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('abbr.g-hint')) {
    document.querySelectorAll('abbr.g-hint--open').forEach(a => a.classList.remove('g-hint--open'));
  }
});

let current = 0;
let answers = Array.from({length: QS.length}, () => new Set());

// ─── HOME SCREEN ──────────────────────────────────────────────────────────────
function hu(key) {
  const map = HOME_UI[lang] || HOME_UI.en;
  return map[key] || HOME_UI.en[key] || key;
}

function showHome() {
  document.getElementById('home').style.display = '';
  document.getElementById('quiz-container').style.display = 'none';
  const poScreen = document.getElementById('po-screen');
  if (poScreen) poScreen.style.display = 'none';
  buildHome();
}

function buildHome() {
  const dir = (I18N[lang] && I18N[lang].dir) || 'ltr';
  document.documentElement.dir = dir;

  // Texts
  document.getElementById('home-tag').textContent     = hu('homeTag');
  document.getElementById('home-title').textContent   = hu('homeTitle');
  document.getElementById('home-sub').textContent     = hu('homeSub');
  document.getElementById('dc-it-name').textContent   = hu('domainIT');
  document.getElementById('dc-it-sub').textContent    = hu('domainITSub');
  document.getElementById('dc-creative-name').textContent = hu('domainCreative');
  const dcSub = document.getElementById('dc-creative-sub');
  if (dcSub) dcSub.textContent = hu('domainCreativeSub');
  document.getElementById('dc-business-name').textContent = hu('domainBusiness');
  const dcBizSub = document.getElementById('dc-business-sub');
  if (dcBizSub) dcBizSub.textContent = hu('domainBusinessSub') || '6 профессий';
  const dcSciEl = document.getElementById('dc-science-name');
  if (dcSciEl) dcSciEl.textContent = hu('domainScience') || 'Наука & Медицина';
  const dcSciSub = document.getElementById('dc-science-sub');
  if (dcSciSub) dcSciSub.textContent = hu('domainScienceSub') || '6 профессий';
  const dcPedEl = document.getElementById('dc-pedagogy-name');
  if (dcPedEl) dcPedEl.textContent = hu('domainPedagogy') || 'Педагогика & Общество';
  const dcPedSub = document.getElementById('dc-pedagogy-sub');
  if (dcPedSub) dcPedSub.textContent = hu('domainPedagogySub') || '6 профессий';
  const dcEngEl = document.getElementById('dc-engineering-name');
  if (dcEngEl) dcEngEl.textContent = hu('domainEngineering') || 'Инженерия & Производство';
  const dcEngSub = document.getElementById('dc-engineering-sub');
  if (dcEngSub) dcEngSub.textContent = hu('domainEngineeringSub') || '6 профессий';
  document.getElementById('home-direct-label').textContent = hu('directLabel');
  document.getElementById('home-go-btn').textContent  = hu('directGoBtn');
  document.getElementById('home-footer').innerHTML  = hu('footer');
  const ctaEl = document.getElementById('po-cta-text');
  if (ctaEl) ctaEl.textContent = hu('poCta');
  const discEl = document.getElementById('home-disclaimer');
  if (discEl) discEl.textContent = hu('disclaimer');
  const glEl = document.getElementById('home-glossary-link');
  if (glEl) glEl.textContent = hu('glossaryLink');

  // How-to-use link — language-specific page
  const howtoFile = { ru:'how-to-use.html', en:'how-to-use-en.html', de:'how-to-use-de.html',
    fr:'how-to-use-fr.html', es:'how-to-use-es.html', pt:'how-to-use-pt.html',
    zh:'how-to-use-zh.html', ar:'how-to-use-ar.html', he:'how-to-use-he.html' };
  const howtoLabel = { ru:'Как работает тест', en:'How the test works', de:'Wie der Test funktioniert',
    fr:'Comment fonctionne le test', es:'Cómo funciona el test', pt:'Como funciona o teste',
    zh:'测试如何运作', ar:'كيف يعمل الاختبار', he:'איך עובד המבחן' };
  const howtoEl = document.getElementById('home-howto-link');
  if (howtoEl) {
    howtoEl.href = howtoFile[lang] || 'how-to-use.html';
    howtoEl.textContent = howtoLabel[lang] || howtoLabel.en;
  }
  const careerLabel = { ru:'Как выбрать профессию', en:'How to choose a career', de:'Wie man einen Beruf wählt',
    fr:'Comment choisir une carrière', es:'Cómo elegir una carrera', pt:'Como escolher uma carreira',
    zh:'如何选择职业', ar:'كيف تختار مهنة', he:'כיצד לבחור קריירה' };
  const careerFile = { ru:'how-to-choose-ru.html', en:'how-to-choose-en.html', de:'how-to-choose-de.html',
    fr:'how-to-choose-fr.html', es:'how-to-choose-es.html', pt:'how-to-choose-pt.html',
    zh:'how-to-choose-zh.html', ar:'how-to-choose-ar.html', he:'how-to-choose-he.html' };
  const careerEl = document.getElementById('home-career-link');
  if (careerEl) {
    careerEl.href = careerFile[lang] || 'how-to-choose-ru.html';
    careerEl.textContent = careerLabel[lang] || careerLabel.en;
  }

  // RTL arrow direction
  const arrows = document.querySelectorAll('.domain-card-arrow');
  arrows.forEach(a => { a.textContent = dir === 'rtl' ? '←' : '→'; });

  // Build grouped select
  const sel = document.getElementById('home-direct-select');
  sel.innerHTML = `<option value="">${hu('directPlaceholder')}</option>`;
  PROF_GROUPS.forEach(group => {
    const isCreative = group.domain === 'creative';
    const isBusiness = group.domain === 'business';
    const og = document.createElement('optgroup');
    // label: creative/business groups use their own i18n; IT groups use HOME_UI
    const cui = typeof CREATIVE_I18N !== 'undefined' ? (CREATIVE_I18N[lang] || CREATIVE_I18N.en).ui : {};
    const bui = typeof BUSINESS_I18N !== 'undefined' ? (BUSINESS_I18N[lang] || BUSINESS_I18N.en).ui : {};
    const sui = typeof SCIENCE_I18N !== 'undefined' ? (SCIENCE_I18N[lang] || SCIENCE_I18N.en).ui : {};
    const pui = typeof PEDAGOGY_I18N !== 'undefined' ? (PEDAGOGY_I18N[lang] || PEDAGOGY_I18N.ru).ui : {};
    if (isCreative) og.label = cui[group.labelKey] || group.labelKey;
    else if (isBusiness) og.label = bui[group.labelKey] || group.labelKey;
    else if (group.domain === 'science') og.label = sui[group.labelKey] || group.labelKey;
    else if (group.domain === 'pedagogy') og.label = pui[group.labelKey] || group.labelKey;
    else if (group.domain === 'engineering') og.label = (typeof ENGINEERING_I18N !== 'undefined' ? ((ENGINEERING_I18N[lang] || ENGINEERING_I18N.ru).ui || {}) : {})[group.labelKey] || group.labelKey;
    else og.label = hu(group.labelKey);
    group.profs.forEach(profKey => {
      const isCreativeProf = isCreative || (group.domain === 'mixed' && typeof CREATIVE_PROF_BASE !== 'undefined' && CREATIVE_PROF_BASE[profKey]);
      if (isCreativeProf) {
        if (typeof CREATIVE_PROF_BASE === 'undefined' || !CREATIVE_PROF_BASE[profKey]) return;
        const cp = typeof CREATIVE_I18N !== 'undefined'
          ? ((CREATIVE_I18N[lang] || CREATIVE_I18N.en).prof || {})[profKey] : null;
        if (!cp) return;
        const opt = document.createElement('option');
        opt.value = 'creative:' + profKey;
        opt.textContent = CREATIVE_PROF_BASE[profKey].emoji + ' ' + cp.name;
        og.appendChild(opt);
      } else if (group.domain === 'science') {
        if (typeof SCIENCE_PROF_BASE === 'undefined' || !SCIENCE_PROF_BASE[profKey]) return;
        const sp = typeof SCIENCE_I18N !== 'undefined'
          ? ((SCIENCE_I18N[lang] || SCIENCE_I18N.en).prof || {})[profKey] : null;
        if (!sp) return;
        const opt = document.createElement('option');
        opt.value = 'science:' + profKey;
        opt.textContent = SCIENCE_PROF_BASE[profKey].emoji + ' ' + sp.name;
        og.appendChild(opt);
      } else if (isBusiness) {
        if (typeof BUSINESS_PROF_BASE === 'undefined' || !BUSINESS_PROF_BASE[profKey]) return;
        const bp = typeof BUSINESS_I18N !== 'undefined'
          ? ((BUSINESS_I18N[lang] || BUSINESS_I18N.en).prof || {})[profKey] : null;
        if (!bp) return;
        const opt = document.createElement('option');
        opt.value = 'business:' + profKey;
        opt.textContent = BUSINESS_PROF_BASE[profKey].emoji + ' ' + bp.name;
        og.appendChild(opt);
      } else if (group.domain === 'pedagogy') {
        if (typeof PEDAGOGY_PROF_BASE === 'undefined' || !PEDAGOGY_PROF_BASE[profKey]) return;
        const pp = typeof PEDAGOGY_I18N !== 'undefined'
          ? ((PEDAGOGY_I18N[lang] || PEDAGOGY_I18N.ru).prof || {})[profKey] : null;
        if (!pp) return;
        const opt = document.createElement('option');
        opt.value = 'pedagogy:' + profKey;
        opt.textContent = PEDAGOGY_PROF_BASE[profKey].emoji + ' ' + pp.name;
        og.appendChild(opt);
      } else if (group.domain === 'engineering') {
        if (typeof ENGINEERING_PROF_BASE === 'undefined' || !ENGINEERING_PROF_BASE[profKey]) return;
        const ep = typeof ENGINEERING_I18N !== 'undefined'
          ? ((ENGINEERING_I18N[lang] || ENGINEERING_I18N.ru).prof || {})[profKey] : null;
        if (!ep) return;
        const opt = document.createElement('option');
        opt.value = 'engineering:' + profKey;
        opt.textContent = ENGINEERING_PROF_BASE[profKey].emoji + ' ' + ep.name;
        og.appendChild(opt);
      } else {
        if (!hasL2Data(profKey)) return;
        const p = (I18N[lang] && I18N[lang].prof) ? I18N[lang].prof[profKey] : null;
        const pb = PROF_BASE[profKey];
        if (!p || !pb) return;
        const opt = document.createElement('option');
        opt.value = profKey;
        opt.textContent = pb.emoji + ' ' + p.name;
        og.appendChild(opt);
      }
    });
    if (og.children.length) sel.appendChild(og);
  });
}

function startDomain(key) {
  if (key === 'creative') { startCreativeDomain(); return; }
  if (key === 'business') { startBusinessDomain(); return; }
  if (key === 'science') { startScienceDomain(); return; }
  if (key === 'pedagogy' || key === 'social') { startPedagogyDomain(); return; }
  if (key === 'engineering') { startEngineeringDomain(); return; }
  if (key !== 'it') return;
  activeDomain = 'it';
  document.getElementById('home').style.display = 'none';
  const poScreen = document.getElementById('po-screen');
  if (poScreen) poScreen.style.display = 'none';
  document.getElementById('quiz-container').style.display = '';
  // Reset and start quiz
  current = 0;
  l2FromDirect = false;
  answers = Array.from({length: QS.length}, () => new Set());
  document.getElementById('result').style.display = 'none';
  document.getElementById('l2-result').style.display = 'none';
  document.getElementById('l2-quiz').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  renderHeader();
  renderQuestion();
  document.getElementById('quiz-back-home').textContent = hu('backHome');
  const qDisc = document.getElementById('quiz-disclaimer');
  if (qDisc) qDisc.textContent = hu('disclaimer');
}

function goDirectL2() {
  const sel = document.getElementById('home-direct-select');
  const key = sel.value;
  if (!key) return;

  // Parse domain prefix
  let domain = 'it', profKey = key;
  if (key.startsWith('science:'))     { domain = 'science';     profKey = key.slice(8); }
  else if (key.startsWith('business:'))   { domain = 'business';    profKey = key.slice(9); }
  else if (key.startsWith('pedagogy:'))   { domain = 'pedagogy';    profKey = key.slice(9); }
  else if (key.startsWith('engineering:')){ domain = 'engineering'; profKey = key.slice(12); }
  else if (key.startsWith('creative:'))   { domain = 'creative';    profKey = key.slice(9); }

  if (!hasL2Data(profKey) && domain !== 'creative') return;

  // Hide home, show quiz container
  document.getElementById('home').style.display = 'none';
  document.getElementById('quiz-container').style.display = '';
  document.getElementById('result').style.display = 'none';
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('l2-result').style.display = 'none';

  activeDomain = domain;
  l2ProfKey = profKey;
  l2FromDirect = true;

  // For creative: handle alias
  if (domain === 'creative') {
    const hasCreativeL2 = typeof CREATIVE_L2 !== 'undefined' && CREATIVE_L2[profKey];
    const itAlias = typeof CREATIVE_TO_IT_L2 !== 'undefined' && CREATIVE_TO_IT_L2[profKey];
    if (!hasCreativeL2 && !itAlias) { startCreativeDomain(); return; }
    if (!hasCreativeL2 && itAlias) { activeDomain = 'it'; l2ProfKey = itAlias; }
  }

  loadL2Script(l2ProfKey, function() {
    const d = getL2Data();
    if (!d) { showHome(); return; }
    renderDomainHeader();
    l2Current = 0;
    l2Answers = Array.from({length: d.questions.length}, () => new Set());
    const backLabel = (d.ui && d.ui.l2back) ? d.ui.l2back : (I18N[lang].ui.l2directBack || '← Назад');
    document.getElementById('l2-to-l1').textContent = backLabel + ' (' + hu('backHome') + ')';
    document.getElementById('l2-quiz').style.display = 'block';
    renderL2Question();
  });
}

// ─── LANGUAGE SWITCHER ────────────────────────────────────────────────────────
function buildLangBar() {
  const c = document.getElementById('lang-btns');
  c.innerHTML = '';
  Object.entries(I18N).forEach(([code, d]) => {
    const b = document.createElement('button');
    b.className = 'lang-btn' + (code === lang ? ' active' : '');
    b.textContent = d.flag + ' ' + d.name;
    b.onclick = () => setLang(code);
    c.appendChild(b);
  });
}

function visibleId() {
  const ids = ['quiz','result','l2-quiz','l2-result'];
  for (const id of ids) {
    const el = document.getElementById(id);
    if (el && el.offsetParent !== null) return id;
  }
  return null; // home screen
}

function setLang(code) {
  lang = code;
  try { localStorage.setItem('career_lang', code); } catch(e) {}
  const d = I18N[code];
  document.documentElement.lang = code;
  document.documentElement.dir = d.dir;
  document.title = d.ui.title;
  buildLangBar();

  // Home screen visible
  const home = document.getElementById('home');
  if (home && home.style.display !== 'none' && home.offsetParent !== null) {
    buildHome();
    return;
  }

  // Orientation screen visible
  const poScreen = document.getElementById('po-screen');
  if (poScreen && poScreen.style.display !== 'none' && poScreen.offsetParent !== null) {
    const poResult = document.getElementById('po-result');
    const resultShowing = poResult && poResult.offsetParent !== null;
    if (resultShowing && poAnswers.some(s => s.size > 0)) {
      showPoResult(); // re-renders everything incl. header in new language
    } else {
      renderPoQ(); // updates header + question
    }
    return;
  }

  // Quiz flow visible
  document.getElementById('quiz-back-home').textContent = hu('backHome');
  const _qDisc = document.getElementById('quiz-disclaimer');
  if (_qDisc) _qDisc.textContent = hu('disclaimer');
  const _qGlink = document.getElementById('quiz-glossary-link');
  if (_qGlink) _qGlink.textContent = hu('glossaryLink');
  const screen = visibleId();
  if (activeDomain === 'creative') {
    if (screen === 'quiz') { renderCreativeQ(); }
    else if (screen === 'result') { showCreativeResult(); }
    else if (screen === 'l2-quiz') { renderL2Question(); }
    else if (screen === 'l2-result') { showL2Result(true); }
    return;
  }
  if (activeDomain === 'business') {
    if (screen === 'quiz') { renderBusinessQ(); }
    else if (screen === 'result') { showBusinessResult(); }
    else if (screen === 'l2-quiz') { renderL2Question(); }
    else if (screen === 'l2-result') { showL2Result(true); }
    return;
  }
  if (activeDomain === 'science') {
    if (screen === 'quiz') { renderScienceQ(); }
    else if (screen === 'result') { showScienceResult(); }
    else if (screen === 'l2-quiz') { renderL2Question(); }
    else if (screen === 'l2-result') { showL2Result(true); }
    return;
  }
  if (activeDomain === 'pedagogy') {
    if (screen === 'quiz') { renderPedagogyQ(); }
    else if (screen === 'result') { showPedagogyResult(); }
    else if (screen === 'l2-quiz') { renderL2Question(); }
    else if (screen === 'l2-result') { showL2Result(true); }
    return;
  }
  if (activeDomain === 'engineering') {
    if (screen === 'quiz') { renderEngineeringQ(); }
    else if (screen === 'result') { showEngineeringResult(); }
    else if (screen === 'l2-quiz') { renderL2Question(); }
    else if (screen === 'l2-result') { showL2Result(true); }
    return;
  }
  renderHeader();
  if (screen === 'quiz') {
    renderQuestion();
  } else if (screen === 'result') {
    showResult(true);
  } else if (screen === 'l2-quiz') {
    renderL2Question();
  } else if (screen === 'l2-result') {
    showL2Result(true);
  }
}

function renderHeader() {
  const u = I18N[lang].ui;
  document.getElementById('ui-tag').textContent      = u.tag;
  document.getElementById('ui-title').textContent    = u.title;
  document.getElementById('ui-subtitle').textContent = u.subtitle;
  document.getElementById('ui-footer').innerHTML   = u.footer;
  const qgl = document.getElementById('quiz-glossary-link');
  if (qgl) qgl.textContent = hu('glossaryLink');
}

// ─── QUIZ ──────────────────────────────────────────────────────────────────────
function renderQuestion() {
  const u = I18N[lang].ui;
  const q = I18N[lang].qs[current];
  const sel = answers[current];
  document.getElementById('prog').style.width = ((current / QS.length) * 100) + '%';
  document.getElementById('prog-lbl').textContent = (current + 1) + ' / ' + QS.length;
  document.getElementById('qtext').textContent = q.t;
  document.getElementById('qhint').textContent = u.hint;
  const div = document.getElementById('opts');
  div.innerHTML = '';
  q.o.forEach((text, i) => {
    const isSel = sel.has(i);
    const b = document.createElement('button');
    b.className = 'opt' + (isSel ? ' selected' : '');
    b.innerHTML = `<span class="check">${isSel ? '✓' : ''}</span><span>${glossHint(text)}</span>`;
    b.onclick = (e) => { if (e.target.closest('abbr.g-hint')) return; toggle(i); };
    div.appendChild(b);
  });
  document.getElementById('btnBack').textContent = u.back;
  document.getElementById('btnBack').disabled = current === 0;
  const isLast = current === QS.length - 1;
  document.getElementById('btnNext').textContent = isLast ? u.finish : u.next;
  document.getElementById('btnNext').disabled = sel.size === 0;
  injectTooltips(document.getElementById('qtext'));
  document.getElementById('opts').querySelectorAll('.opt > span:last-child').forEach(s => injectTooltips(s));
}

function toggle(i) {
  const sel = answers[current];
  if (sel.has(i)) sel.delete(i); else sel.add(i);
  renderQuestion();
}

function goNext() {
  if (activeDomain === 'creative') { goCreativeNext(); return; }
  if (activeDomain === 'business') { goBusinessNext(); return; }
  if (activeDomain === 'science') { goScienceNext(); return; }
  if (activeDomain === 'pedagogy') { goPedagogyNext(); return; }
  if (activeDomain === 'engineering') { goEngineeringNext(); return; }
  if (answers[current].size === 0) return;
  if (current === QS.length - 1) { showResult(); return; }
  current++;
  renderQuestion();
}

function goBack() {
  if (activeDomain === 'creative') { goCreativeBack(); return; }
  if (activeDomain === 'business') { goBusinessBack(); return; }
  if (activeDomain === 'science') { goScienceBack(); return; }
  if (activeDomain === 'pedagogy') { goPedagogyBack(); return; }
  if (activeDomain === 'engineering') { goEngineeringBack(); return; }
  if (current === 0) return;
  current--;
  renderQuestion();
}

// ─── RESULT ────────────────────────────────────────────────────────────────────
function showL1ShareBtn() {
  const shareLabels = { ru:'Поделиться', en:'Share', de:'Teilen', fr:'Partager', es:'Compartir', pt:'Compartilhar', ar:'مشاركة', he:'שתף', zh:'分享' };
  const btn = document.getElementById('btn-share-l1');
  const lbl = document.getElementById('btn-share-l1-lbl');
  if (btn) btn.style.display = 'inline-flex';
  if (lbl) lbl.textContent = shareLabels[lang] || 'Share';
  const pdfBtn = document.getElementById('btn-pdf-l1');
  if (pdfBtn) pdfBtn.style.display = 'inline-flex';
}

function showResult(rerender) {
  const scores = {};
  answers.forEach((sel, qi) => {
    sel.forEach(ai => {
      const s = QS[qi].opts[ai].s || {};
      Object.entries(s).forEach(([k, v]) => scores[k] = (scores[k] || 0) + v);
    });
  });
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  if (!sorted.length) return;
  const topKey = sorted[0][0];
  const maxScore = sorted[0][1];

  if (!rerender) {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
  }
  document.getElementById('prog').style.width = '100%';
  document.getElementById('prog-lbl').textContent = I18N[lang].ui.done;

  const u = I18N[lang].ui;
  const p = I18N[lang].prof[topKey];
  const pb = PROF_BASE[topKey];

  // Save L1 result for PDF export
  if (!rerender) pdfResults.l1 = {
    domain:   activeDomain,
    profKey:  topKey,
    profName: p  ? p.name   : topKey,
    emoji:    pb ? pb.emoji : '',
    desc:     p  ? (p.desc   || '') : '',
    detail:   p  ? (p.detail || '') : '',
    day:      p  ? (p.day    || '') : '',
    start:    p  ? (p.start  || []) : [],
    tools:    pb ? (pb.tools || []) : []
  };
  showL1ShareBtn();

  document.getElementById('res-tag').textContent = u.resTag;
  document.getElementById('res-sub').textContent = u.resSub;
  document.getElementById('btn-restart').textContent = u.restart;

  // L2 button
  l2ProfKey = topKey;
  const l2Btn = document.getElementById('btn-l2');
  const l2Wrap = document.getElementById('l2-btn-wrap');
  if (hasL2Data(topKey)) {
    l2Btn.textContent = u.l2btn;
    l2Wrap.style.display = 'block';
  } else {
    l2Wrap.style.display = 'none';
  }

  document.getElementById('winner').innerHTML = `
    <div class="winner-badge">${u.winBadge}</div>
    <div class="winner-title">${pb.emoji} ${p.name}</div>
    <div class="winner-short">${glossHint(p.desc)}</div>
    <div class="winner-detail">${glossHint(p.detail)}</div>
    <div class="section-block">
      <div class="section-lbl">${u.lblDay}</div>
      <div class="section-text">${glossHint(p.day)}</div>
    </div>
    <div class="section-block">
      <div class="section-lbl">${u.lblEx}</div>
      <div class="section-text">${glossHint(p.examples)}</div>
    </div>
    <div class="section-block">
      <div class="section-lbl">${u.lblTools}</div>
      <div class="chips">${pb.tools.map(t => `<a class="chip" href="${t.u}" target="_blank" rel="noopener noreferrer">${t.n}</a>`).join('')}</div>
    </div>
    <div class="section-block">
      <div class="section-lbl">${u.lblStart}</div>
      <ul class="start-list">${p.start.map((s, i) => {
        const url = pb.startUrls && pb.startUrls[i];
        return `<li>${url ? `<a href="${url}" target="_blank" rel="noopener noreferrer">${s}</a>` : s}</li>`;
      }).join('')}</ul>
    </div>
  `;

  const others = sorted.slice(1, 5);
  document.getElementById('others').innerHTML = `
    <div class="others-title">${u.othTitle}</div>
    ${others.map(([k, v]) => {
      const op = I18N[lang].prof[k];
      const ob = PROF_BASE[k];
      const hasL2 = hasL2Data(k);
      const expandHtml = hasL2 && op && ob ? `
        <div class="other-expand" id="oexp-${k}">
          <div class="other-expand-desc">${glossHint(op.desc)}</div>
          ${op.detail ? `<div class="other-expand-detail">${glossHint(op.detail)}</div>` : ''}
          ${op.day ? `<div class="other-expand-section"><span class="other-expand-lbl">${u.lblDay}</span><div class="other-expand-text">${op.day}</div></div>` : ''}
          ${op.examples ? `<div class="other-expand-section"><span class="other-expand-lbl">${u.lblEx}</span><div class="other-expand-text">${op.examples}</div></div>` : ''}
          ${ob.tools && ob.tools.length ? `<div class="other-expand-section"><span class="other-expand-lbl">${u.lblTools}</span><div class="chips">${ob.tools.map(t => `<a class="chip" href="${t.u}" target="_blank" rel="noopener">${t.n}</a>`).join('')}</div></div>` : ''}
          <div class="other-expand-action">
            <button class="btn-next other-expand-btn" onclick="event.stopPropagation();goToL2FromOthers('${k}')">${u.l2btn || '→'}</button>
          </div>
        </div>` : '';
      const pct = Math.round(v/maxScore*100);
      return `<div class="other-row${hasL2 ? ' other-row--clickable' : ''}" ${hasL2 ? `onclick="toggleOtherRow('${k}')" role="button" tabindex="0"` : ''}>
        <div class="other-row-header">
          <span class="other-row-name">${ob ? ob.emoji : ''} ${op ? op.name : k}</span>
          ${hasL2 ? `<span class="other-row-arrow" id="oarr-${k}">▾</span>` : ''}
        </div>
        <div class="other-row-bar">
          <div class="bar-wrap-full"><div class="bar-inner" style="width:${pct}%"></div></div>
        </div>
        ${expandHtml}
      </div>`;
    }).join('')}
  `;
  injectTooltips(document.getElementById('winner'));
  injectTooltips(document.getElementById('others'));
}

function toggleOtherRow(key) {
  const expand = document.getElementById('oexp-' + key);
  const arrow  = document.getElementById('oarr-' + key);
  if (!expand) return;
  const isOpen = expand.classList.contains('open');
  // Close all others first
  document.querySelectorAll('.other-expand.open').forEach(el => el.classList.remove('open'));
  document.querySelectorAll('[id^="oarr-"]').forEach(el => { el.style.transform = ''; });
  if (!isOpen) {
    expand.classList.add('open');
    if (arrow) arrow.style.transform = 'rotate(180deg)';
    injectTooltips(expand);
  }
}

function toggleL2OtherRow(key) {
  const expand = document.getElementById('l2oexp-' + key);
  const arrow  = document.getElementById('l2oarr-' + key);
  if (!expand) return;
  const isOpen = expand.classList.contains('open');
  document.querySelectorAll('[id^="l2oexp-"].open').forEach(el => el.classList.remove('open'));
  document.querySelectorAll('[id^="l2oarr-"]').forEach(el => { el.style.transform = ''; });
  if (!isOpen) {
    expand.classList.add('open');
    if (arrow) arrow.style.transform = 'rotate(180deg)';
  }
}

function goToL2FromOthers(key) {
  if (!hasL2Data(key)) return;
  l2ProfKey = key;
  l2FromDirect = false;
  startL2();
}

function restart() {
  current = 0;
  l2FromDirect = false;
  activeDomain = 'it';
  answers = Array.from({length: QS.length}, () => new Set());
  showHome();
}

// ─── CREATIVE DOMAIN ───────────────────────────────────────────────────────────
let creativeAnswers = [];

function startCreativeDomain() {
  activeDomain = 'creative';
  current = 0;
  creativeAnswers = Array.from({length: CREATIVE_QS.length}, () => new Set());
  document.getElementById('home').style.display = 'none';
  const poScreen = document.getElementById('po-screen');
  if (poScreen) poScreen.style.display = 'none';
  document.getElementById('quiz-container').style.display = '';
  document.getElementById('result').style.display = 'none';
  document.getElementById('l2-result').style.display = 'none';
  document.getElementById('l2-quiz').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  renderCreativeQ();
  const qDisc = document.getElementById('quiz-disclaimer');
  if (qDisc) qDisc.textContent = hu('disclaimer');
  document.getElementById('quiz-back-home').textContent = hu('backHome');
}

function renderCreativeQ() {
  const cu = (CREATIVE_I18N[lang] || CREATIVE_I18N.en).ui;
  const cq = (CREATIVE_I18N[lang] || CREATIVE_I18N.en).qs[current];
  const sel = creativeAnswers[current];
  const total = CREATIVE_QS.length;

  document.getElementById('ui-tag').textContent      = cu.tag;
  document.getElementById('ui-title').textContent    = cu.title;
  document.getElementById('ui-subtitle').textContent = cu.subtitle;
  document.getElementById('ui-footer').innerHTML     = cu.footer;
  const qgl = document.getElementById('quiz-glossary-link');
  if (qgl) qgl.textContent = hu('glossaryLink');

  document.getElementById('prog').style.width = ((current / total) * 100) + '%';
  document.getElementById('prog-lbl').textContent = (current + 1) + ' / ' + total;
  document.getElementById('qtext').textContent = cq.q;
  document.getElementById('qhint').textContent = '';

  const div = document.getElementById('opts');
  div.innerHTML = '';
  cq.opts.forEach((text, i) => {
    const isSel = sel.has(i);
    const b = document.createElement('button');
    b.className = 'opt' + (isSel ? ' selected' : '');
    b.innerHTML = `<span class="check">${isSel ? '✓' : ''}</span><span>${glossHint(text)}</span>`;
    b.onclick = (e) => { if (e.target.closest('abbr.g-hint')) return; toggleCreative(i); };
    div.appendChild(b);
  });

  document.getElementById('btnBack').textContent = '←';
  document.getElementById('btnBack').disabled = current === 0;
  const isLast = current === total - 1;
  document.getElementById('btnNext').textContent = isLast ? (cu.finish || '✓') : (cu.next || '→');
  document.getElementById('btnNext').disabled = sel.size === 0;

  injectTooltips(document.getElementById('qtext'));
  document.getElementById('opts').querySelectorAll('.opt > span:last-child').forEach(s => injectTooltips(s));
}

function toggleCreative(i) {
  const sel = creativeAnswers[current];
  if (sel.has(i)) sel.delete(i); else sel.add(i);
  renderCreativeQ();
}

function goCreativeNext() {
  if (creativeAnswers[current].size === 0) return;
  if (current === CREATIVE_QS.length - 1) { showCreativeResult(); return; }
  current++;
  renderCreativeQ();
}

function goCreativeBack() {
  if (current === 0) return;
  current--;
  renderCreativeQ();
}

function showCreativeResult() {
  const scores = {};
  creativeAnswers.forEach((sel, qi) => {
    sel.forEach(ai => {
      const s = CREATIVE_QS[qi].opts[ai].score || {};
      Object.entries(s).forEach(([k, v]) => scores[k] = (scores[k] || 0) + v);
    });
  });
  // Seed all prof keys
  Object.keys(CREATIVE_PROF_BASE).forEach(k => { if (!scores[k]) scores[k] = 0; });
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  if (!sorted.length) return;
  const topKey = sorted[0][0];
  const maxScore = sorted[0][1] || 1;

  document.getElementById('quiz').style.display = 'none';
  document.getElementById('result').style.display = 'block';
  document.getElementById('prog').style.width = '100%';

  const cu = (CREATIVE_I18N[lang] || CREATIVE_I18N.en).ui;
  const cp = (CREATIVE_I18N[lang] || CREATIVE_I18N.en).prof[topKey];
  const pb = CREATIVE_PROF_BASE[topKey];

  // Save L1 result for PDF export
  pdfResults.l1 = {
    domain:   'creative',
    profKey:  topKey,
    profName: cp ? cp.name   : topKey,
    emoji:    pb ? pb.emoji  : '',
    desc:     cp ? (cp.desc   || '') : '',
    detail:   cp ? (cp.detail || '') : '',
    day:      cp ? (cp.day    || '') : '',
    start:    cp ? (cp.start  || []) : [],
    tools:    pb ? (pb.tools  || []) : []
  };
  showL1ShareBtn();

  document.getElementById('ui-tag').textContent      = cu.tag;
  document.getElementById('ui-title').textContent    = cu.title;
  document.getElementById('ui-subtitle').textContent = cu.subtitle;
  document.getElementById('ui-footer').innerHTML     = cu.footer;
  document.getElementById('res-tag').textContent = cu.resTag;
  document.getElementById('res-sub').textContent = cu.resSub;
  document.getElementById('btn-restart').textContent = '← ' + hu('backHome');

  // Creative L2 button
  const l2Wrap = document.getElementById('l2-btn-wrap');
  if (l2Wrap) {
    const _itAlias = CREATIVE_TO_IT_L2[topKey];
    const hasL2 = hasL2Data(topKey) || (_itAlias && hasL2Data(_itAlias));
    l2Wrap.style.display = hasL2 ? '' : 'none';
    const l2Btn = document.getElementById('btn-l2');
    if (l2Btn && hasL2) {
      l2Btn.textContent = (I18N[lang] && I18N[lang].ui.l2btn) || '🔍 Уточнить специализацию →';
      const _hasCreativeL2 = typeof CREATIVE_L2 !== 'undefined' && CREATIVE_L2[topKey];
      const _l2Key = _hasCreativeL2 ? topKey : (_itAlias || topKey);
      l2Btn.onclick = function() {
        l2ProfKey = _l2Key;
        if (_hasCreativeL2) activeDomain = 'creative';
        startL2();
      };
    }
  }

  // Winner card
  const startLinks = pb.startUrls && cp.start
    ? `<ul class="start-list">${cp.start.map((s, i) => {
        const url = pb.startUrls[i];
        return `<li>${url ? `<a href="${url}" target="_blank" rel="noopener">${s}</a>` : s}</li>`;
      }).join('')}</ul>` : '';
  document.getElementById('winner').innerHTML = `
    <div class="winner-badge">${cu.winBadge}</div>
    <div class="winner-title">${pb.emoji} ${cp.name}</div>
    <div class="winner-short">${glossHint(cp.desc)}</div>
    <div class="winner-detail">${glossHint(cp.detail)}</div>
    <div class="section-block"><div class="section-lbl">${cu.lblDay}</div><div class="section-text">${glossHint(cp.day)}</div></div>
    <div class="section-block"><div class="section-lbl">${cu.lblEx}</div><div class="section-text">${glossHint(cp.examples)}</div></div>
    <div class="section-block"><div class="section-lbl">${cu.lblTools}</div>
      <div class="chips">${pb.tools.map(t => `<a class="chip" href="${t.u}" target="_blank" rel="noopener">${t.n}</a>`).join('')}</div>
    </div>
    <div class="section-block"><div class="section-lbl">${cu.lblStart}</div>${startLinks}</div>
  `;

  // Others bar chart
  const othersEl = document.getElementById('others');
  const othersSorted = sorted.slice(1).filter(([k]) => CREATIVE_PROF_BASE[k]);
  if (!othersSorted.length) { othersEl.style.display = 'none'; }
  else {
    othersEl.style.display = '';
    othersEl.innerHTML = othersSorted.map(([k, score]) => {
      const op = (CREATIVE_I18N[lang] || CREATIVE_I18N.en).prof[k];
      const opb = CREATIVE_PROF_BASE[k];
      const pct = Math.round(score / maxScore * 100);
      const _itAliasK = CREATIVE_TO_IT_L2[k];
      const hasL2k = hasL2Data(k) || (_itAliasK && hasL2Data(_itAliasK));
      const _hasCreativeL2K = typeof CREATIVE_L2 !== 'undefined' && CREATIVE_L2[k];
      const _l2KeyK = _hasCreativeL2K ? k : (_itAliasK || k);
      const _domainSetK = _hasCreativeL2K ? "activeDomain='creative';" : '';
      const l2BtnHtml = hasL2k
        ? `<button class="btn-secondary btn-l2-inline" onclick="event.stopPropagation();${_domainSetK}l2ProfKey='${_l2KeyK}';startL2()">
            ${(I18N[lang] && I18N[lang].ui.l2btn) || '🔍 Уточнить специализацию →'}
           </button>` : '';
      const toolsHtml = opb && opb.tools
        ? `<div class="section-block"><div class="section-lbl">${cu.lblTools}</div>
            <div class="chips">${opb.tools.map(t => `<a class="chip" href="${t.u}" target="_blank" rel="noopener">${t.n}</a>`).join('')}</div>
           </div>` : '';
      const startHtml = opb && opb.startUrls && op && op.start
        ? `<div class="section-block"><div class="section-lbl">${cu.lblStart}</div>
            <ul class="start-list">${op.start.map((s, i) => {
              const url = opb.startUrls[i];
              return `<li>${url ? `<a href="${url}" target="_blank" rel="noopener">${s}</a>` : s}</li>`;
            }).join('')}</ul>
           </div>` : '';
      return `<div class="other-row" id="ocr-${k}" onclick="toggleOtherCreative('${k}')">
        <div class="other-row-header">
          <span class="other-row-name">${opb.emoji} ${op ? op.name : k}</span>
          <div class="bar-wrap" style="flex:1;margin:0 8px"><div class="bar-inner" style="width:${pct}%;opacity:.4"></div></div>
          <span class="other-row-arrow" id="oarrcr-${k}">▼</span>
        </div>
        <div class="other-expand" id="oexpcr-${k}">
          <div class="other-expand-desc">${op ? glossHint(op.desc) : ''}</div>
          <div class="other-expand-detail">${op ? glossHint(op.detail) : ''}</div>
          ${op && op.day ? `<div class="section-block"><div class="section-lbl">${cu.lblDay}</div><div class="section-text">${op.day}</div></div>` : ''}
          ${toolsHtml}
          ${startHtml}
          ${l2BtnHtml}
        </div>
      </div>`;
    }).join('');
    injectTooltips(othersEl);
  }
}

function toggleOtherCreative(k) {
  const exp = document.getElementById('oexpcr-' + k);
  const arr = document.getElementById('oarrcr-' + k);
  if (!exp) return;
  const open = exp.classList.toggle('open');
  if (arr) arr.style.transform = open ? 'rotate(180deg)' : '';
  if (open) injectTooltips(exp);
}

// ─── PROFORIENTATION EXPAND LABELS (section headers inside accordion) ────────
const PO_EXPAND_LBL = {
  ru: { who:'Кому подходит', profs:'Профессии', start:'С чего начать' },
  en: { who:'Who it\'s for', profs:'Careers', start:'Where to start' },
  de: { who:'Für wen', profs:'Berufe', start:'Wie anfangen' },
  fr: { who:'Pour qui', profs:'Métiers', start:'Par où commencer' },
  es: { who:'Para quién', profs:'Profesiones', start:'Por dónde empezar' },
  pt: { who:'Para quem', profs:'Profissões', start:'Por onde começar' },
  ar: { who:'لمن يناسب', profs:'المهن', start:'من أين تبدأ' },
  he: { who:'למי זה מתאים', profs:'מקצועות', start:'איפה להתחיל' }
};

// ─── PROFORIENTATION QUIZ ────────────────────────────────────────────────────
let poQIdx = 0;
let poAnswers = [];

function showProfOr() {
  document.getElementById('home').style.display = 'none';
  document.getElementById('quiz-container').style.display = 'none';
  const poScreen = document.getElementById('po-screen');
  poScreen.style.display = '';
  poQIdx = 0;
  poAnswers = Array.from({length: PO_QS.length}, () => new Set());
  document.getElementById('po-quiz-card').style.display = '';
  document.getElementById('po-result').style.display = 'none';
  renderPoQ(); // updates header + question in one call
}

function renderPoQ() {
  const t   = PO_I18N[lang] || PO_I18N.en;
  const qd  = t.qs[poQIdx];
  const u   = I18N[lang] ? I18N[lang].ui : null;
  const total = PO_QS.length;

  // Always sync header/footer so language switch works mid-quiz
  document.getElementById('po-tag').textContent       = t.tag;
  document.getElementById('po-title').textContent     = t.title;
  document.getElementById('po-sub').textContent       = t.sub;
  document.getElementById('po-back-home').textContent = t.back;
  document.getElementById('po-footer').innerHTML      = hu('footer');
  const poDisc = document.getElementById('po-disclaimer');
  if (poDisc) poDisc.textContent = hu('disclaimer');

  document.getElementById('po-prog').style.width = ((poQIdx / total) * 100) + '%';
  document.getElementById('po-prog-lbl').textContent = t.prog(poQIdx + 1, total);
  document.getElementById('po-qtext').textContent = qd.q;
  document.getElementById('po-qhint').textContent =
    qd.h + ' · ' + (t.multiHint || 'можно выбрать несколько');

  const sel = poAnswers[poQIdx];
  const div = document.getElementById('po-opts');
  div.innerHTML = '';
  qd.opts.forEach((text, i) => {
    const isSel = sel.has(i);
    const b = document.createElement('button');
    b.className = 'opt' + (isSel ? ' selected' : '');
    b.innerHTML = `<span class="check">${isSel ? '✓' : ''}</span><span>${glossHint(text)}</span>`;
    b.onclick = () => selectPoOpt(i);
    div.appendChild(b);
  });

  document.getElementById('po-btn-back').disabled = poQIdx === 0;
  const isLast = poQIdx === total - 1;
  const nextBtn = document.getElementById('po-btn-next');
  nextBtn.textContent = isLast ? (u ? u.finish : 'Finish') : (u ? u.next : 'Next →');
  nextBtn.disabled = sel.size === 0;
  injectTooltips(document.getElementById('po-qtext'));
  document.getElementById('po-opts').querySelectorAll('.opt > span:last-child').forEach(s => injectTooltips(s));
}

function selectPoOpt(i) {
  const sel = poAnswers[poQIdx];
  if (sel.has(i)) sel.delete(i); else sel.add(i);
  renderPoQ();
}

function goPoNext() {
  if (poAnswers[poQIdx].size === 0) return;
  if (poQIdx === PO_QS.length - 1) { showPoResult(); return; }
  poQIdx++;
  renderPoQ();
}

function goPoBack() {
  if (poQIdx === 0) { showHome(); return; }
  poQIdx--;
  renderPoQ();
}

function showPoResult() {
  // Calculate scores (multiple selection)
  const scores = {};
  poAnswers.forEach((sel, qi) => {
    sel.forEach(ai => {
      const s = PO_QS[qi].opts[ai].s || {};
      Object.entries(s).forEach(([k, v]) => scores[k] = (scores[k] || 0) + v);
    });
  });

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  if (!sorted.length) return;

  const topKey  = sorted[0][0];
  const maxScore = sorted[0][1];
  const t       = PO_I18N[lang] || PO_I18N.en;
  const domInfo = PO_DOMAINS[topKey];
  const topIsActive = topKey === 'it' || topKey === 'creative' || topKey === 'business' || topKey === 'science' || topKey === 'social' || topKey === 'engineering';

  document.getElementById('po-quiz-card').style.display = 'none';
  document.getElementById('po-result').style.display = '';

  // Always sync header so language switch works on result screen too
  document.getElementById('po-tag').textContent       = t.tag;
  document.getElementById('po-title').textContent     = t.title;
  document.getElementById('po-sub').textContent       = t.sub;
  document.getElementById('po-back-home').textContent = t.back;
  document.getElementById('po-footer').innerHTML      = hu('footer');
  const poDisc2 = document.getElementById('po-disclaimer');
  if (poDisc2) poDisc2.textContent = hu('disclaimer');

  document.getElementById('po-res-tag').textContent  = t.resTag;
  document.getElementById('po-res-sub').textContent  = t.resSub;
  document.getElementById('po-restart').textContent  = t.restart;

  // Winner card — show full description if available
  const lbl = PO_EXPAND_LBL[lang] || PO_EXPAND_LBL.en;
  const df  = t.domainFull && t.domainFull[topKey];
  document.getElementById('po-winner').innerHTML = `
    <div class="winner-badge">${t.resTag}</div>
    <div class="winner-title">${domInfo ? domInfo.icon : ''} ${t.domains[topKey]}</div>
    <div class="winner-short">${t.domainDesc[topKey]}</div>
    ${df ? `
    <div class="section-block">
      <div class="section-lbl">👤 ${lbl.who}</div>
      <div class="section-text">${df.who}</div>
    </div>
    <div class="section-block">
      <div class="section-lbl">💼 ${lbl.profs}</div>
      <div class="section-text">${df.profs}</div>
    </div>
    <div class="section-block">
      <div class="section-lbl">🚀 ${lbl.start}</div>
      <div class="section-text">${df.start}</div>
    </div>
    <div class="po-expand-btn-wrap">${
      (topKey === 'it' || topKey === 'creative' || topKey === 'business' || topKey === 'science' || topKey === 'social' || topKey === 'engineering')
        ? `<button class="po-domain-test-btn" onclick="startDomain('${topKey}')">${topKey === 'creative' ? (t.goTestCreative || t.goTest) : topKey === 'business' ? (t.goTestBusiness || t.goTest) : topKey === 'science' ? (t.goTestScience || t.goTest) : topKey === 'social' ? (t.goTestSocial || t.goTest) : topKey === 'engineering' ? (t.goTestEngineering || t.goTest) : t.goTest}</button>`
        : `<button class="po-domain-test-btn po-domain-test-btn--soon" disabled>${t.testSoon || '🔜'}</button>`
    }</div>` : ''}
  `;

  // Domain bars — clickable accordion rows
  const allDomainKeys = Object.keys(PO_DOMAINS);
  document.getElementById('po-bars').innerHTML = allDomainKeys.map(dk => {
    const score  = scores[dk] || 0;
    const pct    = maxScore > 0 ? Math.round(score / maxScore * 100) : 0;
    const di     = PO_DOMAINS[dk];
    const isTop  = dk === topKey;
    const dkFull = t.domainFull && t.domainFull[dk];
    const btnHtml = (dk === 'it' || dk === 'creative' || dk === 'business' || dk === 'science' || dk === 'social' || dk === 'engineering')
      ? `<button class="po-domain-test-btn" onclick="event.stopPropagation();startDomain('${dk}')">${dk === 'creative' ? (t.goTestCreative || t.goTest) : dk === 'business' ? (t.goTestBusiness || t.goTest) : dk === 'science' ? (t.goTestScience || t.goTest) : dk === 'social' ? (t.goTestSocial || t.goTest) : dk === 'engineering' ? (t.goTestEngineering || t.goTest) : t.goTest}</button>`
      : `<button class="po-domain-test-btn po-domain-test-btn--soon" disabled>${t.testSoon || '🔜'}</button>`;
    const expandHtml = dkFull ? `
      <div class="po-domain-expand" id="po-expand-${dk}">
        <div class="po-expand-who"><strong>${lbl.who}:</strong> ${dkFull.who}</div>
        <div class="po-expand-profs"><strong>${lbl.profs}:</strong> ${dkFull.profs}</div>
        <div class="po-expand-start"><strong>${lbl.start}:</strong> ${dkFull.start}</div>
        <div class="po-expand-btn-wrap">${btnHtml}</div>
      </div>` : '';
    return `<div class="po-domain-row${dkFull ? ' po-domain-row--clickable' : ''}" ${dkFull ? `onclick="togglePoDomain('${dk}')"` : ''}>
      <div class="po-domain-row-header">
        <span class="po-domain-label">${di ? di.icon : ''} ${t.domains[dk]}</span>
        <div class="bar-wrap" style="width:110px">
          <div class="bar-inner" style="width:${pct}%;opacity:${isTop ? '1' : '0.35'}"></div>
        </div>
        ${dkFull ? `<span class="po-domain-chevron" id="po-chev-${dk}">▾</span>` : ''}
      </div>
      ${expandHtml}
    </div>`;
  }).join('');

  // Action buttons — always show, active for IT / disabled for others
  const goBtn   = document.getElementById('po-go-test');
  const soonMsg = document.getElementById('po-soon-msg');
  const alsoIt  = document.getElementById('po-also-it');

  soonMsg.style.display = 'none';
  alsoIt.style.display  = 'none';

  if (topIsActive) {
    goBtn.textContent = topKey === 'creative' ? (t.goTestCreative || t.goTest) : topKey === 'business' ? (t.goTestBusiness || t.goTest) : topKey === 'science' ? (t.goTestScience || t.goTest) : topKey === 'social' ? (t.goTestSocial || t.goTest) : topKey === 'engineering' ? (t.goTestEngineering || t.goTest) : t.goTest;
    goBtn.disabled    = false;
    goBtn.className   = 'btn-next';
    goBtn.onclick     = () => startDomain(topKey);
  } else {
    goBtn.textContent = t.testSoon || '🔜';
    goBtn.disabled    = true;
    goBtn.className   = 'po-domain-test-btn po-domain-test-btn--soon';
    goBtn.onclick     = null;
  }
  goBtn.style.display = '';

  // Save PO result for PDF export
  const _poT = PO_I18N[lang] || PO_I18N.en;
  const _poFull = _poT.domainFull && _poT.domainFull[topKey];
  pdfResults.po = {
    domainKey:  topKey,
    domainName: (_poT.domains && _poT.domains[topKey]) || topKey,
    domainDesc: (_poT.domainDesc && _poT.domainDesc[topKey]) || '',
    who:        _poFull ? _poFull.who   : '',
    profs:      _poFull ? _poFull.profs : '',
    start:      _poFull ? _poFull.start : ''
  };

  // Show PO share + PDF buttons
  const poShareLabels = { ru:'Поделиться', en:'Share', de:'Teilen', fr:'Partager', es:'Compartir', pt:'Compartilhar', ar:'مشاركة', he:'שתף', zh:'分享' };
  const poShareBtn = document.getElementById('btn-po-share');
  const poShareLbl = document.getElementById('btn-po-share-lbl');
  if (poShareBtn) poShareBtn.style.display = 'inline-flex';
  if (poShareLbl) poShareLbl.textContent = poShareLabels[lang] || 'Share';
  const poPdfBtn = document.getElementById('btn-po-pdf');
  if (poPdfBtn) poPdfBtn.style.display = 'inline-flex';

  // Inject glossary tooltips into PO result content
  injectTooltips(document.getElementById('po-winner'));
  injectTooltips(document.getElementById('po-bars'));
}

function togglePoDomain(dk) {
  const expand = document.getElementById('po-expand-' + dk);
  const chev   = document.getElementById('po-chev-' + dk);
  if (!expand) return;
  const isOpen = expand.classList.contains('open');
  expand.classList.toggle('open', !isOpen);
  if (chev) chev.style.transform = isOpen ? '' : 'rotate(180deg)';
}

// ─── BUSINESS DOMAIN ─────────────────────────────────────────────────────────
let businessAnswers = [];

function startBusinessDomain() {
  activeDomain = 'business';
  current = 0;
  businessAnswers = Array.from({length: BUSINESS_QS.length}, () => new Set());
  document.getElementById('home').style.display = 'none';
  const poScreen = document.getElementById('po-screen');
  if (poScreen) poScreen.style.display = 'none';
  document.getElementById('quiz-container').style.display = '';
  document.getElementById('result').style.display = 'none';
  document.getElementById('l2-result').style.display = 'none';
  document.getElementById('l2-quiz').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  renderBusinessQ();
  const qDisc = document.getElementById('quiz-disclaimer');
  if (qDisc) qDisc.textContent = hu('disclaimer');
  document.getElementById('quiz-back-home').textContent = hu('backHome');
}

function renderBusinessQ() {
  const bu = (BUSINESS_I18N[lang] || BUSINESS_I18N.en).ui;
  const bq = (BUSINESS_I18N[lang] || BUSINESS_I18N.en).qs[current];
  const sel = businessAnswers[current];
  const total = BUSINESS_QS.length;

  document.getElementById('ui-tag').textContent      = bu.tag;
  document.getElementById('ui-title').textContent    = bu.title;
  document.getElementById('ui-subtitle').textContent = bu.subtitle;
  document.getElementById('ui-footer').innerHTML     = bu.footer;
  const qgl = document.getElementById('quiz-glossary-link');
  if (qgl) qgl.textContent = hu('glossaryLink');

  document.getElementById('prog').style.width = ((current / total) * 100) + '%';
  document.getElementById('prog-lbl').textContent = (current + 1) + ' / ' + total;
  document.getElementById('qtext').textContent = bq.q;
  document.getElementById('qhint').textContent = bu.hint || '';

  const div = document.getElementById('opts');
  div.innerHTML = '';
  bq.opts.forEach((text, i) => {
    const isSel = sel.has(i);
    const b = document.createElement('button');
    b.className = 'opt' + (isSel ? ' selected' : '');
    b.innerHTML = `<span class="check">${isSel ? '✓' : ''}</span><span>${glossHint(text)}</span>`;
    b.onclick = (e) => { if (e.target.closest('abbr.g-hint')) return; toggleBusiness(i); };
    div.appendChild(b);
  });

  document.getElementById('btnBack').textContent = bu.back || '←';
  document.getElementById('btnBack').disabled = current === 0;
  const isLast = current === total - 1;
  document.getElementById('btnNext').textContent = isLast ? (bu.finish || '✓') : (bu.next || '→');
  document.getElementById('btnNext').disabled = sel.size === 0;

  injectTooltips(document.getElementById('qtext'));
  document.getElementById('opts').querySelectorAll('.opt > span:last-child').forEach(s => injectTooltips(s));
}

function toggleBusiness(i) {
  const sel = businessAnswers[current];
  if (sel.has(i)) sel.delete(i); else sel.add(i);
  renderBusinessQ();
}

function goBusinessNext() {
  if (businessAnswers[current].size === 0) return;
  if (current === BUSINESS_QS.length - 1) { showBusinessResult(); return; }
  current++;
  renderBusinessQ();
}

function goBusinessBack() {
  if (current === 0) return;
  current--;
  renderBusinessQ();
}

function showBusinessResult() {
  const scores = {};
  businessAnswers.forEach((sel, qi) => {
    sel.forEach(ai => {
      const s = BUSINESS_QS[qi].opts[ai].score || {};
      Object.entries(s).forEach(([k, v]) => scores[k] = (scores[k] || 0) + v);
    });
  });
  Object.keys(BUSINESS_PROF_BASE).forEach(k => { if (!scores[k]) scores[k] = 0; });
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  if (!sorted.length) return;
  const topKey = sorted[0][0];
  const maxScore = sorted[0][1] || 1;

  document.getElementById('quiz').style.display = 'none';
  document.getElementById('result').style.display = 'block';
  document.getElementById('prog').style.width = '100%';

  const bu = (BUSINESS_I18N[lang] || BUSINESS_I18N.en).ui;
  const bp = (BUSINESS_I18N[lang] || BUSINESS_I18N.en).prof[topKey];
  const pb = BUSINESS_PROF_BASE[topKey];

  // Save L1 result for PDF export
  pdfResults.l1 = {
    domain:   'business',
    profKey:  topKey,
    profName: bp ? bp.name   : topKey,
    emoji:    pb ? pb.emoji  : '',
    desc:     bp ? (bp.desc   || '') : '',
    detail:   bp ? (bp.detail || '') : '',
    day:      bp ? (bp.day    || '') : '',
    start:    bp ? (bp.start  || []) : [],
    tools:    pb ? (pb.tools  || []) : []
  };
  showL1ShareBtn();

  document.getElementById('ui-tag').textContent      = bu.tag;
  document.getElementById('ui-title').textContent    = bu.title;
  document.getElementById('ui-subtitle').textContent = bu.subtitle;
  document.getElementById('ui-footer').innerHTML     = bu.footer;
  document.getElementById('res-tag').textContent = bu.resTag;
  document.getElementById('res-sub').textContent = bu.resSub;
  document.getElementById('btn-restart').textContent = '← ' + hu('backHome');

  // L2 button — show if L2 data exists for this profession
  const l2Wrap = document.getElementById('l2-btn-wrap');
  if (l2Wrap) {
    const hasL2 = hasL2Data(topKey);
    l2Wrap.style.display = hasL2 ? '' : 'none';
    const l2Btn = document.getElementById('btn-l2');
    if (l2Btn && hasL2) {
      l2Btn.textContent = (I18N[lang] && I18N[lang].ui.l2btn) || '🔍 Уточнить специализацию →';
      l2Btn.onclick = function() {
        activeDomain = 'business';
        l2ProfKey = topKey;
        startL2();
      };
    }
  }

  // Winner card
  const startLinks = pb.startUrls && bp.start
    ? `<ul class="start-list">${bp.start.map((s, i) => {
        const url = pb.startUrls[i];
        return `<li>${url ? `<a href="${url}" target="_blank" rel="noopener">${s}</a>` : s}</li>`;
      }).join('')}</ul>` : '';
  document.getElementById('winner').innerHTML = `
    <div class="winner-badge">${bu.winBadge}</div>
    <div class="winner-title">${pb.emoji} ${bp.name}</div>
    <div class="winner-short">${glossHint(bp.desc)}</div>
    <div class="winner-detail">${glossHint(bp.detail)}</div>
    <div class="section-block"><div class="section-lbl">${bu.lblDay}</div><div class="section-text">${glossHint(bp.day)}</div></div>
    <div class="section-block"><div class="section-lbl">${bu.lblEx}</div><div class="section-text">${glossHint(bp.examples)}</div></div>
    <div class="section-block"><div class="section-lbl">${bu.lblTools}</div>
      <div class="chips">${pb.tools.map(t => `<a class="chip" href="${t.u}" target="_blank" rel="noopener">${t.n}</a>`).join('')}</div>
    </div>
    <div class="section-block"><div class="section-lbl">${bu.lblStart}</div>${startLinks}</div>
  `;

  // Others bar chart
  const othersEl = document.getElementById('others');
  const othersSorted = sorted.slice(1).filter(([k]) => BUSINESS_PROF_BASE[k]);
  if (!othersSorted.length) { othersEl.style.display = 'none'; }
  else {
    othersEl.style.display = '';
    othersEl.innerHTML = othersSorted.map(([k, score]) => {
      const op = (BUSINESS_I18N[lang] || BUSINESS_I18N.en).prof[k];
      const opb = BUSINESS_PROF_BASE[k];
      const pct = Math.round(score / maxScore * 100);
      const toolsHtml = opb && opb.tools
        ? `<div class="other-expand-section"><span class="other-expand-lbl">${bu.lblTools}</span>
            <div class="chips">${opb.tools.map(t => `<a class="chip" href="${t.u}" target="_blank" rel="noopener">${t.n}</a>`).join('')}</div>
           </div>` : '';
      const startHtml = opb && opb.startUrls && op && op.start
        ? `<div class="other-expand-section"><span class="other-expand-lbl">${bu.lblStart}</span>
            <ul class="start-list">${op.start.map((s, i) => {
              const url = opb.startUrls[i];
              return `<li>${url ? `<a href="${url}" target="_blank" rel="noopener">${s}</a>` : s}</li>`;
            }).join('')}</ul>
           </div>` : '';
      const hasL2k = hasL2Data(k);
      const l2BtnHtml = hasL2k
        ? `<div class="other-expand-section"><button class="btn-next other-expand-btn" onclick="event.stopPropagation();goBusinessL2FromOthers('${k}')">${bu.l2btn || '🔍 Уточнить специализацию →'}</button></div>`
        : '';
      return `<div class="other-row" id="obiz-${k}" onclick="toggleOtherBusiness('${k}')">
        <div class="other-row-header">
          <span class="other-row-name">${opb.emoji} ${op ? op.name : k}</span>
          <div class="bar-wrap" style="flex:1;margin:0 8px"><div class="bar-inner" style="width:${pct}%;opacity:.4"></div></div>
          <span class="other-row-arrow" id="oarrbiz-${k}">▼</span>
        </div>
        <div class="other-expand" id="oexpbiz-${k}">
          <div class="other-expand-desc">${op ? glossHint(op.desc) : ''}</div>
          <div class="other-expand-detail">${op ? glossHint(op.detail) : ''}</div>
          ${op && op.day ? `<div class="other-expand-section"><span class="other-expand-lbl">${bu.lblDay}</span><div class="other-expand-text">${op.day}</div></div>` : ''}
          ${toolsHtml}${startHtml}${l2BtnHtml}
        </div>
      </div>`;
    }).join('');
    injectTooltips(othersEl);
  }
}

function toggleOtherBusiness(k) {
  const exp = document.getElementById('oexpbiz-' + k);
  const arr = document.getElementById('oarrbiz-' + k);
  if (!exp) return;
  const open = exp.classList.toggle('open');
  if (arr) arr.style.transform = open ? 'rotate(180deg)' : '';
  if (open) injectTooltips(exp);
}

function goBusinessL2FromOthers(k) {
  if (!L2[k] || !Object.keys(L2[k]).length) return;
  activeDomain = 'business';
  l2ProfKey = k;
  l2FromDirect = false;
  startL2();
}

// ─── LEVEL 2 STATE & LOGIC ────────────────────────────────────────────────────
let l2ProfKey = null;
const CREATIVE_TO_IT_L2 = { 'ux-ui': 'design', 'motion': 'design' };
let l2Current = 0;
let l2Answers = [];

// ─── RESULT CHAIN STORAGE (for PDF export) ───────────────────────────────────
let pdfResults = { po: null, l1: null, l2: null };
let l2FromDirect = false;

function getL2Data() {
  if (activeDomain === 'creative') {
    const d = CREATIVE_L2 && CREATIVE_L2[l2ProfKey];
    if (d) return d[lang] || d.en || d.ru;
    // fallback: ux-ui / motion redirect to IT l2-design
    const d2 = L2[l2ProfKey];
    if (!d2) return null;
    return d2[lang] || d2.en || d2.ru;
  }
  const d = L2[l2ProfKey];
  if (!d) return null;
  return d[lang] || d.en || d.ru;
}


// ── L2 lazy-load map ──────────────────────────────────────────────────────────
const L2_FILE_MAP = {
  analyst:'l2-analyst.js', automation:'l2-automation.js', backend:'l2-backend.js',
  biotech:'l2-biotech.js', civil_eng:'l2-civil-eng.js', smm:'l2-creative.js',
  data:'l2-data.js', design:'l2-design.js', devops:'l2-devops.js',
  doctor:'l2-doctor.js', ecologist:'l2-ecologist.js', edu_psych:'l2-edu-psych.js',
  electrician:'l2-electrician.js', entrepreneur:'l2-entrepreneur.js',
  financier:'l2-financier.js', frontend:'l2-frontend.js', gamedev:'l2-gamedev.js',
  hr:'l2-hr.js', journalist:'l2-journalist.js', marketer:'l2-marketer.js',
  mecheng:'l2-mecheng.js', pharmacist:'l2-pharmacist.js', pm:'l2-pm.js',
  pr_spec:'l2-pr-spec.js', production:'l2-production.js', psychologist:'l2-psychologist.js',
  qa:'l2-qa.js', researcher:'l2-researcher.js', robotics:'l2-robotics.js',
  sales:'l2-sales.js', security:'l2-security.js', social_worker:'l2-social-worker.js',
  teacher:'l2-teacher.js', tutor:'l2-tutor.js'
};

function hasL2Data(key) { return !!(L2_FILE_MAP[key] || (typeof CREATIVE_L2 !== 'undefined' && CREATIVE_L2 && CREATIVE_L2[key])); }

function loadL2Script(profKey, callback) {
  // Already loaded (check for actual data, not just empty placeholder object)
  const _l2loaded = L2[profKey] && (L2[profKey].ru || L2[profKey].en);
  const _cl2loaded = typeof CREATIVE_L2 !== 'undefined' && CREATIVE_L2 && CREATIVE_L2[profKey];
  if (_l2loaded || _cl2loaded) {
    callback(); return;
  }
  const file = L2_FILE_MAP[profKey];
  if (!file) { callback(); return; }
  const s = document.createElement('script');
  s.src = 'l2/' + file;
  s.onload = callback;
  s.onerror = () => console.error('Failed to load', file);
  document.head.appendChild(s);
}

function startL2() {
  if (!l2ProfKey) return;
  loadL2Script(l2ProfKey, function() {
  const _hasData = (typeof CREATIVE_L2 !== 'undefined' && CREATIVE_L2[l2ProfKey]) || L2[l2ProfKey];
  if (!_hasData) return;
  const d = getL2Data();
  l2Current = 0;
  l2Answers = Array.from({length: d.questions.length}, () => new Set());
  document.getElementById('result').style.display = 'none';
  document.getElementById('l2-quiz').style.display = 'block';
  renderL2Question();
  }); // end loadL2Script
}

function renderDomainHeader() {
  let tag, title, subtitle;
  if (activeDomain === 'pedagogy') {
    const pu = (PEDAGOGY_I18N[lang] || PEDAGOGY_I18N.ru).ui;
    tag = pu.tag; title = pu.title; subtitle = pu.subtitle;
  } else if (activeDomain === 'engineering') {
    const eu = (ENGINEERING_I18N[lang] || ENGINEERING_I18N.ru).ui;
    tag = eu.tag; title = eu.title; subtitle = eu.subtitle;
  } else if (activeDomain === 'business') {
    const bu = (BUSINESS_I18N[lang] || BUSINESS_I18N.en).ui;
    tag = bu.tag; title = bu.title; subtitle = bu.subtitle;
  } else if (activeDomain === 'science') {
    const su = (SCIENCE_I18N[lang] || SCIENCE_I18N.en).ui;
    tag = su.tag; title = su.title; subtitle = su.subtitle;
  } else if (activeDomain === 'creative') {
    const cu = (CREATIVE_I18N[lang] || CREATIVE_I18N.en).ui;
    tag = cu.tag; title = cu.title; subtitle = cu.subtitle;
  } else {
    return renderHeader();
  }
  document.getElementById('ui-tag').textContent      = tag || '';
  document.getElementById('ui-title').textContent    = title || '';
  document.getElementById('ui-subtitle').textContent = subtitle || '';
  const qgl = document.getElementById('quiz-glossary-link');
  if (qgl) qgl.textContent = hu('glossaryLink');
}

function renderL2Question() {
  renderDomainHeader();
  const d = getL2Data();
  const u = (d && d.ui) ? Object.assign({}, I18N[lang].ui, d.ui) : I18N[lang].ui;
  if (!d) return;
  const q = d.questions[l2Current];
  const sel = l2Answers[l2Current];
  const total = d.questions.length;

  document.getElementById('l2-prog').style.width = ((l2Current / total) * 100) + '%';
  document.getElementById('l2-prog-lbl').textContent = (l2Current + 1) + ' / ' + total;
  document.getElementById('l2-qtext').textContent = q.t;
  document.getElementById('qhint2').textContent = u.hint2 || u.hint;
  document.getElementById('l2-to-l1').textContent = u.l2back;

  const div = document.getElementById('l2-opts');
  div.innerHTML = '';
  q.o.forEach((text, i) => {
    const isSel = sel.has(i);
    const b = document.createElement('button');
    b.className = 'opt' + (isSel ? ' selected' : '');
    b.innerHTML = `<span class="check">${isSel ? '✓' : ''}</span><span>${glossHint(text)}</span>`;
    b.onclick = (e) => { if (e.target.closest('abbr.g-hint')) return; toggleL2(i); };
    div.appendChild(b);
  });

  document.getElementById('l2-back').disabled = l2Current === 0;
  const isLast = l2Current === total - 1;
  document.getElementById('l2-next').textContent = isLast ? u.finish : u.next;
  document.getElementById('l2-next').disabled = sel.size === 0;
  injectTooltips(document.getElementById('l2-qtext'));
  document.getElementById('l2-opts').querySelectorAll('.opt > span:last-child').forEach(s => injectTooltips(s));
}

function toggleL2(i) {
  const sel = l2Answers[l2Current];
  if (sel.has(i)) sel.delete(i); else sel.add(i);
  renderL2Question();
}

function goL2Next() {
  if (l2Answers[l2Current].size === 0) return;
  const d = getL2Data();
  if (l2Current === d.questions.length - 1) { showL2Result(); return; }
  l2Current++;
  renderL2Question();
}

function goL2Back() {
  if (l2Current === 0) { backToL1(); return; }
  l2Current--;
  renderL2Question();
}

function showL2Result(rerender) {
  renderDomainHeader();
  const d = getL2Data();
  const u = (d && d.ui) ? Object.assign({}, I18N[lang].ui, d.ui) : I18N[lang].ui;
  const scores = {};
  // Seed all roles with 0 so they always appear even if no points scored
  Object.keys(d.roles).forEach(k => { scores[k] = 0; });
  l2Answers.forEach((sel, qi) => {
    sel.forEach(ai => {
      const s = d.questions[qi].s[ai] || {};
      Object.entries(s).forEach(([k, v]) => scores[k] = (scores[k] || 0) + v);
    });
  });
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  if (!sorted.length) return;
  const topKey = sorted[0][0];
  const maxScore = sorted[0][1];
  const role = d.roles[topKey];

  if (!rerender) {
    document.getElementById('l2-quiz').style.display = 'none';
    document.getElementById('l2-result').style.display = 'block';
  }

  document.getElementById('l2-res-tag').textContent   = u.l2resTag;
  document.getElementById('l2-res-sub').textContent   = u.l2resSub;
  document.getElementById('l2-to-l1-res').textContent = u.l2toL1;
  document.getElementById('btn-restart2').textContent = u.restart;

  document.getElementById('l2-winner').innerHTML = `
    <div class="winner-badge">${u.l2resTag}</div>
    <div class="winner-title">${role.emoji} ${role.name}</div>
    <div class="winner-short">${glossHint(role.desc)}</div>
    <div class="winner-detail">${glossHint(role.detail)}</div>
    <div class="section-block">
      <div class="section-lbl">${u.lblStart}</div>
      <ul class="start-list">${role.start.map((s, i) => {
        const url = role.startUrls && role.startUrls[i];
        return `<li>${url ? `<a href="${url}" target="_blank" rel="noopener">${s}</a>` : s}</li>`;
      }).join('')}</ul>
    </div>
  `;

  const others = sorted.slice(1).filter(([k]) => d.roles[k]);
  const l2OthersEl = document.getElementById('l2-others');
  if (!others.length) { l2OthersEl.style.display = 'none'; return; }
  l2OthersEl.style.display = '';
  l2OthersEl.innerHTML = `
    <div class="others-title">${u.l2othTitle}</div>
    ${others.map(([k, v]) => {
      const r = d.roles[k];
      if (!r) return '';
      const pct = Math.round(v/maxScore*100);
      const expandHtml = `
        <div class="other-expand" id="l2oexp-${k}">
          ${r.desc   ? `<div class="other-expand-desc">${glossHint(r.desc)}</div>` : ''}
          ${r.detail ? `<div class="other-expand-detail">${glossHint(r.detail)}</div>` : ''}
          ${r.start && r.start.length ? `
            <div class="other-expand-section">
              <span class="other-expand-lbl">${u.lblStart}</span>
              <ul class="start-list">${r.start.map((s, i) => {
                const url = r.startUrls && r.startUrls[i];
                return `<li>${url ? `<a href="${url}" target="_blank" rel="noopener">${s}</a>` : s}</li>`;
              }).join('')}</ul>
            </div>` : ''}
        </div>`;
      return `<div class="other-row other-row--clickable" onclick="toggleL2OtherRow('${k}')" role="button" tabindex="0">
        <div class="other-row-header">
          <span class="other-row-name">${r.emoji} ${r.name}</span>
          <span class="other-row-arrow" id="l2oarr-${k}">▾</span>
        </div>
        <div class="other-row-bar">
          <div class="bar-wrap-full"><div class="bar-inner" style="width:${pct}%"></div></div>
        </div>
        ${expandHtml}
      </div>`;
    }).join('')}
  `;
  injectTooltips(document.getElementById('l2-winner'));
  injectTooltips(document.getElementById('l2-others'));

  // Save L2 result for PDF export (always update so PDF reflects current language)
  pdfResults.l2 = {
    roleKey: topKey,
    roleName: role.name,
    roleEmoji: role.emoji,
    roleDesc: role.desc,
    roleDetail: role.detail,
    roleStart: role.start || []
  };

  // Show/update PDF button
  const pdfBtn = document.getElementById('btn-pdf-export');
  if (pdfBtn) pdfBtn.style.display = 'inline-flex';

  // Show share button
  const shareBtn = document.getElementById('btn-share');
  if (shareBtn) shareBtn.style.display = 'inline-flex';
  const shareLbl = document.getElementById('btn-share-lbl');
  if (shareLbl) {
    const shareLabels = { ru:'Поделиться', en:'Share', de:'Teilen', fr:'Partager', es:'Compartir', pt:'Compartilhar', ar:'مشاركة', he:'שתף', zh:'分享' };
    shareLbl.textContent = shareLabels[lang] || 'Share';
  }
}

function backToL1() {
  document.getElementById('l2-quiz').style.display = 'none';
  document.getElementById('l2-result').style.display = 'none';
  if (activeDomain === 'creative') {
    document.getElementById('result').style.display = 'block';
    showCreativeResult();
    return;
  }
  if (activeDomain === 'business') {
    document.getElementById('result').style.display = 'block';
    showBusinessResult();
    return;
  }
  if (activeDomain === 'science') {
    document.getElementById('result').style.display = 'block';
    showScienceResult();
    return;
  }
  if (l2FromDirect) {
    l2FromDirect = false;
    showHome();
  } else {
    document.getElementById('result').style.display = 'block';
    showResult(true);
  }
}

// ─── TOOLTIPS ─────────────────────────────────────────────────────────────────
function injectTooltips(el) {
  if (!el) return;
  const glossary = GLOSSARY[lang] || GLOSSARY.en;
  const terms = Object.keys(glossary).sort((a, b) => b.length - a.length);
  if (!terms.length) return;

  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
  const nodes = [];
  let node;
  while ((node = walker.nextNode())) nodes.push(node);

  const escaped = terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const combined = new RegExp('(?<![\\w])(' + escaped.join('|') + ')(?![\\w])', 'g');

  nodes.forEach(textNode => {
    if (textNode.parentElement && textNode.parentElement.closest('.tip')) return;
    if (textNode.parentElement && textNode.parentElement.classList.contains('check')) return;
    const text = textNode.textContent;
    if (!terms.some(t => text.includes(t))) return;
    const safe = text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const html = safe.replace(combined, (_, term) => {
      const tip = (glossary[term] || '').replace(/"/g, '&quot;');
      return `<span class="tip" data-tip="${tip}">${term}</span>`;
    });
    if (html !== safe) {
      const wrapper = document.createElement('span');
      wrapper.innerHTML = html;
      textNode.parentNode.replaceChild(wrapper, textNode);
    }
  });
}

// ── Global JS tooltip (escapes button overflow clipping) ──────────────────────
(function() {
  const box = document.createElement('div');
  box.id = 'tip-box';
  box.style.cssText = 'position:fixed;z-index:9999;background:#1A202C;color:#fff;font-size:12px;line-height:1.5;padding:7px 11px;border-radius:8px;width:220px;max-width:calc(100vw - 24px);white-space:normal;text-align:left;box-shadow:0 4px 14px rgba(0,0,0,.3);pointer-events:none;opacity:0;transition:opacity .15s;';
  document.body.appendChild(box);

  function showTip(tip) {
    const text = tip.dataset.tip;
    if (!text) return;
    box.textContent = text;
    const r = tip.getBoundingClientRect();
    box.style.opacity = '0';
    box.style.display = 'block';
    const bw = 220;
    let left = r.left;
    if (left + bw > window.innerWidth - 8) left = window.innerWidth - bw - 8;
    if (left < 8) left = 8;
    const top = r.top - box.offsetHeight - 8;
    box.style.left = left + 'px';
    box.style.top = (top < 8 ? r.bottom + 8 : top) + 'px';
    box.style.opacity = '1';
  }

  function hideTip() { box.style.opacity = '0'; }

  document.addEventListener('mouseover', e => {
    const tip = e.target.closest('.tip');
    if (tip) showTip(tip);
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest('.tip')) hideTip();
  });
  document.addEventListener('click', e => {
    const tip = e.target.closest('.tip');
    if (tip) {
      e.stopPropagation();
      if (box.style.opacity === '1') { hideTip(); } else { showTip(tip); }
    } else {
      hideTip();
    }
  });
})();


// ─── SCIENCE DOMAIN ────────────────────────────────────────────────────────────
let scienceAnswers = [];

function startScienceDomain() {
  activeDomain = 'science';
  current = 0;
  scienceAnswers = Array.from({length: SCIENCE_QS.length}, () => new Set());
  document.getElementById('home').style.display = 'none';
  const poScreen = document.getElementById('po-screen');
  if (poScreen) poScreen.style.display = 'none';
  document.getElementById('quiz-container').style.display = '';
  document.getElementById('result').style.display = 'none';
  document.getElementById('l2-result').style.display = 'none';
  document.getElementById('l2-quiz').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  renderScienceQ();
  const qDisc = document.getElementById('quiz-disclaimer');
  if (qDisc) qDisc.textContent = hu('disclaimer');
  document.getElementById('quiz-back-home').textContent = hu('backHome');
}

function renderScienceQ() {
  const su = (SCIENCE_I18N[lang] || SCIENCE_I18N.en).ui;
  const sq = (SCIENCE_I18N[lang] || SCIENCE_I18N.en).qs[current];
  const sel = scienceAnswers[current];
  const total = SCIENCE_QS.length;

  document.getElementById('ui-tag').textContent      = su.tag;
  document.getElementById('ui-title').textContent    = su.title;
  document.getElementById('ui-subtitle').textContent = su.subtitle;
  document.getElementById('ui-footer').innerHTML     = su.footer;
  const qgl = document.getElementById('quiz-glossary-link');
  if (qgl) qgl.textContent = hu('glossaryLink');

  document.getElementById('prog').style.width = ((current / total) * 100) + '%';
  document.getElementById('prog-lbl').textContent = (current + 1) + ' / ' + total;
  document.getElementById('qtext').textContent = sq.q;
  document.getElementById('qhint').textContent = su.hint || '';

  const div = document.getElementById('opts');
  div.innerHTML = '';
  sq.opts.forEach((text, i) => {
    const isSel = sel.has(i);
    const b = document.createElement('button');
    b.className = 'opt' + (isSel ? ' selected' : '');
    b.innerHTML = `<span class="check">${isSel ? '✓' : ''}</span><span>${glossHint(text)}</span>`;
    b.onclick = (e) => { if (e.target.closest('abbr.g-hint')) return; toggleScience(i); };
    div.appendChild(b);
  });

  document.getElementById('btnBack').textContent = su.back || '←';
  document.getElementById('btnBack').disabled = current === 0;
  const isLast = current === total - 1;
  document.getElementById('btnNext').textContent = isLast ? (su.finish || '✓') : (su.next || '→');
  document.getElementById('btnNext').disabled = sel.size === 0;

  injectTooltips(document.getElementById('qtext'));
  document.getElementById('opts').querySelectorAll('.opt > span:last-child').forEach(s => injectTooltips(s));
}

function toggleScience(i) {
  const sel = scienceAnswers[current];
  if (sel.has(i)) sel.delete(i); else sel.add(i);
  renderScienceQ();
}

function goScienceNext() {
  if (scienceAnswers[current].size === 0) return;
  if (current === SCIENCE_QS.length - 1) { showScienceResult(); return; }
  current++;
  renderScienceQ();
}

function goScienceBack() {
  if (current === 0) return;
  current--;
  renderScienceQ();
}

function showScienceResult() {
  const scores = {};
  scienceAnswers.forEach((sel, qi) => {
    sel.forEach(ai => {
      const s = SCIENCE_QS[qi].opts[ai].score || {};
      Object.entries(s).forEach(([k, v]) => scores[k] = (scores[k] || 0) + v);
    });
  });
  Object.keys(SCIENCE_PROF_BASE).forEach(k => { if (!scores[k]) scores[k] = 0; });
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  if (!sorted.length) return;
  const topKey = sorted[0][0];
  const maxScore = sorted[0][1] || 1;

  document.getElementById('quiz').style.display = 'none';
  document.getElementById('result').style.display = 'block';
  document.getElementById('prog').style.width = '100%';

  const su = (SCIENCE_I18N[lang] || SCIENCE_I18N.en).ui;
  const sp = (SCIENCE_I18N[lang] || SCIENCE_I18N.en).prof[topKey];
  const pb = SCIENCE_PROF_BASE[topKey];
  // Save L1 result for PDF export
  pdfResults.l1 = {
    domain:   'science',
    profKey:  topKey,
    profName: sp ? sp.name   : topKey,
    emoji:    pb ? pb.emoji  : '',
    desc:     sp ? (sp.desc   || '') : '',
    detail:   sp ? (sp.detail || '') : '',
    day:      sp ? (sp.day    || '') : '',
    start:    sp ? (sp.start  || []) : [],
    tools:    pb ? (pb.tools  || []) : []
  };
  showL1ShareBtn();

  document.getElementById('ui-tag').textContent      = su.tag;
  document.getElementById('ui-title').textContent    = su.title;
  document.getElementById('ui-subtitle').textContent = su.subtitle;
  document.getElementById('ui-footer').innerHTML     = su.footer;
  document.getElementById('res-tag').textContent = su.resTag;
  document.getElementById('res-sub').textContent = su.resSub;
  document.getElementById('btn-restart').textContent = '← ' + hu('backHome');

  // L2 button
  const l2Wrap = document.getElementById('l2-btn-wrap');
  if (l2Wrap) {
    const hasL2 = hasL2Data(topKey);
    l2Wrap.style.display = hasL2 ? '' : 'none';
    const l2Btn = document.getElementById('btn-l2');
    if (l2Btn && hasL2) {
      l2Btn.textContent = (I18N[lang] && I18N[lang].ui.l2btn) || '🔍 Уточнить специализацию →';
      l2Btn.onclick = function() {
        activeDomain = 'science';
        l2ProfKey = topKey;
        startL2();
      };
    }
  }

  // Winner card
  const startLinks = pb.startUrls && sp.start
    ? `<ul class="start-list">${sp.start.map((s, i) => {
        const url = pb.startUrls[i];
        return `<li>${url ? `<a href="${url}" target="_blank" rel="noopener">${s}</a>` : s}</li>`;
      }).join('')}</ul>` : '';
  document.getElementById('winner').innerHTML = `
    <div class="winner-badge">${su.winBadge}</div>
    <div class="winner-title">${pb.emoji} ${sp.name}</div>
    <div class="winner-short">${glossHint(sp.desc)}</div>
    <div class="winner-detail">${glossHint(sp.detail)}</div>
    <div class="section-block"><div class="section-lbl">${su.lblDay}</div><div class="section-text">${glossHint(sp.day)}</div></div>
    <div class="section-block"><div class="section-lbl">${su.lblEx}</div><div class="section-text">${glossHint(sp.examples)}</div></div>
    <div class="section-block"><div class="section-lbl">${su.lblTools}</div>
      <div class="chips">${pb.tools.map(t => `<a class="chip" href="${t.u}" target="_blank" rel="noopener">${t.n}</a>`).join('')}</div>
    </div>
    <div class="section-block"><div class="section-lbl">${su.lblStart}</div>${startLinks}</div>
  `;

  // Others bar chart
  const othersEl = document.getElementById('others');
  const othersSorted = sorted.slice(1).filter(([k]) => SCIENCE_PROF_BASE[k]);
  if (!othersSorted.length) { othersEl.style.display = 'none'; }
  else {
    othersEl.style.display = '';
    othersEl.innerHTML = othersSorted.map(([k, score]) => {
      const op = (SCIENCE_I18N[lang] || SCIENCE_I18N.en).prof[k];
      const opb = SCIENCE_PROF_BASE[k];
      const pct = Math.round(score / maxScore * 100);
      const toolsHtml = opb && opb.tools
        ? `<div class="other-expand-section"><span class="other-expand-lbl">${su.lblTools}</span>
            <div class="chips">${opb.tools.map(t => `<a class="chip" href="${t.u}" target="_blank" rel="noopener">${t.n}</a>`).join('')}</div>
           </div>` : '';
      const startHtml = opb && opb.startUrls && op && op.start
        ? `<div class="other-expand-section"><span class="other-expand-lbl">${su.lblStart}</span>
            <ul class="start-list">${op.start.map((s, i) => {
              const url = opb.startUrls[i];
              return `<li>${url ? `<a href="${url}" target="_blank" rel="noopener">${s}</a>` : s}</li>`;
            }).join('')}</ul>
           </div>` : '';
      const hasL2k = hasL2Data(k);
      const l2BtnHtml = hasL2k
        ? `<div class="other-expand-section"><button class="btn-next other-expand-btn" onclick="event.stopPropagation();goScienceL2FromOthers('${k}')">${su.btnL2 || '🔍 Уточнить специализацию →'}</button></div>`
        : '';
      return `<div class="other-row" id="osci-${k}" onclick="toggleOtherScience('${k}')">
        <div class="other-row-header">
          <span class="other-row-name">${opb.emoji} ${op ? op.name : k}</span>
          <div class="bar-wrap" style="flex:1;margin:0 8px"><div class="bar-inner" style="width:${pct}%;opacity:.4"></div></div>
          <span class="other-row-arrow" id="oarrsci-${k}">▼</span>
        </div>
        <div class="other-expand" id="oexpsci-${k}">
          <div class="other-expand-desc">${op ? glossHint(op.desc) : ''}</div>
          <div class="other-expand-detail">${op ? glossHint(op.detail) : ''}</div>
          ${op && op.day ? `<div class="other-expand-section"><span class="other-expand-lbl">${su.lblDay}</span><div class="other-expand-text">${op.day}</div></div>` : ''}
          ${toolsHtml}${startHtml}${l2BtnHtml}
        </div>
      </div>`;
    }).join('');
    injectTooltips(othersEl);
  }
}

function toggleOtherScience(k) {
  const exp = document.getElementById('oexpsci-' + k);
  const arr = document.getElementById('oarrsci-' + k);
  if (!exp) return;
  const open = exp.classList.toggle('open');
  if (arr) arr.style.transform = open ? 'rotate(180deg)' : '';
  if (open) injectTooltips(exp);
}

function goScienceL2FromOthers(k) {
  if (!L2[k] || !Object.keys(L2[k]).length) return;
  activeDomain = 'science';
  l2ProfKey = k;
  l2FromDirect = false;
  startL2();
}


// ─── PEDAGOGY DOMAIN ──────────────────────────────────────────────────────────
let pedagogyAnswers = [];

function startPedagogyDomain() {
  activeDomain = 'pedagogy';
  current = 0;
  pedagogyAnswers = Array.from({length: PEDAGOGY_QS.length}, () => new Set());
  document.getElementById('home').style.display = 'none';
  const poScreen = document.getElementById('po-screen');
  if (poScreen) poScreen.style.display = 'none';
  document.getElementById('quiz-container').style.display = '';
  document.getElementById('result').style.display = 'none';
  document.getElementById('l2-result').style.display = 'none';
  document.getElementById('l2-quiz').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  renderPedagogyQ();
  const qDisc = document.getElementById('quiz-disclaimer');
  if (qDisc) qDisc.textContent = hu('disclaimer');
  document.getElementById('quiz-back-home').textContent = hu('backHome');
}

function renderPedagogyQ() {
  const pu = (PEDAGOGY_I18N[lang] || PEDAGOGY_I18N.ru).ui;
  const pq = (PEDAGOGY_I18N[lang] || PEDAGOGY_I18N.ru).qs[current];
  const sel = pedagogyAnswers[current];
  const total = PEDAGOGY_QS.length;

  document.getElementById('ui-tag').textContent      = pu.tag;
  document.getElementById('ui-title').textContent    = pu.title;
  document.getElementById('ui-subtitle').textContent = pu.subtitle;
  document.getElementById('ui-footer').innerHTML     = pu.footer || '';
  const qgl = document.getElementById('quiz-glossary-link');
  if (qgl) qgl.textContent = hu('glossaryLink');

  document.getElementById('prog').style.width = ((current / total) * 100) + '%';
  document.getElementById('prog-lbl').textContent = (current + 1) + ' / ' + total;
  document.getElementById('qtext').textContent = pq.q;
  document.getElementById('qhint').textContent = pu.hint || '';

  const div = document.getElementById('opts');
  div.innerHTML = '';
  pq.opts.forEach((text, i) => {
    const isSel = sel.has(i);
    const b = document.createElement('button');
    b.className = 'opt' + (isSel ? ' selected' : '');
    b.innerHTML = `<span class="check">${isSel ? '✓' : ''}</span><span>${glossHint(text)}</span>`;
    b.onclick = (e) => { if (e.target.closest('abbr.g-hint')) return; togglePedagogy(i); };
    div.appendChild(b);
  });

  document.getElementById('btnBack').textContent = pu.back || '←';
  document.getElementById('btnBack').disabled = current === 0;
  const isLast = current === total - 1;
  document.getElementById('btnNext').textContent = isLast ? (pu.finish || '✓') : (pu.next || '→');
  document.getElementById('btnNext').disabled = sel.size === 0;

  injectTooltips(document.getElementById('qtext'));
  document.getElementById('opts').querySelectorAll('.opt > span:last-child').forEach(s => injectTooltips(s));
}

function togglePedagogy(i) {
  const sel = pedagogyAnswers[current];
  if (sel.has(i)) sel.delete(i); else sel.add(i);
  renderPedagogyQ();
}

function goPedagogyNext() {
  if (pedagogyAnswers[current].size === 0) return;
  if (current === PEDAGOGY_QS.length - 1) { showPedagogyResult(); return; }
  current++;
  renderPedagogyQ();
}

function goPedagogyBack() {
  if (current === 0) return;
  current--;
  renderPedagogyQ();
}

function showPedagogyResult() {
  const scores = {};
  pedagogyAnswers.forEach((sel, qi) => {
    sel.forEach(ai => {
      const s = PEDAGOGY_QS[qi].opts[ai].score || {};
      Object.entries(s).forEach(([k, v]) => scores[k] = (scores[k] || 0) + v);
    });
  });
  Object.keys(PEDAGOGY_PROF_BASE).forEach(k => { if (!scores[k]) scores[k] = 0; });
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  if (!sorted.length) return;
  const topKey = sorted[0][0];
  const maxScore = sorted[0][1] || 1;

  document.getElementById('quiz').style.display = 'none';
  document.getElementById('result').style.display = 'block';
  document.getElementById('prog').style.width = '100%';

  const pu = (PEDAGOGY_I18N[lang] || PEDAGOGY_I18N.ru).ui;
  const pp = (PEDAGOGY_I18N[lang] || PEDAGOGY_I18N.ru).prof[topKey];
  const pb = PEDAGOGY_PROF_BASE[topKey];
  // Save L1 result for PDF export
  pdfResults.l1 = {
    domain:   'social',
    profKey:  topKey,
    profName: pp ? pp.name   : topKey,
    emoji:    pb ? pb.emoji  : '',
    desc:     pp ? (pp.desc   || '') : '',
    detail:   pp ? (pp.detail || '') : '',
    day:      pp ? (pp.day    || '') : '',
    start:    pp ? (pp.start  || []) : [],
    tools:    pb ? (pb.tools  || []) : []
  };
  showL1ShareBtn();

  document.getElementById('ui-tag').textContent      = pu.tag;
  document.getElementById('ui-title').textContent    = pu.title;
  document.getElementById('ui-subtitle').textContent = pu.subtitle;
  document.getElementById('ui-footer').innerHTML     = pu.footer || '';
  document.getElementById('res-tag').textContent = pu.resTag;
  document.getElementById('res-sub').textContent = pu.resSub;
  document.getElementById('btn-restart').textContent = '← ' + hu('backHome');

  // L2 button
  const l2Wrap = document.getElementById('l2-btn-wrap');
  if (l2Wrap) {
    const hasL2 = hasL2Data(topKey);
    l2Wrap.style.display = hasL2 ? '' : 'none';
    const l2Btn = document.getElementById('btn-l2');
    if (l2Btn && hasL2) {
      l2Btn.textContent = pu.btnL2 || '🔍 Уточнить специализацию →';
      l2Btn.onclick = function() {
        activeDomain = 'pedagogy';
        l2ProfKey = topKey;
        startL2();
      };
    }
  }

  // Winner card
  const startLinks = pb.startUrls && pp.start
    ? `<ul class="start-list">${pp.start.map((s, i) => {
        const url = pb.startUrls[i];
        return `<li>${url ? `<a href="${url}" target="_blank" rel="noopener">${s}</a>` : s}</li>`;
      }).join('')}</ul>` : '';
  document.getElementById('winner').innerHTML = `
    <div class="winner-badge">${pu.winBadge}</div>
    <div class="winner-title">${pb.emoji} ${pp.name}</div>
    <div class="winner-short">${glossHint(pp.desc)}</div>
    <div class="winner-detail">${glossHint(pp.detail)}</div>
    <div class="section-block"><div class="section-lbl">${pu.lblDay}</div><div class="section-text">${glossHint(pp.day)}</div></div>
    <div class="section-block"><div class="section-lbl">${pu.lblEx}</div><div class="section-text">${glossHint(pp.examples)}</div></div>
    <div class="section-block"><div class="section-lbl">${pu.lblTools}</div>
      <div class="chips">${pb.tools.map(t => `<a class="chip" href="${t.u}" target="_blank" rel="noopener">${t.n}</a>`).join('')}</div>
    </div>
    <div class="section-block"><div class="section-lbl">${pu.lblStart}</div>${startLinks}</div>
  `;

  // Others bar chart
  const othersEl = document.getElementById('others');
  const othersSorted = sorted.slice(1).filter(([k]) => PEDAGOGY_PROF_BASE[k]);
  if (!othersSorted.length) { othersEl.style.display = 'none'; }
  else {
    othersEl.style.display = '';
    othersEl.innerHTML = othersSorted.map(([k, score]) => {
      const op = (PEDAGOGY_I18N[lang] || PEDAGOGY_I18N.ru).prof[k];
      const opb = PEDAGOGY_PROF_BASE[k];
      const pct = Math.round(score / maxScore * 100);
      const toolsHtml = opb && opb.tools
        ? `<div class="other-expand-section"><span class="other-expand-lbl">${pu.lblTools}</span>
            <div class="chips">${opb.tools.map(t => `<a class="chip" href="${t.u}" target="_blank" rel="noopener">${t.n}</a>`).join('')}</div>
           </div>` : '';
      const startHtml = opb && opb.startUrls && op && op.start
        ? `<div class="other-expand-section"><span class="other-expand-lbl">${pu.lblStart}</span>
            <ul class="start-list">${op.start.map((s, i) => {
              const url = opb.startUrls[i];
              return `<li>${url ? `<a href="${url}" target="_blank" rel="noopener">${s}</a>` : s}</li>`;
            }).join('')}</ul>
           </div>` : '';
      const hasL2k = hasL2Data(k);
      const l2BtnHtml = hasL2k
        ? `<div class="other-expand-section"><button class="btn-next other-expand-btn" onclick="event.stopPropagation();goPedagogyL2FromOthers('${k}')">${pu.btnL2 || '🔍 Уточнить специализацию →'}</button></div>`
        : '';
      return `<div class="other-row" id="oped-${k}" onclick="toggleOtherPedagogy('${k}')">
        <div class="other-row-header">
          <span class="other-row-name">${opb.emoji} ${op ? op.name : k}</span>
          <div class="bar-wrap" style="flex:1;margin:0 8px"><div class="bar-inner" style="width:${pct}%;opacity:.4"></div></div>
          <span class="other-row-arrow" id="oarrped-${k}">▼</span>
        </div>
        <div class="other-expand" id="oexpedped-${k}">
          <div class="other-expand-desc">${op ? glossHint(op.desc) : ''}</div>
          <div class="other-expand-detail">${op ? glossHint(op.detail) : ''}</div>
          ${op && op.day ? `<div class="other-expand-section"><span class="other-expand-lbl">${pu.lblDay}</span><div class="other-expand-text">${op.day}</div></div>` : ''}
          ${toolsHtml}${startHtml}${l2BtnHtml}
        </div>
      </div>`;
    }).join('');
    injectTooltips(othersEl);
  }
}

function toggleOtherPedagogy(k) {
  const exp = document.getElementById('oexpedped-' + k);
  const arr = document.getElementById('oarrped-' + k);
  if (!exp) return;
  const open = exp.classList.toggle('open');
  if (arr) arr.style.transform = open ? 'rotate(180deg)' : '';
  if (open) injectTooltips(exp);
}

function goPedagogyL2FromOthers(k) {
  if (!L2[k] || !Object.keys(L2[k]).length) return;
  activeDomain = 'pedagogy';
  l2ProfKey = k;
  l2FromDirect = false;
  startL2();
}


// ─── ENGINEERING DOMAIN ────────────────────────────────────────────────────────
let engineeringAnswers = [];

function startEngineeringDomain() {
  activeDomain = 'engineering';
  current = 0;
  engineeringAnswers = Array.from({length: ENGINEERING_QS.length}, () => new Set());
  document.getElementById('home').style.display = 'none';
  const poScreen = document.getElementById('po-screen');
  if (poScreen) poScreen.style.display = 'none';
  document.getElementById('quiz-container').style.display = '';
  document.getElementById('result').style.display = 'none';
  document.getElementById('l2-result').style.display = 'none';
  document.getElementById('l2-quiz').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  renderEngineeringQ();
  const qDisc = document.getElementById('quiz-disclaimer');
  if (qDisc) qDisc.textContent = hu('disclaimer');
  document.getElementById('quiz-back-home').textContent = hu('backHome');
}

function renderEngineeringQ() {
  const eu = (ENGINEERING_I18N[lang] || ENGINEERING_I18N.ru).ui;
  const eq = (ENGINEERING_I18N[lang] || ENGINEERING_I18N.ru).qs[current];
  const sel = engineeringAnswers[current];
  const total = ENGINEERING_QS.length;

  document.getElementById('ui-tag').textContent      = eu.tag;
  document.getElementById('ui-title').textContent    = eu.title;
  document.getElementById('ui-subtitle').textContent = eu.subtitle;
  document.getElementById('ui-footer').innerHTML     = eu.footer || '';
  const qgl = document.getElementById('quiz-glossary-link');
  if (qgl) qgl.textContent = hu('glossaryLink');

  document.getElementById('prog').style.width = ((current / total) * 100) + '%';
  document.getElementById('prog-lbl').textContent = (current + 1) + ' / ' + total;
  document.getElementById('qtext').textContent = eq.q;
  document.getElementById('qhint').textContent = eu.hint || '';

  const div = document.getElementById('opts');
  div.innerHTML = '';
  eq.opts.forEach((text, i) => {
    const isSel = sel.has(i);
    const b = document.createElement('button');
    b.className = 'opt' + (isSel ? ' selected' : '');
    b.innerHTML = `<span class="check">${isSel ? '✓' : ''}</span><span>${glossHint(text)}</span>`;
    b.onclick = (e) => { if (e.target.closest('abbr.g-hint')) return; toggleEngineering(i); };
    div.appendChild(b);
  });

  document.getElementById('btnBack').textContent = eu.back || '←';
  document.getElementById('btnBack').disabled = current === 0;
  const isLast = current === total - 1;
  document.getElementById('btnNext').textContent = isLast ? (eu.finish || '✓') : (eu.next || '→');
  document.getElementById('btnNext').disabled = sel.size === 0;

  injectTooltips(document.getElementById('qtext'));
  document.getElementById('opts').querySelectorAll('.opt > span:last-child').forEach(s => injectTooltips(s));
}

function toggleEngineering(i) {
  const sel = engineeringAnswers[current];
  if (sel.has(i)) sel.delete(i); else sel.add(i);
  renderEngineeringQ();
}

function goEngineeringNext() {
  if (engineeringAnswers[current].size === 0) return;
  if (current === ENGINEERING_QS.length - 1) { showEngineeringResult(); return; }
  current++;
  renderEngineeringQ();
}

function goEngineeringBack() {
  if (current === 0) return;
  current--;
  renderEngineeringQ();
}

function showEngineeringResult() {
  const scores = {};
  engineeringAnswers.forEach((sel, qi) => {
    sel.forEach(ai => {
      const s = ENGINEERING_QS[qi].opts[ai].score || {};
      Object.entries(s).forEach(([k, v]) => scores[k] = (scores[k] || 0) + v);
    });
  });
  Object.keys(ENGINEERING_PROF_BASE).forEach(k => { if (!scores[k]) scores[k] = 0; });
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  if (!sorted.length) return;
  const topKey = sorted[0][0];
  const maxScore = sorted[0][1] || 1;

  document.getElementById('quiz').style.display = 'none';
  document.getElementById('result').style.display = 'block';
  document.getElementById('prog').style.width = '100%';

  const eu = (ENGINEERING_I18N[lang] || ENGINEERING_I18N.ru).ui;
  const ep = (ENGINEERING_I18N[lang] || ENGINEERING_I18N.ru).prof[topKey];
  const pb = ENGINEERING_PROF_BASE[topKey];
  // Save L1 result for PDF export
  pdfResults.l1 = {
    domain:   'engineering',
    profKey:  topKey,
    profName: ep ? ep.name   : topKey,
    emoji:    pb ? pb.emoji  : '',
    desc:     ep ? (ep.desc   || '') : '',
    detail:   ep ? (ep.detail || '') : '',
    day:      ep ? (ep.day    || '') : '',
    start:    ep ? (ep.start  || []) : [],
    tools:    pb ? (pb.tools  || []) : []
  };
  showL1ShareBtn();

  document.getElementById('ui-tag').textContent      = eu.tag;
  document.getElementById('ui-title').textContent    = eu.title;
  document.getElementById('ui-subtitle').textContent = eu.subtitle;
  document.getElementById('ui-footer').innerHTML     = eu.footer || '';
  document.getElementById('res-tag').textContent = eu.resTag;
  document.getElementById('res-sub').textContent = eu.resSub;
  document.getElementById('btn-restart').textContent = '← ' + hu('backHome');

  const l2Wrap = document.getElementById('l2-btn-wrap');
  if (l2Wrap) {
    const hasL2 = hasL2Data(topKey);
    l2Wrap.style.display = hasL2 ? '' : 'none';
    const l2Btn = document.getElementById('btn-l2');
    if (l2Btn && hasL2) {
      l2Btn.textContent = eu.btnL2 || '🔍 Уточнить специализацию →';
      l2Btn.onclick = function() {
        activeDomain = 'engineering';
        l2ProfKey = topKey;
        startL2();
      };
    }
  }

  const startLinks = pb.startUrls && ep.start
    ? `<ul class="start-list">${ep.start.map((s, i) => {
        const url = pb.startUrls[i];
        return `<li>${url ? `<a href="${url}" target="_blank" rel="noopener">${s}</a>` : s}</li>`;
      }).join('')}</ul>` : '';

  document.getElementById('winner').innerHTML = `
    <div class="winner-badge">${eu.winBadge}</div>
    <div class="winner-title">${pb.emoji} ${ep.name}</div>
    <div class="winner-short">${glossHint(ep.desc)}</div>
    <div class="winner-detail">${glossHint(ep.detail)}</div>
    <div class="section-block"><div class="section-lbl">${eu.lblDay}</div><div class="section-text">${glossHint(ep.day)}</div></div>
    <div class="section-block"><div class="section-lbl">${eu.lblEx}</div><div class="section-text">${glossHint(ep.examples)}</div></div>
    <div class="section-block"><div class="section-lbl">${eu.lblTools}</div>
      <div class="chips">${pb.tools.map(t => `<a class="chip" href="${t.u}" target="_blank" rel="noopener">${t.n}</a>`).join('')}</div>
    </div>
    <div class="section-block"><div class="section-lbl">${eu.lblStart}</div>${startLinks}</div>
  `;

  const othersEl = document.getElementById('others');
  const othersSorted = sorted.slice(1).filter(([k]) => ENGINEERING_PROF_BASE[k]);
  if (!othersSorted.length) { othersEl.style.display = 'none'; }
  else {
    othersEl.style.display = '';
    othersEl.innerHTML = othersSorted.map(([k, score]) => {
      const op = (ENGINEERING_I18N[lang] || ENGINEERING_I18N.ru).prof[k];
      const opb = ENGINEERING_PROF_BASE[k];
      const pct = Math.round(score / maxScore * 100);
      const toolsHtml = opb && opb.tools
        ? `<div class="other-expand-section"><span class="other-expand-lbl">${eu.lblTools}</span>
            <div class="chips">${opb.tools.map(t => `<a class="chip" href="${t.u}" target="_blank" rel="noopener">${t.n}</a>`).join('')}</div>
           </div>` : '';
      const startHtml = opb && opb.startUrls && op && op.start
        ? `<div class="other-expand-section"><span class="other-expand-lbl">${eu.lblStart}</span>
            <ul class="start-list">${op.start.map((s, i) => {
              const url = opb.startUrls[i];
              return `<li>${url ? `<a href="${url}" target="_blank" rel="noopener">${s}</a>` : s}</li>`;
            }).join('')}</ul>
           </div>` : '';
      const hasL2k = hasL2Data(k);
      const l2BtnHtml = hasL2k
        ? `<div class="other-expand-section"><button class="btn-next other-expand-btn" onclick="event.stopPropagation();goEngineeringL2FromOthers('${k}')">${eu.btnL2 || '🔍 Уточнить →'}</button></div>`
        : '';
      return `<div class="other-row" id="oeng-${k}" onclick="toggleOtherEngineering('${k}')">
        <div class="other-row-header">
          <span class="other-row-name">${opb.emoji} ${op ? op.name : k}</span>
          <div class="bar-wrap" style="flex:1;margin:0 8px"><div class="bar-inner" style="width:${pct}%;opacity:.4"></div></div>
          <span class="other-row-arrow" id="oarreng-${k}">▼</span>
        </div>
        <div class="other-expand" id="oexpeng-${k}">
          <div class="other-expand-desc">${op ? glossHint(op.desc) : ''}</div>
          <div class="other-expand-detail">${op ? glossHint(op.detail) : ''}</div>
          ${op && op.day ? `<div class="other-expand-section"><span class="other-expand-lbl">${eu.lblDay}</span><div class="other-expand-text">${op.day}</div></div>` : ''}
          ${toolsHtml}${startHtml}${l2BtnHtml}
        </div>
      </div>`;
    }).join('');
    injectTooltips(othersEl);
  }
}

function toggleOtherEngineering(k) {
  const exp = document.getElementById('oexpeng-' + k);
  const arr = document.getElementById('oarreng-' + k);
  if (!exp) return;
  const open = exp.classList.toggle('open');
  if (arr) arr.style.transform = open ? 'rotate(180deg)' : '';
  if (open) injectTooltips(exp);
}

function goEngineeringL2FromOthers(k) {
  if (!L2[k] || !Object.keys(L2[k]).length) return;
  activeDomain = 'engineering';
  l2ProfKey = k;
  l2FromDirect = false;
  startL2();
}


// ─── PDF EXPORT ────────────────────────────────────────────────────────────────
function sharePo() {
  const po = pdfResults.po;
  if (!po) return;
  const url = 'https://ivannahodka.github.io/career-test/';
  const domain = po.domainName || '';
  const texts = {
    ru: `🎯 Прошёл тест профориентации — моё направление: ${domain}\n\nБесплатно, 10 минут, без регистрации. Узнай своё 👇\n${url}`,
    en: `🎯 Took a career orientation test — my domain: ${domain}\n\nFree, 10 minutes, no sign-up. Find yours 👇\n${url}`,
    de: `🎯 Karriere-Orientierungstest gemacht — mein Bereich: ${domain}\n\nKostenlos, 10 Minuten, ohne Registrierung 👇\n${url}`,
    fr: `🎯 Test d'orientation passé — mon domaine : ${domain}\n\nGratuit, 10 minutes, sans inscription 👇\n${url}`,
    es: `🎯 Test de orientación hecho — mi área: ${domain}\n\nGratis, 10 minutos, sin registro 👇\n${url}`,
    pt: `🎯 Fiz o teste de orientação — minha área: ${domain}\n\nGrátis, 10 minutos, sem cadastro 👇\n${url}`,
    ar: `🎯 أجريت اختبار التوجيه — مجالي: ${domain}\n\nمجاني، 10 دقائق، بدون تسجيل 👇\n${url}`,
    he: `🎯 עשיתי מבחן התמצאות — התחום שלי: ${domain}\n\nחינם, 10 דקות, ללא הרשמה 👇\n${url}`,
    zh: `🎯 完成了职业测试——我的方向：${domain}\n\n免费，10分钟，无需注册 👇\n${url}`,
  };
  const text = texts[lang] || texts.en;
  if (navigator.share) {
    navigator.share({ title: domain, text, url }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text).then(() => {
      const lbl = document.getElementById('btn-po-share-lbl');
      const copied = { ru:'Скопировано!', en:'Copied!', de:'Kopiert!', fr:'Copié!', es:'¡Copiado!', pt:'Copiado!', ar:'تم النسخ!', he:'הועתק!', zh:'已复制!' };
      if (lbl) { lbl.textContent = copied[lang] || 'Copied!'; setTimeout(() => { lbl.textContent = ({ru:'Поделиться',en:'Share',de:'Teilen',fr:'Partager',es:'Compartir',pt:'Compartilhar',ar:'مشاركة',he:'שתף',zh:'分享'})[lang] || 'Share'; }, 2000); }
    }).catch(() => { prompt('Copy:', text); });
  }
}

function getPOLiveData(po) {
  if (!po) return po;
  const k = po.domainKey;
  const t = PO_I18N[lang] || PO_I18N.en;
  const full = t.domainFull && t.domainFull[k];
  return Object.assign({}, po, {
    domainName: (t.domains && t.domains[k]) || po.domainName,
    domainDesc: (t.domainDesc && t.domainDesc[k]) || po.domainDesc,
    who:   full ? full.who   : po.who,
    profs: full ? full.profs : po.profs,
    start: full ? full.start : po.start
  });
}

function getL1LiveData(l1) {
  if (!l1) return l1;
  const k = l1.profKey;
  const d = l1.domain;
  let p = null;
  if (d === 'creative') {
    p = typeof CREATIVE_I18N !== 'undefined' && (CREATIVE_I18N[lang] || CREATIVE_I18N.en).prof[k];
  } else if (d === 'business') {
    p = typeof BUSINESS_I18N !== 'undefined' && (BUSINESS_I18N[lang] || BUSINESS_I18N.en).prof[k];
  } else if (d === 'science') {
    p = typeof SCIENCE_I18N !== 'undefined' && (SCIENCE_I18N[lang] || SCIENCE_I18N.en).prof[k];
  } else if (d === 'social') {
    p = typeof PEDAGOGY_I18N !== 'undefined' && (PEDAGOGY_I18N[lang] || PEDAGOGY_I18N.ru).prof[k];
  } else if (d === 'engineering') {
    p = typeof ENGINEERING_I18N !== 'undefined' && (ENGINEERING_I18N[lang] || ENGINEERING_I18N.ru).prof[k];
  } else {
    p = I18N[lang] && I18N[lang].prof && I18N[lang].prof[k];
  }
  if (!p) return l1;
  return Object.assign({}, l1, {
    profName: p.name  || l1.profName,
    desc:     p.desc  || l1.desc,
    detail:   p.detail|| l1.detail,
    day:      p.day   || l1.day,
    start:    p.start || l1.start,
  });
}

function exportL1PDF() {
  const _l2 = pdfResults.l2;
  pdfResults.l2 = null;
  exportPDF();
  pdfResults.l2 = _l2;
}

function exportPoPDF() {
  const po = pdfResults.po;
  if (!po) return;
  // Reuse full exportPDF but only with PO section
  const _l1 = pdfResults.l1;
  const _l2 = pdfResults.l2;
  pdfResults.l1 = null;
  pdfResults.l2 = null;
  exportPDF();
  pdfResults.l1 = _l1;
  pdfResults.l2 = _l2;
}

function shareResult() {
  const l2 = pdfResults.l2;
  const l1 = pdfResults.l1;
  const url = 'https://ivannahodka.github.io/career-test/';
  const profName = (l2 && l2.roleName) || (l1 && l1.profName) || '';
  const emoji = (l2 && l2.roleEmoji) || (l1 && l1.emoji) || '🎯';
  const texts = {
    ru: `🎯 Прошёл бесплатный тест профориентации — и вот мой результат:
${emoji} ${profName}

Тест занял 10 минут, никакой регистрации. Проверь, какая профессия подходит тебе 👇
${url}`,
    en: `🎯 Just took a free career orientation test — here's my result:
${emoji} ${profName}

Took 10 minutes, no sign-up needed. Find out which career suits you 👇
${url}`,
    de: `🎯 Kostenloser Karrieretest gemacht — mein Ergebnis:
${emoji} ${profName}

Nur 10 Minuten, keine Registrierung. Finde deinen Beruf 👇
${url}`,
    fr: `🎯 J'ai fait un test d'orientation gratuit — voici mon résultat :
${emoji} ${profName}

10 minutes, sans inscription. Découvre ta voie 👇
${url}`,
    es: `🎯 Hice un test de orientación profesional gratuito — mi resultado:
${emoji} ${profName}

Sólo 10 minutos, sin registro. Descubre tu profesión 👇
${url}`,
    pt: `🎯 Fiz um teste de orientação profissional gratuito — meu resultado:
${emoji} ${profName}

Apenas 10 minutos, sem cadastro. Descubra sua profissão 👇
${url}`,
    ar: `🎯 أجريت اختبار توجيه مهني مجاني — وهذه نتيجتي:
${emoji} ${profName}

10 دقائق فقط، بدون تسجيل. اكتشف مهنتك 👇
${url}`,
    he: `🎯 עשיתי מבחן התמצאות קריירה בחינם — הנה התוצאה שלי:
${emoji} ${profName}

10 דקות בלבד, ללא הרשמה. גלה איזו מקצוע מתאים לך 👇
${url}`,
    zh: `🎯 我做了一个免费职业测试——这是我的结果：
${emoji} ${profName}

只需10分钟，无需注册。来看看哪个职业适合你 👇
${url}`,
  };
  const text = texts[lang] || texts.en;

  if (navigator.share) {
    navigator.share({ title: profName, text, url }).catch(() => {});
  } else {
    // fallback: copy to clipboard
    navigator.clipboard.writeText(text).then(() => {
      const lbl = document.getElementById('btn-share-lbl');
      const copied = { ru:'Скопировано!', en:'Copied!', de:'Kopiert!', fr:'Copié!', es:'¡Copiado!', pt:'Copiado!', ar:'تم النسخ!', he:'הועתק!', zh:'已复制!' };
      if (lbl) { lbl.textContent = copied[lang] || 'Copied!'; setTimeout(() => { lbl.textContent = ({ru:'Поделиться',en:'Share',de:'Teilen',fr:'Partager',es:'Compartir',pt:'Compartilhar',ar:'مشاركة',he:'שתף',zh:'分享'})[lang] || 'Share'; }, 2000); }
    }).catch(() => {
      prompt('Copy this link:', text);
    });
  }
}

function exportPDF() {
  const po = pdfResults.po;
  const l1 = pdfResults.l1;
  const l2 = pdfResults.l2;

  const UI = {
    ru: { title:'Мой карьерный профиль', date:'Дата',
          sec1:'Шаг 1 · Направление', sec2:'Шаг 2 · Профессия', sec3:'Шаг 3 · Специализация',
          whoFor:'Кому подходит', profList:'Профессии направления',
          desc:'О профессии', about:'Подробнее', dayLbl:'Типичный день',
          toolsLbl:'Ключевые инструменты', startLbl:'С чего начать',
          footerText:'Тест пройден на' },
    en: { title:'My Career Profile', date:'Date',
          sec1:'Step 1 · Domain', sec2:'Step 2 · Profession', sec3:'Step 3 · Specialisation',
          whoFor:'Who it suits', profList:'Professions in this domain',
          desc:'About the profession', about:'More detail', dayLbl:'Typical day',
          toolsLbl:'Key tools', startLbl:'How to get started',
          footerText:'Test taken at' },
    de: { title:'Mein Karriereprofil', date:'Datum',
          sec1:'Schritt 1 · Bereich', sec2:'Schritt 2 · Beruf', sec3:'Schritt 3 · Spezialisierung',
          whoFor:'Für wen geeignet', profList:'Berufe im Bereich',
          desc:'Über den Beruf', about:'Mehr Details', dayLbl:'Typischer Tag',
          toolsLbl:'Wichtige Tools', startLbl:'Wie du anfängst',
          footerText:'Test absolviert auf' },
    fr: { title:'Mon profil de carrière', date:'Date',
          sec1:'Étape 1 · Domaine', sec2:'Étape 2 · Métier', sec3:'Étape 3 · Spécialisation',
          whoFor:'À qui ça convient', profList:'Métiers du domaine',
          desc:'À propos du métier', about:'En savoir plus', dayLbl:'Journée typique',
          toolsLbl:'Outils clés', startLbl:'Par où commencer',
          footerText:'Test réalisé sur' },
    es: { title:'Mi perfil profesional', date:'Fecha',
          sec1:'Paso 1 · Área', sec2:'Paso 2 · Profesión', sec3:'Paso 3 · Especialización',
          whoFor:'Para quién es', profList:'Profesiones del área',
          desc:'Sobre la profesión', about:'Más detalles', dayLbl:'Día típico',
          toolsLbl:'Herramientas clave', startLbl:'Cómo empezar',
          footerText:'Test realizado en' },
    pt: { title:'Meu perfil de carreira', date:'Data',
          sec1:'Passo 1 · Área', sec2:'Passo 2 · Profissão', sec3:'Passo 3 · Especialização',
          whoFor:'Para quem é', profList:'Profissões da área',
          desc:'Sobre a profissão', about:'Mais detalhes', dayLbl:'Dia típico',
          toolsLbl:'Ferramentas-chave', startLbl:'Como começar',
          footerText:'Teste realizado em' },
    ar: { title:'ملفي المهني', date:'التاريخ',
          sec1:'الخطوة ١ · المجال', sec2:'الخطوة ٢ · المهنة', sec3:'الخطوة ٣ · التخصص',
          whoFor:'لمن يناسب', profList:'مهن المجال',
          desc:'عن المهنة', about:'مزيد من التفاصيل', dayLbl:'يوم نموذجي',
          toolsLbl:'الأدوات الأساسية', startLbl:'كيف تبدأ',
          footerText:'تم إجراء الاختبار على' },
    he: { title:'הפרופיל המקצועי שלי', date:'תאריך',
          sec1:'שלב 1 · תחום', sec2:'שלב 2 · מקצוע', sec3:'שלב 3 · התמחות',
          whoFor:'למי מתאים', profList:'מקצועות בתחום',
          desc:'על המקצוע', about:'פרטים נוספים', dayLbl:'יום טיפוסי',
          toolsLbl:'כלים מרכזיים', startLbl:'איך להתחיל',
          footerText:'המבחן בוצע ב' },
    zh: { title:'职业测试结果', date:'日期',
          sec1:'第1步 · 领域', sec2:'第2步 · 职业', sec3:'第3步 · 专业方向',
          whoFor:'适合谁', profList:'该领域职业',
          desc:'关于该职业', about:'更多详情', dayLbl:'典型的一天',
          toolsLbl:'核心工具', startLbl:'如何开始',
          footerText:'测试完成于' },
  };
  const lb = UI[lang] || UI.en;
  const isRTL = lang === 'ar' || lang === 'he';
  const dateStr = new Date().toLocaleDateString(
    lang === 'ar' ? 'ar-SA' : lang === 'he' ? 'he-IL' : lang,
    { year:'numeric', month:'long', day:'numeric' }
  );

  function listItems(arr) {
    if (!arr || !arr.length) return '';
    return '<ol class="pdf-list">' + arr.map(s => `<li>${s}</li>`).join('') + '</ol>';
  }
  function toolChips(arr) {
    if (!arr || !arr.length) return '';
    return '<div class="pdf-chips">' + arr.map(t => `<span class="pdf-chip">${t.n}</span>`).join('') + '</div>';
  }
  function block(label, content) {
    if (!content) return '';
    return `<div class="pdf-block"><div class="pdf-block-label">${label}</div><div class="pdf-block-content">${content}</div></div>`;
  }

  // ── Section builder ──────────────────────────────────────────────────────────
  function buildPO() {
    if (!po) return '';
    const pl = getPOLiveData(po);
    return `
    <div class="pdf-section">
      <div class="pdf-section-header">
        <span class="pdf-step-num">01</span>
        <div>
          <div class="pdf-section-label">${lb.sec1}</div>
          <div class="pdf-section-title">${pl.domainName}</div>
          ${pl.domainDesc ? `<div class="pdf-section-sub">${pl.domainDesc}</div>` : ''}
        </div>
      </div>
      ${pl.who   ? block(lb.whoFor,   pl.who)   : ''}
      ${pl.profs ? block(lb.profList, pl.profs) : ''}
      ${pl.start ? block(lb.startLbl, pl.start) : ''}
    </div>`;
  }

  function buildL1() {
    if (!l1) return '';
    const ll = getL1LiveData(l1);
    return `
    <div class="pdf-section">
      <div class="pdf-section-header">
        <span class="pdf-step-num">02</span>
        <div>
          <div class="pdf-section-label">${lb.sec2}</div>
          <div class="pdf-section-title">${ll.emoji} ${ll.profName}</div>
          ${ll.desc ? `<div class="pdf-section-sub">${ll.desc}</div>` : ''}
        </div>
      </div>
      ${ll.detail ? block(lb.about,   ll.detail) : ''}
      ${ll.day    ? block(lb.dayLbl,  ll.day)    : ''}
      ${ll.tools && ll.tools.length ? block(lb.toolsLbl, toolChips(ll.tools)) : ''}
      ${ll.start && ll.start.length ? block(lb.startLbl, listItems(ll.start)) : ''}
    </div>`;
  }

  function buildL2() {
    if (!l2) return '';
    // Re-fetch L2 text in current language
    const _d = getL2Data();
    const l2live = (_d && _d.roles && _d.roles[l2.roleKey])
      ? Object.assign({}, l2, { roleName: _d.roles[l2.roleKey].name || l2.roleName, roleDesc: _d.roles[l2.roleKey].desc || l2.roleDesc, roleDetail: _d.roles[l2.roleKey].detail || l2.roleDetail, roleStart: _d.roles[l2.roleKey].start || l2.roleStart })
      : l2;
    return `
    <div class="pdf-section">
      <div class="pdf-section-header">
        <span class="pdf-step-num">03</span>
        <div>
          <div class="pdf-section-label">${lb.sec3}</div>
          <div class="pdf-section-title">${l2live.roleEmoji} ${l2live.roleName}</div>
          ${l2live.roleDesc ? `<div class="pdf-section-sub">${l2live.roleDesc}</div>` : ''}
        </div>
      </div>
      ${l2live.roleDetail ? block(lb.about,   l2live.roleDetail) : ''}
      ${l2live.roleStart && l2live.roleStart.length ? block(lb.startLbl, listItems(l2live.roleStart)) : ''}
    </div>`;
  }

  const html = `<!DOCTYPE html>
<html lang="${lang}" dir="${isRTL ? 'rtl' : 'ltr'}">
<head>
<meta charset="UTF-8">
<title>${lb.title}</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: system-ui, -apple-system, 'Segoe UI', Arial, sans-serif;
    color: #1a202c; background: #fff;
    padding: 40px; max-width: 720px; margin: 0 auto;
    direction: ${isRTL ? 'rtl' : 'ltr'};
    font-size: 14px; line-height: 1.6;
  }
  /* Header */
  .pdf-header { display:flex; align-items:center; justify-content:space-between; border-bottom:3px solid #6C63FF; padding-bottom:16px; margin-bottom:32px; }
  .pdf-header-title { font-size:22px; font-weight:700; color:#6C63FF; }
  .pdf-header-date  { font-size:12px; color:#718096; }
  /* Sections */
  .pdf-section { border:1.5px solid #e2e8f0; border-radius:12px; padding:20px 24px; margin-bottom:20px; }
  .pdf-section-header { display:flex; align-items:flex-start; gap:16px; margin-bottom:14px; }
  .pdf-step-num { flex-shrink:0; width:36px; height:36px; background:#6C63FF; color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:700; }
  .pdf-section-label { font-size:10px; font-weight:700; color:#6C63FF; text-transform:uppercase; letter-spacing:.8px; margin-bottom:3px; }
  .pdf-section-title { font-size:18px; font-weight:700; color:#1a202c; }
  .pdf-section-sub   { font-size:13px; color:#718096; margin-top:4px; }
  /* Blocks */
  .pdf-block { margin-top:12px; }
  .pdf-block-label   { font-size:10px; font-weight:700; color:#a0aec0; text-transform:uppercase; letter-spacing:.6px; margin-bottom:5px; }
  .pdf-block-content { font-size:13.5px; color:#2d3748; }
  /* List */
  .pdf-list { padding-${isRTL ? 'right' : 'left'}:18px; }
  .pdf-list li { margin-bottom:4px; }
  /* Tool chips */
  .pdf-chips { display:flex; flex-wrap:wrap; gap:6px; margin-top:2px; }
  .pdf-chip  { background:#f0eeff; color:#6C63FF; border-radius:6px; padding:3px 9px; font-size:12px; font-weight:500; }
  /* Footer */
  .pdf-footer { margin-top:28px; padding-top:12px; border-top:1px solid #e2e8f0; font-size:12px; color:#a0aec0; text-align:center; line-height:1.8; }
  @media print {
    body { padding: 20px; font-size:13px; }
    @page { margin: 1.5cm; }
    .pdf-section { break-inside: avoid; }
  }
</style>
</head>
<body>
  <div class="pdf-header">
    <div class="pdf-header-title">🧭 ${lb.title}</div>
    <div class="pdf-header-date">${lb.date}: ${dateStr}</div>
  </div>
  ${buildPO()}
  ${buildL1()}
  ${buildL2()}
  <div class="pdf-footer">
    ${lb.footerText}<br>
    <a href="https://ivannahodka.github.io/career-test/" style="color:#6C63FF;font-weight:600;text-decoration:none;">
      🔗 ivannahodka.github.io/career-test
    </a>
  </div>
</body>
</html>`;

  const win = window.open('', '_blank');
  if (!win) { alert('Разрешите всплывающие окна для этого сайта'); return; }
  win.document.write(html);
  win.document.close();
  win.focus();
  setTimeout(() => win.print(), 500);
}

// ─── INIT ──────────────────────────────────────────────────────────────────────
(function() {
  // 1. Сохранённый выбор пользователя — наивысший приоритет
  try {
    const saved = localStorage.getItem('career_lang');
    if (saved && I18N[saved]) { lang = saved; return; }
  } catch(e) {}

  // 2. Язык браузера — если ещё не выбирал вручную
  const SUPPORTED = ['ru','en','de','fr','es','pt','ar','he','zh'];
  const navLangs = navigator.languages && navigator.languages.length
    ? [...navigator.languages]
    : [navigator.language || navigator.userLanguage || ''];

  for (const nl of navLangs) {
    const code = nl.toLowerCase().split('-')[0]; // 'en-US' → 'en'
    if (SUPPORTED.includes(code) && I18N[code]) { lang = code; return; }
  }
  // 3. Fallback — ru
})();
buildLangBar();
showHome();
