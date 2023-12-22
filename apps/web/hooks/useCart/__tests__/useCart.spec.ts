import { renderHook, waitFor } from '@testing-library/react';
import { useCart } from '~/hooks';
import { createWrapper } from '~/jest.utils';
import { mockCart } from './useCart.mock';

const sdk = {
  commerce: {
    getCart: jest.fn(() => mockCart),
  },
};

describe('useCart', () => {
  it('should return cart', async () => {
    const wrapper = createWrapper({ sdk });
    const { result } = renderHook(() => useCart(), { wrapper });

    await waitFor(() => expect(result.current.data).not.toBeUndefined());

    expect(result.current.data).toMatchInlineSnapshot(`
      {
        "appliedCoupons": [],
        "billingAddress": null,
        "customerEmail": null,
        "id": "test",
        "lineItems": [],
        "shippingAddress": null,
        "shippingMethod": null,
        "subtotalDiscountedPrice": {
          "amount": 0,
          "currency": "USD",
          "precisionAmount": "2",
        },
        "subtotalRegularPrice": {
          "amount": 99.99,
          "currency": "USD",
          "precisionAmount": "2",
        },
        "totalCouponDiscounts": {
          "amount": 0,
          "currency": "USD",
          "precisionAmount": "2",
        },
        "totalItems": 0,
        "totalPrice": {
          "amount": 99.99,
          "currency": "USD",
          "precisionAmount": "2",
        },
        "totalShippingPrice": null,
        "totalTax": {
          "amount": 0,
          "currency": "USD",
          "precisionAmount": "2",
        },
      }
    `);
  });
});
