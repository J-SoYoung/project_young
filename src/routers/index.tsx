import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../index.css";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/home",
        element: <Home />
      },
     
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
