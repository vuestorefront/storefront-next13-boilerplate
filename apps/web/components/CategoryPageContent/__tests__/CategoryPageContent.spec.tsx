import { render } from '@testing-library/react';
import { CategoryPageContent } from '~/components';
import { createWrapper } from '~/jest.utils';

const wrapper = createWrapper();

describe('<CategoryPageContent />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<CategoryPageContent title="title" totalProducts={0} products={[]} />, { wrapper });

    expect(getByTestId('category-page-content')).toBeInTheDocument();
  });
});
