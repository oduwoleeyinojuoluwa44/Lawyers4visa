import { immigrationInsightArticles, siteMetadata } from "@lawyersForvisa/content";

export const prerender = true;

const staticRoutes = [
  "/",
  "/about-us/",
  "/how-we-work/",
  "/services/",
  "/immigration-insights/",
  "/book-consultation/"
];

const urls = [
  ...staticRoutes.map((path) => ({
    loc: new URL(path, siteMetadata.siteUrl).toString(),
    lastmod: "2026-03-23"
  })),
  ...immigrationInsightArticles.map((article) => ({
    loc: new URL(`/immigration-insights/${article.slug}/`, siteMetadata.siteUrl).toString(),
    lastmod: article.publishedAt
  }))
];

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "content-type": "application/xml; charset=utf-8"
    }
  });
}
