import { useQuery } from '@tanstack/react-query';
import { useSdk } from '~/sdk';

export function useCartShippingMethods() {
  const sdk = useSdk();

  return useQuery(['shippingMethods'], () => sdk.commerce.getShippingMethods(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
