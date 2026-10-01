/* ============================================================
   EQUIPUSE — i18n dictionary + translation helper
   ============================================================ */
const I18N = {
  en: {
    "common.request":"Request","common.book":"Book","common.report_issue":"Report issue",
    "common.approve":"Approve","common.deny":"Deny","common.cancel":"Cancel",
    "common.mark_returned":"Mark returned","common.resolve":"Resolve","common.close":"Close",
    "common.use_this":"Use this","common.view_item":"View item","common.sign_out":"↺ Sign out",

    "login.brand_sub":"Research equipment sign-out & tracking",
    "login.card_title":"// Sign the checkout card",
    "login.field_username":"Username","login.field_username_ph":"e.g. layla.h",
    "login.field_password":"Password","login.field_password_ph":"Choose or enter a password",
    "login.field_role":"Signing in as",
    "login.role_researcher":"Researcher","login.role_manager":"Lab Manager",
    "login.submit":"Sign out card & enter →",
    "login.hint":"New username? It's created automatically. Returning? Use the same password — this is a local demo account, not a secure login.",
    "login.quick_picks_title":"// Or pick up an existing card",
    "login.card_stock":"Card stock #EQ-2026 · SQU demo instance",

    "dept.biology":"Biology","dept.chemistry":"Chemistry","dept.physics":"Physics",
    "dept.engineering":"Engineering","dept.materials":"Materials Science",

    "nav.dashboard":"Dashboard","nav.inventory":"Inventory","nav.requests":"Requests",
    "nav.bookings":"Bookings","nav.issues":"Issues","nav.reports":"Reports",

    "dash.eyebrow":"// 01 · Overview","dash.welcome":"Welcome back, {name}",
    "dash.sub":"Live status of every instrument SQU owns, and what's moved this term.",
    "dash.kpi_total":"Total equipment","dash.kpi_available":"Available","dash.kpi_inuse":"In use",
    "dash.kpi_maintenance":"Under maintenance","dash.kpi_pending":"Pending requests","dash.kpi_issues":"Open issues",
    "dash.chart_dept_title":"Equipment by department","dash.chart_dept_sub":"Total registered items per college",
    "dash.chart_status_title":"Status breakdown","dash.chart_status_sub":"Across the full registry",
    "dash.chart_trend_title":"Checkouts, last 6 months","dash.chart_trend_sub":"Approved sign-outs across all departments",
    "dash.activity_title":"Recent activity","dash.activity_sub":"What's moved on the registry",
    "dash.no_activity":"No activity logged yet.",

    "inv.eyebrow":"// 02 · Registry","inv.title":"Inventory",
    "inv.sub":"Search everything SQU owns before requesting something new.",
    "inv.search_ph":"Search by name, category, tag, or location…",
    "inv.all_departments":"All departments","inv.all_statuses":"All statuses",
    "inv.no_match_title":"// no matches","inv.no_match_sub":"Nothing in the registry fits that search. Try clearing a filter.",
    "inv.idle":"idle {days}d","inv.used_today":"used today","inv.used_ago":"used {days}d ago",

    "status.available":"Available","status.inuse":"In Use","status.maintenance":"Maintenance","status.retired":"Retired",
    "cond.excellent":"Excellent","cond.good":"Good","cond.fair":"Fair","cond.needsreview":"Needs Review",

    "req.eyebrow":"// 03 · Checkouts","req.title_manager":"Requests to review","req.title_researcher":"My requests",
    "req.sub_manager":"Approve or deny checkout requests across every department.",
    "req.sub_researcher":"Everything you've asked to check out, and where it stands.",
    "req.col_item":"Item","req.col_by":"Requested by","req.col_purpose":"Purpose","req.col_status":"Status","req.col_submitted":"Submitted",
    "req.empty_title":"// nothing here yet","req.empty_sub":"No requests to show. Head to Inventory to check something out.",
    "reqstatus.pending":"Pending","reqstatus.approved":"Approved","reqstatus.denied":"Denied","reqstatus.returned":"Returned",

    "bk.eyebrow":"// 04 · Schedule","bk.title":"Bookings",
    "bk.sub":"Reserve a future time slot, even on equipment that's busy right now.",
    "bk.col_item":"Item","bk.col_by":"Booked by","bk.col_when":"When","bk.col_purpose":"Purpose","bk.col_status":"Status",
    "bk.empty_title":"// nothing scheduled","bk.empty_sub":"No bookings yet. Reserve a slot from any item in Inventory.",
    "bk.modal_title":"Book a time slot","bk.field_date":"Date","bk.field_start":"Start time","bk.field_end":"End time",
    "bk.field_purpose_ph":"e.g. Running a scheduled batch for the thesis cohort","bk.submit":"Reserve slot",
    "bkstatus.upcoming":"Upcoming","bkstatus.cancelled":"Cancelled",

    "is.eyebrow":"// 05 · Faults","is.title":"Issue reports",
    "is.sub":"Flag a problem with an item — critical reports take it out of service automatically.",
    "is.col_item":"Item","is.col_by":"Reported by","is.col_severity":"Severity","is.col_description":"Description","is.col_status":"Status",
    "is.empty_title":"// nothing reported","is.empty_sub":"No open issues. Report one from any item in Inventory.",
    "is.modal_title":"Report an issue","is.field_severity":"Severity","is.field_desc_label":"What's wrong?",
    "is.field_desc_ph":"e.g. Display shows an error code and won't power on","is.submit":"Submit report",
    "sev.minor":"Minor","sev.major":"Major","sev.critical":"Critical",
    "isstatus.open":"Open","isstatus.resolved":"Resolved",

    "rep.eyebrow":"// 06 · Insights","rep.title":"Reports",
    "rep.sub":"Where equipment sits idle, and what departments are actually asking for.",
    "rep.idle_title":"Idle 90+ days — candidates to reassign","rep.idle_sub":"Sorted by longest since last checkout",
    "rep.idle_empty":"Nothing has sat idle for 90+ days right now.",
    "rep.idle_row":"{dept} · idle {days} days · est. value {value} OMR",
    "rep.ranked_title":"Most requested, this term","rep.ranked_sub":"Ranked by number of checkout requests logged",
    "rep.ranked_empty":"No requests logged yet — once researchers start checking things out, this list fills in.",

    "modal.request_title":"Request equipment","modal.purpose_label":"What's it for?",
    "modal.purpose_ph":"e.g. Running qPCR validation for the graduate thesis cohort","modal.submit":"Submit request",

    "asst.title":"EquipUse Assistant","asst.sub":"Checks the registry before you buy anything new",
    "asst.placeholder":"Describe a project or ask what's available…",
    "asst.greeting":"Hi {name} — I'm the EquipUse Assistant. Ask what's available in any department, describe a project and I'll plan it from existing inventory first, or ask how much reuse has saved this term.",
    "asst.chip_available":"What's available in {dept}?",
    "asst.chip_project":"I'm planning a PCR & gel project — what do I need?",
    "asst.chip_savings":"How much have we saved?",
    "asst.unreachable":"I couldn't reach the server just now — try again in a moment.",
    "asst.avail_none":"Nothing is currently available in {dept} — everything's checked out or in service.",
    "asst.avail_some":"Available in {dept} — {count} match{plural} in the registry.",
    "asst.cat_none":"Nothing matching \"{term}\" is in the registry.",
    "asst.cat_some":"{count} match{plural} for \"{term}\".",
    "asst.project_summary":"Project plan — {count} component{plural} identified. {available} already available · {reservable} reservable · {missing} need new purchase.",
    "asst.project_missing":"Nothing in the registry covers this — flag for procurement.",
    "asst.savings":"Est. {total} OMR avoided this term by reusing equipment already in the registry instead of buying new.",
    "asst.fallback":"I can answer questions about what's available by department, plan a project from existing kit, or estimate savings from reuse — try one of the prompts below, or ask in your own words.",

    "activity.request":"{user} — {verb} {item}","activity.booking":"{user} booked {item}",
    "activity.issue":"{user} flagged an issue on {item}",

    "toast.username_required":"Enter a username to sign the card.","toast.password_required":"Enter a password.",
    "toast.invalid_credentials":"Incorrect password for that username.","toast.login_failed":"Sign-in failed — check the server is running.",
    "toast.purpose_required":"Add a short reason for the request.","toast.request_submitted":"Request submitted for review.",
    "toast.request_failed":"Could not submit the request — try again.","toast.approved":"Request approved — item marked in use.",
    "toast.denied":"Request denied.","toast.request_update_failed":"Could not update the request.",
    "toast.returned":"Marked as returned — available again.","toast.server_unreachable":"Could not reach the server — is it running on this port?",
    "toast.booking_submitted":"Slot reserved.","toast.booking_failed":"Could not reserve that slot.",
    "toast.booking_cancelled":"Booking cancelled.","toast.issue_submitted":"Issue reported.",
    "toast.issue_failed":"Could not submit the report.","toast.issue_resolved":"Issue marked resolved.",
    "toast.desc_required":"Describe what's wrong.","toast.item_unavailable":"That item is currently {status}.",
  },
  ar: {
    "common.request":"طلب","common.book":"حجز","common.report_issue":"الإبلاغ عن عطل",
    "common.approve":"موافقة","common.deny":"رفض","common.cancel":"إلغاء",
    "common.mark_returned":"تمت الإعادة","common.resolve":"إغلاق البلاغ","common.close":"إغلاق",
    "common.use_this":"استخدام هذا","common.view_item":"عرض العنصر","common.sign_out":"↺ تسجيل الخروج",

    "login.brand_sub":"تسجيل خروج ومتابعة معدات البحث العلمي",
    "login.card_title":"// وقّع بطاقة الاستعارة",
    "login.field_username":"اسم المستخدم","login.field_username_ph":"مثال: layla.h",
    "login.field_password":"كلمة المرور","login.field_password_ph":"اختر كلمة مرور أو أدخلها",
    "login.field_role":"تسجيل الدخول باسم",
    "login.role_researcher":"باحث","login.role_manager":"مدير المختبر",
    "login.submit":"توقيع البطاقة والدخول ←",
    "login.hint":"اسم مستخدم جديد؟ يُنشأ تلقائيًا. عائد؟ استخدم نفس كلمة المرور — هذا حساب تجريبي محلي وليس تسجيل دخول آمن.",
    "login.quick_picks_title":"// أو اختر بطاقة موجودة",
    "login.card_stock":"رقم البطاقة #EQ-2026 · نسخة تجريبية لجامعة السلطان قابوس",

    "dept.biology":"الأحياء","dept.chemistry":"الكيمياء","dept.physics":"الفيزياء",
    "dept.engineering":"الهندسة","dept.materials":"علوم المواد",

    "nav.dashboard":"الرئيسية","nav.inventory":"المخزون","nav.requests":"الطلبات",
    "nav.bookings":"الحجوزات","nav.issues":"الأعطال","nav.reports":"التقارير",

    "dash.eyebrow":"// ٠١ · نظرة عامة","dash.welcome":"مرحبًا بعودتك، {name}",
    "dash.sub":"الحالة الحيّة لكل جهاز تملكه الجامعة، وما تغيّر هذا الفصل.",
    "dash.kpi_total":"إجمالي المعدات","dash.kpi_available":"متاح","dash.kpi_inuse":"قيد الاستخدام",
    "dash.kpi_maintenance":"تحت الصيانة","dash.kpi_pending":"طلبات معلقة","dash.kpi_issues":"أعطال مفتوحة",
    "dash.chart_dept_title":"المعدات حسب القسم","dash.chart_dept_sub":"إجمالي العناصر المسجّلة لكل كلية",
    "dash.chart_status_title":"توزيع الحالة","dash.chart_status_sub":"عبر كامل السجل",
    "dash.chart_trend_title":"الاستعارات خلال ٦ أشهر","dash.chart_trend_sub":"الطلبات المعتمدة عبر جميع الأقسام",
    "dash.activity_title":"النشاط الأخير","dash.activity_sub":"آخر التحركات في السجل",
    "dash.no_activity":"لا يوجد نشاط مسجّل بعد.",

    "inv.eyebrow":"// ٠٢ · السجل","inv.title":"المخزون",
    "inv.sub":"ابحث في كل ما تملكه الجامعة قبل طلب شراء جديد.",
    "inv.search_ph":"ابحث بالاسم أو الفئة أو الرقم أو الموقع…",
    "inv.all_departments":"كل الأقسام","inv.all_statuses":"كل الحالات",
    "inv.no_match_title":"// لا نتائج","inv.no_match_sub":"لا يوجد في السجل ما يطابق هذا البحث. جرّب إزالة أحد الفلاتر.",
    "inv.idle":"معطّل {days} يوم","inv.used_today":"استُخدم اليوم","inv.used_ago":"استُخدم قبل {days} يوم",

    "status.available":"متاح","status.inuse":"قيد الاستخدام","status.maintenance":"تحت الصيانة","status.retired":"خارج الخدمة",
    "cond.excellent":"ممتاز","cond.good":"جيد","cond.fair":"مقبول","cond.needsreview":"يحتاج فحص",

    "req.eyebrow":"// ٠٣ · الاستعارات","req.title_manager":"طلبات للمراجعة","req.title_researcher":"طلباتي",
    "req.sub_manager":"وافق أو ارفض طلبات الاستعارة من جميع الأقسام.",
    "req.sub_researcher":"كل ما طلبت استعارته، وحالته الآن.",
    "req.col_item":"العنصر","req.col_by":"مقدَّم من","req.col_purpose":"الغرض","req.col_status":"الحالة","req.col_submitted":"تاريخ التقديم",
    "req.empty_title":"// لا شيء هنا بعد","req.empty_sub":"لا توجد طلبات لعرضها. توجّه إلى المخزون لاستعارة جهاز.",
    "reqstatus.pending":"قيد الانتظار","reqstatus.approved":"تمت الموافقة","reqstatus.denied":"مرفوض","reqstatus.returned":"تمت الإعادة",

    "bk.eyebrow":"// ٠٤ · الجدولة","bk.title":"الحجوزات",
    "bk.sub":"احجز موعدًا مستقبليًا حتى لو كان الجهاز مشغولًا الآن.",
    "bk.col_item":"العنصر","bk.col_by":"حجزه","bk.col_when":"الموعد","bk.col_purpose":"الغرض","bk.col_status":"الحالة",
    "bk.empty_title":"// لا حجوزات","bk.empty_sub":"لا توجد حجوزات بعد. احجز موعدًا من أي عنصر في المخزون.",
    "bk.modal_title":"حجز موعد","bk.field_date":"التاريخ","bk.field_start":"وقت البداية","bk.field_end":"وقت النهاية",
    "bk.field_purpose_ph":"مثال: تشغيل دفعة مجدولة لمجموعة الرسالة","bk.submit":"تأكيد الحجز",
    "bkstatus.upcoming":"قادم","bkstatus.cancelled":"ملغى",

    "is.eyebrow":"// ٠٥ · الأعطال","is.title":"بلاغات الأعطال",
    "is.sub":"أبلغ عن مشكلة في جهاز — البلاغات الحرجة تخرجه من الخدمة تلقائيًا.",
    "is.col_item":"العنصر","is.col_by":"أبلغ عنه","is.col_severity":"الخطورة","is.col_description":"الوصف","is.col_status":"الحالة",
    "is.empty_title":"// لا بلاغات","is.empty_sub":"لا توجد أعطال مفتوحة. أبلغ عن عطل من أي عنصر في المخزون.",
    "is.modal_title":"الإبلاغ عن عطل","is.field_severity":"الخطورة","is.field_desc_label":"ما المشكلة؟",
    "is.field_desc_ph":"مثال: الشاشة تعرض رمز خطأ ولا تعمل","is.submit":"إرسال البلاغ",
    "sev.minor":"بسيط","sev.major":"متوسط","sev.critical":"حرج",
    "isstatus.open":"مفتوح","isstatus.resolved":"مغلق",

    "rep.eyebrow":"// ٠٦ · التحليلات","rep.title":"التقارير",
    "rep.sub":"أين تتوقف المعدات دون استخدام، وما الذي تطلبه الأقسام فعليًا.",
    "rep.idle_title":"معطّلة ٩٠+ يومًا — مرشّحة لإعادة التوزيع","rep.idle_sub":"مرتبة حسب أطول مدة منذ آخر استخدام",
    "rep.idle_empty":"لا يوجد حاليًا ما هو معطّل لأكثر من ٩٠ يومًا.",
    "rep.idle_row":"{dept} · معطّل {days} يوم · القيمة التقديرية {value} ريال عماني",
    "rep.ranked_title":"الأكثر طلبًا هذا الفصل","rep.ranked_sub":"مرتبة حسب عدد طلبات الاستعارة المسجّلة",
    "rep.ranked_empty":"لا توجد طلبات مسجّلة بعد — بمجرد أن يبدأ الباحثون بالاستعارة، ستظهر هنا.",

    "modal.request_title":"طلب استعارة","modal.purpose_label":"ما الغرض من الاستخدام؟",
    "modal.purpose_ph":"مثال: تشغيل PCR للتحقق من نتائج رسالة الماجستير","modal.submit":"إرسال الطلب",

    "asst.title":"مساعد EquipUse","asst.sub":"يراجع السجل قبل أن تشتري أي شيء جديد",
    "asst.placeholder":"صف مشروعك أو اسأل عمّا هو متاح…",
    "asst.greeting":"مرحبًا {name} — أنا مساعد EquipUse. اسألني عمّا هو متاح في أي قسم، أو صف مشروعًا وسأخطط له من المخزون الحالي أولًا، أو اسأل كم وفّرنا من إعادة الاستخدام هذا الفصل.",
    "asst.chip_available":"ما المتاح في {dept}؟",
    "asst.chip_project":"أخطط لمشروع PCR وترحيل هلامي — ماذا أحتاج؟",
    "asst.chip_savings":"كم وفّرنا؟",
    "asst.unreachable":"تعذّر الوصول إلى الخادم الآن — حاول مرة أخرى بعد قليل.",
    "asst.avail_none":"لا يوجد حاليًا ما هو متاح في {dept} — كل شيء مستعار أو تحت الصيانة.",
    "asst.avail_some":"المتاح في {dept} — {count} نتيجة في السجل.",
    "asst.cat_none":"لا يوجد في السجل ما يطابق \"{term}\".",
    "asst.cat_some":"{count} نتيجة لـ \"{term}\".",
    "asst.project_summary":"خطة المشروع — تم تحديد {count} عنصر. {available} متاح الآن · {reservable} يمكن حجزه · {missing} يحتاج شراء جديد.",
    "asst.project_missing":"لا يوجد في السجل ما يغطي هذا — يُرفع للشراء.",
    "asst.savings":"وفّرت إعادة الاستخدام هذا الفصل حوالي {total} ريال عماني بدلًا من الشراء الجديد.",
    "asst.fallback":"يمكنني الإجابة عن المتاح حسب القسم، أو تخطيط مشروع من المعدات الحالية، أو تقدير التوفير من إعادة الاستخدام — جرّب أحد الاقتراحات أدناه أو اسأل بأسلوبك الخاص.",

    "activity.request":"{user} — {verb} {item}","activity.booking":"{user} حجز {item}",
    "activity.issue":"{user} أبلغ عن عطل في {item}",

    "toast.username_required":"أدخل اسم مستخدم لتوقيع البطاقة.","toast.password_required":"أدخل كلمة المرور.",
    "toast.invalid_credentials":"كلمة المرور غير صحيحة لهذا المستخدم.","toast.login_failed":"فشل تسجيل الدخول — تحقق من تشغيل الخادم.",
    "toast.purpose_required":"أضف سببًا مختصرًا للطلب.","toast.request_submitted":"تم إرسال الطلب للمراجعة.",
    "toast.request_failed":"تعذّر إرسال الطلب — حاول مرة أخرى.","toast.approved":"تمت الموافقة على الطلب — الجهاز الآن قيد الاستخدام.",
    "toast.denied":"تم رفض الطلب.","toast.request_update_failed":"تعذّر تحديث الطلب.",
    "toast.returned":"تم تسجيله كمُعاد — متاح من جديد.","toast.server_unreachable":"تعذّر الوصول إلى الخادم — تأكد أنه يعمل على هذا المنفذ.",
    "toast.booking_submitted":"تم حجز الموعد.","toast.booking_failed":"تعذّر حجز هذا الموعد.",
    "toast.booking_cancelled":"تم إلغاء الحجز.","toast.issue_submitted":"تم إرسال البلاغ.",
    "toast.issue_failed":"تعذّر إرسال البلاغ.","toast.issue_resolved":"تم إغلاق البلاغ.",
    "toast.desc_required":"صف المشكلة.","toast.item_unavailable":"هذا العنصر حاليًا {status}.",
  }
};

