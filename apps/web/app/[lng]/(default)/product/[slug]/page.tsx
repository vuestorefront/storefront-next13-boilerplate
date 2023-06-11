import { Suspense } from 'react';
import Head from 'next/head';
import { notFound } from 'next/navigation';
import { Divider } from '~/app/components/Divider';
import { Gallery } from '~/app/components/Gallery';
import { ProductAccordion } from '~/app/components/ProductAccordion';
import { ProductProperties } from '~/app/components/ProductProperties';
import { PurchaseCard } from '~/app/components/PurchaseCard';
import RecommendedProducts from '~/app/components/RecommendedProducts';
import { useTranslation } from '~/app/i18n';
import { fetchProduct } from '~/hooks/useProduct';
import { BreadcrumbsLayout } from '../../breadcrumbs-layout';

export default async function Page({ params: { slug, lng } }: { params: { slug: string; lng: string } }) {
  const product = await fetchProduct(slug);
  const { t } = await useTranslation(lng);

  if (!product) {
    return notFound();
  }

  const breadcrumbs = [
    { name: t('home'), link: '/' },
    { name: t('category'), link: '/category' },
    { name: product.name as string, link: `#` },
  ];

  const { gallery } = product;

  return (
    <BreadcrumbsLayout breadcrumbs={breadcrumbs}>
      <Head>
        <title>{`${product.name} | Vue Storefront Demo`}</title>
      </Head>
      <div className="md:grid gap-x-6 grid-areas-product-page grid-cols-product-page">
        <section className="grid-in-left-top md:h-full xl:max-h-[700px]">
          <Gallery images={gallery} />
        </section>
        <section className="mb-10 grid-in-right md:mb-0">
          {/* @ts-expect-error Server Component */}
          <PurchaseCard product={product} lng={lng} />
        </section>
        <section className="grid-in-left-bottom md:mt-8">
          <Divider className="mb-6" />
          <ProductProperties product={product} />
          <Divider className="mt-4 mb-2 md:mt-8" />
          <ProductAccordion product={product} />
        </section>
        <Divider className="mt-4 mb-2" />
      </div>
      <Suspense fallback="loading...">
        <RecommendedProducts slug={slug} />
      </Suspense>
    </BreadcrumbsLayout>
  );
}
