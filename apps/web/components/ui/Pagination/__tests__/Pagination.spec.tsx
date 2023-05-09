import { render } from '@testing-library/react';
import { Pagination } from '~/components/ui';

describe('<Pagination />', () => {
  it('should render component', () => {
    const { container } = render(<Pagination currentPage={4} pageSize={24} maxVisiblePages={5} totalItems={2137} />);

    expect(container).not.toBeEmptyDOMElement();
  });
});
