import type { PropsWithChildren } from 'react';

export function DefaultLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <>
      {/*<NavbarTop />*/}
      {/*<Breadcrumbs />*/}
      <main>{children}</main>
      {/*<BottomNav />*/}
      {/*<ScrollToTopButton />*/}
      {/*<Footer />*/}
      {/*<Notifications />*/}
    </>
  );
}

DefaultLayout.defaultProps = {
  breadcrumbs: [],
};
