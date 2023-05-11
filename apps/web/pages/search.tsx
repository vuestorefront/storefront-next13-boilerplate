import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { dehydrate } from '@tanstack/react-query';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CategoryPageContent, CategorySorting, CategoryFilters } from '~/components';
import { prefetchProducts, useProducts } from '~/hooks/useProducts/useProducts';
import { DefaultLayout } from '~/layouts';

export async function getServerSideProps({ locale }: GetServerSidePropsContext) {
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
      ...(await serverSideTranslations(locale as string, ['common', 'footer', 'category', 'message'])),
    },
  };
}

export default function SearchPage() {
  const { t } = useTranslation('category');
  const { query } = useRouter();
  const { data: productsCatalog } = useProducts();

  if (!productsCatalog) {
    return null;
  }

  const { products, pagination, facets } = productsCatalog;
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
            <CategoryFilters facets={facets} />
          </>
        }
      />
    </DefaultLayout>
  );
}
