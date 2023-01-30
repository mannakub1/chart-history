import { useQuery, useMutation } from "react-query";
import { mockSearch, mockSearch2 } from "../../constants/mockup/data";
import { api } from "../../utils/api";

export const SEARCH = "/search";

export const useSearchBond = () => {
  return useQuery([SEARCH], () => {
    console.log("=== useSearchBond === ");
    return mockSearch;
  });
};

export const useSearchBondAction = () => {
  return useMutation(async (q: string) => {
    console.log("=== useSearchBonAction === ");
    return mockSearch2;
  });
};

export const useSearchBondAPI = () => {
  return useQuery([SEARCH], async () => {
    const { data } = await api.gt.post<any>(`${SEARCH}`);

    return data.data;
  });
};

export const useSearchBondActionAPI = () => {
  return useMutation(async () => {
    const { data } = await api.gt.post<any>(`${SEARCH}`);

    return data.data;
  });
};
