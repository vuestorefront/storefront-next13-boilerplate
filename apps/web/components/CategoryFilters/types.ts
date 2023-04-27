import { ChangeEventHandler, PropsWithChildren, ReactNode } from 'react';
import { SfFacet } from '@vsf-enterprise/unified-data-model';
import { Maybe } from '@vsf-enterprise/unified-data-model/src/shared';

interface SfFacetItem {
  label: string;
  value: string;
  productCount: Maybe<number>;
}

export type FilterColorItemProps = PropsWithChildren & {
  count?: number;
  disabled?: boolean;
  className?: string;
  color: string;
  onClick: ChangeEventHandler;
  name: string;
  selected: boolean;
};

export type FilterProps = {
  facet: SfFacet;
  selected: string[];
  onChange: Function;
  max?: number;
};

type RenderFilterItemsProps = {
  itemsToRender: SfFacetItem[];
  onItemClick: (value: string) => void;
};

export type FilterBaseProps = {
  facet: SfFacet;
  selected: string[];
  onChange: Function;
  label: string;
  max?: number;
  children: (props: RenderFilterItemsProps) => ReactNode;
};
