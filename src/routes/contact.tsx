import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHero, Socials } from "@/components/site/Layout";
import { useI18n } from "@/lib/i18n";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Al Basma Recruitment | Arada, Addis Ababa" },
      { name: "description", content: "HH Building 6th floor, Arada Subcity, Addis Ababa. Call +251954919797 or WhatsApp us. Open Mon–Sat 8am–4pm." },
      { property: "og:title", content: "Contact Al Basma Recruitment" },
      { property: "og:description", content: "Visit, call or WhatsApp our Addis Ababa office." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useI18n();
  const c = t.contact;
  const input = "w-full rounded-sm border bg-card px-3 py-2.5 text-sm focus:border-gold focus:outline-none";
  return (
    <>
      <PageHero title={c.title} />
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2">
        <div className="space-y-6">
          {[[MapPin, c.address, SITE.address], [Phone, c.phone, SITE.phones.join("  ·  ")], [Mail, c.email, SITE.email], [Clock, c.hours, t.footer.hours]].map(([Icon, h, v]) => {
            const I = Icon as typeof MapPin;
            return <div key={h as string} className="flex gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy text-gold"><I className="h-5 w-5" /></span><div><h3 className="text-xl">{h as string}</h3><p className="text-muted-foreground" dir={I === Phone ? "ltr" : undefined}>{v as string}</p></div></div>;
          })}
          <Socials />
          <form onSubmit={(e) => { e.preventDefault(); const fd = new FormData(e.currentTarget); window.open(waLink(`${fd.get("name")}: ${fd.get("msg")}`), "_blank"); }} className="space-y-3 rounded-md border bg-card p-6">
            <input name="name" required placeholder={t.apply.name} className={input} />
            <textarea name="msg" required rows={4} placeholder={c.message} className={input} />
            <button className="w-full rounded-sm bg-gold-gradient py-3 font-semibold text-navy-deep">{c.send}</button>
          </form>
        </div>
        <iframe title="Al Basma office map" className="min-h-[480px] w-full rounded-md border" loading="lazy"
          src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`} />
      </section>
    </>
  );
}
