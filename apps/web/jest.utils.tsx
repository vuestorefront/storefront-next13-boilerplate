/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable react/display-name */

/* eslint-disable @typescript-eslint/no-empty-function */

/* eslint-disable no-console */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GetServerSideEnhancedContext } from './helpers/types';
import { useSdk } from './sdk';

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

interface CreateWrapperParams {
  sdk?: any;
}

export const createWrapper = ({ sdk }: CreateWrapperParams = {}) => {
  const testQueryClient = createTestQueryClient();
  jest.mocked(useSdk).mockReturnValue(sdk ?? {});

  return ({ children }: any) => <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>;
};

interface CreateGetServerSidePropsContextParams {
  sdk: any;
  queryClient?: QueryClient;
}

export const createGetServerSidePropsContext = ({
  sdk,
  queryClient = createTestQueryClient(),
}: CreateGetServerSidePropsContextParams) =>
  ({
    sdk,
    queryClient,
  } as GetServerSideEnhancedContext);
