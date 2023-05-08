export type Breadcrumb = {
  name: string;
  link: string;
};

export interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}
