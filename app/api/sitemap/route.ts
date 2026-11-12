import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://pontoperfeito.pt";
  const lastmod = new Date().toISOString().split("T")[0];

  const routes = [
    { url: baseUrl, changefreq: "weekly", priority: 1.0 },
    { url: `${baseUrl}#servicos`, changefreq: "monthly", priority: 0.8 },
    { url: `${baseUrl}#sobre`, changefreq: "monthly", priority: 0.7 },
    { url: `${baseUrl}#processo`, changefreq: "monthly", priority: 0.7 },
    { url: `${baseUrl}#faq`, changefreq: "monthly", priority: 0.7 },
    { url: `${baseUrl}#contactos`, changefreq: "weekly", priority: 0.9 },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${route.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}