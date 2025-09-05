/** v2: 라우트 Param/Query를 Zod 스키마로 명시. v1은 컴포넌트 내부 임시 처리/미검증. */
import { z } from "zod";
import { CATEGORIES } from "../shared/types/category";

export const IdSchema = z
  .string()
  .regex(/^[A-Za-z0-9_-]{20,40}$/, "Invalid id");

// /detail/:id 
export const ParamDetailSchema = z.object({
  id: IdSchema
});

// /detail/:id/edit 
export const ParamEditSchema = z.object({
  id: IdSchema
});

// /menu/:category
export const ParamMenuSchema = z.object({
  category:z.enum(CATEGORIES)
})

// /mypage/:userId
export const ParamMypageSchema = z.object({
  userId:IdSchema
})

// 