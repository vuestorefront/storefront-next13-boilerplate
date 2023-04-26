import { SfScrollable } from '@storefront-ui/react';
import { ProductCard } from '~/components';

export function ProductSlider() {
  return (
    <SfScrollable buttonsPlacement="floating" className="items-center pb-4">
      {Array.from({ length: 10 }, (_, index) => (
        <ProductCard key={index} />
      ))}
    </SfScrollable>
  );
}