let LANG = 'en';
function t(key, vars){
  let s = (I18N[LANG] && I18N[LANG][key]) || I18N.en[key] || key;
  if(vars){ Object.keys(vars).forEach(k=>{ s = s.replace(new RegExp('\\{'+k+'\\}','g'), vars[k]); }); }
  return s;
}

function applyI18n(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent = t(el.getAttribute('data-i18n')); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{ el.placeholder = t(el.getAttribute('data-i18n-placeholder')); });
  document.querySelectorAll('.lang-opt').forEach(el=>{ el.classList.toggle('active', el.dataset.lang===LANG); });
}

function setLanguage(lang){
  LANG = lang;
  try{ localStorage.setItem('equipuse_lang', lang); }catch(e){}
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang==='ar' ? 'rtl' : 'ltr');
  applyI18n();
  if(identity){ buildNav(); navigate(activeView); if(assistantStarted) startAssistant(); }
}

function toggleTheme(){
  const cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', cur);
  try{ localStorage.setItem('equipuse_theme', cur); }catch(e){}
}

/* ---------- enum → i18n-key helpers (canonical data stays in English) ---------- */
function trStatus(s){ return t('status.'+({'Available':'available','In Use':'inuse','Maintenance':'maintenance','Retired':'retired'}[s]||'')); }
function trCond(c){ return t('cond.'+({'Excellent':'excellent','Good':'good','Fair':'fair','Needs Review':'needsreview'}[c]||'')); }
function trReqStatus(s){ return t('reqstatus.'+({'Pending':'pending','Approved':'approved','Denied':'denied','Returned':'returned'}[s]||'')); }
function trBkStatus(s){ return t('bkstatus.'+({'Upcoming':'upcoming','Cancelled':'cancelled'}[s]||'')); }
function trIsStatus(s){ return t('isstatus.'+({'Open':'open','Resolved':'resolved'}[s]||'')); }
function trSev(s){ return t('sev.'+({'Minor':'minor','Major':'major','Critical':'critical'}[s]||'')); }
function trDept(d){ return t('dept.'+({'Biology':'biology','Chemistry':'chemistry','Physics':'physics','Engineering':'engineering','Materials Science':'materials'}[d]||'')); }

