import { useInfiniteQuery, useMutation } from "react-query";
import { api } from "../../utils/api";
import {
  GetBondRequest,
  GetBondResponse,
  SearchBondPagingResponse,
  SearchBondResponse,
} from "./home-types";

export const SEARCH = "thaisymbols";
export const GET_BOND = "inventory_prices";

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

export const useGetBond = () => {
  return useMutation(async (params: GetBondRequest) => {
    const paramsRequest = {
      ...params,
      mmCode: process.env.REACT_APP_GT_MM_CODE,
    };
    const { data } = await api.gt.post<GetBondResponse>(
      GET_BOND,
      paramsRequest
    );
    return data.data;
  });
};
