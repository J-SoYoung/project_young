/** v2: 라우트 Param/Query를 Zod 스키마로 명시. v1은 컴포넌트 내부 임시 처리/미검증. */
import { z } from "zod";
import { CATEGORIES } from "../shared/types/category";

export const IdSchema = z
  .string()
  .regex(/^[A-Za-z0-9_-]{20,40}$/, "Invalid id");

// /detail/:id , /detail/:id/edit
export const ParamDetailSchema = z.object({
  id: IdSchema
});

// /menu/:category
export const ParamMenuSchema = z.object({
  category: z.enum(CATEGORIES)
});

// /mypage/:userId
export const ParamMypageSchema = z.object({
  userId: IdSchema
});

// /search?q=...
export const QuerySearchSchema = z.object({
  q: z
    .string()
    .min(1, "검색어는 최소 1글자 이상이어야 합니다")
    .max(50, "검색어는 최대 50글자 이내여야 합니다")
    .optional()
});

// QuerySearch 타입 자동 생성
export type QuerySearch = z.infer<typeof QuerySearchSchema>;
