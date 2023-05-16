import React from 'react';
import { render } from '@testing-library/react';
import { CategoryTreeItem } from '../CategoryTreeItem';

describe('<CategoryTreeItem />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<CategoryTreeItem name="test" count={0} href="" />);

    expect(getByTestId('category-tree-item')).toBeInTheDocument();
  });
});
