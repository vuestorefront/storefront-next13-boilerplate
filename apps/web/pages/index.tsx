import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Hero, Display } from '~/components';
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
      <Display />
    </DefaultLayout>
  );
}
