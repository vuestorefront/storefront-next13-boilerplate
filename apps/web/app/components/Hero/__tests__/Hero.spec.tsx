import { render } from '@testing-library/react';
import { Hero } from '~/components';

describe('<Hero />', () => {
  it('should render component', () => {
    const { getByTestId } = render(
      <Hero
        data-testid="hero"
        title=""
        primaryButtonLink=""
        description=""
        image="/images/product.webp"
        subtitle=""
        primaryButtonText=""
        secondaryButtonLink=""
        secondaryButtonText=""
      />,
    );

    expect(getByTestId('hero')).toBeInTheDocument();
  });
});
