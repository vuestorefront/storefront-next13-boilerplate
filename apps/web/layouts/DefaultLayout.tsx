import type { PropsWithChildren } from 'react';
import NextLink from 'next/link';
import { SfButton, SfIconExpandMore, SfIconShoppingCart } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';
import {
  Footer,
  BottomNav,
  ScrollToTopButton,
  NavbarTop,
  Search,
  Breadcrumb,
  NarrowContainer,
  Breadcrumbs,
} from '~/components';

type LayoutPropsType = PropsWithChildren & {
  breadcrumbs?: Breadcrumb[];
};

export function DefaultLayout({ children, breadcrumbs = [] }: LayoutPropsType): JSX.Element {
  const { t } = useTranslation();
  const actionItems = [
    {
      icon: <SfIconShoppingCart />,
      label: '',
      ariaLabel: 'Cart',
      role: 'button',
      href: '/cart',
    },
  ];
  return (
    <>
      <NavbarTop filled>
        <SfButton
          className="!px-2 mr-auto text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white font-body hidden md:inline-flex"
          as={NextLink}
          href="/category"
          slotSuffix={<SfIconExpandMore />}
          variant="tertiary"
        >
          <span>{t('allProductsLinkText')}</span>
        </SfButton>
        <Search className="hidden md:block flex-1" />
        <nav className="hidden md:flex md:flex-row md:flex-nowrap">
          {actionItems.map((actionItem) => (
            <SfButton
              className="mr-2 -ml-0.5 text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
              as={NextLink}
              href={actionItem.href}
              key={actionItem.ariaLabel}
              aria-label={actionItem.ariaLabel}
              variant="tertiary"
              slotPrefix={actionItem.icon}
              square
            >
              {actionItem.role === 'login' && <p className="hidden md:inline-flex">{t(actionItem.label)}</p>}
            </SfButton>
          ))}
        </nav>
      </NavbarTop>
      {breadcrumbs?.length > 0 && (
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
      {/*<Notifications />*/}
    </>
  );
}

DefaultLayout.defaultProps = {
  breadcrumbs: [],
};
