// v2: QueryClient 인스턴스와 전역 옵션을 한 곳에 모음
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, //쿼리 실패 시, 재시도 횟수
      refetchOnWindowFocus: false, // 데이터를 자동으로 다시 가져올지 여부
      staleTime: 30_000, // 30s : 캐시 데이터가 신선하 다고 여기는 시간(ms).
      gcTime: 300_000,   // 5m : 데이터 미사용시 캐시에서 삭제하기 위해 기다리는 시간.
    },
    mutations: { retry: 0 },
  },
});
