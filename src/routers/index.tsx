import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from "react-router-dom";

import "../index.css";
import { Layout } from "../shared/Layout";
import {
  Home,
  EditPosts,
  Search,
  Write,
  MenuMoreListsPage,
  Detail,
  AboutMe
} from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
        path: "/aboutMe",
        element: <AboutMe />
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
        path: "/edit/:category/:id",
        element: <EditPosts />
      },
      {
        // 카테고리 별 리스트 페이지
        path: "/menu/:category",
        element: <MenuMoreListsPage />
      },
      {
        // 카테고리 별 상세 페이지
        path: "/detail/:category/:id",
        element: <Detail />
      }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
