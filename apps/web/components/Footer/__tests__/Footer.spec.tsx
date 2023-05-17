import { render } from '@testing-library/react';
import { Footer } from '~/components';

describe('<Footer />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<Footer />);

    expect(getByTestId('footer')).toBeTruthy();
  });
});
