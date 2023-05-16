import { render } from '@testing-library/react';
import { Badge } from '~/components';

describe('<Badge />', () => {
  it('should render component', () => {
    const { queryByTestId } = render(<Badge data-testid="badge" />);

    expect(queryByTestId('badge')).toBeInTheDocument();
  });
});
