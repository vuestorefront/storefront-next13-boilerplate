import { createContext, PropsWithChildren, useContext } from 'react';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { SfCart, Maybe } from '@vsf-enterprise/unified-data-model';

export const CartContext = createContext<
  UseQueryResult<SfCart, unknown> | Pick<UseQueryResult<SfCart, unknown>, 'data' | 'isLoading' | 'isSuccess'>
>({
  data: undefined,
  isLoading: false,
  isSuccess: true,
});

async function fetchCart(): Promise<Maybe<SfCart>> {
  return null;
}

async function createCart(): Promise<SfCart> {
  return {
    appliedCoupons: [],
    billingAddress: null,
    customerEmail: null,
    id: 'cart',
    lineItems: [
      {
        attributes: [],
        id: 'attr_1',
        image: null,
        name: null,
        quantity: 10,
        sku: null,
        slug: 'product-1',
        totalPrice: {
          currency: 'USD',
          amount: 120,
          precisionAmount: '120',
        },
        unitPrice: {
          isDiscounted: false,
          regularPrice: {
            currency: 'USD',
            amount: 12,
            precisionAmount: '12',
          },
          value: {
            currency: 'USD',
            amount: 12,
            precisionAmount: '12',
          },
        },
      },
    ],
    shippingAddress: null,
    shippingMethod: null,
    subtotalDiscountedPrice: {
      currency: 'USD',
      amount: 0,
      precisionAmount: '2',
    },
    subtotalRegularPrice: {
      currency: 'USD',
      amount: 0,
      precisionAmount: '2',
    },
    totalCouponDiscounts: {
      currency: 'USD',
      amount: 0,
      precisionAmount: '2',
    },
    totalItems: 0,
    totalPrice: {
      currency: 'USD',
      amount: 0,
      precisionAmount: '2',
    },
    totalShippingPrice: null,
    totalTax: {
      currency: 'USD',
      amount: 0,
      precisionAmount: '2',
    },
  };
}

async function fetchOrCreateCart(): Promise<SfCart> {
  const cart = await fetchCart();
  return cart || (await createCart());
}

export function CartProvider({ children }: PropsWithChildren) {
  const result = useQuery(['cart'], fetchOrCreateCart, {
    refetchOnWindowFocus: false,
    staleTime: Number.POSITIVE_INFINITY,
    initialDataUpdatedAt: 0,
  });

  return <CartContext.Provider value={result}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
