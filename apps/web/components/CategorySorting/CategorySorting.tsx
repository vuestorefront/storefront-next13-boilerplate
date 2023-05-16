import { SfSelect } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';

const sortOptions = [
  {
    label: 'latest',
    value: 'createdAt',
  },
  {
    label: 'priceUp',
    value: 'price-low-to-high',
  },
  {
    label: 'priceDown',
    value: 'price-high-to-low',
  },
  {
    label: 'relevance',
    value: 'relevant',
  },
];

export function CategorySorting() {
  const { t } = useTranslation('category');

  return (
    <>
      <h5
        className="py-2 px-4 mb-6 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md"
        data-testid="category-sorting"
      >
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
