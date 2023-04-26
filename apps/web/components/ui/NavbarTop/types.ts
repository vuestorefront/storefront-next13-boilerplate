import { CSSProperties, PropsWithChildren } from 'react';

export type VsfLogoProps = {
  className?: string;
  style?: CSSProperties;
};

export interface NavbarTopProps extends PropsWithChildren {
  filled?: boolean;
}
