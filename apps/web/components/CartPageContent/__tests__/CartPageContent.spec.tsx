import { render } from '@testing-library/react';
import { CartPageContent } from '~/components';
import { createWrapper } from '~/jest.utils';

describe('<CartPageContent />', () => {
  it('should render component', () => {
    const { getByTestId } = render( <CartPageContent />, { wrapper: createWrapper(), });

    expect(getByTestId('cart-page-content')).toBeInTheDocument();
  });
});
