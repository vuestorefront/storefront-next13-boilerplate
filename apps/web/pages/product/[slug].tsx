import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { dehydrate } from '@tanstack/react-query';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ParsedUrlQuery } from 'node:querystring';
import {
  Divider,
  NarrowContainer,
  Gallery,
  ProductProperties,
  ProductAccordion,
  PurchaseCard,
  RecommendedProducts,
} from '~/components';
import { useProductRecommended, useProduct, prefetchProduct, useProductBreadcrumbs } from '~/hooks';
import { DefaultLayout } from '~/layouts';

interface ProductPageQuery extends ParsedUrlQuery {
  slug: string;
}

export async function getServerSideProps({ res, locale, params }: GetServerSidePropsContext<ProductPageQuery>) {
  res.setHeader('Cache-Control', 'no-cache');

  const slug = params?.slug;

  if (!(slug && locale)) {
    return {
      notFound: true,
    };
  }

  const queryClient = await prefetchProduct(slug);
  const data = queryClient.getQueryData(['product', slug]);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      ...(await serverSideTranslations(locale, ['common', 'product', 'footer'])),
    },
  };
}

export function ProductPage() {
  const router = useRouter();
  const { slug } = router.query as ProductPageQuery;

  const { data: product } = useProduct(slug);
  const { data: recommendedProducts = [] } = useProductRecommended(slug);
  const { breadcrumbs } = useProductBreadcrumbs(product);

  if (!product) {
    return null;
  }

  const { gallery } = product;

  return (
    <DefaultLayout breadcrumbs={breadcrumbs}>
      <Head>
        <title>{`${product.name} | Vue Storefront Demo`}</title>
      </Head>
      <NarrowContainer>
        <div className="md:grid gap-x-6 grid-areas-product-page grid-cols-product-page">
          <section className="grid-in-left-top md:h-full xl:max-h-[700px]">
            <Gallery images={gallery} />
          </section>
          <section className="mb-10 grid-in-right md:mb-0">
            <PurchaseCard product={product} />
          </section>
          <section className="grid-in-left-bottom md:mt-8">
            <Divider className="mb-6" />
            <ProductProperties product={product} />
            <Divider className="mt-4 mb-2 md:mt-8" />
            <ProductAccordion product={product} />
          </section>
          <Divider className="mt-4 mb-2" />
        </div>
        <section className="mx-4 mt-28 mb-20">
          <RecommendedProducts products={recommendedProducts} />
        </section>
      </NarrowContainer>
    </DefaultLayout>
  );
}

export default ProductPage;
