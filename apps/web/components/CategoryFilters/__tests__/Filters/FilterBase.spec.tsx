import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { FilterBase } from '~/components/CategoryFilters/Filters';
import { FilterBaseProps } from '../../types';

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
} as unknown as FilterBaseProps;

describe('<FilterBase/>', () => {
  it('should render component with props', () => {
    const { getByText } = render(<FilterBase {...mockProps}>{() => null}</FilterBase>);

    getByText('filter-label');
  });

  it('should render by default list of 5 elements', () => {
    const { getAllByTestId } = render(
      <FilterBase {...mockProps}>
        {({ itemsToRender }) =>
          itemsToRender.map((val) => (
            <div key={val.term} data-testid="test-item">
              test-item
            </div>
          ))
        }
      </FilterBase>,
    );
    const list = getAllByTestId('test-item');

    expect(list.length).toEqual(5);
  });

  it('should render custom list length', () => {
    const mockMax = 3;
    const { getAllByTestId } = render(
      <FilterBase {...mockProps} max={mockMax}>
        {({ itemsToRender }) =>
          itemsToRender.map((val) => (
            <div key={val.term} data-testid="test-item">
              test-item
            </div>
          ))
        }
      </FilterBase>,
    );
    const list = getAllByTestId('test-item');

    expect(list.length).toEqual(mockMax);
  });

  it('should set selected items active', () => {
    const onChangeMock = jest.fn();
    const props = {
      ...mockProps,
      onChange: onChangeMock,
      selected: [],
    };
    const { getAllByTestId } = render(
      <FilterBase {...props}>
        {({ itemsToRender, onItemClick }) =>
          itemsToRender.map((val) => (
            <button type="button" key={val.term} data-testid="test-item" onClick={() => onItemClick(val.term)}>
              test-item
            </button>
          ))
        }
      </FilterBase>,
    );
    const list = getAllByTestId('test-item');

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
    const { getAllByTestId } = render(
      <FilterBase {...props}>
        {({ itemsToRender, onItemClick }) =>
          itemsToRender.map((val) => (
            <button type="button" key={val.term} data-testid="test-item" onClick={() => onItemClick(val.term)}>
              test-item
            </button>
          ))
        }
      </FilterBase>,
    );
    const list = getAllByTestId('test-item');

    fireEvent.click(list[0]);

    expect(onChangeMock).toHaveBeenCalledWith(['term2']);
  });

  it('should not show `show more` button when `max` is not smaller than element list length', async () => {
    const mockMax = mockProps.facet.value.terms.length;
    const { queryByText } = render(
      <FilterBase {...mockProps} max={mockMax}>
        {() => null}
      </FilterBase>,
    );
    const showMoreButton = queryByText('showMore');

    expect(showMoreButton).toBeNull();
  });

  it('should show `show more` button when `max` is smaller than element list length', async () => {
    const mockMax = mockProps.facet.value.terms.length - 1;
    const { queryByText } = render(
      <FilterBase {...mockProps} max={mockMax}>
        {() => null}
      </FilterBase>,
    );
    const showMoreButton = queryByText('showMore');

    expect(showMoreButton).toBeInTheDocument();
  });

  it('should toggle items visiblity on `show more` button click', async () => {
    const mockMax = 3;
    const { getAllByTestId, getByText, queryByText } = render(
      <FilterBase {...mockProps} max={mockMax}>
        {({ itemsToRender }) =>
          itemsToRender.map((val) => (
            <div key={val.term} data-testid="test-item">
              test-item
            </div>
          ))
        }
      </FilterBase>,
    );
    const showMoreButton = getByText('showMore');

    expect(getAllByTestId('test-item').length).toEqual(mockMax);

    fireEvent.click(showMoreButton);

    expect(getAllByTestId('test-item').length).toEqual(mockProps.facet.value.terms.length);
    await waitFor(() => {
      expect(queryByText('showMore')).toBeNull();
      expect(queryByText('showLess')).toBeVisible();
    });

    fireEvent.click(showMoreButton);

    expect(getAllByTestId('test-item').length).toEqual(mockMax);
    await waitFor(() => {
      expect(queryByText('showMore')).toBeVisible();
      expect(queryByText('showLess')).toBeNull();
    });
  });
});
