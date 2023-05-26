'use client';

import { Hydrate as HydrateRQ, HydrateProps } from '@tanstack/react-query';

function Hydrate(props: HydrateProps) {
  return <HydrateRQ {...props} />;
}

export default Hydrate;
