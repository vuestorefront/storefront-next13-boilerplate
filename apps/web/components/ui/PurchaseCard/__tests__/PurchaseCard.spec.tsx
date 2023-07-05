import { render } from '@testing-library/react';
import { SfProduct } from '@vue-storefront/unified-data-model';
import { PurchaseCard } from '~/components';

describe('<PurchaseCard />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<PurchaseCard product={{} as SfProduct} />);

    expect(getByTestId('purchase-card')).toBeInTheDocument();
  });
});
