import Head from 'next/head';
import { Gallery } from '@/components/ui/Gallery';
// import {
//   Divider,
//   NarrowContainer,
//   ProductAccordion,
//   PurchaseBox,
//   RecommendedProducts,
//   ShoppingDetails,
// } from '~/components';
// import { Gallery } from '~/components/ui/Gallery';
// import { prefetchProduct, useProduct, useProductBreadcrumbs, useVariant } from '~/hooks';
import { DefaultLayout } from '~/layouts';

export function ProductPage() {
  const images = Array.from({ length: 5 }, () => 'https://placehold.co/400');

  return (
    <DefaultLayout breadcrumbs={[]}>
      <Head>
        <title>{` | Vue Storefront Demo`}</title>
      </Head>
      {/* <NarrowContainer> */}
      <div className="md:grid gap-x-6 grid-areas-product-page grid-cols-product-page">
        <section className="grid-in-left-top md:h-full xl:max-h-[700px]">
          <Gallery images={images} />
        </section>
        <section className="mb-10 grid-in-right md:mb-0">{/* <PurchaseBox sku={sku} /> */}</section>
        <section className="grid-in-left-bottom md:mt-8">
          {/* <Divider className="mb-6" /> */}
          {/* <ShoppingDetails /> */}
          {/* <Divider className="mt-4 mb-2 md:mt-8" /> */}
          {/* <ProductAccordion
              productId={product?.id as string}
              productDescription={product?.masterData.current?.description as string}
            /> */}
        </section>
        {/* <Divider className="mt-4 mb-2" /> */}
      </div>
      <section className="mx-4 mt-28 mb-20" id="recommended-products">
        {/* <RecommendedProducts /> */}
      </section>
      {/* </NarrowContainer> */}
    </DefaultLayout>
  );
}

export default ProductPage;
