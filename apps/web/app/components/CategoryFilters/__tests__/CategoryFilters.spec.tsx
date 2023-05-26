import { render } from '@testing-library/react';
import { CategoryFilters } from '~/components';

describe('<CategoryFilters />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<CategoryFilters facets={[]} />);

    expect(getByTestId('category-filters')).toBeInTheDocument();
  });
});
