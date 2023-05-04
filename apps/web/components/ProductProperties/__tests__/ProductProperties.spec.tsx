import { render } from '@testing-library/react';
import { SfProduct } from '@vsf-enterprise/unified-data-model';
import { ProductProperties } from '~/components';

describe('<ProductProperties />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<ProductProperties product={{} as SfProduct} data-testid="product-properties" />);

    getByTestId('product-properties');
  });
});
