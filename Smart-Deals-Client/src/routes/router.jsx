import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout/MainLayout";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Login from "../features/auth/Login/Login";
import Register from "../features/auth/Register/Register";
import Home from "../pages/Home/Home";
import AllProducts from "../pages/AllProducts/AllProducts";
import MyProducts from "../pages/MyProducts/MyProducts";
import MyBids from "../pages/MyBids/MyBids";
import CreateProduct from "../pages/CreateProduct/CreateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "all-products",
        Component: AllProducts,
      },
      {
        path: "my-products",
        Component: MyProducts,
      },
      {
        path: "my-bids",
        Component: MyBids,
      },
      {
        path: "create-product",
        Component: CreateProduct,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

export default router;
