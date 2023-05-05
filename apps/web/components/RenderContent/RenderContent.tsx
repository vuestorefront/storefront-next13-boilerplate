import { Fragment } from 'react';
import { Page, Hero, Display, Heading, CategoryCard } from '~/components';
import type { RenderContentProps } from './types';

export function RenderContent({ content, ...attributes }: RenderContentProps): JSX.Element {
  return (
    <div {...attributes}>
      {content.map(({ fields }, index) => (
        <Fragment key={`${fields.component}-${index}`}>
          {(() => {
            switch (fields.component) {
              case 'Hero': {
                return (
                  <Hero
                    image={fields.image}
                    subtitle={fields.subtitle}
                    title={fields.title}
                    description={fields.description}
                    primaryButtonLink={fields.primaryButtonLink}
                    primaryButtonText={fields.primaryButtonText}
                    secondaryButtonLink={fields.secondaryButtonLink}
                    secondaryButtonText={fields.secondaryButtonText}
                  />
                );
              }
              case 'Display': {
                return <Display />;
              }
              case 'Heading': {
                return <Heading />;
              }
              // case 'ProductSlider': {
              //   return <ProductSlider />;
              // }
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
