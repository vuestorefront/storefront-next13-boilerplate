import { render } from '@testing-library/react';
import { SfProduct } from '@vsf-enterprise/unified-data-model';
import { PurchaseCard } from '~/components';

describe('<PurchaseCard />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<PurchaseCard product={{} as SfProduct} data-testid="product-card" />);

    getByTestId('product-card');
  });
});
