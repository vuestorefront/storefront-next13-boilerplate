import type { SfProduct } from '@vue-storefront/unified-data-model';
import type { HeadingProps } from '~/components/Heading/types';
import type { PageProps } from '~/components/Page/types';
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

export type DynamicContentFields =
  | WithComponentField<HeroProps, 'Hero'>
  | WithComponentField<HeadingProps, 'Heading'>
  | WithComponentField<CategoryCardProps, 'Card'>
  | WithComponentField<DisplayProps, 'Display'>
  | WithComponentField<Omit<ProductSliderProps, 'products'> & { items: SfProduct[] }, 'ProductSlider'>
  | WithComponentField<PageProps, 'Page'>
  | WithComponentField<unknown, 'Unknown'>;

export interface ContentDynamicPage {
  component: 'Page';
  content: EntryFields<DynamicContentFields>;
  name: string;
  url: string;
}
