import { render } from '@testing-library/react';
import { Pagination } from '~/components';

describe('<Pagination />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<Pagination currentPage={4} pageSize={24} maxVisiblePages={5} totalItems={2137} />);

    expect(getByTestId('pagination')).toBeInTheDocument();
  });
});
