import { render } from '@testing-library/react';
import { CategorySorting } from '~/components';

jest.mock('~/hooks', () => ({
  useSearchParams: jest.fn(() => ({
    setSearchParams: jest.fn(),
    getSearchParams: jest.fn(),
  })),
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe('<CategorySorting />', () => {
  it('should render component', () => {
    const { container } = render(<CategorySorting />);

    expect(container).not.toBeEmptyDOMElement();
  });
});
