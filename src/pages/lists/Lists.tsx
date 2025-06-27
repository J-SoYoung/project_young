import { useParams } from "react-router-dom";

export const Lists = () => {
  const { keyword } = useParams<{ keyword: string }>();
  console.log(keyword);

  return <></>;
};
