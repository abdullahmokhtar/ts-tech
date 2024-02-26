import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EnglishPage from "./Pages/EnglishPage";
import GermanyPage from "./Pages/GermanyPage";
import SpainPage from "./Pages/SpainPage";
import FrancePage from "./Pages/FrancePage";

const router = createBrowserRouter([
  { path: "", element: <EnglishPage /> },
  { path: "/germany", element: <GermanyPage /> },
  { path: "/french", element: <FrancePage /> },
  { path: "/spanish", element: <SpainPage /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
