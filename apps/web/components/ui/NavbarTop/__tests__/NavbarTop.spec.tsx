import { render } from '@testing-library/react';
import { NavbarTop } from '~/components';

describe('<NavbarTop />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<NavbarTop data-testid="navbar-top" />);

    expect(getByTestId('navbar-top')).toBeInTheDocument();
  });
});
