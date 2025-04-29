import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../index.css";
import { Lists, Posts, Search, Write } from "../pages";
import { GlobalLayout } from "../shared/Layout/GlobalLayout";
import { Home } from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/post/:id",
        element: <Posts />
      },
      {
        path: "/search",
        element: <Search />
      },
      {
        path: "/write",
        element: <Write />
      },
      {
        path: "/list/:menu",
        element: <Lists />
      }
    ]
  }
]);

export default function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
