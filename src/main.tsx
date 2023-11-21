import React from "react";
import routes from "./routes/routes";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

import "./index.css";
import { ThemeContextProvider } from "./context/ThemeContext";

Amplify.configure(awsExports);


 ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={routes} />
    </ThemeContextProvider>
  </React.StrictMode>
);
