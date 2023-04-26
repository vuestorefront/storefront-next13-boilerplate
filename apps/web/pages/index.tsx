import { GetServerSidePropsContext } from 'next';
import { DefaultLayout } from '@/layouts';
import { sdk } from '@/sdk';
import { SfButton } from '@storefront-ui/react';
import { useQuery } from '@tanstack/react-query';
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
  const { data } = useQuery(['products'], () => sdk.ecomm.getFakeData('products'));

  return (
    <DefaultLayout>
      <h1 className="typography-headline-2 md:typography-headline-1 md:leading-[67.5px] font-bold mt-2 mb-4">
        Hello from the Vue Storefront React Boilerplate!
      </h1>
      <SfButton type="button" variant="secondary">
        Hello from the Vue Storefront React Boilerplate!
      </SfButton>
      <p>{t('vsfHomepage')}</p>
      {data && (
        <pre className="bg-gray-900 rounded-lg m-4 p-4 text-gray-50">
          <code className="whitespace-pre-wrap selection:bg-pink-500">{JSON.stringify(data, null, 2)}</code>
        </pre>
      )}
    </DefaultLayout>
  );
}
