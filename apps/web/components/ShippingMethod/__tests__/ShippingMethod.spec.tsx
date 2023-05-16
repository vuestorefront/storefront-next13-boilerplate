import { render } from '@testing-library/react';
import { ShippingMethod } from '~/components';
import { createWrapper } from '~/jest.utils';

describe('<ShippingMethod />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<ShippingMethod />, { wrapper: createWrapper(), });

    expect(getByTestId('shipping-method')).toBeInTheDocument();
  });
});
