import { GetServerSidePropsContext } from 'next';
import { dehydrate } from '@tanstack/react-query';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  CategoryPageContent,
  CategoryTree,
  CategorySorting,
  CategoryFilters,
  Breadcrumb,
  CategoryTreeItem,
} from '~/components';
import { prefetchProducts, useProducts } from '~/hooks';
import { DefaultLayout } from '~/layouts';

export async function getServerSideProps({ res, locale }: GetServerSidePropsContext) {
  res.setHeader('Cache-Control', 'no-cache');

  const queryClient = await prefetchProducts();
  const data = queryClient.getQueryData(['products']);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      ...(await serverSideTranslations(locale as string, ['common', 'footer', 'category'])),
    },
  };
}

export default function CategoryPage() {
  const { t } = useTranslation('category');
  const breadcrumbs: Breadcrumb[] = [
    { name: t('common:home'), link: '/' },
    { name: t('allProducts'), link: '/category' },
  ];
  const { data: productsCatalog } = useProducts();

  if (!productsCatalog) {
    return null;
  }

  const { products, pagination, subCategories, facets } = productsCatalog;
  const categories: CategoryTreeItem[] = subCategories.map(({ name, productCount }) => ({
    name,
    count: productCount || 0,
    href: '/category',
  }));

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
