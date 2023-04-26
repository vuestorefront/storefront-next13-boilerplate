import { render } from '@testing-library/react';
import { Divider } from '../Divider';

describe('<Divider />', () => {
  it('should pass className', () => {
    const { container } = render(<Divider className="passed-class" />);

    expect(container.firstChild).toHaveClass('passed-class');
  });
});
