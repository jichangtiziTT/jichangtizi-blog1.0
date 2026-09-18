import type { APIRoute } from 'astro';
import { ACTIVE_AIRPORTS } from '../../data/airports';

export function getStaticPaths() {
  return ACTIVE_AIRPORTS.map((airport) => ({
    params: { slug: airport.slug },
    props: { airport }
  }));
}

export const GET: APIRoute = ({ props, redirect }) => {
  const airport = props.airport;
  const targetUrl = airport?.affiliateUrl || airport?.officialUrl || '/airports/';
  
  // Return temporary 302 redirect to the external service
  return redirect(targetUrl, 302);
};
