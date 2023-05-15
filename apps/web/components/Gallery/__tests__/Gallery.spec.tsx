import { render } from '@testing-library/react';
import { Gallery } from '~/components';

describe('<Gallery />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<Gallery images={[]} data-testid="gallery" />);

    expect(getByTestId('gallery')).toBeInTheDocument();
  });
});
