import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CategoryCard, Heading, Hero, Display, ProductSlider } from '~/components';
import { DefaultLayout } from '~/layouts';
import { getProductMock } from '~/mocks/product';

export async function getServerSideProps({ locale }: GetServerSidePropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'footer', 'message'])),
    },
  };
}

const products = getProductMock(8);

export default function Home() {
  return (
    <DefaultLayout>
      <Hero />
      <Heading
        title="Shop by category"
        tag="h2"
        className="text-center mb-6 font-bold typography-headline-3 md:typography-headline-2"
      />
      <CategoryCard />
      <Display />
      <Heading
        title="Inspired by your picks"
        tag="h2"
        className="text-center mb-6 font-bold typography-headline-3 md:typography-headline-2"
      />
      <section className="max-w-screen-3xl mx-auto px-4 md:px-10 mb-20" id="recommended-products">
        <ProductSlider products={products} />
      </section>
    </DefaultLayout>
  );
}
