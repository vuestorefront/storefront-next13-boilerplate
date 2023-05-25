import { NarrowContainer } from '~/components';
import { render } from '@testing-library/react';

describe('<NarrowContainer />', () => {
  it('should render child', () => {
    const { getByTestId } = render(
      <NarrowContainer>
        <div>children</div>
      </NarrowContainer>,
    );

    expect(getByTestId('narrow-container')).toHaveTextContent('children');
  });
});
