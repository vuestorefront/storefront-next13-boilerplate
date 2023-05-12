import { render } from '@testing-library/react';
import { Display } from '~/components';

describe('<Display />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<Display items={[]} />);

    expect(getByTestId('display')).toBeInTheDocument();
  });
});
