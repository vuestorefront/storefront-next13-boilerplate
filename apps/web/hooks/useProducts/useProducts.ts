import { QueryClient, useQuery } from '@tanstack/react-query';
import { getSdk, useSdk } from '~/sdk';

export async function prefetchProducts(): Promise<QueryClient> {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['products'], () => getSdk().commerce.getProducts());

  return queryClient;
}

/**
 * Hook for getting products catalog data
 */
export function useProducts() {
  const sdk = useSdk();

  return useQuery(['products'], () => sdk.commerce.getProducts(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
