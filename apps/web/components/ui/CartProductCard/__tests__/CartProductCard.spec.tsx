import { render } from '@testing-library/react';
import { CartProductCard } from '~/components';

describe('<CartProductCard />', () => {
  it('should render component', () => {
    const { container } = render(
      <CartProductCard
        attributes={[]}
        imageUrl="/product.webp"
        imageAlt="alternate text"
        name="Sneaker"
        price={123}
        maxValue={10}
        minValue={1}
        value={1}
      />
    );

    expect(container).not.toBeEmptyDOMElement();
  });
});
