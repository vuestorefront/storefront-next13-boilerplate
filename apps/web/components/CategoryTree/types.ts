import { ReactNode } from 'react';
import { UrlObject } from 'node:url';
import { Nullable } from '~/types';

type CategoryTreeItem = {
  name: string;
  count?: Nullable<number>;
  href: string | UrlObject;
};

export type CategoryTreeProps = {
  parent?: CategoryTreeItem;
  categories: CategoryTreeItem[];
};

export type CategoryTreeItemProps = Omit<CategoryTreeItem, 'name'> & {
  name: ReactNode;
};
