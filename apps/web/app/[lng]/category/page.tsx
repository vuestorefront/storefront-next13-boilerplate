// Import your Client Component
import { dehydrate } from '@tanstack/query-core';
import Hydrate from '~/app/rq/Hydrate';
import getQueryClient from '~/app/rq/getQueryClient';
import { sdk } from '~/sdk';
import CategoryPage from './category-page';

async function getProducts() {
  return sdk.commerce.getProducts();
}

export default async function Page() {
  // Prefetch data directly in a Server Component
  const client = getQueryClient();
  await client.prefetchQuery(['products'], () => getProducts());

  const dehydratedState = dehydrate(client, {
    shouldDehydrateQuery: () => true,
  });

  return (
    <Hydrate state={dehydratedState}>
      <CategoryPage />
    </Hydrate>
  );
}
