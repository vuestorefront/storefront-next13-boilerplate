import Image from 'next/image';
import NextLink from 'next/link';
import { SfButton, SfRating, SfCounter, SfLink, SfIconShoppingCart } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';
import { ProductCardProps } from './types';

export function ProductCard({ product, ...attributes }: ProductCardProps) {
  const { t } = useTranslation();

  const { name, primaryImage, rating, description, price, slug } = product;

  return (
    <div
      className="border border-neutral-200 rounded-md hover:shadow-lg flex-auto flex-shrink-0 max-w-[192px]"
      {...attributes}
    >
      <div className="relative">
        <SfLink href={`/product/${slug}`} as={NextLink} className="relative block w-full pb-[100%]">
          <Image
            src={primaryImage?.url ?? ''}
            alt={primaryImage?.alt || 'primary image'}
            className="object-cover rounded-md aspect-square w-full h-full"
            fill
          />
        </SfLink>
      </div>
      <div className="p-2 border-t border-neutral-200 typography-text-sm">
        <SfLink href={`/product/${slug}`} as={NextLink} variant="secondary" className="no-underline">
          {name}
        </SfLink>
        <div className="flex items-center pt-1">
          <SfRating size="xs" value={rating?.average} max={5} />

          <SfLink href="#" variant="secondary" as={NextLink} className="ml-1 no-underline">
            <SfCounter size="xs">{rating?.count}</SfCounter>
          </SfLink>
        </div>
        <p className="block py-2 font-normal typography-text-xs text-neutral-700 text-justify">{description}</p>
        <span className="block pb-2 font-bold typography-text-sm">${price?.value.amount}</span>
        <SfButton type="button" size="sm" slotPrefix={<SfIconShoppingCart size="sm" />}>
          {t('addToCartShort')}
        </SfButton>
      </div>
    </div>
  );
}
