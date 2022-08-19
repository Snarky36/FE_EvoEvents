import { Filters } from './Filters';
import PageItems from './PageItems';

export interface PaginatedRequest {
  readonly paginationModel?: PageItems;
  filters?: Filters;
}