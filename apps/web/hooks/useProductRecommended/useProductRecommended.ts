import { useQuery } from '@tanstack/react-query';
import { useSdk } from '~/sdk';

/**
 * Hook for getting recommended products data
 * @param {string} slug Product slug
 */
export function useProductRecommended(slug: string) {
  const sdk = useSdk();

  return useQuery(['recommended', slug], () => sdk.commerce.getProductRecommended({ slug }), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
