import { renderHook, waitFor } from '@testing-library/react';
import { useCartShippingMethods } from '~/hooks';
import { createWrapper } from '~/jest.utils';
import { mockCartShippingMethods } from './useCartShippingMethods.mock';

const sdk = {
  commerce: {
    getShippingMethods: jest.fn(() => mockCartShippingMethods),
  },
};

describe('useCartShippingMethods', () => {
  it('should return shipping methods', async () => {
    const wrapper = createWrapper({ sdk });
    const { result } = renderHook(() => useCartShippingMethods(), { wrapper });

    await waitFor(() => expect(result.current.data).not.toBeUndefined());

    expect(result.current.data).toEqual(mockCartShippingMethods);
  });
});
