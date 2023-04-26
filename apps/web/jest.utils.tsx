/* eslint-disable react/display-name */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable no-console */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: Number.POSITIVE_INFINITY,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  });

export const createWrapper = () => {
  const testQueryClient = createTestQueryClient();

  return ({ children }: any) => <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>;
};
