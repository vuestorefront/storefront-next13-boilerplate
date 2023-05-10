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
            label: '40',
            name: 'size',
            value: '40',
          },
          {
            label: 'White',
            name: 'color',
            value: 'white',
          },
        ],
        id: '1',
        image: {
          alt: 'Athletic mens walking sneakers',
          url: '/images/product.webp',
        },
        name: 'Athletic mens walking sneakers',
        quantity: 1,
        sku: 'product-1',
        slug: 'athletic-mens-walking-sneakers',
        totalPrice: {
          currency: 'USD',
          amount: 325,
          precisionAmount: '2',
        },
        unitPrice: {
          isDiscounted: false,
          regularPrice: {
            currency: 'USD',
            amount: 325,
            precisionAmount: '2',
          },
          value: {
            currency: 'USD',
            amount: 325,
            precisionAmount: '2',
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
        precisionAmount: '2',
      },
    },
    subtotalDiscountedPrice: {
      currency: 'USD',
      amount: 305,
      precisionAmount: '2',
    },
    subtotalRegularPrice: {
      currency: 'USD',
      amount: 325,
      precisionAmount: '2',
    },
    totalCouponDiscounts: {
      currency: 'USD',
      amount: 20,
      precisionAmount: '2',
    },
    totalItems: 1,
    totalPrice: {
      currency: 'USD',
      amount: 305,
      precisionAmount: '2',
    },
    totalShippingPrice: null,
    totalTax: {
      currency: 'USD',
      amount: 67,
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
