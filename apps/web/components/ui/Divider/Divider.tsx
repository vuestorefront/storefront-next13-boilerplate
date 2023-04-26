import classNames from 'classnames';
import type { DividerProps } from './types';

export function Divider({ className }: DividerProps) {
  return <hr className={classNames('w-full h-px bg-neutral-200', className)} />;
}
