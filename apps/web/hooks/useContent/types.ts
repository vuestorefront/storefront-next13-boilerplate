import type { ReactNode } from 'react';
import type { HeadingProps } from '~/components/Heading/types';
import type { ProductSliderProps } from '~/components/ProductSlider/types';
import type { CategoryCardProps } from '~/components/ui/CategoryCard/types';
import type { DisplayProps } from '~/components/ui/Display/types';
import type { HeroProps } from '~/components/ui/Hero/types';

type EntryFields<TFields> = Array<{
  fields: TFields;
}>;

type WithComponentField<TProps, TComponent> = TProps & {
  component: TComponent;
};

export interface PageProps {
  component: 'Page';
  content: ReactNode;
}

export type DynamicContentFields =
  | WithComponentField<HeroProps, 'Hero'>
  | WithComponentField<HeadingProps, 'Heading'>
  | WithComponentField<CategoryCardProps, 'Card'>
  | WithComponentField<DisplayProps, 'Display'>
  | WithComponentField<ProductSliderProps, 'ProductSlider'>
  | PageProps;

export interface ContentDynamicPage {
  component: 'Page';
  content: EntryFields<DynamicContentFields>;
  name: string;
  url: string;
}
