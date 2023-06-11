import { PropsWithChildren } from 'react';
import { Breadcrumb, Breadcrumbs } from '~/app/components/Breadcrumbs';
import { NarrowContainer } from '~/app/components/NarrowContainer';

type BreadcrumbsLayoutProps = PropsWithChildren & {
  breadcrumbs?: Breadcrumb[];
};

export function BreadcrumbsLayout({ breadcrumbs = [], children }: BreadcrumbsLayoutProps) {
  return (
    <>
      <NarrowContainer>
        {breadcrumbs && (
          <div className="p-4 md:px-0">
            <Breadcrumbs breadcrumbs={breadcrumbs} />
          </div>
        )}
        {children}
      </NarrowContainer>
    </>
  );
}