/* ============================================================
   STATE
   ============================================================ */
const TAB_DEFS = [
  {id:'dashboard', key:'nav.dashboard'},
  {id:'inventory', key:'nav.inventory'},
  {id:'requests', key:'nav.requests'},
  {id:'bookings', key:'nav.bookings'},
  {id:'issues', key:'nav.issues'},
  {id:'reports', key:'nav.reports'},
];
const DEPTS = ['Biology','Chemistry','Physics','Engineering','Materials Science'];
const ASSISTANT_EXAMPLE_DEPT = 'Biology';
const STATUS_COLORS = {Available:'#4B7A52', 'In Use':'#C79323', Maintenance:'#B3453D', Retired:'#848C7D'};

let identity = null;
let EQUIPMENT = [], REQUESTS = [], USERS = [], TREND = [], BOOKINGS = [], ISSUES = [];
let activeView = 'dashboard';
let pendingRequestItem = null, pendingBookingItem = null, pendingIssueItem = null;

function uid(prefix){ return prefix + '-' + Date.now().toString(36) + Math.random().toString(36).slice(2,6); }
function escapeHtml(s){ return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }

/* ---------- API client (talks to the Express backend in server.js) ---------- */
const API = '/api';
async function api(path, opts={}){
  const res = await fetch(API+path, {
    method: opts.method||'GET',
    headers: {'Content-Type':'application/json'},
    body: opts.body ? JSON.stringify(opts.body) : undefined
  });
  if(!res.ok){
    const msg = await res.text().catch(()=>res.statusText);
    throw new Error(msg || ('Request failed: '+res.status));
  }
  return res.json();
}

