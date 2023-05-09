import { SfSelect } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';
import { FilterContainer } from '~/components/FilterContainer';
import { useSearchParams } from '~/hooks';
import { sortingOptions } from '~/mocks/categoryData';

export function CategorySorting() {
  const { t } = useTranslation('category');
  const { setSearchParams, getSearchParams } = useSearchParams();

  const onChange = (sort: string) => setSearchParams({ sort });
  const selected = getSearchParams('sort') || sortingOptions[0].id;

  return (
    <FilterContainer title={t('sortBy')}>
      <label className="mx-4 mt-6 block">
        <span className="sr-only">{t('sortBy')}</span>
        <SfSelect value={selected} onChange={(e) => onChange(e.target.value)}>
          {sortingOptions.map((value) => (
            <option key={value.id} value={value.id} aria-selected={value.id === selected}>
              {t(`sortType.${value.name}`)}
            </option>
          ))}
        </SfSelect>
      </label>
    </FilterContainer>
  );
}
