import classNames from 'classnames';
import { PaymentMethodProps } from './types';

export function PaymentMethod({ active, disabled, children, onClick }: PaymentMethodProps) {
  return (
    <button
      type="button"
      data-testid="payment-method"
      onClick={() => typeof onClick === 'function' && onClick()}
      disabled={disabled}
      className={classNames(
        'border border-1 border-neutral-200 rounded h-20 flex items-center justify-center disabled:bg-neutral-100 disabled:opacity-50 focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600',
        active && 'border-2 border-primary-700',
      )}
    >
      {children}
    </button>
  );
}
