import { render } from '@testing-library/react';
import { AddressForm } from '~/components';

describe('<AddressForm />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<AddressForm type="billingAddress" />);

    expect(getByTestId('address-form')).toBeInTheDocument();
  });
});
