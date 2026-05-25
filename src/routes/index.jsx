/* eslint-disable react-refresh/only-export-components */

import {createBrowserRouter, Navigate} from 'react-router-dom';

import {lazy} from "react";
import {AppLayout} from "../components/layout/AppLayout.jsx";
import {BarChartOutlined, FormOutlined, HomeOutlined, TableOutlined} from "@ant-design/icons";
import {COINS, HOME, COINS_PAGED, CHART, WIZARD} from "./routes.data.js";

const Home = lazy(() => import("../pages/HomePage"));
const CoinsPage = lazy(() => import("../pages/CoinsPage"));
const CoinsPagedPage = lazy(() => import("../pages/CoinsPagedPage"));
const ChartPage = lazy(() => import("../pages/ChartPage"));
const WizardPage = lazy(() => import("../pages/WizardPage"));

export const routes = [
  {
    // Основний блок застосунку з боковим меню
    element: <AppLayout />,
    children: [
      {
        path: HOME,
        label: "Home", // Додаємо мітки для меню прямо в об'єкт
        icon: <HomeOutlined />,
        element: <Home />,
      },
      {
        path: COINS,
        label: "Coins",
        icon: <TableOutlined />,
        element: <CoinsPage />,
      },
      {
        path: COINS_PAGED,
        label: "Coins Paged",
        icon: <TableOutlined />,
        element: <CoinsPagedPage />,
      },
      {
        path: CHART,
        label: "Chart",
        icon: <BarChartOutlined />,
        element: <ChartPage />,
      },
      {
        path: WIZARD,
        label: "Wizard",
        icon: <FormOutlined />,
        element: <WizardPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={HOME} replace />,
  },
];

export default createBrowserRouter(routes);
