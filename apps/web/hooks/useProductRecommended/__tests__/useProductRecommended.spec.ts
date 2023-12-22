import { renderHook, waitFor } from '@testing-library/react';
import { createWrapper } from '~/jest.utils';
import { useProductRecommended } from '../useProductRecommended';
import { mockProducts } from './useProductRecommended.mock';

const sdk = {
  commerce: {
    getProductRecommended: jest.fn(() => mockProducts),
  },
};

describe('useProductRecommended', () => {
  it('should return product reviews', async () => {
    const wrapper = createWrapper({ sdk });
    const { result } = renderHook(() => useProductRecommended('mock-slug'), { wrapper });

    await waitFor(() => expect(result.current.data).not.toBeUndefined());

    expect(result.current.data).toMatchInlineSnapshot(`
      [
        {
          "attributes": [],
          "description": "",
          "gallery": [],
          "id": "1",
          "name": "Product 1",
          "price": {
            "isDiscounted": false,
            "regularPrice": {
              "amount": 100,
              "currency": "USD",
              "precisionAmount": "2",
            },
            "value": {
              "amount": 100,
              "currency": "USD",
              "precisionAmount": "2",
            },
          },
          "primaryImage": null,
          "rating": {
            "average": 4.5,
            "count": 133,
          },
          "sku": "product-1",
          "slug": "product-1",
          "variants": [],
        },
      ]
    `);
  });
});
