import { renderHook } from '@testing-library/react';
import { createWrapper } from '~/jest.utils';
import { useCartShippingMethods } from '~/hooks';

describe('useCartShippingMethods', () => {
  it('should return shipping methods', async () => {
    const wrapper = createWrapper();
    const { result } = renderHook(() => useCartShippingMethods(), { wrapper });

    expect(result).toHaveProperty('current');
    expect(result.current).toHaveProperty('shippingMethods');
  });
});
