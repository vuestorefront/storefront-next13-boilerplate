import { SfSelect } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';

const sortOptions = [
  {
    label: 'latest',
    value: 'createdAt',
  },
  {
    label: 'priceUp',
    value: 'price-up',
  },
  {
    label: 'priceDown',
    value: 'price-down',
  },
  {
    label: 'relevance',
    value: 'score',
  },
];

export function CategorySorting() {
  const { t } = useTranslation('category');

  return (
    <>
      <h5 className="py-2 px-4 mb-6 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md">
        {t('sortBy')}
      </h5>
      <div className="px-2 mb-6">
        <SfSelect aria-label={t('sortBy')}>
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {t(`sortType.${option.label}`)}
            </option>
          ))}
        </SfSelect>
      </div>
    </>
  );
}
