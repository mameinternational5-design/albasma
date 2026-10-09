import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "am" | "ar" | "om";
export const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "am", label: "አማርኛ" },
  { code: "ar", label: "العربية" },
  { code: "om", label: "Afaan Oromoo" },
];

const en = {
  nav: { home: "Home", about: "About", services: "Services", jobs: "Jobs", blog: "Blog", contact: "Contact", apply: "Apply Now" },
  hero: {
    eyebrow: "Licensed Foreign Employment Agent · Addis Ababa",
    title1: "Your fingerprint",
    title2: "on a better future.",
    sub: "Al Basma connects Ethiopian workers with trusted employers in Saudi Arabia and Kuwait — legally, safely and with care from first application to arrival.",
    cta: "Apply for a Job",
    cta2: "Hire Workers",
  },
  stats: { placed: "Candidates prepared", countries: "Destination countries", days: "Days a week open", legal: "Legal & ethical process" },
  services: {
    title: "Everything handled, end to end",
    sub: "One trusted office for the whole journey abroad.",
    items: [
      ["Recruitment", "Matching qualified candidates with verified employers abroad."],
      ["Visa Processing", "Complete documentation and embassy procedures handled for you."],
      ["Pre-departure Training", "Language, culture, rights and job skills orientation."],
      ["Travel & Ticketing", "Flights booked and departure coordinated."],
      ["Insurance", "Coverage arranged for every deployed worker."],
      ["Aftercare", "Follow-up and support after arrival."],
    ],
  },
  process: {
    title: "Five clear steps",
    steps: [["Application", "Submit your details online or at our office."], ["Screening", "Interview, document and medical review."], ["Training", "Certified pre-departure orientation."], ["Visa", "Contract and visa processing."], ["Deployment", "Travel to your new job, safely."]],
  },
  jobs: { title: "Open positions", sub: "Current vacancies in Saudi Arabia and Kuwait.", applyFor: "Apply" },
  countries: { title: "Where we place workers", soon: "More countries coming soon" },
  employers: {
    title: "For employers abroad",
    sub: "Reliable, screened and trained Ethiopian manpower — recruited strictly according to the laws of Ethiopia and your country.",
    points: ["Large, ready candidate pool", "Interviews, skill tests & medical checks", "Full legal documentation", "Fast, transparent deployment"],
    cta: "Request Workers",
  },
  testimonials: { title: "Voices of trust" },
  cta: { title: "Ready to start your journey?", sub: "Apply in minutes or talk to us on WhatsApp.", whatsapp: "Chat on WhatsApp" },
  footer: { tagline: "Licensed foreign employment agency in Addis Ababa, Ethiopia.", hours: "Mon – Sat, 8:00 AM – 4:00 PM", legal: "Legal", newsletter: "Get vacancy updates", subscribe: "Subscribe", rights: "All rights reserved." },
  apply: {
    title: "Job application", sub: "Fill in your details. Our team will contact you within 2 working days.",
    name: "Full name", age: "Age", sex: "Sex", male: "Male", female: "Female", phone: "Phone", education: "Education level", experience: "Work experience (years)", position: "Desired position", country: "Preferred country", passport: "Passport number (if available)", region: "Region / Woreda", emergency: "Emergency contact (name & phone)", skills: "Skills & languages", consent: "I agree to the Privacy Policy and confirm my information is true.", submit: "Submit via WhatsApp", sent: "Thank you! Your application is ready — send it in WhatsApp to complete.",
    reqTitle: "Requirements", docsTitle: "Required documents",
    reqs: ["Age 21 – 40", "Good health", "Basic literacy; Arabic or English is a plus", "Relevant experience for skilled roles"],
    docs: ["Valid passport", "COC certificate", "Medical clearance", "Police clearance", "Passport-size photos", "Kebele ID"],
  },
  contact: { title: "Visit or contact us", address: "Address", phone: "Phone", email: "Email", hours: "Working hours", send: "Send message", message: "Message" },
};
type Dict = typeof en;

