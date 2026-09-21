import type { Metadata } from 'next';
export const site = {
  name: 'Veyro Network',
  origin: 'https://veyronetwork.xyz',
  product: 'https://veyro.casa',
  demo: 'https://tryveyro.casa',
};
export function pageMetadata(title: string, description: string, path = '/'): Metadata {
  const url = `${site.origin}${path === '/' ? '' : path}`;
  return {
    title, description, alternates: {canonical: url},
    openGraph: {title, description, url, siteName: site.name, locale: 'en_US', type: 'website'},
    twitter: {card: 'summary', title, description},
  };
}
