import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Check, FileText } from "lucide-react";
import { PageHero } from "@/components/site/Layout";
import { useI18n } from "@/lib/i18n";
import { JOBS, waLink } from "@/lib/site";

export const Route = createFileRoute("/apply")({
  validateSearch: (s) => z.object({ job: z.string().optional() }).parse(s),
  head: () => ({
    meta: [
      { title: "Apply for a Job Abroad | Al Basma Recruitment" },
      { name: "description", content: "Submit your application for jobs in Saudi Arabia and Kuwait. Requirements and required documents listed." },
      { property: "og:title", content: "Apply | Al Basma Recruitment" },
      { property: "og:description", content: "Start your journey to work abroad legally and safely." },
    ],
  }),
  component: Apply,
});

const input = "w-full rounded-sm border bg-card px-3 py-2.5 text-sm focus:border-gold focus:outline-none";

function Apply() {
  const { t } = useI18n();
  const { job } = Route.useSearch();
  const [sent, setSent] = useState(false);
  const a = t.apply;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const lines = ["*New Job Application — Al Basma*", ...Array.from(fd.entries()).filter(([k]) => k !== "consent").map(([k, v]) => `${k}: ${v}`)];
    window.open(waLink(lines.join("\n")), "_blank");
    setSent(true);
  };

  const F = ({ name, label, type = "text", req = true }: { name: string; label: string; type?: string; req?: boolean }) => (
    <label className="block text-sm"><span className="mb-1 block font-medium">{label}{req && " *"}</span><input name={label} type={type} required={req} className={input} /></label>
  );

  return (
    <>
      <PageHero title={a.title} sub={a.sub} />
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-3">
        <aside className="space-y-6">
          {[[a.reqTitle, a.reqs, Check], [a.docsTitle, a.docs, FileText]].map(([h, items, Icon]) => {
            const I = Icon as typeof Check;
            return (
              <div key={h as string} className="rounded-md border bg-card p-6">
                <h3 className="text-2xl">{h as string}</h3>
                <ul className="mt-4 space-y-2 text-sm">{(items as string[]).map((r) => <li key={r} className="flex gap-2"><I className="h-4 w-4 shrink-0 text-gold" />{r}</li>)}</ul>
              </div>
            );
          })}
        </aside>
        <div className="lg:col-span-2">
          {sent ? (
            <div className="rounded-md border border-gold bg-card p-10 text-center"><Check className="mx-auto h-12 w-12 text-gold" /><p className="mt-4 text-lg">{a.sent}</p></div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5 rounded-md border bg-card p-8 md:grid-cols-2">
              <F name="name" label={a.name} />
              <F name="phone" label={a.phone} type="tel" />
              <F name="age" label={a.age} type="number" />
              <label className="block text-sm"><span className="mb-1 block font-medium">{a.sex} *</span>
                <select name={a.sex} required className={input}><option>{a.female}</option><option>{a.male}</option></select></label>
              <F name="education" label={a.education} />
              <F name="experience" label={a.experience} type="number" />
              <label className="block text-sm"><span className="mb-1 block font-medium">{a.position} *</span>
                <select name={a.position} defaultValue={job} className={input}>{JOBS.map((j) => <option key={j.id} value={j.id}>{j.title} — {j.country}</option>)}<option value="other">Other</option></select></label>
              <label className="block text-sm"><span className="mb-1 block font-medium">{a.country}</span>
                <select name={a.country} className={input}><option>Saudi Arabia</option><option>Kuwait</option><option>Any</option></select></label>
              <F name="passport" label={a.passport} req={false} />
              <F name="region" label={a.region} />
              <div className="md:col-span-2"><F name="emergency" label={a.emergency} /></div>
              <label className="block text-sm md:col-span-2"><span className="mb-1 block font-medium">{a.skills}</span><textarea name={a.skills} rows={3} className={input} /></label>
              <label className="flex gap-2 text-sm md:col-span-2"><input name="consent" type="checkbox" required className="mt-1 accent-gold" />{a.consent}</label>
              <button className="rounded-sm bg-gold-gradient py-3.5 font-semibold text-navy-deep shadow-gold md:col-span-2">{a.submit}</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
