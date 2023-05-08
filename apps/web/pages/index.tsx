import { Fragment } from 'react';
import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { RenderContent } from '~/components';
import { useContent, prefetchContent } from '~/hooks';
import { DefaultLayout } from '~/layouts';

const contentUrl = 'home-page';

export async function getServerSideProps({ locale }: GetServerSidePropsContext) {
  const queryClient = await prefetchContent(contentUrl);
  const data = queryClient.getQueryData(['content', contentUrl]);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'footer', 'message'])),
    },
  };
}

export default function Home() {
  const { data: content } = useContent(contentUrl);

  return (
    <DefaultLayout>
      {content && (
        <div className="cms-content" data-testid="home-page">
          {content.map(({ fields }, index) => (
            <Fragment key={`${fields.component}-${index}`}>
              <RenderContent content={fields.content} />
            </Fragment>
          ))}
        </div>
      )}
    </DefaultLayout>
  );
}
