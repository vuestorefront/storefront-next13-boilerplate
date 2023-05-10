import { render } from '@testing-library/react';
import { ProductCard } from '~/components';

describe('<ProductCard />', () => {
  it('should render component', () => {
    const { container } = render(<ProductCard name="test" price={100} imageUrl="/images/product.webp" />);

    expect(container).not.toBeEmptyDOMElement();
  });
});
