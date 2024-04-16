import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Dashboard from "./pages/dashboard/dashboard.container.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Campaign from "./pages/create-campaign/create-campaign.component.tsx";
import SidebarComponent from "./components/sidebar/sidebar.component.tsx";
import {Provider} from 'react-redux'
import store from './redux/store/store.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <SidebarComponent component={Dashboard}/>,
  },
  {
    path: "/campaigns",
    element: <SidebarComponent component={Campaign} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
  <React.StrictMode>    
    <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
);
