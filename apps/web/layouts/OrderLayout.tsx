import type { PropsWithChildren } from 'react';
import { Footer, NavbarTop } from '@/components';

export function OrderLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <>
      <NavbarTop />
      <main data-testid="order-layout">{/*<NarrowContainer>{children}</NarrowContainer>*/}</main>
      <Footer />
      {/*<Notifications />*/}
    </>
  );
}
