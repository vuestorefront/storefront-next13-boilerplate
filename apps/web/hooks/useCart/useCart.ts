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
        attributes: [],
        id: '1',
        image: {
          alt: '',
          url: '', // @todo set real url
        },
        name: 'Smartwatch Fitness Tracker',
        quantity: 1,
        sku: null,
        slug: 'smartwatch-fitness-tracker-1',
        totalPrice: {
          currency: 'USD',
          amount: 2345.99,
          precisionAmount: '2,345.99',
        },
        unitPrice: {
          isDiscounted: false,
          regularPrice: {
            currency: 'USD',
            amount: 2345.99,
            precisionAmount: '2,345.99',
          },
          value: {
            currency: 'USD',
            amount: 2345.99,
            precisionAmount: '2,345.99',
          },
        },
      },
      {
        attributes: [],
        id: 'attr_1',
        image: null,
        name: null,
        quantity: 1,
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
};

export function useCart() {
  return useQuery(['cart'], () => fetchCart(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
