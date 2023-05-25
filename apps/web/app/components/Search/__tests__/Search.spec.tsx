import { render } from '@testing-library/react';
import { Search } from '~/components';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('<Search />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<Search data-testid="search" />);

    expect(getByTestId('search')).toBeInTheDocument();
  });
});
