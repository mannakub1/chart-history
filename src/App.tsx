import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/material/styles";

import { createTheme } from "@mui/material/styles";
import { useCallback, useEffect, useRef } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

const Theme = createTheme({
  typography: {
    fontFamily: "Kanit, Inter",
  },
});

const App = () => {
  const isInitial = useRef(false);

  useEffect(() => {
    document.title = "Chart History";
  }, []);

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
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <Routes />
          <ReactQueryDevtools initialIsOpen={true} />
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
