import { render } from '@testing-library/react';
import { RenderContent } from '~/components';

describe('<RenderContent />', () => {
  it('should render component', () => {
    const { getByTestId } = render(<RenderContent content={[]} data-testid="render-content" />);

    expect(getByTestId('render-content')).toBeInTheDocument();
  });
});
