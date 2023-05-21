import {
  QueryFunction,
  QueryKey,
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from "@tanstack/react-query";
import type { WithPageMeta } from "@/interfaces/article";

export const useInfiniteQueryWithMeta = <TData extends WithPageMeta<{}>>(
  queryKey: QueryKey,
  fetchFn: QueryFunction<TData>,
  config?: UseInfiniteQueryOptions<TData>
) => {
  return useInfiniteQuery(queryKey, fetchFn, {
    getNextPageParam: (lastPage) => {
      return lastPage.meta.hasNextPage && lastPage.meta.page + 1;
    },
    getPreviousPageParam: (firstPage) => {
      return firstPage.meta.hasPreviousPage && firstPage.meta.page - 1;
    },
    ...config,
  });
};
