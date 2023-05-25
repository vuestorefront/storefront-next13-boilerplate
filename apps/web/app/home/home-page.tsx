'use client';

import { Fragment } from 'react';
import { useQuery } from '@tanstack/react-query';
import { sdk } from '~/sdk';
import { RenderContent } from '../components/RenderContent';
import { DefaultLayout } from '../default-layout';

export default function Home({ content, url }: { content?: any[]; url: string }) {
  const { data } = useQuery(['content', url], () => sdk.commerce.getContent({ url }), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    initialData: content,
  });

  return (
    <DefaultLayout>
      {content && (
        <div className="cms-content">
          {data?.map(({ fields }, index) => (
            <Fragment key={`${fields.component}-${index}`}>
              <RenderContent content={fields.content} />
            </Fragment>
          ))}
        </div>
      )}
    </DefaultLayout>
  );
}
