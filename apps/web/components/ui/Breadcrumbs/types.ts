export type Breadcrumb = {
  name: string;
  link: string;
};

export type BreadcrumbItem = {
  name: string;
  link: string;
};

export interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}
