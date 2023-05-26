import { render } from '@testing-library/react';
import { CategoryEmptyState } from '~/components';

describe('<CategoryEmptyState />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<CategoryEmptyState />);

    expect(getByTestId('category-empty-state')).toBeInTheDocument();
  });
});
