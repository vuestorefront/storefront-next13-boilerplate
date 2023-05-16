import { fireEvent, render } from '@testing-library/react';
import { Breadcrumbs } from '~/components';

const breadcrumbs = [
  {
    name: 'Home',
    link: '/',
  },
];

describe('<Breadcrumbs />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<Breadcrumbs breadcrumbs={breadcrumbs} />);

    expect(getByTestId('breadcrumbs')).toBeInTheDocument();
  });

  it('should toggle dropdown', () => {
    const { getByTestId, queryByTestId } = render(<Breadcrumbs breadcrumbs={breadcrumbs} />);

    expect(queryByTestId('breadcrumbsDropdown')).not.toBeInTheDocument();

    const dropdownButton = getByTestId('breadcrumbsDropdownButton');

    fireEvent.click(dropdownButton);

    expect(queryByTestId('breadcrumbsDropdown')).toBeInTheDocument();
  });
});
