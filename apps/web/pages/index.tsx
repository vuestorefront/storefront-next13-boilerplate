import { Fragment } from 'react';
import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { RenderContent } from '~/components';
import { DefaultLayout } from '~/layouts';
import cmsDataMock from '~/mocks/cmsData.json';

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
      {cmsDataMock && (
        <div className="cms-content" data-testid="home-page">
          {cmsDataMock.map(({ fields }, index) => (
            <Fragment key={`${fields.component}-${index}`}>
              <RenderContent content={fields.content} />
            </Fragment>
          ))}
        </div>
      )}
      {/*<Display />*/}
      {/*<section className="max-w-screen-3xl mx-auto px-4 md:px-10 mb-20" id="recommended-products">*/}
      {/*  <ProductSlider products={products} />*/}
      {/*</section>*/}
    </DefaultLayout>
  );
}
