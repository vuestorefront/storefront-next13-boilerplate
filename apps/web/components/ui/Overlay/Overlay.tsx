import classNames from 'classnames';
import type { OverlayProps } from '~/components';

export function Overlay({ onClick, visible, className, children, ...attributes }: OverlayProps) {
  return visible ? (
    <div
      onClick={onClick}
      className={classNames('w-full h-full top-0 bottom-0 left-0 right-0 bg-neutral-500/50 fixed z-50', className)}
      data-testid="overlay"
      {...attributes}
    >
      {children}
    </div>
  ) : null;
}
