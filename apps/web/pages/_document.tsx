import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://res.cloudinary.com/" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
