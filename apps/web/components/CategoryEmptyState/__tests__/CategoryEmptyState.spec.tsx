import React from 'react';
import { render } from '@testing-library/react';
import { CategoryEmptyState } from '~/components/CategoryEmptyState';

describe('<CategoryEmptyState/>', () => {
  it('should render category empty state', () => {
    const { getByText } = render(<CategoryEmptyState />);

    getByText('category:emptyStateText');
  });
});
