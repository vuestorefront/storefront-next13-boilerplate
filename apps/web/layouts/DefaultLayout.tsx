import type { PropsWithChildren } from 'react';
import { Footer, NavbarBottom, ScrollToTopButton } from '@/components';

export function DefaultLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <>
      {/*<NavbarTop />*/}
      {/*<Breadcrumbs />*/}
      <main>{children}</main>
      <NavbarBottom />
      <ScrollToTopButton />
      <Footer className="mb-[58px] md:mb-0" />
      {/*<Notifications />*/}
    </>
  );
}

DefaultLayout.defaultProps = {
  breadcrumbs: [],
};
