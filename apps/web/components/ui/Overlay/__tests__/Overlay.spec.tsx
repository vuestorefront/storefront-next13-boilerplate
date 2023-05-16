import { render } from '@testing-library/react';
import { Overlay } from '~/components';

describe('<Overlay />', () => {
  it('should render component', () => {
    const { queryByTestId } = render(<Overlay visible />);

    expect(queryByTestId('overlay')).toBeInTheDocument();
  });
});
