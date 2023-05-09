import React from 'react';
import { render } from '@testing-library/react';
import { FilterBase } from '~/components/CategoryFilters/Filters';
import { FilterBaseProps } from '../../types';

afterEach(() => {
  jest.clearAllMocks();
});

const mockProps = {
  facet: {
    values: [{ value: 'term1', productCount: 1 }],
  },
  selected: [],
  onChange: () => {},
  label: 'filter-label',
  max: undefined,
} as unknown as FilterBaseProps;

describe('<FilterBase/>', () => {
  it('should render component', () => {
    const { container } = render(<FilterBase {...mockProps}>{() => null}</FilterBase>);
    console.log('container', container);
    expect(container).not.toBeEmptyDOMElement();
  });
});
