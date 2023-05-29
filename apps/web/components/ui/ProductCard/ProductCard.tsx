import Image from 'next/image';
import Link from 'next/link';
import { SfButton, SfRating, SfCounter, SfLink, SfIconShoppingCart } from '@storefront-ui/react';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import type { ProductCardProps } from '~/components';

export function ProductCard({
  name,
  description,
  imageUrl,
  imageAlt,
  price,
  rating,
  ratingCount,
  slug,
  className,
  priority,
  ...attributes
}: ProductCardProps) {
  const { t } = useTranslation();

  return (
    <div
      className={classNames('border border-neutral-200 rounded-md hover:shadow-lg flex-auto flex-shrink-0', className)}
      data-testid="product-card"
      {...attributes}
    >
      <div className="relative">
        <SfLink href={`/product/${slug}`} as={Link} className="relative block w-full pb-[100%]">
          <Image
            src={imageUrl ?? ''}
            alt={imageAlt || 'primary image'}
            className="object-cover rounded-md aspect-square w-full h-full"
            data-testid="image-slot"
            fill
            sizes="(max-width: 768px) 50vw, 190px"
            priority={priority}
          />
        </SfLink>
      </div>
      <div className="p-2 border-t border-neutral-200 typography-text-sm">
        <SfLink href={`/product/${slug}`} as={Link} variant="secondary" className="no-underline">
          {name}
        </SfLink>
        <div className="flex items-center pt-1">
          <SfRating size="xs" value={rating} max={5} />

          <SfLink href="#" variant="secondary" as={Link} className="ml-1 no-underline">
            <SfCounter size="xs">{ratingCount}</SfCounter>
          </SfLink>
        </div>
        <p className="block py-2 font-normal typography-text-xs text-neutral-700 text-justify">{description}</p>
        <span className="block pb-2 font-bold typography-text-sm" data-testid="product-card-vertical-price">
          ${price}
        </span>
        <SfButton type="button" size="sm" slotPrefix={<SfIconShoppingCart size="sm" />}>
          {t('addToCartShort')}
        </SfButton>
      </div>
    </div>
  );
}
