import { render } from '@testing-library/react';
import { CartProductCard } from '~/components';

describe('<CartProductCard />', () => {
  it('should render component', () => {
    const { getByTestId } = render(
      <CartProductCard
        attributes={[]}
        imageUrl="/product.webp"
        imageAlt="alternate text"
        name="Sneaker"
        slug='sneaker'
        price={123}
        specialPrice={100}
        maxValue={10}
        minValue={1}
        value={1}
      />
    );

    expect(getByTestId('cart-product-card')).toBeInTheDocument();
  });
});
