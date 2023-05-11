import { PropsWithChildren } from 'react';
import { SfCart } from '@vsf-enterprise/unified-data-model';

export type OrderSummaryPropsType = PropsWithChildren & {
  className?: string;
  cart: SfCart;
};
