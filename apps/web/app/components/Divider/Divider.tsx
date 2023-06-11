import classNames from 'classnames';
import type { DividerProps } from '~/components';

export function Divider({ className }: DividerProps) {
  return <hr className={classNames('w-full h-px bg-neutral-200', className)} data-testid="divider" />;
}
