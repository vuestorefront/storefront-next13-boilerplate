import { SfFacet } from '@vsf-enterprise/unified-data-model';

export type CategoryFiltersProps = {
  facets: SfFacet[];
};

export type FilterProps = {
  facet: SfFacet;
  selected: string[];
  onChange: (parameter: string) => void;
  type: 'size' | 'color';
};
