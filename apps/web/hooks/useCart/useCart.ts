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
    shippingMethod: {
      description: 'Credit card',
      estimatedDelivery: '0.00',
      id: 'credit-card-1',
      name: 'Credit card',
      price: {
        currency: 'USD',
        amount: 0,
        precisionAmount: '0.00',
      },
    },
    subtotalDiscountedPrice: {
      currency: 'USD',
      amount: 305,
      precisionAmount: '305.00',
    },
    subtotalRegularPrice: {
      currency: 'USD',
      amount: 325,
      precisionAmount: '325.00',
    },
    totalCouponDiscounts: {
      currency: 'USD',
      amount: 20,
      precisionAmount: '20.00',
    },
    totalItems: 1,
    totalPrice: {
      currency: 'USD',
      amount: 305,
      precisionAmount: '305.00',
    },
    totalShippingPrice: null,
    totalTax: {
      currency: 'USD',
      amount: 67,
      precisionAmount: '67.00',
    },
  };
};

export function useCart() {
  return useQuery(['cart'], () => fetchCart(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
