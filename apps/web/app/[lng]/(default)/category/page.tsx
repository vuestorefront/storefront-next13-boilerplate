import { notFound } from 'next/navigation';
import { CategoryFilters } from '~/app/components/CategoryFilters';
import { CategorySorting } from '~/app/components/CategorySorting';
import { CategoryTree } from '~/app/components/CategoryTree';
import { useTranslation } from '~/app/i18n';
import { fetchProducts } from '~/hooks/useProducts';
import { CategoryPageContent } from '../../../components/CategoryPageContent';
import { BreadcrumbsLayout } from '../breadcrumbs-layout';

export default async function Page({ params: { lng } }: { params: { lng: string } }) {
  const productsCatalog = await fetchProducts();
  const { t } = await useTranslation(lng);

  if (!productsCatalog) {
    return notFound();
  }

  const { products, pagination, subCategories, facets } = productsCatalog;
  const categories = subCategories?.map(({ name, productCount }) => ({ name, count: productCount, href: '/category' }));

  const breadcrumbs = [
    { name: t('common:home'), link: '/' },
    { name: t('allProducts'), link: '/category' },
  ];

  return (
    <BreadcrumbsLayout breadcrumbs={breadcrumbs}>
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
    </BreadcrumbsLayout>
  );
}
