import { SfCart } from '@vue-storefront/unified-data-model';

export const mockCart: SfCart = {
  appliedCoupons: [],
  billingAddress: null,
  customerEmail: null,
  id: 'test',
  lineItems: [],
  shippingAddress: null,
  shippingMethod: null,
  subtotalDiscountedPrice: {
    amount: 0,
    currency: 'USD',
    precisionAmount: '2',
  },
  subtotalRegularPrice: {
    amount: 99.99,
    currency: 'USD',
    precisionAmount: '2',
  },
  totalCouponDiscounts: {
    amount: 0,
    currency: 'USD',
    precisionAmount: '2',
  },
  totalItems: 0,
  totalPrice: {
    amount: 99.99,
    currency: 'USD',
    precisionAmount: '2',
  },
  totalShippingPrice: null,
  totalTax: {
    amount: 0,
    currency: 'USD',
    precisionAmount: '2',
  },
};
