import { SfIconArrowBack } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';
import { CategoryTreeProps } from '~/components/CategoryTree/types';
import { FilterContainer } from '~/components/FilterContainer';
import { CategoryTreeItem } from './CategoryTreeItem';

export function CategoryTree({ parent, categories }: CategoryTreeProps) {
  const { t } = useTranslation('category');

  return (
    <FilterContainer title={t('category')}>
      {parent && (
        <CategoryTreeItem
          name={
            <>
              <SfIconArrowBack size="sm" className="text-neutral-500 mr-2" />
              {parent.name}
            </>
          }
          count={parent.count}
          href="/category"
        />
      )}
      <div data-testid="categories" className="mt-4 md:mt-2">
        {categories?.map(({ name, count }) => (
          <CategoryTreeItem key={name} name={name} count={count} href="/category" />
        ))}
      </div>
    </FilterContainer>
  );
}
