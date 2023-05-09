import { render } from '@testing-library/react';
import { CategoryPageContent } from '~/components';

describe('<CategoryPageContent />', () => {
  it('should render component', () => {
    const { container } = render(<CategoryPageContent title="title" totalProducts={0} products={[]} />);

    expect(container).not.toBeEmptyDOMElement();
  });
});
