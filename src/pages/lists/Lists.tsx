import { useParams } from "react-router-dom";
import { PostLists } from "../../shared/components/postLists/PostLists";

export const Lists = () => {
  const { keyword } = useParams<{ keyword: string }>();
  console.log(keyword);

  return (
    <div>
      <PostLists />
    </div>
  );
};