async function bootData(){
  try{
    const state = await api('/state');
    EQUIPMENT = state.equipment; USERS = state.users; REQUESTS = state.requests;
    TREND = state.trend; BOOKINGS = state.bookings || []; ISSUES = state.issues || [];
  }catch(e){
    console.error('Could not reach the EquipUse server.', e);
    toast(t('toast.server_unreachable'));
  }
}

/* ============================================================
   LOGIN
   ============================================================ */
function selectRole(el){
  document.querySelectorAll('.role-opt').forEach(o=>o.classList.remove('active'));
  el.classList.add('active');
}

function renderQuickPicks(){
  const wrap = document.getElementById('quick-picks');
  const list = document.getElementById('quick-picks-list');
  if(!USERS.length){ wrap.style.display='none'; return; }
  wrap.style.display='block';
  list.innerHTML = USERS.map(u=>{
    const color = u.role==='Manager' ? 'var(--accent)' : 'var(--green)';
    return `<span class="pick-chip" onclick='pickUser(${JSON.stringify(u.id)})'>
      <span class="pick-dot" style="background:${color}"></span>${escapeHtml(u.username)} · ${u.role==='Manager'?t('login.role_manager'):t('login.role_researcher')}
    </span>`;
  }).join('');
}

function pickUser(id){
  const u = USERS.find(x=>x.id===id);
  if(!u) return;
  identity = {...u};
  enterApp();
}

async function handleLogin(){
  const username = document.getElementById('in-username').value.trim();
  const password = document.getElementById('in-password').value;
  const role = document.querySelector('.role-opt.active').dataset.role;
  if(!username){ toast(t('toast.username_required')); return; }
  if(!password){ toast(t('toast.password_required')); return; }
  try{
    const {user, users} = await api('/login', {method:'POST', body:{username, password, role}});
    identity = user; USERS = users;
    enterApp();
  }catch(e){
    if(e.message && /incorrect password/i.test(e.message)) toast(t('toast.invalid_credentials'));
    else toast(t('toast.login_failed'));
  }
}

function signOut(){
  identity = null;
  document.getElementById('screen-app').classList.remove('active');
  document.getElementById('screen-login').style.display='flex';
  document.getElementById('assist-panel').classList.remove('open');
  renderQuickPicks();
}

function enterApp(){
  document.getElementById('screen-login').style.display='none';
  document.getElementById('screen-app').classList.add('active');
  document.getElementById('id-name').textContent = identity.username;
  document.getElementById('id-role').textContent = identity.role==='Manager'?t('login.role_manager'):t('login.role_researcher');
  buildNav();
  navigate('dashboard');
  resetAssistant();
}

/* ============================================================
   NAV
   ============================================================ */
function buildNav(){
  const items = TAB_DEFS.map((tb,i)=>`<div class="nav-tab" data-tab="${tb.id}" onclick="navigate('${tb.id}')"><span class="idx">0${i+1}</span> ${t(tb.key)}</div>`).join('');
  document.getElementById('sidebar-tabs').innerHTML = items;
  document.getElementById('topbar-tabs').innerHTML = items;
}

function navigate(view){
  activeView = view;
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('view-'+view).classList.add('active');
  document.querySelectorAll('.nav-tab').forEach(n=>n.classList.toggle('active', n.dataset.tab===view));
  document.getElementById('id-role').textContent = identity.role==='Manager'?t('login.role_manager'):t('login.role_researcher');
  if(view==='dashboard') renderDashboard();
  if(view==='inventory') renderInventory();
  if(view==='requests') renderRequests();
  if(view==='bookings') renderBookings();
  if(view==='issues') renderIssues();
  if(view==='reports') renderReports();
}

/* ============================================================
   CHARTS (hand-built SVG, no dependencies)
   ============================================================ */
function svgBarChart(data, opts={}){
  const width=opts.width||480, height=opts.height||210, color=opts.color||'#38477F';
  const max = Math.max(...data.map(d=>d.value), 1);
  const padL=8, padB=24, padT=16, padR=8;
  const chartW = width-padL-padR, chartH = height-padT-padB;
  const gap = chartW/data.length;
  const bw = gap*0.55;
  let bars='';
  data.forEach((d,i)=>{
    const h = (d.value/max)*chartH;
    const x = padL + i*gap + (gap-bw)/2;
    const y = padT + (chartH-h);
    bars += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${bw.toFixed(1)}" height="${h.toFixed(1)}" rx="2" fill="${color}"/>`;
    bars += `<text x="${(x+bw/2).toFixed(1)}" y="${height-8}" text-anchor="middle" class="chart-label">${d.label}</text>`;
    bars += `<text x="${(x+bw/2).toFixed(1)}" y="${(y-6).toFixed(1)}" text-anchor="middle" class="chart-value">${d.value}</text>`;
  });
  return `<svg viewBox="0 0 ${width} ${height}" class="chart-svg" role="img" aria-label="Bar chart">${bars}<line x1="${padL}" y1="${padT+chartH}" x2="${width-padR}" y2="${padT+chartH}" class="chart-axis"/></svg>`;
}

