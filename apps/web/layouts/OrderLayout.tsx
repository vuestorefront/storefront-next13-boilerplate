import { Footer, NavbarTop } from '~/components';

export function OrderLayout(): JSX.Element {
  return (
    <>
      <NavbarTop />
      <main data-testid="order-layout">{/*<NarrowContainer>{children}</NarrowContainer>*/}</main>
      <Footer />
      {/*<Notifications />*/}
    </>
  );
}
