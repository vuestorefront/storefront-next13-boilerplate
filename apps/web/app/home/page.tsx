// Import your Client Component
import { sdk } from '~/sdk';
import HomePage from './home-page';

async function getContent(url: string) {
  return sdk.commerce.getContent({ url });
}

export default async function Page() {
  const url = 'home-page';
  // Fetch data directly in a Server Component
  const content = await getContent(url);
  // Forward fetched data to your Client Component
  return <HomePage content={content} url={url} />;
}
