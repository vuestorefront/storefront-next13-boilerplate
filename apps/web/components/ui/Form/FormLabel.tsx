import classNames from 'classnames';
import type { FormLabelProps } from '~/components';

export function FormLabel({ children, className }: FormLabelProps) {
  return (
    <span className={classNames('text-sm font-medium', className)} data-testid="form-label">
      {children}
    </span>
  );
}
