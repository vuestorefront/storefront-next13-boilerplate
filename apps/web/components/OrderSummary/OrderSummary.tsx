import { PropsWithChildren } from 'react';
import { useTranslation } from 'next-i18next';
import { Divider, Tag } from '~/components/ui';
import { assertIsCartAvailable, useCart, useCartTotals, useFormatPrice } from '~/hooks';
import { OrderSummaryPromoCode } from './OrderSummaryPromoCode';

export function OrderSummary({ children }: PropsWithChildren): JSX.Element {
  const { data: cart } = useCart();
  assertIsCartAvailable(cart);
  const totals = useCartTotals();
  const { t } = useTranslation('cart');
  const { formatPrice } = useFormatPrice();

  return (
    <>
      <div
        className="flex justify-between items-center md:items-end mb-5 md:bg-inherit bg-neutral-100 -mx-4 px-4 py-2 md:mx-0 md:p-0"
        data-testid="totalInCart"
      >
        <h2>{t('orderSummary')}</h2>
        <span className="font-medium">{t('itemsInCart', { count: totals.quantity })}</span>
      </div>
      <div className="flex justify-between items-start">
        <span>{t('itemsSubtotal')}</span>
        <div className="flex items-end">
          <div className="flex flex-col items-end mr-2">
            {totals.regular - totals.special > 0 && (
              <>
                <p className="text-xs text-neutral-500">{t('originalPrice')}</p>
                <p className="text-xs text-secondary-700">{t('savings')}</p>
              </>
            )}
          </div>
          <div className="flex flex-col items-end">
            <p data-testid="specialPrice">{formatPrice(totals.special)}</p>
            {totals.regular - totals.special > 0 && (
              <>
                <p data-testid="regularPrice" className="text-xs text-neutral-500">
                  {formatPrice(totals.regular)}
                </p>
                <p data-testid="regularSaving" className="text-xs text-secondary-700">
                  -{formatPrice(totals.regular - totals.special)}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-start mt-3">
        <p>{t('delivery')}</p>
        <p data-testid="deliveryCost">{totals.deliveryCost ? `${formatPrice(totals.deliveryCost)}` : '--'}</p>
      </div>
      <div className="flex justify-between items-start mt-3">
        <p>{t('estimatedTax')}</p>
        <p data-testid="tax">{formatPrice(totals.tax)}</p>
      </div>
      <Divider className="my-4 max-md:-mx-4 max-md:w-auto" />
      <OrderSummaryPromoCode />
      <Divider className="my-4 max-md:-mx-4 max-md:w-auto" />
      {totals.regular - totals.promoCodeSpecial > 0 && (
        <Tag className="w-full mb-4" variant="secondary">
          {t('savingsTag', { amount: `${formatPrice(totals.regular - totals.promoCodeSpecial)}` })}
        </Tag>
      )}
      <div className="flex justify-between items-end mb-5">
        <h2>{t('total')}</h2>
        <h2 data-testid="total">{formatPrice(totals.priceWithDelivery)}</h2>
      </div>
      <Divider className="my-4 max-md:-mx-4 max-md:w-auto" />
      {children}
      <Divider className="my-10 md:hidden -mx-4 w-auto" />
    </>
  );
}
