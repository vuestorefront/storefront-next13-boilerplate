import { useQuery } from '@tanstack/react-query';
import { SfProductReview } from '@vue-storefront/unified-data-model';
import { sdk } from '~/sdk';

const fetchProductReviews = async (slug: string): Promise<SfProductReview[]> => {
  return sdk.commerce.getProductReviews({ slug });
};

/**
 * Hook for getting product reviews
 * @param {string} slug Product slug
 */
export function useProductReviews(slug: string) {
  return useQuery(['reviews', slug], () => fetchProductReviews(slug), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
