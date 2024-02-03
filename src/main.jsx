import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import LogInPage from "./pages/LogInPage/LogInPage.jsx";
import RegisterPage from "./pages/ErrorPage/RegisterPage/RegisterPage.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import SingleProduct from "./pages/SingleProduct/SingleProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LogInPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product",
        element: <SingleProduct />,
      },
      {
        path: "/product",
        element: <SingleProduct />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
