import { render } from '@testing-library/react';
import { CategoryPageContent } from '~/components/CategoryPageContent';
import { createWrapper } from '~/jest.utils';
import type { CategoryPageContentProps } from '../types';

const setSearchParamsMock = jest.fn();
const openMock = jest.fn();
const closeMock = jest.fn();

jest.mock('~/hooks', () => ({
  ...jest.requireActual('~/hooks'),
  useLockBodyScroll: jest.fn(() => ({
    isOpen: false,
    open: openMock,
    close: closeMock,
  })),
  useMyShoppingList: jest.fn(() => ({
    addToMyShoppingList: jest.fn(),
  })),
  useSearchParams: jest.fn(() => ({
    setSearchParams: setSearchParamsMock,
    getSearchParams: jest.fn(() => ({
      page: 1,
    })),
  })),
}));

const wrapper = createWrapper();

afterEach(() => {
  jest.clearAllMocks();
});

describe('<CategoryPageContent />', () => {
  it('renders the category title', () => {
    const { getByText } = render(<CategoryPageContent title="title" totalProducts={0} products={[]} />, { wrapper });

    expect(getByText('title')).toBeInTheDocument();
  });
});
