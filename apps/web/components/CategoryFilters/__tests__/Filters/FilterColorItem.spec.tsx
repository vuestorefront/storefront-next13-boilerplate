import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { FilterColorItem } from '~/components/CategoryFilters/Filters/FilterColorItem';
import { FilterColorItemProps } from '../../types';

afterEach(() => {
  jest.clearAllMocks();
});

describe('<FilterColorItem/>', () => {
  it('should render component with props', () => {
    const props: FilterColorItemProps = {
      color: 'test-color',
      name: 'test-name',
      selected: true,
      onClick: () => {},
      count: 123,
    };

    const { getByText } = render(<FilterColorItem {...props} />);

    getByText('test-name');
  });

  it('should call onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    const props: FilterColorItemProps = {
      color: 'test-color',
      name: 'test-name',
      selected: true,
      onClick: onClickMock,
      count: 123,
    };

    const { container } = render(<FilterColorItem {...props} />);

    fireEvent.click(container.querySelectorAll('label')[0]);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
