import { renderHook, waitFor } from '@testing-library/react';
import { createWrapper } from '~/jest.utils';
import { useProductAttribute } from '../useProductAttribute';
import { mockProduct } from './useProduct.mock';

describe('useProductAttribute', () => {
  it('should return product attributes', async () => {
    const wrapper = createWrapper();
    const { result } = renderHook(() => useProductAttribute(mockProduct, ['attribute']), { wrapper });

    const attributeList = result.current.getAttributeList('attribute');
    const attributeValue = result.current.getAttribute('attribute');

    expect(attributeList).toEqual([]);
    expect(attributeValue).toEqual(null);
  });
});
