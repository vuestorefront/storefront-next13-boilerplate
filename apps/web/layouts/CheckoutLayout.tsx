import type { PropsWithChildren } from 'react';
import { Footer, NavbarTop } from '@/components';

interface CheckoutLayoutProps extends PropsWithChildren {
  heading: string;
  backHref: string;
  backLabel: string;
}

export function CheckoutLayout({ backLabel, backHref, children, heading }: CheckoutLayoutProps): JSX.Element {
  return (
    <>
      <NavbarTop />
      <main data-testid="checkout-layout">
        {/*<NarrowContainer>*/}
        <div data-testid="cart-page" className="px-4 md:px-0 mb-20">
          <div className="flex justify-between mt-8 mb-10">
            <h1>{heading}</h1>
            {/*<SfButton*/}
            {/*  data-testid="back-button"*/}
            {/*  as={Link}*/}
            {/*  href={backHref}*/}
            {/*  className="flex md:hidden whitespace-nowrap"*/}
            {/*  size="sm"*/}
            {/*  variant="tertiary"*/}
            {/* eslint-disable-next-line no-secrets/no-secrets */}
            {/*  slotPrefix={<SfIconArrowBack />}*/}
            {/*>*/}
            {/*  {backLabel}*/}
            {/*</SfButton>*/}
            {/*<SfButton*/}
            {/*  as={Link}*/}
            {/*  href={backHref}*/}
            {/*  className="hidden md:flex"*/}
            {/*  variant="tertiary"*/}
            {/* eslint-disable-next-line no-secrets/no-secrets */}
            {/*  slotPrefix={<SfIconArrowBack />}*/}
            {/*>*/}
            {/*  {backLabel}*/}
            {/*</SfButton>*/}
          </div>
          {/*{isLoading && !cart ? (*/}
          {/*  <span className="!flex justify-center my-40 h-24">*/}
          {/*    <SfLoaderCircular size="3xl" />*/}
          {/*  </span>*/}
          {/*) : (*/}
          {/*  children*/}
          {/*)}*/}
          {children}
        </div>
        {/*</NarrowContainer>*/}
      </main>
      <Footer />
      {/*<Notifications />*/}
    </>
  );
}
