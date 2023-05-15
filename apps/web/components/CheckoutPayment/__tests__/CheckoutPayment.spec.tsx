import { render } from '@testing-library/react';
import { CheckoutPayment } from '~/components';

describe('<CheckoutPayment />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<CheckoutPayment activePayment="test" onPaymentChange={() => {}} />);

    expect(getByTestId('checkout-payment')).toBeInTheDocument();
  });
});
