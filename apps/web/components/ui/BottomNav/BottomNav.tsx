import { useRouter } from 'next/router';
import {
  SfIconClose,
  SfButton,
  SfModal,
  SfIconHome,
  SfIconMenu,
  SfIconSearch,
  SfIconShoppingCart,
  useDisclosure,
} from '@storefront-ui/react';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import { Badge, Search } from '~/components';
import { useCart } from '~/hooks';

const getItems = (cartLineItemsCount?: number) => [
  {
    label: 'home',
    icon: <SfIconHome />,
    path: '/',
  },
  {
    label: 'products',
    icon: <SfIconMenu />,
    path: '/category',
  },
  {
    label: 'search',
    icon: <SfIconSearch />,
    path: '/search',
  },
  {
    label: 'cart',
    icon: (
      <Badge bordered value={cartLineItemsCount} className="text-neutral-900 bg-white" data-testid="cart-badge">
        <SfIconShoppingCart />
      </Badge>
    ),
    path: '/cart',
  },
];

export function BottomNav({ ...attributes }) {
  const router = useRouter();
  const { t } = useTranslation();
  const { isOpen, open, close } = useDisclosure({ initialValue: false });
  const { data: cart } = useCart();
  const cartLineItemsCount = cart?.lineItems.reduce((total, { quantity }) => total + quantity, 0) ?? 0;

  const onClickHandler = (path: string) => {
    if (path === '/search') {
      open();
    } else {
      router.push(path);
    }
  };

  return (
    <>
      <nav
        className="z-50 w-full fixed bottom-0 left-0 flex flex-row items-stretch md:hidden"
        data-testid="navbar-bottom"
        {...attributes}
      >
        {getItems(cartLineItemsCount).map(({ label, icon, path }) => (
          <SfButton
            key={label}
            variant="tertiary"
            size="sm"
            slotPrefix={icon}
            className={classNames(
              'py-1 pt-3 flex flex-col h-full w-full rounded-none bg-primary-700 text-white hover:text-white hover:bg-primary-800 active:text-white active:bg-primary-900',
              { 'text-white bg-primary-900': router.pathname === path },
            )}
            onClick={() => onClickHandler(path)}
            {...(label === 'cart' && {
              'aria-label': t('numberInCart', { count: cartLineItemsCount }),
            })}
          >
            {t(label)}
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
          <header className="mb-4">
            <SfButton square variant="tertiary" className="absolute right-4 top-2" onClick={close}>
              <SfIconClose className="text-neutral-500" />
            </SfButton>
            <h3 id="search-modal-title" className="absolute left-6 top-4 font-bold typography-headline-4 mb-4">
              {t('search')}
            </h3>
          </header>
          <Search />
        </SfModal>
      )}
    </>
  );
}
