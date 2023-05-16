import classNames from 'classnames';
import type { HeadingProps } from '~/components';

export function Heading({
  tag = 'h1',
  className = 'text-center mb-6 font-bold typography-headline-3 md:typography-headline-2',
  title,
  ...attributes
}: HeadingProps): JSX.Element {
  const Tag = tag;

  return (
    <Tag className={classNames(className)} {...attributes}>
      {title}
    </Tag>
  );
}
