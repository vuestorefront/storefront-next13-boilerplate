import { renderHook, waitFor } from '@testing-library/react';
import { createGetServerSidePropsContext, createWrapper } from '~/jest.utils';
import { prefetchProduct, useProduct } from '../useProduct';
import { mockProduct } from './useProduct.mock';

const sdk = {
  commerce: {
    getProduct: jest.fn(() => mockProduct),
  },
};

describe('prefetchProduct', () => {
  it('should return queryClient', async () => {
    const response = await prefetchProduct(createGetServerSidePropsContext({ sdk }), 'mock-slug');

    expect(response).toEqual(mockProduct);
  });
});

describe('useProduct', () => {
  it('should return product reviews', async () => {
    const wrapper = createWrapper({ sdk });
    const { result } = renderHook(() => useProduct('mock-slug'), { wrapper });

    await waitFor(() => expect(result.current.data).not.toBeUndefined());

    expect(result.current.data).toMatchInlineSnapshot(`
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
      }
    `);
  });
});
