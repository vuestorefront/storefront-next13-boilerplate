// Import your Client Component
import { dehydrate } from '@tanstack/query-core';
import Hydrate from '~/app/rq/Hydrate';
import getQueryClient from '~/app/rq/getQueryClient';
import { sdk } from '~/sdk';
import ProductPage from './product-page';

async function getProduct(slug: string) {
  return sdk.commerce.getProduct({ slug });
}

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
  // Prefetch data directly in a Server Component
  const client = getQueryClient();
  await client.prefetchQuery(['product', slug], () => getProduct(slug));

  const dehydratedState = dehydrate(client, {
    shouldDehydrateQuery: () => true,
  });
  // const content = await getContent(url);

  return (
    <Hydrate state={dehydratedState}>
      <ProductPage slug={slug} />
    </Hydrate>
  );
}
