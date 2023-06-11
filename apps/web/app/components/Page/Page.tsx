import type { PageProps } from './types';

export function Page({ content, ...attributes }: PageProps): JSX.Element {
  return (
    <div className="page" {...attributes}>
      {content}
    </div>
  );
}
