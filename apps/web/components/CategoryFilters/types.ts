import { SfFacet } from '@vue-storefront/unified-data-model';

export type CategoryFiltersProps = {
  facets: SfFacet[];
};

export type FilterProps = {
  facet: SfFacet;
  selected: string[];
  onChange: (parameter: string) => void;
  type: 'size' | 'color';
};
