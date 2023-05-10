import { useState } from 'react';
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
import { Search } from '~/components';

const items = [
  {
    label: 'home',
    icon: <SfIconHome />,
  },
  {
    label: 'products',
    icon: <SfIconMenu />,
  },
  {
    label: 'search',
    icon: <SfIconSearch />,
  },
  {
    label: 'cart',
    icon: <SfIconShoppingCart />,
  },
];

export function BottomNav({ ...attributes }) {
  const [selectedItem, setselectedItem] = useState('');
  const { t } = useTranslation();
  const { isOpen, open, close } = useDisclosure({ initialValue: false });
  function onClickHandler(itemLabel: string) {
    setselectedItem(itemLabel);
    if (itemLabel === 'search') {
      open();
    }
  }

  return (
    <>
      <nav
        className="z-50 w-full fixed bottom-0 left-0 flex flex-row items-stretch md:hidden"
        data-testid="navbar-bottom"
        {...attributes}
      >
        {items.map(({ label, icon }) => (
          <SfButton
            key={label}
            variant="tertiary"
            size="sm"
            slotPrefix={icon}
            className={classNames(
              'py-1 flex flex-col h-full w-full rounded-none bg-primary-700 text-white hover:text-white hover:bg-primary-800 active:text-white active:bg-primary-900',
              { 'text-white bg-primary-900': selectedItem === label },
            )}
            onClick={() => onClickHandler(label)}
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
