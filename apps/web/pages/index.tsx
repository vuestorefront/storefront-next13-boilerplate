import { GetServerSidePropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getServerSideProps({ locale }: GetServerSidePropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'footer', 'message'])),
    },
  };
}

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <span>Hello from the Vue Storefront React Boilerplate!</span>
      <p>{t('vsfHomepage')}</p>
    </>
  );
}
