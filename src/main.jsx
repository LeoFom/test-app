import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryProvider } from "./providers/QueryProvider";
import { antdTheme } from "./theme/antdTheme";
import "./index.css";
import {RouterProvider} from 'react-router-dom';
import router from './routes';
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryProvider>
      <ConfigProvider theme={antdTheme}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </ConfigProvider>
    </QueryProvider>
  </React.StrictMode>,
);
