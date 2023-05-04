import { render } from '@testing-library/react';
import { SfProduct } from '@vsf-enterprise/unified-data-model';
import { ProductAccordion } from '~/components';
import { createWrapper } from '~/jest.utils';

describe('<ProductAccordion />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<ProductAccordion product={{} as SfProduct} data-testid="product-accordion" />, {
      wrapper: createWrapper(),
    });

    getByTestId('product-accordion');
  });
});
