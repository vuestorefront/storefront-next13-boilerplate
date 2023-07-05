import { PropsWithChildren } from 'react';
import { SfCart } from '@vue-storefront/unified-data-model';

export type OrderSummaryPropsType = PropsWithChildren & {
  className?: string;
  cart: SfCart;
};
