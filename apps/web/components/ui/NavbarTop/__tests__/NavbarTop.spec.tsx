import { render } from '@testing-library/react';
import { NavbarTop } from '~/components';

describe('<NavbarTop />', () => {
  it('should render NavbarTop', () => {
    const { getByTestId } = render(<NavbarTop />);

    expect(getByTestId('navbar-top')).toBeInTheDocument();
  });
});
