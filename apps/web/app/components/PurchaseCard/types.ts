import { SfProduct } from '@vsf-enterprise/unified-data-model';

export type PurchaseCardProps = Record<string, any> & {
  product: SfProduct;
};
