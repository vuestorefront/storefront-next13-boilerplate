import type { PropsWithChildren } from 'react';
import { Footer } from '@/components';

export function DefaultLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <>
      {/*<NavbarTop />*/}
      {/*<Breadcrumbs />*/}
      <main>{children}</main>
      {/*<BottomNav />*/}
      {/*<ScrollToTopButton />*/}
      <Footer className="mb-[58px] md:mb-0" />
      {/*<Notifications />*/}
    </>
  );
}

DefaultLayout.defaultProps = {
  breadcrumbs: [],
};
