import type { PropsWithChildren } from 'react';

export function NarrowContainer({ children }: PropsWithChildren) {
  return (
    <div className="max-w-screen-3-extra-large mx-auto md:px-6 lg:px-10" data-testid="narrowContainer">
      {children}
    </div>
  );
}
