import { Fragment } from 'react';
import { GetServerSidePropsContext } from 'next';
import { dehydrate } from '@tanstack/react-query';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { RenderContent } from '~/components';
import { useContent, prefetchContent, ContentDynamicPage } from '~/hooks';
import { DefaultLayout } from '~/layouts';

const contentUrl = 'home-page';

export async function getServerSideProps({ res, locale }: GetServerSidePropsContext) {
  res.setHeader('Cache-Control', 'no-cache');

  const queryClient = await prefetchContent(contentUrl);
  const data = queryClient.getQueryData(['content', contentUrl]);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      ...(await serverSideTranslations(locale as string, ['common', 'footer'])),
    },
  };
}

export default function Home() {
  const { data: content } = useContent<ContentDynamicPage>(contentUrl);

  return (
    <DefaultLayout>
      {content && (
        <div className="cms-content">
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
