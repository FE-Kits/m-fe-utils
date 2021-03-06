import { useLiteState } from './state';

export const usePagination = (pageNum = 1, pageSize = 20) =>
  useLiteState(() => ({
    pageNum,
    pageSize,
  }));
