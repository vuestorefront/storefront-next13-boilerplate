import { CSSProperties, PropsWithChildren } from 'react';

export interface BadgeProps extends PropsWithChildren {
  dot?: boolean;
  value?: string | number;
  invisible?: boolean;
  bordered?: boolean;
  style?: CSSProperties;
  className?: string;
}
