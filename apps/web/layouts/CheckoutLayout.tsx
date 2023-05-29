import type { PropsWithChildren } from 'react';
import Link from 'next/link';
import { SfButton, SfIconArrowBack, SfLoaderCircular } from '@storefront-ui/react';
import { NarrowContainer, Footer, NavbarTop } from '~/components';
import { useCart } from '~/hooks';

interface CheckoutLayoutProps extends PropsWithChildren {
  heading: string;
  backHref: string;
  backLabel: string;
}

export function CheckoutLayout({ backLabel, backHref, children, heading }: CheckoutLayoutProps): JSX.Element {
  const { data: cart, isLoading } = useCart();

  return (
    <>
      <NavbarTop />
      <main data-testid="checkout-layout">
        <NarrowContainer>
          <div className="px-4 md:px-0 mb-20">
            <div className="flex justify-between mt-8 mb-10">
              <h1 className="font-bold typography-headline-3 md:typography-headline-2">{heading}</h1>
              <SfButton
                as={Link}
                href={backHref}
                className="flex md:hidden whitespace-nowrap"
                size="sm"
                variant="tertiary"
                slotPrefix={<SfIconArrowBack />}
              >
                {backLabel}
              </SfButton>
              <SfButton
                as={Link}
                href={backHref}
                className="hidden md:flex"
                variant="tertiary"
                slotPrefix={<SfIconArrowBack />}
              >
                {backLabel}
              </SfButton>
            </div>
            {isLoading && !cart ? (
              <span className="!flex justify-center my-40 h-24">
                <SfLoaderCircular size="3xl" />
              </span>
            ) : (
              children
            )}
          </div>
        </NarrowContainer>
      </main>
      <Footer />
    </>
  );
}
