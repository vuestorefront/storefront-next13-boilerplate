import { Trans } from 'react-i18next/TransWithoutContext';
import { useTranslation } from '~/app/i18n';
import { SfRating, SfLink, SfCounter, SfIconSell, SfIconPackage, SfIconWarehouse, SfIconSafetyCheck } from '../SFUI';
import { Tag } from '../Tag';
import AddToCart from './AddToCart.client';
import type { PurchaseCardProps } from './types';

export async function PurchaseCard({ product, lng, ...attributes }: PurchaseCardProps) {
  const { t } = await useTranslation(lng);

  return (
    <div
      className="p-4 xl:p-6 md:border md:border-neutral-100 md:shadow-lg md:rounded-md md:sticky md:top-20"
      data-testid="purchase-card"
      {...attributes}
    >
      <Tag variant="secondary" strong className="mb-4">
        <SfIconSell size="sm" className="ml-1" />
        <span className="mr-1">{t('sale')}</span>
      </Tag>
      <h1 className="mb-1 font-bold typography-headline-4">{product.name}</h1>
      <div className="my-1">
        <span className="mr-2 text-secondary-700 font-bold font-headings text-2xl">${product.price?.value.amount}</span>
        <span className="text-base font-normal text-neutral-500 line-through">
          ${product.price?.regularPrice.amount}
        </span>
      </div>
      <div className="inline-flex items-center mt-4 mb-2">
        <SfRating size="xs" value={product.rating?.average} max={5} />
        <SfCounter className="ml-1" size="xs">
          {product.rating?.count}
        </SfCounter>
        <SfLink href="#" variant="secondary" className="ml-2 text-xs text-neutral-500">
          {t('reviewsCount', { count: product.rating?.count })}
        </SfLink>
      </div>
      <p className="mb-4 font-normal typography-text-sm">{product.description}</p>
      <AddToCart product={product} lng={lng} />
      <div className="flex first:mt-4">
        <SfIconPackage size="sm" className="flex-shrink-0 mr-1 text-neutral-500" />
        <p className="text-sm">
          <Trans ns="product" i18nKey="additionalInfo.shipping">
            Free shipping, arrives by Thu, Apr 7. Want it faster?&nbsp;
            <SfLink href="#" variant="secondary">
              Add an address
            </SfLink>
            &nbsp;to see options
          </Trans>
        </p>
      </div>
      <div className="flex mt-4">
        <SfIconWarehouse size="sm" className="flex-shrink-0 mr-1 text-neutral-500" />
        <p className="text-sm">
          <Trans ns="product" i18nKey="additionalInfo.pickup">
            Pickup not available at Super center.&nbsp;
            <SfLink href="#" variant="secondary">
              Check availability nearby
            </SfLink>
          </Trans>
        </p>
      </div>
      <div className="flex mt-4">
        <SfIconSafetyCheck size="sm" className="flex-shrink-0 mr-1 text-neutral-500" />
        <p className="text-sm">
          <Trans ns="product" i18nKey="additionalInfo.returns">
            Free 30-Day returns.&nbsp;
            <SfLink href="#" variant="secondary">
              Details
            </SfLink>
          </Trans>
        </p>
      </div>
    </div>
  );
}
