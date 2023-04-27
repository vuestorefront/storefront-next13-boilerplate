import { Price } from '@/helpers/getProductPrice/types';

export type CartTotals = {
  regular: Price;
  special: Price;
  quantity: number;
  tax: Price;
  promoCodeSpecial: number;
  deliveryCost: Price;
  priceWithDelivery: Price;
};
