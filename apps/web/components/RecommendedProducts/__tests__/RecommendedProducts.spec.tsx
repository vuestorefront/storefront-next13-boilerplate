import { render } from '@testing-library/react';
import { RecommendedProducts } from '~/components';

describe('<RecommendedProducts />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<RecommendedProducts products={[]} />);

    expect(getByTestId('recommended-products')).toBeTruthy();
  });
});
