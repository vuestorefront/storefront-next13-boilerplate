import { ReactNode } from 'react';
import { UrlObject } from 'node:url';

type CategoryTreeItem = {
  name: string;
  count?: number;
  href: string | UrlObject;
};

export type CategoryTreeProps = {
  parent?: CategoryTreeItem;
  categories: CategoryTreeItem[];
};

export type CategoryTreeItemProps = Omit<CategoryTreeItem, 'name'> & {
  name: ReactNode;
};
