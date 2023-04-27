import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { FilterColor } from '~/components/CategoryFilters/Filters';
import { FilterProps } from '../../types';

afterEach(() => {
  jest.clearAllMocks();
});

const mockProps = {
  facet: {
    value: {
      terms: [
        { term: 'term1', count: 1 },
        { term: 'term2', count: 2 },
        { term: 'term3', count: 3 },
        { term: 'term4', count: 4 },
        { term: 'term5', count: 5 },
        { term: 'term6', count: 6 },
      ],
    },
  },
  selected: [],
  onChange: () => {},
  label: 'filter-label',
  max: undefined,
} as unknown as FilterProps;

describe('<FilterColor/>', () => {
  it('should render component with props', () => {
    const { getByText } = render(<FilterColor {...mockProps} />);

    getByText('color');
  });

  it('should render list of 5 elements', () => {
    const { getAllByTestId } = render(<FilterColor {...mockProps} />);
    const list = getAllByTestId('filter-color-item');

    expect(list.length).toEqual(5);
  });

  it('should set selected items active', () => {
    const onChangeMock = jest.fn();
    const props = {
      ...mockProps,
      onChange: onChangeMock,
      selected: [],
    };
    const { getAllByTestId } = render(<FilterColor {...props} />);
    const list = getAllByTestId('filter-color-item');

    fireEvent.click(list[0]);

    expect(onChangeMock).toHaveBeenCalledWith(['term1']);
  });

  it('should filter out selected items', () => {
    const onChangeMock = jest.fn();
    const props = {
      ...mockProps,
      onChange: onChangeMock,
      selected: ['term1', 'term2'],
    };
    const { getAllByTestId } = render(<FilterColor {...props} />);
    const list = getAllByTestId('filter-color-item');

    fireEvent.click(list[0]);

    expect(onChangeMock).toHaveBeenCalledWith(['term2']);
  });
});
