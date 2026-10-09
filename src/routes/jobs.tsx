import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/site/Layout";
import { useI18n } from "@/lib/i18n";
import { JOBS } from "@/lib/site";

export const Route = createFileRoute("/jobs")({
  head: () => ({
    meta: [
      { title: "Open Jobs in Saudi Arabia & Kuwait | Al Basma" },
      { name: "description", content: "Current vacancies: house maids, drivers, nurses, cleaners and cooks in Saudi Arabia and Kuwait." },
      { property: "og:title", content: "Open Jobs | Al Basma Recruitment" },
      { property: "og:description", content: "Apply for overseas jobs through a licensed Ethiopian agency." },
    ],
  }),
  component: Jobs,
});

function Jobs() {
  const { t } = useI18n();
  const [f, setF] = useState("All");
  const list = JOBS.filter((j) => f === "All" || j.country === f);
  return (
    <>
      <PageHero title={t.jobs.title} sub={t.jobs.sub} />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex flex-wrap gap-2">
          {["All", "Saudi Arabia", "Kuwait"].map((c) => (
            <button key={c} onClick={() => setF(c)} className={`rounded-full border px-4 py-1.5 text-sm ${f === c ? "border-navy bg-navy text-ivory" : "bg-card"}`}>{c}</button>
          ))}
        </div>
        <div className="divide-y rounded-md border bg-card">
          {list.map((j) => (
            <div key={j.id} className="flex flex-wrap items-center justify-between gap-4 p-6">
              <div>
                <h3 className="text-2xl">{j.title}</h3>
                <p className="flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="h-3.5 w-3.5 text-gold" />{j.country} · {j.type} · {j.salary}</p>
              </div>
              <Link to="/apply" search={{ job: j.id }} className="rounded-sm bg-gold-gradient px-6 py-2.5 text-sm font-semibold text-navy-deep">{t.jobs.applyFor}</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
