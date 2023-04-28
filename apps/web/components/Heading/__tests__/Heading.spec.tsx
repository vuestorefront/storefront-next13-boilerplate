import { render } from '@testing-library/react';
import { Heading } from '~/components';

describe('<Heading />', () => {
  it('should render default h1 tag', () => {
    const { container } = render(<Heading title="test" />);

    expect(container.querySelector('h1')).toBeInTheDocument();
  });
});