function svgDonut(data, opts={}){
  const size = opts.size||150, thickness = opts.thickness||24;
  const total = data.reduce((a,d)=>a+d.value,0) || 1;
  const r = (size-thickness)/2, cx=size/2, cy=size/2;
  const circ = 2*Math.PI*r;
  let offset=0, segs='';
  data.forEach(d=>{
    const frac = d.value/total, len = circ*frac;
    segs += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${d.color}" stroke-width="${thickness}" stroke-dasharray="${len.toFixed(1)} ${(circ-len).toFixed(1)}" stroke-dashoffset="${(-offset).toFixed(1)}" transform="rotate(-90 ${cx} ${cy})"/>`;
    offset += len;
  });
  return `<svg viewBox="0 0 ${size} ${size}" class="chart-svg" role="img" aria-label="Donut chart">${segs}</svg>`;
}

function svgLine(data, opts={}){
  const width=opts.width||480, height=opts.height||200, color=opts.color||'#38477F';
  const max = Math.max(...data.map(d=>d.value), 1);
  const padL=10, padB=24, padT=16, padR=10;
  const chartW = width-padL-padR, chartH = height-padT-padB;
  const stepX = data.length>1 ? chartW/(data.length-1) : 0;
  const pts = data.map((d,i)=>({
    x: padL+i*stepX, y: padT+chartH-(d.value/max)*chartH, label:d.label, value:d.value
  }));
  const poly = pts.map(p=>`${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  let dots='';
  pts.forEach(p=>{
    dots += `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="3.5" fill="${color}"/>`;
    dots += `<text x="${p.x.toFixed(1)}" y="${height-8}" text-anchor="middle" class="chart-label">${p.label}</text>`;
  });
  return `<svg viewBox="0 0 ${width} ${height}" class="chart-svg" role="img" aria-label="Line chart">
    <polyline points="${poly}" fill="none" stroke="${color}" stroke-width="2.5"/>${dots}
    <line x1="${padL}" y1="${padT+chartH}" x2="${width-padR}" y2="${padT+chartH}" class="chart-axis"/></svg>`;
}

/* ============================================================
   DASHBOARD
   ============================================================ */
function statusVerb(s){
  return {'Pending':t('reqstatus.pending'),'Approved':t('reqstatus.approved'),'Denied':t('reqstatus.denied'),'Returned':t('reqstatus.returned')}[s] || s;
}
function timeAgo(ts){
  const diff = Date.now()-ts;
  const h = Math.floor(diff/3600000);
  if(h<1) return 'now';
  if(h<24) return h+'h';
  return Math.floor(h/24)+'d';
}

function renderDashboard(){
  document.getElementById('dash-greeting').textContent = t('dash.welcome', {name: identity.username});

  const total = EQUIPMENT.length;
  const available = EQUIPMENT.filter(e=>e.status==='Available').length;
  const inUse = EQUIPMENT.filter(e=>e.status==='In Use').length;
  const maint = EQUIPMENT.filter(e=>e.status==='Maintenance').length;
  const pending = REQUESTS.filter(r=>r.status==='Pending').length;
  const openIssues = ISSUES.filter(i=>i.status==='Open').length;

  document.getElementById('kpi-grid').innerHTML = `
    <div class="panel kpi"><p class="eyebrow">${t('dash.kpi_total')}</p><div class="num">${total}</div><div class="lbl">${t('dash.kpi_total')}</div></div>
    <div class="panel kpi"><p class="eyebrow">${t('dash.kpi_available')}</p><div class="num">${available}</div><div class="lbl">${t('dash.kpi_available')}</div></div>
    <div class="panel kpi"><p class="eyebrow">${t('dash.kpi_inuse')}</p><div class="num">${inUse}</div><div class="lbl">${t('dash.kpi_inuse')}</div></div>
    <div class="panel kpi"><p class="eyebrow">${t('dash.kpi_maintenance')}</p><div class="num">${maint}</div><div class="lbl">${t('dash.kpi_maintenance')}</div></div>
    <div class="panel kpi"><p class="eyebrow">${t('dash.kpi_pending')}</p><div class="num">${pending}</div><div class="lbl">${t('dash.kpi_pending')}</div></div>
    <div class="panel kpi"><p class="eyebrow">${t('dash.kpi_issues')}</p><div class="num">${openIssues}</div><div class="lbl">${t('dash.kpi_issues')}</div></div>
  `;

  const byDept = DEPTS.map(d=>({label: trDept(d).split(' ')[0], value: EQUIPMENT.filter(e=>e.department===d).length}));
  document.getElementById('chart-dept').innerHTML = svgBarChart(byDept, {color:'#38477F'});

  const statusData = [
    {label:trStatus('Available'), value:available, color:STATUS_COLORS['Available']},
    {label:trStatus('In Use'), value:inUse, color:STATUS_COLORS['In Use']},
    {label:trStatus('Maintenance'), value:maint, color:STATUS_COLORS['Maintenance']},
    {label:trStatus('Retired'), value:EQUIPMENT.filter(e=>e.status==='Retired').length, color:STATUS_COLORS['Retired']},
  ];
  document.getElementById('chart-status').innerHTML = svgDonut(statusData);
  document.getElementById('legend-status').innerHTML = statusData.map(s=>
    `<div class="legend-row"><span class="legend-dot" style="background:${s.color}"></span>${s.label}<span class="v">${s.value}</span></div>`
  ).join('');

  document.getElementById('chart-trend').innerHTML = svgLine(TREND.map(tr=>({label:tr.month, value:tr.count})), {color:'#C79323'});

  const events = [
    ...REQUESTS.map(r=>({ts:r.createdAt, text:t('activity.request',{user:r.requesterName, verb:statusVerb(r.status), item:r.equipmentName})})),
    ...BOOKINGS.map(b=>({ts:b.createdAt, text:t('activity.booking',{user:b.userName, item:b.equipmentName})})),
    ...ISSUES.map(i=>({ts:i.createdAt, text:t('activity.issue',{user:i.reporterName, item:i.equipmentName})})),
  ].sort((a,b)=>b.ts-a.ts).slice(0,6);

  document.getElementById('activity-feed').innerHTML = events.length ? events.map(e=>`
    <div class="activity-row"><span class="t">${timeAgo(e.ts)}</span><span>${escapeHtml(e.text)}</span></div>
  `).join('') : `<p class="sub">${t('dash.no_activity')}</p>`;
}

/* ============================================================
   INVENTORY
   ============================================================ */
function populateDeptFilter(){
  const sel = document.getElementById('inv-dept');
  const cur = sel.value;
  sel.innerHTML = `<option value="">${t('inv.all_departments')}</option>` +
    DEPTS.map(d=>`<option value="${d}">${trDept(d)}</option>`).join('');
  sel.value = cur;
}

function statusClass(s){ return {'Available':'st-available','In Use':'st-inuse','Maintenance':'st-maintenance','Retired':'st-retired'}[s]||''; }
function bkStatusClass(s){ return {'Upcoming':'st-upcoming','Cancelled':'st-cancelled'}[s]||''; }
function isStatusClass(s){ return {'Open':'st-open','Resolved':'st-resolved'}[s]||''; }
function sevClass(s){ return {'Minor':'sev-minor','Major':'sev-major','Critical':'sev-critical'}[s]||''; }

function renderInventory(){
  populateDeptFilter();
  const q = document.getElementById('inv-search').value.trim().toLowerCase();
  const dept = document.getElementById('inv-dept').value;
  const status = document.getElementById('inv-status').value;

  let items = EQUIPMENT.filter(e=>{
    if(dept && e.department!==dept) return false;
    if(status && e.status!==status) return false;
    if(q && !(e.name.toLowerCase().includes(q) || e.category.toLowerCase().includes(q) || e.id.toLowerCase().includes(q) || e.location.toLowerCase().includes(q))) return false;
    return true;
  });

  const grid = document.getElementById('eq-grid');
  if(!items.length){
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;">
      <p class="eyebrow">${t('inv.no_match_title')}</p><p>${t('inv.no_match_sub')}</p>
    </div>`;
    return;
  }

  grid.innerHTML = items.map(e=>`
    <div class="panel eq-card">
      <div class="eq-top">
        <div>
          <div class="eq-name">${escapeHtml(e.name)}</div>
          <div class="eq-tag">${e.id} · ${escapeHtml(e.category)}</div>
        </div>
        <span class="sticker ${statusClass(e.status)}"><span class="dot"></span>${trStatus(e.status)}</span>
      </div>
      <div class="eq-meta">${trDept(e.department)} · ${escapeHtml(e.location)}</div>
      <div class="eq-foot">
        <span class="cond-tag">${trCond(e.condition)}</span>
        ${e.idleDays>=90 ? `<span class="eq-idle">${t('inv.idle',{days:e.idleDays})}</span>` : `<span class="eq-meta" style="font-size:11px;">${e.idleDays===0?t('inv.used_today'):t('inv.used_ago',{days:e.idleDays})}</span>`}
      </div>
      <button class="btn btn-sm ${e.status==='Available'?'btn-primary':'btn-ghost'}" ${e.status==='Available'?'':'disabled'} onclick='openRequestModal(${JSON.stringify(e.id)})'>
        ${e.status==='Available' ? t('common.request') : trStatus(e.status)}
      </button>
      <div class="eq-actions">
        ${e.status!=='Retired' ? `<button class="icon-link" onclick='openBookingModal(${JSON.stringify(e.id)})'>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>${t('common.book')}
        </button>` : ''}
        <button class="icon-link" onclick='openIssueModal(${JSON.stringify(e.id)})'>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4M12 17h.01"/><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/></svg>${t('common.report_issue')}
        </button>
      </div>
    </div>
  `).join('');
}

