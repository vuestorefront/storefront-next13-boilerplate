import type { PropsWithChildren } from 'react';

export function NarrowContainer({ children }: PropsWithChildren) {
  return (
    <div className="max-w-screen-3xl mx-auto md:px-6 lg:px-10" data-testid="narrow-container">
      {children}
    </div>
  );
}
