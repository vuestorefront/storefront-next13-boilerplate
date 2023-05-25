import { render } from '@testing-library/react';
import { CategoryCard } from '~/components';

describe('<CategoryCard />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<CategoryCard items={[]} />);

    expect(getByTestId('category-card')).toBeInTheDocument();
  });
});
