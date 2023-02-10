import { useInfiniteQuery, useMutation, useQueryClient } from "react-query";
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
      const limit = 10;
      const { data } = await api.gt.post<SearchBondResponse[]>(SEARCH, {
        mmCode: process.env.REACT_APP_GT_MM_CODE,
        q: q || "",
        offset: pageParam * limit,
        limit,
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
  const queryClient = useQueryClient();
  return useMutation(async (params: GetBondRequest) => {
    const keyThaiSymbol = [GET_BOND, params.thaiSymbol];
    const isClearCache =
      queryClient.getQueryData<GetBondResponse>(keyThaiSymbol);

    if (!isClearCache) {
      queryClient.removeQueries([GET_BOND]);
    }

    const key = [GET_BOND, params.thaiSymbol, params.period];
    const oldData = queryClient.getQueryData<GetBondResponse>(key);

    if (oldData) {
      return oldData;
    }

    const paramsRequest = {
      ...params,
      mmCode: process.env.REACT_APP_GT_MM_CODE,
    };
    const { data } = await api.gt.post<GetBondResponse>(
      GET_BOND,
      paramsRequest
    );
    queryClient.setQueryData<string>(keyThaiSymbol, params.thaiSymbol);
    queryClient.setQueryData<GetBondResponse>(key, data.data);
    return data.data;
  });
};
