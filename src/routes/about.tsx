import { createFileRoute } from "@tanstack/react-router";
import { Award, Scale, Users, Globe2 } from "lucide-react";
import { PageHero, SectionTitle, LogoHero } from "@/components/site/Layout";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Al Basma Recruitment | Licensed Agency in Addis Ababa" },
      { name: "description", content: "Al Basma Foreign Employment Agent PLC — established 2026, member of Hibret Ethiopia Private Employment Agencies Association." },
      { property: "og:title", content: "About Al Basma Recruitment" },
      { property: "og:description", content: "Our mission, values and credentials." },
    ],
  }),
  component: About,
});

function About() {
  const { t } = useI18n();
  const values = [
    [Scale, "Legality", "Every placement follows the laws of Ethiopia and the destination country."],
    [Users, "Dignity", "We treat every candidate as a person, not a number."],
    [Award, "Quality", "Rigorous screening and certified training."],
    [Globe2, "Partnership", "Long-term relationships with trusted employers abroad."],
  ] as const;
  return (
    <>
      <PageHero title={t.nav.about} sub={SITE.name} />
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div className="space-y-5 text-lg text-muted-foreground">
          <h2 className="text-4xl text-navy">“Al Basma” means <i className="text-gold-gradient">the fingerprint</i>.</h2>
          <p>Just as every fingerprint is unique, every worker carries a unique story and potential. Founded in 2026 in Addis Ababa, Al Basma Foreign Employment Agent PLC helps Ethiopians build a better future through safe, legal employment in Saudi Arabia and Kuwait — with more destinations coming soon.</p>
          <p>We handle the full journey: recruitment, visa processing, pre-departure training, travel, insurance and aftercare.</p>
          <p className="text-sm">Member of {SITE.association}. Licensed by the Ministry of Labor and Skills.</p>
        </div>
        <LogoHero />
      </section>
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle title="Our values" />
          <div className="grid gap-6 md:grid-cols-4">
            {values.map(([Icon, h, d]) => (
              <div key={h} className="rounded-md bg-card p-7"><Icon className="h-8 w-8 text-gold" /><h3 className="mt-4 text-2xl">{h}</h3><p className="mt-2 text-sm text-muted-foreground">{d}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 py-24">
        <SectionTitle title="Licenses & certificates" sub="Official documents available for inspection at our office." />
        <div className="grid gap-5 md:grid-cols-3">
          {["Ministry of Labor & Skills License", "Business Registration & Trade License", "Association Membership Certificate"].map((c) => (
            <div key={c} className="ridge-bg flex aspect-[4/3] flex-col items-center justify-center rounded-md border-2 border-dashed border-gold/50 bg-card p-6 text-center">
              <Award className="h-10 w-10 text-gold" /><p className="mt-3 font-display text-xl">{c}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
