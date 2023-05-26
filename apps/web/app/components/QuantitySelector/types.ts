import { PropsWithChildren } from 'react';

export interface QuantitySelectorProps extends PropsWithChildren {
  value: number;
  onChange?: (value: number) => void;
  minValue?: number;
  maxValue?: number;
  className?: string;
}
