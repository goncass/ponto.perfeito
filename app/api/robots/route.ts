import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://pontoperfeito.pt";

  const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin/private paths
Disallow: /api/
Disallow: /_next/
Disallow: /*.json$
Disallow: /*?*
Disallow: /teste_design/
`;

  return new NextResponse(robots, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}