import { useState } from 'react';
import { SfAttribute, SfProduct } from '@vsf-enterprise/unified-data-model';
import { chain, get, map, defaults as withDefaults, zipObject } from 'lodash-es';

/**
 * Hook for getting product attributes data
 * @param {SfProduct} product Product object
 */
export function useProductAttribute<TAttribute extends string>(product: SfProduct, attributesNames: TAttribute[] = []) {
  const attributes = chain(product?.variants || [])
    .flatMap((variant) => variant.attributes)
    .uniqBy('value')
    .groupBy('name')
    .pick(attributesNames)
    .value();

  const mapAttribute = (attributes: SfAttribute[] = []) => {
    const mappedAttributes = chain(attributes)
      .groupBy('name')
      .pick(attributesNames)
      .mapValues((attribute) => attribute[0].value)
      .value();

    const defaults = zipObject(
      attributesNames,
      map(attributesNames, () => null),
    );
    return withDefaults(mappedAttributes, defaults);
  };

  const [selectedAttrs, setSelectedAttrs] = useState(mapAttribute(product.attributes));

  return {
    getAttributeList: (attributeName: TAttribute) => get(attributes, attributeName, [] as SfAttribute[]),
    getAttribute: (attributeName: TAttribute) => get(selectedAttrs, attributeName, null),
    setAttribute: (attributeName: TAttribute, attributeValue: string) => {
      setSelectedAttrs((previous) => ({
        ...previous,
        [attributeName]: attributeValue,
      }));
    },
  };
}