const am: Dict = {
  nav: { home: "መነሻ", about: "ስለ እኛ", services: "አገልግሎቶች", jobs: "ስራዎች", blog: "ብሎግ", contact: "ያግኙን", apply: "አሁን ያመልክቱ" },
  hero: { eyebrow: "ፈቃድ ያለው የውጭ ሀገር ስራ ስምሪት ኤጀንሲ · አዲስ አበባ", title1: "አሻራዎ", title2: "ለተሻለ ነገ።", sub: "አል ባስማ ኢትዮጵያውያን ሰራተኞችን በሳዑዲ አረቢያ እና ኩዌት ካሉ ታማኝ አሰሪዎች ጋር በህጋዊ እና ደህንነቱ በተጠበቀ መንገድ ያገናኛል።", cta: "ለስራ ያመልክቱ", cta2: "ሰራተኛ ይቅጠሩ" },
  stats: { placed: "የተዘጋጁ አመልካቾች", countries: "መዳረሻ ሀገራት", days: "በሳምንት የስራ ቀናት", legal: "ህጋዊ እና ስነ-ምግባራዊ" },
  services: { title: "ሁሉንም ከጅምር እስከ ፍጻሜ", sub: "ለውጭ ጉዞዎ አንድ ታማኝ ቢሮ።", items: [["ምልመላ", "ብቁ አመልካቾችን ከተረጋገጡ አሰሪዎች ጋር ማገናኘት።"], ["ቪዛ ማስፈጸም", "ሙሉ ሰነድ እና የኤምባሲ ሂደት።"], ["ከጉዞ በፊት ስልጠና", "ቋንቋ፣ ባህል፣ መብት እና የስራ ክህሎት።"], ["ጉዞ እና ትኬት", "የበረራ ቦታ ማስያዝ እና ማስተባበር።"], ["ኢንሹራንስ", "ለእያንዳንዱ ሰራተኛ ዋስትና።"], ["ድህረ-ጉዞ ድጋፍ", "ከደረሱ በኋላ ክትትል እና ድጋፍ።"]] },
  process: { title: "አምስት ግልጽ ደረጃዎች", steps: [["ማመልከቻ", "መረጃዎን በመስመር ላይ ወይም በቢሮ ያስገቡ።"], ["ማጣራት", "ቃለ መጠይቅ፣ ሰነድ እና ህክምና።"], ["ስልጠና", "የተረጋገጠ የቅድመ-ጉዞ ስልጠና።"], ["ቪዛ", "ውል እና ቪዛ ሂደት።"], ["ስምሪት", "ወደ አዲሱ ስራዎ በደህና ይጓዙ።"]] },
  jobs: { title: "ክፍት የስራ ቦታዎች", sub: "በሳዑዲ አረቢያ እና ኩዌት ያሉ ወቅታዊ ክፍት ቦታዎች።", applyFor: "ያመልክቱ" },
  countries: { title: "ሰራተኞችን የምናሰማራባቸው", soon: "ተጨማሪ ሀገራት በቅርቡ" },
  employers: { title: "ለውጭ አሰሪዎች", sub: "የተጣሩ እና የሰለጠኑ ኢትዮጵያውያን ሰራተኞች — በሁለቱም ሀገራት ህግ መሰረት።", points: ["ሰፊ ዝግጁ የአመልካቾች ክምችት", "ቃለ መጠይቅ፣ የክህሎት ፈተና እና ህክምና", "ሙሉ ህጋዊ ሰነድ", "ፈጣን እና ግልጽ ስምሪት"], cta: "ሰራተኛ ይጠይቁ" },
  testimonials: { title: "የእምነት ድምጾች" },
  cta: { title: "ጉዞዎን ለመጀመር ዝግጁ ነዎት?", sub: "በደቂቃዎች ያመልክቱ ወይም በዋትስአፕ ያነጋግሩን።", whatsapp: "በዋትስአፕ ያውሩ" },
  footer: { tagline: "በአዲስ አበባ ፈቃድ ያለው የውጭ ሀገር ስራ ስምሪት ኤጀንሲ።", hours: "ሰኞ – ቅዳሜ፣ 2:00 – 10:00 ሰዓት", legal: "ህጋዊ", newsletter: "የስራ ማስታወቂያ ይቀበሉ", subscribe: "ይመዝገቡ", rights: "መብቱ በህግ የተጠበቀ ነው።" },
  apply: { title: "የስራ ማመልከቻ", sub: "መረጃዎን ይሙሉ። ቡድናችን በ2 የስራ ቀናት ውስጥ ያገኝዎታል።", name: "ሙሉ ስም", age: "እድሜ", sex: "ጾታ", male: "ወንድ", female: "ሴት", phone: "ስልክ", education: "የትምህርት ደረጃ", experience: "የስራ ልምድ (ዓመት)", position: "የሚፈልጉት ስራ", country: "የሚመርጡት ሀገር", passport: "የፓስፖርት ቁጥር (ካለ)", region: "ክልል / ወረዳ", emergency: "የአደጋ ጊዜ ተጠሪ", skills: "ክህሎት እና ቋንቋ", consent: "በግላዊነት ፖሊሲው እስማማለሁ፤ መረጃዬ እውነት ነው።", submit: "በዋትስአፕ ይላኩ", sent: "እናመሰግናለን! ለማጠናቀቅ በዋትስአፕ ይላኩ።", reqTitle: "መስፈርቶች", docsTitle: "የሚያስፈልጉ ሰነዶች", reqs: ["እድሜ 21 – 40", "ጥሩ ጤንነት", "መሰረታዊ ማንበብ እና መጻፍ", "ለሙያ ስራዎች ተገቢ ልምድ"], docs: ["ፓስፖርት", "የCOC ሰርተፍኬት", "የህክምና ማረጋገጫ", "የፖሊስ ማስረጃ", "ፓስፖርት መጠን ፎቶ", "የቀበሌ መታወቂያ"] },
  contact: { title: "ይጎብኙን ወይም ያግኙን", address: "አድራሻ", phone: "ስልክ", email: "ኢሜይል", hours: "የስራ ሰዓት", send: "መልእክት ይላኩ", message: "መልእክት" },
};

