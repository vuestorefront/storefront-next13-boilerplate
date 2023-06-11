'use client';

import { useTranslation } from '~/app/i18n/client';
import Link from '~/app/i18n/components/Link';
import { useCart } from '~/hooks';
import { Badge } from '../Badge';
import { SfButton, SfIconShoppingCart } from '../SFUI';

export default function CartBadge() {
  const { t } = useTranslation('common');
  const { data: cart1 } = useCart();

  const cartLineItemsCount = cart1?.lineItems.reduce((total, { quantity }) => total + quantity, 0) ?? 0;

  return (
    <SfButton
      className="mr-2 -ml-0.5 text-white bg-primary-700 hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
      as={Link}
      href="/cart"
      aria-label={t('numberInCart', { count: cartLineItemsCount })}
      variant="tertiary"
      square
      slotPrefix={
        <Badge bordered value={cartLineItemsCount} className="text-neutral-900 bg-white">
          <SfIconShoppingCart />
        </Badge>
      }
    />
  );
}
