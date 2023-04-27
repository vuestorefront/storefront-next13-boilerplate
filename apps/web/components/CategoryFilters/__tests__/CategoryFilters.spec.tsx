import React from 'react';
import { fireEvent, render, within } from '@testing-library/react';
import { GetFacetResponse } from '@vsf-enterprise/commercetools-types';
import { CategoryFilters } from '~/components';
import { useFacet } from '~/hooks';

const facetColorMock = {
  facet: 'color',
  value: {
    terms: [
      { term: 'color1', count: 1 },
      { term: 'color2', count: 2 },
      { term: 'color3', count: 3 },
      { term: 'color4', count: 4 },
      { term: 'color5', count: 5 },
      { term: 'color6', count: 6 },
    ],
  },
};
const facetSizeMock = {
  facet: 'size',
  value: {
    terms: [
      { term: 'size1', count: 1 },
      { term: 'size2', count: 2 },
      { term: 'size3', count: 3 },
      { term: 'size4', count: 4 },
      { term: 'size5', count: 5 },
      { term: 'size6', count: 6 },
    ],
  },
};

const setMock = jest.fn();

jest.mock('~/hooks', () => ({
  useSearchParams: jest.fn(() => ({
    setSearchParams: setMock,
    getAllSearchParams: jest.fn(() => ({
      color: [],
      size: [],
    })),
  })),
  useFacet: jest.fn(),
  useFacetRouteId: jest.fn(() => ({
    facetId: 'mockedId',
  })),
}));

jest.mock('~/hooks/useFacet');

const mockFacets = (data?: Partial<GetFacetResponse> | null) => ({ data } as unknown as ReturnType<typeof useFacet>);

const mockData = {
  facets: [facetColorMock, facetSizeMock],
} as unknown as GetFacetResponse;

const useFacetMock = jest.mocked(useFacet).mockReturnValue(mockFacets(mockData));

afterEach(() => {
  jest.clearAllMocks();
});

describe('<CategoryFilters/>', () => {
  it('should render component with label', () => {
    const { getByText } = render(<CategoryFilters />);

    getByText('category:filters');
  });

  it('should not render component when useFacets data is not defined', () => {
    useFacetMock.mockReturnValueOnce(mockFacets(null));
    const { queryByText } = render(<CategoryFilters />);

    expect(queryByText('category:filters')).toBeNull();
  });

  it('should render size & color filter', async () => {
    const { container } = render(<CategoryFilters />);

    const sizeFilter = container.querySelectorAll('details')[0];

    within(sizeFilter as HTMLElement).getByText('size');
    facetSizeMock.value.terms.forEach((term) => {
      within(sizeFilter as HTMLElement).getByText(term.term);
    });

    const colorFilter = container.querySelectorAll('details')[1];

    within(colorFilter as HTMLElement).getByText('color');
    facetColorMock.value.terms.slice(0, 5).forEach((term) => {
      within(colorFilter as HTMLElement).getByText(term.term);
    });
  });

  it('should set new url query on filter item click', () => {
    const { getByText } = render(<CategoryFilters />);

    const termSize = facetSizeMock.value.terms[0].term;
    const sizeFilterItem = getByText(termSize);

    const termColor = facetColorMock.value.terms[0].term;
    const colorFilterItem = getByText(termColor);

    fireEvent.click(sizeFilterItem);
    fireEvent.click(colorFilterItem);

    expect(setMock).toHaveBeenNthCalledWith(1, { size: [termSize] });
    expect(setMock).toHaveBeenNthCalledWith(2, { color: [termColor] });
  });
});