/* ---------- request modal ---------- */
function openRequestModal(id){
  pendingRequestItem = EQUIPMENT.find(e=>e.id===id);
  if(!pendingRequestItem) return;
  document.getElementById('modal-item-name').textContent = pendingRequestItem.name + ' · ' + pendingRequestItem.location;
  document.getElementById('modal-purpose').value = '';
  document.getElementById('modal-overlay').classList.add('active');
}
function closeModal(){ document.getElementById('modal-overlay').classList.remove('active'); pendingRequestItem = null; }
document.getElementById('modal-submit').addEventListener('click', async ()=>{
  if(!pendingRequestItem) return;
  const purpose = document.getElementById('modal-purpose').value.trim();
  if(!purpose){ toast(t('toast.purpose_required')); return; }
  try{
    const {requests} = await api('/requests', {method:'POST', body:{
      equipmentId: pendingRequestItem.id, requesterId: identity.id, requesterName: identity.username,
      department: pendingRequestItem.department, purpose
    }});
    REQUESTS = requests;
    closeModal();
    toast(t('toast.request_submitted'));
    if(activeView==='inventory') renderInventory();
    if(activeView==='dashboard') renderDashboard();
  }catch(e){ toast(t('toast.request_failed')); }
});

/* ---------- booking modal ---------- */
function openBookingModal(id){
  pendingBookingItem = EQUIPMENT.find(e=>e.id===id);
  if(!pendingBookingItem) return;
  document.getElementById('booking-modal-item-name').textContent = pendingBookingItem.name + ' · ' + pendingBookingItem.location;
  const dateInput = document.getElementById('booking-date');
  if(!dateInput.value){ dateInput.value = new Date(Date.now()+86400000).toISOString().slice(0,10); }
  dateInput.min = new Date().toISOString().slice(0,10);
  document.getElementById('booking-purpose').value = '';
  document.getElementById('booking-modal-overlay').classList.add('active');
}
function closeBookingModal(){ document.getElementById('booking-modal-overlay').classList.remove('active'); pendingBookingItem = null; }
document.getElementById('booking-modal-submit').addEventListener('click', async ()=>{
  if(!pendingBookingItem) return;
  const date = document.getElementById('booking-date').value;
  const startTime = document.getElementById('booking-start').value;
  const endTime = document.getElementById('booking-end').value;
  const purpose = document.getElementById('booking-purpose').value.trim();
  if(!purpose){ toast(t('toast.purpose_required')); return; }
  try{
    const {bookings} = await api('/bookings', {method:'POST', body:{
      equipmentId: pendingBookingItem.id, userId: identity.id, userName: identity.username,
      department: pendingBookingItem.department, date, startTime, endTime, purpose
    }});
    BOOKINGS = bookings;
    closeBookingModal();
    toast(t('toast.booking_submitted'));
    if(activeView==='bookings') renderBookings();
    if(activeView==='dashboard') renderDashboard();
  }catch(e){ toast(t('toast.booking_failed') + (e.message ? ' — ' + e.message : '')); }
});

/* ---------- issue modal ---------- */
function selectSeverity(el){
  document.querySelectorAll('#sev-toggle .sev-opt').forEach(o=>o.classList.remove('active-minor','active-major','active-critical'));
  el.classList.add('active-'+el.dataset.sev.toLowerCase());
}
function openIssueModal(id){
  pendingIssueItem = EQUIPMENT.find(e=>e.id===id);
  if(!pendingIssueItem) return;
  document.getElementById('issue-modal-item-name').textContent = pendingIssueItem.name + ' · ' + pendingIssueItem.location;
  document.getElementById('issue-desc').value = '';
  document.querySelectorAll('#sev-toggle .sev-opt').forEach(o=>o.classList.remove('active-minor','active-major','active-critical'));
  document.querySelector('#sev-toggle .sev-opt[data-sev="Minor"]').classList.add('active-minor');
  document.getElementById('issue-modal-overlay').classList.add('active');
}
function closeIssueModal(){ document.getElementById('issue-modal-overlay').classList.remove('active'); pendingIssueItem = null; }
document.getElementById('issue-modal-submit').addEventListener('click', async ()=>{
  if(!pendingIssueItem) return;
  const description = document.getElementById('issue-desc').value.trim();
  const severity = document.querySelector('#sev-toggle .sev-opt.active-minor, #sev-toggle .sev-opt.active-major, #sev-toggle .sev-opt.active-critical')?.dataset.sev || 'Minor';
  if(!description){ toast(t('toast.desc_required')); return; }
  try{
    const {issues, equipment} = await api('/issues', {method:'POST', body:{
      equipmentId: pendingIssueItem.id, reporterId: identity.id, reporterName: identity.username,
      department: pendingIssueItem.department, description, severity
    }});
    ISSUES = issues; EQUIPMENT = equipment;
    closeIssueModal();
    toast(t('toast.issue_submitted'));
    if(activeView==='issues') renderIssues();
    if(activeView==='inventory') renderInventory();
    if(activeView==='dashboard') renderDashboard();
  }catch(e){ toast(t('toast.issue_failed')); }
});

