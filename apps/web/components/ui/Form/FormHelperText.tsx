import classNames from 'classnames';
import { FormHelperTextProps } from './types';

export function FormHelperText({ children, className }: FormHelperTextProps) {
  return (
    <small className={classNames('text-xs text-neutral-500 mt-0.5', className)} data-testid="form-helper-text">
      {children}
    </small>
  );
}
