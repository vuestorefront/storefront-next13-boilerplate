import { render } from '@testing-library/react';
import { ContactInformationForm } from '~/components/ContactInformation/ContactInformationForm';

describe('<ContactInformationForm />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<ContactInformationForm onSave={() => {}} />);

    expect(getByTestId('contact-information-form')).toBeInTheDocument();
  });
});
