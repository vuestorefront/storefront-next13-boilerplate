export interface PaginationProps {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  maxVisiblePages: number;
  onPageUpdate?: (page: number) => any;
}
