import { GetServerSidePropsContext } from 'next';
import { SfButton } from '@storefront-ui/react';
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
      <h1 className="typography-headline-2 md:typography-headline-1 md:leading-[67.5px] font-bold mt-2 mb-4">
        Hello from the Vue Storefront React Boilerplate!
      </h1>
      <SfButton type="button" variant="secondary">
        Hello from the Vue Storefront React Boilerplate!
      </SfButton>
      <p>{t('vsfHomepage')}</p>
    </>
  );
}
