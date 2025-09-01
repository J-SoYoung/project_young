// 문자열 하드코딩 경로를 상수/빌더 함수로 통일
// navigate, link, 라우터 등록 시 모두 참조 가능

import { Category } from "../shared/types/posts";

export const ROUTES = {
  ABOUT: "/aboutMe",
  DETAIL: "/detail/:id",
  DETAIL_EDIT: "/detail/:id/edit",
  HOME: "/home",
  MENU: "/menu/:category",
  MYPAGE: "/mypage/:userId",
  SEARCH: "/search", 
  WRITE: "/write"
} as const;

export const paths = {
  about: () => ROUTES.HOME,
  detail: ({ id }: { id: string }) => `/detail/${id}`,
  edit: ({ id }: { id: string }) => `/detail/${id}/edit`,
  home: () => ROUTES.HOME,
  menu: ({ category }: { category: Category }) => `/menu/${category}`,
  mypage: ({ userId }: { userId: string }) => `/mypage/${userId}`,
  search: () => ROUTES.SEARCH, // todo search
  write: () => ROUTES.WRITE
};
