import { useMedia } from 'react-use';
import dynamic from 'next/dynamic';
import { SfButton, SfIconTune, useDisclosure } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';
import { NarrowContainer } from '~/components/NarrowContainer';
import { Pagination, ProductCard } from '~/components/ui';
import { CategorySidebar } from './CategorySidebar';
import type { CategoryPageContentProps } from './types';

const CategoryEmptyState = dynamic(() => import('~/components/CategoryEmptyState'));

export function CategoryPageContent({
  title,
  sidebar,
  products,
  totalProducts,
  itemsPerPage = 24,
}: CategoryPageContentProps): JSX.Element {
  const { t } = useTranslation('category');
  const isWideScreen = useMedia('(min-width: 1024px)', false);
  const isTabletScreen = useMedia('(min-width: 768px)', false);
  const { isOpen, open, close } = useDisclosure({ initialValue: false });
  const maxVisiblePages = isWideScreen ? 5 : 1;

  if (isTabletScreen && isOpen) {
    close();
  }

  return (
    <NarrowContainer>
      <div className="mb-20 px-4 md:px-0" data-testid="category-layout">
        <h1 className="my-10">{title}</h1>
        <div className="md:flex gap-6">
          <CategorySidebar isOpen={isOpen} closeSidebar={close}>
            {sidebar}
          </CategorySidebar>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold font-headings md:text-lg">
                {t('numberOfProducts', { count: totalProducts })}
              </span>
              <SfButton
                onClick={open}
                variant="tertiary"
                className="md:hidden whitespace-nowrap"
                slotPrefix={<SfIconTune />}
                data-testid="list-settings-button"
              >
                {t('listSettings')}
              </SfButton>
            </div>
            {products.length > 0 ? (
              <section
                className="grid grid-cols-1 2xs:grid-cols-2 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 mb-10 md:mb-5"
                data-testid="category-grid"
              >
                {products.map(({ id, name, rating, price, primaryImage }) => (
                  <ProductCard
                    key={id}
                    name={name}
                    ratingCount={rating?.count}
                    rating={rating?.average}
                    price={price?.value.amount}
                    imageUrl={primaryImage?.url}
                    imageAlt={primaryImage?.alt}
                  />
                ))}
              </section>
            ) : (
              <CategoryEmptyState />
            )}
            {totalProducts > itemsPerPage && (
              <Pagination
                currentPage={1}
                totalItems={totalProducts}
                pageSize={itemsPerPage}
                maxVisiblePages={maxVisiblePages}
              />
            )}
          </div>
        </div>
      </div>
    </NarrowContainer>
  );
}
