import { render } from '@testing-library/react';
import { Display } from '~/components';

describe('<Display />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<Display data-testid="display" />);
    
    getByTestId('display');
  });
});
