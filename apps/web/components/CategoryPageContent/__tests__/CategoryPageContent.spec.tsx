import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ProductListItem } from '~/hooks/types';
import { createWrapper } from '~/jest.utils';
import { CategoryPageContent } from '../CategoryPageContent';
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

jest.mock(
  'next/legacy/image',
  () =>
    function MockedImage({ priority, unoptimized, ...props }: Record<string, any>) {
      // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
      return <img {...props} />;
    },
);

const mockImgSrc = '/foo/bar.png';
const mockImgAlt = 'alt test';

const products: ProductListItem[] = [
  {
    link: '/product/link',
    priceRegular: 100,
    rating: 3,
    ratingCount: 37,
    sku: 'sku01',
    title: 'Product 01',
    imageUrl: mockImgSrc,
    imageAlt: mockImgAlt,
  },
  {
    link: '/product/link',
    priceRegular: 200,
    rating: 4,
    ratingCount: 200,
    sku: 'sku02',
    title: 'Product 02',
    imageUrl: mockImgSrc,
  },
  {
    link: '/product/link',
    priceRegular: 300,
    rating: 4,
    ratingCount: 200,
    sku: 'sku03',
    title: 'Product 03',
    imageUrl: undefined,
  },
];

const props: CategoryPageContentProps = {
  title: 'title',
  products,
  totalProducts: 10,
};

const wrapper = createWrapper();

afterEach(() => {
  jest.clearAllMocks();
});

describe('<CategoryPageContent />', () => {
  it('renders the category title', () => {
    const { getByText } = render(<CategoryPageContent {...props} />, { wrapper });

    expect(getByText(props.title)).toBeInTheDocument();
  });

  it('renders empty state component when no products', async () => {
    const { getByTestId } = render(<CategoryPageContent {...props} products={[]} />, { wrapper });

    await waitFor(() => {
      expect(getByTestId('category-empty-state')).toBeInTheDocument();
    });
  });

  it('renders sidebar nodes', () => {
    const { getByTestId } = render(<CategoryPageContent {...props} sidebar={<div data-testid="sidebar-node" />} />, {
      wrapper,
    });

    expect(getByTestId('sidebar-node')).toBeInTheDocument();
  });

  it('renders category grid with products', () => {
    const { getAllByTestId } = render(<CategoryPageContent {...props} />, { wrapper });

    expect(getAllByTestId('product-card-vertical')).toHaveLength(3);
  });

  it('should not render pagination when not enough products', () => {
    const { queryByTestId } = render(<CategoryPageContent {...props} totalProducts={10} itemsPerPage={30} />, {
      wrapper,
    });

    expect(queryByTestId('pagination')).not.toBeInTheDocument();
  });

  it('renders pagination', async () => {
    const { getByTestId } = render(<CategoryPageContent {...props} totalProducts={100} />, { wrapper });

    await waitFor(() => {
      expect(getByTestId('pagination')).toBeInTheDocument();
    });
  });

  it('correctly sets fetch priority for images', () => {
    const { getAllByTestId } = render(<CategoryPageContent {...props} />, { wrapper });
    const productCards = getAllByTestId('image-slot');

    expect(productCards.at(0)).toHaveAttribute('fetchpriority', 'high');
    expect(productCards.at(1)).toHaveAttribute('fetchpriority', 'high');
    expect(productCards.at(2)).toHaveAttribute('fetchpriority', 'low');
  });

  it('correctly sets alt attributes for product images', () => {
    const { getAllByTestId } = render(<CategoryPageContent {...props} />, { wrapper });
    const productCards = getAllByTestId('image-slot');

    expect(productCards.at(0)).toHaveAttribute('alt', mockImgAlt);
    expect(productCards.at(1)).toHaveAttribute('alt', 'common:cardImagePlaceholder');
  });

  it('set new url query on pagination item click', async () => {
    const user = userEvent.setup();

    const { getByTestId } = render(<CategoryPageContent {...props} totalProducts={100} itemsPerPage={5} />, {
      wrapper,
    });
    const pagination = getByTestId('pagination');

    await user.click(within(pagination).getByRole('button', { name: /next/ }));

    expect(setSearchParamsMock).toBeCalledTimes(1);
    expect(setSearchParamsMock).toHaveBeenCalledWith({ page: 2 });
  });

  it('should render placeholder image', () => {
    const { getAllByTestId } = render(<CategoryPageContent {...props} />, { wrapper });
    const productCards = getAllByTestId('image-slot');

    expect(productCards.at(0)).toHaveAttribute('src', mockImgSrc);
    expect(productCards.at(2)).not.toHaveAttribute('src', mockImgSrc);
  });

  it('should open the sidebar when click event is triggered', async () => {
    const user = userEvent.setup();
    const { getByTestId } = render(<CategoryPageContent {...props} />, { wrapper });

    await user.click(getByTestId('list-settings-button'));

    expect(openMock).toHaveBeenCalled();
  });

  it('should close the sidebar when click event is triggered', async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<CategoryPageContent {...props} />, { wrapper });

    await user.click(getByRole('button', { name: /closeListSettings/ }));

    expect(closeMock).toHaveBeenCalled();
  });
});
