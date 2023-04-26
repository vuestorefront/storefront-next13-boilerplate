import classNames from 'classnames';
import { FormLabelProps } from './types';

export function FormLabel({ children, className }: FormLabelProps) {
  return <span className={classNames('text-sm font-medium', className)}>{children}</span>;
}
