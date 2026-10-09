import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Layout";
import { SITE } from "@/lib/site";

const DOCS: Record<string, { title: string; sections: [string, string][] }> = {
  privacy: { title: "Privacy Policy", sections: [
    ["What we collect", "Name, age, sex, contact details, education, experience, passport number, region, emergency contact, photos and documents you provide for recruitment."],
    ["Why we collect it", "Only to assess eligibility, match you with employers, process visas, travel and insurance, and to contact you about your application."],
    ["Sharing", "Data is shared only with verified employers, embassies, the Ministry of Labor and Skills and service providers needed for your deployment. We never sell personal data."],
    ["Security & retention", "Records are stored securely with restricted access and kept only as long as required by law or your active application."],
    ["Your rights", `You may request access, correction or deletion of your data by contacting ${SITE.email}.`],
  ]},
  terms: { title: "Terms of Service", sections: [
    ["Use of this website", "Information on this site is provided in good faith. Vacancies are subject to employer availability and legal approval."],
    ["Applications", "Submitting an application does not guarantee employment. Applicants must provide truthful information and authentic documents."],
    ["Fees", "Al Basma charges only fees permitted by Ethiopian law. Always request an official receipt. Never pay unofficial intermediaries."],
    ["Liability", "We are not responsible for information provided by third parties or for delays caused by government authorities."],
    ["Governing law", "These terms are governed by the laws of the Federal Democratic Republic of Ethiopia."],
  ]},
  "ethical-recruitment": { title: "Anti-Trafficking & Ethical Recruitment Statement", sections: [
    ["Zero tolerance", "Al Basma has zero tolerance for human trafficking, forced labour, debt bondage and child labour."],
    ["Our commitments", "Recruitment only through legal channels; written contracts in a language the worker understands; no passport retention; no deceptive promises; minimum age respected."],
    ["Employer partners", "We work only with employers and partner agencies that commit to fair wages, decent living conditions and freedom of movement."],
    ["Reporting", "Anyone may report concerns confidentially by phone, WhatsApp or email. Reports are investigated promptly and forwarded to authorities where required."],
  ]},
  complaints: { title: "Complaints & Grievance Procedure", sections: [
    ["1. Submit", `Contact us at ${SITE.phones[0]}, on WhatsApp, by email (${SITE.email}) or in person at our office.`],
    ["2. Acknowledge", "We acknowledge every complaint within 2 working days and assign a responsible officer."],
    ["3. Investigate", "We review the facts with the worker, employer and partner agency, protecting the complainant from retaliation."],
    ["4. Resolve", "We aim to resolve complaints within 15 working days and inform you of the outcome in writing."],
    ["5. Escalate", "If unsatisfied, you may escalate to the Ministry of Labor and Skills or the Ethiopian embassy in the destination country."],
  ]},
};

export const Route = createFileRoute("/legal/$doc")({
  loader: ({ params }) => {
    const d = DOCS[params.doc];
    if (!d) throw notFound();
    return d;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.title} | Al Basma Recruitment` },
      { name: "description", content: `${loaderData.title} of ${SITE.name}.` },
      { property: "og:title", content: loaderData.title },
      { property: "og:description", content: `${loaderData.title} of ${SITE.name}.` },
    ] : [],
  }),
  component: Legal,
});

function Legal() {
  const d = Route.useLoaderData();
  return (
    <>
      <PageHero title={d.title} sub="Last updated: October 2026" />
      <article className="mx-auto max-w-3xl space-y-8 px-6 py-16">
        {d.sections.map(([h, b]) => <section key={h}><h2 className="text-3xl">{h}</h2><p className="mt-2 leading-relaxed text-muted-foreground">{b}</p></section>)}
      </article>
    </>
  );
}
