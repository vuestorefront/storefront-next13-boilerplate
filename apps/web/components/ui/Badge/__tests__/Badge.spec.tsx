import { render } from '@testing-library/react';
import { Badge } from '../Badge';

describe('<Badge />', () => {
  it('should not show indicator with no value', () => {
    const { queryByTestId } = render(<Badge />);

    expect(queryByTestId('badge-indicator')).not.toBeInTheDocument();
  });

  it('should not show indicator with invisible prop', () => {
    const { queryByTestId } = render(<Badge invisible />);

    expect(queryByTestId('badge-indicator')).not.toBeInTheDocument();
  });

  it('should pass className', () => {
    const { getByTestId } = render(<Badge className="passed-class" value="1" />);

    expect(getByTestId('badge-indicator')).toHaveClass('passed-class');
  });

  it('should render children', () => {
    const { getByText } = render(<Badge value="1">test</Badge>);

    expect(getByText('test')).toBeInTheDocument();
  });

  it('should render dot', () => {
    const { queryByText } = render(<Badge value="test" dot />);

    expect(queryByText('test')).not.toBeInTheDocument();
  });
});
