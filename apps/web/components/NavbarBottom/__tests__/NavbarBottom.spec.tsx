import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NavbarBottom } from '@/components';

const routerPushMock = jest.fn();

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    pathname: '/',
    push: routerPushMock,
  })),
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe('<NavbarBottom />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<NavbarBottom />);

    expect(getByTestId('navbar-bottom')).toBeInTheDocument();
  });

  it('should render action buttons', () => {
    const { getByTestId } = render(<NavbarBottom />);
    const section = getByTestId('navbar-bottom');
    const labels = ['home', 'products', 'search', 'cart'];

    labels.forEach((label) => {
      within(section as HTMLElement).getByText(label);
    });
  });

  it('should navigate to home page when home button is clicked', async () => {
    const { getByText } = render(<NavbarBottom />);

    await userEvent.click(getByText('home'));

    expect(routerPushMock).toHaveBeenCalledWith('/');
  });
});
