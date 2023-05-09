import { render } from '@testing-library/react';
import { CategoryPageContent } from '~/components';

jest.mock('~/hooks', () => ({
  useSearchParams: jest.fn(() => ({
    setSearchParams: jest.fn(),
    getSearchParams: jest.fn(() => []),
  })),
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe('<CategoryPageContent />', () => {
  it('should render component', () => {
    const { container } = render(<CategoryPageContent title="title" totalProducts={0} products={[]} />);

    expect(container).not.toBeEmptyDOMElement();
  });
});
