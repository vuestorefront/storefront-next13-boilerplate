import type { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import classnames from 'classnames';
import { fontBody, fontHeadings } from '@/styles/fonts';
import '@/styles/globals.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="VSF x Next.js (Boilerplate)" />
        <title>Vue Storefront React Boilerplate</title>
      </Head>
      <div className={classnames(fontHeadings.variable, fontBody.variable, 'font-body')}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default appWithTranslation(App);
