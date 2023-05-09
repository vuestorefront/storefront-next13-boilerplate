import { useTranslation } from 'next-i18next';
import { getFacetByAlias } from '~/helpers';
import { useSearchParams } from '~/hooks';
import { getProducts } from '~/mocks/products';
import { Filter } from './Filter';

export function CategoryFilters() {
  const { t } = useTranslation('category');
  const { setSearchParams, getAllSearchParams } = useSearchParams();
  const { facets } = getProducts();
  const facetFilters = getAllSearchParams(['color', 'size']);
  const colorFacets = getFacetByAlias('color', facets);
  const sizeFacets = getFacetByAlias('size', facets);
  const setValue = (name: string) => (values: string[]) => setSearchParams({ [name]: values });

  return (
    <>
      <h5 className="py-2 px-4 mt-6 mb-4 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md">
        {t('filters')}
      </h5>
      <div className="flex flex-col gap-2">
        {sizeFacets && (
          <Filter facet={sizeFacets} selected={facetFilters.size} onChange={setValue('size')} type="size" />
        )}
        {colorFacets && (
          <Filter facet={colorFacets} selected={facetFilters.color} onChange={setValue('color')} type="color" />
        )}
      </div>
    </>
  );
}
