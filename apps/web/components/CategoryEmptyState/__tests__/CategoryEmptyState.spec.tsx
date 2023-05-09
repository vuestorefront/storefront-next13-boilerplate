import React from 'react';
import { render } from '@testing-library/react';
import { CategoryEmptyState } from '~/components/CategoryEmptyState';

describe('<CategoryEmptyState/>', () => {
  it('should render category empty state', () => {
    const { container } = render(<CategoryEmptyState />);

    expect(container).not.toBeEmptyDOMElement();
  });
});
