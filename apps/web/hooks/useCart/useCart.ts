import { useQuery } from '@tanstack/react-query';
import { SfCart } from '@vue-storefront/unified-data-model';
import { sdk } from '~/sdk';

const fetchCart = async (): Promise<SfCart> => {
  return sdk.commerce.getCart();
};

export function useCart() {
  return useQuery(['cart'], () => fetchCart(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
