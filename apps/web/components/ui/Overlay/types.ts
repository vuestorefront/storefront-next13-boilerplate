import { CSSProperties, PropsWithChildren, SyntheticEvent } from 'react';

export interface OverlayProps extends PropsWithChildren {
  visible?: boolean;
  onClick?: (event: SyntheticEvent) => void;
  className?: string;
  style?: CSSProperties;
}
