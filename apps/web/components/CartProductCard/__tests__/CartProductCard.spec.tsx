import { render } from '@testing-library/react';
import { CartProductCard } from '~/components';
import { createWrapper } from '~/jest.utils';

describe('<CartProductCard />', () => {
  it('should render component', () => {
    const createQueryClientWrapper = createWrapper();
    const { getByTestId } = render(<CartProductCard data-testid="cart-product-card" />, {
      wrapper: createQueryClientWrapper,
    });

    expect(getByTestId('cart-product-card')).toBeInTheDocument();
  });
});
