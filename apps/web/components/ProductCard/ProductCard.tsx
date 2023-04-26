import Image from 'next/image';
import { SfButton, SfRating, SfCounter, SfLink, SfIconShoppingCart } from '@storefront-ui/react';

export default function ProductCard() {
  return (
    <div className="border border-neutral-200 rounded-md hover:shadow-lg flex-auto flex-shrink-0 max-w-[192px]">
      <div className="relative">
        <SfLink href="#" className="relative block w-full pb-[100%]">
          <Image
            src="/images/product.webp"
            alt="Great product"
            className="object-cover rounded-md aspect-square w-full h-full"
            fill
          />
        </SfLink>
      </div>
      <div className="p-2 border-t border-neutral-200 typography-text-sm">
        <SfLink href="#" variant="secondary" className="no-underline">
          Athletic mens walking sneakers
        </SfLink>
        <div className="flex items-center pt-1">
          <SfRating size="xs" value={5} max={5} />

          <SfLink href="#" variant="secondary" className="ml-1 no-underline">
            <SfCounter size="xs">{123}</SfCounter>
          </SfLink>
        </div>
        <p className="block py-2 font-normal typography-text-xs text-neutral-700 text-justify">
          Lightweight • Non slip • Flexible outsole • Easy to wear on and off
        </p>
        <span className="block pb-2 font-bold typography-text-sm">$2345,99</span>
        <SfButton type="button" size="sm" slotPrefix={<SfIconShoppingCart size="sm" />}>
          Add
        </SfButton>
      </div>
    </div>
  );
}
