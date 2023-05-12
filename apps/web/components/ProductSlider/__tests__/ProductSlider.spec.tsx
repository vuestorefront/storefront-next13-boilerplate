import { render } from '@testing-library/react';
import { ProductSlider } from '~/components';

describe('<ProductSlider />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<ProductSlider products={[]} data-testid="product-slider" />);

    expect(getByTestId('product-slider')).toBeInTheDocument();
  });
});
