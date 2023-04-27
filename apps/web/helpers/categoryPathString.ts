export function categoryPathString(slug: string[]): string {
  const path = slug.filter(Boolean).join('/');
  return `/category/${path}`;
}
