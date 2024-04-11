import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import theme from "./theme.ts";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import router from "./router";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      cacheTime: 300_000,
      staleTime: 10 * 1000,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
    <ReactQueryDevtools initialIsOpen={true} />
  </React.StrictMode>
);