const ar: Dict = {
  nav: { home: "الرئيسية", about: "من نحن", services: "الخدمات", jobs: "الوظائف", blog: "المدونة", contact: "اتصل بنا", apply: "قدّم الآن" },
  hero: { eyebrow: "وكالة استقدام مرخّصة · أديس أبابا", title1: "بصمتك", title2: "نحو مستقبل أفضل.", sub: "تربط البصمة العمالة الإثيوبية بأصحاب عمل موثوقين في المملكة العربية السعودية والكويت — بشكل قانوني وآمن من التقديم حتى الوصول.", cta: "قدّم على وظيفة", cta2: "استقدم عمالة" },
  stats: { placed: "مرشحون مؤهلون", countries: "دول الوجهة", days: "أيام عمل أسبوعياً", legal: "إجراءات قانونية وأخلاقية" },
  services: { title: "كل شيء من البداية إلى النهاية", sub: "مكتب موثوق واحد لرحلتك كاملة.", items: [["الاستقدام", "مطابقة المرشحين المؤهلين مع أصحاب عمل موثقين."], ["معاملات التأشيرة", "إنجاز المستندات وإجراءات السفارة."], ["التدريب قبل السفر", "اللغة والثقافة والحقوق ومهارات العمل."], ["السفر والتذاكر", "حجز الرحلات وتنسيق المغادرة."], ["التأمين", "تغطية تأمينية لكل عامل."], ["المتابعة", "دعم ومتابعة بعد الوصول."]] },
  process: { title: "خمس خطوات واضحة", steps: [["التقديم", "أرسل بياناتك عبر الإنترنت أو في مكتبنا."], ["الفرز", "مقابلة ومراجعة المستندات والفحص الطبي."], ["التدريب", "توجيه معتمد قبل السفر."], ["التأشيرة", "العقد ومعاملة التأشيرة."], ["السفر", "انطلق إلى عملك الجديد بأمان."]] },
  jobs: { title: "الوظائف المتاحة", sub: "الشواغر الحالية في السعودية والكويت.", applyFor: "قدّم" },
  countries: { title: "وجهاتنا", soon: "دول أخرى قريباً" },
  employers: { title: "لأصحاب العمل", sub: "عمالة إثيوبية مفحوصة ومدرّبة — وفق أنظمة إثيوبيا وبلدكم.", points: ["قاعدة كبيرة من المرشحين", "مقابلات واختبارات مهارة وفحوصات طبية", "توثيق قانوني كامل", "استقدام سريع وشفاف"], cta: "اطلب عمالة" },
  testimonials: { title: "شهادات الثقة" },
  cta: { title: "هل أنت مستعد لبدء رحلتك؟", sub: "قدّم خلال دقائق أو تحدث معنا عبر واتساب.", whatsapp: "تواصل عبر واتساب" },
  footer: { tagline: "وكالة توظيف خارجي مرخّصة في أديس أبابا، إثيوبيا.", hours: "الاثنين – السبت، 8:00 ص – 4:00 م", legal: "قانوني", newsletter: "احصل على تحديثات الوظائف", subscribe: "اشترك", rights: "جميع الحقوق محفوظة." },
  apply: { title: "طلب توظيف", sub: "املأ بياناتك وسيتواصل فريقنا معك خلال يومي عمل.", name: "الاسم الكامل", age: "العمر", sex: "الجنس", male: "ذكر", female: "أنثى", phone: "الهاتف", education: "المستوى التعليمي", experience: "سنوات الخبرة", position: "الوظيفة المطلوبة", country: "الدولة المفضلة", passport: "رقم الجواز (إن وجد)", region: "الإقليم / الوريدا", emergency: "جهة اتصال للطوارئ", skills: "المهارات واللغات", consent: "أوافق على سياسة الخصوصية وأؤكد صحة بياناتي.", submit: "أرسل عبر واتساب", sent: "شكراً! أرسل الطلب عبر واتساب لإكماله.", reqTitle: "الشروط", docsTitle: "المستندات المطلوبة", reqs: ["العمر 21 – 40", "صحة جيدة", "إلمام بالقراءة والكتابة", "خبرة مناسبة للوظائف المهنية"], docs: ["جواز سفر ساري", "شهادة COC", "شهادة طبية", "شهادة حسن سيرة", "صور شخصية", "بطاقة هوية"] },
  contact: { title: "زورونا أو تواصلوا معنا", address: "العنوان", phone: "الهاتف", email: "البريد", hours: "ساعات العمل", send: "إرسال", message: "الرسالة" },
};

