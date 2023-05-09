import { SfSelect } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';
import { useSearchParams } from '~/hooks';

const sortingOptions = [
  {
    id: 'latest',
    name: 'latest',
    facet: 'createdAt',
    direction: 'desc',
  },
  {
    id: 'price-up',
    name: 'priceUp',
    facet: 'price',
    direction: 'asc',
  },
  {
    id: 'price-down',
    name: 'priceDown',
    facet: 'price',
    direction: 'desc',
  },
  {
    id: 'relevance',
    name: 'relevance',
    facet: 'score',
    direction: 'desc',
  },
];

export function CategorySorting() {
  const { t } = useTranslation('category');
  const { setSearchParams, getSearchParams } = useSearchParams();
  const onChange = (sort: string) => setSearchParams({ sort });
  const selected = getSearchParams('sort') || sortingOptions[0].id;

  return (
    <>
      <h5 className="py-2 px-4 mt-6 mb-6 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md">
        {t('sortBy')}
      </h5>
      <div className="px-2">
        <SfSelect aria-label={t('sortBy')} value={selected} onChange={(e) => onChange(e.target.value)}>
          {sortingOptions.map((value) => (
            <option key={value.id} value={value.id} aria-selected={value.id === selected}>
              {t(`sortType.${value.name}`)}
            </option>
          ))}
        </SfSelect>
      </div>
    </>
  );
}
