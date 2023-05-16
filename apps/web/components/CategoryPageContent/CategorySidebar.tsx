import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { SfIconClose, SfButton, SfDrawer, useTrapFocus } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';
import type { CategorySidebarProps } from '~/components';

export function CategorySidebar({ isOpen, closeSidebar, children }: CategorySidebarProps): JSX.Element {
  const { t } = useTranslation('category');
  const nodeReference = useRef(null);

  useTrapFocus(nodeReference, { activeState: isOpen });

  return (
    <CSSTransition
      nodeRef={nodeReference}
      in={isOpen}
      timeout={500}
      classNames="slide-left"
      data-testid="category-sidebar"
    >
      <SfDrawer
        ref={nodeReference}
        className="w-full shadow-none md:translate-x-0 z-[100] md:z-0 md:static -translate-x-full shrink-0 md:w-[303px] bg-white"
        placement="left"
        open
      >
        <div className="grid grid-rows-category-sidebar h-full md:block">
          <div className="p-4 flex justify-between items-center md:hidden">
            <span className="font-bold text-lg">{t('listSettings')}</span>
            <SfButton
              variant="tertiary"
              onClick={closeSidebar}
              slotPrefix={<SfIconClose className="text-neutral-500" />}
              aria-label={t('closeListSettings')}
            />
          </div>
          <div className="overflow-y-auto md:overflow-y-visible py-4 md:p-0">{children}</div>
          <div className="p-4 md:mt-2 flex flex-wrap justify-between border-t border-t-neutral-200 md:border-0 gap-3">
            <SfButton className="md:hidden whitespace-nowrap flex flex-1" variant="primary" onClick={closeSidebar}>
              {t('showProducts')}
            </SfButton>
          </div>
        </div>
      </SfDrawer>
    </CSSTransition>
  );
}
