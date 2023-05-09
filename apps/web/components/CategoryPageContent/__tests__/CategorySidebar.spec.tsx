import { render } from '@testing-library/react';
import { CategorySidebar } from '../CategorySidebar';

jest.mock('~/hooks', () => ({
  useSearchParams: jest.fn(() => ({
    setSearchParams: jest.fn(),
    getSearchParams: jest.fn(() => []),
  })),
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe('<CategorySidebar />', () => {
  it('should render component', () => {
    const { container } = render(<CategorySidebar isOpen={false} closeSidebar={jest.fn()} />);

    expect(container).not.toBeEmptyDOMElement();
  });
});
