import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Divider, NarrowContainer, PurchaseCard, Gallery, ShoppingDetails, ProductSlider } from '~/components';
import { ProductAccordion } from '~/components/ProductAccordion';
import { DefaultLayout } from '~/layouts';
import { getProductMock } from '~/mocks/product';

export async function getServerSideProps({ locale }: GetServerSidePropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'product', 'footer', 'message'])),
    },
  };
}

const products = getProductMock(8);

export function ProductPage() {
  const images = [
    { src: '/images/product.webp', alt: 'Product image 1' },
    { src: '/images/product.webp', alt: 'Product image 2' },
  ];

  return (
    <DefaultLayout breadcrumbs={[]}>
      <Head>
        <title>{` | Vue Storefront Demo`}</title>
      </Head>
      <NarrowContainer>
        <div className="md:grid gap-x-6 grid-areas-product-page grid-cols-product-page">
          <section className="grid-in-left-top md:h-full xl:max-h-[700px]">
            <Gallery images={images} />
          </section>
          <section className="mb-10 grid-in-right md:mb-0">
            <PurchaseCard />
          </section>
          <section className="grid-in-left-bottom md:mt-8">
            <Divider className="mb-6" />
            <ShoppingDetails />
            <Divider className="mt-4 mb-2 md:mt-8" />
            <ProductAccordion />
          </section>
          <Divider className="mt-4 mb-2" />
        </div>
        <section className="mx-4 mt-28 mb-20" id="recommended-products">
          <ProductSlider products={products} />
        </section>
      </NarrowContainer>
    </DefaultLayout>
  );
}

export default ProductPage;
