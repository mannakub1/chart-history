import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { api } from "../../utils/api";
import {
  GetBondRequest,
  GetBondResponse,
  SearchBondPagingResponse,
  SearchBondResponse,
} from "./home-types";

export const SEARCH = "thaisymbols";
export const GET_BOND = "inventory_prices";

export const useGetSymbolList = () => {
  return useQuery([], async () => {
    const response = await fetch(
      "https://d3556x93ql2o55.cloudfront.net/T312812469857/symbol-list.json",
      {
        method: "get",
        headers: new Headers({
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Method": "GET, PUT, POST, DELETE, OPTIONS",
          "Access-Control-Allow-Header":
            "Origin, X-Requested-With, Content-Type, Accept",
        }),
      }
    );

    // const parsed = await response.json();
    console.log("==== parse ====", response);
    console.log("==== body ====", await response.json());

    return await response.json();
  });
};

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

    if (typeof params.thaiSymbol == "string") {
      queryClient.setQueryData<string>(keyThaiSymbol, params.thaiSymbol);
    }
    queryClient.setQueryData<GetBondResponse>(key, data.data);
    return data.data;
  });
};
