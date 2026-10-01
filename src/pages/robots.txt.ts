import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site ? site.toString().replace(/\/$/, '') : 'https://jichangtizi.xyz';
  
  const robots = `User-agent: *
Allow: /
Disallow: /go/

User-agent: Googlebot
Allow: /
Disallow: /go/

User-agent: Bingbot
Allow: /
Disallow: /go/

User-agent: Baiduspider
Allow: /
Disallow: /go/

User-agent: 360Spider
Allow: /
Disallow: /go/

User-agent: YandexBot
Allow: /
Disallow: /go/

Sitemap: ${siteUrl}/sitemap-index.xml
`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
