import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Dashboard from "./pages/dashboard/dashboard.container.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Campaign from "./pages/create-campaign/create-campaign.component.tsx";
import SidebarComponent from "./components/sidebar/sidebar.component.jsx";
import Login from "./pages/accout/account.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";
import Account from "./pages/account/account.component.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SidebarComponent component={Dashboard} />,
  },
  {
    path: "/campaigns",
    element: <SidebarComponent component={Campaign} />,
  },
  {
    path: "/account",
    element:  <SidebarComponent component={Account} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId="905703355143-hbpbqk2bmpnjocs9j3h4r4537qmru1ma.apps.googleusercontent.com">
    <Provider store={store}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Provider>
  </GoogleOAuthProvider>
);
