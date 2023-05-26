import { render } from '@testing-library/react';
import { CategorySidebar } from '~/components';

describe('<CategorySidebar />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<CategorySidebar isOpen={false} closeSidebar={jest.fn()} />);

    expect(getByTestId('category-sidebar')).toBeInTheDocument();
  });
});
