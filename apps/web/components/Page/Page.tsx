import type { PageProps } from './types';

export function Page({ content }: PageProps): JSX.Element {
  return (
    <div className="page" data-testid="page">
      {content}
    </div>
  );
}
