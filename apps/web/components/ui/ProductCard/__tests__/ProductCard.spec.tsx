import { render } from '@testing-library/react';
import { ProductCard } from '~/components';

describe('<ProductCard />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<ProductCard name="test" price={100} imageUrl="/images/product.webp" />);

    expect(getByTestId('product-card')).toBeInTheDocument();
  });
});
