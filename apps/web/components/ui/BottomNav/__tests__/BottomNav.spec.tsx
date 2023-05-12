import { render } from '@testing-library/react';
import { BottomNav } from '~/components';

describe('<BottomNav />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<BottomNav />);

    expect(getByTestId('navbar-bottom')).toBeInTheDocument();
  });
});
