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
  TechNotesDetail,
  ThoughtsDetail,
  DeepDivesDetail,
  PortfolioDetail,
  MenuMoreListsPage
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
        path: "/search",
        element: <Search />
      },
      {
        path: "/write",
        element: <Write />
      },
      {
        path: "/edit/:id",
        element: <EditPosts />
      },
      { // 카테고리 별 리스트 페이지 
        path: "/menu/:category",
        element: <MenuMoreListsPage />
      },
    
      {
        path: "/tech-notes/:id",
        element: <TechNotesDetail />
      },
      {
        path: "/thoughts/:id",
        element: <ThoughtsDetail />
      },
      {
        path: "/deep-dives/:id",
        element: <DeepDivesDetail />
      },
      {
        path: "/portfolio/:id",
        element: <PortfolioDetail />
      }
      // {
      //   path: "/:menu/:id",
      //   element: <Posts />
      // }
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
