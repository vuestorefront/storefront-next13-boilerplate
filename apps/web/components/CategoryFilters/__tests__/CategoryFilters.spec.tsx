import React from 'react';
import { render } from '@testing-library/react';
import { CategoryFilters } from '~/components';
import { getFacetByAlias } from '~/helpers';

jest.mock('~/hooks', () => ({
  useSearchParams: jest.fn(() => ({
    setSearchParams: jest.fn(),
    getAllSearchParams: jest.fn(() => []),
  })),
}));

jest.mock('~/helpers', () => ({
  getFacetByAlias: jest.fn(),
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe('<CategoryFilters />', () => {
  it('should render component', () => {
    const { container } = render(<CategoryFilters />);

    expect(container).not.toBeEmptyDOMElement();
  });
});
