import { render } from '@testing-library/react';
import { SfProduct } from '@vue-storefront/unified-data-model';
import { ProductAccordion } from '~/components';
import { createWrapper } from '~/jest.utils';

describe('<ProductAccordion />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<ProductAccordion product={{} as SfProduct} data-testid="product-accordion" />, {
      wrapper: createWrapper(),
    });

    expect(getByTestId('product-accordion')).toBeInTheDocument();
  });
});
