import { render } from '@testing-library/react';
import { CategorySorting } from '~/components';

describe('<CategorySorting />', () => {
  it('should render component', () => {
    const { container } = render(<CategorySorting />);

    expect(container).not.toBeEmptyDOMElement();
  });
});