/* ============================================================
   REQUESTS
   ============================================================ */
function reqStatusClass(s){ return {'Pending':'st-inuse','Approved':'st-available','Denied':'st-maintenance','Returned':'st-retired'}[s]||''; }

function renderRequests(){
  const isManager = identity.role==='Manager';
  document.getElementById('req-title').textContent = isManager ? t('req.title_manager') : t('req.title_researcher');
  document.getElementById('req-sub').textContent = isManager ? t('req.sub_manager') : t('req.sub_researcher');

  const rows = isManager ? [...REQUESTS] : REQUESTS.filter(r=>r.requesterId===identity.id);
  rows.sort((a,b)=>b.createdAt-a.createdAt);

  const body = document.getElementById('requests-body');
  const empty = document.getElementById('requests-empty');
  if(!rows.length){ body.innerHTML=''; empty.style.display='block'; return; }
  empty.style.display='none';

  body.innerHTML = rows.map(r=>{
    let actions = '';
    if(r.status==='Pending' && isManager){
      actions = `<button class="btn btn-sm btn-primary" onclick="decideRequest('${r.id}','Approved')">${t('common.approve')}</button>
                 <button class="btn btn-sm btn-danger" onclick="decideRequest('${r.id}','Denied')">${t('common.deny')}</button>`;
    } else if(r.status==='Approved'){
      actions = `<button class="btn btn-sm btn-ghost" onclick="returnRequest('${r.id}')">${t('common.mark_returned')}</button>`;
    } else { actions = `<span class="sub" style="font-size:11.5px;">—</span>`; }
    return `<tr>
      <td><strong>${escapeHtml(r.equipmentName)}</strong><div class="sub" style="font-size:11px;">${trDept(r.department)}</div></td>
      <td>${escapeHtml(r.requesterName)}</td>
      <td style="max-width:220px;">${escapeHtml(r.purpose)}</td>
      <td><span class="sticker ${reqStatusClass(r.status)}"><span class="dot"></span>${trReqStatus(r.status)}</span></td>
      <td class="mono" style="font-size:11.5px; color:var(--ink-faint);">${timeAgo(r.createdAt)}</td>
      <td style="white-space:nowrap;">${actions}</td>
    </tr>`;
  }).join('');
}

async function decideRequest(id, decision){
  const action = decision==='Approved' ? 'approve' : 'deny';
  try{
    const {requests, equipment, trend} = await api('/requests/'+id, {method:'PATCH', body:{action}});
    REQUESTS = requests; EQUIPMENT = equipment; TREND = trend;
    toast(decision==='Approved' ? t('toast.approved') : t('toast.denied'));
    renderRequests();
  }catch(e){ toast(t('toast.request_update_failed')); }
}
async function returnRequest(id){
  try{
    const {requests, equipment} = await api('/requests/'+id, {method:'PATCH', body:{action:'return'}});
    REQUESTS = requests; EQUIPMENT = equipment;
    toast(t('toast.returned'));
    renderRequests();
  }catch(e){ toast(t('toast.request_update_failed')); }
}

/* ============================================================
   BOOKINGS
   ============================================================ */
function formatDateShort(dateStr){
  return new Date(dateStr+'T00:00').toLocaleDateString('en-US', {month:'short', day:'numeric'});
}

function renderBookings(){
  const isManager = identity.role==='Manager';
  const rows = (isManager ? [...BOOKINGS] : BOOKINGS.filter(b=>b.userId===identity.id))
    .sort((a,b)=> (a.date+a.startTime).localeCompare(b.date+b.startTime));

  const body = document.getElementById('bookings-body');
  const empty = document.getElementById('bookings-empty');
  if(!rows.length){ body.innerHTML=''; empty.style.display='block'; return; }
  empty.style.display='none';

  body.innerHTML = rows.map(b=>{
    const canCancel = b.status==='Upcoming' && (isManager || b.userId===identity.id);
    return `<tr>
      <td><strong>${escapeHtml(b.equipmentName)}</strong><div class="sub" style="font-size:11px;">${trDept(b.department)}</div></td>
      <td>${escapeHtml(b.userName)}</td>
      <td class="mono" style="font-size:12px;">${formatDateShort(b.date)} · ${b.startTime}–${b.endTime}</td>
      <td style="max-width:200px;">${escapeHtml(b.purpose)}</td>
      <td><span class="sticker ${bkStatusClass(b.status)}"><span class="dot"></span>${trBkStatus(b.status)}</span></td>
      <td>${canCancel ? `<button class="btn btn-sm btn-ghost" onclick="cancelBooking('${b.id}')">${t('common.cancel')}</button>` : '<span class="sub" style="font-size:11.5px;">—</span>'}</td>
    </tr>`;
  }).join('');
}

async function cancelBooking(id){
  try{
    const {bookings} = await api('/bookings/'+id, {method:'PATCH', body:{action:'cancel'}});
    BOOKINGS = bookings;
    toast(t('toast.booking_cancelled'));
    renderBookings();
  }catch(e){ toast(t('toast.request_update_failed')); }
}

/* ============================================================
   ISSUES
   ============================================================ */
function renderIssues(){
  const isManager = identity.role==='Manager';
  const rows = [...ISSUES].sort((a,b)=>b.createdAt-a.createdAt);

  const body = document.getElementById('issues-body');
  const empty = document.getElementById('issues-empty');
  if(!rows.length){ body.innerHTML=''; empty.style.display='block'; return; }
  empty.style.display='none';

  body.innerHTML = rows.map(i=>{
    const canResolve = isManager && i.status==='Open';
    return `<tr>
      <td><strong>${escapeHtml(i.equipmentName)}</strong><div class="sub" style="font-size:11px;">${trDept(i.department)}</div></td>
      <td>${escapeHtml(i.reporterName)}</td>
      <td><span class="sev-tag ${sevClass(i.severity)}">${trSev(i.severity)}</span></td>
      <td style="max-width:240px;">${escapeHtml(i.description)}</td>
      <td><span class="sticker ${isStatusClass(i.status)}"><span class="dot"></span>${trIsStatus(i.status)}</span></td>
      <td>${canResolve ? `<button class="btn btn-sm btn-primary" onclick="resolveIssue('${i.id}')">${t('common.resolve')}</button>` : '<span class="sub" style="font-size:11.5px;">—</span>'}</td>
    </tr>`;
  }).join('');
}

async function resolveIssue(id){
  try{
    const {issues, equipment} = await api('/issues/'+id, {method:'PATCH', body:{action:'resolve'}});
    ISSUES = issues; EQUIPMENT = equipment;
    toast(t('toast.issue_resolved'));
    renderIssues();
  }catch(e){ toast(t('toast.request_update_failed')); }
}

/* ============================================================
   REPORTS
   ============================================================ */
