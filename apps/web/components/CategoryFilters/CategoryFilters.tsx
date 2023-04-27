import { FilterContainer } from '@/components/FilterContainer';
import { getFacetByAlias } from '@/helpers';
import { useSearchParams } from '@/hooks';
import { getProducts } from '@/mocks/products';
import { useTranslation } from 'next-i18next';
import { FilterColor, FilterSize } from './Filters';
import { TermFacetResultValue } from './types';

export function CategoryFilters() {
  const { t } = useTranslation();
  const { setSearchParams, getAllSearchParams } = useSearchParams();
  const { facets } = getProducts();

  const facetFilters = getAllSearchParams(['color', 'size']);

  const setValue = (name: string) => (values: string[]) => setSearchParams({ [name]: values });

  const colorFacets = getFacetByAlias<TermFacetResultValue>('color', facets);
  const sizeFacets = getFacetByAlias<TermFacetResultValue>('size', facets);

  return (
    <FilterContainer title={t('category:filters')}>
      <div className="flex flex-col gap-2">
        {sizeFacets && (
          <FilterSize facet={sizeFacets} selected={facetFilters.size} onChange={setValue('size')} max={15} />
        )}
        {colorFacets && <FilterColor facet={colorFacets} selected={facetFilters.color} onChange={setValue('color')} />}
      </div>
    </FilterContainer>
  );
}
