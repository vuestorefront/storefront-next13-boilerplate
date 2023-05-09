import { SfMoney } from '@vsf-enterprise/unified-data-model';

export function getFormattedPrice(price: SfMoney | undefined): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price?.amount || 0);
}
