import { QueryClient, useQuery } from '@tanstack/react-query';
import type { GetProducts } from '@vue-storefront/storefront-boilerplate-sdk';
import { sdk } from '~/sdk';

const fetchProducts = async (): Promise<GetProducts> => {
  return sdk.commerce.getProducts();
};

export async function prefetchProducts(): Promise<QueryClient> {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['products'], () => fetchProducts());

  return queryClient;
}

/**
 * Hook for getting products catalog data
 */
export function useProducts() {
  return useQuery(['products'], () => fetchProducts(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
