import { useMedia } from 'react-use';
import { useRouter } from 'next/router';
import { Badge } from '@/components';
import { useLockBodyScroll } from '@/hooks';
import {
  SfIconClose,
  SfButton,
  SfModal,
  SfIconHome,
  SfIconMenu,
  SfIconSearch,
  SfIconShoppingCart,
} from '@storefront-ui/react';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';

// @TODO: add Search when SFUI block will be ready https://github.com/vuestorefront/storefront-ui/pull/2630

const getItems = (cartLineItemsCount?: number) => [
  {
    key: 'home',
    icon: <SfIconHome />,
    path: '/',
    pathname: '/',
  },
  {
    key: 'products',
    icon: <SfIconMenu />,
    path: '/category',
    pathname: '/category/[[...slug]]',
  },
  {
    key: 'search',
    icon: <SfIconSearch />,
    pathname: '/search',
  },
  {
    key: 'cart',
    icon: (
      <Badge
        bordered
        value={cartLineItemsCount}
        invisible={cartLineItemsCount === 0}
        className="text-neutral-900 bg-white"
        data-testid="cart-badge"
      >
        <SfIconShoppingCart />
      </Badge>
    ),
    path: '/cart',
    pathname: '/cart',
  },
];

export function NavbarBottom() {
  const { t } = useTranslation();
  const router = useRouter();
  // @TODO: uncomment when cart is ready
  // const { data: cart } = useCart();
  const isTabletScreen = useMedia('(min-width: 768px)', false);
  const { isOpen, open, close } = useLockBodyScroll();

  // @TODO: uncomment when cart is ready
  // const cartLineItemsCount = cart?.lineItems.reduce((acc, { quantity }) => acc + quantity, 0) ?? 0;

  if (isTabletScreen && isOpen) {
    close();
  }

  return (
    <>
      <nav
        className="z-50 w-full fixed bottom-0 left-0 flex flex-row items-stretch md:hidden"
        data-testid="navbar-bottom"
      >
        {getItems(0).map(({ path, key, icon, pathname }) => (
          <SfButton
            key={key}
            variant="tertiary"
            size="sm"
            slotPrefix={icon}
            className={classNames(
              'py-1 flex flex-col h-full w-full rounded-none bg-primary-700 text-white hover:text-white hover:bg-primary-800 active:text-white active:bg-primary-900',
              { 'text-white bg-primary-900': pathname === router.pathname },
            )}
            onClick={() => {
              if (typeof path === 'string') {
                router.push(path);
              }
              if (key === 'search') {
                open();
              }
            }}
          >
            {t(key)}
          </SfButton>
        ))}
      </nav>
      {isOpen && (
        <SfModal
          open={isOpen}
          onClose={close}
          className="w-full h-full z-50"
          as="section"
          role="dialog"
          aria-labelledby="search-modal-title"
        >
          <header>
            <SfButton square variant="tertiary" className="absolute right-2 top-2" onClick={close}>
              <SfIconClose className="text-neutral-500" />
            </SfButton>
            <h3 id="search-modal-title" className="absolute left-4 top-4 font-bold typography-headline-4 mb-4">
              {t('search')}
            </h3>
          </header>
          {/*<SearchBox onAfterSearch={close} />*/}
        </SfModal>
      )}
    </>
  );
}
