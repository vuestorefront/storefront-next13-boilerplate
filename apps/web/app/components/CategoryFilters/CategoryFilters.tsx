'use client';

import { useState } from 'react';
import { useTranslation } from '~/app/i18n/client';
import { Filter } from './Filter';
import type { CategoryFiltersProps } from './types';

export function CategoryFilters({ facets }: CategoryFiltersProps) {
  const { t } = useTranslation('en', 'category');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const colorFacets = facets.find(({ name }) => name === 'color');
  const sizeFacets = facets.find(({ name }) => name === 'size');

  const handleFilterSelection = (currentValue: string) => {
    if (selectedFilters.includes(currentValue)) {
      setSelectedFilters(selectedFilters.filter((value) => value !== currentValue));
    } else {
      setSelectedFilters([...selectedFilters, currentValue]);
    }
  };

  return (
    <>
      <span
        className="block py-2 px-4 mt-6 mb-4 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md"
        data-testid="category-filters"
      >
        {t('filters')}
      </span>
      <div className="flex flex-col gap-2">
        {sizeFacets && (
          <Filter facet={sizeFacets} onChange={handleFilterSelection} selected={selectedFilters} type="size" />
        )}
        {colorFacets && (
          <Filter facet={colorFacets} onChange={handleFilterSelection} selected={selectedFilters} type="color" />
        )}
      </div>
    </>
  );
}
