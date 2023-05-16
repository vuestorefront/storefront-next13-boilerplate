import { render } from '@testing-library/react';
import { CategoryTree } from '~/components';

describe('<CategoryTree/>', () => {
  it('should render component', () => {
    const { getByTestId } = render(<CategoryTree categories={[]} />);

    expect(getByTestId('category-tree')).toBeInTheDocument();
  });
});
