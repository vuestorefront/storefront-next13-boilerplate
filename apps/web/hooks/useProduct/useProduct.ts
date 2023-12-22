import { QueryClient, useQuery } from '@tanstack/react-query';
import { getSdk, useSdk } from '~/sdk';

export async function prefetchProduct(slug: string): Promise<QueryClient> {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['product', slug], () => getSdk().commerce.getProduct({ slug }));

  return queryClient;
}

/**
 * Hook for getting product data
 * @param {string} slug Product slug
 */
export function useProduct(slug: string) {
  const sdk = useSdk();

  return useQuery(['product', slug], () => sdk.commerce.getProduct({ slug }), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
