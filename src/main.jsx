// For react and react-dom
import React from "react";
import ReactDOM from "react-dom/client";

// For react router dom
import { BrowserRouter } from "react-router-dom";

// For react query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // The data will considered fresh for one hour, then it will trigger a background fetch again.
      // It's a fake API that has almost a static data which does NOT change alot, if not even ever.
      // I wanted to use Infinity, but one hour is fine.
      staleTime: 60 * 60 * 1000,
    },
  },
});

// For redux & RTK
import { Provider } from "react-redux";
import { store } from "./store.js";

// App and css
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <App />
        </Provider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
