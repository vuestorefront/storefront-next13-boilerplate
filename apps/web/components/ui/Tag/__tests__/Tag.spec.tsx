import { render } from '@testing-library/react';
import { Tag } from '../Tag';

describe('<Tag />', () => {
  it('should pass className', () => {
    const { container } = render(<Tag className="passed-class" />);

    expect(container.firstChild).toHaveClass('passed-class');
  });

  it('should render children', () => {
    const { getByText } = render(<Tag>Test</Tag>);

    expect(getByText('Test')).toBeInTheDocument();
  });
});
