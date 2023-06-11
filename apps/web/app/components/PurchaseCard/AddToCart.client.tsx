'use client';

import { useCounter } from 'react-use';
import { clamp } from '@storefront-ui/shared';
import { useTranslation } from '~/app/i18n/client';
import { QuantitySelector } from '../QuantitySelector';
import { SfButton, SfIconCompareArrows, SfIconFavorite, SfIconShoppingCart, SfIconShoppingCartCheckout } from '../SFUI';

export default function AddToCart({ product, lng }: any) {
  const minProductQuantity = 1;
  const maxProductQuantity = 999;
  const [productQuantity, { set }] = useCounter(minProductQuantity);
  const { t } = useTranslation(lng);

  function handleOnChange(nextValue: number) {
    set(clamp(nextValue, minProductQuantity, maxProductQuantity));
  }

  return (
    <div className="py-4 mb-4 border-gray-200 border-y">
      <div className="bg-primary-100 text-primary-700 flex justify-center gap-1.5 py-1.5 typography-text-sm items-center mb-4 rounded-md">
        <SfIconShoppingCartCheckout />
        {t('common:numberInCart', { count: 1 })}
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-4">
        <QuantitySelector
          className="h-12  min-w-[145px] flex-grow flex-shrink-0 basis-0"
          value={productQuantity}
          minValue={minProductQuantity}
          maxValue={maxProductQuantity}
          onChange={handleOnChange}
        ></QuantitySelector>
        <SfButton
          type="button"
          size="lg"
          className="flex-grow-[2] flex-shrink basis-auto whitespace-nowrap"
          slotPrefix={<SfIconShoppingCart size="sm" />}
        >
          {t('common:addToCart')}
        </SfButton>
      </div>
      <div className="flex justify-center mt-4 gap-x-4">
        <SfButton type="button" size="sm" variant="tertiary" slotPrefix={<SfIconCompareArrows size="sm" />}>
          {t('common:compare')}
        </SfButton>
        <SfButton type="button" size="sm" variant="tertiary" slotPrefix={<SfIconFavorite size="sm" />}>
          {t('common:addToList')}
        </SfButton>
      </div>
    </div>
  );
}
