import { useQuery } from '@tanstack/react-query';
import { SfProduct } from '@vue-storefront/unified-data-model';
import { GetServerSideEnhancedContext } from '~/helpers/types';
import { useSdk } from '~/sdk';

export async function prefetchProduct(context: GetServerSideEnhancedContext, slug: string): Promise<SfProduct> {
  const { queryClient, sdk } = context;
  const product = await sdk.commerce.getProduct({ slug });
  queryClient.setQueryData(['product', slug], product);

  return product;
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
