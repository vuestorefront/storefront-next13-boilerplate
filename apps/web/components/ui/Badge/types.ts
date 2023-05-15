import { CSSProperties, PropsWithChildren } from 'react';

export interface BadgeProps extends PropsWithChildren {
  dot?: boolean;
  value?: string | number;
  bordered?: boolean;
  style?: CSSProperties;
  className?: string;
}
