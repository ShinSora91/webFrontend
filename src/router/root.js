import { lazy, Suspense } from "react";
import todoRouter from "./todoRouter";
import productRouter from "./productRouter";
import addressRouter from "./addressRouter";

const { createBrowserRouter } = require("react-router-dom");

const Loading = () => <div>Loading...</div>;
const Main = lazy(() => import("../pages/MainPage"));
const About = lazy(() => import("../pages/AboutPage"));
const TodoIndex = lazy(() => import("../pages/todo/IndexPage"));
const ProductsIndex = lazy(() => import("../pages/product/IndexPage"));
const AddressIndex = lazy(() => import("../pages/address/IndexPage"));

const root = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "/todo",
    element: (
      <Suspense fallback={<Loading />}>
        <TodoIndex />
      </Suspense>
    ),
    children: todoRouter(),
  },
  {
    path: "/product",
    element: (
      <Suspense fallback={<Loading />}>
        <ProductsIndex />
      </Suspense>
    ),
    children: productRouter(),
  },
  {
    path: "/address",
    element: (
      <Suspense fallback={<Loading />}>
        <AddressIndex />
      </Suspense>
    ),
    children: addressRouter(),
  },
  // {
  //   path: "/score",
  //   children: scoreRouter(),
  // },
]);

export default root;
