'use client';

import { CategoryFilters } from '~/app/components/CategoryFilters';
import { CategorySorting } from '~/app/components/CategorySorting';
import { CategoryTree } from '~/app/components/CategoryTree';
import { useTranslation } from '~/app/i18n/client';
import { useProducts } from '~/hooks/useProducts';
import { CategoryPageContent } from '../../components/CategoryPageContent';
import { DefaultLayout } from '../../default-layout';

export default function CategoryPage() {
  const { t } = useTranslation('en', 'category');

  const breadcrumbs = [
    { name: t('common:home'), link: '/' },
    { name: t('allProducts'), link: '/category' },
  ];
  const { data: productsCatalog } = useProducts();

  if (!productsCatalog) {
    return null;
  }

  const { products, pagination, subCategories, facets } = productsCatalog;
  const categories = subCategories.map(({ name, productCount }) => ({ name, count: productCount, href: '/category' }));

  return (
    <DefaultLayout breadcrumbs={breadcrumbs}>
      <CategoryPageContent
        title={t('allProducts')}
        products={products}
        totalProducts={pagination.totalResults}
        sidebar={
          <>
            <CategoryTree parent={{ name: t('allProducts'), href: '/category' }} categories={categories} />
            <CategorySorting />
            <CategoryFilters facets={facets} />
          </>
        }
      />
    </DefaultLayout>
  );
}
