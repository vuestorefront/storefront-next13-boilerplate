import classNames from 'classnames';
import { BadgePropsType } from './types';

export function Badge({ children, className, dot, value, bordered, ...attributes }: BadgePropsType) {
  return (
    <div
      className={classNames('relative inline-flex bg-inherit rounded-full', {
        '-top-px -right-px': dot,
      })}
      {...attributes}
    >
      {children}
      {!!value && (
        <div
          className={classNames(
            'rounded-[inherit] absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-inherit pointer-events-none',
            bordered && 'p-0.5',
          )}
        >
          <div
            className={classNames(
              'rounded-[inherit] text-center',
              dot ? 'w-2.5 h-2.5' : 'py-0.5 px-1 text-3xs font-medium min-w-[0.75rem]',
              className,
            )}
          >
            {dot || value}
          </div>
        </div>
      )}
    </div>
  );
}
