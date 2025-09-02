import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from "react-router-dom";

import "../index.css";
import { Layout } from "../shared/Layout";
import {
  Home,
  Search,
  Write,
  MenuMoreListsPage,
  Detail,
  EditDetail,
  AboutMe,
  Mypage
} from "../pages";
import { ROUTES } from "./paths";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to={ROUTES.HOME} replace /> },
      { path: ROUTES.ABOUT, element: <AboutMe /> },
      { path: ROUTES.DETAIL, element: <Detail /> },
      { path: ROUTES.DETAIL_EDIT, element: <EditDetail /> },
      { path: ROUTES.HOME, element: <Home /> },
      { path: ROUTES.MENU, element: <MenuMoreListsPage /> },
      { path: ROUTES.MYPAGE, element: <Mypage /> },
      { path: ROUTES.SEARCH, element: <Search /> },
      { path: ROUTES.WRITE, element: <Write /> },
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
