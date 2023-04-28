import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Heading, Hero, Display } from '~/components';
import { DefaultLayout } from '~/layouts';

export async function getServerSideProps({ locale }: GetServerSidePropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'footer', 'message'])),
    },
  };
}

export default function Home() {
  return (
    <DefaultLayout>
      <Hero />
      <Heading
        title="Shop by category"
        tag="h2"
        className="text-center mb-6 font-bold typography-headline-3 md:typography-headline-2"
      />
      <Display />
      <Heading
        title="Inspired by your picks"
        tag="h2"
        className="text-center mb-6 font-bold typography-headline-3 md:typography-headline-2"
      />
    </DefaultLayout>
  );
}
