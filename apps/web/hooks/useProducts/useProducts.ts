import { useQuery } from '@tanstack/react-query';
import { GetProducts } from '@vue-storefront/storefront-boilerplate-sdk';
import { GetServerSideEnhancedContext } from '~/helpers/types';
import { useSdk } from '~/sdk';

export async function prefetchProducts(context: GetServerSideEnhancedContext): Promise<GetProducts> {
  const { queryClient, sdk } = context;
  const products = await sdk.commerce.getProducts();
  queryClient.setQueryData(['products'], products);

  return products;
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
