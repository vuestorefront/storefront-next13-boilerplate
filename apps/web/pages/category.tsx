import { GetServerSidePropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CategoryPageContent, CategoryTree, CategorySorting, CategoryFilters } from '~/components';
import { BreadcrumbItem } from '~/components/ui/Breadcrumbs/types';
import { DefaultLayout } from '~/layouts';
import { getProducts } from '~/mocks/products';

export async function getServerSideProps({ locale }: GetServerSidePropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'footer', 'category', 'message'])),
    },
  };
}

export default function CategoryPage() {
  const { t } = useTranslation('category');
  const breadcrumbs: BreadcrumbItem[] = [
    { name: t('common:home'), link: '/' },
    { name: t('allProducts'), link: '/category' },
  ];
  const { products, pagination, subCategories } = getProducts();
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
            <CategoryFilters />
          </>
        }
      />
    </DefaultLayout>
  );
}
