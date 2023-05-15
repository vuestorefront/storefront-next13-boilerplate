import { render } from '@testing-library/react';
import { FormLabel } from '~/components';

describe('<FormLabel />', () => {
  it('should pass className', () => {
    const { getByTestId } = render(<FormLabel className="passed-class" />);

    expect(getByTestId('form-label')).toHaveClass('passed-class');
  });
});
