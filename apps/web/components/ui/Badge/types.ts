import { CSSProperties, PropsWithChildren } from 'react';

export type BadgePropsType = Partial<{
  dot: boolean;
  value: string | number;
  bordered: boolean;
  style: CSSProperties;
  className: string;
}> &
  PropsWithChildren;
