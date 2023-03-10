import { useMemo } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { fetchFileFromCdn } from "./api/fetch-cdn";

export const useRouter = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  return useMemo(() => {
    return {
      push: navigate,
      pathname: location.pathname,
      query: {
        ...queryString.parse(location.search.slice(1)),
        ...params,
      },
      location,
      navigate,
    };
  }, [location, navigate, params]);
};

export const getOrInitQueryData = async <T = unknown,>(
  queryClient,
  key,
  path
): Promise<T> => {
  let currentData = queryClient.getQueryData(key);
  if (!currentData) {
    const response = await fetchFileFromCdn(path);

    if (response) {
      currentData = response;
      queryClient.setQueryData(key, response);
    }
  }
  return currentData;
};
