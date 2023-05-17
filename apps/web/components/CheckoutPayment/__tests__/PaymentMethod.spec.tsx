import { render } from '@testing-library/react';
import { PaymentMethod } from '~/components/CheckoutPayment/PaymentMethod';

describe('<PaymentMethod />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<PaymentMethod />);

    expect(getByTestId('payment-method')).toBeInTheDocument();
  });
});
