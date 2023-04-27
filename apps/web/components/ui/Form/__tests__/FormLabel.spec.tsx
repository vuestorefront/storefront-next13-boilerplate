import { render } from '@testing-library/react';
import { FormLabel } from '../FormLabel';

describe('<FormLabel />', () => {
  it('should pass className', () => {
    const { container } = render(<FormLabel className="passed-class" />);

    expect(container.firstChild).toHaveClass('passed-class');
  });
});
