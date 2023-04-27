import { FormEventHandler, useState } from 'react';
import { SfButton, SfInput } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';
import { assertIsCartAvailable, useCart, useCartTotals } from '~/hooks';

const handleAddPromoCode: FormEventHandler<HTMLFormElement> = (event): void => {
  event.preventDefault();
  // @todo handle add promo code
};

export function OrderSummaryPromoCode(): JSX.Element {
  const { data: cart } = useCart();
  assertIsCartAvailable(cart);
  const { t } = useTranslation();
  const totals = useCartTotals();
  const [promoCode, setPromoCode] = useState<string>('');
  const removeCartCoupon = { isLoading: false };
  const applyCartCoupon = { isLoading: false };

  const handleRemovePromoCode = (): void => {
    setPromoCode('');
    const discountCodeId = cart.discountCodes[0].discountCode?.id;

    if (typeof discountCodeId === 'string') {
      // @todo handle remove promo code
    }
  };

  return cart?.appliedCoupons.length ? (
    <div className="flex items-center justify-between">
      <p>{t('cart:promoCode')}</p>
      <div className="flex items-center">
        <SfButton
          data-testid="removePromoCode"
          onClick={handleRemovePromoCode}
          className="mr-2"
          size="base"
          variant="tertiary"
          disabled={removeCartCoupon.isLoading}
        >
          {t('cart:remove')}
        </SfButton>
        <p data-testid="specialSavings">-${(totals.special - totals.promoCodeSpecial).toFixed(2)}</p>
      </div>
    </div>
  ) : (
    <form
      onSubmit={handleAddPromoCode}
      data-testid="applyPromoCode"
      className="flex gap-2 items-center justify-between"
    >
      <SfInput
        size="base"
        wrapperClassName="flex-1"
        onChange={(event) => setPromoCode(event.target.value)}
        value={promoCode}
        placeholder={t('cart:promoCodePlaceholder')}
        required
      />
      <SfButton type="submit" size="base" variant="secondary" disabled={applyCartCoupon.isLoading}>
        {t('cart:apply')}
      </SfButton>
    </form>
  );
}
