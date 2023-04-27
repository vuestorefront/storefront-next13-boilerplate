import React from 'react';
import { render } from '@testing-library/react';
import { FilterContainer } from '~/components';

describe('<FilterContainer/>', () => {
  it('should render FilterContainer with title & children', () => {
    const mockTitle = 'test-title';
    const mockChildren = 'test-children';
    const { getByText } = render(<FilterContainer title={mockTitle}>{mockChildren}</FilterContainer>);

    getByText(mockTitle);
    getByText(mockChildren);
  });
});
