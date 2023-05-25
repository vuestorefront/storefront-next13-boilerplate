import classNames from 'classnames';
import type { TagProps, TagSize } from '~/components';

function getVariantClasses(variant: TagProps['variant'], strong: boolean): classNames.ArgumentArray {
  switch (variant) {
    case 'primary': {
      return ['text-primary-800', strong ? 'bg-primary-600' : 'bg-primary-100'];
    }
    case 'secondary': {
      return ['text-secondary-800', strong ? 'bg-secondary-800' : 'bg-secondary-100'];
    }
    case 'negative': {
      return ['text-negative-800', strong ? 'bg-negative-600' : 'bg-negative-100'];
    }
    default: {
      return [];
    }
  }
}

const sizeClasses: Record<TagSize, string> = {
  base: 'text-sm p-1.5 gap-1.5',
  sm: 'text-xs p-1 gap-1',
};

export function Tag({
  children,
  className,
  size = 'base',
  strong = false,
  variant = 'primary',
  ...rest
}: TagProps): JSX.Element {
  return (
    <div
      className={classNames(
        'inline-flex items-center justify-center',
        strong ? 'text-white font-medium rounded-none' : 'rounded-md font-normal',
        getVariantClasses(variant, strong),
        sizeClasses[size],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
