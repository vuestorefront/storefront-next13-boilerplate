import { renderHook, waitFor } from '@testing-library/react';
import { useCartShippingMethods } from '~/hooks';
import { createWrapper } from '~/jest.utils';

describe('useCartShippingMethods', () => {
  it('should return shipping methods', async () => {
    const wrapper = createWrapper();
    const { result } = renderHook(() => useCartShippingMethods(), { wrapper });

    await waitFor(() => expect(result.current.data).not.toBeUndefined());

    expect(result.current.data).toMatchInlineSnapshot(`
      {
        "methods": [
          {
            "description": "",
            "estimatedDelivery": "tomorrow",
            "id": "1",
            "name": "Standard",
            "price": {
              "amount": 3,
              "currency": "USD",
              "precisionAmount": "2",
            },
          },
          {
            "description": "",
            "estimatedDelivery": "tomorrow",
            "id": "2",
            "name": "Express",
            "price": {
              "amount": 10,
              "currency": "USD",
              "precisionAmount": "2",
            },
          },
        ],
      }
    `);
  });
});
