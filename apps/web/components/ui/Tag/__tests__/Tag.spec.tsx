import { render } from '@testing-library/react';
import { Tag } from '~/components';

describe('<Tag />', () => {
  it('should pass className', () => {
    const { getByTestId } = render(<Tag className="passed-class" data-testid="tag" />);

    expect(getByTestId('tag')).toHaveClass('passed-class');
  });

  it('should render children', () => {
    const { getByText } = render(<Tag>Test</Tag>);

    expect(getByText('Test')).toBeInTheDocument();
  });
});
