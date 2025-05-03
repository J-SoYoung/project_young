import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from "react-router-dom";
import "../index.css";
import { Lists, Posts, Search, Write, Detail } from "../pages";
import { GlobalLayout } from "../shared/Layout/GlobalLayout";
import { Home } from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      {
        index: true, // path 없이 루트 경로를 의미
        element: <Navigate to="/home" replace />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/detail/:id",
        element: <Detail />
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
