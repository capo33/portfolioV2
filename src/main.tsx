import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
 
import routes from "./routes/routes";

import "./index.css";
import { ThemeContextProvider } from "./context/ThemeContext";

 ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={routes} />
    </ThemeContextProvider>
  </React.StrictMode>
);
