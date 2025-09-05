export const notFound = () => {
  throw new Response("페이지를 찾을 수 없습니다", { status: 404 });
};

export const mustParse = <T>(
  schema: { parse:(v:unknown) => T }, 
  value : unknown
) => {
  try {
    return schema.parse(value);
  } catch {
    notFound();
  }
};
