import { useLoaderData } from "react-router-dom";

import styles from "./menuMoreListsPage.module.css";
import { getMenuConfig } from "./getMenuConfig";
import { useEffect, useState } from "react";
import { Post } from "../../shared/types/posts";
import { getPostsByCategory } from "../../shared/apis/posts";

export const MenuMoreListsPage = () => {
  const { category } = useLoaderData();
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!category) return alert("잘못된 요청입니다");
      setIsLoading(true);
      const data = await getPostsByCategory(category);
      setPosts(data);
      setIsLoading(false);
    };
    fetchData();
  }, [category]);

  const { title, component, desc } = getMenuConfig({ category, posts });

  if (isLoading) return <p>로딩중</p>;

  return (
    <main className={styles.container}>
      <header className={styles.titleContainer}>
        <h1 className="title">{title}</h1>
        <p>{desc}</p>
      </header>

      {/* posts list */}
      {component}
    </main>
  );
};
