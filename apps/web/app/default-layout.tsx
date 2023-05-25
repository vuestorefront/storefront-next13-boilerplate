'use client';

import type { PropsWithChildren } from 'react';
import Link from 'next/link';
// import { useTranslation } from 'next-i18next';
import { Badge } from './components/Badge';
import { BottomNav } from './components/BottomNav';
import { Breadcrumbs, Breadcrumb } from './components/Breadcrumbs';
import { Footer } from './components/Footer';
import { NarrowContainer } from './components/NarrowContainer';
import { NavbarTop } from './components/NavbarTop';
import { SfButton, SfIconExpandMore, SfIconShoppingCart } from './components/SFUI';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { Search } from './components/Search';

// import { useCart } from '~/hooks';

type LayoutPropsType = PropsWithChildren & {
  breadcrumbs?: Breadcrumb[];
};

export function DefaultLayout({ children, breadcrumbs = [] }: LayoutPropsType): JSX.Element {
  // const { t } = useTranslation();
  // const { data: cart } = useCart();
  // const cartLineItemsCount = cart?.lineItems.reduce((total, { quantity }) => total + quantity, 0) ?? 0;

  return (
    <>
      <NavbarTop filled>
        <SfButton
          className="!px-2 mr-auto text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white font-body hidden md:inline-flex"
          as={Link}
          href="/category"
          slotSuffix={<SfIconExpandMore />}
          variant="tertiary"
        >
          <span>{"t('allProductsLinkText')"}</span>
        </SfButton>
        <Search className="hidden md:block flex-1" />
        <nav className="hidden md:flex md:flex-row md:flex-nowrap">
          <SfButton
            className="mr-2 -ml-0.5 text-white bg-primary-700 hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
            as={Link}
            href="/cart"
            aria-label={"t('numberInCart', { count: 1 })"}
            variant="tertiary"
            square
            slotPrefix={
              <Badge bordered value={1} className="text-neutral-900 bg-white">
                <SfIconShoppingCart />
              </Badge>
            }
          />
        </nav>
      </NavbarTop>
      {breadcrumbs && (
        <NarrowContainer>
          <div className="p-4 md:px-0">
            <Breadcrumbs breadcrumbs={breadcrumbs} />
          </div>
        </NarrowContainer>
      )}
      <main>{children}</main>
      <BottomNav />
      <ScrollToTopButton />
      <Footer className="mb-[58px] md:mb-0" />
    </>
  );
}
