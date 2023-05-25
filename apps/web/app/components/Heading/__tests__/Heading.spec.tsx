import { render } from '@testing-library/react';
import { Heading } from '~/components';

describe('<Heading />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<Heading title="test" data-testid="heading" />);

    expect(getByTestId('heading')).toBeInTheDocument();
  });
});
