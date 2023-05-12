import { useMemo } from 'react';

export function useCartShippingMethods() {
  return useMemo(() => {
    return {
      shippingMethods: [
        {
          id: 'id1',
          name: 'Standard US',
          key: 'standard-us',
        },
      ],
    };
  }, []);
}
