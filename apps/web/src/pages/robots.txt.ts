import { siteMetadata } from "@lawyersForvisas/content";

export const prerender = true;

export function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap.xml", siteMetadata.siteUrl).toString()}
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8"
    }
  });
}
