import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import styles from "./menuMoreListsPage.module.css";
import { getMenuConfig } from "./getMenuConfig";

import { getPostsByCategory } from "../../shared/apis/posts";
import { keys } from "../../shared/query/keys";

export const MenuMoreListsPage = () => {
  const { category } = useLoaderData();

  const {
    data: posts,
    isLoading,
    // isError,
    // error
  } = useQuery({
    queryKey: keys.posts.category(category),
    queryFn: () => getPostsByCategory(category),
    enabled: !!category 
  });

  if (!posts) return <p>포스트를 찾을 수 없습니다</p>;
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
