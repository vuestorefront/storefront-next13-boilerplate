import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CategoryPageContent, CategorySorting, CategoryFilters } from '~/components';
import { DefaultLayout } from '~/layouts';
import { getProducts } from '~/mocks/products';

export async function getServerSideProps({ locale }: GetServerSidePropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'footer', 'category', 'message'])),
    },
  };
}

export default function SearchPage() {
  const { t } = useTranslation('category');
  const { query } = useRouter();
  const { products, pagination } = getProducts();
  const categoryTitle = t('resultsFor', { phrase: query?.search });

  return (
    <DefaultLayout>
      <CategoryPageContent
        title={categoryTitle}
        products={products}
        totalProducts={pagination.totalResults}
        sidebar={
          <>
            <CategorySorting />
            <CategoryFilters />
          </>
        }
      />
    </DefaultLayout>
  );
}
