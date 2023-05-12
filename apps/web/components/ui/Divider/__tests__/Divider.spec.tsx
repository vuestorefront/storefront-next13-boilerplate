import { render } from '@testing-library/react';
import { Divider } from '~/components';

describe('<Divider />', () => {
  it('should pass className', () => {
    const { getByTestId } = render(<Divider className="passed-class" />);

    expect(getByTestId('divider')).toHaveClass('passed-class');
  });
});
