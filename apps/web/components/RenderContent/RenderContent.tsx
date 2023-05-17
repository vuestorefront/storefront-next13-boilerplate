import { Fragment } from 'react';
import { Page, Hero, Display, Heading, CategoryCard, ProductSlider } from '~/components';
import type { RenderContentProps } from '~/components';

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
              case 'Heading': {
                return <Heading title={fields.title} tag={fields.tag} className={fields.className} />;
              }
              case 'Card': {
                return <CategoryCard items={fields.items} />;
              }
              case 'Display': {
                return <Display items={fields.items} />;
              }
              case 'ProductSlider': {
                return (
                  <ProductSlider products={fields.items} className="max-w-screen-3xl mx-auto px-4 md:px-10 mb-20" />
                );
              }
              case 'Page': {
                return <Page />;
              }
              default: {
                return <p>component {fields.component} is not registered</p>;
              }
            }
          })()}
        </Fragment>
      ))}
    </div>
  );
}
