import { render } from '@testing-library/react';
import { CheckoutAddress } from '~/components';
import { createWrapper } from '~/jest.utils';

jest.mock('~/hooks', () => ({
  useCart: jest.fn(() => ({ data: {} })),
}));

describe('<CheckoutAddress />', () => {
  it('should render component', () => {
    const { getByTestId } = render(
      <CheckoutAddress type="billingAddress" heading="Test heading" description="Test desc" buttonText="test button text" />,
      { wrapper: createWrapper(), }
    );

    expect(getByTestId('checkout-address')).toBeInTheDocument();
  });
});