const om: Dict = {
  nav: { home: "Fuula Jalqabaa", about: "Waa'ee Keenya", services: "Tajaajila", jobs: "Hojiiwwan", blog: "Biloogii", contact: "Nu Qunnamaa", apply: "Amma Iyyadhaa" },
  hero: { eyebrow: "Ejentii Hojii Alaa Hayyama Qabu · Finfinnee", title1: "Mallattoo kee", title2: "egeree gaariif.", sub: "Al Basmaan hojjettoota Itoophiyaa hojjechiiftota amanamoo Saawudii Arabiyaa fi Kuweet jiran waliin seeraan fi nageenyaan wal qunnamsiisa.", cta: "Hojiif Iyyadhaa", cta2: "Hojjettoota Qaxaraa" },
  stats: { placed: "Iyyattoota qophaa'an", countries: "Biyyoota", days: "Guyyoota hojii torbanitti", legal: "Seeraa fi naamusa" },
  services: { title: "Hundumaa jalqabaa hanga xumuraatti", sub: "Imala keessaniif waajjira amanamaa tokko.", items: [["Qaxarrii", "Iyyattoota ga'oo hojjechiiftota mirkanaa'an waliin walsimsiisuu."], ["Viizaa", "Galmee fi adeemsa embaasii guutuu."], ["Leenjii Imalaa Dura", "Afaan, aadaa, mirgaa fi dandeettii hojii."], ["Imala fi Tikeetii", "Balali'iinsa qopheessuu."], ["Inshuraansii", "Hojjetaa hundaaf wabii."], ["Deeggarsa", "Erga ga'anii booda hordoffii."]] },
  process: { title: "Tarkaanfiiwwan shan ifa ta'an", steps: [["Iyyannoo", "Odeeffannoo kee galchi."], ["Calaltuu", "Gaaffii fi deebii, galmee fi fayyaa."], ["Leenjii", "Leenjii imalaa dura mirkanaa'e."], ["Viizaa", "Waliigaltee fi viizaa."], ["Ergamuu", "Gara hojii haaraatti nagaan imalaa."]] },
  jobs: { title: "Hojiiwwan banaa", sub: "Bakka hojii Saawudii fi Kuweet.", applyFor: "Iyyadhu" },
  countries: { title: "Bakka hojjettoota ergannu", soon: "Biyyoonni dabalataa dhihootti" },
  employers: { title: "Hojjechiiftota alaaf", sub: "Hojjettoota Itoophiyaa calalamanii fi leenji'an — seera biyyoota lamaaniin.", points: ["Iyyattoota baay'ee qophaa'an", "Qormaata dandeettii fi fayyaa", "Galmee seeraa guutuu", "Ergaa saffisaa fi ifa"], cta: "Hojjettoota Gaafadhaa" },
  testimonials: { title: "Sagalee amanamummaa" },
  cta: { title: "Imala kee jalqabuuf qophiidhaa?", sub: "Daqiiqaa muraasaan iyyadhu ykn WhatsAppiin nu qunnami.", whatsapp: "WhatsAppiin haasa'i" },
  footer: { tagline: "Ejentii hojii alaa hayyama qabu Finfinnee, Itoophiyaa.", hours: "Wiixata – Sanbata, 2:00 – 10:00", legal: "Seeraa", newsletter: "Odeeffannoo hojii argadhu", subscribe: "Galmaa'i", rights: "Mirgi hundi eegamaadha." },
  apply: { title: "Iyyannoo hojii", sub: "Odeeffannoo kee guuti. Gareen keenya guyyaa hojii 2 keessatti si qunnama.", name: "Maqaa guutuu", age: "Umurii", sex: "Saala", male: "Dhiira", female: "Dubartii", phone: "Bilbila", education: "Sadarkaa barnootaa", experience: "Muuxannoo (waggaa)", position: "Hojii barbaaddu", country: "Biyya filattu", passport: "Lakk. paaspoortii", region: "Naannoo / Aanaa", emergency: "Nama yeroo balaa", skills: "Dandeettii fi afaan", consent: "Imaammata dhuunfaa nan fudhadha; odeeffannoon koo dhugaadha.", submit: "WhatsAppiin ergi", sent: "Galatoomaa! Xumuruuf WhatsAppiin ergi.", reqTitle: "Ulaagaalee", docsTitle: "Galmee barbaachisu", reqs: ["Umurii 21 – 40", "Fayyaa gaarii", "Dubbisuu fi barreessuu", "Muuxannoo hojii ogummaaf"], docs: ["Paaspoortii", "Ragaa COC", "Ragaa fayyaa", "Ragaa poolisii", "Suuraa", "Eenyummeessaa"] },
  contact: { title: "Nu daawwadhaa ykn nu qunnamaa", address: "Teessoo", phone: "Bilbila", email: "Imeelii", hours: "Sa'aatii hojii", send: "Ergaa ergi", message: "Ergaa" },
};

const DICTS: Record<Lang, Dict> = { en, am, ar, om };

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({ lang: "en", setLang: () => {}, t: en });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved && DICTS[saved]) setLangState(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);
  const setLang = (l: Lang) => { setLangState(l); localStorage.setItem("lang", l); };
  return <Ctx.Provider value={{ lang, setLang, t: DICTS[lang] }}>{children}</Ctx.Provider>;
}

export const useI18n = () => useContext(Ctx);
