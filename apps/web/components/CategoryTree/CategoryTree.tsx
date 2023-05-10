import { SfIconArrowBack } from '@storefront-ui/react';
import { useTranslation } from 'next-i18next';
import { CategoryTreeProps } from '~/components/CategoryTree/types';
import { CategoryTreeItem } from './CategoryTreeItem';

export function CategoryTree({ parent, categories }: CategoryTreeProps) {
  const { t } = useTranslation('category');

  return (
    <>
      <h5 className="py-2 px-4 mb-4 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md">
        {t('category')}
      </h5>
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
      <div data-testid="categories" className="mt-4 mb-6 md:mt-2">
        {categories?.map(({ name, count }) => (
          <CategoryTreeItem key={name} name={name} count={count} href="/category" />
        ))}
      </div>
    </>
  );
}
