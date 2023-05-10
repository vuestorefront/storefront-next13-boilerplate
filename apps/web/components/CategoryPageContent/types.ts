import { PropsWithChildren, ReactNode } from 'react';
import { SfProductCatalogItem } from '@vsf-enterprise/unified-data-model';

export interface CategoryPageContentProps extends PropsWithChildren {
  title: string;
  products: SfProductCatalogItem[];
  totalProducts: number;
  sidebar?: ReactNode;
  itemsPerPage?: number;
}

export interface CategorySidebarProps extends PropsWithChildren {
  isOpen: boolean;
  closeSidebar: () => void;
}
