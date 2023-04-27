import React from 'react';
import { CategoryEmptyState } from '@/components';
import { render } from '@testing-library/react';

describe('<CategoryEmptyState/>', () => {
  it('should render category empty state', () => {
    const { getByText } = render(<CategoryEmptyState />);

    getByText('category:emptyStateText');
    getByText('allProductsLinkText');
    expect(getByText('allProductsLinkText').closest('a')).toHaveAttribute('href', '/category');
  });
});
