import { SfScrollable } from '@storefront-ui/react';
import { ProductCard } from '~/components';
import { ProductSliderProps } from './types';

export function ProductSlider({ products, className, ...attributes }: ProductSliderProps) {
  return (
    <SfScrollable
      buttonsPlacement="floating"
      className="items-center pb-4"
      {...attributes}
      wrapperClassNames={className}
    >
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </SfScrollable>
  );
}
