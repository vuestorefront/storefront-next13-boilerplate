import { Price } from '@/helpers/getProductPrice/types';
import { CartTotals } from '@/hooks/cart/types';
import { SfCartLineItem } from '@vsf-enterprise/unified-data-model';

function getRegularPrice(item: SfCartLineItem): Price {
  return item.totalPrice.amount / 100;
}

function getSpecialPrice(item: SfCartLineItem, fallback?: false): null;
function getSpecialPrice(item: SfCartLineItem, fallback?: true): Price;
function getSpecialPrice(item: SfCartLineItem, fallback?: boolean) {
  const specialPriceCent = item.unitPrice.value?.amount;
  if (specialPriceCent) {
    return specialPriceCent / 100;
  }

  return fallback ? getRegularPrice(item) : null;
}

function getPromoCodeSpecialPrice(item: SfCartLineItem, fallback?: false): null;
function getPromoCodeSpecialPrice(item: SfCartLineItem, fallback?: true): Price;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPromoCodeSpecialPrice(item: SfCartLineItem, fallback?: boolean) {
  // @todo calc real value base on unified data model

  return null;
}

function calculateCartTotals(accumulator: CartTotals, item: SfCartLineItem): CartTotals {
  const regular = accumulator.regular + getRegularPrice(item) * item.quantity;
  const special = accumulator.special + getSpecialPrice(item, true) * item.quantity;
  const promoCodeSpecial = accumulator.promoCodeSpecial + getPromoCodeSpecialPrice(item, true) * item.quantity;
  const quantity = accumulator.quantity + item.quantity;

  return {
    quantity,
    regular,
    special,
    promoCodeSpecial,
    tax: 0,
    deliveryCost: 0,
    priceWithDelivery: 0,
  };
}

function roundTotals(totals: CartTotals): CartTotals {
  return Object.entries(totals).reduce(
    (accumulator, [key, value]) => ({
      ...accumulator,
      [key]: +value.toFixed(2),
    }),
    totals,
  );
}

export { calculateCartTotals, getRegularPrice, getSpecialPrice, getPromoCodeSpecialPrice, roundTotals };
