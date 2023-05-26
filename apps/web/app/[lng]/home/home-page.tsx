'use client';

import { Fragment } from 'react';
import { useContent } from '~/hooks/useContent';
import { RenderContent } from '../../components/RenderContent';
import { DefaultLayout } from '../../default-layout';

export default function Home({ url }: { url: string }) {
  const { data: content } = useContent(url);
  return (
    <DefaultLayout>
      {content && (
        <div className="cms-content">
          {content?.map(({ fields }, index) => (
            <Fragment key={`${fields.component}-${index}`}>
              <RenderContent content={fields.content} />
            </Fragment>
          ))}
        </div>
      )}
    </DefaultLayout>
  );
}
