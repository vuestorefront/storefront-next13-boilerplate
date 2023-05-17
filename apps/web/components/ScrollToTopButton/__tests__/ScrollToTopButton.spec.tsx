import { render } from '@testing-library/react';
import { ScrollToTopButton } from '~/components';

jest.mock('react-use', () => ({
  ...jest.requireActual('react-use'),
  useIntersection: jest.fn(),
}));

describe('<ScrollToTopButton />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<ScrollToTopButton />);

    expect(getByTestId('scroll-top')).toBeInTheDocument();
  });
});
