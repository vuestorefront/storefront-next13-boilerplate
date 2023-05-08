import classNames from 'classnames';
import type { HeadingProps } from './types';

export function Heading({ title, tag = 'h1', className = '', ...attributes }: HeadingProps): JSX.Element {
  const Tag = tag;

  return (
    <Tag className={classNames(className)} {...attributes}>
      {title}
    </Tag>
  );
}
