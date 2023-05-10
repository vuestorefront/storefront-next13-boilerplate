import { useQuery } from '@tanstack/react-query';
import { SfCart } from '@vsf-enterprise/unified-data-model';

const fetchCart = async (): Promise<SfCart> => {
  // @todo use mocked data from sdk

  return {
    appliedCoupons: [],
    billingAddress: null,
    customerEmail: null,
    id: 'cart',
    lineItems: [
      {
        attributes: [
          {
            label: 'size',
            name: 'size',
            value: '40',
          },
          {
            label: 'color',
            name: 'color',
            value: 'white',
          },
        ],
        id: '1',
        image: {
          alt: '',
          url: '', // @todo set real url
        },
        name: 'Philippe Model - Sneaker “Lakers“',
        quantity: 1,
        sku: null,
        slug: 'sneaker-1',
        totalPrice: {
          currency: 'USD',
          amount: 325,
          precisionAmount: '325.00',
        },
        unitPrice: {
          isDiscounted: false,
          regularPrice: {
            currency: 'USD',
            amount: 325,
            precisionAmount: '325.00',
          },
          value: {
            currency: 'USD',
            amount: 325,
            precisionAmount: '325.00',
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
};

export function useCart() {
  return useQuery(['cart'], () => fetchCart(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
