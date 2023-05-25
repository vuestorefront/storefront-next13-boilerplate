'use client';

import { Fragment } from 'react';
import { RenderContent } from './components/RenderContent';
import { DefaultLayout } from './default-layout';

export default function Home({ content = [] }: { content: any[] }) {
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
