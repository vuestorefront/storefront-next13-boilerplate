import { render } from '@testing-library/react';
import { FormHelperText } from '~/components';

describe('<FormHelperText />', () => {
  it('should pass className', () => {
    const { getByTestId } = render(<FormHelperText className="passed-class" />);

    expect(getByTestId('form-helper-text')).toHaveClass('passed-class');
  });
});
