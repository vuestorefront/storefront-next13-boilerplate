import { render } from '@testing-library/react';
import { CategorySorting } from '~/components';

describe('<CategorySorting />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<CategorySorting />);

    expect(getByTestId('category-sorting')).toBeInTheDocument();
  });
});
