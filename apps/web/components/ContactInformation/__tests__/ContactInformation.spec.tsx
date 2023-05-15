import { render } from '@testing-library/react';
import { ContactInformation } from '~/components';

describe('<ContactInformation />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<ContactInformation />);

    expect(getByTestId('contact-information')).toBeInTheDocument();
  });
});
