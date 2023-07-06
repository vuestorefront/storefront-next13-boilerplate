import { render } from '@testing-library/react';
import { SfProductReview } from '@vue-storefront/unified-data-model';
import { Review } from '~/components';

describe('<Review />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<Review review={{} as SfProductReview} data-testid="product-review" />);

    expect(getByTestId('product-review')).toBeInTheDocument();
  });
});
