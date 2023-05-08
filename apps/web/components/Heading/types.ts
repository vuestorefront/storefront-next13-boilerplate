import type { ElementType } from 'react';

export type HeadingProps = {
  title: string;
  tag?: Extract<ElementType, `h${number}`>;
  className?: string;
};
