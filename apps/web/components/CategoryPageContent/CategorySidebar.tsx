import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { SfIconClose, SfButton, SfDrawer, useTrapFocus } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';
import { useSearchParams } from '~/hooks';
import { CategorySidebarProps } from './types';

const queryFilters = ['color', 'size'];

export function CategorySidebar({ isOpen, closeSidebar, children }: CategorySidebarProps): JSX.Element {
  const { t } = useTranslation('category');
  const { clearSearchParams, getSearchParams } = useSearchParams();
  const nodeRef = useRef(null);

  useTrapFocus(nodeRef, { activeState: isOpen });

  const filters = getSearchParams(queryFilters);
  const hasFilters = queryFilters.some((value) => Boolean(filters[value]));

  const onClearFilters = () => {
    clearSearchParams();
    closeSidebar();
  };

  return (
    <CSSTransition nodeRef={nodeRef} in={isOpen} timeout={500} classNames="slide-left">
      <SfDrawer
        ref={nodeRef}
        className="w-full shadow-none md:translate-x-0 z-[100] md:z-0 md:static -translate-x-full shrink-0 md:w-[303px] bg-white"
        data-testid="category-sidebar"
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
            {hasFilters && (
              <SfButton variant="secondary" onClick={onClearFilters} className="whitespace-nowrap flex flex-1">
                {t('clearFilters')}
              </SfButton>
            )}
            <SfButton className="md:hidden whitespace-nowrap flex flex-1" variant="primary" onClick={closeSidebar}>
              {t('showProducts')}
            </SfButton>
          </div>
        </div>
      </SfDrawer>
    </CSSTransition>
  );
}
