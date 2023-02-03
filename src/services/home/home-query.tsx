import { useInfiniteQuery } from "react-query";
import { api } from "../../utils/api";
import { SearchBondPagingResponse, SearchBondResponse } from "./home-types";

export const SEARCH = "thaisymbols";

export const useSearchBond = (q?: string) => {
  return useInfiniteQuery<SearchBondPagingResponse>(
    [SEARCH, q],
    async ({ pageParam = 0 }) => {
      const { data } = await api.gt.post<SearchBondResponse[]>(SEARCH, {
        mmCode: process.env.REACT_APP_GT_MM_CODE,
        q: q || "",
        offset: pageParam,
        limit: 10,
      });

      const responseWithPaging: SearchBondPagingResponse = {
        data: data.data,
        paging: {
          page: pageParam,
          nextPage: pageParam + 1,
        },
      };
      return responseWithPaging;
    },
    {
      getNextPageParam: (response: SearchBondPagingResponse) => {
        const { data, paging } = response;
        if (!data) return null;
        return paging.nextPage;
      },
    }
  );
};
