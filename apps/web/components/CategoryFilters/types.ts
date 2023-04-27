import { ChangeEventHandler, PropsWithChildren, ReactNode } from 'react';
import type { FacetResultValue, TermsFacetResult, FacetResultTerm } from '@vsf-enterprise/commercetools-types';

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
  facet: TermFacetResultValue;
  selected: string[];
  onChange: Function;
  max?: number;
};

type RenderFilterItemsProps = {
  itemsToRender: FacetResultTerm[];
  onItemClick: (value: string) => void;
};

export type FilterBaseProps = {
  facet: TermFacetResultValue;
  selected: string[];
  onChange: Function;
  label: string;
  max?: number;
  children: (props: RenderFilterItemsProps) => ReactNode;
};

export interface TermFacetResultValue extends FacetResultValue {
  value: TermsFacetResult;
}
