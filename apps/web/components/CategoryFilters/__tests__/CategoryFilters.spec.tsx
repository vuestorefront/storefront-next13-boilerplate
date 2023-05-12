import React from 'react';
import { render } from '@testing-library/react';
import { CategoryFilters } from '~/components';

describe('<CategoryFilters />', () => {
  it('should render component', () => {
    const { container } = render(<CategoryFilters facets={[]} />);

    expect(container).not.toBeEmptyDOMElement();
  });
});
