import { useQuery } from '@tanstack/react-query';
import { useSdk } from '~/sdk';

export function useCart() {
  const sdk = useSdk();

  return useQuery(['cart'], () => sdk.commerce.getCart(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
