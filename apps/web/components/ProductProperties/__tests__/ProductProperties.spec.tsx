import { render } from '@testing-library/react';
import { SfProduct } from '@vue-storefront/unified-data-model';
import { ProductProperties } from '~/components';

describe('<ProductProperties />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<ProductProperties product={{} as SfProduct} data-testid="product-properties" />);

    expect(getByTestId('product-properties')).toBeInTheDocument();
  });
});
