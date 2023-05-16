import { render } from '@testing-library/react';
import { Tag } from '~/components';

describe('<Tag />', () => {
  it('should pass className', () => {
    const { getByTestId } = render(<Tag data-testid="tag" />);

    expect(getByTestId('tag')).toBeDefined();
  });
});
