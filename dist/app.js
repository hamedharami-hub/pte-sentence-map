const TOPICS = {
  EDU: ['🎓', 'آموزش', 'Education'], TEC: ['⌘', 'فناوری', 'Technology'], ENV: ['♧', 'محیط‌زیست', 'Environment'], HEA: ['♡', 'سلامت', 'Health'], SOC: ['◌', 'جامعه', 'Society'], WOR: ['▣', 'کار', 'Work'], GOV: ['⌂', 'دولت', 'Government'], CUL: ['◒', 'فرهنگ', 'Culture'], URB: ['⌁', 'شهر و حمل‌ونقل', 'Urban'], SCI: ['✧', 'علم', 'Science'], XOV: ['◎', 'موضوعات ترکیبی', 'Cross-topic'],
};
const SUB = {
  EDU: { 'EDU-01': 'هدف آموزش', 'EDU-02': 'روش تدریس و یادگیری', 'EDU-03': 'امتحان و استاندارد', 'EDU-04': 'برنامه درسی و مهارت', 'EDU-05': 'دانشگاه و شغل', 'EDU-06': 'دسترسی و بودجه', 'EDU-07': 'تأثیر بر یادگیری' }, TEC: { 'TEC-01': 'وابستگی روزمره', 'TEC-02': 'ارتباط و روابط', 'TEC-03': 'هوش مصنوعی و اخلاق', 'TEC-04': 'خدمات دیجیتال', 'TEC-05': 'نوآوری و جامعه' }, ENV: { 'ENV-01': 'تغییرات اقلیمی', 'ENV-02': 'آلودگی و انرژی', 'ENV-03': 'حفاظت و حیات‌وحش', 'ENV-04': 'توسعه پایدار', 'ENV-05': 'شهر و روستا' }, HEA: { 'HEA-01': 'رفتار سالم', 'HEA-02': 'سلامت روان', 'HEA-03': 'عدالت درمانی', 'HEA-04': 'علم پزشکی' }, SOC: { 'SOC-01': 'خانواده و تربیت', 'SOC-02': 'موفقیت و خوشبختی', 'SOC-03': 'کار و کیفیت زندگی', 'SOC-04': 'رفتار و ارزش‌ها', 'SOC-05': 'تنوع و مهاجرت' }, WOR: { 'WOR-01': 'انتخاب شغل', 'WOR-02': 'محیط کار', 'WOR-03': 'مصرف و بازار', 'WOR-04': 'سرمایه‌گذاری عمومی' }, GOV: { 'GOV-01': 'قانون و مسئولیت', 'GOV-02': 'جرم و بازپروری', 'GOV-03': 'زیرساخت عمومی', 'GOV-04': 'اولویت‌های دولت' }, CUL: { 'CUL-01': 'رسانه و تلویزیون', 'CUL-02': 'هنر و تاریخ', 'CUL-03': 'زبان و هویت', 'CUL-04': 'گردشگری' }, URB: { 'URB-01': 'جابجایی', 'URB-02': 'مسکن و محله', 'URB-03': 'رشد شهری' }, SCI: { 'SCI-01': 'اولویت پژوهش', 'SCI-02': 'پیشرفت و اخلاق' }, XOV: { 'XOV-01': 'رقابت و همکاری', 'XOV-02': 'انتخاب فردی و وظیفه', 'XOV-03': 'سنت و تغییر' },
};
const ROLE = { benefit:'مزیت', drawback:'نکته منفی', effect:'پیامد', solution:'راهکار', balanced_solution:'راهکار متعادل', qualification:'محدودیت', reason:'دلیل', evaluation:'ارزیابی', mechanism:'سازوکار', counterargument:'مخالفت', rebuttal:'پاسخ به مخالفت', thesis:'موضع', example:'مثال', consequence:'پیامد', synthesis:'جمع‌بندی', problem_framing:'صورت‌بندی مسئله' };
const SLOT = { SERVICE_OR_OPPORTUNITY:'خدمت یا فرصت', POLICY_OR_DEVELOPMENT:'سیاست یا تغییر', TARGET_GROUP:'گروه هدف', BARRIER:'مانع', RESOURCE:'منبع', BARRIER_1:'مانع اول', BARRIER_2:'مانع دوم', BARRIER_3:'مانع سوم', APPROACH:'رویکرد مفرد', APPROACH_PLURAL:'رویکرد جمع', APPROACH_OR_PLURAL:'رویکرد یا سیاست', SHORT_TERM_BENEFIT:'فایده کوتاه‌مدت', OUTCOME:'پیامد هدف', OUTCOME_1:'پیامد اول', OUTCOME_2:'پیامد دوم', MECHANISM:'سازوکار یا دلیل', PRACTICAL_RESULT:'نتیجهٔ عملی', POSITIVE_ELEMENT:'عنصر مفید', PREDICTABLE_RISK:'ریسک قابل پیش‌بینی', CLEAR_STANDARD:'استاندارد یا قانون', PRACTICAL_SUPPORT:'حمایت عملی', REALISTIC_ALTERNATIVE:'جایگزین واقعی', COUNTERARGUMENT:'نگرانی یا مخالفت', SAFEGUARD_OR_POLICY:'راه‌حل محافظتی', SYSTEM_OR_APPROACH:'سیستم یا روش', HUMAN_SKILL_OR_ALTERNATIVE_SYSTEM:'مهارت یا جایگزین', AFFECTED_GROUP:'گروه درگیر', SPECIFIC_MEASURE:'اقدام مشخص', IMMEDIATE_EFFECT:'اثر فوری', BROADER_CONSEQUENCE:'پیامد بزرگ‌تر' };
const ENGINE_GUIDE = {
  M01:['دسترسی ← سیاست ← گروهِ دارای مانع','وقتی می‌خواهی یک مزیت عادلانه و مشخص را توضیح بدهی.'], M02:['تغییر ← مانع‌های دسترسی ← نابرابری','برای آوردن هشدار متعادل دربارهٔ شکاف طبقاتی یا جغرافیایی.'], M03:['فایدهٔ فوری ↔ دو پیامد بلندمدت','برای نقد یا ارزیابی یک سیاست؛ نه برای نتیجه‌گیری نهایی.'], M04:['فایده ← تعادل ← ریسک قابل‌کنترل','وقتی موضع تو «بله، اما با کنترل» است.'], M05:['تغییر اجتناب‌پذیر ← مدیریت ← سود/زیان','برای موضوعاتی که حذف کاملشان واقع‌بینانه نیست، مثل AI یا گردشگری.'], M06:['مشکل ← کاهش ← جلوگیری از آسیب دوم','برای Problem–Solution و سیاست‌های حساس به عدالت.'], M07:['سه بازیگر ← اقدام هماهنگ ← حل مسئله','وقتی هیچ فرد یا نهادِ واحدی به‌تنهایی کافی نیست.'], M08:['قانون + حمایت + جایگزین واقعی','برای نشان‌دادن راهکار عملی، نه صرفاً «دولت باید».'], M09:['پیشگیری زودهنگام ← هزینه/رنج کمتر','برای سلامت، جرم، محیط‌زیست و اطلاعات نادرست.'], M10:['آزادی انتخاب + اطلاعات + آموزش + حمایت','برای نقدِ انتخابی که بدون توانمندسازی واقعی است.'], M11:['دوگانهٔ ظاهری ← ادغام دو اولویت','وقتی سؤال دو ارزش را مقابل هم قرار می‌دهد.'], M12:['نگرانی مخالفان ← محافظت عملی ← پاسخ','یک counterargument کوتاه؛ باید واقعاً به همان نگرانی جواب دهد.'], M13:['اثر مستقیم ← دو اثر اجتماعی بلندمدت','برای گسترش ایده از فرد به جامعه.'], M14:['قانونِ دقیق ← حفاظت ← حفظِ فعالیت مشروع','برای دفاع از regulation بدون موضع افراطی.'], M15:['گروه‌های متفاوت ← نیاز متفاوت ← نسخهٔ منعطف','برای رد راه‌حل یکسان برای همه.'], M16:['حمایت/آموزش ← سازگاری ← کاهش ریسک','برای توضیح اینکه چرا اجرای سیاست نیاز به حمایت دارد.'], M17:['وابستگی زیاد ← تضعیف جایگزین ← آسیب‌پذیری','برای یک drawback روشن، مخصوصاً فناوری یا حمل‌ونقل.'], M18:['اثر فوری ↔ نتیجهٔ بلندمدت','برای جملهٔ ارزیابی یا جمع‌بندیِ بدون ادعای مطلق.'], M19:['اقدام مشخص ← اثر فوری ← پیامد بزرگ‌تر','برای مثالِ واقعی؛ قبلش باید ادعای اصلی را گفته باشی.'], M20:['موضع مثبتِ مشروط ← safeguard + support','فقط وقتی موضع نهایی تو مثبت یا qualified است.'], M21:['اقدام ← پیامد ← چون‌که سازوکار ← نتیجهٔ عملی','بهترین موتور برای توسعهٔ یک دلیل با توضیح و جزئیات مشخص.']
};
const STORAGE = { stars: 'pte-stars', flags: 'pte-flags' };
const state = { cards: [], byId: new Map(), variants: [], variantById: new Map(), engines: [], engineById: new Map(), scenarios: {}, subIndex: new Map(), topic: 'EDU', subtopic: '', view: 'engines', p1Only: false, query: '', stars: new Set(), flags: new Set(), activeEngine: 'M01', activeSlot: null, engineSlots: {} };
const $ = id => document.getElementById(id);
const readIds = key => { try { const v = JSON.parse(localStorage.getItem(key) || '[]'); return new Set(Array.isArray(v) ? v.filter(x => typeof x === 'string') : []); } catch { return new Set(); } };
function saveSet(name) { localStorage.setItem(STORAGE[name], JSON.stringify([...state[name]])); }
function announce(message) { $('status').textContent = message; clearTimeout(announce.timer); announce.timer = setTimeout(() => $('status').textContent = '', 1800); }
function toggle(name, id) { const set = state[name]; set.has(id) ? set.delete(id) : set.add(id); saveSet(name); render(); announce(name === 'stars' ? (set.has(id) ? 'به منتخب‌ها اضافه شد' : 'از منتخب‌ها حذف شد') : (set.has(id) ? 'برای مرور حفظی علامت خورد' : 'علامت مرور حذف شد')); }
function label(code) { const main = code.slice(0, 3); return SUB[main]?.[code] || TOPICS[main]?.[1] || code; }
function engineLabel(engine) { return engine ? `${engine.id} · ${engine.name_fa}` : ''; }
function addSub(code, id) { if (!SUB[code.slice(0, 3)]?.[code] || !state.byId.has(id)) return; if (!state.subIndex.has(code)) state.subIndex.set(code, new Set()); state.subIndex.get(code).add(id); }
function makeIndex(questions, recommendations) { state.cards.forEach(card => card.topic_links.forEach(code => addSub(code, card.id))); const qById = new Map(questions.map(q => [q.id, q])); recommendations.forEach(group => { const q = qById.get(group.question_id); if (!q) return; group.recommended_sentence_ids.forEach(item => (item.shared_topics?.length ? item.shared_topics : [q.primary_topic]).forEach(code => addSub(code, item.card_id))); }); }
function topicCards() { return state.cards.filter(card => card.topic_links.some(code => code.slice(0, 3) === state.topic)); }
function renderTopics() { const root = $('topics'); root.replaceChildren(); Object.entries(TOPICS).forEach(([code, [icon, fa, en]]) => { const b = document.createElement('button'); b.type = 'button'; b.className = `topic ${state.topic === code ? 'active' : ''}`; b.innerHTML = `<span>${icon}</span><b>${fa}</b><small>${en}</small>`; b.addEventListener('click', () => { state.topic = code; state.subtopic = ''; render(); }); root.append(b); }); const subRoot = $('subtopics'); subRoot.replaceChildren(); [['', 'همهٔ زیرموضوع‌ها'], ...Object.entries(SUB[state.topic])].forEach(([code, name]) => { const count = code ? state.subIndex.get(code)?.size || 0 : topicCards().length; if (code && !count) return; const b = document.createElement('button'); b.type = 'button'; b.className = `sub ${state.subtopic === code ? 'active' : ''}`; b.textContent = `${name} (${count.toLocaleString('fa-IR')})`; b.addEventListener('click', () => { state.subtopic = code; state.p1Only = false; render(); }); subRoot.append(b); }); }
function sourceResults() { let list = state.subtopic ? [...(state.subIndex.get(state.subtopic) || [])].map(id => state.byId.get(id)).filter(Boolean) : topicCards(); if (state.query) list = list.filter(card => card.text.toLowerCase().includes(state.query)); if (state.p1Only) list = list.filter(card => card.memorisation_priority === 'P1'); return list.sort((a,b) => a.memorisation_priority.localeCompare(b.memorisation_priority) || b.reuse_score - a.reuse_score); }
function renderSource(card) { const article = document.createElement('article'); article.className = 'card'; const body = document.createElement('div'); body.className = 'card-body'; body.innerHTML = `<p class="sentence"></p><div class="meta"><span class="pill priority ${card.memorisation_priority.toLowerCase()}">${card.memorisation_priority}</span><span class="pill role">${ROLE[card.essay_role] || card.essay_role}</span>${[...new Set(card.topic_links.map(label))].slice(0,3).map(x => `<span class="pill">${x}</span>`).join('')}</div>`; body.querySelector('.sentence').textContent = card.text; article.append(actionButtons(card.id), body); return article; }
function variantTopics(variant) { return [...new Set(variant.scenario_packs.flatMap(id => state.scenarios[id]?.topics || []))].map(label); }
function slotValue(variant, slot) { return slot === 'APPROACH_OR_PLURAL' ? (variant.slots.APPROACH || variant.slots.APPROACH_PLURAL) : variant.slots[slot]; }
function currentVariants() { return state.variants.filter(v => v.engine_id === state.activeEngine).filter(v => Object.entries(state.engineSlots).every(([key,value]) => slotValue(v, key) === value)); }
function variantsForSlot(slot) { return state.variants.filter(v => v.engine_id === state.activeEngine).filter(v => Object.entries(state.engineSlots).every(([key,value]) => key === slot || slotValue(v, key) === value)); }
function engineSlotKeys() { const engine = state.engineById.get(state.activeEngine); if (engine?.id === 'M03') return ['APPROACH_OR_PLURAL', 'SHORT_TERM_BENEFIT', 'OUTCOME_1', 'OUTCOME_2']; const keys = new Set(engine?.slots || []); state.variants.filter(v => v.engine_id === state.activeEngine).forEach(v => Object.keys(v.slots).forEach(k => keys.add(k))); return [...keys]; }
function saved(name) { return [...state[name]].map(id => state.variantById.get(id) || state.byId.get(id)).filter(Boolean); }
function renderCards() { let items; if (state.view === 'engines') items = currentVariants(); else if (state.view === 'topics') items = sourceResults(); else items = saved(state.view === 'starred' ? 'stars' : 'flags'); const root = $('cards'); root.replaceChildren(); const frag = document.createDocumentFragment(); items.forEach(item => frag.append(item.variant_id ? renderVariant(item, state.view === 'engines') : renderSource(item))); root.append(frag); $('resultCount').textContent = state.view === 'engines' ? `${items.length.toLocaleString('fa-IR')} نسخهٔ تأییدشده` : `${items.length.toLocaleString('fa-IR')} جمله`; $('empty').hidden = items.length > 0; $('empty').textContent = state.view === 'engines' ? 'برای این ترکیب نسخهٔ تأییدشده‌ای وجود ندارد. انتخاب‌ها را پاک کن.' : state.view === 'starred' ? 'هنوز موردی را ستاره‌دار نکرده‌ای.' : state.view === 'flagged' ? 'هنوز موردی را برای مرور حفظی علامت نزده‌ای.' : 'برای این بخش جمله‌ای ثبت نشده است.'; }
function bind() { $('search').addEventListener('input', e => { state.query = e.target.value.toLowerCase().trim(); $('clearSearch').hidden = !state.query; render(); }); $('clearSearch').addEventListener('click', () => { $('search').value = ''; state.query = ''; $('clearSearch').hidden = true; render(); }); $('onlyP1').addEventListener('click', () => { state.p1Only = !state.p1Only; $('onlyP1').classList.toggle('active', state.p1Only); render(); }); document.querySelectorAll('.tab').forEach(b => b.addEventListener('click', () => { state.view = b.dataset.view; state.subtopic = ''; state.p1Only = false; render(); })); }
async function load(url) { const r = await fetch(url); if (!r.ok) throw new Error(`${url}: ${r.status}`); return r.json(); }
async function init() { state.stars = readIds(STORAGE.stars); state.flags = readIds(STORAGE.flags); bind(); try { const [cards, questions, recommendations, bank, wave1, wave2, wave3] = await Promise.all([load('data/cards.json'), load('data/questions.json'), load('data/recommendations.json'), load('data/engine-bank.json'), load('data/wave1-variants.json'), load('data/wave2-variants.json'), load('data/wave3-variants.json')]); state.cards = cards.cards; state.cards.forEach(x => state.byId.set(x.id,x)); makeIndex(questions.questions, recommendations.recommendations); state.engines = bank.engines; state.engines.forEach(x => state.engineById.set(x.id,x)); state.variants = [...wave1.variants, ...wave2.variants, ...wave3.variants]; state.variants.forEach(x => state.variantById.set(x.variant_id,x)); state.scenarios = {...wave1.scenario_packs, ...(wave2.additional_scenario_packs || {})}; render(); } catch (e) { console.error(e); $('loading').hidden = true; $('loadError').hidden = false; } }
function showSelectedTerms(node, sentence, selectedValues) {
  const values = [...new Set(selectedValues.filter(value => typeof value === 'string' && value.trim()))]
    .sort((a, b) => b.length - a.length);
  if (!values.length) { node.textContent = sentence; return; }
  const escaped = values.map(value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const matcher = new RegExp(`(${escaped.join('|')})`, 'gi');
  sentence.split(matcher).forEach(part => {
    if (!part) return;
    if (values.some(value => value.toLowerCase() === part.toLowerCase())) {
      const mark = document.createElement('mark');
      mark.className = 'sentence-selection';
      mark.textContent = part;
      node.append(mark);
    } else node.append(document.createTextNode(part));
  });
}
const ARCHETYPE = { 'ARC-ACCESS':'دسترسی', 'ARC-CAUSE':'علت', 'ARC-CHANGE':'تغییر', 'ARC-COOP':'همکاری', 'ARC-EQUITY':'عدالت', 'ARC-FREEDOM':'انتخاب فردی', 'ARC-FUNDING':'بودجه', 'ARC-IMPLEMENT':'اجرا', 'ARC-INNOVATION':'نوآوری', 'ARC-LEVELS':'سطح‌بندی', 'ARC-PREVENT':'پیشگیری', 'ARC-REG':'قانون‌گذاری', 'ARC-RESP':'مسئولیت', 'ARC-SUPPORT':'حمایت', 'ARC-TIME':'بلندمدت', 'ARC-TRADEOFF':'تعادلِ سود و زیان' };
Object.assign(ROLE, { prevention:'پیشگیری', cause:'علت', conclusion:'نتیجه‌گیری', 'cause/effect':'علت و پیامد', balanced_evaluation:'ارزیابی متعادل', balanced_effect:'پیامد متعادل', balanced_conclusion:'جمع‌بندی متعادل' });
function renderPhraseMap(matches) {
  if (!Object.keys(state.engineSlots).length) return null;
  const packs = matches.flatMap(variant => variant.scenario_packs.map(id => state.scenarios[id]).filter(Boolean));
  const topics = [...new Set(packs.flatMap(pack => pack.topics || []).map(label))];
  const archetypes = [...new Set(packs.flatMap(pack => pack.archetypes || []).map(code => ARCHETYPE[code] || code))];
  const panel = document.createElement('aside');
  panel.className = 'phrase-map';
  panel.innerHTML = `<div class="phrase-map-heading"><b>نقشهٔ انتخاب فعلی</b><span>${matches.length.toLocaleString('fa-IR')} نسخهٔ تأییدشده باقی مانده</span></div><div class="phrase-map-row"><em>زیرموضوع‌ها</em><div>${topics.map(topic => `<span class="phrase-chip">${topic}</span>`).join('')}</div></div><div class="phrase-map-row"><em>نوع کاربرد</em><div>${archetypes.map(archetype => `<span class="phrase-chip archetype">${archetype}</span>`).join('')}</div></div>`;
  return panel;
}
function renderEngines() {
  const root = $('engineWorkspace'); root.replaceChildren();
  const directory = document.createElement('div'); directory.className = 'engine-directory';
  state.engines.forEach(engine => { const b = document.createElement('button'); b.type = 'button'; b.className = `engine-chip ${engine.id === state.activeEngine ? 'active' : ''}`; b.innerHTML = `<b>${engine.id}</b><span>${engine.name_fa}</span>`; b.addEventListener('click', () => { state.activeEngine = engine.id; state.engineSlots = {}; state.activeSlot = null; render(); }); directory.append(b); });
  root.append(directory);
  const engine = state.engineById.get(state.activeEngine); if (!engine) return;
  const panel = document.createElement('section'); panel.className = 'engine-panel'; const matches = currentVariants();
  const top = document.createElement('div'); top.className = 'engine-heading'; top.innerHTML = `<div><span class="eyebrow">خانوادهٔ تأییدشده</span><h2>${engineLabel(engine)}</h2><p>${(engine.essay_roles || []).map(x => ROLE[x] || x).join(' · ')} · ${matches.length.toLocaleString('fa-IR')} نسخهٔ سازگار</p></div><button type="button" class="reset-engine">پاک‌کردن انتخاب‌ها</button>`;
  top.querySelector('.reset-engine').addEventListener('click', () => { state.engineSlots = {}; state.activeSlot = null; render(); }); panel.append(top);
  const guide = ENGINE_GUIDE[engine.id];
  if (guide) { const guidePanel = document.createElement('aside'); guidePanel.className = 'engine-guide'; guidePanel.innerHTML = `<div><b>منطق جمله</b><span>${guide[0]}</span></div><p>${guide[1]}</p>`; panel.append(guidePanel); }
  const guidance = document.createElement('aside');
  guidance.className = 'pte-guidance';
  guidance.innerHTML = '<b>روش امن برای PTE</b><span>این جمله را چارچوب بدان، نه متن آماده. در Essay دست‌کم دو جزئیات مشخص از خود سؤال و یک توضیح یا مثال مرتبط اضافه کن.</span>';
  panel.append(guidance, renderTemplate(engine));
  const slots = engineSlotKeys(); const slotBar = document.createElement('div'); slotBar.className = 'slot-bar';
  slots.forEach(slot => { const b = document.createElement('button'); b.type = 'button'; b.className = `slot-button ${state.activeSlot === slot ? 'active' : ''} ${state.engineSlots[slot] ? 'filled' : ''}`; b.textContent = state.engineSlots[slot] || SLOT[slot] || slot; b.title = SLOT[slot] || slot; b.addEventListener('click', () => { state.activeSlot = slot; render(); }); slotBar.append(b); }); panel.append(slotBar);
  const active = state.activeSlot || slots[0]; if (active) { const options = [...new Set(variantsForSlot(active).map(v => slotValue(v, active)).filter(Boolean))]; const chooser = document.createElement('div'); chooser.className = 'slot-chooser'; chooser.innerHTML = `<div class="chooser-label"><b>${active === 'APPROACH_OR_PLURAL' ? 'رویکرد یا سیاست' : SLOT[active] || active}</b><span>فقط گزینه‌های سازگار با انتخاب‌های فعلی</span></div>`; const list = document.createElement('div'); list.className = 'choice-list'; options.forEach(value => { const b = document.createElement('button'); b.type = 'button'; b.className = `choice ${state.engineSlots[active] === value ? 'active' : ''}`; b.textContent = value; b.addEventListener('click', () => { state.engineSlots[active] = value; render(); }); list.append(b); }); chooser.append(list); panel.append(chooser); }
  const phraseMap = renderPhraseMap(matches); if (phraseMap) panel.append(phraseMap); root.append(panel);
}
function renderVariant(variant, compact = false) {
  const article = document.createElement('article');
  article.className = `card variant-card ${compact ? 'compact' : ''}`;
  const body = document.createElement('div');
  body.className = 'card-body';
  const engine = state.engineById.get(variant.engine_id);
  const roles = variant.essay_roles || variant.roles || engine?.essay_roles || [];
  body.innerHTML = `<div class="variant-top"><span class="approved">✓ تأییدشده</span><span class="variant-id">${engineLabel(engine)}</span></div><p class="sentence"></p><div class="meta"><span class="pill role">${roles.map(x => ROLE[x] || x).join(' · ')}</span>${variantTopics(variant).slice(0,3).map(x => `<span class="pill">${x}</span>`).join('')}</div>${compact ? '' : '<button type="button" class="use-variant">استفاده از این نسخه</button>'}`;
  showSelectedTerms(body.querySelector('.sentence'), variant.completed_sentence, state.view === 'engines' ? Object.values(state.engineSlots) : []);
  body.querySelector('.use-variant')?.addEventListener('click', () => { state.activeEngine = variant.engine_id; state.engineSlots = {...variant.slots}; state.activeSlot = null; state.view = 'engines'; render(); announce('نسخهٔ تأییدشده باز شد'); });
  article.append(actionButtons(variant.variant_id), body);
  return article;
}
function renderTemplate(engine) {
  const selectedApproach = state.engineSlots.APPROACH_OR_PLURAL;
  const usePlural = Boolean(engine.plural_template && selectedApproach && state.variants.some(variant => variant.engine_id === engine.id && variant.slots.APPROACH_PLURAL === selectedApproach));
  const template = usePlural ? engine.plural_template : engine.template;
  const p = document.createElement('p'); p.className = 'engine-template';
  template.split(/(\[[A-Z0-9_]+\])/g).forEach(part => {
    const slot = part.match(/^\[([A-Z0-9_]+)\]$/)?.[1];
    if (!slot) p.append(document.createTextNode(part));
    else { const mergedSlot = engine.id === 'M03' && (slot === 'APPROACH' || slot === 'APPROACH_PLURAL') ? 'APPROACH_OR_PLURAL' : slot; const b = document.createElement('button'); b.type = 'button'; b.className = `template-slot ${state.activeSlot === mergedSlot ? 'active' : ''}`; b.textContent = state.engineSlots[mergedSlot] || (mergedSlot === 'APPROACH_OR_PLURAL' ? 'رویکرد یا سیاست' : SLOT[mergedSlot] || mergedSlot); b.addEventListener('click', () => { state.activeSlot = mergedSlot; render(); }); p.append(b); }
  });
  return p;
}
function actionButtons(id) {
  const starred = state.stars.has(id), flagged = state.flags.has(id); const wrap = document.createElement('div'); wrap.className = 'actions';
  wrap.innerHTML = `<button type="button" class="round star ${starred ? 'active' : ''}" aria-label="${starred ? 'حذف از منتخب‌ها' : 'افزودن به منتخب‌ها'}">${starred ? '★' : '☆'}</button><button type="button" class="round flag ${flagged ? 'active' : ''}" aria-label="${flagged ? 'حذف علامت مرور' : 'علامت‌گذاری برای مرور'}">${flagged ? '⚑' : '⚐'}</button>`;
  wrap.querySelector('.star').addEventListener('click', () => toggle('stars', id)); wrap.querySelector('.flag').addEventListener('click', () => toggle('flags', id)); return wrap;
}
Object.assign(state, { practiceSource: 'flags', practiceIndex: 0, practiceRevealed: false });
function render() {
  $('loading').hidden = true; $('starCount').textContent = state.stars.size.toLocaleString('fa-IR'); $('flagCount').textContent = state.flags.size.toLocaleString('fa-IR');
  document.querySelectorAll('.tab').forEach(button => { const active = button.dataset.view === state.view; button.classList.toggle('active', active); button.setAttribute('aria-selected', String(active)); });
  const topics = state.view === 'topics', practice = state.view === 'practice'; $('topicWorkspace').hidden = !topics; $('engineWorkspace').hidden = state.view !== 'engines'; $('practiceWorkspace').hidden = !practice; $('onlyP1').hidden = !topics; $('listHead').hidden = practice; $('cards').hidden = practice;
  const titles = { engines:'موتورهای جمله', starred:'منتخب‌های من', flagged:'مرور حفظی', practice:'تمرین حفظ' }; $('titleText').textContent = topics ? (state.subtopic ? SUB[state.topic][state.subtopic] : TOPICS[state.topic][1]) : titles[state.view];
  $('subtitle').textContent = topics ? (state.subtopic ? 'جمله‌های مرتبط با همین زیرموضوع؛ موارد P1 و پرکاربرد بالاتر هستند.' : 'زیرموضوع را انتخاب کن تا جمله‌های مرتبط با همان بخش نمایش داده شوند.') : state.view === 'engines' ? 'یک جای‌خالی را انتخاب کن تا فقط عبارت‌ها و نسخه‌های تأییدشدهٔ سازگار باقی بمانند.' : state.view === 'practice' ? 'جمله را ابتدا از حافظه بساز؛ بعد پاسخ را باز کن و به جملهٔ بعدی برو.' : state.view === 'starred' ? 'جمله‌ها و نسخه‌هایی که برای Essay انتخاب کرده‌ای.' : 'مواردی که برای تمرین و حفظ علامت زده‌ای.';
  if (topics) renderTopics(); if (state.view === 'engines') renderEngines(); if (practice) renderPractice(); else renderCards();
}
const REVIEW_STORAGE = 'pte-review-status';
function readReview() { try { const value = JSON.parse(localStorage.getItem(REVIEW_STORAGE) || '{}'); return value && typeof value === 'object' && !Array.isArray(value) ? value : {}; } catch { return {}; } }
function saveReview() { localStorage.setItem(REVIEW_STORAGE, JSON.stringify(state.review)); }
Object.assign(state, { review: readReview() });
function itemId(item) { return item.variant_id || item.id; }
function practiceItems() { const rank = { hard: 0, unreviewed: 1, known: 2 }; return saved(state.practiceSource === 'stars' ? 'stars' : 'flags').sort((a, b) => (rank[state.review[itemId(a)] || 'unreviewed'] - rank[state.review[itemId(b)] || 'unreviewed'])); }
function renderPractice() {
  const root = $('practiceWorkspace'); root.replaceChildren(); const flagged = saved('flags'), starred = saved('stars');
  const picker = document.createElement('div'); picker.className = 'practice-picker';
  [['flags', 'پرچم‌دارها', flagged.length], ['stars', 'منتخب‌ها', starred.length]].forEach(([source, title, count]) => { const button = document.createElement('button'); button.type = 'button'; button.className = `practice-mode ${state.practiceSource === source ? 'active' : ''}`; button.textContent = `${title} (${count.toLocaleString('fa-IR')})`; button.addEventListener('click', () => { state.practiceSource = source; state.practiceIndex = 0; state.practiceRevealed = false; render(); }); picker.append(button); }); root.append(picker);
  const items = practiceItems(); if (!items.length) { const empty = document.createElement('div'); empty.className = 'practice-empty'; empty.textContent = state.practiceSource === 'flags' ? 'هنوز جمله‌ای برای مرور حفظی علامت نزده‌ای. از علامت پرچم کنار جمله‌ها استفاده کن.' : 'هنوز جمله‌ای را به منتخب‌ها اضافه نکرده‌ای.'; root.append(empty); return; }
  state.practiceIndex %= items.length; const item = items[state.practiceIndex], id = itemId(item), status = state.review[id] || 'unreviewed'; const card = document.createElement('article'); card.className = 'practice-card'; const source = item.variant_id ? `نسخهٔ تأییدشده · ${engineLabel(state.engineById.get(item.engine_id))}` : `جملهٔ منبع · ${item.memorisation_priority}`;
  card.innerHTML = `<div class="practice-meta"><span>${source}</span><b>${(state.practiceIndex + 1).toLocaleString('fa-IR')} از ${items.length.toLocaleString('fa-IR')}</b></div><p class="practice-status">وضعیت: ${status === 'hard' ? 'نیاز به مرور' : status === 'known' ? 'بلد بودم' : 'مرور نشده'}</p><p class="practice-prompt"></p><div class="practice-actions"><button type="button" class="practice-reveal">${state.practiceRevealed ? 'پنهان‌کردن پاسخ' : 'نمایش پاسخ'}</button><button type="button" class="practice-hard" ${state.practiceRevealed ? '' : 'disabled'}>دوباره</button><button type="button" class="practice-known" ${state.practiceRevealed ? '' : 'disabled'}>بلد بودم</button></div>`;
  const prompt = card.querySelector('.practice-prompt'); prompt.textContent = state.practiceRevealed ? (item.completed_sentence || item.text) : 'جمله را در ذهن خودت بساز؛ سپس پاسخ را ببین و با نسخهٔ تأییدشده مقایسه کن.'; if (state.practiceRevealed) prompt.classList.add('revealed');
  card.querySelector('.practice-reveal').addEventListener('click', () => { state.practiceRevealed = !state.practiceRevealed; render(); });
  const rate = value => { state.review[id] = value; saveReview(); state.practiceIndex = (state.practiceIndex + 1) % items.length; state.practiceRevealed = false; render(); announce(value === 'known' ? 'برای این دستگاه به‌عنوان بلد بودم ثبت شد' : 'برای مرور دوباره در اولویت قرار گرفت'); };
  card.querySelector('.practice-hard').addEventListener('click', () => rate('hard')); card.querySelector('.practice-known').addEventListener('click', () => rate('known')); root.append(card);
}
init();
