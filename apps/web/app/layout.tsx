import { ReactNode } from 'react';
import { Metadata } from 'next';
import classNames from 'classnames';
import { fontBody, fontHeadings } from '~/styles/fonts';
// import { dir } from 'i18next';
import '../styles/main.scss';
import { fallbackLng, languages } from './i18n/settings';
import Providers from './rq/providers';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
  params: { lng = fallbackLng },
}: {
  children: ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <html lang={lng} className={classNames(fontHeadings.variable, fontBody.variable, 'font-body')}>
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
