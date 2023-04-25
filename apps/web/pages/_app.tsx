import { useState } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { fontBody, fontHeadings } from '@/styles/fonts';
import '@/styles/globals.scss';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import classNames from 'classnames';
import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          mutations: {
            retry: 3,
            retryDelay: (failureCount) => 500 * 2 ** failureCount,
          },
        },
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="VSF x Next.js (Boilerplate)" />
        <title>Vue Storefront React Boilerplate</title>
      </Head>
      <Hydrate state={pageProps.dehydratedState}>
        <div className={classNames(fontHeadings.variable, fontBody.variable, 'font-body')}>
          <Component {...pageProps} />
        </div>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default appWithTranslation(App);
