import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { CategoryFilters, CategoryPageContent, CategorySorting } from '~/components';
import { createGetServerSideProps } from '~/helpers';
import { prefetchProducts, useProducts } from '~/hooks';
import { DefaultLayout } from '~/layouts';

export const getServerSideProps = createGetServerSideProps({ i18nNamespaces: ['category'] }, async (context) => {
  context.res.setHeader('Cache-Control', 'no-cache');
  const products = await prefetchProducts(context);

  if (!products) {
    return {
      notFound: true,
    };
  }

  return { props: {} };
});

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
