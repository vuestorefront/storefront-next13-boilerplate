import { render } from '@testing-library/react';
import { CategoryCard } from '~/components';

describe('<CategoryCard />', () => {
  it('should render CategoryCard', () => {
    const { getByTestId } = render(<CategoryCard />);

    expect(getByTestId('category-card')).toBeInTheDocument();
  });
});
