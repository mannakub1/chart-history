import { useInfiniteQuery, useMutation, useQueryClient } from "react-query";
import {
  GetBondFromFileResponse,
  GetBondRequest,
  GetSearchBondRequest,
  SearchSymbolPagingResponse,
  SymbolListType,
  SymbolType,
} from "./home-types";
import { getOrInitQueryData } from "../../utils/helper";

export const SEARCH = "SYMBOLLIST.json";
export const SYMBOL = (symbol) => `${symbol}.json`;

export const useSearchBond = (params: GetSearchBondRequest) => {
  const { q, bondType } = params;
  const queryClient = useQueryClient();
  const limit = 10;
  const mmCode = process.env.REACT_APP_GT_MM_CODE;
  const keySymboleList = [SEARCH, mmCode];

  return useInfiniteQuery<SearchSymbolPagingResponse>(
    [SEARCH, q],
    async ({ pageParam = 0 }) => {
      const path = `${
        process.env.REACT_APP_CDN_HOST
      }/${mmCode}-${bondType.toUpperCase()}-${SEARCH}`;

      const symbolList = await getOrInitQueryData<SymbolListType>(
        queryClient,
        keySymboleList,
        path
      );

      const currentSymbolList: SymbolType[] = findSymboleList(
        symbolList.data,
        q
      );

      const responseWithPaging: SearchSymbolPagingResponse = {
        data: currentSymbolList?.slice(
          pageParam * limit,
          (pageParam + 1) * limit
        ),
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
    const { thaiSymbol, bondType } = params;
    const mmCode = process.env.REACT_APP_GT_MM_CODE;
    const GET_BOND = `thai-symbol`;
    const keyThaiSymbol = [GET_BOND, thaiSymbol];

    const path = `${
      process.env.REACT_APP_CDN_HOST
    }/${mmCode}-${bondType}-${SYMBOL(thaiSymbol)}`;

    const isClearCache = queryClient.getQueryData(keyThaiSymbol);
    if (!isClearCache) {
      queryClient.removeQueries([GET_BOND]);
    }

    const bond = await getOrInitQueryData<GetBondFromFileResponse>(
      queryClient,
      keyThaiSymbol,
      path
    );

    const responseBond = bond
      ? {
          ...bond,
          yieldPrices: bond?.yieldPrices[`${params.period}`],
        }
      : undefined;

    return responseBond;
  });
};

const findSymboleList = (symbolList, q) => {
  let currentSymbolList: SymbolType[] = [];
  if (q && q !== "") {
    for (const symbol of symbolList || []) {
      const { thaiSymbol } = symbol;
      const thaiSymbolLowerCase = thaiSymbol.toLowerCase();
      const qLowerCase = q.toLowerCase();
      if (thaiSymbolLowerCase.indexOf(qLowerCase) > -1) {
        currentSymbolList.push(symbol);
      }
    }
  } else {
    currentSymbolList = symbolList || [];
  }

  return currentSymbolList;
};
