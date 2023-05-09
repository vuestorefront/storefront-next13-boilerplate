import { render } from '@testing-library/react';
import { CategorySidebar } from '~/components';

describe('<CategorySidebar />', () => {
  it('should render component', () => {
    const { container } = render(<CategorySidebar isOpen={false} closeSidebar={jest.fn()} />);

    expect(container).not.toBeEmptyDOMElement();
  });
});
