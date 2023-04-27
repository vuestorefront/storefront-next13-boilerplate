import { useRouter } from 'next/router';
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
import { Search } from '~/components';
import { useLockBodyScroll } from '~/hooks';

const items = [
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
    icon: <SfIconShoppingCart />,
    path: '/cart',
    pathname: '/cart',
  },
];

export function BottomNav() {
  const { t } = useTranslation();
  const router = useRouter();
  const { isOpen, open, close } = useLockBodyScroll();

  return (
    <>
      <nav
        className="z-50 w-full fixed bottom-0 left-0 flex flex-row items-stretch md:hidden"
        data-testid="navbar-bottom"
      >
        {items.map(({ path, key, icon, pathname }) => (
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
