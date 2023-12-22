import { renderHook, waitFor } from '@testing-library/react';
import { createWrapper } from '~/jest.utils';
import { useProductReviews } from '../useProductReviews';
import { mockProducts } from './useProductReviews.mock';

const sdk = {
  commerce: {
    getProductReviews: jest.fn(() => mockProducts),
  },
};

describe('useProductReviews', () => {
  it('should return product reviews', async () => {
    const wrapper = createWrapper({ sdk });
    const { result } = renderHook(() => useProductReviews('mock-slug'), { wrapper });

    await waitFor(() => expect(result.current.data).not.toBeUndefined());

    expect(result.current.data).toMatchInlineSnapshot(`
      [
        {
          "createdAt": "2022-04-28T12:00:00.000Z",
          "id": "1",
          "rating": 5,
          "reviewer": "John Doe",
          "text": "I recently purchased a pair of sneakers and I am thoroughly impressed with their quality and comfort. The design is sleek and modern, and the shoes are available in a variety of colors to suit anyone's style preferences. The upper is made of a breathable and durable material that allows my feet to stay cool and dry during long walks or runs. The sole is also very comfortable and provides great support for my feet, making it easy for me to wear them all day without experiencing any discomfort or fatigue. Overall, I highly recommend these sneakers to anyone in the market for a comfortable and stylish shoe that can handle any activity. They are definitely worth the investment!",
          "title": "Great product!",
        },
        {
          "createdAt": "2022-03-01T09:30:00.000Z",
          "id": "2",
          "rating": 5,
          "reviewer": "John Doe",
          "text": "I recently purchased a pair of sneakers and I am thoroughly impressed with their quality and comfort. The design is sleek and modern, and the shoes are available in a variety of colors to suit anyone's style preferences. The upper is made of a breathable and durable material that allows my feet to stay cool and dry during long walks or runs. The sole is also very comfortable and provides great support for my feet, making it easy for me to wear them all day without experiencing any discomfort or fatigue. Overall, I highly recommend these sneakers to anyone in the market for a comfortable and stylish shoe that can handle any activity. They are definitely worth the investment!",
          "title": "Great product!",
        },
      ]
    `);
  });
});
