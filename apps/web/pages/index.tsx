import { Fragment } from 'react';
import { GetServerSidePropsContext } from 'next';
import { RenderContent } from '@/components';
import { DefaultLayout } from '@/layouts';
import { cmsData } from '@/mocks/cmsData';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

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
      {cmsData && (
        <div className="cms-content" data-testid="home-page">
          {cmsData.map(({ fields }, index) => (
            <Fragment key={`${fields.component}-${index}`}>
              <RenderContent content={fields.content} />
            </Fragment>
          ))}
        </div>
      )}
    </DefaultLayout>
  );
}
