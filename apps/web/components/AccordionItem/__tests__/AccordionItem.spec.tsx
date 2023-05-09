import { render } from '@testing-library/react';
import { AccordionItem } from '~/components/AccordionItem';

const onToggleMock = jest.fn();

const mockProps = {
  label: 'mock-label',
  open: false,
  onToggle: onToggleMock,
};

describe('<AccordionItem />', () => {
  it('should render component', () => {
    const { getByText } = render(<AccordionItem {...mockProps} />);

    getByText(/mock-label/);
  });
});
