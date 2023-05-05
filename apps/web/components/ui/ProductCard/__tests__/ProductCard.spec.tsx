import { render } from '@testing-library/react';
import { SfProduct } from '@vsf-enterprise/unified-data-model';
import { ProductCard } from '~/components';

describe('<ProductCard />', () => {
  it('should render component', () => {
    const { getByTestId } = render(
      <ProductCard
        product={{ primaryImage: { url: '/images/product.webp' } } as SfProduct}
        data-testid="product-card"
      />,
    );

    getByTestId('product-card');
  });
});
