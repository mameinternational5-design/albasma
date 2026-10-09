import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero, SectionTitle } from "@/components/site/Layout";
import { useI18n } from "@/lib/i18n";
import { waLink } from "@/lib/site";
import { SERVICE_ICONS } from "./index";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Recruitment, Visa, Training — Al Basma" },
      { name: "description", content: "Recruitment, visa processing, pre-departure training, travel, insurance and aftercare for Saudi Arabia and Kuwait." },
      { property: "og:title", content: "Al Basma Services" },
      { property: "og:description", content: "End-to-end overseas employment services from Ethiopia." },
    ],
  }),
  component: Services,
});

function Services() {
  const { t } = useI18n();
  return (
    <>
      <PageHero title={t.services.title} sub={t.services.sub} />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-24 md:grid-cols-3">
        {t.services.items.map(([h, d], i) => {
          const Icon = SERVICE_ICONS[i] ?? SERVICE_ICONS[0]!;
          return <div key={h} className="rounded-md border bg-card p-8"><Icon className="h-9 w-9 text-gold" /><h3 className="mt-5 text-2xl">{h}</h3><p className="mt-2 text-muted-foreground">{d}</p></div>;
        })}
      </section>
      <section className="surface-dark py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionTitle title={t.countries.title} sub={t.countries.soon} light />
          <div className="grid gap-6 md:grid-cols-2">
            {[["🇸🇦", "Saudi Arabia"], ["🇰🇼", "Kuwait"]].map(([f, n]) => (
              <div key={n} className="rounded-md border border-gold/30 p-10 text-center"><div className="text-6xl">{f}</div><h3 className="mt-4 text-3xl text-gold-gradient">{n}</h3><p className="mt-2 text-sm text-ivory/60">House maids · Drivers · Nurses · Semi-skilled & unskilled roles</p></div>
            ))}
          </div>
        </div>
      </section>
      <section id="employers" className="mx-auto max-w-4xl scroll-mt-32 px-6 py-24 text-center">
        <SectionTitle title={t.employers.title} sub={t.employers.sub} />
        <ul className="mx-auto grid max-w-2xl gap-3 text-start md:grid-cols-2">{t.employers.points.map((p) => <li key={p} className="flex gap-3"><Check className="h-5 w-5 text-gold" />{p}</li>)}</ul>
        <a href={waLink("Hello Al Basma, we would like to request workers.")} target="_blank" rel="noreferrer" className="mt-10 inline-block rounded-sm bg-gold-gradient px-8 py-3.5 font-semibold text-navy-deep shadow-gold">{t.employers.cta}</a>
      </section>
    </>
  );
}
