import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider as SupabaseProvider } from "react-supabase";
import supabase from "./config/supabase";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <SupabaseProvider value={supabase}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </SupabaseProvider>
  </React.StrictMode>
);
