import React from 'react';
import { render } from '@testing-library/react';
import { PaymentMethod } from '../PaymentMethod';

describe('<PaymentMethod />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<PaymentMethod value="" />);

    expect(getByTestId('payment-method')).toBeInTheDocument();
  });
});
