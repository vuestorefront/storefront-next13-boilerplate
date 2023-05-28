'use client';

import Head from 'next/head';
import { Divider } from '~/app/components/Divider';
import { Gallery } from '~/app/components/Gallery';
import { NarrowContainer } from '~/app/components/NarrowContainer';
import { ProductAccordion } from '~/app/components/ProductAccordion';
import { ProductProperties } from '~/app/components/ProductProperties';
import { ProductSlider } from '~/app/components/ProductSlider';
import { PurchaseCard } from '~/app/components/PurchaseCard';
import { useProductRecommended, useProduct, useProductBreadcrumbs } from '~/hooks';
import { DefaultLayout } from '../../default-layout';

export function ProductPage({ slug }: { slug: string }) {
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
        {String(slug)}
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
        <section className="mx-4 mt-28 mb-20" id="recommended-products">
          <ProductSlider products={recommendedProducts} />
        </section>
      </NarrowContainer>
    </DefaultLayout>
  );
}

export default ProductPage;
