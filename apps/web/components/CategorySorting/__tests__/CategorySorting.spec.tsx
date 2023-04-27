import { fireEvent, render, within } from '@testing-library/react';
import { CategorySorting } from '~/components';
import { sortingOptions } from '~/static/categoryData';

afterEach(() => {
  jest.clearAllMocks();
});

const setMock = jest.fn();
const getMock = jest.fn();

jest.mock('~/hooks', () => ({
  useSearchParams: jest.fn(() => ({
    setSearchParams: setMock,
    getSearchParams: getMock,
  })),
}));

describe('<CategorySorting/>', () => {
  it('should render component with filter container label', () => {
    const { findByText } = render(<CategorySorting />);

    findByText('sortBy');
  });

  it('should render accesible <label> tag', () => {
    const { getByLabelText } = render(<CategorySorting />);

    const label = getByLabelText('sortBy');

    expect(label).toBeVisible();
  });

  it('should render component with options', () => {
    const { getByRole } = render(<CategorySorting />);

    const section = getByRole('combobox');

    sortingOptions.forEach(({ name }) => within(section).getByText(`sortType.${name}`));
  });

  it('should display first sort option by default', () => {
    const { getByRole } = render(<CategorySorting />);

    const section = getByRole('combobox') as HTMLSelectElement;

    expect(section.value).toEqual(sortingOptions[0].id);
  });

  it('should display custom sort value when valid query is given', () => {
    (getMock as jest.Mock).mockReturnValueOnce('relevance');
    const { getByRole } = render(<CategorySorting />);

    const section = getByRole('combobox') as HTMLSelectElement;

    expect(section.value).toEqual('relevance');
  });

  it('should set `sort` url query param on `<select>` change', () => {
    const { getByRole } = render(<CategorySorting />);

    fireEvent.change(getByRole('combobox'), { target: { value: 'relevance' } });

    expect(setMock).toHaveBeenCalledWith({ sort: 'relevance' });
  });
});
