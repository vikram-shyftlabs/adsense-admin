import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Dashboard from "./pages/dashboard/dashboard.container.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Campaign from "./pages/create-campaign/create-campaign.component.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/campaigns",
    element: <Campaign />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
