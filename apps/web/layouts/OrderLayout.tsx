import { PropsWithChildren } from 'react';
import { Footer, NarrowContainer, NavbarTop } from '~/components';

export function OrderLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <>
      <NavbarTop />
      <main>
        <NarrowContainer>{children}</NarrowContainer>
      </main>
      <Footer />
    </>
  );
}
