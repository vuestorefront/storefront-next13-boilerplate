import { Fragment } from 'react';
import type { RenderContentProps } from './types';

export function RenderContent({ content }: RenderContentProps): JSX.Element {
  return (
    <>
      {content.map(({ fields }, index) => (
        <Fragment key={`${fields.component}-${index}`}>
          {/* eslint-disable-next-line complexity */}
          {/*{(() => {*/}
          {/*  switch (fields.component) {*/}
          {/*    // case 'Hero': {*/}
          {/*    //   return <Hero {...fields} />;*/}
          {/*    // }*/}
          {/*    // case 'Display': {*/}
          {/*    //   return <Display {...fields} />;*/}
          {/*    // }*/}
          {/*    // case 'Heading': {*/}
          {/*    //   return <Heading {...fields} />;*/}
          {/*    // }*/}
          {/*    // case 'ProductSlider': {*/}
          {/*    //   return <ProductSlider {...fields} />;*/}
          {/*    // }*/}
          {/*    // case 'Card': {*/}
          {/*    //   return <CardContent {...fields} />;*/}
          {/*    // }*/}
          {/*    case 'Page': {*/}
          {/*      return <Page {...fields} />;*/}
          {/*    }*/}
          {/*    default: {*/}
          {/*      return <p>component {fields.component} is not registered</p>;*/}
          {/*    }*/}
          {/*  }*/}
          {/*})()}*/}
        </Fragment>
      ))}
    </>
  );
}
