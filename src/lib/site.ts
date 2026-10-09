export const SITE = {
  name: "Al Basma Foreign Employment Agent PLC",
  short: "Al Basma",
  phones: ["+251954919797", "+251929498043"],
  whatsapp: "251954919797",
  email: "albasma653@gmail.com",
  address: "Arada Subcity, Woreda 04, HH Building, 6th Floor, Office F6/3, Addis Ababa, Ethiopia",
  mapQuery: "Arada, Addis Ababa, Ethiopia",
  association: "Hibret Ethiopia Private Employment Agencies Association",
  socials: {
    facebook: "https://facebook.com/albasmarecruitment",
    telegram: "https://t.me/albasmarecruitment",
    tiktok: "https://tiktok.com/@albasmarecruitment",
    instagram: "https://instagram.com/albasmarecruitment",
    linkedin: "https://linkedin.com/company/albasmarecruitment",
  },
};

export const waLink = (text = "Hello Al Basma, I would like more information.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const JOBS = [
  { id: "housemaid-sa", title: "House Maid", country: "Saudi Arabia", type: "Domestic", salary: "Competitive + accommodation" },
  { id: "housemaid-kw", title: "House Maid", country: "Kuwait", type: "Domestic", salary: "Competitive + accommodation" },
  { id: "driver-sa", title: "Family / Private Driver", country: "Saudi Arabia", type: "Semi-skilled", salary: "Competitive + accommodation" },
  { id: "nurse-sa", title: "Nurse / Caregiver", country: "Saudi Arabia", type: "Skilled", salary: "Based on qualification" },
  { id: "cleaner-kw", title: "Cleaner / Facility Worker", country: "Kuwait", type: "Unskilled", salary: "Competitive" },
  { id: "cook-kw", title: "Cook / Kitchen Helper", country: "Kuwait", type: "Semi-skilled", salary: "Competitive" },
];

export const POSTS = [
  { slug: "how-to-prepare-for-work-abroad", title: "How to prepare for work abroad: a checklist", date: "2026-09-12", excerpt: "From your passport to your COC certificate — everything you need before applying.", body: ["Working abroad is a big step. Preparing early saves weeks of waiting.", "Start with a valid passport, then get your Certificate of Competence (COC) from an accredited center. Medical and police clearances are processed after screening.", "Attend the official pre-departure orientation. It teaches your rights, the culture of your destination country and how to ask for help.", "Never pay unofficial brokers. Work only with licensed agencies like Al Basma."] },
  { slug: "your-rights-as-a-migrant-worker", title: "Know your rights as a migrant worker", date: "2026-09-02", excerpt: "Your contract, your salary and your passport are yours. Here's what the law guarantees.", body: ["Every worker deployed through Al Basma signs a contract approved by the Ministry of Labor and Skills.", "Your employer may not keep your passport against your will, and your salary must be paid as agreed.", "If you face any problem, contact our office, the Ethiopian embassy, or our 24/7 WhatsApp line immediately."] },
  { slug: "saudi-arabia-and-kuwait-opportunities", title: "Opportunities in Saudi Arabia and Kuwait", date: "2026-08-20", excerpt: "Demand is growing for house maids, drivers and nurses. Learn what employers look for.", body: ["Employers in the Gulf value reliability, cleanliness and basic Arabic or English.", "Our training program prepares candidates in all three areas so they arrive confident.", "We are preparing to open more destination countries soon — subscribe to get updates."] },
];
