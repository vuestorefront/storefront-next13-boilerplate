import { render } from '@testing-library/react';
import { RenderContent } from '~/components';
import type { ContentDynamicPage } from '~/hooks';

describe('<RenderContent />', () => {
  it('should render component', () => {
    const contentMock = [
      {
        fields: {
          component: 'Page',
          content: [{
            fields: {
              component: 'Test',
            },
          }]
        }
      }
    ] as unknown as ContentDynamicPage['content'];
    const { getByTestId } = render(<RenderContent content={contentMock} data-testid="render-content" />);

    getByTestId('render-content');
  });
});
