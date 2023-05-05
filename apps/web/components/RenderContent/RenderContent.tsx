import { Fragment } from 'react';
import { Page, Hero, Display, Heading, ProductSlider, CategoryCard } from '~/components';
import { getProductMock } from '~/mocks/product';
import type { RenderContentProps } from './types';

const products = getProductMock(8);

export function RenderContent({ content, ...attributes }: RenderContentProps): JSX.Element {
  return (
    <div {...attributes}>
      {content.map(({ fields }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Fragment key={`${fields.component}-${index}`}>
          {(() => {
            switch (fields.component) {
              case 'Hero': {
                return <Hero fields={fields} />;
              }
              case 'Display': {
                return <Display />;
              }
              case 'Heading': {
                return <Heading />;
              }
              case 'ProductSlider': {
                return <ProductSlider products={products} />;
              }
              case 'Card': {
                return <CategoryCard />;
              }
              case 'Page': {
                return <Page />;
              }
              default: {
                return <p>component {(fields as any).component} is not registered</p>;
              }
            }
          })()}
        </Fragment>
      ))}
    </div>
  );
}
