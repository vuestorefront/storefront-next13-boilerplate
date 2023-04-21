import type { AppProps } from 'next/app';
import Head from 'next/head';
import { fontBody, fontHeadings } from '@/styles/fonts';
import '@/styles/globals.scss';
import classnames from 'classnames';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="VSF x Next.js (Boilerplate)" />
        <title>Vue Storefront Demo</title>
      </Head>
      <div className={classnames(fontHeadings.variable, fontBody.variable, 'font-body')}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
