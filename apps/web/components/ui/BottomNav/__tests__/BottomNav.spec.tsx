import { render } from '@testing-library/react';
import { BottomNav } from '~/components';
import { createWrapper } from '~/jest.utils';

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    pathname: '/',
    push: jest.fn(),
  })),
}));

describe('<BottomNav />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<BottomNav />, { wrapper: createWrapper() });

    expect(getByTestId('navbar-bottom')).toBeInTheDocument();
  });
});
