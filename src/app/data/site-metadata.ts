export const SITE_ORIGIN = 'https://macarronescontomatico.es';

export function setCanonicalUrl(document: Document, pathname: string): string {
  const canonicalUrl = new URL(pathname, `${SITE_ORIGIN}/`).href;
  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }

  canonical.href = canonicalUrl;
  return canonicalUrl;
}
