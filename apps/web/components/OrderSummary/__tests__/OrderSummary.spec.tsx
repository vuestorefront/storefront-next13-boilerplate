import { render } from '@testing-library/react';
import { OrderSummary } from '~/components';
import { SfCart } from '@vue-storefront/unified-data-model';

describe('<OrderSummary />', () => {
  it('should render component', () => {
    const cart: SfCart = {
      appliedCoupons: [],
      billingAddress: null,
      customerEmail: null,
      id: 'test',
      lineItems: [],
      shippingAddress: null,
      shippingMethod: null,
      subtotalDiscountedPrice: {
        amount: 0,
        currency: 'USD',
        precisionAmount: '2',
      },
      subtotalRegularPrice: {
        amount: 99.99,
        currency: 'USD',
        precisionAmount: '2',
      },
      totalCouponDiscounts: {
        amount: 0.0,
        currency: 'USD',
        precisionAmount: '2',
      },
      totalItems: 0,
      totalPrice: {
        amount: 99.99,
        currency: 'USD',
        precisionAmount: '2',
      },
      totalShippingPrice: null,
      totalTax: {
        amount: 0,
        currency: 'USD',
        precisionAmount: '2',
      },
    };

    const { getByTestId } = render(<OrderSummary cart={cart} />);

    expect(getByTestId('order-summary')).toBeInTheDocument();
  });
});
