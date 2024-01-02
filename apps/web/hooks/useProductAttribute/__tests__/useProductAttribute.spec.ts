import { renderHook } from '@testing-library/react';
import { useProductAttribute } from '../useProductAttribute';
import { mockProduct } from './useProduct.mock';

describe('useProductAttribute', () => {
  it('should return product attributes', async () => {
    const { result } = renderHook(() => useProductAttribute(mockProduct, ['attribute']));

    const attributeList = result.current.getAttributeList('attribute');
    const attributeValue = result.current.getAttribute('attribute');

    expect(attributeList).toEqual([]);
    expect(attributeValue).toEqual(null);
  });
});
