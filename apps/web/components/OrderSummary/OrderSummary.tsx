import { PropsWithChildren, useState } from 'react';
import { SfButton, SfInput } from '@storefront-ui/react';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import { Divider, Tag } from '~/components/ui';

const orderDetails = {
  items: 3,
  originalPrice: 7824.97,
  savings: -787,
  delivery: 0,
  tax: 457.47,
};

type OrderSummaryPropsType = PropsWithChildren & {
  className?: string;
};

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

export function OrderSummary({ className = '', children }: OrderSummaryPropsType): JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const [promoCode, setPromoCode] = useState(0);

  const itemsSubtotal = () =>
    orderDetails.originalPrice + orderDetails.savings + orderDetails.delivery + orderDetails.tax;

  const totalPrice = () => itemsSubtotal() + promoCode;

  const checkPromoCode = () =>
    inputValue.toUpperCase() === 'VSF2020' ? setPromoCode(-100) : console.log('Your promo code is not valid'); // eslint-disable-line no-console

  const removePromoCode = () => setPromoCode(0);

  const { t } = useTranslation('cart');

  return (
    <div className={classNames('md:shadow-lg md:rounded-md md:border md:border-neutral-100', className)}>
      <div className="flex justify-between items-end bg-neutral-100 md:bg-transparent py-2 px-4 md:px-6 md:pt-6 md:pb-4">
        <p className="typography-headline-4 font-bold md:typography-headline-3">{t('orderSummary')}</p>
        <p className="typography-text-base font-semibold">{t('itemsInCart', { count: orderDetails.items })}</p>
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
            <p>{formatPrice(itemsSubtotal())}</p>
            <p className="typography-text-xs text-neutral-500">{formatPrice(orderDetails.originalPrice)}</p>
            <p className="typography-text-xs text-secondary-700">{formatPrice(orderDetails.savings)}</p>
            <p className="my-2">{formatPrice(orderDetails.delivery)}</p>
            <p>{formatPrice(orderDetails.tax)}</p>
          </div>
        </div>
        {!!promoCode && (
          <div className="flex items-center py-4 border-t border-neutral-200">
            <p>{t('promoCode')}</p>
            <SfButton size="sm" variant="tertiary" className="ml-auto mr-2" onClick={removePromoCode}>
              {t('remove')}
            </SfButton>
            <p>{formatPrice(promoCode)}</p>
          </div>
        )}
        <div className="flex gap-x-2 py-4 border-y border-neutral-200 mb-4">
          <SfInput
            value={inputValue}
            placeholder={t('promoCodePlaceholder')}
            wrapperClassName="grow"
            onChange={(event) => setInputValue(event.target.value)}
          />
          <SfButton variant="secondary" onClick={checkPromoCode}>
            {t('apply')}
          </SfButton>
        </div>
        <div className="px-3 py-1.5 bg-secondary-100 text-secondary-700 typography-text-sm rounded-md text-center mb-4">
          <Tag className="w-full mb-4" variant="secondary">
            {t('savingsTag', { amount: `${Math.abs(orderDetails.savings).toFixed(2)}` })}
          </Tag>
        </div>
        <div className="flex justify-between typography-headline-4 md:typography-headline-3 font-bold pb-4 mb-4">
          <p>{t('total')}</p>
          <p>{formatPrice(totalPrice())}</p>
        </div>
        <Divider className="my-4 max-md:-mx-4 max-md:w-auto" />
        {children}
        <Divider className="my-10 md:hidden -mx-4 w-auto" />
      </div>
    </div>
  );
}
