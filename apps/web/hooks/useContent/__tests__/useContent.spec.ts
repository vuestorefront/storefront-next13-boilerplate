import { QueryClient } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import { createWrapper } from '~/jest.utils';
import { useContent, prefetchContent } from '../useContent';
import { mockContent } from './useContent.mock';

jest.mock('~/sdk', () => ({
  sdk: {
    commerce: {
      getContent: jest.fn(() => mockContent),
    }
  }
}));


describe('prefetchProduct', () => {
  it('should return queryClient', async () => {
    const client = await prefetchContent('mock-url');
    
    expect(client).toBeInstanceOf(QueryClient);
  });
});

describe('useContent', () => {
  it('should return content', async () => {
    const wrapper = createWrapper();
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
