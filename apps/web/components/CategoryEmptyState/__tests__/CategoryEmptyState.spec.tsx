import React from 'react';
import { render } from '@testing-library/react';
import { CategoryEmptyState } from '~/components/CategoryEmptyState';

describe('<CategoryEmptyState />', () => {
  it('should render component', () => {
    const { container } = render(<CategoryEmptyState />);

    expect(container).not.toBeEmptyDOMElement();
  });
});
