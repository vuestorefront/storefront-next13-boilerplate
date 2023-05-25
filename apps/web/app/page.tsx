// Import your Client Component
import { sdk } from '~/sdk';
import HomePage from './home-page';

async function getContent() {
  return sdk.commerce.getContent({ url: 'home-page' });
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const content = await getContent();
  // Forward fetched data to your Client Component
  return <HomePage content={content} />;
}
