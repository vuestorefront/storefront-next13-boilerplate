import React from 'react';
import { render, within } from '@testing-library/react';
import { GetFacetResponse } from '@vsf-enterprise/commercetools-types';
import { CategoryTree } from '~/components';
import { useFacet } from '~/hooks';

afterEach(() => {
  jest.clearAllMocks();
});

const categoriesMock = [
  {
    name: 'category-1',
    id: '1',
    count: 123,
    slug: 'category-1',
  },
  {
    name: 'category-2',
    id: '2',
    count: 0,
    slug: 'category-2',
  },
  {
    name: 'category-3',
    id: '3',
    count: 1,
    slug: 'category-3',
  },
];
const currentCategoryMock = {
  id: 'test-id',
  parent: {
    name: 'parent-1',
    id: '1',
    stagedProductCount: 321,
    slug: 'parent-1',
  },
  ancestors: [
    {
      name: 'ancestor-1',
      id: 'ancestor-id-1',
      slug: 'ancestor-1',
    },
  ],
};

jest.mock('~/hooks/useFacet');

const mockFacets = (data: Partial<GetFacetResponse> | null) => ({ data } as unknown as ReturnType<typeof useFacet>);

const mockData = {
  categories: categoriesMock,
  currentCategory: currentCategoryMock,
} as unknown as GetFacetResponse;

const useFacetMock = jest.mocked(useFacet).mockReturnValue(mockFacets(mockData));

describe('<CategoryTree/>', () => {
  it('should render with title', () => {
    const { getByText } = render(<CategoryTree />);

    getByText('category');
  });

  it('should not render component when useFacets data is not defined', () => {
    useFacetMock.mockReturnValueOnce(mockFacets(null));
    const { queryByText } = render(<CategoryTree />);

    expect(queryByText('category')).toBeNull();
  });

  it('should render categories list', () => {
    const { getByTestId } = render(<CategoryTree />);

    const section = getByTestId('categories');

    categoriesMock.forEach((cat) => within(section).getByText(cat.name));
    categoriesMock.forEach((cat) => within(section).getByText(cat.count));
    categoriesMock.forEach((cat) =>
      expect(within(section).getByText(cat.name).closest('a')).toHaveAttribute(
        'href',
        `/category/${currentCategoryMock.ancestors[0].slug}/${cat.slug}`,
      ),
    );
  });

  it('should render categories without category', () => {
    useFacetMock.mockReturnValueOnce(mockFacets({ categories: categoriesMock }));
    const { getByTestId } = render(<CategoryTree />);

    const section = getByTestId('categories');

    categoriesMock.forEach((cat) => within(section).getByText(cat.name));
    categoriesMock.forEach((cat) => within(section).getByText(cat.count));
    categoriesMock.forEach((cat) =>
      expect(within(section).getByText(cat.name).closest('a')).toHaveAttribute('href', `/category/${cat.slug}`),
    );
  });

  it('should render with category prop', () => {
    useFacetMock.mockReturnValueOnce(mockFacets({ categories: [], currentCategory: currentCategoryMock }));
    const { getAllByRole } = render(<CategoryTree />);

    const parentEl = getAllByRole('link')[0];

    expect(parentEl).toHaveTextContent('allFromCategory');
    expect(parentEl).toHaveTextContent(currentCategoryMock.parent.stagedProductCount.toString());
    expect(parentEl).toHaveAttribute('href', `/category/${currentCategoryMock.ancestors[0].slug}`);
  });

  it('should render link to all products when category is root', () => {
    const currentCategoryMockWithoutCount = {
      id: 'test-id',
    };
    useFacetMock.mockReturnValueOnce(mockFacets({ categories: [], currentCategory: currentCategoryMockWithoutCount }));
    const { getAllByRole } = render(<CategoryTree />);

    const parentEl = getAllByRole('link')[0];

    expect(parentEl).toHaveTextContent('allProducts');
    expect(parentEl).toHaveAttribute('href', '/category');
  });
});
