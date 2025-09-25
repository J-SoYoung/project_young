import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getPostById } from "../../shared/apis/posts";
import { WriteForm } from "../../shared/components";
import { keys } from "../../shared/query/keys";

export const EditDetail = () => {
  const { id } = useLoaderData();
  const {
    data: initialData,
    isLoading
    // isError,
    // error
  } = useQuery({
    queryKey: keys.posts.editPost(id),
    queryFn: () => getPostById(id),
    enabled: !!id
  });

  if (isLoading) return <p> 로딩중 ... </p>;
  if (!initialData) return <p>포스트를 찾을 수 없습니다</p>;

  return (
    <main>
      <WriteForm
        mode={"edit"}
        title={"Edit Posts"}
        initialData={initialData}
        buttonText={"글 수정"}
      />
    </main>
  );
};
