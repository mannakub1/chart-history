import { useInfiniteQuery, useMutation, useQueryClient } from "react-query";
import { api } from "../../utils/api";
import {
  GetBondFromFileResponse,
  GetBondRequest,
  GetBondResponse,
  SearchSymbolPagingResponse,
  SymbolType,
} from "./home-types";
import humps from "humps";

export const SEARCH = "symbol-list.json";

export const useSearchBond = (q?: string) => {
  const queryClient = useQueryClient();
  const limit = 10;
  const mmCode = process.env.REACT_APP_GT_MM_CODE;
  const keySymboleList = [SEARCH, mmCode];

  return useInfiniteQuery<SearchSymbolPagingResponse>(
    [SEARCH, q],
    async ({ pageParam = 0 }) => {
      let symbolList = queryClient.getQueryData<SymbolType[]>(keySymboleList);
      if (!symbolList) {
        const response = await fetch(
          `${process.env.REACT_APP_CDN_HOST}/${mmCode}/${SEARCH}`,
          {
            method: "get",
          }
        );

        const result = await response.json();
        if (result) {
          result.data = humps.camelizeKeys(result.data);
          symbolList = result.data;
          queryClient.setQueryData<SymbolType[]>(keySymboleList, result.data);
        }
      }

      let findSymbolList: SymbolType[] = [];
      if (q && q !== "") {
        for (const symbol of symbolList || []) {
          const { thaiSymbol } = symbol;
          const thaiSymbolLowerCase = thaiSymbol.toLowerCase();
          const qLowerCase = q.toLowerCase();
          if (thaiSymbolLowerCase.indexOf(qLowerCase) > -1) {
            findSymbolList.push(symbol);
          }
        }
      } else {
        findSymbolList = symbolList || [];
      }

      const responseWithPaging: SearchSymbolPagingResponse = {
        data: findSymbolList?.slice(pageParam * limit, (pageParam + 1) * limit),
        paging: {
          page: pageParam,
          nextPage: pageParam + 1,
        },
      };
      return responseWithPaging;
    },
    {
      getNextPageParam: (response: SearchSymbolPagingResponse) => {
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
    const mmCode = process.env.REACT_APP_GT_MM_CODE;
    const GET_BOND = `thai-symbol`;
    const keyThaiSymbol = [GET_BOND, params.thaiSymbol];
    let bond = queryClient.getQueryData<GetBondFromFileResponse>(keyThaiSymbol);

    if (!bond) {
      queryClient.removeQueries([GET_BOND]);

      const response = await fetch(
        `${process.env.REACT_APP_CDN_HOST}/${mmCode}/thai-symbol-${params.thaiSymbol}.json`,
        {
          method: "get",
        }
      );

      let result = await response.json();
      if (result) {
        result = humps.camelizeKeys(result);
        bond = result;
      }
      if (typeof params.thaiSymbol == "string") {
        queryClient.setQueryData<GetBondFromFileResponse | undefined>(
          keyThaiSymbol,
          bond
        );
      }
    }

    const responseBond = bond
      ? {
          ...bond,
          yieldPrices: bond?.yieldPrices[`${params.period}`],
        }
      : undefined;

    return responseBond;
  });
};
