import NextLink from 'next/link';
import { SfCounter, SfListItem } from '@storefront-ui/react';
import { CategoryTreeItemProps } from './types';

export function CategoryTreeItem({ name, count, href }: CategoryTreeItemProps): JSX.Element {
  return (
    <NextLink href={href} data-testid="category-tree-item">
      <SfListItem as="span" size="lg" className="md:sf-list-item-sm md:py-1.5 sf-list-item">
        <span className="flex gap-2 items-center">
          <span className="text-base md:text-sm capitalize flex items-center">{name}</span>
          {Number(count) > -1 && <SfCounter className="md:text-sm font-normal">{count}</SfCounter>}
        </span>
      </SfListItem>
    </NextLink>
  );
}
