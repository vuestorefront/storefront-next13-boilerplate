import { render } from '@testing-library/react';
import { Page } from '~/components';

describe('<Page />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<Page content="test content" data-testid="page" />);

    expect(getByTestId('page')).toBeInTheDocument();
  });
});
