import { render } from '@testing-library/react';
import { RenderContent } from '~/components';

describe('<RenderContent />', () => {
  it('should render component', () => {
    const contentMock = [
      {
        fields: {
          component: 'Page',
          content: 'page content',
        },
      },
    ];
    const { getByTestId } = render(<RenderContent content={contentMock} data-testid="render-content" />);

    getByTestId('render-content');
  });
});
