import Image from 'next/image';
import Link from 'next/link';
import { SfLink, SfIconSell } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';
import { QuantitySelector } from '~/components';
import type { CartProductCardProps } from '~/components';

export function CartProductCard({
  attributes,
  imageUrl,
  imageAlt,
  maxValue,
  minValue,
  name,
  price,
  specialPrice,
  value,
  slug,
}: CartProductCardProps) {
  const { t } = useTranslation('product');

  return (
    <div
      className="relative flex first:border-t border-b-[1px] border-neutral-200 hover:shadow-lg min-w-[320px] p-4 last:mb-0"
      data-testid="cart-product-card"
    >
      <div className="relative overflow-hidden rounded-md w-[100px] sm:w-[176px]">
        {!!imageUrl && (
          <SfLink as={Link} href={`/product/${slug}`}>
            <Image
              className="w-full h-auto border rounded-md border-neutral-200"
              src={imageUrl}
              alt={imageAlt || ''}
              width={300}
              height={300}
            />
          </SfLink>
        )}
        <div className="absolute top-0 left-0 text-white bg-secondary-600 py-1 pl-1.5 pr-2 text-xs font-medium">
          <SfIconSell size="xs" className="mr-1" />
          {t('product:sale')}
        </div>
      </div>
      <div className="flex flex-col pl-4 min-w-[180px] flex-1">
        <SfLink
          as={Link}
          href={`/product/${slug}`}
          variant="secondary"
          className="no-underline typography-text-sm sm:typography-text-lg"
        >
          {name}
        </SfLink>
        <div className="my-2 sm:mb-0">
          <ul className="text-xs font-normal leading-5 sm:typography-text-sm text-neutral-700">
            {attributes.map((attribute) => (
              <li key={attribute.name}>
                <span className="mr-1">{attribute.name}:</span>
                <span className="font-medium">{attribute.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="items-start sm:items-center sm:mt-auto flex flex-col sm:flex-row">
          {specialPrice ? (
            <span className="text-secondary-700 sm:order-1 font-bold typography-text-sm sm:typography-text-lg sm:ml-auto">
              ${specialPrice}
              <span className="text-neutral-500 ml-2 line-through typography-text-xs sm:typography-text-sm font-normal">
                ${price}
              </span>
            </span>
          ) : (
            <span className="font-bold sm:ml-auto sm:order-1 typography-text-sm sm:typography-text-lg">${price}</span>
          )}
          <QuantitySelector
            value={value}
            minValue={minValue}
            maxValue={maxValue}
            onChange={() => {}}
            className="mt-4 sm:mt-0"
          ></QuantitySelector>
        </div>
      </div>
    </div>
  );
}
