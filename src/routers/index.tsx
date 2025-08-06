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
import { useEffect } from "react";
import { getRedirectResult, onAuthStateChanged } from "firebase/auth";
import { auth } from "../shared/service/firebase";
import { AuthProvider } from "../shared/service/authProvider";

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
  useEffect(() => {
    const handleRedirectLogin = async () => {
      try {
        // Firebase Auth가 초기화 완료되었는지 확인
        onAuthStateChanged(auth, async (user) => {
          if (!user) {
            const result = await getRedirectResult(auth);
            if (result?.user) {
              console.log("redirect로그인성공", result.user);
              alert(`환영합니다!, ${result.user.displayName}`);
            } else {
              console.log("redirect결과없음");
            }
          } else {
            // 이미 로그인 된 상태
            console.log("로그인 된 사용자");
          }
        });
      } catch (error) {
        console.error("redirect 로그인 오류", error);
      }
    };

    handleRedirectLogin();
  }, []);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
