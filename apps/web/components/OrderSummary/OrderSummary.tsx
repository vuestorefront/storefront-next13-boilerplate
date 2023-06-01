import { SfButton, SfInput } from '@storefront-ui/react';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import { Divider, Tag } from '~/components';
import type { OrderSummaryPropsType } from '~/components';

export function OrderSummary({ cart, className = '', children }: OrderSummaryPropsType): JSX.Element {
  const { t } = useTranslation('cart');

  return (
    <div
      className={classNames('md:shadow-lg md:rounded-md md:border md:border-neutral-100', className)}
      data-testid="order-summary"
    >
      <div className="flex justify-between items-end bg-neutral-100 md:bg-transparent py-2 px-4 md:px-6 md:pt-6 md:pb-4">
        <p className="typography-headline-4 font-bold md:typography-headline-3">{t('orderSummary')}</p>
        <p className="typography-text-base font-semibold" data-testid="total-in-cart">
          {t('itemsInCart', { count: cart.lineItems.length })}
        </p>
      </div>
      <div className="px-4 pb-4 mt-3 md:px-6 md:pb-6 md:mt-0">
        <div className="flex justify-between typography-text-base pb-4">
          <div className="flex flex-col grow pr-2">
            <p>{t('itemsSubtotal')}</p>
            <p className="ml-auto typography-text-xs text-neutral-500">{t('originalPrice')}</p>
            <p className="ml-auto typography-text-xs text-secondary-700">{t('savings')}</p>
            <p className="my-2">{t('delivery')}</p>
            <p>{t('estimatedTax')}</p>
          </div>
          <div className="flex flex-col text-right">
            <p data-testid="special-price">${cart.totalPrice.amount}</p>
            <p className="typography-text-xs text-neutral-500">${cart.subtotalRegularPrice.amount}</p>
            <p className="typography-text-xs text-secondary-700">${cart.totalCouponDiscounts.amount}</p>
            {!!cart.shippingMethod && <p className="my-2">${cart.shippingMethod.price.amount}</p>}
            <p>${cart.totalTax.amount}</p>
          </div>
        </div>
        {!!cart.totalCouponDiscounts.amount && (
          <div className="flex items-center py-4 border-t border-neutral-200">
            <p>{t('promoCode')}</p>
            <SfButton size="sm" variant="tertiary" className="ml-auto mr-2">
              {t('remove')}
            </SfButton>
            <p>${cart.totalCouponDiscounts.amount}</p>
          </div>
        )}
        <div className="flex gap-x-2 py-4 border-y border-neutral-200 mb-4">
          <SfInput placeholder={t('promoCodePlaceholder')} wrapperClassName="grow" />
          <SfButton variant="secondary">{t('apply')}</SfButton>
        </div>
        <div className="px-3 py-1.5 bg-secondary-100 text-secondary-700 typography-text-sm rounded-md text-center mb-4">
          <Tag className="w-full" variant="secondary">
            {t('savingsTag', { amount: `$${cart.totalCouponDiscounts.amount}` })}
          </Tag>
        </div>
        <div className="flex justify-between typography-headline-4 md:typography-headline-3 font-bold pb-4 mb-4">
          <p>{t('total')}</p>
          <p data-testid="total">${cart.totalPrice.amount}</p>
        </div>
        <Divider className="my-4 max-md:-mx-4 max-md:w-auto" />
        {children}
        <Divider className="my-10 md:hidden -mx-4 w-auto" />
      </div>
    </div>
  );
}
