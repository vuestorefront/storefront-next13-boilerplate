import { renderHook } from '@testing-library/react';
import { SfProduct } from '@vue-storefront/unified-data-model';
import { useProductBreadcrumbs } from '~/hooks';

describe('useProductBreadcrumbs', () => {
  it('should return breadcrumbs for product', () => {
    const productMock = {
      name: 'product-name',
    } as SfProduct;

    const { result } = renderHook(() => useProductBreadcrumbs(productMock));

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
