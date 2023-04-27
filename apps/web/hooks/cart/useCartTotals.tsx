import { useMemo } from 'react';
import { SfLineItem } from '@vsf-enterprise/unified-data-model';
import { calculateCartTotals, roundTotals } from '~/helpers';
import { CartTotals } from '~/hooks/cart/types';
import { useCart } from './CartProvider';

export function useCartTotals() {
  const { data: cart } = useCart();

  return useMemo(() => {
    const totalsDefault = {
      regular: 0,
      special: 0,
      quantity: 0,
      tax: 0,
      promoCodeSpecial: 0,
      deliveryCost: 0,
      priceWithDelivery: 0,
    };

    if (!cart) {
      return totalsDefault;
    }

    const totalsRounded = roundTotals(
      cart.lineItems.reduce(
        (accumulator: CartTotals, item: SfLineItem) => calculateCartTotals(accumulator, item),
        totalsDefault,
      ),
    );

    return {
      ...totalsRounded,
      deliveryCost: cart?.shippingInfo ? cart.shippingInfo.price.centAmount / 100 : 0,
      priceWithDelivery: cart?.shippingInfo ? cart.totalPrice.centAmount / 100 : totalsRounded.promoCodeSpecial,
    };
  }, [cart]);
}
