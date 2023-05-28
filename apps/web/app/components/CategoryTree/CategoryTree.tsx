'use client';

import { useTranslation } from '~/app/i18n/client';
import { SfIconArrowBack } from '../SFUI';
import { CategoryTreeItem } from './CategoryTreeItem';
import type { CategoryTreeProps } from './types';

export function CategoryTree({ parent, categories }: CategoryTreeProps) {
  const { t } = useTranslation('category');

  return (
    <>
      <span
        className="block py-2 px-4 mb-4 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md"
        data-testid="category-tree"
      >
        {t('category')}
      </span>
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
      <div className="mt-4 mb-6 md:mt-2">
        {categories?.map(({ name, count }) => (
          <CategoryTreeItem key={name} name={name} count={count} href="/category" />
        ))}
      </div>
    </>
  );
}
