import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./services/routes.jsx";
import SharedState from "./context/sharedState.jsx";
import { Toaster } from "react-hot-toast";
import WebMenu from "./components/menu/WebMenu.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster />
    <SharedState>
      <WebMenu />
      <RouterProvider router={router} />
    </SharedState>
  </React.StrictMode>
);
