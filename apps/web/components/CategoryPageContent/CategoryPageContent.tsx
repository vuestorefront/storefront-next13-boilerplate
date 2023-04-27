import { useMedia } from 'react-use';
import dynamic from 'next/dynamic';
import Image from 'next/legacy/image';
import { NarrowContainer } from '@/components/NarrowContainer';
import { Pagination, ProductCardVertical } from '@/components/ui';
import { useLockBodyScroll, useSearchParams } from '@/hooks';
import { SfButton, SfIconTune } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';
import placeholderImage from '~/public/images/card-placeholder.png';
import { CategorySidebar } from './CategorySidebar';
import type { CategoryPageContentProps } from './types';

const CategoryEmptyState = dynamic(() => import('@/components/CategoryEmptyState'));

export function CategoryPageContent({
  title,
  sidebar,
  products,
  totalProducts,
  itemsPerPage = 24,
}: CategoryPageContentProps): JSX.Element {
  const { t } = useTranslation(['category']);
  const isWideScreen = useMedia('(min-width: 1024px)', false);
  const isTabletScreen = useMedia('(min-width: 768px)', false);

  const { setSearchParams, getSearchParams } = useSearchParams();
  const { isOpen, open, close } = useLockBodyScroll();

  const maxVisiblePages = isWideScreen ? 5 : 1;

  const setPageSearchParameters = (page: number) => {
    setSearchParams({ page });
  };

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
                {products.map(({ sku, name, slug, rating, price, primaryImage }, index) => (
                  <ProductCardVertical
                    key={sku}
                    sku={sku}
                    title={name}
                    price={price?.value.amount}
                    oldPrice={price?.regularPrice.amount}
                    link={`/product/${slug}/${sku}`}
                    rating={rating?.average}
                    ratingCount={rating?.count}
                    showAddToCartButton
                    slotImage={
                      <Image
                        className="object-contain"
                        priority={index <= 1}
                        fetchpriority={index <= 1 ? 'high' : 'low'}
                        data-testid="image-slot"
                        src={primaryImage?.url || placeholderImage}
                        alt={primaryImage?.alt || t('common:cardImagePlaceholder')}
                        width="320"
                        height="320"
                        sizes="(max-width: 767px) 40vw, 320px"
                        unoptimized={!primaryImage?.url}
                        layout="responsive"
                        crossOrigin="anonymous"
                      />
                    }
                  />
                ))}
              </section>
            ) : (
              <CategoryEmptyState />
            )}
            {totalProducts > itemsPerPage && (
              <Pagination
                currentPage={Number(getSearchParams('page')) || 1}
                totalItems={totalProducts}
                pageSize={itemsPerPage}
                maxVisiblePages={maxVisiblePages}
                onPageUpdate={setPageSearchParameters}
              />
            )}
          </div>
        </div>
      </div>
    </NarrowContainer>
  );
}
