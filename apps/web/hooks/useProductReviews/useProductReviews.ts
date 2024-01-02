import { useQuery } from '@tanstack/react-query';
import { useSdk } from '~/sdk';

/**
 * Hook for getting product reviews
 * @param {string} slug Product slug
 */
export function useProductReviews(slug: string) {
  const sdk = useSdk();

  return useQuery(['reviews', slug], () => sdk.commerce.getProductReviews({ slug }), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
