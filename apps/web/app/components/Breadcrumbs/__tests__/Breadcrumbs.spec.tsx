import { render } from '@testing-library/react';
import { Breadcrumbs } from '~/components';

describe('<Breadcrumbs />', () => {
  it('should render component', () => {
    const breadcrumbs = [
      {
        name: 'Home',
        link: '/',
      },
    ];
    const { getByTestId } = render(<Breadcrumbs breadcrumbs={breadcrumbs} />);

    expect(getByTestId('breadcrumbs')).toBeInTheDocument();
  });
});
