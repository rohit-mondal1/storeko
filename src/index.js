import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserContext from "./components/out/context/UserContext";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContext>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </UserContext>
);

reportWebVitals();
