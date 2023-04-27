import React from 'react';
import { render, screen } from '@testing-library/react';
import { CategoryTreeItem } from '../CategoryTreeItem';

afterEach(() => {
  jest.clearAllMocks();
});

describe('<CategoryTreeItem/>', () => {
  it('should render with `name` prop', () => {
    const mockName = 'test-name';

    const { getByText } = render(<CategoryTreeItem name={mockName} count={0} href="" />);

    getByText(mockName);
  });

  it('should render with `count` prop', () => {
    const mockCount = 123;

    const { getByTestId } = render(<CategoryTreeItem name="" count={mockCount} href="" />);

    const counter = getByTestId('list-item-menu-counter');

    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent(mockCount.toString());
  });

  it('should not render with `count` prop when value is invalid', () => {
    const mockCount = -1;

    const { queryAllByTestId } = render(<CategoryTreeItem name="" count={mockCount} href="" />);
    const counters = queryAllByTestId('list-item-menu-counter');

    expect(counters.length).toEqual(0);
  });

  it('should render with <Link>', () => {
    const mockHref = '/test-url';

    render(<CategoryTreeItem name="" count={123} href={mockHref} />);

    expect(screen.getByRole('link')).toHaveAttribute('href', mockHref);
  });
});
