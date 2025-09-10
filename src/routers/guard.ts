export const notFound = () => {
  throw new Response("페이지를 찾을 수 없습니다", { status: 404 });
};

export const mustParse = <T>(
  schema: { parse:(v:unknown) => T }, 
  value : unknown
) => {
  try {
    // .parse() : zod검증메서드
    // value가 스키마 규칙을 지키면 통과, 아니면 에러 throw
    return schema.parse(value);
  } catch {
    notFound();
  }
};
