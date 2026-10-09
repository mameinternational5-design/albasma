import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, FileCheck, GraduationCap, Plane, ShieldCheck, HeartHandshake, Check, Quote, type LucideIcon } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { JOBS, waLink } from "@/lib/site";
import { LogoHero, SectionTitle } from "@/components/site/Layout";
import training from "@/assets/training.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Al Basma Recruitment | Jobs in Saudi Arabia & Kuwait" },
      { name: "description", content: "Licensed Ethiopian foreign employment agent in Addis Ababa. Recruitment, visa, training, travel and insurance for Saudi Arabia and Kuwait." },
      { property: "og:title", content: "Al Basma Recruitment | Jobs in Saudi Arabia & Kuwait" },
      { property: "og:description", content: "Legal, safe and ethical overseas employment from Ethiopia." },
    ],
  }),
  component: Index,
});

export const SERVICE_ICONS: LucideIcon[] = [Briefcase, FileCheck, GraduationCap, Plane, ShieldCheck, HeartHandshake];

const TESTIMONIALS = [
  { q: "Al Basma explained every step and trained me well. I felt safe from the first day.", n: "Hana T.", r: "House Maid, Riyadh" },
  { q: "Transparent process, no hidden brokers. I received my visa quickly.", n: "Abdi K.", r: "Driver, Kuwait City" },
  { q: "The candidates were well prepared and professional. A reliable partner.", n: "Partner Agency", r: "Jeddah, Saudi Arabia" },
];

function Index() {
  const { t } = useI18n();
  return (
    <>
      <section className="surface-dark ridge-bg overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="animate-rise text-xs uppercase tracking-[0.3em] text-gold">{t.hero.eyebrow}</p>
            <h1 className="mt-6 text-5xl leading-[1.05] md:text-7xl">
              <span className="block animate-rise text-ivory" style={{ animationDelay: ".1s" }}>{t.hero.title1}</span>
              <span className="block animate-rise text-gold-gradient italic" style={{ animationDelay: ".25s" }}>{t.hero.title2}</span>
            </h1>
            <p className="mt-6 max-w-lg animate-rise text-lg text-ivory/75" style={{ animationDelay: ".4s" }}>{t.hero.sub}</p>
            <div className="mt-9 flex flex-wrap gap-4 animate-rise" style={{ animationDelay: ".55s" }}>
              <Link to="/apply" className="rounded-sm bg-gold-gradient px-7 py-3.5 font-semibold text-navy-deep shadow-gold">{t.hero.cta}</Link>
              <Link to="/services" hash="employers" className="rounded-sm border border-gold/50 px-7 py-3.5 font-semibold text-gold hover:bg-gold/10">{t.hero.cta2}</Link>
            </div>
          </div>
          <LogoHero />
        </div>
        <div className="border-t border-gold/15">
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 md:grid-cols-4">
            {[["500+", t.stats.placed], ["2", t.stats.countries], ["6", t.stats.days], ["100%", t.stats.legal]].map(([n, l]) => (
              <div key={l} className="border-gold/10 py-8 text-center md:border-e last:border-0">
                <div className="font-display text-4xl text-gold-gradient">{n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-ivory/60">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle title={t.services.title} sub={t.services.sub} />
        <div className="grid gap-px overflow-hidden rounded-md border bg-border md:grid-cols-3">
          {t.services.items.map(([h, d], i) => {
            const Icon = SERVICE_ICONS[i] ?? SERVICE_ICONS[0]!;
            return (
              <div key={h} className="group bg-card p-8 transition hover:bg-navy">
                <Icon className="h-8 w-8 text-gold" />
                <h3 className="mt-5 text-2xl group-hover:text-ivory">{h}</h3>
                <p className="mt-2 text-sm text-muted-foreground group-hover:text-ivory/70">{d}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="surface-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle title={t.process.title} light />
          <ol className="grid gap-6 md:grid-cols-5">
            {t.process.steps.map(([h, d], i) => (
              <li key={h} className="relative rounded-md border border-gold/20 p-6">
                <span className="font-display text-5xl text-gold-gradient">0{i + 1}</span>
                <h3 className="mt-3 text-2xl text-ivory">{h}</h3>
                <p className="mt-2 text-sm text-ivory/65">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle title={t.jobs.title} sub={t.jobs.sub} />
        <div className="grid gap-5 md:grid-cols-3">
          {JOBS.slice(0, 6).map((j) => (
            <div key={j.id} className="flex flex-col rounded-md border bg-card p-6 transition hover:-translate-y-1 hover:shadow-gold">
              <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs">{j.country}</span>
              <h3 className="mt-4 text-2xl">{j.title}</h3>
              <p className="text-sm text-muted-foreground">{j.type} · {j.salary}</p>
              <Link to="/apply" search={{ job: j.id }} className="mt-6 text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4">{t.jobs.applyFor} →</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
          <img src={training} alt="Pre-departure training session" className="rounded-md object-cover shadow-gold" loading="lazy" />
          <div>
            <h2 className="text-4xl md:text-5xl">{t.employers.title}</h2>
            <p className="mt-4 text-muted-foreground">{t.employers.sub}</p>
            <ul className="mt-6 space-y-3">{t.employers.points.map((p) => <li key={p} className="flex gap-3"><Check className="h-5 w-5 text-gold" />{p}</li>)}</ul>
            <a href={waLink("Hello Al Basma, we would like to request workers.")} target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-sm bg-navy px-7 py-3.5 font-semibold text-ivory">{t.employers.cta}</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle title={t.testimonials.title} />
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((x) => (
            <figure key={x.n} className="rounded-md border bg-card p-8">
              <Quote className="h-7 w-7 text-gold" />
              <blockquote className="mt-4 font-display text-xl italic">“{x.q}”</blockquote>
              <figcaption className="mt-5 text-sm"><b>{x.n}</b> · <span className="text-muted-foreground">{x.r}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="surface-dark ridge-bg">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-4xl text-gold-gradient md:text-5xl">{t.cta.title}</h2>
          <p className="mt-3 text-ivory/70">{t.cta.sub}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/apply" className="rounded-sm bg-gold-gradient px-7 py-3.5 font-semibold text-navy-deep">{t.nav.apply}</Link>
            <a href={waLink()} target="_blank" rel="noreferrer" className="rounded-sm bg-whatsapp px-7 py-3.5 font-semibold text-ivory">{t.cta.whatsapp}</a>
          </div>
        </div>
      </section>
    </>
  );
}
