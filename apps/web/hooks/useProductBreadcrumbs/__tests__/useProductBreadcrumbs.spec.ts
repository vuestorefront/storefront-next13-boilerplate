import { renderHook } from '@testing-library/react';
import { SfProduct } from '@vue-storefront/unified-data-model';
import { useProductBreadcrumbs } from '~/hooks';
import { createWrapper } from '~/jest.utils';

afterEach(() => {
  jest.clearAllMocks();
});

describe('useProductBreadcrumbs', () => {
  it('should return breadcrumbs for product', () => {
    const wrapper = createWrapper();

    const productMock = {
      name: 'product-name',
    } as SfProduct;

    const { result } = renderHook(() => useProductBreadcrumbs(productMock), { wrapper });

    expect(result.current.breadcrumbs).toEqual([
      {
        link: '/',
        name: 'home',
      },
      {
        link: '/category',
        name: 'category',
      },
      {
        link: '#',
        name: 'product-name',
      },
    ]);
  });
});
