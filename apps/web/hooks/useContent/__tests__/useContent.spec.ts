import { QueryClient } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { createGetServerSidePropsContext, createWrapper } from '~/jest.utils';
import { useContent, prefetchContent } from '../useContent';
import { mockContent } from './useContent.mock';

const sdk = {
  commerce: {
    getContent: jest.fn(() => mockContent),
  },
};

describe('prefetchProduct', () => {
  it('should return queryClient', async () => {
    const response = await prefetchContent(createGetServerSidePropsContext({ sdk }), 'mock-url');

    expect(response).toEqual(mockContent);
  });
});

describe('useContent', () => {
  it('should return content', async () => {
    const wrapper = createWrapper({ sdk });
    const { result } = renderHook(() => useContent('mock-url'), { wrapper });

    await waitFor(() => expect(result.current.data).not.toBeUndefined());

    expect(result.current.data).toMatchInlineSnapshot(`
      [
        {
          "fields": {
            "component": "Page",
            "name": "Home Page",
            "url": "home-page",
          },
        },
      ]
    `);
  });
});
