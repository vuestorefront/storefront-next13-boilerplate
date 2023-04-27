import { render } from '@testing-library/react';
import { FormHelperText } from '../FormHelperText';

describe('<FormHelperText />', () => {
  it('should pass className', () => {
    const { container } = render(<FormHelperText className="passed-class" />);

    expect(container.firstChild).toHaveClass('passed-class');
  });
});
