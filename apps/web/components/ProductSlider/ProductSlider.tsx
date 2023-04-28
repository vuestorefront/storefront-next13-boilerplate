import { SfScrollable } from '@storefront-ui/react';
import { ProductCard } from '~/components';
import { ProductSliderProps } from './types';

export function ProductSlider({ products }: ProductSliderProps) {
  return (
    <SfScrollable buttonsPlacement="floating" className="items-center pb-4">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </SfScrollable>
  );
}
