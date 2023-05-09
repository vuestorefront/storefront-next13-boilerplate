import React from 'react';
import { render } from '@testing-library/react';
import { CategoryFilters } from '~/components';

describe('<CategoryFilters />', () => {
  it('should render component', () => {
    const { getByText } = render(<CategoryFilters />);

    getByText('category:filters');
  });
});
