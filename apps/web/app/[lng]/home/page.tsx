// Import your Client Component
import { dehydrate } from '@tanstack/query-core';
import getQueryClient from '~/app/getQueryClient';
import Hydrate from '~/app/rq/Hydrate';
import { sdk } from '~/sdk';
import HomePage from './home-page';

async function getContent(url: string) {
  return sdk.commerce.getContent({ url });
}

export default async function Page() {
  const url = 'home-page';
  // Prefetch data directly in a Server Component
  const client = getQueryClient();
  await client.prefetchQuery(['content', url], () => getContent(url));

  const dehydratedState = dehydrate(client, {
    shouldDehydrateQuery: () => true,
  });
  // const content = await getContent(url);

  return (
    <Hydrate state={dehydratedState}>
      <HomePage url={url} />
    </Hydrate>
  );
}
