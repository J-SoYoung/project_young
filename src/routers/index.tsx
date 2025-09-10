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
  Mypage,
  NotFound
} from "../pages";
import { ROUTES } from "./paths";
import {
  ParamDetailSchema,
  ParamMenuSchema,
  ParamMypageSchema,
  QuerySearchSchema
} from "./schemas";
import { mustParse } from "./guard";

const loadDetail = ({ params }: { params: unknown }) => {
  mustParse(ParamDetailSchema, params);
};
const loadDetailEdit = ({ params }: { params: unknown }) => {
  mustParse(ParamDetailSchema, params);
};
const loadMenuMore = ({ params }: { params: unknown }) => {
  mustParse(ParamMenuSchema, params);
};
const loadMypage = ({ params }: { params: unknown }) => {
  mustParse(ParamMypageSchema, params);
};
const loadSearch = ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const data = QuerySearchSchema.parse(Object.fromEntries(url.searchParams));

  const q = data.q ?? "";
  return { q };
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Navigate to={ROUTES.HOME} replace /> },
      { path: ROUTES.ABOUT, element: <AboutMe /> },
      { path: ROUTES.DETAIL, loader: loadDetail, element: <Detail /> },
      {
        path: ROUTES.DETAIL_EDIT,
        loader: loadDetailEdit,
        element: <EditDetail />
      },
      { path: ROUTES.HOME, element: <Home /> },
      {
        path: ROUTES.MENU,
        loader: loadMenuMore,
        element: <MenuMoreListsPage />
      },
      { path: ROUTES.MYPAGE, loader: loadMypage, element: <Mypage /> },
      { path: ROUTES.SEARCH, loader: loadSearch, element: <Search /> },
      { path: ROUTES.WRITE, element: <Write /> },
      { path: "*", element: <NotFound /> }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
