import { fireEvent, render } from '@testing-library/react';
import { Pagination } from '~/components/ui';

const pageUpdate = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

const defaultProps = {
  onPageUpdate: pageUpdate,
  currentPage: 4,
  maxVisiblePages: 5,
  nextLabel: 'next',
  prevLabel: 'prev',
  pageSize: 24,
  totalItems: 2137,
};

describe('<Pagination />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<Pagination {...defaultProps} />);

    expect(getByTestId('pagination')).toBeInTheDocument();
  });

  it('should go to prev page', () => {
    const { getByTestId } = render(<Pagination {...defaultProps} />);

    fireEvent.click(getByTestId('prev-page'));

    expect(pageUpdate).toHaveBeenCalledWith(3);
  });

  it('should go to next page', () => {
    const { getByTestId } = render(<Pagination {...defaultProps} />);

    fireEvent.click(getByTestId('next-page'));

    expect(pageUpdate).toHaveBeenCalledWith(5);
  });

  it('should go to first page', () => {
    const { getByTestId } = render(<Pagination {...defaultProps} />);

    fireEvent.click(getByTestId('first-page'));

    expect(pageUpdate).toHaveBeenCalledWith(1);
  });

  it('should go to last page', () => {
    const { getByTestId } = render(<Pagination {...defaultProps} />);

    fireEvent.click(getByTestId('last-page'));

    expect(pageUpdate).toHaveBeenCalledWith(90);
  });

  it('should go to 2 page', () => {
    const { getByTestId } = render(<Pagination {...defaultProps} />);

    fireEvent.click(getByTestId('page-2'));

    expect(pageUpdate).toHaveBeenCalledWith(2);
  });

  it('should go to 2 page if on first', () => {
    const { getByTestId } = render(<Pagination {...defaultProps} currentPage={1} maxVisiblePages={1} />);

    fireEvent.click(getByTestId('second-page'));

    expect(pageUpdate).toHaveBeenCalledWith(2);
  });

  it('should go to before last page', () => {
    const { getByTestId } = render(<Pagination {...defaultProps} currentPage={90} maxVisiblePages={1} />);

    fireEvent.click(getByTestId('before-last-page'));

    expect(pageUpdate).toHaveBeenCalledWith(89);
  });

  it('active page should have classes', () => {
    const { getByTestId } = render(<Pagination {...defaultProps} />);

    expect(getByTestId('page-4')).toHaveClass('active:!text-primary-900');
  });
});