function renderReports(){
  const idle = [...EQUIPMENT].filter(e=>e.idleDays>=90).sort((a,b)=>b.idleDays-a.idleDays);
  document.getElementById('idle-list').innerHTML = idle.length ? idle.map(e=>`
    <div class="activity-row" style="align-items:center;">
      <div style="flex:1;">
        <strong style="font-size:13px;">${escapeHtml(e.name)}</strong>
        <div class="sub" style="font-size:11.5px;">${t('rep.idle_row',{dept:trDept(e.department), days:e.idleDays, value:e.value.toLocaleString()})}</div>
      </div>
      <span class="cond-tag">${trCond(e.condition)}</span>
    </div>
  `).join('') : `<p class="sub">${t('rep.idle_empty')}</p>`;

  const counts = {};
  REQUESTS.forEach(r=>{ counts[r.equipmentName] = (counts[r.equipmentName]||0)+1; });
  const ranked = Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,6);
  document.getElementById('most-requested').innerHTML = ranked.length ? ranked.map(([name,count],i)=>`
    <div class="activity-row">
      <span class="idx mono" style="color:var(--ink-faint); width:18px;">${i+1}</span>
      <span style="flex:1;">${escapeHtml(name)}</span>
      <span class="mono" style="font-weight:600;">${count}</span>
    </div>
  `).join('') : `<p class="sub">${t('rep.ranked_empty')}</p>`;
}

/* ============================================================
   AI ASSISTANT
   ============================================================ */
let assistantStarted = false;

function resetAssistant(){
  assistantStarted = false;
  document.getElementById('assist-body').innerHTML = '';
  document.getElementById('assist-panel').classList.remove('open');
}

function toggleAssistant(){
  const panel = document.getElementById('assist-panel');
  panel.classList.toggle('open');
  if(panel.classList.contains('open') && !assistantStarted) startAssistant();
}

function startAssistant(){
  assistantStarted = true;
  const body = document.getElementById('assist-body');
  body.innerHTML = `<div class="msg msg-bot"><div class="bubble">${escapeHtml(t('asst.greeting',{name:identity.username}))}</div></div>`;
  const chips = [
    {label: t('asst.chip_available',{dept:trDept(ASSISTANT_EXAMPLE_DEPT)}), query: `What's available in ${ASSISTANT_EXAMPLE_DEPT}?`},
    {label: t('asst.chip_project'), query: `I'm planning a PCR and gel project — what do I need?`},
    {label: t('asst.chip_savings'), query: `How much have we saved?`},
  ];
  document.getElementById('assist-chips').innerHTML = chips.map(c=>
    `<span class="assist-chip" onclick='runAssistantChip(${JSON.stringify(c.label)}, ${JSON.stringify(c.query)})'>${escapeHtml(c.label)}</span>`
  ).join('');
}

function runAssistantChip(label, query){ sendAssistantQuery(label, query); }

async function sendAssistantQuery(overrideLabel, overrideQuery){
  const input = document.getElementById('assist-input');
  const typed = input.value.trim();
  const displayText = overrideLabel !== undefined ? overrideLabel : typed;
  const apiQuery = overrideQuery !== undefined ? overrideQuery : typed;
  if(!displayText) return;

  const body = document.getElementById('assist-body');
  body.insertAdjacentHTML('beforeend', `<div class="msg msg-user">${escapeHtml(displayText)}</div>`);
  if(overrideLabel===undefined) input.value='';
  body.scrollTop = body.scrollHeight;

  try{
    const data = await api('/assistant', {method:'POST', body:{query: apiQuery}});
    body.insertAdjacentHTML('beforeend', renderAssistantAnswer(data));
  }catch(e){
    body.insertAdjacentHTML('beforeend', `<div class="msg msg-bot"><div class="bubble">${escapeHtml(t('asst.unreachable'))}</div></div>`);
  }
  body.scrollTop = body.scrollHeight;
}

function renderAssistantAnswer(data){
  if(data.type==='availability'){
    if(!data.items.length) return `<div class="msg msg-bot"><div class="bubble">${escapeHtml(t('asst.avail_none',{dept:trDept(data.department)}))}</div></div>`;
    return `<div class="msg msg-bot">
      <div class="bubble">${escapeHtml(t('asst.avail_some',{dept:trDept(data.department), count:data.items.length, plural:data.items.length===1?'':(LANG==='ar'?'':'es')}))}</div>
      ${data.items.map(miniCard).join('')}
    </div>`;
  }
  if(data.type==='category'){
    if(!data.items.length) return `<div class="msg msg-bot"><div class="bubble">${escapeHtml(t('asst.cat_none',{term:data.term}))}</div></div>`;
    return `<div class="msg msg-bot">
      <div class="bubble">${escapeHtml(t('asst.cat_some',{count:data.items.length, term:data.term, plural:data.items.length===1?'':(LANG==='ar'?'':'es')}))}</div>
      ${data.items.map(miniCard).join('')}
    </div>`;
  }
  if(data.type==='project'){
    const available = data.parts.filter(p=>p.pick && p.pick.status==='Available').length;
    const reservable = data.parts.filter(p=>p.pick && p.pick.status!=='Available').length;
    const missing = data.parts.filter(p=>!p.pick).length;
    return `<div class="msg msg-bot">
      <div class="bubble">${escapeHtml(t('asst.project_summary',{count:data.parts.length, plural:data.parts.length===1?'':(LANG==='ar'?'':'s'), available, reservable, missing}))}</div>
      ${data.parts.map(p=>`
        <div class="proj-part">
          <div class="plabel">${escapeHtml(p.label)}</div>
          ${p.pick ? miniCard(p.pick) : `<div class="mmeta" style="color:var(--red);">${escapeHtml(t('asst.project_missing'))}</div>`}
        </div>
      `).join('')}
    </div>`;
  }
  if(data.type==='savings'){
    return `<div class="msg msg-bot">
      <div class="bubble">${escapeHtml(t('asst.savings',{total:data.total.toLocaleString()}))}</div>
      <div class="mini-card">
        ${data.byDept.map(d=>`<div class="save-row"><span>${trDept(d.department)}</span><span class="mono">${d.saved.toLocaleString()} OMR</span></div>`).join('')}
      </div>
    </div>`;
  }
  return `<div class="msg msg-bot"><div class="bubble">${escapeHtml(t('asst.fallback'))}</div></div>`;
}

function miniCard(e){
  return `<div class="mini-card">
    <div class="mtop">
      <div><div class="mname">${escapeHtml(e.name)}</div><div class="mmeta">${escapeHtml(e.location)}</div></div>
      <span class="sticker ${statusClass(e.status)}"><span class="dot"></span>${trStatus(e.status)}</span>
    </div>
    <button class="btn btn-sm ${e.status==='Available'?'btn-primary':'btn-ghost'}" style="margin-top:8px;" onclick='useFromAssistant(${JSON.stringify(e.id)})'>${e.status==='Available'?t('common.use_this'):t('common.view_item')}</button>
  </div>`;
}

function useFromAssistant(id){
  toggleAssistant();
  navigate('inventory');
  const eq = EQUIPMENT.find(e=>e.id===id);
  if(eq && eq.status==='Available') openRequestModal(id);
  else toast(t('toast.item_unavailable', {status: eq ? trStatus(eq.status) : ''}));
}

/* ============================================================
   TOAST + BOOT
   ============================================================ */
let toastTimer=null;
function toast(msg){
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>el.classList.remove('show'), 2600);
}

document.getElementById('modal-overlay').addEventListener('click', (e)=>{ if(e.target.id==='modal-overlay') closeModal(); });
document.getElementById('booking-modal-overlay').addEventListener('click', (e)=>{ if(e.target.id==='booking-modal-overlay') closeBookingModal(); });
document.getElementById('issue-modal-overlay').addEventListener('click', (e)=>{ if(e.target.id==='issue-modal-overlay') closeIssueModal(); });

(async function init(){
  try{ LANG = localStorage.getItem('equipuse_lang') || 'en'; }catch(e){ LANG = 'en'; }
  applyI18n();
  await bootData();
  renderQuickPicks();
})();
