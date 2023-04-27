import { useIntersection } from 'react-use';
import { fireEvent, render } from '@testing-library/react';
import { ScrollToTopButton } from '~/components';

global.scrollTo = jest.fn();

jest.mock('react-use', () => ({
  ...jest.requireActual('react-use'),
  useIntersection: jest.fn(),
}));

const useIntersectionMock = jest.mocked(useIntersection);

describe('<ScrollToTopButton />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<ScrollToTopButton />);

    getByTestId('scroll-top');
  });

  it('should smooth scroll top on button click', () => {
    const { getByRole } = render(<ScrollToTopButton />);
    const button = getByRole('button');
    fireEvent.click(button);

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('should display button when observed element is intersecting', () => {
    useIntersectionMock.mockReturnValueOnce({ isIntersecting: false } as ReturnType<typeof useIntersection>);
    const { getByRole } = render(<ScrollToTopButton />);
    const button = getByRole('button');

    expect(button).toHaveClass('opacity-100');
  });

  it('should hide button when observed element is not intersecting', () => {
    useIntersectionMock.mockReturnValueOnce({ isIntersecting: true } as ReturnType<typeof useIntersection>);
    const { getByRole } = render(<ScrollToTopButton />);
    const button = getByRole('button');

    expect(button).toHaveClass('opacity-0');
  });
});
