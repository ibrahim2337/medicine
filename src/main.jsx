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
import AllProduct from "./pages/AllProduct/AllProduct.jsx";
import MenProduct from "./pages/MenProduct/MenProduct.jsx";
import WomenProduct from "./pages/WomenProduct/WomenProduct.jsx";
import KidsProduct from "./pages/KidsProduct/KidsProduct.jsx";
import WinterCollection from "./pages/WinterCollection/WinterCollection.jsx";
import Accessories from "./pages/Accessories/Accessories.jsx";

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
        path: "/all-product",
        element:<AllProduct /> ,
      },
      {
        path: "/men-product",
        element:<MenProduct /> ,
      },
      {
        path: "/women-product",
        element:<WomenProduct /> ,
      },
      {
        path: "/kids-product",
        element:<KidsProduct /> ,
      },
      {
        path: "/WinterCollection",
        element:<WinterCollection /> ,
      },
      {
        path: "/accessories",
        element:<Accessories /> ,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
