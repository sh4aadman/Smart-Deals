import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout/MainLayout";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Login from "../features/auth/Login/Login";
import Register from "../features/auth/Register/Register";
import Home from "../pages/Home/Home";
import AllProducts from "../pages/All Products/AllProducts";
import MyProducts from "../pages/My Products/MyProducts";
import MyBids from "../pages/My Bids/MyBids";
import CreateProduct from "../pages/Create Product/CreateProduct";
import ProductDetails from "../features/products/components/ProductDetails";
import ProductLayout from "../layouts/ProductLayout/ProductLayout";
import Loading from "../components/ui/Loading/Loading";
import PrivateRoute from "./Private Route/PrivateRoute";

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
        path: "products",
        Component: ProductLayout,
        children: [
          {
            index: true,
            Component: AllProducts,
          },
          {
            Component: PrivateRoute,
            children: [
              {
                path: ":id",
                loader: ({ params }) =>
                  fetch(`http://localhost:3000/products/${params.id}`),
                Component: ProductDetails,
                hydrateFallbackElement: <Loading />,
              },
            ],
          },
        ],
      },
      {
        Component: PrivateRoute,
        children: [
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
