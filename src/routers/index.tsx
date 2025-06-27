import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from "react-router-dom";

import "../index.css";
// import { GlobalLayout } from "../shared/Layout/GlobalLayout";
import { Layout } from "../shared/Layout";
import {
  Home,
  EditPosts,
  // Lists,
  Posts,
  Search,
  Write,
  Portfolio,
  Notes,
  DeepDives,
  Thoughts,
} from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <GlobalLayout />,
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
        element: <Notes />
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
        path: "/:menu/:id",
        element: <Posts />
      }
      // {
      //   path: "/list/:keyword",
      //   element: <Lists />
      // },
      // {
      //   path: "/postTags/:keyword",
      //   element: <Lists />
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
