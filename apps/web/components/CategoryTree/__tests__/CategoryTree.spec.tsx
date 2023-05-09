import React from 'react';
import { render } from '@testing-library/react';
import { CategoryTree } from '~/components';

describe('<CategoryTree/>', () => {
  it('should render component', () => {
    const { container } = render(<CategoryTree categories={[]} />);

    expect(container).not.toBeEmptyDOMElement();
  });
});
