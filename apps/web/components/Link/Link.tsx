import { forwardRef } from 'react';
import NextLink from 'next/link';

export const Link = forwardRef<HTMLAnchorElement, React.ComponentProps<typeof NextLink>>(
  ({ prefetch, ...rest }, reference) => <NextLink ref={reference} prefetch={prefetch ?? false} {...rest} />,
);
