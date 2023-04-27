import { ReactNode } from 'react';
import { UrlObject } from 'url';
import { Nullable } from '~/types';

export type CategoryTreeItemProps = {
  name: ReactNode;
  count?: Nullable<number>;
  href: string | UrlObject;
};
