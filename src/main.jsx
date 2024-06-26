import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import SharedState from "./context/sharedState.jsx";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from 'react-toastify';
import appRouter from "./services/appRouter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster />
    <ToastContainer />
    <SharedState>
      <RouterProvider router={appRouter}/>
    </SharedState>
  </React.StrictMode>
);
