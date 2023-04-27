import { render } from '@testing-library/react';
import { Overlay } from '../';

describe('<Overlay />', () => {
  it('should render component', () => {
    const { queryByTestId } = render(<Overlay visible />);

    expect(queryByTestId('overlay')).toBeInTheDocument();
  });

  it('should not render component', () => {
    const { queryByTestId } = render(<Overlay />);

    expect(queryByTestId('overlay')).not.toBeInTheDocument();
  });
});
