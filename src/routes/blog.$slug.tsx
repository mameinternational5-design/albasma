import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Layout";
import { POSTS } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.title} | Al Basma Blog` },
      { name: "description", content: loaderData.excerpt },
      { property: "og:title", content: loaderData.title },
      { property: "og:description", content: loaderData.excerpt },
      { property: "og:type", content: "article" },
    ] : [],
  }),
  component: Post,
});

function Post() {
  const p = Route.useLoaderData();
  return (
    <>
      <PageHero title={p.title} sub={p.date} />
      <article className="mx-auto max-w-3xl space-y-5 px-6 py-16 text-lg leading-relaxed">
        {p.body.map((b) => <p key={b}>{b}</p>)}
        <Link to="/blog" className="inline-block pt-6 text-sm font-semibold underline decoration-gold">← All posts</Link>
      </article>
    </>
  );
}
