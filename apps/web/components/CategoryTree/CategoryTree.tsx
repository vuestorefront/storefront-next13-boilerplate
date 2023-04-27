import { FilterContainer } from '@/components/FilterContainer';
import { asFilteredArray, categoryPathString } from '@/helpers';
import { getProducts } from '@/mocks/products';
import { SfIconArrowBack } from '@storefront-ui/react';
import { uniq } from 'lodash-es';
import { useTranslation } from 'next-i18next';
import { CategoryTreeItem } from './CategoryTreeItem';

export function CategoryTree() {
  const { t } = useTranslation('category');
  const { subCategories, currentCategory, categoryHierarchy } = getProducts();
  const { slug: categorySlug } = currentCategory ?? {};
  const ancestorsSlugs = categoryHierarchy?.map(({ slug }) => slug).join('/');
  const parent = categoryHierarchy?.at(-1);

  return (
    <FilterContainer title={t('category')}>
      {parent ? (
        <CategoryTreeItem
          name={
            <>
              <SfIconArrowBack size="sm" className="text-neutral-500 mr-2" />
              {t('allFromCategory', { name: parent.name })}
            </>
          }
          count={parent.productCount}
          href={categoryPathString(asFilteredArray(uniq([ancestorsSlugs])))}
        />
      ) : (
        currentCategory && (
          <CategoryTreeItem
            name={
              <>
                <SfIconArrowBack size="sm" className="text-neutral-500 mr-2" />
                {t('allProducts')}
              </>
            }
            href="/category"
          />
        )
      )}
      <div data-testid="categories" className="mt-4 md:mt-2">
        {subCategories?.map(({ id, name, productCount, slug }) => (
          <CategoryTreeItem
            key={id}
            name={name}
            count={productCount}
            href={categoryPathString(asFilteredArray(uniq([ancestorsSlugs, categorySlug, slug])))}
          />
        ))}
      </div>
    </FilterContainer>
  );
}
