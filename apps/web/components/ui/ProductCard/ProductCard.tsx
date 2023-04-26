import Image from 'next/image';
import { SfButton, SfRating, SfCounter, SfLink, SfIconShoppingCart } from '@storefront-ui/react';
import { ProductCardProps } from './types';

export function ProductCard({ description, name, price, rating, reviews, image }: ProductCardProps) {
  return (
    <div className="border border-neutral-200 rounded-md hover:shadow-lg flex-auto flex-shrink-0 max-w-[192px]">
      <div className="relative">
        <SfLink href="#" className="relative block w-full pb-[100%]">
          <Image src={image} alt="Great product" className="object-cover rounded-md aspect-square w-full h-full" fill />
        </SfLink>
      </div>
      <div className="p-2 border-t border-neutral-200 typography-text-sm">
        <SfLink href="#" variant="secondary" className="no-underline">
          {name}
        </SfLink>
        <div className="flex items-center pt-1">
          <SfRating size="xs" value={rating} max={5} />

          <SfLink href="#" variant="secondary" className="ml-1 no-underline">
            <SfCounter size="xs">{reviews}</SfCounter>
          </SfLink>
        </div>
        <p className="block py-2 font-normal typography-text-xs text-neutral-700 text-justify">{description}</p>
        <span className="block pb-2 font-bold typography-text-sm">${price}</span>
        <SfButton type="button" size="sm" slotPrefix={<SfIconShoppingCart size="sm" />}>
          Add
        </SfButton>
      </div>
    </div>
  );
}
