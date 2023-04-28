import { render } from '@testing-library/react';
import { Display } from '~/components';

describe('<Display />', () => {
  it('should render DisplayItem component', () => {
    const { getByTestId } = render(<Display />);
    
    expect(getByTestId('display')).toBeInTheDocument();
  });
});
