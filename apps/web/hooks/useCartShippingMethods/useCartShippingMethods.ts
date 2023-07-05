import { useQuery } from '@tanstack/react-query';
import { SfShippingMethods } from '@vue-storefront/unified-data-model';
import { sdk } from '~/sdk';

const fetchShippingMethods = async (): Promise<SfShippingMethods> => {
  return sdk.commerce.getShippingMethods();
};

export function useCartShippingMethods() {
  return useQuery(['shippingMethods'], () => fetchShippingMethods(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
