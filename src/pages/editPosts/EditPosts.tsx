import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../../shared/apis/posts";
import { Post } from "../../shared/types/posts";
import { WriteForm } from "../../shared/components";

export const EditPosts = () => {
  const { category, id } = useParams<{ category: string; id: string }>();

  const [initialData, setInitialData] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!category || !id) return alert("잘못된 요청입니다");
      const data = await getPostById(category, id);
      setInitialData(data);
      setIsLoading(false);
    };
    fetchPost();
  }, [category, id]);

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
