import { useQuery } from '@tanstack/react-query';
import { SfProduct } from '@vue-storefront/unified-data-model';
import { sdk } from '~/sdk';

const fetchProductRecommended = async (slug: string): Promise<SfProduct[]> => {
  return sdk.commerce.getProductRecommended({ slug });
};

/**
 * Hook for getting recommended products data
 * @param {string} slug Product slug
 */
export function useProductRecommended(slug: string) {
  return useQuery(['recommended', slug], () => fetchProductRecommended(slug), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
