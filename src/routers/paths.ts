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
  about: () => ROUTES.ABOUT,
  detail: ({ id }: { id: string }) => `/detail/${id}`,
  edit: ({ id }: { id: string }) => `/detail/${id}/edit`,
  home: () => ROUTES.HOME,
  menu: ({ category }: { category: Category }) => `/menu/${category}`,
  mypage: ({ userId }: { userId: string }) => `/mypage/${userId}`,
  // 검색 query는 선택적 파라미터
  search: ({ q }: { q?: string } = {}) => {
    if (!q || q.trim().length === 0) {
      // 검색어 없으면 전체 리스트 
      return ROUTES.SEARCH;
    }
    const encoded = encodeURIComponent(q.trim());
    return `${ROUTES.SEARCH}?q=${encoded}`;
  },
  write: () => ROUTES.WRITE
};
