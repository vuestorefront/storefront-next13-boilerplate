import { SfCart } from '@vsf-enterprise/unified-data-model';

export function assertIsCartAvailable(cart: SfCart | undefined): asserts cart is SfCart {
  if (!cart) {
    throw new Error('Cart is not available');
  }
}
