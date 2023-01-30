import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home/index";
import Theme from "./constants/theme/theme";
import { useCallback, useEffect, useRef } from "react";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const App = () => {
  const isInitial = useRef(false);

  const handleOnError = useCallback((error: any) => {
    if (error !== "Missing queryFn") {
      console.log("watch Error", error);
    }
  }, []);

  useEffect(() => {
    if (!isInitial.current) {
      queryClient.setDefaultOptions({
        queries: {
          refetchOnWindowFocus: false,
          refetchOnReconnect: false,
          retry: 1,
          onError: handleOnError,
        },
        mutations: {
          retry: 0,
          onError: handleOnError,
        },
      });
    }
  }, [handleOnError]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <Home />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
