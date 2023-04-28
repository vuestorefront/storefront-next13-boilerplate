import { render } from '@testing-library/react';
import { Hero } from '~/components';

describe('<Hero />', () => {
  it('should display Hero component', () => {
    const { getByTestId } = render(
      <Hero />,
    );

    expect(getByTestId('hero')).toBeInTheDocument();
  });
});
