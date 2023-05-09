import classNames from 'classnames';
import type { HeadingProps } from './types';

// fake comments to make tailwind include those classes in the generated tailwind.css
// text-center mb-6 font-bold typography-headline-3 md:typography-headline-2

export function Heading({ title, tag = 'h1', className = '', ...attributes }: HeadingProps): JSX.Element {
  const Tag = tag;

  return (
    <Tag className={classNames(className)} {...attributes}>
      {title}
    </Tag>
  );
}
