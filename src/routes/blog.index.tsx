import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Layout";
import { POSTS } from "@/lib/site";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | Working Abroad Tips — Al Basma Recruitment" },
      { name: "description", content: "Guides on preparing for work abroad, migrant worker rights and job opportunities in the Gulf." },
      { property: "og:title", content: "Al Basma Blog" },
      { property: "og:description", content: "Guides and news for Ethiopian workers going abroad." },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <>
      <PageHero title="Blog & News" sub="Guides, rights and opportunities for workers going abroad." />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-3">
        {POSTS.map((p) => (
          <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group rounded-md border bg-card p-7 transition hover:shadow-gold">
            <time className="text-xs uppercase tracking-widest text-gold">{p.date}</time>
            <h2 className="mt-3 text-2xl group-hover:underline decoration-gold">{p.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
