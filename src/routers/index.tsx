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
  Portfolio,
  TechNotes,
  DeepDives,
  Thoughts,
  TechNotesDetail,
  ThoughtsDetail,
  DeepDivesDetail,
  PortfolioDetail
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
      {
        path: "/portfolio",
        element: <Portfolio />
      },
      {
        path: "/notes",
        element: <TechNotes />
      },
      {
        path: "/deepdives",
        element: <DeepDives />
      },
      {
        path: "/thoughts",
        element: <Thoughts />
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
